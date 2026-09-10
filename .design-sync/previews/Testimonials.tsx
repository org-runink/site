import { Testimonials } from '@runink/ui';
import type { TestimonialCardProps } from '@runink/ui';

/**
 * Headshot as an inline SVG data URI — the preview server only serves the design
 * bundle, so site-relative portraits would 404 into the initials fallback. Half the
 * set is deliberately left without one, which is what a real roster of quotes looks
 * like.
 */
const HEADSHOT =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" width="96" height="96">
      <defs><linearGradient id="t" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#4C7A5D"/><stop offset="1" stop-color="#1C1917"/>
      </linearGradient></defs>
      <rect width="96" height="96" fill="url(#t)"/>
      <circle cx="48" cy="38" r="17" fill="#D9CDB8" opacity=".9"/>
      <path d="M12 96c0-20 16-30 36-30s36 10 36 30z" fill="#D9CDB8" opacity=".9"/>
    </svg>`,
  );

const QUOTES: TestimonialCardProps[] = [
  {
    name: 'Ana Paes',
    role: 'Lead Data & Cloud Architect',
    quote:
      'Runink unified procurement through delivery in one ecosystem — our planners stopped maintaining pipelines and went back to strategy.',
    avatar: HEADSHOT,
  },
  {
    name: 'Marco Silva',
    role: 'VP Supply Chain, Atlas Freight',
    quote: 'Every workflow learns, predicts and adapts. We cut operational drag without adding headcount.',
  },
  {
    name: 'Priya Raghunathan',
    role: 'Head of Terminal Operations, Pune Hub',
    quote: 'The weighbridge audit drafts the amendment before the truck has left the scale.',
    avatar: HEADSHOT,
  },
  {
    name: 'Tobias Lindqvist',
    role: 'Director of Cold Chain, Nordkyl',
    quote: 'A reefer at 3.2°C is now a reroute, not a write-off. That single change paid for the pilot.',
  },
];

/**
 * The default band: the shortcode's own heading and standfirst, with the marquee on.
 * Frozen at animation start, which is what a static screenshot captures — the first
 * cards of the track are on screen and the list is rendered twice for a seamless loop.
 */
export function Default() {
  return <Testimonials items={QUOTES} />;
}

/**
 * `animate={false}` — a plain static row, no duplicate pass, no marquee token. The
 * guaranteed-still composition, and the cell to grade the band's spacing against.
 * Two quotes, because a static row cannot use the marquee's `overflow-hidden`
 * clip as an excuse for a card cut off at the container's edge.
 */
export function StaticRow() {
  return (
    <Testimonials
      animate={false}
      title="Trusted by operations teams"
      description="Why logistics and data leaders run Runink on their own infrastructure."
      items={QUOTES.slice(0, 2)}
    />
  );
}

/** Custom heading and standfirst over the animated default — the usual real-world call. */
export function CustomHeading() {
  return (
    <Testimonials
      title="Mitigating disruption in real time"
      description="Operators from cold chain, customs and reverse logistics on what changed after the twin went live."
      items={QUOTES}
    />
  );
}

/**
 * `backgroundColor` overriding the default `primary-950` canvas, applied inline
 * exactly as the shortcode's param did — the band's one colour axis.
 */
export function CustomBackground() {
  return (
    <Testimonials
      backgroundColor="#1C1917"
      animate={false}
      title="What changed after go-live"
      description="Three continents, one ecosystem."
      items={QUOTES.slice(0, 2)}
    />
  );
}

/**
 * A single quote with the marquee still on — the short-list edge. Two cards appear
 * because `animate` renders the list twice for a seamless loop; the second pass is
 * `aria-hidden`, so the quote is heard once and seen twice.
 */
export function SingleQuote() {
  return (
    <Testimonials
      title="One pilot, one number"
      description="The first deployment's own account of it."
      items={[QUOTES[0]]}
    />
  );
}
