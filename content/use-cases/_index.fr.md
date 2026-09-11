---
title: "À Quoi Sert Runink FACE"
# French mirror of content/use-cases/_index.md — read that file first.
#
# This section is Runink FACE's scenarios and nothing else. Runink PULSE
# (market analysis) is a separate product with its own material, and CORE is the
# platform underneath both; neither of their capabilities may be listed here,
# because a reader who cannot tell which product does which job reads the whole
# set as one product's track record. The previous version of this file was
# titled "À Quoi Sert Runink" and named no product at all.
product: "Runink FACE"
# Do not state a count in the title or the description. This file said "Sept" in
# three places and was wrong the moment a page was added. The set keeps growing;
# the English file states no number either.
description: "Les sujets opérationnels pour lesquels Runink FACE est fait. Dans chacun, les faits sont déjà dans vos systèmes et personne n'a les heures pour les rassembler, et chacun se termine par une personne qui approuve une action rédigée, pas par un tableau de bord de plus."
# CARD LINKS STAY UNPREFIXED. layouts/shortcodes/card.html passes every relative
# link through relLangURL, so "/use-cases/compliance/" written here renders as
# "/fr/use-cases/compliance/"; writing "/fr/..." would render "/fr/fr/...".
# The consequence is that a card in this file can only point at a page that
# exists in French. Every page in this section is now translated, so this index
# carries the same cards in the same four groups as the English one. If a new
# English page appears before its French translation, leave its card out rather
# than link a page that is not there.
#
# Markdown links in the body are NOT rewritten by Hugo (there is no
# render-link hook), so they carry an explicit /fr/ prefix by hand.
#
# KNOWN ISSUE — as in the English file: layout "section" has no match, so this
# page falls through to layouts/_default/list.html, which prints the title and
# the description and then an automatic card grid of the child pages, and never
# prints .Content. Until that is fixed, the attribution that actually reaches a
# reader is the title and description above.
layout: "section"
---

## Le Problème Dont Part Runink FACE

Tous les sujets ci-dessous ont la même forme. Les faits dont vous avez besoin sont déjà enregistrés quelque part dans votre entreprise. Ils sont dans quatre systèmes, sous quatre formats, et les rassembler prend une matinée que personne n'a.

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

Aucun des scénarios ci-dessous n'est un résultat client. Ils sont **esquissés** : écrits à partir de ce que le logiciel est fait pour faire, dans le vocabulaire des gens qui portent le problème, et jamais passés sur les données d'un client. Rien n'est mesuré, et chaque page le dit pour son compte. Il n'y a ici aucune étude de cas et aucun chiffre, parce que les chiffres seraient les nôtres et que ceux qui comptent sont les vôtres.

## Prévoir Ce Dont Vous Aurez Besoin

{{< card-grid cols="3" >}}

{{< card
    title="Prévision de la demande"
    icon="chart-bar"
    link="/use-cases/demand-forecasting/"
    description="Ce dont vous aurez besoin le trimestre prochain est contenu dans ce que vous avez vendu l'an dernier. Le lire dans votre propre historique est un travail pour lequel personne n'a la matinée."
>}}

{{< card
    title="Couverture de stock et plan d'approvisionnement"
    icon="cube-transparent"
    link="/use-cases/fulfillment-optimization/"
    description="Une alerte de rupture qui arrive après la fonte du stock de sécurité, c'est une facture d'avion avec quelques jours de préavis."
>}}

{{< card
    title="Éprouver un changement avant de s'y engager"
    icon="light-bulb"
    link="/use-cases/hypothesis-lab/"
    description="Chiffrez ce que coûte un déroutement avant de dépenser l'argent, sur vos propres chiffres plutôt que sur ceux d'un fournisseur."
>}}

{{< /card-grid >}}

## Acheminer La Marchandise

{{< card-grid cols="3" >}}

{{< card
    title="Un plan de tournée qui suit la journée"
    icon="globe-alt"
    link="/use-cases/route-optimization/"
    description="La tournée la moins chère lundi n'est pas la moins chère jeudi. La replanifier à la main est la raison pour laquelle elle n'est planifiée qu'une fois."
>}}

{{< card
    title="Voir toute la chaîne, pas seulement votre bout"
    icon="eye"
    link="/use-cases/supply-chain-visibility/"
    description="Chaque fournisseur, transporteur et entrepôt détient une pièce du tableau. Le tableau lui-même n'est détenu nulle part."
>}}

{{< card
    title="Répartition vocale pour les conducteurs"
    icon="map"
    link="/use-cases/voice-dispatch/"
    description="Un conducteur qui doit se ranger pour lire un écran, soit il s'arrête, soit il ne le lit pas. Ni l'un ni l'autre n'était le but."
>}}

{{< /card-grid >}}

## Quand Quelque Chose Va De Travers

{{< card-grid cols="3" >}}

{{< card
    title="Chaîne du froid et sécurité du parc"
    icon="shield-check"
    link="/use-cases/cold-chain-safety/"
    description="Le relevé qui condamne un chargement est enregistré des heures avant que quiconque le regarde. Tout le problème est l'écart entre les deux."
>}}

{{< card
    title="Les retours et ce qu'ils valent encore"
    icon="arrow-path"
    link="/use-cases/responsive-reverse-logistics/"
    description="Un retour posé sur un quai est du fonds de roulement que personne n'a compté. Ce qu'il vaut dépend de la vitesse à laquelle il est jugé."
>}}

{{< card
    title="Réclamations fret et frais de port"
    icon="currency-dollar"
    link="/use-cases/claims-recovery/"
    description="Les réclamations expirent parce qu'en monter une prend une matinée. Le reçu, le poids, le tarif et le délai arrivent déjà rassemblés."
>}}

{{< /card-grid >}}

## Papier, Règle Et Preuve

{{< card-grid cols="3" >}}

{{< card
    title="Dossiers de souscription et de sinistre"
    icon="clipboard-document-list"
    link="/use-cases/insurance-underwriting/"
    description="Un sinistre est une provision sur un contrat, et le dossier qui le règle arrive sous forme de documents. La lecture est rédigée pour vous ; la décision reste chez le souscripteur."
>}}

{{< card
    title="Revue de contrats et d'obligations"
    icon="magnifying-glass"
    link="/use-cases/paralegal-review/"
    description="La clause qui compte est dans un contrat que personne n'a rouvert. Elle est lue et citée pour vous, et une personne décide de ce qu'elle veut dire."
>}}

{{< card
    title="Données personnelles des clients et bilan des émissions"
    icon="scale"
    link="/use-cases/compliance/"
    description="Des données personnelles atteignent des écrans qui ne devraient pas les montrer, et le bilan des émissions prend un trimestre. Les deux sont des travaux de rapprochement."
>}}

{{< /card-grid >}}

## Voir Si Cela Vous Convient

Apportez une ligne, un transporteur, ou un mois de retours. Une courte conversation suffit en général à dire si les pertes que vous portez ont la forme de celles décrites ici.

Runink PULSE, le produit d'analyse de marché, et la plateforme CORE sur laquelle tourne FACE sont traités dans [leurs propres livres blancs](/fr/blog/whitepapers/). Ils ne sont pas sur cette page, et aucun des sujets ci-dessus n'est un résultat qui appartiendrait à l'un ou à l'autre.
