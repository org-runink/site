---
# Front matter only — see the notes in content/_index.md. The same rules apply
# here: no figures of any kind, no aliases, and nothing below the front matter.
#
# The industry names stay in English because the industry pages themselves are
# English and hugo.toml already lists them in English in the Portuguese menu.
# The link goes to the same /industries/... page in every language.
title: "Runink"
description: "Você descobre quando já é tarde para contestar. Um contêiner fica parado porque um documento está errado e a diária começa nesse mesmo dia. O Runink FACE lê os registros que os seus sistemas já guardam, compara cada um com a regra que o rege e coloca uma ação redigida diante de quem decide."
date: "2024-05-20T00:00:00Z"
author: "Runink"
hero:
  eyebrow: "Operações, finanças, conformidade"
  line1: "Você descobre quando"
  line2: "já é tarde para contestar."
  deck: "Um contêiner fica parado porque um documento está errado. A diária começa nesse mesmo dia. A sua versão disso já está escrita em algum lugar."
  cta_primary: "Encontre o seu setor"
  cta_secondary: "Agende uma conversa"

figure:
  today_label: "Como se lê hoje"
  today_note: "O volume venceu a inspeção, então lê-se uma amostra e supõe-se que o resto se pareça com ela. Os registros que divergem já estão no campo."
  read_label: "Como a Runink lê"
  read_note: "Cada registro é comparado com a regra que o governa, de madrugada, nas suas próprias máquinas. O que diverge sai com nome."
  beats:
    - title: "Os registros já existem"
      body: "Pedidos, sinistros, ordens de pagamento, detalhe de chamadas, contratos e leituras de sensores — nos sistemas que você já opera."
    - title: "Todos eles são lidos"
      body: "Não é uma varredura mensal sobre uma amostra. A comparação corre registro a registro, então a exceção chega como um caso com nome e não como uma taxa estimada."
    - title: "Uma pessoa decide o que acontece"
      body: "Cada achado chega com a regra que foi quebrada, os registros que o sustentam e uma ação já redigida, para alguém aprovar, corrigir ou recusar."
  caption: "Quanto tempo passa, na sua operação, entre algo ser registrado e alguém agir sobre isso é um número que vale ter. Pouquíssimas operações chegaram a contá-lo. Esse intervalo costuma ser onde o custo está, e é uma boa primeira coisa para medir junto."

industries_heading: "Cinco setores, uma mesma forma de problema"
industries_intro: "Encontre a linha que se parece com a sua semana. Cada uma abre uma página escrita para aquele setor, com as medidas em que anotar os seus próprios números."
industries_cta: "Ver se encaixa"
industries_columns:
  name: "Setor"
  cost: "O que está custando em silêncio"
  owner: "De quem é isso na sua casa"
industries:
  - page: "logistics-supply-chain"
    name: "Logistics & Supply Chain"
    cost: "Uma declaração retida no porto por um documento que falta enquanto a diária corre. Uma reclamação de frete ainda dentro do prazo de abertura que ninguém teve a manhã para montar."
    owners:
      - "Diretor de operações"
      - "Diretor financeiro"
      - "Conformidade aduaneira"
  - page: "insurance"
    name: "Insurance"
    cost: "Um limite de segunda análise elevado para vencer uma fila, feito para ser temporário, nunca devolvido e nunca decidido. Movimentos de reserva conferidos por amostragem porque o fluxo é longo demais para ler."
    owners:
      - "Operações de sinistros"
      - "Conformidade e riscos"
      - "Auditoria interna"
  - page: "banking-financial-services"
    name: "Banking & Financial Services"
    cost: "Uma diferença que cresce dentro da faixa que sempre se aprova, então nenhum mês escala e ninguém lê a sequência. Um contrato de fornecedor que ninguém reabriu desde a assinatura."
    owners:
      - "Conformidade e riscos"
      - "Auditoria interna"
      - "Finanças"
  - page: "telecom"
    name: "Telecom"
    cost: "Uma mudança de tarifação certa para a promoção e errada para um plano legado, pequena demais para mover um agregado. Uma varredura que devolve uma taxa de erro quando a operação precisa das contas pelo nome."
    owners:
      - "Garantia de receita"
      - "Liquidação de interconexão"
      - "Finanças e compras"
  - page: "marketing"
    name: "Marketing"
    cost: "A ferramenta de auditoria sabe que o site está lento. A de conteúdo não sabe, e segue escrevendo para uma página em que ninguém fica. Cada campanha recomeça do zero."
    owners:
      - "O líder de marketing"
      - "Vendas"
      - "TI e segurança da informação"

