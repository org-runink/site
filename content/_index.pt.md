---
# Tradução de content/_index.md. Ver o cabeçalho de layouts/index.html.
# NENHUM NÚMERO NESTA PÁGINA (CONTENT.md regra 1). SEM ALIASES.
title: "Runink"
seo_title: "Runink FACE | Conteste cada cobrança indevida de frete"
seo_description: "O Runink FACE confere cada fatura de frete contra suas tarifas e registros, redige a contestação com a evidência anexada e envia quando você aprova."
image: "/images/og/home-og.jpg"
description: "Runink FACE: Fulfilment Autonomous Claims Engine. Confere cada fatura de frete contra suas tarifas e registros, redige a contestação ou reclamação com a evidência anexada e envia quando uma pessoa com nome aprova. Roda nos seus próprios servidores ou na sua nuvem, sem serviço de IA externo."
ground: "console"
date: "2024-05-20T00:00:00Z"
author: "Runink"

hero:
  eyebrow: "Para líderes de operações de campo e de receita"
  line1: "Conteste cada cobrança indevida."
  line2: "Não só as grandes."
  sub: "O Runink FACE confere cada fatura de frete contra suas tarifas e registros, redige a contestação com a evidência anexada e envia quando você aprova."
  cta_primary: "Envie um mês de faturas"
  cta_secondary: "Veja como funciona"
  note: "Runink FACE: Fulfilment Autonomous Claims Engine. Roda nos seus servidores, na sua nuvem ou na nossa."
  shot:
    src: ""
    alt: ""
    caption: ""
  card:
    alt: "Uma contestação de frete redigida no Runink FACE, com a regra quebrada, os três registros que a sustentam, a causa provável e os botões Aprovar, Editar e Rejeitar."
    title: "runink face · ordens do dia"
    status: "AGUARDA VOCÊ"
    kind: "Contestação redigida · fatura da transportadora"
    head: "O peso faturado é maior que o peso do tíquete de balança."
    rule_label: "Regra:"
    rule: "faturar pelo peso registrado na coleta, na tarifa do contrato."
    records_label: "Registros anexados"
    records:
      - { tag: "INV", name: "carrier_invoice_7731.pdf", state: "lido" }
      - { tag: "BOL", name: "bill_of_lading_MSKU4419.pdf", state: "lido" }
      - { tag: "RATE", name: "rate_agreement_2026.xlsx", state: "comparado" }
    cause_label: "Causa provável"
    cause: "A transportadora repesou no centro de distribuição e faturou esse peso. Mesma rota, mesmo padrão em faturas anteriores."
    acts: ["Aprovar", "Editar", "Rejeitar"]
    stamp: "Aprovado por A. Morgan · 09:14 · contestação enviada com três registros"
    caption: "Exemplo desenhado de uma contestação redigida. Os nomes e registros são ilustrativos."

problem:
  heading: "Contestar uma fatura toma uma manhã. Por isso quase todas são pagas."
  before_label: "Hoje"
  before:
    - "Alguém busca o comprovante, o peso e a tarifa de uma única fatura."
    - "Só as cobranças indevidas grandes valem essa manhã."
    - "As reclamações pequenas vencem dentro do prazo."
    - "A mesma transportadora repete o mesmo erro no mês seguinte."
  after_label: "Com o Runink FACE"
  after:
    - "Cada fatura é conferida contra suas tarifas e registros."
    - "Cada cobrança indevida chega como uma contestação redigida, com os registros anexados."
    - "As reclamações são redigidas enquanto o prazo ainda está aberto."
    - "A causa é ordenada, para você corrigi-la na origem."

how:
  heading: "Como funciona"
  steps:
    - title: "Lê o que você já guarda"
      body: "Faturas, pedidos, comprovantes de entrega, processos de sinistro, registros portuários e sensores, dos sistemas que você já usa. Nada a substituir."
    - title: "Redige a ação"
      body: "Uma contestação, uma reclamação ou uma ordem de atendimento, com a regra quebrada, os registros que a sustentam e a causa provável."
    - title: "Você aprova"
      body: "Um clique envia. Seu nome, a hora e qualquer edição ficam no registro, para que o motivo se sustente depois."
  more: { text: "Tudo o que o FACE faz (em inglês)", url: "/products/face/" }

