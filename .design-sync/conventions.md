# Building with the Runink design system

## Wrap the page in `Surface` — this is the one thing that breaks everything else

Runink is **dark-canvas-first**. Components set their own heading and accent
colours but inherit body text colour from the surface beneath them, so a page
without a `Surface` renders text tuned for a dark canvas (`text-brand-paper`,
`text-primary-300`) on a default white background — nearly invisible. That reads
as broken, not merely unstyled.

```jsx
<Surface tone="canvas" className="min-h-screen">
  <Section>…</Section>
</Surface>
```

Three depths, stepping up the `primary` ramp rather than using neutrals — that
indigo cast is the identity:

- `tone="canvas"` — the page background (`primary-950`)
- `tone="raised"` — a band or section (`primary-900`)
- `tone="panel"` — the innermost surface (`primary-800`)

`Surface` takes `as` for semantics: `<Surface as="footer" tone="raised">`.

There is **no light mode**. Do not build one.

## Style with Tailwind utilities, using these named tokens

The idiom is plain Tailwind utility classes. What makes them *Runink* is the
token vocabulary — use these names, never raw hex:

| Family | Names | Use for |
|---|---|---|
| `primary-50…950` | 11 shades | Canvases, panels, borders, muted body text (`text-primary-300`) |
| `secondary-50…900` | 10 shades | The purple accent — borders (`border-secondary-500/30`), icon gradients, focus rings |
| `brand-*` | `orange`, `orange-dark`, `green`, `green-dark`, `green-deep`, `sage`, `sage-dark`, `red`, `tan`, `copper`, `ink`, `ink-soft`, `ink-raised`, `paper`, `beige` | Accents and near-black surfaces. `brand-paper` is the off-white body tone; `brand-sage-dark` is the interactive hover accent; `brand-ink*` are the deep panel fills. |
| `rounded-card` (2rem), `rounded-large` (2.5rem) | | The generous card corners the aesthetic depends on. **Do not use `rounded-lg`** — it means 0.5rem here, while the Hugo site globally redefines it to 2rem. |
| `shadow-neon-orange`, `-orange-strong`, `-green`, `-red` | | The glow treatments. `-strong` is the hover intensity. |
| `animate-cta-pulse`, `-marquee`, `-pulse-slow` | | The three shipped motions. |
| `font-sans` (Inter), `font-heading` (Plus Jakarta Sans), `font-mono` | | Headings take `font-heading`; body is `font-sans` by default. |

Everything else is stock Tailwind. The spacing, type and duration scales are
Tailwind's defaults unchanged.

**Card idiom**, if you are building something card-shaped by hand: panel
`bg-primary-900/30`, border `border-secondary-500/30` going
`hover:border-brand-sage-dark`, heading `text-white`, body `text-primary-300`,
and `hover:-translate-y-1` for the lift.

**Gradients are a component, not decoration.** Clipped-gradient headline text is
a signature move — use `GradientText` (`sweep`: `ember` | `iris` | `moss` |
`signal`, `direction`: `r` | `br` | …) rather than hand-rolling
`bg-clip-text`.

## Where the truth lives

- **`_ds/<folder>/styles.css`** and its imports — the real compiled stylesheet,
  including the `:root` token custom properties (`--color-primary-950`, …).
  Read it before inventing a class.
- **`components/<group>/<Name>/<Name>.prompt.md`** — per-component reference with
  the real prop contract and a worked example. Every component has one.
- **`<Name>.d.ts`** — the authoritative prop types.

## A worked example

Library components for the controls; Tailwind utilities with brand tokens for
your own layout glue.

```jsx
<Surface tone="canvas" className="min-h-screen">
  <Section>
    <div className="mb-12 max-w-2xl">
      <Badge tone="sage">Real-time visibility</Badge>
      <h2 className="mt-4 font-heading text-5xl font-black leading-tight text-white">
        Run the autonomous supply chain.{' '}
        <GradientText sweep="ember">Mitigate disruption in real time.</GradientText>
      </h2>
      <p className="mt-4 leading-relaxed text-primary-300">
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

Two gotchas that cost real debugging time:

- **`Card`, `Stat` and `FeatureCard` rely on `group-hover`** — the `group` class
  on their root is load-bearing. Do not strip it.
- **Tailwind resolves competing utilities by stylesheet order, not class order.**
  A `className` override of a margin or size the component already sets will
  silently lose. `Icon` (size), `GradientText` (direction) and `Surface` (`as`)
  therefore take real props; `CardGrid`/`StatsGrid` need `style={{ marginBottom }}`
  to beat their built-in rhythm.
