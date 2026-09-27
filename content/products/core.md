---
title: "Runink CORE"
description: "Runink's control plane and the platform that powers all Runink applications. CORE provides zero-trust orchestration, local inference, and self-healing operations for sovereign AI products."
layout: "landing"
badge: "CORE"
---

{{< hero
    headline="The sovereign AI platform your apps run on."
    sub_headline="**Runink CORE** is the zero-trust control plane that provisions, secures, and operates every Runink application — so you ship AI products to enterprise customers fast, and keep the trust that makes them stay."
    primary_button_text="Book a consultation"
    primary_button_url="/#contact"
    secondary_button_text="Read the CORE paper"
    secondary_button_url="/blog/whitepapers/runink-core/"
    tertiary_button_text="📖 Read the docs"
    tertiary_button_url="https://docs.runink.org/core/"
    size="normal"
    gradient-from="var(--rk-sunk)"
    gradient-to="var(--rk-ground)"
    gradient-angle="135"
>}}

{{< section-container class="py-20 relative z-10" >}}

<div class="max-w-4xl mx-auto text-left space-y-6 relative">
<h2 class="text-3xl md:text-5xl font-bold text-white tracking-tight">
What CORE does, and what it does not.
</h2>

<p class="text-xl text-ink-2 leading-relaxed">
Building trustworthy AI products for enterprises is where teams stall. Every app rebuilds the plumbing: auth, secrets, tenancy, serving, observability. Security gets revisited per product. The model is external, so the deal dies in procurement. When something breaks at 2am, there's no single console — just distributed systems and pagers.
</p>

<p class="text-xl text-ink-2 leading-relaxed">
CORE is the platform that solves those hard parts once. FACE runs on it. PULSE runs on it. Each product is just business logic on top of a control plane built for trust, resilience, and speed. Everything below is CORE.
</p>
</div>

<div class="max-w-7xl mx-auto mt-16">
{{< card-grid cols="3" >}}
{{< card
    icon="shield"
    title="Runink CORE"
    description="The platform underneath. Zero-trust mesh, local AI, multi-tenant orchestration, self-healing. Every Runink product runs on it."
    link="/blog/whitepapers/runink-core/"
>}}
{{< card
    icon="zap"
    title="Runink FACE"
    description="The main product. Fulfilment, claims, compliance. A separate application that runs on CORE."
    link="/products/face/"
>}}
{{< card
    icon="globe"
    title="Runink PULSE"
    description="Market research and analysis. A second product, also on CORE, with its own business logic."
    link="/products/pulse/"
>}}
{{< /card-grid >}}
</div>

{{< /section-container >}}

{{< section-container class="py-10" >}}

<div class="max-w-4xl mx-auto px-4 mb-20">
<h2 class="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">The four things that make shipping fast and sales possible.</h2>
<p class="text-xl text-ink-2 leading-relaxed">What it takes to launch a product every team wants to buy, on a platform no customer will leave.</p>
</div>

<div class="max-w-7xl mx-auto px-4 space-y-32">

