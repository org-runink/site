---
# Front matter only — see the notes in content/_index.md. The same rules apply
# here: no figures of any kind, no aliases, and nothing below the front matter.
#
# The industry names stay in English because the industry pages themselves are
# English and hugo.toml already lists them in English in the French menu. The
# link goes to the same /industries/... page in every language.
title: "Runink"
description: "Vous l'apprenez quand il est trop tard pour contester. Un conteneur attend parce qu'un document est faux et les frais courent dès ce jour-là. Runink FACE lit les enregistrements que vos systèmes détiennent déjà, compare chacun à la règle qui le régit et place une action rédigée devant la personne qui décide."
date: "2024-05-20T00:00:00Z"
author: "Runink"
hero:
  eyebrow: "Opérations, finance, conformité"
  line1: "Vous l'apprenez quand"
  line2: "il est trop tard pour contester."
  deck: "Un conteneur attend parce qu'un document est faux. Les frais courent dès ce jour-là. Votre version de cela est déjà écrite quelque part."
  stance_label: "Notre position"
  stance:
    - "Une action que le logiciel prend de lui-même ne laisse personne à qui demander ensuite."
    - "Alors celui-ci rédige, et attend."
    - "L'approbation est la trace : un nom, une heure et la raison de l'envoi, gardés ensemble."
  cta_primary: "Trouvez votre secteur"
  cta_secondary: "Prendre rendez-vous"

figure:
  today_label: "Comment on le lit aujourd'hui"
  today_note: "Le volume a eu raison du contrôle : on lit un échantillon et on suppose que le reste lui ressemble. Les enregistrements qui divergent sont déjà dans le champ."
  read_label: "Comment Runink le lit"
  read_note: "Chaque enregistrement est comparé à la règle qui le gouverne, la nuit, sur vos propres machines. Ce qui diverge ressort nommément."
  beats:
    - title: "Les enregistrements existent déjà"
      body: "Commandes, sinistres, ordres de paiement, détail des appels, contrats et relevés de capteurs — dans les systèmes que vous exploitez déjà."
    - title: "Ils sont tous lus"
      body: "Pas un balayage mensuel sur un échantillon. La comparaison se fait enregistrement par enregistrement, donc une anomalie arrive nommément plutôt que sous forme de taux estimé."
    - title: "Une personne décide de la suite"
      body: "Chaque constat arrive avec la règle enfreinte, les enregistrements qui l'étayent et une action rédigée, pour que quelqu'un l'approuve, la corrige ou la refuse."
  caption: "Le délai, chez vous, entre le moment où une chose est enregistrée et celui où quelqu'un agit dessus est un chiffre qui mérite d'être connu. Très peu d'organisations l'ont mesuré. C'est en général là que se loge le coût, et c'est une bonne première chose à mesurer ensemble."

industries_heading: "Cinq secteurs, une même forme de problème"
industries_intro: "Trouvez la ligne qui ressemble à votre semaine. Chacune ouvre sur une page écrite pour ce secteur, avec les mesures en face desquelles inscrire vos propres chiffres."
industries_cta: "Voir si cela correspond"
industries_columns:
  name: "Secteur"
  cost: "Ce que cela vous coûte en silence"
  owner: "Qui en a la charge chez vous"
industries:
  - page: "logistics-supply-chain"
    name: "Logistics & Supply Chain"
    cost: "Une déclaration bloquée au port faute d'un document, pendant que les frais journaliers courent. Une réclamation fret encore dans son délai de dépôt que personne n'a eu la matinée pour monter."
    owners:
      - "Directeur des opérations"
      - "Directeur financier"
      - "Conformité douanière"
  - page: "insurance"
    name: "Insurance"
    cost: "Un seuil de second examen relevé pour résorber un retard, censé être provisoire, jamais rétabli et jamais tranché. Des mouvements de provision vérifiés par sondage parce que le flux est trop long à lire."
    owners:
      - "Opérations sinistres"
      - "Conformité et risques"
      - "Audit interne"
  - page: "banking-financial-services"
    name: "Banking & Financial Services"
    cost: "Un écart qui grandit à l'intérieur de la fourchette que l'on valide toujours : aucun mois ne remonte, et personne ne lit la séquence. Un contrat fournisseur que personne n'a rouvert depuis la signature."
    owners:
      - "Conformité et risques"
      - "Audit interne"
      - "Finance"
  - page: "telecom"
    name: "Telecom"
    cost: "Un changement de tarification juste pour la promotion et faux pour un forfait hérité, trop petit pour bouger un agrégat. Un balayage qui rend un taux d'erreur quand les opérations ont besoin des comptes nommément."
    owners:
      - "Revenue assurance"
      - "Règlement d'interconnexion"
      - "Finance et achats"
  - page: "marketing"
    name: "Marketing"
    cost: "L'outil d'audit sait que le site est lent. L'outil de contenu l'ignore et continue d'écrire pour une page où personne ne reste. Chaque campagne repart d'une page blanche."
    owners:
      - "Le responsable marketing"
      - "Les ventes"
      - "DSI et sécurité de l'information"

