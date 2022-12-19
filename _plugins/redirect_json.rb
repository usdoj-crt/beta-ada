# Creates redirect pages given a redirects.json file.
# Redirects.json should have the format:
# {
#   "/source-url": "https://destination-url/",
#   ...
# }

module RedirectsJson
  class RedirectsJsonPage < Jekyll::Page
    # Use Jekyll's native absolute_url filter
    include Jekyll::Filters::URLFilters

    def initialize(site, from, to)
      from += '.html' unless from.end_with?('.html')

      @site = site
      @name = from
      process(@name)

      @data ||= {
        'sitemap' => false,
        'permalink' => from,
        'layout' => 'redirect',
        'redirect' => {
          'from' => from,
          'to'   => to,
        }
      }
    end

    def context
      JekyllRedirectFrom::Context.new(site)
    end
  end

  class RedirectsJsonPageGenerator < Jekyll::Generator
    def generate(site)
      site.pages += site.data['redirects'].map do |from, to|
        RedirectsJsonPage.new(site, from, to)
      end
    end
  end
end
