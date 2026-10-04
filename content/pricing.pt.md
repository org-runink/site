---
title: "Preços"
# Search and share-card text (CONTENT.md rules 1 and 3 apply): the <title> is
# seo_title verbatim, at most 60 characters; seo_description is the meta and card
# description, at most 155. Visible copy on the page is unchanged by these two.
seo_title: "Preços do Runink FACE: por pessoa, onde você escolher"
seo_description: "Quanto custa uma licença do Runink FACE. Você paga por pessoa e escolhe onde roda: nas máquinas compartilhadas da Runink, na sua nuvem ou no seu local."
image: "/images/face/cockpit.png"
description: "Os trabalhos operacionais para os quais o Runink FACE foi feito, e quanto custa uma licença para rodá-los. Você paga pelo número de pessoas que o usam e escolhe onde o trabalho roda: nas máquinas compartilhadas do Runink, na sua própria conta na nuvem ou nas suas próprias instalações."
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
    "Este é o preço do Runink FACE: Fulfilment Autonomous Claims Engine. Você paga pelo número de pessoas que o usam e escolhe onde o trabalho roda: nas máquinas compartilhadas do Runink, na sua própria conta na nuvem ou nas suas próprias instalações.",
    "É toda a lógica. As três licenças abaixo se diferenciam por essa única pergunta, onde o trabalho roda, e o preço decorre dela. Mas o trabalho vem primeiro, porque é a parte sobre a qual vale a pena discutir um preço."
  ],
  "eyebrow": "O trabalho",
  "heading": "Gêmeos Digitais de Operações",
  "lead": [
    "Estes são os trabalhos operacionais para os quais o Runink FACE foi feito. Em cada um, as evidências já estão nos seus sistemas e ninguém tem as horas para juntá-las. E cada um termina com uma pessoa aprovando uma ação redigida, não lendo mais um painel.",
    "Estão agrupados pelo momento da operação em que o problema aparece. Cada um abre a página que o explica: o que ele lê, o que ele redige, e as medidas para escrever os seus próprios números."
  ],
  "personas": {
    "eyebrow": "Exclusivo de Enterprise",
    "cards": [
      {
        "name": "Paralegais",
        "accent": "Digitais",
        "body": "Sua mesa de contestações e recuperação. Eles leem as faturas de frete, os comprovantes de entrega e seus acordos de nível de serviço (SLA), reúnem as evidências de cada contestação por falta, avaria ou atraso e a redigem dentro do prazo da transportadora. Uma pessoa da sua equipe aprova cada contestação antes do envio.",
        "focus": "Foco: Contestações e Recuperação"
      },
      {
        "name": "Compradores",
        "accent": "Estatísticos",
        "body": "Sua mesa de planejamento de demanda. Eles testam métodos de previsão com o seu próprio histórico de vendas, ficam com o que melhor o teria previsto e apontam onde a cobertura de estoque não alcança o prazo de reposição. Transferências e pedidos são propostos para aprovação dos seus planejadores.",
        "focus": "Foco: Estoque e Atendimento"
      },
      {
        "name": "Operadores de",
        "accent": "Receita",
        "body": "Sua mesa de auditoria de frete. Eles conferem cada linha de fatura com os contratos negociados e confirmações de tarifa, apontam as taxas que o contrato não sustenta e redigem cada pagamento a menor com suas evidências. Sua equipe financeira decide o que é retido.",
        "focus": "Foco: Finanças e Reconciliação"
      }
    ]
  },
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
        { "page": "compliance", "name": "Dados pessoais e registros de auditoria" }
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
    { "label": "Pagamento Anual (Cerca de 16% Menos)", "value": "yearly" }
  ]
}
{{< /pricing-toggle >}}

