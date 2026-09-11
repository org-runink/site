import type { HTMLAttributes } from 'react';
import { cx } from '../lib/cx';

/**
 * Which half of the observe-then-act loop a step belongs to. Decides the card's
 * entire palette. Same vocabulary as `UseCaseParallaxTrack`, so a step rendered
 * standalone matches the same step inside a use-case band.
 */
export type StepCardTrack = 'monitor' | 'cockpit';

/*
 * The hover is the BORDER and the shadow, never the wash.
 *
 * Both tracks used to carry `hover:bg-fill-<track>-wash` over a rest state of exactly
 * that wash — a fill that declared a hover and repainted itself. It cannot be fixed by
 * deepening, either: the wash sits under the step copy and the 0.15 alpha is a measured
 * ceiling (derived.json), so a darker hover fill would take the olive pair under 4.5:1.
 * The track border going /30 → /50 is the hover, with `shadow-xl` under it.
 *
 * `monitor` also restated `hover:shadow-glow-success`, which was dead twice over: it
 * repeated the rest glow, and `shadow-xl` sorts after `shadow-glow-*` in the emitted
 * stylesheet, so it never won the hover anyway. The glow is the card's RESTING depth and
 * the hover trades it for the deeper drop shadow; `cockpit` has no glow to trade, because
 * `shadow-neon-red` had no FACE counterpart (see the component docstring).
 */
const TRACK_CARD: Record<StepCardTrack, string> = {
  monitor:
    'border-ink-success/30 bg-fill-success-wash shadow-glow-success hover:border-ink-success/50 hover:shadow-xl',
  cockpit:
    'border-ink-provenance/30 bg-fill-provenance-wash hover:border-ink-provenance/50 hover:shadow-xl',
};

/*
 * The badge tracks the card's hover on its BORDER, for the same reason: its wash carries
 * `ink-success`/`ink-provenance` text, so the fill is pinned at the wash ceiling and the
 * `group-hover:bg-fill-<track>-wash` it used to carry was the rest value. The border
 * moves /30 → /50 in step with the card's, so the badge still reads as part of one
 * element rather than a decal on it.
 */
const TRACK_BADGE: Record<StepCardTrack, string> = {
  monitor:
    'border-ink-success/30 bg-fill-success-wash text-ink-success shadow-glow-success group-hover:border-ink-success/50',
  cockpit:
    'border-ink-provenance/30 bg-fill-provenance-wash text-ink-provenance group-hover:border-ink-provenance/50',
};

const TRACK_TITLE: Record<StepCardTrack, string> = {
  monitor: 'text-ink-success',
  cockpit: 'text-ink-provenance',
};

export interface StepCardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /**
   * Which half of the loop this step is in — olive telemetry (`monitor`) or wine
   * execution (`cockpit`). The Hugo partial called this param `type`; it is
   * `track` here to match `UseCaseParallaxTrack`. Defaults to `monitor`.
   */
  track?: StepCardTrack;
  /**
   * The bolded, track-coloured lead-in, e.g. `"Predictive Degradation"`. Omit it
   * for an unlabelled step — that is what Hugo's `hasParts: false` produced.
   */
  title?: string;
  /** The step itself: what this phase of the loop actually does. */
  desc: string;
  /** The step's position in the sequence, rendered in the badge. */
  stepNum: number;
  /** Word before the number in the badge. Defaults to `"Step"`. */
  stepLabel?: string;
}

/**
 * One numbered step in a use-case loop: track-coloured copy on the left, a `Step N` badge on the right.
 *
 * The building block of the observe-then-act narrative. Stack several in a column
 * — `monitor` ones first, then `cockpit`, numbered continuously — and you have the
 * right-hand column of a use-case band. `UseCaseParallax` renders this same shape
 * inline; reach for `StepCard` when you are composing the sequence yourself.
 *
 * The root is a `group`, which is load-bearing: the badge's border and the copy's
 * brightness are `group-hover` states of the card. The badge's FILL is not — a wash that
 * carries ink is pinned at the 0.15 ceiling, so it has nowhere to go (see `TRACK_BADGE`).
 *
 * **Renders fully visible and untransformed at rest.** The Hugo partial shipped
 * `reveal-step opacity-20 translate-y-4` and was revealed by an
 * IntersectionObserver in `assets/js/main.js`; that is dropped entirely here,
 * because a card at 20% opacity reads as a broken component in a static
 * screenshot. The `transition-all duration-700` is kept for the hover state only.
 *
 * Sits on `Surface` tone `canvas`, which is also what a use-case band paints for
 * itself. Its own fill is the track's 15% wash (`fill-success-wash` /
 * `fill-provenance-wash`), so the surface underneath shows through and sets the
 * card's real value on either ground. It carries its own `mb-5`, so a column of
 * these needs no gap.
 *
 * Only `monitor` glows. `shadow-glow-success` is the surviving half of the port's
 * pair — `shadow-neon-red` had no FACE counterpart and was retired outright, so
 * `cockpit` separates on its border, wash and ink alone. Do not read the missing
 * glow as a bug in the `cockpit` cell.
 *
 * @example
 * <StepCard
 *   track="monitor"
 *   stepNum={2}
 *   title="Predictive Degradation"
 *   desc="leverages predictive algorithms to identify compressor failures before cargo spoilage occurs, evaluating sensor data against strict safety constraints."
 * />
 * <StepCard
 *   track="cockpit"
 *   stepNum={5}
 *   title="Orchestration Engine"
 *   desc="autonomously drafts an express LTL alternate carrier injection and resolves logistics bottlenecks intelligently."
 * />
 */
export function StepCard({
  track = 'monitor',
  title,
  desc,
  stepNum,
  stepLabel = 'Step',
  className,
  ...rest
}: StepCardProps) {
  return (
    <div
      className={cx(
        'group relative mb-5 flex w-full cursor-default flex-col items-start justify-between gap-4 overflow-hidden rounded-card border px-6 py-5 transition-all duration-700 ease-out md:flex-row md:items-center',
        TRACK_CARD[track],
        className,
      )}
      {...rest}
    >
      <div className="relative z-10 flex-grow pl-2 pr-2 text-sm leading-relaxed md:text-base lg:pl-3">
        {title && (
          <strong className={cx('block text-lg font-bold tracking-tight md:text-xl lg:mr-2 lg:inline', TRACK_TITLE[track])}>
            {title}
          </strong>
        )}
        <span className="text-secondary transition-colors duration-500 group-hover:text-primary">{desc}</span>
      </div>
      <div className="z-20 shrink-0 self-end md:self-auto">
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
}
