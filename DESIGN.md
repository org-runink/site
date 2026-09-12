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

**Figtree and Fira Code.** Two families, three jobs.

| Role | Face | Weights | Token |
|---|---|---|---|
| Display, headings | Figtree | 600, 800 | `--rk-font-display` |
| Reading, interface | Figtree | 400, 400*i*, 500, 600 | `--rk-font-body` |
| Standings, figures | Fira Code | 400, 500 | `--rk-font-util` |

Figtree ships as one variable file per style, `wght` 300–900. The range is
load-bearing. Figtree's default instance is Light, so a single `font-weight` on the
`@font-face` would pin the whole system to Light — headings included — and it would
not look broken, it would look thin.

**Re-valued 2026-09-10.** Display and reading were Fira Sans Condensed and Fira Sans.
They are now Figtree, the face Runink FACE bundles and ships. The site was on Inter
and Plus Jakarta Sans from `fonts.googleapis.com`, which was neither this file's Fira
nor the product's Figtree — a third typeface, on the pages customers actually read,
fetched from a third party by a company whose argument is that your material does not
leave your building. Moving to the product's own face closes both at once.

**What that costs, stated because it is a real loss and not a free swap.** Figtree has
no condensed axis. The condensed display face was chosen for the density of a title
block on a technical drawing rather than the roundness of a SaaS hero, and that
silhouette is gone from the token layer. Two surfaces re-add it for themselves rather
than lose it: `layouts/partials/home/style.html` declares `'Fira Cond Hp'` from the
same vendored file, and `layouts/whitepapers/baseof.html` publishes its own six Fira
faces. That leaves two typefaces in the building, which is the thing the change was
meant to reduce — recorded here rather than hidden.

**Mono stays Fira Code.** Figtree has no monospace, and standing marks and figures
need a fixed advance.

**Source and licence.** Ten files, 279 KB total, all served from this origin. Both
families are under the **SIL Open Font License 1.1**, which permits redistribution,
modification (including subsetting) and web embedding; it forbids selling the fonts
alone and requires the copyright notice to travel with them.

- **Figtree** — copyright 2022 The Figtree Project Authors. The upright is converted
  from `face/flutter/fonts/Figtree.ttf`, the file the FACE Flutter app bundles, so the
  web and the product render the identical face. The italic is the upstream Google
  Fonts OFL release, because FACE's bundled upright has no italic axis and both
  Flutter and the browser were synthesising an oblique. Notice and provenance in
  `packages/runink-ui/fonts/LICENCE.md`.
- **Fira Code** — copyright 2014, The Fira Code Project Authors. Subset and converted
  to WOFF2 from the locally installed `ttf-fira-code 6.2-4`, licence confirmed in
  `/usr/share/licenses/ttf-fira-code/LICENSE`. Notice in `assets/fonts/LICENCE.md`.
- **Fira Sans and Fira Sans Condensed** — copyright 2014, Mozilla Foundation and
  Telefónica S.A., drawn by Erik Spiekermann and Ralph du Carrois. Still vendored and
  still published, because the whitepapers and the homepage's display face use them.
  Same subsetting and the same licence, from `ttf-fira-sans 1:4.301-3`.

**Why this and not the alternatives.**

- Not **Inter + Plus Jakarta Sans**. It is the single most common SaaS pairing, and it
  was fetched from `fonts.googleapis.com` on every page — a company whose entire
  argument is that your material should not be sent to a third party, requesting its
  typeface from one on every page load. Whatever the identity was going to be, that
  had to go.
- Not **IBM Plex**, which is the reflexive answer for "serious, open-source,
  sovereign" and is consequently everywhere in this market.
- Figtree is what the product already renders in. One face across the cockpit and the
  marketing pages is the typographic form of the product's own claim: surfaces drawn
  to different briefs, made to read as one voice. The site was the last thing on a
  different set of values, in colour and in type both.
