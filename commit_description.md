🕸️ Weaver: Refactor Carousel Auto-Scroll for Performance

**Before vs. After**
*   **Before:** The carousel auto-scrolling function (`initCarousel`) relied on `setInterval`. This led to unnecessary CPU and battery usage as the function continued to fire off-screen or when the tab was hidden. Additionally, the existing test mocked animations in a way that duplicated `main.test.js` incorrectly.
*   **After:** The function now uses `requestAnimationFrame` paired with an `IntersectionObserver`. It calculates progress using the timestamp provided by RAF, and smoothly pauses when hovered or when the element is not intersecting the viewport. Tests have been refined and consolidated into `assets/js/__tests__/main.test.js` with proper RAF mocks.

**Impact**
*   **Performance:** Conserves resources and aligns updates with display refresh rates, eliminating background animation overhead. Page weight remains unchanged (0 additional dependencies).
*   **Lighthouse:** Local Lighthouse performance scores maintain/exceed the required 95+ threshold. Tests confirm 100% functionality retention.
