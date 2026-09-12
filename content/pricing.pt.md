---
title: "Preços"
description: "Os trabalhos operacionais para os quais o Runink FACE foi feito, e quanto custa uma licença para rodá-los. Você paga pelo número de pessoas que o usam; cada pessoa inclui uma cota de capacidade de processamento, então usá-lo mais não aumenta a conta."
layout: "pricing"
date: "2024-05-20T00:00:00Z"
author: "Runink"
# WHY THE WORK COMES BEFORE THE PRICE ON THIS PAGE.
# See content/pricing.md for the reasoning in full. In short: the page used to
# open on the billing shape and go straight to three licences told apart by
# whose machine they run on, which does not answer the question a buyer arrives
# with. The scenarios band now sits between the intro and the licences.
#
# Every group label and every short name in that band is lifted WORD FOR WORD
# from the `groups` block in content/use-cases/_index.pt.md, so this page
# names the scenarios the way that page names them, in this reader's language.
# The sentence printed under each link is not written here at all — the
# shortcode reads the target page's own title at render time.
---

{{< pricing-table-2 >}}
{
  "intro": [
    "Você paga pelo número de pessoas que usam o Runink. Cada pessoa inclui no preço uma cota de capacidade de processamento.",
    "É toda a lógica. A conta acompanha o seu quadro de pessoal, não o seu uso, de modo que uma equipe que encontre muito uso para o Runink não abre uma linha de custo que cresce junto. Mas o trabalho vem primeiro, porque é a parte sobre a qual vale a pena discutir um preço."
  ],
  "eyebrow": "O trabalho",
  "heading": "Onde ele é posto a trabalhar",
  "lead": [
    "Estes são os trabalhos operacionais para os quais o Runink FACE foi feito. Em cada um, as evidências já estão nos seus sistemas e ninguém tem as horas para juntá-las. E cada um termina com uma pessoa aprovando uma ação redigida, não lendo mais um painel.",
    "Estão agrupados pelo momento da operação em que o problema aparece. Cada um abre a página que o explica: o que ele lê, o que ele redige, e as medidas para escrever os seus próprios números."
  ],
  "groups": [
    {
      "label": "Planejar o que você vai precisar",
      "deck": "Antes de assumir o compromisso. O que o próximo trimestre vai pedir, que cobertura você tem e quanto custaria uma mudança.",
      "items": [
        { "page": "demand-forecasting", "name": "Previsão de demanda" },
        { "page": "fulfillment-optimization", "name": "Cobertura de estoque e planejamento com fornecedores" },
        { "page": "hypothesis-lab", "name": "Testar uma mudança antes de assumir o custo" }
      ]
    },
    {
      "label": "Mover a carga",
      "deck": "Com o trabalho já em movimento. A rota, a visão da cadeia inteira e o motorista com as mãos no volante.",
      "items": [
        { "page": "route-optimization", "name": "Planejamento de rotas" },
        { "page": "supply-chain-visibility", "name": "Visibilidade da cadeia de suprimentos" },
        { "page": "voice-dispatch", "name": "Despacho por voz para motoristas" }
      ]
    },
    {
      "label": "Quando algo dá errado",
      "deck": "Depois do ocorrido. Um contêiner que esquentou, uma devolução parada na doca, uma contestação com o prazo correndo.",
      "items": [
        { "page": "cold-chain-safety", "name": "Cadeia de frio e segurança no pátio" },
        { "page": "responsive-reverse-logistics", "name": "Devoluções e logística reversa" },
        { "page": "claims-recovery", "name": "Contestações de frete e custos de porto" }
      ]
    },
    {
      "label": "Papel, norma e prova",
      "deck": "Quando alguém pede provas. O processo do sinistro, a cláusula que rege, o relatório.",
      "items": [
        { "page": "insurance-underwriting", "name": "Subscrição e processos de sinistro" },
        { "page": "paralegal-review", "name": "Revisão de contratos e obrigações" },
        { "page": "compliance", "name": "Dados pessoais e emissões" }
      ]
    }
  ],
  "outro": "As três licenças abaixo se diferenciam por uma única pergunta: quantas pessoas precisam dela e em que máquina ela roda."
}
{{< /pricing-table-2 >}}

