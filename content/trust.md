---
title: "Trust & Compliance"
layout: "company"
description: "How Runink keeps a person in charge of every decision, where the models run, how data is kept apart, how releases are signed, how our controls line up with SOC 2, ISO/IEC 27001, ISO 31000, ISO/IEC 42001 and PCI DSS v4.0, and how to report a security problem."
eyebrow: "Trust & Compliance"
hero_line: "A person decides. The record shows who."
hero_deck: "What our software is allowed to do on its own, where it runs, and what it writes down. Every section ends with links to the public documentation that shows it, so you can check each line instead of taking it on trust."
next:
  label: "One next step"
  title: "Ask us to show you any line on this page."
  body: "Half an hour with whoever owns security or compliance on your side. Pick a section, and we will open the running software and the record it keeps, rather than a slide about it."
  cta: "Book a consultation"
  about: "Trust & Compliance"
# WHY THIS PAGE EXISTS, AND THE RULES IT IS HELD TO. Read this before you add a
# sentence, in any of the four languages.
#
# The owner asked for "a compliance part in our website" because the products
# already do a lot here. The risk of a page with this title is that it drifts
# into the claims a security buyer is trained to distrust. So it is held to the
# narrowest version of CONTENT.md rules 1, 2 and 4, plus these:
#
# 1. EVERY CLAIM LINKS TO PUBLIC EVIDENCE. Each section ends with links to
#    docs.runink.org pages (or the public river repository) that say the same
#    thing. If you add a claim, add its link; if a docs page moves, fix the link
#    or take the claim out. Only link pages that answer 200 today — the FACE
#    model-card section was not yet served on docs.runink.org when this page
#    was written, so it is not linked; add it once it answers.
# 2. NO CERTIFICATION CLAIM. The words "compliant", "certified" and
#    "guaranteed" do not appear, with ONE deliberate exception: the sentence
#    "Runink is not certified against these standards; alignment is not
#    certification." It is required, word for word, and is the only place
#    either word may appear. The standards list is exactly SOC 2, ISO/IEC 27001,
#    ISO 31000, ISO/IEC 42001 and PCI DSS v4.0 — the frameworks Runink's own
#    control index is mapped to. Do not add another standard.
# 3. THE EXCEPTIONS ARE NAMED. "A person decides" is only honest with its two
#    documented exceptions beside it: FACE's own self-healing (restart, isolate,
#    roll back, add capacity — a fixed list, never destructive, an operator can
#    switch it off) and TIDE's issue triager applying labels from an allowed
#    list. If another agent gains the right to act alone, it goes in that list
#    the same day, or the headline comes down.
# 4. NOTHING UNRELEASED. No test evidence or autonomous release-testing
#    claims, no customer-facing framework assessment, no feature that has not
#    shipped. That includes a "coming next" line: the site's next-release label
#    is for work already finished and accepted, and nothing on this page's
#    subject qualifies yet. Do not hint at it either.
# 5. NO INTERNALS. No internal names, rule IDs, file paths, private repository
#    names, ticket or pull-request numbers, hostnames, addresses, people other
#    than the published security contact, audit findings, gaps or incidents.
#    The public docs carry the detail; this page carries the plain statement.
# 6. NO FIGURES. No scores, percentages, counts or superlatives. The model cards
#    carry no evaluation scores because none has been published, and this page
#    says nothing that would imply otherwise. No prices: those are on /pricing/.
#
# Translations: content/trust.{es,fr,pt}.md carry the same substance. Rule 12 —
# a change here lands in all three in the same commit, or they come down.
#
# Notes go here, in front matter. A {{/* */}} comment in the body renders as
# visible copy (see the note in content/company.md).
---