# The one block that names the product — the Portuguese counterpart of the
# `product` key in content/_index.md, in the same place for the same reason:
# after the industries and before the reasons, because everything above it is in
# the buyer's vocabulary and a reader who has just found their own line is
# exactly where "so what is it called" arrives. Until this key existed, the
# Portuguese page answered that only in the paper link near the bottom.
#
# "Runink FACE" is a product name and stays in English. The heading renders
# uppercase and letterspaced, so it stays short. One heading, one paragraph, one
# footnote, no call to action of its own — naming the product is not a licence to
# start describing it; the depth belongs in /blog/whitepapers/runink-face/.
product:
  heading: "O produto é o Runink FACE"
  deck: "O Runink FACE é o produto por trás de cada linha acima. Ele lê os registros que os seus sistemas já guardam, compara cada um com a regra que o governa e coloca uma ação já redigida diante de quem carrega a decisão. O que muda de setor para setor é quais registros importam e qual regra se aplica; a leitura, a redação e a aprovação não mudam."
  parts:
    - name: "Os agentes que leem"
      body: "Eles rodam sobre todos os registros, não sobre uma amostra, na periodicidade que você definir. Cada um compara o que um registro diz com a regra que o rege, e o que sai é um item com a regra invocada e os registros citados anexados."
    - name: "A tela onde ele espera"
      body: "Uma fila só, ordenada, com o que alguém precisa decidir. Aprovar é o que envia qualquer coisa, e quem aprovou, quando, e o que mudou fica no registro."
    - name: "Onde ele fica"
      body: "Ele lê dos sistemas que você já opera — o sistema de pedidos, os registros da transportadora, os processos de sinistro — e os deixa como estão. O que ele acrescenta é um registro por decisão: o que foi encontrado, qual regra, quais registros e quem aprovou."
  # Traduzido e à espera. O link só aparece onde o destino existe neste idioma,
  # e /products/face/ ainda não tem tradução: em /pt/ a linha inteira some em
  # vez de levar o leitor a uma página em inglês.
  more:
    text: "O que o FACE lê, e o que ele produz"
    url: "/products/face/"

# Um único caso, do início ao fim. Ver o comentário em content/_index.md: cada
# número aqui é do leitor, não nosso, e nada neste bloco diz que o software
# registra, desembaraça, classifica ou calcula qualquer coisa.
scenario_heading: "Uma declaração, de retida a decidida"
scenario_intro: "Um contêiner fica retido no porto. Isto é tudo o que o software faz a respeito, em ordem, sem pular nada do meio."
scenario_note: "Cada número dessa sequência é seu. A diária é a do seu próprio acordo, o imposto é o da sua declaração, e os dias são contados a partir dos seus próprios registros. Nada é estimado, e onde um número não pode ser obtido a partir do que você forneceu, o campo fica vazio em vez de preenchido no chute."
scenario:
  - step: "A retenção aparece"
    body: "Uma declaração volta como retida, em exame ou detida, e a contagem de dias retida está acima de zero. Essa combinação é o teste inteiro — é uma regra fixa, não um julgamento, e roda contra todas as declarações e não só contra as que alguém lembrou de conferir."
  - step: "O custo é contado, não estimado"
    body: "Os dias que ficou retida, multiplicados pela diária de sobrestadia do seu próprio acordo. Essa é a aritmética inteira. É o número que já está correndo enquanto a declaração espera numa fila que ninguém lê por completo."
  - step: "O documento que falta é nomeado"
    body: "O motivo da retenção e os documentos pendentes saem do registro da declaração e ficam escritos no item, de modo que quem o pega não começa descobrindo o que está errado."
  - step: "Verifica-se quem responde"
    body: "Separadamente, as declarações são lidas em busca de um importador de registro em branco, preenchido com o consignatário, ou com um texto provisório que alguém digitou uma vez. Essas carregam imposto e tributo sem ninguém respondendo por eles, e são levantadas como item próprio com o valor em jogo anexado."
  - step: "Os dois nunca são somados"
    body: "A sobrestadia de uma declaração retida e o imposto de uma sem responsável são dinheiros diferentes, e contá-los como um número só é a forma mais comum de inflar esse tipo de total. Ficam separados, de propósito, e há um teste que falha se algum dia se juntarem."
  - step: "Uma pessoa com nome decide"
    body: "O item espera. Aprovar é o que envia qualquer coisa, e quem aprovou, quando, e o que mudou fica registrado. Se parte do que foi redigido não pôde ser executada, o resultado nomeia essa parte em vez de relatar sucesso."