{{< pricing-toggle >}}
{
  "options": [
    { "label": "Pagamento Mensal", "value": "monthly" },
    { "label": "Pagamento Anual (15% Menos)", "value": "yearly" }
  ]
}
{{< /pricing-toggle >}}

{{< pricing-table-1 >}}
{
  "plans": [
    {
      "pill": "EM UMA MÁQUINA COMPARTILHADA",
      "pill_color": "stone",
      "name": "LICENÇA LITE",
      "subtitle": "PARA EQUIPES DE 1 A 9 PESSOAS",
      "price_color": "stone",
      "price_monthly": "86",
      "price_yearly": "75",
      "price_subtitle": "POR PESSOA, POR MÊS",
      "credits": "COMPUTAÇÃO INCLUÍDA<br>DE UMA RESERVA COMPARTILHADA",
      "outcome_strategies": [
        {"label": "O QUE DEFINE A CONTA", "value": "Quantas pessoas você licencia. Não quanto elas usam."},
        {"label": "COMPROMISSO MÍNIMO", "value": "Um mês."},
        {"label": "SE RECUPERARMOS DINHEIRO PARA VOCÊ", "value": "20% do que for recuperado. Nada quando nada é recuperado."},
        {"label": "TAXA DE ATIVAÇÃO AUTOMÁTICA", "value": "De 1% a 3%, nunca mais de $50."}
      ],
      "features": [
        "RODA EM UMA MÁQUINA COMPARTILHADA COM OUTROS CLIENTES",
        "CAPACIDADE DE COMPUTAÇÃO INCLUÍDA COM CADA PESSOA",
        "O CONJUNTO PADRÃO DE ASSISTENTES AUTOMÁTICOS",
        "O PONTO DE PARTIDA PARA UMA PRIMEIRA EQUIPE"
      ],
      "button": {
        "text": "COMEÇAR COM A LITE",
        "url": "/#contact",
        "style": "outline"
      }
    },
    {
      "pill": "NA SUA PRÓPRIA MÁQUINA",
      "pill_color": "orange",
      "name": "LICENÇA DEDICADA",
      "subtitle": "PARA 10 PESSOAS OU MAIS",
      "price_color": "orange",
      "price_monthly": "75",
      "price_yearly": "75",
      "price_subtitle": "POR PESSOA, POR MÊS",
      "credits": "COMPUTAÇÃO INCLUÍDA<br>DA SUA PRÓPRIA RESERVA",
      "outcome_strategies": [
        {"label": "O QUE DEFINE A CONTA", "value": "Quantas pessoas você licencia. Não quanto elas usam."},
        {"label": "COMPROMISSO MÍNIMO", "value": "Um ano."},
        {"label": "SE RECUPERARMOS DINHEIRO PARA VOCÊ", "value": "20% do que for recuperado. Nada quando nada é recuperado."},
        {"label": "TAXA DE ATIVAÇÃO AUTOMÁTICA", "value": "De 1% a 3%, nunca mais de $50."}
      ],
      "features": [
        "RODA EM MÁQUINAS RESERVADAS SÓ PARA SUA EMPRESA",
        "1.000 UNIDADES POR PESSOA, MAIS 2.000 A CADA 10",
        "SEU PRÓPRIO ENDEREÇO NA WEB",
        "PRIORIDADE SOBRE A CAPACIDADE QUE VOCÊ PAGA"
      ],
      "button": {
        "text": "FALAR SOBRE A DEDICADA",
        "url": "/#contact",
        "style": "solid"
      }
    },
    {
      "pill": "NO SEU PRÓPRIO PRÉDIO",
      "pill_color": "stone",
      "name": "LICENÇA ENTERPRISE",
      "subtitle": "PARA HOSPEDAR VOCÊ MESMO",
      "price_monthly": "CUSTOM",
      "price_yearly": "CUSTOM",
      "price_subtitle": "PREÇO DEFINIDO COM VOCÊ",
      "credits": "COMPUTAÇÃO INCLUÍDA<br>DIMENSIONADA COM VOCÊ",
      "outcome_strategies": [
        {"label": "O QUE DEFINE A CONTA", "value": "A capacidade que você precisa e os níveis de serviço que você fixa."},
        {"label": "COMPROMISSO MÍNIMO", "value": "Combinado com você."},
        {"label": "SE RECUPERARMOS DINHEIRO PARA VOCÊ", "value": "Combinado com você e escrito no contrato."},
        {"label": "TAXA DE ATIVAÇÃO AUTOMÁTICA", "value": "Combinada com você e escrita no contrato."}
      ],
      "features": [
        "RODA NAS SUAS INSTALAÇÕES, INCLUSIVE FORA DA REDE",
        "CAPACIDADE DIMENSIONADA E GERENCIADA COM VOCÊ",
        "TUDO DA LICENÇA DEDICADA",
        "UM REGISTRO COMPLETO DE QUEM FEZ O QUÊ, E QUANDO"
      ],
      "button": {
        "text": "FALE CONOSCO",
        "url": "/#contact",
        "style": "outline"
      }
    }
  ]
}
{{< /pricing-table-1 >}}

