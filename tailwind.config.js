// ===========================================================================
// POSITION IS THE SEMANTIC.
//
// 2,432 `stone-*` class references and 699 `text-white` live in layouts/ and
// content/. Rewriting them by hand was the obvious plan and it was the wrong
// one, because a census showed the scale is not used as a scale at all — it is
// used as a DARK-GROUND scale, and position already encodes the meaning:
//
//     backgrounds   rungs 700-950   313 refs   (only 2 outside that band)
//     text          rungs  50-500  1682 refs   (only 6 outside)
//     borders       rungs 400-800   374 refs
//
// High rung = the surface you sit on. Low rung = the ink you read. The number
// means EMPHASIS, and the position decides whether emphasis means darker or
// lighter. So the scale does not need inverting and the call sites do not need
// touching: each position binds its own palette onto the FACE ramp, and 3,131
// references land correctly on the light sheet at once.
//
// This is the same trick `@runink/ui` uses to make fill-vs-ink structural, and
// it has the same payoff: `text-stone-950` cannot silently mean "near-black on
// near-black" any more, because textColor resolves rung 950 to ink, not canvas.
//
// Everything resolves through `--rk-*-ch`, which `[data-ground]` re-binds, so
// ONE class set works on the light sheet and the dark console both. A subtree
// that sets data-ground="console" flips without changing a single class.
//
// THE SIX OUTLIERS (text-stone-600/700, bg-stone-100/600, text-stone-900 x2)
// are handled by mapping the whole rung sensibly rather than special-casing:
// a low-emphasis rung in the text position is a muted ink wherever it appears.
//
// SHADOWS are the one position deliberately NOT bound to a token. A shadow is
// dark on white paper and dark on a black console — it is occlusion, not a
// colour in the palette. Binding `shadow-stone-900` to `--rk-text-ch` would
// make every shadow on the light sheet a dark smear, and on the console it
// would emit a near-white glow where a shadow was asked for. So SHADOW keeps
// literal values.
// ===========================================================================

/** A token in channel form, so Tailwind's `/NN` alpha modifier still works.
 *  A bare var() here makes Tailwind drop the declaration silently — the trap
 *  documented at length in assets/css/tokens.css. 252 utilities depend on it. */
const tok = (name) => `rgb(var(--rk-${name}-ch) / <alpha-value>)`;

const RUNGS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
/** Build a full rung map so no rung silently disappears. Tailwind replaces the
 *  whole `stone` object per position, so a partial map would delete the rest. */
const scale = (pick) => Object.fromEntries(RUNGS.map((r) => [r, tok(pick(r))]));

// Surfaces: the high rungs were the dark page, the low rungs were the rare
// light panel. Both stay surfaces; they just stop being dark.
//
// THERE ARE EXACTLY THREE, and every rung lands on one of them. An earlier
// version also routed rungs 700 and 300-600 to `rule` and `rule-strong`, which
// are SEPARATOR tokens — a hairline and a boundary, not places text sits. That
// quietly made a border colour into a background, and the token contrast check
// then failed five ways, every one of them "on rk-rule", for text nobody had
// decided to put there. Backgrounds resolve to surfaces; separators separate.
//
// Collapsing 700 onto `sunk` costs nothing real: the census found 8 references
// at rung 700 against 213 at 900, and any hover pair the collapse would flatten
// is caught by check-dead-states.
const BG = scale((r) =>
  r >= 950 ? 'ground' :
  r >= 900 ? 'sheet' :
  r >= 200 ? 'sunk' : 'sheet');

// Ink: low rung was the brightest text on black, so it is the strongest ink on
// paper. The high rungs were text on a light panel, which is already dark ink.
//
// The site uses five levels of emphasis in the text position — `text-white` and
// stone 200/300/400/500 — and they have to stay five, because it pairs them:
// `text-stone-300 hover:text-white` and `text-stone-300 group-hover:text-stone-200`
// both appear, so white/200/300 must resolve three different ways or the hover
// paints what is already there. check-dead-states.mjs found exactly that, six
// times, when 200 and 300 shared a token.
const INK = scale((r) =>
  r <= 100 ? 'text' :
  r <= 200 ? 'text-1' :
  r <= 400 ? 'text-2' :
  r <= 700 ? 'text-3' :
  r <= 800 ? 'text-2' : 'text');

const MUTED = scale(() => 'text-3');