why_heading: "Por que isto não é mais um painel"
why_intro: "Três coisas decidem se algo acima vale o seu tempo."
why:
  - glyph: "finding"
    title: "Você recebe o achado, não os dados"
    body: "Um painel mostra um número e deixa o trabalho com você. Aqui chega uma ação proposta específica, priorizada, com a regra invocada e os registros citados anexados a ela."
  - glyph: "approve"
    title: "Quem decide é uma pessoa com nome"
    body: "Um achado chega como uma ação redigida, e espera. Aprovar é o que a envia. Quem aprovou, quando, e o que mudou fica no registro, para que o motivo possa ser dado depois sem remontar tudo de novo."
  - glyph: "held"
    title: "Seus registros ficam nas suas máquinas"
    body: "Os arquivos e o raciocínio sobre eles rodam em hardware que você controla. Nada é enviado a um provedor de modelos externo, o que costuma ser o caminho mais curto através de uma revisão de segurança."

paper:
  text: "Leia o paper do FACE"
  url: "/blog/whitepapers/runink-face/"
  note: "A versão longa: o que é lido, o que é produzido, quem aprova e onde roda."

# Tradução de proof_* em content/_index.md. Os valores `says:` NÃO são
# traduzidos: são cadeias literais do código-fonte, e uma citação traduzida
# deixa de ser uma citação. A linha seguinte diz o que elas significam.
proof_heading: "O que ele faz quando não sabe"
proof_intro: "Tudo acima é o software funcionando. A resposta que decide se você poderia colocar o que ele produz diante de uma transportadora ou de um despachante é outra: o que chega quando um registro não pode ser lido, ou quando um sistema não é alcançado. Quatro dessas respostas, nas palavras que ele imprime."
proof:
  - when: "A verificação não pôde rodar"
    body: "Se os registros por trás de um controle não podem ser lidos, isso não é aprovação e também não é reprovação. É uma terceira resposta, e vai para o log de auditoria com estas palavras, não só para uma tela. Às três da manhã ninguém está olhando a tela."
    says: "This is NOT a finding that … is compliant."
    gloss: "“Isto NÃO é uma conclusão de que … está em conformidade.”"
  - when: "O passo não aconteceu"
    body: "Uma ação aprovada que não conseguiu alcançar um dos seus sistemas não volta como feita, e também não volta como um erro genérico. Ela nomeia o passo que não rodou, de modo que você conserta uma conexão em vez de caçar um defeito."
    says: "email:no_google_connector"
    gloss: "“e-mail: sem conector do Google”"
  - when: "O modelo afirmou demais"
    body: "Cada frase que o modelo escreve é lida antes que qualquer coisa chegue a um documento, e uma afirmação de estar certificado é cortada inteira. Uma regra que só existe nas instruções é um pedido. Esta está no código, e a tentativa fica registrada, porque um modelo que insiste é algo que você vai querer saber."
    says: "[claim removed: this agent may not assert a compliance or certification status]"
    gloss: "“[afirmação removida: este agente não pode declarar situação de conformidade ou certificação]”"
  - when: "Ainda não há nada conectado"
    body: "No dia em que é instalado, antes de ser apontado para qualquer um dos seus sistemas, a primeira coisa que ele mostra é nada. Uma fila vazia é a resposta honesta quando ainda não há o que ler, e existe um teste cuja única função é manter isso assim."
    says: "TestStandardInstanceDerivesNoActionCards"
    gloss: "“uma instância padrão não deriva nenhum cartão de ação”"
proof_note: "São linhas do código-fonte, não uma descrição dele. O código não é público, então a oferta é a simples: diga qual você quer ver e abrimos o arquivo com você na chamada."

contact:
  heading: "Traga uma rota, um sinistro, ou um mês de faturas."
  deck: "Uma conversa curta costuma bastar para dizer se as perdas que você carrega têm a forma do que isto resolve. Se não tiverem, nós dizemos."
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
  message_label: "Qual é o problema que você quer resolver?"
  message_placeholder: "Um exemplo basta: uma declaração retida, um sinistro, uma conciliação que leva uma semana."
  submit: "Enviar mensagem"
  note: "Usamos o que você envia aqui para responder e para mais nada."
  done_title: "Mensagem recebida"
  done_body: "Obrigado. Respondemos em um dia útil."
---
