import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../lib/cx';
import { Container } from './Container';
import { GradientText } from './GradientText';
import { Icon, type IconName } from './Icon';

/**
 * Accent for one reason column. `sage` is the quiet, analytical treatment: an olive
 * bloom that brightens to `fill-success-glow/30` on hover, `ink-success` kicker and
 * tiles, `shadow-2xl`, no lift. `ember` is the one the template reserved for the column
 * it wants you to pick — `ink-accent` kicker and tiles, and the panel lifting a unit on
 * hover.
 *
 * What `ember` no longer has is the loudness: the port gave it a neon orange glow, and
 * this palette has no orange shadow to retint it to, so the glow was retired outright.
 * Its bloom does still deepen — `fill-accent-wash` to `fill-accent/30` on column hover,
 * the same wash-to-brighter move `sage` makes. It used to restate the wash on hover and
 * change nothing, which left the lift carrying the entire state. `ember` is the louder of
 * the two at rest, on its kicker and tiles, and it deepens on hover like `sage` does. Use
 * it on at most one column per grid.
 */
export type ReasonTone = 'sage' | 'ember';

const TONES: Record<ReasonTone, { panel: string; bloom: string; accent: string; tile: string }> = {
  sage: {
    panel: 'border-hairline shadow-2xl',
    bloom: 'bg-fill-success-wash group-hover:bg-fill-success-glow/30',
    accent: 'text-ink-success',
    tile: 'text-ink-success group-hover/item:border-ink-success/50 group-hover/item:bg-fill-success-wash',
  },
  ember: {
    panel: 'border-hairline/30 hover:-translate-y-1 ',
    /*
     * `group-hover:bg-fill-accent/30` — the accent at double the wash alpha, which is the
     * accent-side equivalent of `sage` going wash → `fill-success-glow/30`. The bloom is a
     * `pointer-events-none` blurred disc that carries no text, so it is not bound by the
     * 0.15 wash ceiling (derived.json: the ceiling exists because a wash sits UNDER ink).
     * It previously restated `fill-accent-wash` on hover and moved nothing.
     */
    bloom: 'bg-fill-accent-wash group-hover:bg-fill-accent/30',
    accent: 'text-ink-accent',
    tile: 'text-ink-accent group-hover/item:border-hairline/50 group-hover/item:bg-fill-accent-wash',
  },
};

export interface ReasonCapability {
  /** Icon drawn in the tile to the left of the copy. */
  icon: IconName;
  /** What the capability is called, in a few words. */
  title: string;
  /** A sentence or two on what it does. */
  description: string;
}

export interface Reason {
  /** The headline claim for this column. */
  title: string;
  /**
   * The mono, uppercase kicker under the heading naming the column's category —
   * "Visibility & Intelligence", "Telemetry-Driven Visibility".
   */
  category: string;
  /** Accent for this column. Defaults to `sage`. */
  tone?: ReasonTone;
  /** The capabilities this column enumerates. Rendered as an icon-led list. */
  capabilities: ReasonCapability[];
}

export interface ReasonsGridProps extends HTMLAttributes<HTMLElement> {
  /** Small bordered pill above the heading — the section's category label. */
  eyebrow?: string;
  /** Display heading, clipped to the brand's ember gradient. */
  title: string;
  /** Standfirst under the heading, set uppercase with widened tracking. */
  subtitle?: string;
  /**
   * The columns. The shortcode hardcoded exactly two and inlined four languages
   * into each line; in React the caller supplies the copy in one language, and the
   * grid is two-up from `md` at any count.
   */
  reasons: Reason[];
  /**
   * Optional decorative layer painted behind the content — pass the ported
   * background-effects component here. The shortcode called the
   * `background-effects.html` partial unconditionally; as a prop it stays optional
   * so the band also works on a page that already has its own wash.
   */
  backgroundEffect?: ReactNode;
}

