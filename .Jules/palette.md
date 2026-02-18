## 2024-05-22 - Skip Link Focus Management
**Learning:** Adding `tabindex="-1"` to the skip link target (e.g., `<main id="main-content">`) is crucial for reliable programmatic focus management. Without it, some browsers may visually scroll to the target but fail to move the keyboard focus, causing the next tab press to reset to the top of the page or the previous focus point.
**Action:** Always ensure skip link targets have `tabindex="-1"` and a matching ID.
