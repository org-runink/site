# Release notes

## 20261028-125302 (3dbcc67)

### Release Notes

This release focuses on content alignment with shipped products, SEO improvements, and UI fixes. It removes outdated or internal references, updates product documentation for TIDE, PULSE, and FACE, and refines the homepage and industry pages to better address field operations and revenue leaders.

**Added**
*   **Blog Content:** Added three new answer pages covering revenue leakage, freight claims, and cold-chain claims.
*   **SEO & Metadata:** Implemented a shared head partial, honest share images, typed JSON-LD, and updated `llms.txt` with a metadata gate.
*   **Whitepapers:** Enabled plan-aware hosting, full names, and synchronized mirrors for whitepaper content.
*   **Branding:** Introduced TIDE’s own mark in River’s style and updated River’s current mark.
*   **Share Cards:** Added share cards for home and industries pages.

**Changed**
*   **Homepage:** Rebuilt the homepage to focus on one product and one first step, with shorter copy and full-width row labels on mobile devices.
*   **Product Pages:**
    *   **TIDE:** Updated copy to lead with daily burden and cost rather than AI jargon; aligned Policy & ReBAC wording with current behavior; reclassified FORGE as a category within TIDE rather than a separate product.
    *   **PULSE:** Refreshed content to reflect the shipped product, highlighting the one-line audit, daily LinkedIn draft, and Market sources; updated copy to lead with daily burden and cost.
    *   **FACE:** Rebuilt the FACE page to document current functionality without demo or mock claims.
    *   **River:** Updated copy to lead with daily burden and cost rather than AI jargon.
*   **Content Cleanup:**
    *   Removed internal source citations from public industry pages.
    *   Removed internal machine-generated reports from the public site.
    *   Replaced remaining public "CORE" mentions with "TIDE."
    *   Deleted held "Forecast LLM Document Auditing" drafts.
    *   Removed "gap" and "next-release" copy in favor of showing what currently ships.
    *   Updated `docs.runink.org` links to point to live `/tide/` paths.
*   **UI/UX:** Underlined the comparison note's link on the homepage.

**Fixed**
*   **Footer:** Standardized the footer to one layout with five columns and real language links.
*   **Mobile Display:** Fixed full-width row labels on phones for the homepage.

## 20260923-124414 (0682936)

## Release Notes

### Introduction
This release includes updates related to the naming and description of the sovereign server image.

### Changes
- Added: The server image is now referred to as the "Runink River Sovereignty Server (RIVER)".
- Changed: The description of the "Runink River Sovereignty Server (RIVER)" in `content/downloads.md` has been updated to clarify its purpose as the server image carrying Runink TIDE, the platform the FACE and PULSE apps run on.
- Changed: The term "sovereign server image" has been renamed to "Runink River Sovereignty Server (RIVER)" in the answer to the question "Is there anything we can put in someone's hands today?" in `content/products/face.md`.