- Fira was drawn for Mozilla's Firefox OS — an attempt to build a phone platform not
  owned by Google or Apple. The typeface of a self-owned platform. That is why it
  stays where it is still doing structural work rather than being deleted, and why
  Fira Code remains the utility face: Spiekermann drew Fira for legibility at small
  sizes on poor screens, which is the condition of a printed measures table and an
  11px standing mark.

**Character coverage.** Figtree carries 391 codepoints and covers the site's English,
Spanish, French and Portuguese content in full, including every diacritic those
locales use. The Fira subset is Latin-1 plus punctuation, currency, super/subscripts,
arrows and the geometric shapes, which covers the same four (ç, ã, õ, é, ñ, ê, ô are
all in `U+00A0–U+00FF`). `U+0178` (Ÿ) was added to it for French proper names and
`U+25A0–U+25A1` (■ □) so a standing mark is expressible in plain text; both were
missing from the original whitepaper subset.

### Scale

The ratio accelerates — about 1.17 through the reading sizes where fine control
matters, about 1.33 through the display sizes where a jump has to be unambiguous. A
single geometric series gives you either mush at the bottom or timidity at the top.

| Token | Size | Face | Job |
|---|---|---|---|
| `--rk-t-display` | 4rem / 64px | display 800 | The one display line on a page. Weight 800 only. |
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
headline block is the page's silhouette; on the two surfaces that still draw a
condensed face it is tighter still), `--rk-measure-lead` 52ch, `--rk-measure-body`
66ch.

---

## 4. Palette

### One ramp, read from both ends

The sheet (light) and the console (dark) are the **same neutral ramp**. `--rk-n-050`
is the sheet's canvas and the console's text; `--rk-n-900` is the sheet's text and
the console's canvas. A component written against the semantic names works on both
grounds without being written twice.

**Re-valued 2026-09-10.** The ramp was a blue-black document ink around 205°. It is
now Runink FACE's warm ramp, because FACE's palette is the company-wide one and the
site was the last thing still on a different set of values. Five of the fourteen rungs
are FACE's verbatim — `000`/`050`/`100`/`200` are its four sheet surfaces, `950` is
its console canvas. The rest are derived, and not by eye: each constrained rung was
solved for the luminance its floor demands and then placed on FACE's own hue.

| Rung | Solved as | Against | Measured |
|---|---|---|---|
| `--rk-n-400` | console `text-3` | console raised surface | 4.64:1 |
| `--rk-n-450` | sheet `rule-strong` | sheet recessed surface | 3.10:1 |
| `--rk-n-500` | console `rule-strong` | console raised surface | 3.10:1 |
| `--rk-n-600` | sheet `text-3` | sheet recessed surface | 4.64:1 |
| `--rk-n-700` | sheet `text-2` | sheet canvas | 7.29:1 |
| `--rk-n-900` | sheet `text` | sheet canvas | 12.54:1 |

Each was solved against the surface that constrains it, which is not the same surface
for all six; §5 carries every pair on every ground, measured. The eight unconstrained
rungs interpolate between their solved neighbours in OKLab rather than sRGB — sRGB
drifts the hue through the mid-tones and leaves a ramp with warm ends and a grey
middle. Chroma tapers toward both ends, which is what stops the lightest rungs reading
as beige. The ramp is monotone by construction and was verified so; if it were not,
"one step darker" would stop meaning anything.

The ramp before this one ran to a periwinkle `#5573df` and bottomed out at a
violet-leaning `#1b2456`. The problem was never "navy"; it was *that* navy: a
blue-violet that reads as generic SaaS on screen and muddies on a mono laser printer.
The blue-black that replaced it was not wrong either — it was simply a second neutral,
and a company that cannot say what its grey is has the same problem as one that cannot
say what its orange is.

