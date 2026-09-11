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

/** A token reference, as the custom-property form the preset uses everywhere. */
const t = (name, alpha) => (alpha ? `rgb(var(--rk-${name}-ch) / ${alpha})` : `rgb(var(--rk-${name}-ch))`);

/**
 * The `--tw-prose-*` block, in tokens. `prefix` is `''` for the palette `prose` reads
 * and `'invert-'` for the one `prose-invert` aliases onto it; both get the same values,
 * because the tokens already carry the ground (see the note at the `typography` key).
 *
 * Tiers are not interchangeable here. Everything that carries text takes an INK
 * (`primary`, `secondary`, `ink-accent`); the rules and bullets take `edge`, which is
 * the ≥3:1 mark tier, rather than `hairline`, which is invisible on `surface-well`.
 */
function proseInk(prefix = '') {
  const v = (name) => `--tw-prose-${prefix}${name}`;
  return {
    [v('body')]: `rgb(var(--rk-secondary-ch) / var(--rk-secondary-a))`,
    [v('headings')]: t('primary'),
    [v('lead')]: `rgb(var(--rk-secondary-ch) / var(--rk-secondary-a))`,
    [v('links')]: t('ink-accent'),
    [v('bold')]: t('primary'),
    [v('counters')]: `rgb(var(--rk-secondary-ch) / var(--rk-secondary-a))`,
    [v('bullets')]: `rgb(var(--rk-edge-ch) / var(--rk-edge-a))`,
    [v('hr')]: t('hairline'),
    [v('quotes')]: t('primary'),
    [v('quote-borders')]: `rgb(var(--rk-edge-ch) / var(--rk-edge-a))`,
    [v('captions')]: `rgb(var(--rk-secondary-ch) / var(--rk-secondary-a))`,
    [v('kbd')]: t('primary'),
    // Consumed as a whole colour inside a `box-shadow`, not as bare channels.
    [v('kbd-shadows')]: t('primary', '0.1'),
    [v('code')]: t('ink-accent'),
    [v('pre-code')]: t('primary'),
    [v('pre-bg')]: t('surface-well'),
    [v('th-borders')]: `rgb(var(--rk-edge-ch) / var(--rk-edge-a))`,
    [v('td-borders')]: t('hairline'),
  };
}

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
  theme: {
    extend: {
      /*
       * `prose` on Runink tokens.
       *
       * @tailwindcss/typography was installed and never configured, so `prose` shipped
       * the plugin's stock GRAY ramp: body #374151 and headings #111827, both of them
       * pinned light-mode values. On the console canvas that is a near-black heading on
       * a near-black ground — the heading ended up DARKER than the body copy under it,
       * which is the tell. It survived because the components that use `prose` all put
       * `text-secondary` on the container, and that overrides `--tw-prose-body` while
       * `.prose :where(h2)` keeps winning on the headings. Fix the body and the bug
       * hides; the one cell with unstyled `prose` (HeroImage's `InProse`) exposed it.
       *
       * `dark:prose-invert` did not save it either: the variant is bound to
       * `[data-ground='console']`, and console is ALSO the `:root` default — a page that
       * never states a ground gets console colour with no console attribute, so the
       * variant never matches and prose falls back to its light ramp.
       *
       * The cure is to stop asking the variant. Every value below is `rgb(var(--rk-…))`,
       * which resolves where it is USED, so prose already follows whatever ground its
       * subtree is on. Both the plain and the `invert-` set are written here, to the SAME
       * values — `dark:prose-invert` stays correct, and stays the only sanctioned spelling
       * (never bare `prose-invert`, which check-usage.mjs rejects), but it is now a no-op
       * rather than the thing holding the palette together.
       *
       * This object lands LAST in the plugin's `DEFAULT.css` array, after
       * `defaultModifiers.gray.css`, so it overrides the vendor ramp rather than racing it.
       */
      typography: {
        DEFAULT: { css: { ...proseInk(), ...proseInk('invert-') } },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
