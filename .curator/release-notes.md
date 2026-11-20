# Release notes

## 20261112-151258 (cffec37)

## Release Notes

This update introduces dedicated privacy policies and account deletion procedures for all Runink products, updates pricing pages to reflect the 2026-11-06 price book, and refreshes product content to align with current application features.

### Added
*   **Privacy & Compliance:**
    *   Implemented privacy policies for FACE, PULSE, and Luna, including details on the publisher, response times, complaint procedures, and governing law (#341).
    *   Added a dedicated Runink TIDE privacy policy at `/tide-privacy/` (#340).
    *   Created account deletion pages for FACE and PULSE, and ensured account deletion is documented in every app's terms (#331, #332, #344).
    *   Added a pricing estimator to the FACE page, detailing costs for FACE Lite, Dedicated, services, and provisioning caps (#337).
    *   Added pricing information for Runink TIDE and PULSE in four languages, including costs for automated voice agents (#339).
    *   Introduced product personas on product pages for FACE, PULSE, and TIDE (#327, #328, #329).
    *   Added three blog answer pages covering revenue leakage, freight claims, and cold-chain claims (#311).

### Changed
*   **Content & Branding:**
    *   Rebuilt the homepage to focus on one product and one first step, with messaging tailored to field operations and revenue leaders (#306, #308, #312).
    *   Updated FACE product pages to reflect the current app state, removing demo/mock claims and updating the tour (#303, #329).
    *   Refreshed PULSE pages to follow Release 10, removing Android APK downloads and highlighting the one-line audit, daily LinkedIn draft, and Market sources (#301, #304, #335).
    *   Updated product pages to align with the current TIDE console, River's desktop, and documentation (#333).
    *   Standardized the site footer to a five-column layout with functional language links (#313).
    *   Removed an internal source citation from a public industries page (#302).

### Fixed
*   **Privacy & Links:**
    *   Linked the TIDE privacy policy from the general privacy policy (#343).
    *   Updated FACE's privacy policy to match the application state after face#1955 (#334).
*   **Site & UI:**
    *   Corrected the public contact address to `contact@runink.org` (#342).
    *   Fixed full-width row labels on mobile devices and underlined the comparison note's link on the homepage (#307).

## 20260923-124414 (0682936)

## Release Notes

### Introduction
This release includes updates related to the naming and description of the sovereign server image.

### Changes
- Added: The server image is now referred to as the "Runink River Sovereignty Server (RIVER)".
- Changed: The description of the "Runink River Sovereignty Server (RIVER)" in `content/downloads.md` has been updated to clarify its purpose as the server image carrying Runink TIDE, the platform the FACE and PULSE apps run on.
- Changed: The term "sovereign server image" has been renamed to "Runink River Sovereignty Server (RIVER)" in the answer to the question "Is there anything we can put in someone's hands today?" in `content/products/face.md`.

