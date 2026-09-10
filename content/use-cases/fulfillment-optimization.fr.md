---
title: "Couverture de Stock et Plan d'Approvisionnement"
description: "La plupart des alertes de rupture arrivent une fois le stock de sécurité déjà parti, ce qui vous laisse payer du fret aérien. Le but est de le voir tant qu'il reste le temps de commander normalement."
layout: "use_case"
product: "Runink FACE"
scenario: "inventory fulfillment"
standing: "hypothetical"
badge: "Optimisation Logistique"
badgeColor: "#0ea5e9"
date: "2024-05-20T00:00:00Z"
author: "Lead Data & Cloud Architect"
---

{{< section-container class="py-8" >}}
<div class="max-w-5xl mx-auto px-4">

<p class="text-[10px] font-black uppercase tracking-[0.25em] text-stone-500 mt-4 mb-3">Runink FACE &middot; Couverture de stock</p>
<p class="text-sm text-stone-500 font-medium mb-10 max-w-3xl">
<span class="rk-mark" data-standing="hypothetical">Hypothétique</span> &mdash; ceci est un scénario <strong class="text-stone-300">Runink FACE</strong>, son versant approvisionnement. Ce qui suit est ce que le produit est fait pour faire, et comment il tournerait sur vos propres enregistrements. C'est une illustration du mécanisme, pas le compte rendu d'un déploiement. <a href="/blog/whitepapers/runink-face/" class="underline decoration-stone-700 hover:text-stone-300">Ce qu'est FACE</a>.
</p>

