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

  // Parallax Steps Observer
  const stepContainers = document.querySelectorAll('.step-container');
  if (stepContainers.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const steps = entry.target.querySelectorAll('.reveal-step');
        if (entry.isIntersecting) {
          steps.forEach((step, idx) => {
            // Delay each step by 200ms dynamically
            step.style.transitionDelay = `${idx * 200}ms`;
            step.classList.remove('opacity-20', 'translate-y-4');
            step.classList.add('opacity-100', 'translate-y-0');
          });
        } else {
          // Reset when scrolled out, so it triggers next time
          steps.forEach(step => {
            step.style.transitionDelay = '0ms'; // reset delay immediately so hide is instant
            step.classList.add('opacity-20', 'translate-y-4');
            step.classList.remove('opacity-100', 'translate-y-0');
          });
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -15% 0px"
    });

    // Delay observer mount to allow layout to settle
    setTimeout(() => {
      stepContainers.forEach(container => {
        observer.observe(container);
      });
    }, 100);
  }
});