// Separators, ordered by how visible they were on the dark ground: rung 400 was
// the most visible border and 950 the faintest, so visibility rises as the rung
// falls. Three tiers, not two — with only `rule` and `rule-strong`, rungs 700
// and 800 collapsed onto one token and `.card:hover` painted the same border as
// `.card`. That is the failure this repo already has a checker for.
const RULE = scale((r) =>
  r >= 800 ? 'rule' :
  r >= 600 ? 'rule-mid' :
  r >= 400 ? 'rule-strong' : 'rule');

// The site accumulated four neutral families that all meant "grey": stone (the
// bulk), slate (31 refs, all ink), plus a handful of gray and neutral. They are
// the same intent expressed by whoever was editing that day, so they get the
// same map rather than four near-identical greys on one page.
const alias = (map) => ({ stone: map, slate: map, gray: map, neutral: map, zinc: map });

// `primary` and `secondary` are the vendored hugo-saasify-theme's indigo and
// purple — the placeholder palette this whole rebuild exists to get rid of, and
// still live: `bg-primary-600` paints the "Accept All" button in the consent
// banner on every page. Route them to the signal so they stop being a third
// colour system. Rungs at 600 and above take the base fill, below it the hover
// fill, so the common `bg-primary-600 hover:bg-primary-500` pair stays two
// distinct colours instead of collapsing into a dead state.
//
// `orange` and `amber` are Tailwind's own scales, used here for the accent
// before there was a token for it. They are the same intent as `signal` and
// must move with it — left behind, `text-orange-400` compiles to #fb923c and
// measures about 2:1 on the light sheet. In the one place the rung mattered
// (the pitch tab strip) 600 and 400 BOTH mean "this tab is active" — the
// markup ships 600, the JS swaps in 400, and inactive is border-stone-800 —
// so collapsing the scale onto one signal is what the markup already meant.
const ACCENT_FAMILIES = ['primary', 'secondary', 'orange', 'amber'];
const fanOut = (map) => Object.fromEntries(ACCENT_FAMILIES.map((f) => [f, map]));

// Alternate by rung POSITION so any two adjacent rungs differ. A threshold map
// (>=600) looked tidier and flattened `from-primary-600 to-primary-700` — the
// career and job-page hero gradients — into a single flat orange, which no
// checker catches because a gradient is not a hover pair. Adjacent rungs are
// exactly what these placeholder scales get used for, so adjacency is the
// property worth guaranteeing.
const SIGNAL_BG = fanOut(
  Object.fromEntries(RUNGS.map((r, i) => [r, tok(i % 2 ? 'signal-fill-hover' : 'signal-fill')])),
);
const SIGNAL_INK = fanOut(scale(() => 'signal'));

/** The typography plugin's own variables, bound to the ground-following tokens.
 *  Written through the channel form for consistency with everything else, and
 *  because `rgb(var(--x-ch))` composes if a prose modifier ever adds alpha. */
const p = (name) => `rgb(var(--rk-${name}-ch))`;
const PROSE = {
  '--tw-prose-body':          p('text-2'),
  '--tw-prose-headings':      p('text'),
  '--tw-prose-lead':          p('text-2'),
  '--tw-prose-links':         p('signal'),
  '--tw-prose-bold':          p('text'),
  '--tw-prose-counters':      p('text-3'),
  '--tw-prose-bullets':       p('rule-strong'),
  '--tw-prose-hr':            p('rule'),
  '--tw-prose-quotes':        p('text'),
  '--tw-prose-quote-borders': p('rule-strong'),
  '--tw-prose-captions':      p('text-3'),
  '--tw-prose-kbd':           p('text'),
  '--tw-prose-code':          p('text'),
  '--tw-prose-pre-code':      p('text-2'),
  '--tw-prose-pre-bg':        p('sunk'),
  '--tw-prose-th-borders':    p('rule-strong'),
  '--tw-prose-td-borders':    p('rule'),
};

// Occlusion, not palette. See SHADOWS above.
const SHADOW = {
  50: '#A59D91', 100: '#948C80', 200: '#847B6F', 300: '#776E61', 400: '#5A5145',
  500: '#4B4338', 600: '#3F382D', 700: '#352E25', 800: '#241F1C', 900: '#1A1614',
  950: '#0D0B0A',
};