/**
 * The side-by-side "why this platform" band: two capability columns under a display heading.
 *
 * This is the architecture-comparison section — each column states one reason to
 * choose Runink, names its category, and enumerates the capabilities behind it, so
 * the reader can pick a level of intelligence rather than read a flat feature list.
 *
 * It owns its own `py-32` band, top border and `canvas` ground, so drop it
 * straight into a `Surface` — do **not** wrap it in `Section`, which would
 * double-pad it. The band is `relative overflow-hidden` because the per-column
 * blurred bloom is an absolutely positioned child that must be clipped to it.
 *
 * Each column is a `group` and each capability row a `group/item`: both blooms deepen on
 * column hover, each within its own family (see `ReasonTone`), and the icon tile tints on
 * row hover. Both class names are load-bearing.
 *
 * @example
 * <ReasonsGrid
 *   eyebrow="Architecture"
 *   title="Why Runink?"
 *   subtitle="Deploy the right level of intelligence for your operations. Choose between deep analytical visibility or automated execution."
 *   reasons={[
 *     {
 *       title: 'Telemetry-Driven Visibility',
 *       category: 'Visibility & Intelligence',
 *       tone: 'sage',
 *       capabilities: [
 *         {
 *           icon: 'check-circle',
 *           title: 'Data & Operations Maturity Assessments',
 *           description:
 *             'Evaluate data quality and operational maturity directly from logistics documents, EDI feeds, spreadsheets, PDFs, and core WMS/TMS databases.',
 *         },
 *         {
 *           icon: 'clipboard-document-list',
 *           title: 'Rules Reconciliation',
 *           description:
 *             'Map SOPs against legacy code (SQL/VBA/Python) or new platforms (SAP/Salesforce/Shopify). Add unmapped rules manually that our engine hasn’t uncovered yet.',
 *         },
 *         {
 *           icon: 'light-bulb',
 *           title: 'Hypothesis Lab',
 *           description: 'Simulate changes to your rules before deployment. Test the future without risking the present.',
 *         },
 *       ],
 *     },
 *     {
 *       title: 'Operations Actionable Twins',
 *       category: 'Telemetry-Driven Visibility',
 *       tone: 'ember',
 *       capabilities: [
 *         {
 *           icon: 'magnifying-glass',
 *           title: 'ASK (QuickAsk)',
 *           description:
 *             'Natural language querying across the entire supply chain network for rapid S&OP pressure-testing.',
 *         },
 *         {
 *           icon: 'chart-bar',
 *           title: 'DIAGNOSTICS (UploadAnalyze)',
 *           description:
 *             'Self-service file uploads for automated root-cause analysis on delays, inventory anomalies, and spend leakage.',
 *         },
 *         {
 *           icon: 'attribution',
 *           title: 'PREDICTIVE ANALYTICS',
 *           description: 'S&OP Planning and Maturity Roadmap generation powered by real-time logistics data.',
 *         },
 *         {
 *           icon: 'pencil',
 *           title: 'DRAFT',
 *           description:
 *             'Automatic generation of claims, legally compliant BOL amendments, and regulatory filings without human intervention.',
 *         },
 *         {
 *           icon: 'currency-dollar',
 *           title: 'ANALYSE (Spend Analytics)',
 *           description: 'Deep financial and spend analytics for immediate ROI identification and continuous cost reduction.',
 *         },
 *       ],
 *     },
 *   ]}
 * />
 */
export function ReasonsGrid({
  eyebrow,
  title,
  subtitle,
  reasons,
  backgroundEffect,
  className,
  ...rest
}: ReasonsGridProps) {
  return (
    <section
      className={cx('relative overflow-hidden border-t border-hairline bg-canvas py-32', className)}
      {...rest}
    >
      {backgroundEffect}

      <Container className="relative z-10">
        <div className="mb-20 flex flex-col items-center text-center">
          {eyebrow && (
            <div className="mb-6 inline-flex items-center justify-center rounded-card border border-hairline/30 bg-surface/50 px-6 py-2 text-sm font-black uppercase tracking-[0.25em] text-ink-accent backdrop-blur md:text-base">
              {eyebrow}
            </div>
          )}

          <GradientText
            as="h2"
            sweep="ember"
            className="mb-2 text-6xl font-black uppercase italic leading-[0.9] tracking-tighter drop-shadow-lg md:text-7xl lg:text-[90px]"
          >
            {title}
          </GradientText>

          {subtitle && (
            <p className="mb-10 mt-6 max-w-3xl text-lg font-bold uppercase tracking-[0.15em] text-secondary md:text-xl">
              {subtitle}
            </p>
          )}
        </div>

        {/*
         * Only split into columns when there is something to put in the second
         * one — an unconditional `md:grid-cols-2` renders a lone reason as a
         * half-width column beside a blank half.
         */}
        <div className={cx('grid gap-8 lg:gap-12', reasons.length > 1 && 'md:grid-cols-2')}>
          {reasons.map((reason) => {
            const tone = TONES[reason.tone ?? 'sage'];
            return (
              <div
                key={reason.title}
                className={cx(
                  'group relative overflow-hidden rounded-card border bg-surface p-10 transition-all duration-500 lg:p-12',
                  tone.panel,
                )}
              >
                <div
                  className={cx(
                    'pointer-events-none absolute right-0 top-0 h-64 w-64 -translate-y-10 translate-x-10 rounded-full blur-[100px] transition-all duration-700',
                    tone.bloom,
                  )}
                />

                <div className="relative z-10">
                  <h3 className="mb-2 text-4xl font-black tracking-tight text-primary">{reason.title}</h3>
                  <p className={cx('mb-10 font-mono text-sm uppercase tracking-widest', tone.accent)}>
                    {reason.category}
                  </p>

                  <ul className="space-y-8">
                    {reason.capabilities.map((capability) => (
                      <li key={capability.title} className="group/item flex items-start">
                        <div
                          className={cx(
                            'mr-5 mt-1 shrink-0 rounded-chip border border-hairline bg-surface-raised p-3 shadow-lg transition-all',
                            tone.tile,
                          )}
                        >
                          <Icon name={capability.icon} className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="mb-2 text-xl font-bold text-primary">{capability.title}</h4>
                          <p className="text-base leading-relaxed text-secondary">{capability.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
