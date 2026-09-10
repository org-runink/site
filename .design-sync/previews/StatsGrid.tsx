import { Badge, Stat, StatsGrid } from '@runink/ui';

/** Dashed rule used only in these previews to make an invisible box visible. */
const OUTLINE = 'border-2 border-dashed border-brand-copper';

/** Caption naming which box the dashed rule is drawing. */
function Trace({ children }: { children: string }) {
  return (
    <div className="mb-2 font-mono text-[11px] uppercase tracking-widest text-brand-copper">{children}</div>
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
 */
export function InABand() {
  return (
    <div className="rounded-card bg-primary-950 p-8">
      <Badge tone="sage">Measured in production</Badge>
      <h2 className="mb-8 mt-4 font-heading text-3xl font-black text-white">
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
 * The default trailing rhythm, made legible. The dashed box is the grid including
 * its stock `mb-20` — the gap the site relies on to separate a metric row from
 * whatever follows it. Pull it in with an inline `style` when the band already
 * supplies that rhythm; a `className` utility cannot win against it.
 */
export function TrailingRhythm() {
  return (
    <div>
      <Trace>dashed box = the grid, including its stock mb-20</Trace>
      <StatsGrid className={OUTLINE}>
        <Stat number="11x" label="Faster customs clearance" />
        <Stat number="94%" label="Perishable loss avoided" />
        <Stat number="38ms" label="Telemetry to decision" />
      </StatsGrid>
      <p className="leading-relaxed">
        Prose that follows the block. The distance from the numerals to this sentence is the
        rhythm `mb-20` exists to guarantee.
      </p>
    </div>
  );
}
