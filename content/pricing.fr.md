---
title: "Tarifs"
description: "Payez pour la protection, pas pour les fonctionnalités. Infrastructure transparente + valeur basée sur les résultats."
layout: "pricing"
date: "2024-05-20T00:00:00Z"
author: "Lead Data & Cloud Architect"
---

{{< pricing-toggle >}}
{
  "options": [
    { "label": "Engagement Mensuel", "value": "monthly" },
    { "label": "Contrat Annuel (Économisez 15%)", "value": "yearly" }
  ]
}
{{< /pricing-toggle >}}

{{< pricing-table-1 >}}
{
  "plans": [
    {
      "pill": "AUTOMATISATION ESSENTIELLE",
      "pill_color": "stone",
      "name": "LICENCE LITE",
      "subtitle": "1 À 9 UTILISATEURS",
      "price_color": "stone",
      "price_monthly": "86",
      "price_yearly": "75",
      "price_subtitle": "PAR UTILISATEUR / MOIS",
      "credits": "POOL DE CU DYNAMIQUE",
      "outcome_strategies": [
        {"label": "RÉCUPÉRATION DES RÉCLAMATIONS", "value": "20% de frais de réussite"},
        {"label": "AUTO-PROVISIONNEMENT", "value": "1-3% (Plafonné à 50 $)"}
      ],
      "features": [
        "NŒUD HAUTE DENSITÉ PARTAGÉ",
        "FLUX DE TRAVAIL D'AUTOMATISATION DE BASE",
        "PRIORITÉ DE CALCUL STANDARD",
        "ENGAGEMENTS MENSUELS OU ANNUELS"
      ],
      "button": {
        "text": "DÉMARRER LITE",
        "url": "/fr/#contact",
        "style": "outline"
      }
    },
    {
      "pill": "PLATEFORME & SÉCURITÉ",
      "pill_color": "orange",
      "name": "LICENCE DÉDIÉE",
      "subtitle": "10+ UTILISATEURS",
      "price_color": "orange",
      "price_monthly": "75",
      "price_yearly": "75",
      "price_subtitle": "PAR UTILISATEUR / MOIS (ANNUEL UNIQUEMENT)",
      "credits": "POOL DE CU MASSIF",
      "outcome_strategies": [
        {"label": "RÉCUPÉRATION DES RÉCLAMATIONS", "value": "20% de frais de réussite"},
        {"label": "AUTO-PROVISIONNEMENT", "value": "1-3% (Plafonné à 50 $)"}
      ],
      "features": [
        "CALCUL SOUVERAIN DÉDIÉ",
        "CONFIGURATION DE DOMAINE PERSONNALISÉ",
        "ROUTAGE ET INFÉRENCE PRIORITAIRES",
        "1 000 CU PAR UTILISATEUR + 2 000 CU BONUS/10 UTILISATEURS"
      ],
      "button": {
        "text": "INITIALISER DÉDIÉ",
        "url": "/fr/#contact",
        "style": "solid"
      }
    },
    {
      "pill": "INFRASTRUCTURE SOUVERAINE",
      "pill_color": "stone",
      "name": "ENTERPRISE",
      "subtitle": "ISOLÉ & SUR SITE",
      "price_monthly": "SUR MESURE",
      "price_yearly": "SUR MESURE",
      "price_subtitle": "DÉPLOIEMENTS PERSONNALISÉS",
      "credits": "CAPACITÉ GÉRÉE",
      "outcome_strategies": [
        {"label": "STRATÉGIE DE RÉSULTATS", "value": "SLAs personnalisés"}
      ],
      "features": [
        "AUTO-HÉBERGÉ SUR SITE",
        "CAPACITÉS D'INTÉGRATION BORDURE",
        "TOUT DE LA PLATEFORME DÉDIÉE",
        "LOGS D'AUDIT AVANCÉS"
      ],
      "button": {
        "text": "CONTACTER ENTERPRISE",
        "url": "/fr/#contact",
        "style": "outline"
      }
    }
  ]
}
{{< /pricing-table-1 >}}

<div class="py-12"></div>

