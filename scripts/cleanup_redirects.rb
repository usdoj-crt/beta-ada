# This script helps with cleaning up manual markdown redirects that could be
# better represented with json redirection.
#
# Markdown redirects can be classified according one of a few scenarios:
# - Non-simple (we ignore these)
# - Not present at all in the scripted redirects (absent)
# - Present, but with a different destination (conflicting)
# - Present, and with the same destination (matching)
#
# Each of these cases needs their own handling:
# - Absent entries should be added to manual redirects, if valid.
#   - Might not be valid. We'll warn if they're not.
# - Conflicts (the json is pointing to a different place than the markdown):
#   - Might not be valid. We'll warn if they're not.
#   - Otherwise, need to be explicitly called out; we can't guess at an action.
# - Present, and matching, requires no action.
require 'csv'
require 'fileutils'
require 'json'
require 'optparse'
require 'yaml'
require 'net/http'

# If more or less than these keys are present, we don't consider this a simple
# redirect, because the redirect_json plugin won't make the exact same behavior.
SIMPLE_KEYS = %w(redirect_from redirect_to sitemap).sort.freeze

def parse_options
  options = {}

  OptionParser.new do |opts|
    opts.banner = 'Usage: example.rb [options]'

    opts.on('-c', '--check-validity', 'Check if the redirect_to url exists on prod') do |c|
      options[:check_validity] = c
    end

    opts.on('-d', '--delete', 'Remove any redundant markdown redirects') do |d|
      options[:delete] = d
    end

    opts.on('-h', '--help', 'Prints this help') do
      puts opts
      exit
    end
  end.parse!

  options[:delete] ||= false
  options[:check_validity] ||= false

  options
end

@options = parse_options

def load_scripted_redirects
  generated = JSON.parse(File.read('./_data/generated_redirects.json'))
  manual = JSON.parse(File.read('./_data/manual_redirects.json'))
  generated.merge(manual)
end

# Gets a collection of redirects represented by the given markdown file.
def parse_redirect(redirect_path)
  raw = File.read(redirect_path).strip
  # A redirect with content after the frontmatter is not "simple".
  return unless raw.start_with?('---') && raw.end_with?('---')

  frontmatter = YAML.load(raw)

  return unless frontmatter.keys.sort == SIMPLE_KEYS

  # Since the json plugin excludes things from the sitemap, we need to make sure
  # the simple ones do, as well.
  return if frontmatter['sitemap']

  redirect_from = frontmatter['redirect_from']
  redirect_from = [redirect_from] unless redirect_from.is_a?(Array)
  redirect_to = frontmatter['redirect_to']
  redirect_to = [redirect_to] unless redirect_to.is_a?(Array)

  redirect_from.product(redirect_to).to_h
end

def determine_blockers(paths)
  scripted = load_scripted_redirects
  paths.flat_map do |redirect_path|
    redirects = parse_redirect(redirect_path)
    categorized = categorize_redirects(redirects, scripted)
    (
      handle_absent(categorized[:absent], scripted, redirect_path) +
      handle_conflicts(categorized[:conflicts], scripted, redirect_path)
    )
  end
end

def check_validity(conflicts)
  return conflicts unless @options[:check_validity]

  conflicts.map do |conflict|
    to = conflict[:md]
    url = /^http/.match(to) ? to : File.join('https://ada.gov', to)

    uri = URI.parse(url.gsub(' ', '%20'))
    request = Net::HTTP.new(uri.host, uri.port)
    request.use_ssl = true
    begin
      response = request.request_head(uri.path)
      code = response.code
      puts "Validated #{url} as #{code}"
    rescue
      code = -1
    end

    conflict.merge({status: code})
  end
end

def handle_absent(redirects, scripted, path)
  return [] if redirects.empty?

  absent = redirects.map do |from, to|
    { reason: 'absent', file: path, md: to, json: scripted[from] }
  end

  check_validity(absent)
end

def equal_ignoring_htm?(a, b)
  a_extless = a.gsub(/\.html?$/, '')
  b_extless = b.gsub(/\.html?$/, '')
  return a_extless == b_extless
end

def handle_conflicts(redirects, scripted, path)
  return [] if redirects.empty?

  conflicts = redirects.map do |from, to|
    { reason: 'conflict', file: path, md: to, json: scripted[from] }
  end

  conflicts = conflicts.select do |conflict|
    next false if conflict[:json].downcase == conflict[:md].downcase

    next false if equal_ignoring_htm?(conflict[:json], conflict[:md])

    true
  end

  check_validity(conflicts)
end

def categorize_redirects(redirects, scripted)
  present, absent = redirects.partition do |from, _|
    scripted.key?(from)
  end

  matches, conflicts = present.partition do |from, to|
    scripted[from] == to
  end

  {absent: absent.to_h, matches: matches.to_h, conflicts: conflicts.to_h}
end

def main
  paths = Dir.glob('./_pages/redirects/**/*.md')

  blockers = determine_blockers(paths)

  clear = paths.select do |path|
    blockers.none? { |b| b[:file] == path }
  end

  if @options[:delete]
    clear.each { |c| File.unlink(c) }
    puts "Deleted #{clear.length} redundant markdown files."
  else
    CSV.open('redundant.csv', 'wb', {write_headers: true, headers: ['filename']} ) do |csv|
      clear.each { |c| csv << [c] }
    end
    puts "#{clear.length} files are ready to be deleted; see ./redundant.csv for a full list, and re-run with --delete to remove them."
  end

  return unless blockers;

  puts "Found #{blockers.length} conflicting or missing redirects. See ./blockers.csv for a full list."
  CSV.open('blockers.csv', 'wb', {write_headers: true,headers: blockers.first.keys} ) do |csv|
    blockers.sort_by{ |b| b[:reason] }.each do |hash|
      csv << hash
    end
  end
end

main
