---
title: "Couverture de Stock et Plan d'Approvisionnement"
description: "La plupart des alertes de rupture arrivent une fois le stock de sécurité déjà parti, ce qui vous laisse payer du fret aérien. Le but est de le voir tant qu'il reste le temps de commander normalement."
layout: "use_case"
product: "Runink FACE"
scenario: "inventory fulfillment"
badge: "Optimisation Logistique"
badgeColor: "#0ea5e9"
date: "2024-05-20T00:00:00Z"
author: "Runink"
---

{{< section-container class="py-8" >}}
<div class="max-w-5xl mx-auto px-4">

<p class="text-[10px] font-black uppercase tracking-[0.25em] text-stone-500 mt-4 mb-3">Runink FACE &middot; Couverture de stock</p>
<p class="text-sm text-stone-500 font-medium mb-10 max-w-3xl">
ceci est un scénario <strong class="text-stone-300">Runink FACE</strong>, son versant approvisionnement. Ce qui suit est ce que le produit est fait pour faire, et comment il tournerait sur vos propres enregistrements. C'est une illustration du mécanisme, pas le compte rendu d'un déploiement. <a href="/blog/whitepapers/runink-face/" class="underline decoration-stone-700 hover:text-stone-300">Ce qu'est FACE</a>.
</p>

