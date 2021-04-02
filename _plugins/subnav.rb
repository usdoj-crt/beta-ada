require "nokogiri"

class Subnav < Jekyll::Generator
  def generate(site)
    parser = Jekyll::Converters::Markdown.new(site.config)
    site.pages.each do |page|
      if page.ext == ".md"
        doc = Nokogiri::HTML(parser.convert(page['content']))
        page.data["subnav"] = []
        doc.css('h2').each do |heading|
          page.data["subnav"] << { "title" => heading.text, "url" => [page.url, heading['id']].join("#") }
        end
      end
    end
  end
end
