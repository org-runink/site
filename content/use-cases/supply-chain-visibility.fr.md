---
title: "Le Tableau Que Personne N'a le Temps d'Assembler"
description: "Les faits sont dans quatre systèmes et quatre formats, et les rapprocher coûte une matinée que personne n'a. Si bien que le tableau qui permettrait d'agir ne s'assemble qu'après coup, pour la réunion qui le passe en revue."
layout: "use_case"
product: "Runink FACE"
badge: "Graphe de Domaines"
date: "2024-05-20T00:00:00Z"
author: "Runink"
---

{{< section-container class="py-8" >}}
<div class="max-w-5xl mx-auto px-4">

<h2 id="en-bref" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6 mt-8">En Bref</h2>
<ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6 mb-8">
<li><strong class="text-stone-200">Vos enregistrements sont triés selon ce qu'ils sont, pas selon leur provenance.</strong> Deux tables qui parlent d'expéditions relèvent toutes les deux de la logistique, que l'une soit arrivée de votre système d'entrepôt et l'autre sous forme de tableur que quelqu'un envoie par courriel le vendredi.</li>
<li><strong class="text-stone-200">La carte est dérivée, pas devinée.</strong> Les domaines et les liens entre eux sont établis à partir de la structure de vos propres fichiers, par des règles fixes &mdash; aucun modèle, aucune recherche web, rien ne sort de la maison à cette étape. Les mêmes fichiers produisent toujours la même carte.</li>
<li><strong class="text-stone-200">Un domaine qui n'a pas pu être évalué est marqué comme non évalué.</strong> Pas comme conforme. Les mots sont explicites : ce n'est pas un constat que le domaine va bien. Et sans aucune donnée connectée, il dit qu'il n'y a encore rien à cartographier plutôt que de dessiner un diagramme vide.</li>
</ul>

<p class="mb-12">
    <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-stone-600 text-stone-400 text-[10px] font-black uppercase tracking-[0.25em]">
        <span class="inline-block w-2 h-2 rounded-full border border-stone-400"></span>Hypothétique
    </span>
    <span class="block mt-3 text-sm text-stone-500 font-medium">
        Ceci décrit le mécanisme et une semaine plausible autour de lui. Ce n'est pas le compte rendu d'un événement : cela n'a pas tourné sur les systèmes d'un client, rien sur cette page n'est mesuré, et aucun chiffre n'est avancé sur ce qu'il trouve ni sur le temps qu'il y met.
    </span>
