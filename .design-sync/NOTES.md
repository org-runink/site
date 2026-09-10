# design-sync notes — runink.org site

Repo-specific gotchas for syncing `@runink/ui` to claude.ai/design. Read this
before re-running a sync.

## What this repo is, and where the components came from

`site/` is a **Hugo** marketing site (Hugo + Tailwind 3 + a `hugo-saasify-theme`
base). It had **no React design system** — the UI was ~41 Hugo shortcodes and
~17 partials, i.e. Go templates. Claude Design renders compiled React, so the
first sync (2026-09-10) **created** `site/packages/runink-ui/` (`@runink/ui`) by
porting those templates to TypeScript React. That package is now the real,
committed source of truth the converter builds from — it is not sync scaffolding.

When a shortcode changes, the corresponding component in `packages/runink-ui/src`
must be updated by hand. Nothing enforces that; there is no codegen from Hugo
templates to React.

## Package manager — do not add root dependencies

- `.github/workflows/deploy.yaml` runs **`pnpm install --frozen-lockfile`**.
- Locally there is **no pnpm and no corepack**, only npm. A newer
  `package-lock.json` sits beside the CI-authoritative `pnpm-lock.yaml`.
- Therefore `@runink/ui` is **fully self-contained**: its own `package.json`, its
  own npm-installed `node_modules`, and it is deliberately **NOT** registered in
  `pnpm-workspace.yaml`.
- Adding a dependency to the root `package.json`, or adding the package to the
  pnpm workspace, **desyncs the frozen lockfile and breaks the deploy.** The
  generated preset is dependency-free plain JS precisely so the site can
  `require()` it without any new root dep.

Install/build the package with: `cd packages/runink-ui && npm install && npm run build`.

## Tokens

`DESIGN.md`'s YAML frontmatter is the source of truth. `npm run gen:tokens`
(in `packages/runink-ui`) generates two committed artifacts:

- `site/design-tokens.preset.js` — shared Tailwind preset, consumed by BOTH
  `site/tailwind.config.js` and the package.
- `packages/runink-ui/src/tokens.css` — the same tokens as `--color-*` custom
  properties, so the synced bundle ships a token layer.

Only tokens that **differ from Tailwind's stock theme** are emitted. DESIGN.md's
type scale, spacing scale and motion durations are byte-identical to Tailwind's
defaults and are intentionally not re-emitted.

**Six values are NOT from DESIGN.md** — all injected in `scripts/gen-tokens.mjs`
with a comment explaining why:

| Token | Value | Why |
|---|---|---|
| `primary-950` | `#0f1330` | Referenced **38×** in `layouts/` but defined nowhere, so those backgrounds rendered transparent. The near-black canvas that replaced `stone-950` (`#0c0a09`). |
| `brand-sage-dark` | `#A8B88B` | The hover border/icon accent throughout the card idiom (4× in layouts). |
| `brand-copper` | `#B87333` | The hero halo's warm stop. |
| `brand-ink-raised` | `#211F1F` | One surface written three ways in layouts (`#211F1F`, `#1f1d1b`, `#1a1716`, all within ~6 units). Named once so ports stop approximating. |
| `shadow-neon-orange-strong` | `0 0 25px rgba(234,88,12,.3)` | The hover intensity; DESIGN.md defines only the at-rest glow. |
| `shadow-neon-red` | `0 0 15px rgba(153,27,27,.3)` | DESIGN.md has glows for orange and green but not red, though `brand-red` is a first-class accent. |

Three **keyframes** are also promoted out of hand-written CSS into the preset, so
they exist as `animate-*` utilities the React components can use:
`cta-pulse` and `testimonials-scroll` are real `@keyframes` in
`assets/css/main.css` reachable only via bare class names; **`pulse-slow` was
referenced in layouts as `animate-pulse-slow` but defined nowhere** — a dead class
given a real definition. `marquee` is a neutral alias for `testimonials-scroll`,
which drives the client-logo wall as well as testimonials.

## Porting traps

- **`rounded-lg` does not mean `rounded-lg`.** `main.css` contains
  `@layer utilities { .rounded-lg { border-radius: 2rem } }` — a global override
  making it 2rem instead of Tailwind's 0.5rem. Ported components use
  **`rounded-card`** (the real 2rem token). **Only the bare class is overridden**
  — `rounded-r-lg`, `rounded-2xl`, `rounded-3xl` keep stock values.
