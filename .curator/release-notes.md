# Release notes

## 20261113-023915 (cffec37)

## Release Notes

This update introduces dedicated privacy policies and account deletion flows for all Runink products, updates pricing pages to reflect the 2026-11-06 price book, and refreshes product content to align with current application states.

### Added
*   **Privacy & Compliance:**
    *   Added privacy policies for FACE, PULSE, and Luna, including details on the publisher, response times, complaint procedures, and governing law.
    *   Added a dedicated Runink TIDE privacy policy at `/tide-privacy/`.
    *   Implemented account deletion pages for FACE and PULSE.
    *   Added a general account deletion page applicable to all apps, adhering to each app's specific terms.
*   **Pricing:**
    *   Added pricing pages for Runink TIDE and PULSE based on the 2026-11-06 price book, available in four languages, including costs for automated voice agents.
    *   Added a pricing estimator to the FACE page, detailing costs for FACE Lite ($85/$99), Dedicated ($165), services ($200/hour), and a $150 provisioning cap for approved orders.
*   **Content & Branding:**
    *   Added product personas to the product pages for FACE, PULSE, and TIDE (surfing pup).
    *   Added three blog answer pages covering revenue leakage, freight claims, and cold-chain claims.
    *   Added a one-line audit, daily LinkedIn draft, and Market sources to PULSE content.

### Changed
*   **Product Pages:**
    *   Rebuilt the FACE product page to document the current app state without demo or mock claims, and updated its tour to match the current application.
    *   Updated PULSE pages to follow Release 10, removing Android APK downloads.
    *   Refreshed PULSE product pages against the shipped product.
    *   Updated general product pages to align with the current TIDE console, River's desktop, and documentation.
    *   Rebuilt the homepage to focus on one product and one first step, targeting field operations and revenue leaders.
*   **Site Structure:**
    *   Standardized the site footer to a single five-column layout with functional language links.

### Fixed
*   **Privacy:**
    *   Linked the TIDE privacy policy from the general privacy policy.
    *   Updated FACE's privacy policy to match the application state after face#1955.
*   **Site & Content:**
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

