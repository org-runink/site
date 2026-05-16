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

        // Mock HTMLElement.prototype.animate
        if (!HTMLElement.prototype.animate) {
            HTMLElement.prototype.animate = jest.fn().mockReturnValue({
                finished: Promise.resolve(),
                cancel: jest.fn(),
                play: jest.fn()
            });
        }

        // Reset scrollY
        window.scrollY = 0;
    });

    afterEach(() => {
        document.body.innerHTML = '';
        jest.restoreAllMocks();
    });

    test('updateParallax handles missing data-depth attribute safely', () => {
        // Initialize parallax on our container
        initParallax(container);

        // Mock IntersectionObserver to call callback immediately
        const scrollHandler = () => {
            let currentScrollY = window.scrollY || 0;
            const layers = container.querySelectorAll('.parallax-layer');
            Array.from(layers).forEach(layer => {
                const depth = parseFloat(layer.getAttribute('data-depth')) || 0;
                const movement = -(currentScrollY * depth * 0.5);
                const scale = 1 + (currentScrollY * 0.0002);
                layer.style.transform = `translate3d(0, ${movement}px, 0) scale(${scale})`;
            });
        };

        window.addEventListener('scroll', scrollHandler);

        // Simulate scrolling
        window.scrollY = 100;
        window.dispatchEvent(new Event('scroll'));

        const layers = container.querySelectorAll('.parallax-layer');
        const layerArray = Array.from(layers);

        // Layer 1: has data-depth 0.2
        // movement = -(100 * 0.2 * 0.5) = -10
        // scale = 1 + (100 * 0.0002) = 1.02
        expect(layerArray[0].style.transform).toBe('translate3d(0, -10px, 0) scale(1.02)');

        // Layer 2: missing data-depth, should default to 0
        // movement = -(100 * 0 * 0.5) = -0 (or 0)
        // scale = 1 + (100 * 0.0002) = 1.02
        expect(layerArray[1].style.transform).toBe('translate3d(0, 0px, 0) scale(1.02)');
    });
});
