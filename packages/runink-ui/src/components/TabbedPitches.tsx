import { useRef, useState } from 'react';
import type { HTMLAttributes, KeyboardEvent, ReactNode } from 'react';
import { cx } from '../lib/cx';
import { Icon, type IconName } from './Icon';

/**
 * One stakeholder's tab plus the pitch panel it reveals.
 *
 * The panel shape is fixed by the design: an emphatic problem/remedy headline, a
 * single body paragraph, then a labelled one-line closing quote below a rule.
 * There are no bullets or metrics in this pattern — when a pitch needs those it
 * belongs in a different component.
 */
export interface TabbedPitch {
  /** Stable id. Used for the tab/panel `aria` wiring and by `defaultTabId`. */
  id: string;
  /** Icon in the circular tile above the tab label. */
  icon: IconName;
  /** Short tab label — a role, not a sentence (`"The CFO"`, `"DC Ops Director"`). */
  label: string;
  /**
   * The pitch headline. A node, because the pattern is two emphasised spans
   * inside running text: the pain in `font-bold text-red-300` and the remedy in
   * `font-bold text-ink-success`.
   */
  headline: ReactNode;
  /** The argument: one paragraph, sitting above a hairline rule. */
  body: ReactNode;
  /**
   * Uppercase micro-label over the closing line. Defaults to `closerLabel` on
   * the component, which itself defaults to `"The Closer"`.
   */
  closerLabel?: string;
  /** The one-line closing quote, set large, green and italic. Quote marks included by the caller. */
  closer?: ReactNode;
}

export interface TabbedPitchesProps extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
  /** The stakeholder tabs, left to right. The first one is active unless `defaultTabId` says otherwise. */
  tabs: TabbedPitch[];
  /** Section headline, rendered in the orange gradient. Omit for a bare tab block. */
  heading?: ReactNode;
  /** Which tab starts active. Falls back to the first tab when absent or unmatched. */
  defaultTabId?: string;
  /** Default micro-label above every closing line. Defaults to `"The Closer"`. */
  closerLabel?: string;
  /**
   * Decorative layer painted behind the content, full-bleed. The site passes the
   * `background-effects` partial tinted `brand-green`; leave it out and the band
   * is a flat `primary-950`.
   */
  backgroundEffect?: ReactNode;
  /** Draw the oversized decorative quote glyph in the panel's top-right. Defaults to true. */
  quoteGlyph?: boolean;
  /** Accessible name for the tab list. Defaults to `"Pitch by stakeholder"`. */
  tabsLabel?: string;
}

/** Wide-screen column count for the tab strip, keyed by how many tabs there are. */
const COLUMNS: Record<number, string> = {
  1: 'lg:grid-cols-1',
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
  5: 'lg:grid-cols-5',
  6: 'lg:grid-cols-6',
};

