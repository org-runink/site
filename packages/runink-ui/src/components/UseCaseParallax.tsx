import { useEffect, useRef, useState } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../lib/cx';
import { Icon, type IconName } from './Icon';
import { safeHref } from '../lib/safeHref';

export interface UseCaseParallaxStep {
  /**
   * The bolded lead-in, e.g. `"Real-Time Subscriptions"`. In the shortcode this
   * was the `**…**` span of each line; omit it for an unlabelled step.
   */
  title?: string;
  /** The rest of the step — what the phase actually does. */
  text: string;
}

/** Which half of the loop a step belongs to. Decides the card's entire palette. */
export type UseCaseParallaxTrack = 'monitor' | 'cockpit';

// The two tracks are distinguished only by accent: green for what the system
// watches, red for what it acts on. Each has a matching glow token.
//
// The card ground is OPAQUE `surface`; the track wash rides on top of it as its own
// layer (TRACK_WASH below). A 15%-alpha fill made the card a window: the band's
// decorative grid read straight through it and through the step copy, which is
// invisible on the console ground and reads as a rendering fault on sheet.
// The hover fills are gone with it — each restated the rest-state wash, so they were
// already no-ops.
//
// `monitor`'s `hover:shadow-glow-success` went the same way. It repeated the rest glow,
// and `shadow-xl` sorts after `shadow-glow-*` in the emitted stylesheet, so it never won
// the hover it was written for. The glow is the card's resting depth; the hover trades it
// for the deeper drop shadow and brightens the track border /30 → /50.
const TRACK_CARD: Record<UseCaseParallaxTrack, string> = {
  monitor: 'border-ink-success/30 bg-surface shadow-glow-success hover:border-ink-success/50 hover:shadow-xl',
  cockpit: 'border-ink-provenance/30 bg-surface hover:border-ink-provenance/50 hover:shadow-xl',
};

/** The track's identity wash, painted over the card's opaque ground. */
const TRACK_WASH: Record<UseCaseParallaxTrack, string> = {
  monitor: 'bg-fill-success-wash',
  cockpit: 'bg-fill-provenance-wash',
};

// The badge follows the card's hover on its BORDER, not its fill: the wash under
// `ink-success`/`ink-provenance` text is pinned at the 0.15 ceiling, so the
// `group-hover:bg-fill-<track>-wash` it used to carry was the rest value repainted.
// Matches `StepCard`, which renders this same badge standalone.
const TRACK_BADGE: Record<UseCaseParallaxTrack, string> = {
  monitor: 'border-ink-success/30 bg-fill-success-wash text-ink-success group-hover:border-ink-success/50',
  cockpit: 'border-ink-provenance/30 bg-fill-provenance-wash text-ink-provenance group-hover:border-ink-provenance/50',
};

const TRACK_TITLE: Record<UseCaseParallaxTrack, string> = {
  monitor: 'text-ink-success',
  cockpit: 'text-ink-provenance',
};

// Each dot rings in its OWN family. The monitor dot briefly ringed in `fill-accent`,
// which is the mechanical fallout of `ring-fill-accent` having no olive ring token in
// the table — an orange halo on the green track, and the one place the two headings
// stopped being parallel.
const TRACK_DOT: Record<UseCaseParallaxTrack, string> = {
  monitor: 'bg-fill-success ring-4 ring-ink-success/20',
  cockpit: 'bg-fill-provenance ring-4 ring-ink-provenance/20',
};

