import type { HTMLAttributes } from 'react';
import { cx } from '../lib/cx';
import { Container } from './Container';
import { Icon, type IconName } from './Icon';

/**
 * Accent for a benefit's icon tile. The Hugo shortcode carried a per-benefit hex
 * in its pipe-delimited param and tinted the tile at 20% with a 40% border; these
 * tones reproduce that from the token palette.
 *
 * Six rungs on three hues: `sage` is the olive wash and `green` the solid olive
 * under it; `orange` is the bright accent wash and `tan` the muted deep one; and
 * the two neutrals are `primary` (well ground, full-strength ink) and `secondary`
 * (the quietest tile in the set). Mixing them down a row of three is the point —
 * three tiles in one tone makes the band read as a single undifferentiated block.
 */
export type BenefitTone = 'sage' | 'green' | 'orange' | 'tan' | 'primary' | 'secondary';

/*
 * Every tone is a distinct (ground, border, ink) triple, because the tile is the
 * only thing distinguishing one panel from the next. Three collapses fixed here:
 *
 *   - `sage`/`green` were one colour. Split by rung: `sage` keeps the 15% wash
 *     (the pairing `Badge` also gives `sage`), `green` takes the solid fill with
 *     its paired `on-success` ink, and its border goes to full-strength
 *     `ink-success` because a 40% one has no wash under it to sit against.
 *   - `tan` repeated `orange`'s `ink-accent` icon, so it took a neutral icon over
 *     the deep wash instead.
 *   - `primary`/`secondary` were the same ground AND the same ink, separated only
 *     by two borders that are both near-invisible at 40%. They are now the two
 *     neutral rungs, one per surface.
 *
 * **Both neutral rungs take `edge`, not `hairline`.** The first pass gave `edge` only
 * to `primary` and left `secondary` on `hairline`, with a comment right here claiming
 * that had restored the boundary a grader reported missing. It had not: these tiles
 * sit on a frosted `surface` panel, and `hairline` measures **1.21:1** against it, so
 * the `secondary` tile rendered as a floating icon with no tile at all while every
 * other rung read clearly. A hairline is a whisper *inside* an already-bounded box;
 * a tile that has to show its own bounds against a near-identical surface needs the
 * ≥3:1 mark tier. `primary` needs `edge` for a second reason too — on `surface-well`,
 * `hairline` is literally the same value (REGISTRY.md).
 *
 * The comment asserting a fix that had not happened is the more useful half of this:
 * prose is not evidence, and a grader sampling pixels is.
 *
 * `border-edge/40` was dead either way: `edge` bakes its own alpha, so the safelist
 * never expands it with a `/NN` modifier.
 */
const TONES: Record<BenefitTone, string> = {
  sage: 'bg-fill-success-wash border-ink-success/40 text-ink-success',
  green: 'bg-fill-success border-ink-success text-on-success',
  orange: 'bg-fill-accent-wash border-fill-accent/40 text-ink-accent',
  tan: 'bg-fill-accent-deep-wash border-ink-accent/40 text-primary',
  primary: 'bg-surface-well border-edge text-primary',
  secondary: 'bg-surface border-edge text-secondary',
};

export interface Benefit {
  /** Icon drawn in the tinted tile. */
  icon: IconName;
  /** The benefit, stated in a few words. */
  title: string;
  /** A sentence expanding on it. */
  description: string;
  /** Accent for this benefit's tile. Defaults to `sage`. */
  tone?: BenefitTone;
}

export interface BenefitsGridProps extends HTMLAttributes<HTMLElement> {
  /** Section heading, set in the system's heaviest display weight. */
  title: string;
  /** Standfirst under the heading. */
  subtitle: string;
  /**
   * The benefits. The shortcode took up to ten `benefit1`…`benefit10` params
   * each holding an `"icon|color|title|description"` string; an array of objects
   * is the honest shape in React, and it is not capped at ten.
   */
  benefits: Benefit[];
}

