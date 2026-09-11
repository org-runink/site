---
title: "About Runink"
layout: "company"
description: "What Runink is for: reading the records a company already keeps, and turning them into decisions its own people can defend."
date: "2024-05-20T00:00:00Z"
author: "Runink"
---

{{< section-container class="bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900 pt-20 pb-32" >}}
  <div class="text-center">
    <h1 class="text-4xl md:text-5xl font-bold mb-6">The answer is usually already in the records</h1>
    <p class="text-xl text-ink-2 mb-16">
      A company already records what it bought, what it shipped, what it paid and what went wrong. Runink reads those records and puts an answer in front of the person who has to act on it.
    </p>
    <div class="max-w-3xl mx-auto bg-stone-800/90 rounded-xl shadow-sm p-8">
      <h2 class="text-3xl font-bold mb-4">Our Mission</h2>
      <p class="text-xl text-ink-2">
        Most of what an operations, finance or compliance team needs to decide is sitting in systems it already pays for, in a shape nobody has time to read.
        We connect to those systems, keep the working copy on hardware the customer controls, and show the reasoning behind every answer so the person who signs off can check it.
      </p>
    </div>
  </div>
{{< /section-container >}}

{{< section-container class="py-20 bg-stone-900" >}}
  <div class="max-w-6xl mx-auto">
    <h2 class="text-3xl font-bold text-center mb-4">How we build it</h2>
    <p class="text-xl text-ink-2 text-center max-w-3xl mx-auto mb-12">
      Six rules the software follows. Each one is a thing you can ask us to show you in a running system, which is the only reason they are worth putting on a page.
    </p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {{< value-card
          title="A person signs, and is named"
          icon="users"
          description="The software drafts the action and stops. It waits in a queue until somebody approves, edits or rejects it, and the record keeps who that was. In claims, customs and payment the act carries liability, and liability does not transfer to software."
      >}}
      {{< value-card
          title="It shows its working"
          icon="magnifying-glass"
          description="Every draft arrives with the rule it applied and the records it read. You can disagree with it on the evidence rather than on trust."
      >}}
      {{< value-card
          title="It says when it does not know"
          icon="light-bulb"
          description="Not measured is a separate answer from zero, and the software stores it as one, with the reason. A check it could not run reports that it could not run it, rather than passing."
      >}}
      {{< value-card
          title="It names the step it skipped"
          icon="clipboard-document-list"
          description="When part of a job does not happen, the result says which part and why. Software that reports success for work it did not do is the failure we designed hardest against."
      >}}
      {{/* The second sentence used to read "and that is enforced by a check that
           refuses the code, not by a setting somebody has to remember." That is
           not supportable for FACE and the site already said so somewhere else:
           the FAQ on /products/face/ states in its own words that this is "an
           architectural property rather than a machine-enforced one" and that
           "no build step blocks an outside model client from being added".

           Checked rather than assumed. workstation/guardrails/forbidden.txt is a
           33-line denylist, and its enforcement is a per-repo pre-commit hook
           plus a CI workflow in core and pulse (core/.github/workflows/
           sovereignty.yml, pulse/.github/workflows/sovereignty.yml). face has
           neither in CI — only a local hook on one machine, which is not a
           property of the repository and does not exist for any other clone.

           So the two pages contradicted each other on the load-bearing
           sovereignty claim, which is the single most quotable inconsistency a
           security-minded buyer could find on this site. This card now says what
           the product page says. */}}
      {{< value-card
          title="Your records stay on your hardware"
          icon="scale"
          description="The models run on machines you control, and there is one inference endpoint: the one you configure. The reasoning about your files happens where your files are. That is how it is built rather than a switch somebody sets, so ask us to walk the boundary with you rather than taking the sentence."
      >}}
      {{< value-card
          title="We do not claim certifications"
          icon="hand-thumb-up"
          description="We have not been audited against SOC 2 or ISO 27001 by anyone. The software is built against those frameworks and it will tell you what it checked; it will not tell you it is certified, because it is not."
      >}}
    </div>
  </div>
{{< /section-container >}}


---
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Runink",
  "url": "https://runink.org",
  "logo": "https://runink.org/images/logo.png",
  "description": "Runink FACE reads the logistics records a business already holds — orders, carrier documents, claim files — compares them against the rules that govern them, and puts a drafted action in front of the person who owns the decision. Runs on infrastructure the customer controls.",
  "foundingDate": "2023",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer support",
    "email": "support@runink.org"
  }
}
</script>