{{< section-container class="pt-4 pb-12" >}}
  <div class="max-w-4xl">
    <p class="text-xs font-black uppercase tracking-[0.2em] text-signal mb-4">On this page</p>
    <ol class="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2 text-lg text-ink-2 list-decimal pl-6">
      <li><a class="text-ink hover:text-signal underline decoration-rule" href="#a-person-decides">A person decides</a></li>
      <li><a class="text-ink hover:text-signal underline decoration-rule" href="#guardrails">Guardrails on every agent</a></li>
      <li><a class="text-ink hover:text-signal underline decoration-rule" href="#where-models-run">Where the models run</a></li>
      <li><a class="text-ink hover:text-signal underline decoration-rule" href="#data-kept-apart">Your data, kept apart</a></li>
      <li><a class="text-ink hover:text-signal underline decoration-rule" href="#not-known">Not known is not zero</a></li>
      <li><a class="text-ink hover:text-signal underline decoration-rule" href="#signed-releases">Signed releases</a></li>
      <li><a class="text-ink hover:text-signal underline decoration-rule" href="#standards">Standards we align to</a></li>
      <li><a class="text-ink hover:text-signal underline decoration-rule" href="#report-a-problem">Report a security problem</a></li>
    </ol>
  </div>
{{< /section-container >}}

{{< section-container class="py-16 bg-stone-900" id="a-person-decides" >}}
  <div class="max-w-4xl">
    <p class="text-xs font-black uppercase tracking-[0.2em] text-signal mb-4">1 · A person decides</p>
    <h2 class="text-3xl md:text-4xl font-bold text-ink mb-6">Agents draft. A named person decides.</h2>
    <div class="text-lg text-ink-2 leading-relaxed space-y-5">
      <p>Runink's agents read records and write drafts: a claim file, a code fix, a post, a reply. The draft waits. A named person approves it, edits it or rejects it, and the record keeps who that was and when.</p>
      <p>In Runink TIDE, those decisions go into an audit chain. Each entry is linked to the one before it, so an entry that was changed, removed or moved out of order shows up. Anyone signed in to the TIDE console can press <em>Verify now</em> and have the whole chain checked. Reading the entries themselves is kept to the administrators you name.</p>
      <p>Two things do act on their own, and we would rather you read them here than find them later:</p>
      <ul class="list-disc pl-6 space-y-3">
        <li><strong class="text-ink">FACE looks after its own health.</strong> When part of FACE stops responding, it can restart it, cut off a dependency that keeps failing, roll back the most recent change, or add capacity. It picks only from that fixed list. It never deletes data, shuts a machine down or turns off a security control. When it is unsure, it tells a person instead of acting. An operator can switch the automatic part off.</li>
        <li><strong class="text-ink">TIDE's issue triager labels new issues.</strong> It picks labels only from the list the repository allows, and only after an independent check agrees. A person can change them at any time, and decides who works on the issue.</li>
      </ul>
      <p>Everything else waits for a person.</p>
    </div>
    <div class="mt-10 border-t border-rule pt-6">
      <p class="text-xs font-black uppercase tracking-[0.2em] text-ink-2 mb-3">Read the evidence</p>
      <ul class="space-y-2 text-base">
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/face/docs/analysis/agents-and-oversight/">FACE: agents and oversight</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/core/docs/models/">TIDE: what each agent may do, and what a person decides</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/core/docs/devex/cluster-gitops/">TIDE: the audit chain and how it is checked</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/face/docs/operations/configuration/">FACE: the setting that switches automatic self-healing off</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/core/docs/models/issue-triager/">TIDE: the issue triager's model card</a></li>
      </ul>
    </div>
  </div>
{{< /section-container >}}

