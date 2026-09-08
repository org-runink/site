---
title: "Pricing"
description: "You pay for the number of people who use Runink. Each person comes with an allowance of computing capacity included, so using it more does not raise the bill."
layout: "pricing"
date: "2024-05-20T00:00:00Z"
author: "Lead Data & Cloud Architect"
---

<div class="max-w-3xl mx-auto text-center mb-4">
  <p class="text-xl text-stone-300 font-medium leading-relaxed mb-6">
    You pay for the number of people who use Runink. Each person comes with an allowance of computing capacity included in the price.
  </p>
  <p class="text-lg text-stone-400 font-medium leading-relaxed">
    That is the whole shape of it. The bill follows your headcount, not your usage, so a team that finds heavy use for Runink does not open a new line item that grows with it. The three licences below differ on one question: how many people need it, and whose machine it runs on.
  </p>
</div>

{{< pricing-toggle >}}
{
  "options": [
    { "label": "Pay Monthly", "value": "monthly" },
    { "label": "Pay Yearly (15% Less)", "value": "yearly" }
  ]
}
{{< /pricing-toggle >}}

{{< pricing-table-1 >}}
{
  "plans": [
    {
      "pill": "ON A SHARED MACHINE",
      "pill_color": "stone",
      "name": "LITE LICENCE",
      "subtitle": "FOR TEAMS OF 1 TO 9 PEOPLE",
      "price_color": "stone",
      "price_monthly": "86",
      "price_yearly": "75",
      "price_subtitle": "PER PERSON, PER MONTH",
      "credits": "COMPUTING INCLUDED<br>FROM A SHARED POOL",
      "outcome_strategies": [
        {"label": "WHAT SETS THE BILL", "value": "How many people you licence. Not how much they use it."},
        {"label": "SHORTEST COMMITMENT", "value": "One month."},
        {"label": "IF WE RECOVER MONEY FOR YOU", "value": "20% of what is recovered. Nothing when nothing is recovered."},
        {"label": "AUTOMATIC SET-UP FEE", "value": "1% to 3%, never more than $50."}
      ],
      "features": [
        "RUNS ON A MACHINE SHARED WITH OTHER CUSTOMERS",
        "COMPUTING CAPACITY INCLUDED WITH EVERY PERSON",
        "THE STANDARD SET OF AUTOMATED HELPERS",
        "THE ENTRY POINT FOR A FIRST TEAM"
      ],
      "button": {
        "text": "START WITH LITE",
        "url": "/#contact",
        "style": "outline"
      }
    },
    {
      "pill": "ON YOUR OWN MACHINE",
      "pill_color": "orange",
      "name": "DEDICATED LICENCE",
      "subtitle": "FOR 10 PEOPLE AND UP",
      "price_color": "orange",
      "price_monthly": "75",
      "price_yearly": "75",
      "price_subtitle": "PER PERSON, PER MONTH",
      "credits": "COMPUTING INCLUDED<br>FROM YOUR OWN POOL",
      "outcome_strategies": [
        {"label": "WHAT SETS THE BILL", "value": "How many people you licence. Not how much they use it."},
        {"label": "SHORTEST COMMITMENT", "value": "One year."},
        {"label": "IF WE RECOVER MONEY FOR YOU", "value": "20% of what is recovered. Nothing when nothing is recovered."},
        {"label": "AUTOMATIC SET-UP FEE", "value": "1% to 3%, never more than $50."}
      ],
      "features": [
        "RUNS ON MACHINES KEPT FOR YOUR COMPANY ALONE",
        "1,000 UNITS PER PERSON, PLUS 2,000 FOR EVERY 10",
        "YOUR OWN WEB ADDRESS",
        "FIRST CALL ON THE CAPACITY YOU PAY FOR"
      ],
      "button": {
        "text": "TALK ABOUT DEDICATED",
        "url": "/#contact",
        "style": "solid"
      }
    },
    {
      "pill": "IN YOUR OWN BUILDING",
      "pill_color": "stone",
      "name": "ENTERPRISE LICENCE",
      "subtitle": "FOR HOSTING IT YOURSELF",
      "price_monthly": "CUSTOM",
      "price_yearly": "CUSTOM",
      "price_subtitle": "PRICED WITH YOU",
      "credits": "COMPUTING INCLUDED<br>SIZED WITH YOU",
      "outcome_strategies": [
        {"label": "WHAT SETS THE BILL", "value": "The capacity you need and the service levels you set."},
        {"label": "SHORTEST COMMITMENT", "value": "Agreed with you."},
        {"label": "IF WE RECOVER MONEY FOR YOU", "value": "Agreed with you and written into the contract."},
        {"label": "AUTOMATIC SET-UP FEE", "value": "Agreed with you and written into the contract."}
      ],
      "features": [
        "RUNS ON YOUR PREMISES, INCLUDING SITES KEPT OFF THE NETWORK",
        "CAPACITY SIZED AND MANAGED WITH YOU",
        "EVERYTHING IN THE DEDICATED LICENCE",
        "A FULL RECORD OF WHO DID WHAT, AND WHEN"
      ],
      "button": {
        "text": "TALK TO US",
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
  "title": "How The Bill Works",
  "description": "What you are charged for, in the order a finance team tends to ask it.",
  "questions": [
    {
      "question": "What am I actually paying for?",
      "answer": "Seats. A **seat** is one person who uses Runink. You count the people who need it, multiply by the price above, and that is the licence.<br><br>Each seat also comes with an allowance of computing capacity — the machine time Runink uses to read your documents, check your records and draft the work. That allowance is included in the seat price. You are not billed by the question, the document or the report."
    },
    {
      "question": "What is a Compute Unit?",
      "answer": "It is the meter for machine time, the way a kilowatt-hour is the meter for electricity. Runink counts capacity in **Compute Units** so that what you were given and what you have used are stated in the same terms, and both are on screen in the console rather than arriving at the end of the month.<br><br>Every **Dedicated** seat carries 1,000 units, and your organisation gets a further 2,000 units for every 10 seats you hold. Those units are pooled, so a heavy week for one person draws on the same allowance as a quiet week for another."
    },
    {
      "question": "What happens if we go over the allowance?",
      "answer": "Extra capacity is charged at **$0.10 per 100 units**, or **$5.00 per hour of machine time**. In practice that line stays empty for ordinary day-to-day work and appears when you run something very large in one go — reprocessing a year of documents in an afternoon, for example.<br><br>You can see the running total in the console and set a budget against it, so the first you hear of a heavy month is not the invoice."
    },
    {
      "question": "Which licence fits us?",
      "answer": "Count your people first.<br><br>Under ten, the **Lite Licence** is the fit. It runs on a machine shared with other customers, and it is the only one you can take a month at a time — so an evaluation does not need a year's commitment.<br><br>Ten or more, the **Dedicated Licence** costs less per person and runs on machines kept for your company alone, with your own web address and first call on the capacity you pay for. It is taken a year at a time.<br><br>If your information cannot leave your own building, that is **Enterprise**, and the conversation starts with where it has to run."
    },
    {
      "question": "Do we have to sign for a year?",
      "answer": "Only for Dedicated and Enterprise. The **Lite Licence** can be taken month by month at $86 per person, or a year at a time at $75 — the same 15% difference shown by the toggle above.<br><br>Dedicated and Enterprise are a year at a time because both involve setting machines aside for your company specifically, and that capacity is reserved whether or not you use it in a given week."
    },
    {
      "question": "Why does using it more not cost more?",
      "answer": "Because the reasoning runs on hardware rather than on somebody else's metered service. The cost of a question is the electricity to answer it.<br><br>The practical consequence is a budgeting one. Your spend is a function of the capacity you run, decided once, rather than a number that moves with how many questions your team asked last month. A team that finds heavy use for Runink does not discover a cost that grows with that success."
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
      <h3 class="text-xl font-bold text-stone-200 mb-4">What should we budget for beyond the licence itself?</h3>
      <p class="text-stone-400 leading-relaxed">The licence is one line of the cost. Before you sign, put numbers against four more. First, connecting Runink to the systems you already run — your finance system, your transport or warehouse system, and wherever your documents live. Second, moving the history you want it to read. Third, the hours your own people spend learning it and changing how the work is done, which is usually the line that gets left out. Fourth, the machines. Under the Lite and Dedicated licences those are ours; under Enterprise they are yours, and you should price the hardware and the people who keep it running. What you should not have to budget for is a bill that moves with how much your team uses the software. That is the point of charging by the seat.</p>
    </div>
    <div class="faq-item p-6 bg-stone-900 rounded-xl border border-stone-800/50 hover:border-[#ea580c]/30 transition-colors">
      <h3 class="text-xl font-bold text-stone-200 mb-4">How does pricing work if we have to host it ourselves?</h3>
      <p class="text-stone-400 leading-relaxed">That is the Enterprise licence, and it is priced with you rather than from a list. It covers deployments on your own premises, including sites kept off the network entirely, and machines placed close to where the work happens. The terms people usually want written down are the service levels, who may see what, and the record kept of who did what. Bring the constraint that drives it — the regulator, the contract clause, or the security review that keeps stalling — and the conversation starts there rather than with a feature list.</p>
    </div>
    <div class="faq-item p-6 bg-stone-900 rounded-xl border border-stone-800/50 hover:border-[#ea580c]/30 transition-colors">
      <h3 class="text-xl font-bold text-stone-200 mb-4">Where does our data go?</h3>
      <p class="text-stone-400 leading-relaxed">To a machine you control, and it stays there. The documents, the records and the reasoning about them all run on hardware inside your boundary, and nothing is sent to an outside model provider. This matters commercially as much as technically. The question that stalls these purchases is usually some version of "where does our information go", and the answer here is short enough to survive a procurement questionnaire. Under Lite and Dedicated the machine is one we run; under Enterprise it is one you own. In neither case is there a third party in the path holding your data.</p>
    </div>
  </div>
</section>


<section class="author-bio mt-12 p-6 bg-stone-900 rounded-2xl border border-stone-800">
  <h2 class="text-2xl font-bold text-[#ea580c] mb-4">About the Author</h2>
  <p class="text-stone-300">
    <strong>Lead Data & Cloud Architect</strong><br>
    Subject Matter Expert (SME) in AWS Data Analytics, AWS Certified Developer, and Google Cloud Professional Certified in Data Engineering and Advanced Analytics. With over a decade of experience in building resilient, high-throughput cloud architectures, data pipelines, and automated logistics solutions.
  </p>
</section>

<section class="citations mt-8 p-6 bg-stone-900/50 rounded-2xl border border-stone-800/50">
  <h2 class="text-2xl font-bold text-[#ea580c] mb-4">Industry Citations & References</h2>
  <ul class="list-decimal pl-6 text-stone-400 space-y-2">
    <li><a href="https://aws.amazon.com/architecture/analytics/" class="text-[#ea580c] hover:underline" rel="noopener noreferrer" target="_blank">AWS Architecture Center: Data Analytics Best Practices</a> - Comprehensive guidelines for large-scale data processing.</li>
    <li><a href="https://cloud.google.com/solutions/supply-chain" class="text-[#ea580c] hover:underline" rel="noopener noreferrer" target="_blank">Google Cloud: Advanced Analytics for Supply Chain Optimization</a> - Advanced methodologies for automated logistics.</li>
    <li><a href="https://www.gartner.com/en/supply-chain" class="text-[#ea580c] hover:underline" rel="noopener noreferrer" target="_blank">Gartner: Top Strategic Technology Trends in Logistics</a> - Industry standard research on supply chain tech.</li>
    <li><a href="https://ctl.mit.edu/" class="text-[#ea580c] hover:underline" rel="noopener noreferrer" target="_blank">MIT Center for Transportation & Logistics</a> - Academic research on analytical applications in freight and transportation.</li>
  </ul>
</section>
