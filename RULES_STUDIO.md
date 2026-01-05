# Rules Studio (Business Value Enforcement)

## Overview
Rules Studio generates **Business Value SOPs** that capture money on the table and prevent revenue leakage. Unlike AI Posture Center (technical health monitoring), Rules Studio focuses on **operational opportunities** and business process optimization.

## Page Location
`cli/console/herd/rules_studio.go`

## Shepherd Model
**`cli/sprdsvc/models/shepherd-rules-recon-v2.yaml`** - AI-powered SOP generation for business value capture

## Page Focus - "Where's the Money?"

> **What you see**: Business opportunities turned into executable SOPs—not just query optimization.

```
┌──────────────────────────────────────────────────────────────────────────────────────┐
│ RULES STUDIO - Business Value Enforcement                   [Export to Cockpit]      │
├─────────────────┬────────────────────────────────────────────────────────────────────┤
│ POLICY LIBRARY  │  ACTIVE BUSINESS GATES                                             │
│  (Left Panel)   │  [4 Value Gates] [$28k/month Recovery] [98% Compliance]            │
│                 ├────────────────────────────────────────────────────────────────────┤
│ ┌─────────────┐ │  VALUE CAPTURE OPPORTUNITIES (Center Panel)                        │
│ │ VALUE GATES │ │                                                                    │
│ │ [Ensure ROI]│ │ 💰 SOP: Fulfillment Recovery - Stuck Shipments                     │
│ │             │ │    Trigger: shipment_status = 'in_transit' for >7 days            │
│ │ 4 Active    │ │    Action: Auto-escalate to carrier + notify customer             │
│ └─────────────┘ │    Value: $12k/month recovery                                      │
│                 │    [Export to Hypothesis] [Deploy to Cockpit] [Detail SOP View]     │
│ ┌─────────────┐ ├────────────────────────────────────────────────────────────────────┤
│ │KILL SWITCHES│ │ 🔄 SOP: Claims Recapture - Unclaimed Refunds                       │
│ │ [Stop Risk] │ │    Trigger: refund_eligible = true AND days_since >30              │
│ │             │ │    Action: Send reminder + auto-file claim                         │
│ │ 2 Active    │ │    Value: $8k/month recapture                                      │
│ └─────────────┘ │    [Export to Hypothesis] [Deploy to Cockpit] [Detail SOP View]     │
│                 ├────────────────────────────────────────────────────────────────────┤
│ ┌─────────────┐ │ ⚠️ SOP: Prevent Duplicate Orders                                    │
│ │AUDIT DEFENSE│ │    Trigger: Same customer + product within 5 minutes               │
│ │ [Compliance]│ │    Action: Hold order for manual review                            │
│ │             │ │    Risk: $5k/month in fraudulent duplicates                        │
│ │ 1 Active    │ │    [Export to Hypothesis] [Deploy to Cockpit] [Detail SOP View]    │
│ └─────────────┘ │                                                                    │
│                 │                                                                    │
│[+ New SOP]      │  📊 SOP PERFORMANCE HEATMAP                                         │
│                 │  ┌──────────────────────────────────────────────────────────────┐  │
│                 │  │ [High Value]      [Med Risk]       [Low Effort]              │  │
│                 │  │   Fulfillment ●                      Claims ●                │  │
│                 │  │                  Compliance ●                                │  │
│                 │  └──────────────────────────────────────────────────────────────┘  │
└─────────────────┴────────────────────────────────────────────────────────────────────┘
```

## SOP Categories

### Value Gates (Ensure ROI)
Rules that ensure business ROI and capture value opportunities:

**Examples**:
- **Fulfillment Recovery**: Identify stuck shipments, trigger recovery workflows
- **Claims Recapture**: Detect unclaimed refunds, automate collection
- **Pricing Optimization**: Flag underpriced transactions for review
- **Inventory Rebalancing**: Prevent stockouts and overstock situations

**Structure**:
- **Trigger**: Business condition (e.g., aging inventory >90 days)
- **Action**: Automated workflow (e.g., mark for clearance sale)
- **Value**: Quantified impact (e.g., $15k/month recovery)

### Kill Switches (Stop Leakage)
Rules that block immediate risks and prevent revenue leakage:

**Examples**:
- **Block Duplicate Orders**: Same customer + product within 5 minutes
- **Prevent Underpriced Sales**: Transaction below cost threshold
- **Stop Unauthorized Access**: PII access without proper role
- **Halt Oversized Shipments**: Weight exceeds carrier limits

