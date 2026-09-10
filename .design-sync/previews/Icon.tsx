import { Icon } from '@runink/ui';
import type { IconName } from '@runink/ui';

/**
 * Every name the registry answers to, in the order the `IconName` union declares
 * them. Aliases are included deliberately — an agent that writes `"users"` or
 * `"search"` should be able to find it here and see what it draws.
 */
const REGISTRY: IconName[] = [
  'academic-cap',
  'adjustments-vertical',
  'analytics',
  'arrow-path',
  'arrow-right',
  'attribution',
  'bolt',
  'book-open',
  'calendar',
  'chart',
  'chart-bar',
  'check',
  'check-circle',
  'chevron-down',
  'circle-stack',
  'clipboard-document-list',
  'clipboard-list',
  'code-bracket-square',
  'collection',
  'command-line',
  'cpu-chip',
  'cube-transparent',
  'currency-dollar',
  'eye',
  'globe-alt',
  'hand-thumb-up',
  'light-bulb',
  'lightbulb',
  'lock-stack',
  'magnifying-glass',
  'map',
  'menu',
  'pencil',
  'puzzle-piece',
  'rocket-launch',
  'scale',
  'search',
  'server-stack',
  'shield-check',
  'tag',
  'user',
  'user-group',
  'users',
];

/** `[alias, canonical]` — the seven pairs the Hugo registry carried forward. */
const ALIAS_PAIRS: [IconName, IconName][] = [
  ['analytics', 'chart-bar'],
  ['chart', 'chart-bar'],
  ['check', 'check-circle'],
  ['clipboard-list', 'clipboard-document-list'],
  ['lightbulb', 'light-bulb'],
  ['search', 'magnifying-glass'],
  ['users', 'user-group'],
];

function Swatch({ name }: { name: IconName }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-primary-700 bg-primary-900 px-3 py-2">
      <Icon name={name} className="h-6 w-6 shrink-0 text-brand-sage-dark" />
      <span className="break-words font-mono text-[11px] leading-tight text-primary-300">{name}</span>
    </div>
  );
}

/**
 * The whole registry — every name the `IconName` union accepts, next to the glyph
 * it draws, at the component's default `w-6 h-6`. This is the lookup table: find
 * the glyph you want, read the exact string to pass to `name` off the label.
 */
export function Registry() {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-4">
      {REGISTRY.map((name) => (
        <Swatch key={name} name={name} />
      ))}
    </div>
  );
}

/**
 * Sizing is entirely a `className` concern. The component defaults to
 * `w-6 h-6`, but drops that default the moment the caller passes any
 * width/height/size utility — which is what makes `h-5 w-5` (smaller than the
 * default) actually win, despite Tailwind emitting `w-5` before `w-6`.
 */
export function Sizes() {
  return (
    <div className="flex flex-wrap items-end gap-8">
      {[
        { cls: 'h-4 w-4', label: 'h-4 w-4' },
        { cls: 'h-5 w-5', label: 'h-5 w-5' },
        { cls: undefined, label: 'default (w-6 h-6)' },
        { cls: 'h-8 w-8', label: 'h-8 w-8' },
        { cls: 'h-10 w-10', label: 'h-10 w-10' },
        { cls: 'h-12 w-12', label: 'h-12 w-12' },
      ].map(({ cls, label }) => (
        <div key={label} className="flex flex-col items-center gap-3">
          <Icon name="shield-check" className={cls ? `${cls} text-brand-sage-dark` : 'text-brand-sage-dark'} />
          <span className="font-mono text-[11px] text-primary-400">{label}</span>
        </div>
      ))}
    </div>
  );
}

/**
 * Icons are stroked in `currentColor` and set no colour of their own, so they
 * take the colour of the icon element or of any ancestor. The last pair shows
 * inheritance: neither icon carries a colour utility, only the wrapper does —
 * this is how the card components tint their icon on `group-hover` without the
 * icon knowing anything about it.
 */
export function ColourInheritance() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-8">
        {[
          'text-brand-sage-dark',
          'text-brand-orange',
          'text-brand-copper',
          'text-secondary-500',
          'text-white',
        ].map((tone) => (
          <div key={tone} className="flex flex-col items-center gap-3">
            <Icon name="cube-transparent" className={`h-10 w-10 ${tone}`} />
            <span className="font-mono text-[11px] text-primary-400">{tone}</span>
          </div>
        ))}
      </div>

      <div className="rounded-card border border-primary-700 bg-primary-800 p-6 text-brand-orange">
        <div className="mb-4 font-mono text-[11px] uppercase tracking-widest">
          inherited from the wrapper — no colour utility on either icon
        </div>
        <div className="flex items-center gap-6">
          <Icon name="bolt" className="h-10 w-10" />
          <Icon name="rocket-launch" className="h-10 w-10" />
          <span className="text-sm">Both glyphs pick up `text-brand-orange` from this container.</span>
        </div>
      </div>
    </div>
  );
}

/**
 * The seven aliases the Hugo registry shipped, each next to the canonical name it
 * resolves to. Both columns must draw the identical glyph — content written
 * against either spelling keeps working, which is the whole point of keeping them.
 */
export function Aliases() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      {ALIAS_PAIRS.map(([alias, canonical]) => (
        <div
          key={alias}
          className="flex items-center gap-4 rounded-card border border-primary-700 bg-primary-800 p-4"
        >
          <Icon name={alias} className="h-8 w-8 text-brand-sage-dark" />
          <span className="font-mono text-[11px] text-primary-400">{alias}</span>
          <Icon name="arrow-right" className="h-4 w-4 text-primary-400" />
          <Icon name={canonical} className="h-8 w-8 text-brand-sage-dark" />
          <span className="font-mono text-[11px] text-white">{canonical}</span>
        </div>
      ))}
    </div>
  );
}

/**
 * An unrecognised name renders the plus-in-circle fallback rather than an empty
 * `<svg>` box — matching the Hugo registry, so a typo in page content degrades to
 * a visible placeholder instead of a hole in the layout.
 */
export function UnknownName() {
  return (
    <div className="flex flex-wrap items-center gap-8">
      <div className="flex flex-col items-center gap-3">
        <Icon name={'container-ship' as IconName} className="h-12 w-12 text-brand-orange" />
        <span className="font-mono text-[11px] text-primary-400">&quot;container-ship&quot; (unknown)</span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <Icon name="server-stack" className="h-12 w-12 text-brand-sage-dark" />
        <span className="font-mono text-[11px] text-primary-400">&quot;server-stack&quot; (known)</span>
      </div>
    </div>
  );
}
