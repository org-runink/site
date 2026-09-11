---
title: "Tarifs"
description: "Vous payez pour le nombre de personnes qui utilisent Runink. Chaque personne inclut une dotation de capacité de calcul, donc l'utiliser davantage n'augmente pas la facture."
layout: "pricing"
date: "2024-05-20T00:00:00Z"
author: "Runink"
---

<div class="max-w-3xl mx-auto text-center mb-4">
  <p class="text-xl text-stone-300 font-medium leading-relaxed mb-6">
    Vous payez pour le nombre de personnes qui utilisent Runink. Chaque personne inclut dans son prix une dotation de capacité de calcul.
  </p>
  <p class="text-lg text-stone-400 font-medium leading-relaxed">
    Toute la logique tient là. La facture suit votre effectif, pas votre usage : une équipe qui trouve à Runink un usage intensif n'ouvre donc pas une ligne de dépense qui grandit avec lui. Les trois licences ci-dessous se distinguent sur une seule question : combien de personnes en ont besoin, et sur quelle machine cela tourne.
  </p>
</div>

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

<div class="py-12"></div>

{{< enterprise-a2a >}}
{{< faq >}}
{
  "title": "Comment Fonctionne La Facture",
  "description": "Ce qui vous est facturé, dans l'ordre où une équipe financière a l'habitude de le demander.",
  "questions": [
    {
      "question": "Que suis-je en train de payer, exactement ?",
      "answer": "Des postes. Un **poste**, c'est une personne qui utilise Runink. Vous comptez les personnes qui en ont besoin, vous multipliez par le prix ci-dessus, et c'est la licence.<br><br>Chaque poste inclut aussi une dotation de capacité de calcul : le temps de machine que Runink emploie pour lire vos documents, vérifier vos enregistrements et rédiger le travail. Cette dotation est comprise dans le prix du poste. Vous n'êtes facturé ni à la question, ni au document, ni au rapport."
    },
    {
      "question": "Qu'est-ce qu'une Unité de Calcul ?",
      "answer": "C'est le compteur du temps de machine, comme le kilowattheure est le compteur de l'électricité. Runink mesure la capacité en **Unités de Calcul** pour que ce qui vous a été attribué et ce que vous avez consommé s'expriment dans les mêmes termes, et les deux chiffres sont à l'écran dans la console au lieu d'arriver en fin de mois.<br><br>Chaque poste **Dédié** porte 1 000 unités, et votre organisation reçoit 2 000 unités de plus par tranche de 10 postes détenus. Ces unités sont mises en commun : une semaine intense pour une personne puise dans la même dotation qu'une semaine calme pour une autre."
    },
    {
      "question": "Que se passe-t-il si nous dépassons la dotation ?",
      "answer": "La capacité supplémentaire est facturée **0,10 $ par tranche de 100 unités**, ou **5,00 $ par heure de machine**. En pratique, cette ligne reste vide pour le travail courant du quotidien et apparaît quand vous lancez quelque chose de très gros en une seule fois : retraiter une année de documents en un après-midi, par exemple.<br><br>Vous voyez le total en cours dans la console et vous pouvez fixer un budget en face, de sorte que la première nouvelle d'un mois chargé ne soit pas la facture."
    },
    {
      "question": "Quelle licence nous convient ?",
      "answer": "Comptez d'abord vos personnes.<br><br>Moins de dix : la **Licence Lite** est la bonne. Elle tourne sur une machine partagée avec d'autres clients, et c'est la seule qui se prend au mois — une évaluation n'exige donc pas un engagement d'un an.<br><br>Dix ou plus : la **Licence Dédiée** coûte moins par personne et tourne sur des machines réservées à votre seule entreprise, avec votre propre adresse web et la priorité sur la capacité que vous payez. Elle se prend à l'année.<br><br>Si vos informations ne peuvent pas sortir de votre propre bâtiment, c'est **Enterprise**, et la conversation commence par l'endroit où cela doit tourner."
    },
    {
      "question": "Faut-il signer pour un an ?",
      "answer": "Seulement pour Dédiée et Enterprise. La **Licence Lite** se prend au mois à 86 $ par personne, ou à l'année à 75 $ — le même écart de 15 % que montre le sélecteur ci-dessus.<br><br>Dédiée et Enterprise se prennent à l'année parce que les deux supposent de mettre des machines de côté pour votre entreprise en particulier, et cette capacité reste réservée que vous l'utilisiez ou non une semaine donnée."
    },
    {
      "question": "Pourquoi l'utiliser davantage ne coûte-t-il pas plus cher ?",
      "answer": "Parce que le raisonnement tourne sur du matériel et non sur le service compté d'un tiers. Le coût d'une question, c'est l'électricité qu'il faut pour y répondre.<br><br>La conséquence pratique est budgétaire. Votre dépense dépend de la capacité que vous faites tourner, décidée une fois, et non d'un chiffre qui bouge selon le nombre de questions posées par votre équipe le mois dernier. Une équipe qui trouve à Runink un usage intensif ne découvre pas un coût qui grandit avec ce succès."
    }
  ]
}
{{< /faq >}}