/**
 * Stakeholder-segmented sales pitches: a strip of role tabs over one pitch panel.
 *
 * This is the homepage's "tailored value for every stakeholder" band. Each tab is
 * a buyer persona; selecting one swaps the panel beneath it for that persona's
 * argument — pain headline, reasoning paragraph, and a quotable closing line. Use
 * it when one product has to be sold differently to five people in the same room;
 * for parallel, non-exclusive content use a card grid instead.
 *
 * Paints its own `primary-950` band with a top hairline, so it needs no `Surface`
 * wrapper, and it clips its own overflow for `backgroundEffect`. Give it an `id`
 * (the site uses `id="painkiller"`) if it is a nav anchor target.
 *
 * Ported from the Hugo shortcode's inline `<script>`: the active tab is React
 * state, not a toggled `.active` class. It renders meaningfully with no
 * interaction — the first tab (or `defaultTabId`) is selected and its panel
 * visible. The tabs are a real `tablist`/`tab`/`tabpanel` set with automatic
 * activation: left/right arrows, Home and End move selection and focus, and only
 * the selected tab is in the tab order.
 *
 * The headline gradient is the brand's orange close (`secondary-500` →
 * `brand-orange-dark`), which no `GradientText` sweep covers, so the utilities are
 * inlined here.
 *
 * @example
 * // Two of the five homepage personas — the full set (CFO, DC Ops Director,
 * // Merchandise Mgr, Compliance Officer, Branch Manager) lives on the site's
 * // homepage via the `painkiller-pitches` shortcode.
 * <TabbedPitches
 *   id="painkiller"
 *   heading="Tailored value for every stakeholder"
 *   tabs={[
 *     {
 *       id: 'cfo',
 *       icon: 'currency-dollar',
 *       label: 'The CFO',
 *       headline: (
 *         <>
 *           Stop waiting 30 days for a <strong className="font-bold text-red-300">monthly close</strong>. Get{' '}
 *           <strong className="font-bold text-ink-success">End of Cycle Underwriting</strong>.
 *         </>
 *       ),
 *       body: "RPA tools are just a cost center that speeds up data entry. RunInk is a capital recovery asset. By deploying reasoning-capable specialized systems with deep semantic understanding, we don't just 'process' numbers—we autonomously underwrite the end of billing cycle perfectly. We dynamically reconcile inbound cargo data against your ledger, eliminating manual accounting bottlenecks.",
 *       closer: '"Perfect financial reconciliation without the headcount."',
 *     },
 *     {
 *       id: 'ops',
 *       icon: 'adjustments-vertical',
 *       label: 'DC Ops Director',
 *       headline: (
 *         <>
 *           Your dock doors are <strong className="font-bold text-red-300">bottlenecked</strong>. Automate your{' '}
 *           <strong className="font-bold text-ink-success">Cargo Verification</strong>.
 *         </>
 *       ),
 *       body: "RunInk isn't another dashboard to manage. It's an autonomous teammate equipped with advanced logical mapping to make sense of your unstructured receiving data. It reasons through the 80% of low-value workflows entirely on its own—reading inbound cargo manifests, comparing them against POs, and verifying dock-to-stock integrity instantly so your DC teams can keep moving.",
 *       closer: '"Inbound verification in milliseconds, not hours."',
 *     },
 *     {
 *       id: 'compliance',
 *       icon: 'shield-check',
 *       label: 'Compliance Officer',
 *       headline: (
 *         <>
 *           Stop eating the cost of{' '}
 *           <strong className="font-bold text-red-300">vendor compliance failures</strong>. Deploy the{' '}
 *           <strong className="font-bold text-ink-success">Digital Paralegal</strong>.
 *         </>
 *       ),
 *       body: "Managing retail vendors logically shouldn't mean accepting abstract loss patterns as a cost of business. RunInk's Claims Dispute Operator autonomously processes complex inbound SLA deviations, synthesizing receiving chronologies and cross-referencing vendor agreements to logically draft chargebacks without human bottlenecking.",
 *       closer: '"Hold your suppliers to their SLAs, automatically."',
 *     },
 *   ]}
 * />
 */
