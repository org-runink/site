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
# three places and was wrong the moment a page was added — there are twelve
# English pages now and the set keeps growing.
description: "Les sujets opérationnels pour lesquels Runink FACE est fait. Dans chacun, les faits sont déjà dans vos systèmes et personne n'a les heures pour les rassembler, et chacun se termine par une personne qui approuve une action rédigée, pas par un tableau de bord de plus."
# CARD LINKS STAY UNPREFIXED. layouts/shortcodes/card.html passes every relative
# link through relLangURL, so "/use-cases/compliance/" written here renders as
# "/fr/use-cases/compliance/"; writing "/fr/..." would render "/fr/fr/...".
# The consequence is that a card in this file can only point at a page that
# exists in French. Only claims-recovery, compliance and
# fulfillment-optimization are translated, so those are the only three cards.
# The English page's "Moving It" group has no French page at all, so it is left
# out rather than shown empty, and the note after the last grid sends the reader
# to the English index for the rest of the set. Add the card back here when the
# page is translated.
#
# Markdown links in the body are NOT rewritten by Hugo (there is no
# render-link hook), so they carry an explicit /fr/ prefix where the target
# exists in French and no prefix where it only exists in English.
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

<!-- CALIBRAGE — ne ramenez pas la phrase sur l'approbation à sa version
     absolue ("rien ne quitte votre entreprise avant que quelqu'un l'ait
     approuvé", ni aucun seuil du type "tout ce qui dépasse X attend une
     personne"). Il n'existe aucune barrière globale.
     face/grpc/cmd/compliance_server.go:149-155 le dit dans les mots de FACE :
     REQUIRE_HITL "n'est lu par aucun code de ce dépôt en dehors de cette
     fonction, donc l'activer n'exige rien … rien ne consulte cette variable
     pour forcer le passage d'une action".

     Ce qui est vrai, et tout ce qui peut être affirmé :
     twinsService.ExecuteAction (face/grpc/cmd/agent_services.go:6350) exige un
     magasin configuré, charge une action DÉJÀ ENREGISTRÉE par son id, se
     branche sur req.UserApproval et consigne HITL_DECISION_PROCESSED avec
     auditActorFrom(ctx) et la décision. Donc : une action rédigée attend dans
     la file, l'approuver est ce qui l'envoie, et qui a approuvé et ce qui a été
     décidé reste au dossier. -->

## Ce Que Runink FACE En Fait

FACE est fait pour passer ses contrôles sur vos propres enregistrements pendant la nuit, de sorte que la matinée commence par une liste courte et classée de ce qui s'est passé, avec les pièces jointes.

Chaque point est pensé comme une **action proposée**, pas comme une alerte. La réclamation arrive avec le reçu, le relevé, le tarif et le délai, et une lettre déjà rédigée. La dérive de température arrive avec le conteneur, le client et un déroutement déjà rédigé.

Une action proposée attend dans cette file comme un enregistrement à part entière. L'approuver est le geste qui l'exécute, et l'approbation s'écrit avec le nom de la personne qui l'a donnée et ce qu'elle a décidé. Une action que personne n'approuve est une action qui n'a pas été envoyée.

Voyez ce que cela est et ce que cela n'est pas. C'est une file dont les éléments bougent parce qu'une personne nommée les a bougés, et un relevé de qui les a bougés — pas un verrou posé quelque part dans le système qui inspecterait tout le reste de ce que fait votre entreprise. Quand une partie d'une action rédigée ne peut pas être exécutée, ce qui revient le dit au lieu de la donner pour faite.

Approuver est censé terminer le travail plutôt que le commencer. Le message, le délai et la mise à jour de votre système de gestion découlent de l'approbation. Plus tard, quand on demande pourquoi une réclamation a été déposée ou pourquoi une déclaration a été retenue, la réponse vient du dossier.

## Deux Choses À Savoir D'Emblée

**Vos données restent sur vos machines.** Les fichiers de commande, les papiers de douane, les relevés des capteurs et le raisonnement à leur sujet tournent sur du matériel que vous contrôlez : FACE tourne sur la plateforme Runink CORE, et c'est ce qui en fait une propriété de la construction plutôt qu'un réglage que quelqu'un doit respecter. Rien ne part chez un fournisseur de modèles extérieur. C'est le genre de réponse qu'une revue de sécurité demande avant de laisser un fournisseur détenir ses données de commande.

**La file est l'endroit où vous décidez.** Chaque élément arrive avec son raisonnement et les enregistrements sur lesquels il s'appuie, vous pouvez donc lire pourquoi il est proposé avant de l'accepter. Ce que vous approuvez est ce qui est exécuté, et un élément que vous laissez tranquille reste où il est. Quels travaux méritent de passer par la file est une question à laquelle vous répondez à l'installation, pas un seuil de montant que le logiciel surveillerait pour vous.

## Où En Sont Ces Scénarios

Aucun des scénarios ci-dessous n'est un résultat client. Ils sont **esquissés** : écrits à partir de ce que le logiciel est fait pour faire, dans le vocabulaire des gens qui portent le problème, et jamais passés sur les données d'un client. Rien n'est mesuré, et chaque page le dit pour son compte. Il n'y a ici aucune étude de cas et aucun chiffre, parce que les chiffres seraient les nôtres et que ceux qui comptent sont les vôtres.

## Prévoir Ce Dont Vous Aurez Besoin

{{< card-grid cols="3" >}}

{{< card
    title="Couverture de stock et plan d'approvisionnement"
    icon="cube-transparent"
    link="/use-cases/fulfillment-optimization/"
    description="Une alerte de rupture qui arrive après la fonte du stock de sécurité, c'est une facture d'avion avec quelques jours de préavis."
>}}

{{< /card-grid >}}

## Quand Quelque Chose Va De Travers

{{< card-grid cols="3" >}}

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
    title="Données personnelles des clients et bilan des émissions"
    icon="scale"
    link="/use-cases/compliance/"
    description="Des données personnelles atteignent des écrans qui ne devraient pas les montrer, et le bilan des émissions prend un trimestre. Les deux sont des travaux de rapprochement."
>}}

{{< /card-grid >}}

## Le Reste Du Jeu, Pour L'instant En Anglais

FACE est fait pour d'autres sujets que les trois ci-dessus : la prévision de la demande, le chiffrage d'un changement avant de s'y engager, le plan de tournée, la vue de toute la chaîne et pas seulement de votre bout, la répartition vocale pour les conducteurs, la chaîne du froid et la sécurité du parc, les retours et ce qu'ils valent encore, les dossiers de souscription et la revue de contrats. Ces pages ne sont pour l'instant écrites qu'en anglais : elles se lisent depuis l'[index anglais](/use-cases/). Elles ne sont pas en carte ici parce qu'elles n'existent pas en français, et un lien vers une page absente vaut moins que pas de lien.

## Voir Si Cela Vous Convient

Apportez une ligne, un transporteur, ou un mois de retours. Une courte conversation suffit en général à dire si les pertes que vous portez ont la forme de celles décrites ici.

Runink PULSE, le produit d'analyse de marché, et la plateforme CORE sur laquelle tourne FACE sont traités dans [leurs propres livres blancs](/fr/blog/whitepapers/). Ils ne sont pas sur cette page, et aucun des sujets ci-dessus n'est un résultat qui appartiendrait à l'un ou à l'autre.
