# frozen_string_literal: true

# Keep Tailwind Typography from overriding Rouge syntax highlighting inside posts.
Jekyll::Hooks.register %i[posts pages books], :post_render do |doc|
  next unless doc.output.is_a?(String)

  doc.output = doc.output.gsub(
    /highlighter-rouge(?!\s+not-prose)/,
    'highlighter-rouge not-prose'
  )
end