| Token | Hex | Role |
|---|---|---|
| `--rk-n-000` | `#FFFDFA` | sheet: raised surface, ink on the signal |
| `--rk-n-050` | `#FBF7F1` | sheet: canvas · console: text |
| `--rk-n-100` | `#F6EFE4` | sheet: recessed surface |
| `--rk-n-200` | `#EDE2D3` | sheet: hairline · console: strong text |
| `--rk-n-300` | `#C2BBB0` | sheet: mid rule · console: body text |
| `--rk-n-400` | `#ABA397` | console: labels, captions |
| `--rk-n-450` | `#90877B` | sheet: boundary rule |
| `--rk-n-500` | `#8C8376` | console: boundary rule |
| `--rk-n-600` | `#746A5E` | sheet: labels, captions |
| `--rk-n-700` | `#5A5145` | sheet: body text · console: mid rule |
| `--rk-n-750` | `#4B4338` | console: hairline |
| `--rk-n-800` | `#3F382D` | sheet: strong text · console: raised surface |
| `--rk-n-900` | `#352E25` | sheet: text · console: canvas |
| `--rk-n-950` | `#1A1614` | console: recessed surface, ink on the signal |

The roles in that table are not a second copy of the ground blocks — `/design/` derives
them from the bindings in `tokens.css`, so a rung that stops being the hairline stops
being described as one without anybody remembering to say so.

### Signal

Runink's orange. Two inks that measure, and two fills that carry text.

| Token | Hex | Job |
|---|---|---|
| `--rk-signal-ink` | `#8B4024` | sheet: the ink. Links, focus, the seam. |
| `--rk-signal-lift` | `#E89B75` | console: the ink. |
| `--rk-signal-fill-sheet` | `#C4693B` | sheet: the fill. A button, a band. |
| `--rk-signal-fill-console` | `#D9764E` | console: the fill. |
| `--rk-on-signal-fill` | `#1A1614` | the ink **on** a fill. Near-black in both registers. |

**Re-valued 2026-09-10** onto FACE's `technicalOrangeLight`, the token FACE already
uses for exactly this job: the accent that may carry text. The previous pair
(`#A8400A` / `#F2801F`) measured fine and was **not** wrong — it was simply a second
orange. Two oranges four degrees apart, each correct on its own terms, is how a
company ends up unable to say what its colour is.

**The hover fill goes lighter**, which is counter-intuitive on a light page and is not
a style choice — it is forced by the ink. `--rk-on-signal-fill` is the one token FACE
deliberately does not flip, so it has to stay legible on whatever the button becomes.
Against it: `#C4693B` is 4.65:1, `#D9764E` is 5.69:1, `#E89B75` is 8.02:1, and the
obvious darker step `#9E4A2A` is 2.97:1 — a fail. Darkening on hover makes the button
harder to read exactly when the pointer is on it. Lifting keeps every state above
4.5:1, and introduces no new values: each ground's hover fill is the other ground's
base fill.

**On the defect in the palette all of this replaces.** `brand_accents.dark_orange`
`#ca4708` was published as usable. Measured: **4.76:1 on white** and **4.55:1 on
`gray_50`** — those pass. But **4.22:1 on `#F5F1E8`**, the whitepaper's own paper,
and **4.22:1 on `#eef1fc`**, `primary.50` — the two grounds it most often sat on.
Under AA for body text in exactly the places it was used. The whitepaper CSS had
already darkened it locally to `#b83f07` (4.97:1 on paper) without the published
value ever being corrected.

### Category

Five industries, two bindings each. Each is solved to carry text on its ground's
canvas, so the raw accent is legible as text and needs no darkening step.
`--rk-accent` defaults to `--rk-text`: **a page with no category has no category
colour.**

| Industry | Sheet | Console | Note |
|---|---|---|---|
| Logistics & Supply Chain | `#0F6F73` | `#4FB3B3` | **Moves.** Was `#ea580c`, the signal hue. |
| Insurance | `#5847B8` | `#9B8CF0` | Same family as `#778fe6`, made legible. |
| Banking & Financial Services | `#5A6B31` | `#A3B96A` | Same family as `#C8D9A8`, made legible. |
| Telecom | `#1D5480` | `#5FA8DC` | Same family as `#c084fc`, moved to blue for hue spread. |
| Marketing | `#A03A5E` | `#E4809C` | Replaces `#D4A574`, too pale and too near signal. |

