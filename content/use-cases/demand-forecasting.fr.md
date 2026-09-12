---
title: "Quand la Demande Tourne Avant le Plan"
description: "Une référence commence à bouger des semaines avant le point de commande. Le temps que le plan rattrape, la couverture est partie, et la différence se paie en fret aérien. Il s'agit de lire le retournement tant que c'est encore un problème de prévision."
layout: "use_case"
product: "Runink FACE"
badge: "Signal de Demande"
date: "2024-05-20T00:00:00Z"
author: "Runink"
---

{{< section-container class="py-8" >}}
<div class="max-w-5xl mx-auto px-4">

<h2 id="en-bref" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6 mt-8">En Bref</h2>
<ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6 mb-8">
<li><strong class="text-stone-200">La saison et la tendance sont séparées.</strong> Votre propre historique est décomposé en tendance de fond, forme saisonnière qui se répète, et reste. C'est dans le reste qu'un retournement apparaît d'abord.</li>
<li><strong class="text-stone-200">La prévision dit quelle méthode l'a produite, et pourquoi celle-là.</strong> Des modèles concurrents sont essayés sur des périodes que votre historique contient déjà, et celui qui a le mieux prédit ces périodes est celui qui est retenu. La réponse porte le nom de la méthode qui a gagné.</li>
<li><strong class="text-stone-200">Une série qu'il ne peut pas ajuster est refusée, et non ajustée quand même.</strong> Trop peu de périodes, ou aucun modèle qui tienne, et la réponse le dit. Elle ne revient pas sous forme de courbe d'allure assurée avec rien dessous.</li>
</ul>

<p class="mb-12">
    <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-stone-600 text-stone-400 text-[10px] font-black uppercase tracking-[0.25em]">
        <span class="inline-block w-2 h-2 rounded-full border border-stone-400"></span>Hypothétique
    </span>
    <span class="block mt-3 text-sm text-stone-500 font-medium">
        Cette page décrit un mécanisme et la forme d'une semaine de travail, pas un événement qui a eu lieu. C'est une illustration, et aucune partie n'en a été exécutée sur les données d'un client. Rien ici n'est mesuré, et il n'existe aucun chiffre sur ce qu'elle renvoie.
    </span>