{{< enterprise-a2a >}}

{{< faq >}}
{
  "title": "Perguntas Antes De Assinar",
  "description": "O que o trabalho precisa de você e quem decide, e depois o que é cobrado.",
  "questions": [
    {
      "question": "Carregamos perdas em devoluções, em contestações, em cadeia de frio. Isto pega nelas?",
      "answer": "Cada uma delas tem uma página própria acima, assim como cada um dos outros trabalhos que estão ali. Mas lê-las e concordar não é o jeito de descobrir. Traga uma delas e um mês dos registros que estão por trás.\n\nCada uma dessas páginas termina com as medidas a tirar primeiro dos seus próprios sistemas: dias entre a caixa chegar e a decisão ser tomada, contestações abertas em relação às contestações possíveis, erro de previsão por linha. Anote as suas antes de mudar qualquer coisa, porque a referência se perde de vez assim que algo muda.\n\nSe as perdas que você carrega não têm o formato das que estão descritas ali, nós vamos dizer."
    },
    {
      "question": "O que ele precisa dos nossos sistemas para fazer qualquer coisa disso?",
      "answer": "Registros que você já tem. Cada cenário diz o que pede para começar: um mês de devoluções e as suas notas de crédito; uma rota ou uma transportadora e um trimestre de faturas; um ano de histórico semanal de uma família de produtos; um processo de sinistro encerrado e a sua tabela de alçadas; um contrato e uma pergunta que a sua equipe respondeu de memória.\n\nExtrações no formato em que os seus sistemas as produzem bastam para começar. Juntar é que é o trabalho."
    },
    {
      "question": "Quem assina uma contestação ou uma carta que ele redige?",
      "answer": "Uma pessoa com nome. A papelada é reunida — a declaração, o porto, o motivo da retenção, os documentos que faltam, os dias retido e o custo por dia — e a carta é redigida. E aí ele para.\n\nAlguém lê o caso e aprova, corrige ou descarta, e essa assinatura fica no registro. **Nada vai para a transportadora antes disso.** Nos demais casos a forma é a mesma: o que chega é uma ação proposta, e uma ação que ninguém aprova é uma ação que não foi enviada."
    },
    {
      "question": "O que ele faz quando não dá para saber?",
      "answer": "Ele diz isso, em vez de responder mesmo assim.\n\nUm estado de devolução que ele não reconhece é recusado em vez de ser arquivado sob o melhor palpite. Uma série de demanda que ele não consegue ajustar volta dizendo que não deu, e não como uma linha de aparência segura sem nada por baixo. Quando parte de uma ação redigida não pode ser executada, a resposta nomeia o passo que não aconteceu em vez de dar o trabalho por feito.\n\nIsso pesa mais do que parece. A falha que isto substitui é uma resposta plausível que ninguém adiante conseguia distinguir de uma de verdade."
    },
    {
      "question": "O que acontece quando a previsão erra?",
      "answer": "Você consegue ver por quê. Métodos concorrentes são testados contra períodos que o seu próprio histórico já contém, e usa-se o que melhor previu esses períodos. A resposta traz o nome do método que venceu.\n\nAssim, um erro vira algo para investigar — qual método, contra qual histórico e o que mudou — e não algo para aceitar. O seu próprio erro de previsão por linha é o número para anotar antes de qualquer coisa estar rodando."
    },
    {
      "question": "Daqui a um ano alguém pergunta por que uma contestação foi aberta. O que mostramos?",
      "answer": "O registro. Cada ação proposta espera em uma fila como um registro próprio, e aprová-la é o passo que a executa.\n\nEssa aprovação fica escrita com o nome de quem a deu e o que decidiu, guardados juntos. Então a resposta para por que uma contestação foi aberta ou por que uma declaração foi retida sai do registro, e não de quem ainda lembra."
    },
    {
      "question": "Para onde vão os nossos dados?",
      "answer": "Para máquinas que você controla, e para lugar nenhum além disso. Os arquivos de pedido, os papéis de alfândega, as leituras dos sensores e o raciocínio sobre tudo isso rodam em hardware que você opera. Nada vai para um provedor de modelos externo.\n\nEssa é a resposta que uma revisão de segurança pede antes de deixar um fornecedor guardar os dados de pedido dela. E é também por que as três licenças acima se distinguem por em que máquina rodam: essa é a primeira pergunta que um comprador de um setor regulado tem de resolver."
    },
    {
      "question": "O que eu estou pagando, afinal?",
      "answer": "Assentos. Um **assento** é uma pessoa que usa o Runink. Você conta as pessoas que precisam dele, multiplica pelo preço acima, e isso é a licença.\n\nCada assento também vem com uma cota de capacidade de computação: o tempo de máquina que o Runink usa para ler seus documentos, conferir seus registros e redigir o trabalho. Essa cota está incluída no preço do assento. Você não é cobrado por pergunta, por documento nem por relatório."
    },
    {
      "question": "O que é uma Unidade de Computação?",
      "answer": "É o medidor do tempo de máquina, assim como o quilowatt-hora é o medidor da eletricidade. O Runink mede a capacidade em **Unidades de Computação** para que o que foi concedido a você e o que você já gastou sejam expressos nos mesmos termos, e os dois números ficam na tela do console em vez de chegarem no fim do mês.\n\nCada assento **Dedicado** traz 1.000 unidades, e sua organização recebe mais 2.000 unidades a cada 10 assentos contratados. Essas unidades são comuns a todos, então uma semana pesada de uma pessoa sai da mesma cota que uma semana tranquila de outra."
    },
    {
      "question": "O que acontece se passarmos da cota?",
      "answer": "A capacidade adicional é cobrada a **$0,10 por 100 unidades**, ou **$5,00 por hora de máquina**. Na prática, essa linha fica vazia no trabalho comum do dia a dia e aparece quando você roda algo muito grande de uma vez só: reprocessar um ano de documentos em uma tarde, por exemplo.\n\nVocê vê o total acumulado no console e pode fixar um orçamento, de modo que a primeira notícia de um mês pesado não seja a fatura."
    },
    {
      "question": "Qual licença serve para nós?",
      "answer": "Conte primeiro as suas pessoas.\n\nMenos de dez: a **Licença Lite**. Ela roda em uma máquina compartilhada com outros clientes e é a única que pode ser contratada mês a mês, então uma avaliação não exige um compromisso de um ano.\n\nDez ou mais: a **Licença Dedicada** custa menos por pessoa e roda em máquinas reservadas só para a sua empresa, com o seu próprio endereço na web e prioridade sobre a capacidade que você paga. Ela é contratada por um ano.\n\nSe as suas informações não podem sair do seu próprio prédio, isso é **Enterprise**, e a conversa começa por onde ele precisa rodar."
    },
    {
      "question": "Precisamos assinar por um ano?",
      "answer": "Só na Dedicada e na Enterprise. A **Licença Lite** pode ser contratada mês a mês por $86 por pessoa, ou por um ano por $75: a mesma diferença de 15% que o seletor acima mostra.\n\nA Dedicada e a Enterprise são contratadas por um ano porque as duas envolvem separar máquinas para a sua empresa especificamente, e essa capacidade fica reservada quer você a use ou não em uma dada semana."
    },
    {
      "question": "Por que usar mais não custa mais?",
      "answer": "Porque o raciocínio roda em hardware, e não em um serviço de terceiros com medidor. O custo de uma pergunta é a eletricidade para respondê-la.\n\nA consequência prática é orçamentária. Seu gasto depende da capacidade que você mantém, decidida uma vez, e não de um número que se mexe conforme quantas perguntas a sua equipe fez no mês passado. Uma equipe que usa muito o Runink não descobre um custo que cresce junto com esse sucesso."
    }
  ]
}
{{< /faq >}}


---
