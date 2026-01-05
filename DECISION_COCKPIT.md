Here is the fully refined `DECISION_COCKPIT.md` file. I have integrated the new "Mission Control" layout and the Agentic/Action capabilities (Provisioning & Claims) while strictly maintaining all the technical categories and structure from your original source file.

```markdown
# Decision Cockpit (Advanced AI Insights)

## Overview
The Decision Cockpit is the executive command center for warehouse operations. It creates an IDE-style environment where grounded AI analyzes data, simulates outcomes, and presents **"decisions you can defend."** It integrates MCP (Model Context Protocol) to unify telemetry from logistics, finance, and inventory systems into a single operational thread, moving beyond passive analysis to active execution (Auto-Provisioning & Claims Recovery).

## Page Location
`cli/console/shepherd/llmchat.go`

## Shepherd Model
**`cli/sprdsvc/models/shepherd-decision-cockpit-v2.yaml`** - MCP-enabled AI analysis with Agentic capabilities

## MCP Endpoint
**`/v1/chat/completions`** - Model Context Protocol endpoint for enhanced data insights and tool execution

## Page Layout - "The Operational IDE"

> **UX Philosophy**: Signals on the left, reasoning in the center, profitable actions on the right.

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│  DECISION COCKPIT  ::  v2.4  ::  [● Online]  ::  Model: Shepherd-70b-Quant   │
├──────────────────────┬─────────────────────────────────┬─────────────────────┤
│ SYSTEM HEALTH        │ DECISION THREAD (Stream)        │ PENDING ACTIONS (3) │
│ [●] Snowflake (Data) │ ┌─────────────────────────────┐ │ ┌─────────────────┐ │
│ [●] Shopify (Orders) │ │ USR: "Analyze stockouts     │ │ │ PROVISIONING    │ │
│ [●] Stripe (Finance) │ │ for top 5 SKUs."            │ │ │ Priority: HIGH  │ │
│ [○] FedEx (API Lag)  │ └─────────────────────────────┘ │ │ SKU: 1234-BLK   │ │
│                      │ ┌─────────────────────────────┐ │ │ Qty: 500 Units  │ │
│ ACTIVE AGENTS        │ │ AI: Analyzing 6mo velocity. │ │ │ Cost: $1,200    │ │
│ ┌──────────────────┐ │ │ Detected risk in CA region. │ │ │ Vendor: Acme Co │ │
│ │ 📦 Provisioning  │ │ │                             │ │ ├─────────────────┤ │
│ │    • Idle        │ │ ➤ SIMULATION RUNNING...       │ │ │ [ Approve PO ]  │ │
│ ├──────────────────┤ │ │ If NO action: -$8.5k sales  │ │ │ [   Edit     ]  │ │
│ │ 💰 Claims Audit  │ │ │ If REORDER: +$1.2k cost     │ │ └─────────────────┘ │
│ │    • Running...  │ │ │ Net Benefit: +$7.3k         │ │                     │
│ └──────────────────┘ │ │                             │ │ ┌─────────────────┐ │
│                      │ │ RECOMMENDATION: Immediate   │ │ │ CLAIMS RECOVERY │ │
│ CONTEXT EXPLORER     │ │ provisioning for SKU-1234.  │ │ │ Count: 14 pkgs  │ │
│ > Confirmed Rules    │ │ Confidence: 94%             │ │ │ Carrier: FedEx  │ │
│ > Added Hypothesis   │ └─────────────────────────────┘ │ │ Value: $450.00  │ │
│ > Policy Gates       │                                 │ │ Reason: Late    │ │
│                      │ ┌─────────────────────────────┐ │ ├─────────────────┤ │
│                      │ │ > Waiting for approval..._  │ │ │ [ Auto-File ]   │ │
│                      │ └─────────────────────────────┘ │ │ [  Review   ]   │ │
│                      │                                 │ └─────────────────┘ │
├──────────────────────┴─────────────────────────────────┴─────────────────────┤
│ EXECUTION LOG & AUDIT TRAIL                                           [EXPAND]
│ 14:32:05 [MCP] Injected context: 78 entities from Snowflake (Latency: 20ms)
│ 14:32:10 [PLN] Policy Check: "Budget Cap < $5000" passed.
│ 14:32:12 [RAG] Retrieved supplier lead times (Acme Co: 14 days).
└──────────────────────────────────────────────────────────────────────────────┘

```

### Layout Components