<h2 class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6 mt-8">En Bref</h2>
<ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6 mb-12">
<li><strong class="text-stone-200">L'alerte dit quelle borne a été franchie, en mots.</strong> Le point de commande, le minimum et le maximum sont ceux que vous appliquez déjà : FACE ne les invente pas et ne les déduit pas d'un délai de livraison qu'il n'a jamais vu. Ce qu'il renvoie, c'est la borne franchie et le niveau qui l'a franchie, écrits en clair, pour qu'on puisse discuter l'alerte au lieu d'en accuser réception.</li>
<li><strong class="text-stone-200">La prévision vous dit à quel point lui faire confiance.</strong> Chaque projection nomme le modèle &mdash; choisi en mettant de côté la période la plus récente de votre propre historique et en réajustant chaque candidat sur ce qui la précède &mdash; et le nombre de périodes sur lesquelles il a pu apprendre. Quand l'historique d'une référence ne se prédit pas lui-même, c'est aussi l'un des constats.</li>
<li><strong class="text-stone-200">Les solutions de repli sont classées depuis votre propre grille de notation, et elles sont un contexte, pas une recommandation.</strong> Les fournisseurs de repli notés pour la référence exposée reviennent du mieux noté au moins bien noté, tirés des relevés de transporteurs et de fournisseurs que vous tenez déjà. Aucun écart de prix n'y est joint, car FACE ne détient aucune grille tarifaire, et un écart de prix qu'il ne peut pas sourcer serait le chiffre le plus citable de la page et le moins réel. Les noms sont consignés avec la décision ; ils ne la conditionnent pas.</li>
</ul>

    <div class="text-center mb-16">
        <h1 class="text-5xl md:text-6xl font-black !text-white text-white drop-shadow-md italic tracking-tighter uppercase mb-6">Arrêtez De L'Apprendre Trop Tard.</h1>
        <p class="text-xl text-stone-400 font-bold leading-relaxed">
            Une alerte de rupture qui arrive une fois le stock de sécurité parti n'est pas une alerte. C'est une facture de fret aérien avec quelques jours de préavis.
        </p>
    </div>

    <div class="flex flex-col gap-12 mb-20">
        <div>
            <h2 class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Où Cela Dérape</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                La plupart des alertes de stock se déclenchent sur un niveau. Quand la couverture passe sous la ligne, on vous le dit. Mais le fournisseur a toujours besoin de quinze jours. Et ces quinze jours partent du moment où on vous l'a dit, pas du moment où l'ennui a commencé.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Le choix est donc mauvais. Payer cher pour le faire venir par avion, ou le dire au client. Les deux se sont joués des semaines plus tôt, sur une tendance qui était visible tout du long dans vos propres ventes.
            </p>
            <p class="text-lg text-stone-400 font-medium font-semibold text-[#ea580c] tracking-wide font-bold text-sm">
                La commande était en retard avant que personne ne le sache.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                Il y a un second coût en dessous. Chaque maillon de la chaîne arrondit au carton plein et ajoute une marge de sécurité. L'usine finit donc par produire pour une demande qui n'a jamais existé. Cette enflure vit dans la suite des maillons, répartie sur quatre systèmes. Aucun d'eux ne la montre à lui seul.
            </p>
        </div>
        <div>
            <h2 class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Ce Qui Se Passe À La Place</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                FACE lit votre propre historique de ventes pour en tirer la saison et la tendance qui court dessous, et confronte la projection à des périodes qu'on ne lui a pas montrées. C'est la moitié qui vous dit qu'une référence tourne plus tôt que le plan ne le croit.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Le déclencheur sur le stock lui-même est volontairement terne, et il vaut mieux dire ce qu'il est que ce qu'il a l'air d'être. Le point de commande, le plancher et le plafond viennent de vous. FACE compare le niveau à ces bornes et renvoie la borne franchie et le niveau qui l'a franchie, en mots simples, plutôt qu'une couleur sur une tuile. Il ne déduit pas le seuil d'un délai de livraison fournisseur : il n'y a pas de modèle de délai là-dedans, et une alerte calée sur un nombre que le logiciel aurait deviné serait pire que l'alerte de niveau que vous avez déjà, parce qu'elle aurait l'air plus savante.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Ce qui arrive est une décision à prendre : la référence, la borne franchie, le fournisseur qui sert d'habitude, et les solutions de repli notées depuis votre propre grille, la meilleure d'abord. Ce qui n'arrive pas, c'est une comparaison de prix entre elles. FACE n'a aucune grille tarifaire, aucune table de tarifs et aucune recherche de tarif historique. L'écart de coût entre deux fournisseurs n'est donc pas une chose qu'il peut vous dire &mdash; et un écart inventé serait le premier chiffre qu'on vous citerait en réunion.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                La prévision qui court dessous est <a href="/use-cases/demand-forecasting/" class="underline decoration-stone-700 hover:text-stone-300">un scénario FACE à part entière</a> &mdash; comment une série est lue, quel modèle est choisi et ce qu'il dit quand une référence n'est simplement pas prévisible. Cette page porte sur la décision de commande qui en découle.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                Une personne nommée valide, corrige ou rejette, et son accord reste au dossier. C'est la validation qui l'envoie plus loin. Et là où une étape de l'action rédigée n'a encore rien derrière elle &mdash; l'écriture dans votre ERP en est l'exemple honnête &mdash; la réponse nomme cette étape comme non exécutée au lieu de déclarer l'ensemble fait. On vous dit quelle partie de l'action a eu lieu, et c'est la différence entre un système sur lequel on s'appuie et un système qu'il faut aller vérifier. Les marges de sécurité peuvent alors se discuter à partir de vos propres chiffres plutôt qu'à l'ancienneté.
            </p>
        </div>
        <div class="bg-[#1b1919] p-8 rounded-2xl border border-stone-800/80 shadow-[0_0_20px_rgba(234,88,12,0.05)] shadow-2xl">
             <h3 class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ea580c] to-[#ca4708] mb-4 tracking-tighter uppercase italic drop-shadow-lg">Comment Vous Sauriez Que Cela A Marché</h3>
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

    <div class="text-center">
        <a href="/#contact" class="inline-flex items-center justify-center px-10 py-5 text-xs font-black uppercase tracking-widest !text-white text-white drop-shadow-md transition-all duration-300 bg-gradient-to-r from-[#ea580c] to-[#ca4708] rounded-xl border border-[#ea580c]/30 hover:shadow-[0_0_20px_rgba(234,88,12,0.4)] hover:-translate-y-1">
            Réserver une consultation
        </a>
    </div>
</div>
{{< /section-container >}}
