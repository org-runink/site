import { useState } from 'react';
import { cx } from '../lib/cx';
import { initialsOf } from '../lib/initials';

export interface TestimonialCardProps {
  /** The quote itself, without surrounding quotation marks. */
  quote: string;
  /** Who said it. */
  name: string;
  /** Their job title and company, shown under the name. */
  role: string;
  /**
   * Avatar URL, drawn as a 48px circle. Omit it — or point it at something that
   * fails to load — and the card falls back to the speaker's initials.
   */
  avatar?: string;
  /**
   * Alt text for the avatar. Defaults to `name`, which is correct for a
   * headshot.
   */
  avatarAlt?: string;
  className?: string;
}

/**
 * A single customer quote: circular avatar, attribution, then the quote.
 *
 * Ported from the site's `.testimonial-card` class, whose `bg-stone-900 /
 * border-stone-800` pair is expressed here in the system's own ramp
 * (`primary-900` panel, `secondary-500/30` border).
 *
 * Deliberately **width-agnostic** — it fills whatever box it is given and takes
 * `h-full` so a row of them in a grid lines up. `Testimonials` is what gives it
 * the fixed 300px track width for the marquee; don't bake a width in here.
 *
 * **Never renders a broken image.** Missing or failed avatars become the
 * speaker's initials in a neutral circle.
 *
 * @example
 * <TestimonialCard
 *   name="Ana Paes"
 *   role="Lead Data & Cloud Architect"
 *   quote="Runink connected every data signal from procurement to delivery — our planners stopped maintaining pipelines and went back to strategy."
 *   avatar="/images/testimonials/ana-paes.jpg"
 * />
 */
export function TestimonialCard({ quote, name, role, avatar, avatarAlt, className }: TestimonialCardProps) {
  const [avatarFailed, setAvatarFailed] = useState(false);
  const showAvatar = Boolean(avatar) && !avatarFailed;

  return (
    <div className={cx('h-full rounded-card border border-secondary-500/30 bg-primary-900 p-8', className)}>
      <div className="mb-6 flex items-center gap-4">
        {showAvatar ? (
          <img
            src={avatar}
            alt={avatarAlt ?? name}
            width={48}
            height={48}
            loading="lazy"
            onError={() => setAvatarFailed(true)}
            className="h-12 w-12 flex-none rounded-full object-cover"
          />
        ) : (
          <div
            aria-hidden="true"
            className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-primary-800 text-sm font-bold text-primary-300"
          >
            {initialsOf(name)}
          </div>
        )}
        <div>
          <h4 className="font-bold text-white">{name}</h4>
          <p className="text-primary-300">{role}</p>
        </div>
      </div>
      <p className="text-primary-300">{quote}</p>
    </div>
  );
}
