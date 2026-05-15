🎯 **What:** The initialisation logic in `assets/js/main.js` was refactored by moving parallax, tab, carousel, and reveal steps initialisation into their own dedicated functions (`initParallax`, `initTabs`, `initCarousel`, and `initRevealSteps`) instead of keeping them within a monolithic `DOMContentLoaded` event listener.

💡 **Why:** By extracting complex functionality into dedicated self-contained modules, the readability, testability, and maintainability of the codebase are significantly improved.

✅ **Verification:** Verified that the contents were correctly written to `assets/js/main.js` using `cat assets/js/main.js` and confirmed that `pnpm run build` as well as `pnpm exec hugo` execute cleanly without introducing any build-time or runtime errors.

✨ **Result:** A more modular and easier to read `assets/js/main.js` file, improving overall code health and standardising initialisation patterns across the frontend JavaScript.
