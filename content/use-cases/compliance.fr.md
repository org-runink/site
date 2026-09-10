---
title: "Données Personnelles des Clients et Bilan des Émissions"
description: "Faire tourner un système écrit sans bruit des données personnelles dans ses propres journaux, et le bilan des émissions prend un trimestre à monter. Voici exactement ce que le logiciel fait pour chacun des deux, y compris ce qu'il ne fait pas."
layout: "use_case"
badge: "Gestion des Risques"
badgeColor: "#ea580c"
product: "Runink FACE"
date: "2024-05-20T00:00:00Z"
author: "Lead Data & Cloud Architect"
---

{{< section-container class="py-8" >}}
<div class="max-w-5xl mx-auto px-4">

<p class="text-xs font-black uppercase tracking-[0.25em] text-stone-500 mb-2">Runink FACE &middot; Conformité et bilan des émissions</p>
<p class="text-base text-stone-500 font-medium mb-10">Ceci est un scénario pour <strong class="text-stone-300">Runink FACE</strong>, et non pour la plateforme qui se trouve dessous. Cela vaut d'être dit franchement, car la conformité a tout l'air d'un sujet de plateforme : les contrôles décrits ici lisent les enregistrements que FACE tient de vos envois et de vos rapports, et ils font partie de FACE au lieu d'être une option ajoutée à l'infrastructure.</p>

