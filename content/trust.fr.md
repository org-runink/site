---
title: "Confiance et conformité"
layout: "company"
description: "Comment Runink laisse chaque décision à une personne, où tournent les modèles, comment les données restent séparées, comment les versions sont signées, comment nos contrôles s'alignent sur SOC 2, ISO/IEC 27001, ISO 31000, ISO/IEC 42001 et PCI DSS v4.0, et comment signaler un problème de sécurité."
eyebrow: "Confiance et conformité"
hero_line: "Une personne décide. Le registre dit laquelle."
hero_deck: "Ce que nos logiciels ont le droit de faire seuls, où ils tournent et ce qu'ils consignent. Chaque section se termine par des liens vers la documentation publique qui le montre : vous pouvez vérifier chaque ligne au lieu de nous croire sur parole."
next:
  label: "Une étape suivante"
  title: "Demandez-nous de vous montrer n'importe quelle ligne de cette page."
  body: "Une demi-heure avec la personne qui porte la sécurité ou la conformité chez vous. Choisissez une section : nous ouvrons le logiciel en fonctionnement et le registre qu'il tient, pas une diapositive qui en parle."
  cta: "Réserver un rendez-vous"
  about: "Confiance et conformité"
# TRANSLATION OF content/trust.md. Rule 12: this is a page, not a copy — when
# the English page changes, this one changes in the same commit or it comes down.
#
# The rules this page is held to are written out in full in the front matter of
# content/trust.md. Read them there before changing a word here. In short: every
# claim links to public evidence; no certification claim (the one required
# sentence, "Runink n'est certifié selon aucune de ces normes ; l'alignement
# n'est pas une certification", is the only place the word may appear, and
# "conforme" is not used at all); the two exceptions to "a person decides" stay
# named; nothing unreleased; no internals; no figures; no prices.
#
# Product names (FACE, TIDE, PULSE, LUNA, Runink River) and standard names stay
# as they are written in English.
---

{{< section-container class="pt-4 pb-12" >}}
  <div class="max-w-4xl">
    <p class="text-xs font-black uppercase tracking-[0.2em] text-signal mb-4">Sur cette page</p>
    <ol class="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2 text-lg text-ink-2 list-decimal pl-6">
      <li><a class="text-ink hover:text-signal underline decoration-rule" href="#a-person-decides">Une personne décide</a></li>
      <li><a class="text-ink hover:text-signal underline decoration-rule" href="#guardrails">Des garde-fous sur chaque agent</a></li>
      <li><a class="text-ink hover:text-signal underline decoration-rule" href="#where-models-run">Où tournent les modèles</a></li>
      <li><a class="text-ink hover:text-signal underline decoration-rule" href="#data-kept-apart">Vos données, tenues à part</a></li>
      <li><a class="text-ink hover:text-signal underline decoration-rule" href="#not-known">Inconnu n'est pas zéro</a></li>
      <li><a class="text-ink hover:text-signal underline decoration-rule" href="#signed-releases">Des versions signées</a></li>
      <li><a class="text-ink hover:text-signal underline decoration-rule" href="#standards">Les normes auxquelles nous nous alignons</a></li>
      <li><a class="text-ink hover:text-signal underline decoration-rule" href="#report-a-problem">Signaler un problème de sécurité</a></li>
    </ol>
  </div>
{{< /section-container >}}

