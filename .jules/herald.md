## 2023-10-27 - Article Schema for GEO
**Learning:** Adding Article JSON-LD schema is crucial for reliable ingestion of logistics and AI content by generative engines like AI Overviews, as it provides structured data that these engines rely on to summarize information.
**Action:** Always include Article and WebSite JSON-LD schemas in technical whitepapers and articles to optimize for Generative Engines.
## 2026-04-26 - FAQPage Schema for Logistics AI Queries
**Learning:** Injecting `FAQPage` JSON-LD schema into the bottom of technical blog posts successfully structures high-intent logistics AI queries (e.g., 'What is a supply chain actionable twin?') directly for Generative Engines to easily parse and extract as answers.
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
## 2024-05-18 - Emphasizing Citable Statistics for GEO
**Learning:** Adding semantic `<strong>` tags around citable statistics and key insights helps AI generative engines easily extract and summarize information from the content.
**Action:** Always inject semantic `<strong>` tags around key facts or statistics in the text to optimize for Generative Engines.
## 2025-05-06 - GEO FinOps Optimization
**Learning:** Restructuring technical IT content from informal TL;DR blocks to authoritative 'Executive Summary: Key Takeaways' sections with bolded metrics, combined with an FAQPage schema, drastically improves the probability of the content being cited in generative AI searches around Cloud ROI and FinOps.
**Action:** For highly technical infrastructure/financial content, strictly use the Executive Summary and FAQPage format to bridge deep technical details with business ROI for LLMs.

## 2024-05-07 - Hugo Temporary Build Workarounds **Learning:** When verifying local builds with a downloaded Hugo binary instead of `pnpm exec hugo`, adding `disablePostCSS = true` to `hugo.toml` allows the build to pass without PostCSS evaluation errors. **Action:** This is a temporary local workaround only and must NOT be committed to the repository, as it will break production styling.
## 2026-05-07 - Weaver Performance Optimization
**Learning:** Continuous `setInterval` animation loops in Javascript continue to execute and consume CPU cycles even when the user is tabbed out or the target element is far off-screen.
**Action:** Replace `setInterval` logic with `requestAnimationFrame` and an `IntersectionObserver` to automatically pause animation loops when elements are not visible, improving client-side performance and battery life.

## 2026-05-09 - SEO Optimization: Canonical URL Mismatch and Schema **Learning:** Existing content templates might copy frontmatter verbatim (including canonical URLs) which severely impacts SEO ranking. **Action:** Always audit canonical URLs when working on existing pages to ensure they match the page's actual slug.

## 2026-05-11 - GEO Optimization using FAQPage Schema and Semantic Hierarchy
**Learning:** Replacing generic blockquote summaries with semantic `<h2>` hierarchies and injecting `FAQPage` JSON-LD schema significantly improves the structural discoverability of content. This combination directly optimizes for LLM summarization and achieves a perfect 100 Lighthouse SEO score.
**Action:** When performing future Generative Engine Optimization (GEO) tasks on content, prioritize establishing clear, bolded semantic headings for executive summaries and directly appending targeted `FAQPage` or `Article` JSON-LD schemas to the document to capture high-intent AI queries.
## 2026-05-13 - Route Optimization GEO Structure **Learning:** Use case pages lack structured data and executive summaries, hindering their discoverability in Generative AI searches. **Action:** Implement FAQPage schemas and high-density executive summaries in all future use case content.
## 2026-05-15 - Testing `relURL` **Learning:** Testing simple standalone Go scripts can be done effectively using standard Go testing practices in a `_test.go` file even if they are just snippets or standalone files. **Action:** Continue writing tests alongside standalone Go functions to ensure coverage and regression-proof codebase updates.
## 2026-05-16 - Cache DOM Queries Outside Event Listeners **Learning:** In vanilla JavaScript UI components containing multiple interactive elements (like tabs), calling `document.querySelector` or querying inner DOM trees inside `.forEach` click listeners leads to severe performance degradation because it evaluates the entire DOM structure redundantly on each click. **Action:** Pre-calculate or cache internal queries by `Array.from(...).map()` the relevant parent elements and selecting their children immediately, then attaching event listeners referencing the cached elements, significantly reducing execution time.
## 2024-05-21 - [Returns Fraud GEO] **Learning:** When adding `FAQPage` JSON-LD schema to Hugo markdown templates with embedded HTML, it's critical to ensure the schema block is injected at a structurally valid level (e.g., just before an `<hr>` or closing section), avoiding disrupting open HTML flow. Also, when inspecting EOF with `tail` or `head`, be wary of truncation in outputs and use precise line counts or specific matches to be sure you read the file correctly before using `replace_with_git_merge_diff`. **Action:** Always verify target boundaries by parsing trailing/leading HTML tags and using tools like `tail -n 50` rather than naked `cat` on large markdown files when targeting EOF insertions.

## 2026-05-22 - Structuring Content for Generative Engines
**Learning:** When optimizing content pages (like use cases) for AI extraction, injecting a dedicated 'Executive Summary: Key Takeaways' section with semantic HTML (e.g., `<h2>`, `<ul>`, `<li>`, `<strong>`) significantly improves clarity for both LLMs and human readers without requiring complex schema modifications.
**Action:** Prioritize adding these high-density, structured summary blocks to long-form technical content to ensure generative search engines can easily parse and cite core propositions.

## 2026-05-27 - GEO Bullet Point Summaries
**Learning:** Replacing generic narrative summaries with a structured '## Executive Summary: Key Takeaways' section containing high-density bullet points improves parsing by Generative Engine Overviews.
**Action:** Use high-density bullet points under clear semantic headers to optimize core concepts for LLM extraction.
