# Release notes

## 20261026-132950 (3dbcc67)

## Release Notes

This release focuses on content accuracy, SEO improvements, and UI fixes across the Runink platform, including updates to the homepage, product pages (TIDE, PULSE, RIVER, FACE), and industry-specific content.

### Added
*   **Blog Content:** Added three new answer pages covering revenue leakage, freight claims, and cold-chain claims (#311).
*   **SEO Infrastructure:** Implemented a shared head partial, honest share images, typed JSON-LD, and updated `llms.txt` with a metadata gate (#289).
*   **SEO Content:** Added optimized titles, descriptions, quotable answers, and buyer FAQs (#288).
*   **Branding:** Introduced TIDE's own mark in River's style and updated River's current mark (#293).
*   **Share Cards:** Added share cards for home and industries pages; redrew stale product cards (#292).

### Changed
*   **Homepage:** Rebuilt the homepage to focus on one product and one first step, with shorter copy and messaging tailored to field operations and revenue leaders (#308, #306, #312).
*   **Product Pages:**
    *   **TIDE:** Updated copy to lead with daily burden and cost rather than AI jargon; aligned Policy & ReBAC wording with current behavior; clarified that FORGE is a category within TIDE, not a separate product (#287, #298, #294).
    *   **PULSE:** Refreshed content against the shipped product; updated copy to lead with daily burden and cost; highlighted the one-line audit, daily LinkedIn draft, and Market sources (#304, #286, #301).
    *   **RIVER:** Updated copy to lead with daily burden and cost rather than AI jargon (#284).
    *   **FACE:** Rebuilt the page to document the current state without demo or mock claims (#312, #303).
*   **Content & Terminology:**
    *   Removed remaining public mentions of "CORE" in favor of "TIDE" (#299).
    *   Removed internal source citations from public industry pages (#302).
    *   Removed internal machine-generated reports from the public site (#300).
    *   Deleted held "Forecast LLM Document Auditing" drafts (#295).
    *   Updated documentation links to point to live `/tide/` paths (#296).
    *   Removed "gap" and "next-release" copy to focus on what currently ships (#290).
*   **Whitepapers:** Implemented plan-aware hosting, full names, and synchronized mirrors (#291).

### Fixed
*   **Footer:** Standardized to one footer with five columns and real language links (#313).
*   **Mobile UI:** Fixed full-width row labels on phones and underlined the comparison note's link on the homepage (#307).

## 20260923-124414 (0682936)

## Release Notes

### Introduction
This release includes updates related to the naming and description of the sovereign server image.

### Changes
- Added: The server image is now referred to as the "Runink River Sovereignty Server (RIVER)".
- Changed: The description of the "Runink River Sovereignty Server (RIVER)" in `content/downloads.md` has been updated to clarify its purpose as the server image carrying Runink TIDE, the platform the FACE and PULSE apps run on.
- Changed: The term "sovereign server image" has been renamed to "Runink River Sovereignty Server (RIVER)" in the answer to the question "Is there anything we can put in someone's hands today?" in `content/products/face.md`.

