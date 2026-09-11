import { InvestorLogo, Surface } from '@runink/ui';

/*
 * `static/images/company/investor-*.svg` are theme placeholder blobs and the
 * capture server serves only the bundle, so a repo path would 404. These are
 * self-contained SVG wordmarks — the cell needs a real image to show the
 * grayscale treatment at all.
 *
 * The type is `#8A8178`, a mid warm grey rather than the near-white it used to be:
 * an image cannot rebind with the ground, so the tone has to read on both canvases.
 * The dot keeps a saturated orange precisely so one element in the asset has colour
 * for `grayscale` to take away. See `OnSheet`.
 */
function wordmark(name: string): string {
  const width = 40 + name.length * 15;
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="48" viewBox="0 0 ${width} 48">` +
    '<circle cx="17" cy="24" r="11" fill="#E2610B"/>' +
    `<text x="36" y="32" font-family="Helvetica,Arial,sans-serif" font-size="24" font-weight="700" fill="#8A8178">${name}</text>` +
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
 * The fallback branch: no `image`, so the name is set as a `secondary`
 * wordmark and still holds its place in the row. Unlike a supplied logo, that ink
 * follows the ground. This is what a partner whose
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
 * **The wordmark survives; the dot is what does not.** A supplied logo is an image, not
 * a token, so it cannot follow the ground — but this stand-in's type is `#8A8178`, a mid
 * warm grey, and `grayscale` preserves luminance, so it lands at about `rgb(130,130,130)`
 * on the sheet canvas's `rgb(251,247,241)`: near 3.5:1, legible, clearing the floor a
 * mark needs if not the one text does.
 *
 * The casualty is the orange dot. `grayscale` is not a rescue treatment, it is a
 * desaturation: `#E2610B` flattens to roughly `rgb(118,118,118)` — within a dozen levels
 * of the type beside it — so the one element carrying brand colour reads as one more grey
 * circle, on this ground and on the console alike. Colour only comes back on
 * `hover:grayscale-0`, which no static capture shows. The thing to avoid is still the
 * caller's: a partner logo supplied as a single-tone near-white asset disappears here,
 * because nothing downstream can raise its luminance.
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
