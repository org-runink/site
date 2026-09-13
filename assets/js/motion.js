/*
  The motion layer.

  WHAT IT IS FOR. Three devices on this site carry the argument in a picture —
  the reading pipeline on the home page, the two figures on an industry page, and
  the moments strip and worked cases that both pages share. They were static. This
  gives them the one gesture each is actually about: records arriving, a rule
  passing over them, a drafted action that stops; a decision boundary drawing
  itself; a row of moments landing in sequence.

  THE RULES THIS FILE OBEYS, ALL FOUR OF THEM LOAD-BEARING:

  1. NOTHING HERE MAY BE LOAD-BEARING FOR MEANING. Every target is already drawn
     in its finished state in the markup. This file sets the STARTING state at run
     time and then animates back to the finished one, so no-JS, a failed request,
     an old browser and a printed sheet all show the complete picture. Hiding
     something in CSS and revealing it with script is how a reader with no
     JavaScript gets a blank panel, and it is not done anywhere in here.

  2. prefers-reduced-motion ENDS THE FILE. Not "a shorter animation" — none. The
     check runs before anything is touched, so a reduced-motion reader sees the
     same finished markup a no-JS reader does. tokens.css already zeroes the CSS
     durations; this is the same promise kept for the scripted half.

  3. IT ANIMATES WHAT IS ON SCREEN, AND STOPS OTHERWISE. The pipeline loops, so it
     is paused by an IntersectionObserver when it scrolls out of view and by
     visibilitychange when the tab goes to the background. A looping timeline
     running behind another tab is a battery bill for a picture nobody is looking
     at.

  4. SVG ATTRIBUTES, NOT CSS SHORTHANDS, ON SVG CHILDREN. Anime writes
     transforms as attributes where the target is an SVG element, which is what
     makes translateY work on a <g> in Safari as well as it does in Chrome.

  WHY anime.js AND WHY IT IS IN THIS REPOSITORY. It is vendored at
  assets/js/vendor/anime.esm.min.js, version 4.5.0, MIT, alongside its licence.
  CONTENT.md rule 7 forbids a customer-facing page from making an external
  request — the site vendors its own typefaces for the same reason — so the CDN
  build the library's own documentation reaches for is not an option here. esbuild
  bundles this through Hugo's js.Build, and the script is emitted only on the two
  page families that have something to animate.
*/

import { animate, createTimeline, stagger, svg, utils } from './vendor/anime.esm.min.js';

const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)');

/* Durations, from DESIGN.md 6, so motion here is the same speed as motion in the
   stylesheets: 120ms state, 200ms transition, 320ms entrance, and one decisive
   ease-out with no overshoot. The product puts a proposal in front of a person;
   the gesture should land, not bounce. */
const EASE = 'cubicBezier(.2, 0, 0, 1)';
const DUR_STATE = 120;
const DUR_TRANS = 200;
const DUR_ENTER = 320;

/* Runs `fn` the first time `el` is at least a quarter on screen, then forgets it.
   One observer per element is cheaper to reason about than a shared one holding a
   map, and there are never more than a dozen of these on a page. */
function onFirstSight(el, fn, threshold = 0.25) {
  if (!('IntersectionObserver' in window)) { fn(); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      fn();
    });
  }, { threshold });
  io.observe(el);
}

/* ── 1. The reading pipeline ──────────────────────────────────────────────────

   The home page's second picture, in five moves: the records arrive, the read
   passes over them, the rule takes them one property at a time, the drafted
   action lands, and then it WAITS — the caret blinking on an unpressed approve
   is the whole point of the figure and it is the longest beat in the cycle.

   It loops, because it is a picture of something continuous. It does not loop
   fast: one cycle is about nine seconds and most of that is the last beat. */
