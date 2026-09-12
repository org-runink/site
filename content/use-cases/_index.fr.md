---
title: "À Quoi Sert Runink FACE"
product: "Runink FACE"
description: "Les sujets opérationnels pour lesquels Runink FACE est fait. Dans chacun, les faits sont déjà dans vos systèmes et personne n'a les heures pour les rassembler, et chacun se termine par une personne qui approuve une action rédigée, pas par un tableau de bord de plus."
layout: "section"

# The coverage index lives in front matter so layouts/use-cases/section.html can
# render it ABOVE the argument with real hierarchy. It used to be five card-grid
# shortcodes in the body: twelve cards of equal width and height under 3,000px of
# full-bleed prose, which cannot show that the groups mean anything.
#
# CONTENT.md rule 12: this is a page, not a copy. The group labels and the short
# names here are this language's own wording, and the line rendered under each
# name is read off that language's child page at render time.
#
# `name` is the short domain label a reader scans. Do not state a count anywhere
# — the number beside the heading is computed from len .Pages in the template.
coverage_heading: "Ce que cela couvre"
coverage_meta: "cas"
coverage_intro: "Ils sont regroupés selon le moment où le problème surgit dans l'exploitation : avant de vous engager sur un plan, pendant que le travail avance, après qu'un incident a eu lieu, et quand on vous demande des preuves."
groups_other_label: "Également ici"
groups:
  - label: "Prévoir ce dont vous aurez besoin"
    deck: "Avant de vous engager. Ce que le trimestre prochain va demander, la couverture dont vous disposez, et ce qu'un changement coûterait."
    items:
      - page: "demand-forecasting"
        name: "Prévision de la demande"
      - page: "fulfillment-optimization"
        name: "Couverture de stock et plan d'approvisionnement"
      - page: "hypothesis-lab"
        name: "Éprouver un changement avant de s'y engager"
  - label: "Acheminer la marchandise"
    deck: "Le travail déjà en cours. La tournée, la vue sur toute la chaîne, et le conducteur qui a les mains sur le volant."
    items:
      - page: "route-optimization"
        name: "Plan de tournée"
      - page: "supply-chain-visibility"
        name: "Visibilité de la chaîne logistique"
      - page: "voice-dispatch"
        name: "Répartition vocale pour les conducteurs"
  - label: "Quand quelque chose va de travers"
    deck: "Après coup. Un conteneur qui s'est réchauffé, un retour posé sur le quai, une réclamation dont le délai court."
    items:
      - page: "cold-chain-safety"
        name: "Chaîne du froid et sécurité du parc"
      - page: "responsive-reverse-logistics"
        name: "Retours et logistique inverse"
      - page: "claims-recovery"
        name: "Réclamations fret et frais de port"
  - label: "Papier, règle et preuve"
    deck: "Quand on vous demande des preuves. Le dossier de sinistre, la clause qui s'applique, le rapport."
    items:
      - page: "insurance-underwriting"
        name: "Souscription et dossiers de sinistre"
      - page: "paralegal-review"
        name: "Revue de contrats et d'obligations"
      - page: "compliance"
        name: "Données personnelles et émissions"

next:
  label: "Une étape de plus"
  title: "Apportez une ligne, un transporteur ou un mois de retours."
  body: "Une demi-heure, avec la personne qui porte le problème dans la pièce, et nous déroulons cet exemple-là de bout en bout. Si les pertes que vous portez n'ont pas la forme de celles décrites ici, nous vous le dirons."
  cta: "Réserver un entretien"
  note: "Le formulaire s'ouvre avec les scénarios déjà nommés : vous ne commencez pas par expliquer d'où vous venez."
  about: "Les scénarios"

---
## Le Problème Dont Part Runink FACE

Tous les sujets ci-dessus ont la même forme. Les faits dont vous avez besoin sont déjà enregistrés quelque part dans votre entreprise. Ils sont dans quatre systèmes, sous quatre formats, et les rassembler prend une matinée que personne n'a.

Alors la réclamation expire. Le conteneur est ouvert trop chaud. La commande part par avion. Non pas parce que quelqu'un a mal jugé, mais parce que personne n'a eu le temps d'arriver au point où l'on peut juger.

## Ce Que Runink FACE En Fait

FACE est fait pour passer ses contrôles sur vos propres enregistrements pendant la nuit, de sorte que la matinée commence par une liste courte et classée de ce qui s'est passé, avec les pièces jointes.

Chaque point est pensé comme une **action proposée**, pas comme une alerte. La réclamation arrive avec le reçu, le relevé, le tarif et le délai, et une lettre déjà rédigée. La dérive de température arrive avec le conteneur, le client et un déroutement déjà rédigé.

Une action proposée attend dans cette file comme un enregistrement à part entière. L'approuver est le geste qui l'exécute, et l'approbation s'écrit avec le nom de la personne qui l'a donnée et ce qu'elle a décidé. Une action que personne n'approuve est une action qui n'a pas été envoyée.

Voyez ce que cela est et ce que cela n'est pas. C'est une file dont les éléments bougent parce qu'une personne nommée les a bougés, et un relevé de qui les a bougés — pas un verrou posé quelque part dans le système qui inspecterait tout le reste de ce que fait votre entreprise. Quand une partie d'une action rédigée ne peut pas être exécutée, ce qui revient le dit au lieu de la donner pour faite.

Approuver est censé terminer le travail plutôt que le commencer. La réponse nomme ce qui est parti et ce qui ne l'est pas : un connecteur de messagerie non configuré revient comme une étape ignorée, avec son motif, à chaque réponse. Plus tard, quand on demande pourquoi une réclamation a été déposée ou pourquoi une déclaration a été retenue, la réponse vient du dossier.

## Deux Choses À Savoir D'Emblée

**Vos données restent sur vos machines.** Les fichiers de commande, les papiers de douane, les relevés des capteurs et le raisonnement à leur sujet tournent sur du matériel que vous contrôlez : FACE tourne sur la plateforme Runink CORE, et c'est ce qui en fait une propriété de la construction plutôt qu'un réglage que quelqu'un doit respecter. Rien ne part chez un fournisseur de modèles extérieur. C'est le genre de réponse qu'une revue de sécurité demande avant de laisser un fournisseur détenir ses données de commande.

**La file est l'endroit où vous décidez.** Chaque élément arrive avec son raisonnement et les enregistrements sur lesquels il s'appuie, vous pouvez donc lire pourquoi il est proposé avant de l'accepter. Ce que vous approuvez est ce qui est exécuté, et un élément que vous laissez tranquille reste où il est. Quels travaux méritent de passer par la file est une question à laquelle vous répondez à l'installation, pas un seuil de montant que le logiciel surveillerait pour vous.

## Où En Sont Ces Scénarios

Aucun des scénarios ci-dessus n'est un résultat client. Ils sont écrits à partir de ce que le logiciel est fait pour faire, dans le vocabulaire des gens qui portent le problème, et ils n'ont jamais été passés sur les données d'un client. Il n'y a ici aucune étude de cas et aucun chiffre, parce que les chiffres seraient les nôtres et que ceux qui comptent sont les vôtres.

Runink PULSE, le produit d'analyse de marché, et la plateforme CORE sur laquelle tourne FACE sont traités dans [leurs propres livres blancs](/fr/blog/whitepapers/). Ils ne sont pas sur cette page, et aucun des sujets ci-dessus n'est un résultat qui appartiendrait à l'un ou à l'autre.