Four of five are corrections to the accent the section already used. Only logistics
genuinely moves, and it moves for a stated reason. These five values did not change
when the neutral ramp did; they were solved against the grounds, and the grounds moved
under them, so §5 is where to read what they measure now.

**Three of them are under 4.5:1 on one surface, and it is recorded here rather than
quietly rounded up.** On the console's raised surface (`--rk-sheet`, `#3F382D`)
insurance measures 4.08:1, marketing 4.33:1 and telecom 4.47:1. On the console canvas
and the recessed surface all five clear AA, and on every sheet surface all five clear
AA with room. The generated proof measures categories on the canvas only, so these
three are outside what CI looks at — see §5.

A page binds its category with one line of front matter, `category: "logistics"`, and
the layout emits the matching `.rk-cat-*` class; all five pages in
`content/industries/` carry it. Setting the accent as a hex in front matter is dead —
the stylesheets read `--rk-accent`, so a hex there sets a value nothing consumes.

Two washes derive from the accent rather than being separate values. On the sheet
`--rk-accent-wash` is the accent at 10% over `--rk-sheet`; on the console it is 16%
over `--rk-sunk`, not over `--rk-sheet`, because on a dark page the accents are light
and tinting a mid-dark surface with them pulls the surface toward the ink — over
`--rk-sheet` the accents measured 3.25–3.96:1 on their own wash and no percentage
fixed it. Over `--rk-sunk` every category clears 4.96:1 at the full 16%. It is also
the right shape: on a dark page a tinted panel is recessed, not raised.
`--rk-signal-wash` is 8% on both grounds — at 14% the console wash lifted the surface
far enough that `text-3` fell to 4.14:1 and `rule-strong` to 2.76:1 on it. Because a
wash resolves where it is declared, any element that sets a second category deeper in
the tree carries `.rk-rederive` or its wash stays the ancestor's.

---

## 5. Measured contrast

Every pair the system sanctions. **A pair that is not in this table is not
sanctioned.** Text pairs meet WCAG 2.1 AA (4.5:1); rules and boundaries meet the 3:1
non-text minimum. The specimen at `/design/` renders each pair beside its number, so
the claim and the thing it describes cannot drift apart.

**These numbers are generated, not typed.** `scripts/gen-contrast-proof.mjs` reads
`assets/css/tokens.css`, follows each semantic through its ground binding, measures,
and writes `data/contrast_proof.json`, which the specimen renders. `--check` re-derives
the file and fails CI if it differs. The table below is that file. It exists because
the hand-written version survived the palette moving to FACE and went on asserting
ratios for `#F2801F` as the signal and `#101A22` as the ground — colours that no
longer existed anywhere — on the one page whose job is to be the authority. A proof
table that can drift from the thing it proves is worse than no proof table, because it
looks checked.

### Sheet ground

| Foreground | `#FFFDFA` raised | `#FBF7F1` canvas | `#F6EFE4` recessed |
|---|---|---|---|
| `--rk-text` `#352E25` | 13.18:1 AAA | 12.54:1 AAA | 11.72:1 AAA |
| `--rk-text-1` `#3F382D` | 11.40:1 AAA | 10.84:1 AAA | 10.13:1 AAA |
| `--rk-text-2` `#5A5145` | 7.67:1 AAA | 7.29:1 AAA | 6.82:1 AA |
| `--rk-text-3` `#746A5E` | 5.22:1 AA | 4.96:1 AA | 4.64:1 AA |
| `--rk-signal` `#8B4024` | 7.24:1 AAA | 6.89:1 AA | 6.44:1 AA |
| `--rk-rule-strong` `#90877B` | 3.48:1 AA non-text | 3.31:1 AA non-text | 3.10:1 AA non-text |
| cat logistics `#0F6F73` | — | 5.56:1 AA | — |
| cat insurance `#5847B8` | — | 6.54:1 AA | — |
| cat banking `#5A6B31` | — | 5.49:1 AA | — |
| cat telecom `#1D5480` | — | 7.48:1 AAA | — |
| cat marketing `#A03A5E` | — | 6.03:1 AA | — |

