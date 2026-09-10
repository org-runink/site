import type { HTMLAttributes } from 'react';
import { cx } from '../lib/cx';
import { Container } from './Container';

export interface ClientLogo {
  /** Company name — becomes the image's alt text. */
  name: string;
  /** Logo image URL. */
  logo: string;
}

export interface ClientLogosProps extends HTMLAttributes<HTMLElement> {
  /** Band heading. Defaults to `"Trusted by leading companies worldwide"`. */
  title?: string;
  /** The logo wall, in the order it should scroll. */
  logos: ClientLogo[];
  /**
   * Scroll the wall as an infinite marquee. Defaults to true. Set false for a
   * static, centred, wrapping row — the right choice for a short list that fits.
   */
  animate?: boolean;
}

/**
 * The full-width social-proof band: a heading over a wall of customer logos.
 *
 * Ported from the `client-logos` shortcode, marquee and all. When `animate` is on,
 * the list is rendered **twice** and translated -50% over 30s (15s on mobile), which
 * is what makes the loop seamless; hovering anywhere in the strip pauses it. The
 * logos are deliberately flattened — `grayscale` at 60% opacity — so the band reads
 * as texture and never competes with the section around it.
 *
 * Spans the viewport and draws its own `primary-800` rules top and bottom, so place
 * it between sections rather than inside one, and do not wrap it in a `Container`.
 *
 * The loop comes from the `animate-marquee` token; a small scoped
 * `<style>` block carries only the four things that token cannot express — this
 * band's 30s speed, hover-to-pause, the mobile speed-up, and reduced motion.
 *
 * @example
 * <ClientLogos
 *   title="Moving freight for operators who cannot wait on IT"
 *   logos={[
 *     { name: 'Northbound Logistics', logo: '/images/logos/customer-1.png' },
 *     { name: 'Harbor Freight Systems', logo: '/images/logos/customer-2.png' },
 *     { name: 'Meridian 3PL', logo: '/images/logos/customer-3.png' },
 *     { name: 'Atlas Customs Brokers', logo: '/images/logos/customer-4.png' },
 *   ]}
 * />
 */
export function ClientLogos({
  title = 'Trusted by leading companies worldwide',
  logos,
  animate = true,
  className,
  ...rest
}: ClientLogosProps) {
  const renderLogos = (pass: number, spaced: boolean) =>
    logos.map((item, i) => (
      <img
        key={`${pass}-${i}-${item.name}`}
        src={item.logo}
        alt={item.name}
        height={80}
        loading="lazy"
        className={cx(
          'inline-block max-h-6 w-auto align-middle opacity-60 grayscale',
          spaced && 'mx-10',
        )}
        // The duplicated pass is decorative — the first pass already names every logo.
        aria-hidden={pass > 0 || undefined}
      />
    ));

  return (
    <section className={cx('overflow-hidden border-y border-primary-800', className)} {...rest}>
      {animate && <style>{MARQUEE_CSS}</style>}
      <Container>
        <div className="py-12">
          <p className="mb-6 text-center text-3xl font-bold md:text-2xl">{title}</p>
          {animate ? (
            <div className="rk-logo-scroll relative overflow-hidden whitespace-nowrap py-5">
              <div className="rk-logo-slide inline-block animate-marquee">
                {renderLogos(0, true)}
                {renderLogos(1, true)}
              </div>
            </div>
          ) : (
            <div className="flex flex-wrap items-center justify-center gap-10 py-5">
              {renderLogos(0, false)}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

/**
 * What the `animate-marquee` token cannot express, scoped to the two
 * class names above.
 *
 * The token supplies the loop itself — the same `-100%/2` translate a duplicated
 * track needs, linear and infinite — so the local `@keyframes` are gone. What stays:
 * this band runs at 30s rather than the token's 40s (the shortcode's own speed), and
 * Tailwind has no `animation-play-state` utility for hover-to-pause. The mobile
 * speed-up and the reduced-motion kill switch stay alongside them so all four rules
 * land after the token's shorthand in the cascade.
 */
const MARQUEE_CSS = `
.rk-logo-slide { animation-duration: 30s; }
.rk-logo-scroll:hover .rk-logo-slide { animation-play-state: paused; }
@media (max-width: 768px) {
  .rk-logo-slide { animation-duration: 15s; }
}
@media (prefers-reduced-motion: reduce) {
  .rk-logo-slide { animation: none; }
}
`;
