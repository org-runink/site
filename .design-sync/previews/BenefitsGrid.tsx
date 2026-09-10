import { BenefitsGrid } from '@runink/ui';
import type { Benefit } from '@runink/ui';

const DIGITAL_TWIN: Benefit[] = [
  {
    icon: 'bolt',
    tone: 'sage',
    title: 'Act while it still matters',
    description: 'Excursions are caught in transit, not in next week’s exception report.',
  },
  {
    icon: 'shield-check',
    tone: 'green',
    title: 'Compliance, not clipboards',
    description: 'Crane movement locks until the HazMat buffer is restored.',
  },
  {
    icon: 'currency-dollar',
    tone: 'tan',
    title: 'Recover what leaks today',
    description: 'Demurrage claims and tariff refunds are quantified as they appear.',
  },
];

/** The canonical band: display heading over a glow, three frosted benefit panels. */
export function Default() {
  return (
    <BenefitsGrid
      title="Mitigate disruption in real time"
      subtitle="Live logistics telemetry, turned into decisions that protect your margins."
      benefits={DIGITAL_TWIN}
    />
  );
}

/**
 * The tone axis: the three accents `Default` does not use (`orange`, `primary`,
 * `secondary`), so the two cells together cover all six icon-tile tints. Kept to
 * one row of three — six benefits would wrap to a second row that the capture
 * viewport cuts off entirely.
 */
export function ToneSweep() {
  return (
    <BenefitsGrid
      title="One ecosystem, not a toolchain"
      subtitle="Every data signal from procurement to delivery, on infrastructure you control."
      benefits={[
        {
          icon: 'cpu-chip',
          tone: 'orange',
          title: 'Inference you own',
          description: 'The platform serves its own models. No third-party API sees your manifests.',
        },
        {
          icon: 'server-stack',
          tone: 'primary',
          title: 'Zero-broker event mesh',
          description: 'Raft orchestration and self-healing, with no broker to operate.',
        },
        {
          icon: 'lock-stack',
          tone: 'secondary',
          title: 'Zero trust by default',
          description: 'Mutual TLS with short-lived certificates on every internal call.',
        },
      ]}
    />
  );
}

/**
 * Two benefits instead of three. The grid is `md:grid-cols-3`, so a short list
 * leaves the third column empty — worth seeing, because it is the shape a
 * two-outcome band actually produces.
 */
export function TwoUp() {
  return (
    <BenefitsGrid
      title="Zero-hold customs gate"
      subtitle="Weighbridge telemetry cross-checked against every Bill of Lading in flight."
      benefits={[
        {
          icon: 'magnifying-glass',
          tone: 'green',
          title: 'Automated auditing',
          description: 'Live scale feeds are cross-checked against the shipping documents.',
        },
        {
          icon: 'clipboard-document-list',
          tone: 'tan',
          title: 'Documentation engine',
          description: 'Compliant BOL weight amendments, compiled without human intervention.',
        },
      ]}
    />
  );
}

/**
 * Uneven copy: a one-line benefit beside a three-line one. Panels are `flex-col
 * h-full`, so this is the cell that proves the short column stretches to its
 * neighbour rather than leaving the row ragged.
 */
export function UnevenCopy() {
  return (
    <BenefitsGrid
      title="The autonomous supply chain"
      subtitle="Three use cases, one twin."
      benefits={[
        {
          icon: 'eye',
          tone: 'sage',
          title: 'Cold chain guard',
          description: 'Reefer telematics, watched continuously.',
        },
        {
          icon: 'arrow-path',
          tone: 'orange',
          title: 'Returns triage loop',
          description:
            'Warranty and condition are validated at the barcode, then routed to restock.',
        },
        {
          icon: 'chart-bar',
          tone: 'secondary',
          title: 'S&OP diagnostics',
          description: 'Planners ask the twin directly instead of queueing for a report.',
        },
      ]}
    />
  );
}
