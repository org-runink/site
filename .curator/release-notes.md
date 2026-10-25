# Release notes

## 20261025-112731 (3dbcc67)

## Release Notes

This release focuses on content accuracy, SEO improvements, and UI fixes across the Runink product suite (TIDE, PULSE, RIVER, FACE).

### Added
*   **FACE Page:** Rebuilt the FACE page to document current functionality without demo or mock claims.
*   **Blog Content:** Added three new answer pages covering revenue leakage, freight claims, and cold-chain claims.
*   **SEO Infrastructure:** Implemented a shared head partial, typed JSON-LD, and updated `llms.txt` with a metadata gate.
*   **Branding:** Introduced TIDE’s own mark in River’s style and updated River’s current mark.
*   **Share Cards:** Added share cards for home and industries pages.

### Changed
*   **Homepage:** Rebuilt the homepage to focus on one product and one first step, targeting field operations and revenue leaders.
*   **Product Content:**
    *   **PULSE:** Refreshed content to match the shipped product, highlighting the one-line audit, daily LinkedIn draft, and Market sources.
    *   **TIDE:** Updated Policy & ReBAC wording to align with current behavior.
    *   **River & PULSE:** Reframed content to lead with daily operational burden and cost, removing AI jargon.
*   **Terminology:** Replaced remaining public "CORE" mentions with "TIDE" and clarified that FORGE is a category within Runink TIDE, not a separate product.
*   **Documentation:** Updated `docs.runink.org` links to point to live `/tide/` paths.
*   **Whitepapers:** Implemented plan-aware hosting, full names, and synchronized mirrors.
*   **General Content:** Removed "gap" and "next-release" copy to focus on shipped features; updated titles, descriptions, and buyer FAQs.

### Fixed
*   **Footer:** Standardized to one footer with five columns and real language links.
*   **Mobile UI:** Fixed full-width row labels on phones and underlined the comparison note's link on the homepage.
*   **Public Hygiene:** Removed internal source citations, internal machine-generated reports, and held "Forecast LLM Document Auditing" drafts from public pages.

## 20260923-124414 (0682936)

## Release Notes

### Introduction
This release includes updates related to the naming and description of the sovereign server image.

### Changes
- Added: The server image is now referred to as the "Runink River Sovereignty Server (RIVER)".
- Changed: The description of the "Runink River Sovereignty Server (RIVER)" in `content/downloads.md` has been updated to clarify its purpose as the server image carrying Runink TIDE, the platform the FACE and PULSE apps run on.
- Changed: The term "sovereign server image" has been renamed to "Runink River Sovereignty Server (RIVER)" in the answer to the question "Is there anything we can put in someone's hands today?" in `content/products/face.md`.

