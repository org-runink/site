import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../lib/cx';
import { safeHref } from '../lib/safeHref';

/** One pill in a trust-signal row: a named standard or partner, linked to its source. */
export interface TrustSignalLink {
  /** Pill label — the standard or partner name, e.g. "ISO 27001". */
  name: string;
  /**
   * Where the claim can be verified. Opened in a new tab. A URL that does not
   * survive `safeHref` leaves the pill in place but unlinked — the claim is still
   * content, and dropping it would silently edit the page.
   */
  url: string;
}

export interface TrustSignalsProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  /** Standards the page claims compliance with. Rendered in the first row. */
  compliance?: TrustSignalLink[];
  /** Technology partners. Rendered in the second, quieter row. */
  partnerships?: TrustSignalLink[];
  /** Block heading. Defaults to "Verification & Standards". */
  title?: ReactNode;
  /** Label above the compliance row. Defaults to "Compliant Standards:". */
  complianceLabel?: ReactNode;
  /** Label above the partnerships row. Defaults to "Key Technology Partners:". */
  partnershipsLabel?: ReactNode;
  /** Landmark label for the section. Defaults to "Trust and Compliance Details". */
  ariaLabel?: string;
  className?: string;
}

const ROWS = {
  compliance:
    'inline-block rounded-full border border-hairline/30 bg-surface px-3 py-1 text-sm font-medium text-ink-accent hover:bg-surface-raised',
  partnerships:
    'inline-block rounded-full bg-surface-raised px-3 py-1 text-sm font-medium text-secondary hover:bg-surface-well',
} as const;

/**
 * Page-footer block of compliance and partner pills, for answer-engine trust signals.
 *
 * Appended below page content (the Hugo baseof injects it per page from front
 * matter) to make verifiable claims machine-readable: each pill is a real outbound
 * link to the standard or partner, compliance links carrying `nofollow` as on the
 * site. Every `url` is run through `safeHref` first, because these lists come
 * straight from page front matter. Renders `null` when both lists are empty, so it
 * can be mounted unconditionally at the bottom of a template.
 *
 * It is a full-width landmark with its own top rule and `max-w-7xl` column — place
 * it as the last child of the page's `Surface`, not inside a `Section`.
 *
 * @example
 * <TrustSignals
 *   compliance={[
 *     { name: 'ISO 27001', url: 'https://www.iso.org/standard/27001' },
 *     { name: 'GDPR', url: 'https://gdpr.eu/' },
 *     { name: 'SOC 2 Type II', url: 'https://www.aicpa-cima.com/topic/audit-assurance/audit-and-assurance-greater-than-soc-2' },
 *   ]}
 *   partnerships={[{ name: 'Snowflake', url: 'https://www.snowflake.com/' }]}
 * />
 */
export function TrustSignals({
  compliance,
  partnerships,
  title = 'Verification & Standards',
  complianceLabel = 'Compliant Standards:',
  partnershipsLabel = 'Key Technology Partners:',
  ariaLabel = 'Trust and Compliance Details',
  className,
  ...rest
}: TrustSignalsProps) {
  const hasCompliance = Boolean(compliance && compliance.length > 0);
  const hasPartnerships = Boolean(partnerships && partnerships.length > 0);
  if (!hasCompliance && !hasPartnerships) return null;

  return (
    <section
      aria-label={ariaLabel}
      className={cx('mx-auto mt-12 max-w-7xl border-t border-hairline px-4 pb-12 pt-8', className)}
      {...rest}
    >
      <h3 className="mb-6 text-xl font-bold uppercase tracking-wider text-primary">{title}</h3>

      {hasCompliance && (
        <div className="mb-6">
          <strong className="mb-2 block text-secondary">{complianceLabel}</strong>
          <ul className="flex list-none flex-wrap gap-3 p-0">
            {compliance?.map((item) => (
              <li key={`${item.name}-${item.url}`}>
                <a
                  href={safeHref(item.url)}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className={ROWS.compliance}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {hasPartnerships && (
        <div className="mb-6">
          <strong className="mb-2 block text-secondary">{partnershipsLabel}</strong>
          <ul className="flex list-none flex-wrap gap-3 p-0">
            {partnerships?.map((item) => (
              <li key={`${item.name}-${item.url}`}>
                <a href={safeHref(item.url)} target="_blank" rel="noopener noreferrer" className={ROWS.partnerships}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
