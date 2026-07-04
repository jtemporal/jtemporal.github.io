# frozen_string_literal: true

# Use a committed PNG at images/og/<slug>.png as the social card when present.
# Generate locally with: node scripts/generate_og.mjs _posts/<file>.md

module OgImage
  def self.slug_for(post)
    File.basename(post.basename, '.md').sub(/\A\d{4}-\d{2}-\d{2}-/, '')
  end

  def self.register!
    Jekyll::Hooks.register :posts, :pre_render do |post|
      slug = slug_for(post)
      relative = File.join('images', 'og', "#{slug}.png")
      absolute = File.join(post.site.source, relative)

      next unless File.exist?(absolute)

      post.data['category_cover'] ||= post.data['image']
      post.data['og_image'] = "/#{relative.tr('\\', '/')}"
      post.data['image'] = post.data['og_image']
    end
  end
end

OgImage.register!