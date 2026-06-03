global.HTMLElement.prototype.animate = jest.fn();

// --- MOCKS ---
let rafCallbacks = [];
let simulatedRafTime = 0;
let rafId = 0;

window.requestAnimationFrame = jest.fn((cb) => {
  rafId++;
  rafCallbacks.push({ id: rafId, cb });
  return rafId;
});

window.cancelAnimationFrame = jest.fn((id) => {
  rafCallbacks = rafCallbacks.filter(c => c.id !== id);
});

let carouselObserverCallback = null;
let parallaxObserverCallback = null;
let revealObserverCallback = null;

global.IntersectionObserver = class IntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }
  observe(target) {
    if (target.id === 'use-cases-scroll-container') {
      carouselObserverCallback = this.callback;
    } else if (target.id === 'hero-parallax') {
      parallaxObserverCallback = this.callback;
    } else if (target.classList && target.classList.contains('reveal-step')) {
      revealObserverCallback = this.callback;
    }
  }
  disconnect() {}
  unobserve() {}
};
window.IntersectionObserver = global.IntersectionObserver;

const advanceRAF = (ms) => {
  const frames = Math.ceil(ms / 16);
  for (let i = 0; i < frames; i++) {
    simulatedRafTime += 16;
    if (rafCallbacks.length > 0) {
      const currentCallbacks = [...rafCallbacks];
      rafCallbacks = [];

      currentCallbacks.forEach(item => item.cb(simulatedRafTime));
    }
  }
};

