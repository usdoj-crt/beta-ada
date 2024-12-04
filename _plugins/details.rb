module Jekyll
  class DetailsTag < Liquid::Block

    @@ids = Hash.new(0)

    def initialize(tag_name, block_options, liquid_options)
      super
      @expand = ''
      @options = block_options.strip.split(' ')
      if @options[-1,1] == ['expandable']
        @options.delete_at(-1)
        @expand = 'expand'
      end
      @title = @options.join(" ")

      @id = @options.join("-").downcase
      @@ids[@id] += 1
      @id += "-#{@@ids[@id]}" if @@ids[@id] > 1
    end

    def render(context)
      content = super
      output = <<~EOS
        <details id="#{@id}" class="#{@expand}" data-detail-open="false">
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
