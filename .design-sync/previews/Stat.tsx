import { Stat, StatsGrid } from '@runink/ui';

/** A single metric, as it reads on its own. */
export function Default() {
  return <Stat number="11x" label="Faster customs clearance" />;
}

/**
 * The intended composition: three metrics in an even row. Stat is designed to be
 * used several at a time, so this is the cell that matters most.
 */
export function InAGrid() {
  return (
    <StatsGrid>
      <Stat number="11x" label="Faster customs clearance" />
      <Stat number="94%" label="Perishable loss avoided" />
      <Stat number="<40ms" label="Telemetry to decision" />
    </StatsGrid>
  );
}

/**
 * Figures of very different widths. The number is `font-black` at `text-6xl`, so
 * this is where a long value would blow out the card if it were going to.
 */
export function FigureWidths() {
  return (
    <StatsGrid>
      <Stat number="3" label="Continents live" />
      <Stat number="$18.4M" label="Margin protected annually" />
      <Stat number="99.99%" label="Gate uptime" />
    </StatsGrid>
  );
}
