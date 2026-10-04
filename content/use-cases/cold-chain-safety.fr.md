---
title: "Chaîne du Froid et Sécurité du Parc"
description: "Un conteneur se réchauffe pendant la nuit et personne n'ouvre la porte avant le matin. Ce que la caméra du parc voit déjà, lu au regard du bon de transfert et des papiers qui accompagnent l'envoi."
layout: "use_case"
product: "Runink FACE"
scenario: "reactive logistics"
badge: "Sentinelle IoT"
badgeColor: "#3b82f6"
date: "2024-05-20T00:00:00Z"
author: "Runink"
---

{{< section-container class="py-8" >}}
<div class="max-w-5xl mx-auto px-4">

<p class="text-[10px] font-black uppercase tracking-[0.25em] text-stone-500 mt-4 mb-3">Runink FACE &middot; Logistique réactive</p>
<p class="text-sm text-stone-500 font-medium mb-10 max-w-3xl">
ceci est un scénario <strong class="text-stone-300">Runink FACE</strong>, son versant parc à conteneurs. C'est une illustration du mécanisme, pas le compte rendu d'un déploiement. Ce que le logiciel lit ici, ce sont les documents et les images qu'une chaîne du froid produit déjà — le registre d'expédition, la remise, la photographie prise à la porte — au regard de la règle qui régit cet envoi. <a href="/blog/whitepapers/runink-face/" class="underline decoration-stone-700 hover:text-stone-300">Ce qu'est FACE</a>.
</p>

