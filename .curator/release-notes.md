# Release notes

## 20261031-122651 (3dbcc67)

This release focuses on content accuracy and clarity, replacing internal terminology with public-facing product names (TIDE, Pulse, River, FACE), and improves SEO and mobile responsiveness.

### Added
*   **Blog Content:** Three new answer pages addressing revenue leakage, freight claims, and cold-chain claims.
*   **SEO & Metadata:** Shared head partial, typed JSON-LD, updated `llms.txt`, and a metadata gate.
*   **Social Sharing:** Share cards for home and industry pages, plus honest share images.
*   **Whitepaper Hosting:** Plan-aware hosting with synchronized mirrors and full names.

### Changed
*   **Homepage:** Rebuilt to focus on one product and one first step; shortened overall length; now speaks directly to field operations and revenue leaders.
*   **Product Pages:**
    *   **TIDE:** Copy now leads with daily operational burden and cost rather than AI jargon; Policy & ReBAC wording aligned with current behavior.
    *   **Pulse:** Refreshed to match the shipped product; copy leads with daily burden/cost; displays one-line audit, daily LinkedIn draft, and Market sources.
    *   **River:** Copy leads with daily burden and cost rather than AI jargon.
    *   **FACE:** Rebuilt to document the current state without demo or mock claims.
*   **Branding & Terminology:**
    *   Replaced remaining public "CORE" mentions with "TIDE".
    *   Clarified that FORGE is a category within Runink TIDE, not a separate product.
    *   Updated TIDE and River brand marks to current styles.
    *   Redrew stale product cards.
*   **Links & Documentation:**
    *   `docs.runink.org` links now point to live `/tide/` paths.
    *   Footer updated to a single footer with five columns and real language links.
    *   Removed internal source citations from public industry pages.
    *   Removed internal machine-generated reports from the public site.
    *   Deleted held "Forecast LLM Document Auditing" drafts.
    *   Removed "gap" and "next-release" copy in favor of showing what currently ships.

### Fixed
*   **Mobile Layout:** Full-width row labels on phones for the homepage.
*   **Link Styling:** Underlined the comparison note's link on the homepage.

## 20260923-124414 (0682936)

## Release Notes

### Introduction
This release includes updates related to the naming and description of the sovereign server image.

### Changes
- Added: The server image is now referred to as the "Runink River Sovereignty Server (RIVER)".
- Changed: The description of the "Runink River Sovereignty Server (RIVER)" in `content/downloads.md` has been updated to clarify its purpose as the server image carrying Runink TIDE, the platform the FACE and PULSE apps run on.
- Changed: The term "sovereign server image" has been renamed to "Runink River Sovereignty Server (RIVER)" in the answer to the question "Is there anything we can put in someone's hands today?" in `content/products/face.md`.

