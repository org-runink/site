---
title: "Pricing"
description: "Pay for protection, not features. Transparent infrastructure + outcome-based value."
layout: "pricing"
date: "2024-05-20T00:00:00Z"
author: "Lead Data & Cloud Architect"
---

{{< pricing-toggle >}}
{
  "options": [
    { "label": "Monthly Commitment", "value": "monthly" },
    { "label": "Annual Contract (Save 15%)", "value": "yearly" }
  ]
}
{{< /pricing-toggle >}}

{{< pricing-table-1 >}}
{
  "plans": [
    {
      "pill": "ESSENTIAL AUTOMATION",
      "pill_color": "stone",
      "name": "LITE LICENSE",
      "subtitle": "1 TO 9 SEATS",
      "price_color": "stone",
      "price_monthly": "86",
      "price_yearly": "75",
      "price_subtitle": "PER SEAT / MONTH",
      "credits": "DYNAMIC CU POOL",
      "outcome_strategies": [
        {"label": "CLAIMS RECOVERY", "value": "20% Success Fee"},
        {"label": "AUTO-PROVISIONING", "value": "1-3% (Capped $50)"}
      ],
      "features": [
        "SHARED HIGH-DENSITY NODE",
        "BASIC AUTOMATION WORKFLOWS",
        "STANDARD COMPUTE PRIORITY",
        "MONTHLY OR ANNUAL COMMITMENTS"
      ],
      "button": {
        "text": "START LITE",
        "url": "/#contact",
        "style": "outline"
      }
    },
    {
      "pill": "PLATFORM & SECURITY",
      "pill_color": "orange",
      "name": "DEDICATED LICENSE",
      "subtitle": "10+ SEATS",
      "price_color": "orange",
      "price_monthly": "75",
      "price_yearly": "75",
      "price_subtitle": "PER SEAT / MONTH (ANNUAL ONLY)",
      "credits": "MASSIVE CU POOL",
      "outcome_strategies": [
        {"label": "CLAIMS RECOVERY", "value": "20% Success Fee"},
        {"label": "AUTO-PROVISIONING", "value": "1-3% (Capped $50)"}
      ],
      "features": [
        "DEDICATED SOVEREIGN COMPUTE",
        "CUSTOM DOMAIN CONFIGURATION",
        "PRIORITY ROUTING & INFERENCE",
        "1,000 CU PER SEAT + 2,000 CU BONUS/10 SEATS"
      ],
      "button": {
        "text": "INITIALIZE DEDICATED",
        "url": "/#contact",
        "style": "solid"
      }
    },
    {
      "pill": "SOVEREIGN INFRASTRUCTURE",
      "pill_color": "stone",
      "name": "ENTERPRISE",
      "subtitle": "AIR-GAPPED & ON-PREMISES",
      "price_monthly": "CUSTOM",
      "price_yearly": "CUSTOM",
      "price_subtitle": "CUSTOM DEPLOYMENTS",
      "credits": "MANAGED CAPACITY",
      "outcome_strategies": [
        {"label": "OUTCOME STRATEGY", "value": "Custom SLAs"}
      ],
      "features": [
        "SELF-HOSTED ON-PREM",
        "EDGE EMBEDDING CAPABILITIES",
        "EVERYTHING IN DEDICATED PLATFORM",
        "ADVANCED AUDIT LOGGING"
      ],
      "button": {
        "text": "CONTACT ENTERPRISE",
        "url": "/#contact",
        "style": "outline"
      }
    }
  ]
}
{{< /pricing-table-1 >}}

<div class="py-12"></div>

{{< enterprise-a2a >}}
{{< faq >}}
{
  "title": "Billing Logic. No Surprises.",
  "description": "Low barrier to entry. Revenue scales with your actual infrastructure usage.",
  "questions": [
    {
      "question": "When is the Lite License a good fit?",
      "answer": "The **Lite License** is designed for SMEs, startups, and highly lean teams (1-9 seats) who need immediate automation ROI without massive upfront commitments. It operates on shared high-density nodes, providing excellent performance at an accessible $75/seat (annually) or ~$86/seat (monthly). It's the perfect entry point to start capturing lost claims revenue and automating basic supply chain tasks without restrictive annual contracts."
    },
    {
      "question": "Why should we choose the Dedicated License over Lite?",
      "answer": "Once your team scales to 10+ seats, security and compute volume become paramount. The **Dedicated License** automatically provisions an isolated Sovereign Node exclusively for your organization, complete with custom domain routing and strict data boundaries. While the base price remains an incredibly competitive $75/seat/month, it requires a 1-year commitment. In return, your organization unlocks massive shared CU bonuses (2,000 extra CU per 10 seats) to execute high-volume AI tasks."
    },
    {
      "question": "What is the value of a full Enterprise engagement?",
      "answer": "For highly regulated industries (defense, finance, healthcare) or extreme transaction volumes, the **Enterprise** tier provides absolute control. We offer full air-gapped, on-premises deployments or custom VPC architectures. Most importantly, Enterprise unlocks **optimized fine-tuning**—we train and optimize custom LLMs explicitly on your internal digital twin data, resulting in unparalleled accuracy and sub-second reasoning speeds tailored to your specific SLAs."
    },
    {
      "question": "Do I have to commit to an annual plan?",
      "answer": "Only for Dedicated and Enterprise. **Lite Licenses** offer full flexibility with a month-to-month option at a 15% markup (~$86/seat/month). Because **Dedicated** and **Enterprise** licenses require us to provision and isolate substantial sovereign cloud infrastructure specifically for your organization, they strictly require a 1-year minimum commitment."
    },
    {
      "question": "How are compute resources calculated?",
      "answer": "**We utilize a Dynamic Capacity approach.**<br>Every seat includes **1,000 Capacity Units (CU)**. Furthermore, for every block of 10 seats you purchase (unlocking Dedicated), your organization receives a **2,000 CU Bonus**. You are only billed overage ($0.10/100 CU or $5.00/Compute Hour) for extreme, high-intensity batch processing."
    }
  ]
}
{{< /faq >}}


