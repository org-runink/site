---
colors:
  primary:
    50: '#eef1fc'
    100: '#dde3f9'
    200: '#bbc7f3'
    300: '#99abec'
    400: '#778fe6'
    500: '#5573df'
    600: '#425ad6'
    700: '#3548ab'
    800: '#283680'
    900: '#1b2456'
  secondary:
    50: '#faf5ff'
    100: '#f3e8ff'
    200: '#e9d5ff'
    300: '#d8b4fe'
    400: '#c084fc'
    500: '#a855f7'
    600: '#9333ea'
    700: '#7e22ce'
    800: '#6b21a8'
    900: '#581c87'
  brand_accents:
    orange: '#ea580c'
    dark_orange: '#ca4708'
    green: '#65793e'
    dark_green: '#5F6F3E'
    red: '#991b1b'
    light_sage: '#C8D9A8'
    tan: '#D4A574'
  surface:
    stone_950: '#0c0a09'
    stone_900: '#1c1917'
    stone_800: '#292524'
    stone_700: '#44403c'
    gray_50: '#f9fafb'
    gray_100: '#f3f4f6'
    gray_200: '#e5e7eb'
    white: '#ffffff'
  text:
    stone_300: '#d6d3d1'
    stone_400: '#a8a29e'
    stone_500: '#78716c'
    beige_accent: '#D9CDB8'
    off_white: '#F5F1E8'
    gray_900: '#111827'
    gray_600: '#4b5563'
typography:
  font_families:
    sans: "Inter, system-ui, sans-serif"
    heading: "Plus Jakarta Sans, sans-serif"
    mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
  weights:
    light: 300
    normal: 400
    medium: 500
    semibold: 600
    bold: 700
    extrabold: 800
    black: 900
  scale:
    xs: "0.75rem"
    sm: "0.875rem"
    base: "1rem"
    lg: "1.125rem"
    xl: "1.25rem"
    2xl: "1.5rem"
    3xl: "1.875rem"
    4xl: "2.25rem"
    5xl: "3rem"
    6xl: "3.75rem"
    7xl: "4.5rem"
    8xl: "6rem"
spacing:
  base_unit: "0.25rem"
  scale:
    1: "0.25rem"
    2: "0.5rem"
    3: "0.75rem"
    4: "1rem"
    5: "1.25rem"
    6: "1.5rem"
    8: "2rem"
    10: "2.5rem"
    12: "3rem"
    16: "4rem"
    20: "5rem"
    24: "6rem"
    32: "8rem"
motion:
  durations:
    fast: "200ms"
    normal: "300ms"
    slow: "500ms"
    very_slow: "700ms"
    snail: "1000ms"
  easings:
    default: "cubic-bezier(0.4, 0, 0.2, 1)"
    in: "cubic-bezier(0.4, 0, 1, 1)"
    out: "cubic-bezier(0, 0, 0.2, 1)"
    in_out: "cubic-bezier(0.4, 0, 0.2, 1)"
radii:
  none: "0"
  sm: "0.125rem"
  md: "0.375rem"
  lg: "0.5rem"
  xl: "0.75rem"
  2xl: "1rem"
  3xl: "1.5rem"
  full: "9999px"
  custom_card: "2rem"
  custom_large: "2.5rem"
elevation:
  z_index:
    hide: "-10"
    base: "0"
    content: "10"
    overlay: "20"
    modal: "50"
shadows:
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)"
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)"
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
  2xl: "0 25px 50px -12px rgb(0 0 0 / 0.25)"
  inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)"
  neon_orange: "0 0 15px rgba(234, 88, 12, 0.1)"
  neon_green: "0 0 15px rgba(101, 121, 62, 0.3)"
---

# Design Intent

The visual identity of this project relies on a high-contrast, slightly retro-futuristic, yet deeply technical aesthetic. It balances a stark, dark-mode-first technical environment with vibrant, deliberate accents to highlight interactive elements, calls to action, and core data representations.

## Core Aesthetic & Mood
The overall mood is authoritative and technical. It feels like an advanced command center or a specialized operating system rather than a generic marketing page.
- **Deep Backgrounds:** The foundation is built on deep, desaturated stone and dark gray tones (`stone-950`, `stone-900`, `stone-800`, `#161515`). These are occasionally enriched by subtle radial gradients that add depth without distraction.
- **Vibrant Accents:** Sharp, highly saturated accent colors—specifically vibrant oranges (`#ea580c`), deep reds (`#991b1b`), and organic greens (`#65793e`)—punch through the dark canvas. These colors are frequently treated with background clips (text gradients) and glowing neon drop shadows to evoke a sense of high-tech digital interaction.
- **Material & Depth:** The UI creates a sense of depth and hierarchy not through flat design, but through layers. Elements are placed on heavily rounded surfaces (up to `2.5rem` for large cards) surrounded by varied opacities, subtle borders, and soft outer glowing drop shadows.

## Interaction Patterns
The design prioritizes legibility, large touch targets, and clear affordances.
- **Pills and Badges:** Information density is managed by using heavily rounded, tightly padded pills or badges for metadata, tags, and small calls to action. These often feature tracking adjustments (widened letter spacing) and uppercase text to stand out as distinct UI controls.
- **Gradients:** Gradients are a core component, not just an afterthought. They are used extensively for text clipping (making bold headers stand out in vibrant orange-to-red gradients) and for prominent call-to-action buttons.
- **Cards & Containers:** Primary content modules (like features, use cases, and pricing tiers) are housed in generous cards with substantial padding (`p-8`, `p-12`), significant border-radii (`rounded-2xl`, `rounded-[2.5rem]`), and distinct backgrounds that contrast slightly with the main dark canvas, ensuring they float above the background layer.

## Typography Strategy
Typography is modern, legible, and hierarchical.
- **Headings:** The `Plus Jakarta Sans` family brings a geometric, highly readable, and slightly tech-forward feel to all major headers. Headings are typically bold or black (weights 700-900), often rendered in bright white or as gradient-clipped text for maximum impact against dark backgrounds.
- **Body & UI Text:** The `Inter` font family ensures maximum legibility for dense technical copy, user interface elements, and prose. On dark backgrounds, text is primarily rendered in soft grays (`stone-300`, `stone-500`) to reduce eye strain, reserving bright whites and brand colors for emphasis and active states.
