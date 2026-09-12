---
title: "Données Personnelles des Clients et Bilan des Émissions"
description: "Faire tourner un système écrit sans bruit des données personnelles dans ses propres journaux, et le bilan des émissions prend un trimestre à monter. Voici exactement ce que le logiciel fait pour chacun des deux, y compris ce qu'il ne fait pas."
layout: "use_case"
badge: "Gestion des Risques"
badgeColor: "#ea580c"
product: "Runink FACE"
date: "2024-05-20T00:00:00Z"
author: "Runink"
---

{{< section-container class="py-8" >}}
<div class="max-w-5xl mx-auto px-4">

<p class="text-xs font-black uppercase tracking-[0.25em] text-stone-500 mb-2">Runink FACE &middot; Conformité et bilan des émissions</p>
<p class="text-base text-stone-500 font-medium mb-10">Ceci est un scénario pour <strong class="text-stone-300">Runink FACE</strong>, et non pour la plateforme qui se trouve dessous. Cela vaut d'être dit franchement, car la conformité a tout l'air d'un sujet de plateforme : les contrôles décrits ici lisent les enregistrements que FACE tient de vos envois et de vos rapports, et ils font partie de FACE au lieu d'être une option ajoutée à l'infrastructure.</p>

<h2 id="en-bref" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6 mt-8">En Bref</h2>
<ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6 mb-12">
<li><strong class="text-stone-200">Les données personnelles n'atteignent pas les journaux.</strong> Les adresses e-mail, les numéros de téléphone, les numéros de carte, les numéros de sécurité sociale et les adresses IP sont retirés des journaux et des sorties de diagnostic avant qu'ils soient écrits. La trace qu'un système laisse derrière lui ne devient donc pas une deuxième copie des données.</li>
<li><strong class="text-stone-200">C'est une propriété de la plateforme, pas un rapport que vous lancez &mdash; et elle n'a aucun test.</strong> Le masquage a lieu sur le chemin d'écriture sous chaque service, à chaque endroit où un service écrit une ligne. Nous vous dirons aussi que la fonction de masquage elle-même ne porte aucun test propre, car la liste de ce qu'une expression régulière est censée attraper ne prouve pas qu'elle l'attrape. Lisez la liste comme une description d'intention, et non comme une certification.</li>
<li><strong class="text-stone-200">Le chiffre d'émissions, c'est un facteur routier publié multiplié par une distance de ligne &mdash; et la carte est aujourd'hui réservée à la démonstration.</strong> Pas des poids, pas des modes, pas un modèle. Un seul facteur du puits à la roue, pour un poids lourd diesel, appliqué aux distances de ligne présentes dans les données d'itinéraire, avec la méthode écrite sur le chiffre. Ces données d'itinéraire sont aujourd'hui un fichier d'échantillon amorcé, donc une instance branchée n'affiche aucune carte d'émissions. La mer et l'air ne sont pas couverts, et là où il n'y a pas de donnée de distance, la carte n'apparaît pas plutôt qu'une estimation ne vienne la remplacer.</li>
</ul>

    <div class="text-center mb-16">
        <h2 id="deux-rapports-que-personne-na-le-temps-de-monter" class="text-5xl md:text-6xl font-black !text-white text-white drop-shadow-md italic tracking-tighter uppercase mb-6">Deux Rapports Que Personne N'a Le Temps De Monter.</h2>
        <p class="text-xl text-stone-400 font-bold leading-relaxed">
            La protection des données et les émissions ont l'air de deux sujets différents. C'est le même : des enregistrements éparpillés dans plusieurs systèmes. Seule une personne qui les rapproche à la main peut en répondre.
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
            <p class="text-lg text-stone-400 font-medium">
                Le bilan des émissions a la même forme. Les chiffres qu'il vous faut sont tous dans vos propres relevés d'expédition : combien a bougé, sur quelle distance, par quel moyen. Ils sont juste dans plusieurs systèmes, sous plusieurs formes. Les réunir prend un trimestre de l'année de quelqu'un.
            </p>
        </div>
        <div>
            <h2 id="a-qui-cela-s-adresse" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">À Qui Cela S'adresse</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Deux rapports, trois bureaux, et la même question sous les deux : pouvez-vous montrer votre travail ?
            </p>
            <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">Le délégué à la protection des données, et conformité et risques.</strong> Ce qui arrive aujourd'hui, c'est le nom et l'adresse d'un client, nécessaires une fois pour livrer un colis et qui voyagent avec l'enregistrement depuis &mdash; jusque dans un export, un rapport partenaire, un fichier de journal que personne ne lit avant que quelque chose ait mal tourné. Ce qui change, c'est là où la trace s'arrête. Les données personnelles sont retirées des journaux et des sorties de diagnostic avant qu'ils soient écrits, sur le chemin sous chaque service plutôt que dans un rapport que quelqu'un pense à lancer.</li>
                <li><strong class="text-stone-200">DSI et sécurité de l'information.</strong> Ce qui arrive aujourd'hui, c'est une question à laquelle on ne répond qu'en comptant : lesquels de vos services écrivent des journaux applicatifs, et lesquels de ceux-là font passer leur sortie par un masquage quelconque avant de la stocker ou de l'expédier. Ce qui change, c'est que la réponse est une propriété de la manière dont le logiciel est construit, décrite en phrases ordinaires que vous pouvez confronter à une revue de code : la conversation sécurité devient une description plutôt qu'une négociation.</li>
                <li><strong class="text-stone-200">Audit interne, et celui qui répond du rapport.</strong> Ce qui arrive aujourd'hui, c'est une demande d'expliquer pourquoi un chiffre est ce qu'il est, des mois après le départ de la personne qui l'a assemblé. Ce qui change, c'est que la méthode voyage avec le chiffre dans la même phrase, et qu'un contrôle qui n'a pas pu tourner est écrit comme une entrée à part plutôt que de passer discrètement pour un résultat propre.</li>
            </ul>
        </div>
        <div>
            <h2 id="ce-qui-se-passe-a-la-place" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Ce Qui Se Passe À La Place</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Du côté de la protection des données, le mécanisme est plus étroit qu'on ne le vend d'ordinaire, et il mérite d'être dit exactement. Chaque service écrit ses journaux et ses diagnostics à travers une étape de masquage partagée, qui retire du texte les adresses e-mail, les numéros de téléphone, les numéros de carte, les numéros de sécurité sociale, les adresses IP et les adresses matérielles avant qu'il n'atterrisse, ainsi que des champs nommés &mdash; mots de passe, jetons, secrets, clés de licence, URL de webhook &mdash; partout où ils apparaissent dans une charge structurée. L'idée est que faire tourner un système ne crée pas en silence une deuxième copie des données personnelles qu'il contient : l'endroit où les fuites se découvrent tard, et l'endroit où personne ne pense à regarder. Ce qu'il ne fait <em>pas</em> : relire vos rapports ou vos écrans d'expédition, décider qu'un nom ne devrait pas y figurer, ou vous dire qui l'a vu. Il n'y a ici ni relecture d'écran ni constat d'exposition ; si une page vous a dit le contraire, elle décrivait quelque chose qui n'existe pas.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Et il y a une chose que nous ne laisserons pas une liste à puces dissimuler. Ce masquage n'a aucun test à lui. L'ordre interne est soigné &mdash; les numéros de carte sont cherchés avant les numéros de téléphone, pour qu'un motif de téléphone n'avale pas une carte &mdash; et il est appelé depuis chaque service qui écrit une ligne, mais personne n'a écrit de test qui prouve qu'il attrape ce qu'il prétend attraper. Une règle sans contrôle est un commentaire. Nous préférons que vous l'appreniez de nous plutôt que de le trouver dans un dossier de <em>due diligence</em>.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Pour les émissions, soyons exacts sur ce dont le chiffre est fait, car la catégorie ne l'est pas. C'est un seul facteur publié de transport routier &mdash; du puits à la roue, pour un poids lourd diesel &mdash; multiplié par une distance de ligne tirée des données d'itinéraire plutôt que modélisée, et annualisé sur un nombre de jours ouvrés qui est énoncé. La méthode voyage avec le chiffre, dans la même phrase, pour qu'un auditeur lise l'hypothèse au moment même où il lit le nombre. Ce que ce n'est pas : un modèle de poids et de modes. La mer et l'air n'y sont pas, et une ligne dont la distance n'a jamais été mesurée ne donne rien plutôt qu'une supposition. C'est aussi, aujourd'hui, une carte réservée à la démonstration : les distances de ligne qu'elle multiplie sont lues dans un fichier d'échantillon amorcé, derrière le même interrupteur qui allume le bandeau de données de démonstration. Une instance sans rien de branché ne produit aucune carte d'émissions, plutôt qu'un exemple travaillé portant votre nom, et sur une instance où vos propres systèmes sont branchés la carte reste absente tant que ce chemin n'est pas construit.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                Il y avait aussi un taux de réduction ici : une part dont une ligne modifiée était censée abaisser les émissions, présentée comme bien établie et sourcée sur rien. Il a été supprimé, et il existe désormais un test dont le seul travail est d'échouer si quelqu'un remet un taux de réduction. Une distance et un facteur ne peuvent pas soutenir un contrefactuel, et le moyen le moins cher de le garder vrai était de rendre cette absence exigible plutôt que de la confier à la mémoire.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Les deux gardent la trace de leur propre travail. Un auditeur demande d'où sort un chiffre. Un régulateur demande qui a vu l'adresse d'un client. La réponse vient du dossier, et non de la mémoire de la personne qui a monté le tableur.
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
                <li><strong class="text-stone-200">Les jours de travail dans votre cycle de reporting.</strong> Demandez aux personnes qui montent le bilan des émissions combien de jours cela leur a pris l'an dernier. Puis combien de ces jours sont passés à chercher des chiffres plutôt qu'à les vérifier.</li>
                <li><strong class="text-stone-200">La part du bilan que vous pouvez sourcer.</strong> Comptez la part de vos chiffres qui remonte à un relevé d'expédition que vous pouvez montrer, face à la part qui repose sur une estimation que plus personne ne sait défendre.</li>
                <li><strong class="text-stone-200">Où se trouvent vraiment les données personnelles.</strong> Prenez un échantillon des rapports et des écrans que vos partenaires et vos transporteurs voient. Comptez combien portent un nom, un numéro de téléphone ou une adresse. La plupart des équipes ne l'ont jamais compté.</li>
                <li><strong class="text-stone-200">La part de vos propres journaux qui passe par un masquage, tout simplement.</strong> Comptez les services qui écrivent des journaux applicatifs, puis comptez ceux dont la sortie traverse une étape de masquage avant d'être stockée ou envoyée chez un prestataire de journalisation. C'est le point de départ dont parle la moitié &laquo;&nbsp;données personnelles&nbsp;&raquo; de cette page, et c'est celui que la plupart des équipes peuvent établir en une après-midi et préféreraient ne pas établir.</li>
             </ul>
             <p class="text-sm text-stone-500 font-bold uppercase tracking-widest text-xs mt-6 text-center">Apportez le bilan de l'an dernier et un échantillon des écrans vus par vos partenaires.</p>
        </div>
    </div>

    <div class="border-l-2 border-stone-700 pl-5 mb-16">
        <p class="text-xs font-black uppercase tracking-[0.25em] text-stone-400 mb-2">Statut : hypothétique &mdash; non mesuré ; posture de conformité déclarée par nous</p>
        <p class="text-base text-stone-500 font-medium mb-4">
            Les expositions et le cycle de reporting décrits ci-dessus sont dessinés pour montrer la forme du travail. Ce ne sont pas les comptes rendus d'une mission chez un client, et rien sur cette page n'est un résultat mesuré.
        </p>
        <p class="text-base text-stone-500 font-medium">
            Deux choses que cette page ne prétend pas. FACE est <strong class="text-stone-300">orienté SOC&nbsp;2</strong>, ce qui est une intention de conception que nous déclarons nous-mêmes : ce n'est pas un audit achevé et ce n'est pas une certification. Et rien ici ne vous met en conformité avec quoi que ce soit. Le logiciel trouve l'enregistrement, montre la règle à laquelle il a été confronté, et remet les deux à la personne qui en répond. Savoir si vous satisfaites une obligation est un jugement qui reste chez votre responsable conformité, votre DPO et votre auditeur, et nous vous mentirions en laissant croire autre chose.
        </p>
    </div>
