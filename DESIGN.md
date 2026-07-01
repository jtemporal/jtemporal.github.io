---
name: Ethereal Ink
colors:
  surface: '#fbf9f9'
  surface-dim: '#dbdad9'
  surface-bright: '#fbf9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#e9e8e7'
  surface-container-highest: '#e3e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#5b3f43'
  inverse-surface: '#303031'
  inverse-on-surface: '#f2f0f0'
  outline: '#8f6f73'
  outline-variant: '#e4bdc2'
  surface-tint: '#bc004b'
  primary: '#b80049'
  on-primary: '#ffffff'
  primary-container: '#e2165f'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb2be'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfde'
  on-secondary-container: '#636262'
  tertiary: '#006769'
  on-tertiary: '#ffffff'
  tertiary-container: '#008284'
  on-tertiary-container: '#f3ffff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9de'
  primary-fixed-dim: '#ffb2be'
  on-primary-fixed: '#400014'
  on-primary-fixed-variant: '#900038'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#7bf5f8'
  tertiary-fixed-dim: '#5cd8db'
  on-tertiary-fixed: '#002021'
  on-tertiary-fixed-variant: '#004f51'
  background: '#fbf9f9'
  on-background: '#1b1c1c'
  surface-variant: '#e3e2e2'
typography:
  display-lg:
    fontFamily: Comfortaa
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Comfortaa
    fontSize: 36px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Comfortaa
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Comfortaa
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1120px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  section-gap-lg: 80px
  section-gap-md: 64px
---

## Brand & Style

This design system is built on a "Neo-Literary Minimalism" aesthetic, optimized for a crisp, light-mode editorial environment. It targets a sophisticated audience that appreciates the clarity of modern digital interfaces but seeks the tactile, intellectual comfort of premium print—reimagined as "ink on paper." The emotional response is one of focus, intellectual rigor, and high-quality curation.

The style moves away from the "obsidian" foundations of dark mode in favor of a bright, open "gallery-wall" foundation. This creates a high-end space where content is presented with absolute clarity. The vibrant pink accent provides a sharp, energetic contrast, while the teal tertiary tone adds a layer of modern, intellectual depth, ensuring the system feels contemporary and fresh rather than archival.

## Colors

The palette is strictly curated to maintain a high-contrast, professional atmosphere in a light environment, mimicking the starkness of a physical broadsheet.

- **Primary (#E91E63):** A vibrant pink used exclusively for high-intent actions, progress indicators, and critical highlights.
- **Secondary (#212121):** A deep charcoal used for high-contrast text and structural elements against the light background.
- **Tertiary (#1BACAF):** A crisp teal used for secondary visual interest and distinguishing interactive categories.
- **Surface (#FFFFFF):** The base background neutral that maximizes focus and mimics premium paper.
- **Neutral (#757575):** A mid-gray for metadata, captions, and secondary text.

*Note: Under no circumstances should warm tones (yellow-based grays, oranges, or browns) be introduced into the palette. Maintain a cool, neutral, or "true gray" scale.*

## Typography

This system utilizes **Comfortaa** as the primary typeface for headlines. Its unique, geometric rounded character provides a modern, soft-yet-structured editorial feel that distinguishes the brand with a friendly yet sophisticated voice. To balance this expressive typographic tone with modern readability, **Hanken Grotesk** is used for all body text. This sans-serif addition provides a clean, geometric counterpoint to the softer headings, ensuring long-form content is highly legible and feels contemporary.

To maintain functional clarity, **Inter** is used as a utility font for labels, buttons, and micro-copy. This "Comfortaa for Impact / Hanken for Reading / Inter for Action" hierarchy ensures that users can clearly distinguish between different types of information. All labels use increased letter spacing to enhance the crisp, modern feel.

This design system utilizes an **upright-only** typographic rule. Italics are strictly prohibited across all UI elements to maintain a structural, architectural appearance. Emphasis must be achieved through weight, scale, or color rather than slant.

## Layout & Spacing

The design system employs a **fixed-center grid** for desktop to mimic the layout of a physical book or broadsheet, ensuring line lengths for Hanken Grotesk remain optimal for reading (60-75 characters). 

- **Grid:** 12-column layout on desktop, 4-column on mobile.
- **Rhythm:** An 8px linear scale drives all padding and margins. 
- **Whitespace:** Emphasize "generous" vertical spacing between sections (using 64px or 80px) to allow the typography to breathe. 
- **Alignment:** Content is generally left-aligned to maintain the editorial "ragged-right" feel in body copy.

## Elevation & Depth

In light mode, depth is communicated through **subtle tonal layering** and **low-contrast borders** to maintain a sense of precision and focus.

- **Level 0 (Base):** #FFFFFF (Solid White).
- **Level 1 (Cards/Floating):** #F5F5F5 or a 1px border of #E0E0E0. 
- **Level 2 (Active/Overlays):** 1px border of #E91E63 (the primary accent) to denote selection or focus.

Avoid all heavy background blurs to keep the interface feeling solid and grounded like high-quality archival paper.

## Shapes

The shape language is **Rounded (0.5rem)**. This rounding complements the geometric curves of the Comfortaa headlines, providing a friendly, approachable quality that softens the high-contrast palette.

- **Primary Buttons:** Use the standard `rounded` (8px).
- **Secondary Containers:** Can use `rounded-lg` (16px) for a softer appearance in larger blocks.
- **Selection Indicators:** Use sharp 0px corners for vertical "accent bars" next to list items to maintain a precise, editorial look.

## Components

- **Buttons:** 
  - *Primary:* Solid #E91E63 background with #FFFFFF Inter Medium text. Rounded (8px radius).
  - *Secondary:* Transparent background with a 1px #212121 border and #212121 text.
  - *Tertiary:* Solid #1BACAF background with #FFFFFF text for specific categorical actions.
- **Input Fields:** Minimalist. No background color; only a 1px bottom border of #757575. When focused, the border changes to #E91E63 and thickens to 2px.
- **Lists:** Use Hanken Grotesk for list items. Separate items with 1px #E0E0E0 horizontal rules. Hover states should use a subtle light-gray (#F5F5F5) or a left-side #E91E63 vertical accent bar.
- **Chips:** Small, all-caps Inter text. #212121 background with #FFFFFF text. No border. Rounded-full.
- **Cards:** #FFFFFF background with a 1px #E0E0E0 border. Headlines inside cards should always be Comfortaa SemiBold.
- **Quotes/Pull-outs:** Use a 4px left-border of #E91E63 with upright Hanken Grotesk text to highlight key insights.