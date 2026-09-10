import { Stat, StatsGrid, Surface } from '@runink/ui';

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
 * The same row on the sheet ground. Not one class differs from `InAGrid` — only
 * `ground`, because every token rebinds underneath.
 *
 * `Stat` is the component in this set with the most to lose on a ground flip, because
 * its panel is not a flat fill: it is a `from-surface to-canvas` gradient over a
 * `border-hairline/30` edge. Both stops rebind, and the two ramps do not move in the
 * same direction — on the sheet ground `surface` is *lighter* than the canvas while on
 * console it is darker — so the gradient reads as a subtle inversion of itself rather
 * than going flat. The numeral stays `text-primary` and the label `text-secondary`, so
 * the hierarchy between them survives without either being pinned to a literal.
 */
export function OnSheet() {
  return (
    <Surface ground="sheet" tone="canvas" className="p-8">
      <StatsGrid>
        <Stat number="11x" label="Faster customs clearance" />
        <Stat number="94%" label="Perishable loss avoided" />
        <Stat number="<40ms" label="Telemetry to decision" />
      </StatsGrid>
    </Surface>
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
