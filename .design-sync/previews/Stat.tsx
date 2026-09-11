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
 * `Stat`'s panel is not a flat fill: it is a `from-surface to-canvas` gradient. Both
 * stops rebind with the ground, and what this cell shows is that the gradient keeps
 * the **same** direction in both registers — light stop into dark stop — because
 * `surface` is lighter than `canvas` on the sheet ramp as well as the console one.
 *
 * An earlier version of this note claimed the gradient "inverts" between grounds.
 * It does not, and the claim was worth removing rather than softening: **only
 * `surface-raised` and `surface-well` invert.** `surface` sits above `canvas` in both
 * ramps (console `36,31,28` over `26,22,20`; sheet `255,253,250` over `251,247,241`),
 * which is exactly why `Surface`'s tones are named for their role instead of their
 * depth — the ladder is not uniform, so a name like `raised-1` would be a lie in one
 * register. Do not generalise the inversion from `raised`/`well` to `surface`.
 *
 * The numeral stays `text-primary` and the label `text-secondary`, so the hierarchy
 * between them survives without either being pinned to a literal.
 *
 * The wrapping `Surface` deliberately carries no `p-8`. The card provider already wraps
 * every cell in one, and the 64px of column width the second copy costs is not free
 * here: the numeral is `break-words` — `Stat`'s backstop against `overflow-hidden`
 * clipping a long figure — so a narrower card does not shrink the type, it breaks the
 * token. `<40ms` split to `<40m` / `s`, which pushed the third panel's rule and label
 * 55px below its neighbours' and destroyed the row alignment this cell exists to show.
 * Matching `InAGrid`'s width is what keeps the comparison to `ground` alone.
 */
export function OnSheet() {
  return (
    <Surface ground="sheet" tone="canvas">
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
