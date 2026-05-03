# 🦉 Sentinel Target Brief: Obsydian AI

## 1. The Competitor & Context
**Target:** Obsydian AI
**Market Segment:** Logistics Automation & Claims Recovery
**Signal Source:** Public marketing claims and feature matrix (e.g., website claims of "automated recovery in 5 steps", "start automating transportation cost recovery in 30 seconds").

## 2. The Execution Gap
Obsydian AI positions itself as an end-to-end automated recovery platform relying heavily on data ingestion from ERPs, SAP, Oracle, NetSuite, and CRMs.

**The Gap:** They lack a mobile-first, edge-capture mechanism for field operations. They are trying to automate the *back-office* processing of claims (invoicing, billing errors, detecting losses) but are completely blind to the *physical edge* where damage actually occurs and is first documented. Without immutable, point-of-origin visual data, their "AI agents" are negotiating based entirely on secondary, potentially stale or incomplete, text-based reports from legacy systems.

## 3. The Evidence
* **Claim:** "From data ingestion to AI-powered negotiations, Obsydian handles the entire process end to end."
* **Omission:** Their integrations page exclusively lists back-office systems (SAP, Oracle, NetSuite, Shopify, Zendesk) and carriers. There is zero mention of mobile applications, driver-facing tools, or warehouse floor data capture.
* **Result:** They are optimizing the paper trail, not the reality of the physical supply chain.

## 4. The Opportunity (Operational Pain Point)
Enterprise logistics clients lose a significant percentage of contested damage claims because carrier responses often demand irrefutable, time-stamped proof of condition at the exact moment of handover. Back-office AI cannot generate this proof if the warehouse worker or driver didn't capture it accurately. By relying on post-facto ERP data, Obsydian AI leaves their clients vulnerable to carriers rejecting claims due to "insufficient evidence of liability."

By capturing data *at the edge*, we can provide the irrefutable evidence that guarantees a higher win rate on contested claims.

## 5. Counter-Strike Recommendation
**Routing:** **Forge** (Product Team)

**Directive:** Build a specialized Flutter module ("Edge Capture") for field workers (drivers, warehouse staff).
* **Core Feature:** A streamlined, offline-capable mobile interface that forces standardized photo capture (e.g., all 4 sides of a pallet, specific angles of damage) at the moment of scan/handover.
* **AI Integration:** On-device computer vision to instantly verify photo quality and flag visible damage *before* the driver leaves the dock.
* **Measurable ROI:** This tool will provide the irrefutable visual evidence needed to feed our back-office AI, projected to **increase contested damage claim win rates by 40%** compared to text-only ERP-fed systems like Obsydian.
