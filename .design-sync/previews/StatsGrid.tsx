import { Badge, Stat, StatsGrid, Surface } from '@runink/ui';

/** Dashed rule used only in these previews to make an invisible box visible. */
const OUTLINE = 'border-2 border-dashed border-fill-accent';

/** Caption naming which box the dashed rule is drawing. */
function Trace({ children }: { children: string }) {
  return (
    <div className="mb-2 font-mono text-[11px] uppercase tracking-widest text-ink-accent">{children}</div>
  );
}

/**
 * The fixed three-up. Unlike `CardGrid` the column count is not configurable —
 * the site only ever shows stats three at a time, which is what keeps `Stat`'s
 * oversized numerals from crowding.
 *
 * The stock `mb-20` is pulled in with an inline `style`, not a `className`:
 * Tailwind emits `mb-20` after `mb-4`, so a utility override loses on source order.
 */
export function ThreeUp() {
  return (
    <StatsGrid style={{ marginBottom: '1rem' }}>
      <Stat number="40%" label="More freight spend recovered" />
      <Stat number="11x" label="Faster customs clearance" />
      <Stat number="38ms" label="Agent decision latency" />
    </StatsGrid>
  );
}

/**
 * How the metrics actually appear on a page: introduced by an eyebrow and a
 * headline inside a tinted band, so the numbers read as evidence for a claim
 * rather than as free-floating figures.
 *
 * The band is `bg-surface-raised`, not `bg-canvas`. It was canvas, which is the same
 * value as the ground the cell renders on — so the "band" was byte-identical to the
 * page behind it, had no edge anywhere, and the whole composition read as exactly the
 * free-floating figures this cell exists to argue against. It demonstrated the
 * opposite of its own claim. Same collapse as `PricingToggle`'s track, and the
 * general rule is: **a band that has to be seen cannot be the ground it sits on.**
 */
export function InABand() {
  return (
    <div className="rounded-card bg-surface-raised p-8">
      <Badge tone="sage">Measured in production</Badge>
      <h2 className="mb-8 mt-4 font-heading text-3xl font-black text-primary">
        Mitigate disruption in real time
      </h2>
      <StatsGrid style={{ marginBottom: '1rem' }}>
        <Stat number="94%" label="Perishable loss avoided" />
        <Stat number="$18K" label="Demurrage recovered per incident" />
        <Stat number="$42K" label="Biologics protected per reefer" />
      </StatsGrid>
    </div>
  );
}

/**
 * Six metrics wrap to two rows of three at the same gutter — the grid has no
 * child limit, it just never opens past three columns. Row two sits `gap-8` below
 * row one, so a six-metric block still reads as one object.
 */
export function TwoRows() {
  return (
    <StatsGrid style={{ marginBottom: '1rem' }}>
      <Stat number="3" label="Continents live" />
      <Stat number="11x" label="Faster customs clearance" />
      <Stat number="40%" label="More freight spend recovered" />
      <Stat number="$32K" label="Monthly margin recaptured on returns" />
      <Stat number="94%" label="Perishable loss avoided" />
      <Stat number="38ms" label="Agent decision latency" />
    </StatsGrid>
  );
}

/**
 * The default trailing rhythm, made legible. The dashed rule is NOT on the grid — a
 * margin renders outside the border box, so an outline on `StatsGrid` itself closes
 * flush under the panels and shows none of the rhythm it is meant to draw. It sits on
 * a plain wrapper instead, whose border keeps the child's margin from collapsing out,
 * so the box measures the panels PLUS the stock `mb-20`: the numerals' panels end
 * where the grid does, and the empty band between them and the rule is the margin.
 *
 * That gap is what the site relies on to separate a metric row from whatever follows
 * it. Pull it in with an inline `style` when the band already supplies that rhythm; a
 * `className` utility cannot win against it.
 */
export function TrailingRhythm() {
  return (
    <div>
      <Trace>dashed box = the grid plus its stock mb-20 · panels end where the grid does</Trace>
      <div className={OUTLINE}>
        <StatsGrid>
          <Stat number="11x" label="Faster customs clearance" />
          <Stat number="94%" label="Perishable loss avoided" />
          <Stat number="38ms" label="Telemetry to decision" />
        </StatsGrid>
      </div>
      <p className="leading-relaxed">
        Prose that follows the block. The distance from the numerals to this sentence is the
        rhythm `mb-20` exists to guarantee.
      </p>
    </div>
  );
}

/**
 * The same composition on the sheet ground. Not one class differs from
 * `TrailingRhythm` — only `ground`, because every token rebinds underneath.
 *
 * The grid itself is `grid-cols-1 gap-8 mb-20 md:grid-cols-3` and carries no colour,
 * so the ground cannot touch it. What the cell is really watching is the dashed rule —
 * `border-fill-accent`, a mark-tier token with a value in both registers, so the grid's
 * bounds and its stock `mb-20` stay visible against a light canvas — and `Stat`, whose
 * panel is a `from-surface to-canvas` gradient. Both stops rebind, and the gradient
 * keeps the same direction in both registers rather than reversing: `surface` is
 * lighter than `canvas` on the sheet ramp as well as the console one. What to check
 * here is simply that the panel still separates from the page at all, since the two
 * stops are only four levels apart on the light ramp.
 *
 * (An earlier version of this note promised a reversal and called it "the one thing a
 * reader should actually check". There is no reversal — **only `surface-raised` and
 * `surface-well` invert between grounds**, which is why `Surface`'s tones are named
 * for role rather than depth.)
 */
export function OnSheet() {
  return (
    <Surface ground="sheet" tone="canvas" className="p-8">
      <div>
        <Trace>dashed box = the grid plus its stock mb-20 · panels end where the grid does</Trace>
        <div className={OUTLINE}>
          <StatsGrid>
            <Stat number="11x" label="Faster customs clearance" />
            <Stat number="94%" label="Perishable loss avoided" />
            <Stat number="38ms" label="Telemetry to decision" />
          </StatsGrid>
        </div>
        <p className="leading-relaxed">
          Prose that follows the block. The distance from the numerals to this sentence is the
          rhythm `mb-20` exists to guarantee.
        </p>
      </div>
    </Surface>
  );
}
