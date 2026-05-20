global.HTMLElement.prototype.animate = jest.fn();
const { initParallax } = require('../main.js');

describe('Parallax Edge Cases', () => {
    let container;
    let updateParallax;

    beforeEach(() => {
        // Setup simple DOM for tests
        document.body.innerHTML = `
            <div id="hero-parallax">
                <div class="parallax-layer" data-depth="0.2"></div>
                <div class="parallax-layer"></div>
            </div>
        `;

        container = document.getElementById('hero-parallax');

        // Mock IntersectionObserver
        global.IntersectionObserver = class IntersectionObserver {
            constructor() {}
            observe() {}
            unobserve() {}
            disconnect() {}
        };

        // Reset scrollY
        window.scrollY = 0;
    });

    afterEach(() => {
        document.body.innerHTML = '';
        jest.restoreAllMocks();
    });

    test('updateParallax handles missing data-depth attribute safely', () => {
        // Suppress console errors about requestAnimationFrame
        jest.spyOn(console, 'error').mockImplementation(() => {});
        const originalRAF = window.requestAnimationFrame;
        window.requestAnimationFrame = (cb) => { cb(); };

        // Simulate scrolling
        window.scrollY = 100;
        window.dispatchEvent(new Event("scroll")); // Update lastScrollY via scrollHandler

        initParallax();

        if (intersectCallback) {
            intersectCallback([{ isIntersecting: true }]);
        }

        window.scrollY = 100;
        window.dispatchEvent(new Event('scroll'));

        const layers = container.querySelectorAll('.parallax-layer');
        const layerArray = Array.from(layers);

        expect(layerArray[0].style.transform).toBe('translate3d(0, -10px, 0) scale(1.02)');
        expect(layerArray[1].style.transform).toBe('translate3d(0, 0px, 0) scale(1.02)');

        window.requestAnimationFrame = originalRAF;
    });
});
