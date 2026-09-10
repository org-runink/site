import type { HTMLAttributes } from 'react';
import { cx } from '../lib/cx';
import { Icon } from './Icon';

/**
 * Accent for the check tiles. The Hugo shortcode took a free-form `color` hex
 * defaulting to `#5F6F3E` — that is the `brand-green-dark` token, so `green`
 * is the default here.
 */
export type FeaturesListTone = 'green' | 'sage' | 'orange' | 'tan' | 'primary';

const TONES: Record<FeaturesListTone, string> = {
  green: 'bg-brand-green-dark/15 text-brand-green-dark',
  sage: 'bg-brand-sage-dark/15 text-brand-sage-dark',
  orange: 'bg-brand-orange/15 text-brand-orange',
  tan: 'bg-brand-tan/15 text-brand-tan',
  primary: 'bg-primary-500/15 text-primary-300',
};

export interface FeaturesListItem {
  /** Short label for the item. */
  title: string;
  /** A sentence or two expanding on it. */
  description: string;
}

export interface FeaturesListProps extends HTMLAttributes<HTMLDivElement> {
  /** Heading centred above the list. */
  title: string;
  /**
   * The list items. The shortcode took up to ten `feature1`…`feature10` params
   * each holding a `"Title|Description"` string; an array of objects is the
   * honest shape in React, and it is not capped at ten.
   */
  items: FeaturesListItem[];
  /** Accent for the check tiles. Defaults to `green`. */
  tone?: FeaturesListTone;
}

/**
 * A narrow, centred column of titled explanations, each led by a check tile.
 *
 * Editorial rather than promotional: one `max-w-3xl` column, no panels, no hover
 * states, wide `space-y-12` gaps. Reach for it when each point needs a couple of
 * sentences — a grid of `Card`s would crop the copy. Note the deliberately large
 * gap under the heading (`mb-24`), which is what makes the list read as a
 * document section rather than a widget.
 *
 * Assumes a dark `Surface` behind it; it paints no background of its own.
 *
 * @example
 * <FeaturesList
 *   title="What the Digital Twin gives you"
 *   tone="sage"
 *   items={[
 *     {
 *       title: 'Real-time visibility',
 *       description: 'Live logistics telemetry is ingested as it arrives, so the Twin reflects the yard as it is now — not as it was at the last dashboard refresh.',
 *     },
 *     {
 *       title: 'Predictive disruption analytics',
 *       description: 'Compressor degradation, weight variances and staging violations are caught before they become spoilage, fines or demurrage.',
 *     },
 *     {
 *       title: 'Autonomous resolution',
 *       description: 'The orchestration engine drafts the reroute, the amendment or the crane lock itself, and shows the operator the exact financial risk in play.',
 *     },
 *   ]}
 * />
 */
export function FeaturesList({ title, items, tone = 'green', className, ...rest }: FeaturesListProps) {
  return (
    <div className={cx('mx-auto max-w-3xl', className)} {...rest}>
      <h2 className="mb-24 text-center text-3xl font-bold text-white">{title}</h2>

      <div className="space-y-12">
        {items.map((item) => (
          <div key={item.title} className="flex gap-6">
            <div
              className={cx(
                'flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl',
                TONES[tone],
              )}
            >
              <Icon name="check" className="h-6 w-6" />
            </div>
            <div>
              <h3 className="mb-3 text-2xl font-bold text-white">{item.title}</h3>
              <p className="text-lg leading-relaxed text-primary-300">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
