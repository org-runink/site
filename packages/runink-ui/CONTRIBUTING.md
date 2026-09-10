# Porting Hugo templates to @runink/ui

This package is a React port of the runink.org Hugo site's shortcodes and
partials. These are the conventions every component follows — match them, because
the design system's consistency is the whole product.

## Where things live

| What | Where |
|---|---|
| Hugo shortcodes (the source of truth for markup) | `../../layouts/shortcodes/*.html` |
| Hugo partials | `../../layouts/partials/*.html`, and the theme's under `../../themes/hugo-saasify-theme/layouts/partials/` |
| Icon registry (already ported) | `../../layouts/partials/icons.html` → `src/components/Icon.tsx` |
| Design tokens (generated from `DESIGN.md`) | `../../design-tokens.preset.js` |
| Component classes (`.btn`, `.container`, `.section`, `.card`) | `../../themes/hugo-saasify-theme/assets/css/main.css` |
| Real usage examples (props in the wild) | `../../content/**/*.md` |

## The idiom

Read `src/components/Card.tsx`, `Stat.tsx` and `Button.tsx` first — they are the
reference implementations.

1. **One component per file**, at `src/components/<Name>.tsx`, named export.
2. **Export a `<Name>Props` interface.** This is the API contract the design agent
   codes against, so every prop gets a `/** … */` doc comment. Extend the right
   DOM props (`HTMLAttributes<HTMLDivElement>`, etc.) when the component is a
   thin wrapper, and spread `...rest` onto the root element.
3. **`className` is always the last class applied**, via `cx()` from
   `../lib/cx`, so a caller's utilities win over the component's defaults.
4. **A JSDoc block on the component itself.** First sentence is a one-line
   summary; then say what the component is *for*, what it assumes about its
   context, and anything load-bearing (a `group` class, an absolute overlay, a
   required parent). Close with an `@example` showing realistic usage — this text
   becomes the component's reference doc in the design tool.
5. **Variants are string-union props** with a `Record<Variant, string>` lookup of
   classes, never conditional string concatenation.
6. **Arrays, not comma-separated strings.** Hugo shortcodes pass lists as
   `"a,b,c"`; the React prop is `string[]` or an object array.

## Token rules

- **Use the named tokens. Never a hex literal.** `bg-brand-green`, not
  `bg-[#65793e]`. The full vocabulary is in `../../design-tokens.preset.js`:
  `primary-50..950`, `secondary-50..900`, and `brand-{orange,orange-dark,green,
  green-dark,green-deep,sage,sage-dark,tan,red,ink,ink-soft,paper,beige}`.
- **Bare `rounded-lg` in a Hugo template means 2rem, not 0.5rem.** `main.css`
  globally overrides it. Port it as **`rounded-card`** (the real 2rem token). Same
  for `.btn`'s radius. `rounded-large` is 2.5rem. **Only the bare class is
  overridden** — `rounded-r-lg`, `rounded-t-lg`, `rounded-2xl`, `rounded-3xl` etc.
  keep their stock Tailwind values and port literally.
- Third-party brand colours (`#FF3621` Databricks, `#4285F4` Google, `#29B5E8`
  Snowflake) stay as arbitrary values — they are not design tokens.
- Some literals in the templates are just stock Tailwind colours written
  long-hand: `#fca5a5`=`red-300`, `#9f1239`=`rose-800`, `#f59e0b`=`amber-500`,
  `#84cc16`=`lime-500`, `#4d7c0f`=`lime-700`. Use the named class.

## Dark canvas

The system is dark-canvas-first. Components inherit body text colour from
`Surface` and set their own heading/accent colours. Typical palette inside a card:

- panel: `bg-primary-900/30` (translucent) or `bg-primary-800` (opaque)
- border: `border-secondary-500/30`, hover `border-brand-sage-dark`
- heading: `text-white`; body: `text-primary-300` or `text-brand-paper`
- lift on hover: `hover:-translate-y-1` (or `-2` for heavier cards)

Do **not** add a light-mode variant. The site has one canvas.

## Interactivity

Several shortcodes ship inline `<script>` (`pricing-toggle`, `faq`, `howto`,
`contact-section`, `hero`). Port that behaviour as React state — `useState` for
toggles and accordions — not by injecting scripts. Keep it dependency-free; this
package has no runtime dependencies beyond React, and adding one is a decision
for the maintainer, not a porting choice.

Components must render **something meaningful without interaction**, because the
design tool screenshots them statically. An accordion renders with its first item
open; a toggle renders in its default position.

## i18n

Hugo shortcodes inline four languages via `.Page.Language.Lang`. **Drop it.**
React components take text as props; the caller supplies the right language.

## Before you finish

Typecheck only your own files (the shared build is the maintainer's job):

```sh
npx tsc --noEmit --jsx react-jsx --skipLibCheck --strict \
  --moduleResolution bundler --module esnext --target es2020 \
  src/components/<Yours>.tsx
```

Do **not** run `npm run build`, and do **not** edit `src/index.ts` — the
maintainer owns the barrel. Report the exports you added instead.
