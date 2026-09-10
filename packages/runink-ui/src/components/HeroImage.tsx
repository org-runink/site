import type { ImgHTMLAttributes } from 'react';
import { cx } from '../lib/cx';

export interface HeroImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> {
  /** Image URL, e.g. `"/images/face/overview.png"`. */
  src: string;
  /** Alt text. Required — these images carry the page's argument, so describe them. */
  alt: string;
  /** Extra utilities for the `<img>`. The wrapper keeps `not-prose`. */
  className?: string;
}

/**
 * A full-width figure dropped into prose, opted out of typographic styling.
 *
 * The `not-prose` wrapper is the entire point: inside `@tailwindcss/typography`
 * body copy, a bare image picks up prose margins and a max width, which breaks
 * full-bleed diagrams. Loads at high fetch priority because it is usually the
 * first thing below the fold on a product page.
 *
 * @example
 * <HeroImage src="/images/face/overview.png" alt="The FACE cockpit showing live shipment exceptions" />
 */
export function HeroImage({ src, alt, className, ...rest }: HeroImageProps) {
  return (
    <div className="not-prose">
      <img src={src} alt={alt} fetchPriority="high" className={cx('w-full', className)} {...rest} />
    </div>
  );
}