describe('main.js DOM initialization', () => {
  beforeEach(() => {
    HTMLElement.prototype.animate = jest.fn();
    document.body.innerHTML = '';
    jest.resetModules();
    rafCallbacks = [];
    simulatedRafTime = 0;
    carouselObserverCallback = null;
    jest.clearAllMocks();
  });

  describe('Parallax Container', () => {
    it('should initialize parallax if container exists', () => {
      document.body.innerHTML = `
        <div id="hero-parallax">
          <div class="parallax-layer" data-depth="0.5"></div>
          <div class="parallax-layer"></div>
        </div>
      `;
      const main = require('../main.js');
      if (main.initParallax) { main.initParallax(); } else { document.dispatchEvent(new Event('DOMContentLoaded')); }

      const layers = document.querySelectorAll('.parallax-layer');
      expect(layers[0].cachedDepth).toBe(0.5);
      expect(layers[1].cachedDepth).toBe(0);
      expect(layers[0].animate).toHaveBeenCalled();
    });

    it('should not throw if parallax container does not exist', () => {
      document.body.innerHTML = `<div>No parallax here</div>`;
      expect(() => {
        const main = require('../main.js');
        if (main.initParallax) { main.initParallax(); } else { document.dispatchEvent(new Event('DOMContentLoaded')); }
      }).not.toThrow();
    });
  });

  describe('Pitch Tab Buttons', () => {
    it('should switch active tabs correctly on click', () => {
      document.body.innerHTML = `
        <button class="pitch-tab-btn active border-orange-400" data-target="content1">
          <svg class="text-white"></svg>
          <h3 class="text-white">Btn1</h3>
        </button>
        <button class="pitch-tab-btn border-stone-800" data-target="content2">
          <svg class="text-stone-300"></svg>
          <h3 class="text-stone-300">Btn2</h3>
        </button>

        <div id="content1" class="pitch-content active"></div>
        <div id="content2" class="pitch-content hidden"></div>
      `;

      const main = require('../main.js');
      if (main.initTabs) { main.initTabs(); } else { document.dispatchEvent(new Event('DOMContentLoaded')); }

      const btns = document.querySelectorAll('.pitch-tab-btn');
      const btn1 = btns[0];
      const btn2 = btns[1];

      btn2.click();

      expect(btn2.classList.contains('active')).toBe(true);
      expect(btn2.classList.contains('border-orange-400')).toBe(true);
      expect(btn2.classList.contains('border-stone-800')).toBe(false);
      expect(btn2.querySelector('svg').classList.contains('text-white')).toBe(true);
      expect(btn2.querySelector('h3').classList.contains('text-white')).toBe(true);

      expect(btn1.classList.contains('active')).toBe(false);
      expect(btn1.classList.contains('border-orange-400')).toBe(false);
      expect(btn1.classList.contains('border-stone-800')).toBe(true);
      expect(btn1.querySelector('svg').classList.contains('text-stone-300')).toBe(true);
      expect(btn1.querySelector('h3').classList.contains('text-stone-300')).toBe(true);

      const content1 = document.getElementById('content1');
      const content2 = document.getElementById('content2');
      expect(content1.classList.contains('hidden')).toBe(true);
      expect(content2.classList.contains('active')).toBe(true);
      expect(content2.classList.contains('hidden')).toBe(false);
    });

    it('should handle elements missing svg or h3 gracefully', () => {
      document.body.innerHTML = `
        <button class="pitch-tab-btn active border-orange-400" data-target="content1"></button>
        <button class="pitch-tab-btn border-stone-800" data-target="content2"></button>
        <div id="content1" class="pitch-content active"></div>
        <div id="content2" class="pitch-content hidden"></div>
      `;

      const main = require('../main.js');
      if (main.initTabs) { main.initTabs(); } else { document.dispatchEvent(new Event('DOMContentLoaded')); }

      const btn2 = document.querySelectorAll('.pitch-tab-btn')[1];

      expect(() => {
        btn2.click();
      }).not.toThrow();

      expect(btn2.classList.contains('active')).toBe(true);
    });

    it('should maintain correct content visibility after rapid switching', () => {
      document.body.innerHTML = `
        <button class="pitch-tab-btn active border-orange-400" data-target="content1">
          <svg class="text-white"></svg>
          <h3 class="text-white">Btn1</h3>
        </button>
        <button class="pitch-tab-btn border-stone-800" data-target="content2">
          <svg class="text-stone-300"></svg>
          <h3 class="text-stone-300">Btn2</h3>
        </button>

        <div id="content1" class="pitch-content active"></div>
        <div id="content2" class="pitch-content hidden"></div>
      `;

      document.dispatchEvent(new Event('DOMContentLoaded'));

      const btns = document.querySelectorAll('.pitch-tab-btn');
      const btn1 = btns[0];
      const btn2 = btns[1];

      // Rapidly click buttons
      btn2.click();
      btn1.click();
      btn2.click();

      // Check content visibility
      const content1 = document.getElementById('content1');
      const content2 = document.getElementById('content2');

      expect(content1.classList.contains('hidden')).toBe(true);
      expect(content1.classList.contains('active')).toBe(false);

      expect(content2.classList.contains('active')).toBe(true);
      expect(content2.classList.contains('hidden')).toBe(false);
    });

  });

  describe('Use Cases Carousel', () => {
    let carousel;

    beforeEach(() => {
      document.body.innerHTML = `
        <div id="use-cases-scroll-container">
          <div style="width: 300px;">Card 1</div>
          <div style="width: 300px;">Card 2</div>
        </div>
      `;
      carousel = document.getElementById('use-cases-scroll-container');

      Object.defineProperty(carousel, 'clientWidth', { value: 500, configurable: true });
      Object.defineProperty(carousel, 'scrollWidth', { value: 1200, configurable: true });
      Object.defineProperty(carousel, 'scrollLeft', { value: 0, writable: true, configurable: true });

      carousel.scrollTo = jest.fn((options) => {
        if (options && typeof options.left !== 'undefined') {
          carousel.scrollLeft = options.left;
        }
      });

      carousel.scrollBy = jest.fn((options) => {
        if (options && typeof options.left !== 'undefined') {
          carousel.scrollLeft += options.left;
        }
      });

      const main = require('../main.js');
      if (main.initCarousel) { main.initCarousel(); } else { document.dispatchEvent(new Event('DOMContentLoaded')); }
    });

    it('should set up event listeners if carousel exists', () => {
      expect(() => {
        carousel.dispatchEvent(new Event('mouseenter'));
        carousel.dispatchEvent(new Event('mouseleave'));
      }).not.toThrow();
    });

    it('should start auto-scrolling when intersecting', () => {
      carouselObserverCallback([{ isIntersecting: true }]);
      advanceRAF(3100);
      expect(carousel.scrollBy).toHaveBeenCalledWith({ left: 340, behavior: 'smooth' });
    });

    it('should not auto-scroll when hovered', () => {
      carouselObserverCallback([{ isIntersecting: true }]);
      carousel.dispatchEvent(new Event('mouseenter'));
      advanceRAF(3100);
      expect(carousel.scrollBy).not.toHaveBeenCalled();

      carousel.dispatchEvent(new Event('mouseleave'));
      advanceRAF(3100);
      expect(carousel.scrollBy).toHaveBeenCalled();
    });

    it('should loop back to start when reaching the end', () => {
      carousel.scrollLeft = 800; // 800 + 500 = 1300 >= 1200 - 10
      carouselObserverCallback([{ isIntersecting: true }]);
      advanceRAF(3100);
      expect(carousel.scrollTo).toHaveBeenCalledWith({ left: 0, behavior: 'smooth' });
    });

    it('should stop auto-scrolling when no longer intersecting', () => {
      carouselObserverCallback([{ isIntersecting: true }]);
      advanceRAF(3100);
      expect(carousel.scrollBy).toHaveBeenCalledTimes(1);

      carousel.scrollBy.mockClear();

      carouselObserverCallback([{ isIntersecting: false }]);
      advanceRAF(3100);
      expect(carousel.scrollBy).not.toHaveBeenCalled();
    });
  });

  describe('Reveal Steps Animation', () => {
    it('should set up transitions and observers if reveal steps exist', () => {
      document.body.innerHTML = `
        <div class="reveal-step opacity-20 translate-y-4" id="step1">Step 1</div>
        <div class="reveal-step opacity-20 translate-y-4" id="step2">Step 2</div>
      `;
      const main = require('../main.js');
      if (main.initRevealSteps) { main.initRevealSteps(); } else { document.dispatchEvent(new Event('DOMContentLoaded')); }

      const steps = document.querySelectorAll('.reveal-step');
      expect(steps[0].style.transitionDelay).toBe('0ms');
      expect(steps[1].style.transitionDelay).toBe('150ms');
    });
  });
});
