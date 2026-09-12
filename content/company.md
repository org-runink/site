---
title: "About Runink"
layout: "company"
description: "What Runink is for: reading the records a company already keeps, and turning them into decisions its own people can defend."
# The hero moved out of the body and into the layout, so this page opens the way
# /pricing/ does instead of with a centred h1 in a gradient box. Copy is the same
# copy; only where it is rendered changed.
eyebrow: "The company"
hero_line: "The answer is usually already in the records"
hero_deck: "A company already records what it bought, what it shipped, what it paid and what went wrong. Runink reads those records and puts an answer in front of the person who has to act on it."
# The page ended on nothing. layouts/_default/company.html calls next-step.html,
# which renders only when a page carries `next`, so /company/ closed on ~300px of
# bare background with no way out of it. Same band the four listing pages use, so
# the exit is the one a reader has already met elsewhere on the site.
next:
  label: "One next step"
  title: "The rules above are things you can ask us to show you."
  body: "Bring one lane, one claim, or one month of invoices. Half an hour, with whoever owns the problem in the room, and we walk that one example end to end. If the losses you carry are not the shape this addresses, we will say so."
  cta: "Book a consultation"
  about: "The company page"
date: "2024-05-20T00:00:00Z"
author: "Runink"
# WHY THE SOVEREIGNTY CARD IS WORDED THE WAY IT IS.
#
# It used to read "and that is enforced by a check that refuses the code, not by
# a setting somebody has to remember." That is not supportable for FACE, and the
# site already said the opposite elsewhere: the FAQ on /products/face/ calls it
# "an architectural property rather than a machine-enforced one".
#
# Checked rather than assumed: workstation/guardrails/forbidden.txt is a 33-line
# denylist enforced by a per-repo pre-commit hook plus a CI workflow in core and
# pulse. face has neither in CI. So the product page was right and this page was
# overclaiming, on the one sentence a security-minded buyer is most likely to
# test.
#
# THIS NOTE LIVES IN FRONT MATTER FOR A REASON. It was first written as a
# {{ /* ... */ }} Go template comment in the body, which is a layouts construct:
# Hugo does not evaluate template syntax inside a content file, so all 1,213
# characters of it rendered as visible body copy and shipped to production —
# breaking rule 10 (never publish the mechanics) and rule 2 (never state what the
# product lacks) in one paragraph, on a page robots.txt explicitly opens to
# GPTBot, ClaudeBot, PerplexityBot and CCBot. In content/, notes go here.
---

{{< section-container class="pt-4 pb-20" >}}
  <div class="max-w-4xl">
    <p class="text-xs font-black uppercase tracking-[0.2em] text-signal mb-4">What we are for</p>
    <p class="text-2xl md:text-3xl leading-snug text-ink">
      Most of what an operations, finance or compliance team needs to decide is sitting in systems it already pays for, in a shape nobody has time to read.
    </p>
    <p class="text-lg text-ink-2 mt-6 max-w-3xl">
      We connect to those systems, keep the working copy on hardware the customer controls, and show the reasoning behind every answer so the person who signs off can check it.
    </p>
  </div>
{{< /section-container >}}

{{< section-container class="py-20 bg-stone-900" >}}
  <div class="max-w-6xl mx-auto">
    <h2 class="text-3xl md:text-4xl font-bold mb-4">How we build it</h2>
    <p class="text-xl text-ink-2 max-w-3xl mb-12">
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
