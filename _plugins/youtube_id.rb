# frozen_string_literal: true

# Extract a YouTube video ID from type:video posts so listing cards can
# use https://i.ytimg.com/vi/<id>/maxresdefault.jpg as the thumbnail.
# Honors an explicit `youtube_id` (or a `youtube` URL) in frontmatter.
# Runs on :site, :pre_render so listing pages see the ID.

module YoutubeId
  ID = /([A-Za-z0-9_-]{11})/
  PATTERNS = [
    %r{youtube\.com/embed/#{ID}},
    %r{youtube\.com/shorts/#{ID}},
    %r{youtu\.be/#{ID}},
    %r{youtube\.com/watch\?v=#{ID}},
    %r{youtube\.com/watch\?[^"'<>\s]*[?&]v=#{ID}}
  ].freeze

  module_function

  def extract(text)
    return if text.nil? || text.empty?

    PATTERNS.each do |pattern|
      match = text.match(pattern)
      return match[1] if match
    end
    nil
  end

  def assign!(post)
    return if post.data['youtube_id'].to_s.strip != ''

    id = extract(post.data['youtube'].to_s) || extract(post.content.to_s)
    post.data['youtube_id'] = id if id
  end
end

Jekyll::Hooks.register :site, :pre_render do |site|
  site.posts.docs.each do |post|
    next unless post.data['type'] == 'video'

    YoutubeId.assign!(post)
  end
end
