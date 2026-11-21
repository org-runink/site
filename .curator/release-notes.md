# Release notes

## 20261027-121036 (3dbcc67)

This release focuses on content accuracy, SEO improvements, and UI fixes across the Runink platform. It includes a rebuild of the homepage and FACE page, updates to product documentation (Pulse, TIDE, River), and the removal of internal or outdated references from public pages.

### Added
*   **Blog Content:** Added three new answer pages addressing revenue leakage, freight claims, and cold-chain claims.
*   **SEO Infrastructure:** Implemented a shared head partial, typed JSON-LD, and updated `llms.txt` with a metadata gate.
*   **Social Sharing:** Added share cards for the homepage and industries pages.
*   **Branding:** Introduced TIDE’s own mark in River’s style and updated River’s current mark.

### Changed
*   **Homepage:** Rebuilt the homepage to focus on one product and one first step, targeting field operations and revenue leaders.
*   **FACE Page:** Rebuilt the FACE page to document current functionality without demo or mock claims.
*   **Product Content:**
    *   **Pulse:** Refreshed content to match the shipped product, highlighting the one-line audit, daily LinkedIn draft, and Market sources.
    *   **TIDE:** Updated Policy & ReBAC wording to align with current behavior; repositioned FORGE as a category within TIDE rather than a separate product.
    *   **River:** Updated content to lead with daily operational burden and cost rather than AI jargon.
*   **General Content:**
    *   Replaced remaining public mentions of "CORE" with "TIDE".
    *   Updated `docs.runink.org` links to point to live `/tide/` paths.
    *   Removed internal source citations from public industry pages.
    *   Removed internal machine-generated reports from the public site.
    *   Deleted held "Forecast LLM Document Auditing" drafts.
    *   Removed "gap" and "next-release" copy in favor of showing what currently ships.
    *   Updated whitepaper hosting to be plan-aware with synchronized mirrors and full names.
*   **SEO & Metadata:** Updated titles, descriptions, and added quotable answers and buyer FAQs.

### Fixed
*   **Footer:** Standardized the footer to one layout with five columns and functional language links.
*   **Mobile UI:** Fixed full-width row labels on mobile devices and added underlines to comparison note links on the homepage.

## 20260923-124414 (0682936)

## Release Notes

### Introduction
This release includes updates related to the naming and description of the sovereign server image.

### Changes
- Added: The server image is now referred to as the "Runink River Sovereignty Server (RIVER)".
- Changed: The description of the "Runink River Sovereignty Server (RIVER)" in `content/downloads.md` has been updated to clarify its purpose as the server image carrying Runink TIDE, the platform the FACE and PULSE apps run on.
- Changed: The term "sovereign server image" has been renamed to "Runink River Sovereignty Server (RIVER)" in the answer to the question "Is there anything we can put in someone's hands today?" in `content/products/face.md`.