</div>
{{< /section-container >}}

{{< faq >}}
{
  "title": "Les Questions Qu'un Responsable Conformité Pose D'abord",
  "description": "Ce que fait vraiment la partie confidentialité, de quoi est fait le chiffre d'émissions, et ce que cette page n'affirme pas.",
  "questions": [
    {
      "question": "Qu'est-ce qui empêche les données personnelles d'atteindre nos journaux ?",
      "answer": "Une seule étape de masquage, posée sur le chemin d'écriture sous chaque service plutôt que dans un outil lancé après coup. Tous les services écrivent leurs journaux et leurs diagnostics à travers elle, et elle retire du texte les adresses e-mail, les numéros de téléphone, les numéros de carte, les numéros de sécurité sociale et les adresses réseau et matérielles avant que la ligne n'atterrisse. Des champs nommés partent aussi &mdash; mots de passe, jetons, secrets, clés de licence, URL de webhook &mdash; partout où ils apparaissent dans une structure de données.<br><br>L'ordre interne est délibéré : les numéros de carte sont reconnus avant les numéros de téléphone, pour qu'un motif de téléphone n'avale pas une carte. Lisez cette liste comme la description de ce que l'étape est construite pour attraper. C'est une description du mécanisme, pas un certificat, et nous préférons que vous l'entendiez dans ces termes."
    },
    {
      "question": "Est-ce que cela inspecte nos tableaux de bord et nos exports à la recherche de données personnelles exposées ?",
      "answer": "Le mécanisme est plus étroit que ce que la catégorie vend d'ordinaire, et il vaut la peine de dire exactement ce qu'il est. Il porte sur ce que vos propres systèmes écrivent à leur sujet : journaux, diagnostics et structures de données qui vont avec, nettoyés en sortie pour qu'exploiter un système ne crée pas discrètement un second stock des données personnelles qu'il contient. C'est là que les fuites sont découvertes tard et là où personne ne pense à regarder.<br><br>Ce que vous achetez ici, c'est que cette trace soit propre par construction, à chaque endroit où un service écrit une ligne. Décider qui devrait pouvoir voir l'adresse d'un client sur un écran destiné à un partenaire est une question de politique portant sur vos propres systèmes, et elle reste chez ceux qui les exploitent."
    },
    {
      "question": "De quoi est vraiment fait le chiffre d'émissions ?",
      "answer": "Un seul facteur publié de transport routier &mdash; du puits à la roue, pour un poids lourd diesel &mdash; multiplié par une distance de ligne prise dans les données d'itinéraire plutôt que modélisée, et annualisée sur un nombre déclaré de jours ouvrés. La méthode voyage avec le chiffre dans la même phrase, si bien qu'un auditeur lit l'hypothèse au moment où il lit le nombre.<br><br>Soyez au clair sur les bords, car la catégorie ne l'est pas. C'est du transport routier : la mer et l'air sont en dehors. Une ligne dont la distance n'a jamais été mesurée ne donne rien plutôt qu'une supposition. Et les distances derrière la carte proviennent aujourd'hui d'un fichier d'échantillon : ce que vous regardez est donc la méthode montrée et non une lecture de vos propres lignes. Il y a eu ici un taux de réduction en plus &mdash; la part dont une ligne modifiée était censée réduire les émissions, sourcée à rien &mdash; et il a été supprimé, avec un test dont le seul travail est d'échouer si quelqu'un en remet un."
    },
    {
      "question": "Que se passe-t-il quand un contrôle n'a pas pu tourner ?",
      "answer": "Il est écrit comme une entrée à part : la conformité n'a pas été évaluée, en ces termes, délibérément tenue à l'écart d'une évaluation qui a tourné sans rien trouver. Une quantité que personne n'a mesurée est conservée comme non mesurée, avec un motif, plutôt qu'arrondie à zéro.<br><br>Fondre les deux dans une seule coche verte, c'est ainsi que &laquo;&nbsp;nous avons vérifié et il n'y avait rien&nbsp;&raquo; et &laquo;&nbsp;nous n'avons pas pu lire ceci, donc rien n'a été vérifié&nbsp;&raquo; finissent par se ressembler dans un rapport. La seconde est le constat qu'un audit cherche vraiment, et c'est celui qui disparaît d'habitude."
    },
    {
      "question": "Un régulateur demande qui a vu l'adresse d'un client. Qui répond ?",
      "answer": "Vous, à partir du dossier et non de la mémoire. Les deux moitiés de cette page conservent leur propre travail &mdash; ce qui a été lu, au regard de quelle règle, ce qui a été trouvé, qui l'a regardé et quand &mdash; si bien que répondre à une demande du superviseur relève de la recherche documentaire et non d'un projet de reconstitution à travers quatre systèmes.<br><br>La personne responsable reste la vôtre. Ce qui change, c'est le temps qu'il lui faut pour pouvoir répondre, et si la réponse repose sur des documents ou sur le souvenir qu'a quelqu'un d'un mardi."
    },
    {
      "question": "Est-ce que tout cela nous rend conformes, ou certifie quoi que ce soit ?",
      "answer": "La conformité est un jugement, et il reste chez ceux qui le portent. Ce que fait le logiciel, c'est trouver l'enregistrement, montrer la règle au regard de laquelle il a été lu, et remettre les deux à la personne responsable &mdash; votre responsable conformité, votre délégué à la protection des données, votre auditeur. C'est à eux de décider si l'obligation est satisfaite, et nous vous mentirions en suggérant autre chose.<br><br>La même distinction vaut pour nous. La posture propre de FACE est orientée SOC&nbsp;2, une intention de conception que nous déclarons nous-mêmes : ce n'est pas un audit achevé, et ce n'est pas une affirmation selon laquelle Runink détiendrait une certification au titre de SOC&nbsp;2, d'ISO 27001, d'ISO 42001 ou d'un autre schéma. Là où cette différence compte pour vous, demandez-nous le document de posture plutôt que de vous fier à un mot sur une page web."
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