{{< section-container class="py-16" id="guardrails" >}}
  <div class="max-w-4xl">
    <p class="text-xs font-black uppercase tracking-[0.2em] text-signal mb-4">2 · Guardrails</p>
    <h2 class="text-3xl md:text-4xl font-bold text-ink mb-6">Every agent works inside written rules.</h2>
    <div class="text-lg text-ink-2 leading-relaxed space-y-5">
      <p>Each agent that calls a model has a policy judge in front of it. The judge checks a request against written rules before the model sees it, and checks what the agent writes before it is sent or published. A request that breaks a rule is refused, and the refusal is recorded.</p>
      <p>The security rules follow the OWASP Top 10 for LLM Applications, the published list of the most common ways an AI application is attacked. They cover attempts to override the agent's instructions (prompt injection), attempts to draw out secrets or other sensitive information, and requests to reach places the agent has no business reaching.</p>
      <p>Records, web pages and documents an agent reads are treated as data, never as instructions. A line in a freight record that says "ignore your rules" is read as part of the freight record. When an agent proposes an action, a second check reads the evidence the run gathered. If it disagrees, the action is held back. If it cannot decide, it says so rather than passing.</p>
    </div>
    <div class="mt-10 border-t border-rule pt-6">
      <p class="text-xs font-black uppercase tracking-[0.2em] text-ink-2 mb-3">Read the evidence</p>
      <ul class="space-y-2 text-base">
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/face/docs/security/ai-safety/">FACE: AI safety, guardrails and untrusted data</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/pulse/docs/models/">PULSE: guardrails before the model, per agent</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/pulse/docs/concepts/judging-ladder/">PULSE: the second check on proposals</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/core/docs/models/">TIDE: each agent's guardrails, on its model card</a></li>
      </ul>
    </div>
  </div>
{{< /section-container >}}

{{< section-container class="py-16 bg-stone-900" id="where-models-run" >}}
  <div class="max-w-4xl">
    <p class="text-xs font-black uppercase tracking-[0.2em] text-signal mb-4">3 · Where the models run</p>
    <h2 class="text-3xl md:text-4xl font-bold text-ink mb-6">Open models we name, and no AI vendor in between.</h2>
    <div class="text-lg text-ink-2 leading-relaxed space-y-5">
      <p>FACE, TIDE and PULSE run their models where the product runs. Put it on a Runink Server on your premises, or in your own cloud account, and the models run on your infrastructure too. Choose Runink's shared machines instead, and they run on ours. Either way, no third-party AI service is called, and your records, the prompts built from them and the answers go to no model vendor.</p>
      <p>LUNA, our personal companion app, runs its models on servers Runink operates. It calls no third-party AI service either.</p>
      <p>The models are open, and we name them by maker and licence:</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      <div class="border border-rule rounded-lg p-6">
        <p class="font-mono text-sm text-ink mb-2">Qwen3.6-35B-A3B</p>
        <p class="text-ink-2 text-base">The general model, used by most agents. Made by Qwen, licensed Apache-2.0.</p>
      </div>
      <div class="border border-rule rounded-lg p-6">
        <p class="font-mono text-sm text-ink mb-2">Qwen3-Coder-30B-A3B</p>
        <p class="text-ink-2 text-base">The coding model, for reviewing and drafting code. Made by Qwen, licensed Apache-2.0.</p>
      </div>
      <div class="border border-rule rounded-lg p-6">
        <p class="font-mono text-sm text-ink mb-2">Qwen3-VL-8B-Instruct</p>
        <p class="text-ink-2 text-base">The vision model, for scanned pages and photographs. Made by Qwen, licensed Apache-2.0.</p>
      </div>
    </div>
    <div class="text-lg text-ink-2 leading-relaxed space-y-5 mt-8">
      <p>Each agent has a public model card: what it does, what it reads, what a person still decides, which model it runs on, where it runs and where it stops.</p>
    </div>
    <div class="mt-10 border-t border-rule pt-6">
      <p class="text-xs font-black uppercase tracking-[0.2em] text-ink-2 mb-3">Read the evidence</p>
      <ul class="space-y-2 text-base">
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/core/docs/models/">TIDE model cards</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/pulse/docs/models/">PULSE model cards</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/luna/docs/models/">LUNA model cards</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/face/docs/security/sovereign-inference/">FACE: sovereign inference</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/pulse/docs/concepts/sovereign-inference/">PULSE: sovereign inference</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/luna/docs/guide/privacy/">LUNA: privacy and data</a></li>
      </ul>
    </div>
  </div>
{{< /section-container >}}

