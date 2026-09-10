import { SidebarTags, Surface } from '@runink/ui';

const CLOUD = [
  { label: 'data governance', href: '/tags/data-governance', count: 12 },
  { label: 'supply chain automation', href: '/tags/supply-chain-automation', count: 9 },
  { label: 'logistics automation', href: '/tags/logistics-automation', count: 8 },
  { label: 'Model Context Protocol', href: '/tags/model-context-protocol', count: 6 },
  { label: 'cold chain', href: '/tags/cold-chain', count: 6 },
  { label: 'demand forecasting', href: '/tags/demand-forecasting', count: 5 },
  { label: 'route optimization', href: '/tags/route-optimization', count: 5 },
  { label: 'Runink FACE', href: '/tags/runink-face', count: 4 },
  { label: 'freight audit', href: '/tags/freight-audit', count: 4 },
  { label: 'reverse logistics', href: '/tags/reverse-logistics', count: 4 },
  { label: 'carrier scorecard', href: '/tags/carrier-scorecard', count: 3 },
  { label: 'port congestion', href: '/tags/port-congestion', count: 3 },
  { label: 'maritime law', href: '/tags/maritime-law', count: 3 },
  { label: 'data observability', href: '/tags/data-observability', count: 3 },
  { label: 'knowledge graph', href: '/tags/knowledge-graph', count: 2 },
  { label: 'emissions reduction', href: '/tags/emissions-reduction', count: 2 },
  { label: 'cross-docking', href: '/tags/cross-docking', count: 2 },
  { label: 'incoterms', href: '/tags/incoterms', count: 2 },
];

/** The canonical short cloud, as the component's own example shows it. */
export function Default() {
  return (
    <SidebarTags
      tags={[
        { label: 'data governance', href: '/tags/data-governance', count: 12 },
        { label: 'supply chain automation', href: '/tags/supply-chain-automation', count: 9 },
        { label: 'Model Context Protocol', href: '/tags/model-context-protocol', count: 6 },
        { label: 'Runink FACE', href: '/tags/runink-face', count: 4 },
      ]}
    />
  );
}

/**
 * The same composition on the sheet ground. Not one class differs from `Default` —
 * only `ground`, because every token rebinds underneath: the panel's
 * `bg-surface-raised` and `border-hairline`, the heading's `text-primary`, and the
 * `text-secondary` the tags and their counts share. Note the panel goes *darker*
 * than the canvas here and lighter on the console ground, which is why the tone is
 * named by role rather than by luminance.
 */
export function OnSheet() {
  return (
    <Surface ground="sheet" tone="canvas" className="p-8">
      <SidebarTags
        tags={[
          { label: 'data governance', href: '/tags/data-governance', count: 12 },
          { label: 'supply chain automation', href: '/tags/supply-chain-automation', count: 9 },
          { label: 'Model Context Protocol', href: '/tags/model-context-protocol', count: 6 },
          { label: 'Runink FACE', href: '/tags/runink-face', count: 4 },
        ]}
      />
    </Surface>
  );
}

/**
 * Eighteen tags drawn from the real `/blog` taxonomy, constrained to a sidebar
 * column — the density the cloud is actually designed for, and the reason these
 * are bare inline links rather than pills. This is the cell where the wrapping
 * and the muted count colour read.
 */
export function DenseCloud() {
  return (
    <div style={{ maxWidth: 320 }}>
      <SidebarTags tags={CLOUD} />
    </div>
  );
}

/**
 * The same list capped with `max={6}`, matching the partial's `count` param —
 * the variant a narrow sidebar column uses.
 */
export function CappedToSix() {
  return <SidebarTags title="Popular Tags" tags={CLOUD} max={6} />;
}

/**
 * A translated panel heading (the site ships `fr`/`es`/`pt`) and tags with no
 * counts, so the cloud scans as names only.
 */
export function TranslatedHeadingNoCounts() {
  return (
    <SidebarTags
      title="Mots-clés populaires"
      tags={[
        { label: 'gouvernance des données', href: '/fr/tags/gouvernance-des-donnees' },
        { label: 'chaîne du froid', href: '/fr/tags/chaine-du-froid' },
        { label: 'optimisation des tournées', href: '/fr/tags/optimisation-des-tournees' },
        { label: 'audit de fret', href: '/fr/tags/audit-de-fret' },
        { label: 'logistique inverse', href: '/fr/tags/logistique-inverse' },
      ]}
    />
  );
}

/**
 * Destinations run through `safeHref`. The `javascript:` tag still renders — the
 * cloud stays complete — but as static text rather than a link.
 */
export function UnsafeHrefDegrades() {
  return (
    <SidebarTags
      title="Popular Tags"
      tags={[
        { label: 'data governance', href: '/tags/data-governance', count: 12 },
        { label: 'container tracking', href: 'javascript:alert(1)', count: 7 },
        { label: 'Runink FACE', href: '/tags/runink-face', count: 4 },
      ]}
    />
  );
}
