require "nokogiri"

class Subnav < Jekyll::Generator
  def generate(site)

    parser = Jekyll::Converters::Markdown.new(site.config)

    site.collections.each do |collection|
      docs = collection[1].docs
      if docs.length > 0
        docs.each do |doc|
          content = Nokogiri::HTML(parser.convert(doc.content))
          process_headings(doc, content)
        end
      end
    end

    site.pages.each do |page|
      if page.ext == ".md"
        doc = Nokogiri::HTML(parser.convert(page['content']))
        process_headings(page, doc)
      end
      end
  end

  # Step through each heading and append to the page data
  def process_headings(document, heading_list)
      document.data["subnav"] = []
      heading_list.css('*').each do |heading|
        if heading.name == 'h2' or (heading.name == 'p' and heading.text.include? "expand-heading=")
          document.data['subnav'] << to_nav_item(document, heading).tap do |item|
            item["children"] = subheadings(heading).map { |h3| to_nav_item(document, h3) }
          end
        end
      end
  end

  # Converts a heading into a hash of the info for a link
  def to_nav_item(page, heading)
    if heading.name == 'p'
      title = heading.text[heading.text=~/=/..-3].gsub("=", "").strip
      title = title[1..-2]
      return {
        "title" => title,
        "url" => [page.url,  title.downcase.gsub(" ", "-")].join("#")
      }

    else
      return {
        "title" => heading.text,
        "url" => [page.url,  heading['id']].join("#")
      }
    end
  end

  # Returns an enumerator of all H3s "belonging" to an H2
  def subheadings(el)
    Enumerator.new do |y|
      next_el = el.next_sibling
      while next_el && next_el.name != "h2"
        if next_el.name == "h3"
          y << next_el
        end
        next_el = next_el.next_sibling
      end
    end
  end
end

