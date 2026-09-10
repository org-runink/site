import { Card, CardGrid } from '@runink/ui';

/** The canonical linked card. */
export function Default() {
  return (
    <Card
      icon="shield-check"
      title="Zero-Hold Customs Gate"
      description="Automatic customs and weighbridge auditing clears compliant loads without a manual hold."
      href="/platform/customs"
    />
  );
}

/** Without `href` — a static card that renders no anchor. */
export function Static() {
  return (
    <Card
      icon="circle-stack"
      title="Sovereign persistence"
      description="Objects, records and vector indexes on infrastructure you control."
    />
  );
}

/**
 * Three across in the grid the site uses. Cards are `h-full`, so this cell is
 * where uneven copy lengths show up as ragged card heights if they are going to.
 */
export function InAGrid() {
  return (
    <CardGrid>
      <Card
        icon="eye"
        title="The Autonomous Cold Chain Guard"
        description="Perishable loss prevention that watches every reefer continuously, not at checkpoints."
        href="/use-cases/cold-chain"
      />
      <Card
        icon="arrow-path"
        title="The Automated Returns Triage Loop"
        description="Route every return to its highest recoverable value."
        href="/use-cases/returns"
      />
      <Card
        icon="command-line"
        title="Real-Time Terminal Safety"
        description="Dangerous goods compliance enforced at the gate, with an auditable trail for every decision made."
        href="/use-cases/hazmat"
      />
    </CardGrid>
  );
}

/**
 * A script-bearing `href` degrades to the unlinked card rather than becoming a
 * clickable payload — the guard the Hugo templates got free from `relURL`.
 */
export function UnsafeHrefDegrades() {
  return (
    <Card
      icon="lock-stack"
      title="Rejected destination"
      description="This card was given a javascript: href and renders with no anchor at all."
      href="javascript:alert(1)"
    />
  );
}