**Left Panel - System & Agent Status**

* **Health Indicators**: Instant visual cues on connected APIs (Snowflake, Shopify, Stripe, Carriers).
* **Active Agents**: Status of specialized bots showing background activity:
    * **Provisioning (Sourcing & Logistics)**:
        * *Sourcing & Procurement*: Dynamic supplier discovery and vetting.
        * *Seller Verification*: Risk assessment and background checks.
        * *Wholesale & Pricing*: Volume discount negotiation and tier optimization.
        * *Fulfillment & 3PL*: Inventory allocation and third-party logistics management.
        * *Logistics & Route Optimization*: Shipping rate shopping, delivery window selection, and drop-shipping routing.
        * *Payment Experience*: Transaction term optimization.
        * *Strategic Kitting*: Bundling dead stock with high-velocity items to clear inventory.
        * *Ad-Inventory Arbitrage*: Real-time signal to pause ads for low-stock items (ROAS protection).
        * *Cross-Docking Alerts*: Identify inbound stock to fulfill backorders immediately (skip storage fees).
        * *Sustainability*: Optimization for carbon-neutral shipping options.
        * *Hyper-Local Delivery*: Switch to gig-economy carriers (Uber/DoorDash) for same-day local routing.
        * *Address Intelligence*: Pre-label correction of invalid addresses to prevent returns.
        * *Porch Piracy Defense*: Dynamic signature requirements for high-theft geo-zones.
        * *Freight Mode Switching*: AI recommendation to shift Air -> Ocean based on inventory velocity.
        * *Port Congestion Avoidance*: Dynamic routing to alternative ports based on live dwell times.
        * *Ghost Inventory Watch*: Trigger bin-checks when 'Item Not Found' signals spike, preventing fake stockouts.
        * *Cannibalization Guardrails*: Warn on new product launches overlapping with similar SKU liquidation.
        * *Supplier Risk Radar*: API monitoring for vendor financial insolvency news.
        * *Dynamic Margin Protection*: Auto-adjust pricing for low-stock/high-velocity items to maximize yield.
        * *Demand-Pulse Positioning*: Move inventory to regions with high Google Ads click intensity *before* orders drop.
        * *CAC-Aware Rationing*: Hide stock from high-CAC channels (Ads) during shortages; reserve for high-LTV organic traffic.
        * *Local "Footfall" Stocking*: Alert retail nodes to stock up when Google Maps "Get Directions" requests spike.
    * **Claims (Recovery & Audit)**:
        * *Financial Recovery*: Automatic refunds for SLA breaches and lost packages.
        * *Invoice Audits*: Discrepancy detection between POs and invoices.
        * *Shipping Protection*: Insurance filing and damage claims.
        * *Quality Assurance*: Analysis of reviews (returns/defects) vs. product listings.
        * *SLA Monitoring*: Real-time order tracking to trigger latent claims.
        * *Chargeback Defense*: Automated evidence gathering (logs, delivery proof) for disputes.
        * *Inbound Reconciliation*: Detecting "short" shipments from vendors vs. POs.
        * *Carrier SLA Arbitrage*: Downgrading service levels when valid to save costs without missing promise dates.
        * *Packaging Optimization*: Correlating damage claims to specific packaging types.
        * *Return Fraud Defense*: Flag serial "wardrobers" and weight discrepancies to auto-deny suspicious returns.
        * *Profit-Killer Discovery*: Identify split shipments (multiple boxes) that eroded margin; force consolidation rules.
        * *Duty Drawback Audit*: Classification AI to find overpaid tariffs (HS Codes) on imports.
        * *Weather-Triggered Logistics*: Predictive hold/reroute for shipments entering severe weather zones to prevent "Stuck" claims.
        * *Dim-Weight Discrepancy Audit*: Compare carrier-billed weight vs. WMS actual weight to claim overcharges.
        * *Accessorial Fee Buster*: Auto-dispute invalid surcharges (Residential, Liftgate, Address Correction).
        * *Contract Rate Compliance*: Verify every invoice line item against negotiated rate cards (prevent "creeping" logic).
        * *Lost Inbound Claim*: Auto-file claims against 3PLs for inventory lost during receiving/storage (Shrinkage accountability).
        * *Unclaimed Credit Hunter*: Scan supplier statements for unapplied credit notes and force application.
        * *VIP "White-Glove" Rescue*: Instant, zero-questions-asked claim approval for Shopify "Wholesale/VIP" tagged customers.
