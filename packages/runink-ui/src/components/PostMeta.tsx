import type { HTMLAttributes } from 'react';
import { cx } from '../lib/cx';
import { safeHref } from '../lib/safeHref';

export interface PostMetaTag {
  /** The tag as written in the post's front matter, e.g. `"Cold Chain"`. */
  label: string;
  /**
   * Where the tag points — the tag listing page. Hugo built this as
   * `/tags/<urlized label>`; React takes the finished URL so routing stays the
   * caller's decision. Omit it (or pass something `safeHref` rejects) and the tag
   * renders as a non-interactive pill instead of a dead link.
   */
  href?: string;
}

export interface PostMetaProps extends HTMLAttributes<HTMLDivElement> {
  /** Byline, from the post's `author` front matter. Omit to drop the byline. */
  author?: string;
  /** Whole minutes to read, from Hugo's `.ReadingTime`. Omit to drop the item. */
  readingTime?: number;
  /**
   * The publication date **as display text**, e.g. `"April 29, 2026"`. Hugo
   * formatted this per language; React takes it formatted so the caller owns
   * locale. Omit to drop the item.
   */
  date?: string;
  /**
   * Machine-readable date for the `<time datetime>` attribute, `YYYY-MM-DD`.
   * Without it the date is rendered as plain text rather than a `<time>`.
   */
  dateTime?: string;
  /** Tag pills under the meta row. Omit or pass `[]` to drop the row. */
  tags?: PostMetaTag[];
  /** Suffix after the reading time. Defaults to `"min read"`. */
  readingTimeLabel?: string;
}

/** Person glyph for the byline. */
function UserIcon() {
  return (
    <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  );
}

/** Open-book glyph for the reading time. */
function BookIcon() {
  return (
    <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    </svg>
  );
}

/** Calendar glyph for the publication date. */
function CalendarIcon() {
  return (
    <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );
}

/**
 * The byline row for a blog post: author on the left, reading time and date on the right, tag pills beneath.
 *
 * This is the header strip of a single post page — it sits directly under the
 * post title, above the cover image. The row is `justify-between`, so with no
 * `author` the reading time and date sit flush right on their own, exactly as the
 * Hugo partial behaved.
 *
 * Inherits body text colour from `Surface`; it paints only its own muted
 * `primary-400` meta text and `primary-900` tag pills, so it needs a dark canvas
 * behind it.
 *
 * Tag links go through `safeHref`: a script-bearing destination degrades to a
 * plain pill rather than becoming a clickable payload.
 *
 * Deliberately **not** composed into `PostCard`. The two Hugo partials look
 * related but share no markup — the card has no byline and no tag row, shows one
 * category as a gradient badge instead, and splits date and reading time across
 * two different blocks at two different sizes. Only the calendar glyph is common,
 * so composing would mean a prop for every difference.
 *
 * @example
 * <PostMeta
 *   author="Runink Logistics Operations Team"
 *   date="June 9, 2026"
 *   dateTime="2026-06-09"
 *   readingTime={11}
 *   tags={[
 *     { label: 'Cold Chain', href: '/tags/cold-chain/' },
 *     { label: 'Temperature Control', href: '/tags/temperature-control/' },
 *     { label: 'IoT', href: '/tags/iot/' },
 *   ]}
 * />
 */
export function PostMeta({
  author,
  readingTime,
  date,
  dateTime,
  tags = [],
  readingTimeLabel = 'min read',
  className,
  ...rest
}: PostMetaProps) {
  const hasRow = Boolean(author) || readingTime !== undefined || Boolean(date);

  return (
    <div className={cx('flex flex-col space-y-4', className)} {...rest}>
      {hasRow && (
        <div className="flex items-center justify-between text-sm text-primary-400">
          {author && (
            <div className="flex items-center">
              <UserIcon />
              <span>{author}</span>
            </div>
          )}

          <div className="flex items-center space-x-6">
            {readingTime !== undefined && (
              <div className="flex items-center">
                <BookIcon />
                <span>
                  {readingTime} {readingTimeLabel}
                </span>
              </div>
            )}

            {date && (
              <div className="flex items-center">
                <CalendarIcon />
                {dateTime ? <time dateTime={dateTime}>{date}</time> : <span>{date}</span>}
              </div>
            )}
          </div>
        </div>
      )}

      {tags.length > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          {tags.map((tag) => {
            const href = safeHref(tag.href);
            const pill = 'rounded-full bg-primary-900 px-3 py-1 text-sm text-primary-300';
            return href ? (
              <a key={tag.label} href={href} className={cx(pill, 'transition-colors duration-200 hover:bg-primary-800')}>
                #{tag.label}
              </a>
            ) : (
              <span key={tag.label} className={pill}>
                #{tag.label}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}
