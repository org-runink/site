import { Faq, Surface } from '@runink/ui';

const BILLING: Array<{ question: string; answer: string }> = [
  {
    question: 'How are compute units billed?',
    answer:
      'Compute units are drawn from a monthly pool. Unused units do not roll over, and overages are billed at the same rate as the pool — there is no penalty tier.',
  },
  {
    question: 'Can we run Runink entirely on our own infrastructure?',
    answer:
      'Yes. Every component of the platform is self-hosted by default, including inference. No telemetry leaves your network unless you configure an export.',
  },
  {
    question: 'What happens to our data if we stop paying?',
    answer:
      'It stays where it already is — on your infrastructure. There is no hosted copy to reclaim and no export window to race.',
  },
];

/**
 * The default: first row open, so the card shows an actual answer rather than a
 * stack of collapsed bars.
 */
export function Default() {
  return <Faq title="Billing" items={BILLING} />;
}

/**
 * `Default` on the sheet ground — first row open again, so the same rest state is on
 * show. Not one class differs; only `ground`, because every token rebinds underneath.
 *
 * The accordion stacks three surfaces (`bg-surface` band, `bg-surface-raised` rows,
 * `bg-surface-well` on hover) and those do not keep their console order on sheet, so
 * this is the cell that shows the rows still read as rows.
 */
export function OnSheet() {
  return (
    <Surface ground="sheet" tone="canvas" className="p-8">
      <Faq title="Billing" items={BILLING} />
    </Surface>
  );
}

/** With the section header the shortcode renders above the list. */
export function WithHeader() {
  return (
    <Faq
      title="Frequently asked questions"
      description="The questions logistics teams ask before a pilot."
      items={BILLING}
    />
  );
}

/**
 * All rows collapsed (`defaultOpenIndex={null}`) — the state you want when the
 * accordion sits low on a long page.
 */
export function AllCollapsed() {
  return <Faq title="Billing" items={BILLING} defaultOpenIndex={null} />;
}

/** A later row opened instead of the first. */
export function SecondRowOpen() {
  return <Faq title="Billing" items={BILLING} defaultOpenIndex={1} />;
}
