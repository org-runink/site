document.addEventListener('DOMContentLoaded', () => {
  const parallaxContainer = document.getElementById('hero-parallax');

  if (parallaxContainer) {
    const layers = parallaxContainer.querySelectorAll('.parallax-layer');
    const layerArray = Array.from(layers);

    // Initial reveal
    layerArray.forEach((layer, index) => {
        const animation = layer.animate([
            { opacity: 0, transform: 'scale(1.2)' },
            { opacity: 1, transform: 'scale(1)' }
        ], {
            duration: 2000,
            easing: 'cubic-bezier(0.19, 1, 0.22, 1)', // approximate outExpo
            delay: index * 200,
            fill: 'both'
        });

        animation.onfinish = () => {
            animation.cancel(); // Let the scroll transform take over completely
            layer.style.opacity = '1';
        };
    });

    let lastScrollY = window.scrollY;
    let ticking = false;

    function updateParallax() {
      layerArray.forEach(layer => {
        const depth = parseFloat(layer.getAttribute('data-depth')) || 0;
        const movement = -(lastScrollY * depth * 0.5);
        const scale = 1 + (lastScrollY * 0.0002);

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
