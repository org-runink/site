---
title: "Confiança e conformidade"
layout: "company"
description: "Como a Runink deixa cada decisão nas mãos de uma pessoa, onde os modelos rodam, como os dados ficam separados, como as versões são assinadas, como nossos controles se alinham ao SOC 2, à ISO/IEC 27001, à ISO 31000, à ISO/IEC 42001 e ao PCI DSS v4.0, e como relatar um problema de segurança."
eyebrow: "Confiança e conformidade"
hero_line: "Uma pessoa decide. O registro diz quem."
hero_deck: "O que nosso software pode fazer sozinho, onde ele roda e o que ele deixa por escrito. Cada seção termina com links para a documentação pública que mostra isso, para que você possa conferir cada linha em vez de confiar na nossa palavra."
next:
  label: "Um próximo passo"
  title: "Peça para mostrarmos qualquer linha desta página."
  body: "Meia hora com quem cuida de segurança ou conformidade do seu lado. Escolha uma seção: abrimos o software funcionando e o registro que ele mantém, não um slide sobre o assunto."
  cta: "Agende uma consulta"
  about: "Confiança e conformidade"
# TRANSLATION OF content/trust.md. Rule 12: this is a page, not a copy — when
# the English page changes, this one changes in the same commit or it comes down.
# Brazilian Portuguese, like the rest of the /pt/ site (registro, você, arquivo).
#
# The rules this page is held to are written out in full in the front matter of
# content/trust.md. Read them there before changing a word here. In short: every
# claim links to public evidence; no certification claim (the one required
# sentence, "A Runink não é certificada em nenhuma dessas normas; alinhamento
# não é certificação", is the only place the word may appear, and "conforme" is
# not used to describe Runink); the two exceptions to "a person decides" stay
# named; nothing unreleased; no internals; no figures; no prices.
#
# Product names (FACE, TIDE, PULSE, LUNA, Runink River) and standard names stay
# as they are written in English.
---

{{< section-container class="pt-4 pb-12" >}}
  <div class="max-w-4xl">
    <p class="text-xs font-black uppercase tracking-[0.2em] text-signal mb-4">Nesta página</p>
    <ol class="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2 text-lg text-ink-2 list-decimal pl-6">
      <li><a class="text-ink hover:text-signal underline decoration-rule" href="#a-person-decides">Uma pessoa decide</a></li>
      <li><a class="text-ink hover:text-signal underline decoration-rule" href="#guardrails">Salvaguardas em cada agente</a></li>
      <li><a class="text-ink hover:text-signal underline decoration-rule" href="#where-models-run">Onde os modelos rodam</a></li>
      <li><a class="text-ink hover:text-signal underline decoration-rule" href="#data-kept-apart">Seus dados, separados</a></li>
      <li><a class="text-ink hover:text-signal underline decoration-rule" href="#not-known">Desconhecido não é zero</a></li>
      <li><a class="text-ink hover:text-signal underline decoration-rule" href="#signed-releases">Versões assinadas</a></li>
      <li><a class="text-ink hover:text-signal underline decoration-rule" href="#standards">As normas com que nos alinhamos</a></li>
      <li><a class="text-ink hover:text-signal underline decoration-rule" href="#report-a-problem">Relatar um problema de segurança</a></li>
    </ol>
  </div>
{{< /section-container >}}

