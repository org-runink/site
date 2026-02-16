import { animate, stagger } from 'animejs';

document.addEventListener('DOMContentLoaded', () => {
  const parallaxContainer = document.getElementById('hero-parallax');

  if (parallaxContainer) {
    const layers = parallaxContainer.querySelectorAll('.parallax-layer');
    const layerArray = Array.from(layers);

    // Initial reveal
    animate(layerArray, {
      opacity: [0, 1],
      scale: [1.2, 1],
      duration: 2000,
      ease: 'outExpo',
      delay: stagger(200)
    });

    let lastScrollY = window.scrollY;
    let ticking = false;

    function updateParallax() {
      const scrolled = window.scrollY;

      layerArray.forEach(layer => {
        const depth = parseFloat(layer.getAttribute('data-depth')) || 0;
        const movement = -(scrolled * depth * 0.5);
        const scale = 1 + (scrolled * 0.0002);

        // Apply transform
        layer.style.transform = `translate3d(0, ${movement}px, 0) scale(${scale})`;
      });

      ticking = false;
    }

    window.addEventListener('scroll', () => {
      lastScrollY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    });
  }
});
