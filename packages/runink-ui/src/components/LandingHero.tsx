import { useEffect, useState } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../lib/cx';
import { GradientText } from './GradientText';

export interface LandingHeroLayer {
  /** Image URL for this parallax plane. */
  src: string;
  /** Alt text. Decorative planes pass `""`. */
  alt?: string;
  /**
   * How fast the plane drifts against the scroll, `0`–`1`. The site uses `0.1`
   * for the deepest plane and `0.6` for the foreground.
   */
  depth: number;
  /**
   * Opacity and filter utilities for the plane, e.g. `"opacity-80"`.
   *
   * **`mix-blend-*` is ignored here.** The component forces `mix-blend-normal`
   * inline, because no blend mode is ground-neutral — see the component docs. A mode
   * left over in a caller's layer list is overridden rather than honoured.
   */
  className?: string;
}

/**
 * The three planes of the homepage composition, deepest first.
 *
 * Each plane is a sparse, mostly transparent 1920×1080 isometric frame, so they
 * composite with plain alpha. Depth is the **opacity ramp** — deepest faintest, as
 * aerial perspective — plus the per-plane `depth` drift rate. Both are ground-neutral;
 * the blend modes these layers used to carry were not (see the component docs).
 */
const DEFAULT_LAYERS: LandingHeroLayer[] = [
  {
    src: '/images/landing/warehouse.svg',
    alt: 'Warehouse facility background',
    depth: 0.1,
    className: 'opacity-70',
  },
  { src: '/images/landing/distribution.svg', alt: '', depth: 0.3, className: 'opacity-80' },
  { src: '/images/landing/trucks.svg', alt: '', depth: 0.6, className: 'opacity-90' },
];

export interface LandingHeroProps extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
  /**
   * The full-bleed headline. A node, because the site breaks it across two lines
   * with a `<br />` and the break point is editorial.
   */
  headline: ReactNode;
  /** One-line promise under the headline, in `primary` ink. */
  tagline?: ReactNode;
  /** The uppercase letterspaced paragraph below the tagline. */
  description?: ReactNode;
  /** Text of the bouncing scroll cue at the bottom. Omit to hide the cue. */
  scrollCue?: string;
  /** The parallax planes, deepest first. Defaults to the homepage logistics scene. */
  layers?: LandingHeroLayer[];
  /**
   * Drift the planes against the page scroll. Defaults to true; set false for a
   * still composition (or when the hero is rendered somewhere that never scrolls).
   */
  parallax?: boolean;
}

/**
 * The homepage's full-viewport opener: a parallax logistics scene behind a gradient headline.
 *
 * The headline is `GradientText` on the `signal` sweep (`fill-provenance` into
 * `fill-accent` — wine closing into the technical orange), re-aimed to `br` — the one
 * treatment this band exists to carry.
 *
 * `h-screen` and `overflow-hidden` are load-bearing — the planes are absolutely
 * positioned at `inset-0` and scale up as the page scrolls, so they must be
 * clipped. Two gradient washes sit above the planes and below the copy to keep
 * the text legible; the copy itself is `z-20`.
 *
 * **The scene composites with plain alpha, never with a blend mode, and the component
 * enforces that.** `mix-blend-*` is not ground-neutral: `screen` lightens, so it is a
 * mathematical no-op against near-white, and `multiply` darkens, so it is a no-op
 * against near-black. The planes were authored `luminosity` / `color-burn` / `screen`
 * against the console ground; on sheet the `screen` plane vanished outright, the other
 * two bleached to value-less ghosts, and all that survived were blend artefacts. One
 * mode cannot serve two grounds, and binding each to `dark:` would mean maintaining
 * two separately-tuned compositions of the same artwork — so the modes are gone rather
 * than doubled. Depth is carried by the opacity ramp and the per-plane drift rate, both
 * of which mean the same thing on either ground.
 *
 * Renders the scene at rest (no transform, no stagger) before any interaction, so
 * it screenshots correctly. With `parallax` on, each plane translates by
 * `-scrollY × depth × 0.5` px and the whole scene scales with scroll, driven by a
 * rAF-throttled scroll listener in `useEffect` — the React port of the site's
 * `initParallax()`.
 *
 * There is no `Surface` wrapper: this band paints `bg-surface` itself and is
 * normally the first element on the page.
 *
 * @example
 * <LandingHero
 *   headline={<>Your Operations <br />Actionable Twin</>}
 *   tagline="Continuous Forecasting. Defensible Execution."
 *   description="Ground your automation with validated business rules on a Strictly Compartmentalized Node. Gain exponential operational advantage over fulfillments and claims."
 *   scrollCue="Scroll to Deploy Facility"
 * />
 */
export function LandingHero({
  headline,
  tagline,
  description,
  scrollCue,
  layers = DEFAULT_LAYERS,
  parallax = true,
  className,
  ...rest
}: LandingHeroProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (!parallax) return;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setScrollY(window.scrollY || 0);
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [parallax]);

  const scale = 1 + scrollY * 0.0002;

  return (
    <section
      className={cx(
        'relative flex h-screen items-center justify-center overflow-hidden bg-surface',
        className,
      )}
      {...rest}
    >
      <div className="absolute inset-0 h-full w-full">
        {layers.map((layer, index) => (
          <img
            key={layer.src}
            src={layer.src}
            alt={layer.alt ?? ''}
            role={layer.alt ? undefined : 'presentation'}
            width={1920}
            height={1080}
            fetchPriority="high"
            decoding="sync"
            className={cx(
              'absolute inset-0 h-full w-full object-cover object-center',
              layer.className,
            )}
            style={{
              zIndex: index + 1,
              // Compositing belongs to the component, not the caller. Inline rather
              // than a `mix-blend-normal` class because Tailwind resolves competing
              // blend utilities by stylesheet order, not class order — `screen` is
              // emitted after `normal` and would win. A layer list still carrying a
              // ground-tuned mode is overridden here instead of breaking one ground.
              mixBlendMode: 'normal',
              transform: `translate3d(0, ${-(scrollY * layer.depth * 0.5)}px, 0) scale(${scale})`,
            }}
          />
        ))}
      </div>

      {/*
        Washes: settle the top and bottom of the scene so the copy stays legible. Both
        composite with plain alpha. The wine wash used `mix-blend-overlay`, which is
        backdrop-dependent — it screened against the near-white sheet ground and came
        out as a pastel smear over the scene instead of seating it.
      */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-surface/40 via-transparent to-surface" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-fill-provenance/20 via-transparent" />

      <div className="relative z-20 flex max-w-5xl flex-col items-center px-6 text-center">
        <GradientText
          as="h1"
          sweep="signal"
          // Diagonal, as the shortcode renders it. Via the prop rather than a
          // `className` override, which would only win by stylesheet order.
          direction="br"
          className="mb-6 max-w-5xl text-6xl font-black uppercase italic leading-[0.95] tracking-tighter drop-shadow-lg md:text-7xl lg:text-[100px]"
        >
          {headline}
        </GradientText>

        {tagline && <div className="mb-2 text-2xl font-bold tracking-wide text-primary">{tagline}</div>}

        {description && (
          <div className="mb-10 max-w-4xl text-lg font-bold uppercase leading-relaxed tracking-[0.15em] text-secondary md:text-xl">
            {description}
          </div>
        )}

        {scrollCue && (
          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="animate-bounce rounded bg-surface/50 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.4em] text-secondary">
              {scrollCue}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
