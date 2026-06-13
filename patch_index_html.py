import re

html_path = "/home/me/Documents/companion/demo/index.html"

with open(html_path, "r") as f:
    content = f.read()

replacements = {
    '"subtitle_profile">SYSTEM USER PROFILE': '"subtitle_profile">SYSTEM DISPATCH PROFILE',
    '"admin_creds">ADMINISTRATOR CREDENTIALS': '"admin_creds">LOGISTICS ARCHITECT CREDENTIALS',
    '"profile_admin_role">Role: Security & Governance Lead': '"profile_admin_role">Role: Data Governance & Fleet Operations Lead',
    '"rotate_key">': '"rotate_key">', # not generic
    '"cu_consumption">COMPUTE UNITS (CU) CONSUMPTION': '"cu_consumption">LOGISTICS DATA CLOUD (LDC) CONSUMPTION',
    '"monthly_quota">Monthly Runner Quota': '"monthly_quota">Monthly Query Quota',
    '"active_runner_credits">Active Runner Credits Allocated': '"active_runner_credits">Active Warehouse Compute Allocated',
    '"worker_pool_1">Worker Pool 1 (Isolated)': '"worker_pool_1">Fleet Stream Pool 1',
    '"worker_pool_2">Worker Pool 2 (Isolated)': '"worker_pool_2">EDI Processing Pool 2',
    
    # Check translations in HTML if there are other generic terms
    '>System User Profile<': '>System Dispatch Profile<',
    '>Identity & <span>Billing</span><': '>Identity & <span>Logistics Quota</span><',
    
    # Profile & Billing CU
    '>Profile & Billing CU<': '>Profile & Cloud Quota<',
}

for old_str, new_str in replacements.items():
    content = content.replace(old_str, new_str)
    
with open(html_path, "w") as f:
    f.write(content)

print("Patched index.html with SCM terms")
