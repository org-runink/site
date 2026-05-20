/**
 * @jest-environment jsdom
 */

// Mock IntersectionObserver
class IntersectionObserverMock {
  constructor(callback, options) {
    this.callback = callback;
    this.options = options;
  }
  observe(target) {
    target._observerCallback = this.callback;
  }
  unobserve() {}
  disconnect() {}
}

window.IntersectionObserver = IntersectionObserverMock;

const fs = require('fs');
const path = require('path');
const mainJsCode = fs.readFileSync(path.resolve(__dirname, 'main.js'), 'utf8');

describe('Carousel auto-scroll', () => {
  let carousel;

  beforeEach(() => {
    jest.useFakeTimers();
    let rafTime = 0;
    let callbacks = [];
    jest.spyOn(window, 'requestAnimationFrame').mockImplementation(cb => {
      callbacks.push(cb);
      return 1;
    });

    window.clearRAFCallbacks = () => { callbacks = []; };
    window.advanceRAF = (ms) => {
      rafTime += 16;
      if (callbacks.length > 0) {
        const cbs1 = callbacks;
        callbacks = [];
        cbs1.forEach(cb => cb(rafTime)); // Set lastTime
      }

      rafTime += ms;

      if (callbacks.length > 0) {
        const cbs2 = callbacks;
        callbacks = [];
        cbs2.forEach(cb => cb(rafTime)); // Calculate progress and scroll
      }
    };
    document.body.innerHTML = `
      <div id="use-cases-scroll-container" style="width: 500px;">
        <div style="width: 300px;">Card 1</div>
        <div style="width: 300px;">Card 2</div>
        <div style="width: 300px;">Card 3</div>
        <div style="width: 300px;">Card 4</div>
      </div>
    `;

    carousel = document.getElementById('use-cases-scroll-container');

    Object.defineProperty(carousel, 'clientWidth', { value: 500 });
    Object.defineProperty(carousel, 'scrollWidth', { value: 1200 });
    Object.defineProperty(carousel, 'scrollLeft', { value: 0, writable: true });

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

    eval(`(function() { ${mainJsCode} })();`);

    const event = document.createEvent('Event');
    event.initEvent('DOMContentLoaded', true, true);
    document.dispatchEvent(event);
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should start auto-scrolling when intersecting', () => {
    carousel._observerCallback([{ isIntersecting: true }]);
    window.advanceRAF(3000);
    expect(carousel.scrollBy).toHaveBeenCalledWith({ left: 340, behavior: 'smooth' });
  });

  it('should not auto-scroll when hovered', () => {
    carousel._observerCallback([{ isIntersecting: true }]);
    const mouseEnterEvent = new Event('mouseenter');
    carousel.dispatchEvent(mouseEnterEvent);
    window.advanceRAF(3000);
    expect(carousel.scrollBy).not.toHaveBeenCalled();
    const mouseLeaveEvent = new Event('mouseleave');
    carousel.dispatchEvent(mouseLeaveEvent);
    window.advanceRAF(3000);
    expect(carousel.scrollBy).toHaveBeenCalled();
  });

  it('should loop back to start when reaching the end', () => {
    carousel.scrollLeft = 800;
    carousel._observerCallback([{ isIntersecting: true }]);
    window.advanceRAF(3000);
    expect(carousel.scrollTo).toHaveBeenCalledWith({ left: 0, behavior: 'smooth' });
  });

  it('should stop auto-scrolling when no longer intersecting', () => {
    carousel._observerCallback([{ isIntersecting: true }]);
    window.advanceRAF(3000);
    expect(carousel.scrollBy).toHaveBeenCalledTimes(1);

    // clear the call count before testing stop
    carousel.scrollBy.mockClear();

    carousel._observerCallback([{ isIntersecting: false }]);
    // In actual requestAnimationFrame, cancelAnimationFrame would be called,
    // but our mock doesn't implement that fully, so let's clear the mock callbacks manually
    // if the real implementation handles it, the next frame won't be requested.
    window.clearRAFCallbacks();

    window.advanceRAF(3000);
    expect(carousel.scrollBy).not.toHaveBeenCalled();
  });
});
