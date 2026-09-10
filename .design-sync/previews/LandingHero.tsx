import { LandingHero, Surface } from '@runink/ui';
import type { LandingHeroLayer } from '@runink/ui';

/**
 * The component's own default layers point at `/images/landing/*.svg`, which the
 * design bundle does not serve — they would 404 into broken-image boxes. These
 * are the repo's real `assets/images/landing/` planes, inlined verbatim so the
 * scene renders. In production you pass nothing and take the defaults.
 */
const svg = (source: string) => `data:image/svg+xml;utf8,${encodeURIComponent(source)}`;

const WAREHOUSE = svg(`<svg width="1920" height="1080" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.20"><g transform="translate(200, 300)"><polygon points="100,0 200,50 100,100 0,50" fill="#475569"/><polygon points="0,50 100,100 100,450 0,400" fill="#334155"/><polygon points="100,100 200,50 200,400 100,450" fill="#1E293B"/><polygon points="10,65 90,105 190,55 110,15" fill="#0F172A" opacity="0.5"/><polygon points="20,70 50,85 50,125 20,110" fill="#F59E0B"/><polygon points="50,85 80,100 80,140 50,125" fill="#D97706"/><polygon points="120,80 150,65 150,105 120,120" fill="#65A30D"/><polygon points="10,165 90,205 190,155 110,115" fill="#0F172A" opacity="0.5"/><polygon points="150,165 180,150 180,190 150,205" fill="#BE123C"/><polygon points="120,180 150,165 150,205 120,220" fill="#9F1239"/><polygon points="10,265 90,305 190,255 110,215" fill="#0F172A" opacity="0.5"/><polygon points="20,270 50,285 50,325 20,310" fill="#F59E0B"/></g><g transform="translate(450, 450)"><polygon points="100,0 200,50 100,100 0,50" fill="#64748B"/><polygon points="0,50 100,100 100,450 0,400" fill="#475569"/><polygon points="100,100 200,50 200,400 100,450" fill="#334155"/><polygon points="10,65 90,105 190,55 110,15" fill="#0F172A" opacity="0.5"/><polygon points="20,70 50,85 50,125 20,110" fill="#BE123C"/><polygon points="50,85 80,100 80,140 50,125" fill="#9F1239"/><polygon points="10,165 90,205 190,155 110,115" fill="#0F172A" opacity="0.5"/><polygon points="120,180 180,150 180,210 120,240" fill="#65A30D"/><polygon points="10,265 90,305 190,255 110,215" fill="#0F172A" opacity="0.5"/></g><g transform="translate(1400, 200)"><polygon points="100,0 200,50 100,100 0,50" fill="#475569"/><polygon points="0,50 100,100 100,550 0,500" fill="#334155"/><polygon points="100,100 200,50 200,500 100,550" fill="#1E293B"/><polygon points="10,65 90,105 190,55 110,15" fill="#0F172A" opacity="0.5"/><polygon points="120,80 180,50 180,110 120,140" fill="#F59E0B"/><polygon points="10,165 90,205 190,155 110,115" fill="#0F172A" opacity="0.5"/><polygon points="20,170 80,200 80,260 20,230" fill="#BE123C"/><polygon points="10,265 90,305 190,255 110,215" fill="#0F172A" opacity="0.5"/><polygon points="120,280 150,265 150,305 120,320" fill="#65A30D"/><polygon points="10,365 90,405 190,355 110,315" fill="#0F172A" opacity="0.5"/></g><g transform="translate(1100, 450)"><polygon points="100,0 200,50 100,100 0,50" fill="#64748B"/><polygon points="0,50 100,100 100,450 0,400" fill="#475569"/><polygon points="100,100 200,50 200,400 100,450" fill="#334155"/><polygon points="10,65 90,105 190,55 110,15" fill="#0F172A" opacity="0.5"/><polygon points="20,70 50,85 50,125 20,110" fill="#65A30D"/><polygon points="50,85 80,100 80,140 50,125" fill="#4D7C0F"/><polygon points="10,165 90,205 190,155 110,115" fill="#0F172A" opacity="0.5"/><polygon points="120,180 180,150 180,210 120,240" fill="#F59E0B"/><polygon points="10,265 90,305 190,255 110,215" fill="#0F172A" opacity="0.5"/></g><polygon points="800,900 1000,980 1200,900 1000,820" fill="#0F172A" opacity="0.8"/><polygon points="650,830 850,910 1050,830 850,750" fill="#0F172A" opacity="0.6"/><g transform="translate(950, 880)"><polygon points="50,0 100,25 50,50 0,25" fill="#1E293B"/><polygon points="0,25 50,50 50,70 0,45" fill="#0F172A"/><polygon points="50,50 100,25 100,45 50,70" fill="#020617"/><polygon points="50,5 90,25 50,45 10,25" fill="#F59E0B"/><polygon points="10,25 50,45 50,55 10,35" fill="#D97706"/><polygon points="50,45 90,25 90,35 50,55" fill="#B45309"/></g></g></svg>`);
const DISTRIBUTION = svg(`<svg width="1920" height="1080" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.20"><g transform="translate(800, 400)"><polygon points="160,200 320,120 160,40 0,120" fill="#475569" opacity="0.8"/><polygon points="0,120 160,200 160,280 0,200" fill="#334155" opacity="0.9"/><polygon points="160,200 320,120 320,200 160,280" fill="#1E293B" opacity="0.9"/><polygon points="160,170 280,110 160,50 40,110" fill="#F59E0B" opacity="0.9"/><polygon points="40,110 160,170 160,220 40,160" fill="#D97706" opacity="0.9"/><polygon points="160,170 280,110 280,160 160,220" fill="#B45309" opacity="0.9"/><polygon points="160,140 190,125 160,30 130,125" fill="#FCD34D" opacity="0.8"/></g><g transform="translate(300, 600) scale(0.7)"><polygon points="160,200 320,120 160,40 0,120" fill="#64748B" opacity="0.8"/><polygon points="0,120 160,200 160,280 0,200" fill="#475569" opacity="0.9"/><polygon points="160,200 320,120 320,200 160,280" fill="#334155" opacity="0.9"/><polygon points="160,170 250,125 160,80 70,125" fill="#BE123C" opacity="0.9"/><polygon points="70,125 160,170 160,220 70,175" fill="#9F1239" opacity="0.9"/><polygon points="160,170 250,125 250,175 160,220" fill="#881337" opacity="0.9"/></g><g transform="translate(1400, 250) scale(0.6)"><polygon points="160,200 320,120 160,40 0,120" fill="#64748B" opacity="0.8"/><polygon points="0,120 160,200 160,280 0,200" fill="#475569" opacity="0.9"/><polygon points="160,200 320,120 320,200 160,280" fill="#334155" opacity="0.9"/><polygon points="160,170 250,125 160,80 70,125" fill="#65A30D" opacity="0.9"/><polygon points="70,125 160,170 160,220 70,175" fill="#4D7C0F" opacity="0.9"/><polygon points="160,170 250,125 250,175 160,220" fill="#3F6212" opacity="0.9"/></g><g transform="translate(1300, 750) scale(0.8)"><polygon points="160,200 320,120 160,40 0,120" fill="#64748B" opacity="0.8"/><polygon points="0,120 160,200 160,280 0,200" fill="#475569" opacity="0.9"/><polygon points="160,200 320,120 320,200 160,280" fill="#334155" opacity="0.9"/><polygon points="160,170 250,125 160,80 70,125" fill="#BE123C" opacity="0.9"/><polygon points="70,125 160,170 160,220 70,175" fill="#9F1239" opacity="0.9"/><polygon points="160,170 250,125 250,175 160,220" fill="#881337" opacity="0.9"/></g><polygon points="960,520 860,570 412,687 430,710 980,550" fill="#475569" opacity="0.5"/><polygon points="960,520 980,550 430,710 412,687" fill="#F59E0B" opacity="0.2"/><polygon points="1060,480 1496,335 1520,350 1080,500" fill="#475569" opacity="0.5"/><polygon points="1060,480 1080,500 1520,350 1496,335" fill="#65A30D" opacity="0.2"/><polygon points="1020,580 1428,837 1450,850 1040,600" fill="#475569" opacity="0.5"/><polygon points="1020,580 1040,600 1450,850 1428,837" fill="#BE123C" opacity="0.2"/><polygon points="460,750 1356,925 1370,900 480,720" fill="#334155" opacity="0.3"/><g fill="#FCD34D" opacity="0.8"><polygon points="600,600 620,590 610,610"/><polygon points="1300,400 1320,390 1310,410"/><polygon points="1200,700 1220,690 1210,710"/></g></g></svg>`);
const TRUCKS = svg(`<svg width="1920" height="1080" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.20"><g transform="translate(150, 600) scale(1.2)"><polygon points="0,220 900,220 850,260 -50,260" fill="#0F172A" opacity="0.5"/><polygon points="0,50 650,50 650,200 0,200" fill="#1E293B"/><polygon points="0,50 325,120 0,200" fill="#334155"/><polygon points="325,120 650,50 650,200 0,200" fill="#1E293B"/><polygon points="0,50 650,50 325,120" fill="#475569"/><polygon points="650,50 670,40 670,190 650,200" fill="#0F172A"/><polygon points="0,50 20,40 670,40 650,50" fill="#475569"/><polygon points="400,100 550,80 500,150" fill="#F59E0B" opacity="0.9"/><polygon points="550,80 600,130 500,150" fill="#D97706" opacity="0.9"/><polygon points="680,80 780,80 820,130 820,200 680,200" fill="#334155"/><polygon points="680,80 750,120 680,200" fill="#475569"/><polygon points="750,120 780,80 820,130 820,200 680,200" fill="#1E293B"/><polygon points="780,80 820,130 860,130 810,80" fill="#0EA5E9" opacity="0.8"/><polygon points="780,80 810,80 795,105" fill="#38BDF8" opacity="0.9"/><polygon points="820,130 890,140 890,200 820,200" fill="#475569"/><polygon points="820,130 860,130 890,140" fill="#64748B"/><polygon points="850,160 890,140 890,200 820,200" fill="#334155"/><g transform="translate(100, 200)"><polygon points="-30,0 -15,-25 15,-25 30,0 15,25 -15,25" fill="#0F172A"/><polygon points="-15,0 -7,-12 7,-12 15,0 7,12 -7,12" fill="#475569"/></g><g transform="translate(200, 200)"><polygon points="-30,0 -15,-25 15,-25 30,0 15,25 -15,25" fill="#0F172A"/><polygon points="-15,0 -7,-12 7,-12 15,0 7,12 -7,12" fill="#475569"/></g><g transform="translate(600, 200)"><polygon points="-30,0 -15,-25 15,-25 30,0 15,25 -15,25" fill="#0F172A"/><polygon points="-15,0 -7,-12 7,-12 15,0 7,12 -7,12" fill="#475569"/></g><g transform="translate(720, 200)"><polygon points="-30,0 -15,-25 15,-25 30,0 15,25 -15,25" fill="#0F172A"/><polygon points="-15,0 -7,-12 7,-12 15,0 7,12 -7,12" fill="#475569"/></g><g transform="translate(840, 200)"><polygon points="-30,0 -15,-25 15,-25 30,0 15,25 -15,25" fill="#0F172A"/><polygon points="-15,0 -7,-12 7,-12 15,0 7,12 -7,12" fill="#475569"/></g></g><g transform="translate(1000, 300) scale(0.8)"><polygon points="0,220 900,220 850,260 -50,260" fill="#0F172A" opacity="0.3"/><polygon points="0,50 650,50 650,200 0,200" fill="#334155"/><polygon points="0,50 325,120 0,200" fill="#475569"/><polygon points="325,120 650,50 650,200 0,200" fill="#1E293B"/><polygon points="650,50 670,40 670,190 650,200" fill="#0F172A"/><polygon points="0,50 20,40 670,40 650,50" fill="#64748B"/><polygon points="400,100 550,80 500,150" fill="#BE123C" opacity="0.9"/><polygon points="550,80 600,130 500,150" fill="#9F1239" opacity="0.9"/><polygon points="680,80 780,80 820,130 820,200 680,200" fill="#475569"/><polygon points="680,80 750,120 680,200" fill="#64748B"/><polygon points="750,120 780,80 820,130 820,200 680,200" fill="#334155"/><polygon points="780,80 820,130 860,130 810,80" fill="#0EA5E9" opacity="0.6"/><polygon points="820,130 890,140 890,200 820,200" fill="#64748B"/><g transform="translate(100, 200)"><polygon points="-30,0 -15,-25 15,-25 30,0 15,25 -15,25" fill="#0F172A"/><polygon points="-15,0 -7,-12 7,-12 15,0 7,12 -7,12" fill="#475569"/></g><g transform="translate(200, 200)"><polygon points="-30,0 -15,-25 15,-25 30,0 15,25 -15,25" fill="#0F172A"/><polygon points="-15,0 -7,-12 7,-12 15,0 7,12 -7,12" fill="#475569"/></g><g transform="translate(600, 200)"><polygon points="-30,0 -15,-25 15,-25 30,0 15,25 -15,25" fill="#0F172A"/><polygon points="-15,0 -7,-12 7,-12 15,0 7,12 -7,12" fill="#475569"/></g><g transform="translate(720, 200)"><polygon points="-30,0 -15,-25 15,-25 30,0 15,25 -15,25" fill="#0F172A"/><polygon points="-15,0 -7,-12 7,-12 15,0 7,12 -7,12" fill="#475569"/></g><g transform="translate(840, 200)"><polygon points="-30,0 -15,-25 15,-25 30,0 15,25 -15,25" fill="#0F172A"/><polygon points="-15,0 -7,-12 7,-12 15,0 7,12 -7,12" fill="#475569"/></g></g></g></svg>`);

