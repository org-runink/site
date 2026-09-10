import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../lib/cx';
import { safeHref } from '../lib/safeHref';

export interface PricingTableCompactTier {
  /** Tier name, set at `text-2xl` — sentence case here, not the display face. */
  name: string;
  /** One-line positioning copy under the name. */
  description?: string;
  /** The price, rendered as `{currency}{price}{periodLabel}`. Numeric string, e.g. `"75"`. */
  price: string;
  /** The checklist. Plain strings — this treatment has no annual-only concept. */
  features?: string[];
  /** The tier's action. Rendered only when `label` is non-empty. */
  cta?: {
    /** Button label. */
    label: string;
    /** Destination, normalised through `safeHref`. */
    href?: string;
  };
  /**
   * The featured tier: the system's selected state — a `fill-accent` border over
   * the accent wash, a floating "most popular" badge straddling the top edge, and
   * the solid accent button. Set it on at most one tier.
   */
  featured?: boolean;
}

export interface PricingTableCompactProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  /** The tiers, left to right. The grid is 3-up from `md`. */
  tiers: PricingTableCompactTier[];
  /** Section heading above the grid. The header block is omitted without it. */
  title?: ReactNode;
  /** Supporting line under the heading. Only rendered when `title` is present, as in the template. */
  description?: ReactNode;
  /**
   * Label in the badge over the featured card. Defaults to `Most Popular` — the
   * template hardcoded that English string; pass the caller's language instead.
   */
  featuredLabel?: string;
  /** Currency symbol before the price. Defaults to `$`. */
  currency?: string;
  /** Suffix after the price. Defaults to `/month`. */
  periodLabel?: string;
}

/**
 * The light-weight pricing grid: three plain plan cards with a featured middle.
 *
 * This is the site's *second* pricing treatment and a genuinely different
 * component from `PricingTable`, not a restyle of it — it owns its own section
 * heading, takes a short `description` per tier instead of a capacity panel and
 * outcome-based terms, has no monthly/annual switching, and marks the featured
 * tier with a floating badge rather than an eyebrow and gradient type. Reach for
 * it on a landing or product page that mentions price in passing; use
 * `PricingTable` for the pricing page itself.
 *
 * The featured card's absolutely positioned badge hangs above the card (`-top-4`),
 * so the grid needs the vertical room this section's `py-16` provides — do not
 * clip it with `overflow-hidden` on an ancestor. The section paints its own
 * `primary-900` band and brings its own rhythm, so do not wrap it in a `Section`.
 *
 * @example
 * <PricingTableCompact
 *   title="Billing logic. No surprises."
 *   description="Low barrier to entry. Revenue scales with your actual infrastructure usage."
 *   tiers={[
 *     {
 *       name: 'Lite',
 *       description: 'Essential automation for 1 to 9 seats.',
 *       price: '86',
 *       features: ['Shared high-density node', 'Basic automation workflows', 'Standard compute priority'],
 *       cta: { label: 'Start Lite', href: '/#contact' },
 *     },
 *     {
 *       name: 'Dedicated',
 *       description: 'Sovereign compute and priority inference from 10 seats.',
 *       price: '75',
 *       features: ['Dedicated sovereign compute', 'Custom domain configuration', 'Priority routing & inference'],
 *       cta: { label: 'Initialize Dedicated', href: '/#contact' },
 *       featured: true,
 *     },
 *     {
 *       name: 'Enterprise',
 *       description: 'Air-gapped and on-premises deployments.',
 *       price: '250',
 *       features: ['Self-hosted on-prem', 'Edge embedding capabilities', 'Advanced audit logging'],
 *       cta: { label: 'Contact Enterprise', href: '/#contact' },
 *     },
 *   ]}
 * />
 */
export function PricingTableCompact({
  tiers,
  title,
  description,
  featuredLabel = 'Most Popular',
  currency = '$',
  periodLabel = '/month',
  className,
  ...rest
}: PricingTableCompactProps) {
  return (
    <section className={cx('bg-surface', className)} {...rest}>
      <div className="mx-auto max-w-screen-xl px-4 py-16 lg:px-6 lg:py-20">
        {title && (
          <div className="mx-auto mb-12 max-w-screen-md text-center">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-primary">{title}</h2>
            {description && <p className="mb-5 font-light text-secondary sm:text-xl">{description}</p>}
          </div>
        )}

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {tiers.map((tier) => {
            const featured = tier.featured === true;
            return (
              <div
                key={tier.name}
                className={cx(
                  'relative flex flex-col rounded-card border p-8 shadow-xl transition duration-300 hover:-translate-y-2',
                  featured
                    ? 'border-fill-accent bg-fill-accent-wash'
                    : 'border-hairline bg-surface-raised ',
                )}
              >
                {featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-gradient-to-r from-fill-success-glow to-accent-lift px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-on-success shadow-lg">
                      {featuredLabel}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-primary">{tier.name}</h3>
                  {tier.description && <p className="mt-2 text-secondary">{tier.description}</p>}
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-extrabold text-primary">{currency}</span>
                    <span className="text-5xl font-extrabold tracking-tight text-primary">{tier.price}</span>
                    <span className="ml-1 text-secondary">{periodLabel}</span>
                  </div>
                </div>

                {tier.features && tier.features.length > 0 && (
                  <ul className="mb-10 flex-grow space-y-4">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <svg
                          className={cx('mr-3 h-5 w-5', featured ? 'text-ink-accent' : 'text-secondary')}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          />
                        </svg>
                        <span className="font-medium text-primary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {tier.cta?.label && (
                  <a
                    href={safeHref(tier.cta.href) ?? '#'}
                    className={cx(
                      'w-full rounded-full px-6 py-4 text-center text-sm font-bold uppercase tracking-wider transition-all duration-300',
                      featured
                        ? 'bg-fill-accent text-on-accent shadow-lg hover:bg-fill-accent-deep '
                        : 'border border-edge bg-surface-well text-primary hover:bg-surface-well',
                    )}
                  >
                    {tier.cta.label}
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
