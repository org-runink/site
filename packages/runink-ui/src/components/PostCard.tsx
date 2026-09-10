import { useState } from 'react';
import type { HTMLAttributes } from 'react';
import { cx } from '../lib/cx';
import { safeHref } from '../lib/safeHref';

export interface PostCardProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  /** Post title, the card's heading. */
  title: string;
  /** Where the card links — the post's permalink. Omit for an unlinked card. */
  href?: string;
  /**
   * The post's `description` front matter: the one-paragraph pitch under the
   * title. Falls back to `summary` when absent, as the Hugo partial did.
   */
  description?: string;
  /** Auto-generated excerpt, used only when `description` is missing. */
  summary?: string;
  /** Cover image URL (`featured_image`), cropped into a 14rem-tall banner. */
  image?: string;
  /** Alt text for the cover image. Defaults to `title`. */
  imageAlt?: string;
  /**
   * The publication date **as display text**, e.g. `"June 5, 2026"`. Hugo
   * formatted this per language; React takes it formatted so the caller owns
   * locale. Omit to drop the date row.
   */
  date?: string;
  /**
   * Machine-readable date for the `<time datetime>` attribute, `YYYY-MM-DD`.
   * Without it the date renders as plain text rather than a `<time>`.
   */
  dateTime?: string;
  /**
   * Categories (or tags) from front matter. **Only the first is rendered**, as
   * the gradient badge above the date — same as Hugo's `range first 1`.
   */
  categories?: string[];
  /** Whole minutes to read, from Hugo's `.ReadingTime`. Omit to drop it. */
  readingTime?: number;
  /** Footer link label. Defaults to `"Read Article"`. */
  readMoreLabel?: string;
  /** Suffix after the reading time. Defaults to `"min read"`. */
  readingTimeLabel?: string;
}

/**
 * A blog post teaser: cover banner, category badge, date, title, excerpt, and a read-more footer.
 *
 * The unit of the `/blog` index — drop a list of these into a responsive grid and
 * the layout is done. The `group` class on the root `<article>` is load-bearing:
 * the cover image scales, the title and the read-more link shift to
 * `secondary-500`, and the arrow slides right, all from the card's hover state.
 * The root is a flex column with `h-full` so the footer rule pins to the bottom
 * and a row of cards of unequal copy length still aligns (the Hugo markup put
 * `h-full` on the inner body, where it had nothing to measure against).
 *
 * Sits on `Surface` tone `canvas`; it paints its own opaque `primary-800` panel.
 *
 * **Never renders a broken image.** With no `image` there is no banner at all,
 * exactly as Hugo's `with .Params.featured_image` behaved; if a supplied image
 * fails to load, the banner keeps its height and fills with the house gradient so
 * the card does not reflow mid-render.
 *
 * `href` runs through `safeHref` — a script-bearing permalink degrades to a
 * static, unlinked card rather than becoming a clickable payload.
 *
 * @example
 * <PostCard
 *   title="Demurrage and Detention Fees — The Silent Margin Killer and How to Fight Back"
 *   href="/blog/demurrage-detention-fees-prevention/"
 *   description="Demurrage and detention fees drain $5B+ annually from global supply chains. Learn how AI-driven container visibility and automated dispute resolution cut costs by 40-60%."
 *   image="/images/blog/demurrage-detention-fees-prevention-header.png"
 *   categories={['Freight Finance', 'Maritime Logistics']}
 *   date="June 5, 2026"
 *   dateTime="2026-06-05"
 *   readingTime={9}
 * />
 */
export function PostCard({
  title,
  href,
  description,
  summary,
  image,
  imageAlt,
  date,
  dateTime,
  categories = [],
  readingTime,
  readMoreLabel = 'Read Article',
  readingTimeLabel = 'min read',
  className,
  ...rest
}: PostCardProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const url = safeHref(href);
  const excerpt = description ?? summary;
  const category = categories[0];

  return (
    <article
      className={cx(
        'group flex h-full flex-col overflow-hidden rounded-2xl border border-primary-700 bg-primary-800 shadow-lg transition-all duration-300',
        'hover:-translate-y-1 hover:border-secondary-500/50 hover:shadow-2xl hover:shadow-secondary-500/10',
        className,
      )}
      {...rest}
    >
      {image &&
        (imageFailed ? (
          // The cover was meant to be here: hold the banner's height with the
          // house gradient rather than collapsing the card after paint.
          <div
            aria-hidden="true"
            className="h-56 w-full shrink-0 bg-gradient-to-br from-primary-900 via-primary-800 to-brand-ink"
          />
        ) : (
          <ImageBanner src={image} alt={imageAlt ?? title} href={url} onFail={() => setImageFailed(true)} />
        ))}

      <div className="flex flex-1 flex-col p-6">
        {category && (
          <div className="mb-4">
            <span className="inline-block rounded-full bg-gradient-to-r from-secondary-500 to-brand-tan px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
              {category}
            </span>
          </div>
        )}

        {date && (
          <div className="mb-3 flex items-center text-xs font-medium tracking-wide text-brand-paper">
            <svg
              className="mr-1.5 h-4 w-4 opacity-70"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {dateTime ? <time dateTime={dateTime}>{date}</time> : <span>{date}</span>}
          </div>
        )}

        <h2 className="mb-3 text-xl font-bold leading-tight text-white transition-colors duration-200 group-hover:text-secondary-500 md:text-2xl">
          {url ? <a href={url}>{title}</a> : title}
        </h2>

        {excerpt && <p className="mb-6 text-sm leading-relaxed text-slate-400 md:text-base">{excerpt}</p>}

        <div className="mt-auto flex items-center justify-between border-t border-primary-700/50 pt-6">
          {url ? (
            <a
              href={url}
              className="inline-flex items-center text-sm font-bold text-white transition-colors group-hover:text-secondary-500"
            >
              {readMoreLabel}
              <svg
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          ) : (
            <span />
          )}

          {readingTime !== undefined && (
            <span className="text-xs font-medium text-slate-500">
              {readingTime} {readingTimeLabel}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

/** The cover banner, linked to the post when the permalink survived `safeHref`. */
function ImageBanner({
  src,
  alt,
  href,
  onFail,
}: {
  src: string;
  alt: string;
  href?: string;
  onFail: () => void;
}) {
  const img = (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={onFail}
      className="h-full w-full transform object-cover transition-transform duration-500 group-hover:scale-105"
    />
  );
  if (href) {
    return (
      <a href={href} className="relative block h-56 w-full shrink-0 overflow-hidden">
        {img}
      </a>
    );
  }
  return <div className="relative h-56 w-full shrink-0 overflow-hidden">{img}</div>;
}
