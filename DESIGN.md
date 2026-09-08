# Runink — visual identity

The source of truth. Every colour, size, face and duration the site is allowed to
use is defined here and implemented once in `assets/css/tokens.css`. Pages consume
`var(--rk-*)`. Pages do not write literals.

Specimen: **`/design/`** — draft, `noindex`, not linked from navigation. It renders
the whole system on one page, including the measured contrast table, and it is the
fastest way to check whether a value exists before inventing one.

---

## 1. Where this comes from

Runink sells software that reads across systems that were never built to talk to
each other, works out what the combined picture means, and puts one proposed action
in front of a **named person who approves it**. Nothing acts on its own. All of it
runs on hardware the customer owns.

Two facts about the company's own material drive the identity harder than any
aesthetic preference:

**It refuses to claim.** There are no ROI figures, no percentages, no customer names
in the whitepapers — deliberately. Instead every claim carries a mark saying where
it stands: `runs`, `drawn`, `hypothetical`, `not measured`, `first-party`,
`self-declared`. Where a competitor puts a number, Runink puts its epistemics. That
is genuinely unusual and it is the most defensible thing the company owns. It is the
signature of this identity.

**The audience is operations, finance, risk and compliance leadership.** A July
audit of the customer material said it is too technical and has to convince of
business value. These readers print things. They carry them into meetings, photocopy
them, and mark them up. Paper is a ground this system has to work on, not an
afterthought — which is why print rules live in the token file rather than in each
page, and why the contrast table below covers every sanctioned pair.

### The one risk this identity takes

**The most important distinction in the system is not carried by colour.**

A claim that is a *record* is set with a **solid** mark. A claim that is a
*description* is set with a **hollow** mark. Same size, same hue, same weight — the
only difference is fill.

The obvious alternative was green-for-verified and amber-for-unverified. It was
rejected on the subject's own terms: green/amber imports a verdict, and these
standings are not better and worse. `hypothetical` is not a failed `runs`; it is a
different kind of statement. A palette that grades them contradicts the one thing
the company is careful about.

Fill also survives the three places colour does not: a greyscale print, a photocopy,
and a reader who does not separate red from green. For a company whose material is
printed and carried, that is not a compromise — it is the reason.

Spending the signature there frees colour for the two jobs it is actually good at,
below.

---

## 2. The rule about colour

Colour has exactly two jobs.

1. **Signal** — one orange. It means *a person can act here*: links, focus, the
   primary action, the approval seam. It is never used for emphasis, never for
   decoration, never for a heading. An orange thing on a Runink page is always
   something you can do.
2. **Category** — which industry or product this is. A category colour is never
   legible on its own; the industry is always named in text beside it. That is what
   makes it acceptable for two of the five to sit close in hue.

Nothing else gets colour. **Standing is fill. Emphasis is weight. Hierarchy is scale
and rule.**

No category may sit in the signal hue band (roughly 10°–45°). That constraint is the
reason logistics moves off `#ea580c`: on that page, "this is a category" and "you can
click this" were the same colour.

---

## 3. Typography

### The faces

**Fira** — Fira Sans, Fira Sans Condensed and Fira Code. One superfamily, three jobs.

| Role | Face | Weights | Token |
|---|---|---|---|
| Display, headings | Fira Sans Condensed | 600, 800 | `--rk-font-display` |
| Reading, interface | Fira Sans | 400, 400*i*, 500, 600 | `--rk-font-body` |
| Standings, figures | Fira Code | 400, 500 | `--rk-font-util` |

**Source and licence.** Subset and converted to WOFF2 from the locally installed
`ttf-fira-sans 1:4.301-3` and `ttf-fira-code 6.2-4`. Both are under the **SIL Open
Font License 1.1**, confirmed in `/usr/share/licenses/ttf-fira-sans/OFL.txt` and
`/usr/share/licenses/ttf-fira-code/LICENSE`. The OFL permits redistribution,
modification (including subsetting) and web embedding; it forbids selling the fonts
alone and requires the copyright notice, which is carried in
`assets/fonts/LICENCE.md`. Eight files, 222 KB total, served from this origin.

