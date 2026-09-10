import { Feature, Surface } from '@runink/ui';

/**
 * A 16:9 stand-in for the product screenshots the site passes to `image`
 * (`/images/face/*.png`). It has to be an inline `data:` URI: the preview capture
 * server serves only the bundle directory, so any repo image path 404s and the row
 * collapses to alt text. Tinted with the brand accents so the row still reads as a
 * dark-canvas composition rather than a white hole.
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
      `<rect x="28" y="112" width="68" height="8" rx="4" fill="#2b3768"/>` +
      `<rect x="22" y="136" width="110" height="24" rx="6" fill="#5573df"/>` +
      `<rect x="28" y="176" width="88" height="8" rx="4" fill="#2b3768"/>` +
      `<rect x="28" y="196" width="74" height="8" rx="4" fill="#2b3768"/>` +
      `<rect x="154" y="50" width="150" height="76" rx="10" fill="#1a2247"/>` +
      `<text x="170" y="82" font-family="Inter,Helvetica,sans-serif" font-size="22" font-weight="700" fill="#ffffff">11x</text>` +
      `<rect x="170" y="96" width="96" height="7" rx="3" fill="#3b4a86"/>` +
      `<rect x="318" y="50" width="150" height="76" rx="10" fill="#1a2247"/>` +
      `<text x="334" y="82" font-family="Inter,Helvetica,sans-serif" font-size="22" font-weight="700" fill="#8b9a5b">94%</text>` +
      `<rect x="334" y="96" width="80" height="7" rx="3" fill="#3b4a86"/>` +
      `<rect x="482" y="50" width="144" height="76" rx="10" fill="#1a2247"/>` +
      `<text x="498" y="82" font-family="Inter,Helvetica,sans-serif" font-size="22" font-weight="700" fill="#f97316">$18.4M</text>` +
      `<rect x="498" y="96" width="72" height="7" rx="3" fill="#3b4a86"/>` +
      `<rect x="154" y="140" width="472" height="206" rx="10" fill="#141b37"/>` +
      `<rect x="176" y="286" width="34" height="40" rx="4" fill="#5573df"/>` +
      `<rect x="226" y="252" width="34" height="74" rx="4" fill="#5573df"/>` +
      `<rect x="276" y="214" width="34" height="112" rx="4" fill="#6c86ff"/>` +
      `<rect x="326" y="238" width="34" height="88" rx="4" fill="#5573df"/>` +
      `<rect x="376" y="188" width="34" height="138" rx="4" fill="#8b9a5b"/>` +
      `<rect x="426" y="226" width="34" height="100" rx="4" fill="#5573df"/>` +
      `<rect x="476" y="170" width="34" height="156" rx="4" fill="#f97316"/>` +
      `<rect x="526" y="246" width="34" height="80" rx="4" fill="#5573df"/>` +
      `<rect x="176" y="162" width="120" height="8" rx="4" fill="#3b4a86"/>` +
      `</svg>`,
  )}`;

/**
 * The canonical row with `imagePosition` at its `right` default: eyebrow pill,
 * heading, copy, capability checklist and CTA on the left, screenshot on the right.
 * Two columns from `lg`; below that the image drops under the copy.
 */
export function Default() {
  return (
    <Feature
      badge="Tariff & Demurrage Recovery"
      title="Automatic Customs & Weighbridge Auditing"
      description="Weighbridge telemetry is cross-checked against Bill of Lading manifests, and a weight amendment is drafted the moment a variance exceeds 5%."
      image={shot('RULES STUDIO — weighbridge variance')}
      imageAlt="Runink rule editor showing a weighbridge variance constraint"
      features={[
        'Real-time scale feeds audited against digital shipping documents',
        'The exact weight variance that triggered the customs hold surfaced',
        'Customs tariff refund claim valued instantly',
      ]}
      buttonText="Read the use case"
      buttonLink="/use-cases/claims-recovery/"
    />
  );
}

/**
 * `imagePosition="left"` mirrors the whole row — the primary variant axis. Read
 * against `Default`, the screenshot swaps sides and the copy column follows it. The
 * swap is an `lg` behaviour: a left-hand image only makes sense once the row is two
 * columns wide, so below `lg` both cells stack copy-then-image.
 */
export function ImageLeft() {
  return (
    <Feature
      badge="IoT-Edge Telemetry"
      badgeTone="sage"
      title="The Autonomous Cold Chain Guard"
      description="Static temperature monitors register failures after they occur. The Cold Chain Sentinel subscribes to live container telematics and reroutes cargo before it spoils."
      image={shot('POSTURE RADAR — reefer telemetry')}
      imageAlt="Runink posture radar tracking reefer temperature variance"
      features={[
        'Real-time subscriptions to reefer telematics',
        'Predictive compressor degradation alerts',
        'Automatic reroute to alternative port power-plugs',
      ]}
      buttonText="Read the use case"
      buttonLink="/use-cases/cold-chain-safety/"
      imagePosition="left"
    />
  );
}

