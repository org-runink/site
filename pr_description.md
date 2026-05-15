🎯 **What:**
Added a test suite for `assets/js/main.js` to verify DOM initialization, layout modifications, and frontend interactions. The file lacked testing, leading to a gap in coverage for client-side functionality. Setup includes configuring Jest to use the `jsdom` environment and establishing mock classes for unsupported browser APIs like `IntersectionObserver` and `window.animate`.

📊 **Coverage:**
Tests now verify the following behaviors in an isolated DOM state:
*   Parallax Container logic (layer depth calculations and animation initialization).
*   Pitch Tab Button interactions (active class toggling, content visibility updates).
*   Use Case Carousel interaction observers (setup of mouse event listeners).
*   Reveal Steps Animation (delay staggering, intersection observer assignment).

✨ **Result:**
The test suite ensures that regressions in core UI interactions are caught automatically. The complete script executes via `pnpm test`, successfully passing all 6 assertions.
