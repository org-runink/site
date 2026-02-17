## 2024-05-15 - Missing "Skip to Main Content"
**Learning:** The default `hugo-saasify-theme` base layout (`baseof.html`) lacked a "Skip to main content" link, forcing keyboard users to navigate through the entire header before reaching the content.
**Action:** Always verify `baseof.html` for a skip link, even if memory suggests it exists. Use the `sr-only focus:not-sr-only` pattern for Tailwind-based themes to ensure accessibility without visual clutter.
