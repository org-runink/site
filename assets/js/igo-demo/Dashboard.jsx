import React from 'react';
import { useIntent } from './IntentContext';

const SpendRecoveryModule = () => (
  <div style={{ padding: '20px', background: '#f8fdf8', border: '1px solid #10b981', borderRadius: '8px' }}>
    <h2 style={{ color: '#047857', marginTop: 0 }}>💰 Spend Recovery Engine</h2>
    <p>We've identified potential overcharges and SLAs breaches that can be recovered automatically. Your financial ROI begins here.</p>
    <ul>
      <li>Demurrage & Detention Recovery</li>
      <li>Invoice Auditing (AI match against contracts)</li>
      <li>Predictive Cashflow Modeling</li>
    </ul>
    <button style={{ background: '#10b981', color: '#fff', border: 'none', padding: '10px 15px', borderRadius: '5px', cursor: 'pointer' }}>
      Audit Past 30 Days Invoices
    </button>
  </div>
);

const PredictiveMaintenanceModule = () => (
  <div style={{ padding: '20px', background: '#fef8f8', border: '1px solid #ef4444', borderRadius: '8px' }}>
    <h2 style={{ color: '#b91c1c', marginTop: 0 }}>⚙️ Predictive Maintenance Dashboard</h2>
    <p>Asset health is degrading. Our models forecast an impending mechanical failure. Autonomous scheduling is required.</p>
    <ul>
      <li>Real-time IoT Telemetry Stream</li>
      <li>Vibration & Temperature Anomaly Detection</li>
      <li>Automated Vendor Dispatch</li>
    </ul>
    <button style={{ background: '#ef4444', color: '#fff', border: 'none', padding: '10px 15px', borderRadius: '5px', cursor: 'pointer' }}>
      View At-Risk Assets
    </button>
  </div>
);

const ComplianceModule = () => (
  <div style={{ padding: '20px', background: '#f8fafc', border: '1px solid #64748b', borderRadius: '8px' }}>
    <h2 style={{ color: '#334155', marginTop: 0 }}>🛡️ Regulatory Compliance Control</h2>
    <p>Ensure seamless global operations by staying ahead of regional requirements and customs documentation.</p>
    <ul>
      <li>Automated Bill of Lading Generation</li>
      <li>Scope 3 Emissions Tracking</li>
      <li>Cross-Border Audit Trails</li>
    </ul>
    <button style={{ background: '#64748b', color: '#fff', border: 'none', padding: '10px 15px', borderRadius: '5px', cursor: 'pointer' }}>
      Generate Compliance Report
    </button>
  </div>
);

export const Dashboard = () => {
  const { persona } = useIntent();

  let ComponentToRender;
  if (persona === 'Finance') {
    ComponentToRender = SpendRecoveryModule;
  } else if (persona === 'Operations') {
    ComponentToRender = PredictiveMaintenanceModule;
  } else {
    ComponentToRender = ComplianceModule;
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', fontFamily: 'system-ui, sans-serif' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', paddingBottom: '10px', borderBottom: '1px solid #e2e8f0' }}>
        <h1 style={{ margin: 0, fontSize: '1.5rem', color: '#0f172a' }}>RunInk IGO Demo</h1>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <span style={{ fontSize: '0.9rem', color: '#64748b' }}>Detected Persona:</span>
          <span style={{ fontWeight: 'bold', background: '#e2e8f0', padding: '4px 8px', borderRadius: '4px', color: '#334155' }}>
            {persona}
          </span>
        </div>
      </header>
      
      <main>
        <ComponentToRender />
      </main>

      <footer style={{ marginTop: '40px', fontSize: '0.85rem', color: '#94a3b8', textAlign: 'center' }}>
        <p>Try appending <code>?persona=cfo</code> or <code>?persona=logistics</code> to the URL to test the Intent-Graph Optimization.</p>
      </footer>
    </div>
  );
};
