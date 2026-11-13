# Release notes

## 20261113-143338 (cffec37)

## Release Notes

This update introduces dedicated privacy policies and account deletion flows for all Runink products, aligns pricing and product pages with the current 2026-11-06 price book and shipped features, and refines site content, branding, and layout.

### Added
*   **Privacy & Compliance:**
    *   Implemented privacy policies for FACE, PULSE, and Luna, including details on the publisher, response times, complaint procedures, and governing law.
    *   Added a dedicated Runink TIDE privacy policy at `/tide-privacy/`.
    *   Created account deletion pages for FACE and PULSE, and established account deletion terms for every app.
    *   Added a pricing estimator to the FACE page, detailing costs for FACE Lite ($85/$99), Dedicated ($165), services ($200/hour), and a $150 provisioning cap for approved orders.
    *   Added TIDE and PULSE pricing information based on the 2026-11-06 price book, including automated voice agent costs, available in four languages.
    *   Added three new blog answer pages covering revenue leakage, freight claims, and cold-chain claims.
    *   Added product personas to the product pages for FACE, PULSE, and TIDE (surfing pup).

### Changed
*   **Content & Branding:**
    *   Rebuilt the homepage to focus on a single product and first step, targeting field operations and revenue leaders.
    *   Rebuilt the FACE product page to reflect the current app state, removing demo or mock claims, and updated its tour.
    *   Updated PULSE product pages to follow Release 10, removing Android APK downloads, and displaying the one-line audit, daily LinkedIn draft, and Market sources.
    *   Updated TIDE and River product pages to match the current console, desktop, and documentation.
    *   Standardized the site footer to a five-column layout with functional language links.
    *   Updated FACE product pages to display its persona and align with the current application.

### Fixed
*   **Privacy & Links:**
    *   Linked the TIDE privacy policy from the general privacy policy.
    *   Updated FACE's privacy policy to match the application state following face#1955.
*   **Site & Layout:**
    *   Corrected the public contact address to `contact@runink.org`.
    *   Fixed full-width row labels on mobile devices and underlined the comparison note link on the homepage.
    *   Removed an internal source citation from a public industries page.

## 20260923-124414 (0682936)

## Release Notes

### Introduction
This release includes updates related to the naming and description of the sovereign server image.

### Changes
- Added: The server image is now referred to as the "Runink River Sovereignty Server (RIVER)".
- Changed: The description of the "Runink River Sovereignty Server (RIVER)" in `content/downloads.md` has been updated to clarify its purpose as the server image carrying Runink TIDE, the platform the FACE and PULSE apps run on.
- Changed: The term "sovereign server image" has been renamed to "Runink River Sovereignty Server (RIVER)" in the answer to the question "Is there anything we can put in someone's hands today?" in `content/products/face.md`.

