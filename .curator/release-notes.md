# Release notes

## 20261029-125956 (3dbcc67)

## Release Notes

This update focuses on content accuracy, SEO improvements, and UI fixes across the homepage, product pages, and footer.

### Added
*   **Blog Content:** Added three new answer pages covering revenue leakage, freight claims, and cold-chain claims (#311).
*   **SEO Infrastructure:** Implemented a shared head partial, honest share images, typed JSON-LD, and updated `llms.txt` with a metadata gate (#289).
*   **SEO Content:** Added optimized titles, descriptions, quotable answers, and buyer FAQs (#288).
*   **Branding:** Added TIDE’s own mark in River’s style and updated River’s current mark (#293).
*   **Social Sharing:** Added share cards for home and industries pages (#292).

### Changed
*   **Homepage:** Rebuilt the homepage to focus on one product and one first step, with messaging tailored to field operations and revenue leaders (#308, #306).
*   **Product Pages:**
    *   **Pulse:** Refreshed content to match the shipped product, leading with daily burden and cost rather than AI jargon; highlighted the one-line audit, daily LinkedIn draft, and Market sources (#304, #301, #286).
    *   **FACE:** Rebuilt the page to document the current state without demo or mock claims, leading with daily burden and cost (#312, #303, #287).
    *   **River:** Updated content to lead with daily burden and cost rather than AI jargon (#284).
*   **Terminology & Documentation:**
    *   Replaced remaining public "CORE" mentions with "TIDE" (#299).
    *   Aligned TIDE Policy & ReBAC wording with current behavior (#298).
    *   Clarified that FORGE is a category inside Runink TIDE, not a separate product (#294).
    *   Updated `docs.runink.org` links to point to live `/tide/` paths (#296).
    *   Removed internal source citations from public industry pages (#302).
    *   Removed internal machine-generated reports from the public site (#300).
    *   Deleted held "Forecast LLM Document Auditing" drafts (#295).
    *   Updated whitepaper hosting to be plan-aware with full names and synchronized mirrors (#291).
    *   Removed "gap" and "next-release" copy in favor of showing what currently ships (#290).
*   **Footer:** Updated to a single footer with five columns and real language links (#313).

### Fixed
*   **Homepage UI:** Fixed full-width row labels on mobile devices and added underlines to comparison note links (#307).

## 20260923-124414 (0682936)

## Release Notes

### Introduction
This release includes updates related to the naming and description of the sovereign server image.

### Changes
- Added: The server image is now referred to as the "Runink River Sovereignty Server (RIVER)".
- Changed: The description of the "Runink River Sovereignty Server (RIVER)" in `content/downloads.md` has been updated to clarify its purpose as the server image carrying Runink TIDE, the platform the FACE and PULSE apps run on.
- Changed: The term "sovereign server image" has been renamed to "Runink River Sovereignty Server (RIVER)" in the answer to the question "Is there anything we can put in someone's hands today?" in `content/products/face.md`.

