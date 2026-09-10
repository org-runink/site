import { TrustSignals } from '@runink/ui';

const COMPLIANCE = [
  { name: 'ISO 27001', url: 'https://www.iso.org/standard/27001' },
  { name: 'ISO 28000', url: 'https://www.iso.org/standard/79612.html' },
  { name: 'GDPR', url: 'https://gdpr.eu/' },
  {
    name: 'SOC 2 Type II',
    url: 'https://www.aicpa-cima.com/topic/audit-assurance/audit-and-assurance-greater-than-soc-2',
  },
  { name: 'NIST SP 800-171', url: 'https://csrc.nist.gov/pubs/sp/800/171/r3/final' },
];

const PARTNERSHIPS = [
  { name: 'Snowflake', url: 'https://www.snowflake.com/' },
  { name: 'OpenStreetMap', url: 'https://www.openstreetmap.org/' },
  { name: 'Openrouteservice', url: 'https://openrouteservice.org/' },
];

/**
 * The canonical page-footer block: compliance standards in the bright row,
 * technology partners in the quieter one below.
 */
export function Default() {
  return <TrustSignals compliance={COMPLIANCE} partnerships={PARTNERSHIPS} />;
}

/**
 * Compliance only — the shape of a page whose front matter declares standards
 * but no partners. The partnership row and its label are dropped entirely rather
 * than left as an empty band.
 */
export function ComplianceOnly() {
  return <TrustSignals compliance={COMPLIANCE} />;
}

/**
 * Partnerships only, so the muted pill treatment can be compared against the
 * outlined compliance pills above.
 */
export function PartnershipsOnly() {
  return <TrustSignals partnerships={PARTNERSHIPS} />;
}

/**
 * All three labels translated, as the `fr` build renders them — these default to
 * hardcoded English, so this cell is the proof they are really overridable.
 */
export function TranslatedLabels() {
  return (
    <TrustSignals
      title="Vérification & Normes"
      complianceLabel="Normes respectées :"
      partnershipsLabel="Partenaires technologiques clés :"
      ariaLabel="Détails de conformité et de confiance"
      compliance={COMPLIANCE.slice(0, 3)}
      partnerships={PARTNERSHIPS.slice(0, 2)}
    />
  );
}

/**
 * A single claim whose verification URL does not survive `safeHref`. The pill
 * stays — dropping it would silently edit the page — but renders unlinked.
 */
export function UnsafeUrlStaysUnlinked() {
  return (
    <TrustSignals
      compliance={[
        { name: 'ISO 27001', url: 'https://www.iso.org/standard/27001' },
        { name: 'C-TPAT', url: 'javascript:alert(1)' },
      ]}
    />
  );
}
