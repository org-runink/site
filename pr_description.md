🎯 **What:**
This PR addresses missing test coverage for the parallax animation logic by adding an explicit edge-case test for elements lacking a `data-depth` attribute. It also resolves latent syntax errors within the `initParallax` function introduced in a prior commit.

📊 **Coverage:**
- Syntactic fixes applied to `assets/js/main.js` (unclosed blocks, undeclared variables).
- Mock environment implementations provided in `jest.setup.js` and imported correctly via `jest.config.js`.
- New `Parallax Edge Cases` describe block in `main.test.js` covering default math fallbacks (i.e., `depth = 0`) to prevent `NaN` transformations during scroll handling.

✨ **Result:**
The application's scroll-bound animations correctly fail-open on malformed components, and Jest securely asserts this behavior against simulated native window events, guaranteeing stability for `assets/js/main.js`.
