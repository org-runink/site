---
title: "Recalculer la Tournée Quand la Journée a Changé"
description: "Le plan qui était optimal à six heures du matin ne l'est plus à dix. Personne ne le relance, car le relancer veut dire replanifier une journée à la main. Le but est que le second calcul ne coûte rien."
layout: "use_case"
product: "Runink FACE"
badge: "Jumeau de Tournée"
date: "2024-05-20T00:00:00Z"
author: "Runink"
---

{{< section-container class="py-8" >}}
<div class="max-w-5xl mx-auto px-4">

<h2 id="en-bref" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6 mt-8">En Bref</h2>
<ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6 mb-8">
<li><strong class="text-stone-200">Un itinéraire revient sous la forme d'une distance, d'une durée et d'un tracé sur la carte.</strong> Un départ, une arrivée et les contraintes que vous avez nommées partent vers le fournisseur de calcul d'itinéraire ; ce qui revient est une distance routière mesurée et un temps de parcours, pas un avis.</li>
<li><strong class="text-stone-200">Aucun montant n'y est attaché, et c'est volontaire.</strong> Le fournisseur d'itinéraire renvoie une distance et une durée, et aucun coût. Donc aucune économie n'est imprimée à côté de l'itinéraire, car un chiffre que personne n'a mesuré posé à côté de deux chiffres mesurés, c'est exactement ainsi qu'une estimation finit citée comme un fait.</li>
<li><strong class="text-stone-200">Quand le calcul n'a pas pu aboutir, il le dit.</strong> Une connexion sans identifiant d'itinéraire, ou un fournisseur qui ne renvoie rien, revient comme indisponible. Cela ne revient pas sous la forme d'une fiche d'itinéraire aux champs laissés vides, ce qui, à l'écran, ne se distingue pas d'une bonne réponse.</li>
</ul>

<p class="mb-12">
    <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-stone-600 text-stone-400 text-[10px] font-black uppercase tracking-[0.25em]">
        <span class="inline-block w-2 h-2 rounded-full border border-stone-400"></span>Tracé
    </span>
    <span class="block mt-3 text-sm text-stone-500 font-medium">
        Cette page marque où passe la ligne. L'appel d'itinéraire, la fiche qu'il produit et le refus de deviner un coût sont dans le produit. La journée de travail qui les entoure est une illustration du mécanisme, pas le compte rendu d'un événement : cela n'a pas tourné sur la flotte d'un client, et il n'y a ici aucun chiffre de distance, de durée ni d'argent économisé.
    </span>
