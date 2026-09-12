---
title: "Tarifs"
description: "Les tâches d'exploitation pour lesquelles Runink FACE est construit, et ce que coûte une licence pour les faire tourner. Vous payez pour le nombre de personnes qui l'utilisent ; chaque personne inclut une dotation de capacité de calcul, donc l'utiliser davantage n'augmente pas la facture."
layout: "pricing"
date: "2024-05-20T00:00:00Z"
author: "Runink"
# WHY THE WORK COMES BEFORE THE PRICE ON THIS PAGE.
# See content/pricing.md for the reasoning in full. In short: the page used to
# open on the billing shape and go straight to three licences told apart by
# whose machine they run on, which does not answer the question a buyer arrives
# with. The scenarios band now sits between the intro and the licences.
#
# Every group label and every short name in that band is lifted WORD FOR WORD
# from the `groups` block in content/use-cases/_index.fr.md, so this page
# names the scenarios the way that page names them, in this reader's language.
# The sentence printed under each link is not written here at all — the
# shortcode reads the target page's own title at render time.
---

{{< pricing-table-2 >}}
{
  "intro": [
    "Vous payez au nombre de personnes qui utilisent Runink. Chaque personne comprend dans le prix une dotation de capacité de calcul.",
    "C'est toute la logique. La facture suit votre effectif, pas votre usage : une équipe qui trouve à Runink un usage intensif n'ouvre pas une ligne de dépense qui grandit avec lui. Mais le travail passe d'abord, parce que c'est la partie sur laquelle un prix mérite d'être discuté."
  ],
  "eyebrow": "Le travail",
  "heading": "Jumeaux Numériques d'Opérations",
  "lead": [
    "Voici les tâches d'exploitation pour lesquelles Runink FACE est construit. Dans chacune, les éléments sont déjà dans vos systèmes et personne n'a les heures pour les rassembler. Et chacune se termine par une personne qui approuve une action rédigée, pas par un tableau de bord de plus.",
    "Elles sont regroupées selon le moment où le problème surgit dans l'exploitation. Chacune ouvre la page qui l'explique : ce qu'elle lit, ce qu'elle rédige, et les mesures à partir desquelles écrire vos propres chiffres."
  ],
  "personas": {
    "eyebrow": "Exclusivité Enterprise",
    "cards": [
      {
        "name": "Paralégaux",
        "accent": "Digitaux",
        "body": "Votre équipe juridique et de conformité automatisée. Ils ingèrent les factures de transport de façon autonome, comparent les accords de niveau de service (SLA) et déposent instantanément des réclamations irréfutables pour récupérer les marges perdues auprès des transporteurs, sans intervention manuelle.",
        "focus": "Focus : Litiges et Récupération"
      },
      {
        "name": "Acheteurs",
        "accent": "Statistiques",
        "body": "Votre unité autonome de planification de la demande. Ils analysent intelligemment les tendances du marché et la vitesse des ventes pour prédire les besoins exacts de stockage, orchestrant de manière dynamique la répartition des stocks sur l'ensemble de votre réseau.",
        "focus": "Focus : Stock et Exécution"
      },
      {
        "name": "Opérateurs de",
        "accent": "Revenus",
        "body": "Vos auditeurs financiers légaux. Ils auditent méticuleusement chaque ligne de facture par rapport à vos contrats de transport négociés, signalent automatiquement les frais indus et exécutent des retenues de paiement pour stopper les fuites de marge.",
        "focus": "Focus : Finance et Réconciliation"
      }
    ]
  },
  "groups": [
    {
      "label": "Prévoir ce dont vous aurez besoin",
      "deck": "Avant de vous engager. Ce que le trimestre prochain va demander, la couverture dont vous disposez, et ce qu'un changement coûterait.",
      "items": [
        { "page": "demand-forecasting", "name": "Prévision de la demande" },
        { "page": "fulfillment-optimization", "name": "Couverture de stock et plan d'approvisionnement" },
        { "page": "hypothesis-lab", "name": "Éprouver un changement avant de s'y engager" }
      ]
    },
    {
      "label": "Acheminer la marchandise",
      "deck": "Le travail déjà en cours. La tournée, la vue sur toute la chaîne, et le conducteur qui a les mains sur le volant.",
      "items": [
        { "page": "route-optimization", "name": "Plan de tournée" },
        { "page": "supply-chain-visibility", "name": "Visibilité de la chaîne logistique" },
        { "page": "voice-dispatch", "name": "Répartition vocale pour les conducteurs" }
      ]
    },
    {
      "label": "Quand quelque chose va de travers",
      "deck": "Après coup. Un conteneur qui s'est réchauffé, un retour posé sur le quai, une réclamation dont le délai court.",
      "items": [
        { "page": "cold-chain-safety", "name": "Chaîne du froid et sécurité du parc" },
        { "page": "responsive-reverse-logistics", "name": "Retours et logistique inverse" },
        { "page": "claims-recovery", "name": "Réclamations fret et frais de port" }
      ]
    },
    {
      "label": "Papier, règle et preuve",
      "deck": "Quand on vous demande des preuves. Le dossier de sinistre, la clause qui s'applique, le rapport.",
      "items": [
        { "page": "insurance-underwriting", "name": "Souscription et dossiers de sinistre" },
        { "page": "paralegal-review", "name": "Revue de contrats et d'obligations" },
        { "page": "compliance", "name": "Données personnelles et émissions" }
      ]
    }
  ],
  "outro": "Les trois licences ci-dessous se distinguent sur une seule question : combien de personnes en ont besoin, et sur quelle machine cela tourne."
}
{{< /pricing-table-2 >}}

