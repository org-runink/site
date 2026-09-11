---
title: "Les Retours, Et Quoi En Faire"
description: "Un article retourné vaut le plus le jour où il revient. La décision sur sa destination — rayon, reconditionnement, recyclage ou élimination — est rédigée au scan, à partir d'une politique écrite qui donne à la même note d'état la même réponse chaque fois."
layout: "use_case"
product: "Runink FACE"
scenario: "reverse logistics"
badge: "Économie Circulaire"
badgeColor: "#14b8a6"
date: "2024-05-20T00:00:00Z"
author: "Runink"
---

{{< section-container class="py-8" >}}
<div class="max-w-5xl mx-auto px-4">

<p class="text-[10px] font-black uppercase tracking-[0.25em] text-stone-500 mt-4 mb-3">Runink FACE &middot; Logistique inverse</p>
<p class="text-sm text-stone-500 font-medium mb-10 max-w-3xl">
ceci est un scénario <strong class="text-stone-300">Runink FACE</strong>, son versant retours et économie circulaire. Ce qui suit est ce que le produit est fait pour faire, et comment il tournerait sur vos propres enregistrements. C'est une illustration du mécanisme, pas le compte rendu d'un déploiement. <a href="/blog/whitepapers/runink-face/" class="underline decoration-stone-700 hover:text-stone-300">Ce qu'est FACE</a>.
</p>

