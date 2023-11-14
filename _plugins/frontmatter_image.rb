# frozen_string_literal: true

module Jekyll
  class FrontmatterImage
    def self.setup
      Jekyll::Hooks.register :pages, :pre_render do |document|
        run_with(document)
      end
    end

    def self.run_with(document)
      hash = document["image"]

      update_frontmatter(hash)
    end

    def self.update_frontmatter(hash)
      return unless hash.is_a? Hash
      return if hash["asset"].nil?

      hash["path"] ||= '/assets/images/' + hash["asset"]
    end
  end
end

Jekyll::FrontmatterImage.setup
