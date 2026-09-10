import { BackgroundEffects, UseCasesCarousel } from '@runink/ui';
import type { UseCasesCarouselItem } from '@runink/ui';

/**
 * The six live use-case pages, each with the badge and badge colour from its own
 * front matter.
 */
const USE_CASES: UseCasesCarouselItem[] = [
  {
    title: 'Automated Claims Audit & Demurrage Recovery',
    description: 'Forensic chronology reconstruction auto-drafts tariff disputes & short-pays.',
    badge: 'Claims Agent',
    badgeColor: '#7c3aed',
    href: '/use-cases/claims-recovery/',
  },
  {
    title: 'Cold Chain & Terminal Safety',
    description:
      'IoT-Edge Sentinel locks yard cranes on segregation violations and protects perishable cargo.',
    badge: 'IoT Sentinel',
    badgeColor: '#3b82f6',
    href: '/use-cases/cold-chain-safety/',
  },
  {
    title: 'Predictive JIT & Sourcing Optimization',
    description:
      'Solve supplier capacity bottlenecks and automate backup supplier routing to reduce stockouts.',
    badge: 'Fulfillment Agent',
    badgeColor: '#ea580c',
    href: '/use-cases/fulfillment-optimization/',
  },
  {
    title: 'ESG Compliance & Data Privacy Auditing',
    description: 'Auto-hashes customer PII to comply with DPA and compiles Scope 3 emissions.',
    badge: 'Compliance Auditor',
    badgeColor: '#10b981',
    href: '/use-cases/compliance/',
  },
  {
    title: 'Responsive Reverse Logistics',
    description:
      'Streamlines returned goods from field scan to closed-loop routing via real-time cost-benefit triage.',
    badge: 'Circular Economy',
    badgeColor: '#14b8a6',
    href: '/use-cases/responsive-reverse-logistics/',
  },
  {
    title: 'Active Driver Voice Dispatch',
    description: 'Driver routing detours via hands-free voice commands.',
    badge: 'Voice-AI Dispatcher',
    badgeColor: '#f59e0b',
    href: '/use-cases/voice-dispatch/',
  },
];

/**
 * The band at rest — `scrollLeft: 0`, first cards in view and the rest bleeding
 * off the right edge, which is the only scroll affordance the rail has since
 * `hide-scrollbar` suppresses the bar. `autoAdvance={false}` so the screenshot is
 * deterministic; on the live page it is left on.
 */
export function Default() {
  return (
    <UseCasesCarousel
      eyebrow="Applications"
      title="Explore All Cures"
      subtitle="Discover how the Operations Actionable Twin transforms your operational workflows."
      items={USE_CASES}
      autoAdvance={false}
      backgroundEffect={<BackgroundEffects color="var(--color-brand-green)" />}
    />
  );
}

/**
 * The fallback treatments in one cell: no `badgeColor` (badges fall back to the
 * system `secondary-500` accent), one card with no `badge` at all, one with no
 * `href` so it renders without the footer link, and a custom `linkLabel` instead
 * of the shortcode's "Read about …" sentence. No wash, so the band is flat
 * `primary-950`.
 */
export function FallbackAccents() {
  return (
    <UseCasesCarousel
      eyebrow="In pilot"
      title="Next Up"
      subtitle="Use cases in validation with design partners."
      anchorId={undefined}
      autoAdvance={false}
      items={[
        {
          title: 'Hypothesis Lab',
          description:
            'Simulate changes to your operating rules before deployment. Test the future without risking the present.',
          badge: 'Simulation',
          href: '/use-cases/hypothesis-lab/',
          linkLabel: 'Open the lab',
        },
        {
          title: 'Forecast LLM Document Auditing',
          description:
            'Reads the document trail behind a forecast and flags the assumptions nobody wrote down.',
          href: '/forecast-llm-document-auditing/',
        },
        {
          title: 'Spend Analytics',
          description:
            'Deep financial and spend analytics for immediate ROI identification and continuous cost reduction. No link on this card — it renders without the footer.',
          badge: 'Revenue Operator',
        },
        {
          title: 'Rules Reconciliation',
          description:
            'Map SOPs against legacy SQL, VBA and Python, or against SAP, Salesforce and Shopify.',
          badge: 'Assessment',
          href: '/products/',
        },
      ]}
    />
  );
}
