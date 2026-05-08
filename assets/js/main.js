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

    const scrollHandler = () => {
      lastScrollY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          window.addEventListener('scroll', scrollHandler, { passive: true });
        } else {
          window.removeEventListener('scroll', scrollHandler);
        }
      });
    }, { rootMargin: '0px', threshold: 0.0 });

    observer.observe(parallaxContainer);
  }

  // Use Cases Carousel Initialization
  const carousel = document.getElementById('use-cases-scroll-container');
  if (carousel) {
      let isHovered = false;
      carousel.addEventListener('mouseenter', () => isHovered = true);
      carousel.addEventListener('mouseleave', () => isHovered = false);

      let carouselInterval;

      const startCarousel = () => {
        if (!carouselInterval) {
          carouselInterval = setInterval(() => {
              if (!isHovered) {
                  // Determine if we've reached the end
                  if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 10) {
                      carousel.scrollTo({ left: 0, behavior: 'smooth' }); // Loop back
                  } else {
                      // Scroll right by the width of one card + gap roughly
                      carousel.scrollBy({ left: 340, behavior: 'smooth' });
                  }
              }
          }, 3000); // 3 seconds interval
        }
      };

      const stopCarousel = () => {
        if (carouselInterval) {
          clearInterval(carouselInterval);
          carouselInterval = null;
        }
      };

      const carouselObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            startCarousel();
          } else {
            stopCarousel();
          }
        });
      }, { rootMargin: '0px', threshold: 0.0 });

      carouselObserver.observe(carousel);
  }
});
