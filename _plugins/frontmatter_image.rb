# frozen_string_literal: true

module Jekyll
  class FrontmatterImage
    def self.setup
      Jekyll::Hooks.register :pages, :pre_render do |document|
        run_with(document)
      end
    end

    def self.run_with(document)
      site = document.site
      hash = document["image"]

      update_frontmatter(site.sprockets, hash)
    end

    def self.update_frontmatter(sprockets, hash)
      return unless hash.is_a? Hash
      return if hash["asset"].nil?

      hash["path"] ||= digest_path(sprockets, hash["asset"])
    end

    def self.digest_path(sprockets, name)
      asset = sprockets.find_asset!(name)
      sprockets.manifest.compile(asset.logical_path)

      sprockets.prefix_url(asset.digest_path)
    end
  end
end

Jekyll::FrontmatterImage.setup