leaks:
  heading: "Seis lugares por onde a receita escapa"
  items:
    - verb: "Pegue"
      title: "Cobranças indevidas e faturas duplicadas"
      line: "Cada fatura conferida contra suas tarifas, não só as grandes."
      owner: "Auditoria de fretes · Financeiro"
    - verb: "Reclame"
      title: "Reclamações por avaria, falta e atraso"
      line: "Redigidas dentro do prazo da transportadora, com a evidência anexada."
      owner: "Sinistros"
    - verb: "Libere"
      title: "Sobre-estadia e detenção"
      line: "O contêiner retido e o documento que falta, nomeados enquanto a cobrança corre."
      owner: "Operações · Conformidade aduaneira"
    - verb: "Refaça"
      title: "Planos de atendimento defasados"
      line: "Ordens de atendimento redigidas com dados ao vivo quando o plano da manhã deixa de servir."
      owner: "Operações de campo"
    - verb: "Prove"
      title: "Perdas na cadeia de frio"
      line: "A foto da porta lida junto com os documentos, e a reclamação redigida."
      owner: "Operações de campo · Qualidade"
    - verb: "Corrija"
      title: "A mesma perda todo mês"
      line: "Causas ordenadas pelo quanto corrigir cada uma mudaria."
      owner: "CRO · Operações de receita"
  more: { text: "Acompanhe uma reclamação, do registro à aprovação", url: "/pt/use-cases/claims-recovery/" }

machines:
  heading: "Roda nas suas máquinas"
  lead: "A maioria das ferramentas deste mercado é um serviço hospedado. O FACE pode rodar nos seus próprios servidores ou na sua nuvem, então faturas, processos de sinistro e documentos aduaneiros ficam onde estão."
  facts:
    - title: "Seus servidores ou sua nuvem"
      body: "Nas licenças Dedicada e Enterprise, o trabalho roda em máquinas que você controla. A Lite roda nas máquinas compartilhadas da Runink."
    - title: "Sem serviço de IA externo"
      body: "O modelo de linguagem roda onde o FACE roda. Em qualquer licença, nada é enviado a um fornecedor de modelos externo."
    - title: "Seus sistemas ficam como estão"
      body: "O FACE lê seus registros e os deixa como estão. Nada a migrar, nenhum novo sistema de registro."
    - title: "Um registro de cada decisão"
      body: "Quem aprovou, quando e o que mudou fica com cada ação, pronto para quando um auditor pedir."
  more: { text: "Confiança e conformidade", url: "/pt/trust/" }

compare:
  heading: "Software que você opera, não um serviço que reclama por você"
  col_topic: "Pergunta"
  col_them: "Um serviço de recuperação externo"
  col_us: "Runink FACE"
  rows:
    - topic: "O que lê"
      them: "As faturas que você entrega, muitas vezes com seus acessos à transportadora."
      us: "Os registros que seus sistemas já guardam: pedidos, faturas, sinistros, documentos, fotos e dados ao vivo."
    - topic: "O que volta"
      them: "Um crédito e uma lista do que foi reclamado."
      us: "Uma contestação, reclamação ou ordem redigida, com a causa e os registros que a sustentam."
    - topic: "Quem decide"
      them: "O serviço reclama em seu nome."
      us: "Uma pessoa com nome da sua equipe aprova cada uma."
    - topic: "Para onde vão seus registros"
      them: "Para os sistemas do fornecedor."
      us: "Para as máquinas que sua licença indica. Nenhum serviço de IA externo os vê."
  note: "Os preços, incluindo a taxa de êxito sobre reclamações recuperadas, estão na [página de preços](/pt/pricing/)."

offer:
  heading: "Comece com um mês de faturas"
  lead: "O jeito mais rápido de saber se serve são seus próprios registros. Não colocamos nenhum número nesta página; o seu mês vai mostrar o seu."
  steps:
    - title: "Você envia um mês"
      body: "Faturas de frete ou reclamações, e a tabela de tarifas com que deveriam bater."
    - title: "Lemos no FACE"
      body: "Cada fatura contra sua tarifa e seus registros. Nada vai para um serviço de IA externo."
    - title: "Percorremos com você"
      body: "Meia hora com quem é dono do problema: o que foi encontrado, as ações redigidas e suas causas."
  cta: "Envie um mês de faturas"

