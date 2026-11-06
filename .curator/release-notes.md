# Release notes

## 20261106-141630 (7e892cc)

## Release Notes

This update introduces a pricing estimator for FACE, updates product and privacy content across PULSE, FACE, and TIDE, and refines the site's homepage and footer.

### Added
*   **FACE Pricing Estimator:** Added a pricing estimator to the FACE page, detailing costs for FACE Lite ($85/$99), Dedicated ($165), and services ($200/hour), with a $150 provisioning cap for approved orders (#337).
*   **Privacy Policies:**
    *   Added PULSE privacy policy and account-deletion section (#332).
    *   Added FACE privacy policy and account-deletion page (#331).
*   **Product Personas:**
    *   Added persona display to FACE product pages (#329).
    *   Added the "surfing pup" persona to TIDE product pages (#328).
    *   Added a dedicated persona to PULSE product pages (#327).
*   **Blog Content:** Added three answer pages covering revenue leakage, freight claims, and cold-chain claims (#311).

### Changed
*   **Content & Branding:**
    *   Updated PULSE pages to follow Release 10 and removed Android APK downloads (#335).
    *   Aligned product pages with the current TIDE console, River's desktop, and documentation (#333).
    *   Updated FACE product pages to reflect the current app tour (#329).
    *   Rebuilt the FACE page and shortened the homepage (#312).
    *   Rebuilt the homepage to focus on one product and one first step, targeting field operations and revenue leaders (#308, #306).
    *   Refreshed PULSE product content to match the shipped product, including the one-line audit, daily LinkedIn draft, and Market sources (#304, #301).
    *   Updated FACE documentation to reflect current status, removing demo or mock claims (#303).
    *   Replaced public mentions of "CORE" with "TIDE" (#299).
    *   Aligned TIDE Policy & ReBAC wording with current behavior (#298).
    *   Updated `docs.runink.org` links to point to live `/tide/` paths (#296).
    *   Clarified that FORGE is a category within Runink TIDE, not a separate product (#294).
*   **Footer:** Updated the footer to a single layout with five columns and functional language links (#313).

### Fixed
*   **Privacy:** Updated FACE's privacy policy to match the application following face#1955 (#334).
*   **Homepage:** Fixed full-width row labels on mobile devices and added underlines to comparison note links (#307).

### Removed
*   **Content:**
    *   Removed internal source citations from public industry pages (#302).
    *   Removed internal machine-generated reports from the public site (#300).
    *   Deleted held "Forecast LLM Document Auditing" drafts (#295).

## 20260923-124414 (0682936)

## Release Notes

### Introduction
This release includes updates related to the naming and description of the sovereign server image.

### Changes
- Added: The server image is now referred to as the "Runink River Sovereignty Server (RIVER)".
- Changed: The description of the "Runink River Sovereignty Server (RIVER)" in `content/downloads.md` has been updated to clarify its purpose as the server image carrying Runink TIDE, the platform the FACE and PULSE apps run on.
- Changed: The term "sovereign server image" has been renamed to "Runink River Sovereignty Server (RIVER)" in the answer to the question "Is there anything we can put in someone's hands today?" in `content/products/face.md`.

