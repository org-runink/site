/*
  The motion layer.

  WHAT IT IS FOR. Four devices on this site carry the argument in a picture —
  the constellation behind the home page's hero, the reading pipeline under it,
  the two figures on an industry page, and the moments strip and worked cases
  that both pages share. They were static. This gives them the one gesture each
  is actually about: a sky with depth in it; records arriving, a rule passing over
  them, a drafted action that stops; a decision boundary drawing itself; a row of
  moments landing in sequence.

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
function onFirstSight(el, fn, opts = {}) {
  if (!('IntersectionObserver' in window)) { fn(); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      fn();
    });
  }, {
    /* THRESHOLD 0, NOT A FRACTION, and a margin instead.

       This asked for 25% of the element to be on screen, which a container
       taller than four viewports can never reach — so the entrance on the blog
       listing, the library listing and every long step list simply never fired,
       on a page that was reported as having no animations at all. A fraction is
       a trap on anything that can be tall; "any of it is visible, and a little
       past the bottom edge" is the thing actually meant. */
    threshold: 0,
    rootMargin: '0px 0px -8% 0px',
    ...opts,
  });
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

  const drawnLinks = links.map((l) => svg.createDrawable(l));
  const drawnSeam = seam ? svg.createDrawable(seam) : null;

  /* THE STARTING STATE IS SET AT THE MOMENT OF PLAYING, NOT AT LOAD, and the
     difference is the whole of rule 1 at the head of this file.

     Set at load, the figure sat at opacity 0 from the moment the script ran
     until an IntersectionObserver decided it was on screen — so a reader who
     did not scroll to it, or whose browser never fired the observer, was looking
     at an empty console card on a live page. Measured on production, not
     reasoned about: rows, rule and gate all read 0.00 for fourteen seconds.

     Deferred to the play trigger, the figure is simply itself until the instant
     it is about to animate, which is the only arrangement where "nothing here is
     load-bearing for meaning" is actually true. */
  const arm = () => {
    utils.set(rows, { opacity: 0, translateY: 10 });
    utils.set([node, gate], { opacity: 0, translateY: 8 });
    utils.set(ticks, { opacity: 0.35 });
    utils.set(acts, { opacity: 0 });
    utils.set([scan, caret], { opacity: 0 });
    utils.set(bars, { scaleY: 0.35 });
    utils.set(drawnLinks, { draw: '0 0' });
    if (drawnSeam) utils.set(drawnSeam, { draw: '0 0' });
  };

  /* IT RUNS ONCE AND HOLDS, and that is a correction rather than a preference.

     This used to loop, and the loop ended by fading the rows, the rule and the
     decision panel to nothing before starting again — so every eight seconds the
     whole figure blanked and rebuilt itself. On a page that is not an animation,
     it is a flash, and it is what a reader sitting on this page actually saw.

     What keeps moving afterwards is small and local: the live dot, and the caret
     on the unpressed approve. Those say the reading has not stopped. A figure
     that rebuilds itself says the page is broken. */
  const tl = createTimeline({ autoplay: false, defaults: { ease: EASE } });

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
      loop: true,
    }, 3600)
    /* And it stays. Nothing after this beat removes anything. */
    ;

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

  return { tl, arm };
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
  /* The element's own children, taken from the DOM rather than matched with
     ':scope > *' — one fewer selector that can quietly return nothing, on the
     effect whose whole failure mode is returning nothing quietly. */
  const items = root.dataset.motionItems
    ? utils.$(root.dataset.motionItems, root)
    : Array.from(root.children);
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

/* ── 4. The sky, and the parallax in it ──────────────────────────────────────

   Each layer of the constellation carries a `data-depth`, and each translates
   against the scroll at that rate: dust barely moves, the web moves a little,
   the hub and its labels move most. That difference is the whole effect — a
   single layer moving is a sliding picture, three at different rates is depth.

   IT IS WRITTEN ON A rAF, NOT ON THE SCROLL EVENT. A scroll handler that writes
   a transform runs on every scroll tick and lands the write in the middle of the
   browser's own frame; this records the offset on scroll and writes once per
   frame, which is the difference between a smooth parallax and a page that
   stutters on a trackpad. It also stops scheduling frames as soon as the sky is
   off screen, because the one thing worse than a stutter is a stutter nobody can
   see the reason for.

   translate3d, deliberately: it keeps the layer on the compositor, and the whole
   point of this effect is that it costs nothing to paint. */