</p>

    <div class="text-center mb-16">
        <h2 id="le-signal-a-tourne-avant-le-plan" class="text-5xl md:text-6xl font-black !text-white text-white drop-shadow-md italic tracking-tighter uppercase mb-6">Le Signal A Tourné Avant Le Plan.</h2>
        <p class="text-xl text-stone-400 font-bold leading-relaxed">
            Une référence commence à bouger bien avant que le point de commande ne bouge. L'écart entre ces deux dates est tout le problème, et il est d'ordinaire déjà joué quand quelqu'un en est informé.
        </p>
    </div>

    <div class="flex flex-col gap-12 mb-20">
        <div>
            <h2 id="ou-cela-derape" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Où Cela Dérape</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Le plan de demande est reconstruit par cycles. Quelqu'un exporte l'historique des ventes, y applique les hypothèses du cycle précédent, débat des exceptions en réunion, et recharge le résultat. C'est un travail soigné et c'est un travail honnête, et il décrit un mois qui est déjà terminé.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Pendant ce temps, une référence tourne. Pas de façon spectaculaire — un pic saisonnier qui arrive tôt, une promotion qui a tenu après l'arrêt de la promotion, une région qui est descendue d'un cran sans bruit et y est restée. Aucune de ces choses ne franchit un seuil, car le niveau reste dans la bande. Elles ne deviennent visibles qu'en séparant la saison de la tendance, et personne n'a l'après-midi qu'il faut pour le faire référence par référence.
            </p>
            <p class="text-lg text-stone-400 font-medium font-semibold text-signal tracking-wide font-bold text-sm">
                La prévision était fausse des semaines avant la rupture de stock.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Il y a une version pire. Un planificateur qui s'est déjà fait prendre cesse de croire le chiffre et porte du stock en trop partout, ce qui est cher et invisible. Un planificateur qui ne s'est pas encore fait prendre le croit entièrement, et l'apprend d'un seul coup. Ni l'un ni l'autre n'a reçu quoi que ce soit qui disait à quel point la prévision était fiable, donc tous deux devinaient à propos d'une devinette.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                C'est le problème du planificateur de la demande et celui du responsable S&amp;OP, et il arrive chez le planificateur approvisionnement comme l'urgence de quelqu'un d'autre.
            </p>
        </div>
        <div>
            <h2 id="ce-qui-se-passe-a-la-place" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Ce Qui Se Passe À La Place</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Chaque série est démontée avant d'être projetée. La tendance en dessous, la forme saisonnière qui se répète, et le résidu — ce que la série a fait que ni l'une ni l'autre n'explique. Un retournement se voit d'abord dans le résidu, et c'est pourquoi le résidu est rapporté plutôt que jeté.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                La série est aussi testée, d'abord, pour savoir si elle est assez stable pour être modélisée : le test est nommé et la statistique est affichée à côté du seuil auquel elle a été comparée. Si elle dérive, elle est différenciée avant tout ajustement, et le fait qu'il ait fallu le faire est énoncé. On ne vous demande pas de prendre la projection pour argent comptant ; on vous montre le calcul qui a conduit à la projeter ainsi.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Ensuite, plus d'une méthode est essayée. Une décomposition saisonnière et un modèle autorégressif classique produisent chacun une prévision, et les deux sont notés en remontant l'horloge et en leur demandant de prédire des périodes que votre propre historique contient déjà. Celui qui a le mieux prédit ces périodes est celui que vous recevez, et il arrive étiqueté avec son nom et avec le fait qu'il a été choisi de cette façon. Quand aucun ne tient, une méthode de repli simple est utilisée, et la réponse dit que c'est un repli.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Une série avec trop peu d'historique est refusée. Elle revient en disant qu'il n'y a pas assez de périodes pour modéliser, ce qui est une réponse plus utile qu'une courbe tracée à travers quatre points.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Ceci est le signal, pas la réponse. Quoi commander, quelle couverture tenir et quel fournisseur peut encore tenir la date, c'est le travail suivant, et il est décrit dans <a href="/fr/use-cases/fulfillment-optimization/">couverture de stock et plan d'approvisionnement</a>. La prévision dit que la référence a tourné et avec quelle confiance ; l'approvisionnement décide quoi en faire. Les tenir séparés est délibéré, car les deux sont débattus par des personnes différentes.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                Ce qui parvient à une personne est un seul élément : cette référence, le retournement, la méthode derrière, les périodes sur lesquelles elle a été testée, et une modification rédigée du plan. Une personne nommée l'approuve, la modifie ou la refuse, et cette décision reste au dossier. C'est l'approbation qui l'envoie — et là où une étape derrière n'a encore rien d'implémenté, une écriture dans votre système de planification étant l'exemple honnête, la réponse nomme cette étape comme non exécutée au lieu de rapporter la modification comme faite. La décision et l'exécution sont consignées comme deux faits distincts, parce qu'ils le sont. Cela tourne sur des machines qui vous appartiennent, et l'historique ne les quitte jamais.
            </p>
        </div>
        <div class="bg-sheet p-8 rounded-2xl border border-stone-800/80 shadow-2xl">
             <h3 id="comment-vous-saurez-que-cela-a-marche" class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-signal-fill to-signal-fill-hover mb-4 tracking-tighter uppercase italic drop-shadow-lg">Comment Vous Saurez Que Cela A Marché</h3>
             <p class="text-lg text-stone-400 font-medium mb-6">
                Chaque chiffre ci-dessous est le vôtre, pas le nôtre. Nous ne vous proposons pas les nôtres, car nous n'avons pas les vôtres. Notez où vous en êtes aujourd'hui, car ce point de départ est perdu pour de bon dès que les choses s'améliorent.
             </p>
             <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">L'erreur de prévision, par référence, face à ce qui s'est réellement vendu.</strong> Sortie de votre système de planification. Prenez une année entière, car les références saisonnières et les références régulières échouent différemment. Le but n'est pas que l'erreur baisse. Le but est qu'elle soit énoncée par référence au lieu d'être moyennée en un seul chiffre rassurant.</li>
                <li><strong class="text-stone-200">Combien de périodes passent entre le retournement d'une référence et le changement du plan.</strong> Choisissez une poignée de références qui ont mal tourné l'an dernier. Trouvez la semaine où la série a réellement tourné, puis la semaine où le plan a été révisé. Cet écart, c'est à cela que tout ceci sert.</li>
                <li><strong class="text-stone-200">Combien de références sont prévues à la main, et par qui.</strong> La plupart des équipes ont un ensemble de références qu'une seule personne porte dans sa tête. Comptez-les. C'est votre risque de concentration, et c'est d'ordinaire une nouvelle pour quelqu'un.</li>
                <li><strong class="text-stone-200">Quelles références vous n'avez pas pu prévoir du tout.</strong> Références nouvelles, historiques courts, références remplacées en cours d'année. Écrivez la liste avant de commencer, car un système qui admet ne pas savoir prévoir celles-là n'est un progrès que si vous saviez lesquelles c'étaient.</li>
             </ul>
             <p class="text-sm text-stone-500 font-bold uppercase tracking-widest text-xs mt-6 text-center">Apportez une année d'historique hebdomadaire pour une famille de produits, et votre erreur de prévision actuelle par référence.</p>
        </div>
    </div>

    <div class="text-center">
        <a href="{{< contacturl >}}" class="inline-flex items-center justify-center px-10 py-5 text-xs font-black uppercase tracking-widest !text-on-fill text-on-fill drop-shadow-md transition-all duration-300 bg-gradient-to-r from-signal-fill to-signal-fill-hover rounded-xl border border-signal/30 hover:shadow-2xl hover:-translate-y-1">
            Réserver une consultation
        </a>
    </div>
</div>
{{< /section-container >}}
