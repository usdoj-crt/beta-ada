require "nokogiri"

class Subnav < Jekyll::Generator
  def generate(site)
    parser = Jekyll::Converters::Markdown.new(site.config)

    site.pages.each do |page|
      if page.ext == ".md"
        context = {
          'site' => site
          }
        template = Liquid::Template.parse(page['content'])
        html = template.render(context)
        puts html
        # page.data["subnav"] = []
        # doc.css('h2').each do |heading|
        #   page.data["subnav"] << {
        #     "title" => heading.text, "url" => [page.url, heading['id']].join("#")
        #   }
        # end
      end
    end
  end
end
