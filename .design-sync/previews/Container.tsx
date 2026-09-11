import { Container, Icon, Section, Stat, StatsGrid, Surface } from '@runink/ui';

/** Dashed rule used only in these previews to make an invisible box visible. */
const OUTLINE = 'border-2 border-dashed border-fill-accent';

/** Caption naming which box the dashed rule is drawing. */
function Trace({ children }: { children: string }) {
  return (
    <div className="mb-2 font-mono text-[11px] uppercase tracking-widest text-ink-accent">{children}</div>
  );
}

/**
 * The gutters, made visible. The tinted band bleeds edge to edge; the dashed box
 * inside it is the `Container`, and the strip of tint left showing on either side
 * is `px-4 sm:px-6 lg:px-8`. Above `max-w-7xl` the box stops growing and centres
 * instead, which is the other half of the contract.
 */
export function Gutters() {
  return (
    <div>
      <Trace>tinted band = full bleed · dashed box = the container column</Trace>
      <div className="bg-fill-success py-6">
        <Container className={`${OUTLINE} py-4`}>
          <p className="font-mono text-[11px] text-on-success">
            mx-auto · w-full · max-w-7xl · px-4 sm:px-6 lg:px-8
          </p>
        </Container>
      </div>
    </div>
  );
}

/**
 * Why it exists: three bands with different backgrounds, each with its own
 * `Container`. The backgrounds run edge to edge and change per band, but every
 * left edge of copy lands on the same vertical — that shared line is the only
 * thing `Container` is for.
 */
export function AlignsAcrossBands() {
  return (
    <div>
      <div className="bg-surface py-6">
        <Container className={OUTLINE}>
          <p className="py-2 text-sm text-primary">Band one — the hero band, on the page canvas.</p>
        </Container>
      </div>
      <div className="bg-surface-raised py-6">
        <Container className={OUTLINE}>
          <p className="py-2 text-sm text-primary">Band two — a raised band behind a card row.</p>
        </Container>
      </div>
      <div className="bg-fill-success py-6">
        <Container className={OUTLINE}>
          <p className="py-2 text-sm text-on-success">Band three — an accent band behind a call to action.</p>
        </Container>
      </div>
    </div>
  );
}

/**
 * A real composition: headline, supporting copy and a metric row, all sharing one
 * content column inside a full-bleed band. This is what `Section contained={false}`
 * plus an explicit `Container` looks like — the shape to reach for when a band
 * needs its own background but the copy must still line up with the rest of the page.
 */
export function WithContent() {
  return (
    <Section contained={false} className="bg-canvas">
      <Container>
        <h2 className="font-heading text-3xl font-black text-primary">
          Run the Autonomous Supply Chain
        </h2>
        <p className="mb-10 mt-4 max-w-3xl leading-relaxed">
          Achieve real-time supply chain visibility and mitigate disruption instantly, with
          telemetry that reaches a decision in under forty milliseconds.
        </p>
        <StatsGrid style={{ marginBottom: '1rem' }}>
          <Stat number="40%" label="More freight spend recovered" />
          <Stat number="11x" label="Faster customs clearance" />
          <Stat number="38ms" label="Agent decision latency" />
        </StatsGrid>
      </Container>
    </Section>
  );
}

/**
 * A narrower reading measure — and the trap in asking for one. The wide box is the
 * default column; the narrow box is capped at `42rem`, which is `max-w-2xl`'s value,
 * set through an inline `style`.
 *
 * It has to be. `max-w-2xl` passed via `className` renders a box the EXACT width of the
 * default one: `cx` keeps the class and Tailwind compiles it, then `max-w-7xl` wins,
 * because Tailwind resolves competing utilities by stylesheet order rather than class
 * order and `7xl` is emitted last. The two dashed rules are the proof — the override
 * that actually narrows the column is the `style` escape hatch, the same one
 * `CardGrid` and `StatsGrid` need for their bottom margin. What `className` is good for
 * is everything non-competing, which is why both boxes still centre and keep identical
 * gutters.
 */
export function NarrowMeasure() {
  return (
    <div className="space-y-6 bg-canvas py-6">
      <Container className={OUTLINE}>
        <p className="py-2 font-mono text-[11px] text-secondary">default — max-w-7xl</p>
      </Container>
      <Container className={OUTLINE} style={{ maxWidth: '42rem' }}>
        <p className="py-2 leading-relaxed">
          <span className="mb-2 block font-mono text-[11px] text-secondary">
            style maxWidth 42rem — the value of max-w-2xl, which className cannot deliver
          </span>
          Discrepancies between cargo documents and terminal weight scales cause customs holds,
          fines and expensive demurrage. A narrower cap keeps long prose at a comfortable measure
          without leaving the shared content column.
        </p>
      </Container>
      <Container className="flex items-center gap-3">
        <Icon name="check-circle" className="h-5 w-5 text-ink-success" />
        <span className="text-sm">Both boxes stay centred and keep identical gutters.</span>
      </Container>
    </div>
  );
}

/**
 * The same composition on the sheet ground. Not one class differs from
 * `NarrowMeasure` — only `ground`, because every token rebinds underneath.
 *
 * `Container` emits no colour at all: it is `mx-auto w-full max-w-7xl` plus gutters,
 * so there is nothing in the component for a ground to change. What this cell checks
 * is that the *preview device* survives the flip, which is the part that could
 * silently fail — the dashed rule is `border-fill-accent`, a mark-tier token with a
 * value in both registers (`#D9764E` console, `#C4693B` sheet), so the bounds stay
 * legible here rather than vanishing into a light canvas the way a pinned-light rule
 * would. The band behind it is `bg-canvas`, which rebinds with the ground, so the
 * gutters still read as gutters.
 */
export function OnSheet() {
  return (
    <Surface ground="sheet" tone="canvas" className="p-8">
      <div className="space-y-6 bg-canvas py-6">
        <Container className={OUTLINE}>
          <p className="py-2 font-mono text-[11px] text-secondary">default — max-w-7xl</p>
        </Container>
        <Container className={OUTLINE} style={{ maxWidth: '42rem' }}>
          <p className="py-2 leading-relaxed">
            <span className="mb-2 block font-mono text-[11px] text-secondary">
              style maxWidth 42rem — the value of max-w-2xl, which className cannot deliver
            </span>
            Discrepancies between cargo documents and terminal weight scales cause customs holds,
            fines and expensive demurrage. A narrower cap keeps long prose at a comfortable measure
            without leaving the shared content column.
          </p>
        </Container>
        <Container className="flex items-center gap-3">
          <Icon name="check-circle" className="h-5 w-5 text-ink-success" />
          <span className="text-sm">Both boxes stay centred and keep identical gutters.</span>
        </Container>
      </div>
    </Surface>
  );
}
