---
title: "Downloads"
layout: "company"
# Order is the attribution here. FACE by Runink is the flagship and leads the page;
# Runink PULSE is a separate product, not a FACE companion app; and the server
# image is not a product at all: it carries Runink TIDE, which is a third product
# sold on its own (the owner, 26 September 2026). The server image is the Runink
# Server distribution, built on Runink River; Runink River itself is the developer
# workstation and has its own page at /river/ (corrected 2026-09-26, when that page
# was rewritten: this file used to call the server image "Runink River").
# The previous version set the three side by side in one row of equal cards,
# which read as one product family with three equal members.
description: "Read about the FACE by Runink app for Android, learn how to open the separate Runink PULSE web app, read about the open-source Runink River workstation, or request access to the Runink Server image, which puts Runink TIDE on hardware you own."
date: "2026-08-11T00:00:00Z"
---

{{< section-container class="bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900 pt-20 pb-16" >}}
  <div class="text-center max-w-3xl mx-auto">
    <h1 class="text-4xl md:text-5xl font-bold mb-6">Downloads</h1>
    <p class="text-xl text-ink-2">
      Take FACE by Runink with you, or run the platform on your own hardware.
    </p>
  </div>
{{< /section-container >}}

{{< section-container class="py-16 bg-stone-900" >}}
  <div class="max-w-6xl mx-auto">

    <p class="text-stone-400 mb-10 max-w-3xl">
      Four separate things live on this page. <strong class="text-stone-200">FACE by Runink</strong>
      is our main product. It reads your logistics records on its own and drafts the
      action; a named person approves it. <strong class="text-stone-200">Runink PULSE</strong> is a different
      product for marketing teams, listed here because people ask where to get it, not
      because it is part of FACE: it opens in a web browser. The
      <strong class="text-stone-200">Runink Server</strong> image is neither: it
      is the server image carrying Runink TIDE, a separate product in its own right, which is the answer to
      where your data is processed and who can see it. <strong class="text-stone-200">Runink River</strong> is the
      open-source developer workstation the server image is built on.
    </p>

    <!-- NOTE: these three cards used to carry the pre-migration vendor palette
         as inline hexes (#7c3aed, #ea580c, #10b981) — three colours standing in
         for "three different things". The site has ONE accent now, so the
         eyebrows and the buttons all resolve through the signal tokens and the
         distinction is carried by the copy and the card widths instead. -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

    <div class="md:col-span-3 h-full bg-stone-800 p-8 rounded-lg shadow-lg border border-stone-700 flex flex-col">
      <div class="text-xs font-black uppercase tracking-[0.25em] mb-3 text-signal">FACE by Runink — the product — Android</div>
      <h3 class="text-2xl font-bold text-white mb-3">Operations, in your pocket</h3>
      <p class="text-stone-400 mb-8 flex-1 max-w-3xl">
        The cockpit for FACE by Runink: the ranked queue of proposed actions, the records
        behind each one, and the approve or reject.
      </p>
      <a href="/products/face/"
         class="inline-block self-start text-center px-6 py-3 rounded-lg font-bold uppercase tracking-wide bg-signal-fill hover:bg-signal-fill-hover text-on-fill transition-colors">
        About FACE by Runink
      </a>
    </div>

    <div class="md:col-span-2 h-full bg-stone-800 p-8 rounded-lg shadow-lg border border-stone-700 flex flex-col">
      <div class="text-xs font-black uppercase tracking-[0.25em] mb-3 text-signal">Runink PULSE — a separate product — web app</div>
      <h3 class="text-2xl font-bold text-white mb-3">PULSE opens in your browser</h3>
      <p class="text-stone-400 mb-8 flex-1">
        Brand Analysis, Leads, Campaigns and Studio for your own marketing team,
        with your team approving what goes out. A different product from FACE, with
        its own <a href="/blog/whitepapers/runink-pulse/" class="underline">paper</a>.
        Sign in at your organisation's PULSE address in a web browser; the
        <a href="https://docs.runink.org/pulse/docs/getting-started/" class="underline">getting-started guide</a>
        shows the first steps.
      </p>
      <a href="/products/pulse/"
         class="inline-block self-start text-center px-6 py-3 rounded-lg font-bold uppercase tracking-wide bg-signal-fill hover:bg-signal-fill-hover text-on-fill transition-colors">
        About Runink PULSE
      </a>
    </div>

    <div class="h-full bg-stone-800 p-8 rounded-lg shadow-lg border border-stone-700 flex flex-col">
      <div class="text-xs font-black uppercase tracking-[0.25em] mb-3 text-signal">Runink Server — the server image</div>
      <h3 class="text-2xl font-bold text-white mb-3">Runink Server</h3>
      <p class="text-stone-400 mb-8 flex-1">
        The Runink Server image puts Runink TIDE on your own box: the layer FACE and PULSE run on, so that
        your data and the reasoning over it never leave hardware you own. Provisioned
        per deployment, not offered as a public download.
        It is built on <a href="/river/" class="underline">Runink River</a>, the developer workstation.
      </p>
      <a href="{{< contacturl >}}"
         class="inline-block self-start text-center px-6 py-3 rounded-lg font-bold uppercase tracking-wide bg-signal-fill hover:bg-signal-fill-hover text-on-fill transition-colors">
        Request Access
      </a>
    </div>

    <div class="md:col-span-3 h-full bg-stone-800 p-8 rounded-lg shadow-lg border border-stone-700 flex flex-col">
      <div class="text-xs font-black uppercase tracking-[0.25em] mb-3 text-signal">Runink River — open source</div>
      <h3 class="text-2xl font-bold text-white mb-3">The developer workstation, open source</h3>
      <p class="text-stone-400 mb-6 flex-1 max-w-3xl">
        Runink River is the free, open-source operating system for data, analytics and AI
        workstations you own, and the base the server image is built on. Every line of it
        is public.
      </p>
      <a href="/river/"
         class="inline-block self-start text-center px-6 py-3 rounded-lg font-bold uppercase tracking-wide bg-signal-fill hover:bg-signal-fill-hover text-on-fill transition-colors">
        About Runink River
      </a>
    </div>

  </div>
  </div>
{{< /section-container >}}