# The one block that names the product — the French counterpart of the `product`
# key in content/_index.md, in the same place for the same reason: after the
# industries and before the reasons, because everything above it is in the
# buyer's vocabulary and a reader who has just found their own line is exactly
# where "so what is it called" arrives. Until this key existed, the French page
# answered that only in the paper link near the bottom.
#
# "Runink FACE" is a product name and stays in English. The heading renders
# uppercase and letterspaced, so it stays short. One heading, one paragraph, one
# footnote, no call to action of its own — naming the product is not a licence to
# start describing it; the depth belongs in /blog/whitepapers/runink-face/.
product:
  heading: "Le produit s'appelle Runink FACE"
  deck: "Runink FACE est le produit derrière chacune des lignes ci-dessus. Il lit les enregistrements que vos systèmes détiennent déjà, compare chacun à la règle qui le gouverne, et présente une action rédigée à la personne qui porte la décision. Ce qui change d'un secteur à l'autre, c'est quels enregistrements comptent et quelle règle s'applique ; la lecture, la rédaction et l'approbation, non."
  parts:
    - name: "Les agents qui lisent"
      body: "Ils s'exécutent sur l'ensemble des enregistrements, pas sur un échantillon, au rythme que vous fixez. Chacun compare ce que dit un enregistrement à la règle qui le régit, et il en sort un élément auquel sont attachées la règle invoquée et les pièces citées."
    - name: "L'écran où il attend"
      body: "Une seule file, classée, de ce que quelqu'un doit trancher. C'est l'approbation qui envoie quoi que ce soit, et qui a approuvé, quand, et ce qui a été modifié reste au dossier."
    - name: "Où il se place"
      body: "Il lit dans les systèmes que vous exploitez déjà — le système de commandes, les enregistrements du transporteur, les dossiers de sinistre — et les laisse tels quels. Ce qu'il ajoute, c'est un enregistrement par décision : ce qui a été trouvé, quelle règle, quelles pièces, et qui l'a validé."
  # Traduit et en attente. Le lien ne s'affiche que là où sa destination existe
  # dans cette langue, et /products/face/ n'a pas encore de traduction : sur /fr/
  # la ligne disparaît entièrement plutôt que de mener à une page en anglais.
  more:
    text: "Ce que FACE lit, et ce qu'il produit"
    url: "/products/face/"

# Un seul cas, de bout en bout. Voir le commentaire de content/_index.md : chaque
# chiffre ici appartient au lecteur, pas à nous, et rien dans ce bloc ne dit que
# le logiciel dépose, dédouane, classe ou calcule quoi que ce soit.
scenario_heading: "Deux cas, du signal à la décision"
scenario_intro: "L'un où aucun modèle n'intervient à aucune étape, l'autre où un modèle lit une photographie et où vous voyez exactement où sa réponse cesse d'être prise pour argent comptant. Les deux sont tout ce que fait le logiciel, dans l'ordre, sans rien omettre du milieu."
scenario_note: "Les deux diffèrent à dessein. Le premier est de l'arithmétique fixe sur vos propres enregistrements et il n'y a de modèle nulle part dedans. Le second place un modèle à une étape et à une seule — lire une image, ce pour quoi un modèle est réellement bon — et tout ce qui suit est le document, la règle et la personne. Là où un chiffre ne peut pas être établi à partir de ce que vous avez fourni, le champ reste vide plutôt que rempli au jugé."
scenario_label: "Une déclaration retenue — aucun modèle, à aucune étape"
scenario:
  - step: "La retenue apparaît"
    body: "Une déclaration revient retenue, sous examen ou immobilisée, et le nombre de jours de retenue dépasse zéro. Cette combinaison est tout le test — c'est une règle fixe, pas une appréciation, et elle s'applique à toutes les déclarations et non à celles que quelqu'un a pensé à vérifier."
  - step: "Le coût est compté, pas estimé"
    body: "Les jours de retenue, multipliés par le tarif journalier de surestarie de votre propre accord. C'est toute l'arithmétique. C'est le chiffre qui court déjà pendant que la déclaration attend dans une file que personne ne lit en entier."
  - step: "Le document manquant est nommé"
    body: "Le motif de la retenue et les documents en attente sortent de l'enregistrement de la déclaration et sont inscrits sur l'élément, de sorte que la personne qui le reprend ne commence pas par chercher ce qui ne va pas."
  - step: "Le responsable est vérifié"
    body: "Séparément, les déclarations sont lues à la recherche d'un importateur officiel vide, rempli avec le destinataire, ou portant un texte de remplissage saisi une fois. Celles-là portent des droits et des taxes sans personne pour en répondre, et elles sont levées comme élément distinct avec le montant en jeu."
  - step: "Les deux ne sont jamais additionnés"
    body: "La surestarie d'une déclaration retenue et les droits d'une déclaration sans responsable ne sont pas le même argent, et les compter comme un seul chiffre est la façon la plus courante de gonfler ce genre de total. Ils restent séparés, délibérément, et un test échoue s'ils venaient à se confondre."
  - step: "Une personne nommée décide"
    body: "L'élément attend. C'est l'approbation qui envoie quelque chose, et qui a approuvé, quand, et ce qui a été modifié est consigné. Si une partie de ce qui a été rédigé n'a pas pu être exécutée, le résultat nomme cette partie au lieu d'annoncer une réussite."

