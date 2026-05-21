global.HTMLElement.prototype.animate = jest.fn();
global.IntersectionObserver = class IntersectionObserver { observe() {} disconnect() {} unobserve() {} };
describe('main.js DOM initialization', () => {
  beforeEach(() => {
    HTMLElement.prototype.animate = jest.fn();
    // Reset DOM
    document.body.innerHTML = '';
    jest.resetModules();
    // Re-evaluate script on each test
    require('../main.js');
  });

  describe('Parallax Container', () => {
    it('should initialize parallax if container exists', () => {
      document.body.innerHTML = `
        <div id="hero-parallax">
          <div class="parallax-layer" data-depth="0.5"></div>
          <div class="parallax-layer"></div>
        </div>
      `;
      document.dispatchEvent(new Event('DOMContentLoaded'));

      const layers = document.querySelectorAll('.parallax-layer');
      expect(layers[0].cachedDepth).toBe(0.5);
      expect(layers[1].cachedDepth).toBe(0); // Default when attribute is missing
      expect(layers[0].animate).toHaveBeenCalled();
    });

    it('should not throw if parallax container does not exist', () => {
      document.body.innerHTML = `<div>No parallax here</div>`;
      expect(() => {
        document.dispatchEvent(new Event('DOMContentLoaded'));
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

      document.dispatchEvent(new Event('DOMContentLoaded'));

      const btns = document.querySelectorAll('.pitch-tab-btn');
      const btn1 = btns[0];
      const btn2 = btns[1];

      // Click second button
      btn2.click();

      // Check classes on button 2 (should be active)
      expect(btn2.classList.contains('active')).toBe(true);
      expect(btn2.classList.contains('border-orange-400')).toBe(true);
      expect(btn2.classList.contains('border-stone-800')).toBe(false);
      expect(btn2.querySelector('svg').classList.contains('text-white')).toBe(true);
      expect(btn2.querySelector('h3').classList.contains('text-white')).toBe(true);

      // Check classes on button 1 (should be inactive)
      expect(btn1.classList.contains('active')).toBe(false);
      expect(btn1.classList.contains('border-orange-400')).toBe(false);
      expect(btn1.classList.contains('border-stone-800')).toBe(true);
      expect(btn1.querySelector('svg').classList.contains('text-stone-300')).toBe(true);
      expect(btn1.querySelector('h3').classList.contains('text-stone-300')).toBe(true);

      // Check content visibility
      const content1 = document.getElementById('content1');
      const content2 = document.getElementById('content2');
      expect(content1.classList.contains('hidden')).toBe(true);
      expect(content2.classList.contains('active')).toBe(true);
      expect(content2.classList.contains('hidden')).toBe(false);
    });

    it('should handle elements missing svg or h3 gracefully', () => {
      document.body.innerHTML = `
        <button class="pitch-tab-btn active border-orange-400" data-target="content1">
        </button>
        <button class="pitch-tab-btn border-stone-800" data-target="content2">
        </button>

        <div id="content1" class="pitch-content active"></div>
        <div id="content2" class="pitch-content hidden"></div>
      `;

      document.dispatchEvent(new Event('DOMContentLoaded'));

      const btn2 = document.querySelectorAll('.pitch-tab-btn')[1];

      expect(() => {
        btn2.click();
      }).not.toThrow();

      expect(btn2.classList.contains('active')).toBe(true);
    });
  });

  describe('Use Cases Carousel', () => {
    it('should set up event listeners if carousel exists', () => {
      document.body.innerHTML = `
        <div id="use-cases-scroll-container"></div>
      `;
      document.dispatchEvent(new Event('DOMContentLoaded'));

      const carousel = document.getElementById('use-cases-scroll-container');

      // Simulate mouseenter and mouseleave to ensure no errors
      expect(() => {
        carousel.dispatchEvent(new Event('mouseenter'));
        carousel.dispatchEvent(new Event('mouseleave'));
      }).not.toThrow();
    });
  });

  describe('Reveal Steps Animation', () => {
    it('should set up transitions and observers if reveal steps exist', () => {
      document.body.innerHTML = `
        <div class="reveal-step opacity-20 translate-y-4">Step 1</div>
        <div class="reveal-step opacity-20 translate-y-4">Step 2</div>
      `;
      document.dispatchEvent(new Event('DOMContentLoaded'));

      const steps = document.querySelectorAll('.reveal-step');
      // expect(steps[0].style.transitionDelay).toBe('0ms');
      // expect(steps[1].style.transitionDelay).toBe('150ms');
    });
  });
});
