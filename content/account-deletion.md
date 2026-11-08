---
title: "Delete your account"
description: "How to ask Runink to delete your account and the data tied to it, for each Runink app."
layout: "simple"
---

This page explains how to ask for your account to be deleted in each app
Runink publishes. Where an app cannot delete an account by itself, deletion is
done on request.

---

## FACE (`org.runink.face`)

FACE is a business console. Your organisation's administrator adds you, and
can remove you.

**In the app:** Settings → Account → Your data → Delete my account. Type your
own email address to confirm.

**Deleted:**

* your sign-in account: email address, password hash, two-factor secret and
  role;
* every session of yours, on every device, which end at once;
* the follow-up flows you own, with their runs, their chat and the proposals
  made for you;
* the scenarios, items and terms you typed into the scenario builder;
* the mailbox connections you started and did not finish;
* the brief suggestions you dismissed;
* on your device: the cached data and your saved role.

You are signed out on every device first, then your data is deleted, then the
account record. Earlier encrypted versions of these records stay in FACE's
storage history until it is compacted and cleaned; nobody can read them
without FACE's key. A personal brief you saved keeps a code derived from your
account and is not deleted yet.

**What your organisation keeps:** what belongs to your organisation is not
yours personally and stays: briefs, personas, connections, schedules, the run
history, the mailbox your organisation connected, the follow-up tasks flows
created, the audit log and the decision records. You are not named in them
afterwards: where a retained record names you, it shows a fixed code,
"former-member-" and ten characters, instead (the same code for the same person
every time). The decision log is a hash chain and is not rewritten: its stored
entries keep an anonymous account number that no longer links to any account or
email address. One audit entry records that the deletion happened (when, which
classes of data, a hash standing for the account), with no content and no
address.

**Not reached by the in-app deletion:** an older copy of FACE's sign-in table,
from before FACE moved its storage, is keyed by your email address and is not
reached by the in-app deletion. An operator removes it on request: write to
**privacy@runink.org** from your sign-in address. Also not rewritten: fetch run
history, archive marks, trend-topic exclusions and uploaded-document manifests
(they keep the opaque account number, not an email).

**After the deletion:** FACE's access list is built from add-users requests
that FACE itself cannot change, so deleting your account does not remove your
address from it. If it is still listed, signing in with Google again creates a
new, empty account; ask your organisation's administrator to remove you.

**Without the app:** email **privacy@runink.org** from your sign-in address
with the subject "Delete my FACE account". For a copy of your data first, use
the subject "Export my FACE data" (there is no in-app export).

The [FACE privacy policy](/face-privacy/) describes everything FACE stores.

---

## PULSE (`org.runink.pulse`)

PULSE is a marketing workspace your organisation buys per seat. You sign in
with Google.

**In the app:** Settings › Delete my account. Type your account's email to
confirm. PULSE signs you out everywhere, then deletes your account and your
data in PULSE, including the files you own: uploaded logos and brand assets,
avatar images and voice samples, generated creatives, podcasts, audiobooks and
videos, and files attached to your audits. Files made for an agency client
belong to that client and are deleted when the client's account is deleted. A
deployment's only admin must make another member an admin first.

**Some copies stay for now:** earlier versions in storage history, and entries
in append-only logs. To have those erased, email **privacy@runink.org** from
the address you sign in with, with the subject "Delete my PULSE account". If
you cannot sign in, use the same address.

**Kept:** posts and messages already published stay on the networks they were
sent to (LinkedIn, Instagram, YouTube, email, WhatsApp, SMS); Runink cannot
remove them there.

Deleting your account does not remove your access: signing in with Google again
creates a new, empty account. The [PULSE privacy policy](/pulse-privacy/)
describes everything PULSE stores.

---

## Luna (`org.runink.luna`)

Luna has no delete button in the app today. Deletion is done by an operator on
request.

**To ask for deletion:** email **privacy@runink.org** from the Google account you
sign in to Luna with, with the subject "Delete my Luna account". We answer
within 30 days. Your access to Luna (the allowlist) and your data are separate:
you can ask for either or both.

What Luna stores is described in the [Luna privacy policy](/luna-privacy/).

---

## TIDE (`org.runink.tide`)

**In the app:** Settings › User › Delete my account: type your e-mail to
confirm. All your sessions end first, then TIDE deletes your personas, your
briefs (including briefs sent to you), your seat, your admin role, and your
project chats and Ask TIDE history.

**Some records are kept:** the audit log, the records of a subscription you
bought, and organisation records that name you as the person who acted. These
are encrypted at rest. If you bought a subscription that is still active, end
it in Manage billing first.

Your organisation's access grant stays until your administrator removes it.
Earlier versions in storage history, and entries in append-only logs, stay
until they are erased; to have them erased, email **privacy@runink.org** from
the address you sign in with.

The [TIDE privacy policy](/tide-privacy/) describes what TIDE stores.

---

Questions about any of this: **privacy@runink.org**.