scenario_b_label: "Une porte de froid — un modèle à une étape, et à une seule"
scenario_b:
  - step: "L'image arrive"
    body: "Une photo prise sur un terminal à la porte, ou une vue extraite d'une caméra de parc. Avant que quoi que ce soit ne la lise, on vérifie que c'est une image : l'en-tête est décodé seul, le format doit être l'un des deux, et la taille est plafonnée en octets comme en pixels. Un PDF, un conteneur vidéo ou des octets bruts sont refusés à cette étape."
  - step: "Un modèle la lit, sur votre matériel"
    body: "L'image est réduite à une taille que le modèle peut prendre et lue par un modèle de vision qui tourne sur des machines que vous contrôlez. Ce qui revient est une observation écrite, rattachée à l'image exacte dont elle est tirée, de sorte que la phrase et sa preuve ne se séparent pas."
  - step: "Les papiers sont lus à côté"
    body: "L'enregistrement de l'expédition, la remise, et l'état dans lequel les documents disent que la charge devrait être. L'observation est confrontée à ce qui était déjà écrit plutôt qu'à un seuil choisi par quelqu'un."
  - step: "Ce qui diffère sort nommé"
    body: "La palette, la caisse, la porte du conteneur — nommées, dans les mots qu'une personne emploierait. On ne discute pas d'un score de gravité devant un transporteur. D'une partie nommée d'une expédition nommée, si."
  - step: "Un signal reste une demande"
    body: "Un signal peut être diffusé à ce qui est abonné au flux d'événements du parc, et le dossier le garde pour ce qu'il est : demandé. Ce qui suit relève de la décision de quelqu'un, et le dossier le dit plutôt que de laisser croire qu'un mouvement a été arrêté."
  - step: "Une personne nommée décide"
    body: "L'élément attend, exactement comme la déclaration retenue. C'est l'approbation qui envoie quoi que ce soit, et qui a approuvé, quand, et ce qui a été modifié est consigné."
why_heading: "Pourquoi ce n'est pas un tableau de bord de plus"
why_intro: "Trois points décident si tout ce qui précède mérite votre temps."
why:
  - glyph: "finding"
    title: "Vous recevez le constat, pas les données"
    body: "Un tableau de bord vous montre un chiffre et vous laisse le travail. Ici arrive une action proposée précise, hiérarchisée, avec la règle invoquée et les enregistrements cités qui l'accompagnent."
  - glyph: "approve"
    title: "Une personne nommée décide"
    body: "Un constat arrive sous forme d'action rédigée, et il attend. C'est l'approbation qui l'envoie. Qui a approuvé, quand, et ce qui a été modifié reste au dossier, pour pouvoir expliquer plus tard sans tout reconstituer."
  - glyph: "held"
    title: "Vos enregistrements restent sur vos machines"
    body: "Les fichiers et le raisonnement qui porte dessus s'exécutent sur du matériel que vous contrôlez. Rien n'est envoyé à un fournisseur de modèles extérieur, ce qui est en général le chemin le plus court à travers une revue de sécurité."

paper:
  text: "Lire le livre blanc FACE"
  url: "/blog/whitepapers/runink-face/"
  note: "La version longue : ce qui est lu, ce qui est produit, qui approuve et où cela s'exécute."

