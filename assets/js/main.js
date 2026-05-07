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

  const btns = document.querySelectorAll('.pitch-tab-btn');
  const contents = document.querySelectorAll('.pitch-content');

  if (btns.length > 0) {
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Reset all buttons
            btns.forEach(b => {
                b.classList.remove('active', 'border-orange-600', 'bg-[#161515]');
                b.classList.add('border-stone-800', 'bg-[#161515]', 'hover:border-stone-700', 'hover:bg-[#1a1919]');
                b.querySelector('h3').classList.remove('text-white');
                b.querySelector('h3').classList.add('text-stone-500');
            });

            // Set active button
            btn.classList.add('active', 'border-orange-600', 'bg-[#161515]');
            btn.classList.remove('border-stone-800', 'hover:border-stone-700', 'hover:bg-[#1a1919]');
            btn.querySelector('h3').classList.add('text-white');
            btn.querySelector('h3').classList.remove('text-stone-500');

            // Hide all content
            contents.forEach(c => c.classList.add('hidden'));
            contents.forEach(c => c.classList.remove('active'));

            // Show target content
            const targetId = btn.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.remove('hidden');
                // Small delay for fade in effect if added in CSS
                setTimeout(() => targetContent.classList.add('active'), 50);
            }
        });
    });
  }
});