</p>

    <div class="text-center mb-16">
        <h2 id="optimal-a-six-heures-plus-a-dix" class="text-5xl md:text-6xl font-black !text-white text-white drop-shadow-md italic tracking-tighter uppercase mb-6">Optimal À Six Heures. Plus À Dix.</h2>
        <p class="text-xl text-stone-400 font-bold leading-relaxed">
            Le plan était bon au moment où il a été construit. Puis une livraison a pris quarante minutes de trop, une route a fermé, et un client a déplacé son créneau. Le plan est désormais la meilleure réponse à une question que plus personne ne pose.
        </p>
    </div>

    <div class="flex flex-col gap-12 mb-20">
        <div>
            <h2 id="ou-cela-derape" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Où Cela Dérape</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Le calcul de tournée a lieu une fois, la veille au soir ou à la première heure. C'est la décision la plus soignée de la journée, et elle est prise avec le moins d'informations que quiconque aura de toute la journée. Tout ce qui va réellement façonner la journée &mdash; la file à la barrière, la route coupée, la livraison refusée, le conducteur qui a une heure de retard &mdash; n'est pas encore arrivé.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                En milieu de matinée le plan a dérivé, et tout le monde à la régulation le sait. Ce qu'on en fait, c'est le rafistoler : échanger deux livraisons, repousser l'une à demain, appeler un conducteur. Sensé, local, et personne ne peut dire si la journée rafistolée est meilleure ou moins bonne que celle qui sortirait d'un recalcul complet.
            </p>
            <p class="text-lg text-stone-400 font-medium font-semibold text-signal tracking-wide font-bold text-sm">
                Relancer le calcul est gratuit. Replanifier à la main ne l'est pas, alors on ne relance jamais.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Et le coût de la dérive n'est jamais écrit nulle part. Il sort en heures supplémentaires, en créneau manqué, en second voyage, en carburant. Chacun de ces postes tombe dans un budget différent, et aucun ne porte l'étiquette de la raison.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                Cela revient au planificateur transport et à qui tient la régulation ce jour-là. Ils en portent la charge à l'heure où ils en ont le moins.
            </p>
        </div>
        <div>
            <h2 id="ce-qui-se-passe-a-la-place" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Ce Qui Se Passe À La Place</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Demander un itinéraire est une petite requête : où il commence, où il finit, et les contraintes qui comptent sur ce segment. Cela part vers le fournisseur d'itinéraire et revient sous la forme d'une distance routière, d'un temps de parcours et du tracé lui-même, de sorte que la réponse peut être dessinée sur une carte au lieu d'être décrite en une phrase.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Comme la requête est petite, la reposer une seconde fois coûte à peu près ce qu'a coûté la première. La question cesse d'être « vaut-il la peine de replanifier la journée » pour devenir « de quoi a l'air l'itinéraire maintenant » : une question que vous pouvez lui poser aussi souvent que la journée change.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Ce qui revient est le segment sur lequel vous avez interrogé : son départ et son arrivée, la distance et la durée que le fournisseur a réellement renvoyées, et le tracé que suit l'itinéraire. C'est la réponse à une question que vous avez posée, et c'est pourquoi elle arrive quand vous demandez plutôt que d'apparaître d'elle-même.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Deux refus sont intégrés, et ce sont eux qui donnent une raison de faire confiance au reste. Aucune économie n'est imprimée sur la fiche, parce que le fournisseur d'itinéraire n'en renvoie aucune : des estimations maison au doigt mouillé existent ailleurs dans le produit et ne sont délibérément pas recopiées sur un itinéraire mesuré. Et s'il n'y a pas d'identifiant d'itinéraire sur cette connexion, ou si le fournisseur ne renvoie aucun itinéraire, la réponse est que c'est indisponible. Pas une fiche aux champs vides. Un champ vide à l'écran se lit comme une mesure, et c'est une défaillance plus grave qu'une erreur honnête.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                L'identifiant appartient à la connexion, pas à la machine. Le service d'itinéraire est atteint avec la clé rattachée à la connexion configurée pour cela, si bien que l'ancrage est quelque chose que vous installez, que vous voyez et que vous pouvez révoquer connexion par connexion. Ce n'est pas une variable d'environnement enfouie dans un serveur que personne ne peut auditer.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Un changement est proposé, jamais imposé. Une personne nommée à la régulation le valide, le corrige ou le rejette, et le rejet est consigné comme une décision plutôt que comme un silence. Prévenir le conducteur est un autre travail et une autre page &mdash; un conducteur peut demander et recevoir la réponse à voix haute, les mains sur le volant, dans <a href="/fr/use-cases/voice-dispatch">parler aux conducteurs sans écran</a> &mdash;, même si l'appel laisse une transcription et non une acceptation, et la régulation reste propriétaire du changement. Et si la question est plus large qu'un segment &mdash; un fournisseur abandonné, un axe laissé pour une saison &mdash;, le dossier peut d'abord être posé face aux règles qu'il heurte, dans <a href="/fr/use-cases/hypothesis-lab">tester un plan avant de s'y engager</a>.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                C'est la validation qui l'envoie, et le motif reste au dossier pour celui qui demandera dans trois mois pourquoi un camion est passé par là. Une honnêteté de plus à ce sujet, du genre sur lequel cette page est bâtie : là où une étape derrière la validation n'a rien d'implémenté derrière elle &mdash; l'écriture dans votre système de transport en est l'exemple réel &mdash;, la réponse nomme cette étape comme non exécutée au lieu de renvoyer un succès qui couvrirait l'action entière. Validé et fait sont ici deux mots différents, et c'est le logiciel qui vous dit lequel des deux il a réussi.
            </p>
        </div>
        <div>
            <h2 id="qui-s-en-occupe" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Qui S'En Occupe</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Trois bureaux, et ce que chacun a sur les bras aujourd'hui.
            </p>
            <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">Le planificateur transport.</strong> Aujourd'hui le plan est bâti la veille au soir ou à la première heure, ce qui en fait la décision la plus soignée de la journée et celle qui est prise avec le moins d'informations. Ce qui change, c'est qu'un seul segment peut être interrogé pour lui-même &mdash; un départ, une arrivée, les contraintes qui comptent dessus &mdash; et que la réponse est une distance routière mesurée et un temps de parcours, venus du fournisseur d'itinéraire que vous avez raccordé.</li>
                <li><strong class="text-stone-200">Le bureau de répartition.</strong> Aujourd'hui la journée se rafistole : échanger deux livraisons, en repousser une à demain, appeler un chauffeur. Sensé, local, et personne ne peut dire ce que le rafistolage a coûté. Ce qui change, c'est qu'un segment revient sous forme d'une distance et d'une durée réellement renvoyées, si bien que deux personnes au bureau discutent des deux mêmes nombres.</li>
                <li><strong class="text-stone-200">Directeur des opérations.</strong> Aujourd'hui la dérive sort du bâtiment en heures supplémentaires, en second passage, en créneau manqué et en carburant, chaque chose tombant dans un budget différent et aucune n'étant étiquetée avec sa raison. Ce qui change, c'est qu'aucun montant n'est imprimé à côté d'un itinéraire, parce que le fournisseur n'en renvoie aucun &mdash; ainsi un chiffre mesuré et un chiffre supposé ne s'assoient jamais sur la même ligne en prétendant être de même nature.</li>
            </ul>
        </div>
        <div class="bg-sheet p-8 rounded-lg border border-stone-800/80 shadow-2xl">
             <h3 id="comment-vous-saurez-que-cela-a-marche" class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-signal-fill to-signal-fill-hover mb-4 tracking-tighter uppercase italic drop-shadow-lg">Comment Vous Saurez Que Cela A Marché</h3>
             <p class="text-lg text-stone-400 font-medium mb-6">
                Chaque chiffre ci-dessous est le vôtre, pas le nôtre. Nous n'en avons aucun à nous à vous proposer. Notez où vous en êtes aujourd'hui, car ce point de départ est perdu pour de bon dès que les choses s'améliorent.
             </p>
             <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">À quelle fréquence une tournée est recalculée après l'affectation.</strong> La réponse la plus honnête est jamais. Prenez un mois et comptez les jours où le plan a été recalculé au lieu d'être rafistolé. C'est le chiffre sur lequel tout repose.</li>
                <li><strong class="text-stone-200">Prévu contre réalisé, segment par segment.</strong> Depuis votre système de transport : la distance et la durée que le plan supposait, face à la distance et à la durée que le véhicule a enregistrées. Tenez-le par segment, pas par journée &mdash; une journée qui s'équilibre cache deux segments qui ne s'équilibrent pas.</li>
                <li><strong class="text-stone-200">Les créneaux manqués, et lesquels étaient évitables.</strong> Depuis vos relevés de livraison. Séparez ceux qui étaient perdus avant le départ du camion de ceux qui ont été perdus en cours de journée. Le second groupe est celui que cela touche.</li>
                <li><strong class="text-stone-200">Les heures supplémentaires conducteur et les seconds voyages, par dépôt.</strong> Depuis la paie et depuis votre journal de régulation. Ce sont les deux endroits par lesquels la dérive sort de la maison, et ils sont en général classés là où personne ne les relie au calcul de tournée.</li>
             </ul>
             <p class="text-sm text-stone-500 font-bold uppercase tracking-widest text-xs mt-6 text-center">Apportez un mois de données prévu-contre-réalisé par segment, pour un seul dépôt.</p>
        </div>
    </div>

