---
title: "The Claims Agent: Your Digital Paralegal"
description: "Recover 40% more freight spend. Automate the fight against carrier denials with legal precision."
layout: "use_case"
badge: "Cost Recovery"
badgeColor: "#7c3aed"

---

{{< section-container class="py-8" >}}
<div class="max-w-5xl mx-auto px-4">
    <div class="text-center mb-16">
        <h1 class="text-5xl md:text-6xl font-black !text-white text-white drop-shadow-md italic tracking-tighter uppercase mb-6">Don't Leave Money on the Dock.</h1>
        <p class="text-xl text-stone-400 font-bold leading-relaxed">
            Carriers profit from your fatigue. They know you won't fight a $300 claim. <br>The Claims Agent fights for every penny, using federal law as its weapon.
        </p>
    </div>

    <div class="flex flex-col gap-12 mb-20">
        <div>
            <h2 class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">The "Friday 4 PM" Crisis</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                It’s late. Your receiving clerk is tired. A pallet arrives with a crushed corner. The driver shrugs, "It was loaded like that."
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
               The clerk has two choices:
               <br>1. Spend an hour taking photos and filling out a PDF.
               <br>2. Sign the iPad and go home.
            </p>
            <p class="text-lg text-stone-400 font-medium font-semibold text-[#ea580c] tracking-wide font-bold text-sm">
                He signs. You just lost $450.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                This isn't laziness; it's friction. And when you do file, the Carrier denies it anyway citing "Improper Packaging." It feels like a rigorous game you can't win.
            </p>
        </div>
        <div class="bg-[#1b1919] p-8 rounded-2xl border border-stone-800/80 shadow-[0_0_20px_rgba(234,88,12,0.05)] shadow-2xl">
             <h3 class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ea580c] to-[#ca4708] mb-4 tracking-tighter uppercase italic drop-shadow-lg">The Automated Defense</h3>
             
             <!-- Mermaid Diagram -->
{{< mermaid >}}
C4Context
title System Context: Claims Agent

Person(clerk, "Receiving Clerk", "Takes 1 photo of damage.")

Enterprise_Boundary(b0, "Runink Finance") {
System(agent, "Claims Agent", "Digital Paralegal.")

System_Ext(legal, "Legal Engine", "49 U.S.C. § 14706")
System_Ext(weather, "NOAA Weather", "Validates 'Act of God'")

System_Boundary(b1, "Carrier Interaction") {
System_Ext(portal, "Carrier Portal", "Uploads Evidence")
}
}

Rel(clerk, agent, "Uploads Photo via App")
Rel(agent, legal, "Cites Carmack Amendment")
Rel(agent, weather, "Disproves 'Storm' Excuse")
Rel(agent, portal, "Files 10-Page Rebuttal")
Rel(portal, agent, "Sends Settlement Check")
{{< /mermaid >}}
             
             <p class="text-sm text-stone-500 font-bold uppercase tracking-widest text-xs mt-6 text-center">It drafts a legal brief for a $50 claim. It never sleeps.</p>
        </div>
    </div>

    <div class="max-w-3xl mx-auto prose prose-invert prose-lg mb-20">
        <h3>How It Wins: The "Carmack" Strategy</h3>
        <p>
            The Agent doesn't just fill out forms. It builds a case file.
        </p>
        <p>
            <strong>1. The Evidence Collection</strong><br>
            It uses OCR to scan the <strong>Delivery Receipt (DR)</strong>. It specifically looks for handwriting like *"1 case short"* or *"Shrinkwrap torn."* It cross-references this with the <strong>Bill of Lading</strong> to prove the goods were in perfect condition at pickup.
        </p>
        <p>
            <strong>2. The Legal Rebuttal</strong><br>
            When a carrier denies a claim due to "Act of God" (weather), the Agent checks historical weather data from NOAA for that specific route. If it was sunny, it drafts a rebuttal citing <strong>49 U.S.C. § 14706 (The Carmack Amendment)</strong>, shifting the burden of proof back to the carrier.
        </p>
        <p>
            <strong>3. The Payout</strong><br>
            Carriers pay claims that are hard to fight. When they receive a 10-page legal brief for a $300 box, they cut the check. The Agent then updates your <a href="/use-cases/finance" class="text-[#D4A574] hover:underline">Finance Ledger</a> automatically.
        </p>
    </div>
    
    <div class="text-center">
        <a href="/#contact" class="inline-flex items-center justify-center px-10 py-5 text-xs font-black uppercase tracking-widest !text-white text-white drop-shadow-md transition-all duration-300 bg-gradient-to-r from-[#ea580c] to-[#ca4708] rounded-xl border border-[#ea580c]/30 hover:shadow-[0_0_20px_rgba(234,88,12,0.4)] hover:-translate-y-1">
            Start Recovering Cash
        </a>
    </div>
</div>
{{< /section-container >}}
