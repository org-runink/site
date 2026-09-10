import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../lib/cx';
import { safeHref } from '../lib/safeHref';
import { SubscribeForm, type SubscribeFormProps } from './SubscribeForm';
import { SidebarTags, type SidebarTag } from './SidebarTags';

export interface SidebarRecentPost {
  /** Post title. Clamped to two lines in the sidebar. */
  title: string;
  /** Link to the post, e.g. `/blog/data-governance-logistics-roi`. */
  href?: string;
  /** Date as it should read, e.g. "Jun 6, 2026" — the site's `Jan 2, 2006` format. */
  date?: string;
  /** Machine-readable date for `<time datetime>`, e.g. "2026-06-06". Falls back to `date`. */
  dateTime?: string;
  /** Thumbnail, the post's `featured_image`. Omit for a text-only entry. */
  image?: string;
  /** Alt text for the thumbnail. Defaults to the post title. */
  imageAlt?: string;
}

export interface SidebarCategory {
  /** Category name, e.g. "Logistics". */
  label: string;
  /** Link to the category's taxonomy page, e.g. `/categories/logistics`. */
  href?: string;
  /** How many posts are in the category. Omit to render the pill without a count. */
  count?: number;
}

export interface SidebarProps extends HTMLAttributes<HTMLElement> {
  /**
   * Newsletter panel at the top of the column. Props are handed straight to
   * `SubscribeForm`; pass `{}` for its defaults, omit the prop to drop the block
   * (the site's `blog.sidebar.subscribe.enable` switch).
   */
  subscribe?: SubscribeFormProps;
  /** Recent posts block. Omit or pass an empty array to drop the block. */
  recent?: SidebarRecentPost[];
  /** Heading over the recent posts. Defaults to "Recent Articles". */
  recentTitle?: ReactNode;
  /** Cap on recent posts drawn, matching the site's `recent.count`. Defaults to 5. */
  recentCount?: number;
  /** Category pills block. Omit or pass an empty array to drop the block. */
  categories?: SidebarCategory[];
  /** Heading over the categories. Defaults to "Categories". */
  categoriesTitle?: ReactNode;
  /** Tag cloud, rendered through `SidebarTags`. Omit to drop the block. */
  tags?: SidebarTag[];
  /** Heading over the tag cloud. Defaults to "Popular Tags". */
  tagsTitle?: ReactNode;
  /** Cap on tags drawn, matching the site's `tags.count`. Defaults to 20. */
  tagsCount?: number;
  /** Extra blocks appended below the tag cloud — a related-posts panel, an ad slot. */
  children?: ReactNode;
  className?: string;
}

const PANEL = 'rounded-card border border-hairline bg-surface-raised p-6 shadow-xl ';

/**
 * The blog and docs sidebar column: subscribe panel, recent posts, categories, tags.
 *
 * A composition, not a layout: every block is independently optional and the
 * whole column is just `space-y-8`, so the caller decides the order of the page
 * by what it passes rather than by configuration. It renders nothing at all when
 * given no content, which is the sensible behaviour on a page with no taxonomies.
 *
 * Drop it in a narrow grid column beside the article (the site uses one third of
 * a 12-column row) on a `Surface` of tone `canvas` or `raised` — each block
 * paints its own opaque `primary-800` panel and needs something darker behind it.
 *
 * The subscribe block is `SubscribeForm` and the tag cloud is `SidebarTags`; both
 * are re-exported through their own props here, so anything they accept works
 * from the sidebar. The recent-posts panel carries the column's one hover
 * flourish: a named `group/sidebar` that fades in an accent wash, plus
 * a per-entry `group` that tints the title and scales the thumbnail. Both group
 * classes are load-bearing.
 *
 * Every `href` goes through `safeHref`; a rejected destination degrades to static
 * text so the column never loses an entry.
 *
 * @example
 * <Sidebar
 *   subscribe={{
 *     title: 'Subscribe to Newsletter',
 *     description: 'Get the latest posts delivered right to your inbox',
 *     action: 'https://formspree.io/f/your-form-id',
 *     disclaimer: 'We respect your privacy. Unsubscribe at any time.',
 *   }}
 *   recent={[
 *     {
 *       title: 'Overcoming Data Silos for Complete Global Freight Visibility',
 *       href: '/blog/automated-semantic-layer-data-observability',
 *       date: 'Feb 21, 2026',
 *       dateTime: '2026-02-21',
 *       image: '/images/blog/automated-semantic-layer-data-observability.png',
 *     },
 *     {
 *       title: 'How AI Agents Drive Cost-Effective Supply Chain Operations',
 *       href: '/blog/a2a-langchain-affordable-analytics',
 *       date: 'May 20, 2026',
 *       dateTime: '2026-05-20',
 *     },
 *   ]}
 *   categories={[
 *     { label: 'Logistics', href: '/categories/logistics', count: 18 },
 *     { label: 'Data Governance', href: '/categories/data-governance', count: 7 },
 *   ]}
 *   tags={[
 *     { label: 'supply chain automation', href: '/tags/supply-chain-automation', count: 9 },
 *     { label: 'Runink FACE', href: '/tags/runink-face', count: 4 },
 *   ]}
 * />
 */
