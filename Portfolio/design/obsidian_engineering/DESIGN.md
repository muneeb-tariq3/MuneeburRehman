---
name: Obsidian Engineering
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#c7c4d7'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#908fa0'
  outline-variant: '#464554'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#1000a9'
  primary-container: '#8083ff'
  on-primary-container: '#0d0096'
  inverse-primary: '#494bd6'
  secondary: '#4cd7f6'
  on-secondary: '#003640'
  secondary-container: '#03b5d3'
  on-secondary-container: '#00424e'
  tertiary: '#ffb783'
  on-tertiary: '#4f2500'
  tertiary-container: '#d97721'
  on-tertiary-container: '#452000'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#ffdcc5'
  tertiary-fixed-dim: '#ffb783'
  on-tertiary-fixed: '#301400'
  on-tertiary-fixed-variant: '#703700'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.02em
  body-base:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  mono-label:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1.5'
    letterSpacing: 0.05em
  mono-code:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.7'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 40px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style
The brand personality is authoritative, technical, and hyper-refined. It is designed for a Senior Full-Stack and DevOps engineer where precision and reliability are paramount. The aesthetic draws heavily from **Minimalism** and **Modern Corporate** styles seen in high-end developer tooling.

The interface prioritizes clarity and structural integrity. Visual interest is generated through intentional whitespace and the interplay of varying levels of transparency rather than decorative ornamentation. The emotional response should be one of "quiet confidence"—a tool-like efficiency that feels premium and bespoke.

## Colors
The palette is rooted in an "Obsidian" framework. The primary mode is **Dark**, utilizing deep slates and charcoals to create a low-fatigue, high-focus environment. 

- **Primary (Electric Indigo):** Used for primary actions, active states, and critical paths.
- **Secondary (Cyber Teal):** Used for successful status indicators, DevOps metrics, and subtle syntax highlighting.
- **Neutrals:** A range of cool-toned greys. In dark mode, these provide the "ink" and "paper" of the interface. 
- **Light Mode Fallback:** Transpose the obsidian tones to a crisp white (#FFFFFF) background with slate-900 (#0F172A) text. Use high contrast for borders (#E2E8F0) to maintain the structural "grid" feel.

## Typography
The typography system uses a dual-font approach to distinguish between narrative content and technical data. 

- **Geist (Headlines):** Used for large display text and section headings. It provides a sharp, geometric look that aligns with modern engineering standards.
- **Inter (Body):** Selected for its exceptional legibility at small sizes and neutral character.
- **JetBrains Mono (Technical Accents):** Used for labels, small metadata (e.g., commit hashes, dates), and code blocks. 

All headings should use tight letter-spacing to appear more "locked-in" and professional. Body text maintains standard spacing for maximum readability during long-form technical case studies.

## Layout & Spacing
The layout follows a **Fluid Grid** model with a maximum container width of 1200px to ensure line lengths remain readable on ultra-wide monitors. 

- **Vertical Rhythm:** Based on an 8px base unit. Component internal padding should always be a multiple of 4px, while section spacing should be a multiple of 16px.
- **Breakpoints:** 
  - Mobile: < 768px (Single column, 20px side margins).
  - Tablet: 768px - 1024px (8-column grid).
  - Desktop: > 1024px (12-column grid, 40px side margins).
- **Structure:** Use "Airy" layouts. Leave significant vertical gaps between major case study sections to allow the user to digest complex technical information.

## Elevation & Depth
This design system avoids traditional drop shadows in favor of **Tonal Layers** and **Glassmorphism**. 

- **Level 0 (Background):** Deepest obsidian. 
- **Level 1 (Cards/Sections):** A slightly lighter slate with a 1px solid border at 8% opacity (White in dark mode, Black in light mode).
- **Level 2 (Overlays/Dropdowns):** Backdrop filter (blur: 12px) with a semi-transparent surface color. This creates a sense of "stacking" without the visual clutter of heavy shadows.
- **Borders:** Borders are the primary way to define structure. Use high-contrast "hairline" borders for code blocks and navigation elements.

## Shapes
The shape language is **Soft (0.25rem)**. 

Large-scale rounding is avoided to maintain a professional, "engineered" look. Buttons and input fields use a consistent 4px (0.25rem) radius. Large containers or featured project cards may use up to 8px (0.5rem), but never more. This creates a crisp, architectural silhouette that reflects the precision of DevOps and backend engineering.

## Components
- **Buttons:** Primary buttons use a solid Electric Indigo fill with white text. Secondary buttons are "Ghost" style: transparent background with a 1px slate-700 border. Use a subtle hover transition where the border glows slightly.
- **Chips / Tags:** Small, monochromatic boxes using JetBrains Mono. Use a light slate background with 40% opacity and no border for technology stacks.
- **Cards:** Project cards should feature a 1px border and a very subtle background tint on hover. Content inside should be strictly aligned to the grid.
- **Input Fields:** Minimalist design—only a bottom border or a very faint 4-sided border. Focus states must use the Electric Indigo color for the border and a subtle outer glow (0px 0px 0px 2px).
- **Code Blocks:** Use a custom theme matching the Obsidian palette. Line numbers are a must for a DevOps profile. The container should have a "copy" button that appears only on hover.
- **Status Indicators:** Small glowing dots (using CSS pulse animations) to represent "Live" projects or "System Health" in the DevOps section.