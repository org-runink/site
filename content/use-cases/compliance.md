---
title: "The Compliance Agent: Your Digital Broker"
description: "Zero Demurrage. Audit commercial invoices and HS codes before they leave your desk."
layout: "use_case"
badge: "Global Trade"
badgeColor: "#ea580c"

---

{{< section-container class="py-8" >}}
<div class="max-w-5xl mx-auto px-4">
    <div class="text-center mb-16">
        <h1 class="text-5xl md:text-6xl font-black !text-white text-white drop-shadow-md italic tracking-tighter uppercase mb-6">Stop Getting Stuck at the Border.</h1>
        <p class="text-xl text-stone-400 font-bold leading-relaxed">
            Global trade doesn't forgive typos. A single wrong digit on an invoice can hold your container hostage for weeks. <br>The Compliance Agent proofreads your paperwork like a forensic auditor.
        </p>
    </div>

    <div class="flex flex-col gap-12 mb-20">
        <div>
            <h2 class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">The $300/Day Typo</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Your supplier sends a Commercial Invoice. They copy-pasted the HS Code from last year's order: <strong>6205.20</strong> ("Men's Shirts").
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
               But this container is full of <strong>Boy's Cotton Shirts</strong>.
            </p>
            <p class="text-lg text-stone-400 font-medium font-semibold text-[#ea580c] tracking-wide font-bold text-sm">
                The container lands in Le Havre. Customs flags the mismatch.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                They pull it for inspection. It sits in the yard for 21 days. You pay **Demurrage** fees of $300 every single day. That's $6,300 in fines for one wrong digit.
            </p>
        </div>
        <div class="bg-[#1b1919] p-8 rounded-2xl border border-stone-800/80 shadow-[0_0_20px_rgba(234,88,12,0.05)] shadow-2xl">
             <h3 class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ea580c] to-[#ca4708] mb-4 tracking-tighter uppercase italic drop-shadow-lg">The Customs Firewall</h3>
             
             <!-- Mermaid Diagram -->
{{< mermaid >}}
C4Context
title System Context: Compliance Agent

Person(manager, "Logistics Manager", "Prepares shipping docs.")

Enterprise_Boundary(b0, "Runink Trade") {
System(agent, "Compliance Agent", "Digital Broker.")

System_Ext(tariff, "Global Tariff DB", "HTS / Schedule B")
System_Ext(erp, "ERP Product Data", "SKU Materials")

System_Boundary(b1, "Customs Filing") {
System_Ext(broker, "Customs Broker", "Files Entry")
}
}

Rel(manager, agent, "Uploads Invoice (PDF)")
Rel(agent, erp, "Checks SKU Spec: 'Boy's Cotton'")
Rel(agent, tariff, "Validates Code: Expects 6207.91")
Rel(agent, manager, "BLOCKS DOC: Wrong HS Code")
Rel(agent, broker, "Submits Verified Data")
{{< /mermaid >}}
             
             <p class="text-sm text-stone-500 font-bold uppercase tracking-widest text-xs mt-6 text-center">It catches the error *before* the file leaves your email.</p>
        </div>
    </div>

    <div class="max-w-3xl mx-auto prose prose-invert prose-lg mb-20">
        <h3>How It Wins: The "Line-Item" Audit</h3>
        <p>
            The Agent reads every line of your PDF Commercial Invoice and cross-references it with reality.
        </p>
        <p>
            <strong>1. The Classification Check</strong><br>
            It reads "Boy's Cotton T-Shirt" and queries the <strong>Global Tariff Schedule</strong>. It sees the code `6205.20`. It knows that code is restricted for quotas in France. It suggests the correct code: `6207.91`.
        </p>
        <p>
            <strong>2. The Paperwork Scan</strong><br>
            It knows that shipping cotton to the EU requires a <strong>Certificate of Origin (COO)</strong> to prove it's not from a sanctioned region. If that PDF page is missing, it alerts you immediately: *"Missing COO. Do not ship."*
        </p>
        <p>
            <strong>3. The Green Lane</strong><br>
            When you file perfect paperwork for 12 months straight, you get flagged as a "Low Risk Importer." Your containers stop getting pulled. Speed increases. Demurrage drops to zero.
        </p>
        <p>
             Manage your vendors better to stop these errors at the source with our <a href="/use-cases/drop-shipping" class="text-[#D4A574] hover:underline">Drop Shipping Command Center</a>.
        </p>
    </div>
    
    <div class="text-center">
        <a href="/#contact" class="inline-flex items-center justify-center px-10 py-5 text-xs font-black uppercase tracking-widest !text-white text-white drop-shadow-md transition-all duration-300 bg-gradient-to-r from-[#ea580c] to-[#ca4708] rounded-xl border border-[#ea580c]/30 hover:shadow-[0_0_20px_rgba(234,88,12,0.4)] hover:-translate-y-1">
            Audit Your Docs
        </a>
    </div>
</div>
{{< /section-container >}}
