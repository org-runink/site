---
title: "Parler aux Conducteurs sans Écran"
description: "Celui qui sait qu'un chargement est en retard est justement celui qui ne peut pas taper. Demander et répondre à voix haute met le fait au dossier pendant que le camion roule, et la régulation reste celle qui fait le changement."
layout: "use_case"
product: "Runink FACE"
scenario: "reactive logistics"
badge: "Régulation Vocale par IA"
badgeColor: "#f59e0b"
date: "2024-05-20T00:00:00Z"
author: "Runink"
---

{{< section-container class="py-8" >}}
<div class="max-w-5xl mx-auto px-4">

<p class="text-[10px] font-black uppercase tracking-[0.25em] text-stone-500 mt-4 mb-3">Runink FACE &middot; Logistique réactive, côté conducteur</p>
<p class="text-sm text-stone-500 font-medium mb-10 max-w-3xl">
ceci est un scénario <strong class="text-stone-300">Runink FACE</strong>, son versant conducteur. Ce qui suit est ce que le produit est fait pour faire, et comment il tournerait sur les enregistrements de votre propre flotte. C'est une illustration du mécanisme, pas le compte rendu d'un déploiement. <a href="/blog/whitepapers/runink-face/" class="underline decoration-stone-700 hover:text-stone-300">Ce qu'est FACE</a>.
</p>