</p>

    <div class="text-center mb-16">
        <h2 id="quatre-systemes-une-matinee-que-vous-navez-pas" class="text-5xl md:text-6xl font-black !text-white text-white drop-shadow-md italic tracking-tighter uppercase mb-6">Quatre Systèmes. Une Matinée Que Vous N'avez Pas.</h2>
        <p class="text-xl text-stone-400 font-bold leading-relaxed">
            Rien ne manque. Chaque fait dont vous avez besoin a été enregistré, correctement, par quelqu'un qui faisait son travail. C'est le rapprochement qui n'arrive jamais à temps.
        </p>
    </div>

    <div class="flex flex-col gap-12 mb-20">
        <div>
            <h2 id="ou-cela-derape" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Où Cela Dérape</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Pour répondre à une seule question ordinaire &mdash; pourquoi ce client a-t-il reçu deux livraisons incomplètes en un mois &mdash; quelqu'un ouvre le système de commandes, puis le système d'entrepôt, puis le portail du transporteur, puis un tableur qu'une seule personne tient. Quatre connexions, quatre façons de nommer le même site, quatre idées de ce qu'est une semaine.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                C'est faisable. Cela prend une matinée, et c'est fait par le seul analyste qui sait quelle colonne de quel export veut dire quoi. Donc c'est fait pour la revue mensuelle, et c'est fait quand quelque chose a déjà assez mal tourné pour justifier une matinée.
            </p>
            <p class="text-lg text-stone-400 font-medium font-semibold text-signal tracking-wide font-bold text-sm">
                Le tableau est toujours assemblé après le moment où il aurait servi.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Le second coût, c'est que le rapprochement vit dans la tête de quelqu'un. La correspondance entre un code de site dans un système et un nom de dépôt dans un autre n'est écrite nulle part : elle est retenue. Quand cette personne est en congé, la question ne peut pas être traitée du tout, et personne ne le dit vraiment à voix haute.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                Cela appartient au directeur supply chain, et c'est porté au quotidien par le responsable d'exploitation et le seul analyste sur qui tout le monde compte.
            </p>
        </div>
        <div>
            <h2 id="ce-qui-se-passe-a-la-place" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Ce Qui Se Passe À La Place</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                La première chose qui se passe est la chose ennuyeuse : vos données sont lues et triées selon les parties de l'activité qu'elles décrivent. Expéditions, stocks, transporteurs, fournisseurs et fret forment un domaine. Factures, provisions et règlements en forment un autre. Les relevés de capteurs un autre. Les véhicules et les conducteurs un autre encore. Les enregistrements sont placés selon ce dont ils parlent, si bien que le même type de fait atterrit au même endroit, qu'il vienne d'un ERP, d'un système d'entrepôt, d'un système de transport ou d'un fichier.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Là où les colonnes sont trop vagues pour placer une table, elle est placée selon ce qu'est la source. Un export d'entrepôt, de cour, de transport ou de gestion des commandes, c'est de la logistique. Un flux de capteurs ou de tags, c'est de la télémétrie. Un système de sinistres, c'est de la finance. Le but de cette règle est d'éviter ce que fait tout outil de catalogue : balayer la moitié pénible de votre parc dans un tiroir appelé &laquo;&nbsp;autres&nbsp;&raquo; et ne plus jamais en reparler.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Ensuite les liens. Là où deux domaines partagent le terrain sur lequel ils se tiennent, le lien est tracé. Là où un domaine ne partage aucun nom de colonne avec quoi que ce soit d'autre, il reçoit tout de même une relation plutôt que de flotter au bord du diagramme avec l'air d'être hors sujet &mdash; un domaine qui paraît déconnecté est un domaine sur lequel personne ne pose de question, et ce silence a généralement tort.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Tout cela est établi par des règles fixes à partir de la forme de vos fichiers. Aucun modèle n'est interrogé, aucune recherche ne sort, rien ne traverse le réseau à cette étape, et les mêmes fichiers produisent la même carte chaque fois. Un modèle est employé ensuite pour ajouter du commentaire, et ce qu'il ajoute est clairement le commentaire, pas la structure. La structure est quelque chose que vous pouvez re-dériver et vérifier. Nos propres fichiers de configuration, qui se trouvent au même endroit que vos données, sont délibérément exclus, parce qu'un outil qui vous présente son propre ordonnanceur comme votre domaine d'exploitation ne décrit pas votre activité.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Par-dessus la carte, chaque domaine est passé en revue : dans quel état il est, où sont les constats, et pour chaque constat sa catégorie, sa gravité, la règle à laquelle il se rapporte et un remède suggéré, avec le système dont chaque morceau provient. Quand un domaine ne peut pas être évalué, la réponse est qu'il n'a pas été évalué, et pourquoi &mdash; dit avec ces mots, parce que &laquo;&nbsp;nous n'avons pas regardé&nbsp;&raquo; et &laquo;&nbsp;nous avons regardé et tout va bien&nbsp;&raquo; ne sont pas la même phrase, et se lisent de la même couleur sur tous les tableaux de bord jamais construits.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Et ensuite vous pouvez lui poser des questions, dans le vocabulaire que vous employez déjà, avec la carte et les règles reconnues derrière la réponse, et restreint aux domaines que vous regardez. Vous obtenez le raisonnement, pas seulement la réponse. Un scénario travaillé dans <a href="/fr/use-cases/hypothesis-lab">le laboratoire d'hypothèses</a> peut être transmis de là comme action proposée, avec ses variables et les règles face auxquelles il a été argumenté qui voyagent avec lui, plutôt que d'arriver comme une référence nue à une exécution faite par quelqu'un d'autre.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Une limite à tout cela, énoncée ici plutôt que laissée à votre découverte. Ce que la cartographie lit, ce sont les fichiers posés dans le répertoire de données de l'instance elle-même, et sur une instance standard ce répertoire n'est pas lu &mdash; de sorte que ce que vous obtenez en retour est le refus, pas une carte maigre. Les règles de classement sont réelles et elles sont déterministes ; le chemin qui amène vos exports réels devant elles n'est pas terminé. Nous préférons que la page dise quelle moitié est laquelle plutôt que de décrire l'ensemble au présent et de laisser un pilote découvrir la couture.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Là où un coin du tableau devient une référence en passe de manquer, la réponse est le travail suivant, dans <a href="/fr/use-cases/fulfillment-optimization">couverture de stock et plan d'approvisionnement</a>, et le signal en dessous est <a href="/use-cases/demand-forecasting">la prévision de la demande</a>. La visibilité est ce qui rend ces deux-là discutables à partir du même jeu de faits plutôt qu'à partir de trois exports.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                Ce qui arrive à une personne est une courte liste classée d'actions proposées avec les enregistrements joints, pas un diagramme à admirer. Une personne nommée valide, corrige ou rejette chacune, et cet accord est conservé. C'est la validation qui l'envoie, et un élément tranché quitte la file au lieu de revenir au tour suivant quand quelqu'un ouvre le tableau. Là où une étape derrière la validation n'a pas encore d'implémentation, la réponse nomme cette étape comme non exécutée au lieu de déclarer l'action terminée &mdash; le tableau montre donc ce qui a été décidé et, séparément, ce qui a réellement été fait. Tout tourne sur des machines qui vous appartiennent.
            </p>
        </div>
        <div class="bg-sheet p-8 rounded-2xl border border-stone-800/80 shadow-2xl">
             <h3 id="comment-vous-saurez-que-cela-a-marche" class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-signal-fill to-signal-fill-hover mb-4 tracking-tighter uppercase italic drop-shadow-lg">Comment Vous Saurez Que Cela A Marché</h3>
             <p class="text-lg text-stone-400 font-medium mb-6">
                Chaque chiffre ci-dessous est le vôtre, pas le nôtre. Nous n'apportons pas de chiffres ici ; c'est vous qui les apportez. Notez où vous en êtes aujourd'hui, car ce point de départ est perdu pour de bon dès que les choses s'améliorent.
             </p>
             <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">Combien de temps prend une question ordinaire qui traverse les systèmes.</strong> Prenez-en une vraie, qu'on vous a posée le mois dernier. Chronométrez honnêtement la personne qui y répond, attentes comprises. C'est le chiffre dont parle tout le reste de cette page.</li>
                <li><strong class="text-stone-200">Combien de personnes auraient pu y répondre.</strong> Pas combien ont les accès. Combien auraient réellement pu produire la réponse. Si c'est une seule, notez son nom et gardez-le là où un document de conseil d'administration peut le retrouver.</li>
                <li><strong class="text-stone-200">Combien de systèmes de référence vous avez, et combien figurent dans le reporting mensuel.</strong> Listez les systèmes qui détiennent des faits opérationnels. Puis listez ceux qui atteignent une revue. L'écart est la part de votre exploitation actuellement pilotée à l'anecdote.</li>
                <li><strong class="text-stone-200">Quelle part du reporting est assemblée à la main, et par qui.</strong> Reprenez le reporting du dernier trimestre et marquez chaque chiffre comme automatique ou saisi à la main. Faites-le avant que quoi que ce soit ne change, car c'est celui que personne ne croit avant de voir sa propre réponse.</li>
             </ul>
             <p class="text-sm text-stone-500 font-bold uppercase tracking-widest text-xs mt-6 text-center">Apportez un mois d'exports des systèmes que vous voudriez vraiment voir rapprochés, dans le format où ils sortent.</p>
        </div>
    </div>

    <div class="text-center">
        <a href="/fr/#contact" class="inline-flex items-center justify-center px-10 py-5 text-xs font-black uppercase tracking-widest !text-on-fill text-on-fill drop-shadow-md transition-all duration-300 bg-gradient-to-r from-signal-fill to-signal-fill-hover rounded-xl border border-signal/30 hover:shadow-2xl hover:-translate-y-1">
            Réserver une consultation
        </a>
    </div>
</div>
{{< /section-container >}}
