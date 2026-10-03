---
title: "Runink River"
layout: "product"
description: "Runink River is a free, open-source workstation operating system for data, analytics and AI work on hardware you own. The disk is encrypted, a bad update rolls back with one reboot, nothing gets in unless you open it, and there is no per-seat licence."
# Where this page comes from. It is the Runink River landing page the owner approved
# for the river repository's documentation site (branch docs/hugo-site, river#128),
# moved here so runink.org holds the product page and the river docs hold the detail.
# Every claim is one that site's feature pages back (website/content/docs/features/*
# and getting-started/install.md on that branch). Keep additions to what the river
# repository can show.
#
# What changed from the page this replaces: Runink River used to be described here as
# the Runink sovereignty server. It is the developer workstation now; the server image
# that carries Runink TIDE is a separate, downstream distribution. The mascot and
# brand-files block moved to the river repository's own documentation (owner,
# 2026-09-26: "put this within the river repo").
#
# Links (checked 2026-09-28, CONTENT.md rule 8): the source repository
# https://github.com/org-runink/river is public, and the documentation is served at
# https://docs.runink.org/river/. Both answer 200, so the page links them.
#
# 2026-09-29: each "Built for people who ship data work" card now links the matching
# docs page, the installer split section links the installer guide, and the closing
# band links the brand-assets page. Every path was curled for a 200 and a matching
# <title> against docs.runink.org/river/sitemap.xml before use (none of these are
# guesses): docs/features/{s6,kernel,zfs-encryption,firewall,sandbox}/, docs/security/,
# docs/features/installer/, docs/brand/. The security card links docs/security/
# (the section index) rather than a docs/features/security/ page, since the sitemap
# has no such page.
#
# 2026-09-30 (mine): removed the rp.steps band (the "Install with one command" walkthrough
# and its curl|sh one-liner). It described install.sh fetching /releases/latest -- and
# there is no release published yet (`gh release list -R org-runink/river` returns
# nothing; install.sh's own RELEASE_URL is releases/latest/download, which 404s with none
# published). CONTENT.md rule 4 (a claim needing a footnote does not get a footnote, it
# does not get published) and rule 2 (say only what is there) both rule out a
# coming-soon-style note as the fix -- so the section comes out entirely rather than
# staying with an added disclaimer, and goes back in once a signed release exists to
# point it at. The hero's primary CTA moved from
# "Install with one command" (-> #rp-steps-title) to "Get the source" (-> the GitHub
# repo), which is true today. Also warmed the hero title and the mission line for a
# non-technical reader -- the owner's own framing: "juicy [technical] details" stay in
# rp.features (each card already links its docs page) and papers; the hero now leads
# with why an open-source workstation matters before naming the kernel.
#
# 2026-10-01 (mine): CONTENT.md rule 3 pass — same business-value/less-jargon restyle
# already done to the TIDE/FACE/PULSE product pages, applied here. Changed: the ZFS
# "boot environments" / "encryption root" vocabulary (hero promise, meta description,
# the storage card body) into plain language — "an encrypted ZFS disk with snapshot
# rollback" and "the whole disk is encrypted, and `/home` is encrypted separately" —
# since a buyer has no use for either implementation term, and the storage card
# already explained the rollback mechanism in plain English without naming it. The
# kernel card's engineering parameter list ("250 Hz, lazy preemption, huge pages on
# request, BBR") became outcome language: what a heavy background job does to the
# desktop and to memory and network, not the scheduler/timer settings that produce
# it. The "s6, never systemd" feature-card title became "See exactly what's
# running" — the business value is transparency about what's running, which the
# card's own body already states ("plain directories you can read, not unit
# files"); s6 is still named there, once, for a reader who wants the precise term.
# The matching "s6 / PID 1" fact-card value became "one program starts and
# supervises everything" for the same reason, keeping "s6" as the stat label.
# Left alone, on purpose: the "RIVER · Raft-Integrated Validated Event Runtime"
# lockup — it is the same deliberate, owner-approved acronym-spelling pattern as
# Runink TIDE's "Trusted Intelligence for Developer & Data Experience" lockup, and it is
# repeated verbatim on the homepage (all four languages) and content/products/_index.md;
# changing it here only would make this page disagree with the rest of the site, and
# those pages are out of scope for a river.md-only pass. Also left alone: the
# "default-deny firewall" wording (already plain) and the "aes-256-gcm" /
# "7.2.x zen" fact-card stats (precise, correct technical names used the same way
# the FACE/TIDE passes kept other exact figures and terms). No availability,
# release-status or CTA wording touched: "Get the source" / "Read the
# documentation" and their URLs are byte-for-byte what they were before this pass.
#
# 2026-10-03 (mine): business-value pass, same brief as the TIDE/FACE/PULSE pages. The
# page now leads with the reader's week, not with the parts list: days lost setting up a
# new machine (the installer split), a laptop that can't be trusted with sensitive data,
# an update that breaks and costs a day, a long data job that slows to a crawl, code you
# didn't write, and paying for cloud workstations to do work your own hardware can do.
# Each card names the burden, says what River does about it in plain verbs, and stops.
# The rp.steps band is back, with no terminal block and no install command: it now holds
# the three cost lines (no per-seat licence, hardware you own put to work, fewer lost
# days), with no figures (CONTENT.md rule 1). Technology names (s6, ZFS, KDE Plasma,
# linux-runink) moved out of the hero and down to the card labels and bodies, where the
# technical evaluator reads them. Every claim is one the cards already made, or the
# river docs' feature pages state; nothing new. Still no install command, download or
# release link, and the page does not promise an installed, working desktop: the first
# screenshot's alt text dropped "installed" for that reason. Lockup, CTAs and their URLs
# are unchanged. No line promises a responsive desktop either (the kernel card speaks to
# the job's pace, not the screen), and the encryption card says a lost machine is
# protected when it is switched off, since a running or sleeping one has its disks unlocked.
#
# English only, like /downloads/, so no translation is left behind.
#
# The share card: 1200x675, the site's og:image frame (see baseof.html). Rendered
# from the page's own fonts and palette with headless Chromium; see the PR for the
# source HTML.
image: "/images/products/river-og.jpg"
rp:
  logo: "/images/brand/river-mark.svg"
  lockup: "RIVER · Raft-Integrated Validated Event Runtime"
  title: "Put the machines you already own to work on your data."
  promise: "Runink River is a free, open-source operating system for data, analytics and AI workstations. The disk is locked from the first boot. A bad update rolls back with one reboot. A long data job keeps its pace under load. There is no per-seat licence, and every line is public."
  cta:
    - { text: "Get the source", url: "https://github.com/org-runink/river", style: "primary" }
    - { text: "Read the documentation", url: "https://docs.runink.org/river/", style: "ghost" }
  fine: "MIT userspace · GPL-2.0-only kernel · CDDL-1.0 ZFS · CC-BY-4.0 artwork"
  shots:
    - { src: "/images/products/river/desktop.jpg", w: 1280, h: 800, bar: "Runink River · Plasma", alt: "The Runink River desktop: KDE Plasma on the river-lines wallpaper, with the Runink River mark in the corner." }
    - { src: "/images/products/river/installer-welcome.jpg", w: 1280, h: 800, bar: "Install Runink River", alt: "The graphical installer's welcome screen: choose English, Spanish, French or Portuguese and a keyboard layout, then Next." }
  mission: "You shouldn't have to trust an operating system you can't look inside. *So we opened ours.*"
  facts:
    - { k: "No licence fee", v: "free to use on every machine you own" }
    - { k: "Locked disk", v: "your files and the system encrypted, from the first boot" }
    - { k: "One reboot", v: "back to the system you had before the update" }
    - { k: "4 languages", v: "English, Spanish, French and Portuguese in the installer" }
  split:
    eyebrow: "A new machine"
    heading: "A new laptop shouldn't cost days of setup."
    body:
      - "Someone in IT, or the analyst themselves, loses days getting a new machine ready. The River installer is written for someone who has never installed an operating system. It reads the processor, memory and disks, and plans the install before it touches anything. You answer a few plain questions: language, keyboard, network, a name and a password."
      - "That is staff time back, for IT and for the person waiting on the machine."
    list:
      - "**You approve the erase.** The disks it will erase are listed with their serial numbers, and you type a word to confirm."
      - "**With or without internet.** It copies the running system onto your disk, so it needs nothing from the network."
      - "**A recovery key, shown once.** Write it down or save it to a second stick before you go on."
    shot: { src: "/images/products/river/installer-disk.jpg", w: 1280, h: 800, bar: "Your computer", alt: "The installer's machine screen: processor and memory, and the one disk it will erase, shown with its serial number." }
    link: { text: "Read the installer guide", url: "https://docs.runink.org/river/docs/features/installer/" }
  features:
    id: "inside"
    heading: "The bad days it is built to prevent"
    intro: "Each card starts with a day your team already knows. Then it says what River does about it. The technical name is on the label, and the docs page behind each card has the detail."
    items:
      - { k: "storage · ZFS", title: "An update breaks, and the day is gone", body: "Take a snapshot of the system before an update. If the update goes wrong, one reboot takes you back to it, and your files are not touched. The fix is a restart, not a rebuild.", url: "https://docs.runink.org/river/docs/features/zfs-encryption/" }
      - { k: "encryption", title: "Sensitive data on a laptop that can walk away", body: "The whole disk is encrypted from the first boot, and `/home` is encrypted separately from the rest of the system. The key is typed at start-up, so a lost machine that is switched off holds files nobody can read without the key. Swap lives in RAM, so nothing spills to disk unlocked.", url: "https://docs.runink.org/river/docs/features/zfs-encryption/" }
      - { k: "kernel · linux-runink", title: "A long data job slows to a crawl", body: "The kernel keeps a long data job running instead of switching away from it, hands out memory in larger blocks for big data sets, and keeps network transfers fast under load.", url: "https://docs.runink.org/river/docs/features/kernel/" }
      - { k: "sandbox", title: "Running code you didn't write", body: "A build script from a pull request, a tool an AI assistant wrote, a dependency's install hook. `river-sandbox` runs it with no network unless you ask, and no way to reach your keys or secrets. A request for one of those folders is refused, not trimmed.", url: "https://docs.runink.org/river/docs/features/sandbox/" }
      - { k: "network · firewall", title: "Something on the network you never opened", body: "Nothing gets in unless you open it, and everything you start can go out. The firewall loads before the network does. Wi-Fi, DHCP and printers keep working, and SSH stays closed until you list it.", url: "https://docs.runink.org/river/docs/features/firewall/" }
      - { k: "init · s6 · security", title: "Nobody can say what is running", body: "One program, s6, starts the machine and watches every service. Services are plain directories IT can read, not unit files. Hardening stays on, modules are signed with a key made for each build, and secret files are checked again at every boot.", url: "https://docs.runink.org/river/docs/security/" }
  steps:
    heading: "What it's worth to your budget"
    intro: "We put no number here. Your own records show what each line costs you today."
    items:
      - { title: "No per-seat licence", body: "River is free and open source. Adding an analyst adds hardware, not an operating-system bill. **Opex.**" }
      - { title: "Hardware you own, put to work", body: "Data and AI work that would go to a rented cloud workstation can run on the laptops and desktops you already bought. **Capex** you have spent, and **Opex** you don't add." }
      - { title: "Fewer lost days", body: "Less time setting up machines, rebuilding after a bad update, or waiting on a slow job. Count it in staff hours. **Opex.**" }
  papers:
    heading: "See it for yourself"
    items:
      - { url: "https://docs.runink.org/river/", title: "Runink River documentation", note: "Install, features, the sandbox, the firewall and the release process.", cta: "Open the docs" }
      - { url: "https://github.com/org-runink/river", title: "Source on GitHub", note: "The distribution, the installer, install.sh and the KEYS file.", cta: "Open the repository" }
  final:
    heading: "Want Runink River on your team's machines?"
    body: "Tell us about the work your developers and analysts do, and the hardware they do it on. We will walk you through Runink River on a machine like theirs."
    tagline: true
    cta:
      - { text: "Book a consultation", url: "/#contact", style: "primary" }
      - { text: "Explore Runink's products", url: "/products/", style: "ghost" }
      - { text: "Brand assets", url: "https://docs.runink.org/river/docs/brand/", style: "ghost" }
---
