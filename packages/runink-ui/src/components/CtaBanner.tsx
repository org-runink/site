import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import { cx } from '../lib/cx';
import { safeHref } from '../lib/safeHref';

/** One of the banner's two action links. Rendered only when `text` is non-empty. */
export interface CtaBannerAction {
  /** Link label. The Hugo partial skips the button entirely when this is empty. */
  text: string;
  /**
   * Destination. Defaults to `#` so the banner renders without routing wired up —
   * which is also where a rejected (script-bearing) URL lands.
   */
  url?: string;
}

export interface CtaBannerProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  /** Headline, set at `text-3xl md:text-5xl`. Keep it to one short imperative line. */
  title: ReactNode;
  /** Supporting line under the headline, capped at `max-w-2xl`. */
  description?: ReactNode;
  /** The loud, pulsing, arrow-suffixed action. */
  primaryButton?: CtaBannerAction;
  /** The quiet, pill-shaped companion action. */
  secondaryButton?: CtaBannerAction;
  /**
   * Angle of the glow gradient behind the panel, in degrees — the `--gradient-angle`
   * custom property of the site's `.cta-gradient` class. `90` is left-to-right.
   * Defaults to 90.
   */
  gradientAngle?: number;
  /**
   * Start colour of the glow gradient (`--gradient-from`). Any CSS colour. Set it
   * **together with** `gradientTo`; if either is omitted the banner keeps its token
   * gradient (`rose-800` → `secondary-500`).
   */
  gradientFrom?: string;
  /** End colour of the glow gradient (`--gradient-to`). See `gradientFrom`. */
  gradientTo?: string;
  className?: string;
}

/**
 * The full-width closing call-to-action band — the site's heaviest CTA treatment.
 *
 * A translucent `primary-800/40` panel on a 2rem radius, floated over a blurred
 * gradient glow that doubles in opacity on hover. Use it once per page, near the
 * end; for an inline CTA inside prose use `Cta`, which is the shortcode-shaped
 * adapter over this component.
 *
 * Two load-bearing details: the panel is a `group` (the glow's hover brighten
 * depends on it) and the primary link is a named `group/link` (its arrow slides on
 * hover), so the nested hover states stay independent. The primary link carries
 * `animate-cta-pulse`, the site's `.cta-pulse` ring, which is what makes it the
 * loudest thing on the page. Both destinations run through `safeHref` and fall
 * back to `#` when rejected. The gradient is painted
 * with Tailwind's gradient stops by default, and switches to an explicit
 * `linear-gradient` — plus the `--gradient-*` custom properties the site's
 * `.cta-gradient` class reads — as soon as `gradientFrom`/`gradientTo` are given.
 *
 * Sits directly on `Surface` tone `canvas`; it brings its own vertical rhythm
 * (`py-12 my-24` from `.cta-section`), so do not wrap it in a `Section`.
 *
 * @example
 * <CtaBanner
 *   title="Stop The Bleeding."
 *   description="See your operational risks in real-time and fix them automatically."
 *   primaryButton={{ text: 'Get Started', url: '/#contact' }}
 *   secondaryButton={{ text: 'Talk to an engineer', url: '/contact' }}
 * />
 */
export function CtaBanner({
  title,
  description,
  primaryButton,
  secondaryButton,
  gradientAngle = 90,
  gradientFrom,
  gradientTo,
  className,
  ...rest
}: CtaBannerProps) {
  const customGradient = Boolean(gradientFrom && gradientTo);

  const glowStyle = (
    customGradient
      ? {
          '--gradient-angle': String(gradientAngle),
          '--gradient-from': gradientFrom,
          '--gradient-to': gradientTo,
          backgroundImage: `linear-gradient(${gradientAngle}deg, ${gradientFrom}, ${gradientTo})`,
        }
      : { backgroundImage: `linear-gradient(${gradientAngle}deg, var(--tw-gradient-stops))` }
  ) as CSSProperties;

  return (
    <section className={cx('my-24 py-12', className)} {...rest}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="group relative overflow-hidden rounded-card border border-primary-700 bg-primary-800/40 p-8 shadow-2xl backdrop-blur md:p-16">
          <div
            aria-hidden="true"
            className={cx(
              'pointer-events-none absolute -inset-1 opacity-20 blur transition duration-1000 group-hover:opacity-40',
              !customGradient && 'from-rose-800 to-secondary-500',
            )}
            style={glowStyle}
          />

          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-5xl">{title}</h2>
            {description && (
              <p className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-brand-paper md:text-2xl">
                {description}
              </p>
            )}
            <div className="flex flex-col justify-center gap-6 sm:flex-row">
              {primaryButton?.text && (
                <a
                  href={safeHref(primaryButton.url) ?? '#'}
                  className="group/link inline-flex animate-cta-pulse items-center justify-center rounded border border-primary-700 bg-primary-900 px-8 py-4 text-lg font-black uppercase tracking-widest text-white shadow-neon-orange transition-all duration-300 hover:-translate-y-1 hover:border-secondary-500 hover:shadow-neon-orange-strong"
                >
                  {primaryButton.text}
                  <span
                    aria-hidden="true"
                    className="ml-2 inline-block transition-transform duration-300 group-hover/link:translate-x-2"
                  >
                    &rarr;
                  </span>
                </a>
              )}
              {secondaryButton?.text && (
                <a
                  href={safeHref(secondaryButton.url) ?? '#'}
                  className="inline-flex items-center justify-center rounded-full border-2 border-primary-700 bg-primary-900/50 px-8 py-4 text-lg font-bold text-primary-200 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-secondary-500 hover:bg-primary-800 hover:text-white"
                >
                  {secondaryButton.text}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
