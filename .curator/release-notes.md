# Release notes

## 20261101-132309 (83c732f)

### Release Notes

This release focuses on brand consistency, content accuracy, and SEO improvements across the Runink product suite (FACE, TIDE, PULSE).

**Added**
*   **Brand Personas:** Introduced distinct personas for product pages: FACE (#329), TIDE (surfing pup, #328), and PULSE (#327).
*   **Blog Content:** Added three new answer pages covering revenue leakage, freight claims, and cold-chain claims (#311).
*   **SEO Infrastructure:** Implemented a shared head partial, typed JSON-LD, updated `llms.txt`, and a metadata gate (#289).
*   **SEO Content:** Added optimized titles, descriptions, quotable answers, and buyer FAQs (#288).
*   **Share Cards:** Added share cards for home and industries pages; redrawn stale product cards (#292).

**Changed**
*   **Homepage:** Rebuilt the homepage to focus on one product and one first step, targeting field operations and revenue leaders (#308, #306). Shortened the homepage overall (#312).
*   **FACE Page:** Rebuilt the FACE page to document current functionality without demo or mock claims (#312, #303).
*   **PULSE Page:** Refreshed PULSE content to reflect the shipped product, including one-line audit, daily LinkedIn draft, and Market sources (#304, #301).
*   **TIDE Content:** Aligned TIDE Policy & ReBAC wording with current behavior (#298). Updated documentation links to point to live `/tide/` paths (#296).
*   **Product Naming:** Replaced remaining public "CORE" mentions with "TIDE" (#299). Clarified that FORGE is a category within Runink TIDE, not a separate product (#294).
*   **Branding:** Updated TIDE and River marks to current styles (#293).
*   **Whitepapers:** Implemented plan-aware hosting, full names, and synchronized mirrors (#291).
*   **Content Accuracy:** Removed "gap" and "next-release" copy to show only what ships (#290). Removed internal source citations from public pages (#302).

**Fixed**
*   **Footer:** Standardized to a single footer with five columns and real language links (#313).
*   **Mobile UI:** Fixed full-width row labels on phones and underlined the comparison note's link on the homepage (#307).
*   **Public Site Hygiene:** Removed internal machine-generated reports and deleted held "Forecast LLM Document Auditing" drafts from the public site (#300, #295).

## 20260923-124414 (0682936)

## Release Notes

### Introduction
This release includes updates related to the naming and description of the sovereign server image.

### Changes
- Added: The server image is now referred to as the "Runink River Sovereignty Server (RIVER)".
- Changed: The description of the "Runink River Sovereignty Server (RIVER)" in `content/downloads.md` has been updated to clarify its purpose as the server image carrying Runink TIDE, the platform the FACE and PULSE apps run on.
- Changed: The term "sovereign server image" has been renamed to "Runink River Sovereignty Server (RIVER)" in the answer to the question "Is there anything we can put in someone's hands today?" in `content/products/face.md`.

