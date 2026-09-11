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
  /** Supporting sentence, set against an `edge` left rule. */
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
  /** Full-bleed photo layered into the band at 30% opacity. */
  backgroundImage?: string;
  /**
   * First stop of the band's background gradient, as a CSS colour. These arrive
   * from page front matter as raw hex (`"#3A2F2A"`) rather than tokens, so the
   * gradient is an inline style — and a raw hex cannot follow the ground, so a band
   * given stops stays fixed while the sheet's ink inverts over it. Omit both stops for
   * the flat `surface` band, which does follow.
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
 * screenshot fade in on `group-hover`, and both are `pointer-events-none`. The orb
 * renders even with no `heroImage`, so the right column is never visually empty —
 * which is why it is sized off its own width (`aspect-square`) rather than off the
 * column, whose height without a screenshot is zero.
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

      {/*
        Plain alpha, not `mix-blend-overlay`. `overlay` is a function of the
        backdrop: it multiplies against a dark one and SCREENS against a light one.
        On the console band that darkened the photo into the surface; on the sheet
        it would have blown the same photo out to near-white and lost it. No preview
        passes `backgroundImage`, so no graded cell would ever have caught it — the
        identical inversion was found in `LandingHero` only because its planes are
        exercised.
      */}
      {backgroundImage && (
        <div className="absolute inset-0 opacity-30">
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
                  // `border-edge`, not `hairline`: this rule is the only thing setting the
                  // subhead apart, so it is load-bearing and needs the ≥3:1 tier. `hairline`
                  // is the same value as `surface-well` and never exceeds 1.35:1 on any
                  // surface — on the sheet it measured #EDE2D3 on #FFFCF9 and all but
                  // vanished. `edge` measures 3.25–3.50:1 on all four surfaces of both ramps.
                  'border-l-4 border-edge pl-6 leading-relaxed text-primary drop-shadow-md',
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
                  /* `hover:text-primary` is gone: the label already rests on `primary`,
                     so it repainted the rest ink. The hover is the lift, the border
                     moving from `hairline/50` to the `edge` mark tier, and the fill
                     taking the accent wash — three real changes, none of them the ink. */
                  className="inline-flex items-center justify-center rounded-full border-2 border-hairline/50 bg-surface-raised/50 px-8 py-4 text-base font-bold text-primary backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-edge hover:bg-fill-accent-wash"
                >
                  {secondaryButtonText}
                </a>
              )}
            </div>
          </div>

          <div className="group relative lg:col-span-6">
            {heroImage && (
              <div className="relative z-10">
                {/* Halo, olive into the warm accent lift. */}
                <div className="absolute -inset-1 rounded-card bg-gradient-to-r from-fill-success-glow to-accent-lift opacity-30 blur transition duration-1000 group-hover:opacity-60 group-hover:duration-200" />
                <img
                  src={heroImage}
                  alt={heroImageAlt}
                  fetchPriority="high"
                  className="relative w-full rounded-chip border border-hairline/50 bg-surface/50 shadow-2xl backdrop-blur-xl"
                />
                {/*
                  Sheen across the screenshot on hover.

                  `accent-lift`, not `white`: a white gloss is a dark-ground idiom
                  that becomes an exact no-op on the sheet, where the screenshot
                  beneath it is already near-white. `accent-lift` carries a value in
                  both ramps (#E89B75 console, #D9764E sheet), so the sweep reads as
                  a warm gloss on either. `primary` would be the obvious semantic
                  pick, but it is a TEXT role with no gradient position by design —
                  `from-primary/10` compiles to nothing.
                */}
                <div className="pointer-events-none absolute inset-0 rounded-chip bg-gradient-to-tr from-accent-lift/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-20" />
              </div>
            )}

            {/*
             * Orb behind the image column; renders with or without a screenshot.
             *
             * Sized `aspect-square` off its WIDTH, never `h-[120%]`. A percentage
             * height on an absolutely positioned box resolves against its containing
             * block, and with no `heroImage` this column's only child is the orb
             * itself — out of flow, so the column measures 0 tall and `h-[120%]`
             * computed to 0px. The orb was therefore absent in exactly the cells that
             * exist to prove the right half is never empty, on both grounds, while
             * rendering correctly whenever a screenshot was passed. The token is fine:
             * `bg-fill-accent-wash` resolves on both grounds. This was geometry.
             */}
            <div className="absolute left-1/2 top-1/2 -z-10 aspect-square w-[120%] -translate-x-1/2 -translate-y-1/2 animate-pulse-slow rounded-full bg-fill-accent-wash blur-[100px]" />
          </div>
        </div>
      </Container>
    </section>
  );
}