* **Context Explorer**: Quick access to Knowledge Graph nodes, schemas, and Policy Gates.

**Center Panel - Decision Thread (IDE-Style)**

* **Structured Reasoning**: Displays the AI's "Thought Process" (Ask → Explain → Simulate → Decide).
* **Simulation Blocks**: Visually distinct boxes showing "What If" scenarios (Risk vs. Benefit).
* **Streaming Interface**: Real-time SSE output to maintain conversational flow.

**Right Panel - The "Action Deck"**

* **Pending Actions**: A queue of pre-calculated, value-generating opportunities.
* **Provisioning Cards**:
    * Generated Purchase Orders waiting for approval (EOQ calculated).
    * Vendor selection proposals (Domestic vs. International dropshipping).
    * 3PL stock transfer requests to balance regional distribution centers.
    * Ad-Spend Pause requests for depleting inventory (preventing wasted clicks).
    * Kitting proposals to liquidate slow-moving SKUs.
    * Gig-Economy Driver dispatch requests for local same-day delivery.
    * Port Re-routing authorization for inbound containers.
    * Bin-Check Tasks for suspected "Ghost Inventory".
    * Margin Adjustment Proposals for high-velocity SKUs.
    * Regional Allocation Proposals based on Google Ads "Hot Zones".
    * Channel-Gating Alerts (Stop Ad Traffic) for low-stock items.
* **Claims Cards**:
    * Aggregated refund opportunities from carrier audits (Late Deliveries, Lost in Transit).
    * Invoice correction requests for overcharges or duplicate billing.
    * Shipping protection claim filings for damaged good reports.
    * Chargeback representment packages ready for submission.
    * Vendor credit requests for short-shipped inbound inventory.
    * Return Denial Letters for flagged fraud cases.
    * Duty Drawback Claim Forms for re-classified imports.
    * Dim-Weight Overcharge Disputes pre-filled with dimensional evidence.
    * Accessorial Fee Dispute Batches ready for carrier API submission.
    * 3PL "Lost Inventory" Reimbursement Demands.
    * VIP "Instant Refund" Notices for approval (Retention-focused).
* **Controls**: Big `[Approve]` / `[Reject]` / `[Edit]` buttons for immediate execution.

**Bottom Panel - Execution Log & Audit Trail**

* **Immutable Audit**: Logs every prompt, policy check, API call, and user approval.
* **Raft-Backed**: Ensures the exact state of data at the moment of decision is preserved for lineage.

## Purpose

* **Operationalize AI**: Move beyond "chatting with data" to "executing on data."
* **Defensible Decisions**: Every action is backed by cited evidence, policy checks, and simulations.
* **Revenue Generation**: Directly surface Provisioning optimizations and Claims recoveries.
* **Workflow Velocity**: Reduce the time between detecting a signal (low stock) and fixing it (creating a PO).

## Internal Functions & Algorithms

### MCP Protocol

* **`injectMCPContext(query, metadata)`** - Inject warehouse metadata into LLM context.
* **`callMCPTool(toolName, params)`** - Execute MCP tool (e.g., query analyzer, index suggester).
* **`streamMCPResponse(prompt, context)`** - Server-Sent Events (SSE) streaming.
* **`parseMCPToolCall(response)`** - Extract tool invocations from LLM response.

### Shepherd Inference & Simulation

* **`buildRAGContext(query, knowledgeGraph)`** - Retrieval-Augmented Generation.
* **`runSimulation(scenario)`** - *New*: Execute "What If" logic (e.g., compare storage cost vs. stockout risk).
* **`generateProvisioningProposal(sku, velocity)`** - *New*: Calculate EOQ and generate PO artifacts.
* **`auditShipmentSLA(tracking, carrier)`** - *New*: Compare delivery timestamps against carrier SLAs for claims.

### Knowledge Graph Navigation

* **`buildGraphFromMetadata(tables, relationships)`** - Construct graph representation.
* **`computeTableSimilarity(t1, t2)`** - Cosine similarity on column embeddings.
* **`findShortestPath(sourceTable, targetTable)`** - Graph traversal for joins.

### Query Analysis

* **`parseQueryPlan(sql)`** - Extract execution plan from EXPLAIN.
* **`identifyBottlenecks(plan)`** - Find sequential scans, missing indexes.
* **`estimateQueryCost(sql, stats)`** - Predict execution time and resource usage.

