# Artists Against Apartheid: Bay Area — Style Guide

This style guide is derived from the visual language of [againstapartheid.art](https://againstapartheid.art/) and adapted for the Bay Area compilation website.

---

## Brand Overview

The visual identity balances **bold activist graphics** with **clean, readable layouts**. The design uses texture and restraint to create a serious, professional aesthetic that supports the movement's messaging without visual distraction.

---

## Color Palette

### Primary Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Revolutionary Red** | `#b70201` | Primary accent, CTAs, badges, highlights |
| **Cream** | `#f5f0e8` | Page background, light sections |
| **Charcoal** | `#2d2d2d` | Primary text, headings |

### Secondary Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Olive/Tan** | `#cdc895` | Logo alternate, muted accents |
| **Sand** | `#e8dfd1` | Section backgrounds, dividers |
| **Sand Dark** | `#d4c4a8` | Borders, subtle UI elements |
| **Earth** | `#8b7355` | Muted text, captions |
| **Earth Dark** | `#5c4a3a` | Subtitles, secondary text |
| **Stone** | `#4a4a4a` | Hover states, dark UI |
| **Black** | `#111111` | High contrast text when needed |
| **White** | `#ffffff` | Text on dark backgrounds |

### Semantic Usage

```css
--color-bg: #f5f0e8;           /* Page background */
--color-text: #2d2d2d;         /* Body text */
--color-text-muted: #8b7355;   /* Secondary text */
--color-accent: #b70201;       /* Links, buttons, highlights */
--color-surface: #e8dfd1;      /* Cards, elevated sections */
--color-border: #d4c4a8;       /* Dividers, borders */
```

---

## Typography

### Font Stack

```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
             Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
             sans-serif;
```

The design uses system fonts for fast loading and native feel. If custom fonts are added later, consider:
- **Headings**: A condensed sans-serif (similar to the logo typography)
- **Body**: A readable sans-serif with good x-height

### Type Scale (1.25 ratio)

| Level | Size | Weight | Line Height | Letter Spacing |
|-------|------|--------|-------------|----------------|
| Body | 18px | 400 | 1.6 | 0 |
| Small | 14px | 400 | 1.6 | 0 |
| Large | 22px | 400 | 1.5 | 0 |
| H4 | 22px | 600 | 1.15 | -0.01em |
| H3 | 28px | 600 | 1.15 | -0.01em |
| H2 | 35px | 700 | 1.15 | -0.01em |
| H1 | 44px | 700 | 1.1 | -0.01em |

### CSS Custom Properties

```css
--font-base: 18px;
--font-sm: 14px;
--font-lg: 22px;
--font-xl: 28px;
--font-2xl: 35px;
--font-3xl: 44px;

--leading-tight: 1.15;
--leading-normal: 1.6;
```

---

## Spacing System (8pt Grid)

All spacing uses multiples of 8px for consistency:

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 8px | Tight gaps, inline spacing |
| `--space-2` | 16px | Default gap, padding |
| `--space-3` | 24px | Section internal padding |
| `--space-4` | 32px | Component spacing |
| `--space-5` | 48px | Section gaps |
| `--space-6` | 64px | Major section padding |
| `--space-7` | 96px | Hero/large section padding |
| `--space-8` | 128px | Maximum spacing |

Use 4px for fine adjustments when 8px is too large.

---

## Layout

### Grid System

- **Max width**: 1200px (content), 1400px (full bleed)
- **Page padding**: 32px (mobile), 64px (desktop)
- **Grid columns**:
  - Mobile: Single column
  - Tablet: 2 columns
  - Desktop: 2 columns for hero, single column for content

### Breakpoints

```css
/* Mobile first */
@media (min-width: 500px)  { /* Small tablets */ }
@media (min-width: 900px)  { /* Desktop */ }
@media (min-width: 1200px) { /* Large desktop */ }
```

### Content Width

- **Prose/body text**: Max 680px (approximately 65 characters)
- **Hero content**: Max 1200px
- **Full bleed sections**: 100vw

---

## Visual Elements

### Texture Overlay

The grainy texture (`grainy-background.png`) should be applied as an overlay to add depth and a printed/risograph aesthetic:

```css
.textured {
  position: relative;
}

.textured::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('/assets/grainy-background.png');
  background-repeat: repeat;
  opacity: 0.4;
  pointer-events: none;
  mix-blend-mode: multiply;
}
```

### Keffiyeh Pattern

The keffiyeh pattern (`website-background.png`) represents Palestinian heritage and resistance. Use sparingly for:
- Hero section backgrounds
- CTA bar backgrounds
- Accent sections

### Shadows

```css
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.1);
--shadow-md: 0 8px 32px rgba(0, 0, 0, 0.15);
--shadow-lg: 0 24px 48px rgba(0, 0, 0, 0.15);
```

### Border Radius

```css
--radius-sm: 4px;   /* Buttons, inputs */
--radius-md: 8px;   /* Cards */
--radius-full: 100px; /* Pills, badges */
```

---

## Components

### Buttons

**Primary Button**
```css
.btn-primary {
  background: #2d2d2d;
  color: #f5f0e8;
  padding: 24px 48px;
  font-size: 22px;
  font-weight: 600;
  border-radius: 4px;
  border: none;
  transition: background 0.2s ease;
}

.btn-primary:hover {
  background: #4a4a4a;
}
```

**Secondary Button**
```css
.btn-secondary {
  background: transparent;
  color: #2d2d2d;
  padding: 24px 48px;
  font-size: 22px;
  font-weight: 600;
  border-radius: 4px;
  border: 2px solid #2d2d2d;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background: #2d2d2d;
  color: #f5f0e8;
}
```

### Pills/Badges

```css
.pill {
  display: inline-block;
  padding: 6px 14px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  border-radius: 100px;
  background: #b70201;
  color: #ffffff;
}
```

### Links

```css
a {
  color: #b70201;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.15s ease;
}

a:hover {
  text-decoration: underline;
}
```

### Organization Cards (Fundraising)

```css
.org-card {
  padding-top: 32px;
  margin-top: 32px;
  border-top: 1px solid #d4c4a8;
}

.org-card h3 {
  font-size: 22px;
  margin-bottom: 16px;
}

.org-card .donate-link {
  color: #b70201;
  font-weight: 600;
}
```

---

## Imagery

### Album Artwork

- Display at max 500px width on desktop
- Use subtle shadow for depth: `box-shadow: 0 24px 48px rgba(0, 0, 0, 0.15)`
- Slight border radius: 4px

### Logo Usage

| Asset | Use Case |
|-------|----------|
| `aaa-logo.png` | Hero section, album artwork display |
| `aaa-logo.jpeg` | Social sharing, OG image |
| `small-logo.png` | Footer, watermarks, section dividers |
| `website-background.png` | CTA sections, accent backgrounds |
| `grainy-background.png` | Texture overlay on all backgrounds |

---

## Animation

### Transitions

```css
--transition-fast: 0.15s ease;
--transition-base: 0.2s ease;
--transition-slow: 0.3s ease;
```

### Page Load

- Fade in content: 1.5s duration
- Vinyl record slide-out: 1.2s ease-out, 0.5s delay

---

## Accessibility

- **Contrast ratio**: Minimum 4.5:1 for body text
- **Touch targets**: Minimum 44×44px
- **Focus states**: Visible outline on all interactive elements
- **Motion**: Respect `prefers-reduced-motion`

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## File Structure

```
public/assets/
├── aaa-logo.png          # Main album artwork (square)
├── aaa-logo.jpeg         # Album artwork (compressed)
├── small-logo.png        # Typography logo (transparent)
├── grainy-background.png # Texture overlay
└── website-background.png # Keffiyeh pattern background
```

---

## References

- Parent project: [againstapartheid.art](https://againstapartheid.art/)
- Design inspiration: Risograph prints, activist poster art, Palestinian visual culture
- Technical approach: 8pt grid system, modular scale typography

---

*This style guide is a living document. Update as the design evolves.*
