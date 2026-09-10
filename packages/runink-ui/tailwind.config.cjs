/**
 * Tailwind config for the @runink/ui component stylesheet.
 *
 * The emitted stylesheet is what claude.ai/design ships to every rendered design, and
 * the design agent writes its own layout glue on top of our components — so the CSS
 * has to carry more than the classes our own components happen to use. Compiling
 * against the real site's markup gives the genuine utility surface the brand relies
 * on, rather than a guess.
 *
 * @type {import('tailwindcss').Config}
 */
const { registrySafelist } = require('./scripts/registry-safelist.cjs');

module.exports = {
  presets: [require('../../design-tokens.preset.js')],
  // `darkMode` is bound to the same attribute the token layer switches on, so the rare
  // case that needs a STRUCTURAL difference between grounds (a border that exists only
  // on the sheet) can use `dark:` rather than inventing a second mechanism. Colour
  // itself needs no variant — it flows through the custom properties.
  darkMode: ['selector', "[data-ground='console']"],
  content: [
    './src/**/*.{ts,tsx}',
    // The design-sync preview cards. Without this, a utility used ONLY in a preview
    // compiles to nothing and the class silently does nothing in the rendered card.
    '../../.design-sync/previews/**/*.tsx',
    '../../layouts/**/*.html',
    '../../themes/hugo-saasify-theme/layouts/**/*.html',
    '../../content/**/*.{html,md}',
  ],
  /*
   * Generated from tokens/registry.json rather than hand-written.
   *
   * The Hugo layouts still use the hex literals and stone-* utilities these tokens
   * replace, so nothing in `content` references the new vocabulary yet — which means
   * without a safelist the entire palette would compile to nothing. A hand-maintained
   * list drifts the moment a token is added, and a stale safelist FAILS SILENTLY: the
   * class resolves to nothing and the component merely looks unstyled, with no error.
   */
  safelist: registrySafelist(),
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
