---
# WHERE THE URGENCY SENTENCES COME FROM. This page used to say the phone path
# "does not watch for an urgent word and it does not notify anyone", and that the
# escalation existed only on the text side. Both were wrong, and the page had the
# shape right and the attribution backwards.
#
#   face/grpc/cmd/fetch_server.go:4936  the six keywords, on the VOICE utterance
#   face/grpc/cmd/fetch_server.go:4941  a match changes the tone instruction
#   face/grpc/cmd/fetch_server.go:4947  and sends the caller's own words to
#                                       escalationTarget(), when one is configured
#   face/grpc/cmd/whatsapp.go:117       the same six keywords on inbound text
#   face/grpc/cmd/whatsapp.go:86,106    and there, the two paths that page nobody
#                                       are logged as paging nobody
#
# The six words are named on the page rather than described as "a short list",
# because they are the whole of the mechanism and a reader can hold them.
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
<li><strong class="text-stone-200">Ce que l'appel produit est une transcription, pas une entrée sur le tableau.</strong> Les deux côtés de la conversation sont écrits dans le journal d'appel, locuteur par locuteur, si bien que l'heure perdue à la barrière est consignée au moment où elle est dite. Ce qu'un tour de parole ne peut pas faire, c'est écrire dans votre système de régulation ou de transport &mdash; il n'existe aucun chemin d'action de l'appel vers vos enregistrements. Un mot urgent dans l'appel déclenche bel et bien quelque chose. Les six mêmes mots sont guettés au téléphone comme du côté du texte — <em>urgent</em>, <em>asap</em>, <em>emergency</em>, <em>broken</em>, <em>failing</em>, <em>late</em> — et une correspondance change la façon dont l'agent répond et envoie la phrase de l'appelant lui-même au numéro de responsable que vous avez configuré. Au téléphone, c'est toujours une personne nommée à la régulation, qui lit le journal, qui le transforme en changement.</li>
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
                Ce que l'appel laisse derrière lui, c'est la conversation elle-même, écrite à mesure : chaque tour, qui l'a dit, rattaché à l'appel auquel il appartient. L'heure perdue à la barrière est au dossier à la barrière, et non reconstituée à dix-huit heures. Six mots sont guettés sur les deux canaux — <em>urgent</em>, <em>asap</em>, <em>emergency</em>, <em>broken</em>, <em>failing</em>, <em>late</em>. Au téléphone, une correspondance change la façon dont l'agent répond et envoie la phrase de l'appelant lui-même au numéro de responsable que vous avez configuré. Sur un WhatsApp ou un SMS entrant, la même correspondance remonte de la même manière, et là un message qui a correspondu sans atteindre personne est écrit au journal disant cela, plutôt que de passer pour traité. L'appel met le fait au dossier dans les minutes qui suivent ; encore faut-il que quelqu'un lise le dossier.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Voici la ligne, et elle compte plus que la liste des fonctions. Un tour de parole n'écrit pas dans vos systèmes. Il ne crée pas l'enregistrement de retard, il ne met pas à jour la livraison et il ne déplace pas l'arrêt &mdash; il n'existe aucun chemin de l'appel vers votre système de transport, et un produit qui vous dirait le contraire décrirait une intégration qu'il n'a pas construite. Ce que l'appel fait, c'est sortir le fait de la cabine et le mettre au dossier pendant qu'il est encore exact. Une personne à la régulation le lit et fait le changement.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                Un refus de plus, parce que c'est le genre qu'on cache d'habitude. Ailleurs dans FACE, vous pouvez joindre un mémo vocal à un fil, et cette pièce jointe n'est pas transcrite. Plutôt que de laisser le modèle improviser autour, il est dit franchement au modèle qu'une pièce jointe audio est arrivée, que son contenu est inconnu, et qu'il ne doit pas deviner ce qui a été dit &mdash; et il reçoit pour consigne de vous dire que l'audio n'a pas été traité. Un système qui ne peut pas entendre quelque chose et qui le dit vaut plus qu'un système qui comble le trou.
            </p>
        </div>
        <div>
            <h2 id="qui-s-en-occupe" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Qui S'En Occupe</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Trois bureaux, et ce que chacun a sur les bras aujourd'hui.
            </p>
            <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">Le bureau de répartition.</strong> Aujourd'hui un changement veut dire appeler un camion après l'autre en espérant que chacun puisse décrocher, et la moitié des appels tombent sur la messagerie et sont refaits vingt minutes plus tard. Ce qui change, c'est qu'un chauffeur peut demander et obtenir une réponse à voix haute, et que l'appel s'écrit tout seul. Le bureau fait toujours le changement ; il cesse d'être le seul chemin par lequel un fait peut voyager.</li>
                <li><strong class="text-stone-200">Le chef de dépôt.</strong> Aujourd'hui la journée est rédigée à la fin, de mémoire, quand elle l'est, et l'heure perdue à un portail est celle qu'on ne facture jamais. Ce qui change, c'est que les deux côtés de la conversation vont au journal d'appels au fil de l'eau, si bien que l'heure au portail est consignée au portail.</li>
                <li><strong class="text-stone-200">Informatique et sécurité de l'information.</strong> Aujourd'hui un produit vocal revient à demander dans quel compte tiers finit la transcription. Ce qui change, c'est que la parole est transformée en texte par le serveur de modèles que vous exploitez déjà, et que chaque réponse conversationnelle est prononcée dans le processus FACE lui-même, à partir d'une voix embarquée dans le binaire. Le segment téléphonique est porté par un opérateur, comme n'importe quel appel, et l'annonce d'enregistrement et l'accueil sont lus avec la voix de cet opérateur avant que le canal vers vos machines soit ouvert.</li>
            </ul>
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

