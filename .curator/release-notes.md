# Release notes

## 20261030-125504 (3dbcc67)

### Release Notes

This update focuses on content accuracy, SEO improvements, and UI fixes across the homepage, product pages, and public documentation.

**Added**
*   **Blog Content:** Added three new answer pages covering revenue leakage, freight claims, and cold-chain claims.
*   **SEO & Metadata:** Implemented a shared head partial, typed JSON-LD, updated `llms.txt`, and a metadata gate. Added share cards for home and industries pages.
*   **Branding:** Introduced TIDE’s own mark in River’s style and updated River’s current mark.

**Changed**
*   **Homepage:** Rebuilt the homepage to focus on one product and one first step, targeting field operations and revenue leaders. Reduced overall length and updated copy to speak directly to target audiences.
*   **Product Pages:**
    *   **FACE:** Rebuilt the page to document current functionality without demo or mock claims.
    *   **Pulse:** Refreshed content to align with the shipped product, highlighting the one-line audit, daily LinkedIn draft, and Market sources.
    *   **TIDE:** Updated copy to lead with daily burden and cost implications rather than AI jargon. Aligned Policy & ReBAC wording with current behavior.
    *   **River:** Updated copy to lead with daily burden and cost implications rather than AI jargon.
*   **Documentation & Naming:**
    *   Replaced remaining public "CORE" mentions with "TIDE."
    *   Clarified that FORGE is a category within Runink TIDE, not a separate product.
    *   Updated `docs.runink.org` links to point to live `/tide/` paths.
    *   Removed internal source citations from public industry pages.
    *   Removed internal machine-generated reports from the public site.
    *   Deleted held "Forecast LLM Document Auditing" drafts.
    *   Updated whitepaper hosting to be plan-aware, with full names and synchronized mirrors.
*   **Content Strategy:** Removed "gap" and "next-release" copy in favor of showing what currently ships. Updated titles, descriptions, and buyer FAQs for better quotability.

**Fixed**
*   **Footer:** Standardized to one footer with five columns and functional language links.
*   **Mobile UI:** Fixed full-width row labels on phone screens and added underlines to comparison note links on the homepage.

## 20260923-124414 (0682936)

## Release Notes

### Introduction
This release includes updates related to the naming and description of the sovereign server image.

### Changes
- Added: The server image is now referred to as the "Runink River Sovereignty Server (RIVER)".
- Changed: The description of the "Runink River Sovereignty Server (RIVER)" in `content/downloads.md` has been updated to clarify its purpose as the server image carrying Runink TIDE, the platform the FACE and PULSE apps run on.
- Changed: The term "sovereign server image" has been renamed to "Runink River Sovereignty Server (RIVER)" in the answer to the question "Is there anything we can put in someone's hands today?" in `content/products/face.md`.

