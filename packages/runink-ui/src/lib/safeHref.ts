/**
 * Schemes that are safe to put in an `href`. Anything else — `javascript:`,
 * `data:`, `vbscript:` — executes in the page's origin when clicked.
 */
const SAFE_SCHEME = /^(?:https?:|mailto:|tel:)/i;

/** Control characters and spaces, which browsers strip before parsing a URL. */
const STRIPPED = /[\u0000-\u0020\u007f]/g;

/**
 * Normalises a caller-supplied link, dropping anything script-bearing.
 *
 * The Hugo templates got this for free: `relURL`/`relLangURL` turn
 * `javascript:alert(1)` into a harmless relative path, which is why
 * `content/test*.md` (seven fixtures probing exactly that, with leading
 * whitespace, mixed case and `//evil.com` variants) render safely on the site.
 * React has no such protection — it renders a `javascript:` href with at most a
 * development warning — so the ported components have to do it explicitly or they
 * would be *more* permissive than the templates they replace.
 *
 * Returns `undefined` for a rejected or absent href, so callers can choose
 * between omitting the attribute and rendering a non-interactive element.
 *
 * Accepted: absolute `http(s)`, `mailto:`, `tel:`, same-page `#fragment`, and
 * root- or dot-relative paths. Rejected: every other scheme, and protocol-relative
 * `//host` (which silently inherits the scheme and leaves the origin).
 */
export function safeHref(href: string | undefined | null): string | undefined {
  if (!href) return undefined;
  // Strip control characters and whitespace first: `java\tscript:` and
  // ` javascript:` both reach the parser as `javascript:`.
  const cleaned = href.replace(STRIPPED, '');
  if (!cleaned) return undefined;
  if (cleaned.startsWith('//')) return undefined;
  if (cleaned.startsWith('#') || cleaned.startsWith('/') || cleaned.startsWith('.')) return href.trim();
  if (SAFE_SCHEME.test(cleaned)) return href.trim();
  // A bare word with no scheme and no leading slash is a relative path.
  if (!/^[a-z][a-z0-9+.-]*:/i.test(cleaned)) return href.trim();
  return undefined;
}