function pipeline(root) {
  const rows = utils.$('.hp-pipe__row', root);
  /* The fourth row is the one the panel edge cuts off — the field goes on past
     the bottom of what is drawn. It is faded by a class in the stylesheet, and
     an animation that landed it at full opacity like the others would quietly
     delete that: an inline opacity beats a class. So it arrives with the rest
     and stops where the stylesheet had it. */
  const rowsFull = utils.$('.hp-pipe__row:not(.hp-pipe__row--cut)', root);
  const rowsCut = utils.$('.hp-pipe__row--cut', root);
  const CUT = 0.4;
  const scan = utils.$('.hp-pipe__scan', root)[0];
  const links = utils.$('.hp-pipe__link', root);
  const node = utils.$('.hp-pipe__node', root)[0];
  const ticks = utils.$('.hp-pipe__tick', root);
  const bars = utils.$('.hp-pipe__meter rect', root);
  const gate = utils.$('.hp-pipe__gate', root)[0];
  const seam = utils.$('.hp-pipe__seam', root)[0];
  const acts = utils.$('.hp-pipe__act', root);
  const caret = utils.$('.hp-pipe__caret', root)[0];
  const live = utils.$('.hp-pipe__live', root)[0];

  if (!rows.length || !node || !gate) return null;

  /* The starting state, set here rather than in the stylesheet — see rule 1 at
     the head of this file. */
  utils.set(rows, { opacity: 0, translateY: 10 });
  utils.set([node, gate], { opacity: 0, translateY: 8 });
  utils.set(ticks, { opacity: 0.35 });
  utils.set(acts, { opacity: 0 });
  utils.set([scan, caret], { opacity: 0 });
  utils.set(bars, { scaleY: 0.35 });
  const drawnLinks = links.map((l) => svg.createDrawable(l));
  const drawnSeam = seam ? svg.createDrawable(seam) : null;
  utils.set(drawnLinks, { draw: '0 0' });
  if (drawnSeam) utils.set(drawnSeam, { draw: '0 0' });

  const tl = createTimeline({ loop: true, autoplay: false, defaults: { ease: EASE } });

  tl
    /* The records already exist — they arrive, they do not appear. */
    .add(rowsFull, { opacity: [0, 1], translateY: [10, 0], duration: DUR_ENTER, delay: stagger(90) }, 0)
    .add(rowsCut, { opacity: [0, CUT], translateY: [10, 0], duration: DUR_ENTER }, 270)
    /* The read pass: one hairline down the field, once. */
    .add(scan, { opacity: [0, 1], duration: DUR_STATE }, 420)
    .add(scan, { y: [90, 262], duration: 900, ease: 'linear' }, 480)
    .add(scan, { opacity: 0, duration: DUR_STATE }, 1380)
    /* Into the rule. */
    .add(drawnLinks[0], { draw: '0 1', duration: DUR_TRANS }, 1320)
    .add(node, { opacity: [0, 1], translateY: [8, 0], duration: DUR_ENTER }, 1420)
    /* The rule is three things and it takes them in order, which is what the
       label says it does. */
    .add(ticks, { opacity: [0.35, 1], duration: DUR_TRANS, delay: stagger(160) }, 1700)
    .add(bars, {
      scaleY: [{ to: 1, duration: 260 }, { to: 0.45, duration: 260 }],
      loop: 2,
      delay: stagger(70),
    }, 1700)
    /* And out to the person. */
    .add(drawnLinks[1], { draw: '0 1', duration: DUR_TRANS }, 2500)
    .add(gate, { opacity: [0, 1], translateY: [8, 0], duration: DUR_ENTER }, 2600)
    .add(acts, { opacity: [0, 1], duration: DUR_TRANS, delay: stagger(110) }, 3200)
    /* Then it waits. Nothing is pressed, and the caret blinks for four seconds
       while nothing happens, which is the argument. */
    .add(caret, {
      opacity: [{ to: 1, duration: 60 }, { to: 1, duration: 460 }, { to: 0, duration: 60 }, { to: 0, duration: 460 }],
      loop: 4,
    }, 3600)
    /* Out, and round again. */
    .add([rows, node, gate, acts], { opacity: 0, duration: DUR_TRANS }, 8200);

  /* The seam draws across before the actions exist: the line between what was
     proposed and what somebody decides is the thing being pointed at. It is
     added separately rather than inline in the chain above because a figure
     without a seam would otherwise animate `draw` on a <g>, which has no length
     to travel along. */
  if (drawnSeam) tl.add(drawnSeam, { draw: '0 1', duration: 420 }, 2900);

  /* The live dot is its own slow pulse, independent of the cycle, because the
     reading does not stop between them. */
  if (live) {
    animate(live, {
      opacity: [{ to: 0.35, duration: 900 }, { to: 1, duration: 900 }],
      loop: true,
      ease: 'inOutQuad',
    });
  }

  return tl;
}

/* ── 2. Line-drawing for the industry figures ────────────────────────────────

   The decision figure and the boundary figures are line drawings, so the honest
   animation for them is the line being drawn. Strokes only: a fill cannot be
   drawn and anime's drawable would have nothing to travel along. */
function drawFigure(root) {
  const strokes = utils.$('path, line, polyline, circle, rect', root)
    .filter((el) => {
      const stroke = getComputedStyle(el).stroke;
      return stroke && stroke !== 'none';
    });
  if (!strokes.length) return;
  const drawables = strokes.map((el) => svg.createDrawable(el));
  utils.set(drawables, { draw: '0 0' });
  animate(drawables, {
    draw: '0 1',
    duration: 900,
    delay: stagger(45),
    ease: EASE,
  });
}

/* ── 3. Entrance for a list that has an order ────────────────────────────────

   The moments strip reads left to right and the worked case reads top to bottom,
   so both land in their own reading order rather than all at once. This is the
   one effect that touches text, and it is the shortest: 320ms and eight pixels,
   which is an entrance, not a performance. */
function revealChildren(root) {
  const items = utils.$(root.dataset.motionItems || ':scope > *', root);
  if (!items.length) return;
  utils.set(items, { opacity: 0, translateY: 8 });
  animate(items, {
    opacity: [0, 1],
    translateY: [8, 0],
    duration: DUR_ENTER,
    delay: stagger(60),
    ease: EASE,
  });
}

/* ── wiring ──────────────────────────────────────────────────────────────── */

function start() {
  /* Rule 2, and it is the first thing that happens. */
  if (REDUCED.matches) return;

  document.querySelectorAll('[data-motion="draw"]').forEach((el) => {
    onFirstSight(el, () => drawFigure(el));
  });

  document.querySelectorAll('[data-motion="reveal"]').forEach((el) => {
    onFirstSight(el, () => revealChildren(el));
  });

  document.querySelectorAll('[data-motion="pipeline"]').forEach((el) => {
    const tl = pipeline(el);
    if (!tl) return;

    /* Rule 3: it runs while it is being looked at, and not otherwise. */
    let onScreen = false;
    const sync = () => {
      if (onScreen && !document.hidden) tl.play();
      else tl.pause();
    };
    if ('IntersectionObserver' in window) {
      new IntersectionObserver((entries) => {
        entries.forEach((entry) => { onScreen = entry.isIntersecting; });
        sync();
      }, { threshold: 0.2 }).observe(el);
    } else {
      onScreen = true;
      sync();
    }
    document.addEventListener('visibilitychange', sync);
  });
}

/* A reader can turn reduced motion on while the page is open. If they do, every
   running animation stops where the finished markup already is. */
REDUCED.addEventListener('change', () => {
  if (!REDUCED.matches) return;
  utils.cleanInlineStyles(document.documentElement);
  window.location.reload();
});

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', start);
} else {
  start();
}