---


<section class="faq-section mt-16 p-8 bg-sunk rounded-3xl border border-stone-800/80 shadow-2xl relative z-10">
  <div class="flex items-center gap-4 mb-8">
    <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-signal-fill to-signal-fill-hover flex items-center justify-center shadow-lg">
      <span class="material-symbols-outlined text-white">help_center</span>
    </div>
    <h2 class="text-3xl font-black text-white uppercase italic tracking-tight m-0">Questions Fréquentes</h2>
  </div>
  <div class="space-y-6">
    <div class="faq-item p-6 bg-stone-900 rounded-xl border border-stone-800/50 hover:border-signal/30 transition-colors">
      <h3 class="text-xl font-bold text-stone-200 mb-4">Que devons-nous budgéter au-delà de la licence elle-même ?</h3>
      <p class="text-stone-400 leading-relaxed">La licence est une ligne du coût. Avant de signer, mettez des chiffres en face de quatre autres. D'abord, le raccordement de Runink aux systèmes que vous utilisez déjà : votre système financier, votre système de transport ou d'entrepôt, et l'endroit où vivent vos documents. Ensuite, le transfert de l'historique que vous voulez lui faire lire. Troisièmement, les heures que vos propres équipes passent à l'apprendre et à changer la façon dont le travail est fait, qui est en général la ligne qu'on oublie. Quatrièmement, les machines. Avec les licences Lite et Dédiée, elles sont à nous ; avec Enterprise, elles sont à vous, et il faut chiffrer le matériel et les personnes qui le maintiennent. Ce que vous ne devriez pas avoir à budgéter, c'est une facture qui bouge selon l'usage que votre équipe fait du logiciel. C'est tout le sens d'une facturation au poste.</p>
    </div>
    <div class="faq-item p-6 bg-stone-900 rounded-xl border border-stone-800/50 hover:border-signal/30 transition-colors">
      <h3 class="text-xl font-bold text-stone-200 mb-4">Comment le prix se fixe-t-il si nous devons l'héberger nous-mêmes ?</h3>
      <p class="text-stone-400 leading-relaxed">C'est la licence Enterprise, et son prix se convient avec vous plutôt que de sortir d'une liste. Elle couvre les déploiements dans vos propres locaux, y compris des sites tenus entièrement hors réseau, et des machines placées près de l'endroit où le travail se fait. Ce que les gens veulent en général voir écrit, ce sont les niveaux de service, qui a le droit de voir quoi, et le registre tenu de qui a fait quoi. Apportez la contrainte qui vous pousse — le régulateur, la clause du contrat ou la revue de sécurité qui bloque à chaque fois — et la conversation part de là plutôt que d'une liste de fonctionnalités.</p>
    </div>
    <div class="faq-item p-6 bg-stone-900 rounded-xl border border-stone-800/50 hover:border-signal/30 transition-colors">
      <h3 class="text-xl font-bold text-stone-200 mb-4">Où vont nos données ?</h3>
      <p class="text-stone-400 leading-relaxed">Sur une machine que vous contrôlez, et elles y restent. Les documents, les enregistrements et le raisonnement qui porte sur eux s'exécutent tous sur du matériel situé à l'intérieur de votre périmètre, et rien n'est envoyé à un fournisseur de modèles extérieur. Cela compte autant sur le plan commercial que technique. La question qui bloque ces achats est presque toujours une version de « où vont nos informations », et la réponse est ici assez courte pour passer un questionnaire d'achat. Avec Lite et Dédiée, la machine est une machine que nous exploitons ; avec Enterprise, elle vous appartient. Dans aucun des deux cas il n'y a un tiers sur le chemin qui détient vos données.</p>
    </div>
  </div>
</section>
