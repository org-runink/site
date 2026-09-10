import { InvestorLogo, Surface } from '@runink/ui';

/*
 * `static/images/company/investor-*.svg` are theme placeholder blobs and the
 * capture server serves only the bundle, so a repo path would 404. These are
 * self-contained SVG wordmarks — the cell needs a real image to show the
 * grayscale treatment at all.
 */
function wordmark(name: string): string {
  const width = 40 + name.length * 15;
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="48" viewBox="0 0 ${width} 48">` +
    '<circle cx="17" cy="24" r="11" fill="#E2610B"/>' +
    `<text x="36" y="32" font-family="Helvetica,Arial,sans-serif" font-size="24" font-weight="700" fill="#E7E2D6">${name}</text>` +
    '</svg>';
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

/**
 * The image branch: a supplied logo, desaturated until hovered. The padded,
 * centred cell is all this component paints — the row around it sets the size.
 */
export function Default() {
  return <InvestorLogo name="Meridian Capital" image={wordmark('Meridian Capital')} />;
}

/**
 * The fallback branch: no `image`, so the name is set as a `primary-400`
 * wordmark and still holds its place in the row. This is what a partner whose
 * logo has not been supplied yet looks like.
 */
export function WordmarkFallback() {
  return <InvestorLogo name="Bootstrapped" />;
}

/**
 * The component's own `@example` grid — three supplied logos and one fallback,
 * four across. The cell that shows the two branches sitting at the same weight
 * rather than one dwarfing the other.
 */
export function InAGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      <InvestorLogo name="Northwind Ventures" image={wordmark('Northwind')} />
      <InvestorLogo name="Portside Capital" image={wordmark('Portside')} />
      <InvestorLogo name="Meridian Capital" image={wordmark('Meridian')} />
      <InvestorLogo name="Bootstrapped" />
    </div>
  );
}

/**
 * A wall of five partners in a flex row — the density the company page uses.
 * At this size the whole point is legible: the logos read as one quiet,
 * uniform texture, and nothing in the row shouts.
 */
export function PartnerRow() {
  return (
    <div className="flex flex-wrap items-center justify-center">
      <InvestorLogo name="Northwind Ventures" image={wordmark('Northwind')} />
      <InvestorLogo name="Portside Capital" image={wordmark('Portside')} />
      <InvestorLogo name="Meridian Capital" image={wordmark('Meridian')} />
      <InvestorLogo name="Valdera Group" image={wordmark('Valdera')} />
      <InvestorLogo name="Cascadia Partners" />
    </div>
  );
}

/**
 * `Default` on the sheet ground. Not one class or prop differs, only `ground` — the
 * component paints nothing but a padded centred cell, so there is nothing of its own
 * to rebind.
 *
 * **Read this one expecting the wordmark to disappear.** A supplied logo is an image,
 * not a token, so it cannot follow the ground — and this stand-in is drawn at
 * `fill="#E7E2D6"`, a near-white ink chosen for the console, which `grayscale` keeps
 * near-white. On the sheet canvas that is light-on-light, and only the orange dot
 * survives. The stand-in is the preview's own so nothing ships broken, but the failure
 * is the caller's to avoid: a partner logo supplied as a single-tone light-on-dark asset
 * fails here identically. A wall that has to work on both grounds needs two assets.
 *
 * The no-`image` branch is the one that does survive — `WordmarkFallback` sets the name
 * in `text-secondary`, which rebinds.
 */
export function OnSheet() {
  return (
    <Surface ground="sheet" tone="canvas" className="p-8">
      <InvestorLogo name="Meridian Capital" image={wordmark('Meridian Capital')} />
    </Surface>
  );
}
