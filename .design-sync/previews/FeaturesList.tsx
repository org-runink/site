import { FeaturesList, Surface } from '@runink/ui';

const TWIN = [
  {
    title: 'Real-time visibility',
    description:
      'Live logistics telemetry is ingested as it arrives, so the Twin reflects the yard as it is now — not as it was at the last dashboard refresh.',
  },
  {
    title: 'Predictive disruption analytics',
    description:
      'Compressor degradation, weight variances and staging violations are caught before they become spoilage, fines or demurrage.',
  },
  {
    title: 'Autonomous resolution',
    description:
      'The orchestration engine drafts the reroute, the amendment or the crane lock itself, and shows the operator the exact financial risk in play.',
  },
];

/**
 * The canonical use at the default `green` tone: one narrow centred column, a
 * check tile per point, and the deliberately wide gap under the heading that makes
 * it read as a document section rather than a widget.
 */
export function Default() {
  return <FeaturesList title="What the Digital Twin gives you" items={TWIN} />;
}

/**
 * All five tones in one frame.
 *
 * The tone only colours the check tile, so showing one tone per cell produced
 * cards that were pixel-identical apart from a 40px strip — the axis was there
 * but unreadable. Side by side, the accent ladder is obvious.
 */
export function ToneSweep() {
  const tones = ['green', 'sage', 'orange', 'tan', 'primary'] as const;
  return (
    <div className="space-y-10">
      {tones.map((tone) => (
        <FeaturesList
          key={tone}
          tone={tone}
          title={`tone="${tone}"`}
          items={[
            {
              title: 'Predictive disruption analytics',
              description:
                'Compressor degradation and weight variances are caught before they become spoilage or demurrage.',
            },
          ]}
        />
      ))}
    </div>
  );
}

/**
 * `tone="orange"`, the loudest accent — the one used when the list sits next to a
 * compliance or safety argument.
 */
export function OrangeTone() {
  return (
    <FeaturesList
      title="How HazMat enforcement stays defensible"
      tone="orange"
      items={[
        {
          title: 'Every staging decision is recorded',
          description:
            'GPS and RFID positions are written to the Twin as they change, so the staging history behind a violation is already reconstructed when an auditor asks for it.',
        },
        {
          title: 'Compatibility is checked before the lift, not after',
          description:
            'Dangerous goods classes are triaged against maritime safety policy the moment a container is assigned a slot, rather than during a yard walk hours later.',
        },
        {
          title: 'The crane lock is the enforcement, not the alert',
          description:
            'Movement is paused until a compliant buffer between incompatible classes is restored, which removes the window in which a human could wave the lift through.',
        },
      ]}
    />
  );
}

/**
 * Five items at `tan`, deliberately mixing one-line and four-line descriptions —
 * the cell that shows whether the `space-y-12` rhythm survives uneven copy and
 * whether the check tiles stay pinned to the first line rather than centring on the
 * block. Also the longest list the component is asked to carry.
 */
export function UnevenCopy() {
  return (
    <FeaturesList
      title="What you get in the first three weeks"
      tone="tan"
      items={[
        {
          title: 'Telemetry connected',
          description: 'Your existing TMS, WMS and sensor feeds stream into the Twin over a mutually authenticated link.',
        },
        {
          title: 'Constraints confirmed by your operators',
          description:
            'Before anything is automated, the people who run the yard review the business rules the agents will enforce. Every subsequent action traces back to a constraint a named person signed off, which is what makes an automated decision defensible months later when it is questioned.',
        },
        {
          title: 'Baseline margin leakage quantified',
          description:
            'Demurrage, detention, spoilage and freight-invoice variance are priced against your own last four quarters, so the pilot has a number to beat rather than a vendor benchmark.',
        },
        {
          title: 'First agents running in shadow mode',
          description: 'Claims, reroutes and holds are drafted but not executed, so you can audit the judgement before it acts.',
        },
        {
          title: 'Nothing leaves your perimeter',
          description:
            'Inference, storage and orchestration all run on infrastructure you control. There is no hosted copy of your operation to reclaim and no third-party model API in the path.',
        },
      ]}
    />
  );
}

/**
 * `Default` on the sheet ground, at the same default `green` tone. Not one class or
 * prop differs — only `ground`. This is the cell that grades the check tile: its tint
 * is the component's one colour decision, so if the accent were bound to the console
 * ramp rather than to a token it would go muddy or vanish here.
 */
export function OnSheet() {
  return (
    <Surface ground="sheet" tone="canvas" className="p-8">
      <FeaturesList title="What the Digital Twin gives you" items={TWIN} />
    </Surface>
  );
}
