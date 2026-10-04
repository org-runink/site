---
title: "Données Personnelles des Clients et Pistes d'Audit"
description: "Faire tourner un système écrit sans bruit des données personnelles dans ses propres journaux. Comment FACE les en tient à l'écart, garde la trace de son propre travail et remet la preuve à la personne responsable."
layout: "use_case"
badge: "Gestion des Risques"
badgeColor: "#ea580c"
product: "Runink FACE"
date: "2024-05-20T00:00:00Z"
author: "Runink"
---

{{< section-container class="py-8" >}}
<div class="max-w-5xl mx-auto px-4">

<p class="text-xs font-black uppercase tracking-[0.25em] text-stone-500 mb-2">Runink FACE &middot; Conformité et pistes d'audit</p>
<p class="text-base text-stone-500 font-medium mb-10">Ceci est un scénario pour <strong class="text-stone-300">Runink FACE</strong>. Les contrôles décrits ici lisent les enregistrements que FACE tient de vos envois et de vos rapports, et ils font partie de FACE lui-même.</p>

<h2 id="en-bref" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6 mt-8">En Bref</h2>
<ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6 mb-12">
<li><strong class="text-stone-200">Les données personnelles n'atteignent pas les journaux.</strong> Les adresses e-mail, les numéros de téléphone, les numéros de carte, les numéros de sécurité sociale et les adresses IP sont retirés des journaux et des sorties de diagnostic avant qu'ils soient écrits. La trace qu'un système laisse derrière lui ne devient donc pas une deuxième copie des données.</li>
<li><strong class="text-stone-200">C'est intégré à la plateforme, pas un rapport que vous lancez.</strong> Le masquage a lieu sur le chemin d'écriture sous chaque service, à chaque endroit où un service écrit une ligne.</li>
<li><strong class="text-stone-200">Chaque contrôle garde la trace de son travail.</strong> Ce qui a été lu, au regard de quelle règle, ce qui a été trouvé et qui l'a regardé restent au dossier, et un contrôle qui n'a pas pu tourner est écrit exactement ainsi.</li>
</ul>

    <div class="text-center mb-16">
        <h2 id="une-trace-que-personne-na-le-temps-de-verifier" class="text-5xl md:text-6xl font-black !text-white text-white drop-shadow-md italic tracking-tighter uppercase mb-6">Une Trace Que Personne N'a Le Temps De Vérifier.</h2>
        <p class="text-xl text-stone-400 font-bold leading-relaxed">
            Les données personnelles voyagent avec chaque enregistrement, et chaque système qui touche un enregistrement laisse une trace derrière lui. Répondre de cette trace oblige à rapprocher des systèmes à la main.
        </p>
    </div>

    <div class="flex flex-col gap-12 mb-20">
        <div>
            <h2 id="ou-cela-derape" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Où Cela Dérape</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Le nom et l'adresse d'un client servent à livrer le colis. Ils ne servent pas sur le tableau de bord d'un transporteur, dans un rapport envoyé à un partenaire, ni dans la copie du fichier que quelqu'un a tirée pour une réunion. Mais le champ voyage avec l'enregistrement, et il continue son chemin.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Personne ne veut cela. Cela arrive parce que le plus court chemin pour répondre à une question est d'exporter ce qu'on a, et ce qu'on a contient encore les données personnelles.
            </p>
            <p class="text-lg text-stone-400 font-medium font-semibold text-signal tracking-wide font-bold text-sm">
                On ne protège pas ce qu'on ne voit pas sortir.
            </p>
        </div>
        <div>
            <h2 id="a-qui-cela-s-adresse" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">À Qui Cela S'adresse</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Trois bureaux, et la même question en dessous : pouvez-vous montrer votre travail ?
            </p>
            <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">Le délégué à la protection des données, et conformité et risques.</strong> Ce qui arrive aujourd'hui, c'est le nom et l'adresse d'un client, nécessaires une fois pour livrer un colis et qui voyagent avec l'enregistrement depuis &mdash; jusque dans un export, un rapport partenaire, un fichier de journal que personne ne lit avant que quelque chose ait mal tourné. Ce qui change, c'est là où la trace s'arrête. Les données personnelles sont retirées des journaux et des sorties de diagnostic avant qu'ils soient écrits, sur le chemin sous chaque service plutôt que dans un rapport que quelqu'un pense à lancer.</li>
                <li><strong class="text-stone-200">DSI et sécurité de l'information.</strong> Ce qui arrive aujourd'hui, c'est une question à laquelle on ne répond qu'en comptant : lesquels de vos services écrivent des journaux applicatifs, et lesquels de ceux-là font passer leur sortie par un masquage quelconque avant de la stocker ou de l'expédier. Ce qui change, c'est que la réponse est une propriété de la manière dont le logiciel est construit, décrite en phrases ordinaires que vous pouvez confronter à une revue de code : la conversation sécurité devient une description plutôt qu'une négociation.</li>
                <li><strong class="text-stone-200">Audit interne, et celui qui répond du rapport.</strong> Ce qui arrive aujourd'hui, c'est une demande d'expliquer pourquoi un chiffre est ce qu'il est, des mois après le départ de la personne qui l'a assemblé. Ce qui change, c'est que le dossier garde la trace de son propre travail, et qu'un contrôle qui n'a pas pu tourner est écrit comme une entrée à part plutôt que de passer discrètement pour un résultat propre.</li>
            </ul>
        </div>
        <div>
            <h2 id="ce-qui-se-passe-a-la-place" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Ce Qui Se Passe À La Place</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Chaque service écrit ses journaux et ses diagnostics à travers une étape de masquage partagée, qui retire du texte les adresses e-mail, les numéros de téléphone, les numéros de carte, les numéros de sécurité sociale, les adresses IP et les adresses matérielles avant qu'il n'atterrisse, ainsi que des champs nommés &mdash; mots de passe, jetons, secrets, clés de licence, URL de webhook &mdash; partout où ils apparaissent dans une charge structurée. L'idée est que faire tourner un système ne crée pas en silence une deuxième copie des données personnelles qu'il contient : l'endroit où les fuites se découvrent tard, et l'endroit où personne ne pense à regarder.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Chaque contrôle garde la trace de son propre travail. Un auditeur demande d'où sort un constat. Un régulateur demande qui a vu l'adresse d'un client. La réponse vient du dossier, et non de la mémoire de la personne qui a monté le tableur.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                Le dossier garde aussi séparées les deux réponses que l'on confond d'habitude. &laquo;&nbsp;Nous avons contrôlé et nous n'avons rien trouvé&nbsp;&raquo; et &laquo;&nbsp;nous n'avons pas pu lire ceci, donc cela n'a jamais été contrôlé&nbsp;&raquo; sont notées comme deux choses différentes. La seconde est le constat qu'un audit cherche vraiment, et c'est celle qu'une coche verte avale d'ordinaire.
            </p>
        </div>
        <div class="bg-sheet p-8 rounded-lg border border-stone-800/80 shadow-2xl">
             <h3 id="comment-vous-saurez-que-cela-a-marche" class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-signal-fill to-signal-fill-hover mb-4 tracking-tighter uppercase italic drop-shadow-lg">Comment Vous Saurez Que Cela A Marché</h3>
             <p class="text-lg text-stone-400 font-medium mb-6">
                Chaque chiffre ci-dessous est le vôtre, pas le nôtre. Notez où vous en êtes aujourd'hui, car ce point de départ est perdu pour de bon dès que les choses s'améliorent.
             </p>
             <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">Où se trouvent vraiment les données personnelles.</strong> Prenez un échantillon des rapports et des écrans que vos partenaires et vos transporteurs voient. Comptez combien portent un nom, un numéro de téléphone ou une adresse. La plupart des équipes ne l'ont jamais compté.</li>
                <li><strong class="text-stone-200">La part de vos propres journaux qui passe par un masquage, tout simplement.</strong> Comptez les services qui écrivent des journaux applicatifs, puis comptez ceux dont la sortie traverse une étape de masquage avant d'être stockée ou envoyée chez un prestataire de journalisation. C'est le point de départ dont parle la moitié &laquo;&nbsp;données personnelles&nbsp;&raquo; de cette page, et c'est celui que la plupart des équipes peuvent établir en une après-midi et préféreraient ne pas établir.</li>
             </ul>
             <p class="text-sm text-stone-500 font-bold uppercase tracking-widest text-xs mt-6 text-center">Apportez un échantillon des écrans vus par vos partenaires et la liste des services qui écrivent des journaux.</p>
        </div>
    </div>

    <div class="border-l-2 border-stone-700 pl-5 mb-16">
        <p class="text-base text-stone-500 font-medium mb-4">
            Les expositions décrites ci-dessus sont dessinées pour montrer la forme du travail. Ce ne sont pas les comptes rendus d'une mission chez un client, et rien sur cette page n'est un résultat mesuré.
        </p>
        <p class="text-base text-stone-500 font-medium">
            Le logiciel trouve l'enregistrement, montre la règle au regard de laquelle il a été lu, et remet les deux à la personne responsable. Savoir si vous remplissez une obligation reste un jugement qui appartient à votre responsable conformité, à votre délégué à la protection des données et à votre auditeur.
        </p>
    </div>
