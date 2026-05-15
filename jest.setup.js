// Mock IntersectionObserver
class IntersectionObserver {
  constructor(callback, options) {
    this.callback = callback;
    this.options = options;
  }
  observe() {}
  unobserve() {}
  disconnect() {}
}

window.IntersectionObserver = IntersectionObserver;

// Mock window.animate
window.HTMLElement.prototype.animate = jest.fn().mockImplementation(() => ({
  onfinish: jest.fn(),
  cancel: jest.fn()
}));