<h2 id="en-bref" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6 mt-8">En Bref</h2>
<ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6 mb-12">
<li><strong class="text-stone-200">La caméra du parc est lue là où tourne FACE.</strong> Une image qui arrive d'une caméra de parc ou d'une caméra infrarouge est vérifiée comme étant une vraie image avant que quoi que ce soit ne la lise, réduite à une taille qu'un modèle peut avaler, et lue par un modèle de vision qui tourne là où tourne FACE, pas chez un service extérieur. Ce qui revient est une observation écrite, attachée à l'image dont elle a été tirée.</li>
<li><strong class="text-stone-200">Un signal atteint tous ceux qui surveillent le parc.</strong> FACE peut diffuser un signal &mdash; oriente cette caméra, suspends ces mouvements de grue &mdash; à tout ce qui est abonné au flux d'événements du parc. Le registre le montre pour ce qu'il est, une demande, de sorte qu'un signal n'est jamais pris pour un mouvement déjà fait.</li>
</ul>

    <div class="text-center mb-16">
        <h2 id="le-releve-doit-dabord-arriver" class="text-5xl md:text-6xl font-black !text-white text-white drop-shadow-md italic tracking-tighter uppercase mb-6">Le Relevé Doit D'abord Arriver.</h2>
        <p class="text-xl text-stone-400 font-bold leading-relaxed">
            Le relevé qui condamne un chargement est enregistré des heures avant que quiconque le regarde. Tout le problème est l'écart entre les deux.
        </p>
    </div>

    <div class="flex flex-col gap-12 mb-20">
        <div>
            <h2 id="ou-cela-derape" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Où Cela Dérape</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Un groupe frigorifique commence à lâcher un mardi soir. Le capteur l'enregistre. Personne ne regarde à cette heure-là, et les données ne sont pas consultées avant l'ouverture du conteneur à l'autre bout.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                À ce moment-là, la question a changé. Ce n'est plus &laquo;&nbsp;peut-on sauver ce chargement&nbsp;&raquo;, c'est &laquo;&nbsp;qui le paie&nbsp;&raquo;. C'est une question bien plus chère, et c'est la seule qui reste.
            </p>
            <p class="text-lg text-stone-400 font-medium font-semibold text-signal tracking-wide font-bold text-sm">
                Le relevé était là depuis le début. Personne ne le lisait.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                Le parc a un problème de la même forme. Les règles sur les marchandises qui peuvent se tenir près de quelles autres sont connues, écrites, et contrôlées par une personne qui fait aussi quatre autres choses.
            </p>
        </div>
        <div>
            <h2 id="ce-qui-se-passe-a-la-place" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Ce Qui Se Passe À La Place</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Tout commence par le versant caméras du parc. Une image est validée comme vraie image avant qu'un modèle la voie, réduite à quelque chose qu'un modèle peut avaler, et lue par un modèle de vision là où tourne FACE — les enregistrements ne partent donc pas vers l'API de qui que ce soit pour être décrits. L'observation revient attachée à l'image dont elle vient, et c'est ce qui la rend discutable au lieu d'assénée.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Par-dessus cela, un signal peut être diffusé à tout ce qui surveille le flux d'événements du parc. La diffusion demande aux personnes et aux systèmes qui surveillent d'agir, et le registre la montre comme une demande, jamais comme un mouvement déjà survenu. Ainsi, &laquo;&nbsp;est-ce traité&nbsp;?&nbsp;&raquo; reçoit toujours une réponse vraie.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                Là où il y a quelque chose sur quoi agir, cela attend sous forme de mouvement rédigé, et une personne nommée l'approuve, le modifie ou le refuse, le visa restant au dossier. C'est l'approbation qui l'envoie. La réponse nomme chaque étape exécutée et toute étape qui n'a pas pu l'être, au lieu de rapporter un succès, de sorte que &laquo;&nbsp;approuvé&nbsp;&raquo; et &laquo;&nbsp;fait&nbsp;&raquo; restent deux mots différents.
            </p>
        </div>
        <div>
            <h2 id="qui-s-en-occupe" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Qui S'En Occupe</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Trois bureaux, et ce que chacun a sur les bras aujourd'hui.
            </p>
            <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">Le chef de parc.</strong> Aujourd'hui les règles sur les marchandises qui peuvent voisiner sont connues, écrites, et vérifiées par une personne qui fait aussi quatre autres choses. Ce qui change, c'est que les images que les caméras du parc enregistrent déjà sont lues, et que ce qui revient est une observation écrite rattachée à l'image dont elle sort &mdash; quelque chose qu'on peut ouvrir et contester, pas une ligne dans un cahier.</li>
                <li><strong class="text-stone-200">Conformité et risques.</strong> Aujourd'hui un constat sur la séparation des marchandises existe si quelqu'un passait par là. Ce qui change, c'est qu'une consigne peut être déposée sur le flux d'événements du parc pour tout ce qui l'écoute, et que le mouvement qui suit est rédigé et attend qu'une personne désignée l'approuve, le modifie ou le refuse. La validation est conservée avec l'image qui l'a déclenchée.</li>
                <li><strong class="text-stone-200">Informatique et sécurité de l'information.</strong> Aujourd'hui un produit caméra revient à demander à quel service extérieur les images du parc sont envoyées pour être décrites. Ce qui change, c'est que l'image est validée comme image réelle et lue par un modèle de vision là où tourne FACE, si bien que la revue porte sur les machines prévues par votre offre, pas sur un service extérieur.</li>
            </ul>
        </div>
        <div class="bg-sheet p-8 rounded-lg border border-stone-800/80 shadow-2xl">
             <h3 id="comment-vous-sauriez-que-cela-a-marche" class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-signal-fill to-signal-fill-hover mb-4 tracking-tighter uppercase italic drop-shadow-lg">Comment Vous Sauriez Que Cela A Marché</h3>
             <p class="text-lg text-stone-400 font-medium mb-6">
                Chaque chiffre ci-dessous est le vôtre, pas le nôtre. Notez où vous en êtes aujourd'hui, car ce point de départ est perdu pour de bon dès que quelque chose change.
             </p>
             <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">Ce que vous passez en perte sur le stock réfrigéré et congelé.</strong> Le compte de pertes de votre comptabilité et le registre des refus qualité sur la même période, avec les cas de température séparés de toutes les autres causes.</li>
                <li><strong class="text-stone-200">Les heures entre le premier mauvais relevé et l'action de quelqu'un.</strong> Prenez un échantillon des événements de température du dernier trimestre. Notez quand chacun a été enregistré, et quand une personne a fait quelque chose pour la première fois.</li>
                <li><strong class="text-stone-200">Combien de dérives ont été repérées tant que le chargement pouvait encore être sauvé.</strong> Comptez-les en part de toutes les dérives. C'est le chiffre sur lequel repose tout le reste.</li>
                <li><strong class="text-stone-200">Les constats de sécurité dans le parc.</strong> Vos propres relevés d'inspection et d'incident, comptés par trimestre, en séparant les règles de séparation des marchandises de tout le reste.</li>
                <li><strong class="text-stone-200">Ce que vos caméras enregistrent déjà et que personne ne lit.</strong> Comptez les caméras du parc, puis comptez combien d'heures de ce qu'elles enregistrent sont un jour regardées par une personne. C'est l'écart dans lequel travaille le versant vision de tout ceci, et c'est d'ordinaire le plus grand nombre de la liste.</li>
             </ul>
             <p class="text-sm text-stone-500 font-bold uppercase tracking-widest text-xs mt-6 text-center">Apportez votre compte de pertes et une journée d'enregistrement des caméras du parc.</p>
        </div>
    </div>

