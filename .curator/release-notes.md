# Release notes

## 20261024-105824 (3dbcc67)

## Release Notes

This release focuses on content accuracy, SEO improvements, and UI fixes across the Runink platform. Key updates include a homepage and FACE page rebuild, the introduction of new blog content, and the removal of internal references and outdated product mentions in favor of current TIDE branding.

### Added
*   **Blog Content:** Added three new answer pages covering revenue leakage, freight claims, and cold-chain claims (#311).
*   **SEO & Metadata:** Implemented a shared head partial, honest share images, typed JSON-LD, and updated `llms.txt` with a metadata gate (#289).
*   **SEO Content:** Added new titles, descriptions, quotable answers, and buyer FAQs (#288).
*   **Branding:** Introduced TIDE’s own mark in River’s style and updated River’s current mark (#293).
*   **Share Cards:** Added share cards for home and industries pages (#292).

### Changed
*   **Homepage:** Rebuilt the homepage to focus on one product and one first step, with messaging tailored to field operations and revenue leaders (#308, #306).
*   **FACE Page:** Rebuilt the FACE page to document current functionality without demo or mock claims (#312, #303).
*   **Product Content:**
    *   **Pulse:** Refreshed content to match the shipped product, leading with daily burden and cost rather than AI jargon, and highlighting the one-line audit, daily LinkedIn draft, and Market sources (#304, #301, #286).
    *   **River:** Updated content to lead with daily burden and cost rather than AI jargon (#284).
    *   **TIDE:** Updated content to lead with daily burden and cost rather than AI jargon (#287).
*   **Branding & Terminology:**
    *   Replaced remaining public "CORE" mentions with "TIDE" (#299).
    *   Clarified that FORGE is a category inside Runink TIDE, not a separate product (#294).
    *   Aligned TIDE Policy & ReBAC wording with current behavior (#298).
    *   Updated `docs.runink.org` links to point to live `/tide/` paths (#296).
*   **Whitepapers:** Implemented plan-aware hosting, full names, and synchronized mirrors (#291).
*   **General Content:** Removed "gap" and "next-release" copy to focus on what currently ships (#290).

### Fixed
*   **Footer:** Standardized to one footer with five columns and real language links (#313).
*   **Mobile UI:** Fixed full-width row labels on phones and underlined the comparison note's link on the homepage (#307).

### Removed
*   **Internal References:** Removed internal source citations from public pages (#302).
*   **Internal Reports:** Removed internal machine-generated reports from the public site (#300).
*   **Drafts:** Deleted held "Forecast LLM Document Auditing" drafts (#295).
*   **Stale Assets:** Redrew stale product cards (#292).

## 20260923-124414 (0682936)

## Release Notes

### Introduction
This release includes updates related to the naming and description of the sovereign server image.

### Changes
- Added: The server image is now referred to as the "Runink River Sovereignty Server (RIVER)".
- Changed: The description of the "Runink River Sovereignty Server (RIVER)" in `content/downloads.md` has been updated to clarify its purpose as the server image carrying Runink TIDE, the platform the FACE and PULSE apps run on.
- Changed: The term "sovereign server image" has been renamed to "Runink River Sovereignty Server (RIVER)" in the answer to the question "Is there anything we can put in someone's hands today?" in `content/products/face.md`.