{{< section-container class="py-16 bg-stone-900" id="a-person-decides" >}}
  <div class="max-w-4xl">
    <p class="text-xs font-black uppercase tracking-[0.2em] text-signal mb-4">1 · Une personne décide</p>
    <h2 class="text-3xl md:text-4xl font-bold text-ink mb-6">Les agents rédigent. Une personne nommée décide.</h2>
    <div class="text-lg text-ink-2 leading-relaxed space-y-5">
      <p>Les agents de Runink lisent des enregistrements et rédigent des brouillons : un dossier de sinistre, une correction de code, une publication, une réponse. Le brouillon attend. Une personne nommée l'approuve, le modifie ou le rejette, et le registre garde qui c'était et quand.</p>
      <p>Dans Runink TIDE, ces décisions sont inscrites dans une chaîne d'audit. Chaque entrée est liée à la précédente : une entrée modifiée, supprimée ou déplacée se voit. Toute personne connectée à la console TIDE peut appuyer sur <em>Verify now</em> pour faire vérifier toute la chaîne. La lecture des entrées elles-mêmes reste réservée aux administrateurs que vous désignez.</p>
      <p>Deux choses agissent seules, chacune dans une limite fixe :</p>
      <ul class="list-disc pl-6 space-y-3">
        <li><strong class="text-ink">FACE veille sur son propre fonctionnement.</strong> Quand une partie de FACE ne répond plus, il peut la redémarrer, isoler une dépendance qui échoue sans cesse, annuler le changement le plus récent ou ajouter de la capacité. Il ne choisit que dans cette liste fixe. Il ne supprime jamais de données, n'éteint jamais une machine et ne désactive jamais un contrôle de sécurité. En cas de doute, il prévient une personne au lieu d'agir. Un opérateur peut désactiver la partie automatique.</li>
        <li><strong class="text-ink">Le trieur de tickets de TIDE étiquette les nouveaux tickets.</strong> Il ne choisit que parmi les étiquettes autorisées par le dépôt, et seulement après l'accord d'une vérification indépendante. Une personne peut les changer à tout moment, et décide qui traite le ticket.</li>
      </ul>
      <p>Tout le reste attend une personne.</p>
    </div>
    <div class="mt-10 border-t border-rule pt-6">
      <p class="text-xs font-black uppercase tracking-[0.2em] text-ink-2 mb-3">Lire les preuves (en anglais)</p>
      <ul class="space-y-2 text-base">
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/face/docs/analysis/agents-and-oversight/">FACE : les agents et leur supervision</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/core/docs/models/">TIDE : ce que chaque agent peut faire, et ce qu'une personne décide</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/core/docs/devex/cluster-gitops/">TIDE : la chaîne d'audit et sa vérification</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/face/docs/operations/configuration/">FACE : le réglage qui désactive l'auto-réparation automatique</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/core/docs/models/issue-triager/">TIDE : la fiche modèle du trieur de tickets</a></li>
      </ul>
    </div>
  </div>
{{< /section-container >}}

