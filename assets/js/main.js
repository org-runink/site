function initParallax() {
  const parallaxContainer = document.getElementById('hero-parallax');
  if (parallaxContainer) {
    const layers = parallaxContainer.querySelectorAll('.parallax-layer');
    const layerArray = Array.from(layers);

    // Initial reveal
    layerArray.forEach((layer, index) => {
        // Cache depth for performance optimization
        layer.parallaxDepth = parseFloat(layer.getAttribute('data-depth')) || 0;

        const animation = layer.animate([
            { opacity: 0, transform: 'scale(1.2)' },
            { opacity: 1, transform: 'scale(1)' }
        ], {
            duration: 2000,
            easing: 'cubic-bezier(0.19, 1, 0.22, 1)', // approximate outExpo
            delay: index * 200,
            fill: 'both'
        });

  let ticking = false;

  const updateParallax = function() {
    let currentScrollY = window.scrollY || 0;
    layerArray.forEach(layer => {
      const depth = layer.parallaxDepth;
      const movement = -(currentScrollY * depth * 0.5);
      const scale = 1 + (currentScrollY * 0.0002);

      // Apply transform
      layer.style.transform = `translate3d(0, ${movement}px, 0) scale(${scale})`;
    });

    ticking = false;
  };

  const scrollHandler = () => {
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

    observer.observe(parallaxContainer);
  }
}

function initTabs() {
  const btns = document.querySelectorAll('.pitch-tab-btn');
  const contents = document.querySelectorAll('.pitch-content');

  if (btns.length > 0 && contents.length > 0) {
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all buttons and contents
        btns.forEach(b => {
          b.classList.remove('active', 'border-orange-600', 'border-orange-400');
          b.classList.add('border-stone-800');
          const svg = b.querySelector('svg');
          const h3 = b.querySelector('h3');
          if (svg) svg.classList.replace('text-white', 'text-stone-300');
          if (h3) h3.classList.replace('text-white', 'text-stone-300');
        });

        contents.forEach(c => {
          c.classList.remove('active');
          c.classList.add('hidden');
        });

        // Add active class to clicked button and target content
        btn.classList.add('active', 'border-orange-400');
        btn.classList.remove('border-stone-800');
        const svg = btn.querySelector('svg');
        const h3 = btn.querySelector('h3');
        if (svg) svg.classList.replace('text-stone-300', 'text-white');
        if (h3) h3.classList.replace('text-stone-300', 'text-white');

        const targetId = btn.getAttribute('data-target');
        const targetContent = document.getElementById(targetId);
        if (targetContent) {
          targetContent.classList.remove('hidden');
          targetContent.classList.add('active');
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
}

function initRevealSteps() {
  const revealSteps = document.querySelectorAll('.reveal-step');
  if (revealSteps.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Remove initial hidden states
          entry.target.classList.remove('opacity-20', 'translate-y-4');
          // Add visible states
          entry.target.classList.add('opacity-100', 'translate-y-0');
        } else {
          // Re-add hidden states to dim out
          entry.target.classList.remove('opacity-100', 'translate-y-0');
          entry.target.classList.add('opacity-20', 'translate-y-4');
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
