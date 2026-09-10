import { BackgroundEffects, CapabilityShowcase, Surface } from '@runink/ui';
import type { Capability } from '@runink/ui';

const TWIN_MODULES: Capability[] = [
  {
    title: 'Digital',
    titleAccent: 'Paralegals',
    accent: 'snowflake',
    description:
      'Your automated legal and compliance team. They autonomously ingest freight bills, cross-reference SLA agreements, and instantly file irrefutable claims to recover lost margins from carriers without manual intervention.',
    focus: 'Focus: Claims & Recovery',
  },
  {
    title: 'Statistical',
    titleAccent: 'Buyers',
    accent: 'databricks',
    description:
      'Your autonomous demand planning unit. They intelligently ingest market trends and sales velocity to predict exact stock needs, dynamically orchestrating inventory allocation across your entire distribution network.',
    focus: 'Focus: Inventory & Fulfilment',
  },
  {
    title: 'Revenue',
    titleAccent: 'Operators',
    accent: 'google',
    description:
      'Your forensic financial auditors. They meticulously audit every invoice line against your negotiated carrier contracts, automatically flagging ghost fees and executing Short-Pays to halt margin leakage.',
    focus: 'Focus: Finance & Reconciliation',
  },
];

/**
 * The `enterprise-a2a` band as shipped: gating eyebrow, ember gradient heading,
 * uppercase standfirst, and three cards each wearing a different integration
 * accent (Snowflake cyan, Databricks red, Google blue) over the background-effects
 * wash. The `focus` footers all sit on one baseline despite uneven copy.
 */
export function Default() {
  return (
    <CapabilityShowcase
      eyebrow="Enterprise Exclusive"
      title="Operations Actionable Twins"
      subtitle="Autonomous operations modules deployed on your dedicated infrastructure to augment your team, orchestrate logistics, and protect your margins 24/7."
      capabilities={TWIN_MODULES}
      backgroundEffect={<BackgroundEffects color="var(--color-brand-green)" />}
    />
  );
}

/**
 * The token-only fallback: every card on `accent: 'platform'`, flat headings with
 * no `titleAccent`, no eyebrow, and deliberately lopsided descriptions — the cell
 * that proves the `mt-auto` focus line still aligns across the row and that a card
 * belonging to no integration is not left colourless.
 */
export function PlatformAccentFlatHeadings() {
  return (
    <CapabilityShowcase
      title="What the Twin runs"
      subtitle="One engine, three responsibilities."
      capabilities={[
        {
          title: 'Claims Dispute Operator',
          description:
            'Reconstructs the receiving chronology, cross-references the vendor agreement and drafts the chargeback.',
          focus: 'Focus: Claims & Recovery',
        },
        {
          title: 'IoT Cold Chain Sentinel',
          description:
            'Subscribes to live reefer telematics, detects compressor degradation before spoilage, and issues the reroute command to an alternative port power-plug while quarantining the affected cargo.',
          focus: 'Focus: Perishable Loss Prevention',
        },
        {
          title: 'Data Protection Filter',
          description: 'Audits operational reports for unmasked PII and applies SHA-256 masking policies.',
          focus: 'Focus: DPA & ESG Reporting',
        },
      ]}
      backgroundEffect={<BackgroundEffects />}
    />
  );
}

/**
 * No wash and no `focus` footers, on a flat `primary-950/50` band — the minimum
 * viable configuration, and the contrast cell that shows what the background
 * effect and the pinned responsibility lines each add in the Default.
 */
export function MinimalFlatBand() {
  return (
    <CapabilityShowcase
      eyebrow="Included in every tier"
      title="Sovereign by default"
      capabilities={[
        {
          title: 'Self-hosted',
          titleAccent: 'Inference',
          description:
            'Every model the platform reasons with runs on your own infrastructure. No third-party LLM API sits in the path of your logistics data.',
        },
        {
          title: 'Zero-Trust',
          titleAccent: 'Transport',
          description:
            'Short-lived mTLS identities between every internal service, issued by an in-memory CA you control.',
        },
        {
          title: 'Auditable',
          titleAccent: 'Decisions',
          description:
            'Every autonomous action leaves the chronology it reasoned over, so a claim or a short-pay can be defended line by line.',
        },
      ]}
    />
  );
}

/**
 * `MinimalFlatBand` on the sheet ground. Not one class differs — only `ground`,
 * because every token rebinds underneath. The flat band is the useful one to flip:
 * with no wash in front of it, the card's own `bg-surface` has to read as a card
 * against the canvas in a register where `surface` goes *lighter* than the canvas
 * rather than darker.
 */
export function OnSheet() {
  return (
    <Surface ground="sheet" tone="canvas" className="p-8">
      <CapabilityShowcase
        eyebrow="Included in every tier"
        title="Sovereign by default"
        capabilities={[
          {
            title: 'Self-hosted',
            titleAccent: 'Inference',
            description:
              'Every model the platform reasons with runs on your own infrastructure. No third-party LLM API sits in the path of your logistics data.',
          },
          {
            title: 'Zero-Trust',
            titleAccent: 'Transport',
            description:
              'Short-lived mTLS identities between every internal service, issued by an in-memory CA you control.',
          },
          {
            title: 'Auditable',
            titleAccent: 'Decisions',
            description:
              'Every autonomous action leaves the chronology it reasoned over, so a claim or a short-pay can be defended line by line.',
          },
        ]}
      />
    </Surface>
  );
}
