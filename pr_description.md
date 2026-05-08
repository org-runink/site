🎯 **What:** Extracted inline CSS for `.hide-scrollbar` and inline Javascript for initializing the `use-cases-scroll-container` out of `layouts/shortcodes/use-cases-carousel.html`. The CSS was moved to `assets/css/main.css` under the `@layer utilities` block, and the JS was moved to `assets/js/main.js` inside the existing `DOMContentLoaded` listener block wrapped with an `if (carousel)` block to prevent shortcircuiting other logic.

💡 **Why:** Having inline CSS and Javascript negatively impacts the codebase maintainability, since they are harder to manage and lint, and cannot be cached effectively. Moving them to central assets makes the architecture cleaner and more performant.

✅ **Verification:** I successfully built the site using the Hugo extended binary and confirmed no errors occurred. I also created a Python script leveraging Playwright to start a local dev server, go to the page containing the `use-cases-carousel` shortcode, scroll down to the element, and take visual screenshots and video to ensure the component is styled and behaving properly without a scrollbar.

✨ **Result:** A cleaner shortcode HTML file stripped of embedded logic/style, yielding a more modular frontend structure, without any functional or visual regressions.
