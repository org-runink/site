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

**Corrected 2026-09-10.** Everything this section previously said was wrong, and
wrong in a way worth recording rather than quietly deleting.

### What was wrong

`DESIGN.md`'s YAML frontmatter was treated as the source of truth. That
frontmatter defined `primary` as an indigo ramp and `secondary` as purple —
both **verbatim `hugo-saasify-theme` vendor defaults**, from a theme file with a
single commit in its history (`677d939`, the vendor drop). `DESIGN.md` itself was
written by a bot (`da8c7f1`, `google-labs-jules[bot]`, *"Analyzed the codebase …
to extract design tokens"*): it reverse-engineered the placeholder and canonised
it. The chain was **vendor filler → bot "analysis" → DESIGN.md → preset → design
system**, and nothing in the pipeline could tell the difference between a brand
and a theme default, because every stage faithfully propagated its input.

Two of the six "invented" tokens above were self-inflicted. `primary-950` was
justified as fixing 38 references in `layouts/` — but `primary-*` occurs **0**
times at the merge base and on `origin/main`. Those 38 references were created by
the uncommitted rename that was in the working tree at the time. The token was
invented to solve a problem the same uncommitted work had introduced. Watch for
this shape: a finding that justifies itself out of unlanded changes.

### What is true now

The palette is **extracted from Runink FACE**, not authored here.
`face/flutter/lib/core/theme/runink_theme.dart` is the authority; the web side
vendors an ARGB snapshot and re-derives everything from it. Three committed
inputs under `packages/runink-ui/tokens/`:

- **`face-ramp.json`** — the snapshot, keyed by exact Dart field name, stamped
  with the FACE commit it came from (`provenance.commit`). ARGB, not RGB, because
  `textSecondary` carries a different alpha in each ramp (`0x99` / `0xB3`) and a
  hex-only snapshot would silently drop it.
- **`registry.json`** — the **only** place the web↔FACE rename lives. Each entry
  carries `web`, `face`, `tier`, the Tailwind position keys the token may appear
  in, and a `why`.
- **`derived.json`** — the handful of web-only values, each with its measured
  table.

`npm run gen:tokens` reads those three and emits `src/tokens.css`,
`site/design-tokens.preset.js` and `tokens/REGISTRY.md`. **Do not edit the
outputs**; edit `registry.json`.

### Three things about the emitted form that are load-bearing

- **Channel triplets, not colours.** Every value is spelled
  `rgb(var(--rk-x-ch) / <alpha-value>)`. Tailwind's `withAlphaValue` cannot parse
  a bare `var()`, so a token emitted as `var(--rk-x)` makes **every** `bg-x/30`
  in the codebase compile to nothing — silently, with no error, leaving a system
  that still looks entirely plausible. `scripts/check-alpha-utilities.mjs` is the
  permanent assertion against this.
- **Per-position palettes.** `theme.textColor`, `backgroundColor`, `borderColor`
  and friends are defined **independently** rather than all inheriting
  `theme.colors`. That is what makes fill-vs-ink structural:
  `text-fill-success` does not compile because `fill-success` has no `textColor`
  entry. Misuse is a build error, not a review comment.
- **Two grounds, cascading.** Ground blocks contain **only** `--*-ch:`
  assignments, so the two ramps are trivially diffable and a missing token is a
  visible hole. They are selected by `[data-ground]`, which cascades — so a
  subtree can flip grounds, which a root-level `dark:` class cannot express.

The four **keyframes** (`cta-pulse`, `marquee`, `testimonials-scroll`,
`pulse-slow`) are still promoted into the preset so they exist as `animate-*`
utilities. `cta-pulse` was re-coloured onto `--rk-fill-accent-ch`; it previously
hard-coded the vendor orange as a literal `rgba()`. `pulse-slow` was referenced
in layouts as `animate-pulse-slow` but defined nowhere — a dead class given a
real definition.

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
5. **Every component carries one `OnSheet` cell.** It wraps the same composition
   in `<Surface ground="sheet">` and changes **nothing else** — ideally not one
   class differs from its console sibling. That is the point: the cell is a
   controlled experiment, and it only proves the tokens rebind if `ground` is the
   sole variable. A cell that also "fixes up" a colour to look good on light
   proves nothing and hides the bug it was added to find.

## What the light-ground pass found

The dark ground was this system's only ground for its entire prior life, and
`conventions.md` used to say *"There is no light mode. Do not build one."* Adding
one cell per component surfaced a class of defect that **every screenshot taken
until then had been blind to**, because all of them were of the dark ground:

| Found | Count | Why it was invisible before |
|---|---|---|
| `text-white` | 98 | correct on console, invisible on sheet |
| `shadow-neon-*` | 25 | retired by the migration; compiled to nothing |
| dead `var(--color-*)` | 21 | an undefined var invalidates its **whole declaration** and CSS drops it silently — `BackgroundEffects`' grid rendered *nothing*, in every cell, on both grounds |
| unqualified `prose-invert` | — | a hardcoded dark prose palette |
| `bg-white/5` | — | a lift on console, an exact no-op on sheet |
| solid fill + generic ink | 6 | the fill does not flip between grounds but the ink does |
| near-white placeholder wordmarks | 7 | vanished into the sheet; `grayscale` preserves luminance rather than rescuing it |

Two lessons worth more than the list. **The failure mode is silence** — every one
of these renders a plausible-looking component rather than an obviously broken
one, which is why the gates are scripts that count things rather than eyes on
screenshots. And **`check-usage.mjs` cannot see the parent/child case**: it
matches a fill and an ink on the *same element*, so a fill on a parent with the
ink on a descendant is the identical bug and is invisible to it. Two real
instances were found by agents reading code, not by the script. Treat a clean run
as "no same-element pairing errors", never as "contrast is fine".

## `-z-10` decoration needs a stacking context, or it paints nothing

A negative z-index only stays inside its parent if that parent is a **stacking
context**. `position: relative` alone is not one — it needs a `z-index`, or
`isolation: isolate`. Otherwise the child escapes every `z-index: auto` ancestor
and lands behind the nearest opaque background, rendering *nothing*.

Three components use the pattern and **only one was broken**, which is what made
it hard to see:

| | ancestor chain | outcome |
|---|---|---|
| `Hero`'s orb | `Container` carries `z-10` | contained — paints |
| `LandingScenario`'s glow | wrapper at `:118` carries `z-10` | contained — paints |
| `BenefitsGrid`'s heading bloom | `div.relative` → `Container` → `section.relative`, all `z-index: auto` | escaped behind `Surface` — **painted nothing** |

So "we use `-z-10` elsewhere and it works" was true and irrelevant. Fixed with
`isolate` on the bloom's parent, which creates the context without touching
layout. Grep for `-z-10` after any refactor that moves a decoration between
wrappers — the defect is silent, and two docstrings described the glow for the
whole time it was invisible.

## Preview and component docstrings drift in both directions

Only the **previews** are graded, so component docstrings quietly accumulate
stale claims. Both directions occurred in the same component:

- `PostMeta.tsx` kept "reading time and date sit flush right" long after the
  preview was corrected to "flush left" — a correction applied to the graded file
  only.
- The `PostMeta` **preview** cited the component as still claiming it "needs a
  dark canvas behind it", a phrase that had already been removed.

When you correct a claim, grep the other file for the same sentence. And prefer
not to quote one file's prose inside the other — a citation is a second copy that
has to be maintained, and it will rot without anything failing.

## Reading the sheets — two artifacts that produce false verdicts

Both of these nearly cost real verdicts, in both directions.

- **The tiled sheet under-reads light-ground contrast.** Downscaling into the
  contact sheet compresses exactly the narrow luminance range the sheet ramp works
  in, so a light-ground cell can look like it has a legibility problem it does not.
  Two cells were nearly failed this way and were clean at full resolution.
  **Any marginal call on the sheet ground must be re-checked against
  `_screenshots/review/raw/`.**
- **The raw captures clip; the contact sheet does not.** `raw/` is a fixed
  900×700 (or 1280×1200) viewport, so a tall band genuinely runs past the bottom
  edge there while being complete in the tiled sheet. That is a capture artifact,
  not a clipping defect. Check the tiled sheet before failing a cell for clipping —
  and the reverse of the rule above, so the two artifacts pull opposite ways and
  neither view is authoritative alone.

The general form: **the two views disagree in known, opposite directions.** Use
raw for colour, tiled for extent.

## Void grades by render hash, never by `git status`

`.design-sync/.cache/review/` is **gitignored**. A deleted grade file is gone —
no reflog, no `git checkout`. Roughly 4 agent-hours of verdicts live there with
no backup, so deleting one is a one-way door.

The temptation, after a fix wave, is to void the grades of every component whose
file changed:

```sh
git status --short packages/runink-ui/src/components/ .design-sync/previews/ \
  | sed 's|.*/||;s|\.tsx$||' | sort -u \
  | sed 's|^|.design-sync/.cache/review/|;s|$|.grade.json|' | xargs -r rm -f --
```

**Do not.** `git status` cannot tell a JSDoc edit from a border change. A
documentation sweep that touched 48 files — comment-only, incapable of moving a
pixel — voided 48 verdicts when about 8 components had actually re-rendered. The
other 40 were re-graded for nothing.

The converter already solves this: `package-capture.mjs` compares **render
hashes** and reports `N carried forward, M captured`. Let it decide. Run the full
capture first and read what it says changed; only then void anything it did not
carry forward. The one case that genuinely needs a manual void is a change the
render hash cannot see — and there is exactly one of those, `--force` after a
palette change, because the grade key does not include `srcSha` (see the trap
above).

Two smaller lessons from the same incident. **`cp … 2>/dev/null` hid the failure
of the backup** that would have made the loss recoverable — do not silence the
error on the command whose whole job is safety. And **the shell here is fish**,
where `VAR=$(...)` is not an assignment: the first attempt at this deletion was a
silent no-op that reported "0 deleted" against 54 intact files, which is how the
second attempt came to be written without a dry run.

## Order of operations — edit, build, capture, grade

In that order, with no edits in between. It sounds obvious and it is easy to get
wrong: a preview edited **after** `package-build.mjs` runs is not in the bundle,
so the captured sheet renders the *old* code while the source on disk shows the
new. Everything looks consistent — the source is right, the sheet exists, the
capture reported success — and the only thing that disagrees is the pixels.

This happened here. `UseCasesCarousel`'s six badge colours were retoned off the
vendor hexes at 12:29:17; the compiled `_preview/UseCasesCarousel.js` was from
12:22:54 and the sheet from 12:28:10. The grader caught it by sampling the badge
ink, getting `#7c3aed` back, and reasoning that `--rk-ink-violet-ch` is
`180 161 252` on console and therefore *could not* sample as that value. Nothing
else in the pipeline would have flagged it: the source is correct, the checkers
pass (they read source), and the capture had no reason to re-run.

Two habits that make it unlikely: **rebuild immediately before capturing**, and
when a grader reports a fix "did not work", check the artifact timestamps before
re-opening the fix. The second one matters — the natural response to "still
broken" is to change the code again, which would have made a correct fix worse.

## The gates, and what each exists because of

Five scripts under `packages/runink-ui/scripts/`. All are zero-dependency (node
built-ins over committed inputs), so none needs an install and none can be
skipped by a lockfile problem. `npm run check` runs them all; **`check:contrast`
and `check:usage` also run in CI** (`.github/workflows/deploy.yaml`, before the
builds).

| gate | catches | written because |
|---|---|---|
| `check-contrast.mjs` | 208 assertions over both ramps: inks ≥4.5:1 on all four surfaces, marks ≥3:1, every fill still **fails** as ink, the chip wash ceiling still bites at .18, severity ordered and separable | a ratio against a bare token is a lie when 78 utilities carry alpha — it composites over the real backdrop first |
| `check-usage.mjs` | solid fill under a generic ink; pinned `white`/`black`; unqualified `prose-invert`; raw hex; retired names; **undefined `var(--…)`**; backdrop-dependent `mix-blend-*` | an undefined var invalidates its whole declaration and CSS drops it **silently** — the rule renders nothing rather than rendering wrong |
| `check-alpha-utilities.mjs` | every alpha-modified utility whose base compiles must itself compile | Tailwind cannot apply `/NN` to a bare `var()`; a token emitted without an `<alpha-value>` placeholder makes `bg-x/30` vanish with no error |
| `check-collapsed-states.mjs` | a conditional or tone map painting two states the **same** colour, **and** a `hover:`/`focus:` that repeats its own rest state | a remap maps many source tokens onto fewer targets; four components kept accepting N tones and started painting N−1, and **19 interactions became dead** — including a `focus:` on a form input, which left keyboard users with no focus indication at all |
| `check-face-parity.mjs` | the vendored snapshot vs a live FACE checkout | the palette is not ours to author — **skips loudly without `FACE_DIR`, so a skip is not a pass** |

**Not in CI: `check:alpha`.** It reads the package's compiled
`dist/runink-ui.css`, which is gitignored and is not produced by the deploy
workflow — `pnpm run build` there compiles the *site's* Tailwind from a config
that does not glob `packages/runink-ui/src`. Pointing it at `static/css/style.css`
would find none of the classes it looks for and report a **vacuous pass**, which
is worse than not running it. Do not "fix" it that way.

### Three bugs found in the gates themselves

Worth recording, because each made a checker *confidently wrong* rather than
noisy, and that is the failure mode that matters here:

- **A greedy regex made a whole scan vacuous.** `([a-z-]+)-(.+)` parses
  `bg-fill-success` as position `bg-fill`, which is not a known position, so the
  utility was skipped — `check-collapsed-states` printed a green tick while
  seeing almost nothing. Split on the longest known position prefix instead,
  sorted longest-first so `ring-offset` beats `ring`.
- **Comments are not classes.** `check-usage`'s raw-hex rule fired on block
  comments inside `cx(...)` that quote measured values — i.e. on exactly the
  comments the project wants written. It strips comments now.
- **Nested maps are not flat maps.** Flattening `Record<Tone, {panel, tile}>`
  compares slots *across* tones and produced two confident false positives
  (`Header.ACTIONS`'s `desktop`/`mobile`, which are two placements of one action
  and are supposed to match). `check-collapsed-states` analyses flat maps only.
- **A gate only sees the shape it was written for.** The first version compared
  ternary arms and map keys, so it was blind to the *same* bug inside a single
  class string — `border-hairline … group-hover:border-hairline`. Three instances
  were found by an agent reading prose; adding the rule found **19**. When a human
  finds a defect a gate should have caught, the gate is the bug.

**Both no-op rules are scoped deliberately.** Only `hover`/`focus`/`active`-family
variants count, and only single-variant ones: a `dark:` or `md:` variant repeating
its base value is often a deliberate pin across a ground or breakpoint, and a
compound like `md:hover:` is conditional on more than the pointer.

### Two sanctioned exceptions, both enumerated rather than pattern-matched

- **`BRAND_HEXES`** in `check-usage.mjs` — Snowflake `#29B5E8`, Databricks
  `#FF3621`, Google `#4285F4`. A vendor's mark is not ours to tokenise; rendering
  the Snowflake logotype in Runink's orange misrepresents someone else's
  trademark. Enumerated, so a Runink colour smuggled in as a hex still fails.
- **`mix-blend-normal`** is not flagged. It is the escape hatch a component uses
  to *force* ground-neutrality over a caller's classes, which is the fix.

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

## Open defect — `Header.DesktopBar` (cell count was 215; it is 269 after the light-ground pass)

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

- **`[FONT_REMOTE]` no longer applies — corrected 2026-09-10.** The Google Fonts
  `@import` is gone and `Inter` / `Plus Jakarta Sans` with it. The package now
  self-hosts **Figtree** as `'Figtree Rk'`, matching FACE, from local `.woff2`
  files (the old note's "no local `.woff2` files anywhere in the repo" is false
  now). `Cambria` is also gone: it was never a brand face, only part of
  Tailwind's stock `font-serif` fallback chain, and the preset now overrides
  `serif` to drop it.

  **`[FONT_MISSING]` is a failure here, not a warn.** The moment a declared face
  has no file, both the reference and candidate panels render the same chromium
  fallback — so the screenshots *match*, the capture looks clean, and every real
  user gets the wrong font. Treat it as a hard stop.

  One trap, worth its own line: Figtree is a **variable font whose default
  instance is Light (300)**. Its `@font-face` **must** declare
  `font-weight: 300 900`. Omit the range and every weight in the system renders
  Light — including `font-black` headings, which simply look thin rather than
  broken. There is a load-bearing comment on this in `src/fonts.css`; do not
  "tidy" it away.
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
  **`content/tests/`** holds the XSS fixtures aimed at `case-study-card`'s link
  param — all verified blocked. (They were at `content/test*.md`; they are drafts
  under `content/tests/` now, and the `Guard published output` step in
  `.github/workflows/deploy.yaml` is what keeps the next set from reaching
  `gh-pages` — one of them once shipped a working CTA pointing at `//evil.com`.) Image `src` is deliberately **not** guarded:
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
- **The palette belongs to FACE. Do not add a colour here.**
  `scripts/check-face-parity.mjs` re-parses `_Ramp.dark` / `_Ramp.light` from a
  live FACE checkout (via `FACE_DIR`) and diffs them against the vendored
  snapshot. It **skips loudly** when `FACE_DIR` is unset, which is the normal
  local case — so a skipped parity check is not a passing one. Run it with
  `FACE_DIR` pointed at a real checkout before trusting a re-sync, and re-stamp
  `face-ramp.json`'s `provenance.commit` whenever the snapshot moves.
- **Grades do NOT clear when a component's source changes.** For
  `shape: "package"` the converter passes no `srcSha`
  (`package-build.mjs:838`), so source edits route to the spot-check canary tier
  instead of invalidating verdicts. On a palette change that is exactly wrong:
  every stale `good` carries forward over a completely different-looking system
  and `resync.mjs` still exits 0. **On any change to colour, spacing or type,
  capture with `--force`** and treat existing verdicts as void by construction
  rather than as evidence.
- **A scoped `package-capture.mjs --components …` run prunes the review sheets
  for every component NOT in its scope.** Re-capturing two components after a fix
  left 2 sheets on disk out of 54. Harmless if you know — the sheets regenerate —
  but it will look like catastrophic data loss if you do not. Re-run the full
  capture before grading.
- **The component stylesheet is compiled against the live site's markup**
  (`tailwind.config.cjs` `content` includes `../../layouts`, `../../content`).
  Deleting site layouts shrinks the shipped CSS, so utilities the design agent
  relied on can vanish without any component changing. The `safelist` protects
  only the brand token families.

  **This fired, and here is what it looked like.** A content fact-check pass
  removed whole sections, four images and a dead shortcode layer. The next build
  dropped the CSS from 368,436 → 367,216 bytes and **2,611 → 2,605 rules**. The
  fifteen selectors that disappeared were `bg-[url('/images/grid.svg')]`,
  `bg-center`, the `[mask-image:…]` pair (the dead grid texture removed from
  `hero.html`), `pt-32`/`pb-40` (the unused `size="double"` padding), and eight
  literal-hex utilities that existed only in deleted content.

  **The check that makes this safe takes one command.** Snapshot
  `dist/runink-ui.css` before the build, diff the top-level selectors after, and
  grep every dropped one against `packages/runink-ui/src` and
  `.design-sync/previews`. If a dropped utility appears in either, a component or
  preview has silently lost its styling; if it appears in neither, the shrink is
  just the site shedding markup and is correct. Do this on any re-sync that
  follows a content or layout change — the failure is invisible otherwise, and
  every gate stays green while a card renders unstyled.

  One trap while doing it: a dropped name can appear in package source as **prose
  in a comment**. `grid.svg` matched `Hero.tsx` on this run, in the comment
  explaining why the grid layer was deleted. Read the hit before acting on it.
- **Fonts are self-hosted now** (Figtree, via `cfg.extraFonts`). The swap this
  bullet used to warn about has happened. `layouts/partials/rk-fonts.html` has an
  `errorf` gate that fails the Hugo build when a declared face has no file —
  keep it, and run its negative control after changing the face list.
- **Two colour systems still coexist in this repo.** `site/DESIGN.md` and
  `assets/css/tokens.css` describe the *site's* identity (a stone ramp, the Fira
  superfamily, the solid/hollow epistemic mark); `@runink/ui` now ships FACE's
  (wine/olive/orange, Figtree). They are not reconciled, and the site's `--rk-*`
  tokens reach only the `noindex` `/design/` specimen, so nothing is visibly
  broken — but do not assume a name means the same thing on both sides of that
  line.
- **`BenefitsGrid` is authored to fit 700px**, so its copy is terser than the live
  band. A taller viewport override would let it carry full-length copy — declined
  this run because it clears four good grades for a cosmetic gain.
- The `.Get`-parameter census that drove the A/B/C split was taken against the
  working tree of branch `fix-styling-inconsistencies`, which had 97 uncommitted
  modified files. Re-check if that work landed differently.