{{< section-container class="py-16 bg-stone-900" id="a-person-decides" >}}
  <div class="max-w-4xl">
    <p class="text-xs font-black uppercase tracking-[0.2em] text-signal mb-4">1 · Uma pessoa decide</p>
    <h2 class="text-3xl md:text-4xl font-bold text-ink mb-6">Os agentes redigem. Uma pessoa com nome decide.</h2>
    <div class="text-lg text-ink-2 leading-relaxed space-y-5">
      <p>Os agentes da Runink leem registros e redigem rascunhos: um processo de sinistro, uma correção de código, uma publicação, uma resposta. O rascunho fica aguardando. Uma pessoa com nome aprova, edita ou rejeita, e o registro guarda quem foi e quando.</p>
      <p>No Runink TIDE, essas decisões vão para uma cadeia de auditoria. Cada entrada é ligada à anterior, então uma entrada alterada, removida ou fora de ordem fica visível. Qualquer pessoa conectada ao console do TIDE pode clicar em <em>Verify now</em> para que a cadeia inteira seja conferida. A leitura das entradas em si fica restrita aos administradores que você indicar.</p>
      <p>Duas coisas agem sozinhas, cada uma dentro de um limite fixo:</p>
      <ul class="list-disc pl-6 space-y-3">
        <li><strong class="text-ink">O FACE cuida do próprio funcionamento.</strong> Quando uma parte do FACE para de responder, ele pode reiniciá-la, isolar uma dependência que falha repetidamente, desfazer a alteração mais recente ou adicionar capacidade. Ele só escolhe dessa lista fixa. Nunca apaga dados, nunca desliga uma máquina e nunca desativa um controle de segurança. Na dúvida, avisa uma pessoa em vez de agir. Um operador pode desligar a parte automática.</li>
        <li><strong class="text-ink">O classificador de issues do TIDE coloca etiquetas nas issues novas.</strong> Ele só escolhe entre as etiquetas que o repositório permite, e só quando uma verificação independente concorda. Uma pessoa pode mudá-las a qualquer momento, e decide quem cuida da issue.</li>
      </ul>
      <p>Todo o resto espera por uma pessoa.</p>
    </div>
    <div class="mt-10 border-t border-rule pt-6">
      <p class="text-xs font-black uppercase tracking-[0.2em] text-ink-2 mb-3">Leia as evidências (em inglês)</p>
      <ul class="space-y-2 text-base">
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/face/docs/analysis/agents-and-oversight/">FACE: os agentes e sua supervisão</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/tide/docs/models/">TIDE: o que cada agente pode fazer e o que uma pessoa decide</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/tide/docs/devex/cluster-gitops/">TIDE: a cadeia de auditoria e como ela é conferida</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/face/docs/operations/configuration/">FACE: a configuração que desliga a autorrecuperação automática</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/tide/docs/models/issue-triager/">TIDE: a ficha de modelo do classificador de issues</a></li>
      </ul>
    </div>
  </div>
{{< /section-container >}}

{{< section-container class="py-16" id="guardrails" >}}
  <div class="max-w-4xl">
    <p class="text-xs font-black uppercase tracking-[0.2em] text-signal mb-4">2 · Salvaguardas</p>
    <h2 class="text-3xl md:text-4xl font-bold text-ink mb-6">Cada agente trabalha dentro de regras escritas.</h2>
    <div class="text-lg text-ink-2 leading-relaxed space-y-5">
      <p>Cada agente que chama um modelo tem um juiz de políticas à sua frente. O juiz confere um pedido contra regras escritas antes que o modelo o veja, e confere o que o agente escreve antes que seja enviado ou publicado. Um pedido que viola uma regra é recusado, e a recusa fica registrada.</p>
      <p>As regras de segurança seguem o OWASP Top 10 for LLM Applications, a lista publicada das formas mais comuns de atacar uma aplicação de IA. Elas cobrem tentativas de passar por cima das instruções do agente (a injeção de prompt), tentativas de extrair segredos ou outras informações sensíveis e pedidos para chegar a lugares onde o agente não tem nada a fazer.</p>
      <p>Registros, páginas da web e documentos que um agente lê são tratados como dados, nunca como instruções. Uma linha de um registro de frete que diz "ignore suas regras" é lida como parte desse registro. Quando um agente propõe uma ação, uma segunda verificação lê as evidências que a execução reuniu. Se ela discordar, a ação fica retida. Se não conseguir decidir, ela diz isso em vez de deixar passar.</p>
    </div>
    <div class="mt-10 border-t border-rule pt-6">
      <p class="text-xs font-black uppercase tracking-[0.2em] text-ink-2 mb-3">Leia as evidências (em inglês)</p>
      <ul class="space-y-2 text-base">
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/face/docs/security/ai-safety/">FACE: segurança da IA, salvaguardas e dados não confiáveis</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/pulse/docs/models/">PULSE: salvaguardas antes do modelo, agente por agente</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/pulse/docs/concepts/judging-ladder/">PULSE: a segunda verificação das propostas</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/tide/docs/models/">TIDE: as salvaguardas de cada agente, na sua ficha de modelo</a></li>
      </ul>
    </div>
  </div>
{{< /section-container >}}