export function TabbedPitches({
  tabs,
  heading,
  defaultTabId,
  closerLabel = 'The Closer',
  backgroundEffect,
  quoteGlyph = true,
  tabsLabel = 'Pitch by stakeholder',
  className,
  ...rest
}: TabbedPitchesProps) {
  const initial = tabs.find((tab) => tab.id === defaultTabId)?.id ?? tabs[0]?.id ?? '';
  const [activeId, setActiveId] = useState(initial);
  const buttons = useRef<Array<HTMLButtonElement | null>>([]);

  // The stored id can be stale if `tabs` changes under us; fall back to the first.
  const active = tabs.find((tab) => tab.id === activeId) ?? tabs[0];

  const select = (index: number) => {
    const next = tabs[(index + tabs.length) % tabs.length];
    if (!next) return;
    setActiveId(next.id);
    buttons.current[tabs.indexOf(next)]?.focus();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const moves: Record<string, number | undefined> = {
      ArrowRight: index + 1,
      ArrowLeft: index - 1,
      Home: 0,
      End: tabs.length - 1,
    };
    const target = moves[event.key];
    if (target === undefined) return;
    event.preventDefault();
    select(target);
  };

  return (
    <section
      className={cx(
        'relative overflow-hidden border-t border-hairline bg-canvas py-32',
        className,
      )}
      {...rest}
    >
      {backgroundEffect}

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-6xl px-6">
          {heading && (
            <div className="mb-16 flex flex-col items-center text-center">
              <h2 className="mb-2 bg-gradient-to-r from-secondary-500 to-fill-accent bg-clip-text text-6xl font-black uppercase italic leading-[0.9] tracking-tighter text-transparent drop-shadow-lg md:text-7xl lg:text-[90px]">
                {heading}
              </h2>
            </div>
          )}

          <div
            role="tablist"
            aria-label={tabsLabel}
            aria-orientation="horizontal"
            className={cx(
              'relative z-10 mx-auto mb-6 grid w-full max-w-6xl grid-cols-2 gap-4',
              COLUMNS[tabs.length] ?? 'lg:grid-cols-5',
            )}
          >
            {tabs.map((tab, index) => {
              const selected = tab.id === active?.id;
              return (
                <button
                  key={tab.id}
                  ref={(node) => {
                    buttons.current[index] = node;
                  }}
                  type="button"
                  role="tab"
                  id={`pitch-tab-${tab.id}`}
                  aria-selected={selected}
                  aria-controls={`pitch-panel-${tab.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActiveId(tab.id)}
                  onKeyDown={(event) => onKeyDown(event, index)}
                  className={cx(
                    'group flex flex-col items-center justify-center rounded-chip border bg-canvas px-4 py-6 text-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-500',
                    selected
                      ? 'border-hairline'
                      : 'border-hairline hover:border-hairline hover:bg-surface',
                  )}
                >
                  <div
                    className={cx(
                      'mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-hairline transition-colors',
                      selected ? 'bg-canvas' : 'bg-white/5',
                    )}
                  >
                    <Icon
                      name={tab.icon}
                      className={cx('h-5 w-5 transition-colors', selected ? 'text-white' : 'text-secondary')}
                    />
                  </div>
                  <h3
                    className={cx(
                      'text-sm font-bold tracking-wide transition-colors duration-300',
                      selected ? 'text-white' : 'text-secondary',
                    )}
                  >
                    {tab.label}
                  </h3>
                </button>
              );
            })}
          </div>

          <div className="relative z-0 mx-auto -mt-2 w-full max-w-6xl overflow-hidden rounded-card border border-hairline bg-canvas p-8 shadow-xl md:p-12 min-h-[360px]">
            {quoteGlyph && (
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-8 top-12 font-serif text-[180px] font-black italic leading-none text-ink-success/30"
              >
                &ldquo;
              </div>
            )}

            {tabs.map((tab) => {
              const selected = tab.id === active?.id;
              return (
                <div
                  key={tab.id}
                  role="tabpanel"
                  id={`pitch-panel-${tab.id}`}
                  aria-labelledby={`pitch-tab-${tab.id}`}
                  hidden={!selected}
                  tabIndex={selected ? 0 : -1}
                  className={cx('focus:outline-none', !selected && 'hidden')}
                >
                  <h3 className="mb-8 text-3xl font-black italic leading-tight tracking-tight text-secondary lg:text-4xl">
                    {tab.headline}
                  </h3>
                  <p className="mb-10 border-b border-hairline/50 pb-10 pr-8 text-base leading-relaxed text-secondary md:text-lg">
                    {tab.body}
                  </p>
                  {tab.closer && (
                    <div>
                      <h4 className="mb-2 text-[10px] font-black uppercase tracking-[0.15em] text-primary/50">
                        {tab.closerLabel ?? closerLabel}
                      </h4>
                      <p className="text-xl font-black italic text-ink-success">{tab.closer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
