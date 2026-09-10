import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../lib/cx';
import { safeHref } from '../lib/safeHref';

export interface SidebarTag {
  /** Tag name, rendered after a `#` — pass it unprefixed ("data governance"). */
  label: string;
  /** Destination for the tag's taxonomy page, e.g. `/tags/data-governance`. */
  href?: string;
  /** How many posts carry the tag. Omit to render the tag without a count. */
  count?: number;
}

export interface SidebarTagsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Panel heading. Defaults to "Popular Tags". */
  title?: ReactNode;
  /** The tag cloud, in the order it should read — the site sorts by count, descending. */
  tags: SidebarTag[];
  /**
   * Cap on how many tags are drawn, matching the partial's `count` param.
   * Defaults to 20. Pass `Infinity` to render every tag given.
   */
  max?: number;
  className?: string;
}

/**
 * The blog sidebar's tag cloud — a dense, wrapping run of `#tag (count)` links.
 *
 * Deliberately *not* pill-shaped: unlike the category list these are bare inline
 * links, so two dozen of them can sit in a sidebar column without turning into a
 * wall of chips. The count is muted a step below the tag itself (`primary-600`
 * against `primary-400`) so the cloud scans as names first, weights second.
 *
 * Paints its own opaque `primary-800` panel, so it wants a darker surface behind
 * it — `Surface` tone `canvas` or `raised`. Used standalone or as the last block
 * of `Sidebar`, which renders it for you when given `tags`.
 *
 * A tag whose `href` is rejected by `safeHref` still renders, as static text
 * rather than a link — the cloud stays complete and nothing becomes clickable
 * that should not be.
 *
 * @example
 * <SidebarTags
 *   title="Popular Tags"
 *   tags={[
 *     { label: 'data governance', href: '/tags/data-governance', count: 12 },
 *     { label: 'supply chain automation', href: '/tags/supply-chain-automation', count: 9 },
 *     { label: 'Model Context Protocol', href: '/tags/model-context-protocol', count: 6 },
 *     { label: 'Runink FACE', href: '/tags/runink-face', count: 4 },
 *   ]}
 * />
 */
export function SidebarTags({ title = 'Popular Tags', tags, max = 20, className, ...rest }: SidebarTagsProps) {
  const shown = Number.isFinite(max) ? tags.slice(0, Math.max(0, max)) : tags;
  if (shown.length === 0) return null;

  return (
    <div
      className={cx(
        'rounded-card border border-hairline bg-surface-raised p-6 shadow-xl ',
        className,
      )}
      {...rest}
    >
      {title && <h3 className="mb-4 text-lg font-bold text-primary">{title}</h3>}
      <div className="flex flex-wrap gap-2">
        {shown.map((tag) => {
          const url = safeHref(tag.href);
          const body = (
            <>
              #{tag.label}
              {tag.count !== undefined && <span className="text-secondary"> ({tag.count})</span>}
            </>
          );
          return url ? (
            <a
              key={tag.label}
              href={url}
              className="text-sm text-secondary transition-colors duration-200 hover:text-ink-accent"
            >
              {body}
            </a>
          ) : (
            <span key={tag.label} className="text-sm text-secondary">
              {body}
            </span>
          );
        })}
      </div>
    </div>
  );
}
