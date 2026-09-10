import { Footer, Surface, type FooterColumn } from '@runink/ui';

// Real site assets: the mark Hugo publishes as `/images/logo.png`, and the one
// social icon `static/images/social/` ships that hugo.toml's `[params.social]`
// actually points at.
import logoSrc from '../../assets/images/logo.png';
import linkedinIcon from '../../static/images/social/linkedin.svg';

// The three columns from the component's @example, whose destinations are the
// site's real routes.
const COLUMNS: FooterColumn[] = [
  {
    title: 'Platform',
    links: [
      { label: 'Why Runink?', href: '/#why-runink' },
      { label: 'Use cases', href: '/#use-cases' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Check it out', href: '/demo/' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'Runink FACE', href: '/products/face/' },
      { label: 'Downloads', href: '/downloads/' },
      { label: 'Blog', href: '/blog/' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Runink', href: '/company/' },
      { label: 'Book your Consultation', href: '/#contact' },
    ],
  },
];

const SOCIAL = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/runink', iconSrc: linkedinIcon },
];

/**
 * The whole footer: lockup and social row beside the three link columns, over the
 * copyright and legal strip. This is the shape the site ships.
 */
export function Default() {
  return (
    <Footer
      logoSrc={logoSrc}
      columns={COLUMNS}
      social={SOCIAL}
      year={2026}
      bottomLinks={[
        { label: 'Privacy Policy', href: '/privacy/' },
        { label: 'License', href: '/license/' },
      ]}
    />
  );
}

/**
 * The same composition on the sheet ground. Not one class differs from `Default` —
 * only `ground`, because every token rebinds underneath: the band's own `bg-canvas`,
 * its top `border-hairline` and the second rule above the legal strip, the column
 * headings' `text-primary` and the link rows' `text-secondary`.
 *
 * The lockup is the one exception, as it must be: it is a PNG, so it cannot take its
 * colour from the ground the way ink does. This is the cell where that shows.
 *
 * The social mark used to be the second exception and no longer is. It was an `<img>`
 * pointed at an SVG whose fill is `currentColor` — and an SVG loaded through `<img>`
 * is an independent document with no inherited `color`, so `currentColor` fell back
 * to its initial value: pure black, on a near-black band. It read fine here on the
 * sheet, which is exactly why it survived until a grader sampled the console cells.
 * The glyph is now painted as a mask over `bg-current`, so the file supplies the
 * shape and the anchor's ink supplies the colour, on both grounds.
 */
export function OnSheet() {
  return (
    <Surface ground="sheet" tone="canvas" className="p-8">
      <Footer
        logoSrc={logoSrc}
        columns={COLUMNS}
        social={SOCIAL}
        year={2026}
        bottomLinks={[
          { label: 'Privacy Policy', href: '/privacy/' },
          { label: 'License', href: '/license/' },
        ]}
      />
    </Surface>
  );
}

/**
 * Columns and social omitted — the thin legal footer a standalone page (the demo
 * iframe host, a landing page) uses. Proves every block below the lockup is
 * independently optional and the bottom strip still reads.
 */
export function LegalStripOnly() {
  return (
    <Footer
      logoSrc={logoSrc}
      year={2026}
      bottomLinks={[
        { label: 'Privacy Policy', href: '/privacy/' },
        { label: 'License', href: '/license/' },
      ]}
    />
  );
}

/**
 * Localised: French `menu.main` labels and `/fr/` routes from hugo.toml, a custom
 * `copyright` node replacing the generated line, and a product wordmark in place
 * of "Runink". Nothing about the layout is language-specific.
 */
export function Localised() {
  return (
    <Footer
      title="Runink FACE"
      logoSrc={logoSrc}
      columns={[
        {
          title: 'Plateforme',
          links: [
            { label: 'Pourquoi Runink ?', href: '/fr/#why-runink' },
            { label: 'Ce qui nous différencie', href: '/fr/#painkiller' },
            { label: 'Cas d’usage', href: '/fr/#use-cases' },
            { label: 'Tarifs', href: '/fr/pricing' },
          ],
        },
        {
          title: 'Ressources',
          links: [
            { label: 'Blog', href: '/fr/blog/' },
            { label: 'Voir la démo', href: '/fr/demo/' },
          ],
        },
      ]}
      social={SOCIAL}
      copyright="© 2026 Runink SAS. Tous droits réservés."
      bottomLinks={[{ label: 'Confidentialité', href: '/fr/privacy/' }]}
    />
  );
}