/** The homepage scene, deepest plane first — same depths the site ships. */
const LAYERS: LandingHeroLayer[] = [
  { src: WAREHOUSE, alt: 'Warehouse facility background', depth: 0.1, className: 'mix-blend-luminosity opacity-80' },
  { src: DISTRIBUTION, alt: '', depth: 0.3, className: 'mix-blend-color-burn opacity-90' },
  { src: TRUCKS, alt: '', depth: 0.6, className: 'mix-blend-screen opacity-90' },
];

/**
 * The homepage opener as `content/_index.md` renders it: a full-viewport band
 * with the three-plane logistics scene behind the `signal`-sweep gradient
 * headline, the white tagline, the letterspaced description and the bouncing
 * scroll cue. Parallax is on and sits at the identity transform at rest, so this
 * is exactly what a visitor sees before scrolling.
 */
export function Default() {
  return (
    <LandingHero
      layers={LAYERS}
      headline={
        <>
          Your Operations <br />
          Actionable Twin
        </>
      }
      tagline="Continuous Forecasting. Defensible Execution."
      description="Ground your automation with validated business rules on a Strictly Compartmentalized Node. Gain exponential operational advantage over fulfillments and claims."
      scrollCue="Scroll to Deploy Facility"
    />
  );
}

/**
 * The same composition on the sheet ground. Not one class differs from `Default` —
 * only `ground`, because every token rebinds underneath: the band's `bg-surface`,
 * the two washes (`from-surface`, `to-surface` and the `fill-provenance` overlay),
 * the tagline and description inks, and the scroll cue's chip.
 *
 * The three scene planes are the one thing that cannot rebind — they are artwork,
 * and their `mix-blend-luminosity` / `color-burn` / `screen` modes were tuned
 * against a dark band. This is the cell where that shows.
 */
