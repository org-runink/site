import { Surface, Card, Badge } from '@runink/ui';

/**
 * The three canvas depths, stacked so the steps up the `primary` ramp are
 * visible. `canvas` is the page, `raised` the band, `panel` the innermost
 * surface.
 */
export function Tones() {
  return (
    <div className="space-y-0 overflow-hidden rounded-card">
      <Surface tone="canvas" className="p-6">
        <span className="font-mono text-sm">tone=&quot;canvas&quot; — the page background</span>
      </Surface>
      <Surface tone="raised" className="p-6">
        <span className="font-mono text-sm">tone=&quot;raised&quot; — a band or section</span>
      </Surface>
      <Surface tone="panel" className="p-6">
        <span className="font-mono text-sm">tone=&quot;panel&quot; — the innermost surface</span>
      </Surface>
    </div>
  );
}

/**
 * What Surface is actually for: it supplies the dark canvas and the inherited
 * body text colour that every other component is tuned against.
 */
export function AsPageCanvas() {
  return (
    <Surface tone="canvas" className="space-y-6 p-10">
      <Badge tone="sage">Real-time visibility</Badge>
      <h2 className="font-heading text-3xl font-black text-primary">
        Run the autonomous supply chain
      </h2>
      <p className="max-w-xl leading-relaxed">
        Body copy inherits its colour from the surface, which is why components do
        not each set their own. Mitigate disruption in real time, with telemetry
        that reaches a decision in under forty milliseconds.
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
