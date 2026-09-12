---
title: "Para Que Serve O Runink FACE"
product: "Runink FACE"
description: "As frentes operacionais para as quais o Runink FACE foi feito. Em todas elas a evidência já está nos seus sistemas e ninguém tem as horas para juntá-la, e todas terminam com uma pessoa aprovando uma ação já redigida, não lendo mais um painel."
layout: "section"

# The coverage index lives in front matter so layouts/use-cases/section.html can
# render it ABOVE the argument with real hierarchy. It used to be five card-grid
# shortcodes in the body: twelve cards of equal width and height under 3,000px of
# full-bleed prose, which cannot show that the groups mean anything.
#
# CONTENT.md rule 12: this is a page, not a copy. The group labels and the short
# names here are this language's own wording, and the line rendered under each
# name is read off that language's child page at render time.
#
# `name` is the short domain label a reader scans. Do not state a count anywhere
# — the number beside the heading is computed from len .Pages in the template.
coverage_heading: "O que isto cobre"
coverage_meta: "trabalhos"
coverage_intro: "Estão agrupados pelo momento da operação em que o problema aparece: antes de assumir um plano, com o trabalho em andamento, depois de algo dar errado, e quando alguém pede provas."
groups_other_label: "Também aqui"
groups:
  - label: "Planejar o que você vai precisar"
    deck: "Antes de assumir o compromisso. O que o próximo trimestre vai pedir, que cobertura você tem e quanto custaria uma mudança."
    items:
      - page: "demand-forecasting"
        name: "Previsão de demanda"
      - page: "fulfillment-optimization"
        name: "Cobertura de estoque e planejamento com fornecedores"
      - page: "hypothesis-lab"
        name: "Testar uma mudança antes de assumir o custo"
  - label: "Mover a carga"
    deck: "Com o trabalho já em movimento. A rota, a visão da cadeia inteira e o motorista com as mãos no volante."
    items:
      - page: "route-optimization"
        name: "Planejamento de rotas"
      - page: "supply-chain-visibility"
        name: "Visibilidade da cadeia de suprimentos"
      - page: "voice-dispatch"
        name: "Despacho por voz para motoristas"
  - label: "Quando algo dá errado"
    deck: "Depois do ocorrido. Um contêiner que esquentou, uma devolução parada na doca, uma contestação com o prazo correndo."
    items:
      - page: "cold-chain-safety"
        name: "Cadeia de frio e segurança no pátio"
      - page: "responsive-reverse-logistics"
        name: "Devoluções e logística reversa"
      - page: "claims-recovery"
        name: "Contestações de frete e custos de porto"
  - label: "Papel, norma e prova"
    deck: "Quando alguém pede provas. O processo do sinistro, a cláusula que rege, o relatório."
    items:
      - page: "insurance-underwriting"
        name: "Subscrição e processos de sinistro"
      - page: "paralegal-review"
        name: "Revisão de contratos e obrigações"
      - page: "compliance"
        name: "Dados pessoais e emissões"

next:
  label: "Um próximo passo"
  title: "Traga uma rota, uma transportadora ou um mês de devoluções."
  body: "Meia hora, com quem carrega o problema na sala, e percorremos esse exemplo do início ao fim. Se os prejuízos que você carrega não têm o formato dos descritos aqui, nós falamos."
  cta: "Agendar uma conversa"
  note: "O formulário abre com os cenários já indicados, então você não começa explicando de onde veio."
  about: "Os cenários"

---
## O Problema De Que O Runink FACE Parte

Todas as frentes acima têm o mesmo formato. Os dados de que você precisa já estão registrados em algum lugar do seu negócio. Estão em quatro sistemas, em quatro formatos, e juntá-los custa uma manhã que ninguém tem.

Então a contestação vence. O contêiner é aberto quente. O pedido sai de avião. Não porque alguém decidiu mal, mas porque ninguém teve tempo de chegar ao ponto em que dava para decidir.

## O Que O Runink FACE Faz A Respeito

O FACE foi feito para rodar as conferências de madrugada contra os seus próprios registros, de modo que a manhã comece com uma lista curta e ordenada do que aconteceu, com os registros anexados.

Cada item é pensado como uma **ação proposta**, não como um alerta. A contestação chega com o recibo, a leitura, a tarifa e o prazo, e com uma carta já redigida. O desvio de temperatura chega com o contêiner, o cliente e um redirecionamento já redigido.

Uma ação proposta espera nessa fila como um registro próprio. Aprovar é o passo que a executa, e a aprovação fica escrita com o nome de quem a deu e o que essa pessoa decidiu. Uma ação que ninguém aprova é uma ação que não foi enviada.

Repare no que isso é e no que não é. É uma fila cujos itens andam porque uma pessoa com nome os fez andar, e um registro de quem os fez andar — não uma trava em algum ponto do sistema inspecionando todo o resto do que a sua empresa faz. Quando parte de uma ação redigida não pode ser executada, o que volta diz isso em vez de dar a ação por feita.

Aprovar é para encerrar o trabalho, não para começá-lo. A resposta nomeia o que saiu e o que não saiu: um conector de e-mail não configurado volta como uma etapa pulada, com o motivo, em toda resposta. Mais tarde, quando alguém perguntar por que uma contestação foi registrada ou por que uma declaração ficou retida, a resposta sai do registro.

## Duas Coisas Que Vale Saber De Saída

**Seus dados ficam nas suas máquinas.** Os arquivos de pedido, os papéis de alfândega, as leituras dos sensores e o raciocínio sobre tudo isso rodam em hardware que você controla: o FACE roda sobre a plataforma Runink CORE, e é isso que faz disso uma propriedade de como ele foi construído, e não um ajuste que alguém precisa respeitar. Nada vai para um fornecedor de modelos de fora. É o tipo de resposta que uma revisão de segurança pede antes de deixar um fornecedor guardar os dados de pedido dela.

**A fila é onde você decide.** Cada item chega com o raciocínio dele e com os registros em que se apoia, então você pode ler por que foi proposto antes de aceitar. O que você aprova é o que é executado, e o item que você deixa quieto fica onde está. Que tipo de trabalho vale passar pela fila é pergunta que você responde na montagem, não um limite de valor que o software fiscalize por você.

## Em Que Pé Estão Estes Cenários

Nenhum dos cenários acima é resultado de cliente. Eles são escritos a partir do que o software foi feito para fazer, no vocabulário de quem carrega o problema, e não foram rodados contra os dados de cliente nenhum. Não há estudo de caso nem número nesta página, porque os números seriam nossos e os que importam são os seus.

A Runink PULSE, o produto de análise de mercado, e a plataforma CORE sobre a qual o FACE roda são tratadas nos [papers delas](/pt/blog/whitepapers/). Elas não estão nesta página, e nenhuma das frentes acima é resultado que pertença a uma das duas.
