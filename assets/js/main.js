import { animate, createTimeline, stagger, onScroll } from 'animejs';

document.addEventListener('DOMContentLoaded', () => {
    console.log('Anime.js V4 loaded');

    // Hero Animations
    const tl = createTimeline({
        defaults: { easing: 'outExpo', duration: 1500 }
    });

    // Check if hero content exists before animating
    if (document.querySelector('.hero-content')) {
        tl.add('.hero-content', {
            opacity: [0, 1],
            translateY: [50, 0],
            delay: 200
        });
    }

    if (document.querySelector('.hero-image')) {
        tl.add('.hero-image', {
            opacity: [0, 1],
            translateY: [50, 0],
        }, '-=1000');
    }

    // Parallax using onScroll
    const parallaxLayers = document.querySelectorAll('.parallax-layer');

    if (parallaxLayers.length > 0) {
        onScroll(({ y }) => {
            parallaxLayers.forEach(layer => {
                const speed = parseFloat(layer.dataset.speed) || 0.2;
                const yPos = -(y * speed);
                const rotate = y * 0.02 * (speed > 0.5 ? 1 : -1);
                layer.style.transform = `translate3d(0px, ${yPos}px, 0px) rotate(${rotate}deg)`;
            });
        });
    }

    // Intersection Observer for Story and Features
    const observeElements = document.querySelectorAll('.story-title, .story-text, .story-highlight, .feature-card');

    if (observeElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animate(entry.target, {
                        opacity: [0, 1],
                        translateY: [100, 0],
                        easing: 'outQuart',
                        duration: 1000,
                        delay: 100
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        observeElements.forEach(el => observer.observe(el));
    }

    // Continuous floating animation for shapes
    if (document.querySelector('.low-poly-shape')) {
        animate('.low-poly-shape', {
            translateY: [
                { value: -20, duration: 2000, easing: 'inOutQuad' },
                { value: 0, duration: 2000, easing: 'inOutQuad' }
            ],
            direction: 'alternate',
            loop: true,
            delay: stagger(500)
        });
    }
});
