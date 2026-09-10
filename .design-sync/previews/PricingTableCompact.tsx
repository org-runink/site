import { PricingTableCompact, Surface } from '@runink/ui';
import type { PricingTableCompactTier } from '@runink/ui';

const TIERS: PricingTableCompactTier[] = [
  {
    name: 'Lite',
    description: 'Essential automation for 1 to 9 seats.',
    price: '86',
    features: ['Shared high-density node', 'Basic automation workflows', 'Standard compute priority'],
    cta: { label: 'Start Lite', href: '/#contact' },
  },
  {
    name: 'Dedicated',
    description: 'Sovereign compute and priority inference from 10 seats.',
    price: '75',
    features: [
      'Dedicated sovereign compute',
      'Custom domain configuration',
      'Priority routing & inference',
      '1,000 CU per seat + 2,000 CU bonus per 10 seats',
    ],
    cta: { label: 'Initialize Dedicated', href: '/#contact' },
    featured: true,
  },
  {
    name: 'Enterprise',
    description: 'Air-gapped and on-premises deployments.',
    price: '250',
    features: ['Self-hosted on-prem', 'Edge embedding capabilities', 'Advanced audit logging'],
    cta: { label: 'Contact Enterprise', href: '/#contact' },
  },
];

/**
 * The canonical landing-page treatment: own section heading, three plans, and the
 * featured middle card with its badge straddling the top edge.
 */
export function Default() {
  return (
    <PricingTableCompact
      title="Billing logic. No surprises."
      description="Low barrier to entry. Revenue scales with your actual infrastructure usage."
      tiers={TIERS}
    />
  );
}

/**
 * `Default` on the sheet ground. Identical props and classes — only `ground` differs,
 * because every token rebinds underneath.
 *
 * The band paints `bg-surface`, which on sheet goes *lighter* than the canvas rather
 * than darker, so this is the cell that shows the section still separates from the
 * page. It is also where the featured card's floating badge gets checked: the badge
 * sits on a solid olive-to-orange gradient, so it needs a paired ink to survive here.
 */
export function OnSheet() {
  return (
    <Surface ground="sheet" tone="canvas" className="p-8">
      <PricingTableCompact
        title="Billing logic. No surprises."
        description="Low barrier to entry. Revenue scales with your actual infrastructure usage."
        tiers={TIERS}
      />
    </Surface>
  );
}

/**
 * No `title`, so the whole header block is omitted and the grid starts at the top
 * of the band — the shape used when a surrounding section already has a heading.
 */
export function WithoutHeader() {
  return <PricingTableCompact tiers={TIERS} />;
}

/**
 * No featured tier: three even cards, no floating badge, no gradient. This is the
 * variant axis — it shows how much the featured flag alone changes the grid.
 */
export function NoFeaturedTier() {
  return (
    <PricingTableCompact
      title="Pay for protection, not features."
      description="Transparent infrastructure plus outcome-based value."
      tiers={TIERS.map((tier) => ({ ...tier, featured: false }))}
    />
  );
}

/**
 * Every label the component hardcoded in English overridden for the `fr` build,
 * with a euro price and a localised period suffix.
 */
export function TranslatedAndRepriced() {
  return (
    <PricingTableCompact
      title="Une facturation lisible. Sans surprise."
      description="Un ticket d’entrée faible. Les coûts suivent votre usage réel de l’infrastructure."
      featuredLabel="Le plus populaire"
      currency="€"
      periodLabel="/mois"
      tiers={[
        {
          name: 'Lite',
          description: 'Automatisation essentielle, de 1 à 9 sièges.',
          price: '79',
          features: ['Nœud haute densité partagé', 'Workflows d’automatisation', 'Priorité de calcul standard'],
          cta: { label: 'Démarrer', href: '/fr/#contact' },
        },
        {
          name: 'Dedicated',
          description: 'Calcul souverain et inférence prioritaire dès 10 sièges.',
          price: '69',
          features: ['Calcul souverain dédié', 'Domaine personnalisé', 'Routage prioritaire'],
          cta: { label: 'Nous contacter', href: '/fr/#contact' },
          featured: true,
        },
        {
          name: 'Enterprise',
          description: 'Déploiements isolés et sur site.',
          price: '229',
          features: ['Hébergement sur site', 'Intégration en périphérie', 'Journalisation d’audit avancée'],
          cta: { label: 'Parler aux ventes', href: '/fr/#contact' },
        },
      ]}
    />
  );
}

/**
 * Two plans instead of three, with markedly uneven checklists — the edge case a
 * product page hits when only part of the range is on offer. The grid stays even
 * and the shorter card still stretches to the featured card's height.
 */
export function TwoPlansUnevenChecklists() {
  return (
    <PricingTableCompact
      title="Start lean, scale sovereign."
      tiers={[
        {
          name: 'Lite',
          description: 'Essential automation for 1 to 9 seats.',
          price: '86',
          features: ['Shared high-density node', 'Standard compute priority'],
          cta: { label: 'Start Lite', href: '/#contact' },
        },
        {
          name: 'Dedicated',
          description: 'Sovereign compute and priority inference from 10 seats.',
          price: '75',
          features: [
            'Dedicated sovereign compute',
            'Custom domain configuration',
            'Priority routing & inference',
            'Monthly or annual commitments',
            'Advanced audit logging',
          ],
          cta: { label: 'Initialize Dedicated', href: '/#contact' },
          featured: true,
        },
      ]}
    />
  );
}