/**
 * The zig-zag as it reads down a page: two consecutive rows with `imagePosition`
 * alternated. This is the cell that shows the axis as rhythm rather than as a prop
 * value, and the reason the site alternates it at all.
 */
export function AlternatingRows() {
  return (
    <div className="space-y-24">
      <Feature
        badge="Compliance & Safety"
        badgeTone="orange"
        title="Real-Time HazMat Enforcement"
        description="The Yard Operations Sentinel pauses crane movement until a compliant buffer between incompatible cargo classes is restored."
        image={shot('YARD SENTINEL — staging zones')}
        imageAlt="Runink yard sentinel mapping hazardous staging zones"
        features={['Yard GPS and RFID staging telemetry', 'Dangerous goods compatibility triage']}
        buttonText="Read the use case"
        buttonLink="/use-cases/compliance/"
      />
      <Feature
        badge="Self-Service Analytics"
        badgeTone="tan"
        title="Instant S&OP and Spend Diagnostics"
        description="Root-cause analysis on delays and inventory anomalies lands in twenty minutes instead of the weeks a manual S&OP cycle takes."
        image={shot('DECISION COCKPIT — spend diagnostics')}
        imageAlt="Runink decision cockpit showing spend diagnostics"
        features={['Self-service CSV, Excel and PDF uploads', 'Continuous procurement forecasting']}
        buttonText="See the diagnostics"
        buttonLink="/use-cases/spend-analytics/"
        imagePosition="left"
      />
    </div>
  );
}

/**
 * Every value of the `badgeTone` union, one row each, trimmed to pill + heading +
 * copy + CTA so the accent and its glow are the only thing that differs down the
 * stack.
 */
export function BadgeTones() {
  return (
    <div className="space-y-12">
      <Feature
        badge="primary — Tariff & Demurrage Recovery"
        badgeTone="primary"
        title="Zero-Hold Customs Gate"
        description="Compliant loads clear the gate without a manual hold."
        buttonText="Learn more"
        buttonLink="/use-cases/claims-recovery/"
      />
      <Feature
        badge="sage — IoT-Edge Telemetry"
        badgeTone="sage"
        title="The Autonomous Cold Chain Guard"
        description="Every reefer is watched continuously, not at checkpoints."
        buttonText="Learn more"
        buttonLink="/use-cases/cold-chain-safety/"
      />
      <Feature
        badge="green — Responsive Reverse Logistics"
        badgeTone="green"
        title="The Automated Returns Triage Loop"
        description="Each return is routed to its highest recoverable value."
        buttonText="Learn more"
        buttonLink="/use-cases/responsive-reverse-logistics/"
      />
      <Feature
        badge="orange — Compliance & Safety"
        badgeTone="orange"
        title="Real-Time Terminal Safety"
        description="Crane movement stops until the HazMat buffer is restored."
        buttonText="Learn more"
        buttonLink="/use-cases/compliance/"
      />
      <Feature
        badge="tan — Self-Service Analytics"
        badgeTone="tan"
        title="Instant S&OP Diagnostics"
        description="Spend and planning answers without an IT ticket."
        buttonText="Learn more"
        buttonLink="/use-cases/spend-analytics/"
      />
    </div>
  );
}

/**
 * The bare minimum the component will take — no badge, no image, no checklist, and
 * the default `Learn More` CTA label. Worth pinning: a row this sparse still keeps
 * the two-column grid, so the right half stays empty rather than the copy centring.
 */
export function Minimal() {
  return (
    <Feature
      title="Run the autonomous supply chain"
      description="Runink connects live logistics telemetry with predictive analytics — spanning S&OP, spend analytics and fulfillment — to protect operating margins."
      buttonLink="/platform/"
    />
  );
}

/**
 * `Default` on the sheet ground. Not one class differs — only `ground`, because every
 * token rebinds underneath: the badge pill, the checklist ticks and the CTA all resolve
 * in the light register without the row restating a colour.
 *
 * The screenshot stand-in is the same inline `data:` URI, and it stays a dark console
 * panel on purpose — a product screenshot is an image, not a token, so it does not
 * rebind with the ground. What this cell grades is the frame around it.
 */
export function OnSheet() {
  return (
    <Surface ground="sheet" tone="canvas" className="p-8">
      <Feature
        badge="Tariff & Demurrage Recovery"
        title="Automatic Customs & Weighbridge Auditing"
        description="Weighbridge telemetry is cross-checked against Bill of Lading manifests, and a weight amendment is drafted the moment a variance exceeds 5%."
        image={shot('RULES STUDIO — weighbridge variance')}
        imageAlt="Runink rule editor showing a weighbridge variance constraint"
        features={[
          'Real-time scale feeds audited against digital shipping documents',
          'The exact weight variance that triggered the customs hold surfaced',
          'Customs tariff refund claim valued instantly',
        ]}
        buttonText="Read the use case"
        buttonLink="/use-cases/claims-recovery/"
      />
    </Surface>
  );
}
