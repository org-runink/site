---
title: "Luna — Privacy Policy"
description: "How the Luna mobile app (org.runink.luna) handles your data."
layout: "simple"
---

This policy covers the **Luna** mobile app published by Runink — Android
application id `org.runink.luna`, iOS bundle id `org.runink.luna` — and the
backend it talks to. It does not cover the rest of the Runink platform; for
that, see the [general privacy policy](/privacy).

Luna is a personal assistant: you talk to it, it coaches you on training,
meals and daily habits, and it remembers your conversations so the coaching
stays grounded in what you actually did.

---

## Who can use Luna

Luna is **not open to the public**. Sign-in is a fixed allowlist of Google
accounts. If your Google account is not on that list, the sign-in is refused
and no account is created for you. There is no password, no sign-up form and
no way to register yourself.

Access is granted by the operator adding your address to the allowlist. It is
removed the same way.

---

## What Luna collects

### Your account

* **Email address and display name**, from Google Sign-In. We receive these
  when Google confirms your identity; we never see your Google password.
* Your email is the account identifier. It is also written into the session
  token the app holds while you are signed in.
* Your stored data is filed under a one-way hash of your email address rather
  than the address itself, so that your address does not appear in the storage
  paths of your records. Your address itself is kept in one small file that
  maps that hash back to you.

### What you say to Luna

* **Every chat message you send and every reply Luna gives is stored.** That
  is the point of the feature — Luna's memory of your conversations is what
  lets it coach you consistently rather than starting from zero each time.
* Voice messages are transcribed and the **transcript** is stored the same way
  as a typed message. The audio recording itself is not kept.
* Because Luna is a lifestyle assistant, these conversations will often contain
  **health information** — injuries, body weight, what you ate, how a session
  went. Treat everything you say to Luna as stored.

### Your habits and plans

* Habit events you log: workouts marked done, meal-plan adherence, step counts,
  step goals, and level-up records.
* Training plans and nutrition plans, including the calorie and macronutrient
  targets derived from them.
* Your body mass, when you give it, is used to compute nutrition targets. It is
  not stored as a separate field, but it will appear inside whatever you typed
  and inside the plan's written rationale.

### Photos and video

* **Photos you attach** — a meal, a coach's program sheet, a movement clip's
  still frames — are sent to our servers, read by our own vision model, and
  then discarded. **We do not keep the image.** What we keep is the resulting
  text (for example "Meal analysis: …"), stored as part of your conversation.
* Photos are normally resized and re-encoded before upload, which removes
  camera metadata such as GPS tags. If the app cannot decode the file (some
  iPhone HEIC photos), the **original file is uploaded unchanged, including any
  metadata it carries**.
* **A custom avatar video you upload is stored** on our servers indefinitely.
  It is served from a link that is not guessable but that does **not** require
  sign-in — anyone who obtains that link could play the video. We are not
  claiming access control on that file that we do not have.

### Microphone

Luna records audio **only while you are holding a voice turn** — you tap the
microphone, it records, it stops on silence or after 30 seconds. There is no
background listening and no wake word.

### Location

Luna has one screen that uses location: the **outdoor activity tracker**, for
walking, running and cycling on a live map. Nothing else in the app reads your
position.

* Location is read **only while that screen is open and a session is running.**
  Luna does not have — and does not ask for — background location permission,
  so it cannot follow you when the screen is closed or the app is in the
  background.
* **Your route never leaves the phone.** The trail drawn on the map is held in
  the screen's own memory and is discarded when you leave. When you finish a
  session, the only thing sent to our servers is a single number: the distance
  you covered, in kilometres, recorded as one workout. No coordinates, no
  trail, no start or end point.
* The permission is requested the first time you press start, and you can
  refuse it. Refusing disables the tracker and nothing else.

### On your device

The app stores on the device: your session token, your email address and
display name, your speaker on/off preference, your habit check-ins for the day,
and a few first-week tip flags. These are held in the app's ordinary
preferences store, **not** in the device keystore or an encrypted store.
Signing out deletes the session record.

---

## What Luna does **not** collect

* **No advertising.** There are no ads, no ad SDK, no advertising identifier.
* **No analytics and no crash-reporting SDK.** No Firebase, no Crashlytics, no
  attribution or measurement library of any kind is built into the app.
* **No location history.** Luna does read your GPS position, but only on the
  activity-tracking screen and only while a session is running — see
  "Location" above. No coordinates and no route are ever sent to us or stored
  by us; a finished session reaches our servers as a distance in kilometres and
  nothing more. Luna holds no location permission for background use. The
  app's permissions, as built, are: internet access, network state,
  microphone, keeping the screen awake, and precise and approximate location.
