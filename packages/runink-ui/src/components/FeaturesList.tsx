import type { HTMLAttributes } from 'react';
import { cx } from '../lib/cx';
import { Icon } from './Icon';

/**
 * Accent for the check tiles. The Hugo shortcode took a free-form `color` hex
 * defaulting to `#5F6F3E`, the port's dark brand green; the palette has exactly one
 * olive fill, so `green` is the default here.
 *
 * Five rungs on three hues: `green` is the full-strength olive and `sage` the wash
 * above it; `orange` is the bright accent wash and `tan` the muted deep one; and
 * `primary` is the neutral rung, for a list that should not pick up a hue at all.
 */
export type FeaturesListTone = 'green' | 'sage' | 'orange' | 'tan' | 'primary';

/*
 * Each tone has to land on its OWN colour — the tile is a 40px swatch and a tick,
 * so it is all a reader has to tell two tones apart. Three pairs had collapsed:
 *
 *   - `green`/`sage` were the same wash and ink. Split by rung, the way the
 *     palette's one olive ink and one olive fill allow: `green` is the solid fill,
 *     which is where `remap.json` sends the retired `bg-brand-green`, and takes `on-success` because a
 *     solid fill carries its paired ink. `sage` keeps the 15% wash, the pairing
 *     `Badge` and `BenefitsGrid` also give `sage`.
 *   - `orange`/`tan` both ticked `ink-accent`. Only the ground differed, and a
 *     ground at 15% barely carries a hue, so `tan` takes a neutral tick.
 *   - `primary` was an accent ground under a MUTED ink, which is what made it read
 *     as a disabled `orange` rather than as a tone. It is the neutral rung: a
 *     neutral ground and full-strength ink.
 */
const TONES: Record<FeaturesListTone, string> = {
  green: 'bg-fill-success text-on-success',
  sage: 'bg-fill-success-wash text-ink-success',
  orange: 'bg-fill-accent-wash text-ink-accent',
  tan: 'bg-fill-accent-deep-wash text-primary',
  primary: 'bg-surface-well text-primary',
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
 * Assumes a `Surface` behind it; it paints no background of its own, so it inherits
 * whichever ground the subtree is on.
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
      <h2 className="mb-24 text-center text-3xl font-bold text-primary">{title}</h2>

      <div className="space-y-12">
        {items.map((item) => (
          <div key={item.title} className="flex gap-6">
            <div
              className={cx(
                'flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-chip',
                TONES[tone],
              )}
            >
              <Icon name="check" className="h-6 w-6" />
            </div>
            <div>
              <h3 className="mb-3 text-2xl font-bold text-primary">{item.title}</h3>
              <p className="text-lg leading-relaxed text-secondary">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
