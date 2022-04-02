module Jekyll
  class DetailsTag < Liquid::Block
    def initialize(tag_name, title, liquid_options)
      super
      @title = title
    end

    def render(context)
      content = super

      output = <<~EOS
        <details data-detail-open="false">
        <summary markdown="0">
          <div>
            <span class="pa11y-skip">#{@title}</span>
          </div>
        </summary>
        <div>
        #{content}
        </div>
        </details>
      EOS

      output
    end
  end
end

Liquid::Template.register_tag('details', Jekyll::DetailsTag)
