## 2023-10-27 - Article Schema for GEO
**Learning:** Adding Article JSON-LD schema is crucial for reliable ingestion of logistics and AI content by generative engines like AI Overviews, as it provides structured data that these engines rely on to summarize information.
**Action:** Always include Article and WebSite JSON-LD schemas in technical whitepapers and articles to optimize for Generative Engines.
## 2026-04-26 - FAQPage Schema for Logistics AI Queries
**Learning:** Injecting `FAQPage` JSON-LD schema into the bottom of technical blog posts successfully structures high-intent logistics AI queries (e.g., 'What is a supply chain digital twin?') directly for Generative Engines to easily parse and extract as answers.
**Action:** When adding specific explanatory bullet points to article content, accompany them with an injected `FAQPage` schema section explicitly targeting the question form of those facts to capture long-tail query visibility.
## 2025-04-28 - Executive Summary for GEO
**Learning:** Generative Engines prefer highly structured bulleted lists over generic paragraph summaries.
**Action:** When updating articles, replace generic "TL;DR" sections with a structured `## Executive Summary: Key Takeaways` that uses bullet points directly addressing core concepts to improve chances of appearing in AI generated summaries.
## 2024-05-24 - Prevent Accidental Inclusion of Extracted Files during Hugo Local Testing
**Learning:** When manually downloading and extracting the Hugo binary archive (`hugo_extended_..._linux-amd64.tar.gz`) for local build verification, `tar` extracts additional files like `README.md` and `LICENSE` alongside the binary. These can easily be staged and committed accidentally, polluting the project repository.
**Action:** When manually extracting Hugo, explicitly delete all extracted files other than the `hugo` binary (e.g., `rm README.md LICENSE`) and avoid using blanket `git add .` to prevent unrelated files from entering the PR.
## 2026-05-03 - Hugo Security Model and safeURL
**Learning:** Hugo uses Go's `html/template` engine, which provides automatic, context-aware escaping for `href` and `src` attributes. The `| safeURL` filter is not a sanitizer but a mechanism to bypass this escaping. Using it on untrusted input like shortcode parameters actually introduces XSS vulnerabilities by disabling default protections.
**Action:** Rely on Hugo's default escaping for user-controlled input in templates. Use `| relURL` or `| absURL` for best-practice URL handling without bypassing security. Always double-check shortcode parameter names for typos (like leading spaces) that prevent data from reaching the template.
