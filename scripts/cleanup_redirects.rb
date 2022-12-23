require 'json'
require 'yaml'

# If more or less than these keys are present, we don't consider this a simple
# redirect, because the redirect_json plugin won't make the exact same behavior.
SIMPLE_KEYS = %w(redirect_from redirect_to sitemap).sort.freeze

def load_scripted_redirects
  generated = JSON.parse(File.read('./_data/generated_redirects.json'))
  manual = JSON.parse(File.read('./_data/manual_redirects.json'))
  generated.merge(manual)
end

# Gets a hash of redirects represented by the given markdown file.
def parse_redirect(redirect_path)
  raw = File.read(redirect_path).strip
  # A redirect with content after the frontmatter is not "simple".
  unless raw.start_with?('---') && raw.end_with?('---')
    puts 'Excluding non-simple redirect ' << redirect_path
    return
  end

  frontmatter = YAML.load(raw)

  return unless frontmatter.keys.sort == SIMPLE_KEYS

  # Since the json plugin excludes things from the sitemap, we need to make sure
  # the simple ones do, as well.
  return if frontmatter['sitemap']

  redirect_from = frontmatter['redirect_from']
  redirect_from = [redirect_from] unless redirect_from.is_a?(Array)
  redirect_to = frontmatter['redirect_to']
  redirect_to = [redirect_to] unless redirect_to.is_a?(Array)

  redirect_from.product(redirect_to)
end

def load_markdown_redirects
  Dir.glob('./_pages/redirects/**/*.md').flat_map do |redirect_path|
    parse_redirect(redirect_path)
  end.to_h
end

def find_missing_redirects
  scripted = load_scripted_redirects
  markdown = load_markdown_redirects

  markdown.reject do |from, to|
    scripted[from] == to
  end.to_h
end

puts find_missing_redirects
