# Restyle — what needs an owner's decision

Written 2026-09-10, at the end of the migration of runink.org from the black
canvas onto Runink FACE's two-ground token system.

The restyle itself is done and measures: contrast failures across the site went
from 857 failing text nodes to 0, and seven CI checks now guard the palette.
What follows is everything the work turned up that is **not** mine to decide, or
that is a pre-existing defect outside the scope of a colour change.

---

## A. Decisions about how the site should look or read

### A1. `badgeColor:` front matter still carries eight pre-rebrand hues

Ten use-case stems × four languages set `badgeColor:` to literal values
(`#7c3aed`, `#3b82f6`, `#ec4899`, `#14b8a6`, `#f59e0b`, `#ea580c`, `#0ea5e9`,
`#10b981`). They are live: `layouts/shortcodes/use-cases-carousel.html:25`
injects them as inline `border-color` + `color`, and `layouts/_default/feature.html:2`
as `--badge-color`.

So the use-case badges are the last place on the site running a second palette.
The industry pages had the identical problem and it is now fixed — they carry a
`category:` key and the layout emits a `.rk-cat-*` class, which binds through
tokens and therefore follows the ground. **The same fix applies here** if you
want it: the question is whether a use case should be colour-coded at all, and
if so by what — its industry, or one accent for all.

### A2. Two use-case pages show a different badge colour per language

Not a preference, a bug, but the fix depends on A1:

| stem | en | es / fr / pt |
|---|---|---|
| `compliance` | `#10b981` | `#ea580c` |
| `fulfillment-optimization` | `#ea580c` | `#0ea5e9` |

Everything else about the four languages is now byte-identical in markup.

### A3. `content/products/face.md` lost a four-way distinction

The three numbered groups and "The seam" each had their own chip colour. With
one accent they are now identical, and only the "1. / 2. / 3." in the copy
separates them. That follows the doctrine — the site has one accent — but it is
a real change in how the page reads. If the grouping matters, it should be
carried by structure (headings, rules, spacing) rather than restored as hue.

### A4. Gradient-clipped headings vs printing

Ten of the twelve use-case pages render their card heading with
`text-transparent bg-clip-text`. That goes **invisible** whenever a browser
drops backgrounds — which is what printing does by default. These are pages the
review said get printed and carried into meetings. The other two
(`insurance-underwriting`, `paralegal-review`) are already flat text. One
decision wanted across all twelve.

### A5. The decorative glows are mostly gone; a few remain

`tokens.css` records that the neon glows are not part of the system. Agents
removed them where they were converting the element anyway. About eight
`shadow-[0_0_Npx_rgba(...)]` survive, in `hr-diagram.html`, `pricing-table-1.html`,
`use-case-parallax.html`, `contact-section.html`, `_default/list.html`,
`_default/single.html` and `components/cta.html`. They are black-page devices.
Removing them is a design call, not a token substitution.

### A6. `layouts/partials/background-effects.html` no longer has a job

Its radial vignette was `from-stone-900 via-stone-950 to-stone-950`, which now
resolves to sheet → ground → ground — `via` and `to` are the same token, so it
is a gradient between a colour and itself. Its 1px lattice at `opacity-20` is a
whisper on a light page. Both were visibility tricks for a black canvas. It
looks like a clean deletion, but it has **13 call sites**, so it wants a
deliberate pass rather than an incidental one.

---

## B. Pre-existing bugs found along the way (none caused by the restyle)

### B1. A French paragraph switches to Portuguese mid-sentence

`layouts/shortcodes/painkiller-pitches.html:132` — the French pitch opens in
French and continues "Runink é um ativo de recuperação de capital".

### B2. The use-case accent callout has never rendered its accent

On the use-case pages the callout carries
`class="text-lg text-stone-400 … text-[#hex] … text-sm"`. In the compiled CSS
`.text-stone-400` comes **after** the accent rule, so the grey has always won
and the line has never been accented. The same element also carries `text-lg`
and `text-sm`, and `font-medium`, `font-semibold` and `font-bold`. The
duplicate utilities need deleting; that is an edit to the markup's structure,
not to a colour.

