# Restyle brief — converting literal colours to the two-ground token system

You are converting one batch of files on the runink.org Hugo site from hardcoded
colours to design tokens. Several agents work from this brief in parallel, so
follow it exactly: consistency between batches matters more than local cleverness.

## The situation

The site was built for a black canvas. The owner has decided the marketing pages
are **light** — the site's own review had already found the black canvas hard to
read and painful to print, and these pages get printed and carried into meetings.
The product cockpit stays dark; the marketing sheet does not.

The palette now comes from Runink FACE and lives in `assets/css/tokens.css`. Every
colour is defined twice — once for the light ground (`sheet`, the default) and once
for the dark ground (`console`) — and a token resolves to whichever ground its
subtree is in. That is the whole point: **one class works on both grounds.**

The Tailwind `stone-*`, `slate-*`, `gray-*`, `primary-*` classes have ALREADY been
rebound onto these tokens centrally. **Leave them alone.** They render correctly.
Churning them creates conflicts with other agents and enormous diffs for no gain.

**Your job is only the literal hex values** — `text-[#F5F1E8]`, `background: #1b1919`,
`border-color:#57534e` and so on. A literal cannot follow the ground, so on a light
page it is stuck at a value chosen for a black one.

## The vocabulary

In markup, as Tailwind classes:

| purpose | classes |
|---|---|
| surfaces | `bg-canvas` (the page), `bg-sheet` (a card), `bg-sunk` (a recessed plate) |
| ink | `text-ink` (headings), `text-ink-1` (strong), `text-ink-2` (body), `text-ink-3` (captions) |
| separators | `border-rule` (hairline), `border-rule-mid`, `border-rule-strong` (a boundary you could tab to) |
| the accent, as text/edge | `text-signal`, `border-signal`, `ring-signal`, `decoration-signal` |
| the accent, as a filled shape | `bg-signal-fill`, hover `bg-signal-fill-hover`, inked with `text-on-fill` |
| a tint of the accent | `bg-signal-wash` |

`ring-`, `divide-`, `outline-`, `from-`, `to-`, `via-` all take the same names.
Alpha modifiers work: `border-rule/50`, `bg-signal-fill/10`.

In a `<style>` block, use the custom properties directly — no Tailwind:
`var(--rk-ground)`, `--rk-sheet`, `--rk-sunk`, `--rk-text`, `--rk-text-1`,
`--rk-text-2`, `--rk-text-3`, `--rk-rule`, `--rk-rule-mid`, `--rk-rule-strong`,
`--rk-signal`, `--rk-signal-wash`, `--rk-on-signal-fill`.
For a page with an industry category, `--rk-accent`, `--rk-accent-wash` and
`--rk-accent-edge` resolve from the `.rk-cat-*` class on an ancestor.

## The rules

1. **Position decides the token — fill and ink are different colours.**
   A background takes a *fill* or a *surface*; text takes an *ink*. `text-signal`
   and `bg-signal-fill` are not the same orange, and swapping them is the specific
   mistake this palette exists to prevent. Text on `bg-signal-fill` is `text-on-fill`.

2. **Never write a new hex.** If you cannot find a token that fits, leave the
   line alone and report it. A wrong token is worse than an untouched line,
   because it looks finished.

3. **Default everything to the light sheet.** A surface that was near-black
   becomes `bg-sheet` or `bg-sunk`; an ink that was near-white becomes `text-ink`
   or `text-ink-2`. Do not preserve darkness out of loyalty to the old design.

4. **If a section is genuinely meant to be an inverted dark band** — a deliberate
   full-bleed feature strip, not just a card that happened to be dark — put
   `data-ground="console"` on its outermost element and then use the SAME tokens
   inside it. They flip automatically. Use this sparingly and say where you used
   it. Do not use it merely to avoid making a decision.

5. **A hover must change something.** If a base and its `hover:`/`group-hover:`
   would land on the same token, pick an adjacent tier (`bg-sunk` → `hover:bg-sheet`,
   `text-ink-2` → `hover:text-ink`). A checker fails the build on this, so a
   collapsed pair will come straight back to you.

6. **Leave artwork alone.** Hexes inside an inline `<svg>` that draw an
   illustration, and mermaid/diagram theme blocks, are not UI colour. Skip them.

7. **Keep language variants identical.** Content files come in quadruples
   (`x.md`, `x.es.md`, `x.fr.md`, `x.pt.md`) with the same markup. Apply the same
   change to all four so they do not drift.

8. **Do not run `hugo`, `npm`, or any build.** You edit files only. The
   orchestrator builds once after all agents finish and runs the checkers —
   building in parallel corrupts the shared output directory.

## Reference for the colours you will meet most

These were the dark-ground palette. Typical, not automatic — judge by position:

| was | it meant | now |
|---|---|---|
| `#F5F1E8`, `#FFFFFF`, `#D9CDB8` | light ink on black | `text-ink` / `text-ink-2` / `text-ink-3` |
| `#1b1919`, `#1c1917`, `#211f1f`, `#0c0a09` | a dark surface | `bg-sheet` / `bg-sunk` / `bg-canvas` |
| `#000000` | the page behind everything | `bg-canvas` |
| `#57534e`, `#44403c` | a border on black | `border-rule` / `border-rule-mid` |
| `#8B9A6E`, `#65793E`, `#5F6F3E`, `#C8D9A8` | an olive accent | `text-signal` / `border-signal` — the site has ONE accent now |

## What to report back

- every file you changed, and roughly what you did
- anywhere you used `data-ground="console"`, and why that section is inverted
- any line you left alone because no token fit, with the file and line number
- anything that looked like a bug rather than a colour problem