{{< pricing-toggle >}}
{
  "options": [
    { "label": "Paiement Mensuel", "value": "monthly" },
    { "label": "Paiement Annuel (15% de Moins)", "value": "yearly" }
  ]
}
{{< /pricing-toggle >}}

{{< pricing-table-1 >}}
{
  "plans": [
    {
      "pill": "SUR UNE MACHINE PARTAGÉE",
      "pill_color": "stone",
      "name": "LICENCE LITE",
      "subtitle": "POUR LES ÉQUIPES DE 1 À 9 PERSONNES",
      "price_color": "stone",
      "price_monthly": "86",
      "price_yearly": "75",
      "price_subtitle": "PAR PERSONNE, PAR MOIS",
      "credits": "CALCUL INCLUS<br>SUR UNE RÉSERVE COMMUNE",
      "outcome_strategies": [
        {"label": "CE QUI DÉTERMINE LA FACTURE", "value": "Combien de personnes vous mettez sous licence. Pas combien elles l'utilisent."},
        {"label": "ENGAGEMENT MINIMUM", "value": "Un mois."},
        {"label": "SI NOUS RÉCUPÉRONS DE L'ARGENT POUR VOUS", "value": "20 % de ce qui est récupéré. Rien si rien n'est récupéré."},
        {"label": "FRAIS DE MISE EN SERVICE", "value": "De 1 % à 3 %, jamais plus de 50 $."}
      ],
      "features": [
        "S'EXÉCUTE SUR UNE MACHINE PARTAGÉE AVEC D'AUTRES CLIENTS",
        "CAPACITÉ DE CALCUL INCLUSE AVEC CHAQUE PERSONNE",
        "L'ENSEMBLE STANDARD D'ASSISTANTS AUTOMATIQUES",
        "LE POINT DE DÉPART POUR UNE PREMIÈRE ÉQUIPE"
      ],
      "button": {
        "text": "DÉMARRER AVEC LITE",
        "url": "/#contact",
        "style": "outline"
      }
    },
    {
      "pill": "SUR VOTRE PROPRE MACHINE",
      "pill_color": "orange",
      "name": "LICENCE DÉDIÉE",
      "subtitle": "POUR 10 PERSONNES ET PLUS",
      "price_color": "orange",
      "price_monthly": "75",
      "price_yearly": "75",
      "price_subtitle": "PAR PERSONNE, PAR MOIS",
      "credits": "CALCUL INCLUS<br>SUR VOTRE PROPRE RÉSERVE",
      "outcome_strategies": [
        {"label": "CE QUI DÉTERMINE LA FACTURE", "value": "Combien de personnes vous mettez sous licence. Pas combien elles l'utilisent."},
        {"label": "ENGAGEMENT MINIMUM", "value": "Un an."},
        {"label": "SI NOUS RÉCUPÉRONS DE L'ARGENT POUR VOUS", "value": "20 % de ce qui est récupéré. Rien si rien n'est récupéré."},
        {"label": "FRAIS DE MISE EN SERVICE", "value": "De 1 % à 3 %, jamais plus de 50 $."}
      ],
      "features": [
        "S'EXÉCUTE SUR DES MACHINES RÉSERVÉES À VOTRE SEULE ENTREPRISE",
        "1 000 UNITÉS PAR PERSONNE, PLUS 2 000 PAR TRANCHE DE 10",
        "VOTRE PROPRE ADRESSE WEB",
        "PRIORITÉ SUR LA CAPACITÉ QUE VOUS PAYEZ"
      ],
      "button": {
        "text": "PARLONS DE DÉDIÉE",
        "url": "/#contact",
        "style": "solid"
      }
    },
    {
      "pill": "DANS VOTRE PROPRE BÂTIMENT",
      "pill_color": "stone",
      "name": "LICENCE ENTERPRISE",
      "subtitle": "POUR L'HÉBERGER VOUS-MÊME",
      "price_monthly": "CUSTOM",
      "price_yearly": "CUSTOM",
      "price_subtitle": "PRIX CONVENU AVEC VOUS",
      "credits": "CALCUL INCLUS<br>DIMENSIONNÉ AVEC VOUS",
      "outcome_strategies": [
        {"label": "CE QUI DÉTERMINE LA FACTURE", "value": "La capacité dont vous avez besoin et les niveaux de service que vous fixez."},
        {"label": "ENGAGEMENT MINIMUM", "value": "Convenu avec vous."},
        {"label": "SI NOUS RÉCUPÉRONS DE L'ARGENT POUR VOUS", "value": "Convenu avec vous et écrit dans le contrat."},
        {"label": "FRAIS DE MISE EN SERVICE", "value": "Convenus avec vous et écrits dans le contrat."}
      ],
      "features": [
        "S'EXÉCUTE DANS VOS LOCAUX, MÊME SUR DES SITES HORS RÉSEAU",
        "CAPACITÉ DIMENSIONNÉE ET GÉRÉE AVEC VOUS",
        "TOUT CE QUE CONTIENT LA LICENCE DÉDIÉE",
        "UN REGISTRE COMPLET DE QUI A FAIT QUOI, ET QUAND"
      ],
      "button": {
        "text": "PARLEZ-NOUS",
        "url": "/#contact",
        "style": "outline"
      }
    }
  ]
}
{{< /pricing-table-1 >}}


