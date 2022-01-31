require "nokogiri"

module Jekyll
  module Tags
    class AccordionTag < Liquid::Block
      def initialize(tag_name, block_options, liquid_options)
        super
        @accordionID = "accordion-#{block_options.strip}"
      end

      def render(context)
        context.stack do
          context["accordionID"] = @accordionID
          context["collapsed_idx"] = 1
          @content = super
        end
        output = %(<div class="usa-accordion">#{@content}</div>)

        output
      end
    end

    class CollapseTag < Liquid::Block
      def initialize(tag_name, block_options, liquid_options)
        super
      end

      def render(context)
        accordionID = context["accordionID"]
        idx = context["collapsed_idx"]
        collapsedID = "#{accordionID}-#{idx}"

        # increment for the next collapsible
        context["collapsed_idx"] = idx + 1

        site = context.registers[:site]
        converter = site.find_converter_instance(::Jekyll::Converters::Markdown)
        content = Nokogiri::HTML::DocumentFragment.parse(converter.convert(super))

        heading = content.css('h1, h2, h3, h4, h5, h6').first
        heading.remove

        output = <<~EOS
          <h2 class="usa-accordion__heading" id="#{heading ? heading['id'] : ''}">
            <button class="usa-accordion__button pa11y-skip"
              aria-expanded="true"
              aria-controls="#{collapsedID}">
              #{heading ? heading.text : ""}
            </button>
          </h2>
          <div id="#{collapsedID}" class="usa-accordion__content usa-prose">
          #{content.to_html}
          </div>
        EOS

        output
      end
    end
  end
end

Liquid::Template.register_tag('accordion', Jekyll::Tags::AccordionTag)
Liquid::Template.register_tag('collapsible', Jekyll::Tags::CollapseTag)
