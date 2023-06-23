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
    # Make sure to run this plugin _before_ other redirect generators, as the
    # manual markdown redirects should take precedence (by overwriting) anything
    # this produces.
    priority :highest

    def generate(site)
      # Don't run this on development for performance reasons:
      if Jekyll.env == 'development'
        return
      end

      # Merging in this order will overwrite entries in generated_redirects
      # with entries from manual_redirects
      #
      # This is useful if we _don't_ want to redirect to what's generated.
      redirects = site.data['generated_redirects'].merge(site.data['manual_redirects'])

      ignoring_excludes = redirects.reject do |_, to|
        to.nil?
      end

      ignoring_nonhtml = ignoring_excludes.select do |_, to|
        # Non-html redirects must be handled in JavaScript.
        /\.html?$/.match?(to)
      end

      site.pages += ignoring_nonhtml.map do |from, to|
        RedirectsJsonPage.new(site, from, to)
      end
    end
  end
end
