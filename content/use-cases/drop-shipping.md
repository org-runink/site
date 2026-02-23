---
title: "Drop Shipping Command Center"
description: "Don't sell what you don't have. Sync inventory across all vendors in real-time."
layout: "use_case"
badge: "Shopify & E-commerce"
badgeColor: "#92400E"
---

{{< section-container class="py-8" >}}
<div class="max-w-5xl mx-auto px-4">
    <div class="text-center mb-16">
        <h1 class="text-5xl md:text-6xl font-black !text-white text-white drop-shadow-md italic tracking-tighter uppercase mb-6">Stop Overselling.</h1>
        <p class="text-xl text-stone-400 font-bold leading-relaxed">
            Your Shopify store says "In Stock," but your vendor is empty. You just sold a promise you can't keep. 
            Runink syncs your inventory across all heavy vendors in real-time, so you never have to apologize to a customer again.
        </p>
    </div>

    <div class="flex flex-col gap-12 mb-20">
        <div>
            <h2 class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">The "Blind Vendor" Problem</h2>
            <p class="text-lg text-stone-400 font-medium mb-4">
                Most dropshippers rely on CSV uploads or daily syncs. In the 24 hours between syncs, your vendor sells out. 
                You act as the "middleman of failure," taking orders you can't fulfill.
            </p>
            <ul class="space-y-3">
                <li class="flex items-start text-[#ea580c] tracking-wide font-bold text-sm"><span class="mr-2">✕</span> Overselling popular items</li>
                <li class="flex items-start text-[#ea580c] tracking-wide font-bold text-sm"><span class="mr-2">✕</span> routing to expensive vendors</li>
                <li class="flex items-start text-[#ea580c] tracking-wide font-bold text-sm"><span class="mr-2">✕</span> Manual email coordination</li>
            </ul>
        </div>
        <div class="bg-[#1b1919] p-8 rounded-2xl border border-stone-800/80 shadow-[0_0_20px_rgba(234,88,12,0.05)]">
             <h3 class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ea580c] to-[#ca4708] mb-4 tracking-tighter uppercase italic drop-shadow-lg">How Runink Fixes It</h3>
             
             <!-- Mermaid Diagram -->
{{< mermaid >}}
C4Context
title System Context: Drop Shipping Command Center

Person(customer, "Shopify Shopper", "Ordering items online.")

Enterprise_Boundary(b0, "Runink Operations") {
System(agent, "Runink Inventory Agent", "Orchestrates orders and syncs stock.")

System_Ext(shopify, "Shopify Store", "Sales Channel")

System_Boundary(b1, "Vendor Network") {
System_Ext(vendorA, "Vendor A (Legacy)", "Old WMS, CSV only.")
System_Ext(vendorB, "Vendor B (Modern)", "Real-time API.")
}
}

Rel(customer, shopify, "Places Order")
Rel(shopify, agent, "Sends Order Webhook")
Rel(agent, vendorA, "Checks Stock (0)", "Parses Email/CSV")
Rel(agent, vendorB, "Checks Stock (50)", "API Call")
Rel(agent, vendorB, "Routes Order", "API Call")
Rel(agent, shopify, "Updates Fulfillment Status")
{{< /mermaid >}}
             
             <p class="text-sm text-stone-500 font-bold uppercase tracking-widest text-xs mt-6 text-center">The agent dynamically routes to the vendor with stock, saving the sale.</p>
        </div>
    </div>
    
    <div class="text-center">
        <a href="/#contact" class="inline-flex items-center justify-center px-8 py-4 text-xs font-black uppercase tracking-widest !text-white text-white drop-shadow-md transition-all duration-300 bg-gradient-to-r from-[#ea580c] to-[#ca4708] rounded-xl border border-[#ea580c]/30 hover:shadow-[0_0_20px_rgba(234,88,12,0.4)] hover:-translate-y-1">
            Connect Your Vendors
        </a>
    </div>
</div>
{{< /section-container >}}