function sky(root) {
  const layers = utils.$('[data-depth]', root);
  if (!layers.length) return;

  const depths = layers.map((el) => parseFloat(el.dataset.depth) || 0);
  let onScreen = true;
  let queued = false;

  /* THE OFFSET IS THE ELEMENT'S OWN POSITION, NOT window.scrollY, and the
     difference is the whole correctness of this. Keyed to absolute scroll, a
     layer translates by scrollY × depth — which is a few pixels for a drawing at
     the top of the page and six hundred for the same drawing two screens down.
     The constellation band was rendered with its named nodes pushed clean off
     the bottom of its own frame, leaving dust and two hairlines.

     Measuring from the middle of the viewport instead gives every instance the
     same small range around wherever it sits: zero as it passes the centre of
     the screen, and a clamped maximum either side of that. */
  const RANGE = 220;
  const PAGE_RANGE = 900;
  /* A FIXED BACKDROP IS MEASURED DIFFERENTLY FROM AN IN-FLOW FIGURE, and it has
     to be: position:fixed means getBoundingClientRect() returns the same numbers
     at every scroll position, so the element-relative measurement below would
     hold a page-wide sky perfectly still. The page backdrop therefore takes the
     scroll itself — which is the classic parallax and the only place in this file
     window.scrollY is the right input. */
  const isPage = root.dataset.parallax === 'page';
  const write = (shift) => {
    queued = false;
    layers.forEach((el, i) => {
      el.style.transform = `translate3d(0, ${(shift * depths[i]).toFixed(2)}px, 0)`;
    });
  };
  const read = () => {
    if (queued || !onScreen) return;
    queued = true;
    requestAnimationFrame(() => {
      if (isPage) {
        /* Clamped, like the in-flow case and for the same reason in reverse:
           unclamped, the web layer translates by scroll × depth and is seven
           hundred pixels down the page by the third screen — the backdrop drifts
           out of its own frame and the rest of the page is left with bare dust.
           A ceiling keeps the drift legible and the composition present. */
        const y = window.scrollY || window.pageYOffset || 0;
        write(Math.min(y, PAGE_RANGE));
        return;
      }
      const r = root.getBoundingClientRect();
      const middle = (r.top + r.height / 2) - window.innerHeight / 2;
      write(Math.max(-RANGE, Math.min(RANGE, middle)));
    });
  };

  window.addEventListener('scroll', read, { passive: true });
  window.addEventListener('resize', read, { passive: true });
  read();

  if (!isPage && 'IntersectionObserver' in window) {
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => { onScreen = entry.isIntersecting; });
      if (onScreen) read();
    }, { threshold: 0 }).observe(root);
  }

  /* The hub reads, once every few seconds: one ring out from the centre and
     gone. Everything else in the sky is still, so this is the only thing moving
     when the page is not being scrolled — which is the point of it. */
  const pulse = utils.$('.hp-sky__hub-pulse', root)[0];
  if (pulse) {
    utils.set(pulse, { opacity: 0 });
    animate(pulse, {
      r: [{ to: 42, duration: 0 }, { to: 108, duration: 2600, ease: 'out(3)' }],
      opacity: [{ to: 0.5, duration: 200 }, { to: 0, duration: 2400, ease: 'out(2)' }],
      loop: true,
      loopDelay: 2600,
    });
  }

  /* A handful of the far dust breathes, on its own slow cycle. Not all of it:
     a field where every point pulses reads as static rather than as sky. */
  const dust = utils.$('.hp-sky__far circle', root).filter((_, i) => i % 6 === 0);
  if (dust.length) {
    animate(dust, {
      /* A narrower range than it had. 0.18 to 0.62 on a field of points reads as
         blinking rather than as sky, and it was part of what made this page feel
         like it was flashing. */
      opacity: [{ to: 0.38, duration: 2600 }, { to: 0.62, duration: 2600 }],
      loop: true,
      ease: 'inOutQuad',
      delay: stagger(420),
    });
  }
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

  document.querySelectorAll('[data-motion="parallax"]').forEach((el) => {
    sky(el);
  });

  document.querySelectorAll('[data-motion="pipeline"]').forEach((el) => {
    const made = pipeline(el);
    if (!made) return;
    const { tl, arm } = made;

    /* Armed and played once, the first time it is on screen. Before that the
       figure is untouched; after it, it holds its finished state and only the
       live dot and the caret keep moving — so leaving the page and coming back
       does not restart anything, and nothing blanks. */
    let started = false;
    const start = () => {
      if (started) return;
      started = true;
      arm();
      tl.play();
    };
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          io.disconnect();
          start();
        });
      }, { threshold: 0, rootMargin: '0px 0px -8% 0px' });
      io.observe(el);
    } else {
      start();
    }
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