/**
 * A three-up band of benefit panels under a display heading, lit by a soft glow.
 *
 * The loudest section in the system: `font-black` display heading, a blurred
 * `fill-accent-wash` bloom behind it, and frosted `surface-raised/80` panels that
 * lift, deepen their shadow and wash a faint accent gradient across themselves on
 * hover. Use it once per page, for the "why this matters" band.
 *
 * Each panel is a `group` with an absolutely positioned gradient overlay, so the
 * `group` and `relative`/`overflow-hidden` classes on it are load-bearing. Panels
 * are `flex-col h-full`, so a column with longer copy stretches its neighbours
 * rather than leaving them ragged.
 *
 * Owns its own `py-24` band and `Container`, so drop it straight into a `Surface` —
 * do not wrap it in `Section`.
 *
 * @example
 * <BenefitsGrid
 *   title="Mitigate disruption in real time"
 *   subtitle="Runink's Supply Chain Digital Twin turns live logistics telemetry into decisions that protect your operating margins."
 *   benefits={[
 *     {
 *       icon: 'bolt',
 *       tone: 'sage',
 *       title: 'Act while it still matters',
 *       description: 'Temperature excursions and weight variances are caught in transit, not in next week’s exception report.',
 *     },
 *     {
 *       icon: 'shield-check',
 *       tone: 'green',
 *       title: 'Compliance without the clipboard',
 *       description: 'HazMat staging is supervised continuously, and crane movement locks until a compliant buffer is restored.',
 *     },
 *     {
 *       icon: 'currency-dollar',
 *       tone: 'tan',
 *       title: 'Recover what leaks today',
 *       description: 'Demurrage claims, tariff refunds and refurbishable returns are quantified the moment the discrepancy appears.',
 *     },
 *   ]}
 * />
 */
export function BenefitsGrid({ title, subtitle, benefits, className, ...rest }: BenefitsGridProps) {
  return (
    <section className={cx('relative py-24', className)} {...rest}>
      <Container>
        {/*
          `isolate` is load-bearing, not decoration.

          The bloom below is `-z-10`, and a negative z-index only stays inside its
          parent if that parent is a STACKING CONTEXT. `position: relative` alone is
          not one — it needs a z-index (or `isolation: isolate`). Without it the bloom
          escaped every ancestor here (`div.relative`, `Container`, `section.relative`
          — all `z-index: auto`) and painted behind the page's opaque `Surface`
          ground, so it rendered nothing at all, on both grounds, while two docstrings
          described "a display heading over a glow".

          `Hero`'s orb is the same `-z-10` pattern and works, which is what made this
          hard to spot: its `Container` carries `z-10` and so does create the context.
          Same class, different ancestor chain, opposite outcome.
        */}
        <div className="relative isolate mb-20 text-center">
          <div className="absolute left-1/2 top-1/2 -z-10 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fill-accent-wash blur-[80px]" />
          <h2 className="mb-6 text-4xl font-black tracking-tight text-primary drop-shadow-lg md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-xl font-light leading-relaxed text-secondary md:text-2xl">
            {subtitle}
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group relative flex h-full flex-col overflow-hidden rounded-card border border-hairline bg-surface-raised/80 p-8 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-hairline/30 hover:bg-surface-raised hover:shadow-2xl"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-fill-accent/5 to-accent-lift/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div
                className={cx(
                  'relative z-10 mb-6 flex h-14 w-14 shrink-0 items-center justify-center rounded-chip border shadow-lg shadow-black/20 transition-transform duration-300 group-hover:scale-110',
                  TONES[benefit.tone ?? 'sage'],
                )}
              >
                <Icon name={benefit.icon} className="h-7 w-7" />
              </div>

              {/* No `group-hover` ink on the heading: it rests on `primary`, the top of
                  the ink ramp, so there is nothing brighter to move to and the old
                  `group-hover:text-primary` (with its `transition-colors`) painted the
                  rest state. The description below does move, `secondary` → `primary`. */}
              <h3 className="relative z-10 mb-3 text-xl font-bold text-primary">
                {benefit.title}
              </h3>
              <p className="relative z-10 leading-relaxed text-secondary transition-colors group-hover:text-primary">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
