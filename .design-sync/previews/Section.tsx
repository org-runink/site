import { Badge, Card, CardGrid, Section, Surface } from '@runink/ui';

/**
 * A dashed rule that makes an otherwise invisible wrapper's bounds legible.
 * Only ever used in these previews — a real page never outlines its bands.
 */
const OUTLINE = 'border-2 border-dashed border-fill-accent';

/** The caption that names which box the dashed rule is drawing. */
function Trace({ children }: { children: string }) {
  return (
    <div className="mb-2 font-mono text-[11px] uppercase tracking-widest text-ink-accent">{children}</div>
  );
}

/**
 * What `Section` actually contributes, made visible: the outer dashed box is the
 * `<section>` and its fixed `py-16 md:py-24` rhythm; the inner dashed box is the
 * `Container` it wraps children in by default, with its `px-4 sm:px-6 lg:px-8`
 * gutters. The gap between the two rules *is* the component.
 */
export function Rhythm() {
  return (
    <div>
      <Trace>outer rule = the section band · inner rule = the container it wraps children in</Trace>
      <Section className={`${OUTLINE} bg-canvas`}>
        <div className={`${OUTLINE} p-4`}>
          <h2 className="font-heading text-2xl font-black text-primary">Run the Autonomous Supply Chain</h2>
          <p className="mt-2 max-w-2xl leading-relaxed">
            Everything inside this inner rule lines up with every other contained band on
            the page, because they all resolve to the same centred `max-w-7xl` column.
          </p>
        </div>
      </Section>
    </div>
  );
}

/**
 * The same composition on the sheet ground. Not one class differs from `Rhythm` —
 * only `ground`, because every token rebinds underneath.
 *
 * `Section` contributes only spacing (`py-16 md:py-24`) and an optional `Container`,
 * so like `Container` it has no colour of its own to rebind. The thing under test is
 * that the band stays readable as a band: `bg-canvas` follows the ground, the dashed
 * rules are `border-fill-accent` — a mark-tier token with a value in both registers,
 * so the two boxes and the gap between them stay legible on the light ground — and
 * the copy inherits `text-primary` from the surface rather than restating it.
 */
export function OnSheet() {
  return (
    <Surface ground="sheet" tone="canvas" className="p-8">
      <div>
        <Trace>outer rule = the section band · inner rule = the container it wraps children in</Trace>
        <Section className={`${OUTLINE} bg-canvas`}>
          <div className={`${OUTLINE} p-4`}>
            <h2 className="font-heading text-2xl font-black text-primary">Run the Autonomous Supply Chain</h2>
            <p className="mt-2 max-w-2xl leading-relaxed">
              Everything inside this inner rule lines up with every other contained band on
              the page, because they all resolve to the same centred `max-w-7xl` column.
            </p>
          </div>
        </Section>
      </div>
    </Surface>
  );
}

/**
 * `contained` on and off. The top band keeps its gutters, so the copy stops short
 * of the band edge; the bottom band is `contained={false}` and its child runs
 * edge to edge — which is what a full-bleed carousel or parallax track needs.
 */
export function ContainedVsFullBleed() {
  return (
    <div>
      <Section className={`${OUTLINE} bg-canvas`}>
        <div className="rounded-card bg-fill-success p-4 text-sm text-on-success">
          contained (default) — gutters keep this child inside the content column
        </div>
      </Section>
      <Section contained={false} className={`${OUTLINE} bg-surface-raised`}>
        <div className="rounded-card bg-fill-accent-deep p-4 text-sm text-on-accent">
          contained={'{false}'} — this child touches the band edge and manages its own width
        </div>
      </Section>
    </div>
  );
}

/**
 * A real page band: eyebrow, headline, supporting sentence and a card row. This
 * is the composition the `section-container` shortcode produced on every product
 * page, and the shape most uses of `Section` take.
 */
export function WithContent() {
  return (
    <Section className="bg-canvas">
      <Badge tone="sage">Real-time visibility</Badge>
      <h2 className="mt-4 font-heading text-3xl font-black text-primary">
        Mitigate disruption in real time
      </h2>
      <p className="mb-8 mt-4 max-w-3xl leading-relaxed">
        Live logistics telemetry, predictive analytics and one actionable twin of your network.
      </p>
      <CardGrid cols={2} style={{ marginBottom: '1rem' }}>
        <Card
          icon="currency-dollar"
          title="The Claims Module"
          description="Reads BOLs and fights carrier denials on autopilot."
          href="/use-cases/claims-recovery"
        />
        <Card
          icon="cube-transparent"
          title="The Fulfillment Module"
          description="Orchestrates routing against live constraints."
          href="/use-cases/fulfillment-optimization"
        />
      </CardGrid>
    </Section>
  );
}

/**
 * Two bands in sequence, tinted differently so the seam is visible. Because the
 * padding lives inside each band rather than between them, consecutive sections
 * abut exactly — the visible breathing room is `py-16` from one plus `py-16` from
 * the next, and no margin is needed to separate them.
 */
export function StackedBands() {
  return (
    <div>
      <Section className="bg-canvas">
        <h2 className="font-heading text-2xl font-black text-primary">Zero-Hold Customs Gate</h2>
        <p className="mt-4 max-w-3xl leading-relaxed">
          Automatic customs and weighbridge auditing clears compliant loads without a manual hold.
        </p>
      </Section>
      <Section className="bg-surface-raised">
        <Badge tone="sage">Measured in production</Badge>
        <h2 className="mt-4 font-heading text-2xl font-black text-primary">
          11x faster customs clearance
        </h2>
        <p className="mt-4 max-w-3xl leading-relaxed">
          The seam above is two `py-16` halves meeting — no margin between the bands.
        </p>
      </Section>
    </div>
  );
}