{{< faq >}}
{
  "title": "Questions D'une Équipe De Parc",
  "description": "Ce que l'on demande avant de parler d'un contrat.",
  "questions": [
    {
      "question": "Que lit réellement le volet caméra ?",
      "answer": "Une image venant d'une caméra de parc ou d'une caméra infrarouge. On vérifie que c'est bien une image avant que quoi que ce soit ne la lise, on la réduit à une taille qu'un modèle peut prendre, et elle est lue par un modèle de vision qui tourne là où tourne FACE, pas chez un service extérieur. Ce qui revient est une observation écrite, attachée à l'image dont elle a été tirée."
    },
    {
      "question": "Les images quittent-elles le site ?",
      "answer": "Vers aucun service extérieur. L'image est lue là où tourne FACE : vos propres serveurs ou votre compte cloud en Dédiée et en Enterprise, les machines partagées de Runink en Lite. Elle y est décrite, et l'observation revient rattachée à cette image."
    },
    {
      "question": "S'il voit quelque chose, arrête-t-il le portique ?",
      "answer": "Il diffuse une consigne &mdash; oriente cette caméra, suspends ces mouvements &mdash; vers tout ce qui est abonné au flux d'événements du parc. La consigne est une demande, et le code ne la présentera pas comme un mouvement arrêté. Ce qui transforme une consigne en mouvement, c'est une personne désignée qui approuve l'action rédigée."
    },
    {
      "question": "Qui valide une action qu'il rédige ?",
      "answer": "Une personne désignée, dont l'approbation, la modification ou le refus reste au dossier. C'est l'approbation qui envoie. La réponse nomme chaque étape exécutée et toute étape qui n'a pas pu l'être, de sorte qu'approuvé et fait restent deux mots différents."
    },
    {
      "question": "Que se passe-t-il quand la lecture est fausse ?",
      "answer": "Toute observation revient rattachée à l'image dont elle a été tirée, si bien que celui qui la lit peut ouvrir la photo et la contester. Rien ne bouge sur une observation seule : le mouvement est rédigé et attend une personne."
    },
    {
      "question": "Qu'apporter à une première conversation ?",
      "answer": "Votre compte de pertes et une journée d'enregistrement des caméras du parc. Apportez un décompte de plus avec eux : combien de caméras il y a dans le parc, et combien d'heures de ce qu'elles enregistrent sont un jour regardées par une personne. Cet écart est l'espace dans lequel travaille le volet caméra."
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
