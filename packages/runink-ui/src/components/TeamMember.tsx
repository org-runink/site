import { useState } from 'react';
import { cx } from '../lib/cx';
import { initialsOf } from '../lib/initials';
import { safeHref } from '../lib/safeHref';

export interface TeamMemberProps {
  /** Person's full name, shown as the heading. */
  name: string;
  /**
   * Job title shown under the name. (The Hugo shortcode calls this param
   * `title`; it is `role` here so it never reads as the card's heading.)
   */
  role: string;
  /**
   * Portrait URL. Cropped square with `object-cover`. Omit it — or point it at
   * something that fails to load — and the card falls back to the person's
   * initials instead of a broken image.
   */
  image?: string;
  /**
   * Alt text for the portrait. Defaults to `name`, which is the right answer
   * for a portrait; override it when the image shows more than the person.
   */
  imageAlt?: string;
  /**
   * LinkedIn profile URL. Renders the badge pinned to the portrait's corner —
   * only when the URL survives `safeHref`, so a script-bearing value suppresses
   * the badge rather than rendering a dead one.
   */
  linkedinUrl?: string;
  className?: string;
}

/**
 * A person card for an about/company page: square portrait, name, job title.
 *
 * Fixed at `w-64` and centre-aligned, so a team grid is just a `flex flex-wrap`
 * or `grid` of these with a gap — the card does not stretch. The portrait frame
 * is `aspect-square` with `overflow-hidden`, which is what lets the optional
 * LinkedIn badge sit absolutely in its bottom-right corner.
 *
 * Sits on `Surface` tone `canvas` or `raised`; the portrait's fallback paints
 * its own `primary-800` panel.
 *
 * **Never renders a broken image.** With no `image`, or if the portrait fails to
 * load, it draws the person's initials on that panel (and a neutral silhouette
 * if the name yields no initials), so a statically screenshotted card always
 * reads as a portrait frame.
 *
 * @example
 * <TeamMember
 *   name="Ana Paes"
 *   role="Lead Data & Cloud Architect"
 *   image="/images/team/ana-paes.jpg"
 *   linkedinUrl="https://www.linkedin.com/company/runink"
 * />
 */
export function TeamMember({ name, role, image, imageAlt, linkedinUrl, className }: TeamMemberProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = Boolean(image) && !imageFailed;
  const initials = initialsOf(name);
  const profileUrl = safeHref(linkedinUrl);

  return (
    <div className={cx('w-64 text-center', className)}>
      <div className="relative mb-4 aspect-square overflow-hidden rounded-card">
        {showImage ? (
          <img
            src={image}
            alt={imageAlt ?? name}
            loading="lazy"
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-primary-800">
            {initials ? (
              <span aria-hidden="true" className="text-4xl font-bold tracking-wide text-primary-400">
                {initials}
              </span>
            ) : (
              <svg className="h-20 w-20 text-primary-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 14c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6zm0 2c-4 0-12 2-12 6v2h24v-2c0-4-8-6-12-6z" />
              </svg>
            )}
          </div>
        )}
        {profileUrl && (
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-2 right-2 rounded-full bg-primary-900 p-2 shadow-md transition-shadow hover:shadow-lg"
          >
            <svg className="h-5 w-5 text-secondary-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            <span className="sr-only">{`${name} on LinkedIn`}</span>
          </a>
        )}
      </div>
      <h3 className="mb-1 text-xl font-bold text-white">{name}</h3>
      <p className="text-primary-300">{role}</p>
    </div>
  );
}
