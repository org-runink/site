import re

app_js_path = "/home/me/Documents/companion/demo/app.js"

with open(app_js_path, "r") as f:
    content = f.read()

replacements = {
    # mockActions - Sentinel 102-132
    '"Suspicious Access Attempt"': '"Unapproved Broker Token Access"',
    '"Attempt to access the partner portal from outside the authorized corporate network. Access blocked."': '"Attempt to access the Customs Broker portal from an unauthorized geo-fence. API Token blocked."',
    '"TargetNode: \\"Partner Portal Auth\\""': '"TargetNode: \\"Customs Clearance Auth\\""',
    '"Security Access Gateway"': '"Broker Access Gateway"',

    '"Suspect Billing Spike"': '"Toll Fee Scraping Anomaly"',
    '"Unusual invoice generation frequency spike during non-business hours. Access suspended pending verification."': '"Unusual toll routing queries detected during non-business hours on the Toll Plaza API. Traffic paused."',
    '"Access Anomaly Filter"': '"Toll Plaza Rate Filter"',

    '"Unapproved Supplier Signup"': '"Unverified LTL Carrier Signup"',
    '"Automated attempt to register a new vendor profile without matching internal procurement authorization. Profile quarantined."': '"Automated attempt to register a new LTL Carrier profile without matching DOT/FMCSA authorization. Profile quarantined."',

    '"Privileged Table Query Alert"': '"HazMat Registry Dump Alert"',
    '"Direct query executed on raw credentials table by non-admin identity. Blocked."': '"Direct query executed on raw HazMat Registry table by non-authorized identity. Blocked."',

    '"Suspicious Key Rotation"': '"Carrier Session Hijacking"',
    '"Multiple session key rotation requests received within 1 minute. Sandbox lock engaged."': '"Multiple session token rotation requests received from Carrier within 1 minute. API Sandbox lock engaged."',

    '"Unmasked Ingress Attempt"': '"Raw Telemetry Ingress Attempt"',
    '"External connection attempted to ingest customer records without hashing variables. Quarantined."': '"External carrier attempted to ingest OBD-II telemetry without hashing VIN/Driver ID variables. Quarantined."',

    '"API Token Boundary Violation"': '"Yard Access Geofence Violation"',
    '"Access token generated for partner portal outside standard geographical boundaries. Suspended."': '"Gate access token triggered outside standard yard geofence. Suspended."',
    
    '"Vendor API Data Hallucination"': '"EDI/API Data Hallucination"',
    '"Public LLM query returned mismatched JSON schema for shipping schedules. Blocked by local inference validator."': '"Public LLM query returned mismatched JSON schema for EDI 204 freight schedules. Blocked by inference validator."',

    '"SOP Database Logic Drift"': '"Customs Rules Logic Drift"',
    '"Active SQL ingestion rules drifted from verified Operating Manual SOPs. Discrepancy logged for review."': '"Active SQL ingestion rules drifted from verified Customs Declaration SOPs. Discrepancy logged for review."',

    # mockActions - Forge 112-120
    '"Preemptive Purchase Order Draft"': '"Emergency Freight Capacity Spot Bid"',
    '"Pre-approved PO generated to compress lead times ahead of forecasted inflation anomalies."': '"Pre-approved spot bid generated to secure LTL capacity ahead of forecasted port strike anomalies."',
    '"Save \\$45,000 Outage"': '"Save \\$45,000 Demurrage"',
    '"Demand Scenario Simulator"': '"Spot Bid Freight Simulator"',

    '"Raw Material Contract Optimization"': '"Port Demurrage Dispute Invoice Draft"',
    '"Contract renegotiation draft based on recent commodity index drops, projecting an annual saving of 8%."': '"Dispute drafted for unverified demurrage fees based on GPS logs showing truck arrival prior to cut-off, reclaiming \\$18,200."',

    '"Warehouse Space Pre-allocation"': '"Cold Storage Cross-Dock Allocation"',
    '"Automated cargo consolidation draft for next quarter\'s peak season, reducing external warehousing storage costs."': '"Automated cold chain cross-dock consolidation drafted for peak season, reducing reefer plug-in costs."',

    '"Transport Dispatch Schedule"': '"Drayage Dispatch Optimization"',
    '"Automated schedule generated for empty carrier pickups to avoid depot congestion next week."': '"Automated schedule generated for empty container drayage pickups to avoid yard congestion."',

    '"Supply Chain Re-routing Suggestion"': '"HazMat Carrier Re-routing Plan"',
    '"Synthetic twin plan to shift raw material sourcing to secondary supplier due to storm alert."': '"Synthetic twin plan to re-route HazMat carriers away from severe weather anomaly, maintaining SLA."',
    
    '"Inventory Reorder Suggestion"': '"Safety Stock Relocation Rule"',
    '"Pre-calculated purchase request generated for safe stock replenishment ahead of shutdown."': '"Pre-calculated transport request generated for safety stock relocation ahead of regional shutdown."',
    '"Predictive Reorder Module"': '"Safety Stock Network Module"',

    # Contacts/Profiles
    '"Jane Smith (SecOps Lead)"': '"Jane Smith (Yard Ops Manager)"',
    '"John Doe (Broker)"': '"John Doe (Customs Broker)"',
    '"Principal Administrator"': '"Lead Logistics Architect"',
    '"Security & Governance Lead"': '"Data Governance & Operations Lead"',
}

for old_str, new_str in replacements.items():
    content = content.replace(old_str, new_str)
    
with open(app_js_path, "w") as f:
    f.write(content)

print("Patched app.js with SCM actions and profiles")
