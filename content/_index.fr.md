---
# Front matter only — see the notes in content/_index.md. The same rules apply
# here: no figures of any kind, no aliases, and nothing below the front matter.
#
# The industry names stay in English because the industry pages themselves are
# English and hugo.toml already lists them in English in the French menu. The
# link goes to the same /industries/... page in every language.
title: "Runink"
description: "Une déclaration en douane bloquée, un sinistre tranché sans la pièce qui était déjà au dossier, du trafic acheminé et jamais tarifé. La réponse se trouve presque toujours déjà dans vos propres enregistrements. Runink FACE les lit tous et présente une action précise à la personne qui peut l'approuver."
date: "2024-05-20T00:00:00Z"
author: "Runink"
accent: "#ea580c"

hero:
  eyebrow: "Pour les opérations, la finance et la conformité"
  line1: "La réponse est déjà dans vos enregistrements."
  line2: "Personne n'a jamais eu le temps de tous les lire."
  deck: "Une déclaration en douane bloquée faute d'un document, pendant que les frais courent. Un sinistre tranché sans la pièce qui était déjà au dossier. Du trafic acheminé et jamais tarifé. Dans chaque cas, cela a d'abord été écrit quelque part — puis lu par sondage, tard, ou pas du tout."
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
    accent: "#ea580c"
    cost: "Une déclaration bloquée au port faute d'un document, pendant que les frais journaliers courent. Une réclamation fret encore dans son délai de dépôt que personne n'a eu la matinée pour monter."
    owners:
      - "Directeur des opérations"
      - "Directeur financier"
      - "Conformité douanière"
  - page: "insurance"
    name: "Insurance"
    accent: "#778fe6"
    cost: "Un seuil de second examen relevé pour résorber un retard, censé être provisoire, jamais rétabli et jamais tranché. Des mouvements de provision vérifiés par sondage parce que le flux est trop long à lire."
    owners:
      - "Opérations sinistres"
      - "Conformité et risques"
      - "Audit interne"
  - page: "banking-financial-services"
    name: "Banking & Financial Services"
    accent: "#C8D9A8"
    cost: "Un écart qui grandit à l'intérieur de la fourchette que l'on valide toujours : aucun mois ne remonte, et personne ne lit la séquence. Un contrat fournisseur que personne n'a rouvert depuis la signature."
    owners:
      - "Conformité et risques"
      - "Audit interne"
      - "Finance"
  - page: "telecom"
    name: "Telecom"
    accent: "#c084fc"
    cost: "Un changement de tarification juste pour la promotion et faux pour un forfait hérité, trop petit pour bouger un agrégat. Un balayage qui rend un taux d'erreur quand les opérations ont besoin des comptes nommément."
    owners:
      - "Revenue assurance"
      - "Règlement d'interconnexion"
      - "Finance et achats"
  - page: "marketing"
    name: "Marketing"
    accent: "#D4A574"
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
  note: "Sous le nom : des agents qui lisent les enregistrements et rédigent l'action, un écran de revue pour la personne qui porte la décision, et la plateforme en dessous, qui garde l'un et l'autre à l'intérieur de votre propre réseau."

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
  message_label: "Quel problème cherchez-vous à résoudre ?"
  message_placeholder: "Un exemple suffit : une déclaration bloquée, un sinistre, un rapprochement qui prend une semaine."
  submit: "Envoyer le message"
  note: "Ce que vous envoyez ici nous sert à vous répondre, et à rien d'autre."
  done_title: "Message reçu"
  done_body: "Merci. Nous vous répondrons sous un jour ouvré."
---
