import { PricingTable, Surface } from '@runink/ui';
import type { PricingTier } from '@runink/ui';

/** The three licence tiers exactly as `content/pricing.md` declares them. */
const TIERS: PricingTier[] = [
  {
    pill: 'ESSENTIAL AUTOMATION',
    name: 'LITE LICENSE',
    subtitle: '1 TO 9 SEATS',
    priceMonthly: '86',
    priceYearly: '75',
    priceSubtitle: 'PER SEAT / MONTH',
    credits: 'DYNAMIC CU POOL',
    outcomes: [
      { label: 'CLAIMS RECOVERY', value: '20% Success Fee' },
      { label: 'AUTO-PROVISIONING', value: '1-3% (Capped $50)' },
    ],
    features: [
      'SHARED HIGH-DENSITY NODE',
      'BASIC AUTOMATION WORKFLOWS',
      'STANDARD COMPUTE PRIORITY',
      'MONTHLY OR ANNUAL COMMITMENTS',
    ],
    cta: { label: 'START LITE', href: '/#contact' },
  },
  {
    pill: 'PLATFORM & SECURITY',
    name: 'DEDICATED LICENSE',
    subtitle: '10+ SEATS',
    priceMonthly: '75',
    priceYearly: '75',
    priceSubtitle: 'PER SEAT / MONTH (ANNUAL ONLY)',
    credits: 'MASSIVE CU POOL',
    outcomes: [
      { label: 'CLAIMS RECOVERY', value: '20% Success Fee' },
      { label: 'AUTO-PROVISIONING', value: '1-3% (Capped $50)' },
    ],
    features: [
      'DEDICATED SOVEREIGN COMPUTE',
      'CUSTOM DOMAIN CONFIGURATION',
      'PRIORITY ROUTING & INFERENCE',
      { label: '1,000 CU PER SEAT + 2,000 CU BONUS/10 SEATS', yearlyOnly: true },
    ],
    cta: { label: 'INITIALIZE DEDICATED', href: '/#contact' },
    highlighted: true,
  },
  {
    pill: 'SOVEREIGN INFRASTRUCTURE',
    name: 'ENTERPRISE',
    subtitle: 'AIR-GAPPED & ON-PREMISES',
    priceMonthly: 'CUSTOM',
    priceSubtitle: 'CUSTOM DEPLOYMENTS',
    credits: 'MANAGED CAPACITY',
    outcomes: [{ label: 'OUTCOME STRATEGY', value: 'Custom SLAs' }],
    features: [
      'SELF-HOSTED ON-PREM',
      'EDGE EMBEDDING CAPABILITIES',
      'EVERYTHING IN DEDICATED PLATFORM',
      'ADVANCED AUDIT LOGGING',
    ],
    cta: { label: 'CONTACT ENTERPRISE', href: '/#contact' },
  },
];

/**
 * The pricing page's default state: monthly prices, Dedicated highlighted. The
 * annual-only capacity line on Dedicated is hidden here.
 */
export function Default() {
  return <PricingTable tiers={TIERS} />;
}

/**
 * `Default` on the sheet ground. Not one prop or class differs — only `ground`,
 * because every token rebinds underneath.
 *
 * This is also the cell that tests the highlighted tier: Dedicated's
 * `border-fill-accent` + `bg-fill-accent-wash` has to stay legible as a *warm tint on
 * a light card* rather than reading as the lit panel it is on console, and the
 * clipped-gradient tier name and price have to hold against it.
 */
export function OnSheet() {
  return (
    <Surface ground="sheet" tone="canvas" className="p-8">
      <PricingTable tiers={TIERS} />
    </Surface>
  );
}

/**
 * `period="yearly"` — the state `PricingToggle` drives. Lite drops from $86 to
 * its effective $75, and Dedicated's `yearlyOnly` CU-bonus check appears. This is
 * the variant axis of the component.
 */
export function AnnualContract() {
  return <PricingTable tiers={TIERS} period="yearly" />;
}

/**
 * The Enterprise tier on its own: a quote-only price ("CUSTOM") takes no currency
 * symbol and no `/ MO` suffix, and a single outcome row still gets its dividing
 * rule.
 */
export function QuoteOnlyTier() {
  return <PricingTable tiers={[TIERS[2]]} />;
}

/**
 * No highlighted tier, no eyebrows, and an explicit `ctaVariant` — the shape a
 * two-plan regional price list takes, with a localised currency and period
 * suffix. Proves the gradient treatment really is opt-in per tier.
 */
export function TwoTiersNoHighlight() {
  return (
    <PricingTable
      currency="€"
      tiers={[
        {
          name: 'LITE LICENSE',
          subtitle: '1 À 9 SIÈGES',
          priceMonthly: '79',
          priceSubtitle: 'PAR SIÈGE / MOIS',
          periodLabel: '/ MOIS',
          credits: 'POOL CU DYNAMIQUE',
          outcomes: [{ label: 'RECOUVREMENT', value: '20% de commission' }],
          features: ['NŒUD HAUTE DENSITÉ PARTAGÉ', 'WORKFLOWS D’AUTOMATISATION', 'PRIORITÉ DE CALCUL STANDARD'],
          cta: { label: 'DÉMARRER', href: '/fr/#contact' },
          ctaVariant: 'outline',
        },
        {
          name: 'DEDICATED LICENSE',
          subtitle: '10+ SIÈGES',
          priceMonthly: '69',
          priceSubtitle: 'PAR SIÈGE / MOIS (ANNUEL)',
          periodLabel: '/ MOIS',
          credits: 'POOL CU MASSIF',
          outcomes: [{ label: 'RECOUVREMENT', value: '20% de commission' }],
          features: ['CALCUL SOUVERAIN DÉDIÉ', 'DOMAINE PERSONNALISÉ', 'ROUTAGE PRIORITAIRE'],
          cta: { label: 'NOUS CONTACTER', href: '/fr/#contact' },
          ctaVariant: 'solid',
        },
      ]}
    />
  );
}