**Structure**:
- **Trigger**: Risk condition (e.g., duplicate order detected)
- **Action**: Immediate block (e.g., hold for manual review)
- **Risk**: Prevented loss (e.g., $5k/month in fraud)

### Audit Defense (Compliance)
Rules that prove consistent enforcement for auditors:

**Examples**:
- **: Segregation of Duties**: Same user can't approve AND execute payment
- **GDPR Compliance**: Log all PII access with user context
- **SOX 404 Controls**: Financial transaction review workflows
- **HIPAA Safeguards**: Encrypt patient data in transit

**Structure**:
- **Trigger**: Compliance checkpoint (e.g., sensitive data access)
- **Action**: Audit logging (e.g., record access with timestamp)
- **Compliance**: Regulatory framework (e.g., SOX Section 404)

## SOP Export

SOPs can be exported to:

1. **Hypothesis Lab**: Test value gate logic against historical data
   - Validate triggers don't cause false positives
   - Estimate actual value capture potential
   - Simulate SOP execution on past transactions

2. **Decision Cockpit**: Automate SOP execution via agents
   - Deploy as active business rules
   - Monitor execution and impact
   - Adjust thresholds based on outcomes

## SOP Detail View (In-Screen Popup)

When clicking **[Detail SOP View]** on any SOP card, a modal overlay appears with comprehensive SOP information:

```
┌──────────────────────────────────────────────────────────────────────────┐
│ SOP DETAIL VIEW                                                    [✕]   │
├──────────────────────────────────────────────────────────────────────────┤
│ 💰 Fulfillment Recovery - Stuck Shipments                   [v1.2 Active]│
├────────────────┬─────────────────────────────────────────────────────────┤
│ OVERVIEW       │  Business Logic                                         │
│ ┌────────────┐ │  ┌──────────────────────────────────────────────────┐  │
│ │Created     │ │  │ Trigger Condition (SQL):                         │  │
│ │2026-01-02  │ │  │ SELECT shipment_id, customer_id, days_in_transit │  │
│ │            │ │  │ FROM shipments                                   │  │
│ │Author:     │ │  │ WHERE status = 'in_transit'                      │  │
│ │Shepherd AI │ │  │   AND DATEDIFF(NOW(), ship_date) > 7             │  │
│ │            │ │  └──────────────────────────────────────────────────┘  │
│ │Status:     │ │                                                         │
│ │✅ Active   │ │  Decision Flow:                                         │
│ │            │ │  shipment_stuck? ──YES──> escalate_to_carrier()        │
│ │Deployed:   │ │         │                        │                      │
│ │Cockpit v2  │ │         NO                       └──> notify_customer() │
│ └────────────┘ │         │                                                │
│                │         └──> log_as_normal                              │
├────────────────┤                                                         │
│ PERFORMANCE    │  Adjustable Thresholds:                                │
│ ┌────────────┐ │  • Days threshold: [7] (can adjust 5-14 days)          │
│ │Executions  │ │  • Auto-escalate: [✓] Enabled                          │
│ │Last 30d:   │ │  • Customer notify: [✓] Always                         │
│ │  142 times │ │                                                         │
│ │            │ ├─────────────────────────────────────────────────────────┤
│ │Success:    │ │  Historical Performance (Last 90 Days)                 │
│ │  95.8%     │ │  ┌──────────────────────────────────────────────────┐  │
│ │            │ │  │     ●                                            │  │
│ │Value:      │ │  │   ● ● ●   ●                                      │  │
│ │$11.2k/mo   │ │  │ ●       ●   ● ●                                  │  │
│ │(actual)    │ │  │ Jan     Feb   Mar   Apr (Value Captured)          │  │
│ │            │ │  └──────────────────────────────────────────────────┘  │
│ │False+:     │ │                                                         │
│ │  4.2%      │ │  Execution Breakdown:                                  │
│ └────────────┘ │  • Total Triggers: 142                                 │
│                │  • Successful Recoveries: 136 ($11,200 recovered)      │
│                │  • False Positives: 6 (shipment arrived during process)│
├────────────────┤                                                         │
│ SIMULATION     │  Backtesting Results (30-day window):                  │
│ ┌────────────┐ │  • Estimated Value: $12k/month                         │
│ │Hypothesis  │ │  • Actual Value: $11.2k/month                          │
│ │Lab Results │ │  • Accuracy: 93.3%                                     │
│ │            │ │  • Blast Radius: Low (6 false positives expected)      │
│ │Validated:  │ │                                                         │
│ │✅ Pass     │ ├─────────────────────────────────────────────────────────┤
│ │            │ │  Deployment Configuration                              │
│ │Accuracy:   │ │  • Agent: Fulfillment Auto-Recovery Bot                │
│ │93.3%       │ │  • Runtime: Every 4 hours                              │
│ │            │ │  • Integration: Carrier API + Email Service            │
│ │Blast:      │ │  • Rollback: Disable auto-escalate, log-only mode      │
│ │Low Risk    │ │                                                         │
│ └────────────┘ ├─────────────────────────────────────────────────────────┤
│                │  Compliance & Audit Trail                              │
│                │  • Approved By: ops_manager@company.com (2026-01-02)   │
│                │  • Last Modified: 2026-01-15 (threshold adjustment)    │
│                │  • Audit Logs: 23 executions logged                    │
│                │  • Regulatory: Internal SOP (no external compliance)   │
├────────────────┴─────────────────────────────────────────────────────────┤
│ [Export to Hypothesis Lab] [Re-Deploy to Cockpit] [Pause SOP] [Archive] │
└──────────────────────────────────────────────────────────────────────────┘
```

