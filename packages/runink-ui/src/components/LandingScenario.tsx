import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../lib/cx';
import { Icon, type IconName } from './Icon';
import { safeHref } from '../lib/safeHref';

export interface LandingScenarioProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  /**
   * The industry the scenario targets, shown in the monospace "Target:" pill.
   * Defaults to `"Logistics"` — the fallback the shortcode used when a use-case
   * page declared no `industries`.
   */
  target?: string;
  /** The scenario's name, set as the band's black italic headline. */
  title: ReactNode;
  /** The lead paragraph — in the Hugo version, the page's `description`. */
  description?: ReactNode;
  /**
   * The excerpt in the bordered monospace block under the description — the
   * page's summary on the site. Clamped to three lines, so keep it short.
   */
  excerpt?: ReactNode;
  /** Where both CTAs point — the scenario's own page. */
  href?: string;
  /** Primary CTA label. Defaults to `"Initialize Protocol"`. */
  primaryLabel?: string;
  /** Secondary CTA label. Defaults to `"View Analytics"`. */
  secondaryLabel?: string;
  /** Where the secondary CTA points. Defaults to `href`. */
  secondaryHref?: string;
  /**
   * Glyph in the centre of the visual panel. Defaults to `cube-transparent`.
   * The Hugo version drew a Material Symbol (`gavel` for claims, `local_shipping`
   * otherwise); this package ships the `Icon` registry instead, so pick the
   * nearest — `scale` for claims and disputes, `map` for routing.
   */
  icon?: IconName;
  /** Label on the metric chip over the visual. Defaults to `"EFFICIENCY"`. */
  metricLabel?: string;
  /** Value on the metric chip. Defaults to `"+42.8%"`. */
  metricValue?: string;
  /** How full the chip's bar is, `0`–`100`. Defaults to `85`. */
  metricPercent?: number;
}

/**
 * A single scenario pitched as a two-up band: targeted copy and CTAs beside a console-style visual.
 *
 * Ported from the `landing-scenario` shortcode, which took a `slug` and pulled the
 * use-case page's title, description and summary out of Hugo's content graph.
 * There is no content graph here, so the same fields arrive as props and the
 * component works for any scenario.
 *
 * The band is deliberately instrument-panel flavoured: a 50px accent grid at 10%
 * behind everything, a monospace target pill with a pulsing dot, and a right-hand
 * panel that reads as a screen — traffic-light dots, a big glyph, and a metric chip
 * with a progress bar. The panel has no screenshot by design; it is a *frame*, so
 * it survives having no image to show.
 *
 * The visual column is a `group`: the panel tilts a degree and scales up while a
 * gradient glow blooms behind it on hover. `relative overflow-hidden` on the band
 * clips the grid and the glow.
 *
 * Paints its own `surface` ground and top rule, so place it between sections
 * rather than inside one.
 *
 * @example
 * <LandingScenario
 *   target="Logistics"
 *   title="Automated Claims Audit & Demurrage Recovery"
 *   description="Forensic chronology reconstruction auto-drafts tariff disputes & short-pays."
 *   excerpt="The Terminal Weight Auditor compares incoming weighbridge telemetry with Bill of Lading manifests, then drafts the amendment and the refund claim itself."
 *   href="/use-cases/claims-recovery/"
 *   icon="scale"
 *   metricLabel="RECOVERY"
 *   metricValue="+42.8%"
 *   metricPercent={85}
 * />
 */
