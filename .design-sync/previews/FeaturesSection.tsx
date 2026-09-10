import { Feature, FeatureCard, FeaturesSection } from '@runink/ui';

/**
 * A 16:9 stand-in for the product screenshots the site passes to `Feature`'s
 * `image` prop. It must be an inline `data:` URI — the preview capture server
 * serves only the bundle directory, so a repo image path 404s and the row collapses
 * to alt text.
 */
const shot = (caption: string) =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360" width="640" height="360">` +
      `<rect width="640" height="360" rx="14" fill="#0d1329"/>` +
      `<rect width="640" height="36" rx="14" fill="#18203f"/><rect y="22" width="640" height="14" fill="#18203f"/>` +
      `<circle cx="22" cy="18" r="5" fill="#f97316"/><circle cx="40" cy="18" r="5" fill="#8b9a5b"/><circle cx="58" cy="18" r="5" fill="#5573df"/>` +
      `<text x="80" y="23" font-family="Inter,Helvetica,sans-serif" font-size="13" fill="#9aa8d8">${caption}</text>` +
      `<rect x="14" y="50" width="126" height="296" rx="10" fill="#151c39"/>` +
      `<rect x="28" y="66" width="80" height="8" rx="4" fill="#3b4a86"/>` +
      `<rect x="28" y="92" width="98" height="8" rx="4" fill="#2b3768"/>` +
      `<rect x="22" y="116" width="110" height="24" rx="6" fill="#5573df"/>` +
      `<rect x="154" y="50" width="228" height="76" rx="10" fill="#1a2247"/>` +
      `<text x="172" y="84" font-family="Inter,Helvetica,sans-serif" font-size="22" font-weight="700" fill="#ffffff">11x faster</text>` +
      `<rect x="396" y="50" width="230" height="76" rx="10" fill="#1a2247"/>` +
      `<text x="414" y="84" font-family="Inter,Helvetica,sans-serif" font-size="22" font-weight="700" fill="#8b9a5b">94% avoided</text>` +
      `<rect x="154" y="140" width="472" height="206" rx="10" fill="#141b37"/>` +
      `<rect x="176" y="286" width="34" height="40" rx="4" fill="#5573df"/>` +
      `<rect x="226" y="248" width="34" height="78" rx="4" fill="#5573df"/>` +
      `<rect x="276" y="210" width="34" height="116" rx="4" fill="#6c86ff"/>` +
      `<rect x="326" y="238" width="34" height="88" rx="4" fill="#5573df"/>` +
      `<rect x="376" y="186" width="34" height="140" rx="4" fill="#8b9a5b"/>` +
      `<rect x="426" y="226" width="34" height="100" rx="4" fill="#5573df"/>` +
      `<rect x="476" y="168" width="34" height="158" rx="4" fill="#f97316"/>` +
      `<rect x="526" y="246" width="34" height="80" rx="4" fill="#5573df"/>` +
      `</svg>`,
  )}`;

/**
 * The canonical band: centred header column over a `Feature` row. The header is
 * `max-w-3xl` while the row below runs the full section width, which is the
 * proportion the whole component exists to set.
 */
export function Default() {
  return (
    <FeaturesSection
      title="One platform, from telemetry to decision"
      description="Runink connects live logistics telemetry to predictive analytics, so disruption is mitigated while it is still happening."
    >
      <Feature
        badge="Tariff & Demurrage Recovery"
        title="Automatic Customs & Weighbridge Auditing"
        description="Weighbridge telemetry is cross-checked against Bill of Lading manifests, and amendments are drafted the moment a variance exceeds 5%."
        image={shot('RULES STUDIO — weighbridge variance')}
        imageAlt="Runink rule editor showing a weighbridge variance constraint"
        features={['Scale feeds audited against manifests', 'Refund claim valued instantly']}
        buttonText="Read the use case"
        buttonLink="/use-cases/claims-recovery/"
      />
    </FeaturesSection>
  );
}

/**
 * Two rows with `imagePosition` alternated — the zig-zag the `space-y-32` gap
 * exists for, and the reason you let this component own the spacing between rows
 * instead of spacing them yourself.
 */
export function AlternatingRows() {
  return (
    <FeaturesSection title="Two sentinels on one Digital Twin">
      <Feature
        badge="Tariff & Demurrage Recovery"
        title="Automatic Customs & Weighbridge Auditing"
        description="Scale feeds are reconciled against manifests, and the refund claim is valued as the variance is found."
        image={shot('RULES STUDIO — weighbridge variance')}
        imageAlt="Runink rule editor showing a weighbridge variance constraint"
        buttonText="Read the use case"
        buttonLink="/use-cases/claims-recovery/"
      />
      <Feature
        badge="Compliance & Safety"
        badgeTone="orange"
        title="Real-Time HazMat Enforcement"
        description="The Yard Operations Sentinel pauses crane movement until a compliant buffer between incompatible cargo classes is restored."
        image={shot('YARD SENTINEL — staging zones')}
        imageAlt="Runink yard sentinel mapping hazardous staging zones"
        buttonText="Read the use case"
        buttonLink="/use-cases/compliance/"
        imagePosition="left"
      />
    </FeaturesSection>
  );
}

/**
 * The same band filled with a `FeatureCard` grid instead of full-width rows — the
 * other composition the section header is used for, and the clearest look at how
 * much narrower the header column is than the content beneath it.
 */
export function WithFeatureCardGrid() {
  return (
    <FeaturesSection
      title="Why teams run Runink"
      description="Each sentinel turns a class of disruption into a decision."
    >
      <div className="grid gap-8 md:grid-cols-3">
        <FeatureCard
          icon="eye"
          title="Cold Chain Guard"
          description="Every reefer watched continuously, not at checkpoints."
          features={['Per-container thresholds', 'Excursion alerting']}
        />
        <FeatureCard
          icon="shield-check"
          title="Zero-Hold Customs Gate"
          description="Compliant loads clear without a manual hold."
          features={['Manifest cross-checks', 'Tariff refund claims']}
        />
        <FeatureCard
          icon="arrow-path"
          title="Returns Triage"
          description="Every return routed to its highest recoverable value."
          features={['Condition grading', 'Disposition routing']}
        />
      </div>
    </FeaturesSection>
  );
}

/**
 * Header omitted. The block is all-or-nothing, so the band becomes just its
 * children plus the section rhythm — how a second features band on the same page
 * avoids repeating a heading.
 */
export function WithoutHeader() {
  return (
    <FeaturesSection>
      <Feature
        badge="Responsive Reverse Logistics"
        badgeTone="green"
        title="The Automated Returns Triage Loop"
        description="A barcode scan weighs residual value against repair cost, then routes the item to restock, refurbishment or recycling before it congests the dock."
        features={['Condition and warranty validation in the field', 'Resale demand compared to refurbishment cost']}
        buttonText="Read the use case"
        buttonLink="/use-cases/responsive-reverse-logistics/"
      />
    </FeaturesSection>
  );
}

/**
 * A `description` with no `title`: the header block is skipped entirely rather than
 * rendering an orphan standfirst. Worth pinning — it is an easy prop mistake and
 * the failure is silent.
 */
export function DescriptionWithoutTitleIsDropped() {
  return (
    <FeaturesSection description="This standfirst never renders, because no title was supplied.">
      <Feature
        badge="Self-Service Analytics"
        badgeTone="tan"
        title="Instant S&OP and Spend Diagnostics"
        description="Root-cause analysis on delays and inventory anomalies lands in twenty minutes instead of weeks."
        buttonText="See the diagnostics"
        buttonLink="/use-cases/spend-analytics/"
      />
    </FeaturesSection>
  );
}
