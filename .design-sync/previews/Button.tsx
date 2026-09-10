import { Button } from '@runink/ui';

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