export function LandingScenario({
  target = 'Logistics',
  title,
  description,
  excerpt,
  href,
  primaryLabel = 'Initialize Protocol',
  secondaryLabel = 'View Analytics',
  secondaryHref,
  icon = 'cube-transparent',
  metricLabel = 'EFFICIENCY',
  metricValue = '+42.8%',
  metricPercent = 85,
  className,
  ...rest
}: LandingScenarioProps) {
  const primaryHref = safeHref(href);
  const altHref = safeHref(secondaryHref ?? href);
  const barWidth = `${Math.max(0, Math.min(100, metricPercent))}%`;

  return (
    <section
      className={cx('relative overflow-hidden border-t border-hairline bg-surface py-20', className)}
      {...rest}
    >
      {/*
        The instrument grid. Two linear gradients on a 50px tile — expressed as an
        inline style because the repeat size and the 1px rules have no utility, and
        pointing at the token custom property rather than a hex literal.
      */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(rgb(var(--rk-fill-accent-ch)) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--rk-fill-accent-ch)) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded border border-hairline/30 bg-surface/80 px-3 py-1 font-mono text-xs uppercase tracking-widest text-ink-accent backdrop-blur">
            <span className="h-2 w-2 animate-pulse-slow rounded-full bg-fill-accent" />
            Target: {target}
          </div>

          <h2 className="text-4xl font-black uppercase italic leading-none tracking-tighter text-primary md:text-6xl">
            {title}
          </h2>

          {/*
           * Guard the wrappers, not only their children. Inside `space-y-8` an
           * empty div still contributes its 32px of stack spacing, so a
           * title-only scenario accumulated ~64px of dead space and pushed the
           * metric chip out of frame.
           */}
          {(description || excerpt) && (
            <div className="prose dark:prose-invert prose-lg leading-relaxed text-secondary">
              {description && <p>{description}</p>}
              {excerpt && (
                <div className="mt-4 line-clamp-3 border-l-2 border-hairline pl-4 font-mono text-sm text-secondary">
                  {excerpt}
                </div>
              )}
            </div>
          )}

          {(primaryHref || (altHref && secondaryLabel)) && (
          <div className="flex flex-wrap gap-4">
            {primaryHref && (
              <a
                href={primaryHref}
                className="rounded-full border border-edge/50 bg-fill-success px-8 py-4 font-bold uppercase tracking-widest text-on-success transition-colors duration-200 hover:bg-fill-success-glow"
              >
                {primaryLabel}
              </a>
            )}
            {altHref && secondaryLabel && (
              <a
                href={altHref}
                className="rounded-full border border-hairline bg-transparent px-8 py-4 font-bold uppercase tracking-widest text-secondary transition-colors duration-200 hover:bg-surface-raised hover:text-primary"
              >
                {secondaryLabel}
              </a>
            )}
          </div>
          )}
        </div>

        <div className="group relative">
          <div className="relative aspect-video transform overflow-hidden rounded-3xl border border-hairline bg-surface-raised/40 shadow-2xl backdrop-blur-sm transition-transform duration-500 hover:rotate-1 hover:scale-[1.02]">
            {/*
              `from-fill-accent/15` rather than `from-fill-accent-wash`: the wash is a
              *background* token and has no gradient-stop form, so the 0.15 ceiling is
              spelled as the modifier here. Same resolved colour, not a new number.
            */}
            <div className="absolute inset-0 bg-gradient-to-br from-fill-accent/15 via-transparent to-fill-provenance/10" />

            {/* Window chrome, so the panel reads as a console rather than a card. */}
            <div className="absolute left-4 top-4 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-fill-provenance/50" />
              <span className="h-3 w-3 rounded-full bg-amber-500/50" />
              <span className="h-3 w-3 rounded-full bg-lime-700/50" />
            </div>

            <div className="flex h-full items-center justify-center">
              <Icon
                name={icon}
                className="h-24 w-24 text-secondary transition-colors duration-500 group-hover:text-ink-accent"
              />
            </div>

            <div className="absolute bottom-6 right-6 rounded-chip border border-hairline/50 bg-surface/90 p-4 shadow-lg backdrop-blur">
              <div className="mb-2 flex items-center justify-between gap-8">
                <span className="font-mono text-[10px] text-secondary">{metricLabel}</span>
                <span className="text-xs font-bold text-ink-success">{metricValue}</span>
              </div>
              <div className="h-1 w-full overflow-hidden rounded-full bg-surface-raised">
                <div className="h-full bg-gradient-to-r from-fill-provenance to-accent-lift" style={{ width: barWidth }} />
              </div>
            </div>
          </div>

          {/*
            Glow behind the panel, revealed on hover. The purple midpoint is gone
            rather than retinted: with the sweep down to two stops it had nothing left
            to do, and there is no gradient-stop form of the wash to carry it.
          */}
          <div className="pointer-events-none absolute -inset-4 -z-10 rounded-full bg-gradient-to-tr from-fill-success/10 to-fill-provenance/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
        </div>
      </div>
    </section>
  );
}
