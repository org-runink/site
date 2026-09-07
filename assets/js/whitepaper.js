/* Runink whitepapers — the register.
 *
 * These are 6,000-12,000 word documents, so the register is a real navigation
 * interface rather than decoration: it says where you are and it jumps.
 *
 * Progressive enhancement. With JavaScript off the register renders as a plain
 * list of links, fully usable; the mobile disclosure button stays hidden
 * because nothing would operate it. This file only ever adds behaviour.
 */
(function () {
  'use strict';

  var rail = document.querySelector('.wp-rail');
  if (!rail) return;

  var toggle = rail.querySelector('.wp-rail-toggle');
  var panel = rail.querySelector('.wp-rail-panel');
  var links = Array.prototype.slice.call(rail.querySelectorAll('.wp-reg a'));
  if (!panel || !links.length) return;

  var wide = window.matchMedia('(min-width: 62rem)');
  var calm = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ---- mobile disclosure ------------------------------------------------ */

  function applyLayout() {
    if (!toggle) return;
    if (wide.matches) {
      toggle.hidden = true;
      panel.hidden = false;
    } else {
      toggle.hidden = false;
      // Collapse by default on small screens so the document starts at the
      // top of the viewport rather than below a 25-item list.
      panel.hidden = toggle.getAttribute('aria-expanded') !== 'true';
    }
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      panel.hidden = open;
    });

    // Choosing a chapter on a phone should close the list and leave the
    // reader looking at the document.
    panel.addEventListener('click', function (event) {
      if (wide.matches) return;
      if (!event.target.closest('a')) return;
      toggle.setAttribute('aria-expanded', 'false');
      panel.hidden = true;
    });
  }

  applyLayout();
  if (wide.addEventListener) {
    wide.addEventListener('change', applyLayout);
  } else if (wide.addListener) {
    wide.addListener(applyLayout);
  }

  /* ---- where am I ------------------------------------------------------- */

  var byId = {};
  links.forEach(function (a) {
    var id = decodeURIComponent(a.getAttribute('href') || '').slice(1);
    if (id) byId[id] = a;
  });

  var headings = Object.keys(byId)
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);

  if (!headings.length || !('IntersectionObserver' in window)) return;

  var current = null;

  function setCurrent(id) {
    var a = byId[id];
    if (!a || a === current) return;
    if (current) current.removeAttribute('aria-current');
    a.setAttribute('aria-current', 'true');
    current = a;

    // Keep the active entry inside the sticky rail's own scroll box, without
    // ever scrolling the page itself.
    if (wide.matches && panel.scrollHeight > panel.clientHeight) return;
    if (!wide.matches) return;
    var box = rail.getBoundingClientRect();
    var item = a.getBoundingClientRect();
    if (item.top < box.top || item.bottom > box.bottom) {
      a.scrollIntoView({
        block: 'nearest',
        behavior: calm.matches ? 'auto' : 'smooth'
      });
    }
  }

  // Track the heading nearest the top of the viewport that has already been
  // passed, which is what "where am I" means when reading downward.
  var seen = {};
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      seen[entry.target.id] = entry;
    });

    var best = null;
    headings.forEach(function (h) {
      var rect = h.getBoundingClientRect();
      if (rect.top <= 140) best = h;
    });

    if (!best) best = headings[0];
    if (best) setCurrent(best.id);
  }, {
    rootMargin: '-120px 0px -70% 0px',
    threshold: [0, 1]
  });

  headings.forEach(function (h) { observer.observe(h); });

  // The observer only fires on crossings, so seed the state once on load and
  // refresh it on scroll at a frame's granularity.
  var ticking = false;
  function refresh() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      ticking = false;
      var best = null;
      headings.forEach(function (h) {
        if (h.getBoundingClientRect().top <= 140) best = h;
      });
      setCurrent((best || headings[0]).id);
    });
  }

  window.addEventListener('scroll', refresh, { passive: true });
  refresh();
})();
