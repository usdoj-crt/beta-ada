require "nokogiri"

class BackToTop < Jekyll::Generator
  def generate(site)

    @site = site
    @parser = Jekyll::Converters::Markdown.new(@site.config)

    # To Do:
    # 1. Create variable that stores the HTML for the back to top button
    # 2. Grab only the pages we want this on: Design Standards - DONE
    # 3. Find each H2, H3, H4 and H5 element
    # 4. Append the HTML variable to each heading defined above.

    designstandards1991 = 'ADA Standards for Accessible Design Title III Regulation 28 CFR Part 36 (1991)'
    designstandards2010 = '2010 ADA Standards for Accessible Design'

    def self.addLinks(content)
        html = '<p>Back to top</p>'
        doc = Nokogiri::HTML(@parser.convert(content))
        doc.css('h2, h3, h4').each do |heading|
            heading.add_next_sibling '<p>Back to top</p>'
        end
        return doc
    end

    site.pages.each do |page|
        if page.ext == ".md" && (page.data['title'] == designstandards1991 || page.data['title'] == designstandards2010)
            page.content = addLinks(page.content)
        end
    end
end
end