* **No camera.** Luna has no camera integration; photos come from the system
  file picker, which is why the app needs no photo or storage permission.
* **No contacts, no calendar, no SMS, no browsing history, no installed-app
  list, no financial data.**

---

## Where your data goes

**Luna's AI runs on our own servers.** The language model, the vision model and
the speech-to-text model are all software we run on hardware we operate. No
third-party AI provider receives your conversations, your photos or your voice.
There is no code path in Luna that calls an external AI API.

Your stored records — conversations, habit events, plans, avatars — live in our
own object storage on that same infrastructure.

### Third parties the app itself contacts

These are the only external services the Android app talks to, and none of them
receive your Luna conversation data:

* **Google** — for sign-in. Google verifies who you are and issues the token we
  check. This happens through Google Play services on the device.
* **OpenStreetMap** (`tile.openstreetmap.org`) — map tiles, only on the
  activity-tracking screen, and only while that screen is open. OpenStreetMap
  receives your IP address and the map area being displayed.
* **GitHub** (`raw.githubusercontent.com`) — demonstration images for exercises
  in your training plan. GitHub receives your IP address and which exercise
  image was requested.
* **Your device's own speech engine.** Luna transcribes your voice on our own
  servers whenever it can. If our transcription service cannot be reached, Luna
  falls back to the phone's built-in speech recogniser, and Luna tells you in
  the conversation when it does. Spoken replies on Android are always produced
  by the phone's own text-to-speech engine, which means Luna's reply text is
  handed to that engine. On most Android phones those engines are Google's, and
  what they do with the audio or text is governed by Google's terms, not ours.

We do not sell your data, and we do not share it with anyone for advertising,
marketing or analytics.

---

## Legal disclosure

We may disclose stored data if we are legally required to. We will not
otherwise hand it to a third party.

---

## Security

* Traffic between the app and our servers is encrypted with TLS.
* Every request is authenticated. Your records are filed under your account and
  the storage layer refuses to read or write anything when a request arrives
  without an identified account — it fails closed rather than falling back to a
  shared bucket.
* Sessions expire 12 hours after sign-in and the allowlist is re-checked on
  every request, so removing an address takes effect immediately.
* Server logs record that a sign-in happened, and the email address that signed
  in. **Conversation text is not written to logs.** Two narrow exceptions: if
  our prompt-injection scanner flags something in a voice transcript or in the
  model's description of a photo, a short excerpt of the flagged text is
  logged.
* Two limits we would rather state than imply otherwise: your session token is
  stored in the app's ordinary preferences rather than the device keystore, and
  an uploaded custom avatar video is served from an unauthenticated link (see
  above).

No system is perfectly secure, and we do not claim Luna is.

---

## How long we keep it

Luna's storage is **append-only by design** — your journal is a history, and
correcting a plan writes a new record rather than overwriting the old one. That
means:

* There is currently **no automatic expiry or deletion**. Data you create is
  kept until it is deleted on request.
* **Deleting data is a manual operation** performed by the operator when you
  ask. There is no in-app delete button today.

To have your Luna data deleted, or to ask what is stored about you, email
**privacy@runink.org** from the address your Luna account uses. Deleting your
data does not require you to lose access to the app; removing your address from
the allowlist and deleting your data are separate actions and you can request
either or both.

---

## Your choices

* **Voice** — the microphone is used only when you tap it. Denying the
  microphone permission leaves everything else working; you type instead.
* **Spoken replies** — a toggle in the chat bar; off means Luna never speaks.
* **Photos** — entirely optional. Luna works without ever being shown one.
* **Custom avatar video** — optional; the built-in animated forms need no
  upload.
* **Signing out** removes the session and your email from the device.
* **Access, correction, export and deletion** — email
  privacy@runink.org.

---

## Children

Luna is not directed at children and is not available to them: access requires
being on an operator-managed allowlist. We do not knowingly collect data from
children.

---

## The web version

`luna.runink.org` is a **development build**, not a product we distribute. It
has two behaviours the mobile app does not: an optional local-weather backdrop
that sends your coordinates, rounded to about one kilometre, to Open-Meteo; and
an optional Google Fit connection that reads your daily step count. Both are
off until you switch them on, and neither exists in the Android or iOS app.

---

## Changes

We will update this page when Luna's behaviour changes, and update the date
below. Material changes will be reflected in the app store listing's data
disclosure at the same time.

---

## Contact

* **Email:** privacy@runink.org

*Last Updated: September 2026*