</div>
{{< /section-container >}}

{{< faq >}}
{
  "title": "Les Questions Qu'un Responsable Conformité Pose D'abord",
  "description": "Ce que fait la partie confidentialité, ce que garde le dossier, et qui décide.",
  "questions": [
    {
      "question": "Qu'est-ce qui empêche les données personnelles d'atteindre nos journaux ?",
      "answer": "Une seule étape de masquage, posée sur le chemin d'écriture sous chaque service plutôt que dans un outil lancé après coup. Tous les services écrivent leurs journaux et leurs diagnostics à travers elle, et elle retire du texte les adresses e-mail, les numéros de téléphone, les numéros de carte, les numéros de sécurité sociale et les adresses réseau et matérielles avant que la ligne n'atterrisse. Des champs nommés partent aussi &mdash; mots de passe, jetons, secrets, clés de licence, URL de webhook &mdash; partout où ils apparaissent dans une structure de données.<br><br>L'ordre interne est délibéré : les numéros de carte sont reconnus avant les numéros de téléphone, pour qu'un motif de téléphone n'avale pas une carte."
    },
    {
      "question": "Que se passe-t-il quand un contrôle n'a pas pu tourner ?",
      "answer": "Il est écrit comme une entrée à part : la conformité n'a pas été évaluée, en ces termes, délibérément tenue à l'écart d'une évaluation qui a tourné sans rien trouver. Une quantité que personne n'a mesurée est conservée comme non mesurée, avec un motif, plutôt qu'arrondie à zéro.<br><br>Fondre les deux dans une seule coche verte, c'est ainsi que &laquo;&nbsp;nous avons vérifié et il n'y avait rien&nbsp;&raquo; et &laquo;&nbsp;nous n'avons pas pu lire ceci, donc rien n'a été vérifié&nbsp;&raquo; finissent par se ressembler dans un rapport. La seconde est le constat qu'un audit cherche vraiment, et c'est celui qui disparaît d'habitude."
    },
    {
      "question": "Un régulateur demande qui a vu l'adresse d'un client. Qui répond ?",
      "answer": "Vous, à partir du dossier et non de la mémoire. Chaque contrôle de cette page conserve son propre travail &mdash; ce qui a été lu, au regard de quelle règle, ce qui a été trouvé, qui l'a regardé et quand &mdash; si bien que répondre à une demande du superviseur relève de la recherche documentaire et non d'un projet de reconstitution à travers quatre systèmes.<br><br>La personne responsable reste la vôtre. Ce qui change, c'est le temps qu'il lui faut pour pouvoir répondre, et si la réponse repose sur des documents ou sur le souvenir qu'a quelqu'un d'un mardi."
    },
    {
      "question": "Qui décide si nous remplissons une obligation ?",
      "answer": "Vos propres équipes. La conformité est un jugement, et il reste chez ceux qui le portent. Ce que fait le logiciel, c'est trouver l'enregistrement, montrer la règle au regard de laquelle il a été lu, et remettre les deux à la personne responsable &mdash; votre responsable conformité, votre délégué à la protection des données, votre auditeur. C'est à eux de dire si l'obligation est remplie."
    }
  ]
}
{{< /faq >}}

{{< section-container class="py-12" >}}
<div class="max-w-5xl mx-auto px-4">
    <div class="text-center">
        <a href="{{< contacturl >}}" class="inline-flex items-center justify-center px-10 py-5 text-xs font-black uppercase tracking-widest !text-on-fill text-on-fill drop-shadow-md transition-all duration-300 bg-gradient-to-r from-signal-fill to-signal-fill-hover rounded-xl border border-signal/30 hover:shadow-2xl hover:-translate-y-1">
            Réserver une consultation
        </a>
    </div>
</div>
{{< /section-container >}}
