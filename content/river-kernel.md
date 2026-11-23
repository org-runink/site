---
title: "linux-runink: the Runink River kernel"
url: "/river/kernel/"
layout: "simple"
seo_title: "linux-runink: the Runink River kernel for Arch Linux"
seo_description: "linux-runink is the zen-based kernel of Runink River, tuned for data servers and hardened, and packaged for Arch Linux in the AUR."
description: "linux-runink is the kernel of Runink River: the zen kernel, tuned for long data jobs instead of desktop response, with extra hardening, built for x86-64-v3 and packaged for Arch Linux in the AUR."
# Every claim below is a line of build/pkgbuilds/runink-kernel/config.delta or
# config.require in org-runink/river at the signed tag runink-os-2026.11.1
# (commit e9eef9b2), compared with config.base, which is the linux-zen config.
# Symbols that linux-zen already sets the same way (module signing, the LSM order,
# hardened usercopy, KASLR) are left out on purpose: they are not a difference.
# The AUR package is packaging/aur/linux-runink in the same repository.
# English only, like /river/, so no translation is left behind.
---

**linux-runink** is the kernel of [Runink River](/river/), the open-source
workstation operating system from Runink. It starts from the
[zen kernel](https://github.com/zen-kernel/zen-kernel), the same source that
Arch Linux builds `linux-zen` from, and changes three things: how it shares the
processor, how much it trusts itself, and which processors it is built for.
It is also packaged for Arch Linux, as a community package in the AUR.

---

## How it differs from linux-zen

### Tuned for long data jobs, not for desktop response

zen tunes the kernel so a desktop answers fast. Runink River runs data pipelines
and analytics, where the long job matters more than the next click. So
linux-runink turns zen's desktop tuning off and sets these defaults instead:

* **Timer at 250 Hz** instead of 1000 Hz, the kernel's own suggested value for
  servers.
* **Lazy preemption** instead of full preemption, so a busy job is interrupted
  less often. You can still boot with `preempt=full`.
* **Huge memory pages on request** (`madvise`) instead of always. A database or
  JVM that asks for huge pages gets them, and other programs avoid the stalls.
* **BBR congestion control and the `fq` queue** by default, for steady network
  transfers under load.
* **No automatic grouping by login session**, so `nice` works across sessions,
  and **per-CPU work queues** for better cache use.

Each of these can still be changed at boot or at run time. The reasons, with
sources, are in [the kernel notes](https://github.com/org-runink/river/blob/main/docs/KERNEL.md).

### Extra hardening

On top of what linux-zen already does, linux-runink:

* clears memory when it is freed, not only when it is handed out;
* keeps kernel memory caches apart instead of merging them;
* stops on detected data corruption instead of carrying on;
* starts the lockdown security module early in boot;
* leaves out `/dev/mem` and `/proc/kcore`, which expose memory directly;
* leaves out kexec, crash dumps and hibernation, so no other kernel can be
  loaded without a reboot and no memory image is written to disk.

### Built for x86-64-v3

The kernel is compiled for x86-64-v3 processors, the level that adds AVX2, BMI2, FMA
and MOVBE to the 64-bit x86 baseline. The build stops on a processor without v3, so
it never makes a kernel that cannot boot there. Set `RUNINK_MARCH=x86-64` before
the build to make a kernel for any 64-bit x86 processor.

### The build checks its own settings

Every setting above is listed in a file named `config.require`. The build reads
the finished configuration and stops if any line is wrong. A new kernel version
cannot drop one of these settings without someone noticing.

---

## Install it on Arch Linux

linux-runink is in the [AUR](https://aur.archlinux.org/packages/linux-runink).
It is a community package: Arch Linux does not make or endorse it. It builds
from source on your machine.

```sh
git clone https://aur.archlinux.org/linux-runink.git
cd linux-runink
gpg --import keys/pgp/*.asc
makepkg -si
```

The `gpg` step imports the public keys of the kernel and zen maintainers, so the
build can check their signatures on the source. The package installs next to
your current kernel and adds its own boot entry through mkinitcpio. Add
`linux-runink-headers` if you build out-of-tree modules.

---

## Where the source lives

Everything is public in the
[Runink River repository](https://github.com/org-runink/river):

* `build/pkgbuilds/runink-kernel/` holds the kernel package used for Runink River
  and the three configuration files: `config.base` (the zen configuration),
  `config.delta` (the changes above) and `config.require` (the checks).
* `packaging/aur/linux-runink/` holds the AUR package.
* `docs/KERNEL.md` explains each setting.

The kernel is GPL-2.0-only, like Linux. The AUR package downloads the kernel.org
source and the zen patch, checks both signatures, and takes the configuration
files from a signed release tag of the repository, each pinned by checksum.
