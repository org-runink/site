🧪 Add Test for `updateParallax` Early Return

🎯 **What:** The `updateParallax` function contains an early return to stop calculating and applying parallax transforms when the container element scrolls entirely out of view. This gap was un-tested. We have added a test case to cover this edge condition.
📊 **Coverage:** The new test covers two specific out-of-bounds scenarios for `getBoundingClientRect()`: (1) scrolled out past the top (`rect.bottom < 0`) and (2) remaining far below the viewport (`rect.top > window.innerHeight`).
✨ **Result:** Test coverage is explicitly improved for the `updateParallax` function, ensuring it prevents unnecessary DOM styling and returns correctly without applying transforms when the container is out-of-bounds.
