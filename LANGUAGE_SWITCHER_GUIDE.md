# Language Switcher Implementation Guide

This document explains the improved language selector implementation for the Jekyll blog with multiple language switcher options.

## Architecture Overview

### Core Components

1. **`_includes/language-detection.html`** - Centralized language detection logic
2. **Language Switcher Components** - Multiple UI variations
3. **Custom CSS** - Styling for all variations

### Language Detection Logic

The `language-detection.html` include provides a standardized way to detect the current language:

```liquid
{% include language-detection.html %}
<!-- Now you can use {{ current_lang }} which will be either "en" or "pt" -->
```

This replaces the previous inconsistent checks for `post.lang == "en"`, `page.lang == "en_US"`, etc.

## Language Switcher Variations

### 1. Standard Dropdown Menu (`language-switcher.html`)

**Features:**
- Full language names with checkmark icons
- Divider between current and alternative language
- Bootstrap glyphicon check marks
- Best for sites with clear language preferences

**Usage:**
```liquid
{% include language-detection.html %}
{% include language-switcher.html %}
```

**Appearance:**
- Dropdown shows: "🇺🇸 EN ▼"
- Menu contains: "✓ 🇺🇸 English" and "🇧🇷 Português"

### 2. Compact Dropdown Menu (`language-switcher-compact.html`)

**Features:**
- Minimal flag-only toggle button
- Simpler dropdown menu
- Right-aligned dropdown for better mobile experience
- More space-efficient

**Usage:**
```liquid
{% include language-detection.html %}
{% include language-switcher-compact.html %}
```

**Appearance:**
- Dropdown shows: "🇺🇸 ▼"
- Menu contains: "🇺🇸 English ✓" and "🇧🇷 Português"

## CSS Classes and Styling

### Standard Dropdown (`.language-switcher-dropdown`)
- Full-width dropdown with generous padding
- Clear visual hierarchy with dividers
- Hover effects and active state styling

### Compact Dropdown (`.language-switcher-compact`)
- Minimal 50px width toggle button
- Right-aligned menu (good for nav bars)
- Subtle styling with accent color for active state

### Mobile Responsiveness
Both versions include mobile-specific styles that:
- Remove absolute positioning on small screens
- Adjust spacing and layout for touch interfaces
- Hide dividers when appropriate

## Implementation Benefits

### ✅ Improved Maintainability
- Single source of truth for language detection
- Modular components that can be easily swapped
- Consistent behavior across all pages

### ✅ Better User Experience
- Clear visual feedback for current language
- Accessible with proper title attributes
- Mobile-responsive design

### ✅ Developer Experience
- Easy to implement on any page
- Multiple styling options to choose from
- Well-documented and commented code

### ✅ Performance
- Minimal HTML output
- Efficient CSS with no conflicts
- No JavaScript dependencies

## Usage Examples

### Basic Implementation (Header)
```liquid
<nav class="navbar navbar-default">
  {% include language-detection.html %}
  
  <!-- Other navbar content -->
  
  {% include language-switcher-compact.html %}
</nav>
```

### Sidebar Implementation
```liquid
{% include language-detection.html %}
<div class="sidebar">
  {% if current_lang == "en" %}
    <h3>Recent Articles</h3>
  {% else %}
    <h3>Artigos Recentes</h3>
  {% endif %}
  
  {% include language-switcher.html %}
</div>
```

## Migration Notes

### From Original Implementation
The original implementation had several issues:
- Language detection logic was repeated in multiple files
- Inconsistent language code checks (`en_US`, `en`, `pt_BR`, `pt`)
- Poor HTML structure (div with navbar-nav class instead of ul)
- No visual indication of current language

### Breaking Changes
- Replace all instances of old language detection logic with `{% include language-detection.html %}`
- Update references from complex conditionals to simple `current_lang` variable
- Replace old language switcher HTML with new component includes

## Future Enhancements

### Potential Additions
1. **Language Cookie Persistence** - Remember user's language preference
2. **Auto-detection** - Detect browser language preference
3. **More Languages** - Easy to extend for additional languages
4. **Keyboard Navigation** - Add ARIA attributes for screen readers

### SEO Considerations
- Add `hreflang` attributes to language links
- Implement structured data for multilingual content
- Consider canonical URLs for translated pages

## Troubleshooting

### Common Issues

**Dropdown not working?**
- Ensure Bootstrap JavaScript is loaded
- Check that `data-toggle="dropdown"` is present

**Styling conflicts?**
- Verify CSS load order
- Check for conflicting Bootstrap versions
- Use browser dev tools to inspect applied styles

**Language detection failing?**
- Ensure `language-detection.html` is included before using `current_lang`
- Check page/post front matter has correct `lang` attribute
- Verify Jekyll is processing the includes correctly
