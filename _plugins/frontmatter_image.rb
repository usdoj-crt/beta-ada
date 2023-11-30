# frozen_string_literal: true

module Jekyll
  class FrontmatterImage
    def self.setup
      Jekyll::Hooks.register :pages, :pre_render do |document|
        run_with(document)
      end
    end

    def self.run_with(document)
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> e75e6a3 (commit)
      hash = document["image"]

      update_frontmatter(hash)
    end

    def self.update_frontmatter(hash)
      return unless hash.is_a? Hash
      return if hash["asset"].nil?

      hash["path"] ||= '/assets/images/' + hash["asset"]
<<<<<<< HEAD
=======
=======
=======
>>>>>>> a0b0a9d (commit)
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
<<<<<<< HEAD
>>>>>>> a0b0a9d (commit)
=======
>>>>>>> a0b0a9d (commit)
>>>>>>> e75e6a3 (commit)
    end
  end
end

Jekyll::FrontmatterImage.setup