# Traduction de proof_* dans content/_index.md. Les valeurs `says:` ne sont PAS
# traduites : ce sont des chaînes littérales du code source, et une citation
# traduite n'est plus une citation. La ligne qui les suit dit ce qu'elles
# signifient.
proof_heading: "Ce qu'il fait quand il ne sait pas"
proof_intro: "Tout ce qui précède montre le logiciel qui fonctionne. La réponse qui décide si vous pourriez présenter ce qu'il produit à un transporteur ou à un commissionnaire en douane est une autre : ce qui arrive quand un enregistrement est illisible, ou qu'un système reste hors d'atteinte. En voici quatre, dans les mots qu'il imprime."
proof:
  - when: "Le contrôle n'a pas pu s'exécuter"
    body: "Si les enregistrements qui fondent un contrôle sont illisibles, ce n'est ni un succès ni un échec. C'est une troisième réponse, et elle part dans le journal d'audit avec ces mots, pas seulement à l'écran. À trois heures du matin, personne ne regarde l'écran."
    says: "This is NOT a finding that … is compliant."
    gloss: "« Ceci n'est PAS une conclusion selon laquelle … est conforme. »"
  - when: "L'étape n'a pas eu lieu"
    body: "Une action approuvée qui n'a pas pu atteindre l'un de vos systèmes ne revient pas comme faite, et pas davantage comme une erreur générique. Elle nomme l'étape qui n'a pas tourné, de sorte que vous réparez une connexion au lieu de chercher une panne."
    says: "email:no_google_connector"
    gloss: "« courriel : pas de connecteur Google »"
  - when: "Le modèle en a trop dit"
    body: "Chaque phrase que le modèle écrit est relue avant que quoi que ce soit atteigne un document, et toute affirmation d'être certifié est retirée entièrement. Une règle qui ne vit que dans les consignes est une demande. Celle-ci est dans le code, et la tentative est conservée, parce qu'un modèle qui insiste est une chose que vous voulez qu'on vous dise."
    says: "[claim removed: this agent may not assert a compliance or certification status]"
    gloss: "« [affirmation retirée : cet agent ne peut pas affirmer un statut de conformité ou de certification] »"
  - when: "Rien n'est encore connecté"
    body: "Le jour de l'installation, avant d'être pointé vers l'un de vos systèmes, la première chose qu'il vous montre, c'est rien du tout. Une file vide est la réponse honnête quand il n'y a encore rien à lire, et un test n'a pas d'autre rôle que de le maintenir ainsi."
    says: "TestStandardInstanceDerivesNoActionCards"
    gloss: "« une instance standard ne dérive aucune carte d'action »"
proof_note: "Ce sont des lignes du code source, pas une description. Le code n'est pas public : l'offre est donc la plus simple, nommez celle que vous voulez voir et nous ouvrons le fichier avec vous pendant l'appel."

contact:
  heading: "Apportez une ligne, un sinistre, ou un mois de factures."
  deck: "Une courte conversation suffit en général à dire si les pertes que vous portez ont la forme de ce que cela traite. Si ce n'est pas le cas, nous vous le dirons."
  book_title: "Prendre rendez-vous"
  book_body: "Une demi-heure, avec la personne qui a le problème en charge dans la pièce. Nous déroulerons un exemple réel de chez vous, de bout en bout."
  book_cta: "Choisir un créneau"
  form_title: "Ou écrivez-nous"
  form_deck: "Dites-nous ce que cela vous coûte, avec vos mots. Nous répondons sous un jour ouvré."
  name_label: "Nom complet"
  name_placeholder: "Camille Martin"
  email_label: "E-mail professionnel"
  email_placeholder: "camille@entreprise.com"
  company_label: "Entreprise"
  company_placeholder: "Votre organisation"
  source_label: "Comment nous avez-vous connus ?"
  source_default: "Choisissez une option"
  source_options:
    - { value: "Referral", text: "On nous a recommandés" }
    - { value: "LinkedIn", text: "LinkedIn" }
    - { value: "Web Search", text: "Recherche web" }
    - { value: "Event", text: "Un événement" }
    - { value: "Other", text: "Autre" }
  about_prefix: "À propos de : "
  message_label: "Quel problème cherchez-vous à résoudre ?"
  message_placeholder: "Un exemple suffit : une déclaration bloquée, un sinistre, un rapprochement qui prend une semaine."
  submit: "Envoyer le message"
  note: "Ce que vous envoyez ici nous sert à vous répondre, et à rien d'autre."
  done_title: "Message reçu"
  done_body: "Merci. Nous vous répondrons sous un jour ouvré."
---
