---
date: 2026-09-07T00:00:00Z
title: "Marketing"
description: "Des délais de plusieurs semaines, une pile technologique qui ne communique pas, et des efforts qui ne s'accumulent jamais. Runink PULSE pose un diagnostic derrière chaque canal, avec une personne désignée approuvant chaque brouillon."
# Everything described on this page is Runink PULSE, the market-analysis and
# marketing product. It is NOT Runink FACE. The distinction matters here more
# than on any other industry page, because Marketing is also one of the business
# domains FACE classifies records into (campaign, click, impression, conversion,
# channel, audience, keyword, engagement, reach, spend, ads, analytics — see
# face/grpc/internal/ai/business_domains.go). A marketing record being read is
# therefore not automatically this product. Attribute by product, not by topic:
# the capabilities below are PULSE services (DiagnosticService.AuditURL,
# RadarService, ContentService, StudioService, LeadService), and the two
# foundations at the bottom belong to the CORE platform and the shared web
# engine that PULSE runs on.
#
# `product` is not rendered by layouts/industries/single.html today. It is set so
# the attribution is recorded in the file rather than only in prose, and so a
# later layout can surface it the way layouts/whitepapers/ already does.
product: "Runink PULSE"
weight: 50
# category: binds this page to the palette's category tokens via the
# .rk-cat-* class the layout emits. It replaces an `accent:` hex, which
# went dead when the stylesheets moved to --rk-accent: the hex was still
# injected into a style attribute that nothing read any more. A class can
# follow the ground; a literal cannot.
category: "marketing"
# The card now leads with the product name, as every card in this section does,
# so the switchboard page answers "which product is this?" before the click.
card: "Runink PULSE — une pile technologique qui ne communique pas, des délais de plusieurs semaines, et des efforts qui ne s'accumulent jamais."
headline: "Les outils détiennent chacun un fragment. Aucun d'entre eux n'a la vue d'ensemble."
deck: "L'outil d'audit sait que le site est lent. L'outil de contenu ne le sait pas, il continue donc à écrire des articles qui atterrissent sur une page où personne ne reste. Le système client sait qu'un prospect est devenu silencieux la troisième semaine ; le planificateur ne le sait pas."

problems_heading: "Où ça se complique"
problems:
  - title: "Chaque étape attend la précédente"
    body: "Brief, brouillon, révision, planification. Les délais se comptent en semaines et le marché évolue en jours — ce qui décide si vous pouvez ou non répondre à l'annonce d'un concurrent."
  - title: "Contenu générique en entrée, contenu générique en sortie"
    body: "Un rédacteur sans vos dossiers clients, votre historique de positionnement ou votre pipeline travaille à partir de votre site web et de sa propre perception du secteur. Cela produit des textes compétents, mais oubliables."
  - title: "L'effort ne s'accumule pas"
    body: "Chaque campagne part d'une page blanche, car rien de ce qui a été appris lors de la précédente n'a été noté là où la suivante pourrait le lire."
  - title: "Le brief est l'exposition"
    body: "Pour bien parler de vous, tout ce qui écrit a besoin de votre logique de tarification, du concurrent face auquel vous perdez réellement, des noms dans votre pipeline. Plus le brief est bon, plus il contient des informations sensibles."

owners_heading: "Qui possède ceci"
owners_intro: "Une équipe d'un à cinq marketeurs avec plus de choses à dire que de mains pour le faire. Ce sont les personnes pour qui Runink PULSE a été conçu afin de changer leur semaine."
owners:
  - role: "Le responsable marketing"
    line: "Votre temps passe de la production de matériel à la prise de décision à son sujet. La file d'attente d'approbation de PULSE devient votre surface de travail."
  - role: "L'informatique et la sécurité de l'information"
    line: "Le raisonnement et l'écriture s'exécutent sur des machines que vous contrôlez. C'est une propriété de la plateforme Runink CORE sur laquelle fonctionne PULSE, et non un paramètre que quelqu'un de l'équipe marketing doit se souvenir de respecter."
  - role: "Les ventes"
    line: "PULSE recherche un prospect et rédige un e-mail à froid, un script d'appel et un message direct par entreprise, et les prospects se synchronisent avec le système de gestion de la relation client dans lequel l'équipe travaille déjà."
  - role: "Le conseil d'administration"
    line: "L'analyse multicanal de PULSE se présente sous la forme d'un document écrit que vous pouvez présenter, et non d'un tableau de bord que quelqu'un doit commenter."

