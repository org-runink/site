---
title: "À propos de Runink"
layout: "company"
description: "À quoi sert Runink : lire les enregistrements qu'une entreprise tient déjà, et en faire des décisions que ses propres équipes peuvent défendre."
eyebrow: "L'entreprise"
hero_line: "La réponse est le plus souvent déjà dans les enregistrements"
hero_deck: "Une entreprise consigne déjà ce qu'elle a acheté, ce qu'elle a expédié, ce qu'elle a payé et ce qui s'est mal passé. Runink lit ces enregistrements et place une réponse devant la personne qui doit agir."
next:
  label: "Une étape suivante"
  title: "Les règles ci-dessus sont des choses que vous pouvez nous demander de vous montrer."
  body: "Apportez une ligne, un sinistre ou un mois de factures. Une demi-heure, avec la personne à qui appartient le problème dans la pièce, et nous déroulons cet exemple de bout en bout. Si les pertes que vous portez n'ont pas la forme que cela traite, nous le dirons."
  cta: "Réserver un rendez-vous"
  about: "La page entreprise"
date: "2024-05-20T00:00:00Z"
author: "Runink"
# TRANSLATION OF content/company.md. Rule 12: this is a page, not a copy — when
# the English page changes, this one changes in the same commit or it comes down.
#
# THE SOVEREIGNTY CARD ("Vos enregistrements restent sur vos machines") CARRIES A
# CONSTRAINT. It must stay an architectural property — how the thing is built —
# and must not be hardened into a claim that a check refuses the code, because
# that is not supportable for FACE and /products/face/ says the opposite. The
# full reasoning is in the front matter of content/company.md; read it there
# before rewording this card in any language.
#
# NOTES GO IN FRONT MATTER, BEHIND A HASH. Go template comment syntax is a
# layouts construct: Hugo does not evaluate it inside a content file, so a note
# written that way in the body renders as visible copy. It shipped that way once.
# scripts/check-content-template-syntax.mjs now fails the build on it.
#
# The English source ends with a thematic break and an Organization JSON-LD
# block. Both are inert — markup.goldmark.renderer.unsafe = false strips the
# script, and layouts/partials/schema-org.html emits the canonical Organization
# on every page in every language — so neither is carried here.
---

{{< section-container class="pt-4 pb-20" >}}
  <div class="max-w-4xl">
    <p class="text-xs font-black uppercase tracking-[0.2em] text-signal mb-4">À quoi nous servons</p>
    <p class="text-2xl md:text-3xl leading-snug text-ink">
      L'essentiel de ce qu'une équipe d'exploitation, de finance ou de conformité doit trancher se trouve déjà dans des systèmes qu'elle paie, sous une forme que personne n'a le temps de lire.
    </p>
    <p class="text-lg text-ink-2 mt-6 max-w-3xl">
      Nous nous connectons à ces systèmes, gardons la copie de travail sur des machines que le client contrôle, et montrons le raisonnement derrière chaque réponse pour que la personne qui signe puisse le vérifier.
    </p>
  </div>
{{< /section-container >}}

{{< section-container class="py-20 bg-stone-900" >}}
  <div class="max-w-6xl mx-auto">
    <h2 class="text-3xl font-bold text-center mb-4">Comment nous le construisons</h2>
    <p class="text-xl text-ink-2 text-center max-w-3xl mx-auto mb-12">
      Six règles que le logiciel suit. Chacune est une chose que vous pouvez nous demander de vous montrer sur un système en fonctionnement, et c'est la seule raison pour laquelle elles méritent de figurer sur une page.
    </p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {{< value-card
          title="Une personne signe, et son nom reste"
          icon="users"
          description="Le logiciel rédige l'action et s'arrête. Elle attend dans une file jusqu'à ce que quelqu'un l'approuve, la modifie ou la rejette, et la trace garde qui c'était. En matière de réclamations, de douane et de paiement, l'acte engage une responsabilité, et la responsabilité ne se transfère pas à un logiciel."
      >}}
      {{< value-card
          title="Il montre son raisonnement"
          icon="magnifying-glass"
          description="Chaque action rédigée arrive avec la règle qu'elle a appliquée et les enregistrements qu'elle a lus. Vous pouvez la contester sur les preuves plutôt que sur la confiance."
      >}}
      {{< value-card
          title="Il dit quand il ne sait pas"
          icon="light-bulb"
          description="Non mesuré est une réponse distincte de zéro, et le logiciel l'enregistre comme telle, avec le motif. Un contrôle qui n'a pas pu être exécuté signale qu'il n'a pas pu l'être, plutôt que de passer."
      >}}
      {{< value-card
          title="Il nomme l'étape qu'il a sautée"
          icon="clipboard-document-list"
          description="Quand une partie d'un traitement n'a pas lieu, le résultat dit laquelle et pourquoi. Un logiciel qui annonce un succès pour un travail qu'il n'a pas fait est l'échec contre lequel nous avons conçu le plus fermement."
      >}}
      {{< value-card
          title="Vos enregistrements restent sur vos machines"
          icon="scale"
          description="Les modèles tournent sur des machines que vous contrôlez, et il y a un seul point d'inférence : celui que vous configurez. Le raisonnement sur vos fichiers a lieu là où sont vos fichiers. C'est ainsi que c'est construit, et non un interrupteur que quelqu'un règle, alors demandez-nous de parcourir la frontière avec vous plutôt que de vous fier à la phrase."
      >}}
      {{< value-card
          title="Nous ne revendiquons pas de certifications"
          icon="hand-thumb-up"
          description="Personne ne nous a audités au titre de SOC 2 ni d'ISO 27001. Le logiciel est construit d'après ces référentiels et il vous dira ce qu'il a vérifié ; il ne vous dira pas qu'il est certifié, parce qu'il ne l'est pas."
      >}}
    </div>
  </div>
{{< /section-container >}}
