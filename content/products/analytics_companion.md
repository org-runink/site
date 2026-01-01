---
title: "Runink Analytics Companion"
description: "Visibility that executes. Real-time reconciliation, hypothesis testing, and autonomous agents that fix margin leaks before they compound."
layout: "landing"
badge: "Analytics Companion"
badgeColor: "#7c3aed"
---

{{< hero 
    headline="Stop Losing Money to Problems You Can't See"
    sub_headline="Carrier overcharges. Vendor shortages. Inventory gaps. Policy violations. We show you <strong>today's biggest risks</strong>, let you test fixes safely, and execute solutions autonomously. Full visibility, safe testing, measurable results."
    primary_button_text="Start Your First Trace"
    primary_button_url="/contact"
    hero_image="/images/companion/overview.png"
    size="normal"
    gradient-from="#3A2F2A"
    gradient-to="#1A1512"
    gradient-angle="135"
>}}

{{< section-container class="py-20 relative z-10" >}}

{{< stats-grid >}}
{{< stat number="100%" label="Domains Understood" >}}
{{< stat number="<20sec" label="Agent Response Time" >}}
{{< stat number="Zero" label="Data Left Behind" >}}
{{< /stats-grid >}}

<div class="max-w-4xl mx-auto text-center mt-32 space-y-10 relative">
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-500/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

<h2 class="text-4xl md:text-6xl font-black text-white tracking-tighter drop-shadow-2xl">
The Problem: <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#8B9A6E] via-[#A8B88B] to-[#D4A574] animate-gradient bg-300%">Weeks to Fix What Takes Minutes</span>
</h2>

<p class="text-xl md:text-2xl text-slate-300 leading-relaxed font-light drop-shadow-lg">
You see the problem instantly. But fixing it takes <strong class="text-white font-bold bg-stone-800/50 px-2 py-1 rounded">weeks of manual work</strong>: filing claims, updating spreadsheets, coordinating vendors. By the time you act, the damage is done.
</p>

<p class="text-xl text-[#F5F1E8] font-medium max-w-3xl mx-auto leading-relaxed">
Runink closes that gap. We show you what's broken, let you <strong class="text-[#D4A574] font-bold border-b-2 border-[#D4A574]/30 pb-0.5">test fixes in a safe sandbox</strong>, and execute solutions autonomously—all with full oversight and audit trails.
</p>
</div>

{{< /section-container >}}

{{< section-container class="py-20" >}}

<div class="max-w-7xl mx-auto px-4">

<div class="text-center mb-16">
<h2 class="text-5xl font-bold text-white mb-4">Core Platform: Visibility, Governance & Testing</h2>
<p class="text-xl text-slate-400">Integrated modules that expose risk, enforce policy, and validate decisions before execution.</p>
</div>

{{< card-grid cols="3" >}}

{{< feature-card 
    title="AI Posture Center"
    icon="shield-check"
    description="Monitor operational health and safety. Track incidents with full blast radius. Auto-generated runbooks for 'Fix Now' and 'Prevent Recurrence.' Know your readiness before deploying autonomous agents."
    features="Domain health monitoring updated in real-time,Incident blast radius tracking and analysis,Maturity scores before deploying autonomous agents"
>}}

{{< feature-card 
    title="Rules Studio"
    icon="scale"
    description="Guardrails and exposure tracking. See which business policies are followed or violated. Coverage percentage shows enforcement gaps. Real-time alerts prevent bad decisions before they happen."
    features="Guardrail enforcement across all operations,Exposure alerts show where policies are violated,Compliance gap analysis with enforcement reporting"
>}}

{{< feature-card 
    title="Hypothesis Lab"
    icon="code-bracket-square"
    description="What-if testing in a safe sandbox. Run pricing, inventory, and fulfillment scenarios. See profit and loss impact with confidence scores before risking live operations. Every assumption disclosed upfront."
    features="What-if scenario modeling with outcome projections,Test inventory and fulfillment changes safely,Confidence levels and assumptions shown for every test"
>}}

{{< /card-grid >}}

<div class="text-center mb-16">
<h2 class="text-5xl font-bold text-white mb-4">Decision Engines: Autonomous Execution</h2>
<p class="text-xl text-slate-400">Intelligent agents that automate complex workflows with full human oversight and auditability.</p>
</div>

{{< card-grid cols="3" >}}

