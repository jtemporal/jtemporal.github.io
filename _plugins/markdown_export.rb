# frozen_string_literal: true

# Writes a Markdown copy of each post, talk, and video next to its HTML URL
# so llms.txt can point at first-party files instead of GitHub raw.
#
# /the-slug/  ->  /the-slug.md
# /en/050/    ->  /en/050.md

module Jekyll
  class MarkdownExportGenerator < Generator
    safe true
    priority :low

    TYPES = %w[post talk video].freeze

    def generate(site)
      site.posts.docs.each do |post|
        next unless TYPES.include?(post.data['type'])

        relpath = MarkdownExportFile.relpath_for(post)
        next if relpath.nil?

        post.data['markdown_path'] = "/#{relpath}"
        site.static_files << MarkdownExportFile.new(site, post, relpath)
      end
    end
  end

  class MarkdownExportFile < StaticFile
    def self.relpath_for(post)
      segments = post.url.to_s.split('/').reject(&:empty?)
      return if segments.empty?

      "#{segments.join('/')}.md"
    end

    def initialize(site, post, relpath)
      @source_path = File.expand_path(post.path)
      dir = File.dirname(relpath)
      dir = '' if dir == '.'
      super(site, site.source, dir, File.basename(relpath))
    end

    def path
      @source_path
    end
  end
end
