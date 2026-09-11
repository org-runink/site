/**
 * Joins class names, dropping falsy entries.
 *
 * Every component takes `className` last so a caller's utilities win over the
 * component's defaults — that is the whole override mechanism in this library,
 * so it needs to be boringly predictable.
 */
export function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ');
}
