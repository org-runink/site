function initParallax() {
  const parallaxContainer = document.getElementById('hero-parallax') || document.querySelector('.hero-parallax-container');
  if (parallaxContainer) {
    const layers = parallaxContainer.querySelectorAll('.parallax-layer');
    const layerArray = Array.from(layers);

    // Initial reveal
    layerArray.forEach((layer, index) => {
        // Cache depth for performance optimization
        layer.parallaxDepth = parseFloat(layer.getAttribute('data-depth')) || 0;
        layer.dataset.depth = layer.parallaxDepth;

        if (typeof layer.animate === 'function') {
            const animation = layer.animate([
                { opacity: 0, transform: 'scale(1.2)' },
                { opacity: 1, transform: 'scale(1)' }
            ], {
                duration: 2000,
                easing: 'cubic-bezier(0.19, 1, 0.22, 1)', // approximate outExpo
                delay: index * 200,
                fill: 'both'
            });
        }
    });

  let ticking = false;
  let lastScrollY = window.scrollY || 0;

  const updateParallax = function() {
    let currentScrollY = window.scrollY || 0;
    layerArray.forEach(layer => {
      // Check dataset to support the missing depth unit test
      const depth = layer.parallaxDepth !== undefined ? layer.parallaxDepth : (parseFloat(layer.getAttribute('data-depth')) || 0);
      const movement = -(currentScrollY * depth * 0.5);
      const scale = 1 + (currentScrollY * 0.0002);

      // Apply transform
      layer.style.transform = `translate3d(0, ${movement}px, 0) scale(${scale})`;
    });
    ticking = false;
  };

  const onScroll = () => {
    lastScrollY = window.scrollY || 0;
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  };

    let ObserverClass = window.IntersectionObserver;
    if (typeof ObserverClass !== 'function') {
        ObserverClass = class {
            constructor() {}
            observe() {}
            unobserve() {}
            disconnect() {}
        };
    }

    const observer = new ObserverClass((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          window.addEventListener('scroll', onScroll, { passive: true });
          updateParallax();
        } else {
          window.removeEventListener('scroll', onScroll);
        }
      });
    }, { rootMargin: '0px' });

    observer.observe(parallaxContainer);
    return updateParallax;
  }
}
function initTabs() {
  const btns = document.querySelectorAll('.pitch-tab-btn');
  const contents = document.querySelectorAll('.pitch-content');

  if (btns.length > 0) {
    // Map button to its associated SVG and H3 to avoid repetitive DOM queries
    const btnData = Array.from(btns).map(btn => ({
      btn,
      svg: btn.querySelector('svg'),
      h3: btn.querySelector('h3'),
      targetId: btn.getAttribute('data-target'),
      targetContent: document.getElementById(btn.getAttribute('data-target'))
    }));

    btnData.forEach(data => {
      data.btn.addEventListener('click', () => {
        // Remove active class from all buttons and contents
        btnData.forEach(bData => {
          const { btn: b, svg, h3 } = bData;
          b.classList.remove('active', 'border-orange-600', 'border-orange-400');
          b.classList.add('border-stone-800');
          if (svg) svg.classList.replace('text-white', 'text-stone-300');
          if (h3) h3.classList.replace('text-white', 'text-stone-300');
        });

        contents.forEach(c => {
          c.classList.remove('active');
          c.classList.add('hidden');
        });

        // Add active class to clicked button and target content
        data.btn.classList.add('active', 'border-orange-400');
        data.btn.classList.remove('border-stone-800');

        if (data.svg) data.svg.classList.replace('text-stone-300', 'text-white');
        if (data.h3) data.h3.classList.replace('text-stone-300', 'text-white');

        if (data.targetContent) {
          data.targetContent.classList.remove('hidden');
          data.targetContent.classList.add('active');
        }
      });
    });
  }
}

function initCarousel() {
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

      let ObserverClass = window.IntersectionObserver;
      if (typeof ObserverClass !== 'function') {
          ObserverClass = class {
              constructor() {}
              observe() {}
              unobserve() {}
              disconnect() {}
          };
      }

      const carouselObserver = new ObserverClass((entries) => {
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
}

function initRevealSteps() {
  const revealSteps = document.querySelectorAll('.reveal-step');
  if (revealSteps.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Remove initial hidden states
          entry.target.classList.remove('opacity-20', 'translate-y-4');
          // Add visible states
          entry.target.classList.add('opacity-100', 'translate-y-0');
          // Unobserve to trigger only once
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -50px 0px', threshold: 0.1 });

    revealSteps.forEach((step, index) => {
      // Staggered delay for siblings
      step.style.transitionDelay = `${(index % 5) * 150}ms`;
      revealObserver.observe(step);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initParallax();
  initTabs();
  initCarousel();
  initRevealSteps();
});

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { initParallax, initTabs, initCarousel, initRevealSteps };
}
