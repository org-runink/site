import { Button, Surface } from '@runink/ui';

/** The three shipped treatments, side by side. */
export function Variants() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Button href="/demo">Book a demo</Button>
      <Button variant="secondary" href="/platform">Explore the platform</Button>
      <Button variant="outline" href="/docs">Read the docs</Button>
    </div>
  );
}

/**
 * The same three treatments on the sheet ground. Not one class differs from
 * `Variants` — only `ground`, because every token rebinds underneath.
 *
 * This is the cell that proves the emphasis ladder is ground-independent: `primary`
 * keeps its `bg-fill-accent`/`text-on-accent` pairing (`on-accent` is the same dark
 * ink in both registers, so the solid accent reads the same way on either), and
 * `secondary`'s wash plus `outline`'s neutral `edge` border both resolve against the
 * light canvas instead of the dark one.
 */
export function OnSheet() {
  return (
    <Surface ground="sheet" tone="canvas" className="p-8">
      <div className="flex flex-wrap items-center gap-4">
        <Button href="/demo">Book a demo</Button>
        <Button variant="secondary" href="/platform">Explore the platform</Button>
        <Button variant="outline" href="/docs">Read the docs</Button>
      </div>
    </Surface>
  );
}

/** The primary call to action on its own, at the size the site uses it. */
export function Primary() {
  return <Button href="/demo">See real-time visibility in action</Button>;
}

/**
 * Rendered as a real `<button>` rather than a link — what you get when `href`
 * is omitted, including the disabled state.
 */
export function AsButton() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Button onClick={() => undefined}>Run diagnostics</Button>
      <Button variant="secondary" disabled>
        Running…
      </Button>
    </div>
  );
}