### B3. `assets/js/main.js` tab toggle is inconsistent

Deactivating removes both `border-orange-600` and `border-orange-400`;
activating only ever adds `border-orange-400`. So the initially-active tab
(which ships `600` in the markup) silently changes shade the first time you
click away and back. Line 102's
`svg.classList.replace('text-white', 'text-stone-300')` is also a no-op — the
markup has `text-stone-300 group-[.active]:text-white`, not a bare `text-white`.

*(Both `orange-600` and `orange-400` now resolve to the same signal token, so
the visible symptom is gone — but the JS is still wrong and will surprise the
next person who touches it.)*

### B4. The vendored theme's layouts are entirely dead — *glob removed, see below*

All **43** files under `themes/hugo-saasify-theme/layouts/` are shadowed by a
project file of the same relative path, so Hugo never renders one of them.

They were still listed in `tailwind.config.js`'s `content` array, so Tailwind
compiled utilities for markup that cannot reach a page. **That glob is now
removed**, verified rather than assumed:

- built both ways and diffed the emitted selectors — 36 disappeared
- checked all **36 against every class attribute in all 709 rendered pages**:
  **none of them is used anywhere**
- compiled CSS went from 119,827 to 102,621 bytes (**−14%**)
- all six checkers still pass on the resulting build

The theme directory itself stays (`hugo.toml` still declares the theme, and its
`tailwind.config.js` is still used as a preset for `theme.extend`). What is gone
is scanning 43 unreachable templates for classes.

**Still open:** the 43 shadowed files are dead weight in the repo. Deleting them
is a separate decision — they are the vendor's, and keeping them makes future
theme updates diffable.

### B5. Two shortcodes cannot take a token for their colour parameter

`layouts/shortcodes/feature.html:5` and `features-list.html:2` default a colour
parameter to a hex and then **string-concatenate an alpha suffix** onto it
(`box-shadow: 0 0 15px {{ $badgeColor }}80`, `background-color: {{ $color }}15`).
That idiom only works for a hex. Supporting tokens means changing how the alpha
is applied (a channel triplet with `rgb(var(--x) / .5)`, or a class).

### B6. `layouts/shortcodes/landing-scenario.html:50` — the window-chrome dots

A red / amber / green triple imitating macOS window buttons. There is no green
in the palette, and routing them to the signal would make all three the same
warm colour. They currently stay as stock Tailwind. One decision for the triple;
`code.html:10-12` has the same three.

### B7. Small ones

- `layouts/shortcodes/hr-diagram.html:39` contains `transform 45deg rotate-45` —
  `45deg` is not a class, it is leftover from hand-editing.
- `.ind-problem` declares `transition: border-color` but has no hover or focus
  rule to transition.

---

## C. What was fixed that you should know about

Not decisions — recorded because each was invisible and each had shipped.

1. **`tokens.css`'s `@media print` block had been dead for months.** Three
   drafts of one comment were merged without removing the delimiters, so a
   comment closed early and ~28 lines of prose sat outside any comment. CSS
   error recovery reads that prose as a selector prelude and consumes up to the
   next `{` — which was the rule blacking out the palette for paper. Category
   accents printed in colour at about 2.4:1, beneath a comment reading
   *"Verified on paper, not assumed."* `scripts/check-token-syntax.mjs` now
   fails on it.

2. **`var()` inside a Hugo `style="…"` attribute silently dies.** Go's
   contextual escaper filters style-attribute values and rejects parentheses,
   substituting the literal string `ZgotmplZ`. A hex passed for years; the trap
   only sprang when the colours became tokens. Ten call sites now use
   `| safeCSS`, and `scripts/check-rendered-output.mjs` fails on `ZgotmplZ`.

3. **`prose prose-invert` on eight templates** pinned body copy to the *light*
   ink set, i.e. near-white text on near-white paper. Prose is now bound to the
   tokens for both grounds.

