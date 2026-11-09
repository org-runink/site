# Release notes

## 20261109-161641 (cffec37)

## Release Notes

This update introduces dedicated privacy policies and account deletion flows for all Runink products, updates pricing pages to reflect the 2026-11-06 price book, and refreshes product and homepage content to align with current application states.

### Added
*   **Privacy & Compliance:**
    *   Added Runink TIDE privacy policy at `/tide-privacy/`.
    *   Added privacy policies and account deletion sections for PULSE and FACE.
    *   Implemented account deletion functionality for every app, governed by each app's specific terms.
    *   Updated FACE, PULSE, and Luna privacy policies to explicitly name the publisher, response times, complaint contacts, and governing law.
*   **Pricing:**
    *   Added pricing for Runink TIDE and PULSE based on the 2026-11-06 price book, available in four languages, including costs for automated voice agents.
    *   Added a pricing estimator to the FACE page (FACE Lite: $85/$99, Dedicated: $165; services: $200/hour; provisioning cap: $150 on approved/confirmed orders).
*   **Content & Branding:**
    *   Added product personas to FACE, TIDE (surfing pup), and PULSE product pages.
    *   Added three blog answer pages covering revenue leakage, freight claims, and cold-chain claims.
    *   Added a one-line audit, daily LinkedIn draft, and Market sources to PULSE content.

### Changed
*   **Product Pages:**
    *   Rebuilt the FACE page to document the current app state without demo or mock claims; updated the tour to match the current application.
    *   Refreshed PULSE pages to follow Release 10 and the shipped product.
    *   Updated product pages to align with the current TIDE console, River's desktop, and documentation.
    *   Rebuilt the homepage to focus on one product and one first step, targeting field operations and revenue leaders.
*   **Site Structure:**
    *   Standardized the footer to a single layout with five columns and functional language links.
    *   Removed Android APK downloads from PULSE pages.
    *   Removed an internal source citation from a public industries page.

### Fixed
*   **Privacy:**
    *   Linked the TIDE privacy policy from the general policy.
    *   Updated FACE's privacy policy to match the app state after `face#1955`.
*   **Site & UI:**
    *   Corrected the public contact address to `contact@runink.org`.
    *   Fixed full-width row labels on mobile devices and underlined the comparison note's link on the homepage.

## 20260923-124414 (0682936)

## Release Notes

### Introduction
This release includes updates related to the naming and description of the sovereign server image.

### Changes
- Added: The server image is now referred to as the "Runink River Sovereignty Server (RIVER)".
- Changed: The description of the "Runink River Sovereignty Server (RIVER)" in `content/downloads.md` has been updated to clarify its purpose as the server image carrying Runink TIDE, the platform the FACE and PULSE apps run on.
- Changed: The term "sovereign server image" has been renamed to "Runink River Sovereignty Server (RIVER)" in the answer to the question "Is there anything we can put in someone's hands today?" in `content/products/face.md`.