outcomes_heading: "Ce que Runink PULSE change"
outcomes:
  - "Un diagnostic PULSE alimente l'analyse des canaux, le plan de contenu, le calendrier et chaque brouillon, de sorte que ce qui est publié porte un seul argument plutôt que quatre versions de celui-ci."
  # Narrowed for the same reason as the FACE approval claim in
  # content/use-cases/_index.md. The review queue and the approve/reject are real
  # (ContentService.ApproveContent / RejectContent), and the six statuses in the
  # next line are a real column. What is NOT real is an interlock:
  # PublishingService.SchedulePost (pulse/grpc/cmd/publishing_server.go:27) inserts
  # into scheduled_posts without checking that the content it references is in
  # `approved`. So this may be claimed as a discipline the queue supports, never as
  # a guarantee that nothing can reach a customer unapproved.
  - "Chaque brouillon — article, livre blanc, e-mail à froid, script d'appel — atterrit dans une file d'attente de révision avec une approbation et un rejet, et l'approbation est une étape franchie par une personne désignée plutôt qu'une formalité accomplie par le système pour elle. Voyez cela comme le lieu où le travail est validé, et non comme un verrouillage sur chaque voie de sortie possible."
  - "Chaque pièce a un statut défini : brouillon, en attente de révision, approuvé, rejeté, publié, archivé. Ce sont les six statuts que PULSE conserve réellement, afin que ce qui vous attend et ce qui est réellement sorti soient tous deux visibles."
  - "Marquer un résultat PULSE comme utile ou non se répercute sur le cycle suivant, de sorte que la compréhension s'accumule dans un système au lieu de la tête d'une seule personne."

measures_heading: "Comment vous saurez que cela a fonctionné"
measures_intro: "Ces chiffres sont les vôtres, pas les nôtres. Notez où vous en êtes la première semaine — une fois que le rythme de travail change, ce qui vous indiquerait d'où vous êtes parti est ce qui a changé."
measures:
  - metric: "Coût par pièce publiée"
    today: "Douze derniers mois : honoraires d'agence et frais de projet, coût salarial des heures passées à faire des briefs, à réviser et à relancer, et coûts des outils par siège. Divisez par les pièces réellement publiées, et non par les pièces commandées."
    moves: "Baisse des deux côtés de la fraction — la production d'un brouillon cesse d'être l'étape coûteuse, et moins de pièces commandées meurent avant d'atteindre une page."
  - metric: "Commandé mais jamais publié"
    today: "Les mêmes douze mois, à partir de votre journal de briefs ou de votre outil de projet : les briefs qui sont morts en révision, les pièces abandonnées lorsque le moment est passé. Un coût sans aucun résultat en face."
    moves: "Baisse, car un brouillon existe le jour même du brief, et chacun d'eux se trouve ensuite dans une file d'attente avec un statut défini au lieu de tomber dans l'oubli."
  - metric: "Délai médian entre la décision et la publication"
    today: "Prenez cinq pièces récentes : la date à laquelle quelqu'un a décidé de dire la chose, et la date à laquelle elle a été publiée. Utilisez la médiane, pas la moyenne."
    moves: "Baisse, car le temps écoulé devient le temps dont une personne a besoin pour lire et approuver, et non le temps nécessaire pour produire une pièce."
  - metric: "Couverture par rapport aux questions que les acheteurs posent réellement"
    today: "Les canaux et les formats sur lesquels vous avez convenu qu'il valait la peine d'être présent, avec les pièces publiées sur chacun l'année dernière — plus les questions posées aux ventes auxquelles aucune page de votre site ne répond."
    moves: "Les lignes presque vides se remplissent. Ces lignes étaient une décision que votre capacité de production prenait en votre nom ; le mécanisme est que la décision vous revient."
  - metric: "Pipeline qualifié sourcé et temps de qualification d'un prospect entrant"
    today: "Votre système de gestion de la relation client, sur un trimestre : l'écart entre l'arrivée d'un prospect et le changement d'étape le marquant comme qualifié ou disqualifié, et la part des heures de vente consacrées à des prospects qui n'ont jamais été qualifiés."
    moves: "Temps de qualification en baisse, part qualifiée en hausse, car PULSE attache des recherches sur cette entreprise spécifique à la prise de contact au lieu de laisser cela à assembler manuellement par la suite."
  - metric: "Visibilité organique et façon dont le site est perçu par les moteurs de recherche"
    today: "Impressions et clics depuis votre console de recherche pour le trimestre écoulé, accompagnés d'un audit évalué du site conservé depuis votre premier jour, avant que quoi que ce soit ne soit modifié."
    moves: "Hausse, car l'audit de PULSE renvoie ses recommandations classées et les applique depuis le même écran plutôt que de les exporter vers un ticket que quelqu'un ouvre quinze jours plus tard."

