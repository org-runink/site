import { Card, CardGrid, FeatureCard, Surface } from '@runink/ui';

/** Dashed rule used only in these previews to make an invisible box visible. */
const OUTLINE = 'border-2 border-dashed border-fill-accent';

/** Caption naming which box the dashed rule is drawing. */
function Trace({ children }: { children: string }) {
  return (
    <div className="mb-2 font-mono text-[11px] uppercase tracking-widest text-ink-accent">{children}</div>
  );
}

/**
 * The default: three across from `md` up, `gap-8` between cards. `Card` is
 * `h-full`, so the middle card's shorter copy still fills the row height and the
 * three bottom edges line up.
 *
 * The stock `mb-32` is pulled in with an inline `style` rather than a `className`:
 * Tailwind emits `mb-32` after `mb-4`, so a utility override loses on source order
 * no matter what `cx` does with the class string. See `TrailingRhythm` for what the
 * stock margin is actually for.
 */
export function ThreeUp() {
  return (
    <CardGrid style={{ marginBottom: '1rem' }}>
      <Card
        icon="currency-dollar"
        title="The Claims Module"
        description="Reads BOLs, identifies damage, and fights carrier denials on autopilot."
        href="/use-cases/claims-recovery"
      />
      <Card
        icon="cube-transparent"
        title="The Fulfillment Module"
        description="Orchestrates inventory and routing based on real-time constraints."
        href="/use-cases/fulfillment-optimization"
      />
      <Card
        icon="scale"
        title="The Finance Module"
        description="Audits every invoice against your contracts and reconciles ledgers instantly, so a disputed accessorial never ages past its claim window."
        href="/use-cases/finance"
      />
    </CardGrid>
  );
}

/**
 * `cols={2}` with the taller `FeatureCard`. Two across is the pairing the product
 * pages use when each card carries a capability checklist and needs the extra
 * measure to read.
 */
export function TwoUp() {
  return (
    <CardGrid cols={2} style={{ marginBottom: '1rem' }}>
      <FeatureCard
        icon="eye"
        title="The Autonomous Cold Chain Guard"
        description="Perishable loss prevention that watches every reefer continuously, not at checkpoints."
        features={['Per-container thresholds', 'Compressor degradation scoring', 'Excursion alerting']}
      />
      <FeatureCard
        icon="arrow-path"
        title="The Automated Returns Triage Loop"
        description="Route every return to its highest recoverable value automatically."
        features={['Condition grading', 'Disposition routing', 'Recovery reporting']}
      />
    </CardGrid>
  );
}

/**
 * `cols={4}` — the densest setting, for a capability index rather than a feature
 * pitch. The gutter is unchanged, so the cards simply get narrower; this is the
 * cell where a long title would start wrapping to three lines if it were going to.
 */
export function FourUp() {
  return (
    <CardGrid cols={4} style={{ marginBottom: '1rem' }}>
      <Card icon="shield-check" title="Customs" description="Zero-hold gate auditing." href="/platform/customs" />
      <Card icon="circle-stack" title="Telemetry" description="Live ingest from every reefer." href="/platform/telemetry" />
      <Card icon="command-line" title="Terminal safety" description="HazMat rules enforced at the gate." href="/platform/hazmat" />
      <Card icon="chart-bar" title="Diagnostics" description="Instant S&OP and spend analysis." href="/platform/diagnostics" />
    </CardGrid>
  );
}

/**
 * The default trailing rhythm, made legible. The dashed rule is NOT on the grid — a
 * margin renders outside the border box, so an outline on `CardGrid` itself closes
 * flush under the cards and draws nothing of the rhythm it is meant to show. It is on
 * a plain wrapper instead, whose border stops the child's margin collapsing out, so the
 * box measures the cards PLUS the stock `mb-32`: the cards end where the last row of
 * copy does, and the deep band of empty space between them and the rule is the margin.
 *
 * That gap is how the site separates a card block from the prose that follows. Pull it
 * in with an inline `style` (as the other cells do) whenever the grid is not the last
 * thing in its section — a `className` utility cannot win against it.
 */
export function TrailingRhythm() {
  return (
    <div>
      <Trace>dashed box = the grid plus its stock mb-32 · cards end where the grid does</Trace>
      <div className={OUTLINE}>
        <CardGrid cols={2}>
          <Card
            icon="lock-stack"
            title="Sovereign persistence"
            description="Objects, records and vector indexes on infrastructure you control."
            href="/platform/store"
          />
          <Card
            icon="cpu-chip"
            title="Sovereign inference"
            description="Model servers you run yourself — no third-party inference API in the path."
            href="/platform/inference"
          />
        </CardGrid>
      </div>
      <p className="leading-relaxed">
        Prose that follows the block. The distance from the cards to this sentence is the
        rhythm `mb-32` exists to guarantee.
      </p>
    </div>
  );
}

/**
 * The same composition on the sheet ground. Not one class differs from
 * `TrailingRhythm` — only `ground`, because every token rebinds underneath.
 *
 * `CardGrid` is pure layout (`grid gap-8 mb-32` plus a column count), so nothing in it
 * can break on a ground. Two things that *could* are checked here instead: the dashed
 * rule is `border-fill-accent`, a mark-tier token with a value in both registers, so
 * the grid's bounds and its stock `mb-32` stay legible against a light canvas; and the
 * `Card` children are the real payload — their surface, hairline and icon ink all have
 * to flip with the ground for the row to still read as two cards rather than two
 * rectangles of the same colour as the page.
 */
export function OnSheet() {
  return (
    <Surface ground="sheet" tone="canvas" className="p-8">
      <div>
        <Trace>dashed box = the grid plus its stock mb-32 · cards end where the grid does</Trace>
        <div className={OUTLINE}>
          <CardGrid cols={2}>
            <Card
              icon="lock-stack"
              title="Sovereign persistence"
              description="Objects, records and vector indexes on infrastructure you control."
              href="/platform/store"
            />
            <Card
              icon="cpu-chip"
              title="Sovereign inference"
              description="Model servers you run yourself — no third-party inference API in the path."
              href="/platform/inference"
            />
          </CardGrid>
        </div>
        <p className="leading-relaxed">
          Prose that follows the block. The distance from the cards to this sentence is the
          rhythm `mb-32` exists to guarantee.
        </p>
      </div>
    </Surface>
  );
}
