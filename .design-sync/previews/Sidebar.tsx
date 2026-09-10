import { useLayoutEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { Sidebar, type SidebarRecentPost } from '@runink/ui';

// Real featured images from `static/images/blog/`, IMPORTED rather than
// referenced by URL: the capture server serves only the bundle directory, so
// `/images/blog/…png` would 404, but the preview build gives `.png` imports the
// `dataurl` loader — so importing inlines the genuine artwork.
import bolThumb from '../../static/images/blog/bill-of-lading-header.png';
import telemetryThumb from '../../static/images/blog/telemetry-data-reconciliation-domain-modeling.png';

// The width the site gives the column: one third of a 12-column row.
const COLUMN = 340;

/**
 * Scales the column down when it is taller than the capture viewport, so the cell
 * shows the whole thing instead of a clipped top slice. The sidebar is a stack of
 * four panels and comfortably exceeds 700px; the factor is computed from the live
 * window, so it is 1 — no transform at all — once the card is given a taller
 * viewport.
 */
function FitHeight({ children, width }: { children: ReactNode; width: number }) {
  const inner = useRef<HTMLDivElement | null>(null);
  const [fit, setFit] = useState<{ scale: number; height: number } | null>(null);

  useLayoutEffect(() => {
    const el = inner.current;
    if (!el) return;
    const height = el.scrollHeight;
    const available = window.innerHeight - 80;
    setFit({ scale: height > available ? available / height : 1, height });
  }, []);

  return (
    <div style={fit ? { width: width * fit.scale, height: fit.height * fit.scale, overflow: 'hidden' } : undefined}>
      <div
        ref={inner}
        style={fit ? { width, transform: `scale(${fit.scale})`, transformOrigin: 'top left' } : { width }}
      >
        {children}
      </div>
    </div>
  );
}

// Titles, slugs and dates are the real front matter of `content/blog/*.md`.
const RECENT: SidebarRecentPost[] = [
  {
    title: 'Turning Noisy Fleet Telemetry into Actionable Dispatch Insights',
    href: '/blog/telemetry-data-reconciliation-domain-modeling',
    date: 'May 9, 2026',
    dateTime: '2026-05-09',
    image: telemetryThumb,
  },
  {
    title: 'The Bill of Lading: The Swiss Army Knife of Global Trade',
    href: '/blog/what-is-bill-of-lading',
    date: 'Apr 29, 2026',
    dateTime: '2026-04-29',
    image: bolThumb,
  },
  {
    title: 'Cold Chain Logistics — Why Temperature Excursions Cost More Than You Think',
    href: '/blog/cold-chain-logistics-temperature-control',
    date: 'Jun 9, 2026',
    dateTime: '2026-06-09',
  },
  {
    title: 'Demurrage and Detention Fees — The Silent Margin Killer',
    href: '/blog/demurrage-detention-fees-prevention',
    date: 'Jun 5, 2026',
    dateTime: '2026-06-05',
  },
];

// Taxonomy terms that really occur across the blog's front matter.
const CATEGORIES = [
  { label: 'Logistics AI', href: '/categories/logistics-ai', count: 12 },
  { label: 'Supply Chain', href: '/categories/supply-chain', count: 9 },
  { label: 'Cold Chain', href: '/categories/cold-chain', count: 5 },
  { label: 'Freight Finance', href: '/categories/freight-finance', count: 4 },
  { label: 'Maritime', href: '/categories/maritime', count: 3 },
];

const TAGS = [
  { label: 'data governance', href: '/tags/data-governance', count: 11 },
  { label: 'Runink', href: '/tags/runink', count: 9 },
  { label: 'data observability', href: '/tags/data-observability', count: 7 },
  { label: 'Container Tracking', href: '/tags/container-tracking', count: 6 },
  { label: 'Temperature Control', href: '/tags/temperature-control', count: 5 },
  { label: 'Agentic Decisions', href: '/tags/agentic-decisions', count: 5 },
  { label: 'Trade Finance', href: '/tags/trade-finance', count: 4 },
  { label: 'Runink FACE', href: '/tags/runink-face', count: 4 },
];

/**
 * Every block the blog index renders, in order: the subscribe panel, recent
 * articles (the first with its real featured image), the category pills and the
 * tag cloud. Held to the third-of-a-row width the site gives the column, because
 * every panel in it is tuned for that measure.
 */
export function FullColumn() {
  return (
    <FitHeight width={COLUMN}>
      <Sidebar
        subscribe={{
          title: 'Subscribe to Newsletter',
          description: 'Get the latest posts delivered right to your inbox',
        }}
        recent={RECENT}
        recentCount={1}
        categories={CATEGORIES.slice(0, 4)}
        tags={TAGS}
        tagsCount={6}
      />
    </FitHeight>
  );
}

/**
 * The minimal column a single post page uses — recent articles only, no
 * newsletter and no taxonomies. Every other block is dropped just by not passing
 * it, which is the component's whole composition story. Both thumbnails render,
 * so this is the cell that shows the aspect-video crop.
 */
export function RecentOnly() {
  return (
    <FitHeight width={COLUMN}>
      <Sidebar recent={RECENT} recentCount={2} />
    </FitHeight>
  );
}

/**
 * The two "count" knobs, matching the site's `recent.count` and `tags.count`
 * settings: `recentCount={3}` drops the fourth post and `tagsCount={5}` trims the
 * cloud, with both headings overridden. Note the third entry has no
 * `featured_image` and degrades to a text-only row.
 */
export function CappedAndRetitled() {
  return (
    <FitHeight width={COLUMN}>
      <Sidebar
        recent={RECENT}
        recentCount={3}
        recentTitle="Latest from the blog"
        tags={TAGS}
        tagsCount={5}
        tagsTitle="Most-read topics"
      />
    </FitHeight>
  );
}
