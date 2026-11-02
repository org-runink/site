---
title: "FACE — Privacy Policy"
description: "How the FACE mobile app (org.runink.face) handles your data."
layout: "simple"
---

This policy covers the **FACE** mobile app published by Runink (Android
application id `org.runink.face`) and the FACE deployment it connects to. FACE
is a business console. The [general privacy policy](/privacy) covers your
organisation's account, its billing, and the operational data FACE processes
for it. This page covers what the app itself adds: sign-in, the camera, the
microphone, and what stays on the phone.

---

## Who can use FACE

FACE is **not open to the public**. Neither the app nor the deployment has a
sign-up form, and you cannot register yourself.

* An administrator of your organisation's FACE instance adds you on the
  instance's Admin page. That page saves the grant to the instance's member
  list.
* **Google sign-in** works only for addresses on that list. A Google account
  that is not on it is refused. If the instance has Google sign-in configured
  but no list, nobody can sign in with Google. The first time a listed address
  signs in, FACE creates an account for it with the role the administrator
  granted.
* **Email and password** sign-in is mainly for the instance's operator-managed
  administrator account. An instance can switch password sign-in off for
  everyone else.
* When an administrator removes you, FACE deletes your account record and ends
  your open sessions. Until the platform refreshes the instance's sign-in list
  and FACE restarts, a removed address can still sign in with Google, and that
  sign-in creates a new read-only account. The Admin page says so when it
  happens.

---

## What FACE collects

### Your account

* **Email address.** With Google sign-in, the app asks Google for your basic
  profile (`openid`, `email`, `profile`). It sends only Google's signed identity
  token to your FACE deployment. FACE accepts the token only when Google
  reports the email as verified. We never see your Google password.
* **Your account record holds:** an internal id, your email address, a hash of
  your password (bcrypt), your two-factor secret if you set one up, your role,
  and the date the account was created. It holds **no name**. A Google-created
  account gets a random password that nobody knows.
* **Your session** records who you are (id, email, role), your organisation's
  tenant, and how you signed in. It expires 12 hours after sign-in.
  **Signing out** ends every session of yours on the server first. Only then is
  the token removed from the phone.
* **Server logs** record sign-in events, including the email address that
  signed in or was refused.

### Camera

FACE uses the camera on one screen, and only while that screen is open.

* **Live detection.** While the camera screen is open, the app keeps sending
  single frames to **your FACE deployment** so it can draw boxes, labels and
  any QR codes or barcodes (QR, Code 128, EAN/UPC, DataMatrix) over the
  preview. The deployment's own detector and its own code reader handle these
  frames, with no AI model involved. **These frames are not kept.** They write
  no record, no history entry and no stored image. What you see on screen is
  the only output.
* **Photos you take.** A photo you take with the shutter is attached to your
  question in the app. **It is sent to the deployment for analysis only when
  you press Grade.** Grading sends that one frame to the deployment's vision
  model. FACE stores the **result**, not the photo: what was recognised, its
  material, condition grade and damage estimate, the time, and the camera
  label. We call this a "sighting", and FACE reads back 30 days of sightings.