{{< faq >}}
{
  "title": "Questions Avant De Signer",
  "description": "Ce que le travail demande de vous et qui décide, puis ce qui vous est facturé.",
  "questions": [
    {
      "question": "Nous portons des pertes sur les retours, sur les réclamations, sur la chaîne du froid. Est-ce que cela y touche ?",
      "answer": "Chacune de ces pertes a sa propre page ci-dessus, comme chacun des autres travaux qui y figurent. Mais les lire et être d'accord n'est pas la façon de le savoir. Apportez-en une, avec un mois des enregistrements qui sont derrière.\n\nChacune de ces pages se termine par les mesures à tirer d'abord de vos propres systèmes : le nombre de jours entre l'arrivée d'un colis et la décision prise à son sujet, les réclamations déposées rapportées aux réclamations possibles, l'erreur de prévision par ligne. Notez les vôtres avant que quoi que ce soit ne change, parce que le point de départ disparaît pour de bon dès que cela change.\n\nSi les pertes que vous portez n'ont pas la forme de celles qui y sont décrites, nous vous le dirons."
    },
    {
      "question": "De quoi a-t-il besoin dans nos systèmes pour faire quoi que ce soit de tout cela ?",
      "answer": "D'enregistrements que vous détenez déjà. Chaque scénario dit ce qu'il demande pour démarrer : un mois de retours et vos avoirs ; une ligne ou un transporteur et un trimestre de factures ; un an d'historique hebdomadaire pour une famille de produits ; un dossier de sinistre clos et votre grille de délégation ; un contrat et une question à laquelle votre équipe a répondu de mémoire.\n\nDes extractions dans le format que vos systèmes produisent suffisent pour commencer. Le rapprochement, c'est le travail."
    },
    {
      "question": "Qui signe une réclamation ou une lettre qu'il rédige ?",
      "answer": "Une personne nommée. Les pièces sont rassemblées — la déclaration, le port, le motif de la retenue, les documents manquants, les jours de retenue et le tarif journalier — et la lettre est rédigée. Puis cela s'arrête.\n\nQuelqu'un lit le dossier et l'approuve, le corrige ou l'écarte, et cette signature reste au dossier. **Rien ne part chez le transporteur avant cela.** Ailleurs, la forme est la même : ce qui arrive est une action proposée, et une action que personne n'approuve est une action qui n'a pas été envoyée."
    },
    {
      "question": "Que fait-il quand il ne peut pas savoir ?",
      "answer": "Il le dit, plutôt que de répondre quand même.\n\nUn état de retour qu'il ne reconnaît pas est refusé plutôt que classé sous la meilleure hypothèse. Une série de demande qu'il ne peut pas ajuster revient en disant qu'elle n'a pas pu l'être, et non sous la forme d'une courbe sûre d'elle avec rien dessous. Quand une partie d'une action rédigée ne peut pas être exécutée, la réponse nomme l'étape qui n'a pas eu lieu au lieu de donner le travail pour fait.\n\nCela compte plus qu'il n'y paraît. La défaillance que cela remplace, c'est une réponse plausible que personne en aval ne pouvait distinguer d'une vraie."
    },
    {
      "question": "Que se passe-t-il quand la prévision se trompe ?",
      "answer": "Vous pouvez voir pourquoi. Des méthodes concurrentes sont éprouvées sur des périodes que votre propre historique contient déjà, et celle qui a le mieux prédit ces périodes est celle qui est retenue. La réponse porte le nom de la méthode qui l'a emporté.\n\nUn écart devient alors quelque chose à examiner — quelle méthode, sur quel historique, et qu'est-ce qui a changé — plutôt que quelque chose à accepter. Votre propre erreur de prévision par ligne est le chiffre à noter avant que quoi que ce soit ne tourne."
    },
    {
      "question": "Dans un an, quelqu'un demande pourquoi une réclamation a été déposée. Que lui montrons-nous ?",
      "answer": "Le dossier. Chaque action proposée attend dans une file comme un enregistrement à part entière, et l'approuver est l'étape qui l'exécute.\n\nCette approbation est écrite avec le nom de la personne qui l'a donnée et ce qu'elle a décidé, gardés ensemble. La réponse à pourquoi cette réclamation a été déposée, ou pourquoi cette déclaration a été retenue, sort donc du dossier et non de celui qui s'en souvient encore."
    },
    {
      "question": "Où vont nos données ?",
      "answer": "Sur des machines que vous contrôlez, et nulle part ailleurs. Les fichiers de commande, les papiers de douane, les relevés de capteurs et le raisonnement qui porte dessus tournent tous sur du matériel que vous exploitez. Rien ne part chez un fournisseur de modèles extérieur.\n\nC'est la réponse qu'une revue de sécurité réclame avant de laisser un fournisseur détenir ses données de commande. C'est aussi pourquoi les trois licences ci-dessus se distinguent par la machine sur laquelle elles tournent : c'est la première question qu'un acheteur en secteur réglementé doit trancher."
    },
    {
      "question": "Que suis-je en train de payer, exactement ?",
      "answer": "Des postes. Un **poste**, c'est une personne qui utilise Runink. Vous comptez les personnes qui en ont besoin, vous multipliez par le prix ci-dessus, et c'est la licence.\n\nChaque poste inclut aussi une dotation de capacité de calcul : le temps de machine que Runink emploie pour lire vos documents, vérifier vos enregistrements et rédiger le travail. Cette dotation est comprise dans le prix du poste. Vous n'êtes facturé ni à la question, ni au document, ni au rapport."
    },
    {
      "question": "Qu'est-ce qu'une Unité de Calcul ?",
      "answer": "C'est le compteur du temps de machine, comme le kilowattheure est le compteur de l'électricité. Runink mesure la capacité en **Unités de Calcul** pour que ce qui vous a été attribué et ce que vous avez consommé s'expriment dans les mêmes termes, et les deux chiffres sont à l'écran dans la console au lieu d'arriver en fin de mois.\n\nChaque poste **Dédié** porte 1 000 unités, et votre organisation reçoit 2 000 unités de plus par tranche de 10 postes détenus. Ces unités sont mises en commun : une semaine intense pour une personne puise dans la même dotation qu'une semaine calme pour une autre."
    },
    {
      "question": "Que se passe-t-il si nous dépassons la dotation ?",
      "answer": "La capacité supplémentaire est facturée **0,10 $ par tranche de 100 unités**, ou **5,00 $ par heure de machine**. En pratique, cette ligne reste vide pour le travail courant du quotidien et apparaît quand vous lancez quelque chose de très gros en une seule fois : retraiter une année de documents en un après-midi, par exemple.\n\nVous voyez le total en cours dans la console et vous pouvez fixer un budget en face, de sorte que la première nouvelle d'un mois chargé ne soit pas la facture."
    },
    {
      "question": "Quelle licence nous convient ?",
      "answer": "Comptez d'abord vos personnes.\n\nMoins de dix : la **Licence Lite** est la bonne. Elle tourne sur une machine partagée avec d'autres clients, et c'est la seule qui se prend au mois — une évaluation n'exige donc pas un engagement d'un an.\n\nDix ou plus : la **Licence Dédiée** coûte moins par personne et tourne sur des machines réservées à votre seule entreprise, avec votre propre adresse web et la priorité sur la capacité que vous payez. Elle se prend à l'année.\n\nSi vos informations ne peuvent pas sortir de votre propre bâtiment, c'est **Enterprise**, et la conversation commence par l'endroit où cela doit tourner."
    },
    {
      "question": "Faut-il signer pour un an ?",
      "answer": "Seulement pour Dédiée et Enterprise. La **Licence Lite** se prend au mois à 86 $ par personne, ou à l'année à 75 $ — le même écart de 15 % que montre le sélecteur ci-dessus.\n\nDédiée et Enterprise se prennent à l'année parce que les deux supposent de mettre des machines de côté pour votre entreprise en particulier, et cette capacité reste réservée que vous l'utilisiez ou non une semaine donnée."
    },
    {
      "question": "Pourquoi l'utiliser davantage ne coûte-t-il pas plus cher ?",
      "answer": "Parce que le raisonnement tourne sur du matériel et non sur le service compté d'un tiers. Le coût d'une question, c'est l'électricité qu'il faut pour y répondre.\n\nLa conséquence pratique est budgétaire. Votre dépense dépend de la capacité que vous faites tourner, décidée une fois, et non d'un chiffre qui bouge selon le nombre de questions posées par votre équipe le mois dernier. Une équipe qui trouve à Runink un usage intensif ne découvre pas un coût qui grandit avec ce succès."
    }
  ]
}
{{< /faq >}}


---