{{< pricing-table-1 >}}
{
  "plans": [
    {
      "pill": "NAS MÁQUINAS COMPARTILHADAS DO RUNINK",
      "pill_color": "stone",
      "name": "LICENÇA LITE",
      "subtitle": "PARA EQUIPES DE 1 A 9 PESSOAS",
      "price_color": "stone",
      "price_monthly": "89",
      "price_yearly": "75",
      "price_subtitle": "POR PESSOA, POR MÊS",
      "credits": "18.000 UNIDADES DE COMPUTAÇÃO<br>POR PESSOA POR MÊS",
      "outcome_strategies": [
        {"label": "O QUE DEFINE A CONTA", "value": "Quantas pessoas você licencia, mais as unidades usadas além da cota."},
        {"label": "COMPROMISSO MÍNIMO", "value": "Um mês."},
        {"label": "SE RECUPERARMOS DINHEIRO PARA VOCÊ", "value": "20% do que for recuperado. Nada quando nada é recuperado."},
        {"label": "TAXA DE ATIVAÇÃO AUTOMÁTICA", "value": "De 1% a 3%, nunca mais de $50."}
      ],
      "features": [
        "RODA NAS MÁQUINAS COMPARTILHADAS DO RUNINK, NA SUA VEZ JUNTO COM O TRABALHO DE OUTROS CLIENTES",
        "18.000 UNIDADES POR PESSOA POR MÊS, COMUNS A TODA A EQUIPE",
        "MAIS UNIDADES CONFORME O USO, OU COMPRADAS ANTECIPADAMENTE: 10% A MENOS POR UM MÊS, 20% A MENOS POR UM ANO",
        "ATÉ 900 UNIDADES POR PESSOA POR HORA; O TRABALHO ALÉM DESSE RITMO ESPERA A SUA VEZ"
      ],
      "button": {
        "text": "COMEÇAR COM A LITE",
        "url": "/#contact",
        "style": "outline"
      }
    },
    {
      "pill": "NA SUA PRÓPRIA CONTA NA NUVEM",
      "pill_color": "orange",
      "name": "LICENÇA DEDICADA",
      "subtitle": "PARA 10 PESSOAS OU MAIS",
      "price_color": "orange",
      "price_monthly": "149",
      "price_yearly": "149",
      "price_subtitle": "POR PESSOA, POR MÊS, EM CONTRATO ANUAL",
      "credits": "UNIDADES DE COMPUTAÇÃO ILIMITADAS<br>NA SUA PRÓPRIA NUVEM",
      "outcome_strategies": [
        {"label": "O QUE DEFINE A CONTA", "value": "Quantas pessoas você licencia, mais 1% do que a sua nuvem cobra pelos executores."},
        {"label": "COMPROMISSO MÍNIMO", "value": "Um ano."},
        {"label": "SE RECUPERARMOS DINHEIRO PARA VOCÊ", "value": "20% do que for recuperado. Nada quando nada é recuperado."},
        {"label": "TAXA DE ATIVAÇÃO AUTOMÁTICA", "value": "De 1% a 3%, nunca mais de $50."}
      ],
      "features": [
        "EXECUTORES NO SEU PRÓPRIO PROJETO NO GOOGLE CLOUD, OU NA SUA CONTA DATABRICKS OU SNOWFLAKE",
        "UNIDADES DE COMPUTAÇÃO ILIMITADAS",
        "A SUA NUVEM COBRA A COMPUTAÇÃO DIRETAMENTE DE VOCÊ",
        "O SEU PRÓPRIO ENDEREÇO NA WEB"
      ],
      "button": {
        "text": "FALAR SOBRE A DEDICADA",
        "url": "/#contact",
        "style": "solid"
      }
    },
    {
      "pill": "NAS SUAS INSTALAÇÕES OU NA SUA NUVEM",
      "pill_color": "stone",
      "name": "LICENÇA ENTERPRISE",
      "subtitle": "PARA RODAR ONDE VOCÊ ESCOLHER",
      "price_monthly": "CUSTOM",
      "price_yearly": "CUSTOM",
      "price_subtitle": "PREÇO DEFINIDO COM VOCÊ",
      "credits": "UNIDADES DE COMPUTAÇÃO ILIMITADAS<br>ONDE VOCÊ RODAR",
      "outcome_strategies": [
        {"label": "O QUE DEFINE A CONTA", "value": "Onde ele roda e os níveis de serviço que você fixa."},
        {"label": "COMPROMISSO MÍNIMO", "value": "Combinado com você."},
        {"label": "SE RECUPERARMOS DINHEIRO PARA VOCÊ", "value": "Combinado com você e escrito no contrato."},
        {"label": "TAXA DE ATIVAÇÃO AUTOMÁTICA", "value": "Combinada com você e escrita no contrato."}
      ],
      "features": [
        "EXECUTORES NOS SEUS PRÓPRIOS SERVIDORES, INCLUSIVE EM LOCAIS FORA DA REDE",
        "OU NA SUA PRÓPRIA CONTA NA NUVEM",
        "UNIDADES DE COMPUTAÇÃO ILIMITADAS",
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
      "answer": "Para as máquinas que a sua licença indica, e para lugar nenhum além disso: as máquinas compartilhadas do Runink na Lite, executores na sua própria conta na nuvem na Dedicada, os seus próprios servidores na Enterprise. Os arquivos de pedido, os papéis de alfândega, as leituras dos sensores e o raciocínio sobre tudo isso ficam lá. Nada vai para um provedor de modelos externo.\n\nEssa é a resposta que uma revisão de segurança pede antes de deixar um fornecedor guardar os dados de pedido dela. E é também por que as três licenças acima se distinguem por onde o trabalho roda: essa é a primeira pergunta que um comprador de um setor regulado tem de resolver."
    },
    {
      "question": "O que eu estou pagando, afinal?",
      "answer": "Assentos. Um **assento** é uma pessoa que usa o Runink FACE. Você conta as pessoas que precisam dele, multiplica pelo preço acima, e isso é a licença.\n\nA licença que você escolhe decide onde o trabalho roda. A **Lite** roda nas máquinas compartilhadas do Runink e inclui Unidades de Computação em cada assento. A **Dedicada** roda em executores na sua própria conta na nuvem, sem limite de unidades: a sua nuvem cobra essa computação diretamente de você, e o Runink acrescenta 1% do que esses executores custam. A **Enterprise** roda nas suas instalações ou na sua própria nuvem, com preço definido com você.\n\nEstes assentos são do FACE. PULSE e Runink TIDE são produtos separados, cada um com sua própria assinatura. Além da licença, as únicas taxas sobre um assento do FACE são as taxas de uso sobre as ações automáticas do FACE, detalhadas acima."
    },
    {
      "question": "O que é uma Unidade de Computação?",
      "answer": "É a forma como o Runink conta o trabalho nas suas máquinas compartilhadas. Cada análise que o Runink executa consome **Unidades de Computação** da sua cota, de modo que o que foi concedido a você e o que você já gastou sejam expressos nos mesmos termos, e os dois números ficam na tela do console em vez de chegarem no fim do mês.\n\nCada assento **Lite** traz 18.000 unidades por mês, comuns a toda a equipe, então uma semana pesada de uma pessoa sai da mesma cota que uma semana tranquila de outra.\n\nNa **Dedicada** e na **Enterprise**, o trabalho roda na sua própria nuvem ou nos seus próprios servidores, e as unidades são ilimitadas."
    },
    {
      "question": "O que acontece se passarmos da cota?",
      "answer": "Na **Licença Lite**, você escolhe como pagar o excedente. As unidades além da cota são cobradas conforme o uso a **$0,10 por 100 unidades**, ou você pode comprá-las antecipadamente: **10% a menos** pelas de um mês, **20% a menos** pelas de um ano. A Dedicada e a Enterprise não têm cota a ultrapassar.\n\nVocê vê o total acumulado no console e pode fixar um orçamento, de modo que a primeira notícia de um mês pesado não seja a fatura."
    },
    {
      "question": "Qual licença serve para nós?",
      "answer": "Decida onde o trabalho deve rodar.\n\nMenos de dez pessoas: a **Licença Lite**. Ela roda nas máquinas compartilhadas do Runink, pelo menor preço, e é a única que pode ser contratada mês a mês, então uma avaliação não exige um compromisso de um ano. Lá, o trabalho espera a sua vez junto com o de outros clientes.\n\nDez ou mais: a **Licença Dedicada** roda em executores no seu próprio projeto no Google Cloud, ou na sua conta Databricks ou Snowflake. Ela custa mais por pessoa que a Lite e traz Unidades de Computação ilimitadas; a sua nuvem cobra a computação de você. Ela é contratada por um ano.\n\nSe o trabalho precisa rodar nos seus próprios servidores, inclusive em locais fora da rede, isso é **Enterprise**, e a conversa começa por onde ele precisa rodar."
    },
    {
      "question": "Precisamos assinar por um ano?",
      "answer": "Só na Dedicada e na Enterprise. A **Licença Lite** pode ser contratada mês a mês por $89 por pessoa, ou por um ano por $75: a mesma diferença, de cerca de 16%, que o seletor acima mostra.\n\nA Dedicada e a Enterprise são contratadas por um ano porque as duas preparam executores para a sua empresa especificamente, na sua própria nuvem ou nos seus próprios servidores."
    },
    {
      "question": "Quanto custa um uso mais intenso?",
      "answer": "Na **Lite**, uma equipe pode usar até 900 unidades por pessoa por hora. O trabalho além desse ritmo espera a sua vez na fila; ele nunca é recusado, e o ritmo em si não custa nada a mais. As unidades além da cota mensal são pagas conforme o uso ou compradas antecipadamente, como explicado acima.\n\nNa **Dedicada**, as unidades são ilimitadas: um uso mais intenso aparece na fatura da sua própria nuvem como a computação usada, mais 1% disso para o Runink. Na **Enterprise**, ele roda onde você já roda os seus sistemas.\n\nEm todos os casos, o seu gasto segue decisões que você tomou — quantos assentos e onde o trabalho roda — e não um preço por pergunta."
    }

  ]
}
{{< /faq >}}


---