## Key SQL Statements (Generic)

The Decision Cockpit uses AI to generate queries based on user intent. Example AI-generated queries:

### Expensive Queries (Generic)

```sql
-- AI determines optimal query based on database dialect
-- Snowflake variant:
SELECT
    query_text,
    total_elapsed_time/1000.0 as seconds,
    warehouse_name,
    user_name
FROM query_history
WHERE start_time >= DATEADD(day, -1, CURRENT_TIMESTAMP())
ORDER BY total_elapsed_time DESC
LIMIT 20;

-- PostgreSQL variant:
SELECT
    query,
    total_exec_time/1000.0 as seconds,
    calls,
    mean_exec_time
FROM pg_stat_statements
ORDER BY total_exec_time DESC
LIMIT 20;

```

### Missing Indexes (Generic)

```sql
-- AI-generated index suggestions
-- PostgreSQL:
SELECT
    schemaname,
    tablename,
    attname,
    n_distinct,
    correlation
FROM pg_stats
WHERE schemaname NOT IN ('pg_catalog', 'information_schema')
    AND n_distinct > 100
    AND correlation < 0.1
ORDER BY n_distinct DESC;

```

### Table Statistics (ANSI SQL)

```sql
SELECT
    table_schema,
    table_name,
    (SELECT COUNT(*) FROM {schema}.{table}) as row_count,
    pg_size_pretty(pg_total_relation_size('{schema}.{table}'::regclass)) as total_size
FROM information_schema.tables
WHERE table_schema NOT IN ('information_schema', 'pg_catalog')
ORDER BY pg_total_relation_size('{schema}.{table}'::regclass) DESC;

```

## MCP Protocol Flow

```
User Intent (UI)
      ↓
Decision Cockpit (Go) → MCP Server
                            ↓
                  1. Context Injection (Schema + Policies)
                            ↓
                  2. Shepherd Inference (Reasoning + Simulation)
                            ↓
                  3. Tool Selection (SQL | Claim API | PO API)
                            ↓
                  4. Evidence & Action Generation (Impact Analysis)
                            ↓
UI Rendering (Streamed via SSE with Action Cards)

```

## Backend Components

* **Shepherd (sprdsvc)** - MCP-enabled AI engine.
* **MCP Server** - Model Context Protocol implementation.
* **Runink Runners** - Compute units for executing SQL and Agentic tasks (Provisioning/Claims).
* **`barnsvc`** - Conversation and Audit Log storage.
* **`cli/security/dns/proxy.go`** - REST/MCP proxy.

### REST/MCP Endpoints (via proxy.go)

* **`/v1/chat/completions`** - Primary MCP endpoint (streaming).
* `/api/shepherd/context` - Retrieve analysis context.
* `/api/shepherd/upload` - File/audio upload.
* `/api/shepherd/execute` - *New*: Endpoint for triggering approved actions (POs/Claims).

## User Interactions

1. **The "Morning Check"**: User logs in to see the "Pending Actions" queue (Right Panel) populated by overnight agents.
2. **Simulation**: User types "Simulate doubling our order for SKU-123." The Center Panel runs the math on storage costs vs. bulk discounts.
3. **Explore Graph**: Click on table nodes → View relationships → Navigate lineage.
4. **Execution**: User clicks `[Approve PO]` on the Provisioning card. The system logs the approval and fires the Shopify/ERP API.
5. **Audit**: User clicks a log entry to replay the logic behind a previous decision.

## RBAC Permissions

* **Admin**: Full MCP access, all models, file uploads, **Approve Financial Actions**.
* **Writer**: MCP access with approved models, limited file uploads, **Draft Proposals**.
* **Reader**: View-only, single model (qwen3-vl-2b-thinking), no uploads, no execution.

## Performance Considerations

* **Streaming responses** - SSE reduces perceived latency during simulations.
* **Context caching** - MCP context cached for 15 minutes.
* **Model warming** - Shepherd models pre-loaded.
* **Token limiting** - Max 4096 tokens per request; aggressive summarization for logs.
* **Queue management** - Max 5 concurrent queries.

## Related Pages

* [Today's Command View](https://www.google.com/search?q=../landing/TODAY_COMMAND_VIEW.md)
* [AI Posture Center](https://www.google.com/search?q=../herd/AI_POSTURE_CENTER.md)
* [Hypothesis Lab](https://www.google.com/search?q=../herd/HYPOTHESIS_LAB.md)

```

```
