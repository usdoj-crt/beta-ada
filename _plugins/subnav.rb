require "nokogiri"

class Subnav < Jekyll::Generator
  def generate(site)

    parser = Jekyll::Converters::Markdown.new(site.config)

    site.collections.each do |collection|
      docs = collection[1].docs
      if docs.length > 0
        docs.each do |doc|
          content = Nokogiri::HTML(parser.convert(doc.content))
          doc.data["subnav"] = []
          content.css('h2').each do |heading|
            doc.data["subnav"] << { "title" => heading.text, "url" => [doc.url, heading['id']].join("#") }
          end
        end
      end
    end

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
