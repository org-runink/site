import { PostCard } from '@runink/ui';

/**
 * The canonical `/blog` teaser, from the front matter of
 * `content/blog/demurrage-detention-fees-prevention.md`. Only the first category
 * is drawn, as the gradient badge above the date. The cover is the post's real
 * `featured_image`, cropped into the 14rem banner.
 */
export function Default() {
  return (
    <PostCard
      title="Demurrage and Detention Fees — The Silent Margin Killer and How to Fight Back"
      href="/blog/demurrage-detention-fees-prevention/"
      description="Demurrage and detention fees drain $5B+ annually from global supply chains. Learn how AI-driven container visibility and automated dispute resolution cut costs by 40-60%."
      image="/images/blog/demurrage-detention-fees-prevention-header.png"
      categories={['Freight Finance', 'Maritime Logistics']}
      date="June 5, 2026"
      dateTime="2026-06-05"
      readingTime={9}
    />
  );
}

/**
 * No `image`, so there is no banner at all — the card starts at the category
 * badge. This is the variant that most changes the card's silhouette.
 */
export function WithoutCover() {
  return (
    <PostCard
      title="Why Data Governance Supercharges Operational ROI with Automated Dispatch Sourcing"
      href="/blog/data-governance-logistics-roi/"
      description="Discover how strong data governance enhances the ROI of operations in logistics — especially in Industry 4.0 use cases like automated routing and dispatch optimization."
      categories={['Data Governance']}
      date="April 6, 2026"
      dateTime="2026-04-06"
      readingTime={10}
    />
  );
}

/**
 * Three across, as the blog index renders them. Titles and excerpts are of very
 * different lengths, so this is the cell that proves `h-full` keeps the
 * read-more footer rules aligned across the row.
 */
export function InAGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      <PostCard
        title="Cold Chain Logistics — Why Temperature Excursions Cost More Than You Think"
        href="/blog/cold-chain-logistics-temperature-control/"
        description="Temperature excursions destroy product value and trigger regulatory violations. Learn how real-time IoT telemetry and AI-driven platforms cut cold chain spoilage by 25-40%."
        image="/images/blog/cold-chain-logistics-temperature-control-header.png"
        categories={['Cold Chain', 'Pharma Logistics']}
        date="June 9, 2026"
        dateTime="2026-06-09"
        readingTime={11}
      />
      <PostCard
        title="The Bill of Lading: The Swiss Army Knife of Global Trade"
        href="/blog/what-is-bill-of-lading/"
        description="Why one piece of paper rules the ocean. A deep dive into the legal functions of the Bill of Lading."
        image="/images/blog/bill-of-lading-header.png"
        categories={['Logistics Law', 'Supply Chain', 'Maritime']}
        date="April 29, 2026"
        dateTime="2026-04-29"
        readingTime={7}
      />
      <PostCard
        title="Last-Mile Delivery Optimization — Why It's the Most Expensive Part of Your Supply Chain"
        href="/blog/last-mile-delivery-optimization/"
        description="Last-mile delivery accounts for 53% of total shipping costs. Learn how dynamic routing, PUDO networks, and AI-powered prediction cut costs 20-30%."
        image="/images/blog/last-mile-delivery-optimization-header.png"
        categories={['Last-Mile Logistics', 'E-Commerce Operations']}
        date="April 27, 2026"
        dateTime="2026-04-27"
        readingTime={12}
      />
    </div>
  );
}

/**
 * No `description`, so the auto-generated `summary` is used instead — and no
 * `categories`, `dateTime` or `readingTime`, which is how older posts in the
 * corpus are shaped. The date renders as plain text rather than a `<time>`.
 */
export function SummaryFallback() {
  return (
    <PostCard
      title="Carrier Scorecards — How to Hold Your Transportation Partners Accountable with Data"
      href="/blog/carrier-scorecard-performance-management/"
      summary="Most shippers manage dozens of carriers without a structured evaluation framework. The result is that underperformers persist, top carriers are under-rewarded, and freight decisions are driven by relationships instead of results."
      date="February 27, 2026"
      readMoreLabel="Read the scorecard guide"
    />
  );
}

/**
 * A script-bearing permalink: the card renders whole but with no anchor at all,
 * rather than becoming a clickable payload.
 */
export function UnsafeHrefDegrades() {
  return (
    <PostCard
      title="Reverse Logistics and Returns Management — The Hidden Profit Leak in Your Supply Chain"
      href="javascript:alert(1)"
      description="Returns are not a cost center. Learn how data-driven reverse logistics recovers margin, improves OTIF, and turns e-commerce returns into a strategic advantage."
      categories={['Reverse Logistics', 'E-Commerce Operations']}
      date="April 25, 2026"
      dateTime="2026-04-25"
      readingTime={8}
    />
  );
}
