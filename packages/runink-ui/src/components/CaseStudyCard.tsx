import { useState } from 'react';
import { cx } from '../lib/cx';
import { safeHref } from '../lib/safeHref';

export interface CaseStudyCardProps {
  /**
   * The partner's own brand colour as a **6-digit hex** (e.g. `#FF3621` for
   * Databricks). The card derives its pill fill, panel gradient and CTA
   * background from it by appending hex alpha, so three- or eight-digit values
   * and `rgb()`/named colours will not render correctly. Third-party brand
   * colours are deliberately arbitrary values, not design tokens.
   */
  accentColor: string;
  /** Small pill above the heading — the category or partner name. */
  tag: string;
  /** The case study's headline. */
  title: string;
  /** A sentence or two on the outcome. */
  description: string;
  /** Label on the call to action. */
  ctaLabel: string;
  /** Where the call to action goes. */
  href: string;
  /**
   * Logo or screenshot for the right-hand panel, capped at 200px wide. Omit it —
   * or point it at something that fails to load — and the panel falls back to a
   * wordmark instead of a broken image.
   */
  image?: string;
  /**
   * Alt text for the image. Defaults to empty, i.e. decorative, which is the
   * right answer for a partner logo whose name is already in `tag`; set it when
   * the image carries information the copy does not.
   */
  imageAlt?: string;
  className?: string;
}

/**
 * A two-up case-study panel: copy and CTA on the left, partner logo on the right.
 *
 * The widest component in the set — it is a full-width band's worth of content,
 * not a grid item. Stacks to one column below `md`.
 *
 * Everything coloured is driven by `accentColor` rather than the Runink palette,
 * because the point of the card is to read as the *partner's*: the pill is a 8%
 * tint of it, the right panel a 135° gradient from ~1% to ~19% of it, and the CTA
 * is it at full strength. The surrounding panel stays on the system's
 * `primary-900`. Keeps `not-prose` on the root so it survives being dropped into
 * a `prose` block from markdown.
 *
 * `href` is run through `safeHref`: a script-bearing destination still renders the
 * CTA at full strength but without an `href`, so it is inert rather than clickable.
 *
 * @example
 * <CaseStudyCard
 *   accentColor="#FF3621"
 *   tag="Databricks"
 *   title="Unifying logistics telemetry into one lakehouse"
 *   description="Runink connected every signal from procurement to delivery, cutting reconciliation work to near zero."
 *   ctaLabel="Read the case study"
 *   href="/use-cases/databricks"
 *   image="/images/partners/databricks.svg"
 *   imageAlt="Databricks"
 * />
 */
export function CaseStudyCard({
  accentColor,
  tag,
  title,
  description,
  ctaLabel,
  href,
  image,
  imageAlt,
  className,
}: CaseStudyCardProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = Boolean(image) && !imageFailed;

  return (
    <div className={cx('not-prose overflow-hidden rounded-card bg-surface shadow-xl', className)}>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-8 md:p-12">
          <div
            className="mb-6 inline-block rounded-full px-4 py-2 text-sm font-semibold"
            style={{ backgroundColor: `${accentColor}15`, color: accentColor }}
          >
            {tag}
          </div>
          <h3 className="mb-4 text-3xl font-bold text-primary">{title}</h3>
          <p className="mb-6 text-secondary">{description}</p>
          <a
            href={safeHref(href)}
            className="inline-block rounded-card px-6 py-3 font-bold text-primary no-underline transition-opacity hover:opacity-90"
            style={{ backgroundColor: accentColor }}
          >
            {ctaLabel}
          </a>
        </div>
        <div
          className="flex items-center justify-center p-8 md:p-12"
          style={{ background: `linear-gradient(135deg, ${accentColor}03, ${accentColor}30)` }}
        >
          {showImage ? (
            <img
              src={image}
              alt={imageAlt ?? ''}
              loading="lazy"
              onError={() => setImageFailed(true)}
              className="max-w-[200px]"
            />
          ) : (
            <span
              className="text-center text-2xl font-bold uppercase tracking-widest"
              style={{ color: accentColor }}
            >
              {imageAlt || tag}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