<h2 id="en-bref" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6 mt-8">En Bref</h2>
<ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6 mb-12">
<li><strong class="text-stone-200">Le conducteur demande à voix haute et entend la réponse.</strong> Où est l'arrêt suivant, ce que le client a demandé, par quelle porte entrer. Aucun écran à lire et aucune raison de se ranger sur le bas-côté. Chaque réponse de la conversation est synthétisée dans le processus FACE lui-même, à partir d'une voix embarquée dans le binaire, et la parole qui entre va au serveur de modèles que vous faites déjà tourner &mdash; l'unique point d'inférence vers lequel vous pointez FACE, portant un modèle capable d'audio &mdash; et non à une API vocale exploitée par quelqu'un d'autre. Deux nuances, énoncées plutôt qu'enfouies : ce point d'accès est un point que vous configurez et non un refus d'appeler vers l'extérieur inscrit dans le code ; et l'avis d'enregistrement et l'accueil qui ouvrent l'appel sont prononcés par la voix de l'opérateur de téléphonie lui-même, car ils sont lus depuis les instructions d'ouverture de l'appel, avant que le canal vers vos machines ne soit ouvert.</li>
<li><strong class="text-stone-200">C'est un appel téléphonique, donc cela passe par le réseau téléphonique.</strong> Autant le dire franchement plutôt que de l'enfouir. Le segment entre la cabine et la maison est porté par un opérateur de téléphonie, comme n'importe quel autre appel que passent vos conducteurs. Ce que cet opérateur n'obtient jamais, c'est le texte : la transcription, et le raisonnement qui produit la réponse, se font sur vos machines, et la réponse parlée y est encodée aussi. Il transporte bien cet audio, comme il le doit, et sa propre voix lit l'avis d'enregistrement et l'accueil avant que le canal vers vos machines ne s'ouvre.</li>
<li><strong class="text-stone-200">Ce que l'appel produit est une transcription, pas une entrée sur le tableau.</strong> Les deux côtés de la conversation sont écrits dans le journal d'appel, locuteur par locuteur, si bien que l'heure perdue à la barrière est consignée au moment où elle est dite. Ce qu'un tour de parole ne peut pas faire, c'est écrire dans votre système de régulation ou de transport &mdash; il n'existe aucun chemin d'action de l'appel vers vos enregistrements. Un mot urgent dans l'appel ne déclenche rien non plus : le chemin téléphonique écrit la ligne et s'arrête là. La remontée sur mot urgent existe bien dans FACE, mais du côté WhatsApp et SMS, où un message entrant correspondant à une courte liste de mots-clés est transféré vers un numéro de responsable configuré. Au téléphone, c'est toujours une personne nommée à la régulation, qui lit le journal, qui le transforme en changement.</li>
</ul>

    <div class="text-center mb-16">
        <h2 id="les-mains-sur-le-volant" class="text-5xl md:text-6xl font-black !text-white text-white drop-shadow-md italic tracking-tighter uppercase mb-6">Les Mains Sur Le Volant.</h2>
        <p class="text-xl text-stone-400 font-bold leading-relaxed">
            Un conducteur obligé de lire un écran pour répondre à une question va soit arrêter le camion, soit le lire en roulant. Le premier cas vous coûte l'heure. Le second vous coûte bien davantage, un jour.
        </p>
    </div>

    <div class="flex flex-col gap-12 mb-20">
        <div>
            <h2 id="ou-cela-derape" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Où Cela Dérape</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Un chargement est en retard. Le conducteur le sait une heure avant tout le monde, et le bureau l'apprend en dernier. Pour le dire, il doit se ranger et taper, ou taper en roulant. La plupart des jours, cela attend simplement l'arrêt suivant.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Dans l'autre sens, c'est pareil. La régulation a un changement à passer et doit appeler tout le monde pour le poser, un camion après l'autre, en espérant que chacun puisse décrocher. La moitié des appels tombent sur la messagerie et sont refaits vingt minutes plus tard.
            </p>
            <p class="text-lg text-stone-400 font-medium font-semibold text-signal tracking-wide font-bold text-sm">
                Celui qui sait le premier est celui qui ne peut pas taper.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                Du coup la journée est rédigée à la fin de la journée, de mémoire, si elle est rédigée. Le pneu qui manquait d'air, l'heure perdue à une barrière, la livraison refusée &mdash; au bout de huit heures le détail est mince, et l'heure à la barrière est justement celle que vous ne facturez jamais.
            </p>
        </div>
        <div>
            <h2 id="ce-qui-se-passe-a-la-place" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Ce Qui Se Passe À La Place</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Le conducteur parle et FACE répond. Où est mon arrêt suivant. Quelle barrière. C'est demandé à voix haute et cela revient à voix haute, donc les yeux restent sur la route et les mains là où elles étaient. L'appel lui-même est un appel téléphonique ordinaire et passe par un opérateur de téléphonie pour arriver ; le canal audio qui entre dans la maison est authentifié, et tout ce qui se passe après son arrivée se passe sur vos machines. La parole est transformée en texte par le serveur de modèles que vous faites tourner &mdash; le même et unique point d'inférence configurable par lequel raisonne le reste de FACE, portant un modèle capable d'audio, et non une API vocale avec son propre contrat &mdash; et chaque réponse de la conversation est prononcée par un synthétiseur qui tourne dans le même processus que le reste de FACE, à partir d'une voix embarquée dans le binaire. Aucune transcription ne finit dans le compte de quelqu'un d'autre. Deux nuances tiennent dans la même phrase plutôt que dans une note de bas de page. L'avis d'enregistrement et l'accueil qui ouvrent l'appel sont prononcés par la voix de l'opérateur lui-même, car ils sont lus depuis les instructions d'ouverture de l'appel, avant que le canal vers vos machines n'existe. Et le point d'accès de transcription est un point que vous configurez, donc l'endroit où il pointe est une chose à vérifier en revue plutôt qu'une chose qu'un test garantit.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Ce que l'appel laisse derrière lui, c'est la conversation elle-même, écrite à mesure : chaque tour, qui l'a dit, rattaché à l'appel auquel il appartient. L'heure perdue à la barrière est au dossier à la barrière, et non reconstituée à dix-huit heures. Rien dans l'appel n'alerte personne, et cette limite va à côté du bénéfice plutôt qu'après lui. Le chemin téléphonique écrit la ligne et s'arrête là : il ne guette aucun mot urgent et il ne prévient personne. La remontée qui existe bel et bien est du côté du texte : un WhatsApp ou un SMS entrant dont la formulation correspond à une courte liste de mots-clés est transféré vers un numéro de responsable configuré, et tout chemin qui se termine sans que personne ne soit alerté est consigné comme exactement cela et non comme une réussite. L'appel met le fait au dossier dans les minutes qui suivent ; encore faut-il que quelqu'un lise le dossier.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Voici la ligne, et elle compte plus que la liste des fonctions. Un tour de parole n'écrit pas dans vos systèmes. Il ne crée pas l'enregistrement de retard, il ne met pas à jour la livraison et il ne déplace pas l'arrêt &mdash; il n'existe aucun chemin de l'appel vers votre système de transport, et un produit qui vous dirait le contraire décrirait une intégration qu'il n'a pas construite. Ce que l'appel fait, c'est sortir le fait de la cabine et le mettre au dossier pendant qu'il est encore exact. Une personne à la régulation le lit et fait le changement.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                Un refus de plus, parce que c'est le genre qu'on cache d'habitude. Ailleurs dans FACE, vous pouvez joindre un mémo vocal à un fil, et cette pièce jointe n'est pas transcrite. Plutôt que de laisser le modèle improviser autour, il est dit franchement au modèle qu'une pièce jointe audio est arrivée, que son contenu est inconnu, et qu'il ne doit pas deviner ce qui a été dit &mdash; et il reçoit pour consigne de vous dire que l'audio n'a pas été traité. Un système qui ne peut pas entendre quelque chose et qui le dit vaut plus qu'un système qui comble le trou.
            </p>
        </div>
        <div class="bg-sheet p-8 rounded-2xl border border-stone-800/80 shadow-2xl">
             <h3 id="comment-vous-sauriez-que-cela-a-marche" class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-signal-fill to-signal-fill-hover mb-4 tracking-tighter uppercase italic drop-shadow-lg">Comment Vous Sauriez Que Cela A Marché</h3>
             <p class="text-lg text-stone-400 font-medium mb-6">
                Chaque chiffre ci-dessous est le vôtre, pas le nôtre. Notez où vous en êtes aujourd'hui, car ce point de départ est perdu pour de bon dès que quelque chose change.
             </p>
             <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">Le temps que les camions passent à l'arrêt sans livrer.</strong> Vos véhicules renvoient déjà où ils sont et quand le moteur est coupé. Prenez une semaine de cela, retirez les arrêts qui correspondent à une livraison, et regardez ce qui reste.</li>
                <li><strong class="text-stone-200">Les minutes entre le moment où un problème survient et le moment où la régulation le sait.</strong> Échantillonnez un mois de tournées en retard et de livraisons refusées. Quand cela s'est produit, et quand le premier message à ce sujet est arrivé au bureau.</li>
                <li><strong class="text-stone-200">L'attente aux barrières et sur les sites, et la part que vous facturez.</strong> Depuis vos propres relevés de mission et vos factures. Dans la plupart des flottes, les heures sont réelles et seules certaines sont écrites.</li>
                <li><strong class="text-stone-200">Quelle part du journal de la journée est écrite sur la route.</strong> Comptez les notes et alertes remontées pendant le service face à celles remontées après sa fin. C'est celle sur laquelle tout le reste repose.</li>
             </ul>
             <p class="text-sm text-stone-500 font-bold uppercase tracking-widest text-xs mt-6 text-center">Apportez un dépôt et une semaine de données de géolocalisation des véhicules.</p>
        </div>
    </div>

    <div class="text-center">
        <a href="/fr/#contact" class="inline-flex items-center justify-center px-10 py-5 text-xs font-black uppercase tracking-widest !text-on-fill text-on-fill drop-shadow-md transition-all duration-300 bg-gradient-to-r from-signal-fill to-signal-fill-hover rounded-xl border border-signal/30 hover:shadow-2xl hover:-translate-y-1">
            Réserver une consultation
        </a>
    </div>
</div>
{{< /section-container >}}