{{< feature-card 
    title="Auto-Provisioning"
    icon="bolt"
    description="One AI agent manages complete procurement workflow: PO generation, vendor communications, shipment tracking, address validation, freight optimization. Reduces procurement cycles from weeks to minutes with full human oversight."
    features="Address Intelligence,Porch Piracy Defense,Freight Mode Switching,Port Congestion Avoidance,Supplier Risk Radar,Dynamic Margin Protection,Demand-Pulse Positioning,Ghost Inventory Watch"
>}}

{{< feature-card 
    title="Claims Recovery"
    icon="currency-dollar"
    description="One AI agent handles financial recovery across 18+ functions: invoice audits, carrier overcharge disputes, accessorial fee challenges, duty drawback claims, contract rate compliance. Pay only on successful recovery."
    features="Dim-Weight Auditing,Accessorial Fee Buster,Duty Drawback Claims,Contract Rate Compliance,Lost Inbound Claims,Unclaimed Credit Hunter,Return Fraud Defense,VIP White-Glove Rescue"
>}}

{{< feature-card 
    title="Safety & Grounding"
    icon="shield-check"
    description="The 'black box' problem solved. Every autonomous action is grounded in verified data and runs within strict operational guardrails. AI that asks for permission when uncertain and logs every decision."
    features="Hallucination Defense,Immutable Audit Logs,Human-in-the-Loop Triggers,Role-Based Access,Operational Boundary Testing,Data Lineage Tracking,Policy Guardrails,Compliance Gates"
>}}

{{< /card-grid >}}

</div>

{{< /section-container >}}

{{< faq >}}
{
    "title": "How It Actually Works",
    "description": "Grounded in real architecture—no fabrications.",
    "questions": [
        {
            "question": "What's the difference between Core and Cockpit?",
            "answer": "**Core**: You see the problems. Rules engine catches issues, Hypothesis Lab tests scenarios, AI Posture tracks readiness. **Cockpit**: We fix the problems. AI agents file claims, manage POs, execute corrections. Core = eyes. Cockpit = hands."
        },
        {
            "question": "How is autonomous execution safe?",
            "answer": "Every action runs through multi-layer validation: policy gates (what's allowed/blocked), confidence thresholds, maturity checks, and audit trails. Actions auto-execute only when all gates pass. Otherwise, explicit approval is required in the Action Proposal Queue."
        },
        {
            "question": "How do I track ROI?",
            "answer": "Every dollar is tagged to an action. Claims filed: recovery amount logged. Overcharges caught: savings attributed. Rules enforced: cost/risk reduction measured. Raft-backed audit trails preserve exact state at decision time for lineage and replayability."
        },
        {
            "question": "How does integration work?",
            "answer": "We connect via API to your ERP, WMS, carrier systems, commerce platforms. Setup takes 2-4 weeks. We handle data transformation, normalization, and reconciliation into a unified Knowledge Graph. Your team configures connections once."
        },
        {
            "question": "How are agents different from chatbots?",
            "answer": "Agents execute. They don't just answer questions—they generate POs, file claims, optimize routes, and manage exceptions. MCP-enabled tooling (Model Context Protocol) in the Decision Cockpit allows controlled interaction with external systems while keeping reasoning, policy, and approval local and governed."
        },
        {
            "question": "When will I see actual financial results?",
            "answer": "Day 1: Full visibility into lost margin. Week 2: Automated claims recovery begins. Month 1: 10x ROI realized. Unlike traditional ERP projects that take months to deploy, our pre-built integrations mean you start recovering cash almost immediately."
        },
        {
            "question": "Does this replace my existing operations team?",
            "answer": "No—it removes their busiest, lowest-value work. Instead of chasing data and filing paperwork, your team focuses on high-level strategy, vendor relationships, and complex exceptions. We give them 'superpowers' to manage 10x the volume without burnout."
        },
        {
            "question": "Why shouldn't I just hire more analysts?",
            "answer": "Hiring scales linearly; software scales exponentially. An analyst can process 50 claims a day; our agents process 5,000. Plus, agents don't sleep, don't make calculation errors, and catch every single penny, 24/7/365."
        }
    ]
}
{{< /faq >}}

{{< cta 
    title="Ready to Recover Lost Margin?"
    description="Book a trace session and see exactly where you're losing money to carrier overcharges, vendor shortages, and unclaimed credits. ROI in the first session."
    primary_button_text="Book Your Trace Session"
    primary_button_url="/contact"
>}}
