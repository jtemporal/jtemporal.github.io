
## Writing and Content Guidelines

- Title headings must follow sentence case capitalization
- Avoid words like "powerful", "key", and "multiplier" to describe things
- Use specific and descriptive language
- Prefer : to - for list of items with descriptions
- Always remove trailing whitespace from files you edit
- For new posts, if `author_note: true` include `author_note_text` and `author_note_link`, if they don't exist ask for that information and complete the blog post front matter

## Jekyll Development Guidelines

- Always run the development server with `bundle exec jekyll s --config _dev_config.yml` (never use the `--drafts` flag)
- Use the development config (`_dev_config.yml`) for local development to avoid analytics tracking and use proper local URLs
- When creating new blog posts, use the format `YYYY-MM-DD-post-title.md` in the `_posts/` directory
- Include proper front matter with required fields: `layout`, `title`, `date`, `lang` (en/pt), and relevant `tags`
- Use the `related` field and `posts_list` for suggesting related articles

## File Organization

- Blog posts go in `_posts/` directory
- Draft posts go in `_drafts/` directory  
- Book content goes in `_books/en/` or `_books/pt/` based on language
- Hacktoberfest projects are organized by language in `_hacktoberfest_projects/`
- Static pages (about, contact, etc.) go in the root directory
- Images should be hosted on Cloudinary when possible

## Documentation Guidelines

- Avoid verbosity while writing documentation
- Only create new files if extremely necessary
- Repository documentation should live in the README.md
- Update README.md when adding new features or changing project structure

## Multilingual Support

- Use `lang: en` or `lang: pt` in front matter for proper language tagging
- Language configuration is centralized in `_config.yml` under the `languages` section
- Each language must have: `flag`, `name`, `code`, `locale`, and `url` properties
- For translated posts, use the `translations` field to link between English and Portuguese versions
- Always include `language-detection.html` before using language-dependent content
- Use the scalable language switcher component `language-switcher-multi.html` for navigation
- Maintain consistency in tagging between language versions

## Language System Components

- `language-detection.html`: Core component that sets `current_lang`, `current_lang_config`, and `available_languages` variables
- `language-switcher-multi.html`: Scalable dropdown component that works with any number of languages
- Header navigation uses language detection to show appropriate menu items and links
- Sidebar content adapts based on detected language using conditional logic
- All language-dependent includes should use the language detection system

## Translation Guidelines

- When creating Portuguese translations of English posts, maintain the author's consistent Portuguese terminology and writing style
- Use conversational tone with direct address to the reader ("você") in Portuguese content
- Key Portuguese terminology to use consistently:
  - "arquivo" for file
  - "sites estáticos" for static sites
  - "conteúdo" for content
  - "passo a passo" for step-by-step
  - "configurar" for configure/setup
  - "recapitulando" for recap sections
- Don't translate technical terms like "large language models", build, and language specific words
- Technical explanations should be followed by practical examples, matching the author's tutorial style
- Never use "aqui está como" for "here's how" transitions
- Update internal links to point to Portuguese versions when available (e.g., "/do-tema-ao-ar" for blog posts)
- Preserve all technical code examples and formatting while translating explanatory text
- When asked to generate a translation for a given blog post:
  - Always create a new file with the translated content instead of providing the translation in chat
  - Use the translation URL format with a preceding slash and the filename without extension (e.g., "/filename-without-extension-and-without-date")
  - Remember to update both blog posts to contain the `translations` field using the correct format:
    ```yaml
    translations:
      - url: "/translation-url"
      lang: "language-code"
    ```
- Update `posts_list` to reference relevant Portuguese tutorials when creating translations
  - Make sure you find the correct Portuguese filename that matches the content of the English post
  - This list should contain only 3 relevant posts and for each blog post it should be the name of file without the date and extension

## Asset Management

- Use Cloudinary URLs for images: `https://res.cloudinary.com/jesstemporal/image/upload/...`
- Include `image` field in front matter for featured images
- Ensure proper alt text for accessibility
- Use consistent cover images from the covers collection when no specific image is available