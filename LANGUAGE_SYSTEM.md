# Language System Documentation

## Overview
This website supports bilingual content in Portuguese (default) and English.

## Language Detection Logic
The language detection is centralized in `_includes/language-detection.html` which sets a `current_lang` variable to either "en" or "pt" based on:
- `post.lang` for blog posts
- `page.lang` for pages  
- Supports both `en` and `en_US` language codes

## Language Codes Used
- **English**: `en` or `en_US` 
- **Portuguese**: `pt` or `pt_BR` (defaults to Portuguese when no language is specified)

## File Structure
- `_includes/language-detection.html` - Centralized language detection logic
- `_includes/language-switcher.html` - Reusable language switcher component
- `/en/` - English homepage and posts
- `/pt/` - Portuguese homepage and posts  
- `about.md` / `sobre.md` - Language-specific about pages
- Posts use `lang: en` or `lang: pt` in frontmatter

## Components Using Language Logic
1. **Header** (`_includes/header.html`)
   - Navigation menu labels
   - Language switcher
   - Brand link destination

2. **Sidebar** (`_includes/sidebar.html`)  
   - Article section titles
   - Button labels

3. **Talks Logic** (`_includes/talks-logic.html`)
   - Section headers

## Adding New Multilingual Content

### For Pages
1. Create separate files for each language (e.g., `about.md` / `sobre.md`)
2. Set `lang: en` or `lang: pt_BR` in frontmatter
3. Add `translated: "/path-to-other-language"` to enable language switching

### For Posts
1. Set `lang: en` or `lang: pt` in frontmatter
2. Optionally add `translated: "/path-to-translation"` for direct translations

### For Components
1. Include `{% include language-detection.html %}` at the top
2. Use `{% if current_lang == "en" %}` conditionals for language-specific content

## Improvements Made
1. **Centralized Language Detection**: Single source of truth for language logic
2. **Consistent Language Codes**: Standardized detection across all components  
3. **Reusable Components**: Modular language switcher that can be used anywhere
4. **Visual Indicators**: Active language highlighting in switcher
5. **Better Accessibility**: Added title attributes for screen readers
6. **Mobile Responsive**: Language switcher adapts to mobile layout
7. **Code Maintainability**: Reduced duplication and improved consistency
