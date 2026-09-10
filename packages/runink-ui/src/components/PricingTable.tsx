import type { HTMLAttributes } from 'react';
import { cx } from '../lib/cx';
import { safeHref } from '../lib/safeHref';
import { Icon } from './Icon';

/**
 * Which price a tier shows. The Hugo shortcode drove this with a global
 * `data-pricing` attribute on `<html>` and a stylesheet that hid the inactive
 * `.price-monthly`/`.price-yearly` spans; here it is a plain prop so the caller
 * owns the state (see `PricingToggle`).
 */
export type PricingPeriod = 'monthly' | 'yearly';

/** One label/value row in a tier's outcome-pricing panel. */
export interface PricingOutcome {
  /** Small all-caps label, e.g. `"CLAIMS RECOVERY"`. */
  label: string;
  /** The commercial term itself, e.g. `"20% Success Fee"`. */
  value: string;
}

/**
 * A checklist line. Use the object form for a feature that only applies on the
 * annual contract — the template encoded this as a literal `(YEARLY ONLY)`
 * suffix it then string-matched and stripped, per language.
 */
export type PricingFeature = string | { label: string; yearlyOnly?: boolean };

export interface PricingTier {
  /** Tier name, set in the huge italic uppercase display face. */
  name: string;
  /** Eyebrow above the name, e.g. `"PLATFORM & SECURITY"`. Omitted when absent. */
  pill?: string;
  /** Small all-caps line under the name, e.g. `"10+ SEATS"`. */
  subtitle?: string;
  /** Monthly price. Shown when `period` is `monthly`, and whenever `priceYearly` is absent. */
  priceMonthly: string;
  /** Effective monthly price on the annual contract. Falls back to `priceMonthly`. */
  priceYearly?: string;
  /** All-caps qualifier under the price, e.g. `"PER SEAT / MONTH (ANNUAL ONLY)"`. */
  priceSubtitle?: string;
  /**
   * Suffix after a numeric price. Defaults to `/ MO` — the template showed it for
   * both periods, because the yearly figure is an effective monthly rate.
   */
  periodLabel?: string;
  /**
   * Headline capacity line in the bolt-icon panel, e.g. `"DYNAMIC CU POOL"`.
   * Newlines become line breaks; the template reached for `safeHTML` to allow a
   * literal `<br>`, which this deliberately does not.
   */
  credits?: string;
  /** Outcome-based pricing rows under `credits`, divided off by a rule. */
  outcomes?: PricingOutcome[];
  /** The checklist. `yearlyOnly` entries are hidden unless `period` is `yearly`. */
  features?: PricingFeature[];
  /** The tier's action. Rendered only when `label` is non-empty. */
  cta?: {
    /** Button label. */
    label: string;
    /** Destination, normalised through `safeHref`. */
    href?: string;
  };
  /**
   * Force the button treatment. Defaults to `solid` on the highlighted tier and
   * `outline` everywhere else, which is how the site's own content is shaped.
   */
  ctaVariant?: 'solid' | 'outline';
  /**
   * The "most popular" tier: accent border over the accent wash, accent eyebrow and
   * checks, gradient name and price, solid gradient button. Set it on at most one tier.
   */
  highlighted?: boolean;
}

export interface PricingTableProps extends HTMLAttributes<HTMLElement> {
  /** The tiers, left to right. The grid is 3-up from `lg`, so three is the intended count. */
  tiers: PricingTier[];
  /** Which price to display. Defaults to `monthly`, the template's initial state. */
  period?: PricingPeriod;
  /** Currency symbol prefixed to a numeric price. Defaults to `$`. */
  currency?: string;
}

/** A price is quote-only — "CUSTOM", "Contact us" — unless it is purely numeric. */
function isNumericPrice(price: string): boolean {
  return /^[\d.,]+$/.test(price.trim());
}

function normaliseFeature(feature: PricingFeature): { label: string; yearlyOnly: boolean } {
  if (typeof feature === 'string') return { label: feature, yearlyOnly: false };
  return { label: feature.label, yearlyOnly: feature.yearlyOnly === true };
}

const GRADIENT_TEXT = 'bg-gradient-to-r from-fill-accent to-accent-lift bg-clip-text text-transparent';

const CTA: Record<'solid' | 'outline', string> = {
  solid:
    'bg-gradient-to-r from-fill-accent to-accent-lift text-on-accent hover:-translate-y-1 ',
  outline:
    'border border-hairline bg-surface text-secondary hover:border-edge hover:text-primary',
};