{{< faq >}}
{
  "title": "Questions D'un Bureau D'exploitation",
  "description": "Ce que l'on demande avant de parler d'un contrat.",
  "questions": [
    {
      "question": "Que lui faut-il pour renvoyer un itinéraire ?",
      "answer": "Un départ, une arrivée et les contraintes que vous nommez sur ce segment. Cela part vers le fournisseur d'itinéraire que vous avez raccordé, et revient sous forme d'une distance routière mesurée, d'un temps de parcours et du tracé lui-même, de sorte que la réponse peut être dessinée au lieu d'être décrite en une phrase."
    },
    {
      "question": "Pourquoi n'y a-t-il ni coût ni économie à côté de l'itinéraire ?",
      "answer": "Parce que le fournisseur d'itinéraire renvoie une distance et une durée, et aucun coût. Un chiffre que personne n'a mesuré, posé à côté de deux qui l'ont été, c'est ainsi qu'une estimation vous est ensuite citée comme un fait. Des estimations au jugé existent ailleurs dans le produit et ne sont délibérément pas recopiées sur un itinéraire mesuré."
    },
    {
      "question": "Que se passe-t-il quand l'itinéraire ne peut pas être calculé ?",
      "answer": "La réponse est qu'il est indisponible, en ces termes. Une connexion sans identifiant de calcul d'itinéraire, ou un fournisseur qui ne renvoie rien, revient comme indisponible et non comme une réponse aux champs vides. Un champ vide sur un écran se lit comme une mesure, et c'est la pire des deux défaillances."
    },
    {
      "question": "Où vit l'identifiant de calcul d'itinéraire ?",
      "answer": "Sur la connexion qui a été configurée pour cela, pas dans une variable d'environnement figée dans un serveur. C'est quelque chose que vous mettez en place, que vous pouvez voir et que vous pouvez révoquer connexion par connexion, ce qui le rend auditable."
    },
    {
      "question": "Qui valide un changement dans la journée ?",
      "answer": "Une personne désignée au bureau. Un changement est proposé, jamais imposé : il est approuvé, modifié ou refusé, et refuser est enregistré comme une décision et non comme un silence. C'est l'approbation qui envoie, et la raison reste au dossier pour qui demandera dans trois mois pourquoi un camion est passé par là."
    },
    {
      "question": "Comment le chauffeur l'apprend-il ?",
      "answer": "C'est un autre travail et une autre page. Un chauffeur peut demander et obtenir une réponse à voix haute, les mains sur le volant, comme décrit dans [parler aux chauffeurs sans écran](/fr/use-cases/voice-dispatch/). L'appel laisse une transcription et non une acceptation, et le changement reste au bureau."
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
