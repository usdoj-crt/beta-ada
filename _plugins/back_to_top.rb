require "nokogiri"

Jekyll::Hooks.register :pages, :post_convert do |page|
    if (page.name == '1991-design-standards.md' || page.name == '2010-stds.md')
        html = '<a href="#top"><p>Back to top</p></a>'
        doc = Nokogiri::HTML.parse(page.content)
        doc.css('h2, h3, h4').each do |heading|
            heading.add_child(html)
        end
        page.content = doc.inner_html
    end
end



