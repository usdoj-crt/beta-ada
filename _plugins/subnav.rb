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
          content.css('h2', 'p').each do |heading|
            if heading.name == 'h2'
              puts 'Heading'
              doc.data["subnav"] << { "title" => heading.text, "url" => [doc.url, heading['id']].join("#") }
            elsif heading.name == 'p' and heading.text.include? "expand-heading="
              puts 'Paragraph' 
              title = heading.text[heading.text=~/=/..-3].gsub("=", "").strip
              title = title[1..-2]
              doc.data["subnav"] << { "title" => title, "url" => [doc.url, title.downcase.gsub(" ", "-")].join("#") }
            end
          end
        end
      end
    end
 
    site.pages.each do |page|
      if page.ext == ".md"
        doc = Nokogiri::HTML(parser.convert(page['content']))
        page.data["subnav"] = []
        doc.css('h2', 'p').each do |heading|
          if heading.name == 'h2'
            puts 'Heading'
            page.data["subnav"] << { "title" => heading.text, "url" => [page.url, heading['id']].join("#") }
          elsif heading.name == 'p' and heading.text.include? "expand-heading="
            puts 'Paragraph'
            title = heading.text[heading.text=~/=/..-3].gsub("=", "").strip
            title = title[1..-2]
            page.data["subnav"] << { "title" => title, "url" => [page.url, title.downcase.gsub(" ", "-")].join("#") }
          end
        end
      end
    end
  end
end

