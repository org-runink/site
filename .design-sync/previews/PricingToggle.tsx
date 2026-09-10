import { PricingToggle, Surface } from '@runink/ui';

/** The two options `content/pricing.md` declares for the pricing page. */
const OPTIONS = [
  { label: 'Monthly Commitment', value: 'monthly' },
  { label: 'Annual Contract (Save 15%)', value: 'yearly' },
];

/**
 * The state the pricing page boots into: uncontrolled, so the first option is
 * selected and "Monthly Commitment" carries the purple pill.
 */
export function Default() {
  return <PricingToggle options={OPTIONS} />;
}

/**
 * `Default` on the sheet ground — same uncontrolled switch at rest, first option
 * selected, not one class changed. Only `ground` differs, because every token rebinds
 * underneath.
 *
 * The track is `bg-canvas` inside a sheet page whose canvas is the *same* value, so
 * this is the cell that shows whether the hairline border and the inner shadow are
 * still doing the work of separating the track from the page.
 */
export function OnSheet() {
  return (
    <Surface ground="sheet" tone="canvas" className="p-8">
      <PricingToggle options={OPTIONS} />
    </Surface>
  );
}

/**
 * The same switch with `defaultValue="yearly"` — the selected background has moved
 * to the second segment. Pair this cell with `Default` to read the only visual
 * axis the component has.
 */
export function AnnualSelected() {
  return <PricingToggle options={OPTIONS} defaultValue="yearly" />;
}

/**
 * Controlled (`value` + `onChange`), which is how the pricing page drives
 * `PricingTable.period`. Identical at rest to `AnnualSelected`, but proves the
 * controlled path renders the given selection rather than falling back to the
 * first option.
 */
export function Controlled() {
  return <PricingToggle options={OPTIONS} value="yearly" onChange={() => {}} />;
}

/**
 * Three segments with a longer term added. Two is the intended count, so this is
 * the cell that shows the track still lays out — and where the pill-shaped ink
 * track would overflow if it were going to.
 */
export function ThreeTerms() {
  return (
    <PricingToggle
      options={[
        { label: 'Monthly Commitment', value: 'monthly' },
        { label: 'Annual Contract (Save 15%)', value: 'yearly' },
        { label: '3-Year Sovereign Term (Save 25%)', value: 'triennial' },
      ]}
      defaultValue="yearly"
      ariaLabel="Billing term"
    />
  );
}

/**
 * Translated labels and an accessible name for the `fr` build — the switch carries
 * no hardcoded English of its own, so everything visible here comes from props.
 */
export function Translated() {
  return (
    <PricingToggle
      options={[
        { label: 'Engagement mensuel', value: 'monthly' },
        { label: 'Contrat annuel (-15 %)', value: 'yearly' },
      ]}
      ariaLabel="Périodicité de facturation"
    />
  );
}