4. **`text-white` on an accent fill measured 3.5:1** across 45 call sites. The
   ink for a fill is `on-fill` (FACE's `onAccent`), now used.

5. **The ink tiers were solved against the canvas only.** `--rk-text-3` cleared
   4.70:1 there and 4.39:1 on `--rk-sunk` — below AA on every card caption. Four
   ramp rungs were re-solved against the worst surface they sit on.

6. **The per-page accent plumbing was inert.** Both the homepage and the five
   industry pages injected `style="--accent: <hex>"` into stylesheets that had
   moved to `--rk-accent`, so all five industries rendered monochrome and the
   hexes were stale pre-rebrand values. They now carry `category:` front matter
   and a `.rk-cat-*` class, which binds through tokens and follows the ground.
   29 dead front-matter keys removed.

7. **The whitepapers have their own `baseof` and it never loaded the tokens.**
   `layouts/whitepapers/baseof.html` pulls in `main.css` for the shared header,
   footer and consent banner — and those partials are now written in `--rk-*`.
   With no `tokens.css`, every one of their colour declarations resolved to an
   undefined `var()`, which CSS drops silently: the chrome lost its colours on
   all eight whitepaper pages and the consent banner rendered with no panel,
   its text overlapping the page. It now loads the token layer and declares
   `data-ground="console"` on `<html>`, which is the honest description — that
   deck genuinely is dark, and the shared chrome now resolves light-on-dark.
   The `.wp` reading column keeps its own `--paper`/`--deck` variables and was
   not moved onto the token system.

   *A 14-page sample read 0 failures while this was live on 8 pages. The
   full 709-page sweep is what found it.*

8. **The `/design/` specimen was documenting the palette it replaced.** Its
   three tables — the 14-rung neutral ramp, the signal pair, and the 46-row
   contrast proof — were hand-written hexes and hand-typed ratios, and after the
   move to FACE they still asserted `#F2801F` as the signal and `#101A22` as the
   ground. Measured ratios, stated with confidence, for colours that existed
   nowhere in the repo — on the one page whose entire job is to be the authority
   on what the tokens are.

   All three are now generated by `scripts/gen-contrast-proof.mjs` into
   `data/contrast_proof.json`, including each rung's role string, which is read
   out of the ground blocks rather than written by hand. CI runs the generator
   with `--check`, so the committed file cannot drift from `tokens.css` and no
   pair can fall below its floor unnoticed.

   Two smaller things fell out of that:
   - The proof table demonstrated the **mark** tier by rendering it as "Sample
     text". A mark's floor is 3:1, which is right for a boundary and wrong for a
     word, so the page was publishing six examples of text at ~3.2:1 in its own
     proof column — and the rendered audit flagged all six, correctly. Marks now
     render as a rule on their ground, which is what a mark is.
   - Collapsing the old `{{ range slice … }}` blocks left two orphaned `}}`
     terminators rendering as literal text on the page. `check-rendered-output.mjs`
     only looked for `{{`, so it passed. It now also fails on a line that is
     nothing but `}}`, scoped to text context so JSON-LD does not false-positive.

---

## D. A trap worth knowing about, in the audit tool itself

`scripts/audit-contrast.mjs` drives a real browser, and Hugo emits pagination
aliases (`/tags/<x>/page/1/`) as a 269-byte stub whose entire content is
`<meta http-equiv="refresh" content="0; url=https://runink.org/tags/<x>/">`.

A browser follows that. So for roughly 224 pages the audit was **loading the
live production site over the network** and reporting its colours as though
they were this build's — which is exactly why an early full-sweep run showed
literal `#8B9A6E` gradients and un-rebound `slate`, neither of which exists
anywhere in this tree.

The tool now refuses to measure any page that lands on a different origin, and
prints how many it skipped and why, so a page it did not measure can never be
mistaken for a page that passed. Worth remembering for any other checker that
walks built output with a browser: **an alias is not a page**, and a redirect is
not a rendering.