- **React 19 has no global `JSX` namespace.** `JSX.Element` fails (`TS2503`);
  import `ReactElement` from `react`.
- **Tailwind resolves competing utilities by stylesheet order, not class order.**
  This bit the port three separate times, so treat it as a rule: a `className`
  override only *appears* to work when the utility you want happens to be emitted
  later. `Icon`'s size default, `GradientText`'s gradient direction and
  `CardGrid`/`StatsGrid`'s bottom margin all needed real fixes (a prop, or an
  explicit `style={{}}` escape hatch) rather than documentation claiming
  `className` works.
- **Root `layouts/partials/footer.html` is intentionally empty** — it holds only
  `<!-- Footer removed for landing page -->` and `public/index.html` has zero
  footers. The **theme's** footer is the real markup and is what `Footer` was
  ported from. Not a bug.
- **`Logo`'s mark comes from `assets/`, not `static/`.** The partial resolves it
  via `resources.Get "images/logo.png"`; the literal `/images/logo.png` is only a
  fallback branch that never fires. `static/images/logo.png` **does not exist**,
  so `Logo` deliberately has no default `src` and degrades to a letter mark.

## Preview authoring — read before writing a preview

1. **Import images, never reference paths.** `/images/...` **404s** in the
   preview render: the capture server serves only `./ds-bundle`, and nothing
   copies `site/static/` in. But `.ds-sync/lib/story-imports.mjs` maps
   `.png/.svg/.webp/.ico` to esbuild's **`dataurl`** loader, so
   `import mark from '../../assets/images/logo.png'` inlines the real artwork.
   That is the correct approach — placeholders are a fallback, not the default.
   (One batch reported `/images/**` resolving; that was not reproducible — the
   bundle has no `images/` directory. Treat images as unserved.)
2. **The site has two image roots**: `static/images/` and Hugo's
   `assets/images/`, whose union becomes `public/images/`.
3. **The capture viewport is 900×700 with `fullPage: false`** — it clips, it does
   not scale. See the next section; this was the single biggest source of churn
   in the first sync.
4. Preview-only Tailwind classes now compile: `.design-sync/previews/**/*.tsx` is
   in the package's `content` globs. **Before that fix they silently no-opped**,
   which reads as a component bug. If you move the previews directory, update
   `packages/runink-ui/tailwind.config.cjs` or you will chase ghosts.

## The capture viewport — the binding constraint

Four independent batches converged on this, so it is the first thing to suspect.

- Default capture is **900×700**, `fullPage: false`.
- **900px is below Tailwind's `lg` (1024px)**, so any `lg:grid-cols-*` component
  silently screenshots its **stacked mobile layout** — the card looks plausible
  and is wrong. Tall bands simply clip at 700px.
- **`cardMode: "column"` is required to get a viewport at all** —
  `preview-rebuild.mjs` only emits the `viewport="WxH"` attribute for
  `single`/`column` cards, so a bare `viewport` on a grid-mode override is
  silently dropped. Always pair them.
- **`viewport` is a grade-key input**: changing it makes `package-capture.mjs`
  delete the grade file. `cardMode` alone is presentation-only and grades carry.
  Batch viewport changes, then re-grade in one pass.
- Measure rather than guess: drive the built card with playwright out-of-band at
  a candidate size and confirm nothing clips. Every viewport in
  `.design-sync/config.json` was measured this way.
- **`LandingHero` is `h-screen`**, so its document is always viewport + 112px
  (64px provider padding + 48px card body padding). No viewport fits; the
  clipped 112px is empty band and is expected.
- **`Header` needs a nested same-origin iframe** for its mobile drawer regardless
  of viewport — Tailwind breakpoints answer to the viewport, so a `md:hidden`
  drawer cannot exist at any card viewport ≥768px. The preview portals into a
  frame with cloned stylesheets.

## Open defect — `Header.DesktopBar` (graded `needs-work`, 1 of 215 cells)

The desktop four-flag **language switcher is compressed to a ~10px sliver** sitting
outside the bar's right edge. The flags render, at near-zero width.

What is already fixed and verified in that component: `whitespace-nowrap` on the
nav and CTA clusters stopped every multi-word label wrapping mid-phrase and
stopped the outlined pill's stroke being clipped; `flex-wrap` on the drawer's
language row stopped "Português" rendering outside the drawer panel.

What did NOT work, and was reverted rather than left in as unvalidated change:
widening the bar's `Container` to `max-w-screen-2xl`, adding `shrink-0` to the
CTA/language cluster, and moving the desktop breakpoint from `md:` to `xl:`.