### Console ground

| Foreground | `#3F382D` raised | `#352E25` canvas | `#1A1614` recessed |
|---|---|---|---|
| `--rk-text` `#FBF7F1` | 10.84:1 AAA | 12.54:1 AAA | 16.83:1 AAA |
| `--rk-text-1` `#EDE2D3` | 9.05:1 AAA | 10.47:1 AAA | 14.05:1 AAA |
| `--rk-text-2` `#C2BBB0` | 6.08:1 AA | 7.03:1 AAA | 9.44:1 AAA |
| `--rk-text-3` `#ABA397` | 4.64:1 AA | 5.37:1 AA | 7.20:1 AAA |
| `--rk-signal` `#E89B75` | 5.17:1 AA | 5.98:1 AA | 8.02:1 AAA |
| `--rk-rule-strong` `#8C8376` | 3.10:1 AA non-text | 3.58:1 AA non-text | 4.81:1 AA non-text |
| cat logistics `#4FB3B3` | — | 5.37:1 AA | — |
| cat insurance `#9B8CF0` | — | 4.72:1 AA | — |
| cat banking `#A3B96A` | — | 6.19:1 AA | — |
| cat telecom `#5FA8DC` | — | 5.18:1 AA | — |
| cat marketing `#E4809C` | — | 5.01:1 AA | — |

**The category rows cover the canvas only, and that is a gap, not a decision.** The
generator measures each category against `--rk-ground` and stops there, so the three
console pairs that fall under AA — insurance 4.08:1, marketing 4.33:1 and telecom
4.47:1 on the raised surface — are outside what `--check` looks at. Every other
foreground in the system is measured on all three surfaces of its ground. Closing that
is a change to the generator, not to this file.

**`--rk-rule` is not in this table and that is correct.** `#EDE2D3` is 1.26:1 on the
sheet's raised surface and `#4B4338` is 1.38:1 on the console canvas. It is a
hairline: separation between things that are already separate, never the only thing
communicating a boundary. Anything a reader has to perceive as an edge uses
`--rk-rule-strong`.

**`--rk-rule-mid` is not in it either, for the same reason.** `#C2BBB0` is 1.88:1 on
the sheet's raised surface, `#5A5145` is 1.72:1 on the console canvas. It exists
because without a middle tier a hover that lifts a border one step lands on the token
it started from and the state becomes invisible — which is how this system shipped
`.card:hover` painting the identical colour as `.card`. It is a step, not a boundary.

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
console rather than a control record. Both go to `none` under `@media print`.

Both are still tinted `rgba(16, 26, 34, …)`, the blue-black the neutral ramp used
before 2026-09-10. It was not re-valued with the ramp. At 4% and 6% alpha it is
barely a colour, which is why nobody saw it, but it is a cool shadow over a warm ramp
and it is the one value in this file that did not move when everything around it did.

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
reading environment for it, and the product cockpit is dark. Deleting it would cost
something real and buy consistency that the token layer already provides.

The default has since been settled the other way round. The sheet is the default
ground in `tokens.css` and the marketing site is light, header included — a review of
the customer-facing material found the black canvas hard to read and painful to print,
and these are pages that get printed and carried into meetings. The console is where
it earns its place: the whitepapers, and any subtree that opts in.

What changes, and what does not:

- The console's ground moves from warm stone (`#1c1917`) to the ramp's own dark end,
  so both registers sit on one hue axis. That axis is warm again as of 2026-09-10, and
  the console canvas is now `#352E25` — close enough to the stone it replaced that the
  whitepaper register lost nothing by the move, which was not true of the blue-black
  in between. **The dark mode and the light mode are the same ramp read from opposite
  ends**, not a tint of one another: the sheet's four lightest rungs are FACE's own
  surface values, not the ink at a percentage.
