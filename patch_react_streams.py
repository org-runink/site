import re

app_js_path = "/home/me/Documents/companion/demo/app.js"

with open(app_js_path, "r") as f:
    content = f.read()

replacements = {
    'customer_gold': 'carrier_drivers',
    'cust_id': 'driver_id',
    'Customer Profile': 'Carrier Drivers',
    
    # Check nodeMetadata hardcoded schemas
    'Table: raw_invoices': 'Table: waybills_live',
    'Table: sensor_zones': 'Table: reefer_telemetry',
    'Table: manifests_live': 'Table: cargo_manifests',
    'Table: model_registry': 'Table: ai_models',
    'Table: supplier_sla_ledger': 'Table: carrier_sla_ledger',
    'Table: audit_logs': 'Table: compliance_audits',
    'Table: route_metrics': 'Table: route_optimizer_log',
    'Table: service_records': 'Table: yard_maintenance_log',
}

for old_str, new_str in replacements.items():
    content = content.replace(old_str, new_str)
    
with open(app_js_path, "w") as f:
    f.write(content)

print("Patched react streams and nodeMetadata in app.js")