faq:
  heading: "Perguntas"
  groups:
    - label: "Recuperação"
      items:
        - q: "O que é perda de receita na logística?"
          a: "Dinheiro que era devido a um embarcador, ou que ele nunca deveria ter pago, e que não voltou: cobranças indevidas, faturas pagas duas vezes, reclamações vencidas, sobre-estadia de um contêiner retido e pedidos fora do prazo."
        - q: "Como encontro cobranças indevidas de frete sem conferir cada fatura à mão?"
          a: "Compare cada fatura com os registros que a sustentam: o comprovante, o peso e a tarifa vigente naquele dia. O Runink FACE faz isso em cada fatura e redige a contestação para seu analista aprovar."
        - q: "Como evito que reclamações de frete vençam?"
          a: "Torne cada reclamação barata de montar. O FACE reúne o conhecimento de frete, o comprovante de entrega e suas condições de serviço, e redige a reclamação dentro do prazo da transportadora."
    - label: "Como funciona"
      items:
        - q: "O que é um gêmeo acionável?"
          a: "Uma cópia viva de um local, um ativo ou um pedido, mantida atualizada com seus próprios registros. O FACE compara cada gêmeo com suas regras e transforma o que difere numa ação redigida para uma pessoa aprovar."
        - q: "Como o FACE encontra a causa raiz de uma perda?"
          a: "Para cada reclamação, lista as causas, estima o quanto corrigir cada uma mudaria o resultado e as ordena, com os registros de cada uma."
        - q: "Precisamos substituir nosso TMS, WMS ou ERP?"
          a: "Não. O FACE lê os sistemas que você já usa e deixa seus registros como estão."
    - label: "Compra"
      items:
        - q: "O FACE é um serviço terceirizado de recuperação?"
          a: "Não. É um software que sua equipe opera, e uma pessoa com nome aprova cada contestação, reclamação e ordem. Os preços, incluindo a taxa de êxito sobre reclamações recuperadas, estão na [página de preços](/pt/pricing/)."
        - q: "Nossos dados saem dos nossos servidores?"
          a: "Nas licenças Dedicada e Enterprise, o FACE roda nos seus próprios servidores ou na sua nuvem. Em qualquer licença, nada é enviado a um fornecedor externo de modelos de IA."
        - q: "Quem usa na empresa?"
          a: "Gerentes de operações de campo para ordens de atendimento e exceções, equipes de sinistros e auditoria de fretes para contestações e reclamações, e líderes de receita para o que foi recuperado e por que se perdeu."

more:
  label: "Mais da Runink"
  groups:
    - label: "Setores (em inglês)"
      links:
        - { text: "Logistics & Supply Chain", url: "/industries/logistics-supply-chain/" }
        - { text: "Insurance", url: "/industries/insurance/" }
        - { text: "Banking & Financial Services", url: "/industries/banking-financial-services/" }
        - { text: "Telecom", url: "/industries/telecom/" }
        - { text: "Marketing", url: "/industries/marketing/" }
    - label: "Produtos (em inglês)"
      links:
        - { text: "Runink FACE: Fulfilment Autonomous Claims Engine", url: "/products/face/" }
        - { text: "Runink PULSE: Prescriptive Unified Lead & Social Engine", url: "/products/pulse/" }
        - { text: "Runink TIDE: Trusted Intelligence for Developer & Data Experience", url: "/products/tide/" }
        - { text: "Runink River", url: "/river/" }
    - label: "Empresa"
      links:
        - { text: "Quem constrói", url: "/pt/company/" }
        - { text: "Preços", url: "/pt/pricing/" }
        - { text: "Biblioteca", url: "/pt/library/" }
        - { text: "Confiança e conformidade", url: "/pt/trust/" }

contact:
  heading: "Envie um mês de faturas."
  deck: "Faturas de frete ou reclamações, e a tabela de tarifas com que deveriam bater. Se suas perdas não forem do tipo que o FACE resolve, diremos."
  book_title: "Agende uma conversa"
  book_body: "Meia hora, com quem tem o problema na sala. Vamos percorrer um exemplo real seu de ponta a ponta."
  book_cta: "Escolha um horário"
  form_title: "Ou escreva para nós"
  form_deck: "Conte o que está custando, com suas palavras. Respondemos em um dia útil."
  name_label: "Nome completo"
  name_placeholder: "Ana Souza"
  email_label: "E-mail de trabalho"
  email_placeholder: "ana@empresa.com"
  company_label: "Empresa"
  company_placeholder: "Sua organização"
  source_label: "Como ficou sabendo da gente?"
  source_default: "Selecione uma opção"
  source_options:
    - { value: "Referral", text: "Alguém indicou" }
    - { value: "LinkedIn", text: "LinkedIn" }
    - { value: "Web Search", text: "Busca na web" }
    - { value: "Event", text: "Um evento" }
    - { value: "Other", text: "Outro" }
  about_prefix: "Sobre: "
  message_label: "Qual é o problema que você quer resolver?"
  message_placeholder: "Um exemplo basta: uma declaração retida, um sinistro, uma conciliação que leva uma semana."
  submit: "Enviar mensagem"
  note: "Usamos o que você envia aqui para responder e para mais nada."
  done_title: "Mensagem recebida"
  done_body: "Obrigado. Respondemos em um dia útil."
---