**Why this and not the alternatives.**

- Not **Inter + Plus Jakarta Sans**, which the site loads today. It is the single
  most common SaaS pairing, and it is fetched from `fonts.googleapis.com` on every
  page — a company whose entire argument is that your material should not be sent to
  a third party, requesting its typeface from one on every page load. Whatever the
  identity was going to be, that had to go.
- Not **IBM Plex**, which is the reflexive answer for "serious, open-source,
  sovereign" and is consequently everywhere in this market.
- Fira was drawn for Mozilla's Firefox OS — an attempt to build a phone platform not
  owned by Google or Apple. The typeface of a self-owned platform. That is the face's
  actual provenance, not a story retrofitted onto it.
- Spiekermann drew Fira Sans for legibility at small sizes on poor screens. That is
  also the condition of a printed measures table and an 11px standing mark.
- A superfamily is the typographic form of the product's own claim: faces drawn to
  different briefs, made to read as one voice.
- Five of the eight faces were already vendored for the whitepapers and already
  proven to publish. Two were added (Fira Sans Medium 500, Fira Code Medium 500) to
  give labels and standing marks a rung between Book and SemiBold.

**Character coverage.** The subset is Latin-1 plus punctuation, currency,
super/subscripts, arrows and the geometric shapes, which fully covers the site's
English, Spanish, French and Portuguese content (ç, ã, õ, é, ñ, ê, ô are all in
`U+00A0–U+00FF`). `U+0178` (Ÿ) was added for French proper names; it was missing from
the original whitepaper subset.

### Scale

The ratio accelerates — about 1.17 through the reading sizes where fine control
matters, about 1.33 through the display sizes where a jump has to be unambiguous. A
single geometric series gives you either mush at the bottom or timidity at the top.

| Token | Size | Face | Job |
|---|---|---|---|
| `--rk-t-display` | 4rem / 64px | display 800 | The one display line on a page. Condensed Heavy only. |
| `--rk-t-1` | 3rem / 48px | display 800 | Page title. |
| `--rk-t-2` | 2.25rem / 36px | display 800 | Section head. |
| `--rk-t-3` | 1.75rem / 28px | display 600 | Subsection. |
| `--rk-t-4` | 1.375rem / 22px | display 600 | Card and block heads. |
| `--rk-t-lead` | 1.1875rem / 19px | body 400 | Decks. Read once. |
| `--rk-t-read` | 1.0625rem / 17px | body 400 | Long-form running text. Read for an hour. |
| `--rk-t-body` | 1rem / 16px | body 400 | Interface prose. The default. |
| `--rk-t-small` | 0.875rem / 14px | body 400 | Dense cells, secondary UI. |
| `--rk-t-fine` | 0.8125rem / 13px | body 400 | Captions, sources, footnotes. |
| `--rk-t-label` | 0.75rem / 12px | body 600 | Eyebrows, chips, table heads. Tracked, upper. |
| `--rk-t-mark` | 0.6875rem / 11px | util 500 | Standing marks and column heads. The floor for a tracked mono cap that must survive a phone and a 600dpi print. |

Line height: `--rk-lh-display` 1.02, `--rk-lh-head` 1.15, `--rk-lh-lead` 1.45,
`--rk-lh-body` 1.6, `--rk-lh-dense` 1.45, `--rk-lh-mark` 1.

Tracking: `--rk-tr-display` −0.02em, `--rk-tr-head` −0.01em, `--rk-tr-body` 0,
`--rk-tr-label` 0.1em, `--rk-tr-mark` 0.16em.

