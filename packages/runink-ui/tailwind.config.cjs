/**
 * Tailwind config for the @runink/ui component stylesheet.
 *
 * Content deliberately spans BOTH this package's sources and the Hugo site's
 * layouts/content. The emitted stylesheet is what claude.ai/design ships to
 * every rendered design, and the design agent writes its own layout glue on top
 * of our components — so the CSS has to carry more than just the classes our
 * own components happen to use. Compiling against the real site's markup gives
 * the genuine utility surface the brand already relies on, rather than a guess.
 *
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  presets: [require('../../design-tokens.preset.js')],
  content: [
    './src/**/*.{ts,tsx}',
    // The design-sync preview cards. Without this, a utility used ONLY in a
    // preview (its layout scaffolding — `max-w-xs`, `space-y-0`) compiles to
    // nothing and the class silently does nothing in the rendered card.
    '../../.design-sync/previews/**/*.tsx',
    '../../layouts/**/*.html',
    '../../themes/hugo-saasify-theme/layouts/**/*.html',
    '../../content/**/*.{html,md}',
  ],
  // The named brand tokens are new — the Hugo layouts still use the hex
  // literals they replace, so nothing in `content` references them yet. Safelist
  // them so the vocabulary the conventions header documents actually resolves.
  safelist: [
    { pattern: /^(bg|text|border|ring|from|via|to)-(primary|secondary)-(50|100|200|300|400|500|600|700|800|900|950)$/ },
    {
      pattern:
        /^(bg|text|border|ring|from|via|to)-brand-(orange|orange-dark|green|green-dark|green-deep|red|sage|sage-dark|tan|copper|ink|ink-soft|ink-raised|paper|beige)$/,
    },
    { pattern: /^rounded-(card|large)$/ },
    { pattern: /^font-(sans|heading|mono)$/ },
    { pattern: /^animate-(cta-pulse|marquee|testimonials-scroll|pulse-slow)$/ },
    { pattern: /^shadow-neon-(orange|green|red|orange-strong)$/ },
  ],
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