export function Sidebar({
  subscribe,
  recent,
  recentTitle = 'Recent Articles',
  recentCount = 5,
  categories,
  categoriesTitle = 'Categories',
  tags,
  tagsTitle,
  tagsCount,
  children,
  className,
  ...rest
}: SidebarProps) {
  const posts = (recent ?? []).slice(0, Math.max(0, recentCount));
  const cats = categories ?? [];
  const hasTags = (tags?.length ?? 0) > 0;

  if (!subscribe && posts.length === 0 && cats.length === 0 && !hasTags && !children) return null;

  return (
    <aside className={cx('space-y-8', className)} {...rest}>
      {subscribe && <SubscribeForm {...subscribe} />}

      {posts.length > 0 && (
        <div className={cx(PANEL, 'group/sidebar relative overflow-hidden')}>
          {/* Glow: fades in across the whole panel on hover, never intercepts clicks. */}
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/sidebar:opacity-100">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-lift/5 via-transparent to-fill-accent/5" />
          </div>

          {recentTitle && <h3 className="relative z-10 mb-4 text-lg font-bold text-primary">{recentTitle}</h3>}
          <div className="relative z-10 space-y-4">
            {posts.map((post) => {
              const url = safeHref(post.href);
              const body = (
                <>
                  {post.image && (
                    <div className="mb-3 aspect-video overflow-hidden rounded-card bg-surface-well">
                      <img
                        src={post.image}
                        alt={post.imageAlt ?? post.title}
                        loading="lazy"
                        className="h-full w-full transform object-cover opacity-90 transition-transform duration-300 group-hover:scale-105 group-hover:opacity-100"
                      />
                    </div>
                  )}
                  <h4 className="line-clamp-2 font-medium text-primary transition-colors duration-200 group-hover:text-ink-accent">
                    {post.title}
                  </h4>
                  {post.date && (
                    <div className="mt-2 flex items-center text-sm text-secondary">
                      <svg
                        className="mr-2 h-4 w-4"
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
                      <time dateTime={post.dateTime ?? post.date}>{post.date}</time>
                    </div>
                  )}
                </>
              );
              return (
                <div key={post.title} className="group">
                  {url ? (
                    <a href={url} className="block">
                      {body}
                    </a>
                  ) : (
                    body
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {cats.length > 0 && (
        <div className={PANEL}>
          {categoriesTitle && <h3 className="mb-4 text-lg font-bold text-primary">{categoriesTitle}</h3>}
          <div className="flex flex-wrap gap-2">
            {cats.map((category) => {
              const url = safeHref(category.href);
              const body = (
                <>
                  {category.label}
                  {category.count !== undefined && <span className="ml-1 text-secondary">({category.count})</span>}
                </>
              );
              const pill = 'inline-block rounded-full border px-3 py-1 text-sm font-medium transition-all duration-300';
              return url ? (
                <a
                  key={category.label}
                  href={url}
                  className={cx(
                    pill,
                    'border-hairline bg-surface-raised text-secondary hover:border-fill-accent hover:text-ink-accent',
                  )}
                >
                  {body}
                </a>
              ) : (
                <span key={category.label} className={cx(pill, 'border-hairline bg-surface-raised text-secondary')}>
                  {body}
                </span>
              );
            })}
          </div>
        </div>
      )}

      {hasTags && <SidebarTags tags={tags!} title={tagsTitle} max={tagsCount} />}

      {children}
    </aside>
  );
}
