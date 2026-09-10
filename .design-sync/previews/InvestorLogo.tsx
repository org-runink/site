import { InvestorLogo } from '@runink/ui';

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