export interface UseCaseParallaxProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  /** Uppercase letterspaced pill above the headline, e.g. `"IoT-Edge Telemetry"`. */
  pill?: ReactNode;
  /** The band's gradient headline — the use case's name. */
  title: ReactNode;
  /** The one-line positioning under it, in uppercase caps. */
  subtitle?: ReactNode;
  /** Where the CTA goes — the full use-case page. Omit to drop the CTA. */
  url?: string;
  /** CTA label. Defaults to `"Read Full Use Case"`. */
  ctaLabel?: string;
  /**
   * The operational problem, in the raised panel above the steps. Omit the panel by
   * omitting this. The shortcode ran it through `markdownify`, so pass a node if
   * the copy needs emphasis.
   */
  problem?: ReactNode;
  /** Heading on the problem panel. Defaults to `"The Operational Problem"`. */
  problemLabel?: string;
  /**
   * Icon beside the problem heading. Defaults to `light-bulb`; the Hugo markup
   * drew an inline info-circle, which the ported `Icon` registry does not carry.
   */
  problemIcon?: IconName;
  /** The observe half of the loop — what telemetry sees. */
  monitor?: UseCaseParallaxStep[];
  /** Heading over the monitor steps. Defaults to `"Telemetry-Driven Visibility"`. */
  monitorLabel?: string;
  /** The act half of the loop — what the Twin does about it. */
  cockpit?: UseCaseParallaxStep[];
  /**
   * Heading over the cockpit steps. Defaults to
   * `"Operations Actionable Twin Execution"`.
   */
  cockpitLabel?: string;
  /**
   * Word before each step's number. Defaults to `"Step"`. Numbering is continuous:
   * the cockpit track picks up where the monitor track left off, because the two
   * are one sequence.
   */
  stepLabel?: string;
  /**
   * Put the steps column on the *left* and the copy on the right from `md` up.
   * Alternating this down a page is what gives the homepage its zig-zag.
   */
  invert?: boolean;
  /**
   * Drift the two columns against each other as the band crosses the viewport.
   * Defaults to true; ignored under `prefers-reduced-motion`.
   */
  parallax?: boolean;
  /**
   * How far the columns drift, `0`–`1`. `0.3` (the default) is about ±18px on the
   * steps column and ±7px on the copy — enough to separate the planes, not enough
   * to look like the layout is broken.
   */
  depth?: number;
  /**
   * Optional decorative layer painted behind the content — pass the ported
   * background-effects component here. The Hugo shortcode always rendered it.
   */
  backgroundEffect?: ReactNode;
}

/** True when the visitor has asked the OS to minimise animation. */
function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

/**
 * One use case told as a two-column scene: gradient headline and CTA beside the numbered observe-then-act loop.
 *
 * This is the homepage's workhorse band — the page stacks five of them,
 * alternating `invert`. The right column is the whole argument: a raised problem
 * panel, then the **monitor** track (green, telemetry-driven visibility) and the
 * **cockpit** track (red, what the Twin executes), numbered as one continuous
 * sequence so the reader sees a single loop rather than two lists.
 *
 * `relative overflow-hidden` on the band is load-bearing — the background effect
 * and the drifting columns are clipped to it. Each step card is a `group` for its
 * own hover state.
 *
 * **Three planes, in this order: decoration, card grounds, content.** The
 * `backgroundEffect` slot is wrapped in its own `z-0 isolate` stacking context, so
 * nothing passed into it can reach the content plane however it is classed. The step
 * cards and the problem panel sit on *opaque* grounds with their track wash as a
 * separate layer — a translucent card let the decorative grid read through the copy,
 * which on the console ground is dark-on-dark and unnoticeable and on sheet looks like
 * pink rules ruled across the text.
 *
 * The columns render at **identity transform** before any scroll, so the static
 * screenshot is the real scene, and every step is fully visible from the first
 * paint (the Hugo version faded them in from `opacity-20` with an
 * IntersectionObserver, which would have screenshotted as a ghost). With
 * `parallax` on, the two columns translate in opposite directions by a fraction of
 * how far the band's centre sits from the viewport's, driven by the same
 * rAF-throttled scroll listener `LandingHero` uses, and nothing moves under
 * `prefers-reduced-motion`.
 *
 * Paints its own `canvas` ground and bottom rule, so place it between
 * sections rather than inside one.
 *
 * @example
 * <UseCaseParallax
 *   pill="IoT-Edge Telemetry"
 *   title="The Autonomous Cold Chain Guard"
 *   subtitle="Perishable Loss Prevention"
 *   url="/use-cases/cold-chain-safety/"
 *   problem="Temperature excursions in transit cost pharmaceutical and food enterprises billions in annual cargo spoilage. Static temperature monitors register failures after they occur. The IoT Cold Chain Sentinel subscribes to real-time container telematics. When compressor degradation is detected (e.g. Reefer #MSCU-8849201 rising to 3.2°C), the Twin automatically issues a Secure API reroute command to alternative port power-plugs and quarantines affected cargo."
 *   monitor={[
 *     {
 *       title: 'Real-Time Subscriptions',
 *       text: 'ingest live telematics streams from connected reefer sensors using Secure streams to ensure high-throughput, low-latency telemetry ingestion.',
 *     },
 *     {
 *       title: 'Predictive Degradation',
 *       text: 'leverages predictive algorithms to identify compressor failures before cargo spoilage occurs, evaluating sensor data against strict safety constraints.',
 *     },
 *     {
 *       title: 'Actionable Alerts',
 *       text: 'notify operators of the exact financial risk in play, pushing instant notifications directly to the Dashboard UI.',
 *     },
 *   ]}
 *   cockpit={[
 *     {
 *       title: 'Actionable Twins',
 *       text: 'display the live temperature variance against ambient port conditions, updating state securely in real-time across the network.',
 *     },
 *     {
 *       title: 'Orchestration Engine',
 *       text: 'autonomously drafts an express LTL alternate carrier injection and resolves logistics bottlenecks intelligently.',
 *     },
 *     {
 *       title: 'ROI Impact:',
 *       text: 'Protects high-value cargo assets (e.g., $42,000 in biologics) from spoilage by executing instant edge-plug interventions.',
 *     },
 *   ]}
 * />
 */
