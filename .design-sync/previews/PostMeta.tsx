import { PostMeta, Surface } from '@runink/ui';

/**
 * The canonical header strip of a single post page — byline left, reading time
 * and date right, tag pills beneath. Copy is the front matter of
 * `content/blog/cold-chain-logistics-temperature-control.md`.
 */
export function Default() {
  return (
    <PostMeta
      author="Runink Logistics Operations Team"
      date="June 9, 2026"
      dateTime="2026-06-09"
      readingTime={11}
      tags={[
        { label: 'Cold Chain', href: '/tags/cold-chain/' },
        { label: 'Temperature Control', href: '/tags/temperature-control/' },
        { label: 'Pharma Logistics', href: '/tags/pharma-logistics/' },
        { label: 'Food Safety', href: '/tags/food-safety/' },
        { label: 'IoT', href: '/tags/iot/' },
      ]}
    />
  );
}

/**
 * The same composition on the sheet ground. Not one class differs from `Default` —
 * only `ground`, because every token rebinds underneath: the meta row's
 * `text-secondary` and its three glyphs, which take `currentColor`, and the tag
 * pills' `bg-surface`. The component's own doc comment still claims it "needs a dark
 * canvas behind it"; this cell is the evidence that it no longer does.
 */
export function OnSheet() {
  return (
    <Surface ground="sheet" tone="canvas" className="p-8">
      <PostMeta
        author="Runink Logistics Operations Team"
        date="June 9, 2026"
        dateTime="2026-06-09"
        readingTime={11}
        tags={[
          { label: 'Cold Chain', href: '/tags/cold-chain/' },
          { label: 'Temperature Control', href: '/tags/temperature-control/' },
          { label: 'Pharma Logistics', href: '/tags/pharma-logistics/' },
          { label: 'Food Safety', href: '/tags/food-safety/' },
          { label: 'IoT', href: '/tags/iot/' },
        ]}
      />
    </Surface>
  );
}

/**
 * No `author`: the row is `justify-between`, so reading time and date sit flush
 * right on their own. This is the cell that proves the row does not collapse or
 * re-centre when the byline is dropped.
 */
export function WithoutByline() {
  return (
    <PostMeta
      date="June 5, 2026"
      dateTime="2026-06-05"
      readingTime={9}
      tags={[
        { label: 'Demurrage', href: '/tags/demurrage/' },
        { label: 'Container Tracking', href: '/tags/container-tracking/' },
        { label: 'Port Congestion', href: '/tags/port-congestion/' },
      ]}
    />
  );
}

/** Meta row only — the shape an untagged post renders, with no pill row at all. */
export function WithoutTags() {
  return (
    <PostMeta
      author="Runink Logistics Operations Team"
      date="April 29, 2026"
      dateTime="2026-04-29"
      readingTime={7}
    />
  );
}

/**
 * A heavily tagged post (the eleven tags on
 * `a2a-langchain-affordable-analytics.md`). The pill row is `flex-wrap`, so this
 * is where a long taxonomy would overflow the column if it were going to.
 */
export function ManyTags() {
  return (
    <PostMeta
      author="Runink Logistics Operations Team"
      date="May 20, 2026"
      dateTime="2026-05-20"
      readingTime={12}
      tags={[
        { label: 'A2A', href: '/tags/a2a/' },
        { label: 'integration', href: '/tags/integration/' },
        { label: 'analytics', href: '/tags/analytics/' },
        { label: 'open source', href: '/tags/open-source/' },
        { label: 'data protocol', href: '/tags/data-protocol/' },
        { label: 'data pipelines', href: '/tags/data-pipelines/' },
        { label: 'low-cost analytics', href: '/tags/low-cost-analytics/' },
        { label: 'modular workflows', href: '/tags/modular-workflows/' },
        { label: 'task orchestration', href: '/tags/task-orchestration/' },
        { label: 'sentiment analysis', href: '/tags/sentiment-analysis/' },
        { label: 'open standards', href: '/tags/open-standards/' },
      ]}
    />
  );
}

/**
 * Tag destinations run through `safeHref`. The unlinked tag here has no `href`
 * at all and the rejected one carries a `javascript:` URL — both stay in the row
 * as plain pills rather than becoming clickable payloads.
 */
export function UnsafeTagHrefDegrades() {
  return (
    <PostMeta
      author="Runink Logistics Operations Team"
      date="March 15, 2026"
      dateTime="2026-03-15"
      readingTime={8}
      tags={[
        { label: 'Freight Audit', href: '/tags/freight-audit/' },
        { label: 'Rate Validation' },
        { label: 'Cost Recovery', href: 'javascript:alert(1)' },
      ]}
    />
  );
}
