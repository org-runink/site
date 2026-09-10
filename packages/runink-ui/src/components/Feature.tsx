import { cx } from '../lib/cx';
import { safeHref } from '../lib/safeHref';
import { Button } from './Button';

/**
 * Accent for the feature's eyebrow pill. The Hugo shortcode took a free-form
 * `badgeColor` hex (defaulting to `#5573df`, which is `primary-500`); the port
 * fixes that to the brand accents so the glow can be token-driven.
 */
export type FeatureBadgeTone = 'primary' | 'sage' | 'green' | 'orange' | 'tan';

const BADGE_TONES: Record<FeatureBadgeTone, string> = {
  primary: 'bg-primary-500 text-white shadow-lg shadow-primary-500/50',
  sage: 'bg-brand-sage-dark text-brand-ink shadow-lg shadow-brand-sage-dark/50',
  green: 'bg-brand-green text-white shadow-neon-green',
  orange: 'bg-brand-orange text-white shadow-neon-orange',
  tan: 'bg-brand-tan text-brand-ink shadow-lg shadow-brand-tan/50',
};

export interface FeatureProps {
  /** Feature heading. */
  title: string;
  /** A paragraph of supporting copy under the heading. */
  description: string;
  /** Eyebrow pill above the heading. Omit it and no pill renders. */
  badge?: string;
  /** Accent for the pill and its glow. Defaults to `primary`. */
  badgeTone?: FeatureBadgeTone;
  /** Screenshot or illustration for the other half of the row. */
  image?: string;
  /** Alt text for `image`. Defaults to `title`, as the shortcode did. */
  imageAlt?: string;
  /**
   * Checked capability list between the copy and the button. The Hugo shortcode
   * took these as a comma-separated string; an array is the honest shape here.
   */
  features?: string[];
  /** Call-to-action label. Defaults to `Learn More`. */
  buttonText?: string;
  /** Call-to-action target. Defaults to `#`, which is also where a rejected URL lands. */
  buttonLink?: string;
  /**
   * Which half the image occupies. Defaults to `right`. Alternate it down a page
   * of features to get the zig-zag the site uses.
   */
  imagePosition?: 'left' | 'right';
  className?: string;
}

/**
 * A full-width feature row: copy column (pill, heading, checklist, CTA) beside an image.
 *
 * The workhorse of the long-scroll product pages, designed to be stacked inside
 * `FeaturesSection`, which supplies the generous `space-y-32` rhythm between
 * rows. Alternate `imagePosition` between consecutive rows for the zig-zag.
 *
 * Single column below `lg`, where the image always follows the copy regardless of
 * `imagePosition` — a left-hand image only makes sense once the row is two
 * columns wide.
 *
 * Paints no panel of its own, so it needs a dark `Surface` behind it.
 *
 * @example
 * <Feature
 *   badge="IoT-Edge Telemetry"
 *   badgeTone="sage"
 *   title="The Autonomous Cold Chain Guard"
 *   description="Static temperature monitors register failures after they occur. The Cold Chain Sentinel subscribes to live container telematics and reroutes cargo before it spoils."
 *   image="/images/face/posture.png"
 *   features={[
 *     'Real-time subscriptions to reefer telematics',
 *     'Predictive compressor degradation alerts',
 *     'Automatic reroute to alternative port power-plugs',
 *   ]}
 *   buttonText="Read the use case"
 *   buttonLink="/use-cases/cold-chain-safety/"
 *   imagePosition="left"
 * />
 */
export function Feature({
  title,
  description,
  badge,
  badgeTone = 'primary',
  image,
  imageAlt,
  features,
  buttonText = 'Learn More',
  buttonLink = '#',
  imagePosition = 'right',
  className,
}: FeatureProps) {
  const imageLeft = imagePosition === 'left';

  const picture = image ? (
    <div className={imageLeft ? 'order-2 lg:order-1' : undefined}>
      <img src={image} alt={imageAlt ?? title} className="w-full rounded-xl shadow-xl" />
    </div>
  ) : null;

  return (
    <div className={cx('grid items-center gap-12 lg:grid-cols-2', className)}>
      {imageLeft && picture}

      <div className={cx('space-y-6', imageLeft && 'order-1 lg:order-2')}>
        {badge && (
          <div
            className={cx('inline-block rounded-full px-4 py-2 font-medium', BADGE_TONES[badgeTone])}
          >
            {badge}
          </div>
        )}
        <h3 className="text-2xl font-bold text-white md:text-3xl">{title}</h3>
        <p className="text-lg text-primary-300">{description}</p>
        {features && features.length > 0 && (
          <ul className="space-y-4">
            {features.map((feature) => (
              <li key={feature} className="flex items-center space-x-3">
                <svg
                  className="h-5 w-5 flex-shrink-0 text-secondary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  />
                </svg>
                <span className="text-brand-paper">{feature}</span>
              </li>
            ))}
          </ul>
        )}
        <Button variant="secondary" href={safeHref(buttonLink) ?? '#'} className="rounded-full">
          {buttonText}
        </Button>
      </div>

      {!imageLeft && picture}
    </div>
  );
}