{{< section-container class="py-16 bg-stone-900" id="where-models-run" >}}
  <div class="max-w-4xl">
    <p class="text-xs font-black uppercase tracking-[0.2em] text-signal mb-4">3 · Onde os modelos rodam</p>
    <h2 class="text-3xl md:text-4xl font-bold text-ink mb-6">Modelos abertos, com nome, sem um fornecedor de IA no meio.</h2>
    <div class="text-lg text-ink-2 leading-relaxed space-y-5">
      <p>FACE, TIDE e PULSE rodam seus modelos onde o produto roda. Instale em um Runink Server nas suas instalações ou na sua própria conta na nuvem, e os modelos também rodam na sua infraestrutura. Escolha as máquinas compartilhadas da Runink, e eles rodam nas nossas. Nos dois casos, nenhum serviço de IA de terceiros é chamado: seus registros, os prompts montados a partir deles e as respostas não vão para nenhum fornecedor de modelos.</p>
      <p>O LUNA, nosso aplicativo de companhia pessoal, roda seus modelos em servidores operados pela Runink. Ele também não chama nenhum serviço de IA de terceiros.</p>
      <p>Os modelos são abertos, e nós os indicamos com o autor e a licença:</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      <div class="border border-rule rounded-lg p-6">
        <p class="font-mono text-sm text-ink mb-2">Qwen3.6-35B-A3B</p>
        <p class="text-ink-2 text-base">O modelo geral, usado pela maioria dos agentes. Criado pela Qwen, com licença Apache-2.0.</p>
      </div>
      <div class="border border-rule rounded-lg p-6">
        <p class="font-mono text-sm text-ink mb-2">Qwen3-Coder-30B-A3B</p>
        <p class="text-ink-2 text-base">O modelo de código, para revisar e redigir código. Criado pela Qwen, com licença Apache-2.0.</p>
      </div>
      <div class="border border-rule rounded-lg p-6">
        <p class="font-mono text-sm text-ink mb-2">Qwen3-VL-8B-Instruct</p>
        <p class="text-ink-2 text-base">O modelo de visão, para páginas digitalizadas e fotos. Criado pela Qwen, com licença Apache-2.0.</p>
      </div>
    </div>
    <div class="text-lg text-ink-2 leading-relaxed space-y-5 mt-8">
      <p>Cada agente tem uma ficha de modelo pública: o que faz, o que lê, o que uma pessoa continua decidindo, em qual modelo roda, onde roda e onde para.</p>
    </div>
    <div class="mt-10 border-t border-rule pt-6">
      <p class="text-xs font-black uppercase tracking-[0.2em] text-ink-2 mb-3">Leia as evidências (em inglês)</p>
      <ul class="space-y-2 text-base">
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/tide/docs/models/">Fichas de modelo do TIDE</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/pulse/docs/models/">Fichas de modelo do PULSE</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/luna/docs/models/">Fichas de modelo do LUNA</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/face/docs/security/sovereign-inference/">FACE: inferência soberana</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/pulse/docs/concepts/sovereign-inference/">PULSE: inferência soberana</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/luna/docs/guide/privacy/">LUNA: privacidade e dados</a></li>
      </ul>
    </div>
  </div>
{{< /section-container >}}