/**
 * The pricing page's full tier comparison — the heavy, three-up licence cards.
 *
 * This is the site's most opinionated card: a 2.5rem-radius ink panel, centred
 * display-face tier name, a price that swaps between monthly and annual, an
 * inset panel for included capacity and outcome-based terms, then a checklist and
 * a full-width action. One tier may be `highlighted`, which puts the card into the
 * system's selected state — accent border over the accent wash — and switches its
 * name, price, checks and button to the accent gradient.
 *
 * The shortcode carried no parameters at all — its content was a JSON blob in
 * `content/pricing.md` plus three inlined language branches for the
 * `(YEARLY ONLY)` marker. Both are gone: tiers arrive as data, and annual-only
 * features are flagged with `yearlyOnly` instead of a translated string match.
 *
 * `period` is a plain prop rather than internal state, because the Hugo toggle
 * lived in a **separate** shortcode and reached this one through a global
 * `data-pricing` attribute. Keep them independent and lift the state: render a
 * `PricingToggle` above and pass its value down. On its own the table renders
 * monthly prices, which is the template's default.
 *
 * Sits on `Surface` tone `canvas`; it paints its own `brand-ink` panels and
 * brings its own vertical rhythm, so do not wrap it in a `Section`.
 *
 * @example
 * const [period, setPeriod] = useState<PricingPeriod>('monthly');
 *
 * <PricingToggle
 *   options={[
 *     { label: 'Monthly Commitment', value: 'monthly' },
 *     { label: 'Annual Contract (Save 15%)', value: 'yearly' },
 *   ]}
 *   value={period}
 *   onChange={(v) => setPeriod(v as PricingPeriod)}
 * />
 * <PricingTable
 *   period={period}
 *   tiers={[
 *     {
 *       pill: 'ESSENTIAL AUTOMATION',
 *       name: 'LITE LICENSE',
 *       subtitle: '1 TO 9 SEATS',
 *       priceMonthly: '86',
 *       priceYearly: '75',
 *       priceSubtitle: 'PER SEAT / MONTH',
 *       credits: 'DYNAMIC CU POOL',
 *       outcomes: [
 *         { label: 'CLAIMS RECOVERY', value: '20% Success Fee' },
 *         { label: 'AUTO-PROVISIONING', value: '1-3% (Capped $50)' },
 *       ],
 *       features: [
 *         'SHARED HIGH-DENSITY NODE',
 *         'BASIC AUTOMATION WORKFLOWS',
 *         'STANDARD COMPUTE PRIORITY',
 *         'MONTHLY OR ANNUAL COMMITMENTS',
 *       ],
 *       cta: { label: 'START LITE', href: '/#contact' },
 *     },
 *     {
 *       pill: 'PLATFORM & SECURITY',
 *       name: 'DEDICATED LICENSE',
 *       subtitle: '10+ SEATS',
 *       priceMonthly: '75',
 *       priceYearly: '75',
 *       priceSubtitle: 'PER SEAT / MONTH (ANNUAL ONLY)',
 *       credits: 'MASSIVE CU POOL',
 *       outcomes: [
 *         { label: 'CLAIMS RECOVERY', value: '20% Success Fee' },
 *         { label: 'AUTO-PROVISIONING', value: '1-3% (Capped $50)' },
 *       ],
 *       features: [
 *         'DEDICATED SOVEREIGN COMPUTE',
 *         'CUSTOM DOMAIN CONFIGURATION',
 *         'PRIORITY ROUTING & INFERENCE',
 *         { label: '1,000 CU PER SEAT + 2,000 CU BONUS/10 SEATS', yearlyOnly: true },
 *       ],
 *       cta: { label: 'INITIALIZE DEDICATED', href: '/#contact' },
 *       highlighted: true,
 *     },
 *     {
 *       pill: 'SOVEREIGN INFRASTRUCTURE',
 *       name: 'ENTERPRISE',
 *       subtitle: 'AIR-GAPPED & ON-PREMISES',
 *       priceMonthly: 'CUSTOM',
 *       priceSubtitle: 'CUSTOM DEPLOYMENTS',
 *       credits: 'MANAGED CAPACITY',
 *       outcomes: [{ label: 'OUTCOME STRATEGY', value: 'Custom SLAs' }],
 *       features: [
 *         'SELF-HOSTED ON-PREM',
 *         'EDGE EMBEDDING CAPABILITIES',
 *         'EVERYTHING IN DEDICATED PLATFORM',
 *         'ADVANCED AUDIT LOGGING',
 *       ],
 *       cta: { label: 'CONTACT ENTERPRISE', href: '/#contact' },
 *     },
 *   ]}
 * />
 */
