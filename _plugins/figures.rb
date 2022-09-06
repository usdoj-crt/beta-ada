module Jekyll
    class FigureTag < Liquid::Block
      def initialize(tag_name, block_options, liquid_options)
        super
        @figureID = "#{block_options.downcase.strip.gsub(/\W/,'')}"
        @title = block_options
      end

      def render(context)
        context.stack do
          context["figureID"] = @figureID
          @content = super
        end
        output = <<~EOS
            <figure id=#{@figureID} markdown=0 >
                <strong>#{@title}</strong><br/>
                #{@content}
            </figure>
        EOS

        output
      end
    end

    class FigCaptionTag < Liquid::Block
      def initialize(tag_name, block_options, liquid_options)
        super
      end

      def render(context)
        context.stack do
          @content = super
        end
        output = <<~EOS
          <figcaption>
          #{@content}
          </figcaption>
        EOS

        output
      end
    end

  end

  Liquid::Template.register_tag('figure', Jekyll::FigureTag)
  Liquid::Template.register_tag('figcaption', Jekyll::FigCaptionTag)