<h2 id="en-bref" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6 mt-8">En Bref</h2>
<ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6 mb-12">
<li><strong class="text-stone-200">L'alerte dit quelle borne a été franchie, en mots.</strong> Le point de commande, le minimum et le maximum sont ceux que vous appliquez déjà. Ce qu'il renvoie, c'est la borne franchie et le niveau qui l'a franchie, écrits en clair, pour qu'on puisse discuter l'alerte au lieu d'en accuser réception.</li>
<li><strong class="text-stone-200">La prévision vous dit à quel point lui faire confiance.</strong> Chaque projection nomme le modèle &mdash; choisi en mettant de côté la période la plus récente de votre propre historique et en réajustant chaque candidat sur ce qui la précède &mdash; et le nombre de périodes sur lesquelles il a pu apprendre. Quand l'historique d'une référence ne se prédit pas lui-même, c'est aussi l'un des constats.</li>
</ul>

    <div class="text-center mb-16">
        <h2 id="arretez-de-lapprendre-trop-tard" class="text-5xl md:text-6xl font-black !text-white text-white drop-shadow-md italic tracking-tighter uppercase mb-6">Arrêtez De L'Apprendre Trop Tard.</h2>
        <p class="text-xl text-stone-400 font-bold leading-relaxed">
            Une alerte de rupture qui arrive une fois le stock de sécurité parti n'est pas une alerte. C'est une facture de fret aérien avec quelques jours de préavis.
        </p>
    </div>

    <div class="flex flex-col gap-12 mb-20">
        <div>
            <h2 id="ou-cela-derape" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Où Cela Dérape</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                La plupart des alertes de stock se déclenchent sur un niveau. Quand la couverture passe sous la ligne, on vous le dit. Mais le fournisseur a toujours besoin de quinze jours. Et ces quinze jours partent du moment où on vous l'a dit, pas du moment où l'ennui a commencé.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Le choix est donc mauvais. Payer cher pour le faire venir par avion, ou le dire au client. Les deux se sont joués des semaines plus tôt, sur une tendance qui était visible tout du long dans vos propres ventes.
            </p>
            <p class="text-lg text-stone-400 font-medium font-semibold text-signal tracking-wide font-bold text-sm">
                La commande était en retard avant que personne ne le sache.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                Il y a un second coût en dessous. Chaque maillon de la chaîne arrondit au carton plein et ajoute une marge de sécurité. L'usine finit donc par produire pour une demande qui n'a jamais existé. Cette enflure vit dans la suite des maillons, répartie sur quatre systèmes. Aucun d'eux ne la montre à lui seul.
            </p>
        </div>
        <div>
            <h2 id="ce-qui-se-passe-a-la-place" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Ce Qui Se Passe À La Place</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                FACE lit votre propre historique de ventes pour en tirer la saison et la tendance qui court dessous, et confronte la projection à des périodes qu'on ne lui a pas montrées. C'est la moitié qui vous dit qu'une référence tourne plus tôt que le plan ne le croit.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Le déclencheur sur le stock lui-même est volontairement simple. Le point de commande, le plancher et le plafond viennent de vous. FACE compare le niveau à ces bornes et renvoie la borne franchie et le niveau qui l'a franchie, en mots simples, plutôt qu'une couleur sur une tuile.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                La prévision qui court dessous est <a href="/use-cases/demand-forecasting/" class="underline decoration-stone-700 hover:text-stone-300">un scénario FACE à part entière</a> &mdash; comment une série est lue, quel modèle est choisi et ce qu'il dit quand une référence n'est simplement pas prévisible. Cette page porte sur la décision de commande qui en découle.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                Une personne nommée valide, corrige ou rejette, et son accord reste au dossier. C'est la validation qui l'envoie plus loin. La réponse nomme chaque étape exécutée et toute étape qui n'a pas pu l'être, au lieu de déclarer l'ensemble fait. On vous dit quelle partie de l'action a eu lieu, et c'est la différence entre un système sur lequel on s'appuie et un système qu'il faut aller vérifier. Les marges de sécurité peuvent alors se discuter à partir de vos propres chiffres plutôt qu'à l'ancienneté.
            </p>
        </div>
        <div>
            <h2 id="qui-s-en-occupe" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Qui S'En Occupe</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Trois bureaux, et ce que chacun a sur les bras aujourd'hui.
            </p>
            <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">Responsable de la planification.</strong> Aujourd'hui l'alerte se déclenche sur un niveau, et le fournisseur a toujours besoin de quinze jours qui commencent le jour où on vous l'a dit, pas le jour où l'ennui a commencé. Ce qui change, c'est que la projection sous la décision est vérifiée contre des périodes qu'on ne lui a pas montrées, et que le déclencheur dit quelle borne a été franchie et par quel niveau, en toutes lettres.</li>
                <li><strong class="text-stone-200">Finance et achats.</strong> Aujourd'hui le coût d'apprendre tard sort en fret express, classé sous des codes que personne ne relit. Ce qui change, c'est que l'avertissement arrive sous forme d'une borne, d'un niveau et d'une raison, et non d'une couleur sur une tuile, si bien que la conversation sur la commande porte sur un nombre que quelqu'un peut vérifier.</li>
                <li><strong class="text-stone-200">Directeur des opérations.</strong> Aujourd'hui chaque étape de la chaîne arrondit au carton complet et ajoute une marge de sécurité, et cette croissance vit répartie sur quatre systèmes dont aucun ne la montre entière. Ce qui change, c'est que les marges de sécurité se discutent à partir de vos propres chiffres plutôt qu'à l'ancienneté.</li>
            </ul>
        </div>
        <div class="bg-sheet p-8 rounded-lg border border-stone-800/80 shadow-2xl">
             <h3 id="comment-vous-sauriez-que-cela-a-marche" class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-signal-fill to-signal-fill-hover mb-4 tracking-tighter uppercase italic drop-shadow-lg">Comment Vous Sauriez Que Cela A Marché</h3>
             <p class="text-lg text-stone-400 font-medium mb-6">
                Chaque chiffre ci-dessous est le vôtre, pas le nôtre. Notez où vous en êtes aujourd'hui, car ce point de départ est perdu pour de bon dès que quelque chose change.
             </p>
             <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">Ce que vous dépensez en transport d'urgence.</strong> Vos factures fournisseurs, filtrées sur les codes que votre équipe emploie pour l'aérien ou le fret express. Prenez une année entière, car c'est saisonnier.</li>
                <li><strong class="text-stone-200">L'erreur de prévision, référence par référence.</strong> La prévision de votre système de planification face à ce qui s'est vraiment vendu. Le but n'est pas que l'erreur baisse. Le but est qu'elle soit dite au lieu d'être supposée.</li>
                <li><strong class="text-stone-200">Les jours de couverture par référence.</strong> Combien de jours de stock porte chaque référence, et quelle part tient à une marge que plus personne ne sait expliquer.</li>
                <li><strong class="text-stone-200">Les commandes livrées complètes et à l'heure.</strong> Votre système de transport ou d'entrepôt. Mesurez face à la date et à la quantité promises sur la ligne de commande, mois par mois et client par client. Certains de vos ratés sont inévitables. Regardez ceux qui ne le sont pas.</li>
             </ul>
             <p class="text-sm text-stone-500 font-bold uppercase tracking-widest text-xs mt-6 text-center">Apportez une année d'une famille de produits et vos codes de fret express.</p>
        </div>
    </div>

