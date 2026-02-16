---
title: "The HR Twin: Your Always-On Guide"
description: "A hovering chatbot providing instant guidance on technical aspects, onboarding, and key personas."
layout: "use_case"
badge: "Employee Experience"
badgeColor: "#ec4899"
---

{{< section-container class="py-8" >}}
<div class="max-w-5xl mx-auto px-4">
    <div class="text-center mb-16">
        <h1 class="text-5xl md:text-6xl font-black !text-white text-white drop-shadow-md italic tracking-tighter uppercase mb-6">Stop Searching. Start Working.</h1>
        <p class="text-xl text-stone-400 font-bold leading-relaxed">
            Employees lose hours digging through intranets for onboarding documents and trying to figure out who to contact. <br>The HR Twin is an always-on chatbot that hovers over every module, instantly answering questions.
        </p>
    </div>

    <div class="flex flex-col gap-12 mb-20">
        <div>
            <h2 class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">The "Who Do I Ask?" Problem</h2>
            <p class="text-lg text-stone-400 font-medium mb-4">
                When a new hire encounters a complex technical process, they usually ask a senior colleague, breaking their flow. When they need a specific policy, they search through 10 outdated PDFs.
            </p>
            <ul class="space-y-3">
                <li class="flex items-start text-[#ea580c] tracking-wide font-bold text-sm"><span class="mr-2">✕</span> Context-switching kills productivity</li>
                <li class="flex items-start text-[#ea580c] tracking-wide font-bold text-sm"><span class="mr-2">✕</span> Knowledge is siloed in specific departments</li>
                <li class="flex items-start text-[#ea580c] tracking-wide font-bold text-sm"><span class="mr-2">✕</span> Onboarding is slow and manual</li>
            </ul>
        </div>
        <div class="bg-[#1b1919] p-8 rounded-2xl border border-stone-800/80 shadow-[0_0_20px_rgba(234,88,12,0.05)] shadow-2xl">
             <h3 class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ea580c] to-[#ca4708] mb-4 tracking-tighter uppercase italic drop-shadow-lg">The Hovering Guide</h3>
             
             <!-- Mermaid Diagram -->
             <div class="mermaid">
             C4Context
                title System Context: HR Twin
                
                Person(employee, "Employee", "Needs a policy or technical help.")
                
                Enterprise_Boundary(b0, "Runink HR") {
                    System(agent, "HR Twin Chatbot", "Context-aware guidance.")
                    
                    System_Ext(wiki, "Corporate Wiki", "Onboarding & Policies")
                    System_Ext(directory, "Active Directory", "Key Personas & Org Chart")
                }

                Rel(employee, agent, "Asks: Who handles IFRS 17?")
                Rel(agent, directory, "Queries Persona Mapping")
                Rel(agent, wiki, "Retrieves relevant docs")
                Rel(agent, employee, "Provides Name, Email, and Doc Link")
             </div>
             
             <p class="text-sm text-stone-500 font-bold uppercase tracking-widest text-xs mt-6 text-center">Contextual help, exactly when and where you need it.</p>
        </div>
    </div>

    <div class="max-w-3xl mx-auto prose prose-invert prose-lg mb-20">
        <h3>How It Wins: Context Awareness</h3>
        <p>
            The HR Twin doesn't just answer questions; it knows what you're trying to do.
        </p>
        <p>
            <strong>1. Technical Guidance</strong><br>
            If you are in the Finance module looking at an IFRS 17 report, the chatbot already knows the context. When you ask "how is this calculated?", it surfaces the exact technical documentation for that specific view.
        </p>
        <p>
            <strong>2. Persona Routing</strong><br>
            If you need approval for an air-freight shipment, the Twin instantly tells you the current acting Director of Procurement for your specific region, saving you the hassle of checking the org chart.
        </p>
        <p>
            <strong>3. Seamless Onboarding</strong><br>
            New hires get proactive prompts guiding them through the tool, drastically reducing training time and accelerating time-to-value.
        </p>
    </div>
    
    <div class="text-center">
        <a href="/#contact" class="inline-flex items-center justify-center px-10 py-5 text-xs font-black uppercase tracking-widest !text-white text-white drop-shadow-md transition-all duration-300 bg-gradient-to-r from-[#ea580c] to-[#ca4708] rounded-xl border border-[#ea580c]/30 hover:shadow-[0_0_20px_rgba(234,88,12,0.4)] hover:-translate-y-1">
            Empower Your Team
        </a>
    </div>
</div>
{{< /section-container >}}
<style>
  .mermaid {
    width: 100%;
    height: 400px;
    border-radius: 0.75rem;
    overflow: hidden;
    background-color: #0c0a09;
    border: 1px solid rgba(255, 255, 255, 0.1);
    position: relative;
    box-shadow: inset 0 0 20px rgba(0,0,0,0.5);
    margin-bottom: 2rem;
  }
  .mermaid svg {
    width: 100% !important;
    height: 100% !important;
    max-width: none !important;
    cursor: grab;
  }
</style>
<script type="module">
  import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
  mermaid.initialize({ startOnLoad: false, theme: 'dark' });

  document.addEventListener("DOMContentLoaded", async () => {
      await mermaid.run({
        querySelector: '.mermaid'
      });
  });
</script>
