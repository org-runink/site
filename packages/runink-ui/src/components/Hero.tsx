import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../lib/cx';
import { safeHref } from '../lib/safeHref';
import { Container } from './Container';
import { Icon } from './Icon';

/**
 * How much vertical presence the hero claims. `double` is the oversized
 * treatment the product pages use for a single statement headline — it scales the
 * type, not the band's padding (the band's rhythm is fixed).
 */
export type HeroSize = 'normal' | 'double';

const HEADLINE_SIZES: Record<HeroSize, string> = {
  normal: 'text-4xl md:text-5xl lg:text-6xl',
  double: 'text-6xl md:text-7xl lg:text-8xl',
};

const SUBHEAD_SIZES: Record<HeroSize, string> = {
  normal: 'text-xl',
  double: 'text-2xl',
};

export interface HeroProps extends Omit<HTMLAttributes<HTMLElement>, 'children' | 'style'> {
  /**
   * The page's one `<h1>`. Takes a node rather than a string because the Hugo
   * shortcode ran the headline through `markdownify` — pass `<em>`/`<strong>`
   * directly instead of markup in a string.
   */
  headline: ReactNode;
  /** Supporting sentence, set against a `hairline` left rule. */
  subHeadline?: ReactNode;
  /** Label for the filled pill CTA. Rendered only with `primaryButtonUrl`. */
  primaryButtonText?: string;
  /**
   * Destination for the filled pill CTA. Rendered only with `primaryButtonText`,
   * and only when the URL survives `safeHref` — a script-bearing destination
   * suppresses the button rather than rendering a dead one.
   */
  primaryButtonUrl?: string;
  /** Label for the outlined pill CTA. Rendered only with `secondaryButtonUrl`. */
  secondaryButtonText?: string;
  /** Destination for the outlined pill CTA. Rendered only with `secondaryButtonText`. */
  secondaryButtonUrl?: string;
  /** Product screenshot for the right column, e.g. `"/images/face/overview.png"`. */
  heroImage?: string;
  /** Alt text for `heroImage`. Defaults to `"Hero Image"`, as the shortcode did. */
  heroImageAlt?: string;
  /** Full-bleed photo layered into the band at 30% on `mix-blend-overlay`. */
  backgroundImage?: string;
  /**
   * First stop of the band's background gradient, as a CSS colour. These arrive
   * from page front matter as raw hex (`"#3A2F2A"`) rather than tokens, so the
   * gradient is an inline style. Omit both stops for the flat `primary-900` band.
   */
  gradientFrom?: string;
  /** Second stop of the gradient. Defaults to `gradientFrom` (a flat wash). */
  gradientTo?: string;
  /** Gradient angle in degrees. Defaults to `180` (top to bottom). */
  gradientAngle?: number;
  /** Type scale. Defaults to `normal`. */
  size?: HeroSize;
  /**
   * Optional decorative layer painted behind the content, below the grid
   * texture — pass the ported background-effects component here. The Hugo hero
   * shipped without it; pages that need the radial wash add it around the hero.
   */
  backgroundEffect?: ReactNode;
}

/**
 * The page-opening hero: headline, subhead, two pill CTAs, and a floating product shot.
 *
 * This is the richest component in the system and the first thing every product
 * page renders. It paints its own band background, so it goes **outside**
 * `Section` and directly inside `Surface` (or as the first child of the page) —
 * wrapping it in a `Section` double-pads it. The band is `relative
 * overflow-hidden`, which is load-bearing: the grid texture, the glow behind the
 * text, and the orbs behind the image are all absolutely positioned children
 * that must be clipped to it.
 *
 * The image column is a `group`; the gradient halo and the sheen over the
 * screenshot fade in on `group-hover`, and both are `pointer-events-none`. The
 * orbs render even with no `heroImage`, so the right column is never visually
 * empty.
 *
 * @example
 * <Hero
 *   headline="The Team That Never Sleeps."
 *   subHeadline={
 *     <>
 *       Stop treating symptoms. Deploy automated systems that <strong>find lost money</strong>,{' '}
 *       <strong>block bad orders</strong>, and <strong>fix problems</strong> while you sleep.
 *     </>
 *   }
 *   primaryButtonText="Meet Your New System"
 *   primaryButtonUrl="/#contact"
 *   heroImage="/images/face/overview.png"
 *   gradientFrom="#3A2F2A"
 *   gradientTo="#1A1512"
 *   gradientAngle={135}
 * />
 */