- The whitepaper's light "paper sheet" inside the console survives as a treatment.
  Its warm `#F5F1E8` is the one value that does not come from the ramp; it is a
  reading surface, and if it is kept it should be kept deliberately, with its own
  measured pairs. That is a decision for the whitepaper pass.
- The industries section's structure — the ruled worksheet, the writing line, the
  per-industry accent, the single dark band — is **kept whole**. It was the strongest
  thing on the site and this system was built to contain it. What it gains is a
  legible accent set, a measured palette, and print rules it no longer has to carry
  itself.

`layouts/partials/industries-style.html` has been repointed: every colour in it now
resolves through `--rk-*`, and the two literals this file specifically rejected went
with it — `#1b2456`, and `#ea580c` for logistics. They survive there only as named
history inside a comment.

`assets/css/whitepaper.css` has not. It still carries its own literal values —
eighty-seven of them, and no `--rk-*` at all — including the warm paper sheet
`#F5F1E8`. That is the last stylesheet on its own palette.

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
- **Lockup**: mark, then the wordmark at `--rk-t-4`, with `--rk-s-3` between them. The
  wordmark is not redrawn. It is set in Fira Sans Condensed SemiBold, named here as a
  literal rather than as `--rk-font-display`, because since 2026-09-10 that token
  resolves to Figtree and Figtree has no condensed axis (§3). The face is still
  vendored and still published, so the lockup costs no new request — but it is now one
  of the three places the condensed face survives by being asked for by name.
- **Favicon**: the small variant, and it is wired. `favicon.png` was a 536×658,
  544 KB non-square PNG fetched on every page; it and a byte-identical `favicon.ico`
  are gone, along with the theme's own 792 KB `favicon.ico` that deleting ours
  uncovered — browsers request `/favicon.ico` whether or not a link element names it,
  so removing ours alone would have made it worse. What ships now is a 32px PNG, a
  real 16/32 ICO shadowing the theme's at the same path, and a 180px touch icon, all
  generated from the same artwork squared on its own centre first so the mark is not
  distorted by the downscale. 1,336,250 bytes of icon became 44,503.

The specimen shows both variants at 16, 24, 32, 64 and 128px, on both grounds and in
print, so the claim above can be checked rather than believed.

---

## 10. Traps

Things that have already cost time here. Read before changing the token file.

**Hugo only publishes an asset something asks for.** A `@font-face` rule does not
count — Hugo does not parse CSS looking for `url()`. Four of the whitepapers' six
faces 404'd in production for exactly this reason, silently falling back to a system
face with no build error and no visible break in a screenshot. `tokens.css` declares
ten faces; `layouts/partials/rk-fonts.html` publishes ten, counts the `url()`s in
`tokens.css` and `errorf`s if the two numbers differ or if a listed file is missing.
**Adding a face means editing both.** Verify with `ls public/fonts/` — not by
assuming. The count is read off the `src` url rather than the `@font-face` token,
because the header comment in `tokens.css` contains the literal string and would
inflate it by one.

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

**An unbalanced comment in `tokens.css` swallows the block after it, silently.** Three
drafts of one note were merged without deleting the delimiters between them: the first
comment closed, about 28 lines of prose sat outside any comment, and two more stray
close-delimiters sat among them. CSS error recovery does not discard that — it reads
the prose as a selector prelude and keeps consuming until the next `{`. The entire
print blackout was parsed as declarations of a garbage selector matching nothing, so
every category accent and the signal printed in colour at roughly 2.4:1 on paper, for
months, with no error and a build that looked fine. `scripts/check-token-syntax.mjs`
now fails on an unbalanced comment.

