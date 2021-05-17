module Jekyll
  class DetailsTag < Liquid::Block
    def initialize(tag_name, title, liquid_options)
      super
      @title = title
    end

    def render(context)
      content = super

      output = <<~EOS
        <details>
        <summary markdown="0">
          <div>
            <span>#{@title}</span>
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
