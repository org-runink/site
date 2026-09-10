import { BackgroundEffects, TabbedPitches } from '@runink/ui';
import type { TabbedPitch } from '@runink/ui';

/**
 * All five homepage personas, with the copy the `painkiller-pitches` shortcode
 * hardcoded. The headline nodes follow the pattern the component documents: the
 * pain in `red-300`, the remedy in `brand-green`.
 */
const PERSONAS: TabbedPitch[] = [
  {
    id: 'cfo',
    icon: 'currency-dollar',
    label: 'The CFO',
    headline: (
      <>
        Stop waiting 30 days for a <strong className="font-bold text-red-300">monthly close</strong>. Get{' '}
        <strong className="font-bold text-brand-green">End of Cycle Underwriting</strong>.
      </>
    ),
    body:
      "RPA tools are just a cost center that speeds up data entry. RunInk is a capital recovery asset. By deploying reasoning-capable specialized systems with deep semantic understanding, we don't just 'process' numbers—we autonomously underwrite the end of billing cycle perfectly. We dynamically reconcile inbound cargo data against your ledger, eliminating manual accounting bottlenecks.",
    closer: '"Perfect financial reconciliation without the headcount."',
  },
  {
    id: 'ops',
    icon: 'adjustments-vertical',
    label: 'DC Ops Director',
    headline: (
      <>
        Your dock doors are <strong className="font-bold text-red-300">bottlenecked</strong>. Automate your{' '}
        <strong className="font-bold text-brand-green">Cargo Verification</strong>.
      </>
    ),
    body:
      "RunInk isn't another dashboard to manage. It's an autonomous teammate equipped with advanced logical mapping to make sense of your unstructured receiving data. It reasons through the 80% of low-value workflows entirely on its own—reading inbound cargo manifests, comparing them against POs, and verifying dock-to-stock integrity instantly so your DC teams can keep moving.",
    closer: '"Inbound verification in milliseconds, not hours."',
  },
  {
    id: 'merch',
    icon: 'chart-bar',
    label: 'Merchandise Mgr',
    headline: (
      <>
        Stop losing margin to the <strong className="font-bold text-red-300">bullwhip effect</strong>. Get{' '}
        <strong className="font-bold text-brand-green">Demand Forecasting</strong>.
      </>
    ),
    body:
      'Unlike rigid rule-engines, our Inventory systems employ dynamic reasoning trees over real-time sales telemetry. RunInk analytical models monitor pipeline velocity across disparate retail branches to deduce anomalies before they disrupt in-store availability, autonomously preparing transfer orders to optimize cross-branch inventory allocation.',
    closer: '"Predict localized demand and never stockout a branch again."',
  },
  {
    id: 'compliance',
    icon: 'shield-check',
    label: 'Compliance Officer',
    headline: (
      <>
        Stop eating the cost of <strong className="font-bold text-red-300">vendor compliance failures</strong>. Deploy
        the <strong className="font-bold text-brand-green">Digital Paralegal</strong>.
      </>
    ),
    body:
      "Managing retail vendors logically shouldn't mean accepting abstract loss patterns as a cost of business. RunInk's Claims Dispute Operator autonomously processes complex inbound SLA deviations, synthesizing receiving chronologies and cross-referencing vendor agreements to logically draft chargebacks without human bottlenecking.",
    closer: '"Hold your suppliers to their SLAs, automatically."',
  },
  {
    id: 'branch',
    icon: 'user-group',
    label: 'Branch Manager',
    headline: (
      <>
        Stop accepting <strong className="font-bold text-red-300">inconsistent store execution</strong>. Deploy{' '}
        <strong className="font-bold text-brand-green">Local Specialized Automation</strong>.
      </>
    ),
    body:
      'RunInk systems autonomously reason through complex local store telemetry and employee schedules. Instead of relying on rigid, templated corporate directives that ignore local branch realities, our reasoning engines evaluate edge cases dynamically—identifying micro-trend risks before they impact the customer experience.',
    closer: '"Flawless execution tailored to every individual branch."',
  },
];

/**
 * The homepage band as shipped: gradient heading, five persona tabs across, the
 * background-effects wash behind it, and the first tab (The CFO) selected at rest
 * so the panel shows a real pitch without any interaction.
 */
export function Default() {
  return (
    <TabbedPitches
      id="painkiller"
      heading="Tailored value for every stakeholder"
      tabs={PERSONAS}
      backgroundEffect={<BackgroundEffects color="var(--color-brand-green)" />}
    />
  );
}

/**
 * `defaultTabId="compliance"` — the fourth tab starts selected instead of the
 * first. This is the variant axis: compare the active tab's `secondary-600`
 * border and white label, and the swapped panel, against the Default cell. The
 * `heading` is omitted here on purpose so the tab strip and the panel it controls
 * sit in the same frame.
 */
export function PresetTab() {
  return (
    <TabbedPitches
      defaultTabId="compliance"
      tabs={PERSONAS}
      backgroundEffect={<BackgroundEffects color="var(--color-brand-green)" />}
    />
  );
}

/**
 * A bare tab block: no `heading`, no decorative quote glyph, a custom
 * `closerLabel`, and only two tabs — so the strip collapses to two columns and
 * the band is the flat `primary-950` canvas with no wash behind it.
 */
export function BareTwoUp() {
  return (
    <TabbedPitches
      tabs={[PERSONAS[1], PERSONAS[3]]}
      quoteGlyph={false}
      closerLabel="What they tell the board"
      tabsLabel="Pitch by operational role"
    />
  );
}