{{< section-container class="py-16" id="data-kept-apart" >}}
  <div class="max-w-4xl">
    <p class="text-xs font-black uppercase tracking-[0.2em] text-signal mb-4">4 · Seus dados, separados</p>
    <h2 class="text-3xl md:text-4xl font-bold text-ink mb-6">O registro de outra pessoa? "Não encontrado".</h2>
    <div class="text-lg text-ink-2 leading-relaxed space-y-5">
      <p>Os dados de cada pessoa, e os de cada cliente, ficam separados no servidor. Os dados que um pedido pode alcançar dependem da identidade verificada no login, não do que o próprio pedido diz.</p>
      <p>Peça um registro que pertence a outra pessoa e a resposta é "não encontrado", a mesma de um registro que não existe. A resposta nem sequer confirma que o registro está lá.</p>
      <p>O FACE vai um passo além: cada cliente tem sua própria instância do FACE, então os dados de um cliente nunca dividem uma instância com os de outro.</p>
    </div>
    <div class="mt-10 border-t border-rule pt-6">
      <p class="text-xs font-black uppercase tracking-[0.2em] text-ink-2 mb-3">Leia as evidências (em inglês)</p>
      <ul class="space-y-2 text-base">
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/face/docs/security/identity-access/">FACE: identidade, acesso e escopo</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/luna/docs/guide/privacy/">LUNA: quem pode ler seus dados</a></li>
      </ul>
    </div>
  </div>
{{< /section-container >}}

{{< section-container class="py-16 bg-stone-900" id="not-known" >}}
  <div class="max-w-4xl">
    <p class="text-xs font-black uppercase tracking-[0.2em] text-signal mb-4">5 · Desconhecido não é zero</p>
    <h2 class="text-3xl md:text-4xl font-bold text-ink mb-6">Um número que falta aparece como faltando.</h2>
    <div class="text-lg text-ink-2 leading-relaxed space-y-5">
      <p>Quando nosso software não consegue ler um número, ele diz isso, com o motivo. Ele não desenha um zero e não chuta. Uma verificação que não pôde rodar aparece como "não verificado", nunca como aprovada. Um campo que ele não conhece fica vazio, não é preenchido.</p>
      <p>Seguimos a mesma regra: esta página não traz estatísticas.</p>
    </div>
    <div class="mt-10 border-t border-rule pt-6">
      <p class="text-xs font-black uppercase tracking-[0.2em] text-ink-2 mb-3">Leia as evidências (em inglês)</p>
      <ul class="space-y-2 text-base">
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/tide/docs/dataex/models-inference/">TIDE: o uso, mostrado como ausente e não como zero</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/face/docs/security/audit-lineage/">FACE: o que o registro guarda e o que deixa vazio</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/luna/docs/guide/privacy/">LUNA: as marcas que você vê quando falta um valor</a></li>
      </ul>
    </div>
  </div>
{{< /section-container >}}

{{< section-container class="py-16" id="signed-releases" >}}
  <div class="max-w-4xl">
    <p class="text-xs font-black uppercase tracking-[0.2em] text-signal mb-4">6 · Versões assinadas</p>
    <h2 class="text-3xl md:text-4xl font-bold text-ink mb-6">Uma pessoa assina cada versão, longe da compilação.</h2>
    <div class="text-lg text-ink-2 leading-relaxed space-y-5">
      <p>As versões e os pacotes do Runink River são assinados com uma única chave de publicação. O responsável pelas versões guarda a chave privada offline. Ela nunca fica na CI e nunca é guardada como segredo de um repositório.</p>
      <p>As máquinas de compilação só produzem arquivos não assinados e seus checksums. O responsável compara esses arquivos com uma compilação própria e depois assina. Antes que uma versão seja publicada, uma etapa automática confere a assinatura e os checksums. A CI verifica; ela nunca assina.</p>
      <p>O <a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://github.com/org-runink/river/blob/main/KEYS">arquivo KEYS</a> público é a referência. Confira a chave por esta impressão digital, nunca pelo nome:</p>
    </div>
    <p class="mt-6 font-mono text-base md:text-lg text-ink border border-rule rounded-lg px-5 py-4 select-all break-all">95C0 A7B9 7D54 7413 E426 60DD B06F E756 26F1 5BF3</p>
    <div class="mt-10 border-t border-rule pt-6">
      <p class="text-xs font-black uppercase tracking-[0.2em] text-ink-2 mb-3">Leia as evidências (em inglês)</p>
      <ul class="space-y-2 text-base">
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/river/docs/security/release-signing/">River: a assinatura das versões</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/river/docs/security/verify/">River: verifique uma versão você mesmo</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://github.com/org-runink/river/blob/main/KEYS">O arquivo KEYS</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="/.well-known/gpg-key.txt">A chave pública, servida a partir de runink.org</a></li>
      </ul>
    </div>
  </div>
{{< /section-container >}}

