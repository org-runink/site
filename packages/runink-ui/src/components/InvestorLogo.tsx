import { cx } from '../lib/cx';

export interface InvestorLogoProps {
  /** Investor or partner name. Used as the image's alt text, or rendered as a wordmark when there is no image. */
  name: string;
  /** Logo image URL. Omit it and the name is set as type instead. */
  image?: string;
  className?: string;
}

/**
 * One investor or partner logo in a padded cell, desaturated until hovered.
 *
 * Ported from the `investor-logo` shortcode. The grayscale-to-colour hover is the
 * whole point: a wall of logos reads as a quiet texture and only the one under the
 * cursor comes forward. With no `image` it degrades to a `secondary` wordmark, so
 * a logo that has not been supplied yet still holds its place in the row.
 *
 * Only ever paints padding and centring — it expects a grid or flex row around it
 * to set the cell size.
 *
 * @example
 * <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
 *   <InvestorLogo name="Sequoia" image="/images/company/investor-1.svg" />
 *   <InvestorLogo name="Index Ventures" image="/images/company/investor-2.svg" />
 *   <InvestorLogo name="Y Combinator" image="/images/company/investor-3.svg" />
 *   <InvestorLogo name="Bootstrapped" />
 * </div>
 */
export function InvestorLogo({ name, image, className }: InvestorLogoProps) {
  return (
    <div className={cx('flex items-center justify-center p-6', className)}>
      {image ? (
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="max-h-12 grayscale transition-all duration-300 hover:grayscale-0"
        />
      ) : (
        <div className="text-xl font-bold text-secondary">{name}</div>
      )}
    </div>
  );
}
