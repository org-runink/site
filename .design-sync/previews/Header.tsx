import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { Header, Surface, type HeaderLanguage, type HeaderNavItem } from '@runink/ui';

// Real site assets, IMPORTED rather than referenced by URL. The capture server
// serves only the bundle directory, so `/images/flags/gb.svg` would 404 — but the
// preview build gives `.png`/`.svg` imports the `dataurl` loader, so importing
// inlines the genuine artwork. `assets/images/logo.png` is the file Hugo
// publishes as `/images/logo.png`, the path `Header` defaults to.
import logoSrc from '../../assets/images/logo.png';
import flagGb from '../../static/images/flags/gb.svg';
import flagFr from '../../static/images/flags/fr.svg';
import flagEs from '../../static/images/flags/es.svg';
import flagBr from '../../static/images/flags/br.svg';

// `menu.main` for the `en` language in hugo.toml, with the Use cases entry
// expanded into the dropdown the component's @example documents.
const NAV: HeaderNavItem[] = [
  { label: 'Why Runink?', href: '/#why-runink' },
  { label: 'What makes it a painkiller', href: '/#painkiller' },
  {
    label: 'Use cases',
    children: [
      { label: 'Claims recovery', href: '/use-cases/claims-recovery/' },
      { label: 'Compliance', href: '/use-cases/compliance/' },
      { label: 'Fulfillment optimization', href: '/use-cases/fulfillment-optimization/' },
    ],
  },
  { label: 'Blog', href: '/blog/' },
  { label: 'Pricing', href: '/pricing' },
];

// The site's four translations, in hugo.toml's order.
const LANGUAGES: HeaderLanguage[] = [
  { label: 'English', href: '/', flagSrc: flagGb, current: true },
  { label: 'Français', href: '/fr/', flagSrc: flagFr },
  { label: 'Español', href: '/es/', flagSrc: flagEs },
  { label: 'Português', href: '/pt/', flagSrc: flagBr },
];

const ACTIONS = {
  getStarted: { label: 'Book your Consultation', href: '/#contact' },
  checkItOut: { label: 'Check it out', href: '/demo/' },
};

/**
 * Renders its children in a same-origin iframe of a given viewport size, re-using
 * the host page's stylesheets, then scales the frame down if the card cannot fit
 * it at 1:1.
 *
 * A real nested viewport is the only way to preview this component honestly.
 * Tailwind breakpoints answer to the *viewport*, never to an ancestor's width, so
 * a narrow `div` cannot produce the `md:hidden` drawer, and the full desktop bar
 * (lockup + five nav entries + two CTAs + four flags) needs about 1250px before
 * it stops colliding with itself. The scale is computed from the live window, so
 * it is 1 — a plain, unscaled frame — as soon as the card is given a viewport
 * large enough.
 */
function Viewport({ children, width, height }: { children: ReactNode; width: number; height: number }) {
  const frame = useRef<HTMLIFrameElement | null>(null);
  const [mount, setMount] = useState<HTMLElement | null>(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const fit = Math.min(1, (window.innerWidth - 80) / width, (window.innerHeight - 80) / height);
    setScale(fit > 0 ? fit : 1);
  }, [width, height]);

  useEffect(() => {
    const doc = frame.current?.contentDocument;
    if (!doc) return;
    const base = doc.createElement('base');
    base.href = document.baseURI;
    doc.head.appendChild(base);
    for (const sheet of Array.from(document.querySelectorAll('link[rel="stylesheet"], style'))) {
      doc.head.appendChild(sheet.cloneNode(true));
    }
    doc.documentElement.style.colorScheme = 'dark';
    doc.documentElement.style.overflow = 'hidden';
    doc.body.style.margin = '0';
    doc.body.className = 'bg-canvas';
    setMount(doc.body);
  }, []);

  return (
    <>
      <div style={{ width: width * scale, height: height * scale, overflow: 'hidden' }}>
        <iframe
          ref={frame}
          title={`${width}px viewport`}
          width={width}
          height={height}
          frameBorder={0}
          style={{ transform: `scale(${scale})`, transformOrigin: 'top left', border: 0 }}
        />
      </div>
      {mount ? createPortal(children, mount) : null}
    </>
  );
}

/**
 * The bar as the site ships it — lockup, all five `menu.main` entries, both CTAs
 * and the four-language switcher — at the 1280px desktop viewport it is designed
 * for. `fixed={false}` puts it in the card's flow; left `fixed` (the component's
 * default) it would pin itself to the top of the preview viewport and escape the
 * cell entirely.
 */
export function DesktopBar() {
  return (
    <Viewport width={1280} height={96}>
      <Header
        fixed={false}
        navItems={NAV}
        logoSrc={logoSrc}
        getStarted={ACTIONS.getStarted}
        checkItOut={ACTIONS.checkItOut}
        languages={LANGUAGES}
      />
    </Viewport>
  );
}

/**
 * The same composition on the sheet ground. Not one class differs from
 * `DesktopBar` — only `ground`, because every token rebinds underneath: the bar's
 * `bg-surface/90` and its bottom `border-hairline`, the nav links' ink, and both
 * CTAs (the outlined `ink-accent` one and the filled `fill-accent`/`on-accent` one).
 *
 * Two details are specific to this component's harness. The `Surface` goes *inside*
 * the frame, because `data-ground` cascades through a document and not across an
 * iframe boundary — the outer card's provider cannot reach in. And it takes
 * `min-h-screen` rather than the usual `p-8`: the frame is sized to the bar, so
 * padding would push the bar out of the cell instead of surrounding it.
 */
export function OnSheet() {
  return (
    <Viewport width={1280} height={96}>
      <Surface ground="sheet" tone="canvas" className="min-h-screen">
        <Header
          fixed={false}
          navItems={NAV}
          logoSrc={logoSrc}
          getStarted={ACTIONS.getStarted}
          checkItOut={ACTIONS.checkItOut}
          languages={LANGUAGES}
        />
      </Surface>
    </Viewport>
  );
}

/**
 * The Use cases dropdown held open with `defaultOpenDropdownIndex={2}`, which is
 * the only way this state screenshots — the panel otherwise needs a hover or a
 * click, and the design tool captures at rest. The extra frame height is what
 * keeps the absolutely-positioned panel inside the cell.
 */
export function DropdownOpen() {
  return (
    <Viewport width={1280} height={330}>
      <Header
        fixed={false}
        navItems={NAV}
        logoSrc={logoSrc}
        defaultOpenDropdownIndex={2}
        getStarted={ACTIONS.getStarted}
        checkItOut={ACTIONS.checkItOut}
        languages={LANGUAGES}
      />
    </Viewport>
  );
}

/**
 * The mobile drawer open, via `defaultMobileMenuOpen` — every nav entry stacked,
 * the Use cases children indented under their heading, both CTAs as full-width
 * blocks, and the four flags in the footer row. It only exists below `md`, hence
 * the 400px frame. `fixed={false}` keeps the drawer `absolute` under the bar
 * rather than pinned to the top of the frame.
 */
export function MobileDrawerOpen() {
  return (
    <Viewport width={400} height={820}>
      <Header
        fixed={false}
        defaultMobileMenuOpen
        navItems={NAV}
        logoSrc={logoSrc}
        getStarted={ACTIONS.getStarted}
        checkItOut={ACTIONS.checkItOut}
        languages={LANGUAGES}
      />
    </Viewport>
  );
}