<h2 class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6 mt-8">En Bref</h2>
<ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6 mb-12">
<li><strong class="text-stone-200">La décision est rédigée au scan.</strong> FACE travaille sur quatre choses que le quai lui donne : l'identifiant du retour, le code-barres, la note d'état que la personne au quai a inscrite, et la valeur de l'article telle qu'elle la saisit. Il ne va rien chercher derrière &mdash; ni la commande, ni la garantie, ni un fichier de prix &mdash; et il répond au moment où le colis arrive, non l'après-midi où quelqu'un se rend enfin au parc.</li>
<li><strong class="text-stone-200">La politique est écrite, donc la même note d'état reçoit toujours la même réponse.</strong> Remettre en rayon, reconditionner, recycler, éliminer : chaque note d'état mène à l'une de ces voies et à l'une de quatre destinations inscrites dans le code, de la même façon chaque fois, quelle que soit la personne au quai et quelle que soit la file. Une note qu'il ne reconnaît pas est refusée plutôt que rangée sous sa meilleure supposition.</li>
<li><strong class="text-stone-200">Il y a bien un chiffre de récupération, et c'est de l'arithmétique sur un nombre que vous saisissez.</strong> Le triage renvoie un rendement de récupération estimé et un coût de reconditionnement, et tous deux sont la valeur saisie au quai multipliée par une fraction fixée selon la note : un article impeccable rend 95% de cette valeur et rien en reconditionnement, un article endommagé rend 75% avec un quart en réparation. Rien n'est mesuré et rien n'est consulté. Nous préférons que vous connaissiez le multiplicateur plutôt que vous vous fiiez au signe dollar.</li>
<li><strong class="text-stone-200">Le triage ne décide rien de lui-même.</strong> Il répond à l'écran et s'arrête là : il ne déplace aucun stock, n'émet aucun avoir et n'enregistre aucune validation. La décision reste celle de la personne au quai, et rien dans cette étape ne peut la prendre à sa place.</li>
</ul>

    <div class="text-center mb-16">
        <h1 class="text-5xl md:text-6xl font-black !text-white text-white drop-shadow-md italic tracking-tighter uppercase mb-6">Un Retour Vaut Le Plus Le Premier Jour.</h1>
        <p class="text-xl text-stone-400 font-bold leading-relaxed">
            L'essentiel de ce qu'un retour perd, il le perd en attendant. Pas dans la réparation, pas dans le transport : dans les semaines qu'il passe dans un coin du quai pendant que quelqu'un cherche où il devrait aller.
        </p>
    </div>

    <div class="flex flex-col gap-12 mb-20">
        <div>
            <h2 class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Où Cela Dérape</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Un colis revient. Pour décider où il doit aller, quelqu'un doit savoir ce qu'il contenait, s'il est encore sous garantie, dans quel état il est, ce qu'il rapporterait maintenant et ce que coûterait une réparation. Cela fait quatre systèmes et un coup d'œil dans le colis.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Alors le colis attend. Il attend dans un parc sur le quai avec le reste des retours de la semaine, et le parc est trié quand il y a une après-midi de libre. Pendant ce temps le client attend son remboursement, et l'article vieillit en silence et vaut moins.
            </p>
            <p class="text-lg text-stone-400 font-medium font-semibold text-signal tracking-wide font-bold text-sm">
                Chaque semaine qu'un retour attend, il vaut moins qu'avant.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                Et quand l'après-midi arrive, le tri se fait à l'œil et par habitude. De la bonne marchandise part au rebut parce que la file était longue. De la marchandise cassée repart en rayon et revient aussitôt. Personne n'avait l'intention de faire ni l'un ni l'autre.
            </p>
        </div>
        <div>
            <h2 class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Ce Qui Se Passe À La Place</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Le scan est le moment où le travail se fait. La note d'état entre avec le retour, et une orientation en sort : directement au centre de retours, en reconditionnement, en recyclage en boucle fermée, ou en élimination de déchets dangereux là où la note l'exige. La propriété utile n'est pas qu'une machine ait décidé &mdash; c'est que la décision est la même chaque fois. La même note d'état produit la même orientation un mardi calme et le lundi après Noël, c'est-à-dire précisément au moment où trier à l'œil cesse d'être trier.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Une note d'état qu'il ne reconnaît pas revient comme un refus et non comme une orientation. Cela vaut plus que ça n'en a l'air : le défaut que cela remplace, c'est un colis qui a reçu une orientation d'apparence plausible parce qu'il fallait bien mettre quelque chose dans le champ, et personne en aval ne pouvait distinguer cette réponse d'une vraie.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                De l'argent revient avec l'orientation, et il vaut la peine de savoir exactement quelle sorte de nombre c'est. À côté de la voie, le triage renvoie un rendement de récupération estimé et un coût de reconditionnement, et le cockpit imprime les deux en montants en dollars sous ces deux libellés. Tous deux sont la valeur que quelqu'un a saisie au quai multipliée par une fraction fixée selon la note &mdash; un article impeccable à 95% de cette valeur et rien en reconditionnement, un article endommagé à 75% avec un quart en réparation, et les autres notes sur le même modèle. Aucun fichier de prix n'est consulté, aucune revente n'est observée. Le chiffre est l'arithmétique de la politique sur ce que vous avez saisi, et il vaut exactement ce que valait cette saisie &mdash; ce que vous pouvez juger et nous non.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                La destination est de la même nature, et ici le mot honnête est « inachevé ». C'est l'une de quatre chaînes de caractères inscrites dans le code, et deux d'entre elles nomment des sites précis &mdash; un centre de retours et un centre de reconditionnement, tous deux en Inde, sans aucun rapport avec l'un de vos contrats. Vers quelle installation une note d'état devrait aller relève de votre décision et de votre contrat ; le code ne vous laisse pas encore le dire. C'est une limite de ce qui est construit aujourd'hui, pas un principe de conception, et c'est la première chose qu'un déploiement aurait à corriger.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                L'appel de triage, lui, n'envoie rien. Il renvoie une orientation et s'arrête : aucun registre de stock n'est écrit, aucun avoir n'est émis, aucune validation n'est conservée. Agir sur une action rédigée relève d'une autre partie de FACE, et là la décision est enregistrée au nom d'une personne avant que quoi que ce soit ne s'exécute ; et là où une étape derrière elle n'a pas encore d'implémentation, l'écriture dans un ERP en étant l'exemple honnête, la réponse nomme l'étape qui n'a pas eu lieu au lieu de déclarer le mouvement accompli.
            </p>
        </div>
        <div class="bg-sheet p-8 rounded-2xl border border-stone-800/80 shadow-2xl">
             <h3 class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-signal-fill to-signal-fill-hover mb-4 tracking-tighter uppercase italic drop-shadow-lg">Comment Vous Sauriez Que Cela A Marché</h3>
             <p class="text-lg text-stone-400 font-medium mb-6">
                Chaque chiffre ci-dessous est le vôtre, pas le nôtre. Notez où vous en êtes aujourd'hui, car ce point de départ est perdu pour de bon dès que quelque chose change.
             </p>
             <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">Le nombre de jours entre l'arrivée du colis et la décision.</strong> Prenez un mois de retours. Notez quand chacun a été enregistré, et quand quelqu'un a dit où il allait. L'écart est tout le sujet.</li>
                <li><strong class="text-stone-200">Ce que vous avez récupéré, en part de ce que valait la marchandise.</strong> À partir de vos avoirs et de votre registre de stock : à quelle valeur la marchandise retournée était portée, face à ce que vous avez récupéré en la vendant, en la réparant ou en la mettant au rebut.</li>
                <li><strong class="text-stone-200">Où sont allés les retours.</strong> Un trimestre de retours, réparti entre rayon, réparation et rebut. Demandez ensuite combien de ceux mis au rebut étaient encore sous garantie. La plupart des équipes n'ont jamais regardé.</li>
                <li><strong class="text-stone-200">Le nombre de jours pour rembourser le client.</strong> Depuis l'ouverture du retour jusqu'à l'arrivée de l'avoir sur son compte, d'après vos propres enregistrements de facturation.</li>
             </ul>
             <p class="text-sm text-stone-500 font-bold uppercase tracking-widest text-xs mt-6 text-center">Apportez un mois de retours et vos avoirs.</p>
        </div>
    </div>

    <div class="text-center">
        <a href="/fr/#contact" class="inline-flex items-center justify-center px-10 py-5 text-xs font-black uppercase tracking-widest !text-on-fill text-on-fill drop-shadow-md transition-all duration-300 bg-gradient-to-r from-signal-fill to-signal-fill-hover rounded-xl border border-signal/30 hover:shadow-2xl hover:-translate-y-1">
            Réserver une consultation
        </a>
    </div>
</div>
{{< /section-container >}}