{{< enterprise-a2a >}}
{{< faq >}}
{
  "title": "Logique de Facturation. Sans Surprise.",
  "description": "Faible barrière à l'entrée. Les revenus s'adaptent à l'utilisation réelle de votre infrastructure.",
  "questions": [
    {
      "question": "Quand la licence Lite est-elle un bon choix ?",
      "answer": "La **licence Lite** est conçue pour les PME, les startups et les équipes très légères (1 à 9 utilisateurs) qui ont besoin d'un retour sur investissement rapide en matière d'automatisation sans engagements initiaux massifs. Elle fonctionne sur des nœuds partagés à haute densité, offrant d'excellentes performances à un tarif accessible de 75 $/utilisateur (annuel) ou ~86 $/utilisateur (mensuel). C'est le point d'entrée idéal pour commencer à récupérer les revenus de réclamations perdues et automatiser les tâches logistiques de base sans contrats annuels restrictifs."
    },
    {
      "question": "Pourquoi choisir la licence Dédiée plutôt que la Lite ?",
      "answer": "Une fois que votre équipe atteint plus de 10 utilisateurs, la sécurité et le volume de calcul deviennent primordiaux. La **licence Dédiée** provisionne automatiquement un nœud souverain isolé exclusivement pour votre organisation, avec un routage de domaine personnalisé et des limites de données strictes. Bien que le prix de base reste extrêmement compétitif à 75 $/utilisateur/mois, il nécessite un engagement d'un an. En retour, votre organisation débloque d'importants bonus de CU partagés (2 000 CU supplémentaires par tranche de 10 utilisateurs) pour exécuter des tâches automatisées à haut volume."
    },
    {
      "question": "Quelle est la valeur d'un engagement Enterprise complet ?",
      "answer": "Pour les secteurs hautement réglementés (défense, finance, santé) ou les volumes de transactions extrêmes, le niveau **Enterprise** offre un contrôle absolu. Nous proposons des déploiements sur site entièrement isolés ou des architectures VPC personnalisées. Plus important encore, Enterprise débloque **l'ajustement de décision optimisé** — nous formons et optimisons des modèles de raisonnement personnalisés spécifiquement sur vos données opérationnelles internes, ce qui permet d'obtenir une précision inégalée et des vitesses de décision de l'ordre de la sous-seconde adaptées à vos accords de niveau de service (SLA) spécifiques."
    },
    {
      "question": "Dois-je m'engager sur un plan annuel ?",
      "answer": "Uniquement pour les formules Dédiée et Enterprise. La **licence Lite** offre une flexibilité totale avec une option au mois avec une majoration de 15% (~86 $/utilisateur/mois). Étant donné que les licences **Dédiée** et **Enterprise** nous obligent à provisionner et à isoler une infrastructure de cloud souverain substantielle spécifiquement pour votre organisation, elles nécessitent strictement un engagement minimal d'un an."
    },
    {
      "question": "Comment les ressources de calcul sont-elles calculées ?",
      "answer": "**Nous utilisons une approche de capacité dynamique.**<br>Chaque licence inclut **1 000 unités de capacité (CU)**. De plus, pour chaque tranche de 10 licences achetées (débloquant l'offre Dédiée), votre organisation reçoit un **bonus de 2 000 CU**. Vous n'êtes facturé pour les dépassements (0,10 $/100 CU ou 5,00 $/heure de calcul) que pour les traitements par lots extrêmes et de haute intensité."
    }
  ]
}
{{< /faq >}}


---