export function UseCaseParallax({
  pill,
  title,
  subtitle,
  url,
  ctaLabel = 'Read Full Use Case',
  problem,
  problemLabel = 'The Operational Problem',
  problemIcon = 'light-bulb',
  monitor = [],
  monitorLabel = 'Telemetry-Driven Visibility',
  cockpit = [],
  cockpitLabel = 'Operations Actionable Twin Execution',
  stepLabel = 'Step',
  invert = false,
  parallax = true,
  depth = 0.3,
  backgroundEffect,
  className,
  ...rest
}: UseCaseParallaxProps) {
  const bandRef = useRef<HTMLElement>(null);
  /**
   * How far the band's centre is from the viewport's, as a fraction of the
   * viewport height. `0` — the value it renders with — means centred, which is
   * also the at-rest composition.
   */
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!parallax || prefersReducedMotion()) return;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        ticking = false;
        const band = bandRef.current;
        if (!band) return;
        const rect = band.getBoundingClientRect();
        // Off screen: leave the last value alone rather than spend work on it.
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;
        const viewport = window.innerHeight || 1;
        setProgress((viewport / 2 - (rect.top + rect.height / 2)) / viewport);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [parallax]);

  const stepsDrift = -progress * depth * 120;
  const copyDrift = progress * depth * 48;

  const href = safeHref(url);
  const monitorCount = monitor.length;

  const renderStep = (track: UseCaseParallaxTrack, step: UseCaseParallaxStep, stepNum: number) => (
    <div
      key={`${track}-${stepNum}`}
      className={cx(
        'group relative mb-5 flex w-full cursor-default flex-col items-start justify-between gap-4 overflow-hidden rounded-card border px-6 py-5 transition-all duration-700 ease-out md:flex-row md:items-center',
        TRACK_CARD[track],
      )}
    >
      {/*
        The wash as a layer, not as the card's fill. Positioned but `z-auto`, so it
        paints under the `z-10` copy and the `z-20` badge while still covering the
        card's whole face.
      */}
      <div aria-hidden="true" className={cx('absolute inset-0', TRACK_WASH[track])} />
      <div className="relative z-10 flex-grow pl-2 pr-2 text-sm leading-relaxed md:text-base lg:pl-3">
        {step.title && (
          <strong className={cx('block text-lg font-bold tracking-tight lg:mr-2 lg:inline md:text-xl', TRACK_TITLE[track])}>
            {step.title}
          </strong>
        )}
        <span className="text-secondary transition-colors duration-500 group-hover:text-primary">{step.text}</span>
      </div>
      {/*
        `relative` is what makes the `z-20` mean anything — a z-index on a statically
        positioned element is inert, which left the badge painting in the in-flow layer
        BELOW any positioned sibling, the wash layer above included.
      */}
      <div className="relative z-20 shrink-0 self-end md:self-auto">
        <span
          className={cx(
            'inline-flex items-center justify-center whitespace-nowrap rounded-full border px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-widest transition-all',
            TRACK_BADGE[track],
          )}
        >
          {stepLabel} {stepNum}
        </span>
      </div>
    </div>
  );

  return (
    <section
      ref={bandRef}
      className={cx(
        // Deliberately NOT a `group`: the Hugo band was one, which made hovering
        // anywhere in it fire every step card's and the problem panel's
        // `group-hover` state at once. Each of those owns its own `group`.
        'relative flex min-h-[70vh] w-full items-center justify-center overflow-hidden border-b border-hairline bg-canvas',
        className,
      )}
      {...rest}
    >
      {/*
        The decorative layer is clamped into its OWN stacking context — a positioned
        wrapper with an explicit `z-0` plus `isolate` — so no z-index on whatever is
        passed into the slot can paint into the content plane above it. The grid is
        `opacity-20` artwork: on console it reads as texture, on sheet its rules were
        running across the step cards and behind the body copy.
      */}
      {backgroundEffect && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 isolate z-0 overflow-hidden">
          {backgroundEffect}
        </div>
      )}

      <div className="relative z-20 mx-auto grid w-full max-w-[1400px] items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:gap-24">
        {/* Copy and CTA. */}
        <div
          className={cx('max-w-xl order-2', invert ? 'md:order-2' : 'md:order-1')}
          style={{ transform: `translate3d(0, ${copyDrift}px, 0)` }}
        >
          {pill && (
            /* `border-edge`: the pill is a bounded element sitting straight on the
               band, and its fill is a 50% `surface` behind `backdrop-blur` — next to
               nothing on the sheet ramp — so the border is all that shapes it. */
            <div className="mb-6 inline-flex items-center justify-center rounded-card border border-edge bg-surface/50 px-6 py-2 text-sm font-black uppercase tracking-[0.25em] text-ink-accent backdrop-blur md:text-base">
              {pill}
            </div>
          )}
          <h2 className="mb-2 bg-gradient-to-r from-fill-accent to-accent-lift bg-clip-text text-4xl font-black uppercase italic leading-[0.9] tracking-tighter text-transparent drop-shadow-lg md:text-5xl xl:text-7xl 2xl:text-[80px]">
            {title}
          </h2>
          {subtitle && (
            <div className="mb-10 text-lg font-bold uppercase tracking-[0.15em] text-secondary md:text-xl">
              {subtitle}
            </div>
          )}
          {href && (
            <a
              href={href}
              className="inline-flex items-center gap-3 rounded-full bg-fill-provenance px-8 py-4 text-sm font-bold uppercase tracking-wider text-on-provenance shadow-lg transition-all duration-300 hover:bg-fill-provenance/90"
            >
              {ctaLabel}
              <Icon name="arrow-right" className="h-4 w-4" />
            </a>
          )}
        </div>

        {/* The observe-then-act loop. */}
        <div
          className={cx('relative z-10 mx-auto w-full max-w-2xl md:ml-auto order-1', invert ? 'md:order-1' : 'md:order-2')}
          style={{ transform: `translate3d(0, ${stepsDrift}px, 0)` }}
        >
          <div className="flex w-full flex-col pl-0 md:pl-6">
            {problem && (
              /* `surface` inside an `edge` border. It was `bg-canvas` on a `canvas`
                 band — the same value as the ground — so the "panel" was only ever a
                 `hairline/80` rectangle, which is a whisper on console and nothing at
                 all on sheet. The lift and the boundary are now both real on either
                 ground. */
              <div className="group relative mb-12 overflow-hidden rounded-[1.25rem] border border-edge bg-surface p-6 md:p-8">
                {/*
                  `from-fill-accent/15`, not `from-fill-accent-wash`: the wash is a
                  background token with no gradient-stop form, so the 0.15 ceiling is
                  written as the modifier. Same colour, not a second number.

                  Positioned, so the copy below it takes `z-10` — otherwise this tint
                  paints over the heading and the prose rather than behind them.
                */}
                <div className="absolute inset-0 bg-gradient-to-r from-fill-accent/15 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                <h3 className="relative z-10 mb-3 flex items-center gap-3 font-bold tracking-tight text-primary">
                  <Icon name={problemIcon} className="h-5 w-5 text-ink-accent" />
                  {problemLabel}
                </h3>
                <div className="prose dark:prose-invert relative z-10 text-[13px] leading-relaxed text-secondary prose-p:last:mb-0 md:text-sm">
                  {problem}
                </div>
              </div>
            )}

            {monitor.length > 0 && (
              <>
                <h3 className="mb-4 flex items-center gap-3 text-lg font-bold tracking-tight text-primary">
                  <span className={cx('h-2 w-2 rounded-full', TRACK_DOT.monitor)} />
                  {monitorLabel}
                </h3>
                <div className="flex w-full flex-col">
                  {monitor.map((step, index) => renderStep('monitor', step, index + 1))}
                </div>
              </>
            )}

            {cockpit.length > 0 && (
              <>
                <h3 className="mb-4 mt-12 flex items-center gap-3 text-lg font-bold tracking-tight text-primary">
                  <span className={cx('h-2 w-2 rounded-full', TRACK_DOT.cockpit)} />
                  {cockpitLabel}
                </h3>
                <div className="flex w-full flex-col pb-8">
                  {cockpit.map((step, index) => renderStep('cockpit', step, monitorCount + index + 1))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