### Popup Features

**Left Sidebar - Quick Info**:
- SOP metadata (creation date, author, status)
- Performance metrics (executions, success rate, value captured)
- Simulation results from Hypothesis Lab

**Main Panel - Detailed Logic**:
- **Business Logic**: Expandable SQL/code for trigger conditions
- **Decision Flow**: Visual diagram of SOP execution path
- **Adjustable Thresholds**: In-line parameter tuning
- **Performance Charts**: Historical value capture trends
- **Execution Breakdown**: Success vs false positive analysis

**Bottom Actions**:
- **Export to Hypothesis Lab**: Re-test with new parameters
- **Re-Deploy to Cockpit**: Push threshold changes
- **Pause SOP**: Temporarily disable without archiving
- **Archive**: Remove from active rotation

### Interaction Behavior

1. **Click [Detail SOP View]** → Modal slides in from right
2. **Adjust Threshold** → "Save Changes" button appears
3. **Click Chart Point** → Drill into specific execution details
4. **Close Modal** → Press [✕] or click outside overlay

## Internal Functions

### SOP Generation (AI)
- **`generateValueGate(context)`** - Creates ROI enforcement logic based on proven value leakage (from AI Posture)
- **`generateKillSwitch(context)`** - Creates risk blocking logic for revenue protection
- **`generateAuditProtocol(context)`** - Creates compliance logging logic

### Validation Engine (Ground Truth)
- **`simulateRule(rule, historicalData)`** - Replay proposed SOP against last 30 days of transactions
- **`measureBlastRadius(rule, traffic)`** - Count blocks vs. false positives
- **`estimateValueCapture(rule, opportunities)`** - Calculate potential monthly recovery

### SOP Lifecycle
1. **Generate**: AI proposes SOP based on detected opportunity
2. **Simulate**: Validate against historical data in Hypothesis Lab
3. **Approve**: User reviews and approves SOP logic
4. **Deploy**: Export to Decision Cockpit for execution
5. **Monitor**: Track performance and adjust thresholds

## User Interactions

1. **Generate Value Gate**: AI Posture detects opportunity → Rules Studio proposes SOP → User approves → Export to Cockpit
2. **Test in Hypothesis Lab**: Click SOP → "Export to Hypothesis" → Validate against historical data
3. **Deploy to Cockpit**: Approved SOP → "Deploy to Cockpit" → Automate execution
4. **Monitor Performance**: View SOP performance heatmap → Adjust thresholds → Re-deploy

## Key Difference from AI Posture Center

| **AI Posture Center** | **Rules Studio** |
|:---|:---|
| **Focus**: Technical health (query perf, schema drift) | **Focus**: Business value (revenue recovery, compliance) |
| **Output**: Database optimization SOPs | **Output**: Business process SOPs |
| **Users**: Data engineers, DBAs | **Users**: Operations, finance, compliance teams |
| **Examples**: "Add index to slow table" | **Examples**: "Recover stuck shipments" |
| **Metrics**: Query time, cost efficiency | **Metrics**: Revenue recovered, risk prevented |

## Related Pages

- [AI Posture Center](./AI_POSTURE_CENTER.md) - Source of telemetry and technical health
- [Hypothesis Lab](./HYPOTHESIS_LAB.md) - SOP validation environment
- [Decision Cockpit](../shepherd/DECISION_COCKPIT.md) - SOP execution automation

## RBAC Permissions

- **Admin**: Create, approve, and deploy SOPs
- **Writer**: Propose SOPs, export to Hypothesis Lab
- **Reader**: View active SOPs and performance metrics
