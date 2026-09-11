# Building with the Runink design system

## Two grounds, one set of classes

Runink renders on two **grounds**: `console` (dark) and `sheet` (light). They are
not a theme toggle bolted onto a dark design — they are two independently
authored ramps, and every colour token has a value in both.

**You never write ground-specific classes.** A component is written once. The
tokens rebind underneath it, because each ground is a block of custom properties
selected by a `data-ground` attribute. `text-primary` is near-white on console
and near-black on sheet; `bg-canvas` is `#1A1614` on console and `#FBF7F1` on
sheet. Same class, both grounds, no `dark:` variant.

`Surface` is what supplies the ground:

```jsx
<Surface tone="canvas" className="min-h-screen">
  <Section>…</Section>
</Surface>
```

`console` is the default. A page opts into light with `ground="sheet"`, and
because `data-ground` cascades, **any subtree can flip** — a dark console band
inside a light page is one prop:

```jsx
<Surface ground="sheet" tone="canvas">
  <p className="text-secondary">The page, on the sheet ground.</p>
  <Surface ground="console" tone="raised" as="aside">
    <p className="text-primary">A console band nested inside it.</p>
  </Surface>
</Surface>
```

### `tone` is a role, not a depth

```
tone="canvas"  — the page
tone="surface" — the default card
tone="raised"  — a warm panel or band
tone="well"    — the innermost surface
```

These are **not** a depth ladder, and you must not treat them as one. On the
sheet ground `surface` goes *lighter* than the canvas while `raised` and `well`
go *darker*. Naming them by luminance would be a lie in one of the two ramps, so
they are named by the job they do. Pick the tone by role and let the ramp decide
which direction it moves.

`Surface` also takes `as` for semantics: `<Surface as="footer" tone="raised">`.

## The token vocabulary

Plain Tailwind utilities. What makes them Runink is the token names — never raw
hex, and never a stock Tailwind colour (`text-white`, `bg-slate-800` and friends
are pinned to one ground and will be illegible on the other).

The names encode **where a colour is allowed to appear**, which is the single
most important rule in this system:

| Prefix | Meaning | Example |
|---|---|---|
| `canvas`, `surface`, `surface-raised`, `surface-well` | the grounds you paint | `bg-surface-raised` |
| `fill-*` | a background **that never carries text** | `bg-fill-success` |
| `*-wash` | a fill at low alpha — mostly ground showing through, so normal ink reads on it | `bg-fill-accent-wash` |
| `ink-*` | a colour that **may** carry text (clears 4.5:1 on every surface of its ramp) | `text-ink-accent` |
| `on-*` | the one ink measured against a specific solid fill | `text-on-success` |
| `hairline`, `edge` | separators | `border-hairline` |

**This is enforced by the type system, not by convention.** Each Tailwind
position has its own palette, so `text-fill-success` does not compile — there is
no `fill-success` entry in `textColor`. If a class you expect does not exist,
that is the system telling you the colour is not legible in that position.

### The colours

| Utility | Role |
|---|---|
| `primary` | body and heading ink |
| `secondary` | muted ink (carries its own baked alpha — do **not** add `/NN`) |
| `ink-accent` / `fill-accent` / `accent-lift` | the technical orange — act here |
| `fill-accent-deep` | the deep muted orange. **Fill only, on either ground.** |
| `ink-success` / `fill-success` / `fill-success-glow` | the olive. `ink-success` is the **only** olive that may carry text. |
| `ink-provenance` / `fill-provenance` | the wine — lineage and provenance |
| `ink-ice`, `ink-violet` | the two cool marks |
| `on-accent`, `on-success`, `on-provenance` | inks for the solid fills |
| `fill-severity` + `ink-severity-{critical,high,medium,low,ok}` | status, and **only** status |

Four rules that are not negotiable:

- **A solid fill must carry its paired ink.** `bg-fill-success` takes
  `text-on-success`, not `text-primary`. The fill is the same value on both
  grounds while the generic ink inverts, so the wrong pairing is legible on
  console and dark-on-dark on sheet — it looks fine in every screenshot anyone
  takes of the dark ground. A `*-wash` is the exception: it is mostly ground, so
  the family ink or a generic ink is correct there.