export function PricingTable({
  tiers,
  period = 'monthly',
  currency = '$',
  className,
  ...rest
}: PricingTableProps) {
  return (
    <section className={cx('relative z-10 py-16', className)} {...rest}>
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/*
         * Track count follows the tier count. A hard `lg:grid-cols-3` strands a
         * single quote-only tier in the left third with two thirds of empty
         * canvas beside it, and leaves a two-plan table visibly lopsided.
         */}
        <div
          className={cx(
            'grid grid-cols-1 gap-6',
            tiers.length >= 3 ? 'lg:grid-cols-3' : tiers.length === 2 ? 'lg:grid-cols-2' : 'lg:max-w-md lg:mx-auto',
          )}
        >
          {tiers.map((tier) => {
            const hot = tier.highlighted === true;
            const price = period === 'yearly' ? (tier.priceYearly ?? tier.priceMonthly) : tier.priceMonthly;
            const numeric = isNumericPrice(price);
            const ctaVariant = tier.ctaVariant ?? (hot ? 'solid' : 'outline');
            const features = (tier.features ?? [])
              .map(normaliseFeature)
              .filter((feature) => !feature.yearlyOnly || period === 'yearly');

            return (
              <div key={tier.name} className="w-full">
                <div
                  className={cx(
                    'relative flex h-full flex-col overflow-hidden rounded-pill border shadow-2xl transition-all duration-300',
                    hot ? 'border-fill-accent bg-fill-accent-wash' : 'border-hairline bg-canvas',
                  )}
                >
                  <div className="flex flex-grow flex-col items-center p-8 text-center lg:p-12">
                    {tier.pill && (
                      <div className="mb-8">
                        <span
                          className={cx(
                            'inline-block text-[10px] font-black uppercase italic tracking-[0.25em]',
                            hot ? 'text-ink-accent' : 'text-secondary',
                          )}
                        >
                          {tier.pill}
                        </span>
                      </div>
                    )}

                    {/*
                     * No `xl:text-5xl` bump and no `break-words` on the tier
                     * name. At the intended 3-up `lg` layout a column is ~316px
                     * inside its padding, which 48px black italic caps overflow —
                     * and `break-words` then splits mid-word, rendering the real
                     * tier "ENTERPRISE" as "ENTERPRIS / E". `break-normal` keeps
                     * a name whole; 36px fits every tier in `content/pricing.md`.
                     */}
                    <h3
                      className={cx(
                        'mb-2 w-full break-normal text-4xl font-black uppercase italic tracking-tighter',
                        hot ? GRADIENT_TEXT : 'text-primary',
                      )}
                    >
                      {tier.name}
                    </h3>
                    {tier.subtitle && (
                      <p className="mb-12 text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">
                        {tier.subtitle}
                      </p>
                    )}

                    <div className="mb-4 flex w-full flex-wrap items-baseline justify-center">
                      <span
                        className={cx(
                          'break-words font-black italic tracking-tighter',
                          numeric ? 'text-6xl leading-none lg:text-7xl' : 'text-4xl leading-tight lg:text-5xl',
                          hot ? GRADIENT_TEXT : 'text-primary',
                        )}
                      >
                        {numeric ? `${currency}${price}` : price}
                      </span>
                      {numeric && (
                        <span className="ml-2 text-[10px] font-bold italic tracking-widest text-secondary">
                          {tier.periodLabel ?? '/ MO'}
                        </span>
                      )}
                    </div>
                    {tier.priceSubtitle && (
                      <p className="mb-10 text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">
                        {tier.priceSubtitle}
                      </p>
                    )}

                    {(tier.credits || (tier.outcomes && tier.outcomes.length > 0)) && (
                      <div className="mb-12 flex w-full flex-col rounded-card border border-hairline/60 bg-surface p-6 text-left shadow-inner">
                        {tier.credits && (
                          <div
                            className={cx(
                              'flex items-center gap-4',
                              tier.outcomes && tier.outcomes.length > 0 && 'mb-6 border-b border-hairline/60 pb-6',
                            )}
                          >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-hairline/50 bg-surface-raised/50 shadow-inner">
                              <Icon
                                name="bolt"
                                className={cx('h-5 w-5', hot ? 'text-ink-accent' : 'text-secondary')}
                              />
                            </div>
                            <div className="whitespace-pre-line text-sm font-black uppercase italic leading-snug tracking-wide text-primary">
                              {tier.credits}
                            </div>
                          </div>
                        )}

                        {tier.outcomes && tier.outcomes.length > 0 && (
                          <div className="flex flex-col gap-5">
                            {tier.outcomes.map((outcome) => (
                              <div key={outcome.label}>
                                <div className="mb-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-secondary">
                                  {outcome.label}
                                </div>
                                <div className="text-xs font-bold italic tracking-normal text-secondary">
                                  {outcome.value}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {features.length > 0 && (
                      <ul className="mb-12 w-full flex-grow space-y-5 text-left">
                        {features.map((feature) => (
                          <li key={feature.label} className="flex items-start">
                            <svg
                              className={cx(
                                'mt-0.5 h-4 w-4 flex-shrink-0',
                                hot ? 'text-ink-accent' : 'text-secondary',
                              )}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="ml-4 text-[10px] font-bold uppercase leading-snug tracking-widest text-secondary/80">
                              {feature.label}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {tier.cta?.label && (
                      <div className="mt-auto w-full">
                        <a
                          href={safeHref(tier.cta.href) ?? '#'}
                          className={cx(
                            'flex w-full items-center justify-center rounded-chip px-8 py-4 text-xs font-black uppercase italic tracking-widest transition-all duration-300',
                            CTA[ctaVariant],
                          )}
                        >
                          {tier.cta.label}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
