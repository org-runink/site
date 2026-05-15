🎯 **What:** Extracted parallax logic into testable functions (`initParallax` and `updateParallax`) and added a Jest test to cover the edge case where parallax layers lack the `data-depth` attribute.
📊 **Coverage:** Added coverage for parallax initialization and transformation updates, explicitly testing the fallback behavior for missing `data-depth` attributes (defaults to 0).
✨ **Result:** Increased test coverage for frontend animations and ensured robust fallback behavior for parallax layers, preventing potential NaN values in transform calculations.