foundations_heading: "Deux choses qui rendent ce qui précède possible — et aucune n'est une fonctionnalité marketing"
foundations:
  - name: "Votre matériel reste sur des machines qui vous appartiennent"
    plain: "L'analyse et l'écriture se produisent sur du matériel à l'intérieur de votre propre réseau. Les listes de clients, la logique de tarification, les plans non publiés et le positionnement que vous n'avez pas annoncé sont traités là, et non remis à un fournisseur de modèles externe pour qu'il apprenne. Cela provient de la plateforme Runink CORE sur laquelle PULSE est déployé — la couche qui exécute le logiciel et maintient les connexions à vos propres données — plutôt que de quoi que ce soit dans le produit marketing lui-même."
    measured_by: "La révision qui se dresse entre une équipe marketing et un nouvel outil. Lorsque le service juridique ou la sécurité demande où les documents de l'entreprise sont traités, la réponse est le nom d'une machine, donné une seule fois et par écrit — la même réponse qu'exigent le questionnaire de sécurité d'un client et une clause de résidence des données."
  - name: "Recherche sur le web ouvert qui ne s'annonce pas"
    plain: "PULSE lit directement le web public, par le biais du propre moteur de navigateur headless de Runink piloté sur des résultats de recherche publics ordinaires et les pages qui les sous-tendent, plutôt que de soumettre vos questions au service payant d'une entreprise de recherche. Le moteur est une infrastructure partagée de Runink, pas une fonctionnalité PULSE — PULSE est l'un des produits qui l'utilise."
    measured_by: "La recherche sur les concurrents et les prix est l'endroit où la question trahit le plan : interroger un fournisseur sur les prix d'un rival indique à ce fournisseur que vous travaillez sur les prix, et cet enregistrement échappe à votre contrôle. Cela signifie également que la quantité de recherche dont bénéficie une campagne est décidée par la campagne, et non par une facturation par question ou un plafond mensuel."

next_heading: "Voyez si cela vous convient"
next_body: "Apportez votre site web et les canaux sur lesquels vous publiez. Les lire et vous dire où vous en êtes est la première chose que fait PULSE, ce qui est également le moyen le plus rapide de juger si le reste est pour vous."
cta_text: "Réserver une consultation"
paper:
  text: "Lire le livre blanc PULSE"
  url: "/blog/whitepapers/runink-pulse/"
  note: "Runink PULSE est le produit derrière cette page, et c'est un produit différent de Runink FACE — rien de ce qui est décrit ci-dessus n'est une capacité de FACE, et rien sur les pages de FACE n'est une capacité de PULSE. Le document ne contient aucune étude de cas, aucun nom de client et aucun chiffre de retour sur investissement."
---