<!-- Section FAQ générée pour l'E-A-T & GEO -->
<section class="faq-section mt-16 p-8 bg-[#1b1919] rounded-3xl border border-stone-800/80 shadow-2xl relative z-10">
  <div class="flex items-center gap-4 mb-8">
    <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ea580c] to-[#ca4708] flex items-center justify-center shadow-lg">
      <span class="material-symbols-outlined text-white">help_center</span>
    </div>
    <h2 class="text-3xl font-black text-white uppercase italic tracking-tight m-0">Questions Fréquemment Posées</h2>
  </div>
  <div class="space-y-6">
    <div class="faq-item p-6 bg-stone-900 rounded-xl border border-stone-800/50 hover:border-[#ea580c]/30 transition-colors">
      <h3 class="text-xl font-bold text-stone-200 mb-4">Quel est le véritable coût total de possession (TCO) pour la mise en œuvre d'une plateforme logistique automatisée ?</h3>
      <p class="text-stone-400 leading-relaxed">Lors de l'évaluation du coût total de possession d'une plateforme logistique automatisée, vous devez regarder au-delà des frais de licence de logiciel initiaux ou des abonnements SaaS. Le véritable TCO englobe les coûts de mise en œuvre, qui impliquent l'intégration du système avec vos systèmes ERP, TMS ou WMS existants, la migration des données et le développement d'API personnalisées. De plus, vous devez tenir compte des coûts de gestion du changement et de formation pour vous assurer que votre personnel peut exploiter efficacement les nouveaux outils. Les dépenses courantes comprennent l'utilisation de l'infrastructure cloud, les volumes d'appels d'API vers les modèles analytiques avancés ou les moteurs de routage, et l'ajustement continu de la logique. Cependant, cet investissement est généralement compensé par le retour sur investissement rapide généré par la réduction des kilomètres à vide, l'optimisation de la consommation de carburant, la diminution des frais généraux de répartition manuelle et la minimisation des pénalités de SLA.</p>
    </div>
    <div class="faq-item p-6 bg-stone-900 rounded-xl border border-stone-800/50 hover:border-[#ea580c]/30 transition-colors">
      <h3 class="text-xl font-bold text-stone-200 mb-4">Comment structurez-vous les tarifs pour les déploiements à l'échelle de l'entreprise ou les exigences sur site ?</h3>
      <p class="text-stone-400 leading-relaxed">Par défaut, notre licence Pro standard offre une isolation élevée des données en déployant du calcul souverain partagé. Cependant, pour les organisations connaissant des volumes de transactions extrêmes ou exigeant une conformité stricte, nos niveaux Enterprise proposent un hébergement souverain, isolé et sur site (on-premises). Dans ces scénarios, vous pouvez déployer la plateforme Runink sur votre propre matériel, sur une infrastructure physiquement isolée ou dans des environnements d'intégration en bordure de réseau. Contactez notre équipe commerciale pour discuter des SLA dédiés, des contrôles personnalisés de gouvernance des données et des options de licence sur site adaptées à vos contraintes d'infrastructure spécifiques.</p>
    </div>
    <div class="faq-item p-6 bg-stone-900 rounded-xl border border-stone-800/50 hover:border-[#ea580c]/30 transition-colors">
      <h3 class="text-xl font-bold text-stone-200 mb-4">Pourquoi devrais-je passer d'un système hérité sur site à une solution logistique automatisée native du cloud ?</h3>
      <p class="text-stone-400 leading-relaxed">La transition d'un système hérité sur site vers une solution logistique automatisée native du cloud est essentielle pour maintenir la compétitivité. Une architecture native du cloud offre une évolutivité élastique, permettant à vos ressources de calcul de s'étendre dynamiquement. Plus important encore, elle sert de couche de base requise pour déployer des modèles analytiques et d'apprentissage automatique avancés. Ces capacités analytiques peuvent traiter de vastes ensembles de données en temps réel pour identifier les opportunités d'optimisation cachées, prédire les perturbations de la chaîne d'approvisionnement avant qu'elles ne surviennent et automatiser des tâches complexes.</p>
    </div>
  </div>
</section>


<section class="author-bio mt-12 p-6 bg-stone-900 rounded-2xl border border-stone-800">
  <h2 class="text-2xl font-bold text-[#ea580c] mb-4">À Propos de l'Auteur</h2>
  <p class="text-stone-300">
    <strong>Lead Data & Cloud Architect</strong><br>
    Expert en la matière (SME) en AWS Data Analytics, AWS Certified Developer et Google Cloud Professional certifié en Data Engineering et Advanced Analytics. Avec plus d'une décennie d'expérience dans la construction d'architectures cloud résilientes et à haut débit, de pipelines de données et de solutions logistiques automatisées.
  </p>
</section>

<section class="citations mt-8 p-6 bg-stone-900/50 rounded-2xl border border-stone-800/50">
  <h2 class="text-2xl font-bold text-[#ea580c] mb-4">Citations & Références de l'Industrie</h2>
  <ul class="list-decimal pl-6 text-stone-400 space-y-2">
    <li><a href="https://aws.amazon.com/architecture/analytics/" class="text-[#ea580c] hover:underline" rel="noopener noreferrer" target="_blank">AWS Architecture Center : Meilleures Pratiques de l'Analyse de Données</a> - Directives complètes pour le traitement évolutif des données.</li>
    <li><a href="https://cloud.google.com/solutions/supply-chain" class="text-[#ea580c] hover:underline" rel="noopener noreferrer" target="_blank">Google Cloud : Analyse Avancée pour l'Otimisation de la Chaîne d'Approvisionnement</a> - Méthodologies avancées pour la logistique automatisée.</li>
    <li><a href="https://www.gartner.com/en/supply-chain" class="text-[#ea580c] hover:underline" rel="noopener noreferrer" target="_blank">Gartner : Principales Tendances Technologiques Stratégiques en Logistique</a> - Recherche standard de l'industrie sur la technologie de la chaîne d'approvisionnement.</li>
    <li><a href="https://ctl.mit.edu/" class="text-[#ea580c] hover:underline" rel="noopener noreferrer" target="_blank">MIT Center for Transportation & Logistics</a> - Recherche académique sur les applications analytiques dans le fret et le transport.</li>
  </ul>
</section>