{{< section-container class="py-16" id="data-kept-apart" >}}
  <div class="max-w-4xl">
    <p class="text-xs font-black uppercase tracking-[0.2em] text-signal mb-4">4 · Your data, kept apart</p>
    <h2 class="text-3xl md:text-4xl font-bold text-ink mb-6">Someone else's record is "not found".</h2>
    <div class="text-lg text-ink-2 leading-relaxed space-y-5">
      <p>Each person's data, and each customer's, is kept apart on the server. Whose data a request may touch comes from the identity checked at sign-in, not from anything the request itself says.</p>
      <p>Ask for a record that belongs to someone else and the answer is "not found", the same answer you get for a record that does not exist. The reply does not even confirm the record is there.</p>
      <p>FACE goes one step further: each customer gets its own FACE instance, so one customer's data never shares an instance with another's.</p>
    </div>
    <div class="mt-10 border-t border-rule pt-6">
      <p class="text-xs font-black uppercase tracking-[0.2em] text-ink-2 mb-3">Read the evidence</p>
      <ul class="space-y-2 text-base">
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/face/docs/security/identity-access/">FACE: identity, access and scoping</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/luna/docs/guide/privacy/">LUNA: who can read your data</a></li>
      </ul>
    </div>
  </div>
{{< /section-container >}}

{{< section-container class="py-16 bg-stone-900" id="not-known" >}}
  <div class="max-w-4xl">
    <p class="text-xs font-black uppercase tracking-[0.2em] text-signal mb-4">5 · Not known is not zero</p>
    <h2 class="text-3xl md:text-4xl font-bold text-ink mb-6">A missing figure is shown as missing.</h2>
    <div class="text-lg text-ink-2 leading-relaxed space-y-5">
      <p>When our software could not read a figure, it says so, with the reason. It does not draw a zero, and it does not guess. A check that could not run is reported as "could not check", never as a pass. A field it does not know is left empty, not filled in.</p>
      <p>We hold ourselves to the same rule. This page carries no statistics, and neither do the model cards: none shows an evaluation score, because none has been published.</p>
    </div>
    <div class="mt-10 border-t border-rule pt-6">
      <p class="text-xs font-black uppercase tracking-[0.2em] text-ink-2 mb-3">Read the evidence</p>
      <ul class="space-y-2 text-base">
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/core/docs/dataex/models-inference/">TIDE: usage shown as absent, not zero</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/face/docs/security/audit-lineage/">FACE: what the record holds, and what it leaves empty</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/luna/docs/guide/privacy/">LUNA: the markers you will see for a missing value</a></li>
      </ul>
    </div>
  </div>
{{< /section-container >}}

{{< section-container class="py-16" id="signed-releases" >}}
  <div class="max-w-4xl">
    <p class="text-xs font-black uppercase tracking-[0.2em] text-signal mb-4">6 · Signed releases</p>
    <h2 class="text-3xl md:text-4xl font-bold text-ink mb-6">A person signs each release, away from the build.</h2>
    <div class="text-lg text-ink-2 leading-relaxed space-y-5">
      <p>Runink River releases and packages are signed with one release key. The private key is kept offline by the release maintainer. It is never in CI and never stored as a repository secret.</p>
      <p>The build machines only produce unsigned files and their checksums. The maintainer checks them against a build of their own, then signs. Before a release is published, an automated gate checks the signature and the checksums. CI verifies; it never signs.</p>
      <p>The public <a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://github.com/org-runink/river/blob/main/KEYS">KEYS file</a> is the reference. Check the key by this fingerprint, never by its name:</p>
    </div>
    <p class="mt-6 font-mono text-base md:text-lg text-ink border border-rule rounded-lg px-5 py-4 select-all break-all">95C0 A7B9 7D54 7413 E426 60DD B06F E756 26F1 5BF3</p>
    <div class="mt-10 border-t border-rule pt-6">
      <p class="text-xs font-black uppercase tracking-[0.2em] text-ink-2 mb-3">Read the evidence</p>
      <ul class="space-y-2 text-base">
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/river/docs/security/release-signing/">River: release signing</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/river/docs/security/verify/">River: verify a release yourself</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://github.com/org-runink/river/blob/main/KEYS">The KEYS file</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="/.well-known/gpg-key.txt">The public key, served from runink.org</a></li>
      </ul>
    </div>
  </div>
{{< /section-container >}}

