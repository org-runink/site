function initReadingProgress() {
    const progressBar = document.getElementById('reading-progress-bar');
    const progressContainer = document.getElementById('reading-progress-container');
    const article = document.querySelector('article');

    if (!progressBar || !progressContainer || !article) return;

    let ticking = false;

    function updateProgress() {
        const windowHeight = window.innerHeight;
        // Calculate the total scrollable height based on the article, not just the body
        // This ensures the progress bar finishes when the user reaches the end of the article content
        const articleRect = article.getBoundingClientRect();

        // The distance from the top of the viewport to the top of the article
        const articleTop = articleRect.top;
        // The total height of the article
        const articleHeight = articleRect.height;

        // We start measuring progress when the top of the article hits the top of the viewport
        // We finish when the bottom of the article hits the bottom of the viewport
        const scrollableDistance = articleHeight - windowHeight;

        // Amount scrolled relative to the article (starts at 0 when article top is at viewport top)
        const scrolled = -articleTop;

        if (scrolled > 0) {
            // Show the container once we start scrolling into the article
            progressContainer.classList.remove('hidden');

            // Calculate percentage
            let progress = (scrolled / scrollableDistance) * 100;

            // Clamp between 0 and 100
            progress = Math.max(0, Math.min(100, progress));

            progressBar.style.width = `${progress}%`;
        } else {
            // Hide if we haven't reached the article
            progressContainer.classList.add('hidden');
            progressBar.style.width = '0%';
        }

        ticking = false;
    }

    const onScroll = () => {
        if (!ticking) {
            window.requestAnimationFrame(updateProgress);
            ticking = true;
        }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    // Initial call in case the user loads half-way down the page
    updateProgress();
}

document.addEventListener('DOMContentLoaded', initReadingProgress);

if (typeof module !== 'undefined' && module.exports) { module.exports = { initReadingProgress }; }
