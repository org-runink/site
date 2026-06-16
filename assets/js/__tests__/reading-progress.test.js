let rafCallbacks = [];
let simulatedRafTime = 0;

global.requestAnimationFrame = (cb) => {
  rafCallbacks.push({ id: Math.random(), cb });
  return rafCallbacks[rafCallbacks.length - 1].id;
};

global.cancelAnimationFrame = (id) => {
  rafCallbacks = rafCallbacks.filter(c => c.id !== id);
};

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

describe('reading-progress.js DOM initialization', () => {
  let main;

  beforeEach(() => {
    document.body.innerHTML = '';
    jest.resetModules();
    rafCallbacks = [];
    simulatedRafTime = 0;
    jest.clearAllMocks();
  });

  describe('Reading Progress Bar', () => {
    it('should initialize and update progress bar width on scroll', () => {
      document.body.innerHTML = `
        <div id="reading-progress-container" class="hidden">
            <div id="reading-progress-bar" style="width: 0%;"></div>
        </div>
        <article style="height: 2000px;"></article>
      `;

      main = require('../reading-progress.js');

      const progressBar = document.getElementById('reading-progress-bar');
      const progressContainer = document.getElementById('reading-progress-container');
      const article = document.querySelector('article');

      // Mock window height
      Object.defineProperty(window, 'innerHeight', { writable: true, configurable: true, value: 1000 });

      // Mock article getBoundingClientRect for initial state
      article.getBoundingClientRect = jest.fn(() => ({
        top: 0,
        height: 2000
      }));

      // Initialize
      if (main.initReadingProgress) {
          main.initReadingProgress();
      } else {
          document.dispatchEvent(new Event('DOMContentLoaded'));
      }

      // Initial state (scrolled = 0) should hide container
      expect(progressContainer.classList.contains('hidden')).toBe(true);
      expect(progressBar.style.width).toBe('0%');

      // Mock scroll event
      // Scrolled half-way through the scrollable distance
      // scrollableDistance = 2000 - 1000 = 1000
      // scrolled = 500
      article.getBoundingClientRect = jest.fn(() => ({
        top: -500,
        height: 2000
      }));

      window.dispatchEvent(new Event('scroll'));
      advanceRAF(16);

      expect(progressContainer.classList.contains('hidden')).toBe(false);
      expect(progressBar.style.width).toBe('50%');

      // Mock scroll to end
      article.getBoundingClientRect = jest.fn(() => ({
        top: -1500, // scrolled past the scrollable distance
        height: 2000
      }));

      window.dispatchEvent(new Event('scroll'));
      advanceRAF(16);

      expect(progressBar.style.width).toBe('100%');
    });

    it('should not throw if elements are missing', () => {
        document.body.innerHTML = `<div>No elements here</div>`;
        main = require('../reading-progress.js');
        expect(() => {
          if (main.initReadingProgress) {
              main.initReadingProgress();
          } else {
              document.dispatchEvent(new Event('DOMContentLoaded'));
          }
        }).not.toThrow();
    });
  });
});