{{< section-container class="py-16 bg-stone-900" id="standards" >}}
  <div class="max-w-4xl">
    <p class="text-xs font-black uppercase tracking-[0.2em] text-signal mb-4">7 · Standards we align to</p>
    <h2 class="text-3xl md:text-4xl font-bold text-ink mb-6">Our own controls, mapped to five standards.</h2>
    <div class="text-lg text-ink-2 leading-relaxed space-y-5">
      <p>We keep a written index of our own security controls: how data is encrypted in transit and at rest, how sign-in refuses by default, how each customer's data is kept apart, how secrets are handled, and more. Each control names the code that carries it out, and each is mapped to the parts of these standards it addresses:</p>
    </div>
    <ul class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6 text-lg text-ink">
      <li class="border border-rule rounded-lg px-5 py-3">SOC 2</li>
      <li class="border border-rule rounded-lg px-5 py-3">ISO/IEC 27001</li>
      <li class="border border-rule rounded-lg px-5 py-3">ISO 31000</li>
      <li class="border border-rule rounded-lg px-5 py-3">ISO/IEC 42001</li>
      <li class="border border-rule rounded-lg px-5 py-3">PCI DSS v4.0</li>
    </ul>
    <div class="text-lg text-ink-2 leading-relaxed space-y-5 mt-8">
      <p class="border-l-4 border-signal pl-5 text-ink"><strong>Runink is not certified against these standards; alignment is not certification.</strong></p>
      <p>An evidence agent reads the index and checks that the code each control names is still there. It records evidence, never a verdict. Any formal statement against one of these standards would come from an independent auditor, not from us or from our software.</p>
    </div>
    <div class="mt-10 border-t border-rule pt-6">
      <p class="text-xs font-black uppercase tracking-[0.2em] text-ink-2 mb-3">Read the evidence</p>
      <ul class="space-y-2 text-base">
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/core/docs/models/compliance-evidence/">TIDE: the evidence agent and the five standards</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/face/docs/security/compliance/">FACE: compliance posture</a></li>
      </ul>
    </div>
  </div>
{{< /section-container >}}

{{< section-container class="py-16" id="report-a-problem" >}}
  <div class="max-w-4xl">
    <p class="text-xs font-black uppercase tracking-[0.2em] text-signal mb-4">8 · Report a security problem</p>
    <h2 class="text-3xl md:text-4xl font-bold text-ink mb-6">Found something? Tell us privately.</h2>
    <div class="text-lg text-ink-2 leading-relaxed space-y-5">
      <p>Please do not open a public issue for a security problem. Write to:</p>
    </div>
    <p class="mt-6 font-mono text-lg md:text-xl text-ink border border-rule rounded-lg px-5 py-4 select-all">security@runink.org</p>
    <div class="text-lg text-ink-2 leading-relaxed space-y-5 mt-6">
      <p>You can <a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="mailto:security@runink.org">open it in your mail app</a>, or copy the address above. To encrypt your report, use the release key from section 6 and check its fingerprint first. Tell us what is affected and which version, what an attacker could do, and how to reproduce it if you can. For Runink River, you can also use the private reporting button on the repository's Security tab.</p>
    </div>
    <div class="mt-10 border-t border-rule pt-6">
      <p class="text-xs font-black uppercase tracking-[0.2em] text-ink-2 mb-3">Read the evidence</p>
      <ul class="space-y-2 text-base">
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/river/docs/security/reporting/">River: how to report, and what happens next</a></li>
      </ul>
    </div>
  </div>
{{< /section-container >}}
