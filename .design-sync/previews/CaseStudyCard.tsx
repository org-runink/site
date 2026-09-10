import { CaseStudyCard } from '@runink/ui';

/**
 * A partner wordmark as an inline SVG data URI. The preview server only serves the
 * design bundle, so a site-relative `/images/partners/*.svg` would 404 and fall
 * back to the text wordmark — this keeps the real `<img>` path exercised in the
 * cells that are about the image panel.
 */
const DATABRICKS_MARK =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 56" width="200" height="56">
      <g fill="#FF3621">
        <path d="M8 14l22-11 22 11-22 11z" opacity=".9"/>
        <path d="M8 26l22 11 22-11v8L30 45 8 34z"/>
        <path d="M8 40l22 11 22-11v7L30 58 8 47z" opacity=".6"/>
      </g>
      <text x="62" y="36" font-family="Inter, Helvetica, Arial, sans-serif" font-size="22" font-weight="700" fill="#FF3621">databricks</text>
    </svg>`,
  );

/** The canonical two-up band: pill, headline, outcome, CTA, partner logo panel. */
export function Default() {
  return (
    <CaseStudyCard
      accentColor="#FF3621"
      tag="Databricks"
      title="Unifying logistics telemetry into one lakehouse"
      description="Runink connected every signal from procurement to delivery, cutting manifest reconciliation work to near zero and recovering $18,200 per customs incident."
      ctaLabel="Read the case study"
      href="/use-cases/claims-recovery/"
      image={DATABRICKS_MARK}
      imageAlt="Databricks"
    />
  );
}

/**
 * No image — the right panel falls back to the partner wordmark in the accent
 * colour instead of a broken image. Real, intended behaviour for partners whose
 * logo has not been cleared for use.
 */
export function WordmarkFallback() {
  return (
    <CaseStudyCard
      accentColor="#4C7A5D"
      tag="Maersk Terminals"
      title="Zero-hold customs gate at three terminals"
      description="Weighbridge telemetry is cross-checked against every Bill of Lading in flight, so a 10.6% weight variance becomes a drafted amendment rather than a two-day hold."
      ctaLabel="See the deployment"
      href="/use-cases/compliance/"
      imageAlt="Maersk Terminals"
    />
  );
}

/**
 * The accent axis, against `Default`'s Databricks red: every coloured element —
 * pill tint, the 135° panel gradient, the CTA fill — is derived from
 * `accentColor`, so the card reads as the partner's while the surrounding panel
 * stays on the system's `primary-900`. One card per cell because the band is a
 * full-width composition; two stacked overflow the capture viewport.
 */
export function PartnerAccent() {
  return (
    <CaseStudyCard
      accentColor="#EA580C"
      tag="Cold Chain"
      title="Protecting $42,000 of biologics in transit"
      description="Compressor degradation on Reefer #MSCU-8849201 was caught at 3.2°C and rerouted to an alternative port power-plug before spoilage."
      ctaLabel="Read the case study"
      href="/use-cases/cold-chain-safety/"
    />
  );
}

/**
 * A script-bearing destination. The CTA still renders at full strength but with no
 * `href` at all, so it is inert rather than a clickable payload — the guard the
 * Hugo templates got free from `relURL`.
 */
export function UnsafeHrefIsInert() {
  return (
    <CaseStudyCard
      accentColor="#FF3621"
      tag="Rejected destination"
      title="This card was given a script-bearing href"
      description="The call to action keeps its accent fill and its label, but renders without an href, so nothing is clickable."
      ctaLabel="Read the case study"
      href="javascript:alert(1)"
      imageAlt="Inert"
    />
  );
}

/**
 * Long headline and a two-sentence outcome — the text-heavy end of the band, where
 * the left column has to keep its rhythm against a fixed-height image panel.
 */
export function LongCopy() {
  return (
    <CaseStudyCard
      accentColor="#D9CDB8"
      tag="Terminal Safety & HazMat"
      title="Real-time terminal safety and dangerous goods enforcement across Zone C"
      description="The moment Class 3 flammables were staged within five metres of Class 5.1 oxidizers, the yard sentinel locked crane movement until a compliant 15-metre buffer was restored."
      ctaLabel="Read the compliance story"
      href="/use-cases/compliance/"
      imageAlt="Zone C"
    />
  );
}
