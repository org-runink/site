import { useState } from 'react';
import { cx } from '../lib/cx';
import { safeHref } from '../lib/safeHref';

/**
 * WCAG relative luminance of a 6-digit hex, or `null` if the value is not one.
 * Straight port of the maths in `scripts/check-contrast.mjs`, so the component and the
 * token audit agree on what "light" means.
 */
function relativeLuminance(hex: string): number | null {
  const m = /^#([0-9a-fA-F]{6})$/.exec(hex.trim());
  const digits = m?.[1];
  if (!digits) return null;
  const channel = (v: number) => (v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));
  // Indexed reads rather than destructuring: `noUncheckedIndexedAccess` types every
  // element of a `map()` result as possibly-undefined, and narrowing `m` does not
  // narrow `m[1]`.
  const at = (i: number) => channel(parseInt(digits.slice(i, i + 2), 16) / 255);
  return 0.2126 * at(0) + 0.7152 * at(2) + 0.0722 * at(4);
}

/**
 * Luminance above which the dark ink wins. Derived, not picked: the crossover where
 * `on-accent` (#1A1614, L 0.0092) and `on-provenance` (#F2EBE3, L 0.8384) give the same
 * WCAG ratio is L = 0.179.
 */
const INK_CROSSOVER_L = 0.179;

/**
 * The ink for the CTA, chosen from `accentColor`'s luminance.
 *
 * The CTA's fill is a colour the CALLER supplies, so no ground-following ink can be
 * right on it. `text-primary` — what this used to carry — is near-white on console and
 * near-black on sheet, so the label only read when the ground happened to agree with
 * the accent: `accentColor="#D9CDB8"` measured ~1.3:1 on console, and the sheet cell
 * passed by luck rather than by rule.
 *
 * The two candidates are the only inks in the registry that hold ONE value on both
 * grounds, which is exactly what a caller-supplied fill needs: `on-accent` (dark) and
 * `on-provenance` (light — the ink the palette pairs with a dark saturated brand fill,
 * which is what a dark `accentColor` is).
 */
function ctaInkClass(accentColor: string): string {
  const l = relativeLuminance(accentColor);
  /*
   * Not a hex we can read — which also means `style.backgroundColor` is invalid and
   * dropped, so the CTA shows the card's own `bg-surface` showing through. That DOES
   * flip with the ground, so the ground-following ink is the correct answer here and
   * only here.
   */
  if (l === null) return 'text-primary';
  return l > INK_CROSSOVER_L ? 'text-on-accent' : 'text-on-provenance';
}

export interface CaseStudyCardProps {
  /**
   * The partner's own brand colour as a **6-digit hex** (e.g. `#FF3621` for
   * Databricks). The card derives its pill fill, panel gradient and CTA
   * background from it by appending hex alpha, so three- or eight-digit values
   * and `rgb()`/named colours will not render correctly. Third-party brand
   * colours are deliberately arbitrary values, not design tokens.
   *
   * Its luminance also selects the CTA's label ink, so a pale brand colour gets a dark
   * label and a dark one a light label, on either ground.
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
 * is it at full strength. The surrounding panel stays on the system's `surface`.
 * Keeps `not-prose` on the root so it survives being dropped into a `prose` block
 * from markdown.
 *
 * The one thing NOT derived from `accentColor` is the CTA's ink, and it is not a
 * ground token either — it is **picked by the accent's luminance** at render time, from
 * the two inks the registry holds at one value on both grounds (`on-accent` dark,
 * `on-provenance` light). A ground-following ink on a caller-supplied fill is only ever
 * right by coincidence; a pale `accentColor` produced a ~1.3:1 label on console.
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
            className={cx(
              'inline-block rounded-card px-6 py-3 font-bold no-underline transition-opacity hover:opacity-90',
              // Derived from `accentColor`, not from the ground — see `ctaInkClass`.
              ctaInkClass(accentColor),
            )}
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
