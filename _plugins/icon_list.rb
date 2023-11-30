module Jekyll
  module Tags
    class ListTag < Liquid::Block
      def initialize(tag_name, block_options, liquid_options)
        super
          @default_icon_type = block_options.strip
      end

      def render(context)
        context.stack do
          context["default_icon_type"] = @default_icon_type
          @content = super
        end

        output = %(<ul class="usa-icon-list margin-bottom-2">#{@content}</ul>)

        output
      end
    end

    class ListItemTag < Liquid::Block
      include Jekyll::Filters::URLFilters

      def initialize(tag_name, block_options, liquid_options)
        super
        @icon_type = block_options.strip
      end

      def render(context)
        @context = context
        icon_type = @icon_type.empty? ? context["default_icon_type"] : @icon_type
        site = context.registers[:site]
        converter = site.find_converter_instance(::Jekyll::Converters::Markdown)
        content = converter.convert(super)

        output = <<~EOS
          <li class="usa-icon-list__item">
            <div class="usa-icon-list__icon #{text_color(icon_type)}">
              <svg class="usa-icon" aria-hidden="true" role="img">
<<<<<<< HEAD
                <use xlink:href="#{relative_url("assets/images/uswds/sprite.svg")}##{icon_type}"></use>
=======
<<<<<<< HEAD
<<<<<<< HEAD
                <use xlink:href="#{relative_url("assets/images/uswds/sprite.svg")}##{icon_type}"></use>
=======
                <use xlink:href="#{relative_url("assets/img/sprite.svg")}##{icon_type}"></use>
>>>>>>> a0b0a9d (commit)
=======
                <use xlink:href="#{relative_url("assets/img/sprite.svg")}##{icon_type}"></use>
>>>>>>> a0b0a9d (commit)
>>>>>>> e75e6a3 (commit)
              </svg>
            </div>
            <div class="usa-icon-list__content">
              #{content}
            </div>
          </li>
        EOS

        output
      end

      private

      def text_color(icon)
        case icon
        when "check_circle"
          "text-green"
        when "cancel"
          "text-red"
        end
      end
    end
  end
end

Liquid::Template.register_tag('list', Jekyll::Tags::ListTag)
Liquid::Template.register_tag('list_item', Jekyll::Tags::ListItemTag)
