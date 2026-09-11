/**
 * First letters of the first and last words of a name, for avatar fallbacks.
 *
 * Returns `''` when nothing usable can be derived, so callers can fall back again
 * to a silhouette rather than rendering an empty circle.
 */
export function initialsOf(name: string): string {
  const words = name
    .trim()
    .split(/\s+/)
    .filter((w) => /[\p{L}\p{N}]/u.test(w));
  if (words.length === 0) return '';
  const first = words[0]!;
  const last = words[words.length - 1]!;
  const take = (w: string) => (w.match(/[\p{L}\p{N}]/u) ?? [''])[0]!.toUpperCase();
  return words.length === 1 ? take(first) : take(first) + take(last);
}