<h2 class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6 mt-8">En Bref</h2>
<ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6 mb-12">
<li><strong class="text-stone-200">Les données personnelles n'atteignent pas les journaux.</strong> Les adresses e-mail, les numéros de téléphone, les numéros de carte, les numéros de sécurité sociale et les adresses IP sont retirés des journaux et des sorties de diagnostic avant qu'ils soient écrits. La trace qu'un système laisse derrière lui ne devient donc pas une deuxième copie des données.</li>
<li><strong class="text-stone-200">C'est une propriété de la plateforme, pas un rapport que vous lancez &mdash; et elle n'a aucun test.</strong> Le masquage a lieu sur le chemin d'écriture sous chaque service, à chaque endroit où un service écrit une ligne. Nous vous dirons aussi que la fonction de masquage elle-même ne porte aucun test propre, car la liste de ce qu'une expression régulière est censée attraper ne prouve pas qu'elle l'attrape. Lisez la liste comme une description d'intention, et non comme une certification.</li>
<li><strong class="text-stone-200">Le chiffre d'émissions, c'est un facteur routier publié multiplié par une distance réellement mesurée.</strong> Pas des poids, pas des modes, pas un modèle. Un seul facteur du puits à la roue, pour un poids lourd diesel, appliqué à la distance de la ligne que le calcul d'itinéraire a renvoyée, avec la méthode écrite sur le chiffre. La mer et l'air ne sont pas couverts, et une ligne sans distance mesurée ne produit rien plutôt qu'une estimation.</li>
</ul>

    <div class="text-center mb-16">
        <h1 class="text-5xl md:text-6xl font-black !text-white text-white drop-shadow-md italic tracking-tighter uppercase mb-6">Deux Rapports Que Personne N'a Le Temps De Monter.</h1>
        <p class="text-xl text-stone-400 font-bold leading-relaxed">
            La protection des données et les émissions ont l'air de deux sujets différents. C'est le même : des enregistrements éparpillés dans plusieurs systèmes. Seule une personne qui les rapproche à la main peut en répondre.
        </p>
    </div>

    <div class="flex flex-col gap-12 mb-20">
        <div>
            <h2 class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Où Cela Dérape</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Le nom et l'adresse d'un client servent à livrer le colis. Ils ne servent pas sur le tableau de bord d'un transporteur, dans un rapport envoyé à un partenaire, ni dans la copie du fichier que quelqu'un a tirée pour une réunion. Mais le champ voyage avec l'enregistrement, et il continue son chemin.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Personne ne veut cela. Cela arrive parce que le plus court chemin pour répondre à une question est d'exporter ce qu'on a, et ce qu'on a contient encore les données personnelles.
            </p>
            <p class="text-lg text-stone-400 font-medium font-semibold text-[#10b981] tracking-wide font-bold text-sm">
                On ne protège pas ce qu'on ne voit pas sortir.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                Le bilan des émissions a la même forme. Les chiffres qu'il vous faut sont tous dans vos propres relevés d'expédition : combien a bougé, sur quelle distance, par quel moyen. Ils sont juste dans plusieurs systèmes, sous plusieurs formes. Les réunir prend un trimestre de l'année de quelqu'un.
            </p>
        </div>
        <div>
            <h2 class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Ce Qui Se Passe À La Place</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Du côté de la protection des données, le mécanisme est plus étroit qu'on ne le vend d'ordinaire, et il mérite d'être dit exactement. Chaque service écrit ses journaux et ses diagnostics à travers une étape de masquage partagée, qui retire du texte les adresses e-mail, les numéros de téléphone, les numéros de carte, les numéros de sécurité sociale, les adresses IP et les adresses matérielles avant qu'il n'atterrisse, ainsi que des champs nommés &mdash; mots de passe, jetons, secrets, clés de licence, URL de webhook &mdash; partout où ils apparaissent dans une charge structurée. L'idée est que faire tourner un système ne crée pas en silence une deuxième copie des données personnelles qu'il contient : l'endroit où les fuites se découvrent tard, et l'endroit où personne ne pense à regarder. Ce qu'il ne fait <em>pas</em> : relire vos rapports ou vos écrans d'expédition, décider qu'un nom ne devrait pas y figurer, ou vous dire qui l'a vu. Il n'y a ici ni relecture d'écran ni constat d'exposition ; si une page vous a dit le contraire, elle décrivait quelque chose qui n'existe pas.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Et il y a une chose que nous ne laisserons pas une liste à puces dissimuler. Ce masquage n'a aucun test à lui. L'ordre interne est soigné &mdash; les numéros de carte sont cherchés avant les numéros de téléphone, pour qu'un motif de téléphone n'avale pas une carte &mdash; et il est appelé depuis chaque service qui écrit une ligne, mais personne n'a écrit de test qui prouve qu'il attrape ce qu'il prétend attraper. Une règle sans contrôle est un commentaire. Nous préférons que vous l'appreniez de nous plutôt que de le trouver dans un dossier de <em>due diligence</em>.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Pour les émissions, soyons exacts sur ce dont le chiffre est fait, car la catégorie ne l'est pas. C'est un seul facteur publié de transport routier &mdash; du puits à la roue, pour un poids lourd diesel &mdash; multiplié par la distance de la ligne que le calcul d'itinéraire a réellement renvoyée, et annualisé sur un nombre de jours ouvrés qui est énoncé. La méthode voyage avec le chiffre, dans la même phrase, pour qu'un auditeur lise l'hypothèse au moment même où il lit le nombre. Ce que ce n'est pas : un modèle de poids et de modes. La mer et l'air n'y sont pas, et une ligne dont la distance n'a jamais été mesurée ne donne rien plutôt qu'une supposition. C'est aussi, aujourd'hui, une carte qui n'apparaît que là où ces distances de ligne se trouvent déjà dans les données de l'instance ; une instance sans rien de branché ne produit aucune carte d'émissions, plutôt qu'un exemple travaillé portant votre nom.
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
        <div class="bg-[#1b1919] p-8 rounded-2xl border border-stone-800/80 shadow-[0_0_20px_rgba(16,185,129,0.05)] shadow-2xl">
             <h3 class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-[#059669] mb-4 tracking-tighter uppercase italic drop-shadow-lg">Comment Vous Saurez Que Cela A Marché</h3>
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

    <div class="text-center">
        <a href="/#contact" class="inline-flex items-center justify-center px-10 py-5 text-xs font-black uppercase tracking-widest !text-white text-white drop-shadow-md transition-all duration-300 bg-gradient-to-r from-[#10b981] to-[#059669] rounded-xl border border-[#10b981]/30 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:-translate-y-1">
            Réserver une consultation
        </a>
    </div>
</div>
{{< /section-container >}}