<div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
    <div>
        <div class="inline-block px-3 py-1 rounded bg-signal-wash text-signal font-bold mb-4 tracking-wide">1. Provision</div>
        <h3 class="text-4xl font-bold text-white mb-6">Request an instance. The operators handle the rest.</h3>
        <div class="text-lg text-slate-200 space-y-6 leading-relaxed">
            <p>
                A new customer, a new team, a new market — each one is a client instance request to the control plane. CORE provisions compute, wires up tenancy, places it onto the cluster, and hands back the credentials. The homogeneous scaffolding means a new AI app is business logic, not new infrastructure.
            </p>
        </div>
        <ul class="space-y-6 mt-8">
            <li><span class="text-signal font-bold block mb-1">Instance from one request</span> <span class="text-slate-300">A named operator reconciles compute, tenancy, and placement. Faster time-to-value clears the pilot, and a homogeneous mesh makes every launch a tenth iteration, not a first. Days instead of quarters.</span></li>
            <li><span class="text-signal font-bold block mb-1">Multi-tenant by design</span> <span class="text-slate-300">Land one team, expand across the org. Isolated tenants on one control plane mean you don't re-platform when growth happens — you just add another request.</span></li>
        </ul>
    </div>
    <div class="relative group">
        <div class="absolute -inset-1 bg-gradient-to-r from-signal-fill to-signal-fill-hover opacity-25 blur transition duration-1000 group-hover:opacity-50"></div>
        {{< figure src="/images/core/console.png" alt="The CORE console: control plane health, mesh posture, topology, and code-review tracking for every PR" class="relative rounded-lg shadow-2xl border border-white/10" >}}
    </div>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
    <div class="order-1 md:order-2 md:col-span-2">
        <div class="inline-block px-3 py-1 rounded bg-signal-wash text-signal font-bold mb-4 tracking-wide">2. Secure</div>
        <h3 class="text-4xl font-bold text-white mb-6">Zero-trust by default. Security is the spine.</h3>
        <div class="text-lg text-slate-200 space-y-6 leading-relaxed">
            <p>
                Every service identifies itself to every other service on every call. Identities are ephemeral, generated off a shared certificate authority, and rotated hourly. Secrets are envelope-encrypted. Messages are authenticated. PII is scrubbed out of the logs that operators read. Security is not a switch somebody could leave off — it is how the platform is built.
            </p>
        </div>
        <ul class="space-y-6 mt-8">
            <li><span class="text-signal font-bold block mb-1">In-process rotating mTLS mesh</span> <span class="text-slate-300">Ephemeral ECDSA identities off a shared CA, chain-only verification — a zero-broker peer plane where services reach each other without proxies. Every identity is minutes from expiry.</span></li>
            <li><span class="text-signal font-bold block mb-1">Envelope-encrypted secrets</span> <span class="text-slate-300">Application secrets are encrypted with a key held only in memory. Even a disk image does not expose them. A key rotation means one seal, not one per application.</span></li>
            <li><span class="text-signal font-bold block mb-1">PII-scrubbing interceptors</span> <span class="text-slate-300">Logs and metrics that reach the console are intercepted and PII is removed before they leave the boundary. A breach of the audit trail is not a breach of the data.</span></li>
        </ul>
    </div>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
    <div>
        <div class="inline-block px-3 py-1 rounded bg-signal-wash text-signal font-bold mb-4 tracking-wide">3. Serve</div>
        <h3 class="text-4xl font-bold text-white mb-6">Local inference. Your model, your hardware.</h3>
        <div class="text-lg text-slate-200 space-y-6 leading-relaxed">
            <p>
                A shared inference plane runs on your infrastructure — llama.cpp, open weights, cgroups-isolated. No third-party API, no vendor lock-in, no history of your queries filed under your company. When the cloud is down or the API quotas hit, the failsafe model answers instead of returning an error. That property alone clears the security review that stalls most AI deals.
            </p>
        </div>
        <ul class="space-y-6 mt-8">
            <li><span class="text-signal font-bold block mb-1">Shared inference plane</span> <span class="text-slate-300">One model server, many apps, isolated with cgroups. Every product gets deterministic, sovereign reasoning — and the platform scales the shared plane through the peaks so apps never feel the load.</span></li>
            <li><span class="text-signal font-bold block mb-1">Offline failsafe</span> <span class="text-slate-300">When connectivity breaks or quotas hit, the failsafe model answers. The product keeps working instead of returning an error, because the answer is better than nothing.</span></li>
        </ul>
    </div>
    <div class="relative group">
        <div class="absolute -inset-1 bg-gradient-to-r from-signal-fill to-signal-fill-hover opacity-25 blur transition duration-1000 group-hover:opacity-50"></div>
        {{< figure src="/images/core/mesh.png" alt="The mesh topology: interconnected services, encrypted channels, rotating identities" class="relative rounded-lg shadow-2xl border border-white/10" >}}
    </div>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
    <div class="order-1 md:order-2 md:col-span-2">
        <div class="inline-block px-3 py-1 rounded bg-signal-wash text-signal font-bold mb-4 tracking-wide">4. Heal</div>
        <h3 class="text-4xl font-bold text-white mb-6">Self-healing. Drift fixed before 2am.</h3>
        <div class="text-lg text-slate-200 space-y-6 leading-relaxed">
            <p>
                A watchdog detects when reality drifts from the desired state and a remediator fixes it — automatically. Configuration gets reapplied. Failed services restart. Load rebalances. The operators watch from a single console instead of fielding pages. Uptime is a property of the platform, not something on shift notices.
            </p>
        </div>
        <ul class="space-y-6 mt-8">
            <li><span class="text-signal font-bold block mb-1">Self-healing engine</span> <span class="text-slate-300">Drift is detected and corrected before the customer notices. No 2am pages because a health check watches and remediates — the platform reconciles itself.</span></li>
            <li><span class="text-signal font-bold block mb-1">One console, always-on view</span> <span class="text-slate-300">Health, metrics, topology, and typed audit events — all from a single surface. An operator assistant runs the same tools you would and shows its trace.</span></li>
            <li><span class="text-signal font-bold block mb-1">Code-review tracking</span> <span class="text-slate-300">Each PR spins up a code-review instance you can watch from the console, so an agent can test against the real infrastructure without touching production.</span></li>
        </ul>
    </div>
</div>

</div>

{{< /section-container >}}