export function OnSheet() {
  return (
    <Surface ground="sheet" tone="canvas" className="p-8">
      <LandingHero
        layers={LAYERS}
        headline={
          <>
            Your Operations <br />
            Actionable Twin
          </>
        }
        tagline="Continuous Forecasting. Defensible Execution."
        description="Ground your automation with validated business rules on a Strictly Compartmentalized Node. Gain exponential operational advantage over fulfillments and claims."
        scrollCue="Scroll to Deploy Facility"
      />
    </Surface>
  );
}

/**
 * `parallax={false}` — the still composition, for a band that never scrolls (an
 * embed, a print target, or a screenshot harness). Identical pixels at rest; the
 * only difference is that no scroll listener is attached.
 */
export function NoParallax() {
  return (
    <LandingHero
      parallax={false}
      layers={LAYERS}
      headline={
        <>
          Run the <br />
          Autonomous Supply Chain
        </>
      }
      tagline="Mitigate Disruption in Real Time."
      description="Live logistics telemetry, predictive analytics and an actionable twin of your whole network."
      scrollCue="Scroll to explore"
    />
  );
}

/**
 * Headline only. Tagline, description and scroll cue are each independently
 * optional, so the band collapses to the one treatment it exists to carry — the
 * `signal` gradient sweep, re-aimed diagonally — without leaving gaps behind.
 */
export function HeadlineOnly() {
  return (
    <LandingHero
      layers={LAYERS}
      headline={
        <>
          Zero-Hold <br />
          Customs Gate
        </>
      }
    />
  );
}

/**
 * With `layers={[]}` the scene drops out and the band renders on bare
 * `primary-900` under its two washes. Worth seeing on its own: it is what the
 * hero degrades to if the plane artwork ever fails to load, and it proves the
 * copy stays legible without the scene behind it.
 */
export function NoScene() {
  return (
    <LandingHero
      layers={[]}
      headline={
        <>
          Instant S&amp;OP <br />
          and Spend Diagnostics
        </>
      }
      tagline="Self-Service Analytics, without the warehouse rebuild."
      description="Ask the twin a question in plain language and get a defensible answer with its lineage attached."
      scrollCue="Scroll to Deploy Facility"
    />
  );
}
