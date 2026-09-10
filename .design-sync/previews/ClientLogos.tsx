import { ClientLogos, Surface } from '@runink/ui';
import type { ClientLogo } from '@runink/ui';

/*
 * The repo's `static/images/logos/` wall is theme filler — third-party
 * trademarks (Kroger, Instituto Vital Brazil) that would read as fabricated
 * endorsements in a design-system preview — and the capture server only serves
 * the bundle, so `/images/...` would 404 anyway. These are self-contained SVG
 * wordmarks for the same fictional operators the component's own `@example`
 * names, so every cell renders deterministically with no network.
 */
type Mark = 'block' | 'ring' | 'chevron';

const MARK: Record<Mark, string> = {
  block: '<rect x="3" y="10" width="22" height="22" rx="6" fill="#E7E2D6"/>',
  ring: '<circle cx="14" cy="21" r="9" fill="none" stroke="#E7E2D6" stroke-width="5"/>',
  chevron: '<path d="M3 32 L14 10 L25 32 L18.5 32 L14 22 L9.5 32 Z" fill="#E7E2D6"/>',
};

function wordmark(name: string, mark: Mark): string {
  const width = 44 + name.length * 13;
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="42" viewBox="0 0 ${width} 42">` +
    MARK[mark] +
    `<text x="36" y="29" font-family="Helvetica,Arial,sans-serif" font-size="21" font-weight="700" fill="#E7E2D6">${name}</text>` +
    '</svg>';
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

const logo = (name: string, mark: Mark): ClientLogo => ({ name, logo: wordmark(name, mark) });

/** The four operators the component's `@example` ships with. */
const CORE: ClientLogo[] = [
  logo('Northbound Logistics', 'chevron'),
  logo('Harbor Freight Systems', 'block'),
  logo('Meridian 3PL', 'ring'),
  logo('Atlas Customs Brokers', 'block'),
];

/** Enough marks that the marquee track is visibly longer than the viewport. */
const WALL: ClientLogo[] = [
  ...CORE,
  logo('Cascadia Reefer Lines', 'ring'),
  logo('Port Valdera Terminals', 'chevron'),
];

/**
 * The default: the marquee running. The track is rendered twice and translated
 * -50%, so the strip is full of logos at any moment the screenshot lands — this
 * cell is the one that proves the loop has no gap.
 */
export function Default() {
  return <ClientLogos title="Moving freight for operators who cannot wait on IT" logos={WALL} />;
}

/**
 * `animate={false}` — the deterministic composition. A short list that fits
 * gets a centred, wrapping row instead of a scroll, which is the right choice
 * whenever the wall is not long enough to loop convincingly.
 */
export function StaticRow() {
  return (
    <ClientLogos
      title="Trusted at the gate, the terminal and the dock"
      logos={CORE}
      animate={false}
    />
  );
}

/**
 * No `title` — the shipped default heading, over a static three-logo row. The
 * shortest thing this band can be.
 */
export function DefaultHeading() {
  return <ClientLogos logos={CORE.slice(0, 3)} animate={false} />;
}

/**
 * The full six-logo wall held still, so the flattening treatment is readable:
 * every mark is `grayscale` at 60% opacity and capped at `max-h-6`, which is
 * what keeps the band reading as texture rather than competing with the
 * sections either side of it.
 */
export function FullWallStatic() {
  return (
    <ClientLogos
      title="Moving freight for operators who cannot wait on IT"
      logos={WALL}
      animate={false}
    />
  );
}

/**
 * `StaticRow` on the sheet ground — held still with `animate={false}` so the screenshot
 * is deterministic rather than catching the marquee mid-translate. Not one class or prop
 * differs from it, only `ground`: the band's heading and its flattening treatment
 * (`grayscale` at 60% opacity) both follow the surface.
 *
 * **Read this one expecting the marks to disappear.** A supplied logo is an image, not a
 * token, so it cannot rebind with the ground — and these stand-ins are drawn at
 * `fill="#E7E2D6"`, a near-white ink chosen for the console. On the sheet canvas that is
 * light-on-light, and 60% opacity makes it worse. The stand-ins are the preview's own,
 * so nothing ships broken; the real lesson is for the caller, because any customer
 * wordmark supplied as a single-tone light-on-dark asset fails here identically. A wall
 * that has to work on both grounds needs two assets, or marks with their own ground.
 */
export function OnSheet() {
  return (
    <Surface ground="sheet" tone="canvas" className="p-8">
      <ClientLogos
        title="Trusted at the gate, the terminal and the dock"
        logos={CORE}
        animate={false}
      />
    </Surface>
  );
}
