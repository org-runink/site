import { TestimonialCard } from '@runink/ui';

/**
 * A headshot as an inline SVG data URI. The preview server only serves the design
 * bundle, so a site-relative `/images/testimonials/*.jpg` would 404 and every cell
 * would show initials — this keeps the real 48px `<img>` circle exercised where
 * the cell is about it.
 */
const HEADSHOT =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" width="96" height="96">
      <defs><linearGradient id="h" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#4C7A5D"/><stop offset="1" stop-color="#1C1917"/>
      </linearGradient></defs>
      <rect width="96" height="96" fill="url(#h)"/>
      <circle cx="48" cy="38" r="17" fill="#D9CDB8" opacity=".9"/>
      <path d="M12 96c0-20 16-30 36-30s36 10 36 30z" fill="#D9CDB8" opacity=".9"/>
    </svg>`,
  );

/** The canonical quote: avatar, attribution, then the quote itself. */
export function Default() {
  return (
    <TestimonialCard
      name="Ana Paes"
      role="Lead Data & Cloud Architect"
      quote="Runink connected every data signal from procurement to delivery — our planners stopped maintaining pipelines and went back to strategy."
      avatar={HEADSHOT}
    />
  );
}

/**
 * No avatar supplied — the card draws the speaker's initials in a neutral circle.
 * Real, intended behaviour: it never renders a broken image, which is what makes a
 * statically screenshotted marquee safe.
 */
export function InitialsFallback() {
  return (
    <TestimonialCard
      name="Marco Silva"
      role="VP Supply Chain, Atlas Freight"
      quote="Every workflow learns, predicts and adapts. We cut operational drag without adding headcount."
    />
  );
}

/**
 * The card is width-agnostic by design, so this is it inside the fixed 300px track
 * `Testimonials` gives it — the narrowest box it is ever asked to fill, and where
 * a baked-in width would show up.
 */
export function InTheMarqueeTrack() {
  return (
    <div className="flex gap-8">
      <div className="w-[300px] flex-none">
        <TestimonialCard
          name="Priya Raghunathan"
          role="Head of Terminal Operations, Pune Hub"
          quote="The weighbridge audit drafts the amendment before the truck has left the scale."
          avatar={HEADSHOT}
        />
      </div>
      <div className="w-[300px] flex-none">
        <TestimonialCard
          name="Tobias Lindqvist"
          role="Director of Cold Chain, Nordkyl"
          quote="A reefer at 3.2°C is now a reroute, not a write-off. That single change paid for the pilot."
        />
      </div>
    </div>
  );
}

/**
 * Three across with unequal quote lengths. The card takes `h-full`, so this cell is
 * where ragged heights would appear if it did not.
 */
export function InAGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      <TestimonialCard
        name="Helena Duarte"
        role="Customs Compliance Lead"
        quote="Zero holds in four months."
        avatar={HEADSHOT}
      />
      <TestimonialCard
        name="Yusuf Okonkwo"
        role="Reverse Logistics Lead"
        quote="Returns triage recovered $32,000 of margin in its first month and took 40% off processing time."
      />
      <TestimonialCard
        name="Claire Bennet"
        role="Dangerous Goods Lead"
        quote="Crane movement locks until the buffer is restored. Compliance stopped being a clipboard exercise and became part of the yard."
        avatar={HEADSHOT}
      />
    </div>
  );
}

/**
 * A long quote with a long role at full card width — the text-heavy end, which
 * proves the attribution block and the quote keep their rhythm rather than
 * crowding.
 */
export function LongQuote() {
  return (
    <TestimonialCard
      name="Anneke Vermeer"
      role="Group Director, Sales & Operations Planning"
      quote="We had real-time dashboards before and they still told us about yesterday. The difference here is that the twin acts: a temperature excursion, a weight variance, an incompatible HazMat staging — each one arrives as a drafted decision with the financial exposure already attached, and our operators accept or override it. That is the whole job."
      avatar={HEADSHOT}
    />
  );
}