{{< faq >}}
{
  "title": "Questions D'une Équipe De Planification",
  "description": "Ce que l'on demande avant de parler d'un contrat.",
  "questions": [
    {
      "question": "D'où viennent les seuils ?",
      "answer": "De vous. Le point de commande, le plancher et le plafond sont ceux que vous utilisez déjà. FACE compare le niveau à ces bornes et renvoie celle qui a été franchie et le niveau qui l'a franchie. Le seuil reste le vôtre délibérément : un avertissement calé sur un délai d'approvisionnement que le logiciel aurait deviné aurait l'air plus malin que l'alerte de niveau dont vous disposez déjà, et vaudrait moins."
    },
    {
      "question": "Que renvoie exactement le déclencheur ?",
      "answer": "La borne franchie, le niveau qui l'a franchie et la raison, écrits en toutes lettres plutôt que montrés comme une couleur sur une tuile. C'est écrit ainsi pour que l'avertissement puisse être discuté au lieu d'être simplement accusé réception."
    },
    {
      "question": "Quelle confiance accorder à la prévision qui est dessous ?",
      "answer": "Chaque projection nomme le modèle qui l'a produite et le nombre de périodes dont il a disposé pour apprendre. Le modèle a été choisi en mettant de côté la portion la plus récente de votre propre historique et en réajustant chaque candidat sur ce qui précédait. Quand l'historique d'une référence ne se prédit pas lui-même, c'est aussi l'un des constats."
    },
    {
      "question": "Qui valide la commande qu'il rédige ?",
      "answer": "Une personne désignée l'approuve, la modifie ou la refuse, et cette validation reste au dossier. C'est l'approbation qui l'envoie. La réponse nomme chaque étape exécutée et toute étape qui n'a pas pu l'être, au lieu de donner l'ensemble pour fait, si bien qu'on vous dit quelle partie de l'action a eu lieu."
    },
    {
      "question": "Où se trouve la prévision elle-même ?",
      "answer": "Dans son propre scénario. Comment une série est lue, quel modèle est choisi et ce qu'il dit lorsqu'une référence n'est tout simplement pas prévisible est décrit dans [la prévision de la demande](/fr/use-cases/demand-forecasting/). Cette page-ci est la décision de commande qui en découle, et les deux sont tenues séparées parce que ce ne sont pas les mêmes personnes qui en débattent."
    },
    {
      "question": "Qu'apporter à une première conversation ?",
      "answer": "Une année d'une famille de produits, et les codes que votre équipe utilise pour le fret aérien ou express. Une année entière plutôt qu'un trimestre, parce que le coût d'apprendre tard est saisonnier et qu'un trimestre vous flattera ou vous accablera au hasard."
    }
  ]
}
{{< /faq >}}

    <div class="text-center">
        <a href="{{< contacturl >}}" class="inline-flex items-center justify-center px-10 py-5 text-xs font-black uppercase tracking-widest !text-on-fill text-on-fill drop-shadow-md transition-all duration-300 bg-gradient-to-r from-signal-fill to-signal-fill-hover rounded-xl border border-signal/30 hover:shadow-2xl hover:-translate-y-1">
            Réserver une consultation
        </a>
    </div>
</div>
{{< /section-container >}}