{{< section-container class="py-16" id="guardrails" >}}
  <div class="max-w-4xl">
    <p class="text-xs font-black uppercase tracking-[0.2em] text-signal mb-4">2 · Garde-fous</p>
    <h2 class="text-3xl md:text-4xl font-bold text-ink mb-6">Chaque agent travaille dans des règles écrites.</h2>
    <div class="text-lg text-ink-2 leading-relaxed space-y-5">
      <p>Chaque agent qui fait appel à un modèle a devant lui un juge de règles. Ce juge contrôle une demande au regard de règles écrites avant que le modèle ne la voie, et contrôle ce que l'agent écrit avant que ce soit envoyé ou publié. Une demande qui enfreint une règle est refusée, et le refus est consigné.</p>
      <p>Les règles de sécurité suivent l'OWASP Top 10 for LLM Applications, la liste publiée des façons les plus courantes d'attaquer une application d'IA. Elles couvrent les tentatives de contourner les instructions de l'agent (l'injection de prompt), les tentatives d'obtenir des secrets ou d'autres informations sensibles, et les demandes d'atteindre des endroits où l'agent n'a rien à faire.</p>
      <p>Les enregistrements, pages web et documents qu'un agent lit sont traités comme des données, jamais comme des instructions. Une ligne d'un enregistrement de fret qui dit « ignore tes règles » est lue comme une partie de cet enregistrement. Quand un agent propose une action, une seconde vérification lit les éléments que l'exécution a réunis. Si elle n'est pas d'accord, l'action est retenue. Si elle ne peut pas trancher, elle le dit au lieu de laisser passer.</p>
    </div>
    <div class="mt-10 border-t border-rule pt-6">
      <p class="text-xs font-black uppercase tracking-[0.2em] text-ink-2 mb-3">Lire les preuves (en anglais)</p>
      <ul class="space-y-2 text-base">
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/face/docs/security/ai-safety/">FACE : sûreté de l'IA, garde-fous et données non fiables</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/pulse/docs/models/">PULSE : les garde-fous avant le modèle, agent par agent</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/pulse/docs/concepts/judging-ladder/">PULSE : la seconde vérification des propositions</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/core/docs/models/">TIDE : les garde-fous de chaque agent, sur sa fiche modèle</a></li>
      </ul>
    </div>
  </div>
{{< /section-container >}}

{{< section-container class="py-16 bg-stone-900" id="where-models-run" >}}
  <div class="max-w-4xl">
    <p class="text-xs font-black uppercase tracking-[0.2em] text-signal mb-4">3 · Où tournent les modèles</p>
    <h2 class="text-3xl md:text-4xl font-bold text-ink mb-6">Des modèles ouverts, nommés, sans fournisseur d'IA entre nous.</h2>
    <div class="text-lg text-ink-2 leading-relaxed space-y-5">
      <p>FACE, TIDE et PULSE font tourner leurs modèles là où tourne le produit. Installez-le sur un Runink Server dans vos locaux ou dans votre propre compte cloud, et les modèles tournent aussi sur votre infrastructure. Choisissez plutôt les machines partagées de Runink, et ils tournent sur les nôtres. Dans les deux cas, aucun service d'IA tiers n'est appelé : vos enregistrements, les prompts construits à partir d'eux et les réponses ne vont à aucun fournisseur de modèles.</p>
      <p>LUNA, notre application de compagnon personnel, fait tourner ses modèles sur des serveurs exploités par Runink. Elle n'appelle, elle non plus, aucun service d'IA tiers.</p>
      <p>Les modèles sont ouverts, et nous les nommons avec leur auteur et leur licence :</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      <div class="border border-rule rounded-lg p-6">
        <p class="font-mono text-sm text-ink mb-2">Qwen3.6-35B-A3B</p>
        <p class="text-ink-2 text-base">Le modèle généraliste, utilisé par la plupart des agents. Conçu par Qwen, sous licence Apache-2.0.</p>
      </div>
      <div class="border border-rule rounded-lg p-6">
        <p class="font-mono text-sm text-ink mb-2">Qwen3-Coder-30B-A3B</p>
        <p class="text-ink-2 text-base">Le modèle de code, pour relire et rédiger du code. Conçu par Qwen, sous licence Apache-2.0.</p>
      </div>
      <div class="border border-rule rounded-lg p-6">
        <p class="font-mono text-sm text-ink mb-2">Qwen3-VL-8B-Instruct</p>
        <p class="text-ink-2 text-base">Le modèle de vision, pour les pages numérisées et les photos. Conçu par Qwen, sous licence Apache-2.0.</p>
      </div>
    </div>
    <div class="text-lg text-ink-2 leading-relaxed space-y-5 mt-8">
      <p>Chaque agent a une fiche modèle publique : ce qu'il fait, ce qu'il lit, ce qu'une personne décide encore, sur quel modèle il tourne, où il tourne et où il s'arrête.</p>
    </div>
    <div class="mt-10 border-t border-rule pt-6">
      <p class="text-xs font-black uppercase tracking-[0.2em] text-ink-2 mb-3">Lire les preuves (en anglais)</p>
      <ul class="space-y-2 text-base">
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/core/docs/models/">Fiches modèles de TIDE</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/pulse/docs/models/">Fiches modèles de PULSE</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/luna/docs/models/">Fiches modèles de LUNA</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/face/docs/security/sovereign-inference/">FACE : l'inférence souveraine</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/pulse/docs/concepts/sovereign-inference/">PULSE : l'inférence souveraine</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/luna/docs/guide/privacy/">LUNA : vie privée et données</a></li>
      </ul>
    </div>
  </div>
{{< /section-container >}}

{{< section-container class="py-16" id="data-kept-apart" >}}
  <div class="max-w-4xl">
    <p class="text-xs font-black uppercase tracking-[0.2em] text-signal mb-4">4 · Vos données, tenues à part</p>
    <h2 class="text-3xl md:text-4xl font-bold text-ink mb-6">L'enregistrement d'un autre est « introuvable ».</h2>
    <div class="text-lg text-ink-2 leading-relaxed space-y-5">
      <p>Les données de chaque personne, et celles de chaque client, sont tenues à part sur le serveur. Les données qu'une demande peut toucher dépendent de l'identité vérifiée à la connexion, et non de ce que la demande affirme elle-même.</p>
      <p>Demandez un enregistrement qui appartient à quelqu'un d'autre : la réponse est « introuvable », la même que pour un enregistrement qui n'existe pas. La réponse ne confirme même pas que l'enregistrement existe.</p>
      <p>FACE va un peu plus loin : chaque client a sa propre instance de FACE, si bien que les données d'un client ne partagent jamais une instance avec celles d'un autre.</p>
    </div>
    <div class="mt-10 border-t border-rule pt-6">
      <p class="text-xs font-black uppercase tracking-[0.2em] text-ink-2 mb-3">Lire les preuves (en anglais)</p>
      <ul class="space-y-2 text-base">
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/face/docs/security/identity-access/">FACE : identité, accès et périmètre</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/luna/docs/guide/privacy/">LUNA : qui peut lire vos données</a></li>
      </ul>
    </div>
  </div>
{{< /section-container >}}

{{< section-container class="py-16 bg-stone-900" id="not-known" >}}
  <div class="max-w-4xl">
    <p class="text-xs font-black uppercase tracking-[0.2em] text-signal mb-4">5 · Inconnu n'est pas zéro</p>
    <h2 class="text-3xl md:text-4xl font-bold text-ink mb-6">Un chiffre manquant est montré comme manquant.</h2>
    <div class="text-lg text-ink-2 leading-relaxed space-y-5">
      <p>Quand nos logiciels n'ont pas pu lire un chiffre, ils le disent, avec la raison. Ils n'affichent pas de zéro et ne devinent pas. Un contrôle qui n'a pas pu s'exécuter est signalé comme « non vérifié », jamais comme réussi. Un champ inconnu reste vide, il n'est pas rempli.</p>
      <p>Nous nous tenons à la même règle : cette page ne contient aucune statistique.</p>
    </div>
    <div class="mt-10 border-t border-rule pt-6">
      <p class="text-xs font-black uppercase tracking-[0.2em] text-ink-2 mb-3">Lire les preuves (en anglais)</p>
      <ul class="space-y-2 text-base">
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/core/docs/dataex/models-inference/">TIDE : une mesure absente n'est pas un zéro</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/face/docs/security/audit-lineage/">FACE : ce que contient le registre, et ce qu'il laisse vide</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/luna/docs/guide/privacy/">LUNA : les marques affichées pour une valeur manquante</a></li>
      </ul>
    </div>
  </div>
{{< /section-container >}}

{{< section-container class="py-16" id="signed-releases" >}}
  <div class="max-w-4xl">
    <p class="text-xs font-black uppercase tracking-[0.2em] text-signal mb-4">6 · Des versions signées</p>
    <h2 class="text-3xl md:text-4xl font-bold text-ink mb-6">Une personne signe chaque version, à l'écart de la compilation.</h2>
    <div class="text-lg text-ink-2 leading-relaxed space-y-5">
      <p>Les versions et les paquets de Runink River sont signés avec une seule clé de publication. La clé privée est conservée hors ligne par le mainteneur chargé des versions. Elle n'est jamais dans la CI et jamais stockée comme secret d'un dépôt.</p>
      <p>Les machines de compilation ne produisent que des fichiers non signés et leurs sommes de contrôle. Le mainteneur les compare à sa propre compilation, puis signe. Avant qu'une version soit publiée, une étape automatique vérifie la signature et les sommes de contrôle. La CI vérifie ; elle ne signe jamais.</p>
      <p>Le <a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://github.com/org-runink/river/blob/main/KEYS">fichier KEYS</a> public fait référence. Vérifiez la clé par cette empreinte, jamais par son nom :</p>
    </div>
    <p class="mt-6 font-mono text-base md:text-lg text-ink border border-rule rounded-lg px-5 py-4 select-all break-all">95C0 A7B9 7D54 7413 E426 60DD B06F E756 26F1 5BF3</p>
    <div class="mt-10 border-t border-rule pt-6">
      <p class="text-xs font-black uppercase tracking-[0.2em] text-ink-2 mb-3">Lire les preuves (en anglais)</p>
      <ul class="space-y-2 text-base">
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/river/docs/security/release-signing/">River : la signature des versions</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/river/docs/security/verify/">River : vérifier une version vous-même</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://github.com/org-runink/river/blob/main/KEYS">Le fichier KEYS</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="/.well-known/gpg-key.txt">La clé publique, servie depuis runink.org</a></li>
      </ul>
    </div>
  </div>
{{< /section-container >}}

{{< section-container class="py-16 bg-stone-900" id="standards" >}}
  <div class="max-w-4xl">
    <p class="text-xs font-black uppercase tracking-[0.2em] text-signal mb-4">7 · Les normes auxquelles nous nous alignons</p>
    <h2 class="text-3xl md:text-4xl font-bold text-ink mb-6">Nos propres contrôles, rapprochés de cinq normes.</h2>
    <div class="text-lg text-ink-2 leading-relaxed space-y-5">
      <p>Nous tenons un index écrit de nos propres contrôles de sécurité : comment les données sont chiffrées en transit et au repos, comment la connexion refuse par défaut, comment les données de chaque client restent à part, comment les secrets sont gérés, entre autres. Chaque contrôle désigne le code qui le met en œuvre, et chacun est rapproché des exigences de ces normes qu'il traite :</p>
    </div>
    <ul class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6 text-lg text-ink">
      <li class="border border-rule rounded-lg px-5 py-3">SOC 2</li>
      <li class="border border-rule rounded-lg px-5 py-3">ISO/IEC 27001</li>
      <li class="border border-rule rounded-lg px-5 py-3">ISO 31000</li>
      <li class="border border-rule rounded-lg px-5 py-3">ISO/IEC 42001</li>
      <li class="border border-rule rounded-lg px-5 py-3">PCI DSS v4.0</li>
    </ul>
    <div class="text-lg text-ink-2 leading-relaxed space-y-5 mt-8">
      <p class="border-l-4 border-signal pl-5 text-ink"><strong>Runink n'est certifié selon aucune de ces normes ; l'alignement n'est pas une certification.</strong></p>
      <p>Un agent de preuves lit l'index et vérifie que le code désigné par chaque contrôle est toujours là. Il consigne des preuves, jamais un verdict. Toute déclaration formelle au regard de l'une de ces normes viendrait d'un auditeur indépendant, ni de nous ni de nos logiciels.</p>
    </div>
    <div class="mt-10 border-t border-rule pt-6">
      <p class="text-xs font-black uppercase tracking-[0.2em] text-ink-2 mb-3">Lire les preuves (en anglais)</p>
      <ul class="space-y-2 text-base">
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/core/docs/models/compliance-evidence/">TIDE : l'agent de preuves et les cinq normes</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/face/docs/security/compliance/">FACE : la posture de conformité</a></li>
      </ul>
    </div>
  </div>
{{< /section-container >}}

{{< section-container class="py-16" id="report-a-problem" >}}
  <div class="max-w-4xl">
    <p class="text-xs font-black uppercase tracking-[0.2em] text-signal mb-4">8 · Signaler un problème de sécurité</p>
    <h2 class="text-3xl md:text-4xl font-bold text-ink mb-6">Vous avez trouvé quelque chose ? Dites-le-nous en privé.</h2>
    <div class="text-lg text-ink-2 leading-relaxed space-y-5">
      <p>Merci de ne pas ouvrir de ticket public pour un problème de sécurité. Écrivez à :</p>
    </div>
    <p class="mt-6 font-mono text-lg md:text-xl text-ink border border-rule rounded-lg px-5 py-4 select-all">security@runink.org</p>
    <div class="text-lg text-ink-2 leading-relaxed space-y-5 mt-6">
      <p>Vous pouvez <a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="mailto:security@runink.org">l'ouvrir dans votre messagerie</a>, ou copier l'adresse ci-dessus. Pour chiffrer votre signalement, utilisez la clé de publication de la section 6, après avoir vérifié son empreinte. Dites-nous ce qui est touché et dans quelle version, ce qu'un attaquant pourrait faire, et comment le reproduire si vous le pouvez. Pour Runink River, vous pouvez aussi utiliser le bouton de signalement privé de l'onglet Security du dépôt.</p>
    </div>
    <div class="mt-10 border-t border-rule pt-6">
      <p class="text-xs font-black uppercase tracking-[0.2em] text-ink-2 mb-3">Lire les preuves (en anglais)</p>
      <ul class="space-y-2 text-base">
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/river/docs/security/reporting/">River : comment signaler, et ce qui se passe ensuite</a></li>
      </ul>
    </div>
  </div>
{{< /section-container >}}
