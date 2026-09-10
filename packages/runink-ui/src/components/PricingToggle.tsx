import { useState, type HTMLAttributes } from 'react';
import { cx } from '../lib/cx';

export interface PricingToggleOption {
  /** Visible label, e.g. `"Annual Contract (Save 15%)"`. */
  label: string;
  /** The value reported to `onChange`, e.g. `"yearly"`. Must be unique. */
  value: string;
}

export interface PricingToggleProps extends Omit<HTMLAttributes<HTMLElement>, 'onChange' | 'defaultValue'> {
  /** The segments, left to right. Two is the intended count; more still lay out. */
  options: PricingToggleOption[];
  /** Controlled selection. Pair it with `onChange` and own the state upstream. */
  value?: string;
  /** Initial selection when uncontrolled. Defaults to the first option, as the template did. */
  defaultValue?: string;
  /** Fired with the newly selected option's `value`. */
  onChange?: (value: string) => void;
  /** Accessible name for the group. Defaults to `Pricing toggle`. */
  ariaLabel?: string;
}

/**
 * The monthly/annual segmented switch above a pricing table.
 *
 * A pill-shaped ink track with one button per option; the selected segment is the
 * solid `fill-accent` pill. Works controlled (`value` + `onChange`) or uncontrolled, and with
 * neither prop it still renders its first option selected, which is the state the
 * template booted into.
 *
 * Two deliberate departures from the shortcode. Its inline `<script>` is gone:
 * selection is `useState`, and instead of mutating `data-pricing` on `<html>` and
 * dispatching a `pricing:toggle` event for `PricingTable` to pick up, this reports
 * through `onChange` — lift the state into the page and pass it to the table's
 * `period` prop. And the absolutely positioned sliding indicator is gone too: it
 * was sized from `offsetWidth`/`offsetLeft` at runtime, so it measured zero until
 * JavaScript ran and would be invisible in a static render. The background moves
 * with the selected button instead, which looks identical at rest and needs no
 * measurement.
 *
 * Brings its own narrow `py-4` rhythm so it can sit tight above the table; put it
 * on `Surface` tone `canvas`.
 *
 * @example
 * const [period, setPeriod] = useState<PricingPeriod>('monthly');
 *
 * <PricingToggle
 *   options={[
 *     { label: 'Monthly Commitment', value: 'monthly' },
 *     { label: 'Annual Contract (Save 15%)', value: 'yearly' },
 *   ]}
 *   value={period}
 *   onChange={(value) => setPeriod(value as PricingPeriod)}
 * />
 */
export function PricingToggle({
  options,
  value,
  defaultValue,
  onChange,
  ariaLabel = 'Pricing toggle',
  className,
  ...rest
}: PricingToggleProps) {
  const [uncontrolled, setUncontrolled] = useState(defaultValue ?? options[0]?.value ?? '');
  const active = value ?? uncontrolled;

  function select(next: string) {
    if (value === undefined) setUncontrolled(next);
    onChange?.(next);
  }

  return (
    <section className={cx('py-4', className)} {...rest}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div
            role="tablist"
            aria-label={ariaLabel}
            className="relative inline-flex rounded-full border border-hairline bg-canvas p-1.5 shadow-inner"
          >
            {options.map((option) => {
              const selected = option.value === active;
              return (
                <button
                  key={option.value}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => select(option.value)}
                  className={cx(
                    'relative z-10 rounded-full px-6 py-2.5 text-xs font-black uppercase tracking-[0.15em] transition-colors duration-300',
                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-fill-accent focus-visible:ring-offset-1 focus-visible:ring-offset-surface',
                    selected
                      ? 'bg-fill-accent text-on-accent shadow-md'
                      : 'text-secondary hover:text-primary',
                  )}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
