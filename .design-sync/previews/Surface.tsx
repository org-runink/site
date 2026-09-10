import { Surface, Card, Badge } from '@runink/ui';

/**
 * The four surfaces, stacked. They are **not** a depth ladder: on the sheet ground
 * `surface` goes lighter than the canvas while `raised` and `well` go darker, which
 * is why they are named by role rather than by luminance.
 */
export function Tones() {
  return (
    <div className="overflow-hidden rounded-card">
      <Surface tone="canvas" className="p-6">
        <span className="font-mono text-sm">tone=&quot;canvas&quot; — the page</span>
      </Surface>
      <Surface tone="surface" className="p-6">
        <span className="font-mono text-sm">tone=&quot;surface&quot; — the default card</span>
      </Surface>
      <Surface tone="raised" className="p-6">
        <span className="font-mono text-sm">tone=&quot;raised&quot; — the warm panel</span>
      </Surface>
      <Surface tone="well" className="p-6">
        <span className="font-mono text-sm">tone=&quot;well&quot; — the innermost surface</span>
      </Surface>
    </div>
  );
}

/**
 * What Surface is for: it supplies the ground, and body copy inherits its ink from
 * there rather than every component restating it.
 */
export function AsPageCanvas() {
  return (
    <Surface tone="canvas" className="space-y-6 p-10">
      <Badge tone="sage">Real-time visibility</Badge>
      <h2 className="font-display text-3xl font-black text-primary">Run the autonomous supply chain</h2>
      <p className="max-w-xl leading-relaxed text-secondary">
        Body copy inherits its colour from the surface, which is why components do not
        each set their own. Mitigate disruption in real time, with telemetry that
        reaches a decision in under forty milliseconds.
      </p>
      <Card
        icon="cube-transparent"
        title="Supply Chain Digital Twin"
        description="A live model of your network, not a nightly snapshot."
        href="/platform"
      />
    </Surface>
  );
}

/**
 * The same composition on the sheet ground.
 *
 * This is the cell that proves the two registers are one identity: not a single class
 * differs between this and `AsPageCanvas` — only `ground`. Every token rebinds
 * underneath, so a component written once works on either.
 */
export function OnSheet() {
  return (
    <Surface ground="sheet" tone="canvas" className="space-y-6 p-10">
      <Badge tone="sage">Real-time visibility</Badge>
      <h2 className="font-display text-3xl font-black text-primary">Run the autonomous supply chain</h2>
      <p className="max-w-xl leading-relaxed text-secondary">
        Body copy inherits its colour from the surface, which is why components do not
        each set their own. Mitigate disruption in real time, with telemetry that
        reaches a decision in under forty milliseconds.
      </p>
      <Card
        icon="cube-transparent"
        title="Supply Chain Digital Twin"
        description="A live model of your network, not a nightly snapshot."
        href="/platform"
      />
    </Surface>
  );
}

/**
 * A console band nested inside a sheet page — the case that decided the mechanism.
 * `data-ground` cascades, so a subtree can flip; a root-level dark-mode class cannot
 * express this.
 */
export function NestedGrounds() {
  return (
    <Surface ground="sheet" tone="canvas" className="space-y-4 p-8">
      <p className="text-secondary">Sheet ground — the page.</p>
      <Surface ground="console" tone="raised" as="aside" className="space-y-2 rounded-card p-6">
        <p className="text-primary">Console band, nested inside it.</p>
        <p className="text-secondary">Same classes. Only the ground differs.</p>
      </Surface>
    </Surface>
  );
}
