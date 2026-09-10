import { cx } from '../lib/cx';

export interface StatProps {
  /** The figure itself, pre-formatted — e.g. `"94%"`, `"3.2x"`, `"<40ms"`. */
  number: string;
  /** What the figure measures. */
  label: string;
  className?: string;
}

/**
 * A single headline metric on a gradient panel.
 *
 * The number carries the weight: `text-5xl`/`6xl`, `font-black`, in
 * `brand-paper` with a drop shadow. The label sits below a hairline rule. On
 * hover a second gradient border fades in over the panel — that overlay is
 * absolutely positioned and `pointer-events-none`, so it never intercepts
 * clicks.
 *
 * Designed to be used several at a time in an even grid; see `StatsGrid`.
 *
 * @example
 * <Stat number="11x" label="Faster customs clearance" />
 */
export function Stat({ number, label, className }: StatProps) {
  return (
    <div
      className={cx(
        'group relative overflow-hidden rounded-2xl border border-secondary-500/30 bg-gradient-to-br from-primary-900 to-primary-950 p-8',
        'shadow-xl shadow-primary-900/20 transition-all duration-300',
        'hover:-translate-y-2 hover:shadow-2xl hover:shadow-secondary-500/20',
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-secondary-500/30 to-brand-tan/30 p-[1px] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10 text-center">
        {/*
         * The figure scales with the card rather than sitting at a fixed 60px.
         * The root is `overflow-hidden`, so a fixed size silently CLIPS anything
         * longer than a few characters — "$18.4M" and "99.99%" both lost their
         * last glyph in a three-up grid. `break-words` is the final backstop for
         * a value longer than any of these steps can fit.
         */}
        <div className="mb-3 break-words text-3xl font-black leading-none text-brand-paper drop-shadow-lg sm:text-4xl md:text-5xl lg:text-6xl">
          {number}
        </div>
        <div className="mt-2 border-t border-primary-700/50 pt-4 text-sm font-semibold tracking-wide text-primary-300 transition-colors group-hover:text-brand-paper">
          {label}
        </div>
      </div>
    </div>
  );
}
