# Jess Temporal's Blog & Portfolio

[![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-blue?logo=github)](https://jtemporal.com)
[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR-NETLIFY-BADGE-ID/deploy-status)](https://app.netlify.com/sites/YOUR-NETLIFY-SITE/deploys)
[![Jekyll](https://img.shields.io/badge/Built%20with-Jekyll-red?logo=jekyll)](https://jekyllrb.com/)

Personal blog and portfolio website of Jessica Temporal - Sr. Dev Advocate, podcaster, and creator. Built with Jekyll and hosted on GitHub Pages.

🌐 **Live Site**: [jtemporal.com](https://jtemporal.com)

## About

This website features:
- Technical blog posts about Python, data science, Git, and open source
- Portfolio showcasing projects and talks
- Information about books authored by Jessica
- Hacktoberfest project collection
- Multi-language support (Portuguese and English)

## Tech Stack

- **Static Site Generator**: Jekyll
- **Styling**: SCSS/Sass with Bootstrap
- **Hosting**: GitHub Pages
- **Domain**: Custom domain (jtemporal.com)
- **Analytics**: Google Analytics & PostHog
- **Comments**: Configured for comments system

## Features

- 📱 Responsive design
- 🌍 Multi-language content (PT/EN)
- 📖 Reading time estimation
- 🎯 Project collection (Hacktoberfest)
- 📝 Blog post pagination

## Local Development

### Prerequisites

- Ruby (version 2.7+)
- Bundler gem
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
   ```

3. **Run the development server**
   ```bash
   bundle exec jekyll serve
   ```

   Or for development with the dev config:
   ```bash
   bundle exec jekyll serve --config _dev_config.yml
   ```

4. **View the site**
   Open your browser to `http://localhost:4000`

### Development Commands

- **Build the site**: `bundle exec jekyll build`
- **Serve with drafts**: `bundle exec jekyll serve --drafts`
- **Serve with future posts**: `bundle exec jekyll serve --future`
- **Clean build files**: `bundle exec jekyll clean`

## Content Structure

```text
├── _posts/          # Blog posts (markdown files)
├── _books/          # Book collection (PT/EN)
├── _drafts/         # Draft posts
├── _hacktoberfest_projects/  # Hacktoberfest project collections
├── _includes/       # Reusable templates
├── _layouts/        # Page layouts
├── _sass/           # Sass stylesheets
├── images/          # Image assets
├── slides/          # Presentation slides
└── pages/           # Static pages (about, contact, etc.)
```

## Writing Posts

Create new posts in the `_posts/` directory with the format:
```text
YYYY-MM-DD-post-title.md
```

### Front Matter Template

```yaml
---
layout: post
title: "Your Post Title"
date: 2025-08-30
image: "path/to/featured-image.jpg"
tags: [tag1, tag2, tag3]
lang: en  # or pt
---

Your post content here...
```

## Collections

### Books
Book information is stored in `_books/` with separate folders for English (`en/`) and Portuguese (`pt/`) content.

### Hacktoberfest Projects
Organized by programming language in `_hacktoberfest_projects/` directory.

## Configuration

- **Main config**: `_config.yml`
- **Development config**: `_dev_config.yml`
- **Styling**: Custom Bootstrap theme in `_sass/`

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Theme

This theme is based on the one made by [webjeda](http://webjeda.com/cards) and has been extensively customized.

## License

This project is open source. Please see the [LICENSE.md](LICENSE.md) file for details.

## Contact

- **Website**: [jtemporal.com](https://jtemporal.com)
- **Email**: hello at jtemporal.com
- **Twitter**: [@jesstemporal](https://twitter.com/jesstemporal)
- **GitHub**: [@jtemporal](https://github.com/jtemporal)

---

Made with ❤️ by [Jessica Temporal](https://jtemporal.com)