{{< faq >}}
{
  "title": "Questions D'un Responsable De Flotte",
  "description": "Ce que l'on demande avant de parler d'un contrat.",
  "questions": [
    {
      "question": "Que doit faire le chauffeur ?",
      "answer": "Passer un appel téléphonique ordinaire et demander à voix haute. Où est le prochain arrêt, quel portail, ce que le client a demandé. La réponse revient à voix haute, donc il n'y a pas d'écran à lire ni de raison de s'arrêter."
    },
    {
      "question": "Qui porte l'audio, et qui voit le texte ?",
      "answer": "Le segment entre la cabine et le bâtiment est porté par un opérateur télécom, comme n'importe quel autre appel que passent vos chauffeurs, et il transporte cet audio parce qu'il le faut bien. Le texte est une autre affaire : la transcription et le raisonnement qui produit la réponse ont lieu sur vos machines, sur le serveur de modèles que vous exploitez déjà, et la réponse parlée y est encodée aussi."
    },
    {
      "question": "Que se passe-t-il quand un chauffeur dit quelque chose d'urgent ?",
      "answer": "Six mots sont surveillés, au téléphone comme sur les messages WhatsApp ou SMS entrants : <em>urgent</em>, <em>asap</em>, <em>emergency</em>, <em>broken</em>, <em>failing</em> et <em>late</em>. Une correspondance change le ton de la réponse de l'agent et envoie la phrase même de l'appelant au numéro de responsable que vous avez configuré. Côté texte, un message qui a correspondu et n'a atteint personne est écrit dans le journal en le disant, plutôt que de passer pour traité."
    },
    {
      "question": "Que laisse l'appel derrière lui ?",
      "answer": "La conversation elle-même, écrite au fil de l'eau : chaque tour de parole, qui l'a dit, et l'appel auquel il appartient. L'heure au portail est consignée au portail plutôt que reconstituée à six heures. Quelqu'un de désigné au bureau la lit et fait le changement, ce qui maintient une phrase dite et une livraison modifiée comme deux événements distincts."
    },
    {
      "question": "Quelle voix le chauffeur entend-il en premier ?",
      "answer": "Celle de l'opérateur télécom. L'annonce d'enregistrement et l'accueil qui ouvrent l'appel sont lus depuis les instructions d'établissement d'appel, avant que le canal vers votre bâtiment soit ouvert. Toute réponse conversationnelle ensuite est prononcée à partir d'une voix embarquée dans le binaire de FACE, dans le même processus que le reste."
    },
    {
      "question": "Qu'apporter à une première conversation ?",
      "answer": "Un dépôt et une semaine de données de suivi des véhicules. Deux de vos chiffres vont avec : les minutes entre le moment où un problème survient et celui où le bureau l'apprend, échantillonnées sur un mois de tournées en retard, et la part du temps d'attente aux portails que vous facturez aujourd'hui."
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