export function Hero({
  headline,
  subHeadline,
  primaryButtonText,
  primaryButtonUrl,
  secondaryButtonText,
  secondaryButtonUrl,
  heroImage,
  heroImageAlt = 'Hero Image',
  backgroundImage,
  gradientFrom,
  gradientTo,
  gradientAngle = 180,
  size = 'normal',
  backgroundEffect,
  className,
  ...rest
}: HeroProps) {
  const gradient = gradientFrom
    ? { background: `linear-gradient(${gradientAngle}deg,${gradientFrom},${gradientTo ?? gradientFrom})` }
    : undefined;
  const primaryUrl = safeHref(primaryButtonUrl);
  const secondaryUrl = safeHref(secondaryButtonUrl);

  return (
    <section
      className={cx('relative overflow-hidden py-24 md:py-32', !gradient && 'bg-surface', className)}
      style={gradient}
      {...rest}
    >
      {backgroundEffect}

      {/*
       * The grid-texture layer that used to sit here referenced
       * `/images/grid.svg`, which exists nowhere in the repo — so it has never
       * rendered, on the deployed site either (inherited verbatim from
       * layouts/shortcodes/hero.html). Removed rather than shipped as a dead
       * element that costs a compositing layer. For a real grid overlay, pass
       * `backgroundEffect={<BackgroundEffects />}`.
       */}

      {backgroundImage && (
        <div className="absolute inset-0 opacity-30 mix-blend-overlay">
          <img
            src={backgroundImage}
            alt=""
            aria-hidden="true"
            fetchPriority="high"
            className="h-full w-full object-cover"
          />
        </div>
      )}

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="relative space-y-8 lg:col-span-6">
            {/* Glow behind the text block. */}
            <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-fill-accent-wash opacity-50 blur-[100px]" />

            <h1 className={cx('font-bold leading-normal tracking-normal text-primary drop-shadow-xl', HEADLINE_SIZES[size])}>
              {headline}
            </h1>

            {subHeadline && (
              <p
                className={cx(
                  'border-l-4 border-hairline pl-6 leading-relaxed text-primary drop-shadow-md',
                  SUBHEAD_SIZES[size],
                )}
              >
                {subHeadline}
              </p>
            )}

            <div className="flex flex-col gap-5 pt-4 sm:flex-row">
              {primaryButtonText && primaryUrl && (
                <a
                  href={primaryUrl}
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-fill-accent-deep to-fill-accent px-8 py-4 text-base font-bold text-on-accent transition-all duration-200 hover:-translate-y-1 hover:from-fill-accent hover:to-accent-lift hover:shadow-lg "
                >
                  {primaryButtonText}
                  <Icon name="arrow-right" className="-mr-1 ml-2 h-5 w-5" />
                </a>
              )}
              {secondaryButtonText && secondaryUrl && (
                <a
                  href={secondaryUrl}
                  className="inline-flex items-center justify-center rounded-full border-2 border-hairline/50 bg-surface-raised/50 px-8 py-4 text-base font-bold text-primary backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-edge hover:bg-fill-accent-wash hover:text-primary"
                >
                  {secondaryButtonText}
                </a>
              )}
            </div>
          </div>

          <div className="group relative lg:col-span-6">
            {heroImage && (
              <div className="relative z-10">
                {/* Halo, green into the `brand-copper` accent. */}
                <div className="absolute -inset-1 rounded-card bg-gradient-to-r from-fill-success-glow to-accent-lift opacity-30 blur transition duration-1000 group-hover:opacity-60 group-hover:duration-200" />
                <img
                  src={heroImage}
                  alt={heroImageAlt}
                  fetchPriority="high"
                  className="relative w-full rounded-chip border border-hairline/50 bg-surface/50 shadow-2xl backdrop-blur-xl"
                />
                {/* Sheen across the screenshot on hover. */}
                <div className="pointer-events-none absolute inset-0 rounded-chip bg-gradient-to-tr from-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-20" />
              </div>
            )}

            {/* Orb behind the image column; renders with or without a screenshot. */}
            <div className="absolute left-1/2 top-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 animate-pulse-slow rounded-full bg-fill-accent-wash blur-[100px]" />
          </div>
        </div>
      </Container>
    </section>
  );
}
