require 'yaml'

module Jekyll
  # Makes the site variable available to Javascript via a script tag.
  # Meant to be used in the admin code - this includes quite a bit of data that
  # won't be performant or necessary for public use.

  class SiteJsonTag < Liquid::Tag
    def render(context)
      site = YAML.load_file('_config.yml')
      data = context.registers[:site].to_liquid[:site]['data'].to_h
      site['data'] = data

      <<~EOS
        <script>
          window.jekyllSite = #{site.to_json};
        </script>
      EOS
    end
  end
end

Liquid::Template.register_tag('site_json', Jekyll::SiteJsonTag)