* **Annotated evidence images.** Each FACE instance can choose to keep an
  annotated copy of a graded frame (the picture with FACE's boxes drawn on it).
  **This is off unless the instance's operator turns it on.** When it is on:
  * A frame is kept only if grading found an object to inspect. A frame whose
    only content is people is not kept, and neither is a frame where nothing
    was found.
  * FACE serves the image for at most 30 days.
  * Any signed-in member of the same organisation can open it, whatever their
    role.
  * The un-annotated original is never kept.
  * To be precise about the 30 days: they are a limit on **showing** the image,
    not a deletion. FACE's storage layer cannot delete what it wrote. The
    encrypted file stays in storage until the operator removes it with a
    storage expiry rule.
* **Video clips** recorded in the assistant panel are attached to your question
  as a file. The deployment samples frames from the clip and reads them the way
  it reads a photo. The clip is written to a temporary file for sampling, and
  that file is deleted as soon as sampling ends. What FACE keeps is the text it
  read from the clip (see "Files you attach").
* **Location metadata.** FACE does not ask for location permission. Photos
  taken inside the app therefore carry no GPS position. The app does **not**
  strip other metadata before sending.

### Files you attach

* Files you pick from the phone are sent to the deployment **byte for byte,
  including any metadata they carry** (for example, the GPS tags in a photo
  taken by another camera app).
* The deployment reads each file in memory: text, tables and form fields. It
  stores **what it read**, up to 64 KB of text per file, with the run that
  used it, so that the run's history can show it later. It does not store the
  file itself.
* **Site plans** are different: a site plan you upload on the Twins map is
  stored as the original file.

### Microphone and voice

FACE uses the microphone only when you tap a microphone button. There is no
background listening and no wake word.

* **The command bar and the Fetch Center microphone.** These record your voice
  command and send the audio to **your FACE deployment**, where FACE's own
  speech model turns it into text. The audio is not stored. FACE's voice audit
  log records **sizes, never words**: how many bytes were heard, how many
  characters were spoken, which command it was, and whether it succeeded. The
  text then becomes your question, and a question is kept the way a typed one
  is.
* **The assistant panel's microphone** uses the phone's **own speech
  recogniser**, not FACE's model. The command bar also falls back to the
  phone's recogniser when the deployment's speech service cannot be reached.
  In both cases your voice goes to whatever recogniser the phone provides, and
  only the resulting text reaches FACE. On most Android phones that recogniser
  is Google's, and Google's terms govern it, not ours.
* **Spoken replies.** FACE's own text-to-speech engine produces them on the
  deployment. It keeps the generated audio on the deployment's disk, filed
  under a hash of the reply text, so that a repeated reply plays at once. That
  audio cache is **not** encrypted and has no expiry. When the deployment's
  voice cannot be reached, the phone's own text-to-speech engine reads the
  reply, so the reply text goes to that engine.

### On your phone

* Your **session token** is stored in Android's encrypted secure storage
  (the Keystore-backed `flutter_secure_storage`), together with your
  organisation's subscription tier. Signing out removes both.
* The app keeps a **local cache** of recent fetch runs, traces, connection
  summaries and runners, so that history opens offline. It also keeps a queue
  of changes waiting to reach the server. This cache is an ordinary,
  **unencrypted** database in the app's private storage. **Signing out clears
  it**, after your sessions end on the server; only the app's language setting
  is kept. A change that had not reached the server yet is dropped at sign-out
  rather than sent later under whoever signs in next. The cache is excluded
  from Android backup and device transfer, so it never leaves the phone.

---

## What FACE does **not** collect

* **No advertising, no analytics and no crash-reporting SDK.** The app
  contains no Firebase, Crashlytics, Sentry or any analytics or attribution
  library.
* **No location.** The app does not request location permission. The Twins
  map loads its map tiles only from your FACE deployment.
* **No contacts, calendar, SMS, call log, photo library access, or installed-app
  list.** The app's Android permissions, as built, are: internet access,
  network state, camera, microphone, and audio settings. Files reach FACE only
  through the system file picker, when you choose them.

---

## Where your data goes

**The app talks to one server: your organisation's FACE deployment.** Its AI
models (language, vision and speech) run on machines Runink operates, or on
your organisation's own machines where its plan says so. **FACE has no code
path that sends your camera frames, photos, voice or questions to an outside AI
provider.**

### Third parties the app itself contacts

* **Google**, for sign-in, through Google Play services on the phone. This
  happens only when you choose Google sign-in.
* **Your phone's own speech recogniser and text-to-speech engine**, only in the
  cases described under "Microphone and voice".

### Third parties your deployment may contact for your organisation

These are server-side features of FACE, not of the app. The
[general policy](/privacy) covers them:

* **Public web search.** When an analysis searches the public web, the
  deployment sends search queries to public search engines (DuckDuckGo, Bing,
  Brave, Mojeek, Startpage) and reads the pages they return.
* **Messaging carrier.** If your organisation configures one, a result you
  choose to send by WhatsApp, SMS or voice call goes through that carrier.
  The app shows you a preview and asks you to confirm each send.

We do not sell your data, and we do not share it with anyone for advertising.

---

## Data FACE processes for your organisation

FACE connects to your organisation's own systems, such as ERPs, files, cameras
and sensors, using credentials your administrators enter. It reads from them
during fetch runs and keeps the results, run history and decisions for your
organisation. That processing, and your rights over it, are covered by the
[general privacy policy](/privacy). Connection credentials and FACE's account
and application tables are encrypted at rest (see "Security").

---

## Security

* **In transit:** release builds of the app connect to the deployment over
  TLS. Every request after sign-in carries your session token. Every request
  is checked against your organisation's tenant, so FACE refuses to serve one
  organisation's records to another.
* **At rest:** accounts, sessions, connection credentials and FACE's
  application tables are written through an encrypted store, using envelope
  encryption (AES-GCM) under a key derived from the platform's key. Retained
  evidence images are sealed the same way. Two limits we state rather than
  imply otherwise: storage **file names** are not encrypted, so anyone who can
  list the storage learns the organisation, date and camera label of a
  retained image without opening it. The spoken-reply audio cache is not
  encrypted.
* **Two-factor sign-in** (an authenticator app) is available for password
  accounts, and an instance can require it.

No system is perfectly secure, and we do not claim FACE is.

---

## How long we keep it

* **Sessions:** 12 hours, or until you sign out.
* **Live-detection frames:** not kept.
* **Sightings (grading results):** FACE reads back 30 days. Older records are
  not deleted automatically.
* **Annotated evidence images:** not kept unless the instance's operator turns
  them on. When on, they are served for at most 30 days and then stay in
  storage until the operator expires them.
* **Your account record:** kept until an administrator removes you, which
  deletes it.
* Everything else FACE keeps for your organisation (questions, run history,
  attachment readings) has **no automatic expiry** today.

---

## Deleting your account and your data

**The app cannot delete an account by itself.** The Profile page's "Close
account & take my data" button opens a request: it emails
**privacy@runink.org** for you and links the
[account-deletion page](/account-deletion/). Nothing is deleted from that
screen.

* Your organisation's FACE administrator can remove you from the instance on
  the Admin page. That deletes your FACE account record and ends your sessions.
* To ask for your account and the personal data tied to it to be deleted, or
  to ask what is stored about you, email **privacy@runink.org** from the
  address you sign in with. Data that belongs to your organisation, rather
  than to you personally, is deleted at your organisation's request.

---

## Your choices

* **Camera:** optional. Only the camera screen uses it.
* **Grading:** nothing you photograph is sent for grading until you press
  Grade.
* **Microphone:** optional and used only when you tap it. You can type
  instead.
* **Signing out** ends your sessions on the server and removes your token from
  the phone.
* **Access, correction, export and deletion:** email privacy@runink.org.

---

## Children

FACE is a business console. It is not directed at children, and only people an
organisation's administrator has added can use it.

---

## Changes

We will update this page when FACE's behaviour changes, and update the date
below.

---

## Contact

* **Email:** privacy@runink.org

*Last Updated: November 2026*