/** @type {import('tailwindcss').Config} */
module.exports = {
    presets: [require('./themes/hugo-saasify-theme/tailwind.config.js')],
    // The vendored theme's layouts are NOT scanned. All 43 of them are shadowed
    // by a project file of the same relative path, so Hugo cannot render one —
    // scanning them only compiled utilities for markup that never reaches a
    // page, which is how 69 `primary-*` references kept the vendor indigo alive
    // in the bundle long after nothing used it. Verified by building both ways
    // and diffing the emitted selectors; see the note in HANDOFF-restyle-decisions.md.
    // If a theme layout ever stops being shadowed, add it back — or better,
    // copy it into layouts/ where the rest of the site lives.
    content: [
      "./layouts/**/*.html",
      "./content/**/*.{html,md}"
    ],
    theme: {
      extend: {
        // Figtree, matching Runink FACE. This was Inter + Plus Jakarta Sans from
        // Google Fonts — a THIRD typeface, on the pages customers actually read,
        // fetched from a third party. The faces are self-hosted now and declared
        // in assets/css/tokens.css, which _default/baseof.html loads before this
        // layer. The 'Rk' suffix keeps the family from colliding with any Figtree
        // the browser or OS already has installed at a different version.
        fontFamily: {
          sans: ['Figtree Rk', 'ui-sans-serif', 'system-ui', 'sans-serif'],
          heading: ['Figtree Rk', 'ui-sans-serif', 'system-ui', 'sans-serif'],
          mono: ['Fira Code Rk', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        },
        // The FACE palette, reachable as utility classes so a page can write
        // bg-canvas or text-ink-3 instead of a literal hex. Every one resolves
        // through a --rk-* custom property that tokens.css re-binds per ground,
        // which is what lets ONE class work on both the light sheet and the dark
        // console. That indirection is the point: a literal hex cannot flip.
        //
        // These are additive. The theme's stone-*/orange-* scales still exist,
        // because ~1,300 class references in layouts and content still use them
        // and removing the scale would blank those pages rather than restyle
        // them. Migrating those is the next pass; new markup should use these.
        colors: {
          canvas:        tok('ground'),
          sheet:         tok('sheet'),
          sunk:          tok('sunk'),
          rule:          tok('rule'),
          'rule-mid':    tok('rule-mid'),
          'rule-strong': tok('rule-strong'),
          ink:           tok('text'),
          'ink-1':       tok('text-1'),
          'ink-2':       tok('text-2'),
          'ink-3':       tok('text-3'),
          signal:        tok('signal'),
          'signal-fill': tok('signal-fill'),
          'signal-fill-hover': tok('signal-fill-hover'),
          'on-fill':     tok('on-signal-fill'),
          'signal-wash': 'var(--rk-signal-wash)',
          'on-signal':   tok('text-on-signal'),
        },

        // ---- the stone scale, rebound per position ------------------------
        // See the POSITION IS THE SEMANTIC note above the helpers below.
        backgroundColor:     { ...alias(BG),    white: tok('sheet'), black: tok('ground'), ...SIGNAL_BG },
        gradientColorStops:  { ...alias(BG),    white: tok('sheet'), ...SIGNAL_BG },
        textColor:           { ...alias(INK),   white: tok('text'),  black: tok('text'),   ...SIGNAL_INK },
        placeholderColor:    { ...alias(MUTED) },
        borderColor:         { ...alias(RULE),  white: tok('rule'),  black: tok('rule-strong'), ...SIGNAL_INK },
        divideColor:         { ...alias(RULE),  white: tok('rule') },
        ringColor:           { ...alias(RULE),  white: tok('rule-strong'), ...SIGNAL_INK },
        outlineColor:        { ...alias(RULE),  ...SIGNAL_INK },
        textDecorationColor: { ...alias(RULE),  ...SIGNAL_INK },
        fill:                { ...alias(INK),   white: tok('text') },
        stroke:              { ...alias(INK),   white: tok('text') },
        caretColor:          { ...alias(INK) },
        accentColor:         { stone: tok('signal') },
        // Shadows are the ONE position that must not flip — see SHADOWS below.
        boxShadowColor:      { ...alias(SHADOW), white: SHADOW[900], black: SHADOW[950] },

        // ---- prose ---------------------------------------------------------
        // The typography plugin paints body copy from its own --tw-prose-*
        // variables, which nothing above touches. Eight templates carry
        // `prose-invert`, which pins that text to the LIGHT ink set — so on the
        // new light sheet they render near-white on near-white paper. That is
        // where the audit's "inherited colour" failures came from: <strong>,
        // <p>, <time> and <h2> with no colour class of their own, at 1.06:1,
        // inheriting from a prose container nobody suspected.
        //
        // Binding prose to the tokens fixes it for both grounds at once, and
        // `invert` is given the SAME values deliberately: the tokens already
        // flip with data-ground, so inverting a second time would undo them.
        // That also means the eight `prose-invert` classes still in the markup
        // become harmless rather than needing a risky sweep through templates
        // an agent may be editing.
        typography: {
          DEFAULT: { css: PROSE },
          invert:  { css: PROSE },
        },
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
    ],
  }