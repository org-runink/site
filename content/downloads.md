---
title: "Downloads"
layout: "company"
# Order is the attribution here. Runink FACE is the flagship and leads the page;
# Runink PULSE is a separate product, not a FACE companion app; and the server
# image is the CORE platform both of them run on rather than a third product.
# The previous version set the three side by side in one row of equal cards,
# which read as one product family with three equal members.
description: "Get the Runink FACE app for Android, the separate Runink PULSE app, or request access to the sovereign server image the platform runs on."
date: "2026-08-11T00:00:00Z"
---

{{< section-container class="bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900 pt-20 pb-16" >}}
  <div class="text-center max-w-3xl mx-auto">
    <h1 class="text-4xl md:text-5xl font-bold mb-6">Downloads</h1>
    <p class="text-xl text-[#D9CDB8]">
      Take Runink FACE with you, or run the platform on your own hardware.
    </p>
  </div>
{{< /section-container >}}

{{< section-container class="py-16 bg-stone-900" >}}
  <div class="max-w-6xl mx-auto">

    <p class="text-stone-400 mb-10 max-w-3xl">
      Three separate things live on this page. <strong class="text-stone-200">Runink FACE</strong>
      is the product — autonomous logistics, with a named person approving every
      action. <strong class="text-stone-200">Runink PULSE</strong> is a different
      product for market analysis and marketing, listed here because it ships an
      app too, not because it is part of FACE. The
      <strong class="text-stone-200">sovereign server image</strong> is neither: it
      is the Runink CORE platform the two products run on, which is the answer to
      where your data is processed and who can see it.
    </p>

    <!-- NOTE: the inline hexes below (#7c3aed, #ea580c, #10b981) are the
         pre-migration vendor palette, not brand colours, and DESIGN.md forbids
         pages writing colour literals at all. They are left untouched here
         because recolouring is the migration's job, not this pass's. -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

    <div class="md:col-span-3 h-full bg-stone-800 p-8 rounded-lg shadow-lg border border-stone-700 flex flex-col">
      <div class="text-xs font-black uppercase tracking-[0.25em] mb-3" style="color:#7c3aed">Runink FACE — the product — Android</div>
      <h3 class="text-2xl font-bold text-white mb-3">Operations, in your pocket</h3>
      <p class="text-stone-400 mb-8 flex-1 max-w-3xl">
        The cockpit for Runink FACE: the ranked queue of proposed actions, the records
        behind each one, and the approve or reject. A debug-signed build for early
        access — install it directly. It is not signed for the Play Store.
      </p>
      <a href="https://github.com/org-runink/site/releases/download/face-android/app-debug.apk"
         class="inline-block self-start text-center px-6 py-3 rounded-lg font-bold uppercase tracking-wide text-white transition-colors"
         style="background-color:#7c3aed">
        Download APK
      </a>
    </div>

    <div class="md:col-span-2 h-full bg-stone-800 p-8 rounded-lg shadow-lg border border-stone-700 flex flex-col">
      <div class="text-xs font-black uppercase tracking-[0.25em] mb-3" style="color:#ea580c">Runink PULSE — a separate product — Android</div>
      <h3 class="text-2xl font-bold text-white mb-3">Run your agency from the field</h3>
      <p class="text-stone-400 mb-8 flex-1">
        Market analysis and marketing work, with the same review-and-approve step in
        front of the material it drafts. A different product from FACE, with its own
        <a href="/blog/whitepapers/runink-pulse/" class="underline">paper</a>. A
        debug-signed build for early access — install it directly. It is not signed
        for the Play Store.
      </p>
      <a href="https://github.com/org-runink/site/releases/download/pulse-android/app-release.apk"
         class="inline-block self-start text-center px-6 py-3 rounded-lg font-bold uppercase tracking-wide text-white transition-colors"
         style="background-color:#ea580c">
        Download APK
      </a>
    </div>

    <div class="h-full bg-stone-800 p-8 rounded-lg shadow-lg border border-stone-700 flex flex-col">
      <div class="text-xs font-black uppercase tracking-[0.25em] mb-3" style="color:#10b981">The platform — not a product</div>
      <h3 class="text-2xl font-bold text-white mb-3">Runink CORE on your own box</h3>
      <p class="text-stone-400 mb-8 flex-1">
        The data-sovereign appliance image: the layer FACE and PULSE run on, so that
        your data and the reasoning over it never leave hardware you own. Provisioned
        per deployment, not offered as a public download.
      </p>
      <a href="/#contact"
         class="inline-block self-start text-center px-6 py-3 rounded-lg font-bold uppercase tracking-wide text-white transition-colors"
         style="background-color:#10b981">
        Request Access
      </a>
    </div>

  </div>
  </div>
{{< /section-container >}}
