# Jess Temporal's Blog & Portfolio

[![Netlify](https://img.shields.io/badge/Hosted%20on-Netlify-00C7B7?logo=netlify&logoColor=white)](https://jtemporal.com)
[![Jekyll](https://img.shields.io/badge/Built%20with-Jekyll-red?logo=jekyll)](https://jekyllrb.com/)

Personal blog and portfolio website of Jessica Temporal — Sr. Dev Advocate, podcaster, and creator. Built with Jekyll and the **Ethereal Ink** theme, hosted on Netlify.

🌐 **Live site**: [jtemporal.com](https://jtemporal.com)

## About

This site features:

- Technical blog posts about Python, data science, Git, and open source
- Books, talks, videos, series, and social links
- Hacktoberfest project collections (2019–2025)
- Multi-language support (Portuguese and English, with French infrastructure)

## Tech Stack

- **Static site generator**: Jekyll 4.3
- **Styling**: Tailwind CSS (Ethereal Ink design system) with Typography plugin
- **Syntax highlighting**: Rouge (with line numbers)
- **Hosting**: Netlify (deploys from `main`; PR deploy previews)
- **Domain**: [jtemporal.com](https://jtemporal.com)
- **Analytics**: Google Analytics & PostHog

## Features

- Responsive layout with light/dark mode
- Multi-language content (PT/EN) with scalable architecture
- Reading time estimation
- Post tag banners, series pages, and listing pages for talks, videos, and books
- Blog post pagination
- Language switcher
- Per-post OG social cards (`images/og/<slug>.png`)
- Lil Jess, a friendly sidekick always visible in the corner (dismiss with ✕; type `jess` or 5 footer taps to bring her back)

### Multi-Language System

See [MULTI_LANGUAGE_SYSTEM.md](MULTI_LANGUAGE_SYSTEM.md) for architecture, translation management, adding languages, and troubleshooting.

### Lil Jess

See [LIL_JESS.md](LIL_JESS.md) for always-on visibility, dismiss/re-summon, reactions, and how to tweak her moods and lines.

### Agent workflows

See [AGENTS.md](AGENTS.md) for hidden YouTube short transcript posts, git worktree conventions, and OG card generation.

## Local Development

### Prerequisites

- Ruby **3.4.1** (see `.ruby-version`)
- Bundler
- Node.js & npm (for Tailwind CSS builds and OG card generation)
- Git

### Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/jtemporal/jtemporal.github.io.git
   cd jtemporal.github.io
   ```

2. **Install dependencies**

   ```bash
   bundle install
   npm install
   ```

3. **Run the development server**

   Recommended — builds CSS and starts Jekyll with the dev config:

   ```bash
   npm run dev
   ```

   Or run the steps separately:

   ```bash
   npm run build:css
   bundle exec jekyll serve --config _dev_config.yml
   ```

   CSS auto-rebuilds via `_plugins/build_css.rb` while Jekyll is running.

4. **Open the site**

   [http://127.0.0.1:4000](http://127.0.0.1:4000)

### Development Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Build CSS and serve with `_dev_config.yml` |
| `npm run build:css` | Compile Tailwind → `assets/css/main.css` |
| `npm run watch:css` | Watch and rebuild CSS |
| `npm run og:generate -- _posts/<file>.md` | Generate OG card for one post |
| `npm run og:generate:all` | Generate OG cards for all posts |
| `bundle exec jekyll build` | Production build |
| `bundle exec jekyll serve --future` | Include future-dated posts |
| `bundle exec jekyll clean` | Remove `_site` and cache |

## Content Structure

```text
├── _posts/                    # Blog posts
├── _books/                    # Book collection (en/, pt/)
├── _drafts/                   # Draft posts
├── _hacktoberfest_projects_*/ # Hacktoberfest listings by year
├── _includes/                 # Reusable templates
├── _layouts/                  # Page layouts
├── _plugins/                  # Jekyll plugins (CSS, OG images, Rouge, series)
├── _data/                     # YAML data (socials, localization, etc.)
├── src/styles/                # Tailwind source (tailwind.css, theme.css, syntax.css)
├── assets/css/                # Compiled CSS
├── images/                    # Image assets
├── images/og/                 # Per-post OG social cards
├── og-templates/              # HTML template for OG card generation
├── scripts/                   # OG generation, image optimization helpers
└── slides/                    # Presentation slides
```

Design mockups from Stitch live in `stitch_bilingual_blog_post_page_v1/` locally for reference — that folder is gitignored and not part of the repository.

## Writing Posts

Create new posts in `_posts/` using:

```text
YYYY-MM-DD-post-title.md
```

### Front Matter Template

```yaml
---
layout: post
title: "Your post title"
date: 2025-08-30
image: /images/covers/tutorial.webp
tags: [tag1, tag2]
lang: en  # or pt
translations:
  - lang: pt
    url: "/caminho-para-traducao-em-portugues"
---

Your post content here...
```

For translation details, see [MULTI_LANGUAGE_SYSTEM.md](MULTI_LANGUAGE_SYSTEM.md).

### OG social cards

Every new post (blog post, `type: video`, or `type: talk`) needs its own OG card. Do not reuse a generic cover as the social preview.

```bash
# Single post
npm run og:generate -- _posts/YYYY-MM-DD-<slug>.md

# Bilingual pair
npm run og:generate -- _posts/YYYY-MM-DD-<slug-en>.md _posts/YYYY-MM-DD-<slug-pt>.md
```

This writes `images/og/<slug>.png`. Commit the PNG with the post. The `_plugins/og_image.rb` plugin uses that file as the social/featured image when present.

Theme cues come from front matter (`type`, `tags`, `image`). See [AGENTS.md](AGENTS.md) for full details.

### Images

- Keep originals under `/images/`
- Optimize with `python scripts/image_optmizer.py` (converts to WebP)
- Prefer WebP paths in content

## Collections

### Books

Book content lives in `_books/en/` and `_books/pt/`.

### Hacktoberfest Projects

Organized by year in `_hacktoberfest_projects_YYYY/`.

## Configuration

- **Production config**: `_config.yml`
- **Development config**: `_dev_config.yml` (local URLs, dev-only excludes)
- **Netlify**: `netlify.toml` (build, deploy previews, caching headers)
- **Styling**: `src/styles/tailwind.css`, `tailwind.config.js`, `src/styles/theme.css`

## Contributing

1. Fork [jtemporal/jtemporal.github.io](https://github.com/jtemporal/jtemporal.github.io)
2. Create a feature branch (`git checkout -b feature/my-change`)
3. Commit your changes
4. Push and open a pull request

## License

See [LICENCE.md](LICENCE.md).

## Contact

- **Website**: [jtemporal.com](https://jtemporal.com)
- **Contact form**: [English](https://jesstemporal.notion.site/27252b5614cf4a3cb75df604432a912e) · [Português](https://jesstemporal.notion.site/3919dd3e5b6c80f0bbf8de4876374909)
- **Twitter**: [@jesstemporal](https://twitter.com/jesstemporal)
- **GitHub**: [@jtemporal](https://github.com/jtemporal)

---

Made with ❤️ by [Jessica Temporal](https://jtemporal.com)
