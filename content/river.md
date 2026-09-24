---
title: "Runink River"
layout: "landing"
description: "RIVER, the Runink River Sovereignty Server, is the server image that puts the Runink platform on hardware you own. Meet its mascot, and get the brand files."
# The share card. 1200x675, not the 1200x630 social-card size, on purpose:
# hugo.toml mounts static/images as assets/images, so baseof.html finds this
# file and puts it through Fill "1200x675 webp" like every other og:image (see
# the comment there for why 16:9). A 1200x630 source would be scaled up and
# cropped at both sides; a 1200x675 one passes through without a crop. The PNG
# itself stays downloadable from the brand-assets block below.
#
# How it was made, so it can be made again: the mascot SVG rendered at 520px
# with rsvg-convert, composited onto a 1200x675 #fdf5e6 ground with magick,
# "Runink" / "River" set in Fira Sans Condensed SemiBold (the wordmark face,
# DESIGN.md §9) and "Sovereignty Server" in Fira Sans Condensed Book, then
# quantised to a 64-colour PNG8. About 16 KB.
image: "/images/brand/river-og.png"
# Why this page exists. RIVER had one card on /downloads/ and no page of its
# own, so the mascot had nowhere to live. This page is linked from that card;
# it is English only, like /downloads/, so no translation is left behind.
# Claims here are the ones the river repository backs: an installer image, a
# ZFS root with native encryption, the same image on every box, the charter
# drafted for a Linux Foundation proposal. Keep additions to what that
# repository can show.
---

{{< section-container class="pt-20 pb-12" >}}
<div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
  <div class="md:col-span-3">
    <p class="inline-flex items-center px-5 py-2 mb-7 rounded-lg border border-signal/40 text-signal text-xs md:text-sm font-black uppercase tracking-[0.22em]">The platform, on your own box</p>
    <h1 class="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">Runink River</h1>
    <p class="text-xl text-ink-2 leading-relaxed mb-6">
      RIVER, the Runink River Sovereignty Server, is the server image that puts Runink core
      on a machine you own. Runink FACE and Runink PULSE run on core. RIVER is what core runs on.
    </p>
    <p class="text-lg text-ink-2 leading-relaxed">
      It is not a product you buy on its own. It is the answer to a plain question:
      where does my data sit, and who can read it? With RIVER, the answer is your own
      hardware, and the people you let in.
    </p>
  </div>
  <figure class="md:col-span-2 flex flex-col items-center">
    <div class="rounded-full bg-ink/5 border border-ink/10 p-8 md:p-10">
      <img src="/images/brand/river-mascot.svg" width="320" height="320"
           alt="The River mascot: a cream, line-drawn herding dog standing on a raft of three logs, floating on a pale blue river."
           class="w-56 h-56 md:w-72 md:h-72">
    </div>
    <figcaption class="mt-4 text-sm text-ink-2">The River dog, the Runink herding dog on a raft.</figcaption>
  </figure>
</div>
{{< /section-container >}}

{{< section-container class="py-16 bg-stone-900" >}}
<div class="max-w-5xl mx-auto">
  <h2 class="text-3xl md:text-4xl font-bold text-white tracking-tight mb-10">What the image does</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div class="bg-ink/5 p-8 rounded-xl border border-ink/10">
      <h3 class="text-2xl font-bold text-white mb-4">Installs from one stick</h3>
      <p class="text-slate-300">RIVER is a bootable installer. You write it to a USB stick, start the machine from it, and it sets up the whole box. Every box set up from the same image comes out the same way.</p>
    </div>
    <div class="bg-ink/5 p-8 rounded-xl border border-ink/10">
      <h3 class="text-2xl font-bold text-white mb-4">The disk is encrypted</h3>
      <p class="text-slate-300">The system disk uses ZFS, a file system that checks what it reads back against what it wrote, and it is encrypted by ZFS itself. A drive pulled out of the machine is not a readable copy of your records.</p>
    </div>
    <div class="bg-ink/5 p-8 rounded-xl border border-ink/10">
      <h3 class="text-2xl font-bold text-white mb-4">Only what the platform needs</h3>
      <p class="text-slate-300">A server with no desktop, no media stack and one kernel. Fewer parts means fewer things to patch, and fewer things to explain to your auditor.</p>
    </div>
  </div>
  <p class="text-lg text-ink-2 leading-relaxed mt-10 max-w-3xl">
    RIVER is being prepared as an open-source project, with a draft charter written for a
    Linux Foundation proposal. The server image is provided per deployment:
    <a href="/downloads/" class="text-signal underline decoration-signal/40 hover:decoration-signal">request access on the downloads page</a>.
  </p>
</div>
{{< /section-container >}}

{{< section-container id="brand-assets" class="py-16" >}}
<div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
  <div class="md:col-span-2">
    <h2 class="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">Brand assets</h2>
    <p class="text-lg text-ink-2 leading-relaxed mb-4">
      The River dog is the mascot for RIVER and the people who build on it. It is the
      herding dog from the Runink mark, riding a log raft down the river.
    </p>
    <p class="text-lg text-ink-2 leading-relaxed mb-4">
      <strong class="text-white">How you may use it.</strong> The mascot and the names
      Runink and RIVER are Runink trademarks. They are not under an open-source licence.
      You may show the mascot unchanged when you write or talk about RIVER or Runink.
      Do not recolour or redraw it, do not use it for another product, and do not use it
      in a way that suggests Runink backs you. For anything else, ask us first.
    </p>
    <ul class="text-lg text-ink-2 leading-relaxed space-y-2">
      <li><a href="/images/brand/river-mascot.svg" download class="text-signal underline decoration-signal/40 hover:decoration-signal">River mascot, SVG</a> (4 KB, any size)</li>
      <li><a href="/images/brand/river-og.png" download class="text-signal underline decoration-signal/40 hover:decoration-signal">Share card, PNG</a> (1200 × 675)</li>
    </ul>
  </div>
  <div class="grid grid-cols-2 gap-4" aria-hidden="true">
    <div class="rk-swatch-print rounded-xl p-4" style="background:#fdf5e6"><img src="/images/brand/river-mascot.svg" width="160" height="160" alt="" class="w-full h-auto"></div>
    <div class="rk-swatch-print rounded-xl p-4" style="background:#1d2b3a"><img src="/images/brand/river-mascot.svg" width="160" height="160" alt="" class="w-full h-auto"></div>
    <p class="col-span-2 text-sm text-ink-2">On light and on dark. The cream fill and the dark outline carry it on either.</p>
  </div>
</div>
{{< /section-container >}}