Key evidence for whoever picks this up: it is **not** a viewport problem — it
reproduces identically at 1400px and 1600px, and the bar measures only ~1230px
inside a 1600px card, so it is not consuming the width available to it. Something
is capping the container below `max-w-screen-2xl`; find that first. The site's own
header is equally over-stuffed (min-content 1216px against a 1216px container), so
a real fix may mean thinning the nav rather than fitting it.

## Known render warns (triaged, expected — not new)

- **`[FONT_REMOTE]`** for `Inter`, `Plus Jakarta Sans`, `Cambria`. Expected: the
  package's `styles.css` carries the same Google Fonts `@import` that
  `baseof.html` makes with a `<link>`. There are **no local `.woff2` files
  anywhere in the repo**. `Cambria` is just part of Tailwind's stock `font-serif`
  fallback chain, not a brand face. If this ever becomes `[FONT_MISSING]`, the
  `@import` at the top of `packages/runink-ui/src/styles.css` was dropped — fix
  that rather than substituting fonts.
- **`[DTS_STYLE_SYSTEM]`** filtering `@types/react` props. Informational.
- **`[DOCS_UNMAPPED]`** for all 54 — there is no per-component docs tree; the
  `.prompt.md` files are synthesized from the `.d.ts` props plus the JSDoc, which
  is deliberately rich for exactly this reason.

## What is deliberately NOT synced

Decided with the owner on 2026-09-10.

