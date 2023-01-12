require 'optparse'
require 'json'

FILE_PATTERNS = [
  '*.html',
  '*.htm',
  '*.DOCX',
  '*.GIF',
  '*.JPG',
  '*.ai',
  '*.bmp',
  '*.doc',
  '*.docx',
  '*.gif',
  '*.jpe',
  '*.jpeg',
  '*.jpg',
  '*.pdf',
  '*.png',
  '*.psd',
  '*.svg',
  '*.thmx',
  '*.tiff',
  '*.txt',
  '*.wpd',
].freeze

def parse_options
  options = {}

  OptionParser.new do |opts|
    opts.banner = 'Usage: example.rb [options]'

    opts.on('-sSRC', '--src=SRC', 'The directory to read from (default: ../ada)') do |src|
      options[:src] = src
    end

    opts.on('-dDEST', '--dest=DEST', 'Set an output file (default: .') do |dest|
      options[:dest] = dest
    end

    opts.on('-pPREFIX', '--prefix=PREFIX', 'Set a prefix (default: https://archive.ada.gov)') do |prefix|
      options[:prefix] = prefix
    end

    opts.on('-h', '--help', 'Prints this help') do
      puts opts
      exit
    end
  end.parse!

  options[:dest] ||= '.'
  options[:src] ||= '../ada'
  options[:prefix] ||= 'https://archive.ada.gov'

  options
end

def get_files_to_redirect(options)
  oldpwd = Dir.getwd
  Dir.chdir(options[:src])
  files = FILE_PATTERNS.flat_map do |pattern|
    Dir.glob('**/' << pattern)
  end
  Dir.chdir(oldpwd)
  files
end

def make_map(files, options)
  files.map do |file|
    ['/' << file, File.join(options[:prefix], file)]
  end.sort.to_h
end

def write_redirects(redirects, dest, options, prefix = '', suffix = '')
  redirects_json = JSON.pretty_generate(redirects)
  File.open(dest, 'w') do |file|
    file.write(prefix << redirects_json << suffix)
  end
  puts "Overwrote #{dest} with #{redirects.length} redirects to #{options[:prefix]} from #{options[:src]}"
end

def main
  options = parse_options
  dest = File.join(options[:dest], '_data/generated_redirects.json')

  files = get_files_to_redirect(options)
  redirects = make_map(files, options)
  write_redirects(redirects, dest, options)
end

main