{{< section-container class="py-16 bg-stone-900" id="standards" >}}
  <div class="max-w-4xl">
    <p class="text-xs font-black uppercase tracking-[0.2em] text-signal mb-4">7 · As normas com que nos alinhamos</p>
    <h2 class="text-3xl md:text-4xl font-bold text-ink mb-6">Nossos próprios controles, relacionados a cinco normas.</h2>
    <div class="text-lg text-ink-2 leading-relaxed space-y-5">
      <p>Mantemos um índice escrito dos nossos próprios controles de segurança: como os dados são criptografados em trânsito e em repouso, como o login recusa por padrão, como os dados de cada cliente ficam separados, como os segredos são tratados, entre outros. Cada controle indica o código que o executa, e cada um está relacionado às partes destas normas que ele atende:</p>
    </div>
    <ul class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6 text-lg text-ink">
      <li class="border border-rule rounded-lg px-5 py-3">SOC 2</li>
      <li class="border border-rule rounded-lg px-5 py-3">ISO/IEC 27001</li>
      <li class="border border-rule rounded-lg px-5 py-3">ISO 31000</li>
      <li class="border border-rule rounded-lg px-5 py-3">ISO/IEC 42001</li>
      <li class="border border-rule rounded-lg px-5 py-3">PCI DSS v4.0</li>
    </ul>
    <div class="text-lg text-ink-2 leading-relaxed space-y-5 mt-8">
      <p class="border-l-4 border-signal pl-5 text-ink"><strong>A Runink não é certificada em nenhuma dessas normas; alinhamento não é certificação.</strong></p>
      <p>Um agente de evidências lê o índice e confere se o código indicado por cada controle continua lá. Ele registra evidências, nunca um veredito. Qualquer declaração formal em relação a uma dessas normas viria de um auditor independente, não de nós nem do nosso software.</p>
    </div>
    <div class="mt-10 border-t border-rule pt-6">
      <p class="text-xs font-black uppercase tracking-[0.2em] text-ink-2 mb-3">Leia as evidências (em inglês)</p>
      <ul class="space-y-2 text-base">
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/tide/docs/models/compliance-evidence/">TIDE: o agente de evidências e as cinco normas</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/face/docs/security/compliance/">FACE: postura de conformidade</a></li>
      </ul>
    </div>
  </div>
{{< /section-container >}}

{{< section-container class="py-16" id="report-a-problem" >}}
  <div class="max-w-4xl">
    <p class="text-xs font-black uppercase tracking-[0.2em] text-signal mb-4">8 · Relatar um problema de segurança</p>
    <h2 class="text-3xl md:text-4xl font-bold text-ink mb-6">Encontrou algo? Conte para nós em particular.</h2>
    <div class="text-lg text-ink-2 leading-relaxed space-y-5">
      <p>Por favor, não abra uma issue pública para um problema de segurança. Escreva para:</p>
    </div>
    <p class="mt-6 font-mono text-lg md:text-xl text-ink border border-rule rounded-lg px-5 py-4 select-all">security@runink.org</p>
    <div class="text-lg text-ink-2 leading-relaxed space-y-5 mt-6">
      <p>Você pode <a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="mailto:security@runink.org">abrir no seu aplicativo de e-mail</a> ou copiar o endereço acima. Para criptografar seu relato, use a chave de publicação da seção 6 e confira antes a impressão digital. Conte o que foi afetado e em qual versão, o que um atacante poderia fazer e como reproduzir, se puder. Para o Runink River, você também pode usar o botão de relato privado na aba Security do repositório.</p>
    </div>
    <div class="mt-10 border-t border-rule pt-6">
      <p class="text-xs font-black uppercase tracking-[0.2em] text-ink-2 mb-3">Leia as evidências (em inglês)</p>
      <ul class="space-y-2 text-base">
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/river/docs/security/reporting/">River: como relatar e o que acontece depois</a></li>
      </ul>
    </div>
  </div>
{{< /section-container >}}