- **`on-accent` inks `fill-accent` only.** It is not valid on `ink-accent`.
- **Severity is its own family.** Never colour a status with accent, olive or
  wine. All five bands share one wash, and because adjacent bands differ by as
  little as 1.17:1, **every severity mark must also carry a glyph or the word** —
  colour alone never conveys the level.
- **`hairline` is invisible on `surface-well`** (identical value). Use `edge`
  there.

### Everything else

| | |
|---|---|
| Radius | `rounded-badge` (6px), `rounded-chip` (12px), `rounded-card` (18px), `rounded-pill` (24px) |
| Shadow | `shadow-glow-accent`, `shadow-glow-success` |
| Motion | `animate-cta-pulse`, `animate-marquee`, `animate-testimonials-scroll`, `animate-pulse-slow` |
| Type | `font-sans` and `font-display` are both **Figtree** (self-hosted, variable 300–900); `font-mono` for data and labels |

Spacing, type scale and durations are Tailwind's defaults, unchanged.

**Gradients are a component, not decoration.** Clipped-gradient headline text is
a signature move — use `GradientText` rather than hand-rolling `bg-clip-text`.
Sweeps: `ember` (accent), `moss` (olive), `signal` (wine into accent). `iris` is
deprecated — no cool sweep survives this palette; it is now a deeper `ember`.

**Card idiom**, if you are building something card-shaped by hand: `bg-surface`,
`border border-hairline` going `hover:border-fill-accent`, heading
`text-primary`, body `text-secondary`, `rounded-card`, and `hover:-translate-y-1`
for the lift.

## Where the truth lives

- **`tokens/REGISTRY.md`** — every token, its tier, and its value in both ramps.
  Read it before inventing a class.
- **`_ds/<folder>/styles.css`** and its imports — the real compiled stylesheet,
  including both `[data-ground]` blocks.
- **`components/<group>/<Name>/<Name>.prompt.md`** — per-component reference with
  the real prop contract and a worked example. Every component has one.
- **`<Name>.d.ts`** — the authoritative prop types.

The palette itself is not ours to invent: it is extracted from Runink FACE's
Flutter theme (`flutter/lib/core/theme/runink_theme.dart`) and checked against it
in CI. Do not add a colour here — add it there.

## A worked example

Library components for the controls; Tailwind utilities with tokens for your own
layout glue.

```jsx
<Surface tone="canvas" className="min-h-screen">
  <Section>
    <div className="mb-12 max-w-2xl">
      <Badge tone="sage">Real-time visibility</Badge>
      <h2 className="mt-4 font-display text-5xl font-black leading-tight text-primary">
        Run the autonomous supply chain.{' '}
        <GradientText sweep="ember">Mitigate disruption in real time.</GradientText>
      </h2>
      <p className="mt-4 leading-relaxed text-secondary">
        Telemetry reaches a decision in under forty milliseconds.
      </p>
    </div>

    <CardGrid cols={3}>
      <Card icon="shield-check" title="Zero-Hold Customs Gate"
            description="Compliant loads clear without a manual hold."
            href="/platform/customs" />
      <Card icon="eye" title="Cold Chain Guard"
            description="Every reefer watched continuously, not at checkpoints."
            href="/platform/cold-chain" />
      <Card icon="circle-stack" title="Sovereign persistence"
            description="Records and indexes on infrastructure you control."
            href="/platform/store" />
    </CardGrid>

    <Button href="/demo">Book a demo</Button>
  </Section>
</Surface>
```

Three gotchas that cost real debugging time:

- **Check both grounds before you call something done.** The dark ground was this
  system's only ground for its whole prior life, and every legibility bug found
  in the light-ground migration was invisible on console. If you build a screen,
  render it once with `ground="sheet"`.
- **`Card`, `Stat` and `FeatureCard` rely on `group-hover`** — the `group` class
  on their root is load-bearing. Do not strip it.
- **Tailwind resolves competing utilities by stylesheet order, not class order.**
  A `className` override of a margin or size the component already sets will
  silently lose. `Icon` (size), `GradientText` (direction) and `Surface` (`as`)
  therefore take real props; `CardGrid`/`StatsGrid` need `style={{ marginBottom }}`
  to beat their built-in rhythm.
