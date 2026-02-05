# Brutalist Styling Refresh

**Date:** 2026-02-04
**Type:** Styling refresh (keep existing layout/structure)
**Style:** Raw industrial brutalism

---

## Design Decisions

- **Scope:** Styling only — no layout or structural changes
- **Flavor:** Raw industrial — monospace fonts, exposed structure, utilitarian feel
- **Mode:** Dark mode default, light mode available

---

## Typography

- **Font:** JetBrains Mono (Google Fonts)
- **Usage:** All text — headlines, body, navigation
- **Weights:** 400 (regular), 700 (bold) only
- **Emphasis:** Use `UPPERCASE` or `[brackets]` instead of italics

---

## Color Palette

### Dark Mode (Default)
| Element | Color |
|---------|-------|
| Background | `#0a0a0a` |
| Primary text | `#e5e5e5` |
| Muted text | `#737373` |
| Borders | `#404040` |

### Light Mode
- Inverted: white background (`#fafafa`), near-black text (`#0a0a0a`)
- Same border treatment

---

## Borders & Structure

- **Thickness:** 3px solid everywhere
- **Radius:** 0px — all sharp corners
- **Color:** `#404040` (dark mode), `#d4d4d4` (light mode)
- **Applied to:** Section dividers, cards, header/footer edges, images

---

## Components

### Header
- Bottom border: 3px solid
- Logo/name: Bold uppercase monospace
- Nav links: Uppercase, generous spacing or `|` separators
- Background: Transparent

### Footer
- Top border: 3px solid
- Minimal content, uppercase treatment
- Links: 2px underlines

### Project Cards
- 3px border around entire card
- No background color difference
- Image: No padding, fills top of card
- Text: `1rem` padding inside border
- Hover: Border shifts to `#e5e5e5` (subtle, no animation)

### Hero Section
- Headline: Bold, uppercase, `text-5xl md:text-7xl`
- Subheadline: Regular weight, muted gray
- No decorative elements

### Buttons
- 3px border, no fill
- Uppercase text
- Hover: Fill inverts (border color becomes background)

---

## Spacing

- Section padding: `py-16 md:py-24` (keep current)
- Headline line-height: `leading-tight` or `leading-none`
- Body line-height: `leading-relaxed`

---

## Details

### Images
- No border-radius
- Optional 3px border to match cards
- Keep subtle scale-up on hover

### Scrollbar
- Dark track, light thumb
- No rounded edges

---

## Implementation Notes

1. Add JetBrains Mono from Google Fonts
2. Update `tailwind.config.js` with custom colors and font
3. Update `index.css` with base styles and scrollbar
4. Update components: Header, Footer, Layout
5. Update pages: Home (hero, cards)
6. Test dark/light mode toggle