{{< section-container class="py-20 bg-stone-900" >}}
<div class="max-w-5xl mx-auto px-4">
    <div class="mb-16 max-w-3xl">
        <h2 class="text-4xl font-bold text-white mb-6 tracking-tight">Why CORE matters to your business</h2>
        <p class="text-xl text-ink-2 leading-relaxed">Speed, trust, and uptime are what winning looks like. CORE is built to deliver all three.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-ink/5 p-8 rounded-xl border border-ink/10">
            <h3 class="text-2xl font-bold text-white mb-4">Sell faster</h3>
            <p class="text-slate-300"><strong>"Runs on your hardware, data never leaves."</strong> That sentence clears the security review that stalls most AI deals. CORE makes it true and provable — local inference, zero egress, sovereign by design.</p>
        </div>
        <div class="bg-ink/5 p-8 rounded-xl border border-ink/10">
            <h3 class="text-2xl font-bold text-white mb-4">Ship faster</h3>
            <p class="text-slate-300">Days instead of quarters. Homogeneous scaffolding means every new app is business logic on shared plumbing. Provision once, launch many. FACE and PULSE both launched on this foundation.</p>
        </div>
        <div class="bg-ink/5 p-8 rounded-xl border border-ink/10">
            <h3 class="text-2xl font-bold text-white mb-4">Keep customers</h3>
            <p class="text-slate-300">Uptime is the renewal. Self-healing means drift is caught before it becomes an outage. Switching away requires moving to another sovereign platform — which is why you built this one.</p>
        </div>
    </div>
</div>
{{< /section-container >}}

{{< section-container class="py-16" >}}
<div class="max-w-3xl mx-auto px-4">
    <div class="border-l-4 border-signal pl-6 space-y-4">
        <p class="text-sm font-bold uppercase tracking-[0.2em] text-signal">What this page does not claim</p>
        <h2 class="text-2xl font-bold text-white">CORE is not a product you buy on its own.</h2>
        <p class="text-lg text-slate-300 leading-relaxed">
            CORE is the platform that your purchased applications run on. You buy <a href="/products/face/" class="text-signal underline decoration-signal/40 hover:decoration-signal">FACE</a> or <a href="/products/pulse/" class="text-signal underline decoration-signal/40 hover:decoration-signal">PULSE</a>. CORE is the answer to "where does it run and who can see what," not a consumer product. The figures that matter are your uptime, your time-to-value, and the ease of your security audits — measured on your own instances.
        </p>
    </div>
</div>
{{< /section-container >}}

{{< faq >}}
{
    "title": "The questions that actually get asked.",
    "description": "Straight answers, including where the answer is no.",
    "questions": [
        {
            "question": "Do we run CORE on our own infrastructure?",
            "answer": "Yes. CORE runs on your hardware, in your boundary, under your control. The data your applications process stays inside. The model inference happens on your machines. The only paths that deliberately leave are routing requests to a service you configure and open-web research queries that return pages, never records."
        },
        {
            "question": "Is CORE something we can buy or is it only for Runink applications?",
            "answer": "It is the platform Runink products run on. You do not license CORE separately — when you buy FACE or PULSE, you get CORE as part of the installation. If a separate CORE offering becomes sensible, we will say so. Right now it is the answer to \"where does this run,\" not a thing you negotiate over."
        },
        {
            "question": "How is CORE different from Kubernetes?",
            "answer": "CORE is a control plane purpose-built for Runink applications. It provisions instances, routes traffic, manages secrets, enforces zero-trust, and self-heals. Kubernetes is a lower-level abstraction that solves container orchestration. CORE uses Kubernetes (k0s) as a foundation and adds the application-specific layers on top — tenancy, inference serving, mTLS, observability, and remediation. You do not need to manage Kubernetes; you manage CORE through a console."
        },
        {
            "question": "Does CORE handle tenancy automatically?",
            "answer": "Yes. Isolation is built in. A client instance is a unit of tenancy, compute placement, and secret scoping. You can run dozens of isolated customer environments on one control plane without re-platforming."
        },
        {
            "question": "What happens if the inference plane fails?",
            "answer": "The failsafe model takes over. If the main model server is unreachable, a deterministic smaller model answers instead. The product keeps working instead of returning an error. That property is why the security review passes — you have an answer when the cloud is down."
        },
        {
            "question": "Can we see what is happening in CORE?",
            "answer": "Yes. The console shows you health, mesh posture, topology, metrics, and typed audit events. An operator assistant runs the same tools you would. Every PR gets a code-review instance you can watch from the console. Transparency is a property of how it is built, not a feature you turn on."
        },
        {
            "question": "How fast can we launch a new customer on CORE?",
            "answer": "A request to an operator, then provisioning — hours, not weeks. The homogeneous plumbing means you do not rebuild infrastructure per customer. That speed is how pilots convert to deals and why pilots matter."
        },
        {
            "question": "What happens to data at rest and in transit?",
            "answer": "In transit: mTLS. Every service call is authenticated and encrypted. At rest: ZFS native encryption with per-dataset keys. Secrets are envelope-encrypted with a key held only in memory. The recovery key is printed once and never written to disk."
        }
    ]
}
{{< /faq >}}

{{< cta
    title="Run your AI products on a platform built for trust."
    description="CORE is the control plane that lets you ship fast and earn the sovereignty that keeps customers. Let's talk about how it works on your scale."
    primary_button_text="Book a consultation"
    primary_button_url="/#contact"
    secondary_button_text="Read the CORE paper"
    secondary_button_url="/blog/whitepapers/runink-core/"
>}}
