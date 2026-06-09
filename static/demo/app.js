// State Management
let currentScreen = 'twins';
let activeFilter = 'Sentinel';
let currentLanguage = 'Portuguese';
// Contact Lists Databases & Metasearch state
let dedicatedContacts = [
  { name: "John Doe (Broker)", phone: "+1 555-010-9921" },
  { name: "Jane Smith (SecOps Lead)", phone: "+1 555-019-9823" }
];
let sharedContacts = [
  { name: "Logistics Control Center", phone: "+1 555-011-8833" },
  { name: "Port Authority Billing", phone: "+1 555-012-7744" }
];
let lastFoundContact = null;

const metasearchProvidersPool = [
  { name: "Lumina Logistics Ltd", phone: "+1 555-014-9988", details: "Phone: +1 555-014-9988 | Service: Logistics Dispatch (Dedicated)" },
  { name: "Apex Carrier Solutions", phone: "+1 555-016-1122", details: "Phone: +1 555-016-1122 | Service: Cold Chain Trucking (Dedicated)" },
  { name: "FastTrack Dispatchers", phone: "+1 555-018-3344", details: "Phone: +1 555-018-3344 | Service: Port Customs Clearance (freelance)" },
  { name: "Bridgeport Warehousing", phone: "+1 555-019-5566", details: "Phone: +1 555-019-5566 | Service: Temporary Storage Hub (Dedicated)" }
];

let currentSlide = 0;
const totalSlides = 7;
let fetchActive = false;
let fetchStep = 0;
let fetchInterval = null;
let carouselIndex = 0;

// VoIP Call simulation state
let voipTimerInterval = null;
let voipTimerSeconds = 0;
let currentVoipActionId = null;
let currentVoipCategory = null;
let voipMuted = false;
let voipTranscriptTimeouts = [];

// Mic input simulation state
let micAnimInterval = null;

// // Node details metadata for Maturity Center data domain nodes
const nodeMetadata = {
  "FleetTelemetry_Live": {
    endpoint: "iot.fleet.telemetry",
    syncKeys: {
      English: "Secure Ingestion / Active",
      Portuguese: "Ingestão Segura / Ativa",
      Spanish: "Ingesta Segura / Activa",
      French: "Ingestion Sécurisée / Active"
    },
    rowsKeys: {
      English: "1.2M Rows",
      Portuguese: "1.2M Linhas",
      Spanish: "1.2M Filas",
      French: "1.2M Lignes"
    },
    timeKeys: {
      English: "Jun 08 18:30 (Sync Active)",
      Portuguese: "08 de Junho às 18:30 (Sincronização Ativa)",
      Spanish: "08 de Junio a las 18:30 (Sincronización Activa)",
      French: "08 Juin à 18h30 (Synchro Active)"
    },
    schema: `Table: raw_invoices
Columns:
- invoice_id VARCHAR (PK)
- hs_code VARCHAR
- cargo_weight FLOAT
- demurrage_fees FLOAT
- carrier_id VARCHAR
- billing_date TIMESTAMP`
  },
  "WarehouseSensors": {
    endpoint: "iot.warehouse.sensors",
    syncKeys: {
      English: "On-demand / Secure Sandbox",
      Portuguese: "Sob Demanda / Ambiente Seguro",
      Spanish: "Bajo Demanda / Entorno Seguro",
      French: "Sur Demande / Sandbox Sécurisée"
    },
    rowsKeys: {
      English: "14,800 Rows",
      Portuguese: "14.800 Linhas",
      Spanish: "14.800 Filas",
      French: "14 800 Lignes"
    },
    timeKeys: {
      English: "Jun 08 17:15 (Sync Idle)",
      Portuguese: "08 de Junho às 17:15 (Sincronização Ociosa)",
      Spanish: "08 de Junio a las 17:15 (Sincronización Inactiva)",
      French: "08 Juin à 17h15 (Synchro En Attente)"
    },
    schema: `Table: sensor_zones
Columns:
- pallet_id VARCHAR (PK)
- zone_id VARCHAR
- temp_c FLOAT
- humidity_pct FLOAT
- rfid_status VARCHAR`
  },
  "CargoManifests": {
    endpoint: "logistics.cargo.manifests",
    syncKeys: {
      English: "Real-time Sync / Active",
      Portuguese: "Sincronização em Tempo Real / Ativa",
      Spanish: "Sincronización en Tempo Real / Activa",
      French: "Synchro Temps Réel / Active"
    },
    rowsKeys: {
      English: "5,120 Rows",
      Portuguese: "5.120 Linhas",
      Spanish: "5.120 Filas",
      French: "5 120 Lignes"
    },
    timeKeys: {
      English: "Jun 08 18:45 (Sync Active)",
      Portuguese: "08 de Junho às 18:45 (Sincronização Ativa)",
      Spanish: "08 de Junio a las 18:45 (Sincronización Activa)",
      French: "08 Juin à 18h45 (Synchro Active)"
    },
    schema: `Table: manifests_live
Columns:
- bol_id VARCHAR (PK)
- order_id VARCHAR
- cargo_weight_kg FLOAT
- hazmat_flag BOOLEAN
- customs_clearance VARCHAR`
  },
  "PredictiveModels": {
    endpoint: "ai.models.predictive",
    syncKeys: {
      English: "Real-time Sync / Active",
      Portuguese: "Sincronização em Tempo Real / Ativa",
      Spanish: "Sincronización en Tempo Real / Activa",
      French: "Synchro Temps Réel / Active"
    },
    rowsKeys: {
      English: "14 Models",
      Portuguese: "14 Modelos",
      Spanish: "14 Modelos",
      French: "14 Modèles"
    },
    timeKeys: {
      English: "Jun 08 18:48 (Sync Active)",
      Portuguese: "08 de Junho às 18:48 (Sincronização Ativa)",
      Spanish: "08 de Junio a las 18:48 (Sincronización Activa)",
      French: "08 Juin à 18h48 (Synchro Active)"
    },
    schema: `Table: model_registry
Columns:
- model_version VARCHAR (PK)
- accuracy_score FLOAT
- drift_metric FLOAT
- anomaly_threshold FLOAT`
  },
  "SupplierSLAs": {
    endpoint: "logistics.sla.compliance",
    syncKeys: {
      English: "Real-time Sync / Active",
      Portuguese: "Sincronização em Tempo Real / Ativa",
      Spanish: "Sincronización en Tempo Real / Activa",
      French: "Synchro Temps Réel / Active"
    },
    rowsKeys: {
      English: "1,250 Rows",
      Portuguese: "1.250 Linhas",
      Spanish: "1.250 Filas",
      French: "1 250 Lignes"
    },
    timeKeys: {
      English: "Jun 08 18:40 (Sync Active)",
      Portuguese: "08 de Junho às 18:40 (Sincronização Ativa)",
      Spanish: "08 de Junio a las 18:40 (Sincronización Activa)",
      French: "08 Juin à 18h40 (Synchro Active)"
    },
    schema: `Table: supplier_sla_ledger
Columns:
- supplier_id VARCHAR (PK)
- order_id VARCHAR
- actual_arrival TIMESTAMP
- due_date TIMESTAMP
- penalty_risk FLOAT`
  },
  "ColdChainAudits": {
    endpoint: "compliance.coldchain.audits",
    syncKeys: {
      English: "On-demand / Validating",
      Portuguese: "Sob Demanda / Validando",
      Spanish: "Bajo Demanda / Validando",
      French: "Sur Demande / En Validation"
    },
    rowsKeys: {
      English: "812 Rows",
      Portuguese: "812 Linhas",
      Spanish: "812 Filas",
      French: "812 Lignes"
    },
    timeKeys: {
      English: "Jun 08 16:20 (Sync Idle)",
      Portuguese: "08 de Junho às 16:20 (Sincronização Ociosa)",
      Spanish: "08 de Junio a las 16:20 (Sincronización Inactiva)",
      French: "08 Juin à 16h20 (Synchro En Attente)"
    },
    schema: `Table: audit_logs
Columns:
- audit_id VARCHAR (PK)
- vehicle_id VARCHAR
- temp_variance_log VARCHAR
- spoilage_risk FLOAT
- compliance_status VARCHAR`
  },
  "RouteOptimization": {
    endpoint: "ai.routing.optimizer",
    syncKeys: {
      English: "Batch Processing / Active",
      Portuguese: "Processamento em Lote / Ativo",
      Spanish: "Procesamiento por Lotes / Activo",
      French: "Traitement par Lots / Actif"
    },
    rowsKeys: {
      English: "144 Routes",
      Portuguese: "144 Rotas",
      Spanish: "144 Rutas",
      French: "144 Itinéraires"
    },
    timeKeys: {
      English: "Jun 08 18:55 (Sync Active)",
      Portuguese: "08 de Junho às 18:55 (Sincronização Ativa)",
      Spanish: "08 de Junio a las 18:55 (Sincronización Activa)",
      French: "08 Juin à 18h55 (Synchro Active)"
    },
    schema: `Table: route_metrics
Columns:
- route_id VARCHAR (PK)
- traffic_delay_min INTEGER
- fuel_cost_est FLOAT
- weather_impact_score FLOAT`
  },
  "MaintenanceLogs": {
    endpoint: "erp.maintenance.logs",
    syncKeys: {
      English: "Real-time Sync / Active",
      Portuguese: "Sincronização em Tempo Real / Ativa",
      Spanish: "Sincronización en Tempo Real / Activa",
      French: "Synchro Temps Réel / Active"
    },
    rowsKeys: {
      English: "4,500 Rows",
      Portuguese: "4.500 Linhas",
      Spanish: "4.500 Filas",
      French: "4 500 Lignes"
    },
    timeKeys: {
      English: "Jun 08 18:30 (Sync Active)",
      Portuguese: "08 de Junho às 18:30 (Sincronização Ativa)",
      Spanish: "08 de Junio a las 18:30 (Sincronización Activa)",
      French: "08 Juin à 18h30 (Synchro Active)"
    },
    schema: `Table: service_records
Columns:
- asset_id VARCHAR (PK)
- service_date DATE
- replaced_parts JSON
- mechanic_notes TEXT
- next_service_due DATE`
  }
};

// Time simulator
function updateTime() {
  const timeEl = document.getElementById("device-time");
  if (timeEl) {
    const now = new Date();
    let hrs = now.getHours();
    let mins = now.getMinutes();
    hrs = hrs < 10 ? '0' + hrs : hrs;
    mins = mins < 10 ? '0' + mins : mins;
    timeEl.innerText = `${hrs}:${mins}`;
  }
}
setInterval(updateTime, 1000);

// Mock Action Feed items matching Flutter formats
const mockActions = [
  // Sentinel Cases (Security/Control)
  {
    id: "AI-102",
    category: "Sentinel",
    title: "Suspicious Access Attempt",
    titleKey: "action_sentinel_1_title",
    description: "Attempt to access the partner portal from outside the authorized corporate network. Access blocked.",
    descKey: "action_sentinel_1_desc",
    priority: "Critical",
    impact: "Risk Mitigation",
    impactKey: "action_impact_mitigated",
    ai_generated: true,
    source: "Security Access Gateway",
    sourceKey: "action_sentinel_1_source",
    path: "/remediation",
    sentinelCard: {
      originIp: "185.15.22.4",
      targetNode: "Partner Portal Auth",
      threatLevel: "Severe",
      actionTaken: "Blocked & Logged"
    }
  },
  {
    id: "AI-103",
    category: "Sentinel",
    title: "Suspect Billing Spike",
    titleKey: "action_sentinel_2_title",
    description: "Unusual invoice generation frequency spike during non-business hours. Access suspended pending verification.",
    descKey: "action_sentinel_2_desc",
    priority: "High",
    impact: "Fraud Prevention",
    impactKey: "action_impact_fraud",
    ai_generated: true,
    source: "Access Anomaly Filter",
    sourceKey: "action_sentinel_2_source",
    path: "/remediation"
  },
  {
    id: "AI-104",
    category: "Sentinel",
    title: "Unapproved Supplier Signup",
    titleKey: "action_sentinel_3_title",
    description: "Automated attempt to register a new vendor profile without matching internal procurement authorization. Profile quarantined.",
    descKey: "action_sentinel_3_desc",
    priority: "Medium",
    impact: "Access Control",
    impactKey: "action_impact_control",
    ai_generated: true,
    source: "Registration Audit Filter",
    sourceKey: "action_sentinel_3_source",
    path: "/remediation"
  },
  {
    id: "AI-108",
    category: "Sentinel",
    title: "Privileged Table Query Alert",
    titleKey: "action_sentinel_4_title",
    description: "Direct query executed on raw credentials table by non-admin identity. Blocked.",
    descKey: "action_sentinel_4_desc",
    priority: "High",
    impact: "Access Control",
    impactKey: "action_impact_control",
    ai_generated: true,
    source: "Access Audit Filter",
    sourceKey: "action_sentinel_4_source",
    path: "/remediation"
  },
  {
    id: "AI-115",
    category: "Sentinel",
    title: "Suspicious Key Rotation",
    titleKey: "action_sentinel_5_title",
    description: "Multiple session key rotation requests received within 1 minute. Sandbox lock engaged.",
    descKey: "action_sentinel_5_desc",
    priority: "Medium",
    impact: "Access Control",
    impactKey: "action_impact_control",
    ai_generated: true,
    source: "Security Policy Guard",
    sourceKey: "action_sentinel_5_source",
    path: "/remediation"
  },
  {
    id: "AI-116",
    category: "Sentinel",
    title: "Unmasked Ingress Attempt",
    titleKey: "action_sentinel_6_title",
    description: "External connection attempted to ingest customer records without hashing variables. Quarantined.",
    descKey: "action_sentinel_6_desc",
    priority: "Critical",
    impact: "Risk Mitigation",
    impactKey: "action_impact_mitigated",
    ai_generated: true,
    source: "Data Ingress Filter",
    sourceKey: "action_sentinel_6_source",
    path: "/remediation"
  },
  {
    id: "AI-130",
    category: "Sentinel",
    title: "API Token Boundary Violation",
    titleKey: "action_sentinel_7_title",
    description: "Access token generated for partner portal outside standard geographical boundaries. Suspended.",
    descKey: "action_sentinel_7_desc",
    priority: "High",
    impact: "Access Control",
    impactKey: "action_impact_control",
    ai_generated: true,
    source: "Geofence Agent",
    sourceKey: "action_sentinel_7_source",
    path: "/remediation"
  },
  {
    id: "AI-131",
    category: "Sentinel",
    title: "Vendor API Data Hallucination",
    titleKey: "action_sentinel_8_title",
    description: "Public LLM query returned mismatched JSON schema for shipping schedules. Blocked by local inference validator.",
    descKey: "action_sentinel_8_desc",
    priority: "Critical",
    impact: "Data Safety Guard",
    impactKey: "action_impact_data_safety",
    ai_generated: true,
    source: "Local Inference Shield",
    sourceKey: "action_sentinel_8_source",
    path: "/remediation"
  },
  {
    id: "AI-132",
    category: "Sentinel",
    title: "SOP Database Logic Drift",
    titleKey: "action_sentinel_9_title",
    description: "Active SQL ingestion rules drifted from verified Operating Manual SOPs. Discrepancy logged for review.",
    descKey: "action_sentinel_9_desc",
    priority: "High",
    impact: "Verify Code vs SOP",
    impactKey: "action_impact_verify_code",
    ai_generated: true,
    source: "Twin Code Auditor",
    sourceKey: "action_sentinel_9_source",
    path: "/remediation"
  },
  {
    id: "AI-151",
    category: "Sentinel",
    title: "Cold Chain Compressor Degradation",
    titleKey: "action_sentinel_151_title",
    description: "Reefer Container #MSCU-8849201 telemetry indicates slow compressor degradation. Current temp 3.2°C (Limit: 4.0°C). Rerouting port power-plug request to Terminal 4.",
    descKey: "action_sentinel_151_desc",
    priority: "Critical",
    impact: "Perishables Loss Prevention",
    impactKey: "action_impact_perishables",
    ai_generated: true,
    source: "IoT Cold Chain Monitor",
    sourceKey: "action_sentinel_151_source",
    path: "/remediation"
  },
  {
    id: "AI-152",
    category: "Sentinel",
    title: "HazMat Segregation Violation",
    titleKey: "action_sentinel_152_title",
    description: "Dangerous Goods Class 3 (Flammable) staged within 5m of Class 5.1 (Oxidizer) at Zone C. Crane movement locked until 15m compliance is restored.",
    descKey: "action_sentinel_152_desc",
    priority: "Critical",
    impact: "Terminal Safety Protocol",
    impactKey: "action_impact_safety",
    ai_generated: true,
    source: "Yard Operations Sentinel",
    sourceKey: "action_sentinel_152_source",
    path: "/remediation"
  },

  // Forge Cases (Supplies/Generations)
  {
    id: "AI-112",
    category: "Forge",
    title: "Preemptive Purchase Order Draft",
    titleKey: "action_forge_1_title",
    description: "Pre-approved PO generated to compress lead times ahead of forecasted inflation anomalies.",
    descKey: "action_forge_1_desc",
    priority: "Medium",
    impact: "Save $45,000 Outage",
    impactKey: "action_forge_1_impact",
    ai_generated: true,
    source: "Demand Scenario Simulator",
    sourceKey: "action_forge_1_source",
    path: "/artifact",
    forgeCard: {
      currentSupplier: "Acme Industrial",
      currentLeadTime: "14 Days",
      alternativeSupplier: "Global Forge Solutions",
      alternativeLeadTime: "5 Days",
      costSavings: "$45,000",
      confidence: "98%"
    }
  },
  {
    id: "AI-113",
    category: "Forge",
    title: "Raw Material Contract Optimization",
    titleKey: "action_forge_2_title",
    description: "Contract renegotiation draft based on recent commodity index drops, projecting an annual saving of 8%.",
    descKey: "action_forge_2_desc",
    priority: "Low",
    impact: "+$22,500.00",
    impactKey: "action_forge_2_impact",
    ai_generated: true,
    source: "Contract Semantic Analyzer",
    sourceKey: "action_forge_2_source",
    path: "/artifact"
  },
  {
    id: "AI-114",
    category: "Forge",
    title: "Warehouse Space Pre-allocation",
    titleKey: "action_forge_3_title",
    description: "Automated cargo consolidation draft for next quarter's peak season, reducing external warehousing storage costs.",
    descKey: "action_forge_3_desc",
    priority: "Medium",
    impact: "12% Cost Reduction",
    impactKey: "action_forge_3_impact",
    ai_generated: true,
    source: "Space Optimization Simulator",
    sourceKey: "action_forge_3_source",
    path: "/artifact"
  },
  {
    id: "AI-117",
    category: "Forge",
    title: "Transport Dispatch Schedule",
    titleKey: "action_forge_4_title",
    description: "Automated schedule generated for empty carrier pickups to avoid depot congestion next week.",
    descKey: "action_forge_4_desc",
    priority: "Low",
    impact: "Logistics Optimization",
    impactKey: "action_forge_4_impact",
    ai_generated: true,
    source: "Dispatch Planner",
    sourceKey: "action_forge_4_source",
    path: "/artifact"
  },
  {
    id: "AI-118",
    category: "Forge",
    title: "Supply Chain Re-routing Suggestion",
    titleKey: "action_forge_5_title",
    description: "Synthetic twin plan to shift raw material sourcing to secondary supplier due to storm alert.",
    descKey: "action_forge_5_desc",
    priority: "Medium",
    impact: "+$12,500.00 Saved",
    impactKey: "action_forge_5_impact",
    ai_generated: true,
    source: "Alternative Sourcing Engine",
    sourceKey: "action_forge_5_source",
    path: "/artifact"
  },
  {
    id: "AI-119",
    category: "Forge",
    title: "Demurrage Dispute Invoice Draft",
    titleKey: "action_forge_6_title",
    description: "Drafted fee refund letter based on HS Customs code discrepancy, reclaiming $18,200.00.",
    descKey: "action_forge_6_desc",
    priority: "High",
    impact: "+$18,200.00 Reclaim",
    impactKey: "action_forge_6_impact",
    ai_generated: true,
    source: "Dispute Claim Generator",
    sourceKey: "action_forge_6_source",
    path: "/artifact"
  },
  {
    id: "AI-120",
    category: "Forge",
    title: "Inventory Reorder Suggestion",
    titleKey: "action_forge_7_title",
    description: "Pre-calculated purchase request generated for safe stock replenishment ahead of shutdown.",
    descKey: "action_forge_7_desc",
    priority: "Low",
    impact: "Safety Stock Buffer",
    impactKey: "action_forge_7_impact",
    ai_generated: true,
    source: "Predictive Reorder Agent",
    sourceKey: "action_forge_7_source",
    path: "/artifact"
  },
  {
    id: "AI-140",
    category: "Forge",
    title: "IoT Maintenance Service Request",
    titleKey: "action_forge_iot_title",
    description: "RFID telemetry indicates pallet operations downgrading due to postponed maintenance. Maintenance scheduling draft generated.",
    descKey: "action_forge_iot_desc",
    priority: "High",
    impact: "Operations Uptime",
    impactKey: "action_forge_iot_impact",
    ai_generated: true,
    source: "IoT Telemetry Agent",
    sourceKey: "action_forge_iot_source",
    path: "/artifact"
  },
  {
    id: "AI-153",
    category: "Forge",
    title: "Last-Mile SLA Breach Mitigation",
    titleKey: "action_forge_153_title",
    description: "Sorting hub failure in Chicago. 1,400 express parcels risk missing SLA. Alternative LTL carrier (XPO) drafted for downstream injection to save $24,000.",
    descKey: "action_forge_153_desc",
    priority: "High",
    impact: "Save $24,000 Penalties",
    impactKey: "action_forge_153_impact",
    ai_generated: true,
    source: "Logistics Network Optimizer",
    sourceKey: "action_forge_153_source",
    path: "/artifact"
  },
  {
    id: "AI-154",
    category: "Forge",
    title: "Labor & Dock Scheduling Clash",
    titleKey: "action_forge_154_title",
    description: "Vessel 'Ever Given' ETA delayed 18h. Terminal B gang shifts will incur $12k idle time. Labor re-allocation draft to cross-docking operations prepared.",
    descKey: "action_forge_154_desc",
    priority: "Medium",
    impact: "Labor Utilization",
    impactKey: "action_forge_154_impact",
    ai_generated: true,
    source: "Workforce Shift Synthesizer",
    sourceKey: "action_forge_154_source",
    path: "/artifact"
  },

  // Compliance Cases (Regulatory/PII)
  {
    id: "RULE-201",
    category: "Compliance",
    title: "Customer Data Exposure Risk",
    titleKey: "action_compliance_1_title",
    description: "Customer contact fields accessed without compliance masking in operational reports. View paused for correction.",
    descKey: "action_compliance_1_desc",
    priority: "High",
    impact: "Compliance Action",
    impactKey: "action_compliance_1_impact",
    ai_generated: false,
    source: "Data Protection Filter",
    sourceKey: "action_compliance_1_source",
    path: "/remediation",
    complianceCard: {
      policy: "Data Protection Act (DPA)",
      violationType: "Unmasked PII Exposure",
      severity: "High (Penalty Risk)",
      status: "Remediation Script Paused"
    }
  },
  {
    id: "RULE-202",
    category: "Compliance",
    title: "Missing Import Documentation",
    titleKey: "action_compliance_2_title",
    description: "Cargo manifest for international shipment missing the mandatory environmental emissions certificate. Action required.",
    descKey: "action_compliance_2_desc",
    priority: "High",
    impact: "Avoid Cargo Penalty",
    impactKey: "action_compliance_2_impact",
    ai_generated: false,
    source: "Regulatory Rules Validator",
    sourceKey: "action_compliance_2_source",
    path: "/remediation"
  },
  {
    id: "RULE-203",
    category: "Compliance",
    title: "Carrier License Expiration Warning",
    titleKey: "action_compliance_3_title",
    description: "Primary logistics partner operating with a ground transportation license expiring in 3 days. Verification requested.",
    descKey: "action_compliance_3_desc",
    priority: "Medium",
    impact: "Avoid Operational Stop",
    impactKey: "action_compliance_3_impact",
    ai_generated: false,
    source: "Partner License Auditor",
    sourceKey: "action_compliance_3_source",
    path: "/remediation"
  },
  {
    id: "RULE-207",
    category: "Compliance",
    title: "Decalibration Drift Flagged",
    titleKey: "action_compliance_4_title",
    description: "Weight deviation margin at Dock 4 scale exceeded bounds during inbound cargo processing.",
    descKey: "action_compliance_4_desc",
    priority: "High",
    impact: "Calibration Audit",
    impactKey: "action_compliance_4_impact",
    ai_generated: false,
    source: "Scale Integrity Watch",
    sourceKey: "action_compliance_4_source",
    path: "/remediation"
  },
  {
    id: "RULE-208",
    category: "Compliance",
    title: "Cold Chain Temperature Excursion",
    titleKey: "action_compliance_5_title",
    description: "Refrigerated cargo container reported temperatures above -18°C limit. Quarantine rule active.",
    descKey: "action_compliance_5_desc",
    priority: "High",
    impact: "Cargo Quarantine",
    impactKey: "action_compliance_5_impact",
    ai_generated: false,
    source: "Cold Chain Telemetry Watch",
    sourceKey: "action_compliance_5_source",
    path: "/remediation"
  },
  {
    id: "RULE-209",
    category: "Compliance",
    title: "Supplier SLA Leadtime Breach",
    titleKey: "action_compliance_6_title",
    description: "Subcontractor delivery arrival logged 5 days past due window. Penalty clause auto-flagged.",
    descKey: "action_compliance_6_desc",
    priority: "Medium",
    impact: "SLA Penalty Fee",
    impactKey: "action_compliance_6_impact",
    ai_generated: false,
    source: "SLA Leadtime Tracker",
    sourceKey: "action_compliance_6_source",
    path: "/remediation"
  },
  {
    id: "RULE-210",
    category: "Compliance",
    title: "Security Key Expiration Threat",
    titleKey: "action_compliance_7_title",
    description: "Active admin session credential expiring in 6 days. Automatic renewal pending verification.",
    descKey: "action_compliance_7_desc",
    priority: "High",
    impact: "Key Renewal Audit",
    impactKey: "action_compliance_7_impact",
    ai_generated: false,
    source: "Key Credentials Monitor",
    sourceKey: "action_compliance_7_source",
    path: "/remediation"
  },
  {
    id: "RULE-212",
    category: "Compliance",
    title: "BoL vs Weighbridge Discrepancy",
    titleKey: "action_compliance_212_title",
    description: "Manifest weight (24,500 kg) for BoL #HLCU-9021 mismatches terminal scale (27,100 kg) by +10.6%. Customs hold anticipated. Amendment drafted.",
    descKey: "action_compliance_212_desc",
    priority: "High",
    impact: "Avoid Misdeclaration",
    impactKey: "action_compliance_212_impact",
    ai_generated: false,
    source: "Terminal Weight Auditor",
    sourceKey: "action_compliance_212_source",
    path: "/remediation"
  },

  // Finance Cases (Billing/Invoices)
  {
    id: "AI-109",
    category: "Finance",
    title: "Customs Demurrage Fee Overcharge",
    titleKey: "action_finance_1_title",
    description: "HS Tariff code discrepancy detected on port shipping invoices. Fee refund dispute draft generated.",
    descKey: "action_finance_1_desc",
    priority: "High",
    impact: "+$18,200.00",
    impactKey: "action_finance_1_impact",
    ai_generated: true,
    source: "Import Invoice Auditor",
    sourceKey: "action_finance_1_source",
    path: "/artifact",
    financeCard: {
      invoiceId: "INV-8820-A",
      expectedCost: "$4,100.00",
      billedCost: "$22,300.00",
      variance: "$18,200.00",
      disputedCode: "HS Tariff 8802.40"
    }
  },
  {
    id: "AI-110",
    category: "Finance",
    title: "Unapplied Vendor Discount",
    titleKey: "action_finance_2_title",
    description: "Invoice from Principal vendor did not include the agreed 3% early-payment discount. Corrected invoice requested.",
    descKey: "action_finance_2_desc",
    priority: "Medium",
    impact: "+$6,150.00",
    impactKey: "action_finance_2_impact",
    ai_generated: true,
    source: "Automated Invoice Reconciliation",
    sourceKey: "action_finance_2_source",
    path: "/artifact"
  },
  {
    id: "AI-111",
    category: "Finance",
    title: "Duplicate Cargo Billing Detected",
    titleKey: "action_finance_3_title",
    description: "Duplicate entry found for interstate freight service. Redundant charge blocked in billing gateway.",
    descKey: "action_finance_3_desc",
    priority: "High",
    impact: "+$9,400.00",
    impactKey: "action_finance_3_impact",
    ai_generated: true,
    source: "Billing Duplicate Detector",
    sourceKey: "action_finance_3_source",
    path: "/artifact"
  },
  {
    id: "AI-121",
    category: "Finance",
    title: "Tariff Mismatch Penalty Claim",
    titleKey: "action_finance_4_title",
    description: "HS Code 8479.89.97 was double-billed for port services. Dispute draft queued.",
    descKey: "action_finance_4_desc",
    priority: "Medium",
    impact: "+$3,450.00 Refund",
    impactKey: "action_finance_4_impact",
    ai_generated: true,
    source: "Billing Dispute Agent",
    sourceKey: "action_finance_4_source",
    path: "/artifact"
  },
  {
    id: "AI-122",
    category: "Finance",
    title: "Fuel Surcharge Discrepancy",
    titleKey: "action_finance_5_title",
    description: "Logistics carrier invoiced fuel charge 12% above negotiated contract index rate. Held.",
    descKey: "action_finance_5_desc",
    priority: "Medium",
    impact: "+$1,820.00 Hold",
    impactKey: "action_finance_5_impact",
    ai_generated: true,
    source: "Fuel Rate Auditor",
    sourceKey: "action_finance_5_source",
    path: "/artifact"
  },
  {
    id: "AI-123",
    category: "Finance",
    title: "Detention Claim Recovery",
    titleKey: "action_finance_6_title",
    description: "Excessive wait-time demurrage fees of $3,200 detected on shipment #SH-908B. Reclaim active.",
    descKey: "action_finance_6_desc",
    priority: "High",
    impact: "+$3,200.00 Refund",
    impactKey: "action_finance_6_impact",
    ai_generated: true,
    source: "Detention Claim Audit",
    sourceKey: "action_finance_6_source",
    path: "/artifact"
  },
  {
    id: "AI-124",
    category: "Finance",
    title: "Early Settlement Discount",
    titleKey: "action_finance_7_title",
    description: "Opportunity to apply 2% prompt payment term discount for supplier PO-901 identified.",
    descKey: "action_finance_7_desc",
    priority: "Low",
    impact: "+$1,240.00 Save",
    impactKey: "action_finance_7_impact",
    ai_generated: true,
    source: "Cashflow Optimizer",
    sourceKey: "action_finance_7_source",
    path: "/artifact"
  },
  {
    id: "AI-155",
    category: "Finance",
    title: "USMCA Cross-Border Tariff Arbitrage",
    titleKey: "action_finance_155_title",
    description: "Certificate of Origin missing for auto-parts at Laredo. Daily storage $450. Emergency extraction of sub-tier documentation initiated.",
    descKey: "action_finance_155_desc",
    priority: "High",
    impact: "Minimize Storage Fees",
    impactKey: "action_finance_155_impact",
    ai_generated: true,
    source: "Cross-Border Tax Engine",
    sourceKey: "action_finance_155_source",
    path: "/artifact"
  },

  // Route Cases (Logistics/Route optimization)
  {
    id: "AI-105",
    category: "Route",
    title: "Weight Discrepancy in Cargo Route",
    titleKey: "action_route_1_title",
    description: "Weight discrepancy of 14.5% detected between bill of lading records and physical scales. Dispatch held for audit.",
    descKey: "action_route_1_desc",
    priority: "High",
    impact: "+$12,450.00",
    impactKey: "action_route_1_impact",
    ai_generated: true,
    source: "Scale & Loading Monitor",
    sourceKey: "action_route_1_source",
    path: "/artifact",
    routeCard: {
      from: "Depot A Logistics Gate",
      fromKey: "action_route_1_from",
      to: "Port of Houston Terminal",
      toKey: "action_route_1_to",
      variance: "14.5%",
      varianceKey: "action_route_1_var",
      cargo: "Industrial Castings",
      cargoKey: "action_route_1_cargo",
      costVariance: "$12,450",
      costVarianceKey: "action_route_1_cost"
    }
  },
  {
    id: "AI-106",
    category: "Route",
    title: "Empty Backhaul Route Optimization",
    titleKey: "action_route_2_title",
    description: "Vehicle returning empty from Depot B. Rerouted to pick up customer returns at supplier, saving transport overhead.",
    descKey: "action_route_2_desc",
    priority: "Medium",
    impact: "+$1,850.00",
    impactKey: "action_route_2_impact",
    ai_generated: true,
    source: "Logistics Route Optimizer",
    sourceKey: "action_route_2_source",
    path: "/artifact",
    routeCard: {
      from: "Depot B Logistics Gate",
      fromKey: "action_route_2_from",
      to: "Midpoint Supplier Grid",
      toKey: "action_route_2_to",
      variance: "Empty Leg Saved",
      varianceKey: "action_route_2_var",
      cargo: "Returned Merchandise",
      cargoKey: "action_route_2_cargo",
      costVariance: "$1,850",
      costVarianceKey: "action_route_2_cost"
    }
  },
  {
    id: "AI-107",
    category: "Route",
    title: "Adverse Weather Rerouting",
    titleKey: "action_route_3_title",
    description: "Shipment from Port of Houston rerouted due to severe storm alert, preserving estimated delivery window.",
    descKey: "action_route_3_desc",
    priority: "Medium",
    impact: "Lead-Time Guarantee",
    impactKey: "action_route_3_impact",
    ai_generated: true,
    source: "Smart Fleet Router",
    sourceKey: "action_route_3_source",
    path: "/artifact",
    routeCard: {
      from: "Port of Houston Terminal",
      fromKey: "action_route_3_from",
      to: "Depot A Logistics Gate",
      toKey: "action_route_3_to",
      variance: "Rerouted / On-Time",
      varianceKey: "action_route_3_var",
      cargo: "Raw Materials",
      cargoKey: "action_route_3_cargo",
      costVariance: "Preserved",
      costVarianceKey: "action_route_3_cost"
    }
  },
  {
    id: "AI-125",
    category: "Route",
    title: "Port Congestion Bypass",
    titleKey: "action_route_4_title",
    description: "Houston Port Terminal Gate 4 experiencing 4-hour delays. Fleet routed to Gate B entry point.",
    descKey: "action_route_4_desc",
    priority: "Medium",
    impact: "2.5h Delay Avoided",
    impactKey: "action_route_4_impact",
    ai_generated: true,
    source: "Live Port Terminal Feed",
    sourceKey: "action_route_4_source",
    path: "/artifact",
    routeCard: {
      from: "Depot A Logistics Gate",
      fromKey: "action_route_4_from",
      to: "Gate B Ingress Point",
      toKey: "action_route_4_to",
      variance: "Gate B Route Bypass",
      varianceKey: "action_route_4_var",
      cargo: "Industrial Castings",
      cargoKey: "action_route_4_cargo",
      costVariance: "Delay Minimized",
      costVarianceKey: "action_route_4_cost"
    }
  },
  {
    id: "AI-126",
    category: "Route",
    title: "Empty Backhaul Consolidation",
    titleKey: "action_route_5_title",
    description: "Consolidating return trip route from Depot B to pick up raw packaging materials from nearest packaging plant.",
    descKey: "action_route_5_desc",
    priority: "Low",
    impact: "+$2,850.00 Saved",
    impactKey: "action_route_5_impact",
    ai_generated: true,
    source: "Empty Leg Consolidator",
    sourceKey: "action_route_5_source",
    path: "/artifact",
    routeCard: {
      from: "Depot B Logistics Gate",
      fromKey: "action_route_5_from",
      to: "Local Packaging Plant",
      toKey: "action_route_5_to",
      variance: "Return Trip Load",
      varianceKey: "action_route_5_var",
      cargo: "Paper Containers",
      cargoKey: "action_route_5_cargo",
      costVariance: "$2,850",
      costVarianceKey: "action_route_5_cost"
    }
  },
  {
    id: "AI-127",
    category: "Route",
    title: "Driver Shortage Reroute",
    titleKey: "action_route_6_title",
    description: "Carrier rescheduled shipment FL309 to rail line transport due to lack of truck driver availability.",
    descKey: "action_route_6_desc",
    priority: "Medium",
    impact: "Delivery On-Schedule",
    impactKey: "action_route_6_impact",
    ai_generated: true,
    source: "Intermodal Route Watch",
    sourceKey: "action_route_6_source",
    path: "/artifact",
    routeCard: {
      from: "Depot A Logistics Gate",
      fromKey: "action_route_6_from",
      to: "Houston Rail Yards",
      toKey: "action_route_6_to",
      variance: "Intermodal Reroute",
      varianceKey: "action_route_6_var",
      cargo: "Industrial Castings",
      cargoKey: "action_route_6_cargo",
      costVariance: "Time Preserved",
      costVarianceKey: "action_route_6_cost"
    }
  },
  {
    id: "AI-128",
    category: "Route",
    title: "Port Gate Entry Window Adjustment",
    titleKey: "action_route_7_title",
    description: "Shipment departure scheduled 2 hours early to match low-congestion gate entry windows at Houston Port.",
    descKey: "action_route_7_desc",
    priority: "Low",
    impact: "Entry Slot Secured",
    impactKey: "action_route_7_impact",
    ai_generated: true,
    source: "Appointment Scheduler",
    sourceKey: "action_route_7_source",
    path: "/artifact",
    routeCard: {
      from: "Depot A Logistics Gate",
      fromKey: "action_route_7_from",
      to: "Port Appointment Gate",
      toKey: "action_route_7_to",
      variance: "Window Secured",
      varianceKey: "action_route_7_var",
      cargo: "Industrial Castings",
      cargoKey: "action_route_7_cargo",
      costVariance: "On-Time entry",
      costVarianceKey: "action_route_7_cost"
    }
  },

  // Operations Cases (Operational/Warehousing)
  {
    id: "RULE-204",
    category: "Operations",
    title: "Safety Stock Limit Warning",
    titleKey: "action_ops_1_title",
    description: "Central warehouse units dropped below the 15% safety stock limit during quarterly logistical planning.",
    descKey: "action_ops_1_desc",
    priority: "Medium",
    impact: "Lead-time Risk",
    impactKey: "action_ops_1_impact",
    ai_generated: false,
    source: "Inventory & Demand Manager",
    sourceKey: "action_ops_1_source",
    path: "/remediation",
    operationsCard: {
      sensorId: "Warehouse Node 12",
      metric: "Stock Depletion Rate",
      threshold: "15% Limit",
      currentValue: "11%",
      forecast: "Stockout in 3 days"
    }
  },
  {
    id: "RULE-205",
    category: "Operations",
    title: "Assembly Line Interruption Risk",
    titleKey: "action_ops_2_title",
    description: "Delay in critical component arrival threatens to stop Assembly Line 3. Emergency stock relocation initiated.",
    descKey: "action_ops_2_desc",
    priority: "High",
    impact: "Avoid Downtime Cost",
    impactKey: "action_ops_2_impact",
    ai_generated: false,
    source: "Production Planning Filter",
    sourceKey: "action_ops_2_source",
    path: "/remediation"
  },
  {
    id: "RULE-206",
    category: "Operations",
    title: "Cold Chain Temperature Alert",
    titleKey: "action_ops_3_title",
    description: "Refrigerated cargo container with agricultural supplies reports temperature above ideal threshold. Maintenance dispatched.",
    descKey: "action_ops_3_desc",
    priority: "High",
    impact: "Cargo Preservation",
    impactKey: "action_ops_3_impact",
    ai_generated: false,
    source: "Cold Chain Fleet Monitor",
    sourceKey: "action_ops_3_source",
    path: "/remediation"
  },
  {
    id: "RULE-211",
    category: "Operations",
    title: "Equipment Maintenance Alert",
    titleKey: "action_ops_4_title",
    description: "Dock 4 conveyor system report lists calibration drift. Preventive check ticket raised.",
    descKey: "action_ops_4_desc",
    priority: "Medium",
    impact: "Preventive Check",
    impactKey: "action_ops_4_impact",
    ai_generated: false,
    source: "Equipment Sensor Feed",
    sourceKey: "action_ops_4_source",
    path: "/remediation"
  },
  {
    id: "RULE-212",
    category: "Operations",
    title: "Cargo Receiving Discrepancy",
    titleKey: "action_ops_5_title",
    description: "Inbound package scan count reported 140 units, but invoice specifies 150 units. Flagged.",
    descKey: "action_ops_5_desc",
    priority: "Medium",
    impact: "Receiving Quarantine",
    impactKey: "action_ops_5_impact",
    ai_generated: false,
    source: "Inbound Scanning Terminal",
    sourceKey: "action_ops_5_source",
    path: "/remediation"
  },
  {
    id: "RULE-213",
    category: "Operations",
    title: "Out-of-service Reefer Container",
    titleKey: "action_ops_6_title",
    description: "Compressor power degradation warning on refrigerated unit TR-909. Swap required.",
    descKey: "action_ops_6_desc",
    priority: "High",
    impact: "Container Swap Queued",
    impactKey: "action_ops_6_impact",
    ai_generated: false,
    source: "Reefer Telemetry Monitor",
    sourceKey: "action_ops_6_source",
    path: "/remediation"
  },
  {
    id: "RULE-214",
    category: "Operations",
    title: "Safety Protocol Audit Warning",
    titleKey: "action_ops_7_title",
    description: "Manual logs for fire exit clearance missing supervisor signature. Compliance flag active.",
    descKey: "action_ops_7_desc",
    priority: "Low",
    impact: "Safety Check Review",
    impactKey: "action_ops_7_impact",
    ai_generated: false,
    source: "Facility Inspection Sheet",
    sourceKey: "action_ops_7_source",
    path: "/remediation"
  }
];

// Dynamically associate contacts to mockActions items
mockActions.forEach(action => {
  if (action.category === 'Sentinel' || action.id.startsWith('RULE-210')) {
    action.contactName = "Jane Smith (SecOps Lead)";
    action.contactPhone = "+1 555-019-9823";
  } else if (action.category === 'Finance') {
    action.contactName = "Port Authority Billing";
    action.contactPhone = "+1 555-012-7744";
  } else if (action.category === 'Route') {
    action.contactName = "Logistics Control Center";
    action.contactPhone = "+1 555-011-8833";
  } else if (action.category === 'Forge') {
    action.contactName = "John Doe (Broker)";
    action.contactPhone = "+1 555-010-9921";
  } else if (action.category === 'Operations') {
    action.contactName = "Logistics Control Center";
    action.contactPhone = "+1 555-011-8833";
  } else {
    action.contactName = "Logistics Control Center";
    action.contactPhone = "+1 555-011-8833";
  }
});

// Carousel Business Insights Mock
const carouselInsights = [
  "Claims audit recovered $18,200 this morning from HS customs tariff mismatch refunds.",
  "Fulfilment pipeline simulation predicts 99.4% on-time delivery using autonomous agent task delegation.",
  "Route Optimization model automatically re-allocated 14 outbound shipments, avoiding storm fronts and saving 12% in diesel costs.",
  "Predictive Maintenance telemetry identified Pallet RFID-882 degradation, automatically scheduling vendor service to prevent operational downgrades."
];

// In-Memory Nodes for Maturity Graph
const graphNodes = [
  { id: "FleetTelemetry_Live", x: 60, y: 50, active: true },
  { id: "WarehouseSensors", x: 190, y: 50, active: false },
  { id: "RouteOptimization", x: 320, y: 50, active: false },
  { id: "MaintenanceLogs", x: 450, y: 50, active: false },
  { id: "CargoManifests", x: 60, y: 140, active: false },
  { id: "PredictiveModels", x: 190, y: 140, active: false },
  { id: "SupplierSLAs", x: 320, y: 140, active: false },
  { id: "ColdChainAudits", x: 450, y: 140, active: false }
];
const graphEdges = [
  { source: "FleetTelemetry_Live", target: "PredictiveModels" },
  { source: "WarehouseSensors", target: "ColdChainAudits" },
  { source: "CargoManifests", target: "ColdChainAudits" },
  { source: "RouteOptimization", target: "SupplierSLAs" },
  { source: "MaintenanceLogs", target: "PredictiveModels" },
  { source: "PredictiveModels", target: "RouteOptimization" },
  { source: "ColdChainAudits", target: "SupplierSLAs" }
];

// Timeline simulator step data
const fetchStepDetails = {
  1: {
    title: "DB Query & Metadata Recovery",
    desc: "Ingesting active schemas and indices from Customs Registry Link.",
    logs: [
      "[INFO] Connecting to Customs Registry secure endpoint...",
      "[INFO] Authenticated via Secure Workload Identity.",
      "[SUCCESS] Recovered schema metadata for customs.audits (14 cols, 8520 rows)."
    ],
    toon: `[Snapshot:
  SessionInfo: [ "conn-customs-audits-prod", "user-admin", "secure-gateway" ]
  DatasetMeta: {
    "invoices": [DatasetMeta: table_name: "invoices", row_count: 8520, tests_total: 12]
  }
]`
  },
  2: {
    title: "HDBSCAN Semantic Clustering",
    desc: "Sorting raw transaction metadata histories into data domains.",
    logs: [
      "[INFO] Ingesting Customs Registry query history (30 days)...",
      "[INFO] Calculating token distance matrix using BM25 semantic hybrid search...",
      "[SUCCESS] Identified 2 discrete cluster domains (Silhouette: 0.89):",
      "  -> Domain: 'Logistics_Customs'"
    ],
    toon: `[ClusterRun:
  Algorithm: "HDBSCAN"
  Metrics: {
    Silhouette: 0.89,
    Domains: [ "Logistics_Customs", "Procurement_POs" ]
  }
]`
  },
  3: {
    title: "XGBoost Bound Selection",
    desc: "Calculating operational boundaries for RAG window digestion.",
    logs: [
      "[INFO] Running XGBoost chunking model on cargo invoice metrics...",
      "[SUCCESS] Boundary parameters mapped with 91.2% confidence score:",
      "  -> Limit: 'demurrage_fee > 5000'",
      "  -> Limit: 'days_delayed > 3'"
    ],
    toon: `[XGBBoundSelection:
  TargetColumns: [ "demurrage_fee", "cargo_value" ]
  Bounds: [ "demurrage_fee > 5000", "days_delayed > 3" ]
  Confidence: 0.912
 ]`
  },
  4: {
    title: "Knowledge Graph Engineering",
    desc: "Committing semantic edges and constraints to local Comet Vector DB.",
    logs: [
      "[INFO] Creating Graph Node [Invoice_Clearance]...",
      "[SUCCESS] Stored relationship: [Invoice_Clearance] - (Exceeds_Demurrage_Limit) -> [SOP_Section_4.2]",
      "[INFO] Indexing 4 new vectors in Comet local store."
    ],
    toon: `[KnowledgeGraphNode:
  Domain: "Finance"
  Node: "Invoice_Clearance"
  Edge: "Exceeds_Demurrage_Limit"
  Reference: "SOP_Section_4.2"
]`
  },
  5: {
    title: "Prophet Trend Decomposition",
    desc: "Isolating seasonal trends and transactional anomalies.",
    logs: [
      "[INFO] Running Prophet additive seasonality decomposition...",
      "[WARN] Anomaly detected: +14.2% demurrage fee variance spike in carrier billing cycles."
    ],
    toon: `[AnomalyForecast:
  Model: "Prophet_Additive_Seasonality"
  Anomalies: [
    { Date: "2026-06-03", Variance: "+14.2% Volatility", Severity: "High" }
  ]
]`
  },
  6: {
    title: "LLM Local Forensic Judgment",
    desc: "Localized llama.cpp model deducing structural issues.",
    logs: [
      "[INFO] Parsing context window through local llama.cpp thread...",
      "[INFO] Model loaded: Qwen2.5-VL-7B-Instruct-Q4...",
      "[SUCCESS] Judge verdict: 'Breach_Confirmed_Customs_Error' on BOL weight audit."
    ],
    toon: `[LLMJudgment:
  Judge: "Qwen-VL-Instruct-7B"
  Verdict: "Breach_Confirmed_Customs_Error"
  Reasoning: "Demurrage overcharges discovered on shipping carrier cargo invoice INV-2026-089A matching pattern of HS tariff code misclassification."
]`
  },
  7: {
    title: "Specialist Persona Swarm",
    desc: "Triggering Data Posture, Rules Recon, and Lab Runners.",
    logs: [
      "[INFO] Spawning isolated specialist executors...",
      "[INFO] Task A: Rules Recon verifying query compliance...",
      "[SUCCESS] Data Posture Agent report: Security settings baseline drift flagged."
    ],
    toon: `[PersonaSwarmResult:
  DataMaturity: { score: 92 }
  RulesRecon: { findings_count: 2, confidence: 0.948 }
]`
  },
  8: {
    title: "Actionable Twin Synthesis",
    desc: "Drafting emails and SQL fixes to push to approval queues.",
    logs: [
      "[INFO] Compiling specialist verdicts...",
      "[SUCCESS] Queued auto-refund BOL Claims email draft for vendor manager.",
      "[SUCCESS] Queued auto-revoke security write access draft for Firebase admin.",
      "[SUCCESS] Ingestion pipeline execution SUCCESS."
    ],
    toon: `[ActionTwinQueue:
  QueuedAction: { action_id: 1, type: "CLAIMS_RECOVERY", value: 12450.00 }
  QueuedAction: { action_id: 3, type: "SECURITY_REVOKE", target: "Over-privileged write" }
]`
  }
};

// Initialize listeners on DOM load
document.addEventListener("DOMContentLoaded", () => {
  simulateBootSequence();
  setupSidebarNavigation();
  setupFilterBar();
  setupMaturityGraph();
  setupFetchCenterCarousel();
  setupInteractiveWorkflowActions();
  setupPresentationControls();

  // Custom dialog events
  setupVoiceAndCameraSimulators();

  // Setup newly added operational control modules
  setupOperationalControls();

  // Initial render
  renderActionFeed();
  renderIncidentsList();
  renderContactsLists();
  updateTime();
  changeLanguage('Portuguese', false);
  startBackgroundWhatsAppSimulator();
});

// Boot screen simulator
function simulateBootSequence() {
  const bootScreen = document.getElementById("boot-screen");
  const bootStatusText = document.getElementById("boot-status-text");

  const statuses = [
    "Estabelecendo conexão segura de dados...",
    "Verificando credenciais de acesso...",
    "Carregando modelos de inteligência operacional...",
    "Sincronizando feed de ações em tempo real...",
    "Conectado. Pronto."
  ];

  let currentStatusIndex = 0;

  const interval = setInterval(() => {
    if (currentStatusIndex < statuses.length - 1) {
      currentStatusIndex++;
      bootStatusText.innerText = statuses[currentStatusIndex];
    } else {
      clearInterval(interval);
      bootScreen.style.opacity = "0";
      setTimeout(() => {
        bootScreen.style.display = "none";
      }, 800);
    }
  }, 400);
}

// Sidebar View Transitions
function setupSidebarNavigation() {
  const screenPills = document.querySelectorAll(".screen-pill[data-screen]");

  screenPills.forEach(pill => {
    pill.addEventListener("click", () => {
      const targetScreen = pill.getAttribute("data-screen");
      navigateToScreen(targetScreen);
    });
  });

  // Header quick profile navigation shortcut
  const profileShortcut = document.getElementById("btn-header-profile");
  if (profileShortcut) {
    profileShortcut.addEventListener("click", () => {
      navigateToScreen("profile");
    });
  }

  // Simulator vs Slide Deck toggles
  document.getElementById("btn-show-simulator").addEventListener("click", () => {
    showSimulatorView();
  });
  document.getElementById("btn-show-slides").addEventListener("click", () => {
    showSlidesView();
  });
  document.getElementById("btn-close-deck").addEventListener("click", () => {
    showSimulatorView();
  });

  const specsBtn = document.getElementById("btn-show-specs");
  if (specsBtn) {
    specsBtn.addEventListener("click", () => {
      openScreenSpecsCard();
    });
  }

  // Screen Back arrows navigates to Twins
  document.querySelectorAll(".back-to-twins").forEach(btn => {
    btn.addEventListener("click", () => {
      navigateToScreen('twins');
    });
  });
}

function showSimulatorView() {
  document.getElementById("btn-show-simulator").classList.add("active");
  document.getElementById("btn-show-slides").classList.remove("active");

  document.getElementById("simulator-container").style.display = "flex";
  document.getElementById("presentation-deck-container").classList.remove("active");
}

function showSlidesView() {
  document.getElementById("btn-show-simulator").classList.remove("active");
  document.getElementById("btn-show-slides").classList.add("active");

  document.getElementById("simulator-container").style.display = "none";
  document.getElementById("presentation-deck-container").classList.add("active");

  currentSlide = 0;
  updateSlidesDeckState();
}

function navigateToScreen(screenName) {
  currentScreen = screenName;

  // Update screen view container classes
  const views = document.querySelectorAll(".screen-view");
  views.forEach(v => v.classList.remove("active"));

  const targetView = document.getElementById(`screen-${screenName}`);
  if (targetView) {
    targetView.classList.add("active");
  }

  // Update sidebar pills
  const pills = document.querySelectorAll(".screen-pill[data-screen]");
  pills.forEach(p => {
    p.classList.remove("active");
    if (p.getAttribute("data-screen") === screenName) {
      p.classList.add("active");
    }
  });

  // Run screen specific layout updates
  if (screenName === 'maturity') {
    animateMaturityScorebars();
    setupMaturityGraph();
    resetNodeDetails();
  } else if (screenName === 'twins' && activeFilter === 'Route') {
    setTimeout(initRouteMap, 50);
  } else if (screenName === 'remediation') {
    const sel = document.getElementById("react-agent-selector");
    if (sel) updateRemediationScreenForAgent(sel.value);
  }
}

// Action Feed Filtering & Card Render
function setupFilterBar() {
  const cards = document.querySelectorAll(".status-card");
  cards.forEach(card => {
    card.addEventListener("click", () => {
      cards.forEach(c => c.classList.remove("selected"));
      card.classList.add("selected");

      activeFilter = card.getAttribute("data-filter");
      renderActionFeed();
    });
  });
}

function renderActionFeed() {
  const container = document.getElementById("action-cards-feed");
  if (!container) return;
  container.innerHTML = "";

  // Filter mock actions
  const filtered = mockActions.filter(act => act.category === activeFilter);

  // Update priority counter label
  const criticalCount = filtered.filter(act => act.priority === 'Critical' || act.priority === 'High').length;
  document.getElementById("priority-count-label").innerText = `${criticalCount} CRITICAL`;

  if (filtered.length === 0) {
    container.innerHTML = `<div style="text-align:center; padding: 32px 16px; color: var(--text-muted); font-size:0.8rem;">No priority actions queued under ${activeFilter}.</div>`;
    return;
  }

  filtered.forEach(action => {
    const isCritical = action.priority === 'Critical' || action.priority === 'High';
    const tagColor = isCritical ? '#ef4444' : '#fbbf24';
    const iconBg = isCritical ? 'rgba(59, 130, 246, 0.2)' : 'rgba(251, 191, 36, 0.2)';
    const iconColor = isCritical ? '#3b82f6' : '#fbbf24';

    // Choose icon
    let iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="4" width="18" height="16" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`;
    if (action.category === 'Route') {
      iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`;
    } else if (action.category === 'Sentinel') {
      iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`;
    } else if (action.category === 'Finance') {
      iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`;
    } else if (action.category === 'Forge') {
      iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`;
    }

    // Create card element
    const cardEl = document.createElement("div");
    cardEl.className = `action-card-widget ${isCritical ? 'critical-shadow' : ''}`;

    let customWidgetHtml = "";

    if (action.routeCard) {
      const fromLabel = appTranslations[currentLanguage]["route_from"] || "From";
      const toLabel = appTranslations[currentLanguage]["route_to"] || "To";
      const varLabel = appTranslations[currentLanguage]["route_variance"] || "Variance";
      const cargoLabel = appTranslations[currentLanguage]["route_cargo"] || "Cargo";
      const leakLabel = appTranslations[currentLanguage]["route_est_leak"] || "Est. Leak";

      const fromVal = appTranslations[currentLanguage][action.routeCard.fromKey] || action.routeCard.from;
      const toVal = appTranslations[currentLanguage][action.routeCard.toKey] || action.routeCard.to;
      const varVal = appTranslations[currentLanguage][action.routeCard.varianceKey] || action.routeCard.variance;
      const cargoVal = appTranslations[currentLanguage][action.routeCard.cargoKey] || action.routeCard.cargo;
      const leakVal = appTranslations[currentLanguage][action.routeCard.costVarianceKey] || action.routeCard.costVariance;

      customWidgetHtml += `
        <div class="route-twin-widget custom-twin-widget">
          <div class="route-row">
            <div class="route-stop">
              <span class="route-stop-label">${fromLabel}</span>
              <span class="route-stop-val">${fromVal}</span>
            </div>
            <div class="route-line-connector"></div>
            <div class="route-stop" style="text-align:right;">
              <span class="route-stop-label">${toLabel}</span>
              <span class="route-stop-val">${toVal}</span>
            </div>
          </div>
          <div id="osm-map" class="osm-map-container"></div>
          <div class="route-metric-grid">
            <div class="route-metric-grid-cell">
              <span class="route-metric-label">${varLabel}</span>
              <span class="route-metric-val red">${varVal}</span>
            </div>
            <div class="route-metric-grid-cell">
              <span class="route-metric-label">${cargoLabel}</span>
              <span class="route-metric-val">${cargoVal}</span>
            </div>
            <div class="route-metric-grid-cell">
              <span class="route-metric-label">${leakLabel}</span>
              <span class="route-metric-val red">${leakVal}</span>
            </div>
          </div>
        </div>
      `;
    }

    if (action.sentinelCard) {
      customWidgetHtml += `
        <div class="sentinel-twin-widget custom-twin-widget">
          <div class="terminal-header">
            <div class="terminal-dots"><span></span><span></span><span></span></div>
            <span class="terminal-title">SECURITY_TRACE.sh</span>
          </div>
          <div class="terminal-body">
            <div class="term-line"><span class="term-prompt">&gt;</span> trace origin --ip ${action.sentinelCard.originIp}</div>
            <div class="term-output red">[ALERT] Origin match outside corporate perimeter.</div>
            <div class="term-line"><span class="term-prompt">&gt;</span> check target</div>
            <div class="term-output">${action.sentinelCard.targetNode}</div>
            <div class="term-line"><span class="term-prompt">&gt;</span> status</div>
            <div class="term-output green">${action.sentinelCard.actionTaken}</div>
          </div>
          <div class="metric-row">
            <span class="metric-label">THREAT LEVEL</span>
            <span class="metric-val red">${action.sentinelCard.threatLevel}</span>
          </div>
        </div>
      `;
    }

    if (action.forgeCard) {
      customWidgetHtml += `
        <div class="forge-twin-widget custom-twin-widget">
          <div class="forge-comparison-row">
            <div class="forge-supplier current">
              <div class="supplier-title">CURRENT</div>
              <div class="supplier-name">${action.forgeCard.currentSupplier}</div>
              <div class="supplier-metric">Lead Time: <span>${action.forgeCard.currentLeadTime}</span></div>
            </div>
            <div class="forge-vs">VS</div>
            <div class="forge-supplier alternative">
              <div class="supplier-title">METASEARCH FOUND</div>
              <div class="supplier-name">${action.forgeCard.alternativeSupplier}</div>
              <div class="supplier-metric">Lead Time: <span class="green">${action.forgeCard.alternativeLeadTime}</span></div>
            </div>
          </div>
          <div class="forge-metrics-footer">
            <div class="forge-metric">
              <span>PROJECTED SAVINGS</span>
              <strong class="green">${action.forgeCard.costSavings}</strong>
            </div>
            <div class="forge-metric">
              <span>CONFIDENCE</span>
              <strong>${action.forgeCard.confidence}</strong>
            </div>
          </div>
        </div>
      `;
    }

    if (action.complianceCard) {
      customWidgetHtml += `
        <div class="compliance-twin-widget custom-twin-widget">
          <div class="compliance-rule-header">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            <span>POLICY MATCH: ${action.complianceCard.policy}</span>
          </div>
          <div class="compliance-checklist">
            <div class="checklist-item fail">
              <span class="check-icon">✕</span>
              <span>${action.complianceCard.violationType}</span>
            </div>
            <div class="checklist-item warning">
              <span class="check-icon">!</span>
              <span>${action.complianceCard.severity}</span>
            </div>
            <div class="checklist-item success">
              <span class="check-icon">✓</span>
              <span>${action.complianceCard.status}</span>
            </div>
          </div>
        </div>
      `;
    }

    if (action.financeCard) {
      customWidgetHtml += `
        <div class="finance-twin-widget custom-twin-widget">
          <div class="finance-ledger-header">
            <span>INVOICE REF</span>
            <strong>${action.financeCard.invoiceId}</strong>
          </div>
          <div class="finance-ledger-grid">
            <div class="ledger-row">
              <span class="ledger-label">Expected Cost</span>
              <span class="ledger-val">${action.financeCard.expectedCost}</span>
            </div>
            <div class="ledger-row">
              <span class="ledger-label">Billed Cost</span>
              <span class="ledger-val red">${action.financeCard.billedCost}</span>
            </div>
            <div class="ledger-row highlight">
              <span class="ledger-label">Disputed Variance</span>
              <span class="ledger-val red">${action.financeCard.variance}</span>
            </div>
          </div>
          <div class="finance-dispute-reason">
            CODE: <span>${action.financeCard.disputedCode}</span>
          </div>
        </div>
      `;
    }

    if (action.operationsCard) {
      customWidgetHtml += `
        <div class="operations-twin-widget custom-twin-widget">
          <div class="telemetry-header">
            <span>${action.operationsCard.sensorId}</span>
            <span class="telemetry-badge">${action.operationsCard.metric}</span>
          </div>
          <div class="telemetry-graph-mock">
            <svg viewBox="0 0 100 30" class="telemetry-sparkline">
              <path d="M0,15 Q10,10 20,15 T40,15 T60,25 T80,28 L100,29" fill="none" stroke="var(--color-operations)" stroke-width="2"/>
              <line x1="0" y1="25" x2="100" y2="25" stroke="rgba(239, 68, 68, 0.5)" stroke-width="1" stroke-dasharray="2,2"/>
              <circle cx="80" cy="28" r="2" fill="#ef4444" />
            </svg>
          </div>
          <div class="telemetry-metrics">
            <div class="t-metric">
              <span>THRESHOLD</span>
              <strong>${action.operationsCard.threshold}</strong>
            </div>
            <div class="t-metric">
              <span>CURRENT</span>
              <strong class="red">${action.operationsCard.currentValue}</strong>
            </div>
            <div class="t-metric">
              <span>FORECAST</span>
              <strong class="yellow">${action.operationsCard.forecast}</strong>
            </div>
          </div>
        </div>
      `;
    }

    // Call operations row
    let callRowHtml = "";
    if (action.category === 'Route' || action.category === 'Finance' || action.category === 'Forge') {
      let buttonLabel = appTranslations[currentLanguage]["call_carrier"] || "Voice Call Carrier";
      if (action.category === 'Finance') buttonLabel = appTranslations[currentLanguage]["call_finance"] || "Initiate Claims Call";
      if (action.category === 'Forge') buttonLabel = appTranslations[currentLanguage]["call_supplier"] || "Call Supplier Agent";

      callRowHtml = `
        <div class="action-card-call-row">
          <button class="action-call-btn" onclick="event.stopPropagation(); startVoiceCall('${action.id}', '${action.category}')">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span>${buttonLabel}</span>
          </button>
        </div>
      `;
    }

    let contactRowHtml = "";
    if (action.contactName) {
      contactRowHtml = `
        <!-- Contact Association Badge -->
        <div class="action-card-contact-association" style="display: flex; align-items: center; gap: 8px; margin-top: 14px; padding: 8px 12px; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 8px; font-size: 0.75rem;" onclick="event.stopPropagation();">
          <div style="display:flex; align-items:center; justify-content:center; width:22px; height:22px; border-radius:50%; background:rgba(236, 91, 19, 0.15); border:1px solid rgba(236, 91, 19, 0.30); color:var(--accent-orange-light); font-weight:800; font-size:0.65rem;">
            👤
          </div>
          <div style="display:flex; flex-direction:column; gap:2px; text-align: left;">
            <span style="font-weight:600; color:#fff;">${action.contactName}</span>
            <span style="font-size:0.65rem; color:var(--text-muted); font-family:var(--font-mono);">${action.contactPhone || ''}</span>
          </div>
          <div style="margin-left:auto; display:flex; gap:6px;">
            <button class="draft-card-button" style="margin:0; font-size:0.65rem; padding:4px 8px; border-color:rgba(37,211,102,0.3); color:#25D366; background:rgba(37,211,102,0.08); display:flex; align-items:center; gap:4px; cursor:pointer;" onclick="event.stopPropagation(); startVoiceCall('${action.id}', '${action.category}', 'whatsapp')">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              Chat
            </button>
          </div>
        </div>
      `;
    }

    const titleText = appTranslations[currentLanguage][action.titleKey] || action.title;
    const descText = appTranslations[currentLanguage][action.descKey] || action.description;
    const sourceText = appTranslations[currentLanguage][action.sourceKey] || action.source;
    const impactText = appTranslations[currentLanguage][action.impactKey] || action.impact;

    cardEl.innerHTML = `
      <div class="action-card-header">
        <div class="action-card-label-row">
          ${action.ai_generated ? '<span class="ai-star-icon">✨ ISO 42001 AI TWIN</span>' : '<span>RULE MATCH</span>'}
        </div>
        <span class="action-card-priority-badge" style="background-color:${tagColor};">${action.priority.toUpperCase()}</span>
      </div>
      <div class="action-card-body" onclick="navigateAction('${action.id}')">
        <div class="action-card-main-row">
          <div class="action-card-icon-container" style="background-color:${iconBg}; color:${iconColor};">
            ${iconSvg}
          </div>
          <div class="action-card-content-area">
            <h4 class="action-card-title">${titleText}</h4>
            <p class="action-card-desc">${descText}</p>
          </div>
        </div>
        ${customWidgetHtml}
        ${callRowHtml}
        ${contactRowHtml}
      </div>
      <div class="action-card-footer">
        <div class="action-card-source">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="22" y2="7"/><line x1="2" y1="17" x2="22" y2="17"/></svg>
          <span>${sourceText}</span>
        </div>
        <span class="action-card-impact-highlight">${impactText}</span>
      </div>
    `;

    container.appendChild(cardEl);
  });

  // Draw Leaflet map if Route is active
  if (activeFilter === 'Route') {
    setTimeout(initRouteMap, 100);
  }
}

// OpenStreetMap routing drawing via Leaflet
function initRouteMap() {
  const mapContainer = document.getElementById("osm-map");
  if (!mapContainer) return;

  if (window.routeMap) {
    window.routeMap.remove();
  }

  // Houston Area logistics coordinates
  const map = L.map('osm-map', {
    zoomControl: false,
    attributionControl: false
  }).setView([29.7604, -95.3698], 10);
  window.routeMap = map;

  // Elegant Dark-matter tiles that match the Obsidian Ember layout perfectly
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 20
  }).addTo(map);

  const depot = [29.8100, -95.4500];
  const port = [29.7100, -95.2600];

  const depotMarkerIcon = L.divIcon({
    className: 'custom-map-marker',
    html: '<div style="background-color:#A855F7; width:12px; height:12px; border-radius:50%; border:2px solid #fff; box-shadow:0 0 10px #A855F7;"></div>',
    iconSize: [12, 12]
  });

  const portMarkerIcon = L.divIcon({
    className: 'custom-map-marker',
    html: '<div style="background-color:#EC5B13; width:12px; height:12px; border-radius:50%; border:2px solid #fff; box-shadow:0 0 10px #EC5B13;"></div>',
    iconSize: [12, 12]
  });

  L.marker(depot, {icon: depotMarkerIcon}).addTo(map);
  L.marker(port, {icon: portMarkerIcon}).addTo(map);

  // Optimized empty last-mile delivery leg path representation (dashed)
  const emptyLegPoints = [
    depot,
    [29.8000, -95.3800],
    [29.7600, -95.3300],
    [29.7400, -95.3000],
    port
  ];

  const routeLine = L.polyline(emptyLegPoints, {
    color: '#EC5B13',
    weight: 4,
    opacity: 0.85,
    dashArray: '8, 12'
  }).addTo(map);

  map.fitBounds(routeLine.getBounds(), { padding: [30, 30] });
}

function navigateAction(actionId) {
  const action = mockActions.find(a => a.id === actionId);
  if (!action) return;

  const path = action.path;
  const category = action.category;

  if (path === '/remediation') {
    navigateToScreen('remediation');
    const sel = document.getElementById("react-agent-selector");
    if (sel && category) {
      if (category === 'Sentinel' || category === 'Compliance') {
        sel.value = 'Sentinel';
      } else if (category === 'Route') {
        sel.value = 'Route';
      } else if (category === 'Finance') {
        sel.value = 'Finance';
      }
      updateRemediationScreenForAgent(sel.value);
    }

    // Inject dynamic data for remediation
    const titleText = appTranslations[currentLanguage][action.titleKey] || action.title;
    const descText = appTranslations[currentLanguage][action.descKey] || action.description;
    const impactText = appTranslations[currentLanguage][action.impactKey] || action.impact;

    const remTitle = document.querySelector("#screen-remediation .screen-header-title");
    const remSub = document.querySelector("#screen-remediation .screen-header-subtitle");
    if(remTitle) remTitle.innerHTML = titleText;
    if(remSub) remSub.innerHTML = `CASE ID: ${action.id} - ${category.toUpperCase()}`;

    const remContentTitle = document.getElementById("remediation-title");
    const remSource = document.getElementById("remediation-source-highlight");
    if(remContentTitle) remContentTitle.innerHTML = descText;
    if(remSource) remSource.innerHTML = impactText;

  } else if (path === '/artifact') {
    navigateToScreen('artifact');

    // Inject dynamic data for artifact
    const titleText = appTranslations[currentLanguage][action.titleKey] || action.title;
    const descText = appTranslations[currentLanguage][action.descKey] || action.description;

    const artTitle = document.querySelector("#screen-artifact .screen-header-title");
    const artSub = document.querySelector("#screen-artifact .screen-header-subtitle");
    if(artTitle) artTitle.innerHTML = titleText;
    if(artSub) artSub.innerHTML = `DECISION ARTIFACT ${action.id}`;

    const probText = document.querySelector("#screen-artifact .ai-prob-text");
    if(probText) probText.innerHTML = descText;

    const titleBox = document.querySelector("#screen-artifact .draft-card-title");
    const subTitleBox = document.querySelector("#screen-artifact .draft-card-subtitle");
    if(titleBox) titleBox.innerHTML = titleText;
    if(subTitleBox) subTitleBox.innerHTML = `Category: ${category}`;
  }
}

// Reset inspector state in Maturity screen
function resetNodeDetails() {
  const detailsEmpty = document.getElementById("node-details-empty");
  const detailsContent = document.getElementById("node-details-content");
  if (detailsEmpty && detailsContent) {
    detailsEmpty.style.display = "block";
    detailsContent.style.display = "none";
  }
}

// Maturity screen logic & Node graph SVG drawing
function setupMaturityGraph() {
  const svg = document.getElementById("node-graph-svg");
  if (!svg) return;
  svg.innerHTML = "";

  // Draw edges first (under nodes)
  graphEdges.forEach(edge => {
    const src = graphNodes.find(n => n.id === edge.source);
    const tgt = graphNodes.find(n => n.id === edge.target);

    if (src && tgt) {
      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", src.x);
      line.setAttribute("y1", src.y);
      line.setAttribute("x2", tgt.x);
      line.setAttribute("y2", tgt.y);
      line.setAttribute("class", "graph-edge");
      svg.appendChild(line);
    }
  });

  // Draw nodes
  graphNodes.forEach(node => {
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");

    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", node.x);
    circle.setAttribute("cy", node.y);
    circle.setAttribute("r", 12);
    circle.setAttribute("class", `graph-node-circle ${node.active ? 'active' : ''}`);
    circle.addEventListener("click", () => {
      // Toggle node active state
      graphNodes.forEach(n => n.active = false);
      node.active = true;
      setupMaturityGraph();
      triggerScoreboardFlicker();

      // Load details into inspector card
      showNodeDetails(node.id);
    });
    group.appendChild(circle);

    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", node.x);
    text.setAttribute("y", node.y + 24);
    text.setAttribute("class", "graph-node-label");
    text.textContent = node.id;
    group.appendChild(text);

    svg.appendChild(group);
  });
}

function showNodeDetails(nodeId) {
  const detailsEmpty = document.getElementById("node-details-empty");
  const detailsContent = document.getElementById("node-details-content");
  const title = document.getElementById("node-detail-title");
  const endpoint = document.getElementById("node-detail-endpoint");
  const sync = document.getElementById("node-detail-sync");
  const rows = document.getElementById("node-detail-rows");
  const time = document.getElementById("node-detail-time");
  const schema = document.getElementById("node-detail-schema");

  if (!detailsEmpty || !detailsContent || !title || !endpoint || !sync || !rows || !time || !schema) return;

  const data = nodeMetadata[nodeId];
  if (!data) return;

  detailsEmpty.style.display = "none";
  detailsContent.style.display = "flex";

  title.innerText = nodeId;
  endpoint.innerText = data.endpoint;
  sync.innerText = data.syncKeys ? (data.syncKeys[currentLanguage] || data.syncKeys['English']) : data.sync;
  rows.innerText = data.rowsKeys ? (data.rowsKeys[currentLanguage] || data.rowsKeys['English']) : data.rows;
  time.innerText = data.timeKeys ? (data.timeKeys[currentLanguage] || data.timeKeys['English']) : data.time;
  schema.innerText = data.schema;
}

function triggerScoreboardFlicker() {
  const scores = document.querySelectorAll("#maturity-scores .scorecard-num");
  scores.forEach(score => {
    const original = score.innerText;
    score.style.opacity = "0.4";
    setTimeout(() => {
      const val = parseInt(original);
      const diff = Math.floor(Math.random() * 5) - 2;
      score.innerText = Math.min(100, Math.max(70, val + diff)) + "%";
      score.style.opacity = "1";
    }, 200);
  });
}

function animateMaturityScorebars() {
  const scorecards = document.querySelectorAll("#maturity-scores .scorecard-num");
  const targets = [92, 85, 94];

  scorecards.forEach((card, idx) => {
    let current = 0;
    const interval = setInterval(() => {
      if (current < targets[idx]) {
        current += 3;
        card.innerText = Math.min(targets[idx], current) + "%";
      } else {
        clearInterval(interval);
      }
    }, 20);
  });
}

// Incidents list rendering
function renderIncidentsList() {
  const container = document.getElementById("incidents-scroll-list");
  if (!container) return;
  container.innerHTML = "";

  const mockIncidents = [
    { title: "Multi-Object Semantic Drift", desc: "Predictive Model v4.1 drift exceeds 14% on FleetTelemetry_Live ingestion. Recommended action: Rollback to v3.8 and initiate XGBoost retraining.", level: "Critical", color: "#EF4444" },
    { title: "Hazardous Documentation Missing", desc: "Cargo Manifest #BOL-9921 cross-validation failure. hazmat_flag is true, but corresponding Safety Data Sheet document is missing from the Customs Registry link.", level: "Critical", color: "#EF4444" },
    { title: "Cold Chain Perishable Risk", desc: "WarehouseSensor_ZoneB detected ambient temp > 4°C for 45 mins. CargoManifests indicate $42k of perishable pharmaceuticals at immediate spoilage risk.", level: "High", color: "#EC5B13" },
    { title: "Inefficient Rerouting Metric", desc: "RouteOptimization algorithm bypassed toll roads on Route #88B, resulting in a net-negative impact: 12% increase in diesel consumption and high SLA breach risk.", level: "Medium", color: "#fbbf24" }
  ];

  mockIncidents.forEach(inc => {
    const card = document.createElement("div");
    card.className = "incident-badge-card";
    card.style.borderColor = `${inc.color}40`; // 25% alpha

    card.innerHTML = `
      <div class="incident-card-top">
        <span class="incident-card-badge" style="background-color:${inc.color}20; border: 1.5px solid ${inc.color}40; color:${inc.color};">${inc.level.toUpperCase()}</span>
      </div>
      <div>
        <h4 class="incident-card-title">${inc.title}</h4>
        <p class="incident-card-desc">${inc.desc}</p>
      </div>
      <button class="incident-remediation-link" style="color:${inc.color};" onclick="navigateToScreen('remediation')">
        View Remediation
      </button>
    `;
    container.appendChild(card);
  });
}

// Fetch Center Carousel
function setupFetchCenterCarousel() {
  const container = document.getElementById("value-driver-carousel");
  const dotsContainer = document.getElementById("carousel-dots");
  if (!container) return;

  container.innerHTML = "";
  carouselInsights.forEach((insight, idx) => {
    const card = document.createElement("div");
    card.className = "carousel-slide-card";
    card.style.display = idx === 0 ? "flex" : "none";

    card.innerHTML = `
      <div class="carousel-card-header">
        <span class="value-driver-badge">
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="m13 2-2 10h9L9 22l2-10H2L13 2z"/></svg>
          VALUE DRIVER #0${idx + 1}
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--text-muted);"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
      </div>
      <p class="carousel-card-text">"${insight}"</p>
      <div class="carousel-card-action-row" onclick="alert('Calculating real-time ROI impact on database pointer latency... Ready.')">
        <span>Calculate ROI Impact</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      </div>
    `;
    container.appendChild(card);
  });

  // Handle dot clicks
  const dots = dotsContainer.querySelectorAll(".carousel-indicator-dot");
  dots.forEach((dot, dotIdx) => {
    dot.addEventListener("click", () => {
      dots.forEach(d => d.classList.remove("active"));
      dot.classList.add("active");

      const cards = container.querySelectorAll(".carousel-slide-card");
      cards.forEach((c, cIdx) => {
        c.style.display = cIdx === dotIdx ? "flex" : "none";
      });

      carouselIndex = dotIdx;
    });
  });

  // Simple auto-rotate every 5 seconds
  setInterval(() => {
    if (fetchActive) return;
    carouselIndex = (carouselIndex + 1) % carouselInsights.length;
    if (dots[carouselIndex]) {
      dots[carouselIndex].click();
    }
  }, 5000);
}

// In-App approvals and Toast messages
function showToast(text, isSuccess = true) {
  const toast = document.getElementById("toast-sim");
  const toastText = document.getElementById("toast-sim-text");
  if (!toast || !toastText) return;

  toastText.innerText = text;
  toast.className = `toast-simulator ${isSuccess ? 'toast-simulator-success' : ''}`;
  toast.style.display = "flex";

  setTimeout(() => {
    closeToast();
  }, 3500);
}

function closeToast() {
  const toast = document.getElementById("toast-sim");
  if (toast) toast.style.display = "none";
}

function setupInteractiveWorkflowActions() {
  // Decision Artifact - Approve All button
  document.getElementById("btn-approve-artifact").addEventListener("click", () => {
    const btn = document.getElementById("btn-approve-artifact");
    btn.innerText = "Reconciling state...";
    btn.disabled = true;

    setTimeout(() => {
      const valText = document.getElementById("cockpit-impact-value");
      if (valText) valText.innerText = "355,300";

      const targetIdx = mockActions.findIndex(act => act.id === "AI-105");
      if (targetIdx !== -1) mockActions.splice(targetIdx, 1);
      renderActionFeed();

      showToast("Artifact approvals committed. Transmitted weight adjustment invoice to broker (secure logs saved).");
      navigateToScreen('twins');
      btn.innerText = "Approve All Actions";
      btn.disabled = false;
    }, 1200);
  });

  // Remediation Workflow - Dispatch SOP
  document.getElementById("btn-dispatch-remediation").addEventListener("click", () => {
    runReactAgentLoop();
  });

  const reactSelector = document.getElementById("react-agent-selector");
  if (reactSelector) {
    reactSelector.addEventListener("change", (e) => {
      updateRemediationScreenForAgent(e.target.value);
    });
  }

  const btnReactAbort = document.getElementById("btn-react-abort");
  if (btnReactAbort) {
    btnReactAbort.addEventListener("click", () => {
      if (reactLoopTimer) clearTimeout(reactLoopTimer);
      const overlay = document.getElementById("react-console-overlay");
      if (overlay) overlay.style.display = "none";
      showToast(currentLanguage === 'Portuguese' ? "Execução do loop ReAct abortada." : "ReAct agentic loop execution aborted.");
    });
  }

  const btnReactResolve = document.getElementById("btn-react-resolve");
  if (btnReactResolve) {
    btnReactResolve.addEventListener("click", () => {
      const overlay = document.getElementById("react-console-overlay");
      if (overlay) overlay.style.display = "none";

      const sel = document.getElementById("react-agent-selector");
      const activeAgent = sel ? sel.value : "Sentinel";

      let targetActionId = "";
      let successMsg = "";
      let finalImpactValue = "342,850";

      if (activeAgent === "Sentinel") {
        targetActionId = "RULE-201";
        successMsg = currentLanguage === 'Portuguese' ? "SOP de remediação de mascaramento aplicado com sucesso!" : "Security masking SOP successfully applied to Customer Profile Registry.";
        finalImpactValue = "342,850";
      } else if (activeAgent === "Route") {
        targetActionId = "AI-105";
        successMsg = currentLanguage === 'Portuguese' ? "Rota otimizada despachada com sucesso ao motorista!" : "Route optimization backhaul dispatched successfully.";
        finalImpactValue = "330,400";
      } else if (activeAgent === "Finance") {
        targetActionId = "AI-109";
        successMsg = currentLanguage === 'Portuguese' ? "Contestação de demurrage submetida e reembolso registrado!" : "Customs demurrage dispute filed and credit ledger updated.";
        finalImpactValue = "324,650";
      }

      const targetIdx = mockActions.findIndex(act => act.id === targetActionId);
      if (targetIdx !== -1) {
        mockActions.splice(targetIdx, 1);
      }
      renderActionFeed();

      const valText = document.getElementById("cockpit-impact-value");
      if (valText) valText.innerText = finalImpactValue;

      // Add channel preferences suffix to message
      const sendEmail = document.getElementById("pref-channel-email") ? document.getElementById("pref-channel-email").checked : true;
      const sendWhatsApp = document.getElementById("pref-channel-whatsapp") ? document.getElementById("pref-channel-whatsapp").checked : true;

      let dispatchChannelsText = "";
      if (sendEmail && sendWhatsApp) {
        dispatchChannelsText = currentLanguage === 'Portuguese' ? " (Despachado via Email e WhatsApp)" : " (Dispatched via Email & WhatsApp)";
      } else if (sendEmail) {
        dispatchChannelsText = currentLanguage === 'Portuguese' ? " (Despachado via Email)" : " (Dispatched via Email)";
      } else if (sendWhatsApp) {
        dispatchChannelsText = currentLanguage === 'Portuguese' ? " (Despachado via WhatsApp)" : " (Dispatched via WhatsApp)";
      } else {
        dispatchChannelsText = currentLanguage === 'Portuguese' ? " (Concluído localmente)" : " (Completed locally)";
      }
      successMsg += dispatchChannelsText;

      showToast(successMsg);
      navigateToScreen('twins');
    });
  }

  // Fetch button trigger from sidebar
  document.getElementById("btn-trigger-fetch").addEventListener("click", () => {
    navigateToScreen('fetch');
    setTimeout(() => {
      triggerFetchProcessingSimulator();
    }, 450);
  });

  // Fetch screen send button
  document.getElementById("btn-submit-fetch").addEventListener("click", () => {
    const input = document.getElementById("fetch-search-input");
    if (input && input.value.trim() !== "") {
      input.value = "";
      triggerFetchProcessingSimulator();
    }
  });

  document.getElementById("fetch-search-input").addEventListener("keydown", (e) => {
    if (e.key === 'Enter') {
      document.getElementById("btn-submit-fetch").click();
    }
  });

  // Cancel simulator overlay
  document.getElementById("btn-cancel-fetch-sim").addEventListener("click", () => {
    fetchActive = false;
    clearInterval(fetchInterval);
    document.getElementById("fetch-pipeline-overlay").style.display = "none";
  });
}

// 8-stage Fetch Pipeline Overlay Simulator
function triggerFetchProcessingSimulator() {
  if (fetchActive) return;
  fetchActive = true;
  fetchStep = 1;

  const overlay = document.getElementById("fetch-pipeline-overlay");
  const consoleEl = document.getElementById("sim-console-text");
  const toonEl = document.getElementById("sim-toon-text");

  overlay.style.display = "flex";
  consoleEl.innerHTML = "";
  toonEl.innerHTML = "";

  runNextFetchStepSimulator();
}

function runNextFetchStepSimulator() {
  if (!fetchActive) return;
  if (fetchStep > 8) {
    fetchActive = false;
    showToast("Ingestion run complete. Swarm compiled and pushed to Twin Cockpit.", true);

    const historyList = document.getElementById("execution-history-list");
    const item = document.createElement("div");
    item.className = "list-item-wrapper";
    item.style.backgroundColor = "rgba(34, 197, 94, 0.05)";
    item.innerHTML = `
      <div class="list-item-title" style="color:#22C55E;">Intelligent Swarm Audit Run - SUCCESS</div>
      <div class="list-item-time">Just Now</div>
    `;
    if (historyList) historyList.insertBefore(item, historyList.firstChild);

    setTimeout(() => {
      document.getElementById("fetch-pipeline-overlay").style.display = "none";
    }, 1000);
    return;
  }

  document.getElementById("sim-running-step-label").innerText = `Step ${fetchStep}/8`;

  const stepInfo = fetchStepDetails[fetchStep];
  document.getElementById("sim-running-step-title").innerText = stepInfo.title;
  document.getElementById("sim-running-step-desc").innerText = stepInfo.desc;

  const consoleEl = document.getElementById("sim-console-text");
  const toonEl = document.getElementById("sim-toon-text");

  consoleEl.innerHTML += `--- RUNNING: ${stepInfo.title.toUpperCase()} ---\n`;
  let logIdx = 0;

  function printLogLine() {
    if (!fetchActive) return;
    if (logIdx < stepInfo.logs.length) {
      consoleEl.innerHTML += stepInfo.logs[logIdx] + "\n";
      consoleEl.scrollTop = consoleEl.scrollHeight;
      logIdx++;
      setTimeout(printLogLine, 300);
    } else {
      toonEl.innerHTML += `// TOON Output Step ${fetchStep}\n${stepInfo.toon}\n\n`;
      toonEl.scrollTop = toonEl.scrollHeight;

      setTimeout(() => {
        fetchStep++;
        runNextFetchStepSimulator();
      }, 700);
    }
  }

  printLogLine();
}

// VoIP Call, Microphone voice, and Camera scanner logic
function setupVoiceAndCameraSimulators() {
  // Voice recording triggers
  const micBtn = document.getElementById("btn-fetch-mic");
  const micOverlay = document.getElementById("mic-record-overlay");
  const cancelMicBtn = document.getElementById("btn-cancel-mic");
  const micStatus = document.getElementById("mic-status-text");
  const searchInput = document.getElementById("fetch-search-input");

  micBtn.addEventListener("click", () => {
    micOverlay.style.display = "flex";
    micStatus.innerText = "Listening to voice input...";

    // Waveform simulation
    const bars = document.querySelectorAll(".mic-bar");
    micAnimInterval = setInterval(() => {
      bars.forEach(bar => {
        const height = Math.floor(Math.random() * 45) + 10;
        bar.style.height = `${height}px`;
      });
    }, 150);

    // After 2.5 seconds, output speech command
    setTimeout(() => {
      if (micOverlay.style.display === "flex") {
        clearInterval(micAnimInterval);
        micStatus.innerText = "Whisper speech-to-text compiled.";
        searchInput.value = "Analyze container demurrage invoice #INV-908B and fetch active claims.";

        setTimeout(() => {
          micOverlay.style.display = "none";
          showToast("Voice command recognized via Whisper GGUF locally.");
          triggerFetchProcessingSimulator();
        }, 800);
      }
    }, 2800);
  });

  cancelMicBtn.addEventListener("click", () => {
    clearInterval(micAnimInterval);
    micOverlay.style.display = "none";
  });

  // Camera scan triggers
  const cameraBtn = document.getElementById("btn-fetch-camera");
  const scannerOverlay = document.getElementById("camera-scanner-overlay");
  const closeScannerBtn = document.getElementById("btn-close-scanner");
  const sourceItems = document.querySelectorAll(".scanner-select-item");
  const mockDocImg = document.getElementById("mock-doc-image");
  const placeholderText = document.getElementById("scanner-placeholder-text");
  const laser = document.getElementById("scanner-laser");
  const ocrOutput = document.getElementById("scanner-ocr-output");
  const submitOcrBtn = document.getElementById("btn-submit-scanner-ocr");

  cameraBtn.addEventListener("click", () => {
    scannerOverlay.style.display = "flex";
    ocrOutput.innerText = "[Ready] Select a source document on the right panel to initialize scan.";
    placeholderText.style.display = "block";
    mockDocImg.style.display = "none";
    laser.style.display = "none";
    submitOcrBtn.disabled = true;
    sourceItems.forEach(item => item.classList.remove("selected"));
  });

  closeScannerBtn.addEventListener("click", () => {
    scannerOverlay.style.display = "none";
  });

  sourceItems.forEach(item => {
    item.addEventListener("click", () => {
      sourceItems.forEach(i => i.classList.remove("selected"));
      item.classList.add("selected");

      const fileName = item.getAttribute("data-file");
      mockDocImg.src = fileName;
      placeholderText.style.display = "none";
      mockDocImg.style.display = "block";
      laser.style.display = "block";

      ocrOutput.innerText = "[OCR] Scanning document structure...\n[OCR] Processing bounding boxes via Qwen-VL...\n";
      submitOcrBtn.disabled = true;

      // Simulate document scan OCR extraction
      setTimeout(() => {
        laser.style.display = "none";
        if (fileName === 'customs_invoice.png') {
          ocrOutput.innerText = `[DocumentOCR:
  DocType: "CustomsInvoice"
  InvoiceNum: "DEM-INV-7890123"
  HS_Code: "8479.89.97"
  DemurrageFee: 18200.00
  CarrierID: "CAR-908"
  Status: "Unreconciled"
]`;
        } else if (fileName === 'bol_manifest.png') {
          ocrOutput.innerText = `[DocumentOCR:
  DocType: "BillOfLading"
  BOL_Number: "AL-773410"
  WeightVariance: "14.5%"
  DeclaredWeight: "48,500 LBS"
  VerifiedWeight: "41,467 LBS"
  Status: "DiscrepancyFlagged"
]`;
        } else {
          ocrOutput.innerText = `[DocumentOCR:
  DocType: "DatabaseDump"
  TableSource: "customer_gold"
  FieldsExposed: [ "Email", "Phone" ]
  UnmaskedPII: "bob@company.com"
  Severity: "Critical"
]`;
        }
        submitOcrBtn.disabled = false;
      }, 2000);
    });
  });

  submitOcrBtn.addEventListener("click", () => {
    scannerOverlay.style.display = "none";
    const selectedItem = document.querySelector(".scanner-select-item.selected");
    const name = selectedItem ? selectedItem.innerText.trim() : "document";
    searchInput.value = `Audit uploaded parameters: ${name}`;
    showToast("OCR parameters successfully submitted to pipeline input.");
    triggerFetchProcessingSimulator();
  });

  // VoIP call hooks
  const closeCallBtn = document.getElementById("btn-hangup-call");
  const resolveCallBtn = document.getElementById("btn-resolve-call");
  const muteCallBtn = document.getElementById("btn-mute-call");

  closeCallBtn.addEventListener("click", () => {
    hangUpVoiceCall();
  });

  resolveCallBtn.addEventListener("click", () => {
    resolveVoiceCallAction();
  });

  muteCallBtn.addEventListener("click", () => {
    voipMuted = !voipMuted;
    muteCallBtn.innerText = voipMuted ? "🔇" : "🎙️";
    muteCallBtn.style.backgroundColor = voipMuted ? "rgba(239, 68, 68, 0.2)" : "var(--surface-highlight)";
  });
}

// VoIP Call triggers
function startVoiceCall(actionId, category, callType = 'regular') {
  currentVoipActionId = actionId;
  currentVoipCategory = category;

  const voipOverlay = document.getElementById("voip-call-overlay");
  const callerName = document.getElementById("voip-caller-name");
  const avatar = document.getElementById("voip-avatar");
  const timerLabel = document.getElementById("voip-call-timer");
  const transcriptBox = document.getElementById("voip-transcript");

  // Toggle WhatsApp call styling wrapper class
  if (callType === 'whatsapp') {
    voipOverlay.classList.add("whatsapp-call");
  } else {
    voipOverlay.classList.remove("whatsapp-call");
  }

  voipOverlay.style.display = "flex";
  timerLabel.innerText = callType === 'whatsapp' ? "Connecting secure WhatsApp stream..." : "Connecting secure stream...";
  transcriptBox.innerHTML = "";
  voipTimerSeconds = 0;
  voipMuted = false;
  document.getElementById("btn-mute-call").innerText = "🎙️";
  document.getElementById("btn-mute-call").style.backgroundColor = "var(--surface-highlight)";

  voipTranscriptTimeouts.forEach(t => clearTimeout(t));
  voipTranscriptTimeouts = [];

  const prefix = callType === 'whatsapp' ? "[WhatsApp] " : "";

  if (category === 'Route') {
    callerName.innerText = prefix + "Logistics Carrier Broker (FL309)";
    avatar.innerText = callType === 'whatsapp' ? "💬" : "🚚";
  } else if (category === 'Finance') {
    callerName.innerText = prefix + "Customs Demurrage Billing Agent";
    avatar.innerText = callType === 'whatsapp' ? "💬" : "🏛️";
  } else if (category === 'Forge') {
    callerName.innerText = prefix + "Supplier Warehouse Dispatch";
    avatar.innerText = callType === 'whatsapp' ? "💬" : "🏭";
  } else if (category === 'Sentinel') {
    callerName.innerText = prefix + "SecOps Security Coordinator";
    avatar.innerText = callType === 'whatsapp' ? "💬" : "🛡️";
  } else {
    callerName.innerText = prefix + "Forensic Carrier Representative";
    avatar.innerText = callType === 'whatsapp' ? "💬" : "📞";
  }

  let ticks = 0;
  voipTimerInterval = setInterval(() => {
    ticks++;
    if (ticks === 2) {
      timerLabel.innerText = callType === 'whatsapp' ? "Ringing (WhatsApp)..." : "Ringing...";
      appendTranscriptLine("System", "Handshaking secure node credentials...");
    } else if (ticks === 4) {
      const modeText = callType === 'whatsapp' ? "WhatsApp Audio" : "Standard Voice";
      timerLabel.innerText = `Connected (${modeText})`;
      appendTranscriptLine("System", callType === 'whatsapp' ? "WhatsApp VoIP connection verified." : "Secure voice connection verified.");

      clearInterval(voipTimerInterval);
      startCallDurationTicker(callType);
      streamVoiceCallTranscript();
    }
  }, 800);
}

function startCallDurationTicker(callType = 'regular') {
  const timerLabel = document.getElementById("voip-call-timer");
  voipTimerSeconds = 0;
  voipTimerInterval = setInterval(() => {
    voipTimerSeconds++;
    let mins = Math.floor(voipTimerSeconds / 60);
    let secs = voipTimerSeconds % 60;
    mins = mins < 10 ? '0' + mins : mins;
    secs = secs < 10 ? '0' + secs : secs;
    const suffix = callType === 'whatsapp' ? 'WhatsApp Secure' : 'Standard Secure';
    timerLabel.innerText = `${mins}:${secs} (${suffix})`;
  }, 1000);
}

function appendTranscriptLine(speaker, message) {
  const transcriptBox = document.getElementById("voip-transcript");
  if (!transcriptBox) return;

  const line = document.createElement("div");
  line.style.marginBottom = "8px";

  if (speaker === 'System') {
    line.innerHTML = `<span style="color:var(--text-muted); font-weight:700;">[SYS]:</span> <span style="color:var(--text-secondary);">${message}</span>`;
  } else if (speaker === 'Voice Agent' || speaker === 'AI Platform') {
    line.innerHTML = `<span class="transcript-speaker">[AI Platform]:</span> <span>${message}</span>`;
  } else {
    line.innerHTML = `<span class="transcript-user">[${speaker}]:</span> <span>${message}</span>`;
  }

  transcriptBox.appendChild(line);
  transcriptBox.scrollTop = transcriptBox.scrollHeight;
}

function streamVoiceCallTranscript() {
  const category = currentVoipCategory;

  if (category === 'Route') {
    queueTranscriptLine("AI Platform", "Initiating route optimization dispute for weight discrepancy on FL309...", 500);
    queueTranscriptLine("Logistics Carrier Broker", "FL309 Broker line. Weight discrepancy of 14.5% is due to returning empty cargo logistics crates, not cargo leakage.", 3500);
    queueTranscriptLine("AI Platform", "Verifying gate scan against BOL details. Reconciling empty leg telemetry...", 7000);
    queueTranscriptLine("Logistics Carrier Broker", "Correct, the empty leg route map is optimized. We consolidated the return crates to Depot A to clear space.", 10000);
    queueTranscriptLine("AI Platform", "Audit parameters matched. Ready to authorize route clearance.", 13000);
  } else if (category === 'Finance') {
    queueTranscriptLine("AI Platform", "Demurrage claims filing for container line #SH-908B, amount $18,200...", 500);
    queueTranscriptLine("Customs Billing Agent", "Customs Agent here. We checked the HS Code entry. Code 8479.89.97 was incorrectly charged. Refund claim is valid.", 3500);
    queueTranscriptLine("AI Platform", "Reconciling overcharge against Customs Registry schema...", 7000);
    queueTranscriptLine("Customs Billing Agent", "We have authorized the fee waiver adjusting the billing. You can approve claims retrieval now.", 10000);
    queueTranscriptLine("AI Platform", "Verification successful. Demurrage invoice refund signed.", 13000);
  } else if (category === 'Forge') {
    queueTranscriptLine("AI Platform", "Checking lock terms for Preemptive Purchase Order PO-112...", 500);
    queueTranscriptLine("Supplier Dispatch", "Hi, Supplier dispatch. We confirm pricing is locked for 24 hours. Inventory buffer stands at 15% safety stock.", 3500);
    queueTranscriptLine("AI Platform", "Acknowledging inflation buffer. Confirming ERP release parameters...", 7000);
    queueTranscriptLine("Supplier Dispatch", "Excellent. Once you sign off, we release empty transport units for final routing immediately.", 10000);
    queueTranscriptLine("AI Platform", "Fulfillment route optimized. Verification completed.", 13000);
  } else if (category === 'Sentinel') {
    queueTranscriptLine("AI Platform", "Initiating SecOps dispatch regarding suspicious login attempt from IP 192.168.4.22...", 500);
    queueTranscriptLine("SecOps Security Coordinator", "SecOps line. We detected the credential match but it was from a recognized remote backup gateway.", 3500);
    queueTranscriptLine("AI Platform", "Verifying gateway signature hash against secure logs...", 7000);
    queueTranscriptLine("SecOps Security Coordinator", "Yes, it matches key runink-user-key-01. You can safely authorize the security bypass.", 10000);
    queueTranscriptLine("AI Platform", "Handshake signature reconciled. Paused fulfillment released.", 13000);
  }
}

function queueTranscriptLine(speaker, text, delay) {
  const t = setTimeout(() => {
    appendTranscriptLine(speaker, text);
  }, delay);
  voipTranscriptTimeouts.push(t);
}

function hangUpVoiceCall() {
  clearInterval(voipTimerInterval);
  voipTranscriptTimeouts.forEach(t => clearTimeout(t));
  document.getElementById("voip-call-overlay").style.display = "none";
  showToast("Voice call disconnected. No changes made.", false);
}

function resolveVoiceCallAction() {
  clearInterval(voipTimerInterval);
  voipTranscriptTimeouts.forEach(t => clearTimeout(t));
  document.getElementById("voip-call-overlay").style.display = "none";

  const targetIdx = mockActions.findIndex(act => act.id === currentVoipActionId);
  if (targetIdx !== -1) {
    const action = mockActions[targetIdx];
    mockActions.splice(targetIdx, 1);
    renderActionFeed();

    const valText = document.getElementById("cockpit-impact-value");
    if (valText) {
      if (action.category === 'Route') {
        valText.innerText = "355,300";
      } else if (action.category === 'Finance') {
        valText.innerText = "361,050";
      } else {
        valText.innerText = "387,850";
      }
    }
    showToast(`Action ${action.id} resolved successfully via voice agent call verification.`);
  }

  navigateToScreen('twins');
}

// Slide Deck Controls
function setupPresentationControls() {
  document.getElementById("btn-slide-prev").addEventListener("click", () => {
    prevPitchSlide();
  });
  document.getElementById("btn-slide-next").addEventListener("click", () => {
    nextPitchSlide();
  });

  window.addEventListener("keydown", (e) => {
    const deck = document.getElementById("presentation-deck-container");
    if (deck && deck.classList.contains("active")) {
      if (e.key === "ArrowRight" || e.key === " ") {
        nextPitchSlide();
      } else if (e.key === "ArrowLeft") {
        prevPitchSlide();
      } else if (e.key === "Escape") {
        showSimulatorView();
      }
    }
  });
}

function nextPitchSlide() {
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
    updateSlidesDeckState();
  }
}

function prevPitchSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlidesDeckState();
  }
}

function updateSlidesDeckState() {
  const slides = document.querySelectorAll(".pitch-slide");
  slides.forEach((slide, index) => {
    slide.classList.remove("active");
    if (index === currentSlide) {
      slide.classList.add("active");
    }
  });

  document.getElementById("slide-page-indicator").innerText = `${currentSlide + 1} of ${totalSlides}`;
  const bar = document.getElementById("slide-page-bar");
  if (bar) bar.style.width = `${((currentSlide + 1) / totalSlides) * 100}%`;
}

// Setup newly added operational control modules
function setupOperationalControls() {
  // 1. Rules Recon range slider value labels
  const ruleSliders = document.querySelectorAll("#screen-rules-recon input[type='range']");
  ruleSliders.forEach(slider => {
    slider.addEventListener("input", () => {
      const valEl = slider.nextElementSibling;
      if (valEl) {
        valEl.innerText = slider.value + (slider.max === "30" || slider.max === "15" ? "%" : "%");
      }
    });
  });

  // Global Rules Re-scan trigger
  const triggerRulesBtn = document.getElementById("btn-trigger-rules-audit");
  if (triggerRulesBtn) {
    triggerRulesBtn.addEventListener("click", () => {
      triggerRulesReconAudit();
    });
  }

  // 2. Hypothesis Lab range sliders
  const hdbscanSlider = document.getElementById("param-hdbscan");
  const prophetSlider = document.getElementById("param-prophet");
  const zscoreSlider = document.getElementById("param-zscore");

  if (hdbscanSlider) {
    hdbscanSlider.addEventListener("input", () => {
      document.getElementById("lbl-param-hdbscan").innerText = hdbscanSlider.value + " items";
    });
  }
  if (prophetSlider) {
    prophetSlider.addEventListener("input", () => {
      document.getElementById("lbl-param-prophet").innerText = (prophetSlider.value / 100).toFixed(2);
    });
  }
  if (zscoreSlider) {
    zscoreSlider.addEventListener("input", () => {
      document.getElementById("lbl-param-zscore").innerText = (zscoreSlider.value / 10).toFixed(1);
    });
  }

  // Hypothesis Lab Training Execution Simulation
  const executeHypothesisBtn = document.getElementById("btn-execute-hypothesis");
  if (executeHypothesisBtn) {
    executeHypothesisBtn.addEventListener("click", () => {
      runHypothesisExperiment();
    });
  }

  // 3. Runner & Connection diagnostics
  const pingConnectionsBtn = document.getElementById("btn-ping-connections");
  if (pingConnectionsBtn) {
    pingConnectionsBtn.addEventListener("click", () => {
      testConnectionPing();
    });
  }
  const pingShortcutHeader = document.getElementById("btn-header-conn-test");
  if (pingShortcutHeader) {
    pingShortcutHeader.addEventListener("click", () => {
      navigateToScreen("runner-conn");
      setTimeout(testConnectionPing, 400);
    });
  }

  // 4. Document-Based Reasoning click listener
  const btnRunDocAudit = document.getElementById("btn-run-doc-audit");
  if (btnRunDocAudit) {
    btnRunDocAudit.addEventListener("click", () => {
      runDocumentReasoningAudit();
    });
  }
}

// Simulated Rules Recon audit scan
function triggerRulesReconAudit() {
  const btn = document.getElementById("btn-trigger-rules-audit");
  if (!btn) return;

  btn.innerText = "Scanning telemetry...";
  btn.disabled = true;

  showToast("Scanning secure transaction logs across active databases...");

  setTimeout(() => {
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg> Force Global Rules Re-scan`;
    btn.disabled = false;
    showToast("Rules audit scan completed. 0 new drift violations found.");
  }, 2200);
}

// Step translations for multi-lingual logging
const auditStepsTranslations = {
  English: {
    step1: "[STEP 1/5] Ingesting binary source file: ",
    step2: "[STEP 2/5] Running local Qwen-VL OCR structured layouts parsing...",
    step3: "[STEP 3/5] Serializing extracted parameters to TOON format:",
    step4: "[STEP 4/5] Loading active compliance policy rule bounds: ",
    step5: "[STEP 5/5] Executing comparative analysis and checking for deviations...",
    calculating: "Comparing extracted metadata values against systems registry...",
    notApplicableTitle: "RULE NOT APPLICABLE",
    notApplicableText: "The validation rule selected is not applicable to the document. Please verify compatibility between the file type and target policy.",
    notApplicableReason: "Mismatch: Selected document is not of type expected by rule.",
    weightVerdictTitle: "COMPLIANCE VIOLATION DETECTED (RULE-04)",
    weightVerdictText: "Weight variance of 14.5% exceeds the configured limit of 5.0%. Declared weight: 48,500 LBS, scale verified weight: 41,467 LBS on carrier shipment #AL-773410.",
    invoiceVerdictTitle: "COMPLIANCE VIOLATION DETECTED (RULE-12)",
    invoiceVerdictText: "Demurrage charges of $18,200.00 exceed the contract cap limit of $15,000.00 for HS Code group 84 (Equipment) on invoice #DEM-INV-7890123.",
    piiVerdictTitle: "CRITICAL SECURITY DRIFT DETECTED (RULE-07)",
    piiVerdictText: "Unmasked database dump contains exposed plaintext customer e-mail fields ('bob@company.com') violating PII encryption and hashing requirements.",
    tempVerdictTitle: "TEMPERATURE EXCURSION FLAGGED (RULE-09)",
    tempVerdictText: "Ingress telemetry log #CC-204 reports cargo compartment average temperature at -12.4°C, violating refrigerated shipment limits (-18.0°C maximum limit). Defrosting cycle ran 4.2h longer than SLA bounds.",
    slaVerdictTitle: "SUPPLIER SLA BREACH FLAGGED (RULE-15)",
    slaVerdictText: "Supplier delivery ledger #SLA-881 logs actual arrival 5 days past due threshold. Penalty clause engaged. Expected: 2026-06-01, Delivered: 2026-06-06.",
    certVerdictTitle: "SECURITY CERTIFICATE EXPIRING (RULE-02)",
    certVerdictText: "Active user security key credential expires soon (2026-06-15). Automatic security renewal failed due to internal network connection timeout.",
    actionRemediate: "Trigger SOP Remediation",
    actionCallWhatsApp: "Call via WhatsApp",
    actionCallRegular: "Call Phone",
    toastRemediationSuccess: "SOP remediation pipeline completed successfully.",
    toastWhatsAppCall: "Initiating WhatsApp VoIP call...",
    toastRegularCall: "Initiating standard audio call..."
  },
  Portuguese: {
    step1: "[PASSO 1/5] Ingerindo arquivo binário de origem: ",
    step2: "[PASSO 2/5] Executando OCR estruturado Qwen-VL local e mapeando layout...",
    step3: "[PASSO 3/5] Serializando metadados extraídos no formato TOON:",
    step4: "[PASSO 4/5] Carregando limites da regra de conformidade ativa: ",
    step5: "[PASSO 5/5] Executando análise comparativa e verificando desvios...",
    calculating: "Comparando valores de metadados extraídos com o registro do sistema...",
    notApplicableTitle: "REGRA NÃO APLICÁVEL",
    notApplicableText: "A regra de validação selecionada não é aplicável a este tipo de documento. Verifique a computibilidade entre o arquivo e a política correspondente.",
    notApplicableReason: "Incompatibilidade: O documento selecionado não é do tipo esperado pela regra.",
    weightVerdictTitle: "VIOLAÇÃO DE CONFORMIDADE DETECTADA (RULE-04)",
    weightVerdictText: "A variância de peso de 14.5% excede o limite configurado de 5.0%. Peso declarado: 48.500 LBS, peso verificado em balança: 41.467 LBS no frete de carga #AL-773410.",
    invoiceVerdictTitle: "VIOLAÇÃO DE CONFORMIDADE DETECTADA (RULE-12)",
    invoiceVerdictText: "A taxa de demurrage de $18.200,00 excede o teto contratual limite de $15.000,00 para o grupo HS Code 84 (Equipamento) na fatura #DEM-INV-7890123.",
    piiVerdictTitle: "DESVIO DE SEGURANÇA CRÍTICO DETECTADO (RULE-07)",
    piiVerdictText: "Dump de banco de dados não mascarado contém campos de e-mail expostos em texto plano ('bob@company.com') violando regras de criptografia e hashing de PII.",
    tempVerdictTitle: "EXCURSÃO DE TEMPERATURA DETECTADA (RULE-09)",
    tempVerdictText: "O log de telemetria #CC-204 registra temperatura média de -12.4°C no compartimento de carga, violando os limites de transporte refrigerado (limite máximo de -18.0°C). O ciclo de descongelamento excedeu em 4.2h o limite do SLA.",
    slaVerdictTitle: "ESTOURO DE SLA DE FORNECEDOR DETECTADO (RULE-15)",
    slaVerdictText: "O livro de entregas #SLA-881 registra chegada real com 5 dias de atraso. Cláusula penal ativada. Esperado: 2026-06-01, Entregue: 2026-06-06.",
    certVerdictTitle: "EXPIRAÇÃO DO CERTIFICADO DE SEGURANÇA PRÓXIMA (RULE-02)",
    certVerdictText: "A credencial da chave de segurança ativa expira em breve (2026-06-15). A renovação de segurança automática falhou devido a tempo limite de conexão de rede interna.",
    actionRemediate: "Disparar SOP de Remediação",
    actionCallWhatsApp: "Ligar via WhatsApp",
    actionCallRegular: "Ligar Regular",
    toastRemediationSuccess: "Pipeline de remediação SOP concluído com sucesso.",
    toastWhatsAppCall: "Iniciando ligação VoIP do WhatsApp...",
    toastRegularCall: "Iniciando ligação de áudio padrão..."
  },
  Spanish: {
    step1: "[PASO 1/5] Ingestionando archivo de origen binario: ",
    step2: "[PASO 2/5] Ejecutando OCR de diseño estructurado Qwen-VL local...",
    step3: "[PASSO 3/5] Serializando parámetros extraídos al formato TOON:",
    step4: "[PASO 4/5] Cargando límites activos de la política de cumplimiento: ",
    step5: "[PASO 5/5] Ejecutando análisis comparativo y buscando desviaciones...",
    calculating: "Comparando valores de metadados extraídos con el registro del sistema...",
    notApplicableTitle: "REGLA NO APLICABLE",
    notApplicableText: "La regla de validación seleccionada no es aplicable a este documento. Verifique la compatibilidad entre el tipo de archivo y la regla de destino.",
    notApplicableReason: "Incompatibilidad: El documento no coincide con el tipo esperado.",
    weightVerdictTitle: "VIOLACIÓN DE CUMPLIMIENTO DETECTADA (RULE-04)",
    weightVerdictText: "La variación de peso de 14.5% supera el límite de 5.0%. Peso declarado: 48,500 LBS, peso verificado en báscula: 41,467 LBS en el embarque #AL-773410.",
    invoiceVerdictTitle: "VIOLACIÓN DE CUMPLIMIENTO DETECTADA (RULE-12)",
    invoiceVerdictText: "Los cobros por demerito de $18,200.00 superan el límite máximo contratado de $15,000.00 para la categoría 84 (Equipo) en la factura #DEM-INV-7890123.",
    piiVerdictTitle: "DESVIACIÓN DE SEGURIDAD CRÍTICA DETECTADA (RULE-07)",
    piiVerdictText: "El volcado de base de datos no enmascarado contiene campos de correo electrónico expuestos ('bob@company.com') violando requisitos de hashing y encriptación de PII.",
    tempVerdictTitle: "EXCURSIÓN DE TEMPERATURA DETECTADA (RULE-09)",
    tempVerdictText: "El registro de telemetría #CC-204 reporta una temperatura promedio de -12.4°C en el contenedor de carga, violando el límite de envío refrigerado (-18.0°C máx limit). El ciclo de descongelación duró 4.2h más de lo acordado.",
    slaVerdictTitle: "INCUMPLIMIENTO DE SLA DE PROVEEDOR DETECTADO (RULE-15)",
    slaVerdictText: "El libro de entregas #SLA-881 registra un retraso real de 5 días. Cláusula de penalización aplicada. Esperado: 2026-06-01, Entregado: 2026-06-06.",
    certVerdictTitle: "EXPIRACIÓN DEL CERTIFICADO DE SEGURIDAD PRÓXIMA (RULE-02)",
    certVerdictText: "La credencial de la clave de seguridad activa expira pronto (2026-06-15). La renovación automática de seguridad falló debido a un tiempo de espera de conexión de red interna.",
    actionRemediate: "Ejecutar SOP de Remediación",
    actionCallWhatsApp: "Llamar por WhatsApp",
    actionCallRegular: "Llamar Teléfono",
    toastRemediationSuccess: "Tubería de remediación SOP completada exitosamente.",
    toastWhatsAppCall: "Iniciando llamada VoIP de WhatsApp...",
    toastRegularCall: "Iniciando llamada telefónica estándar..."
  },
  French: {
    step1: "[ÉTAPE 1/5] Ingestion du fichier source binaire : ",
    step2: "[ÉTAPE 2/5] Exécution de l'OCR de mise en page structurée Qwen-VL local...",
    step3: "[ÉTAPE 3/5] Sérialisation des paramètres extraits au format TOON :",
    step4: "[ÉTAPE 4/5] Chargement des limites de la règle de conformité active : ",
    step5: "[ÉTAPE 5/5] Exécution de l'analyse comparative et détection des écarts...",
    calculating: "Comparaison des métadonnées extraites au registre du système...",
    notApplicableTitle: "RÈGLE NON APPLICABLE",
    notApplicableText: "La règle de validation sélectionnée ne s'applique pas à ce document. Veuillez vérifier la compatibilité entre le type de fichier et la règle visée.",
    notApplicableReason: "Incompatibilité : Le document ne correspond pas au type requis par la règle.",
    weightVerdictTitle: "VIOLATION DE CONFORMITÉ DÉTECTÉE (RULE-04)",
    weightVerdictText: "L'écart de poids de 14.5% dépasse la limite de 5.0%. Poids déclaré : 48 500 LBS, poids vérifié sur balance : 41 467 LBS sur le chargement #AL-773410.",
    invoiceVerdictTitle: "VIOLATION DE CONFORMITÉ DÉTECTÉE (RULE-12)",
    invoiceVerdictText: "Les frais de surestaries de $18 200,00 dépassent le plafond contractuel de $15 000,00 pour la catégorie 84 (Équipement) sur la facture #DEM-INV-7890123.",
    piiVerdictTitle: "ÉCART DE SÉCURITÉ CRITIQUE DÉTECTÉ (RULE-07)",
    piiVerdictText: "Le vidage de base de données non masqué contient des e-mails clients en clair ('bob@company.com') violant les exigences de chiffrement et hachage PII.",
    tempVerdictTitle: "EXCURSION DE TEMPÉRATURE SIGNALÉE (RULE-09)",
    tempVerdictText: "Le journal de télémétrie #CC-204 signale une température moyenne de -12.4°C dans le compartiment, violant les limites des cargaisons réfrigérées (limite maximale de -18.0°C). Le cycle de dégivrage a duré 4.2h de plus que la limite SLA.",
    slaVerdictTitle: "RUPTURE SLA FOURNISSEUR DETECTÉE (RULE-15)",
    slaVerdictText: "Le registre de livraison #SLA-881 indique une arrivée réelle avec 5 jours de retard. Clause de pénalité engagée. Prévu: 2026-06-01, Livré: 2026-06-06.",
    certVerdictTitle: "EXPIRATION DU CERTIFICAT DE SÉCURITÉ PROCHE (RULE-02)",
    certVerdictText: "L'empreinte de la clé de sécurité expire prochainement (2026-06-15). Le renouvellement automatique a échoué en raison d'un délai d'attente de connexion au réseau interne.",
    actionRemediate: "Lancer le SOP de Remédiation",
    actionCallWhatsApp: "Appeler via WhatsApp",
    actionCallRegular: "Appeler Téléphone",
    toastRemediationSuccess: "Pipeline de remédiation SOP exécuté avec succès.",
    toastWhatsAppCall: "Lancement de l'appel VoIP WhatsApp...",
    toastRegularCall: "Lancement de l'appel audio standard..."
  }
};

function runDocumentReasoningAudit() {
  const selectedDoc = document.getElementById("select-audit-doc").value;
  const selectedRule = document.getElementById("select-audit-rule").value;
  const logPre = document.getElementById("audit-reasoning-log");
  const spinner = document.getElementById("audit-spinner");
  const verdictBox = document.getElementById("audit-verdict-box");
  const btn = document.getElementById("btn-run-doc-audit");

  if (!logPre || !btn) return;

  btn.disabled = true;
  spinner.style.display = "block";
  verdictBox.style.display = "none";
  logPre.innerText = "";
  logPre.style.color = "#69f0ae";

  const lang = currentLanguage || 'Portuguese';
  const t = auditStepsTranslations[lang] || auditStepsTranslations["Portuguese"];

  // Check rule applicability
  let isApplicable = false;
  if ((selectedDoc === "bol_manifest.png" || selectedDoc === "route_manifest.json") && selectedRule === "rule_weight") isApplicable = true;
  else if ((selectedDoc === "customs_invoice.png" || selectedDoc === "calculate_demurrage.sql" || selectedDoc === "carrier_tariffs.csv") && selectedRule === "rule_demurrage") isApplicable = true;
  else if ((selectedDoc === "pii_leakage.png" || selectedDoc === "data_masking.py") && selectedRule === "rule_pii") isApplicable = true;
  else if ((selectedDoc === "cold_chain_log.png" || selectedDoc === "temperature_control.py") && selectedRule === "rule_temp") isApplicable = true;
  else if (selectedDoc === "sla_ledger.png" && selectedRule === "rule_sla") isApplicable = true;
  else if (selectedDoc === "cert_audit.png" && selectedRule === "rule_cert") isApplicable = true;

  let steps = [];
  if (!isApplicable) {
    steps = [
      `${t.step1}${selectedDoc}`,
      `[OCR] Checking rule alignment...`,
      `[Forensic Judge] ${t.notApplicableReason}`,
      `[Verdict] ${t.notApplicableTitle}`
    ];
  } else {
    // Generate TOON text dynamically depending on file
    let toonText = "";
    let ruleText = "";
    if (selectedDoc === "bol_manifest.png") {
      toonText = `[DocumentOCR:
  DocType: "BillOfLading"
  BOL_Number: "AL-773410"
  DeclaredWeight: 48500 // LBS
  VerifiedWeight: 41467 // LBS
  CarrierID: "CAR-908"
]`;
      ruleText = `[RuleConfig:
  RuleID: "RULE-04"
  Name: "Weight Discrepancy Margin"
  MaxVarianceThreshold: 0.05 // 5% limit
  OnDiscrepancy: "FlagDriftAndAlert"
]`;
    } else if (selectedDoc === "route_manifest.json") {
      toonText = `[JSONNodeParse:
  File: "route_manifest.json"
  ShipmentID: "FL309"
  DeclaredCratesCount: 12
  TareWeight: 4500 // LBS
  CalculatedGrossWeight: 48500 // LBS
  ActualScaleWeight: 41467 // LBS
  VarianceRatio: 0.145
]`;
      ruleText = `[RuleConfig:
  RuleID: "RULE-04"
  Name: "Weight Discrepancy Margin"
  MaxVarianceThreshold: 0.05 // 5% limit
  OnDiscrepancy: "FlagDriftAndAlert"
]`;
    } else if (selectedDoc === "customs_invoice.png") {
      toonText = `[DocumentOCR:
  DocType: "CustomsInvoice"
  InvoiceNum: "DEM-INV-7890123"
  HS_Code: "8479.89.97"
  DemurrageFee: 18200.00 // USD
  CarrierID: "CAR-908"
]`;
      ruleText = `[RuleConfig:
  RuleID: "RULE-12"
  Name: "Customs Demurrage Cap"
  DemurrageLimit: 15000.00 // USD
  TargetHSGroup: "84"
]`;
    } else if (selectedDoc === "calculate_demurrage.sql") {
      toonText = `[SQLQueryParse:
  File: "calculate_demurrage.sql"
  TargetTable: "raw_invoices"
  OverchargeCalculated: 18200.00 // USD
  DemurrageThreshold: 15000.00 // USD
  StatusFlag: "OVER_LIMIT"
]`;
      ruleText = `[RuleConfig:
  RuleID: "RULE-12"
  Name: "Customs Demurrage Cap"
  DemurrageLimit: 15000.00 // USD
  TargetHSGroup: "84"
]`;
    } else if (selectedDoc === "carrier_tariffs.csv") {
      toonText = `[CSVRowParse:
  File: "carrier_tariffs.csv"
  RowsAnalyzed: 14
  MismatchFound: Row #4 (HS Group 84)
  BilledRate: 250.00 // Per Day
  ContractRateLimit: 200.00 // Per Day
  OverchargeTotal: 3200.00 // USD
]`;
      ruleText = `[RuleConfig:
  RuleID: "RULE-12"
  Name: "Customs Demurrage Cap"
  DemurrageLimit: 15000.00 // USD
  TargetHSGroup: "84"
]`;
    } else if (selectedDoc === "pii_leakage.png") {
      toonText = `[DocumentOCR:
  DocType: "DatabaseDump"
  TableSource: "customer_gold"
  FieldsExposed: [ "Email", "Phone" ]
  UnmaskedPII: "bob@company.com"
  Severity: "Critical"
]`;
      ruleText = `[RuleConfig:
  RuleID: "RULE-07"
  Name: "PII Data Masking Policy"
  RequiredHashing: ["Email", "Phone", "SSN"]
  EncryptionStandard: "AES-256-GCM"
]`;
    } else if (selectedDoc === "data_masking.py") {
      toonText = `[PythonASTParse:
  File: "data_masking.py"
  Functions: [ "mask_pii_fields" ]
  ExposedUnhashedVariables: [ "df['email']", "df['phone']" ]
  HashingApplied: null
  ComplianceState: "Failed"
]`;
      ruleText = `[RuleConfig:
  RuleID: "RULE-07"
  Name: "PII Data Masking Policy"
  RequiredHashing: ["Email", "Phone", "SSN"]
  EncryptionStandard: "AES-256-GCM"
]`;
    } else if (selectedDoc === "cold_chain_log.png") {
      toonText = `[DocumentOCR:
  DocType: "TelemetryLog"
  DeviceID: "SEN-402"
  CargoAverageTemp: -12.4 // °C
  AlertLevel: "High"
  DefrostDurationOverrun: 4.2 // Hours
]`;
      ruleText = `[RuleConfig:
  RuleID: "RULE-09"
  Name: "Temperature Threshold Policy"
  MaxAllowedTemp: -18.0 // °C
  MaxDefrostCycle: 1.0 // Hour limit
]`;
    } else if (selectedDoc === "temperature_control.py") {
      toonText = `[PythonASTParse:
  File: "temperature_control.py"
  Functions: [ "verify_container_temperature" ]
  ObservedMeanTemp: -12.4 // °C
  MaxAllowedTempThreshold: -18.0 // °C
  AnomalyCondition: "True"
]`;
      ruleText = `[RuleConfig:
  RuleID: "RULE-09"
  Name: "Temperature Threshold Policy"
  MaxAllowedTemp: -18.0 // °C
  MaxDefrostCycle: 1.0 // Hour limit
]`;
    } else if (selectedDoc === "sla_ledger.png") {
      toonText = `[DocumentOCR:
  DocType: "DeliveryLedger"
  SupplierID: "SUP-301"
  ExpectedArrival: "2026-06-01"
  ActualArrival: "2026-06-06"
  DaysDelayed: 5
  TransitRoute: "P-4_Houston"
]`;
      ruleText = `[RuleConfig:
  RuleID: "RULE-15"
  Name: "Supplier SLA Delivery Timeframe"
  GracePeriodDays: 2
  TriggerPenalty: true
]`;
    } else if (selectedDoc === "cert_audit.png") {
      toonText = `[DocumentOCR:
  DocType: "SecurityAuditLog"
  SecurityGateway: "auth-gateway-01"
  KeyFingerprint: "sha256:8f7e26da..."
  ExpirationDate: "2026-06-15"
  RenewalStatus: "ChallengeTimeout"
]`;
      ruleText = `[RuleConfig:
  RuleID: "RULE-02"
  Name: "Security Certificate Expiration Check"
  ExpirationBufferDays: 30
  VerificationMethod: "DNS-Lookup"
]`;
    }

    const activeRuleName = selectedRule === 'rule_weight' ? 'Rule #4' : selectedRule === 'rule_demurrage' ? 'Rule #12' : selectedRule === 'rule_pii' ? 'Rule #7' : selectedRule === 'rule_temp' ? 'Rule #9' : selectedRule === 'rule_sla' ? 'Rule #15' : 'Rule #2';

    steps = [
      `${t.step1}${selectedDoc}`,
      t.step2,
      `${t.step3}\n${toonText}`,
      `${t.step4}${activeRuleName}\n${ruleText}`,
      t.step5,
      t.calculating
    ];
  }

  // Typewriter style log rendering
  let currentStep = 0;
  function printNextStep() {
    if (currentStep < steps.length) {
      logPre.innerText += steps[currentStep] + "\n\n";
      logPre.scrollTop = logPre.scrollHeight;
      currentStep++;
      setTimeout(printNextStep, 800);
    } else {
      spinner.style.display = "none";
      btn.disabled = false;
      btn.innerText = appTranslations[lang].btn_run_audit || "Execute Forensic Audit";
      renderAuditVerdict(isApplicable, selectedDoc, selectedRule, t);
    }
  }
  printNextStep();
}

const causalTranslations = {
  English: {
    causalTitle: "INFERRED CAUSAL DIAGNOSTIC",
    remediationTitle: "REMEDIATION ACTIONS & TELECOM",
    weightCause: "Scale calibration drift at Loading Dock 4 (last calibrated 90 days ago). Ingress logs indicate heavy vibration causing sensor offset.",
    weightSuggestion: "Tune HDBSCAN clusters dynamically in the Hypothesis Lab to adjust outlier thresholds by +2.5% during high-impact loading schedules.",
    demurrageCause: "Carrier demurrage fee mismatch due to customs clearance hold on HS Code category 84 (Equipment) at Houston Terminal.",
    demurrageSuggestion: "Recalibrate the demurrage limits dynamically to allow temporary $5,000 variance buffers during peak seasonal congestions.",
    piiCause: "Developer bypassed data fabric anonymization during staging database sync to speed up Databricks queries.",
    piiSuggestion: "Enforce security credential check and restrict execution runner pools to secure isolated sandboxes.",
    tempCause: "Auxiliary power supply unit failure on trailer TR-909 due to compressor wear, coupled with door sensors reporting open states.",
    tempSuggestion: "Route optimization engine must dynamically re-route cold chain shipments if average compartment temp exceeds -15.0°C for >30m.",
    slaCause: "Port congestion at Houston Terminal Gate 4 and truck driver shortages at the subcontractor logistics partner.",
    slaSuggestion: "Increase safety stock parameter by +15% in settings and engage secondary backup carrier contracts for regional routes.",
    certCause: "Security certificate renewal failed due to internal network connection timeout.",
    certSuggestion: "Re-trigger certificate verification using a secondary security provider and rotate the active session key."
  },
  Portuguese: {
    causalTitle: "DIAGNÓSTICO CAUSAL INFERIDO",
    remediationTitle: "AÇÕES DE REMEDIAÇÃO E TELECOM",
    weightCause: "Desvio de calibração da balança no Portão de Carga 4 (última calibração há 90 dias). Vibrações pesadas causaram offset nos sensores.",
    weightSuggestion: "Ajuste os clusters HDBSCAN dinamicamente no Lab de Hipóteses para elevar os limiares de outliers em +2.5% durante picos de carga.",
    demurrageCause: "Divergência na taxa de demurrage devido a atraso na liberação alfandegária de equipamentos do grupo HS Code 84 no Porto de Houston.",
    demurrageSuggestion: "Recalibre as regras de demurrage para tolerar buffers de variação temporária de $5.000 durante congestionamentos sazonais.",
    piiCause: "O desenvolvedor ignorou a anonimização de dados do pipeline durante a sincronização para acelerar testes no Databricks.",
    piiSuggestion: "Exigir a verificação de credenciais de segurança e restringir as pools de execução a ambientes isolados seguros.",
    tempCause: "Falha na unidade de energia auxiliar da carreta TR-909 por desgaste do compressor, combinada com sensores indicando porta aberta.",
    tempSuggestion: "O motor de otimização de rotas deve desviar cargas frias caso a temperatura média exceda -15.0°C por mais de 30 minutos.",
    slaCause: "Congestionamento no Porto de Houston Gate 4 e escassez de motoristas de caminhão na transportadora subcontratada.",
    slaSuggestion: "Aumente o parâmetro de estoque de segurança em +15% e acione contratos de transportadoras secundárias de backup.",
    certCause: "A renovação do certificado de segurança falhou devido a um tempo limite de conexão de rede interna.",
    certSuggestion: "Disparar novamente a verificação do certificado usando um provedor secundário e rotacionar a chave de sessão ativa."
  },
  Spanish: {
    causalTitle: "DIAGNÓSTICO CAUSAL INFERIDO",
    remediationTitle: "ACCIONES DE REMEDIACIÓN Y TELECOM",
    weightCause: "Desviación de calibración en la báscula de Carga 4 (última calibración hace 90 días). Las vibraciones causaron un desfase de sensores.",
    weightSuggestion: "Calibre los clusters HDBSCAN en el Laboratorio de Hipótesis para ajustar umbrales de outliers en +2.5% durante picos de carga.",
    demurrageCause: "Discrepancia de demurrage debido a retenciones aduaneras de equipos del código HS 84 en la terminal de Houston.",
    demurrageSuggestion: "Recalibre las reglas de límite para permitir un buffer temporal de $5,000 durante congestiones portuarias de temporada.",
    piiCause: "El desarrollador omitió la asignación de enmascaramiento de datos durante la sincronización para acelerar consultas en Databricks.",
    piiSuggestion: "Exigir la verificación de credenciales de seguridad y restringir los grupos de ejecución a entornos aislados seguros.",
    tempCause: "Falla del generador auxiliar del tráiler TR-909 por desgaste del compresor, junto con alertas de puerta abierta.",
    tempSuggestion: "El motor de enrutamiento debe re-optimizar rutas de cadena de frío si la temperatura supera los -15.0°C por más de 30m.",
    slaCause: "Congestión portuaria en la terminal de Houston Gate 4 y escasez de choferes de camión en el socio subcontratado.",
    slaSuggestion: "Incrementar el inventario de seguridad en +15% en configuraciones y activar contratos de respaldo regional.",
    certCause: "La renovación del certificado de seguridad falló debido a un tiempo de espera de conexión de red interna.",
    certSuggestion: "Volver a activar la verificación del certificado utilizando un proveedor secundario y rotar la clave de sesión activa."
  },
  French: {
    causalTitle: "DIAGNOSTIC CAUSAL INFÉRÉ",
    remediationTitle: "ACTIONS DE REMÉDIATION ET TÉLÉCOM",
    weightCause: "Dérive de calibrage de la balance du quai 4 (dernier étalonnage il y a 90 jours). Les vibrations ont causé un décalage des capteurs.",
    weightSuggestion: "Ajustez les clusters HDBSCAN dans le Lab d'Hypothèses pour augmenter les seuils d'anomalies de +2.5% lors des pointes.",
    demurrageCause: "Divergence de surestaries due à un retard de dédouanement des équipements de catégorie HS 84 au port de Houston.",
    demurrageSuggestion: "Recalibrez les limites de surestaries pour tolérer des tampons temporaires de $5 000 lors des congestions saisonnières.",
    piiCause: "Le développeur a contourné l'anonymisation du pipeline lors de la synchronisation pour accélérer les requêtes Databricks.",
    piiSuggestion: "Exiger la vérification des informations d'identification de sécurité et limiter les pools d'exécution à des environnements isolés sécurisés.",
    tempCause: "Panne de l'alimentation auxiliaire du remorque TR-909 due à l'usure du compresseur, avec détection de porte ouverte.",
    tempSuggestion: "Le moteur de routage doit rediriger les livraisons si la température moyenne dépasse -15.0°C pendant plus de 30m.",
    slaCause: "Congestion au port de Houston Gate 4 et pénurie de chauffeurs chez le transporteur sous-traitant.",
    slaSuggestion: "Augmentez le stock de sécurité de +15% dans les réglages et engagez des contrats de transporteurs secondaires.",
    certCause: "Le renouvellement du certificat de sécurité a échoué en raison d'un délai d'attente de connexion au réseau interne.",
    certSuggestion: "Relancer la vérification du certificat via un fournisseur secondaire et effectuer la rotation de la clé de session active."
  }
};

function renderAuditVerdict(isApplicable, selectedDoc, selectedRule, t) {
  const verdictBox = document.getElementById("audit-verdict-box");
  if (!verdictBox) return;

  verdictBox.style.display = "block";

  if (!isApplicable) {
    verdictBox.style.borderColor = "rgba(255, 255, 255, 0.15)";
    verdictBox.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
    verdictBox.innerHTML = `
      <div style="display:flex; align-items:center; gap:10px; margin-bottom:8px;">
        <span style="font-size:1.2rem;">⚠️</span>
        <strong style="color:#a1a1aa; font-size:0.9rem; letter-spacing:1px;">${t.notApplicableTitle}</strong>
      </div>
      <p style="font-size:0.8rem; color:var(--text-secondary); margin:0;">${t.notApplicableText}</p>
    `;
    return;
  }

  let title = "";
  let description = "";
  let badgeColor = "#ff4081"; // default violation pink
  let isCritical = false;

  const lang = currentLanguage || 'Portuguese';
  const c = causalTranslations[lang] || causalTranslations["Portuguese"];

  if (selectedDoc === "bol_manifest.png" || selectedDoc === "route_manifest.json") {
    title = t.weightVerdictTitle;
    description = t.weightVerdictText;
  } else if (selectedDoc === "customs_invoice.png" || selectedDoc === "calculate_demurrage.sql" || selectedDoc === "carrier_tariffs.csv") {
    title = t.invoiceVerdictTitle;
    description = t.invoiceVerdictText;
  } else if (selectedDoc === "pii_leakage.png" || selectedDoc === "data_masking.py") {
    title = t.piiVerdictTitle;
    description = t.piiVerdictText;
    badgeColor = "#ef4444"; // pure red for critical PII leak
    isCritical = true;
  } else if (selectedDoc === "cold_chain_log.png" || selectedDoc === "temperature_control.py") {
    title = t.tempVerdictTitle;
    description = t.tempVerdictText;
    badgeColor = "#ffb300"; // amber for temperature warning
  } else if (selectedDoc === "sla_ledger.png") {
    title = t.slaVerdictTitle;
    description = t.slaVerdictText;
    badgeColor = "#ffb300"; // amber for SLA breach
  } else if (selectedDoc === "cert_audit.png") {
    title = t.certVerdictTitle;
    description = t.certVerdictText;
    badgeColor = "#ef4444"; // pure red for cert expiry
    isCritical = true;
  }

  verdictBox.style.borderColor = badgeColor;
  verdictBox.style.backgroundColor = `rgba(${isCritical ? '239,68,68' : '255,64,129'}, 0.08)`;

  // Generate buttons
  let callButtonsHtml = "";
  if (selectedDoc === "bol_manifest.png" || selectedDoc === "route_manifest.json" || selectedDoc === "cold_chain_log.png" || selectedDoc === "temperature_control.py" || selectedDoc === "customs_invoice.png" || selectedDoc === "calculate_demurrage.sql" || selectedDoc === "carrier_tariffs.csv" || selectedDoc === "sla_ledger.png") {
    let finalCat = "Route";
    if (selectedDoc === "customs_invoice.png" || selectedDoc === "calculate_demurrage.sql" || selectedDoc === "carrier_tariffs.csv") finalCat = "Finance";
    else if (selectedDoc === "sla_ledger.png") finalCat = "Forge";

    callButtonsHtml = `
      <div style="display:flex; gap:10px; margin-top:16px;">
        <button class="draft-card-button" style="margin:0; font-size:0.75rem; border-color:rgba(255,255,255,0.2); color:#fff; display:flex; align-items:center; gap:4px; cursor:pointer;" onclick="showToast('${t.toastRegularCall}'); startVoiceCall('${selectedDoc}', '${finalCat}', 'regular')">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          ${t.actionCallRegular}
        </button>
        <button class="draft-card-button" style="margin:0; font-size:0.75rem; border-color:rgba(37,211,102,0.3); color:#25D366; background:rgba(37,211,102,0.1); display:flex; align-items:center; gap:4px; cursor:pointer;" onclick="showToast('${t.toastWhatsAppCall}'); startVoiceCall('${selectedDoc}', '${finalCat}', 'whatsapp')">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          ${t.actionCallWhatsApp}
        </button>
      </div>
    `;
  } else {
    const category = "Sentinel";
    callButtonsHtml = `
      <div style="display:flex; gap:10px; margin-top:16px;">
        <button class="draft-card-button" style="margin:0; font-size:0.75rem; border-color:rgba(255,255,255,0.2); color:#fff; display:flex; align-items:center; gap:4px; cursor:pointer;" onclick="showToast('${t.toastRegularCall}'); startVoiceCall('${selectedDoc}', '${category}', 'regular')">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          ${t.actionCallRegular}
        </button>
      </div>
    `;
  }

  // Construct stack of all 6 suggestions
  const suggestionTypes = [
    { key: "weight", title: currentLanguage === 'Portuguese' ? "Calibração de Peso e Ajustes HDBSCAN" : "Weight Calibration & HDBSCAN Adjustments", isCritical: false, match: (d) => d === "bol_manifest.png" || d === "route_manifest.json" },
    { key: "demurrage", title: currentLanguage === 'Portuguese' ? "Recalibração de Tarifas de Demurrage" : "Demurrage Fee Recalibration", isCritical: false, match: (d) => d === "customs_invoice.png" || d === "calculate_demurrage.sql" || d === "carrier_tariffs.csv" },
    { key: "pii", title: currentLanguage === 'Portuguese' ? "Restrições de PII e Sandbox de Segurança" : "PII Security Sandbox Restrictions", isCritical: true, match: (d) => d === "pii_leakage.png" || d === "data_masking.py" },
    { key: "temp", title: currentLanguage === 'Portuguese' ? "Otimização de Rota da Cadeia de Frio" : "Cold Chain Route Optimization", isCritical: false, match: (d) => d === "cold_chain_log.png" || d === "temperature_control.py" },
    { key: "sla", title: currentLanguage === 'Portuguese' ? "Margem de SLA e Ativação de Transportadora Backup" : "SLA Margin & Backup Carrier Activation", isCritical: false, match: (d) => d === "sla_ledger.png" },
    { key: "cert", title: currentLanguage === 'Portuguese' ? "Rotação de Certificados de Segurança" : "Security Certificate Rotation", isCritical: true, match: (d) => d === "cert_audit.png" }
  ];

  let suggestionsHtml = "";
  suggestionTypes.forEach(item => {
    const isActive = item.match(selectedDoc);
    const itemCause = c[item.key + "Cause"];
    const itemSuggestion = c[item.key + "Suggestion"];
    const itemBadgeColor = item.isCritical ? "#ef4444" : (item.key === 'temp' || item.key === 'sla' ? "#ffb300" : "#ff4081");

    let statusBadgeText = "";
    if (isActive) {
      statusBadgeText = `<span style="background:${itemBadgeColor}; color:#000; padding:2px 6px; border-radius:4px; font-weight:800; font-size:0.6rem; margin-left:8px;">ACTIVE BREACH</span>`;
    } else {
      statusBadgeText = `<span style="background:rgba(255,255,255,0.05); color:var(--text-muted); padding:2px 6px; border-radius:4px; font-weight:700; font-size:0.6rem; margin-left:8px;">INACTIVE SUGGESTION</span>`;
    }

    suggestionsHtml += `
      <div class="forensic-suggestion-block" style="
        border: ${isActive ? `2px solid ${itemBadgeColor}` : '1px solid rgba(255, 255, 255, 0.06)'};
        background: ${isActive ? `rgba(${item.isCritical ? '239,68,68' : '255,64,129'}, 0.08)` : 'rgba(255,255,255,0.01)'};
        padding: 12px;
        border-radius: 8px;
        margin-bottom: 12px;
        opacity: ${isActive ? '1' : '0.55'};
        transition: all 0.3s ease;
      "
      onmouseover="if(!${isActive}) this.style.opacity='0.9'; if(!${isActive}) this.style.borderColor='rgba(255,255,255,0.15)';"
      onmouseout="if(!${isActive}) this.style.opacity='0.55'; if(!${isActive}) this.style.borderColor='rgba(255,255,255,0.06)';"
      >
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
          <span style="font-weight:700; font-size:0.75rem; letter-spacing:0.5px; color:#fff; display:flex; align-items:center; gap:6px;">
            <span style="display:inline-block; width:6px; height:6px; border-radius:50%; background:${itemBadgeColor};"></span>
            ${item.title} ${statusBadgeText}
          </span>
          <span style="font-family:var(--font-mono); font-size:0.6rem; color:var(--text-muted); text-transform:uppercase;">
            ${item.isCritical ? 'CRITICAL' : 'HIGH'}
          </span>
        </div>
        <div style="font-size:0.75rem; color:#fff; margin-bottom:4px; line-height:1.4;">
          <strong>Root Cause:</strong> ${itemCause}
        </div>
        <div style="font-size:0.75rem; color:var(--text-secondary); line-height:1.4;">
          <strong>Causal Suggestion:</strong> ${itemSuggestion}
        </div>
      </div>
    `;
  });

  verdictBox.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
      <span style="font-weight:700; font-size:0.75rem; letter-spacing:1px; color:#fff; display:flex; align-items:center; gap:8px;">
        <span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:${badgeColor};"></span>
        ${title}
      </span>
      <span style="background:rgba(0,0,0,0.3); padding:4px 8px; border-radius:4px; font-family:var(--font-mono); font-size:0.6rem; color:var(--text-secondary); text-transform:uppercase;">
        ${isCritical ? 'CRITICAL' : 'HIGH'}
      </span>
    </div>
    <p style="font-size:0.8rem; color:var(--text-secondary); line-height:1.5; margin:0 0 16px 0;">
      ${description}
    </p>

    <!-- Section Label for Inferred Suggestions Stack -->
    <div style="font-size:0.65rem; font-weight:800; color:var(--accent-orange-light); text-transform:uppercase; letter-spacing:1px; margin-bottom:12px; border-bottom:1px dashed rgba(255,255,255,0.08); padding-bottom:6px;">
      ${c.causalTitle} (6 Inferred Suggestions Stacked)
    </div>

    <!-- Stack of Suggestions -->
    <div style="max-height: 320px; overflow-y: auto; margin-bottom: 16px; padding-right: 4px;">
      ${suggestionsHtml}
    </div>

    <!-- Remediation Actions -->
    <div style="border-top: 1px solid rgba(255,255,255,0.06); padding-top:16px;">
      <div style="font-size:0.65rem; font-weight:800; color:var(--text-secondary); text-transform:uppercase; letter-spacing:1px; margin-bottom:10px;">${c.remediationTitle}</div>
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
        <button class="bottom-action-btn-primary" style="margin:0; font-size:0.75rem; padding:8px 16px; background-color:var(--color-compliance); width:auto; cursor:pointer;" onclick="updateStatsAfterRemediation('${selectedDoc}')">
          ${t.actionRemediate}
        </button>
        ${callButtonsHtml}
      </div>
    </div>
  `;
}

function updateStatsAfterRemediation(docType) {
  showToast(currentLanguage === 'Portuguese' ? "SOP de remediação aplicado com sucesso!" : "SOP remediation applied successfully!");

  // Hide verdict box
  const verdictBox = document.getElementById("audit-verdict-box");
  if (verdictBox) verdictBox.style.display = "none";

  // Change reasoning terminal to green success message
  const logPre = document.getElementById("audit-reasoning-log");
  if (logPre) {
    logPre.innerText = currentLanguage === 'Portuguese'
      ? "SOP Remediação Concluído.\nStatus da Regra: Em conformidade.\nNenhum desvio pendente."
      : "SOP Remediation Completed.\nRule status: Compliant.\nNo pending drift.";
    logPre.style.color = "#69f0ae";
  }

  // Update simple metrics visually
  const valHealth = document.getElementById("val-cluster-health");
  const barHealth = document.getElementById("bar-cluster-health");
  const valRules = document.getElementById("val-rules-processed");
  const valThreats = document.getElementById("val-threat-vectors");
  const lblReview = document.getElementById("lbl-threat-vectors-review");

  if (valHealth && barHealth) {
    valHealth.innerHTML = "100.0 <span style='font-size:0.9rem; color:#69f0ae;'>%</span>";
    barHealth.style.width = "100%";
  }
  if (valRules) {
    let count = parseInt(valRules.innerText) || 124;
    valRules.innerText = count + 1;
  }
  if (valThreats && lblReview) {
    let count = parseInt(valThreats.innerText) || 2;
    if (count > 0) {
      count = count - 1;
      valThreats.innerText = count < 10 ? "0" + count : count;
      if (count === 0) {
        lblReview.innerText = currentLanguage === 'Portuguese' ? "SISTEMA SEGURO" : "SYSTEM SECURE";
        lblReview.style.color = "#69f0ae";
      }
    }
  }
}

// Simulated Hypothesis experiment training iterations run
function runHypothesisExperiment() {
  const btn = document.getElementById("btn-execute-hypothesis");
  const resultsEl = document.getElementById("hypothesis-results");

  if (!btn || !resultsEl) return;

  btn.disabled = true;
  btn.innerHTML = `<div style="width:20px; height:20px; border:2px solid #fff; border-top-color:transparent; border-radius:50%; animation:spin 1s linear infinite;"></div> RUNNING...`;

  setTimeout(() => {
    btn.disabled = false;
    btn.innerHTML = `<svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg> RUN FULL SIMULATION`;
    showToast("Simulation completed. Results rendered.");
    resultsEl.style.display = "flex";

    // Inject new synthesized action in mockActions
    const alreadyExists = mockActions.some(act => act.id === "TWIN-115");
    if (!alreadyExists) {
      mockActions.push({
        id: "TWIN-115",
        category: "Finance",
        title: "HS Code Demurrage Adjustments",
        description: "Synthesized via Hypothesis Lab. Weight invoice anomalies mismatch on container lines #SH-908B.",
        priority: "High",
        impact: "+$18,200.00",
        ai_generated: true,
        source: "Hypothesis Simulation runner",
        path: "/artifact"
      });
      renderActionFeed();
    }
  }, 1500);
}

function addNewCustomValidationRule() {
  const inputEl = document.getElementById("input-new-rule-name");
  if (!inputEl) return;
  const val = inputEl.value.trim();
  if (!val) return;

  const selectEl = document.getElementById("select-audit-rule");
  if (!selectEl) return;

  // Add the option
  const opt = document.createElement("option");
  const optValue = "rule_custom_" + Date.now();
  opt.value = optValue;
  opt.textContent = val;
  selectEl.appendChild(opt);
  selectEl.value = optValue;

  // Clear input
  inputEl.value = "";

  // Show Toast
  const lang = currentLanguage || 'Portuguese';
  const successMsg = lang === 'Portuguese' ? "Nova regra adicionada e selecionada!" :
                     lang === 'Spanish' ? "¡Nueva regla agregada y seleccionada!" :
                     lang === 'French' ? "Nouvelle règle ajoutée et sélectionnée !" :
                     "New rule added and selected!";
  showToast(successMsg);
}

function sendRuleToHypothesisLab() {
  const selectEl = document.getElementById("select-audit-rule");
  if (!selectEl) return;

  const selectedText = selectEl.options[selectEl.selectedIndex].text;

  // Show active container and update label
  const container = document.getElementById("active-lab-rule-container");
  const nameEl = document.getElementById("active-lab-rule-name");
  if (container && nameEl) {
    container.style.display = "flex";
    nameEl.innerText = selectedText;
  }

  // Toast message
  const lang = currentLanguage || 'Portuguese';
  const toastMsg = lang === 'Portuguese' ? `Enviando "${selectedText}" para o Laboratório de Hipóteses...` :
                   lang === 'Spanish' ? `Enviando "${selectedText}" al Laboratorio de Hipótesis...` :
                   lang === 'French' ? `Envoi de "${selectedText}" au Laboratoire d'Hypothèses...` :
                   `Sending "${selectedText}" to the Hypothesis Lab...`;
  showToast(toastMsg);

  // Navigate to hypothesis lab screen
  navigateToScreen('hypothesis-lab');

  // Trigger shadow simulation
  runHypothesisExperiment();
}

function renderContactsLists() {
  const twinsDedicated = document.getElementById("twins-dedicated-contacts-list");
  const twinsShared = document.getElementById("twins-shared-contacts-list");
  const countDedicated = document.getElementById("count-dedicated-contacts");
  const countShared = document.getElementById("count-shared-contacts");

  // Render Twins Dedicated
  if (twinsDedicated) {
    twinsDedicated.innerHTML = dedicatedContacts.map((c, idx) => `
      <div style="background:rgba(255,255,255,0.03); border:1px solid var(--glass-white-05); padding:6px 10px; border-radius:6px; display:flex; justify-content:space-between; align-items:center;">
        <div>
          <div style="font-weight:700; color:#fff;">${c.name}</div>
          <div style="font-size:0.6rem; color:var(--text-muted); font-family:var(--font-mono);">${c.phone}</div>
        </div>
        <button type="button" style="background:transparent; border:none; color:#ef4444; font-size:1rem; cursor:pointer; padding: 2px 6px;" onclick="deleteContact('dedicated', ${idx})">×</button>
      </div>
    `).join("");
    if (dedicatedContacts.length === 0) {
      twinsDedicated.innerHTML = `<div style="color:var(--text-muted); font-style:italic; font-size:0.65rem;">No contacts.</div>`;
    }
  }

  // Render Twins Shared
  if (twinsShared) {
    twinsShared.innerHTML = sharedContacts.map((c, idx) => `
      <div style="background:rgba(255,255,255,0.03); border:1px solid var(--glass-white-05); padding:6px 10px; border-radius:6px; display:flex; justify-content:space-between; align-items:center;">
        <div>
          <div style="font-weight:700; color:#fff;">${c.name}</div>
          <div style="font-size:0.6rem; color:var(--text-muted); font-family:var(--font-mono);">${c.phone}</div>
        </div>
        <button type="button" style="background:transparent; border:none; color:#ef4444; font-size:1rem; cursor:pointer; padding: 2px 6px;" onclick="deleteContact('shared', ${idx})">×</button>
      </div>
    `).join("");
    if (sharedContacts.length === 0) {
      twinsShared.innerHTML = `<div style="color:var(--text-muted); font-style:italic; font-size:0.65rem;">No contacts.</div>`;
    }
  }



  // Update count labels
  if (countDedicated) countDedicated.innerText = dedicatedContacts.length;
  if (countShared) countShared.innerText = sharedContacts.length;
}

function runMetasearchQuery() {
  const queryInput = document.getElementById("metasearch-query");
  if (!queryInput) return;
  const query = queryInput.value.trim();
  if (!query) {
    showToast(currentLanguage === 'Portuguese' ? "Insira uma consulta de pesquisa válida." : "Please enter a valid search query.", false);
    return;
  }

  showToast(currentLanguage === 'Portuguese' ? "Buscando provedores no motor de metapesquisa..." : "Metasearch engine querying provider databases...");

  setTimeout(() => {
    // Select a random provider from pool
    const idx = Math.floor(Math.random() * metasearchProvidersPool.length);
    lastFoundContact = metasearchProvidersPool[idx];

    const resultContainer = document.getElementById("metasearch-result-container");
    const nameEl = document.getElementById("metasearch-found-name");
    const detailsEl = document.getElementById("metasearch-found-details");

    if (resultContainer && nameEl && detailsEl) {
      nameEl.innerText = lastFoundContact.name;
      detailsEl.innerText = lastFoundContact.details;
      resultContainer.style.display = "flex";
    }

    // Hide any previous prompt selection
    const promptContainer = document.getElementById("contact-prompt-container");
    if (promptContainer) promptContainer.style.display = "none";

    showToast(currentLanguage === 'Portuguese' ? "Metapesquisa concluída. Provedor encontrado!" : "Metasearch complete. Provider contact found!");
  }, 1000);
}

function clearMetasearch() {
  const resultContainer = document.getElementById("metasearch-result-container");
  const promptContainer = document.getElementById("contact-prompt-container");
  const queryInput = document.getElementById("metasearch-query");

  if (resultContainer) resultContainer.style.display = "none";
  if (promptContainer) promptContainer.style.display = "none";
  if (queryInput) queryInput.value = "";
  lastFoundContact = null;
}

function promptAddContact() {
  const promptContainer = document.getElementById("contact-prompt-container");
  if (promptContainer) {
    promptContainer.style.display = "flex";
  }
}

function addApprovedContact(type) {
  if (!lastFoundContact) return;

  const contactObj = { name: lastFoundContact.name, phone: lastFoundContact.phone };
  if (type === 'dedicated') {
    dedicatedContacts.push(contactObj);
  } else {
    sharedContacts.push(contactObj);
  }

  renderContactsLists();
  clearMetasearch();

  const successMsg = currentLanguage === 'Portuguese'
    ? `Contato adicionado à lista ${type === 'dedicated' ? 'Privada' : 'Compartilhada'}!`
    : `Contact added to ${type === 'dedicated' ? 'Dedicated' : 'Shared'} contact list!`;
  showToast(successMsg);
}

function addManualContact(type) {
  const nameInput = document.getElementById(`add-${type}-name`);
  const phoneInput = document.getElementById(`add-${type}-phone`);
  if (!nameInput || !phoneInput) return;

  const nameVal = nameInput.value.trim();
  const phoneVal = phoneInput.value.trim();

  if (!nameVal || !phoneVal) {
    showToast(currentLanguage === 'Portuguese' ? "Insira nome e telefone." : "Please enter both name and phone number.", false);
    return;
  }

  const contactObj = { name: nameVal, phone: phoneVal };
  if (type === 'dedicated') {
    dedicatedContacts.push(contactObj);
  } else {
    sharedContacts.push(contactObj);
  }

  renderContactsLists();
  nameInput.value = "";
  phoneInput.value = "";

  const successMsg = currentLanguage === 'Portuguese'
    ? `Contato adicionado com sucesso!`
    : `Contact successfully added!`;
  showToast(successMsg);
}

function deleteContact(type, index) {
  if (type === 'dedicated') {
    dedicatedContacts.splice(index, 1);
  } else {
    sharedContacts.splice(index, 1);
  }

  renderContactsLists();

  const msg = currentLanguage === 'Portuguese' ? "Contato excluído!" : "Contact deleted!";
  showToast(msg);
}

// Simulated connection pings testing
function testConnectionPing() {
  const btn = document.getElementById("btn-ping-connections");
  const consoleEl = document.getElementById("ping-console-output");
  const pingSnowflake = document.getElementById("ping-db-snowflake");
  const pingDatabricks = document.getElementById("ping-db-databricks");
  const pingFirebase = document.getElementById("ping-db-firebase");

  if (!btn || !consoleEl || !pingSnowflake || !pingDatabricks || !pingFirebase) return;

  btn.disabled = true;
  const lang = currentLanguage || 'Portuguese';
  btn.innerText = appTranslations[lang].ping_button_progress || "Pinging Secure Gateways...";
  consoleEl.innerText = appTranslations[lang].ping_initial || "[SYS] Initializing secure diagnostic connection...\n";

  // Flash nodes to orange (pinging)
  pingSnowflake.className = "indicator-dot-green indicator-dot-orange";
  pingDatabricks.className = "indicator-dot-green indicator-dot-orange";
  pingFirebase.className = "indicator-dot-green indicator-dot-orange";

  const hosts = [
    { el: pingSnowflake, name: "dw.customs.audits", lat: "2.1ms" },
    { el: pingDatabricks, name: "crm.customer.profiles", lat: "4.5ms" },
    { el: pingFirebase, name: "identity-gateway.internal.runink.net", lat: "18.7ms" }
  ];

  let currentHostIdx = 0;

  function pingHostNode() {
    if (currentHostIdx < hosts.length) {
      const host = hosts[currentHostIdx];

      setTimeout(() => {
        host.el.className = "indicator-dot-green"; // revert back to green success
        const lang = currentLanguage || 'Portuguese';
        let successMsg = appTranslations[lang].ping_success_tpl || "[PING] {name}: SUCCESS (Connection verified, latency {lat})\n";
        successMsg = successMsg.replace("{name}", host.name).replace("{lat}", host.lat);
        consoleEl.innerText += successMsg;
        consoleEl.scrollTop = consoleEl.scrollHeight;
        currentHostIdx++;
        pingHostNode();
      }, 600);
    } else {
      btn.disabled = false;
      const lang = currentLanguage || 'Portuguese';
      btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> ${appTranslations[lang].test_gateway_btn}`;
    }
  }

  pingHostNode();
}

const appTranslations = {
  English: {
    sidebar_modes: "Presentation Modes",
    sidebar_selector: "Screen Selector",
    sidebar_control: "Operations Control",
    sidebar_actions: "Fetch Simulator Actions",
    sidebar_trigger: "Trigger Fetch Run",
    nav_twins: "Digital Twin (Action Feed)",
    nav_artifact: "Decision Artifact Screen",
    nav_remediation: "Remediation Workflow",
    nav_fetch: "Fetch Center Screen",
    nav_maturity: "Maturity Center Screen",
    nav_profile: "Profile & Billing CU",
    nav_rules: "Rules Recon",
    nav_hypothesis: "Hypothesis Lab",
    nav_runner: "Runner & Connections",
    header_cockpit: "RUNINK WEB COCKPIT",
    header_mtls: "Secure Data Connection",
    header_specs_btn: "SCREEN DETAILS",
    header_secure_connection: "Secure Data Connection",
    subtitle_twin: "ACTION FEED",
    title_twin: "Digital <span>Twin</span>",
    impact_potential: "IMPACT POTENTIAL",
    twin_status: "DIGITAL TWIN STATUS",
    priority_actions: "PRIORITY ACTIONS",
    subtitle_artifact: "DECISION PIPELINE",
    title_artifact: "Decision <span>Artifact</span>",
    subtitle_remediation: "SOP AUTOMATION",
    title_remediation: "Remediation <span>Workflow</span>",
    subtitle_fetch: "INGESTION GATEWAY",
    title_fetch: "Fetch <span>Center</span>",
    subtitle_maturity: "DATA DOMAIN AUDIT",
    title_maturity: "Maturity <span>Center</span>",
    subtitle_profile: "SYSTEM USER PROFILE",
    title_profile: "Identity & <span>Billing</span>",
    subtitle_rules: "SYSTEM VALIDATION RULES",
    title_rules: "Rules <span>Reconciliation</span>",
    subtitle_hypothesis: "ANOMALY PREDICTION LAB",
    title_hypothesis: "Hypothesis <span>Simulation</span>",
    subtitle_runner: "GATEWAY CONNECTIVITY",
    title_runner: "Runner & <span>Connections</span>",
    admin_creds: "ADMINISTRATOR CREDENTIALS",
    cu_consumption: "COMPUTE UNITS (CU) CONSUMPTION",
    integrations: "INTEGRATIONS",
    preferences: "PREFERENCES",
    target_language: "Target Language",
    rotate_key: "🔄 Rotate Active Session Key",
    monthly_quota: "Monthly Runner Quota",
    doc_reasoning_title: "DOCUMENT-BASED AUDIT REASONING",
    engine_status: "Forensic Judge Engine: Ready",
    doc_reasoning_desc: "Compare physical documents (manifests, invoices, source dumps) against active database constraints and evaluate compliance conditions.",
    doc_bol: "📄 Bill of Lading Cargo Manifest #FL309",
    doc_invoice: "📄 HS Customs Demurrage Invoice #INV-908B",
    doc_pii: "📄 Customer Gold Delta Source Dump",
    doc_cold: "📄 Cold Chain Telemetry Ingress Log #CC-204",
    doc_sla: "📄 Supplier SLA Delivery Ledger #SLA-881",
    doc_cert: "📄 Security Certificate Expiration Audit #CERT-509",
    doc_masking_py: "🐍 Python Masking Script: data_masking.py",
    doc_demurrage_sql: "💾 SQL Calculation: calculate_demurrage.sql",
    doc_tariffs_csv: "📊 Tariff Table: carrier_tariffs.csv",
    doc_route_json: "📋 Route JSON: route_manifest.json",
    doc_temp_py: "🐍 Python Temp Checker: temperature_control.py",
    select_rule_label: "Select Validation Rule",
    rule_weight_opt: "Rule #4: Weight Discrepancy Margin",
    rule_demurrage_opt: "Rule #12: Customs Demurrage Cap",
    rule_pii_opt: "Rule #7: PII Data Masking Policy",
    rule_temp_opt: "Rule #9: Temperature Threshold Policy",
    rule_sla_opt: "Rule #15: Supplier SLA Timeframe",
    rule_cert_opt: "Rule #2: Security Certificate Expiration Check",
    btn_run_audit: "Execute Forensic Audit",
    add_custom_rule_label: "Or Create New Business Rule",
    btn_send_to_lab: "Send to Lab (Shadow Simulation)",
    notification_channel_label: "Preferred Channels",
    audit_terminal: "AUDIT REASONING TERMINAL",
    react_console_title: "Semantic Validation Agent (ReAct Loop)",
    react_console_progress_label: "ReAct Execution Progress",
    react_btn_abort: "Abort Stream",
    react_btn_resolve: "Apply Remediation",

    // Profile certificate translations
    profile_cert_title: "User Security Key",
    profile_cert_subject: "Identifier:",
    profile_cert_issuer: "Issuer Authority:",
    profile_cert_expires: "Expiration:",
    profile_cert_status: "Status:",
    profile_client_node: "Device: Companion Web Client",
    profile_admin_title: "Principal Administrator",
    profile_admin_role: "Role: Security & Governance Lead",
    profile_cert_status_val: "Encrypted & Active",
    header_connection_label: "CONNECTION: ACTIVE",
    ping_initial: "[SYS] Initializing secure diagnostic connection...\n",
    ping_success_tpl: "[PING] {name}: SUCCESS (Connection verified, latency {lat})\n",
    ping_button_progress: "Pinging Secure Gateways...",

    // Compute units labels
    worker_pool_1: "Worker Pool 1 (Isolated)",
    worker_pool_2: "Worker Pool 2 (Isolated)",
    allocated_limit: "Allocated: 50 CU Limit / Memory 1GB",
    cu_disclaimer: "* Compute Units (CU) are consumed during sandboxed runner executions in isolated environments. Quota resets on the 1st of every calendar month.",
    test_gateway_btn: "Test Secure Gateway Pings",
    specs_grpc_title: "⚡ Secure Integration Schemas:",

    // Route detail labels
    route_from: "From",
    route_to: "To",
    route_variance: "Variance",
    route_cargo: "Cargo",
    route_est_leak: "Est. Leak",
    call_carrier: "Voice Call Carrier",
    call_finance: "Initiate Claims Call",
    call_supplier: "Call Supplier Agent",

    // Slide Deck translations
    slide_0_title: "The Digital Twin for <span>Enterprise Operations</span>",
    slide_0_body: "Grounding autonomous agent workflows in validated compliance logic. We audit transaction pipelines, stress-test supply cashflows, and reconcile written SOPs against active databases securely under localized AI.",
    slide_1_title: "Aligning <span>Business Stakeholders</span>",
    slide_1_body: "Addressing operational inefficiencies through dedicated agentic specialist profiles:",
    slide_1_cfo: "<strong>The CFO:</strong> Outlines margin loss from customs demurrage fee discrepancies. <em>\"Turn recovery claims into net profit.\"</em>",
    slide_1_ops: "<strong>Ops Director:</strong> Focuses on database code drifting from written operating manual guides. <em>\"Verify observed matches expected.\"</em>",
    slide_1_revops: "<strong>RevOps Manager:</strong> Protects query ingestion models from public vendor hallucinations. <em>\"Local inference guarantees data safety.\"</em>",
    slide_1_shipper: "<strong>Shipper/Broker:</strong> Minimizes port container demurrage through automated tariff audits. <em>\"Acts as an autonomous broker paralegal.\"</em>",
    slide_2_title: "Runink Monitor & <span>Actionable Twins</span>",
    slide_2_mon_title: "1. Runink Monitor",
    slide_2_mon_body: "Gathers non-invasive query telemetry, runs HDBSCAN semantic clustering, maps SQL rules, and stress-tests cashflow via local runners in isolated Linux containers.",
    slide_2_twin_title: "2. Actionable Twins",
    slide_2_twin_body: "Executes the inferred resolutions as pre-compiled drafts (WhatsApp alerts, email drafts, SQL scripts) awaiting one-click human-in-the-loop authorization.",
    slide_3_title: "Global Trade <span>Detention Claims</span>",
    slide_3_body: "Automating claims audits at customs ports to eliminate demurrage losses:",
    slide_3_step1: "<strong>Metadata Recovery:</strong> Connects to Snowflake database schemas.",
    slide_3_step2: "<strong>Tariff Check:</strong> Cross-references HS customs codes against compliance checklists.",
    slide_3_step3: "<strong>Simulation:</strong> Predicts container flag probability in sandboxed runner.",
    slide_3_step4: "<strong>Synthesis:</strong> Drafts Weight Discrepancy Adjustment claim email automatically.",
    slide_3_step5: "<strong>Dispatch:</strong> Operations manager signs off PO in Cockpit with one click.",
    slide_4_title: "Preemptive <span>Purchase Orders</span>",
    slide_4_body: "Avoiding inventory stockouts through statistical trend decomposition:",
    slide_4_step1: "<strong>Telemetry Scan:</strong> Aggregates warehousing inventory signals.",
    slide_4_step2: "<strong>Seasonality:</strong> Prophet filters seasonal variance.",
    slide_4_step3: "<strong>ERP Release:</strong> Dispatches PO directly to Odoo ERP upon verification.",
    slide_iot_title: "Predictive <span>Maintenance</span>",
    slide_iot_body: "Automating equipment health checks via intelligent smart devices over IoT telemetry data:",
    slide_iot_step1: "<strong>Telemetry Scan:</strong> Aggregates RFID readings from pallet operations.",
    slide_iot_step2: "<strong>Anomaly Detection:</strong> Identifies operations downgrading due to postponed maintenance.",
    slide_iot_step3: "<strong>Synthesis:</strong> Drafts an immediate scheduling request to the designated department/provider.",
    slide_iot_step4: "<strong>Dispatch:</strong> Manager reviews and sends the service request with one click.",
    slide_5_title: "Zero-Trust <span>Security Blueprint</span>",
    slide_5_body: "Designed from the ground up for data isolation and security requirements:",
    slide_5_sec1: "<strong>✓ Isolated AI Processing:</strong> Running locally. Enterprise data is never transmitted to external APIs.",
    slide_5_sec2: "<strong>✓ Secure Sandboxed Execution:</strong> Active script runners execute in secure sandboxes to prevent unauthorized data access.",
    slide_5_sec3: "<strong>✓ Continuous Data Sync:</strong> Internal system states synchronize securely across pipelines in real-time.",
    slide_5_sec4: "<strong>✓ ISO 42001 Compliance:</strong> Includes visible AI indicator notices (✨) on generated text to trace data history.",

    // Action cases
    action_sentinel_1_title: "Suspicious Access Attempt",
    action_sentinel_1_desc: "Attempt to access the partner portal from outside the authorized corporate network. Access blocked.",
    action_sentinel_1_source: "Security Access Gateway",
    action_sentinel_2_title: "Suspect Billing Spike",
    action_sentinel_2_desc: "Unusual invoice generation frequency spike during non-business hours. Access suspended pending verification.",
    action_sentinel_2_source: "Access Anomaly Filter",
    action_sentinel_3_title: "Unapproved Supplier Signup",
    action_sentinel_3_desc: "Automated attempt to register a new vendor profile without matching internal procurement authorization. Profile quarantined.",
    action_sentinel_3_source: "Registration Audit Filter",
    action_impact_mitigated: "Risk Mitigation",
    action_impact_fraud: "Fraud Prevention",
    action_impact_control: "Access Control",

    action_forge_1_title: "Preemptive Purchase Order Draft",
    action_forge_1_desc: "Pre-approved PO generated to compress lead times ahead of forecasted inflation anomalies.",
    action_forge_1_source: "Demand Scenario Simulator",
    action_forge_1_impact: "Save $45,000 Outage",
    action_forge_2_title: "Raw Material Contract Optimization",
    action_forge_2_desc: "Contract renegotiation draft based on recent commodity index drops, projecting an annual saving of 8%.",
    action_forge_2_source: "Contract Semantic Analyzer",
    action_forge_2_impact: "+$22,500.00",
    action_forge_3_title: "Warehouse Space Pre-allocation",
    action_forge_3_desc: "Automated cargo consolidation draft for next quarter's peak season, reducing external warehousing storage costs.",
    action_forge_3_source: "Space Optimization Simulator",
    action_forge_3_impact: "12% Cost Reduction",

    action_compliance_1_title: "Customer Data Exposure Risk",
    action_compliance_1_desc: "Customer contact fields accessed without compliance masking in operational reports. View paused for correction.",
    action_compliance_1_source: "Data Protection Filter",
    action_compliance_1_impact: "Compliance Action",
    action_compliance_2_title: "Missing Import Documentation",
    action_compliance_2_desc: "Cargo manifest for international shipment missing the mandatory environmental emissions certificate. Action required.",
    action_compliance_2_source: "Regulatory Rules Validator",
    action_compliance_2_impact: "Avoid Cargo Penalty",
    action_compliance_3_title: "Carrier License Expiration Warning",
    action_compliance_3_desc: "Primary logistics partner operating with a ground transportation license expiring in 3 days. Verification requested.",
    action_compliance_3_source: "Partner License Auditor",
    action_compliance_3_impact: "Avoid Operational Stop",

    action_finance_1_title: "Customs Demurrage Fee Overcharge",
    action_finance_1_desc: "HS Tariff code discrepancy detected on port shipping invoices. Fee refund dispute draft generated.",
    action_finance_1_source: "Import Invoice Auditor",
    action_finance_1_impact: "+$18,200.00",
    action_finance_2_title: "Unapplied Vendor Discount",
    action_finance_2_desc: "Invoice from Principal vendor did not include the agreed 3% early-payment discount. Corrected invoice requested.",
    action_finance_2_source: "Automated Invoice Reconciliation",
    action_finance_2_impact: "+$6,150.00",
    action_finance_3_title: "Duplicate Cargo Billing Detected",
    action_finance_3_desc: "Duplicate entry found for interstate freight service. Redundant charge blocked in billing gateway.",
    action_finance_3_source: "Billing Duplicate Detector",
    action_finance_3_impact: "+$9,400.00",

    action_route_1_title: "Weight Discrepancy in Cargo Route",
    action_route_1_desc: "Weight discrepancy of 14.5% detected between bill of lading records and physical scales. Dispatch held for audit.",
    action_route_1_source: "Scale & Loading Monitor",
    action_route_1_impact: "+$12,450.00",
    action_route_1_from: "Depot A Logistics Gate",
    action_route_1_to: "Port of Houston Terminal",
    action_route_1_var: "14.5%",
    action_route_1_cargo: "Industrial Castings",
    action_route_1_cost: "$12,450",
    action_route_2_title: "Empty Backhaul Route Optimization",
    action_route_2_desc: "Vehicle returning empty from Depot B. Rerouted to pick up customer returns at supplier, saving transport overhead.",
    action_route_2_source: "Logistics Route Optimizer",
    action_route_2_impact: "+$1,850.00",
    action_route_2_from: "Depot B Logistics Gate",
    action_route_2_to: "Midpoint Supplier Grid",
    action_route_2_var: "Empty Leg Saved",
    action_route_2_cargo: "Returned Merchandise",
    action_route_2_cost: "$1,850",
    action_route_3_title: "Adverse Weather Rerouting",
    action_route_3_desc: "Shipment from Port of Houston rerouted due to severe storm alert, preserving estimated delivery window.",
    action_route_3_source: "Smart Fleet Router",
    action_route_3_impact: "Lead-Time Guarantee",
    action_route_3_from: "Port of Houston Terminal",
    action_route_3_to: "Depot A Logistics Gate",
    action_route_3_var: "Rerouted / On-Time",
    action_route_3_cargo: "Raw Materials",
    action_route_3_cost: "Preserved",

    action_ops_1_title: "Safety Stock Limit Warning",
    action_ops_1_desc: "Central warehouse units dropped below the 15% safety stock limit during quarterly logistical planning.",
    action_ops_1_source: "Inventory & Demand Manager",
    action_ops_1_impact: "Lead-time Risk",
    action_ops_2_title: "Assembly Line Interruption Risk",
    action_ops_2_desc: "Delay in critical component arrival threatens to stop Assembly Line 3. Emergency stock relocation initiated.",
    action_ops_2_source: "Production Planning Filter",
    action_ops_2_impact: "Avoid Downtime Cost",
    action_ops_3_title: "Cold Chain Temperature Alert",
    action_ops_3_desc: "Refrigerated cargo container with agricultural supplies reports temperature above ideal threshold. Maintenance dispatched.",
    action_ops_3_source: "Cold Chain Fleet Monitor",
    action_ops_3_impact: "Cargo Preservation",

    action_sentinel_4_title: "Privileged Table Query Alert",
    action_sentinel_4_desc: "Direct query executed on raw credentials table by non-admin identity. Blocked.",
    action_sentinel_4_source: "Access Audit Filter",
    action_sentinel_5_title: "Suspicious Key Rotation",
    action_sentinel_5_desc: "Multiple session key rotation requests received within 1 minute. Sandbox lock engaged.",
    action_sentinel_5_source: "Security Policy Guard",
    action_sentinel_6_title: "Unmasked Ingress Attempt",
    action_sentinel_6_desc: "External connection attempted to ingest customer records without hashing variables. Quarantined.",
    action_sentinel_6_source: "Data Ingress Filter",
    action_sentinel_7_title: "API Token Boundary Violation",
    action_sentinel_7_desc: "Access token generated for partner portal outside standard geographical boundaries. Suspended.",
    action_sentinel_7_source: "Geofence Agent",

    action_forge_4_title: "Transport Dispatch Schedule",
    action_forge_4_desc: "Automated schedule generated for empty carrier pickups to avoid depot congestion next week.",
    action_forge_4_source: "Dispatch Planner",
    action_forge_4_impact: "Logistics Optimization",
    action_forge_5_title: "Supply Chain Re-routing Suggestion",
    action_forge_5_desc: "Synthetic twin plan to shift raw material sourcing to secondary supplier due to storm alert.",
    action_forge_5_source: "Alternative Sourcing Engine",
    action_forge_5_impact: "+$12,500.00 Saved",
    action_forge_6_title: "Demurrage Dispute Invoice Draft",
    action_forge_6_desc: "Drafted fee refund letter based on HS Customs code discrepancy, reclaiming $18,200.00.",
    action_forge_6_source: "Dispute Claim Generator",
    action_forge_6_impact: "+$18,200.00 Reclaim",
    action_forge_7_title: "Inventory Reorder Suggestion",
    action_forge_7_desc: "Pre-calculated purchase request generated for safe stock replenishment ahead of shutdown.",
    action_forge_7_source: "Predictive Reorder Agent",
    action_forge_7_impact: "Safety Stock Buffer",

    action_compliance_4_title: "Decalibration Drift Flagged",
    action_compliance_4_desc: "Weight deviation margin at Dock 4 scale exceeded bounds during inbound cargo processing.",
    action_compliance_4_source: "Scale Integrity Watch",
    action_compliance_4_impact: "Calibration Audit",
    action_compliance_5_title: "Cold Chain Temperature Excursion",
    action_compliance_5_desc: "Refrigerated cargo container reported temperatures above -18°C limit. Quarantine rule active.",
    action_compliance_5_source: "Cold Chain Telemetry Watch",
    action_compliance_5_impact: "Cargo Quarantine",
    action_compliance_6_title: "Supplier SLA Leadtime Breach",
    action_compliance_6_desc: "Subcontractor delivery arrival logged 5 days past due window. Penalty clause auto-flagged.",
    action_compliance_6_source: "SLA Leadtime Tracker",
    action_compliance_6_impact: "SLA Penalty Fee",
    action_compliance_7_title: "Security Key Expiration Threat",
    action_compliance_7_desc: "Active admin session credential expiring in 6 days. Automatic renewal pending verification.",
    action_compliance_7_source: "Key Credentials Monitor",
    action_compliance_7_impact: "Key Renewal Audit",

    action_finance_4_title: "Tariff Mismatch Penalty Claim",
    action_finance_4_desc: "HS Code 8479.89.97 was double-billed for port services. Dispute draft queued.",
    action_finance_4_source: "Billing Dispute Agent",
    action_finance_4_impact: "+$3,450.00 Refund",
    action_finance_5_title: "Fuel Surcharge Discrepancy",
    action_finance_5_desc: "Logistics carrier invoiced fuel charge 12% above negotiated contract index rate. Held.",
    action_finance_5_source: "Fuel Rate Auditor",
    action_finance_5_impact: "+$1,820.00 Hold",
    action_finance_6_title: "Detention Claim Recovery",
    action_finance_6_desc: "Excessive wait-time demurrage fees of $3,200 detected on shipment #SH-908B. Reclaim active.",
    action_finance_6_source: "Detention Claim Audit",
    action_finance_6_impact: "+$3,200.00 Refund",
    action_finance_7_title: "Early Settlement Discount",
    action_finance_7_desc: "Opportunity to apply 2% prompt payment term discount for supplier PO-901 identified.",
    action_finance_7_source: "Cashflow Optimizer",
    action_finance_7_impact: "+$1,240.00 Save",

    action_route_4_title: "Port Congestion Bypass",
    action_route_4_desc: "Houston Port Terminal Gate 4 experiencing 4-hour delays. Fleet routed to Gate B entry point.",
    action_route_4_source: "Live Port Terminal Feed",
    action_route_4_impact: "2.5h Delay Avoided",
    action_route_4_from: "Depot A Logistics Gate",
    action_route_4_to: "Gate B Ingress Point",
    action_route_4_var: "Gate B Route Bypass",
    action_route_4_cargo: "Industrial Castings",
    action_route_4_cost: "Delay Minimized",
    action_route_5_title: "Empty Backhaul Consolidation",
    action_route_5_desc: "Consolidating return trip route from Depot B to pick up raw packaging materials from nearest packaging plant.",
    action_route_5_source: "Empty Leg Consolidator",
    action_route_5_impact: "+$2,850.00 Saved",
    action_route_5_from: "Depot B Logistics Gate",
    action_route_5_to: "Local Packaging Plant",
    action_route_5_var: "Return Trip Load",
    action_route_5_cargo: "Paper Containers",
    action_route_5_cost: "$2,850",
    action_route_6_title: "Driver Shortage Reroute",
    action_route_6_desc: "Carrier rescheduled shipment FL309 to rail line transport due to lack of truck driver availability.",
    action_route_6_source: "Intermodal Route Watch",
    action_route_6_impact: "Delivery On-Schedule",
    action_route_6_from: "Depot A Logistics Gate",
    action_route_6_to: "Houston Rail Yards",
    action_route_6_var: "Intermodal Reroute",
    action_route_6_cargo: "Industrial Castings",
    action_route_6_cost: "Time Preserved",
    action_route_7_title: "Port Gate Entry Window Adjustment",
    action_route_7_desc: "Shipment departure scheduled 2 hours early to match low-congestion gate entry windows at Houston Port.",
    action_route_7_source: "Appointment Scheduler",
    action_route_7_impact: "Entry Slot Secured",
    action_route_7_from: "Depot A Logistics Gate",
    action_route_7_to: "Port Appointment Gate",
    action_route_7_var: "Window Secured",
    action_route_7_cargo: "Industrial Castings",
    action_route_7_cost: "On-Time entry",

    action_ops_4_title: "Equipment Maintenance Alert",
    action_ops_4_desc: "Dock 4 conveyor system report lists calibration drift. Preventive check ticket raised.",
    action_ops_4_source: "Equipment Sensor Feed",
    action_ops_4_impact: "Preventive Check",
    action_ops_5_title: "Cargo Receiving Discrepancy",
    action_ops_5_desc: "Inbound package scan count reported 140 units, but invoice specifies 150 units. Flagged.",
    action_ops_5_source: "Inbound Scanning Terminal",
    action_ops_5_impact: "Receiving Quarantine",
    action_ops_6_title: "Out-of-service Reefer Container",
    action_ops_6_desc: "Compressor power degradation warning on refrigerated unit TR-909. Swap required.",
    action_ops_6_source: "Reefer Telemetry Monitor",
    action_ops_6_impact: "Container Swap Queued",
    action_ops_7_title: "Safety Protocol Audit Warning",
    action_ops_7_desc: "Manual logs for fire exit clearance missing supervisor signature. Compliance flag active.",
    action_ops_7_source: "Facility Inspection Sheet",
    action_ops_7_impact: "Safety Check Review"
  },
  Spanish: {
    sidebar_modes: "Modos de Presentación",
    sidebar_selector: "Selector de Pantalla",
    sidebar_control: "Control de Operaciones",
    sidebar_actions: "Acciones del Simulador",
    sidebar_trigger: "Ejecutar Captura (Fetch)",
    nav_twins: "Digital Twin (Canal de Acciones)",
    nav_artifact: "Pantalla de Artefactos",
    nav_remediation: "Flujo de Remediación",
    nav_fetch: "Pantalla del Centro de Captura",
    nav_maturity: "Centro de Madurez",
    nav_profile: "Perfil y Facturación (CU)",
    nav_rules: "Reconciliación de Reglas",
    nav_hypothesis: "Laboratorio de Hipótesis",
    nav_runner: "Runner y Conexiones",
    header_cockpit: "PANEL WEB DE RUNINK",
    header_mtls: "Conexión Segura de Datos",
    header_specs_btn: "INFORMACIÓN DE TELA",
    header_secure_connection: "Conexión de Datos Protegida",
    subtitle_twin: "CANAL DE ACCIONES",
    title_twin: "Gemelo <span>Digital</span>",
    impact_potential: "POTENCIAL DE IMPACTO",
    twin_status: "ESTADO DE GEMELO DIGITAL",
    priority_actions: "ACCIONES PRIORITARIAS",
    subtitle_artifact: "TUBERÍA DE DECISIÓN",
    title_artifact: "Artefacto de <span>Decisión</span>",
    subtitle_remediation: "AUTOMATIZACIÓN SOP",
    title_remediation: "Flujo de <span>Remediación</span>",
    subtitle_fetch: "PORTAL DE INGESTA",
    title_fetch: "Centro de <span>Captura</span>",
    subtitle_maturity: "AUDITORÍA DE DOMINIO",
    title_maturity: "Centro de <span>Madurez</span>",
    subtitle_profile: "PERFIL DE USUARIO",
    title_profile: "Identidad y <span>Facturación</span>",
    subtitle_rules: "REGLAS DE VALIDACIÓN",
    title_rules: "Reconciliación de <span>Reglas</span>",
    subtitle_hypothesis: "LAB DE PREDICCIÓN DE ANOMALÍAS",
    title_hypothesis: "Simulación de <span>Hipóteses</span>",
    subtitle_runner: "CONECTIVIDAD DE PUERTA DE ENLACE",
    title_runner: "Runner y <span>Conexiones</span>",
    admin_creds: "CREDENCIALES DE ADMINISTRADOR",
    cu_consumption: "CONSUMO DE UNIDADES DE CÓMPUTO (CU)",
    integrations: "INTEGRACIONES",
    preferences: "PREFERENCIAS",
    target_language: "Idioma de Destino",
    rotate_key: "🔄 Rotar Clave de Sesión Activa",
    monthly_quota: "Cuota Mensual del Runner",
    doc_reasoning_title: "RAZONAMIENTO DE AUDITORÍA BASADO EN DOCUMENTOS",
    engine_status: "Motor del Juez Forense: Listo",
    doc_reasoning_desc: "Compare documentos físicos (manifiestos, facturas, volcados de origen) con restricciones activas de la base de datos y evalúe las condiciones de cumplimiento.",
    doc_bol: "📄 Manifiesto de Carga del Bill of Lading #FL309",
    doc_invoice: "📄 Factura de Demora de Aduanas HS #INV-908B",
    doc_pii: "📄 Volcado de Origen del Cliente Gold Delta",
    doc_cold: "📄 Registro de Ingesta de Telemetría de Cadena de Frío #CC-204",
    doc_sla: "📄 Libro de Entregas de SLA del Proveedor #SLA-881",
    doc_cert: "📄 Auditoría de Expiración del Certificado de Seguridad #CERT-509",
    doc_masking_py: "🐍 Script Python de Enmascaramiento: data_masking.py",
    doc_demurrage_sql: "💾 Cálculo SQL: calculate_demurrage.sql",
    doc_tariffs_csv: "📊 Tabla de Tarifas: carrier_tariffs.csv",
    doc_route_json: "📋 JSON de Ruta: route_manifest.json",
    doc_temp_py: "🐍 Verificador Python de Temp: temperature_control.py",
    select_rule_label: "Seleccionar Regla de Validación",
    rule_weight_opt: "Regla #4: Margen de Discrepancia de Peso",
    rule_demurrage_opt: "Regla #12: Límite de Demora Aduanera",
    rule_pii_opt: "Regla #7: Política de Enmascaramiento de PII",
    rule_temp_opt: "Regla #9: Política de Umbral de Temperatura",
    rule_sla_opt: "Regla #15: Plazo de SLA del Proveedor",
    rule_cert_opt: "Regla #2: Verificación de Expiración del Certificado de Seguridad",
    btn_run_audit: "Ejecutar Auditoría Forense",
    add_custom_rule_label: "O Crear Nueva Regla de Negocio",
    btn_send_to_lab: "Enviar al Lab (Simulación Sombra)",
    notification_channel_label: "Canales Preferidos",
    audit_terminal: "TERMINAL DE RAZONAMIENTO DE AUDITORÍA",
    react_console_title: "Agente de Validación Semántica (Bucle ReAct)",
    react_console_progress_label: "Progreso de Ejecución ReAct",
    react_btn_abort: "Abortar Transmisión",
    react_btn_resolve: "Aplicar Remediación",

    profile_cert_title: "Clave de Seguridad del Usuario",
    profile_cert_subject: "Identificador:",
    profile_cert_issuer: "Autoridad Emisora:",
    profile_cert_expires: "Expiración:",
    profile_cert_status: "Estado:",
    profile_client_node: "Dispositivo: Cliente Web Compañero",
    profile_admin_title: "Administrador Principal",
    profile_admin_role: "Rol: Líder de Seguridad y Gobernanza",
    profile_cert_status_val: "Encriptado y Activo",
    header_connection_label: "CONEXIÓN: ACTIVA",
    ping_initial: "[SYS] Inicializando conexión de diagnóstico segura...\n",
    ping_success_tpl: "[PING] {name}: ÉXITO (Conexión verificada, latencia {lat})\n",
    ping_button_progress: "Comprobando Puertas de Enlace...",

    worker_pool_1: "Grupo de Trabajo 1 (Aislado)",
    worker_pool_2: "Grupo de Trabajo 2 (Aislado)",
    allocated_limit: "Asignado: 50 CU Límite / Memoria 1GB",
    cu_disclaimer: "* Las unidades de cómputo (CU) se consumen durante las ejecuciones del runner en entornos aislados. El límite se restablece el día 1 de cada mes.",
    test_gateway_btn: "Probar Conexión del Gateway Seguro",
    specs_grpc_title: "⚡ Esquemas de Integración Segura:",

    route_from: "Desde",
    route_to: "Hacia",
    route_variance: "Variación",
    route_cargo: "Carga",
    route_est_leak: "Pérdida Est.",
    call_carrier: "Llamar Transportista",
    call_finance: "Iniciar Llamada de Reclamación",
    call_supplier: "Llamar Agente de Compra",

    slide_0_title: "El Gemelo Digital para <span>Operaciones Empresariales</span>",
    slide_0_body: "Fundamentando los flujos de agentes autónomos en una lógica de cumplimiento validada. Auditamos canales de transacciones, analizamos flujos de caja y reconciliamos manuales operativos con bases de datos activas mediante IA local de forma segura.",
    slide_1_title: "Alineando a los <span>Líderes de Negocio</span>",
    slide_1_body: "Abordando las ineficiencias operativas mediante perfiles de especialistas agenticos dedicados:",
    slide_1_cfo: "<strong>El CFO:</strong> Identifica pérdida de margen por discrepancias de demurrage portuario. <em>\"Convierta los reclamos de reembolso en beneficio neto.\"</em>",
    slide_1_ops: "<strong>Director de Ops:</strong> Evita divergencias entre las reglas de base de datos y manuales operativos escritos. <em>\"Verifique si lo observado coincide con lo esperado.\"</em>",
    slide_1_revops: "<strong>Gerente de RevOps:</strong> Protege la ingesta de datos contra alucinaciones de modelos públicos. <em>\"La ejecución local garantiza la seguridad de datos.\"</em>",
    slide_1_shipper: "<strong>Despachante/Broker:</strong> Minimiza retrasos portuarios mediante auditorías automáticas de aranceles. <em>\"Actúa como un paralegal de aduanas autónomo.\"</em>",
    slide_2_title: "Runink Monitor y <span>Gemelos Activos</span>",
    slide_2_mon_title: "1. Monitor Runink",
    slide_2_mon_body: "Recopila telemetría de datos no invasiva, agrupa incidencias semánticas, mapea reglas operativas y valida flujos de caja en contenedores seguros aislados.",
    slide_2_twin_title: "2. Gemelos Activos",
    slide_2_twin_body: "Ejecuta resoluciones inferidas en forma de borradores listos (alertas de WhatsApp, e-mails, scripts) que esperan una autorización humana rápida.",
    slide_3_title: "Gestión de <span>Reclamaciones de Puerto</span>",
    slide_3_body: "Automatización de auditorías de demurrage en aduanas para eliminar sobrecargos:",
    slide_3_step1: "<strong>Recuperación de Datos:</strong> Conexión segura con los almacenes de datos.",
    slide_3_step2: "<strong>Verificación Arancelaria:</strong> Cruce de códigos HS de aduanas contra políticas corporativas.",
    slide_3_step3: "<strong>Simulación:</strong> Predicción de riesgos de retención en entornos de ejecución aislados.",
    slide_3_step4: "<strong>Síntesis:</strong> Redacción automática del correo de disputa por discrepancia de peso.",
    slide_3_step5: "<strong>Despacho:</strong> Aprobación final de la reclamación en el Cockpit con un solo clic.",
    slide_4_title: "Pedidos de Compra <span>Preventivos</span>",
    slide_4_body: "Prevención de roturas de inventario mediante análisis predictivo de demanda:",
    slide_4_step1: "<strong>Escaneo de Telemetría:</strong> Consolidación de existencias en los centros logísticos.",
    slide_4_step2: "<strong>Estacionalidad:</strong> Filtrado de fluctuaciones estacionales para compras optimizadas.",
    slide_4_step3: "<strong>Lanzamiento al ERP:</strong> Envío directo de la orden de compra al sistema de gestión Odoo.",
    slide_iot_title: "Mantenimiento <span>Predictivo</span>",
    slide_iot_body: "Automatización de revisiones de salud de equipos mediante dispositivos inteligentes sobre telemetría IoT:",
    slide_iot_step1: "<strong>Escaneo de Telemetría:</strong> Agrega lecturas RFID de operaciones de palets.",
    slide_iot_step2: "<strong>Detección de Anomalías:</strong> Identifica operaciones en declive debido a mantenimiento aplazado.",
    slide_iot_step3: "<strong>Síntesis:</strong> Redacta una solicitud inmediata de programación al departamento/proveedor.",
    slide_iot_step4: "<strong>Despacho:</strong> El gerente revisa y envía la solicitud de servicio con un solo clic.",
    slide_5_title: "Garantías de <span>Seguridad de Datos</span>",
    slide_5_body: "Diseñado para el aislamiento estricto de información y cumplimiento de normativas de auditoría:",
    slide_5_sec1: "<strong>✓ Procesamiento Local Seguro:</strong> La IA se ejecuta localmente. Sus datos corporativos nunca se envían a servidores externos.",
    slide_5_sec2: "<strong>✓ Ejecución Aislada de Tareas:</strong> Las tareas automatizadas corren en sandboxes seguras sin riesgo de accesos no autorizados.",
    slide_5_sec3: "<strong>✓ Sincronización en Tiempo Real:</strong> Sincronización continua de las reglas del negocio de manera encriptada.",
    slide_5_sec4: "<strong>✓ Cumplimiento ISO 42001:</strong> Marcadores de IA (✨) visibles en todas las resoluciones simuladas para máxima trazabilidad.",

    action_sentinel_1_title: "Intento de Acceso Sospechoso",
    action_sentinel_1_desc: "Intento de iniciar sesión en el portal de socios desde fuera de la red corporativa autorizada. Acceso bloqueado automáticamente.",
    action_sentinel_1_source: "Portal de Acesso de Seguridad",
    action_sentinel_2_title: "Pico de Facturación Sospechoso",
    action_sentinel_2_desc: "Pico inusual en la frecuencia de generación de facturas fuera del horario comercial. Acceso suspendido para verificación.",
    action_sentinel_2_source: "Filtro de Anomalías de Acceso",
    action_sentinel_3_title: "Registro de Proveedor No Aprobado",
    action_sentinel_3_desc: "Intento automatizado de registrar un perfil de proveedor sin la correspondiente aprobación de compras. Registro bloqueado.",
    action_sentinel_3_source: "Filtro de Seguridad de Registro",

    action_forge_1_title: "Borrador Preventivo de Pedido",
    action_forge_1_desc: "Pedido de compra pré-aprovado generado automáticamente para reducir tiempos de entrega ante alertas de inflación.",
    action_forge_1_source: "Simulador de Escenarios de Demanda",
    action_forge_1_impact: "Evitar Interrupción de $45,000",
    action_forge_2_title: "Optimización de Contrato de Material",
    action_forge_2_desc: "Propuesta de renegociación contractual basada en la caída de precios de materias primas, proyectando un ahorro del 8%.",
    action_forge_2_source: "Analizador Semántico de Contratos",
    action_forge_2_impact: "+$22,500.00",
    action_forge_3_title: "Pre-asignación de Espacio de Almacén",
    action_forge_3_desc: "Planificación de consolidación de carga para temporada alta, reduciendo costos de almacenamiento externo.",
    action_forge_3_source: "Simulador de Espacio Logístico",
    action_forge_3_impact: "Ahorro de Custo de 12%",

    action_compliance_1_title: "Riesgo de Exposición de Datos",
    action_compliance_1_desc: "Campos de datos de clientes accedidos sin enmascaramiento en reportes operativos. Visualización pausada para ajuste.",
    action_compliance_1_source: "Filtro de Protección de Datos",
    action_compliance_1_impact: "Acción de Cumplimiento",
    action_compliance_2_title: "Falta Documentación de Importación",
    action_compliance_2_desc: "Manifiesto de carga no cuenta con el certificado ambiental de emisiones obligatorio. Documento requerido.",
    action_compliance_2_source: "Validador de Reglas Aduaneras",
    action_compliance_2_impact: "Evitar Multa de Carga",
    action_compliance_3_title: "Vencimiento de Licencia de Socio",
    action_compliance_3_desc: "Socio logístico operando con licencia de transporte que expira en 3 días. Validación requerida.",
    action_compliance_3_source: "Auditor de Licencias de Socios",
    action_compliance_3_impact: "Evitar Parada Operativa",

    action_finance_1_title: "Cobro de Demurrage en Aduanas",
    action_finance_1_desc: "Divergencia de código arancelario HS detectada en facturas de puerto. Borrador de disputa de reembolso generado.",
    action_finance_1_source: "Auditor de Facturas de Puerto",
    action_finance_1_impact: "+$18,200.00",
    action_finance_2_title: "Descuento de Proveedor No Aplicado",
    action_finance_2_desc: "La factura del proveedor no incluyó el descuento acordado del 3% por pago anticipado. Re-facturación solicitada.",
    action_finance_2_source: "Reconciliación de Facturas",
    action_finance_2_impact: "+$6,150.00",
    action_finance_3_title: "Duplicidad de Factura Detectada",
    action_finance_3_desc: "Factura duplicada identificada para el servicio de flete. Cobro redundante bloqueado en el sistema.",
    action_finance_3_source: "Detector de Facturación Duplicada",
    action_finance_3_impact: "+$9,400.00",

    action_route_1_title: "Desviación de Peso en Ruta",
    action_route_1_desc: "Desviación de peso del 14.5% entre manifiesto (BOL) y la báscula física. Embarque retenido para auditoría.",
    action_route_1_source: "Monitor de Pesaje de Carga",
    action_route_1_impact: "+$12,450.00",
    action_route_1_from: "Balanza de Salida Depósito A",
    action_route_1_to: "Terminal del Puerto de Houston",
    action_route_1_var: "14.5%",
    action_route_1_cargo: "Fundiciones Industriales",
    action_route_1_cost: "$12,450",
    action_route_2_title: "Optimización de Retorno Vacío",
    action_route_2_desc: "Camión de retorno vacío del Depósito B redireccionado para recolección de devoluciones, ahorrando costos.",
    action_route_2_source: "Optimizador de Rutas Flotantes",
    action_route_2_impact: "+$1,850.00",
    action_route_2_from: "Salida de Depósito B",
    action_route_2_to: "Punto de Retorno Proveedor",
    action_route_2_var: "Retorno con Carga",
    action_route_2_cargo: "Mercadería Devuelta",
    action_route_2_cost: "$1,850",
    action_route_3_title: "Desvío por Clima Adverso",
    action_route_3_desc: "Envío del Puerto de Houston desviado de su ruta por alerta de tormenta para proteger el plazo de entrega.",
    action_route_3_source: "Enrutador Inteligente de Flota",
    action_route_3_impact: "Lead-Time Asegurado",
    action_route_3_from: "Puerto de Houston",
    action_route_3_to: "Entrada del Depósito A",
    action_route_3_var: "Desviado / A Tiempo",
    action_route_3_cargo: "Materias Primas",
    action_route_3_cost: "Preservado",

    action_ops_1_title: "Alerta de Inventario Mínimo",
    action_ops_1_desc: "El inventario del almacén cayó por debajo del 15% del límite de stock de seguridad para el trimestre.",
    action_ops_1_source: "Gestor de Stock y Demanda",
    action_ops_1_impact: "Riesgo de Plazo de Entrega",
    action_ops_2_title: "Riesgo de Parada en Ensamblaje",
    action_ops_2_desc: "Atraso en llegada de componentes críticos amenaza la línea de producción 3. Movilizando stock de emergencia.",
    action_ops_2_source: "Planificador de Producción",
    action_ops_2_impact: "Evitar Costo de Parada",
    action_ops_3_title: "Temperatura en Cadena de Frío",
    action_ops_3_desc: "Contenedor de alimentos frescos registra temperatura superior al límite recomendado. Soporte técnico enviado.",
    action_ops_3_source: "Controlador de Cadena de Frío",
    action_ops_3_impact: "Carga Preservada",

    action_sentinel_4_title: "Alerta de Consulta de Tabla Privilegiada",
    action_sentinel_4_desc: "Consulta directa ejecutada en la tabla de credenciales sin formato por una identidad que no es de administrador. Bloqueado.",
    action_sentinel_4_source: "Filtro de Auditoría de Acceso",
    action_sentinel_5_title: "Rotación de Clave Sospechosa",
    action_sentinel_5_desc: "Múltiples solicitudes de rotación de clave de sesión recibidas en 1 minuto. Bloqueo de zona de pruebas activado.",
    action_sentinel_5_source: "Guardia de Política de Seguridad",
    action_sentinel_6_title: "Intento de Ingesta No Enmascarado",
    action_sentinel_6_desc: "Conexión externa intentó ingerir registros de clientes sin variables de hash. En cuarentena.",
    action_sentinel_6_source: "Filtro de Ingesta de Datos",
    action_sentinel_7_title: "Violación de Límite de Token de API",
    action_sentinel_7_desc: "Token de acceso generado para el portal de socios fuera de los límites geográficos estándar. Suspendido.",
    action_sentinel_7_source: "Agente de Geocerca",

    action_forge_4_title: "Programación de Despacho de Transporte",
    action_forge_4_desc: "Programación automática generada para recolecciones de transportistas vacíos para evitar la congestión del depósito la próxima semana.",
    action_forge_4_source: "Planificador de Despacho",
    action_forge_4_impact: "Optimización Logística",
    action_forge_5_title: "Sugerencia de Reenvío de Cadena de Suministro",
    action_forge_5_desc: "Plan de gemelo sintético para cambiar el abastecimiento de materia prima al proveedor secundario debido a la alerta de tormenta.",
    action_forge_5_source: "Motor de Abastecimiento Alternativo",
    action_forge_5_impact: "+$12,500.00 Ahorrado",
    action_forge_6_title: "Borrador de Factura de Disputa por Demora",
    action_forge_6_desc: "Carta de reembolso de tarifa redactada basada en la discrepancia del código de aduanas del HS, reclamando $18,200.00.",
    action_forge_6_source: "Generador de Reclamaciones en Disputa",
    action_forge_6_impact: "+$18,200.00 Reclamación",
    action_forge_7_title: "Sugerencia de Reorden de Inventario",
    action_forge_7_desc: "Solicitud de compra precalculada generada para el reabastecimiento seguro de existencias antes del cierre.",
    action_forge_7_source: "Agente de Reorden Predictivo",
    action_forge_7_impact: "Búfer de Stock de Seguridad",

    action_compliance_4_title: "Desviación de Calibración Reportada",
    action_compliance_4_desc: "El margen de desviación de peso en la báscula del Muelle 4 superó los límites durante el procesamiento de la carga entrante.",
    action_compliance_4_source: "Vigilancia de Integridad de la Báscula",
    action_compliance_4_impact: "Auditoría de Calibración",
    action_compliance_5_title: "Excursión de Temperatura de Cadena de Frío",
    action_compliance_5_desc: "El contenedor de carga refrigerado informó temperaturas superiores al límite de -18°C. Regla de cuarentena activa.",
    action_compliance_5_source: "Vigilancia de Cadena de Frío",
    action_compliance_5_impact: "Cuarentena de Carga",
    action_compliance_6_title: "Incumplimiento de SLA del Proveedor",
    action_compliance_6_desc: "La llegada de la entrega del subcontratista se registró 5 dias después de la fecha límite. Cláusula de penalización activada.",
    action_compliance_6_source: "Rastreador de SLA de Entrega",
    action_compliance_6_impact: "Multa de SLA",
    action_compliance_7_title: "Amenaza de Vencimiento de Clave de Seguridad",
    action_compliance_7_desc: "Credencial de sesión de administrador activa que vence en 6 días. Renovación automática pendiente de verificación.",
    action_compliance_7_source: "Monitor de Credenciales de Clave",
    action_compliance_7_impact: "Auditoría de Renovación",

    action_finance_4_title: "Reclamación de Multa por Discrepancia Arancelaria",
    action_finance_4_desc: "El código arancelario HS 8479.89.97 fue facturado dos veces por servicios portuarios. Borrador de disputa en cola.",
    action_finance_4_source: "Agente de Disputas de Facturación",
    action_finance_4_impact: "+$3,450.00 Reembolso",
    action_finance_5_title: "Discrepancia en Recargo por Combustible",
    action_finance_5_desc: "El transportista logístico facturó el cargo por combustible un 12% por encima de la tasa del contrato. Retenido.",
    action_finance_5_source: "Auditor de Tarifas de Combustible",
    action_finance_5_impact: "+$1,820.00 Retención",
    action_finance_6_title: "Recuperación de Reclamación por Detención",
    action_finance_6_desc: "Tarifas excesivas de demora por tiempo de espera de $3,200 detectadas en el envío #SH-908B. Reclamación activa.",
    action_finance_6_source: "Auditoría de Reclamación por Detención",
    action_finance_6_impact: "+$3,200.00 Reembolso",
    action_finance_7_title: "Descuento por Liquidación Anticipada",
    action_finance_7_desc: "Oportunidad identificada para aplicar un 2% de descuento por pago anticipado al proveedor PO-901.",
    action_finance_7_source: "Optimizador de Flujo de Caja",
    action_finance_7_impact: "+$1,240.00 Ahorro",

    action_route_4_title: "Desvío por Congestión en Puerto",
    action_route_4_desc: "La Puerta 4 de la Terminal del Puerto de Houston experimenta demoras de 4 horas. Flota dirigida a la Puerta B.",
    action_route_4_source: "Live Port Terminal Feed",
    action_route_4_impact: "2.5h Retraso Evitado",
    action_route_4_from: "Puerta de Salida Depósito A",
    action_route_4_to: "Punto de Entrada Puerta B",
    action_route_4_var: "Desvío de Rota de Puerta B",
    action_route_4_cargo: "Fundiciones Industriales",
    action_route_4_cost: "Retraso Minimizado",
    action_route_5_title: "Consolidación de Retorno Vacío",
    action_route_5_desc: "Consolidación de ruta de retorno desde el Depósito B para recoger materias primas de embalaje en la planta más cercana.",
    action_route_5_source: "Consolidador de Viajes Vacíos",
    action_route_5_impact: "+$2,850.00 Ahorrado",
    action_route_5_from: "Puerta de Salida Depósito B",
    action_route_5_to: "Planta Local de Embalaje",
    action_route_5_var: "Carga de Viaje de Retorno",
    action_route_5_cargo: "Contenedores de Papel",
    action_route_5_cost: "$2,850",
    action_route_6_title: "Desvío por Escasez de Conductores",
    action_route_6_desc: "El transportista reprogramó el envío FL309 al transporte ferroviario debido a la falta de disponibilidad de conductores.",
    action_route_6_source: "Monitoreo de Rota Intermodal",
    action_route_6_impact: "Entrega Programada",
    action_route_6_from: "Puerta de Salida Depósito A",
    action_route_6_to: "Patios Ferroviarios de Houston",
    action_route_6_var: "Desvío Intermodal",
    action_route_6_cargo: "Fundiciones Industriales",
    action_route_6_cost: "Tiempo Preservado",
    action_route_7_title: "Ajuste de Ventana de Entrada al Puerto",
    action_route_7_desc: "Salida del envío programada 2 horas antes para coincidir con ventanas de entrada de baja congestión en el puerto.",
    action_route_7_source: "Programador de Citas",
    action_route_7_impact: "Ventana Asegurada",
    action_route_7_from: "Puerta de Salida Depósito A",
    action_route_7_to: "Puerta de Cita del Puerto",
    action_route_7_var: "Ventana Asegurada",
    action_route_7_cargo: "Fundiciones Industriales",
    action_route_7_cost: "Entrada a Tiempo",

    action_ops_4_title: "Alerta de Mantenimiento de Equipos",
    action_ops_4_desc: "El informe del sistema de transporte del Muelle 4 registra una desviación de calibración. Ticket de revisión preventiva creado.",
    action_ops_4_source: "Sensor de Equipos",
    action_ops_4_impact: "Revisión Preventiva",
    action_ops_5_title: "Discrepancia en Recepción de Carga",
    action_ops_5_desc: "El escaneo de entrada registró 140 unidades, pero la factura especifica 150 unidades. Marcado.",
    action_ops_5_source: "Terminal de Escaneo de Entrada",
    action_ops_5_impact: "Cuarentena de Recepción",
    action_ops_6_title: "Contenedor Reefer Fuera de Servicio",
    action_ops_6_desc: "Advertencia de degradación de potencia del compresor en la unidad refrigerada TR-909. Intercambio requerido.",
    action_ops_6_source: "Monitoreo de Telemetría Reefer",
    action_ops_6_impact: "Intercambio en Cola",
    action_ops_7_title: "Advertencia de Auditoría de Protocolo de Seguridad",
    action_ops_7_desc: "Los registros manuales para la liberación de salidas de emergencia no cuentan con la firma del supervisor. Bandera activa.",
    action_ops_7_source: "Hoja de Inspección del Centro",
    action_ops_7_impact: "Revisión de Seguridad"
  },
  French: {
    sidebar_modes: "Modes de Présentation",
    sidebar_selector: "Sélecteur d'Écran",
    sidebar_control: "Contrôle des Opérations",
    sidebar_actions: "Actions du Simulateur",
    sidebar_trigger: "Déclencher l'Acquisition",
    nav_twins: "Digital Twin (Flux d'Actions)",
    nav_artifact: "Écran d'Artéfacts",
    nav_remediation: "Flux de Remédiation",
    nav_fetch: "Centre d'Acquisition",
    nav_maturity: "Centre de Maturité",
    nav_profile: "Profil & Facturation CU",
    nav_rules: "Validation des Règles",
    nav_hypothesis: "Lab d'Hypothèses",
    nav_runner: "Runner & Connexions",
    header_cockpit: "CABINE WEB RUNINK",
    header_mtls: "Connexion Sécurisée de Données",
    header_specs_btn: "INFORMATIONS SUR L'ÉCRAN",
    header_secure_connection: "Connexion de Données Sécurisée",
    subtitle_twin: "FLUX D'ACTIONS",
    title_twin: "Jumeau <span>Numérique</span>",
    impact_potential: "POTENTIEL D'IMPACT",
    twin_status: "STATUT DU JUMEAU NUMÉRIQUE",
    priority_actions: "ACTIONS PRIORITAIRES",
    subtitle_artifact: "PIPELINE DE DÉCISION",
    title_artifact: "Artéfact de <span>Décision</span>",
    subtitle_remediation: "AUTOMATISATION DES SOP",
    title_remediation: "Flux de <span>Remédiation</span>",
    subtitle_fetch: "PORTAIL D'INGESTION",
    title_fetch: "Centre d'<span>Acquisition</span>",
    subtitle_maturity: "AUDIT DE DOMAINE",
    title_maturity: "Centre de <span>Maturité</span>",
    subtitle_profile: "PROFIL DE L'UTILISATEUR",
    title_profile: "Identité & <span>Facturation</span>",
    subtitle_rules: "RÈGLES DE VALIDATION",
    title_rules: "Rapprochement des <span>Règles</span>",
    subtitle_hypothesis: "LAB DE PRÉDICTION D'ANOMALIES",
    title_hypothesis: "Simulation d'<span>Hypothèses</span>",
    subtitle_runner: "CONNECTIVITÉ PASSERELLE",
    title_runner: "Runner & <span>Connexions</span>",
    admin_creds: "IDENTIFIANTS DE L'ADMINISTRATEUR",
    cu_consumption: "CONSOMMATION D'UNITÉS DE CALCUL (CU)",
    integrations: "INTÉGRATIONS",
    preferences: "PRÉFÉRENCES",
    target_language: "Langue Cible",
    rotate_key: "🔄 Pivoter la Clé de Session Active",
    monthly_quota: "Quota Mensuel du Runner",
    doc_reasoning_title: "RAISONNEMENT D'AUDIT BASÉ SUR LES DOCUMENTS",
    engine_status: "Moteur du Juge Judiciaire: Prêt",
    doc_reasoning_desc: "Comparez les documents physiques (manifestes, factures, vidages de source) aux contraintes actives de la base de données et évaluez les conditions de conformité.",
    doc_bol: "📄 Manifeste de Cargaison du Connaissement #FL309",
    doc_invoice: "📄 Facture de Surestaries Douanières HS #INV-908B",
    doc_pii: "📄 Vidage Source Client Gold Delta",
    doc_cold: "📄 Journal d'Ingestion de la Chaîne du Froid #CC-204",
    doc_sla: "📄 Registre des Livraisons SLA Fournisseur #SLA-881",
    doc_cert: "📄 Audit d'Expiration du Certificat de Sécurité #CERT-509",
    doc_masking_py: "🐍 Script Python de Masquage : data_masking.py",
    doc_demurrage_sql: "💾 Calcul SQL : calculate_demurrage.sql",
    doc_tariffs_csv: "📊 Table des Tarifs : carrier_tariffs.csv",
    doc_route_json: "📋 JSON de Route : route_manifest.json",
    doc_temp_py: "🐍 Vérificateur Python de Temp : temperature_control.py",
    select_rule_label: "Sélectionner la Règle de Validation",
    rule_weight_opt: "Règle #4: Marge d'Écart de Poids",
    rule_demurrage_opt: "Règle #12: Plafond de Surestaries Douanières",
    rule_pii_opt: "Règle #7: Politique de Masquage des Données PII",
    rule_temp_opt: "Règle #9: Politique de Seuil de Température",
    rule_sla_opt: "Règle #15: Délai de Livraison SLA Fournisseur",
    rule_cert_opt: "Règle #2: Contrôle d'Expiration du Certificat de Sécurité",
    btn_run_audit: "Exécuter l'Audit Judiciaire",
    add_custom_rule_label: "Ou Créer une Nouvelle Règle Métier",
    btn_send_to_lab: "Envoyer au Lab (Simulation Ombre)",
    notification_channel_label: "Canaux Préférés",
    audit_terminal: "CONSOLE DE RAISONNEMENT D'AUDIT",
    react_console_title: "Agent de Validation Sémantique (Boucle ReAct)",
    react_console_progress_label: "Progrès de l'Exécution ReAct",
    react_btn_abort: "Abandonner le Flux",
    react_btn_resolve: "Appliquer la Remédiation",

    profile_cert_title: "Clé de Sécurité de l'Utilisateur",
    profile_cert_subject: "Identifiant:",
    profile_cert_issuer: "Autorité Émettrice:",
    profile_cert_expires: "Expiration:",
    profile_cert_status: "Statut:",
    profile_client_node: "Appareil: Client Web Compagnon",
    profile_admin_title: "Administrateur Principal",
    profile_admin_role: "Rôle: Responsable Sécurité & Gouvernance",
    profile_cert_status_val: "Chiffré & Actif",
    header_connection_label: "CONNEXION: ACTIVE",
    ping_initial: "[SYS] Initialisation de la connexion de diagnostic sécurisée...\n",
    ping_success_tpl: "[PING] {name}: SUCCÈS (Connexion vérifiée, latence {lat})\n",
    ping_button_progress: "Test des Passerelles Sécurisées...",

    worker_pool_1: "Pool de Travail 1 (Isolé)",
    worker_pool_2: "Pool de Travail 2 (Isolé)",
    allocated_limit: "Alloué: Limite de 50 CU / Mémoire 1Go",
    cu_disclaimer: "* Les unités de calcul (CU) sont consommées lors des exécutions du runner dans des environnements isolés. Le quota est réinitialisé le 1er de chaque mois.",
    test_gateway_btn: "Tester la Connexion de la Passerelle",
    specs_grpc_title: "⚡ Schémas d'Intégration Sécurisés:",

    route_from: "De",
    route_to: "À",
    route_variance: "Écart",
    route_cargo: "Cargaison",
    route_est_leak: "Perte Est.",
    call_carrier: "Appeler Transporteur",
    call_finance: "Lancer l'Appel de Réclamation",
    call_supplier: "Appeler Agent Fournisseur",

    // Slide translations
    slide_0_title: "Le Jumeau Numérique pour <span>Opérations d'Entreprise</span>",
    slide_0_body: "Ancrage des flux d'agents autonomes dans une logique de conformité validée. Nous auditons les flux de transactions, analysons les flux de trésorerie et rapprochons les SOP écrites des bases de données de manière sécurisée sous IA locale.",
    slide_1_title: "Alignement des <span>Parties Prenantes</span>",
    slide_1_body: "Résolution des inefficacités opérationnelles grâce à des profils de spécialistes agentiques dédiés :",
    slide_1_cfo: "<strong>Le CFO:</strong> Analyse les pertes de marge dues aux surestaries portuaires. <em>\"Transformez les réclamations de remboursement en bénéfice net.\"</em>",
    slide_1_ops: "<strong>Directeur des Opérations:</strong> Évite les divergences entre les bases de données et les manuels opérationnels. <em>\"Vérifiez si l'observé correspond à l'attendu.\"</em>",
    slide_1_revops: "<strong>Gestionnaire RevOps:</strong> Protège l'ingestion des données contre les hallucinations des IA publiques. <em>\"L'exécution locale garantit la sécurité des données.\"</em>",
    slide_1_shipper: "<strong>Transitaire/Broker:</strong> Réduit les surestaries portuaires grâce à des audits automatiques de tarifs. <em>\"Agit en tant que parajuriste autonome.\"</em>",
    slide_2_title: "Moniteur Runink & <span>Jumeaux Actionnables</span>",
    slide_2_mon_title: "1. Moniteur Runink",
    slide_2_mon_body: "Collecte une télémétrie de requêtes non invasive, regroupe les anomalies sémantiques, valide les règles métier et teste les flux financiers en sandbox isolée.",
    slide_2_twin_title: "2. Jumeaux Actionnables",
    slide_2_twin_body: "Exécute les résolutions sous forme de projets prêts (alertes WhatsApp, e-mails, scripts SQL) nécessitant une confirmation humaine rapide.",
    slide_3_title: "Gestion des <span>Réclamations Portuaires</span>",
    slide_3_body: "Automatisation de l'audit des frais de surestaries douanières pour éliminer les pertes :",
    slide_3_step1: "<strong>Récupération des Données:</strong> Connexion sécurisée aux bases de données.",
    slide_3_step2: "<strong>Contrôle Tarifaire:</strong> Analyse des codes HS par rapport aux règles de conformité.",
    slide_3_step3: "<strong>Simulation:</strong> Calcul de la probabilité de retenue de conteneurs en sandbox isolée.",
    slide_3_step4: "<strong>Synthèse:</strong> Rédaction automatique de l'e-mail de litige pour écart de poids.",
    slide_3_step5: "<strong>Envoi:</strong> Approbation finale de l'action dans le cockpit en un clic.",
    slide_4_title: "Commandes d'Achat <span>Préemptives</span>",
    slide_4_body: "Évitement des ruptures de stock grâce à l'analyse prédictive de la demande :",
    slide_4_step1: "<strong>Lecture de Télémétrie:</strong> Agrégation des données d'inventaire des dépôts.",
    slide_4_step2: "<strong>Saisonnalité:</strong> Filtrage des variations de demande saisonnière.",
    slide_4_step3: "<strong>Mise à jour ERP:</strong> Envoi direct de la commande d'achat au système ERP Odoo.",
    slide_iot_title: "Maintenance <span>Prédictive</span>",
    slide_iot_body: "Automatisation des contrôles de santé des équipements via des appareils intelligents sur données de télémétrie IoT :",
    slide_iot_step1: "<strong>Scan Télémétrique:</strong> Agrège les lectures RFID des opérations de palettes.",
    slide_iot_step2: "<strong>Détection d'Anomalie:</strong> Identifie les baisses d'opérations dues au report de la maintenance.",
    slide_iot_step3: "<strong>Synthèse:</strong> Rédige une demande de planification immédiate au département/fournisseur.",
    slide_iot_step4: "<strong>Envoi:</strong> Le responsable examine et envoie la demande de service en un clic.",
    slide_5_title: "Sécurité et <span>Confiance Totale</span>",
    slide_5_body: "Conçu pour l'isolement strict des données et le respect des règles d'audit d'entreprise :",
    slide_5_sec1: "<strong>✓ Traitement local de l'IA:</strong> L'IA fonctionne localement. Les données de l'entreprise ne sont jamais transmises à des tiers.",
    slide_5_sec2: "<strong>✓ Exécution en Sandbox:</strong> Les scripts s'exécutent dans des environnements isolés sans aucun risque d'accès non autorisé.",
    slide_5_sec3: "<strong>✓ Synchro en Temps Réel:</strong> Synchronisation chiffrée continue de l'ensemble des règles métier.",
    slide_5_sec4: "<strong>✓ Conformité ISO 42001:</strong> Ajout d'indicateurs d'IA (✨) dans toutes les résolutions générées pour une traçabilité totale.",

    action_sentinel_1_title: "Tentative d'Accès Suspecte",
    action_sentinel_1_desc: "Tentative de connexion au portail partenaire en dehors du réseau d'entreprise autorisé. Accès bloqué automatiquement.",
    action_sentinel_1_source: "Passerelle de Sécurité d'Accès",
    action_sentinel_2_title: "Pic de Facturation Suspect",
    action_sentinel_2_desc: "Pic inhabituel de la fréquence de génération de factures en dehors des heures de bureau. Accès suspendu pour vérification.",
    action_sentinel_2_source: "Filtre d'Anomalies d'Accès",
    action_sentinel_3_title: "Inscription Fournisseur Non Approuvée",
    action_sentinel_3_desc: "Tentative automatisée d'enregistrement d'un profil de fournisseur sans approbation interne. Enregistrement bloqué.",
    action_sentinel_3_source: "Filtre de Sécurité d'Inscription",

    action_forge_1_title: "Projet de Commande Préemptive",
    action_forge_1_desc: "Commande d'achat pré-approuvée générée pour compresser les délais face aux anomalies d'inflation prévues.",
    action_forge_1_source: "Simulateur de Scénarios de Demande",
    action_forge_1_impact: "Éviter Interruption de $45,000",
    action_forge_2_title: "Optimisation de Contrat de Matière",
    action_forge_2_desc: "Projet de renégociation de contrat basé sur la baisse récente des matières premières, visant 8% d'économies.",
    action_forge_2_source: "Analyseur Sémantique de Contrats",
    action_forge_2_impact: "+$22,500.00",
    action_forge_3_title: "Pré-allocation d'Espace de Stockage",
    action_forge_3_desc: "Consolidation automatique de cargaisons pour la haute saison, réduisant les coûts d'entreposage externe.",
    action_forge_3_source: "Simulateur d'Espace de Stockage",
    action_forge_3_impact: "Réduction des Coûts de 12%",

    action_compliance_1_title: "Risque d'Exposition de Données",
    action_compliance_1_desc: "Données clients affichées sans masquage de conformité dans des rapports opérationnels. Affichage suspendu.",
    action_compliance_1_source: "Filtre de Protection des Données",
    action_compliance_1_impact: "Mesure de Conformité",
    action_compliance_2_title: "Document d'Importation Manquant",
    action_compliance_2_desc: "Le manifeste de cargaison ne contient pas le certificat environnemental d'émissions obligatoire. Action requise.",
    action_compliance_2_source: "Validateur de Règles Réglementaires",
    action_compliance_2_impact: "Éviter Pénalité de Cargo",
    action_compliance_3_title: "Expiration de la Licence Partenaire",
    action_compliance_3_desc: "Partenaire logistique opérant avec une licence de transport expirant dans 3 jours. Vérification requise.",
    action_compliance_3_source: "Auditeur des Licences Partenaires",
    action_compliance_3_impact: "Éviter l'Arrêt des Opérations",

    action_finance_1_title: "Surcharge de Surestaries Douanières",
    action_finance_1_desc: "Écart de code tarifaire HS identifié sur les factures portuaires. Projet de contestation de remboursement rédigé.",
    action_finance_1_source: "Auditeur de Factures d'Importation",
    action_finance_1_impact: "+$18,200.00",
    action_finance_2_title: "Remise Fournisseur Non Appliquée",
    action_finance_2_desc: "La facture du fournisseur n'a pas inclus la remise de 3% convenue pour paiement anticipé. Facture corrigée requise.",
    action_finance_2_source: "Réconciliation Automatisée de Factures",
    action_finance_2_impact: "+$6,150.00",
    action_finance_3_title: "Double Facturation Détectée",
    action_finance_3_desc: "Double saisie identifiée pour le service de fret. Facturation redundante bloquée dans le système.",
    action_finance_3_source: "Détecteur de Double Facturation",
    action_finance_3_impact: "+$9,400.00",

    action_route_1_title: "Écart de Poids sur l'Itinéraire",
    action_route_1_desc: "Écart de poids de 14.5% identifié entre le connaissement (BOL) et le pesage physique. Envoi retenu pour audit.",
    action_route_1_source: "Contrôleur de Pesée de Cargo",
    action_route_1_impact: "+$12,450.00",
    action_route_1_from: "Balance de Sortie Dépôt A",
    action_route_1_to: "Terminal du Port de Houston",
    action_route_1_var: "14.5%",
    action_route_1_cargo: "Moulages Industriels",
    action_route_1_cost: "$12,450",
    action_route_2_title: "Optimisation de Retour à Vide",
    action_route_2_desc: "Véhicule retournant à vide depuis le Dépôt B réacheminé pour charger des retours clients, réduisant les frais.",
    action_route_2_source: "Optimizateur d'Itinéraire Logistique",
    action_route_2_impact: "+$1,850.00",
    action_route_2_from: "Sortie du Dépôt B",
    action_route_2_to: "Point d'Interception Fournisseur",
    action_route_2_var: "Retour avec Chargement",
    action_route_2_cargo: "Marchandises Retournées",
    action_route_2_cost: "$1,850",
    action_route_3_title: "Redirection pour Climat Adverse",
    action_route_3_desc: "Cargaison provenant du Port de Houston détournée en raison d'un avis de tempête pour protéger les délais de livraison.",
    action_route_3_source: "Routeur Intelligent de Flotte",
    action_route_3_impact: "Délais de Livraison Garantis",
    action_route_3_from: "Port de Houston",
    action_route_3_to: "Entrée du Dépôt A",
    action_route_3_var: "Redirigé / Dans les Délais",
    action_route_3_cargo: "Matières Premières",
    action_route_3_cost: "Préservé",

    action_ops_1_title: "Alerte de Seuil de Stock",
    action_ops_1_desc: "Le niveau d'inventaire du dépôt est descendu sous le seuil de sécurité de 15% pour le trimestre.",
    action_ops_1_source: "Gestionnaire de Stocks & Demande",
    action_ops_1_impact: "Risque de Délai de Livraison",
    action_ops_2_title: "Risque d'Arrêt de Ligne d'Assemblage",
    action_ops_2_desc: "Le retard de livraison de pièces critiques menace d'arrêter la Ligne 3. Transfert de stock d'urgence lancé.",
    action_ops_2_source: "Planificateur de la Production",
    action_ops_2_impact: "Éviter les Coûts d'Arrêt",
    action_ops_3_title: "Alerte de Température Chaîne du Froid",
    action_ops_3_desc: "Conteneur frigorifique transportant des denrées fraîches signale une température anormale. Équipe de maintenance envoyée.",
    action_ops_3_source: "Moniteur de Chaîne du Froid",
    action_ops_3_impact: "Cargaison Préservée",

    action_sentinel_4_title: "Alerte de Requête de Table Privilégiée",
    action_sentinel_4_desc: "Requête directe exécutée sur la table des identifiants bruts par une identité non-admin. Bloqué.",
    action_sentinel_4_source: "Filtre d'Audit d'Accès",
    action_sentinel_5_title: "Rotation de Clave Suspecte",
    action_sentinel_5_desc: "Plusieurs demandes de rotation de clé de session reçues en moins d'une minute. Verrouillage sandbox activé.",
    action_sentinel_5_source: "Garde de Politique de Sécurité",
    action_sentinel_6_title: "Tentative d'Ingestion Non Masquée",
    action_sentinel_6_desc: "Connexion externe tentant d'ingérer des enregistrements clients sans hachage des variables. Quarantaine engagée.",
    action_sentinel_6_source: "Filtre d'Ingestion de Données",
    action_sentinel_7_title: "Violation de Limite Token API",
    action_sentinel_7_desc: "Token d'accès généré pour le portail partenaire en dehors des limites géographiques standard. Suspendu.",
    action_sentinel_7_source: "Agent de Géorepérage",

    action_forge_4_title: "Planning d'Envoi de Transport",
    action_forge_4_desc: "Planning automatisé généré pour les ramassages de transporteurs à vide afin d'éviter la congestion du dépôt la semaine prochaine.",
    action_forge_4_source: "Planificateur d'Envois",
    action_forge_4_impact: "Optimisation Logistique",
    action_forge_5_title: "Suggestion de Redirection de Flux",
    action_forge_5_desc: "Plan de jumeau synthétique pour transférer l'approvisionnement en matières premières vers un fournisseur secondaire en raison d'une alerte de tempête.",
    action_forge_5_source: "Moteur d'Approvisionnement Alternatif",
    action_forge_5_impact: "+$12,500.00 Économisé",
    action_forge_6_title: "Projet de Litige Frais de Surestaries",
    action_forge_6_desc: "Projet de lettre de remboursement rédigé sur la base d'un écart de code douanier HS, réclamant $18,200.00.",
    action_forge_6_source: "Générateur de Réclamations de Litige",
    action_forge_6_impact: "+$18,200.00 Réclamation",
    action_forge_7_title: "Suggestion de Réapprovisionnement",
    action_forge_7_desc: "Demande d'achat précalculée générée pour le réapprovisionnement sécurisé des stocks avant la fermeture.",
    action_forge_7_source: "Agent de Commande Prédictive",
    action_forge_7_impact: "Stock de Sécurité",

    action_compliance_4_title: "Écart de Calibrage Signalé",
    action_compliance_4_desc: "La marge d'écart de poids sur la balance du Quai 4 a dépassé les limites autorisées lors du traitement des cargaisons entrantes.",
    action_compliance_4_source: "Surveillance de l'Intégrité des Balances",
    action_compliance_4_impact: "Audit de Calibrage",
    action_compliance_5_title: "Excursion Température Chaîne du Froid",
    action_compliance_5_desc: "Le conteneur réfrigéré signale des températures supérieures à la limite de -18°C. Règle de quarantaine active.",
    action_compliance_5_source: "Moniteur de Chaîne du Froid",
    action_compliance_5_impact: "Quarantaine de Cargaison",
    action_compliance_6_title: "Rupture de SLA Fournisseur",
    action_compliance_6_desc: "Arrivée de livraison du sous-traitant enregistrée avec 5 jours de retard. Clause de pénalité activée.",
    action_compliance_6_source: "Rapport de Retards Fournisseurs",
    action_compliance_6_impact: "Pénalité de SLA",
    action_compliance_7_title: "Expiration Clé de Sécurité Proche",
    action_compliance_7_desc: "Identifiant de session administrateur actif expirant dans 6 jours. Renouvellement automatique en attente.",
    action_compliance_7_source: "Moniteur d'Identifiants de Clé",
    action_compliance_7_impact: "Audit de Renouvellement",

    action_finance_4_title: "Litige pour Écart de Code HS",
    action_finance_4_desc: "Le code tarifaire HS 8479.89.97 a été facturé en double pour les services portuaires. Projet de contestation en attente.",
    action_finance_4_source: "Agent de Litige de Facturation",
    action_finance_4_impact: "+$3,450.00 Remboursement",
    action_finance_5_title: "Écart de Surcharge de Carburant",
    action_finance_5_desc: "Le transporteur logistique a facturé le carburant 12% au-dessus du taux contractuel. Retenu.",
    action_finance_5_source: "Auditeur des Tarifs de Carburant",
    action_finance_5_impact: "+$1,820.00 Retenu",
    action_finance_6_title: "Récupération de Surestaries de Rétention",
    action_finance_6_desc: "Frais excessifs de surestaries de $3,200 détectés sur le chargement #SH-908B. Réclamation en cours.",
    action_finance_6_source: "Audit de Réclamation de Rétention",
    action_finance_6_impact: "+$3,200.00 Remboursé",
    action_finance_7_title: "Remise pour Paiement Anticipé",
    action_finance_7_desc: "Opportunité d'appliquer une remise de 2% pour paiement rapide identifiée pour le bon de commande PO-901.",
    action_finance_7_source: "Optimiseur de Trésorerie",
    action_finance_7_impact: "+$1,240.00 Économisé",

    action_route_4_title: "Contournement Congestion Portuaire",
    action_route_4_desc: "Le terminal 4 du Port de Houston subit 4 heures de retard. Flotte redirigée vers le point Gate B.",
    action_route_4_source: "Flux en Direct du Port",
    action_route_4_impact: "2.5h Retard Évité",
    action_route_4_from: "Sortie Balance Dépôt A",
    action_route_4_to: "Entrée Terminal Gate B",
    action_route_4_var: "Contournement Gate B",
    action_route_4_cargo: "Moulages Industriels",
    action_route_4_cost: "Retard Minimisé",
    action_route_5_title: "Consolidation de Retour à Vide",
    action_route_5_desc: "Consolidation de l'itinéraire de retour du Dépôt B pour récupérer des emballages à l'usine la plus proche.",
    action_route_5_source: "Consolidateur de Trajets à Vide",
    action_route_5_impact: "+$2,850.00 Économisé",
    action_route_5_from: "Sortie Balance Dépôt B",
    action_route_5_to: "Usine d'Emballages Locale",
    action_route_5_var: "Chargement Retour Vide",
    action_route_5_cargo: "Conteneurs en Carton",
    action_route_5_cost: "$2,850",
    action_route_6_title: "Redirection Manque de Chauffeurs",
    action_route_6_desc: "Le transporteur a reprogrammé l'envoi FL309 sur ligne ferroviaire en raison d'un manque de chauffeurs routiers.",
    action_route_6_source: "Moniteur d'Itinéraires Intermodaux",
    action_route_6_impact: "Livraison Préservée",
    action_route_6_from: "Sortie Balance Dépôt A",
    action_route_6_to: "Gare de Triage de Houston",
    action_route_6_var: "Redirection Intermodale",
    action_route_6_cargo: "Moulages Industriels",
    action_route_6_cost: "Délais Préservés",
    action_route_7_title: "Ajustement Créneau Entrée Port",
    action_route_7_desc: "Départ programmé 2 heures plus tôt pour correspondre aux heures creuses d'accès au port de Houston.",
    action_route_7_source: "Planificateur de Rendez-vous",
    action_route_7_impact: "Créneau Sécurisé",
    action_route_7_from: "Sortie Balance Dépôt A",
    action_route_7_to: "Entrée sur Rendez-vous",
    action_route_7_var: "Créneau Sécurisé",
    action_route_7_cargo: "Moulages Industriels",
    action_route_7_cost: "Arrivée dans les Délais",

    action_ops_4_title: "Alerte Maintenance des Équipements",
    action_ops_4_desc: "Le rapport du système de transport du Quai 4 indique un écart de calibrage. Ticket de maintenance créé.",
    action_ops_4_source: "Capteur d'Équipement",
    action_ops_4_impact: "Vérification Préventive",
    action_ops_5_title: "Écart de Réception de Cargaison",
    action_ops_5_desc: "Le scan de réception indique 140 unités, mais la facture spécifie 150 unités. Signalé.",
    action_ops_5_source: "Terminal de Numérisation Entrant",
    action_ops_5_impact: "Quarantaine Réception",
    action_ops_6_title: "Conteneur Reefer Hors Service",
    action_ops_6_desc: "Avertissement de perte de puissance du compresseur sur l'unité TR-909. Remplacement requis.",
    action_ops_6_source: "Télémétrie Conteneur Reefer",
    action_ops_6_impact: "Échange en File d'Attente",
    action_ops_7_title: "Avertissement d'Audit Sécurité",
    action_ops_7_desc: "Registres manuels pour les issues de secours manquants de signature superviseur. Alerte active.",
    action_ops_7_source: "Fiche d'Inspection du Bâtiment",
    action_ops_7_impact: "Contrôle de Sécurité"
  },
  Portuguese: {
    sidebar_modes: "Modos de Apresentação",
    sidebar_selector: "Seletor de Tela",
    sidebar_control: "Controle de Operações",
    sidebar_actions: "Ações do Simulador",
    sidebar_trigger: "Disparar Captura (Fetch)",
    nav_twins: "Digital Twin (Fluxo de Ações)",
    nav_artifact: "Tela de Artefatos",
    nav_remediation: "Fluxo de Remediação",
    nav_fetch: "Tela de Captura (Fetch)",
    nav_maturity: "Centro de Maturidade",
    nav_profile: "Perfil & Faturamento (CU)",
    nav_rules: "Reconciliação de Regras",
    nav_hypothesis: "Laboratório de Hipóteses",
    nav_runner: "Runner e Conexões",
    header_cockpit: "CABINE WEB RUNINK",
    header_mtls: "Conexão Segura de Dados",
    header_specs_btn: "INFORMAÇÕES DA TELA",
    header_secure_connection: "Conexão de Dados Protegida",
    subtitle_twin: "FLUXO DE AÇÕES",
    title_twin: "Gêmeo <span>Digital</span>",
    impact_potential: "POTENCIAL DE IMPACTO",
    twin_status: "STATUS DO GÊMEO DIGITAL",
    priority_actions: "AÇÕES PRIORITÁRIAS",
    subtitle_artifact: "PIPELINE DE DECISÃO",
    title_artifact: "Artefato de <span>Decisão</span>",
    subtitle_remediation: "AUTOMATIZAÇÃO DE SOP",
    title_remediation: "Fluxo de <span>Remediação</span>",
    subtitle_fetch: "PORTAL DE INGESTÃO",
    title_fetch: "Centro de <span>Captura</span>",
    subtitle_maturity: "AUDITORIA DE DOMÍNIO",
    title_maturity: "Centro de <span>Maturidade</span>",
    subtitle_profile: "PERFIL DO USUÁRIO",
    title_profile: "Identidade & <span>Faturamento</span>",
    subtitle_rules: "REGRAS DE VALIDAÇÃO",
    title_rules: "Reconcilição de <span>Regras</span>",
    subtitle_hypothesis: "LAB DE PREDICÇÃO DE ANOMALIAS",
    title_hypothesis: "Simulação de <span>Hipóteses</span>",
    subtitle_runner: "CONECTIVIDADE DO GATEWAY",
    title_runner: "Runner e <span>Conexões</span>",
    admin_creds: "CREDENCIAS DE ADMINISTRADOR",
    cu_consumption: "CONSUMO DE UNIDADES DE COMPUTAÇÃO (CU)",
    integrations: "INTEGRAÇÕES",
    preferences: "PREFERÊNCIAS",
    target_language: "Idioma de Destino",
    rotate_key: "🔄 Rotacionar Chave de Sessão Ativa",
    monthly_quota: "Cota Mensual do Runner",
    doc_reasoning_title: "RACIOCÍNIO DE AUDITORIA BASEADO EM DOCUMENTOS",
    engine_status: "Motor do Juiz Forense: Pronto",
    doc_reasoning_desc: "Compare documentos físicos (manifestos, faturas, dumps de origem) com restrições ativas do banco de dados e avalie as condições de conformidade.",
    doc_bol: "📄 Manifesto de Carga do Conhecimento de Embarque #FL309",
    doc_invoice: "📄 Fatura de Demurrage Aduaneiro HS #INV-908B",
    doc_pii: "📄 Dump de Origem do Cliente Gold Delta",
    doc_cold: "📄 Log de Ingestão de Telemetria de Cadeia de Frio #CC-204",
    doc_sla: "📄 Registro de SLA de Entrega do Fornecedor #SLA-881",
    doc_cert: "📄 Auditoria de Expiração do Certificado de Segurança #CERT-509",
    doc_masking_py: "🐍 Script Python de Mascaramento: data_masking.py",
    doc_demurrage_sql: "💾 Cálculo SQL: calculate_demurrage.sql",
    doc_tariffs_csv: "📊 Tabela de Tarifas: carrier_tariffs.csv",
    doc_route_json: "📋 JSON de Rota: route_manifest.json",
    doc_temp_py: "🐍 Verificador Python de Temp: temperature_control.py",
    select_rule_label: "Selecionar Regra de Validação",
    rule_weight_opt: "Regra #4: Margem de Discrepância de Peso",
    rule_demurrage_opt: "Regra #12: Limite de Demurrage Aduaneiro",
    rule_pii_opt: "Regra #7: Política de Mascaramento de PII",
    rule_temp_opt: "Regra #9: Política de Limiar de Temperatura",
    rule_sla_opt: "Regra #15: Prazo de SLA do Fornecedor",
    rule_cert_opt: "Regra #2: Verificação de Expiração do Certificado de Segurança",
    btn_run_audit: "Executar Auditoria Forense",
    add_custom_rule_label: "Ou Criar Nova Regra de Negócio",
    btn_send_to_lab: "Enviar para o Lab (Simulação Sombra)",
    notification_channel_label: "Canais Preferidos",
    audit_terminal: "TERMINAL DE RACIOCÍNIO DE AUDITORIA",
    react_console_title: "Agente de Validação Semântica (Loop ReAct)",
    react_console_progress_label: "Progresso da Execução ReAct",
    react_btn_abort: "Abortar Fluxo",
    react_btn_resolve: "Aplicar Remediação",

    profile_cert_title: "Chave de Segurança do Usuário",
    profile_cert_subject: "Identificador:",
    profile_cert_issuer: "Autoridade Emissora:",
    profile_cert_expires: "Expiração:",
    profile_cert_status: "Status:",
    profile_client_node: "Dispositivo: Cliente Web Companheiro",
    profile_admin_title: "Administrador Principal",
    profile_admin_role: "Função: Líder de Segurança e Governança",
    profile_cert_status_val: "Criptografado e Ativo",
    header_connection_label: "CONEXÃO: ATIVA",
    ping_initial: "[SYS] Inicializando conexão de diagnóstico segura...\n",
    ping_success_tpl: "[PING] {name}: SUCESSO (Conexão verificada, latência {lat})\n",
    ping_button_progress: "Verificando Gateways Seguros...",

    worker_pool_1: "Pool de Trabalho 1 (Isolado)",
    worker_pool_2: "Pool de Trabalho 2 (Isolado)",
    allocated_limit: "Alocado: Limite 50 CU / Memória 1GB",
    cu_disclaimer: "* As Unidades de Computação (CU) são consumidas em execuções de runners em ambientes isolados. A cota é reiniciada no dia 1 de cada mês.",
    test_gateway_btn: "Testar Conexão do Gateway Seguro",
    specs_grpc_title: "⚡ Esquemas de Integração Segura:",

    route_from: "Origem",
    route_to: "Destino",
    route_variance: "Divergência",
    route_cargo: "Carga",
    route_est_leak: "Perda Est.",
    call_carrier: "Ligar Para Transportadora",
    call_finance: "Iniciar Chamada de Reclamação",
    call_supplier: "Ligar Para Agente de Suprimentos",

    slide_0_title: "O Gêmeo Digital para <span>Operações Empresariais</span>",
    slide_0_body: "Fundamentando os fluxos de agentes autônomos em lógica de conformidade validada. Auditamos fluxos de transações, testamos fluxos de caixa e reconciliamos manuais de operação com bancos de dados ativos de forma segura por meio de IA local.",
    slide_1_title: "Alinhando os <span>Interesses do Negócio</span>",
    slide_1_body: "Corrigindo ineficiências operacionais por meio de perfis especialistas de agentes dedicados:",
    slide_1_cfo: "<strong>O CFO:</strong> Identifica perdas de margem devido a discrepâncias nas taxas de demurrage aduaneiro. <em>\"Transforme reivindicações de reembolso em lucro líquido.\"</em>",
    slide_1_ops: "<strong>Diretor de Operações:</strong> Foca na divergência entre as regras do banco de dados e os manuais operacionais escritos. <em>\"Verifique se o observado corresponde ao esperado.\"</em>",
    slide_1_revops: "<strong>Gerente de RevOps:</strong> Protege os modelos de ingestão de dados contra alucinações de fornecedores externos. <em>\"O processamento local garante a segurança dos dados.\"</em>",
    slide_1_shipper: "<strong>Despachante/Broker:</strong> Minimiza o demurrage de contêineres nos portos por meio de auditorias tarifárias automatizadas. <em>\"Atua como um assistente alfandegário autônomo.\"</em>",
    slide_2_title: "Runink Monitor e <span>Gêmeos Acionáveis</span>",
    slide_2_mon_title: "1. Monitor Runink",
    slide_2_mon_body: "Coleta telemetria de consulta não invasiva, agrupa dados por similaridade semântica, mapeia regras operacionais e valida fluxos de caixa em ambientes seguros.",
    slide_2_twin_title: "2. Gêmeos Acionáveis",
    slide_2_twin_body: "Executa as resoluções sugeridas como rascunhos pré-compilados (alertas de WhatsApp, e-mails, scripts) aguardando autorização humana com um clique.",
    slide_3_title: "Contestações de <span>Demurrage no Comércio Global</span>",
    slide_3_body: "Automatizando auditorias de contestações em portos alfandegários para eliminar perdas de demurrage:",
    slide_3_step1: "<strong>Recuperação de Dados:</strong> Conecta-se com segurança às bases de dados.",
    slide_3_step2: "<strong>Verificação de Tarifas:</strong> Cruza códigos aduaneiros com regras de conformidade.",
    slide_3_step3: "<strong>Simulação:</strong> Prevê a probabilidade de retenção de contêineres em ambientes seguros.",
    slide_3_step4: "<strong>Síntese:</strong> Redige automaticamente o e-mail de contestação por divergência de peso.",
    slide_3_step5: "<strong>Despacho:</strong> O gerente operacional aprova a ação no painel com um clique.",
    slide_4_title: "Pedidos de Compra <span>Preventivos</span>",
    slide_4_body: "Evitando a falta de estoque através da decomposição estatística de tendências de demanda:",
    slide_4_step1: "<strong>Análise de Telemetria:</strong> Consolida os sinais de estoque dos depósitos.",
    slide_4_step2: "<strong>Sazonalidade:</strong> Filtra variações sazonais de demanda.",
    slide_4_step3: "<strong>Lançamento no ERP:</strong> Despacha o pedido de compra diretamente para o sistema de gestão.",
    slide_iot_title: "Manutenção <span>Preditiva</span>",
    slide_iot_body: "Automatizando verificações de saúde de equipamentos via dispositivos inteligentes usando telemetria IoT:",
    slide_iot_step1: "<strong>Varredura de Telemetria:</strong> Agrega leituras RFID de operações com paletes.",
    slide_iot_step2: "<strong>Detecção de Anomalia:</strong> Identifica rebaixamento de operações devido à manutenção adiada.",
    slide_iot_step3: "<strong>Síntese:</strong> Rascunha um pedido de agendamento imediato para o departamento/provedor.",
    slide_iot_step4: "<strong>Despacho:</strong> O gerente revisa e envia a solicitação de serviço com um clique.",
    slide_5_title: "Diretrizes de <span>Segurança Operacional</span>",
    slide_5_body: "Projetado desde o início para isolamento estrito de dados e requisitos de segurança empresarial:",
    slide_5_sec1: "<strong>✓ Processamento de IA Isolado:</strong> Executado localmente. Os dados da empresa nunca são transmitidos para APIs externas.",
    slide_5_sec2: "<strong>✓ Execução em Sandbox Segura:</strong> Tarefas automatizadas são executadas em ambientes isolados para evitar acessos não autorizados.",
    slide_5_sec3: "<strong>✓ Sincronização Contínua de Dados:</strong> Sincronização segura em tempo real de todas as regras operacionais.",
    slide_5_sec4: "<strong>✓ Conformidade Operacional:</strong> Marcador visível de IA (✨) em textos gerados para auditoria e rastreabilidade.",

    action_sentinel_1_title: "Tentativa de Acesso Suspeito",
    action_sentinel_1_desc: "Tentativa de login no portal de parceiros originada fora da rede corporativa autorizada. Acesso bloqueado automaticamente.",
    action_sentinel_1_source: "Portal de Acesso de Segurança",
    action_sentinel_2_title: "Pico de Faturamento Suspeito",
    action_sentinel_2_desc: "Pico incomum na frequência de faturamento gerado fora do horário comercial. Acesso suspenso para verificação.",
    action_sentinel_2_source: "Filtro de Anomalias de Acesso",
    action_sentinel_3_title: "Cadastro de Fornecedor Sem Aprovação",
    action_sentinel_3_desc: "Tentativa de registro automatizado de perfil de fornecedor sem a correspondente aprovação de suprimentos. Registro bloqueado.",
    action_sentinel_3_source: "Filtro de Segurança de Cadastro",
    action_impact_mitigated: "Risco Mitigado",
    action_impact_fraud: "Prevenção de Fraude",
    action_impact_control: "Controle de Acesso",

    action_forge_1_title: "Rascunho de Pedido Preventivo",
    action_forge_1_desc: "Pedido de compra pré-aprovado gerado automaticamente para reduzir o tempo de entrega antes de anomalias inflacionárias projetadas.",
    action_forge_1_source: "Simulador de Cenários de Demanda",
    action_forge_1_impact: "Evitar Interrupção de $45.000",
    action_forge_2_title: "Otimização de Contrato de Matéria-Prima",
    action_forge_2_desc: "Sugestão de renegociação contratual baseada na queda recente do preço das commodities, projetando economia de 8%.",
    action_forge_2_source: "Análise Semântica de Contratos",
    action_forge_2_impact: "+$22.500,00",
    action_forge_3_title: "Alocação Preventiva de Espaço",
    action_forge_3_desc: "Planejamento automático de consolidação de cargas para o pico sazonal do próximo trimestre, reduzindo custos de armazenagem externa.",
    action_forge_3_source: "Simulador de Otimização de Espaço",
    action_forge_3_impact: "Redução de Custo de 12%",

    action_compliance_1_title: "Exposição de Dados de Clientes",
    action_compliance_1_desc: "Campos de contato de clientes acessados sem máscara de conformidade em relatórios operacionais. Visualização pausada para correção.",
    action_compliance_1_source: "Filtro de Proteção de Dados",
    action_compliance_1_impact: "Ação de Conformidade",
    action_compliance_2_title: "Documentação de Importação Incompleta",
    action_compliance_2_desc: "O manifesto de carga da remessa internacional não contém o certificado de emissões ambientais obrigatório. Emissão exigida.",
    action_compliance_2_source: "Validador de Regras Fiscais",
    action_compliance_2_impact: "Evitar Multa de Carga",
    action_compliance_3_title: "Vencimento de Licença de Operadora",
    action_compliance_3_desc: "Parceiro logístico principal operando com licença de transporte terrestre que expira em 3 dias. Verificação solicitada.",
    action_compliance_3_source: "Validador de Licenças de Parceiros",
    action_compliance_3_impact: "Evitar Parada Operacional",

    action_finance_1_title: "Cobrança de Sobretaxa Aduaneira",
    action_finance_1_desc: "Inconsistência de código de tarifa aduaneira detectada nas faturas do porto. Minuta de contestação de reembolso de tarifas gerada.",
    action_finance_1_source: "Auditor de Faturas de Importação",
    action_finance_1_impact: "+$18.200,00",
    action_finance_2_title: "Desconto de Fornecedor Não Aplicado",
    action_finance_2_desc: "A fatura do fornecedor não incluiu o desconto acordado de 3% para pagamento antecipado. Fatura corrigida solicitada.",
    action_finance_2_source: "Reconciliação Automática de Faturas",
    action_finance_2_impact: "+$6.150,00",
    action_finance_3_title: "Duplicidade de Cobrança Identificada",
    action_finance_3_desc: "Lançamento duplicado encontrado para o serviço de frete interestadual. Cobrança redundante bloqueada no sistema.",
    action_finance_3_source: "Detector de Duplicidade de Faturamento",
    action_finance_3_impact: "+$9.400,00",

    action_route_1_title: "Discrepância de Peso na Rota de Carga",
    action_route_1_desc: "Diferença de peso de 14,5% detectada entre o manifesto de carga (Bill of Lading) e a pesagem física na balança. Liberação retida.",
    action_route_1_source: "Monitor de Pesagem e Embarque",
    action_route_1_impact: "+$12.450,00",
    action_route_1_from: "Balança de Saída Depósito A",
    action_route_1_to: "Terminal do Porto de Houston",
    action_route_1_var: "14.5%",
    action_route_1_cargo: "Fundições Industriais",
    action_route_1_cost: "$12.450",
    action_route_2_title: "Otimização de Retorno de Caminhão Vazio",
    action_route_2_desc: "Veículo retornando vazio do Depósito B. Roteado para coletar devoluções de mercadorias no fornecedor, gerando economia.",
    action_route_2_source: "Otimizador de Rotas Logísticas",
    action_route_2_impact: "+$1.850,00",
    action_route_2_from: "Saída de Depósito B",
    action_route_2_to: "Ponto de Retorno Fornecedor",
    action_route_2_var: "Retorno com Carga",
    action_route_2_cargo: "Mercadoria Devolvida",
    action_route_2_cost: "$1.850",
    action_route_3_title: "Desvio de Rota por Clima Adverso",
    action_route_3_desc: "Remessa do Porto de Houston desviada de rota devido a alerta de tempestade severa, preservando o tempo estimado de entrega.",
    action_route_3_source: "Roteador Inteligente de Frotas",
    action_route_3_impact: "Garantia de Lead-Time",
    action_route_3_from: "Porto de Houston",
    action_route_3_to: "Entrada do Depósito A",
    action_route_3_var: "Desviado / No Prazo",
    action_route_3_cargo: "Matérias-Primas",
    action_route_3_cost: "Preservado",

    action_ops_1_title: "Aviso de Limite de Estoque de Segurança",
    action_ops_1_desc: "Unidades do depósito central caíram abaixo dos 15% do limite de segurança durante o planejamento logístico do trimestre.",
    action_ops_1_source: "Gestor de Estoque e Demanda",
    action_ops_1_impact: "Risco no Lead-time",
    action_ops_2_title: "Risco de Parada em Linha de Montagem",
    action_ops_2_desc: "Atraso no recebimento de componentes críticos ameaça parar a Linha de Montagem 3. Remanejando estoque emergencial.",
    action_ops_2_source: "Filtro de Planejamento de Produção",
    action_ops_2_impact: "Evitar Custos de Parada",
    action_ops_3_title: "Alerta de Temperatura em Contêiner Frio",
    action_ops_3_desc: "Contêiner refrigerado com insumos agrícolas relata temperatura acima do limite ideal. Equipe técnica acionada.",
    action_ops_3_source: "Monitor de Cadeia de Frio",
    action_ops_3_impact: "Preservação da Carga",

    action_sentinel_4_title: "Alerta de Consulta em Tabela Privilegiada",
    action_sentinel_4_desc: "Consulta direta executada na tabela de credenciais sem formato por identidade não administrativa. Bloqueado.",
    action_sentinel_4_source: "Filtro de Auditoria de Acesso",
    action_sentinel_5_title: "Rotação de Chave Suspeita",
    action_sentinel_5_desc: "Múltiplas solicitações de rotação de chave de sessão recebidas em 1 minuto. Bloqueio de sandbox ativado.",
    action_sentinel_5_source: "Guarda de Políticas de Segurança",
    action_sentinel_6_title: "Tentativa de Ingestão Sem Máscara",
    action_sentinel_6_desc: "Conexão externa tentou ingerir registros de clientes sem hashing de variáveis. Quarentena ativada.",
    action_sentinel_6_source: "Filtro de Ingestão de Dados",
    action_sentinel_7_title: "Violação de Limite de Token de API",
    action_sentinel_7_desc: "Token de acesso gerado para portal de parceiros fora dos limites geográficos padrão. Suspenso.",
    action_sentinel_7_source: "Agente de Geocerca",

    action_forge_4_title: "Cronograma de Despacho de Transporte",
    action_forge_4_desc: "Cronograma automático gerado para coletas de transportadoras vazias para evitar congestionamento de depósitos na próxima semana.",
    action_forge_4_source: "Planejador de Despacho",
    action_forge_4_impact: "Otimização Logística",
    action_forge_5_title: "Sugestão de Desvio de Rota na Cadeia",
    action_forge_5_desc: "Plano gêmeo sintético para transferir fornecimento de matéria-prima para fornecedor secundário devido a alerta de tempestade.",
    action_forge_5_source: "Motor de Fornecimento Alternativo",
    action_forge_5_impact: "+$12.500,00 Economizado",
    action_forge_6_title: "Minuta de Contestação de Demurrage",
    action_forge_6_desc: "Minuta de reembolso de tarifas aduaneiras com base em divergência de código HS, recuperando $18.200,00.",
    action_forge_6_source: "Gerador de Contestação de Reivindicações",
    action_forge_6_impact: "+$18.200,00 Recuperado",
    action_forge_7_title: "Sugestão de Recompra de Estoque",
    action_forge_7_desc: "Pedido de compra pré-calculado gerado para reposição segura do estoque antes da paralisação.",
    action_forge_7_source: "Agente de Reposição Preditiva",
    action_forge_7_impact: "Estoque de Segurança",

    action_compliance_4_title: "Desvio de Calibração Detectado",
    action_compliance_4_desc: "Margem de desvio de peso na balança do Dock 4 excedeu limites no processamento de carga de entrada.",
    action_compliance_4_source: "Monitor de Integridade de Balança",
    action_compliance_4_impact: "Auditoria de Calibração",
    action_compliance_5_title: "Excursão de Temperatura de Cadeia de Frio",
    action_compliance_5_desc: "Contêiner refrigerado registrou temperatura acima do limite de -18°C. Regra de quarentena activa.",
    action_compliance_5_source: "Monitor de Telemetria de Frio",
    action_compliance_5_impact: "Quarentena de Carga",
    action_compliance_6_title: "Estouro de SLA de Fornecedor",
    action_compliance_6_desc: "Entrega do subcontratista registrada 5 dias após o prazo contratual. Cláusula de penalidade ativada.",
    action_compliance_6_source: "Rastreador de Atraso de SLA",
    action_compliance_6_impact: "Multa de SLA",
    action_compliance_7_title: "Ameaça de Expiração de Chave de Segurança",
    action_compliance_7_desc: "Sessão administrativa ativa com credenciais expirando em 6 dias. Renovação automática aguardando verificação.",
    action_compliance_7_source: "Monitor de Credenciais de Chave",
    action_compliance_7_impact: "Auditoria de Renovação",

    action_finance_4_title: "Multa por Divergência de Tarifa HS",
    action_finance_4_desc: "O código HS 8479.89.97 foi faturado em dobro nos serviços do porto. Contestação colocada em fila.",
    action_finance_4_source: "Agente de Disputa de Faturamento",
    action_finance_4_impact: "+$3.450,00 Reembolso",
    action_finance_5_title: "Divergência de Surcharge de Combustível",
    action_finance_5_desc: "Transportadora cobrou taxa de combustível 12% acima da taxa de contrato negociada. Retido.",
    action_finance_5_source: "Auditor de Tarifas de Combustível",
    action_finance_5_impact: "+$1.820,00 Retido",
    action_finance_6_title: "Recuperação de Reivindicação de Rétention",
    action_finance_6_desc: "Tarifas de demurrage excessivas por tempo de espera de $3.200 no envio #SH-908B. Reclamação ativa.",
    action_finance_6_source: "Auditoria de Reclamação de Rétention",
    action_finance_6_impact: "+$3.200,00 Reembolso",
    action_finance_7_title: "Desconto por Pagamento Antecipado",
    action_finance_7_desc: "Oportunidade para aplicar 2% de desconto para pagamento antecipado no fornecedor PO-901 identificada.",
    action_finance_7_source: "Otimizador de Fluxo de Caixa",
    action_finance_7_impact: "+$1.240,00 Economizado",

    action_route_4_title: "Desvio de Rota por Congestionamento no Porto",
    action_route_4_desc: "O portão 4 do porto de Houston está com atrasos de 4 horas. Frota roteada para a entrada do Gate B.",
    action_route_4_source: "Fluxo em Tempo Real do Porto",
    action_route_4_impact: "2.5h Atraso Evitado",
    action_route_4_from: "Balança de Saída Depósito A",
    action_route_4_to: "Entrada Terminal Gate B",
    action_route_4_var: "Desvio de Rota Gate B",
    action_route_4_cargo: "Fundições Industriais",
    action_route_4_cost: "Atraso Minimizado",
    action_route_5_title: "Consolidação de Retorno Vazio",
    action_route_5_desc: "Consolidação da rota de retorno do Depósito B para retirar embalagens na fábrica de papel mais próxima.",
    action_route_5_source: "Consolidador de Retorno Vazio",
    action_route_5_impact: "+$2.850,00 Economizado",
    action_route_5_from: "Saída de Depósito B",
    action_route_5_to: "Fábrica de Embalagem Local",
    action_route_5_var: "Retorno com Carga",
    action_route_5_cargo: "Contêineres de Papel",
    action_route_5_cost: "$2.850",
    action_route_6_title: "Desvio por Falta de Motorista",
    action_route_6_desc: "Transportadora remarcou remessa FL309 para linha ferroviária devido a indisponibilidade de motoristas.",
    action_route_6_source: "Monitor de Rota Intermodal",
    action_route_6_impact: "Entrega No Prazo",
    action_route_6_from: "Balança de Saída Depósito A",
    action_route_6_to: "Pátio Ferroviário de Houston",
    action_route_6_var: "Desvio Intermodal",
    action_route_6_cargo: "Fundições Industriais",
    action_route_6_cost: "Tempo Preservado",
    action_route_7_title: "Ajuste de Janela de Entrada no Porto",
    action_route_7_desc: "Partida agendada 2 horas mais cedo para coincidir com janelas de entrada com menor tráfego no porto.",
    action_route_7_source: "Agendador de Compromissos",
    action_route_7_impact: "Janela Assegurada",
    action_route_7_from: "Balança de Saída Depósito A",
    action_route_7_to: "Portão de Entrada do Porto",
    action_route_7_var: "Janela Assegurada",
    action_route_7_cargo: "Fundições Industriais",
    action_route_7_cost: "Entrada no Prazo",

    action_ops_4_title: "Alerta de Manutenção de Equipamentos",
    action_ops_4_desc: "Relatório de transportador do Dock 4 registra desvio de calibração. Ticket de verificação preventiva criado.",
    action_ops_4_source: "Sensor de Equipamentos",
    action_ops_4_impact: "Verificação Preventiva",
    action_ops_5_title: "Discrepância no Recebimento de Carga",
    action_ops_5_desc: "Contagem de escaneamento de entrada registrou 140 unidades, mas fatura exige 150 unidades. Marcado.",
    action_ops_5_source: "Terminal de Entrada",
    action_ops_5_impact: "Quarentena de Recebimento",
    action_ops_6_title: "Contêiner Reefer Fora de Serviço",
    action_ops_6_desc: "Degradação da potência do compressor relatada na unidade TR-909. Troca necessária.",
    action_ops_6_source: "Monitor de Telemetria Reefer",
    action_ops_6_impact: "Troca em Fila",
    action_ops_7_title: "Aviso de Auditoria de Protocolo de Segurança",
    action_ops_7_desc: "Registros manuais de liberação de saída de incêndio sem assinatura do supervisor. Alerte de conformidade ativo.",
    action_ops_7_source: "Folha de Inspeção Predial",
    action_ops_7_impact: "Revisão de Segurança"
  }
};

// Apply language change updates across data-translate attributes
function changeLanguage(lang, showToastAlert = true) {
  if (!appTranslations[lang]) return;
  currentLanguage = lang;

  // Sync the select dropdown element in the DOM
  const selectDropdown = document.getElementById("select-target-language");
  if (selectDropdown && selectDropdown.value !== lang) {
    selectDropdown.value = lang;
  }
  const presSelectDropdown = document.getElementById("presentation-lang-select");
  if (presSelectDropdown && presSelectDropdown.value !== lang) {
    presSelectDropdown.value = lang;
  }

  // Iterate over translate nodes
  const els = document.querySelectorAll("[data-translate]");
  els.forEach(el => {
    const key = el.getAttribute("data-translate");
    const translation = appTranslations[lang][key];
    if (translation !== undefined) {
      if (translation.includes("<") || translation.includes("🔄") || translation.includes("🔍") || translation.includes("📷") || translation.includes("🚀")) {
        el.innerHTML = translation;
      } else {
        el.innerText = translation;
      }
    }
  });

  // Dynamic input placeholder changes
  const searchInput = document.getElementById("fetch-search-input");
  if (searchInput) {
    if (lang === "Spanish") {
      searchInput.placeholder = "Buscar transacciones o ejecutar comandos por voz...";
    } else if (lang === "French") {
      searchInput.placeholder = "Rechercher des transactions ou exécuter des commandes vocales...";
    } else if (lang === "Portuguese") {
      searchInput.placeholder = "Pesquisar transações ou executar comandos de voz...";
    } else {
      searchInput.placeholder = "Search transactions, invoice IDs, or type voice commands...";
    }
  }

  // Multi-lingual success toast alerts
  let successMsg = "Target Language changed to " + lang;
  if (lang === "Spanish") successMsg = "Idioma de destino cambiado a Español";
  else if (lang === "French") successMsg = "Langue cible changée en Français";
  else if (lang === "Portuguese") successMsg = "Idioma de destino alterado para Português";

  if (showToastAlert) {
    showToast(successMsg);
  }

  // Dynamic host connection pings button updates
  const pingBtn = document.getElementById("btn-ping-connections");
  if (pingBtn && appTranslations[lang].test_gateway_btn) {
    pingBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> ${appTranslations[lang].test_gateway_btn}`;
  }

  // Dynamic Maturity Center selected node details updates
  const nodeTitle = document.getElementById("node-detail-title");
  const nodeDetailsContent = document.getElementById("node-details-content");
  if (nodeTitle && nodeTitle.innerText && nodeDetailsContent && nodeDetailsContent.style.display === "flex") {
    showNodeDetails(nodeTitle.innerText);
  }

  const sel = document.getElementById("react-agent-selector");
  if (sel) {
    updateRemediationScreenForAgent(sel.value);
  }
  renderActionFeed(); // refresh dynamically generated action feed
}

// Technical Specifications Data Domain Mapping
const screenSpecs = {
  twins: {
    name: "Digital Twin (Action Feed)",
    widget: "TwinsIntakeScreen (twins_screen.dart)",
    desc: "Main cockpit screen. Aggregates live operational events (Sentinel, Forge, Compliance, Finance, Route, Operations) into an actionable priority feed. Operators view impact metrics ($USD potentials) and click priority actions to launch decision pipelines. Whisper microphone simulation allows vocal searches (e.g. 'trigger fetch') directly filtering lists.",
    grpc: `[Business Integration Fields]
- Target Dashboard: Action Cockpit
- Key Metrics: Priority Level, Financial Impact ($USD), Target Category, Source Twin
- Data Standard: Token-Oriented Document Schema`,
    telecom: "Sentinel alerts automatically dispatch notification payloads. VoIP dial buttons support dual routing: standard cellular carrier lines or secure, encrypted green WhatsApp audio streams."
  },
  artifact: {
    name: "Decision Artifact Screen",
    widget: "DecisionArtifactScreen (decision_artifact_screen.dart)",
    desc: "Compliance screen for physical-to-digital record verification. Parses cargo documentation (Customs Invoice #INV-908B, Bill of Lading Cargo Manifest #FL309) using local OCR engine pipelines. Features secure signature verification, sensitive PII database masking checks, and simulated invoice adjustment dispatches.",
    grpc: `[Business Integration Fields]
- Target Dashboard: Compliance Decision Hub
- OCR Document Fields: HS Code Tariffs, Declared Weight, Verified Scale Weight, Vendor ID
- Data Standard: Audited Document Records`,
    telecom: "SecOps vulnerability findings dispatch warning packets. Dial button integrations let operators initiate secure voice calls directly to carrier brokers or custom agents."
  },
  remediation: {
    name: "Remediation Workflow",
    widget: "RemediationWorkflowScreen (remediation_workflow_screen.dart)",
    desc: "Automated Incident Remediation console. Traces live isolated execution sandboxes, mapping network isolations and configuration revokes step-by-step. Renders execution status (PENDING, RUNNING, SUCCESS) and output diagnostic logs.",
    grpc: `[Business Integration Fields]
- Target Dashboard: Remediation Workflow Control
- Step Parameters: Step Description, Progress Status, Completion Timestamp, Suggested Remediation
- Data Standard: SOP Automation Playbook`,
    telecom: "Quarantine events automatically notify secure WhatsApp administrator groups. Operators call SecOps coordinators over secure links to authorize isolated rules overrides."
  },
  fetch: {
    name: "Fetch Center Screen",
    widget: "ScheduleFetchScreen (schedule_fetch_screen.dart)",
    desc: "Ingestion gateway coordinator. Controls manual fetch runs that query ERP endpoints, mapping data structures onto local caches. Shows processed document carousels and streams live pipeline ingestion logs.",
    grpc: `[Business Integration Fields]
- Target Dashboard: Data Ingest Portal
- Sync Parameters: Ingest Schedule, Records Processed, Source System, Last Run Status
- Data Standard: Real-Time Stream Synchronization`,
    telecom: "Configuration flags route pipeline status codes to WhatsApp. Handshake notifications ping operators upon ingestion completion."
  },
  maturity: {
    name: "Maturity Center Screen",
    widget: "MaturityCenterScreen (ai_center_screen.dart)",
    desc: "Governance and domain compliance node map. Features interactive nodes (CustomsAudits, CustomerProfiles, InvoiceAuditing, DisputedClaims). Clicking nodes dynamically displays the domain inspector details: endpoints, row tallies, schema models, and sync methods.",
    grpc: `[Business Integration Fields]
- Target Dashboard: Maturity Map Inspector
- Node Properties: Database Name, Secure Endpoint, Row Counts, Sync Method, Latency (ms)
- Data Standard: Secure Storage Schemas`,
    telecom: "If node latency exceeds boundaries, the system highlights the domain node in orange. Direct WhatsApp dialing options connect operators with DBA security leads."
  },
  profile: {
    name: "Profile & Billing CU",
    widget: "ProfileScreen (profile_screen.dart)",
    desc: "Governance profile and resource billing console. Rotates secure peer session keys, displaying connection status. Tracks Monthly Runner Quotas in Compute Units (CU) allocated across isolated sandboxes. Language menu switches localization states.",
    grpc: `[Business Integration Fields]
- Target Dashboard: Profile & Resource Administration
- Key Settings: Administrative Contact, Connected Messaging Channels, Active API Webhooks
- Data Standard: Account Credentials Schema`,
    telecom: "Recipients receive all telemetry alarms directly on their registered WhatsApp numbers (+1 555-010-9921) instead of legacy webhook web routes."
  },
  "rules-recon": {
    name: "Rules Reconciliation",
    widget: "RulesReconScreen (rules_recon_screen.dart)",
    desc: "Weight discrepancy bounds and PII scan manager. Features sliders to calibrate detection sensitivity percentages and toggles to engage automated crawlers. Initiates localized database checks.",
    grpc: `[Business Integration Fields]
- Target Dashboard: Compliance Rules Manager
- Config Settings: Tolerance Sliders, Custom Limits, Verification Thresholds
- Data Standard: Business Policy Constraints`,
    telecom: "Drift alarms forward telemetry details. Selectable phone buttons launch VoIP audio streams to correct scale records."
  },
  "hypothesis-lab": {
    name: "Hypothesis Simulation Lab",
    widget: "HypothesisLabScreen (hypothesis_lab_screen.dart)",
    desc: "Predictive modeling sandbox. Tunes semantic clustering elements, trend seasonality parameters, and outlier Z-scores. Executing a run compiles local logs and generates synthetic twin actions.",
    grpc: `[Business Integration Fields]
- Target Dashboard: Demand & Trend Simulator
- Parameters: Forecast Seasonality, Margin Safety Buffer, Outlier Z-Score Limits
- Data Standard: Operational Predictive Models`,
    telecom: "Synthetic twin action results trigger WhatsApp alerts. Voice agent call pathways verified."
  },
  "runner-conn": {
    name: "Runner & Connection Configurations",
    widget: "RunnerConnectionsScreen (runner_connections_screen.dart)",
    desc: "Connectivity terminal testing Customs Registry Link, Customer Profile Registry, and Access Controls Registry auth gateways. Displays isolated worker pool bounds and memory limits alongside diagnostic telemetry outputs.",
    grpc: `[Business Integration Fields]
- Target Dashboard: Network Connection Monitor
- Connectivity Targets: Customs Registry Link, Customer Profile Registry, Access Controls Registry
- Data Standard: Secure Gateway Connection`,
    telecom: "Verifies secure tunnel diagnostics. Connection metrics route through secure VoIP lines for live vendor coordination."
  }
};

// Open the Specs details modal card
function openScreenSpecsCard() {
  const specs = screenSpecs[currentScreen];
  if (!specs) return;

  document.getElementById("specs-screen-name").innerText = specs.name;
  document.getElementById("specs-flutter-widget").innerText = "Widget: " + specs.widget;
  document.getElementById("specs-screen-desc").innerText = specs.desc;
  document.getElementById("specs-grpc-info").innerText = specs.grpc;
  document.getElementById("specs-telecom-info").innerText = specs.telecom;

  const overlay = document.getElementById("specs-modal-overlay");
  overlay.style.display = "flex";
}

// Close the Specs details modal card
function closeSpecsModal() {
  const overlay = document.getElementById("specs-modal-overlay");
  if (overlay) overlay.style.display = "none";
}

// ReAct Agent streams containing step-by-step Execution Loop state outputs (Thoughts, Actions, Observations, and Final Results in TOON)
const reactAgentStreams = {
  English: {
    Sentinel: [
      {
        status: "LOOP_STATUS_WORKING",
        thought: "I need to inspect the customer_gold schema on Customer Profile Registry to find which columns contain unmasked PII.",
        action: "read_file",
        input: "db/schemas/customer_gold.schema"
      },
      {
        status: "LOOP_STATUS_EXECUTING",
        action: "read_file",
        input: "db/schemas/customer_gold.schema"
      },
      {
        status: "LOOP_STATUS_OBSERVING",
        observation: `[SchemaMeta:\n  Table: "customer_gold"\n  Columns: [\n    { Name: "cust_id", Type: "INT", Masked: false },\n    { Name: "email", Type: "VARCHAR", Masked: false },\n    { Name: "phone", Type: "VARCHAR", Masked: false },\n    { Name: "tax_id", Type: "VARCHAR", Masked: true }\n  ]\n]`
      },
      {
        status: "LOOP_STATUS_WORKING",
        thought: "Columns 'email' and 'phone' are currently unmasked. I must compile a masking policy SOP and run an SQL test query to verify policy behavior.",
        action: "run_sql",
        input: "SELECT email, phone FROM customer_gold WHERE cust_id = 1001"
      },
      {
        status: "LOOP_STATUS_EXECUTING",
        action: "run_sql",
        input: "SELECT email, phone FROM customer_gold WHERE cust_id = 1001"
      },
      {
        status: "LOOP_STATUS_OBSERVING",
        observation: `[QueryResult:\n  Rows: [\n    { email: "john.doe@gmail.com", phone: "+1-555-0199" }\n  ]\n]\n(Warning: Plaintext email/phone returned. Verification confirms active PII leakage.)`
      },
      {
        status: "LOOP_STATUS_WORKING",
        thought: "Plaintext PII is confirmed leaked. I will generate the database masking SOP to enforce mask policies on 'email' and 'phone' columns, dispatch it via email/WhatsApp, and conclude.",
        action: "",
        input: ""
      },
      {
        status: "LOOP_STATUS_DONE",
        final: `[RemediationResult:\n  Status: "SUCCESS"\n  SOP_ID: "SOP-8402"\n  Actions_Taken: [\n    "Generated Customer Profile column-masking policy SOP-8402",\n    "Verified plaintext exposure via SQL diagnostic queries",\n    "Dispatched WhatsApp alert to security response lead (+55 11 99999-1234)"\n  ]\n]`
      }
    ],
    Route: [
      {
        status: "LOOP_STATUS_WORKING",
        thought: "I need to inspect route telemetry log under CC-204 to identify empty container return legs.",
        action: "read_file",
        input: "routes/telemetry/CC-204.log"
      },
      {
        status: "LOOP_STATUS_EXECUTING",
        action: "read_file",
        input: "routes/telemetry/CC-204.log"
      },
      {
        status: "LOOP_STATUS_OBSERVING",
        observation: `[RouteLog:\n  Vehicle: "Truck-908"\n  Route: "Houston-DepotA"\n  Status: "EMPTY_RETURN"\n  Cost: "$2,400"\n  Distance: "250mi"\n]`
      },
      {
        status: "LOOP_STATUS_WORKING",
        thought: "Truck-908 is returning empty. I will run a SQL query to check if there is pending vendor cargo at midpoint highway coordinate CC-204 for a backhaul pickup.",
        action: "run_sql",
        input: "SELECT load_id, weight FROM pending_loads WHERE location = 'CC-204'"
      },
      {
        status: "LOOP_STATUS_EXECUTING",
        action: "run_sql",
        input: "SELECT load_id, weight FROM pending_loads WHERE location = 'CC-204'"
      },
      {
        status: "LOOP_STATUS_OBSERVING",
        observation: `[QueryResult:\n  Rows: [\n    { load_id: "L-771", weight: "12,500lbs" }\n  ]\n]\n(Cargo L-771 ready for backhaul collection at CC-204.)`
      },
      {
        status: "LOOP_STATUS_WORKING",
        thought: "Found cargo L-771 ready. I will optimize Truck-908 route to intercept coordinate CC-204, generate backhaul pickup SOP-Route-309, dispatch it to dispatch-team, and terminate.",
        action: "",
        input: ""
      },
      {
        status: "LOOP_STATUS_DONE",
        final: `[RouteOptimizationResult:\n  Status: "SUCCESS"\n  Optimized_Route: "Houston -> CC-204 (Pickup L-771) -> Depot A"\n  Savings_USD: "1,850"\n  Actions_Taken: [\n    "Recalculated route mapping to avoid empty leg return",\n    "Generated cargo backhaul SOP-Route-309",\n    "Dispatched turn-by-turn navigation updates to driver"\n  ]\n]`
      }
    ],
    Finance: [
      {
        status: "LOOP_STATUS_WORKING",
        thought: "I need to inspect the parsed customs invoice SH-908B to analyze details of demurrage rate overcharges.",
        action: "read_file",
        input: "invoices/customs/SH-908B.xml"
      },
      {
        status: "LOOP_STATUS_EXECUTING",
        action: "read_file",
        input: "invoices/customs/SH-908B.xml"
      },
      {
        status: "LOOP_STATUS_OBSERVING",
        observation: `[CustomsInvoice:\n  Invoice_Number: "SH-908B"\n  Total_Charges: "$42,500"\n  Demurrage_Days: "6"\n  Demurrage_Rate: "$5,000/day"\n  Free_Time_Hours: "48"\n]`
      },
      {
        status: "LOOP_STATUS_WORKING",
        thought: "Rate charged is $5,000/day. Let me query the vendor contract cap rules in our SLA database to check the legal demurrage rate ceiling.",
        action: "run_sql",
        input: "SELECT rate_cap FROM vendor_contracts WHERE vendor = 'Houston_Port'"
      },
      {
        status: "LOOP_STATUS_EXECUTING",
        action: "run_sql",
        input: "SELECT rate_cap FROM vendor_contracts WHERE vendor = 'Houston_Port'"
      },
      {
        status: "LOOP_STATUS_OBSERVING",
        observation: `[QueryResult:\n  Rows: [\n    { rate_cap: "$2,000/day" }\n  ]\n]\n(Contract Tariff Cap Discrepancy: $5,000 charged vs contract limit of $2,000/day!)`
      },
      {
        status: "LOOP_STATUS_WORKING",
        thought: "Demurrage overcharge verified ($3,000/day overage). I will draft dispute letter DISPUTE-908B to recover the $18,200.00 difference and transmit it.",
        action: "",
        input: ""
      },
      {
        status: "LOOP_STATUS_DONE",
        final: `[DemurrageDisputeResult:\n  Status: "SUCCESS"\n  Dispute_Claims_ID: "DISPUTE-908B"\n  Overage_Detected: "$18,200.00"\n  Actions_Taken: [\n    "Verified contract cap demurrage rate discrepancy ($2,000 vs $5,000)",\n    "Drafted formal rate cap dispute and credit demand letter",\n    "Transmitted claim to Port Authority Billing Desk"\n  ]\n]`
      }
    ]
  },
  Spanish: {
    Sentinel: [
      {
        status: "LOOP_STATUS_WORKING",
        thought: "Necesito leer el esquema de la tabla del Registro de Perfiles `customer_gold` para identificar campos de PII desprotegidos.",
        action: "read_file",
        input: "db/schemas/customer_gold.schema"
      },
      {
        status: "LOOP_STATUS_EXECUTING",
        action: "read_file",
        input: "db/schemas/customer_gold.schema"
      },
      {
        status: "LOOP_STATUS_OBSERVING",
        observation: `[SchemaMeta:\n  Tabla: "customer_gold"\n  Columnas: [\n    { Nombre: "cust_id", Tipo: "INT", Mascarado: false },\n    { Nombre: "email", Tipo: "VARCHAR", Mascarado: false },\n    { Nombre: "phone", Tipo: "VARCHAR", Mascarado: false },\n    { Nombre: "tax_id", Tipo: "VARCHAR", Mascarado: true }\n  ]\n]`
      },
      {
        status: "LOOP_STATUS_WORKING",
        thought: "Las columnas 'email' y 'phone' no están enmascaradas. Debo ejecutar una consulta SQL de prueba para verificar la exposición de los datos.",
        action: "run_sql",
        input: "SELECT email, phone FROM customer_gold WHERE cust_id = 1001"
      },
      {
        status: "LOOP_STATUS_EXECUTING",
        action: "run_sql",
        input: "SELECT email, phone FROM customer_gold WHERE cust_id = 1001"
      },
      {
        status: "LOOP_STATUS_OBSERVING",
        observation: `[QueryResult:\n  Filas: [\n    { email: "john.doe@gmail.com", phone: "+1-555-0199" }\n  ]\n]\n(Advertencia: ¡Confirmada exposición activa de PII en texto claro!)`
      },
      {
        status: "LOOP_STATUS_WORKING",
        thought: "La exposición de PII está confirmada. Generaré la documentación del SOP para el enmascaramiento, despacharé alertas de WhatsApp y terminaré.",
        action: "",
        input: ""
      },
      {
        status: "LOOP_STATUS_DONE",
        final: `[RemediationResult:\n  Estado: "SUCCESS"\n  SOP_ID: "SOP-8402"\n  Acciones_Tomadas: [\n    "Generada política de enmascaramiento del Registro de Perfiles SOP-8402",\n    "Verificada exposición de PII mediante consultas SQL",\n    "Despachada alerta de WhatsApp al líder de seguridad (+55 11 99999-1234)"\n  ]\n]`
      }
    ],
    Route: [
      {
        status: "LOOP_STATUS_WORKING",
        thought: "Necesito inspeccionar el registro de telemetría de ruta bajo el código CC-204 para identificar retornos de contenedores vacíos.",
        action: "read_file",
        input: "routes/telemetry/CC-204.log"
      },
      {
        status: "LOOP_STATUS_EXECUTING",
        action: "read_file",
        input: "routes/telemetry/CC-204.log"
      },
      {
        status: "LOOP_STATUS_OBSERVING",
        observation: `[RouteLog:\n  Vehiculo: "Camion-908"\n  Ruta: "Houston-DepotA"\n  Estado: "RETORNO_VAZIO"\n  Costo: "$2,400"\n  Distancia: "250mi"\n]`
      },
      {
        status: "LOOP_STATUS_WORKING",
        thought: "El camión está retornando vacío. Ejecutaré una consulta SQL para checar si hay carga del proveedor disponible en el punto CC-204.",
        action: "run_sql",
        input: "SELECT load_id, weight FROM pending_loads WHERE location = 'CC-204'"
      },
      {
        status: "LOOP_STATUS_EXECUTING",
        action: "run_sql",
        input: "SELECT load_id, weight FROM pending_loads WHERE location = 'CC-204'"
      },
      {
        status: "LOOP_STATUS_OBSERVING",
        observation: `[QueryResult:\n  Filas: [\n    { load_id: "L-771", weight: "12,500lbs" }\n  ]\n]\n(Carga L-771 lista para recolección en CC-204.)`
      },
      {
        status: "LOOP_STATUS_WORKING",
        thought: "Carga L-771 encontrada. Optimizaré la ruta del camión para pasar por CC-204, generar el SOP-Route-309 de despacho y notificar al conductor.",
        action: "",
        input: ""
      },
      {
        status: "LOOP_STATUS_DONE",
        final: `[RouteOptimizationResult:\n  Estado: "SUCCESS"\n  Ruta_Optimizada: "Houston -> CC-204 (Carga L-771) -> Depot A"\n  Ahorros_USD: "1,850"\n  Acciones_Tomadas: [\n    "Recalculado mapa de ruta para evitar retorno vacío",\n    "Generado SOP-Route-309 para recolección del proveedor",\n    "Despachadas actualizaciones de navegación al conductor"\n  ]\n]`
      }
    ],
    Finance: [
      {
        status: "LOOP_STATUS_WORKING",
        thought: "Necesito inspeccionar la factura aduaneira xml recibida para examinar los detalles de sobretasas de demurrage.",
        action: "read_file",
        input: "invoices/customs/SH-908B.xml"
      },
      {
        status: "LOOP_STATUS_EXECUTING",
        action: "read_file",
        input: "invoices/customs/SH-908B.xml"
      },
      {
        status: "LOOP_STATUS_OBSERVING",
        observation: `[CustomsInvoice:\n  Factura_Numero: "SH-908B"\n  Cargos_Totales: "$42,500"\n  Dias_Demurrage: "6"\n  Tarifa_Demurrage: "$5,000/dia"\n  Tiempo_Libre_Horas: "48"\n]`
      },
      {
        status: "LOOP_STATUS_WORKING",
        thought: "La tarifa cobrada es de $5,000/dia. Consultaré el banco de contratos SLA para verificar el límite tarifario negociado.",
        action: "run_sql",
        input: "SELECT rate_cap FROM vendor_contracts WHERE vendor = 'Houston_Port'"
      },
      {
        status: "LOOP_STATUS_EXECUTING",
        action: "run_sql",
        input: "SELECT rate_cap FROM vendor_contracts WHERE vendor = 'Houston_Port'"
      },
      {
        status: "LOOP_STATUS_OBSERVING",
        observation: `[QueryResult:\n  Filas: [\n    { rate_cap: "$2,000/dia" }\n  ]\n]\n(Discrepancia Tarifaria: Tarifa de $5,000 cobrada excede el límite contratual de $2,000/dia!)`
      },
      {
        status: "LOOP_STATUS_WORKING",
        thought: "Cobro excesivo confirmado ($3,000/dia sobre el límite). Generaré el documento de disputa DISPUTE-908B para recuperar $18,200.00 y despachar.",
        action: "",
        input: ""
      },
      {
        status: "LOOP_STATUS_DONE",
        final: `[DemurrageDisputeResult:\n  Estado: "SUCCESS"\n  Dispute_Claims_ID: "DISPUTE-908B"\n  Exceso_Detectado: "$18,200.00"\n  Acciones_Tomadas: [\n    "Verificada discrepancia de tarifa de demurrage del contrato ($2,000 vs $5,000)",\n    "Redactada disputa de tarifa y carta de demanda de reembolso",\n    "Transmitida reclamación al portal de facturación del puerto"\n  ]\n]`
      }
    ]
  },
  French: {
    Sentinel: [
      {
        status: "LOOP_STATUS_WORKING",
        thought: "Je dois inspecter le schéma de la table du Registre des Profils `customer_gold` pour trouver les colonnes contenant des PII en clair.",
        action: "read_file",
        input: "db/schemas/customer_gold.schema"
      },
      {
        status: "LOOP_STATUS_EXECUTING",
        action: "read_file",
        input: "db/schemas/customer_gold.schema"
      },
      {
        status: "LOOP_STATUS_OBSERVING",
        observation: `[SchemaMeta:\n  Table: "customer_gold"\n  Colonnes: [\n    { Nom: "cust_id", Type: "INT", Masque: false },\n    { Nom: "email", Type: "VARCHAR", Masque: false },\n    { Nom: "phone", Type: "VARCHAR", Masque: false },\n    { Nom: "tax_id", Type: "VARCHAR", Masque: true }\n  ]\n]`
      },
      {
        status: "LOOP_STATUS_WORKING",
        thought: "Les colonnes 'email' et 'phone' ne sont pas masquées. Je dois exécuter une requête SQL pour valider l'exposition des données.",
        action: "run_sql",
        input: "SELECT email, phone FROM customer_gold WHERE cust_id = 1001"
      },
      {
        status: "LOOP_STATUS_EXECUTING",
        action: "run_sql",
        input: "SELECT email, phone FROM customer_gold WHERE cust_id = 1001"
      },
      {
        status: "LOOP_STATUS_OBSERVING",
        observation: `[QueryResult:\n  Lignes: [\n    { email: "john.doe@gmail.com", phone: "+1-555-0199" }\n  ]\n]\n(Attention: Fuite active de PII en clair confirmée!)`
      },
      {
        status: "LOOP_STATUS_WORKING",
        thought: "La fuite de PII est confirmée. Je vais générer le document de SOP pour le masquage des colonnes, envoyer les alertes WhatsApp et conclure.",
        action: "",
        input: ""
      },
      {
        status: "LOOP_STATUS_DONE",
        final: `[RemediationResult:\n  Status: "SUCCESS"\n  SOP_ID: "SOP-8402"\n  Actions_Prises: [\n    "Généré la politique de masquage du Registre de Profils SOP-8402",\n    "Vérifié l'exposition en clair via requêtes SQL",\n    "Envoyé une alerte WhatsApp au responsable sécurité (+55 11 99999-1234)"\n  ]\n]`
      }
    ],
    Route: [
      {
        status: "LOOP_STATUS_WORKING",
        thought: "Je dois inspecter les logs de télémétrie de la route sous CC-204 pour identifier les trajets retour à vide.",
        action: "read_file",
        input: "routes/telemetry/CC-204.log"
      },
      {
        status: "LOOP_STATUS_EXECUTING",
        action: "read_file",
        input: "routes/telemetry/CC-204.log"
      },
      {
        status: "LOOP_STATUS_OBSERVING",
        observation: `[RouteLog:\n  Vehicule: "Truck-908"\n  Route: "Houston-DepotA"\n  Status: "EMPTY_RETURN"\n  Cout: "$2,400"\n  Distance: "250mi"\n]`
      },
      {
        status: "LOOP_STATUS_WORKING",
        thought: "Le camion retourne à vide. Je vais exécuter une requête SQL pour voir s'il y a du fret disponible chez un fournisseur à CC-204.",
        action: "run_sql",
        input: "SELECT load_id, weight FROM pending_loads WHERE location = 'CC-204'"
      },
      {
        status: "LOOP_STATUS_EXECUTING",
        action: "run_sql",
        input: "SELECT load_id, weight FROM pending_loads WHERE location = 'CC-204'"
      },
      {
        status: "LOOP_STATUS_OBSERVING",
        observation: `[QueryResult:\n  Lignes: [\n    { load_id: "L-771", weight: "12,500lbs" }\n  ]\n]\n(Fret L-771 prêt pour collecte à CC-204.)`
      },
      {
        status: "LOOP_STATUS_WORKING",
        thought: "Fret L-771 disponible. Je vais optimiser le trajet du camion pour intercepter CC-204, générer le SOP-Route-309 et notifier le chauffeur.",
        action: "",
        input: ""
      },
      {
        status: "LOOP_STATUS_DONE",
        final: `[RouteOptimizationResult:\n  Status: "SUCCESS"\n  Route_Optimisee: "Houston -> CC-204 (Collecte L-771) -> Depot A"\n  Economies_USD: "1,850"\n  Actions_Prises: [\n    "Recalculé la route pour éviter le trajet à vide",\n    "Généré le SOP-Route-309 de collecte fournisseur",\n    "Envoyé les instructions GPS au chauffeur"\n  ]\n]`
      }
    ],
    Finance: [
      {
        status: "LOOP_STATUS_WORKING",
        thought: "Je dois analyser la facture douanière xml reçue pour vérifier les surcharges de surestaries.",
        action: "read_file",
        input: "invoices/customs/SH-908B.xml"
      },
      {
        status: "LOOP_STATUS_EXECUTING",
        action: "read_file",
        input: "invoices/customs/SH-908B.xml"
      },
      {
        status: "LOOP_STATUS_OBSERVING",
        observation: `[CustomsInvoice:\n  Facture_Numero: "SH-908B"\n  Frais_Totaux: "$42,500"\n  Jours_Surestaries: "6"\n  Taux_Surestaries: "$5,000/jour"\n  Temps_Libre_Heures: "48"\n]`
      },
      {
        status: "LOOP_STATUS_WORKING",
        thought: "Le taux facturé est de $5,000/jour. Je vais consulter les contrats SLA de notre base de données pour vérifier le taux maximum négocié.",
        action: "run_sql",
        input: "SELECT rate_cap FROM vendor_contracts WHERE vendor = 'Houston_Port'"
      },
      {
        status: "LOOP_STATUS_EXECUTING",
        action: "run_sql",
        input: "SELECT rate_cap FROM vendor_contracts WHERE vendor = 'Houston_Port'"
      },
      {
        status: "LOOP_STATUS_OBSERVING",
        observation: `[QueryResult:\n  Lignes: [\n    { rate_cap: "$2,000/jour" }\n  ]\n]\n(Écart Tarifaire: $5,000 facturés vs limite contractuelle de $2,000/jour!)`
      },
      {
        status: "LOOP_STATUS_WORKING",
        thought: "Surcharge de surestaries confirmée ($3,000/jour d'excédent). Je vais rédiger le litige DISPUTE-908B pour réclamer un crédit de $18,200.00 et le transmettre.",
        action: "",
        input: ""
      },
      {
        status: "LOOP_STATUS_DONE",
        final: `[DemurrageDisputeResult:\n  Status: "SUCCESS"\n  Dispute_Claims_ID: "DISPUTE-908B"\n  Surfacturation_Detectee: "$18,200.00"\n  Actions_Prises: [\n    "Vérifié l'écart de taux contractuel de surestaries ($2,000 vs $5,000)",\n    "Rédigé le litige officiel et la demande de crédit",\n    "Soumis le dossier de réclamation au service facturation du port"\n  ]\n]`
      }
    ]
  },
  Portuguese: {
    Sentinel: [
      {
        status: "LOOP_STATUS_WORKING",
        thought: "Eu preciso ler o esquema da tabela do Registro de Perfis `customer_gold` para identificar colunas unmasked de PII.",
        action: "read_file",
        input: "db/schemas/customer_gold.schema"
      },
      {
        status: "LOOP_STATUS_EXECUTING",
        action: "read_file",
        input: "db/schemas/customer_gold.schema"
      },
      {
        status: "LOOP_STATUS_OBSERVING",
        observation: `[SchemaMeta:\n  Tabela: "customer_gold"\n  Colunas: [\n    { Nome: "cust_id", Tipo: "INT", Mascarado: false },\n    { Nome: "email", Tipo: "VARCHAR", Mascarado: false },\n    { Nome: "phone", Tipo: "VARCHAR", Mascarado: false },\n    { Nome: "tax_id", Tipo: "VARCHAR", Mascarado: true }\n  ]\n]`
      },
      {
        status: "LOOP_STATUS_WORKING",
        thought: "As colunas 'email' e 'phone' estão desprotegidas. Vou rodar uma query SQL diagnóstica para verificar a exposição dos dados em plaintext.",
        action: "run_sql",
        input: "SELECT email, phone FROM customer_gold WHERE cust_id = 1001"
      },
      {
        status: "LOOP_STATUS_EXECUTING",
        action: "run_sql",
        input: "SELECT email, phone FROM customer_gold WHERE cust_id = 1001"
      },
      {
        status: "LOOP_STATUS_OBSERVING",
        observation: `[QueryResult:\n  Linhas: [\n    { email: "john.doe@gmail.com", phone: "+1-555-0199" }\n  ]\n]\n(Aviso: Vazamento ativo de PII em plaintext confirmado!)`
      },
      {
        status: "LOOP_STATUS_WORKING",
        thought: "O vazamento de PII em plaintext foi confirmado. Vou gerar o documento de SOP para mascaramento de colunas, despachar alertas seguros via WhatsApp e encerrar o loop.",
        action: "",
        input: ""
      },
      {
        status: "LOOP_STATUS_DONE",
        final: `[RemediationResult:\n  Status: "SUCCESS"\n  SOP_ID: "SOP-8402"\n  Acoes_Tomadas: [\n    "Gerado política de mascaramento de coluna do Registro de Perfis SOP-8402",\n    "Verificado exposição de texto simples por consultas SQL",\n    "Despachado alerta de WhatsApp para o líder de segurança (+55 11 99999-1234)"\n  ]\n]`
      }
    ],
    Route: [
      {
        status: "LOOP_STATUS_WORKING",
        thought: "Eu preciso ler o log de telemetria da rota sob o código CC-204 para identificar pernas vazias de contêineres de retorno.",
        action: "read_file",
        input: "routes/telemetry/CC-204.log"
      },
      {
        status: "LOOP_STATUS_EXECUTING",
        action: "read_file",
        input: "routes/telemetry/CC-204.log"
      },
      {
        status: "LOOP_STATUS_OBSERVING",
        observation: `[RouteLog:\n  Veiculo: "Caminhao-908"\n  Rota: "Houston-DepotA"\n  Status: "RETORNO_VAZIO"\n  Custo: "$2,400"\n  Distancia: "250mi"\n]`
      },
      {
        status: "LOOP_STATUS_WORKING",
        thought: "O Caminhão-908 está retornando vazio. Vou executar uma consulta SQL para checar se há carga pendente do fornecedor no ponto CC-204 para coleta.",
        action: "run_sql",
        input: "SELECT load_id, weight FROM pending_loads WHERE location = 'CC-204'"
      },
      {
        status: "LOOP_STATUS_EXECUTING",
        action: "run_sql",
        input: "SELECT load_id, weight FROM pending_loads WHERE location = 'CC-204'"
      },
      {
        status: "LOOP_STATUS_OBSERVING",
        observation: `[QueryResult:\n  Linhas: [\n    { load_id: "L-771", weight: "12,500lbs" }\n  ]\n]\n(Carga L-771 pronta para coleta no ponto CC-204.)`
      },
      {
        status: "LOOP_STATUS_WORKING",
        thought: "Carga L-771 encontrada. Vou otimizar a rota do Caminhão-908 para interceptar a coordenada CC-204, gerar o SOP-Route-309 de redespacho e notificar o motorista.",
        action: "",
        input: ""
      },
      {
        status: "LOOP_STATUS_DONE",
        final: `[RouteOptimizationResult:\n  Status: "SUCCESS"\n  Rota_Otimizada: "Houston -> CC-204 (Coleta L-771) -> Depot A"\n  Economia_USD: "1,850"\n  Acoes_Tomadas: [\n    "Recalculado mapeamento da rota para evitar perna vazia",\n    "Gerado SOP-Route-309 para coleta de retorno do fornecedor",\n    "Despachado atualizações de navegação passo a passo para o motorista"\n  ]\n]`
      }
    ],
    Finance: [
      {
        status: "LOOP_STATUS_WORKING",
        thought: "Eu preciso ler a fatura aduaneira xml recebida para examinar os detalhes das sobretaxas de demurrage.",
        action: "read_file",
        input: "invoices/customs/SH-908B.xml"
      },
      {
        status: "LOOP_STATUS_EXECUTING",
        action: "read_file",
        input: "invoices/customs/SH-908B.xml"
      },
      {
        status: "LOOP_STATUS_OBSERVING",
        observation: `[CustomsInvoice:\n  Numero_Fatura: "SH-908B"\n  Cargos_Totais: "$42,500"\n  Dias_Demurrage: "6"\n  Taxa_Demurrage: "$5,000/dia"\n  Tempo_Livre_Horas: "48"\n]`
      },
      {
        status: "LOOP_STATUS_WORKING",
        thought: "A taxa cobrada é de $5,000/dia. Vou consultar o banco de dados de contratos SLA para verificar o teto limite tarifário negociado.",
        action: "run_sql",
        input: "SELECT rate_cap FROM vendor_contracts WHERE vendor = 'Houston_Port'"
      },
      {
        status: "LOOP_STATUS_EXECUTING",
        action: "run_sql",
        input: "SELECT rate_cap FROM vendor_contracts WHERE vendor = 'Houston_Port'"
      },
      {
        status: "LOOP_STATUS_OBSERVING",
        observation: `[QueryResult:\n  Linhas: [\n    { rate_cap: "$2,000/dia" }\n  ]\n]\n(Discrepância Tarifária: Tarifa de $5,000 cobrada excede o limite contratual de $2,000/dia!)`
      },
      {
        status: "LOOP_STATUS_WORKING",
        thought: "Cobrança excessiva confirmada ($3,000/dia acima do teto). Vou gerar o documento de contestação DISPUTE-908B para recuperar a diferença de $18,200.00 e despachar.",
        action: "",
        input: ""
      },
      {
        status: "LOOP_STATUS_DONE",
        final: `[DemurrageDisputeResult:\n  Status: "SUCCESS"\n  Dispute_Claims_ID: "DISPUTE-908B"\n  Excedente_Detectado: "$18,200.00"\n  Acoes_Tomadas: [\n    "Verificado discrepância de taxa de demurrage do contrato ($2,000 vs $5,000)",\n    "Redigido contestação formal de taxa e carta de reembolso",\n    "Submetido disputa ao portal de faturamento da autoridade portuária"\n  ]\n]`
      }
    ]
  }
};

let reactLoopTimer = null;

function runReactAgentLoop() {
  if (reactLoopTimer) clearTimeout(reactLoopTimer);

  const overlay = document.getElementById("react-console-overlay");
  const logsContainer = document.getElementById("react-console-logs");
  const typingIndicator = document.getElementById("react-console-typing-indicator");
  const statusText = document.getElementById("react-console-status-text");
  const statusDot = document.getElementById("react-console-status-dot");
  const iterText = document.getElementById("react-console-iter");
  const progressBar = document.getElementById("react-console-progress-bar");
  const progressPercent = document.getElementById("react-console-progress-percent");
  const btnAbort = document.getElementById("btn-react-abort");
  const btnResolve = document.getElementById("btn-react-resolve");

  const agentSelector = document.getElementById("react-agent-selector");
  const activeAgent = agentSelector ? agentSelector.value : "Sentinel";

  const agentIcon = document.getElementById("react-console-agent-icon");
  const agentName = document.getElementById("react-console-agent-name");
  const agentGoal = document.getElementById("react-console-agent-goal");

  if (activeAgent === "Sentinel") {
    if (agentIcon) agentIcon.innerText = "🛡️";
    if (agentName) agentName.innerText = currentLanguage === 'Portuguese' ? "Agente Sentinel (Conformidade)" : "Sentinel Agent (Compliance)";
    if (agentGoal) agentGoal.innerText = currentLanguage === 'Portuguese' ? "Tarefa: Inspeção automática de campos expostos na tabela Customer Gold" : "Task: Auto-inspect unmasked fields in Customer Gold table";
  } else if (activeAgent === "Route") {
    if (agentIcon) agentIcon.innerText = "🚚";
    if (agentName) agentName.innerText = currentLanguage === 'Portuguese' ? "Agente de Distribuição (Logística)" : "Fulfilment Agent (Logistics)";
    if (agentGoal) agentGoal.innerText = currentLanguage === 'Portuguese' ? "Tarefa: Otimizar retorno de frota vazia para coleta de fornecedor" : "Task: Optimize empty fleet return for backhaul pickup";
  } else if (activeAgent === "Finance") {
    if (agentIcon) agentIcon.innerText = "💰";
    if (agentName) agentName.innerText = currentLanguage === 'Portuguese' ? "Agente de Contestações (Finanças)" : "Claims Agent (Finance)";
    if (agentGoal) agentGoal.innerText = currentLanguage === 'Portuguese' ? "Tarefa: Detectar e contestar tarifas excedentes de demurrage" : "Task: Detect and dispute demurrage contract cap overruns";
  }

  if (overlay) overlay.style.display = "flex";
  if (logsContainer) logsContainer.innerHTML = "";
  if (statusDot) {
    statusDot.style.backgroundColor = "#ef4444";
    statusDot.style.boxShadow = "0 0 8px #ef4444";
  }
  if (btnAbort) btnAbort.style.display = "block";
  if (btnResolve) btnResolve.style.display = "none";
  if (progressBar) progressBar.style.width = "0%";
  if (progressPercent) progressPercent.innerText = "0%";
  if (iterText) iterText.innerText = "ITERATION: 1/3";

  let lang = currentLanguage;
  if (!reactAgentStreams[lang]) {
    lang = "English";
  }
  const streamData = reactAgentStreams[lang][activeAgent] || reactAgentStreams["English"][activeAgent];

  let currentStepIdx = 0;

  function executeStep() {
    if (currentStepIdx >= streamData.length) {
      if (typingIndicator) typingIndicator.style.display = "none";
      if (statusDot) {
        statusDot.style.backgroundColor = "#22c55e";
        statusDot.style.boxShadow = "0 0 8px #22c55e";
      }
      if (iterText) iterText.innerText = "ITERATION: DONE";
      if (progressBar) progressBar.style.width = "100%";
      if (progressPercent) progressPercent.innerText = "100%";
      if (btnAbort) btnAbort.style.display = "none";
      if (btnResolve) btnResolve.style.display = "block";
      return;
    }

    const step = streamData[currentStepIdx];
    if (typingIndicator) typingIndicator.style.display = "flex";

    if (step.status === "LOOP_STATUS_WORKING") {
      if (statusText) {
        statusText.innerText = currentLanguage === 'Portuguese' ? "Gerando pensamento analítico..." : "Generating reasoning thought...";
      }
      const iterNum = Math.floor(currentStepIdx / 3) + 1;
      if (iterText) iterText.innerText = `ITERATION: ${iterNum}/3`;

      if (progressBar) {
        const pct = Math.floor((currentStepIdx / streamData.length) * 100);
        progressBar.style.width = `${pct}%`;
        if (progressPercent) progressPercent.innerText = `${pct}%`;
      }

      reactLoopTimer = setTimeout(() => {
        const thoughtHtml = `
          <div style="border-left: 2px solid var(--accent-orange); padding-left: 10px; margin-bottom: 10px;">
            <div style="color:var(--text-muted); font-size:0.65rem; text-transform:uppercase; font-family:var(--font-sans);">[LoopStatus: LOOP_STATUS_WORKING]</div>
            <div style="color:#fff; font-weight:700;"><span style="color:var(--accent-orange-light);">Thought:</span> "${step.thought}"</div>
            ${step.action ? `<div style="color:var(--text-secondary); margin-top:4px;"><span style="color:#a855f7;">Action Attempt:</span> ${step.action}(input: "${step.input}")</div>` : ''}
          </div>
        `;
        if (logsContainer) logsContainer.innerHTML += thoughtHtml;
        scrollLogsToBottom();
        currentStepIdx++;
        executeStep();
      }, 1500);

    } else if (step.status === "LOOP_STATUS_EXECUTING") {
      if (statusText) {
        statusText.innerText = currentLanguage === 'Portuguese' ? "Executando integração de conformidade..." : "Executing compliance verification...";
      }

      reactLoopTimer = setTimeout(() => {
        const execHtml = `
          <div style="border-left: 2px solid #a855f7; padding-left: 10px; margin-bottom: 10px;">
            <div style="color:var(--text-muted); font-size:0.65rem; text-transform:uppercase; font-family:var(--font-sans);">[LoopStatus: LOOP_STATUS_EXECUTING]</div>
            <div style="color:#a855f7; font-weight:700;">&gt; Calling secure database query: <span style="color:#fff; font-family:var(--font-mono);">${step.action}</span></div>
            <div style="color:var(--text-muted); font-size:0.7rem; margin-top:2px;">Args: ${step.input}</div>
          </div>
        `;
        if (logsContainer) logsContainer.innerHTML += execHtml;
        scrollLogsToBottom();
        currentStepIdx++;
        executeStep();
      }, 1000);

    } else if (step.status === "LOOP_STATUS_OBSERVING") {
      if (statusText) {
        statusText.innerText = currentLanguage === 'Portuguese' ? "Processando observações de auditoria..." : "Processing audit verification...";
      }

      reactLoopTimer = setTimeout(() => {
        const obsHtml = `
          <div style="border-left: 2px solid #3b82f6; padding-left: 10px; margin-bottom: 10px;">
            <div style="color:var(--text-muted); font-size:0.65rem; text-transform:uppercase; font-family:var(--font-sans);">[LoopStatus: LOOP_STATUS_OBSERVING]</div>
            <div style="color:#3b82f6; font-weight:700;">Observation Result:</div>
            <pre style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.05); border-radius:4px; padding:6px; font-family:var(--font-mono); font-size:0.7rem; color:#22c55e; white-space:pre-wrap; margin:4px 0 0 0;">${step.observation}</pre>
          </div>
        `;
        if (logsContainer) logsContainer.innerHTML += obsHtml;
        scrollLogsToBottom();
        currentStepIdx++;
        executeStep();
      }, 1500);

    } else if (step.status === "LOOP_STATUS_DONE") {
      if (statusText) {
        statusText.innerText = currentLanguage === 'Portuguese' ? "Finalizando e serializando em TOON..." : "Finalizing and serializing TOON answer...";
      }

      reactLoopTimer = setTimeout(() => {
        const doneHtml = `
          <div style="border-left: 2px solid #22c55e; padding-left: 10px; margin-bottom: 10px;">
            <div style="color:var(--text-muted); font-size:0.65rem; text-transform:uppercase; font-family:var(--font-sans);">[LoopStatus: LOOP_STATUS_DONE]</div>
            <div style="color:#22c55e; font-weight:700;">Final Parsed Answer (TOON):</div>
            <pre style="background:rgba(34,197,94,0.05); border:1px solid rgba(34,197,94,0.2); border-radius:4px; padding:8px; font-family:var(--font-mono); font-size:0.7rem; color:#fff; white-space:pre-wrap; margin:4px 0 0 0;">${step.final}</pre>
          </div>
        `;
        if (logsContainer) logsContainer.innerHTML += doneHtml;
        scrollLogsToBottom();
        currentStepIdx++;
        executeStep();
      }, 1800);
    }
  }

  executeStep();
}

function scrollLogsToBottom() {
  const container = document.getElementById("react-console-logs-wrapper");
  if (container) {
    container.scrollTop = container.scrollHeight;
  }
}

// Update the entire Remediation screen content based on active agent selection
function updateRemediationScreenForAgent(agentType) {
  const title = document.getElementById("remediation-title");
  const subtitle = document.getElementById("remediation-header-subtitle");
  const source = document.getElementById("remediation-source-highlight");
  const badge = document.getElementById("remediation-alert-badge");
  const icon = document.getElementById("remediation-alert-icon");
  const riskBefore = document.getElementById("remediation-risk-before");
  const riskAfter = document.getElementById("remediation-risk-after");
  const step1Title = document.getElementById("remediation-step1-title");
  const step1Desc = document.getElementById("remediation-step1-desc");
  const step1Script = document.getElementById("remediation-step1-script");
  const step1ActionBtn = document.getElementById("remediation-step1-action-btn");
  const step2Title = document.getElementById("remediation-step2-title");
  const step2Desc = document.getElementById("remediation-step2-desc");
  const step2Avatar = document.getElementById("remediation-step2-avatar");
  const step2Details = document.getElementById("remediation-step2-details");
  const infoLabel = document.getElementById("remediation-info-label");
  const dispatchBtn = document.getElementById("btn-dispatch-remediation");

  if (agentType === "Sentinel") {
    if (subtitle) {
      subtitle.innerText = currentLanguage === 'Portuguese' ? "ANOMALIA DE SEGURANÇA DETECTADA" : "SECURITY ANOMALY DETECTED";
    }
    if (title) {
      title.innerHTML = currentLanguage === 'Portuguese' ? "Exposição de PII em<br>customer_gold" : "PII Exposure in<br>customer_gold";
    }
    if (source) source.innerText = currentLanguage === 'Portuguese' ? "Reg. de Perfis: Customer_Gold" : "Customer Profile Registry: Customer_Gold";
    if (badge) {
      badge.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="margin-right:4px;"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> ${currentLanguage === 'Portuguese' ? 'Alerta de Segurança' : 'Security Alert'}`;
    }
    if (icon) {
      icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`;
    }
    if (riskBefore) {
      riskBefore.innerHTML = `<span class="risk-state-title">${currentLanguage === 'Portuguese' ? 'Alto' : 'High'}</span><span class="risk-state-desc">${currentLanguage === 'Portuguese' ? 'Risco de Conformidade' : 'Compliance Risk'}</span>`;
    }
    if (riskAfter) {
      riskAfter.innerHTML = `<span class="risk-state-title">${currentLanguage === 'Portuguese' ? 'Seguro' : 'Safe'}</span><span class="risk-state-desc">${currentLanguage === 'Portuguese' ? 'Dados Mascarados' : 'Masked Data'}</span>`;
    }
    if (step1Title) {
      step1Title.innerHTML = currentLanguage === 'Portuguese' ? "Gerar Documentação SOP" : "Generate SOP<br>Documentation";
    }
    if (step1Desc) {
      step1Desc.innerText = currentLanguage === 'Portuguese' ? "Procedimento operacional padrão detalhado para modificação física de banco de dados." : "Provide detailed Standard Operating Procedure for physical database modification. Do not apply directly.";
    }
    if (step1Script) {
      step1Script.innerText = `SOP: Implement Masking\n1. Connect to database.\n2. Execute:\n   ALTER TABLE customer_gold ADD MASKING POLICY pii_mask;\n3. Verify masking is applied.`;
    }
    if (step1ActionBtn) {
      step1ActionBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg> ${currentLanguage === 'Portuguese' ? 'Ver SOP Completo' : 'View Full SOP'}`;
      step1ActionBtn.onclick = () => alert("Full SOP document generated under docs/remediations/SOP-8402.md");
    }
    if (step2Title) {
      step2Title.innerHTML = currentLanguage === 'Portuguese' ? "Atribuir Tarefa &<br>Procurar Provedores" : "Assign Task &<br>Search Providers";
    }
    if (step2Desc) {
      step2Desc.innerText = currentLanguage === 'Portuguese' ? "Enviar SOP para a equipe técnica interna ou usar pesquisa para propor provedores freelancers." : "Send SOP to internal Tech team or use metasearch to propose freelance service providers.";
    }
    if (step2Avatar) step2Avatar.innerText = "DP";
    if (step2Details) {
      step2Details.innerHTML = `<span class="timeline-recipient-name">To: tech-team@company.com</span><span class="timeline-recipient-sub">Subject: Action Required: Execute SOP...</span>`;
    }
    if (infoLabel) {
      infoLabel.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg> ${currentLanguage === 'Portuguese' ? 'O SOP será gerado e despachado para execução manual.' : 'SOP will be generated and dispatched for manual execution.'}`;
    }
    if (dispatchBtn) {
      dispatchBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> ${currentLanguage === 'Portuguese' ? 'Gerar & Despachar SOP' : 'Generate & Dispatch SOP'}`;
    }
  } else if (agentType === "Route") {
    if (subtitle) {
      subtitle.innerText = currentLanguage === 'Portuguese' ? "OTIMIZAÇÃO DE LOGÍSTICA DE ROTAS" : "ROUTE LOGISTICS OPTIMIZATION";
    }
    if (title) {
      title.innerHTML = currentLanguage === 'Portuguese' ? "Ineficiência de Perna Vazia<br>no Fluxo de Frete" : "Empty Leg Logistics<br>Inefficiency";
    }
    if (source) source.innerText = "Route Twin: Depot A to Port Houston";
    if (badge) {
      badge.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="margin-right:4px;"><path d="M12 2a10 10 0 0 0-10 10c0 5.25 10 12 10 12s10-6.75 10-12a10 10 0 0 0-10-10zm0 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/></svg> ${currentLanguage === 'Portuguese' ? 'Alerta de Rota' : 'Route Alert'}`;
    }
    if (icon) {
      icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 18l6-6-6-6"/></svg>`;
    }
    if (riskBefore) {
      riskBefore.innerHTML = `<span class="risk-state-title">${currentLanguage === 'Portuguese' ? 'Alta Perda' : 'High Loss'}</span><span class="risk-state-desc">${currentLanguage === 'Portuguese' ? 'Ineficiência Combustível' : 'Fuel Inefficiency'}</span>`;
    }
    if (riskAfter) {
      riskAfter.innerHTML = `<span class="risk-state-title">${currentLanguage === 'Portuguese' ? 'Otimizado' : 'Optimized'}</span><span class="risk-state-desc">${currentLanguage === 'Portuguese' ? 'Retorno com Carga' : 'Backhaul Pickup'}</span>`;
    }
    if (step1Title) {
      step1Title.innerHTML = currentLanguage === 'Portuguese' ? "Gerar Plano de Rota" : "Generate Backhaul<br>Plan";
    }
    if (step1Desc) {
      step1Desc.innerText = currentLanguage === 'Portuguese' ? "SOP para redirecionamento inteligente de contêineres vazios para coletar cargas pendentes de fornecedores." : "Detailed SOP for dynamic rerouting of empty backhauls to collect vendor payloads.";
    }
    if (step1Script) {
      step1Script.innerText = `SOP: Route Optimization\n1. Intercept Depot A return fleet.\n2. Reroute via highway grid point CC-204.\n3. Pickup industrial payload from vendor.`;
    }
    if (step1ActionBtn) {
      step1ActionBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg> ${currentLanguage === 'Portuguese' ? 'Ver Mapa de Rota' : 'View Route Plan'}`;
      step1ActionBtn.onclick = () => alert("Optimized route map preview generated under docs/remediations/ROUTE-309.md");
    }
    if (step2Title) {
      step2Title.innerHTML = currentLanguage === 'Portuguese' ? "Notificar Operações &<br>Despachar Motorista" : "Notify Operations &<br>Dispatch Driver";
    }
    if (step2Desc) {
      step2Desc.innerText = currentLanguage === 'Portuguese' ? "Enviar ordem de serviço para o WhatsApp do motorista e notificar o centro de controle logístico." : "Transmit optimized coordinates to driver's WhatsApp and alert the logistics desk.";
    }
    if (step2Avatar) step2Avatar.innerText = "LO";
    if (step2Details) {
      step2Details.innerHTML = `<span class="timeline-recipient-name">To: dispatch-team@company.com</span><span class="timeline-recipient-sub">Subject: Dispatch Order: Reroute Empty Leg Depot A</span>`;
    }
    if (infoLabel) {
      infoLabel.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg> ${currentLanguage === 'Portuguese' ? 'A rota otimizada será enviada para o canal de despacho.' : 'Optimized route plan will be dispatched to the scheduling terminal.'}`;
    }
    if (dispatchBtn) {
      dispatchBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> ${currentLanguage === 'Portuguese' ? 'Otimizar & Despachar Frota' : 'Optimize & Dispatch Fleet'}`;
    }
  } else if (agentType === "Finance") {
    if (subtitle) {
      subtitle.innerText = currentLanguage === 'Portuguese' ? "AUDITORIA DE CRÉDITO FINANCEIRO" : "FINANCE CREDIT AUDIT";
    }
    if (title) {
      title.innerHTML = currentLanguage === 'Portuguese' ? "Estouro de Teto de Contrato<br>de Demurrage Aduaneiro" : "Customs Demurrage<br>Contract Cap Breach";
    }
    if (source) source.innerText = "Invoices: HS Customs #SH-908B";
    if (badge) {
      badge.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="margin-right:4px;"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> ${currentLanguage === 'Portuguese' ? 'Alerta de Faturamento' : 'Billing Alert'}`;
    }
    if (icon) {
      icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`;
    }
    if (riskBefore) {
      riskBefore.innerHTML = `<span class="risk-state-title">${currentLanguage === 'Portuguese' ? 'Vazamento $' : 'Leakage $'}</span><span class="risk-state-desc">${currentLanguage === 'Portuguese' ? 'Sobretaxa Aduaneira' : 'Demurrage Overcharge'}</span>`;
    }
    if (riskAfter) {
      riskAfter.innerHTML = `<span class="risk-state-title">${currentLanguage === 'Portuguese' ? 'Recuperado' : 'Recovered'}</span><span class="risk-state-desc">${currentLanguage === 'Portuguese' ? 'Reembolso Solicitado' : 'Dispute Filed'}</span>`;
    }
    if (step1Title) {
      step1Title.innerHTML = currentLanguage === 'Portuguese' ? "Gerar Contestação de Fatura" : "Generate Dispute<br>Documentation";
    }
    if (step1Desc) {
      step1Desc.innerText = currentLanguage === 'Portuguese' ? "SOP para abertura formal de auditoria e geração da carta de contestação contra a cobrança excedente." : "Generate formal dispute documents highlighting the maximum billing cap violation.";
    }
    if (step1Script) {
      step1Script.innerText = `SOP: Demurrage Dispute\n1. Compare invoice #INV-908B to vendor SLA contract.\n2. Extract overage hours (48 hrs above free-time limit).\n3. Claim refund amount: $18,200.00.`;
    }
    if (step1ActionBtn) {
      step1ActionBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg> ${currentLanguage === 'Portuguese' ? 'Ver Documentos de Contestação' : 'View Dispute Docs'}`;
      step1ActionBtn.onclick = () => alert("Formal refund letter preview generated under docs/claims/DISPUTE-908B.md");
    }
    if (step2Title) {
      step2Title.innerHTML = currentLanguage === 'Portuguese' ? "Enviar Disputa ao Vendor &<br>Registrar no ERP" : "File Dispute with Vendor &<br>Log ERP Ledger";
    }
    if (step2Desc) {
      step2Desc.innerText = currentLanguage === 'Portuguese' ? "Submeter a contestação ao portal de disputas do porto e provisionar a recuperação do crédito no financeiro." : "Submit the demurrage dispute to the port billing gate and record a $18,200.00 recovery ledger.";
    }
    if (step2Avatar) step2Avatar.innerText = "FI";
    if (step2Details) {
      step2Details.innerHTML = `<span class="timeline-recipient-name">To: port-billing@customs.gov</span><span class="timeline-recipient-sub">Subject: Official Demurrage Rate Cap Dispute: INV-908B</span>`;
    }
    if (infoLabel) {
      infoLabel.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg> ${currentLanguage === 'Portuguese' ? 'O SOP será despachado ou executado dinamicamente.' : 'SOP will be generated and dispatched.'}`;
    }
    if (dispatchBtn) {
      dispatchBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> ${currentLanguage === 'Portuguese' ? 'Contestar Faturamento' : 'File Demurrage Dispute'}`;
    }
  }
}

// WhatsApp dual dispatch and background negotiation simulator implementation
let currentClaimsDraftChannel = 'email';

function toggleClaimsDraftChannel(channel) {
  currentClaimsDraftChannel = channel;

  const stripe = document.getElementById("claims-draft-stripe");
  const iconContainer = document.getElementById("claims-draft-icon-container");
  const iconSvg = document.getElementById("claims-draft-icon-svg");
  const title = document.getElementById("claims-draft-title");
  const subtitle = document.getElementById("claims-draft-subtitle");
  const content = document.getElementById("claims-draft-content");
  const actionBtnText = document.getElementById("claims-draft-btn-text");
  const actionBtnIcon = document.getElementById("claims-draft-btn-icon");

  const btnEmail = document.getElementById("btn-claims-channel-email");
  const btnWhatsApp = document.getElementById("btn-claims-channel-whatsapp");

  if (channel === 'email') {
    if (btnEmail) {
      btnEmail.classList.add("active");
      btnEmail.style.background = "rgba(59, 130, 246, 0.2)";
      btnEmail.style.borderColor = "#3b82f6";
      btnEmail.style.color = "#fff";
    }
    if (btnWhatsApp) {
      btnWhatsApp.classList.remove("active");
      btnWhatsApp.style.background = "transparent";
      btnWhatsApp.style.borderColor = "rgba(255,255,255,0.1)";
      btnWhatsApp.style.color = "var(--text-muted)";
    }

    if (stripe) stripe.style.backgroundColor = "#3b82f6";
    if (iconContainer) {
      iconContainer.style.backgroundColor = "rgba(59, 130, 246, 0.1)";
      iconContainer.style.color = "#3b82f6";
    }
    if (iconSvg) {
      iconSvg.innerHTML = `<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`;
    }
    if (title) title.innerText = "Claims Draft (BOL)";
    if (subtitle) subtitle.innerText = "Bill of Lading Resolution via Email";
    if (content) {
      content.innerHTML = `
        <div style="font-size:0.6rem; color:var(--text-muted); text-transform:uppercase; margin-bottom:4px;">Subject</div>
        <div style="font-weight:700; color:#fff; margin-bottom:6px;">Re: Claim #9921 - Weight Discrepancy Adjustment</div>
        Dear Vendor, we have approved a partial refund of $450.00 for Claim #9921 due to verified cargo discrepancy in BOL.
      `;
    }
    if (actionBtnText) actionBtnText.innerText = "Email Vendor";
    if (actionBtnIcon) {
      actionBtnIcon.innerHTML = `<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>`;
    }
  } else {
    if (btnWhatsApp) {
      btnWhatsApp.classList.add("active");
      btnWhatsApp.style.background = "rgba(37, 211, 102, 0.2)";
      btnWhatsApp.style.borderColor = "#25d366";
      btnWhatsApp.style.color = "#fff";
    }
    if (btnEmail) {
      btnEmail.classList.remove("active");
      btnEmail.style.background = "transparent";
      btnEmail.style.borderColor = "rgba(255,255,255,0.1)";
      btnEmail.style.color = "var(--text-muted)";
    }

    if (stripe) stripe.style.backgroundColor = "#25d366";
    if (iconContainer) {
      iconContainer.style.backgroundColor = "rgba(37, 211, 102, 0.1)";
      iconContainer.style.color = "#25d366";
    }
    if (iconSvg) {
      iconSvg.innerHTML = `<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>`;
    }
    if (title) title.innerText = "Claims Draft (WhatsApp)";
    if (subtitle) subtitle.innerText = "Bill of Lading Resolution via WhatsApp";
    if (content) {
      content.innerHTML = `
        <div style="font-size:0.6rem; color:#25d366; text-transform:uppercase; margin-bottom:4px;">WhatsApp Message</div>
        <div style="font-weight:700; color:#fff; margin-bottom:6px;">To: John Doe (Broker)</div>
        Hey John, regarding Claim #9921 (Weight Discrepancy Adjustment), we've approved a partial refund of $450.00. Ready to dispatch?
      `;
    }
    if (actionBtnText) actionBtnText.innerText = "Send WhatsApp";
    if (actionBtnIcon) {
      actionBtnIcon.innerHTML = `<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>`;
    }
  }
}

function dispatchClaimsDraft() {
  if (currentClaimsDraftChannel === 'email') {
    showToast(currentLanguage === 'Portuguese' ? "E-mail de contestação enviado ao gerente de contas do fornecedor!" : "Claims email dispatched to vendor account manager!");
  } else {
    showToast(currentLanguage === 'Portuguese' ? "Mensagem de WhatsApp enviada ao Corretor John Doe!" : "Claims WhatsApp message dispatched to John Doe (Broker)!");
  }
}

function triggerWhatsAppAgentNegotiation() {
  const providerName = lastFoundContact ? lastFoundContact.name : "Lumina Logistics Ltd";
  const providerPhone = lastFoundContact ? lastFoundContact.phone : "+1 555-014-9988";

  const alreadyExists = mockActions.some(act => act.id === "TWIN-116");
  if (!alreadyExists) {
    mockActions.unshift({
      id: "TWIN-116",
      category: "Finance",
      title: "Approve Discounted Order",
      description: `Our agent was able to get better discounts over WhatsApp through messages with provider ${providerName}.`,
      priority: "High",
      impact: "+14.2% Saving",
      ai_generated: true,
      source: "Agentic WhatsApp Negotiator",
      path: "/artifact",
      contactName: providerName,
      contactPhone: providerPhone
    });
    renderActionFeed();
  }

  showToast(
    currentLanguage === 'Portuguese'
      ? `Nosso agente conseguiu descontos melhores no WhatsApp com o provedor ${providerName}. Aprovar pedido atualizado?`
      : `Our agent was able to get better discounts over WhatsApp through messages with provider ${providerName}. Approve updated order?`
  );
}

function startBackgroundWhatsAppSimulator() {
  setTimeout(() => {
    triggerWhatsAppAgentNegotiation();
    setInterval(() => {
      triggerWhatsAppAgentNegotiation();
    }, 45000);
  }, 12000);
}
