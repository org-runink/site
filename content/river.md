---
title: "Runink River"
layout: "landing"
description: "Runink River is the Runink sovereignty server: the server image that puts the Runink platform on hardware you own. Meet its mascot, and get the brand files."
# The share card. 1200x675, not the 1200x630 social-card size, on purpose:
# hugo.toml mounts static/images as assets/images, so baseof.html finds this
# file and puts it through Fill "1200x675 webp" like every other og:image (see
# the comment there for why 16:9). A 1200x630 source would be scaled up and
# cropped at both sides; a 1200x675 one passes through without a crop. The PNG
# itself stays downloadable from the brand-assets block below.
#
# How it was made, so it can be made again: the mascot SVG (M2) rendered at
# 520px with rsvg-convert, composited at +40+77 onto a 1200x675 #fdf5e6 ground
# with magick,
# "Runink River" set in Fira Sans Condensed SemiBold (the wordmark face,
# DESIGN.md §9; 104pt, baseline +572+374), a #f4978e rule at 574,404-880,416, and
# "The Runink sovereignty server" in Fira Sans Condensed Book (38pt, +572+472),
# then quantised to a 64-colour PNG8. About 25 KB.
image: "/images/brand/river-og.png"
# Why this page exists. Runink River had one card on /downloads/ and no page of its
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
      Runink River is the Runink sovereignty server: the server image that puts Runink core
      on a machine you own. Runink FACE and Runink PULSE run on core. Runink River is what core runs on.
    </p>
    <p class="text-lg text-ink-2 leading-relaxed">
      It is not a product for sale. It is the answer to a plain question:
      where does my data sit, and who can read it? With Runink River, the answer is your own
      hardware, and the people you let in.
    </p>
  </div>
  <figure class="md:col-span-2 flex flex-col items-center">
    <div class="rounded-full bg-ink/5 border border-ink/10 p-6 md:p-8">
      <img src="/images/brand/river-mascot.svg" width="208" height="208"
           alt="The Runink River mascot: a brown-and-white cartoon puppy grinning over a raft of three logs, floating on a pale blue river."
           class="w-40 h-40 md:w-52 md:h-52">
    </div>
    <figcaption class="mt-4 text-sm text-ink-2">The Runink River pup: the Runink herding dog as a puppy, on a raft.</figcaption>
  </figure>
</div>
{{< /section-container >}}

{{< section-container class="py-16 bg-stone-900" >}}
<div class="max-w-5xl mx-auto">
  <h2 class="text-3xl md:text-4xl font-bold text-white tracking-tight mb-10">What the image does</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div class="bg-ink/5 p-8 rounded-xl border border-ink/10">
      <h3 class="text-2xl font-bold text-white mb-4">Installs from one stick</h3>
      <p class="text-slate-300">Runink River is a bootable installer. You write it to a USB stick, start the machine from it, and it sets up the whole box. Every box set up from the same image comes out the same way.</p>
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
    Runink River is being prepared as an open-source project, with a draft charter written for a
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
      The Runink River dog is the mascot for Runink River and the people who build on it. It is the
      herding dog from the Runink mark as a brown-and-white puppy, grinning over the
      front of a log raft on its way down the river.
    </p>
    <p class="text-lg text-ink-2 leading-relaxed mb-4">
      <!-- Terms summarise LicenseRef-Runink-Trademark as published in the river
           repository (LICENSES/LicenseRef-Runink-Trademark.txt). Grant nothing here
           that text does not grant. The owner may later choose a CNCF-style
           press-use clause; until then, use needs written permission. -->
      <strong class="text-white">Terms of use.</strong> The mascot is a Runink brand
      asset. "Runink" and the Runink logo are Runink trademarks. All rights reserved:
      no licence is granted to copy, change or share these files, or to use the marks,
      except as part of unchanged Runink River releases built and published by Runink, or with
      Runink's written permission. The licences that cover the rest of Runink River do
      not apply to them. To ask for permission,
      <a href="{{< contacturl >}}" class="text-signal underline decoration-signal/40 hover:decoration-signal">write to us</a>.
    </p>
    <p class="text-sm font-bold uppercase tracking-[0.2em] text-signal mb-3">For press and partners with permission</p>
    <ul class="text-lg text-ink-2 leading-relaxed space-y-2">
      <li><a href="/images/brand/river-mascot.svg" download class="text-signal underline decoration-signal/40 hover:decoration-signal">Runink River mascot, SVG</a> (6 KB, any size)</li>
      <li><a href="/images/brand/river-mascot.png" download class="text-signal underline decoration-signal/40 hover:decoration-signal">Runink River mascot, PNG</a> (512 × 512, transparent)</li>
      <li><a href="/images/brand/river-og.png" download class="text-signal underline decoration-signal/40 hover:decoration-signal">Share card, PNG</a> (1200 × 675)</li>
    </ul>
  </div>
  <div class="grid grid-cols-2 gap-4" aria-hidden="true">
    <div class="rk-swatch-print rounded-xl p-4" style="background:#fdf5e6"><img src="/images/brand/river-mascot.svg" width="160" height="160" alt="" class="w-full h-auto"></div>
    <div class="rk-swatch-print rounded-xl p-4" style="background:#1d2b3a"><img src="/images/brand/river-mascot.svg" width="160" height="160" alt="" class="w-full h-auto"></div>
    <p class="col-span-2 text-sm text-ink-2">On light and on dark. The dark outline and the cream and brown fills carry it on either.</p>
  </div>
</div>
{{< /section-container >}}