Measure: `--rk-measure-head` 18ch (display stacks narrow and dense — the tight
condensed headline block is the page's silhouette), `--rk-measure-lead` 52ch,
`--rk-measure-body` 66ch.

---

## 4. Palette

### One ramp, read from both ends

The sheet (light) and the console (dark) are the **same neutral ramp**. `--rk-n-050`
is the sheet's canvas and the console's text; `--rk-n-900` is the sheet's text and
the console's canvas. A component written against the semantic names works on both
grounds without being written twice.

The hue is a blue-black around 205°, low chroma — document ink. It replaces the
previous `primary` ramp, which ran to a periwinkle `#5573df` and bottomed out at a
violet-leaning `#1b2456`. The problem was never "navy"; it was *that* navy: a
blue-violet that reads as generic SaaS on screen and muddies on a mono laser printer.
Blue-black is what a document that gets printed is written in.

| Token | Hex | Role |
|---|---|---|
| `--rk-n-000` | `#FFFFFF` | sheet: raised surface |
| `--rk-n-050` | `#F2F5F7` | sheet: canvas · console: text |
| `--rk-n-100` | `#E6ECEF` | sheet: recessed surface |
| `--rk-n-200` | `#D2DADF` | sheet: hairline |
| `--rk-n-300` | `#B6C2CA` | console: body text |
| `--rk-n-400` | `#8C9BA6` | console: labels, captions |
| `--rk-n-450` | `#76838B` | sheet: boundary rule |
| `--rk-n-500` | `#647680` | console: boundary rule |
| `--rk-n-600` | `#546570` | sheet: labels, captions |
| `--rk-n-700` | `#3A4A55` | sheet: body text |
| `--rk-n-750` | `#2C3B46` | console: hairline |
| `--rk-n-800` | `#18242D` | console: raised surface |
| `--rk-n-900` | `#101A22` | sheet: text · console: canvas |
| `--rk-n-950` | `#0A1015` | console: recessed surface |

### Signal

Runink's orange, held at two values that measure.

| Token | Hex | Ground |
|---|---|---|
| `--rk-signal-ink` | `#A8400A` | sheet |
| `--rk-signal-lift` | `#F2801F` | console |

**On the defect in the palette this replaces.** `brand_accents.dark_orange`
`#ca4708` was published as usable. Measured: **4.76:1 on white** and **4.55:1 on
`gray_50`** — those pass. But **4.22:1 on `#F5F1E8`**, the whitepaper's own paper,
and **4.22:1 on `#eef1fc`**, `primary.50` — the two grounds it most often sat on.
Under AA for body text in exactly the places it was used. The whitepaper CSS had
already darkened it locally to `#b83f07` (4.97:1 on paper) without the published
value ever being corrected.

### Category

Five industries, two bindings each. Every value measures AA or better on all three
grounds of its mode, so the raw accent is legible as text and needs no darkening
step. `--rk-accent` defaults to the ink colour: **a page with no category has no
category colour.**

| Industry | Sheet | Console | Note |
|---|---|---|---|
| Logistics & Supply Chain | `#0F6F73` | `#4FB3B3` | **Moves.** Was `#ea580c`, the signal hue. |
| Insurance | `#5847B8` | `#9B8CF0` | Same family as `#778fe6`, made legible. |
| Banking & Financial Services | `#5A6B31` | `#A3B96A` | Same family as `#C8D9A8`, made legible. |
| Telecom | `#1D5480` | `#5FA8DC` | Same family as `#c084fc`, moved to blue for hue spread. |
| Marketing | `#A03A5E` | `#E4809C` | Replaces `#D4A574`, too pale and too near signal. |

Four of five are corrections to the accent the section already used. Only logistics
genuinely moves, and it moves for a stated reason.

Applying these means one line of front matter per page in `content/industries/`.
That is a later pass, not this one — this pass defines the contract.

---

## 5. Measured contrast

Every pair the system sanctions. **A pair that is not in this table is not
sanctioned.** Text pairs meet WCAG 2.1 AA (4.5:1); rules and boundaries meet the 3:1
non-text minimum. The specimen at `/design/` renders each pair beside its number, so
the claim and the thing it describes cannot drift apart.

### Sheet ground

| Foreground | `#FFFFFF` sheet | `#F2F5F7` canvas | `#E6ECEF` sunk |
|---|---|---|---|
| `--rk-text` `#101A22` | 17.60:1 AAA | 16.08:1 AAA | 14.76:1 AAA |
| `--rk-text-2` `#3A4A55` | 9.17:1 AAA | 8.37:1 AAA | 7.69:1 AAA |
| `--rk-text-3` `#546570` | 6.05:1 AA | 5.52:1 AA | 5.07:1 AA |
| `--rk-signal` `#A8400A` | 6.17:1 AA | 5.64:1 AA | 5.18:1 AA |
| `--rk-rule-strong` `#76838B` | 3.90:1 AA non-text | 3.56:1 AA non-text | 3.27:1 AA non-text |
| cat logistics `#0F6F73` | 5.93:1 AA | 5.42:1 AA | 4.97:1 AA |
| cat insurance `#5847B8` | 6.98:1 AA | 6.38:1 AA | 5.85:1 AA |
| cat banking `#5A6B31` | 5.86:1 AA | 5.35:1 AA | 4.92:1 AA |
| cat telecom `#1D5480` | 7.98:1 AAA | 7.29:1 AAA | 6.69:1 AA |
| cat marketing `#A03A5E` | 6.44:1 AA | 5.88:1 AA | 5.40:1 AA |

### Console ground

| Foreground | `#101A22` canvas | `#18242D` raised | `#0A1015` sunk |
|---|---|---|---|
| `--rk-text` `#F2F5F7` | 16.08:1 AAA | 14.43:1 AAA | 17.47:1 AAA |
| `--rk-text-2` `#B6C2CA` | 9.69:1 AAA | 8.70:1 AAA | 10.53:1 AAA |
| `--rk-text-3` `#8C9BA6` | 6.17:1 AA | 5.53:1 AA | 6.70:1 AA |
| `--rk-signal` `#F2801F` | 6.61:1 AA | 5.93:1 AA | 7.18:1 AAA |
| `--rk-rule-strong` `#647680` | 3.73:1 AA non-text | 3.34:1 AA non-text | — |
| cat logistics `#4FB3B3` | 7.07:1 AAA | 6.34:1 AA | 7.68:1 AAA |
| cat insurance `#9B8CF0` | 6.21:1 AA | 5.57:1 AA | 6.74:1 AA |
| cat banking `#A3B96A` | 8.14:1 AAA | 7.30:1 AAA | 8.84:1 AAA |
| cat telecom `#5FA8DC` | 6.81:1 AA | 6.11:1 AA | 7.40:1 AAA |
| cat marketing `#E4809C` | 6.59:1 AA | 5.92:1 AA | 7.17:1 AAA |

**`--rk-rule` is not in this table and that is correct.** `#D2DADF` is 1.42:1 on
white. It is a hairline: separation between things that are already separate, never
the only thing communicating a boundary. Anything a reader has to perceive as an edge
uses `--rk-rule-strong`.

---

## 6. Space, radius, elevation, motion

### Space

Ten rungs at roughly 1.5×. Coarse on purpose: two adjacent values are visibly
different, so nobody has to decide between 20px and 24px — which is where spacing
drifts in a codebase several people touch.

`--rk-s-1` 4px · `-2` 8 · `-3` 12 · `-4` 16 · `-5` 24 · `-6` 32 · `-7` 48 · `-8` 64 ·
`-9` 96 · `-10` 128.

### Radius

`--rk-r-0` 0 (marks) · `-1` 2px (chips) · `-2` 4px (controls) · `-3` 8px (cards) ·
`-4` 12px (bands).

**Nothing above 12px.** The previous system went to 40px, which is the radius of a
consumer app card and belongs to a different argument. This material is a document,
and a document has a corner. The standing mark is at 0 because a square that must
read as filled-or-hollow at 7px cannot afford a curve.

### Elevation

`--rk-e-0` none · `--rk-e-1` raised · `--rk-e-2` floating.

Two shadows, and they are for things that genuinely float — a menu, a dialog.
Everything else expresses depth with **a rule and a change of ground**, because that
is the part that survives being printed. The previous system's `neon_orange` and
`neon_green` glows are gone: a glow means nothing on paper and reads as a games
console rather than a control record.

### Motion

`--rk-dur-1` 120ms (state) · `--rk-dur-2` 200ms (transition) · `--rk-dur-3` 320ms
(entrance). `--rk-ease` `cubic-bezier(.2, 0, 0, 1)` — a decisive ease-out with no
overshoot. The product puts a proposal in front of a person; the gesture should land,
not bounce. `prefers-reduced-motion` is honoured in the token file, so a page does
not have to remember to.

---

## 7. The atoms

Four shapes, implemented in `tokens.css` because every page needs them identical.

**`.rk-mark` — the standing mark.** The signature. Utility face, 11px, tracked, upper,
preceded by a square. **Solid = a record** (`runs`, `first-party`). **Hollow = a
description** (`drawn`, `hypothetical`, `self-declared`, `not-measured`). Set
`data-standing="…"`; the fill follows. No hue difference, ever.

**`.rk-rule` — the standing rule.** A label on a line that runs to the margin,
optionally carrying a mark. The line is not decoration: it is the edge of a field,
which is why the industry pages' measures table works.

**`.rk-label` — the section label.** Small, tracked, upper, in the *body* face. The
utility face is reserved for standings and figures, so a label and a standing never
look like the same class of thing.

**`.rk-seam` — the approval gate.** A 2px signal rule dividing what the software
proposed from what a named person decided. This is the product's central fact given a
shape, and it is the only large use of signal in the system. Nothing else on a page
may be a 2px signal rule.

---

## 8. One identity, two registers

**Decision: one identity, with the dark console as a documented mode — not two
brands.**

Two treatments existed and did not speak to each other: the industries pages (navy
ink on near-white, Inter/Jakarta) and the whitepapers (dark stone console holding a
light paper sheet, Fira, sage). Both are good. Drifting into both by accident was the
problem.

They are unified as **one ramp with two grounds**:

- **Sheet** — light. The default. Marketing pages, industry pages, anything skimmed
  or printed.
- **Console** — dark. Long-form reading surfaces and site chrome. Set
  `data-ground="console"` on any element and the semantic tokens re-bind; it cascades.

The argument for one identity rather than two: the whitepapers *are* the sales
material, read by the same operations and finance leadership as the industry pages,
often in the same week. Two brands would make the same company look like two vendors.

The argument for keeping the console rather than collapsing everything to light: the
whitepaper surface is purpose-built for a 12,000-word document and is the better
reading environment for it, and the site header is already dark. Deleting it would
cost something real and buy consistency that the token layer already provides.

What changes, and what does not:

- The console's ground moves from warm stone (`#1c1917`) to the blue-black ramp, so
  both registers sit on one hue axis. **The dark mode is the ink at full strength;
  the light mode is the ink at 6%.**
- The whitepaper's light "paper sheet" inside the console survives as a treatment.
  Its warm `#F5F1E8` is the one value that does not come from the ramp; it is a
  reading surface, and if it is kept it should be kept deliberately, with its own
  measured pairs. That is a decision for the whitepaper pass.
- The industries section's structure — the ruled worksheet, the writing line, the
  per-industry accent, the single dark band — is **kept whole**. It was the strongest
  thing on the site and this system was built to contain it. What it gains is a
  legible accent set, a measured palette, and print rules it no longer has to carry
  itself.

`assets/css/whitepaper.css` and `layouts/partials/industries-style.html` still hold
their own values. Repointing them at the tokens is the next pass; this one does not
touch them.

---

## 9. The mark

**Honest verdict: the drawing holds up. The file did not.**

A herding dog in profile. It is genuinely distinctive — nobody else in this market
has one — and it is an exact structural metaphor for the product: a working dog reads
a field, gathers what is scattered into one picture, and brings it to a named handler
who decides. It never acts on its own. It is not redrawn, and it should not be.

What was wrong was the artefact:

- A 512×512 raster PNG, 250 KB, with a **cream background baked in** and an
  anti-aliased edge fringe. It cannot sit on a dark ground, cannot be recoloured,
  cannot scale up and cannot print large. `layouts/partials/logo.html` has always had
  to crop it into a rounded `stone-800` tile — that tile is a workaround for a
  background the file will not give up, not a design decision.
- Its ink, `#797165`, is a muddy warm grey belonging to no palette on the site.
- Below about 24px the fine negative-space slivers in the ruff and the eye close up
  and the mark goes to an unreadable blob. At favicon size the current file is a
  smudge.

Treatment:

- **`assets/images/brand/runink-mark.svg`** — the same artwork traced to a single
  vector path with a transparent ground, `fill="currentColor"`. It now takes the ink
  of whatever ground it sits on, at any size, on paper. Use at 32px and above.
- **`assets/images/brand/runink-mark-small.svg`** — an optical-size variant for
  ≤24px: the head alone, cropped so the ear sweep, eye and muzzle survive. This is
  standard practice for a mark at small sizes, not a redesign — the drawing is
  identical, only the crop differs. Always set inside a container (tile, circle), so
  the crop reads as a bleed rather than a broken silhouette.
- **Lockup**: mark, then the wordmark in Fira Sans Condensed SemiBold at
  `--rk-t-4`, with `--rk-s-3` between them. The wordmark is not redrawn.
- **Favicon**: the small variant. The current `favicon.png` is a 536×658, 544 KB
  non-square PNG — replacing it is a wiring change for a later pass.

The specimen shows both variants at 16, 24, 32, 64 and 128px, on both grounds and in
print, so the claim above can be checked rather than believed.

---

## 10. Traps

Things that have already cost time here. Read before changing the token file.

**Hugo only publishes an asset something asks for.** A `@font-face` rule does not
count — Hugo does not parse CSS looking for `url()`. Four of the whitepapers' six
faces 404'd in production for exactly this reason, silently falling back to a system
face with no build error and no visible break in a screenshot. `tokens.css` declares
eight faces; `layouts/partials/rk-fonts.html` publishes eight and `errorf`s if a file
is missing. **Adding a face means editing both.** Verify with
`ls public/fonts/` — not by assuming.

**Go's `html/template` silently destroys interpolated custom properties in a `style`
attribute.** `style="width: var({{ .token }})"` is rewritten to `var(ZgotmplZ)` and
the browser drops the declaration. A *literal* `var(--rk-font-body)` in the same
attribute survives; only the interpolated one is rewritten. The failure is invisible
— every element still renders, just all at the inherited value. Build the whole
declaration with `printf` and pipe it through `safeCSS`, and grep `public/` for
`ZgotmplZ` after any template that composes a style.

**Token re-binding does not prove print behaviour.** `tokens.css` re-binds every
semantic token under `@media print`, and that works for a token set *directly* on the
element — the seam and the console band both go black. It does **not** reach a token
bound as `var(--rk-cat-x-ink)` on an ancestor and dereferenced by a descendant:
Chrome does not re-resolve that indirection when it switches to print. Confirmed
against minified and unminified builds, and against `:root`, `:root:root` and
`!important`. **A component that must change on paper states its print value itself.**
Print it and look.

**`break-inside: avoid` on a block taller than a page does not keep it together.** It
pushes the whole block to the next page and leaves the current one blank. Long tables
break freely at the wrapper, hold each *row* whole, and repeat `thead` with
`display: table-header-group`.

**Furniture loses colour on paper; a swatch keeps it.** A block whose *content* is a
colour — a palette chip, an accent sample — states its colour as a literal and
carries `.rk-swatch-print`. A block that merely *wears* a colour uses tokens and goes
to black. Printing a palette as a row of black squares demonstrates nothing.

---

## 11. What this pass did not do

Deliberately, so the next pass has a clean edge to work from:

- No page was restyled. `layouts/partials/header.html`, the homepage, the blog and
  `content/` are untouched.
- `assets/css/whitepaper.css` and `layouts/partials/industries-style.html` still
  carry their own literal values. Repointing them at the tokens is mechanical and is
  the obvious next step.
- `layouts/_default/baseof.html` still requests Inter, Plus Jakarta Sans and Material
  Symbols from `fonts.googleapis.com`. Removing those three requests and wiring
  `rk-fonts.html` in their place is a one-file change, but it restyles every page at
  once, so it belongs to a pass that can look at every page.
- The five category accents are defined but not applied; applying them is one line of
  front matter per industry page.