---



<!-- Generated FAQ Section for E-A-T & GEO -->
<section class="faq-section mt-16 p-8 bg-[#1b1919] rounded-3xl border border-stone-800/80 shadow-2xl relative z-10">
  <div class="flex items-center gap-4 mb-8">
    <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ea580c] to-[#ca4708] flex items-center justify-center shadow-lg">
      <span class="material-symbols-outlined text-white">help_center</span>
    </div>
    <h2 class="text-3xl font-black text-white uppercase italic tracking-tight m-0">Frequently Asked Questions</h2>
  </div>
  <div class="space-y-6">
    <div class="faq-item p-6 bg-stone-900 rounded-xl border border-stone-800/50 hover:border-[#ea580c]/30 transition-colors">
      <h3 class="text-xl font-bold text-stone-200 mb-4">What is the true total cost of ownership (TCO) for implementing an AI-driven logistics platform?</h3>
      <p class="text-stone-400 leading-relaxed">When evaluating the total cost of ownership for an AI-driven logistics platform, you must look beyond the initial software licensing or SaaS subscription fees. The true TCO encompasses implementation costs, which involve system integration with your existing ERP, TMS, or WMS systems, data migration, and custom API development. Additionally, you must factor in change management and training costs to ensure your staff can effectively leverage the new tools. Ongoing expenses include cloud infrastructure usage, API call volumes to advanced LLMs or routing engines, and continuous model fine-tuning. However, this investment is typically offset by the rapid ROI generated through reduced empty miles, optimized fuel consumption, lower manual dispatch overhead, and minimized SLA penalties.</p>
    </div>
    <div class="faq-item p-6 bg-stone-900 rounded-xl border border-stone-800/50 hover:border-[#ea580c]/30 transition-colors">
      <h3 class="text-xl font-bold text-stone-200 mb-4">How do you structure pricing for enterprise-scale deployments or on-premises requirements?</h3>
      <p class="text-stone-400 leading-relaxed">By default, our standard Pro License provides high data isolation by deploying Shared Sovereign Compute. However, for organizations experiencing extreme transaction volumes or requiring strict compliance, our Enterprise tiers offer custom sovereign, air-gapped, and on-premises hosting. In these scenarios, you can deploy the Runink platform on your own hardware, physically isolated infrastructure, or deep edge embedding environments. Contact our sales team to discuss dedicated SLAs, custom data governance controls, and on-premises licensing options tailored to your specific infrastructure constraints.</p>
    </div>
    <div class="faq-item p-6 bg-stone-900 rounded-xl border border-stone-800/50 hover:border-[#ea580c]/30 transition-colors">
      <h3 class="text-xl font-bold text-stone-200 mb-4">Why should I transition from a legacy on-premise system to a cloud-native, AI-powered logistics solution?</h3>
      <p class="text-stone-400 leading-relaxed">Transitioning from a legacy on-premise system to a cloud-native, AI-powered logistics solution is critical for maintaining competitiveness. A cloud-native architecture offers elastic scalability, allowing your computing resources to expand dynamically. More importantly, it serves as the foundational layer required to deploy advanced Generative AI and machine learning models. These AI capabilities can process vast datasets in real-time to identify hidden optimization opportunities, predict supply chain disruptions before they occur, and automate complex tasks.</p>
    </div>
  </div>
</section>


<section class="author-bio mt-12 p-6 bg-stone-900 rounded-2xl border border-stone-800">
  <h2 class="text-2xl font-bold text-[#ea580c] mb-4">About the Author</h2>
  <p class="text-stone-300">
    <strong>Lead Data & Cloud Architect</strong><br>
    Subject Matter Expert (SME) in AWS Data Analytics, AWS Certified Developer, and Google Cloud Professional Certified in Data Engineering and Generative AI. With over a decade of experience in building resilient, high-throughput cloud architectures, data pipelines, and AI-driven logistics solutions.
  </p>
</section>

<section class="citations mt-8 p-6 bg-stone-900/50 rounded-2xl border border-stone-800/50">
  <h2 class="text-2xl font-bold text-[#ea580c] mb-4">Industry Citations & References</h2>
  <ul class="list-decimal pl-6 text-stone-400 space-y-2">
    <li><a href="https://aws.amazon.com/architecture/analytics/" class="text-[#ea580c] hover:underline" rel="noopener noreferrer" target="_blank">AWS Architecture Center: Data Analytics Best Practices</a> - Comprehensive guidelines for scalable data processing.</li>
    <li><a href="https://cloud.google.com/solutions/supply-chain" class="text-[#ea580c] hover:underline" rel="noopener noreferrer" target="_blank">Google Cloud: Generative AI for Supply Chain Optimization</a> - Advanced methodologies for AI-driven logistics.</li>
    <li><a href="https://www.gartner.com/en/supply-chain" class="text-[#ea580c] hover:underline" rel="noopener noreferrer" target="_blank">Gartner: Top Strategic Technology Trends in Logistics</a> - Industry standard research on supply chain tech.</li>
    <li><a href="https://ctl.mit.edu/" class="text-[#ea580c] hover:underline" rel="noopener noreferrer" target="_blank">MIT Center for Transportation & Logistics</a> - Academic research on AI applications in freight and transportation.</li>
  </ul>
</section>
