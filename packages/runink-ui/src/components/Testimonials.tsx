import { cx } from '../lib/cx';
import { Section } from './Section';
import { TestimonialCard, type TestimonialCardProps } from './TestimonialCard';

export interface TestimonialsProps {
  /**
   * The quotes to show. One `TestimonialCard` per entry — this is a **set**, not
   * a single testimonial. In Hugo these came from the page's `testimonials`
   * front-matter array, which the shortcode ranged over.
   */
  items: TestimonialCardProps[];
  /** Band heading. Defaults to the shortcode's own default. */
  title?: string;
  /** Supporting copy under the heading. Defaults to the shortcode's default. */
  description?: string;
  /**
   * Scroll the row as an infinite marquee (the shortcode's default). The list is
   * rendered twice so the loop is seamless, it pauses on hover, and it is
   * disabled outright for `prefers-reduced-motion`. Set `false` for a plain
   * static row.
   */
  animate?: boolean;
  /**
   * Override the band background with any CSS colour — applied inline, exactly
   * as the shortcode's `background-color` param did. Omit it for the default
   * `primary-950` canvas.
   */
  backgroundColor?: string;
  className?: string;
}

/** Width of one card in the marquee track, from the site's `.testimonial-card`. */
const CARD_WIDTH = 'w-[300px] flex-none';

/**
 * The marquee itself is the `animate-marquee` token — same name, same
 * 40s linear loop, same `-100%/2` translate the site's `main.css` uses — so the
 * track only needs a marker class for the rules below to hang off.
 */
const TRACK_CLASS = 'ri-testimonials-track';

/**
 * What the token cannot express. Tailwind has no `animation-play-state` utility, so
 * hover-to-pause has to be a descendant rule; the mobile speed-up and the
 * reduced-motion kill switch are media overrides of the token's own shorthand, and
 * are kept here so they land after it in the cascade regardless of utility order.
 */
const MARQUEE_CSS = `
.ri-testimonials-container:hover .${TRACK_CLASS}{animation-play-state:paused}
@media (max-width:768px){.${TRACK_CLASS}{animation-duration:15s}}
@media (prefers-reduced-motion:reduce){.${TRACK_CLASS}{animation:none}}
`;

/**
 * A full-width social-proof band: centred heading, then a scrolling row of quotes.
 *
 * This is a whole page section, not a card — wrap it in `Surface`, don't nest it
 * inside another `Section`. It paints its own `primary-950` background (or an
 * arbitrary `backgroundColor`) edge to edge and manages its own container.
 *
 * The row is a horizontal marquee: the track is a fixed-width flex row clipped by
 * `overflow-hidden`, and when `animate` is on the item list is rendered **twice**
 * so the translate loop never shows a seam (the duplicate pass is `aria-hidden`,
 * so assistive tech hears each quote once). It renders meaningfully frozen — the
 * first cards of the track are on screen at animation start, which is what a
 * static screenshot captures.
 *
 * @example
 * <Testimonials
 *   title="Trusted by operations teams"
 *   description="Why logistics and data leaders run Runink."
 *   items={[
 *     {
 *       name: 'Ana Paes',
 *       role: 'Lead Data & Cloud Architect',
 *       quote: 'Runink unified procurement through delivery in one ecosystem — our planners stopped maintaining pipelines and went back to strategy.',
 *       avatar: '/images/testimonials/ana-paes.jpg',
 *     },
 *     {
 *       name: 'Marco Silva',
 *       role: 'VP Supply Chain, Atlas Freight',
 *       quote: 'Every workflow learns, predicts and adapts. We cut operational drag without adding headcount.',
 *     },
 *   ]}
 * />
 */
export function Testimonials({
  items,
  title = 'Loved by Teams Worldwide',
  description = 'See what our customers have to say about their experience with our platform.',
  animate = true,
  backgroundColor,
  className,
}: TestimonialsProps) {
  const looping = animate && items.length > 0;

  return (
    <Section
      className={cx(!backgroundColor && 'bg-canvas', className)}
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <h2 className="mb-6 text-3xl font-bold text-primary md:text-4xl">{title}</h2>
        <p className="text-xl text-secondary">{description}</p>
      </div>

      <div className="ri-testimonials-container relative overflow-hidden py-5">
        {looping && <style>{MARQUEE_CSS}</style>}
        <div className={cx('flex gap-8', looping && `animate-marquee ${TRACK_CLASS}`)}>
          {items.map((item, index) => (
            <div key={`quote-${index}`} className={CARD_WIDTH}>
              <TestimonialCard {...item} />
            </div>
          ))}
          {looping &&
            items.map((item, index) => (
              <div key={`quote-loop-${index}`} className={CARD_WIDTH} aria-hidden="true">
                <TestimonialCard {...item} />
              </div>
            ))}
        </div>
      </div>
    </Section>
  );
}