**Hugo plumbing — excluded** (no component for a design agent to build with;
they wrap external libraries or Hugo's asset pipeline): `mermaid`, `toc`, `code`,
`figure`, `test-url`, `igo-demo`. `igo-demo` mounts the repo's pre-existing React
app at `assets/js/igo-demo/` via Hugo's `js.Build` — unrelated to the DS.

**Page content, restructured rather than ported**: six shortcodes had **zero
`.Get` parameters** and heavy inline 4-language i18n — page content expressed as
templates, not components:

| Shortcode | Lines | i18n branches | Ported as |
|---|---|---|---|
| `painkiller-pitches` | 308 | 46 | `TabbedPitches({tabs})` |
| `why-runink` | 214 | 26 | `ReasonsGrid({reasons})` |
| `contact-section` | 212 | 29 | `ContactSection` (props) |
| `pricing-table-1` | 168 | 3 | `PricingTable({tiers})` |
| `enterprise-a2a` | 99 | 20 | `CapabilityShowcase` |
| `use-cases-carousel` | 43 | 4 | `UseCasesCarousel({items})` |

Their structure became a parameterized component; the Runink copy moved into the
preview story. **i18n is intentionally gone** — React components take text as
props, and there is no Hugo language context in the bundle. The site is genuinely
4-language (en/fr/es/pt, 21 translated content files), so a shortcode rewritten to
call a React component would need its strings threaded through from Hugo.

**Caveat on that census**: it counted `.Get` params and therefore *undercounted*.
`pricing-table-1` is not hardcoded at all — it is JSON-driven via
`.Inner | transform.Unmarshal`, with the real tiers in `content/pricing.{md,fr,es,pt}`.
Do not trust the A/B/C split blindly on a re-sync; re-check `.Inner` usage too.

## Site-side findings this sync surfaced (not applied — the site is not ours to change)

Ordered by how much they matter.

1. **`static/images/logos/customer-1..18.png` are third-party trademarks.**
   They are `hugo-saasify-theme` filler — `customer-1.png` is the **Kroger** logo,
   `customer-5.png` Instituto Vital Brazil. Nothing renders them today
   (`client-logos` has zero call sites; they appear nowhere in `public/`), but the
   shortcode's purpose is a "Trusted by leading companies worldwide" band, so
   wiring it up with theme defaults would publish a fabricated endorsement.
   Recommend deleting them.
2. **`assets/css/main.css` is still entirely in the stone era** while `layouts/`
   has moved to the named `primary-*` ramp: it sets `body { bg-stone-950
   text-stone-300 }`, `.card { bg-stone-900 border-stone-800 }`, `.nav-link {
   text-stone-400 }`. This is a second live stylesheet (loaded through Hugo's
   PostCSS pipeline, separate from `static/css/style.css`, which the npm CLI
   builds from the *theme's* main.css). Half-finished restyle.
3. **`static/css/style.css` is committed and stale** — it needs a rebuild for the
   `primary-950` fix to reach production.
4. **`layouts/shortcodes/feature.html:20`** compares `{{ if eq $imagePosition
   " left" }}` — leading space from a line break — so `imagePosition="left"`
   never applies.
5. **`hero.html` emits a duplicate `class` attribute** in its no-gradient branch,
   so `bg-primary-900` is discarded and the band renders transparent.
6. **`hero.html` references `/images/grid.svg`, which exists nowhere** — that
   texture layer has never rendered, on the deployed site either. Dropped from the
   port rather than shipped as a dead element.
7. **`client-logos.html` heading is `text-3xl font-bold md:text-2xl`** — it gets
   *smaller* at `md`. Almost certainly meant `md:text-4xl`.
8. **30 hex literals are stock Tailwind colours** written long-hand:
   `#fca5a5`=`red-300` (18×), `#9f1239`=`rose-800` (10×), `#f59e0b`=`amber-500`,
   `#84cc16`=`lime-500`, `#4d7c0f`=`lime-700`. All verified against
   `tailwindcss/colors`. (`#FF3621`/`#4285F4`/`#29B5E8` are Databricks/Google/
   Snowflake brand colours — correctly not tokens.)
9. **Dead classes**: `shadow-elevation`, `badge`/`badge-neon`/`badge-icon`,
   `border-primary-850` are referenced but defined nowhere; `.feature-grid` is
   defined but referenced nowhere.
10. **`static/images/social/*.svg` are dark-fill** and near-invisible on the
    footer's `primary-950` band.
11. **`themes/hugo-saasify-theme/tailwind.config.copy.js`** is a stale copy of the
    *root* config, misplaced inside the theme. Nothing requires it.
12. **`Header`'s desktop bar has zero slack**: min-content 1216px vs
    `max-w-7xl − px-8` = 1216px exactly, so it wraps its own labels at every
    width. The mobile language row overflows at every phone width ("Português"
    clips at 390–430px).

## Component behaviour worth knowing

- **`safeHref`** (`src/lib/safeHref.ts`) guards every link and form `action`. The
  Hugo templates got this free from `relURL`; React renders `javascript:` hrefs.
  `content/test*.md` holds **seven XSS fixtures** aimed at `case-study-card`'s
  link param — all verified blocked. Image `src` is deliberately **not** guarded:
  `javascript:` does not execute there, and guarding would break legitimate
  `data:` URI images.
- **`SubscribeForm`'s success state is unreachable statically** — `submitted` is
  local state with no seeding prop, so no preview cell demonstrates it.
- **`Icon`'s `IconName` union is wider than its `PATHS` keys**; the extras resolve
  through `ALIASES`, and an unknown name silently falls through to a fallback
  glyph rather than throwing.
- **`Testimonials` and `ClientLogos` still need a small scoped `<style>` block**
  even with the `marquee` token: Tailwind 3 has no `animation-play-state` utility,
  so hover-to-pause must be a descendant rule. `ClientLogos` also runs at 30s, not
  the token's 40s.

## Re-sync risks

- **The React components can silently drift from the Hugo templates.** They were
  ported by hand on 2026-09-10 and nothing checks them against the shortcodes.
  Diff a shortcode against its component before trusting a no-change re-sync.
- **The invented tokens are ours, not DESIGN.md's.** If DESIGN.md later defines
  `primary-950`, `brand-sage-dark`, `brand-copper`, `brand-ink-raised` or the two
  extra shadows, remove the injection from `scripts/gen-tokens.mjs` so DESIGN.md
  wins.
- **The component stylesheet is compiled against the live site's markup**
  (`tailwind.config.cjs` `content` includes `../../layouts`, `../../content`).
  Deleting site layouts shrinks the shipped CSS, so utilities the design agent
  relied on can vanish without any component changing. The `safelist` protects
  only the brand token families.
- **Fonts are network-loaded.** If Google Fonts is ever swapped for self-hosted
  files, wire `cfg.extraFonts` or every design renders in a fallback face.
- **`BenefitsGrid` is authored to fit 700px**, so its copy is terser than the live
  band. A taller viewport override would let it carry full-length copy — declined
  this run because it clears four good grades for a cosmetic gain.
- The `.Get`-parameter census that drove the A/B/C split was taken against the
  working tree of branch `fix-styling-inconsistencies`, which had 97 uncommitted
  modified files. Re-check if that work landed differently.