**A bare `var()` colour makes Tailwind delete the declaration.** The alpha modifier
(`bg-sheet/50`) works by substituting an `<alpha-value>` placeholder into the colour,
and a bare `var(--rk-sheet)` has nowhere to put it — so Tailwind drops the utility
with no error and no warning. This repo has 252 alpha-modified colour utilities
(`border-stone-800/50` alone appears 77 times), which is a quarter of the borders on
the site vanishing into a build that still looks plausible. Every rung therefore
exists twice: as a hex and as a channel triplet, bound as
`rgb(var(--rk-x-ch) / <alpha-value>)`. The two forms must stay in lockstep — a drifted
channel is a colour that is almost right, which is harder to see than one that is
wrong — and `scripts/check-token-channels.mjs` asserts every rung matches and that each
ground block binds the same rung in both forms.

**`break-inside: avoid` on a block taller than a page does not keep it together.** It
pushes the whole block to the next page and leaves the current one blank. Long tables
break freely at the wrapper, hold each *row* whole, and repeat `thead` with
`display: table-header-group`.

**Furniture loses colour on paper; a swatch keeps it.** A block whose *content* is a
colour — a palette chip, an accent sample — states its colour as a literal and
carries `.rk-swatch-print`. A block that merely *wears* a colour uses tokens and goes
to black. Printing a palette as a row of black squares demonstrates nothing.

---

## 11. What has landed, and what has not

This section used to say "what this pass did not do" and list four things held back so
the next pass had a clean edge. All four have since been done. It is kept, retitled,
because the useful thing about it was never the list — it was having one place that
says where the system actually reaches.

**Landed.**

- **Pages are restyled.** The homepage carries about 1,800 lines of its own CSS in
  `layouts/partials/home/style.html`: a near-white sheet, five blocks, every block a
  different shape rather than a different paragraph. `assets/css/main.css` sets `body`
  to `bg-canvas text-ink-2`, and `tailwind.config.js` rebinds the `stone-*`, `slate`,
  `gray`, `neutral` and `zinc` scales onto `--rk-*` per rung, which is how 2,432
  `stone-*` class references and a dark header landed on the light sheet without being
  edited one at a time. One class set now works on both grounds.
- **No third-party font request.** `layouts/_default/baseof.html` no longer fetches
  Inter, Plus Jakarta Sans or Material Symbols from `fonts.googleapis.com`;
  `rk-fonts.html` publishes the self-hosted faces in their place, and asserts its own
  count against `tokens.css` (§10).
- **`layouts/partials/industries-style.html` is repointed.** Every colour in it
  resolves through `--rk-*`.
- **The category accents are applied.** All five pages in `content/industries/` carry
  `category:` front matter and the layout emits the matching `.rk-cat-*` class.
- **The contrast table is generated.** §5 is no longer typed by hand; the specimen and
  this file both read what the generator measured.

**Not landed.**

- `assets/css/whitepaper.css` is the last stylesheet on its own palette — 87 literal
  hex values, no `--rk-*`, including the warm paper sheet `#F5F1E8`. It is the one
  place the identity is still two sets of numbers.
- `layouts/partials/logo.html` still uses `images/logo.png` in a rounded tile. The
  traced SVGs in `assets/images/brand/` exist and are correct (§9); nothing consumes
  them yet, so the tile is still a workaround for a background the raster will not
  give up.
- The contrast generator measures category accents against `--rk-ground` only, which
  is why three console pairs are under AA and uncaught (§4, §5).
- The two elevation shadows are still tinted with the pre-2026-09-10 blue-black (§6).
- `scripts/check-design-doc.mjs` is written but not wired. It fails when a token and a
  value stated together in a table here disagree with `tokens.css` — run against the
  version of this file that preceded the 2026-09-10 reconciliation it reports 28
  disagreements, including both re-valued faces and every ramp and signal hex. It
  belongs beside the other token checks in `.github/workflows/deploy.yaml`; adding it
  there is one line, and that file has another owner this week.
- That check reads tables, not prose. It would not have caught "no page was restyled",
  which was false for weeks. Values in this file can now be held to the token file;
  claims about the repo still cannot, and are checked by reading.
