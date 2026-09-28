---
title: "Runink River"
layout: "product"
description: "Runink River is a developer workstation on s6: KDE Plasma, the linux-runink kernel, an encrypted ZFS root with boot environments, a default-deny firewall, river-sandbox and a graphical installer, for data and AI work on hardware you own."
# Where this page comes from. It is the Runink River landing page the owner approved
# for the river repository's documentation site (branch docs/hugo-site, river#128),
# moved here so runink.org holds the product page and the river docs hold the detail.
# Every claim is one that site's feature pages back (website/content/docs/features/*
# and getting-started/install.md on that branch). Keep additions to what the river
# repository can show.
#
# What changed from the page this replaces: Runink River used to be described here as
# the Runink sovereignty server. It is the developer workstation now; the server image
# that carries Runink CORE is a separate, downstream distribution. The mascot and
# brand-files block moved to the river repository's own documentation (owner,
# 2026-09-26: "put this within the river repo").
#
# Links (checked 2026-09-28, CONTENT.md rule 8): the source repository
# https://github.com/org-runink/river is public, and the documentation is served at
# https://docs.runink.org/river/. Both answer 200, so the page links them.
#
# The one-line install (the steps band's terminal) runs the repository's install.sh.
# Every claim about it was checked against install.sh on main: it downloads the latest
# release, verifies SHA256SUMS.asc against the pinned Release Engineering key
# (fingerprint below, also in the repository's KEYS file and at
# /.well-known/gpg-key.txt), checks the ISO's sha256, refuses anything that fails, never
# runs anything as root itself, and fetches only the release files and the key. Inside
# the live environment the same command probes the hardware, plans the install and
# hands over to the installer. Keep the fingerprint in step with install.sh's
# KEY_FPR_PINNED.
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
  title: "The developer workstation that runs on `s6`."
  promise: "KDE Plasma on s6, never systemd. The zen-based `linux-runink` kernel, an encrypted ZFS root with boot environments, a default-deny firewall and a graphical installer, for data, analytics and AI work on hardware you own."
  cta:
    - { text: "Install with one command", url: "#rp-steps-title", style: "primary" }
    - { text: "Read the documentation", url: "https://docs.runink.org/river/", style: "ghost" }
  fine: "MIT userspace · GPL-2.0-only kernel · CDDL-1.0 ZFS · CC-BY-4.0 artwork"
  shots:
    - { src: "/images/products/river/desktop.jpg", w: 1280, h: 800, bar: "Runink River · Plasma", alt: "The installed Runink River desktop: KDE Plasma on the river-lines wallpaper, with the Runink River mark in the corner." }
    - { src: "/images/products/river/installer-welcome.jpg", w: 1280, h: 800, bar: "Install Runink River", alt: "The graphical installer's welcome screen: choose English, Spanish, French or Portuguese and a keyboard layout, then Next." }
  mission: "One init. One kernel. One encrypted pool. *Nothing phones home.*"
  facts:
    - { k: "7.2.x zen", v: "one kernel, built from signed sources" }
    - { k: "aes-256-gcm", v: "every ZFS dataset, from the first boot" }
    - { k: "s6", v: "PID 1 and every service on the machine" }
    - { k: "4 languages", v: "English, Spanish, French and Portuguese in the installer" }
  split:
    eyebrow: "Graphical installer"
    heading: "Click Next. It knows your machine."
    body:
      - "The installer is written for someone who has never installed an operating system. It measures the processor, memory and disks, and plans the install before it touches anything. You answer a few plain questions: language, keyboard, network, a name and a password."
    list:
      - "**One erase gate.** The disks it will erase are listed with their serial numbers, and you type a word to confirm."
      - "**With or without internet.** It copies the running system onto your disk, so it needs nothing from the network."
      - "**A recovery key, shown once.** Write it down or save it to a second stick before you go on."
    shot: { src: "/images/products/river/installer-disk.jpg", w: 1280, h: 800, bar: "Your computer", alt: "The installer's machine screen: processor and memory, and the one disk it will erase, shown with its serial number." }
  features:
    id: "inside"
    heading: "Built for people who ship data work"
    intro: "Six parts, each small enough to read and each chosen so the machine behaves the same way every time it starts."
    items:
      - { k: "init", title: "s6, never systemd", body: "s6 starts the machine and supervises every service. The desktop, Bluetooth and printing are s6 services too. Services are plain directories you can read, not unit files." }
      - { k: "kernel", title: "linux-runink", body: "The zen kernel on the 7.2.x stable series, tuned for long data jobs: 250 Hz, lazy preemption, huge pages on request, BBR. The desktop boots with full preemption, so Plasma stays quick." }
      - { k: "storage", title: "Encrypted ZFS, with rollback", body: "Every dataset sits under one encryption root, and `/home` has its own. Take a snapshot of the system before an update, and one reboot takes you back to it. Swap lives in RAM." }
      - { k: "network", title: "Default-deny firewall", body: "Nothing gets in unless you open it, and everything you start can go out. It loads before the network does. Wi-Fi, DHCP and printers on your network keep working, and SSH stays closed until you list it." }
      - { k: "sandbox", title: "river-sandbox", body: "Run a build script from a pull request, or code a model wrote, with no network unless you ask and no way to reach your keys or secrets. A request for one of those folders is refused, not trimmed." }
      - { k: "security", title: "Kept locked down", body: "CPU mitigations and memory hardening stay on. Modules are signed with a key made for each build. Secret files are owned by one account, and their modes are checked again at every boot." }
  steps:
    heading: "Install with one command"
    intro: "Run this on any Linux machine. It downloads the latest Runink River release and checks it against the Runink River Release Engineering key, fingerprint `95C0 A7B9 7D54 7413 E426 60DD B06F E756 26F1 5BF3`, published at [runink.org/.well-known/gpg-key.txt](/.well-known/gpg-key.txt) and in the repository's KEYS file. It also checks the image's sha256. An image that fails either check is refused."
    items:
      - { title: "Download and verify", body: "The command runs nothing as root: a step that needs root prints the exact command for you to run. It fetches only the release files and the public key. Add `| sh -s -- --dry-run` to check everything and change nothing, or `--out DIR` to save the image to a folder." }
      - { title: "Write a USB stick", body: "`--write /dev/sdX` writes the verified image to the stick once you confirm the stick's serial number. It erases the stick. Any image writer works too." }
      - { title: "Boot and click Next", body: "On the live USB, the same command reads your hardware, shows the install plan and hands over to the installer. Pick a language, confirm the disk, set a name and a password." }
      - { title: "Log in", body: "The installer says the whole install takes about ten minutes. Then you type your disk passphrase and log in to your own workstation." }
    term:
      bar: "Any Linux machine"
      lines:
        - "curl -fsSL https://raw.githubusercontent.com/org-runink/river/main/install.sh | sh"
  papers:
    heading: "Read the source and the documentation"
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
---
