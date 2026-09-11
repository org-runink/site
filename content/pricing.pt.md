---
title: "Preços"
description: "Você paga pelo número de pessoas que usam o Runink. Cada pessoa já vem com uma cota de capacidade de computação incluída, então usar mais não aumenta a conta."
layout: "pricing"
date: "2024-05-20T00:00:00Z"
author: "Runink"
---

<div class="max-w-3xl mx-auto text-center mb-4">
  <p class="text-xl text-stone-300 font-medium leading-relaxed mb-6">
    Você paga pelo número de pessoas que usam o Runink. Cada pessoa já vem com uma cota de capacidade de computação incluída no preço.
  </p>
  <p class="text-lg text-stone-400 font-medium leading-relaxed">
    É toda a lógica. A conta acompanha o seu quadro de pessoal, não o seu uso, de modo que uma equipe que usa muito o Runink não abre uma linha de despesa que cresce junto. As três licenças abaixo se diferenciam por uma única pergunta: quantas pessoas precisam dele e em qual máquina ele roda.
  </p>
</div>

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

<div class="py-12"></div>

{{< enterprise-a2a >}}
{{< faq >}}
{
  "title": "Como Funciona A Conta",
  "description": "O que é cobrado, na ordem em que uma equipe financeira costuma perguntar.",
  "questions": [
    {
      "question": "O que eu estou pagando, afinal?",
      "answer": "Assentos. Um **assento** é uma pessoa que usa o Runink. Você conta as pessoas que precisam dele, multiplica pelo preço acima, e isso é a licença.<br><br>Cada assento também vem com uma cota de capacidade de computação: o tempo de máquina que o Runink usa para ler seus documentos, conferir seus registros e redigir o trabalho. Essa cota está incluída no preço do assento. Você não é cobrado por pergunta, por documento nem por relatório."
    },
    {
      "question": "O que é uma Unidade de Computação?",
      "answer": "É o medidor do tempo de máquina, assim como o quilowatt-hora é o medidor da eletricidade. O Runink mede a capacidade em **Unidades de Computação** para que o que foi concedido a você e o que você já gastou sejam expressos nos mesmos termos, e os dois números ficam na tela do console em vez de chegarem no fim do mês.<br><br>Cada assento **Dedicado** traz 1.000 unidades, e sua organização recebe mais 2.000 unidades a cada 10 assentos contratados. Essas unidades são comuns a todos, então uma semana pesada de uma pessoa sai da mesma cota que uma semana tranquila de outra."
    },
    {
      "question": "O que acontece se passarmos da cota?",
      "answer": "A capacidade adicional é cobrada a **$0,10 por 100 unidades**, ou **$5,00 por hora de máquina**. Na prática, essa linha fica vazia no trabalho comum do dia a dia e aparece quando você roda algo muito grande de uma vez só: reprocessar um ano de documentos em uma tarde, por exemplo.<br><br>Você vê o total acumulado no console e pode fixar um orçamento, de modo que a primeira notícia de um mês pesado não seja a fatura."
    },
    {
      "question": "Qual licença serve para nós?",
      "answer": "Conte primeiro as suas pessoas.<br><br>Menos de dez: a **Licença Lite**. Ela roda em uma máquina compartilhada com outros clientes e é a única que pode ser contratada mês a mês, então uma avaliação não exige um compromisso de um ano.<br><br>Dez ou mais: a **Licença Dedicada** custa menos por pessoa e roda em máquinas reservadas só para a sua empresa, com o seu próprio endereço na web e prioridade sobre a capacidade que você paga. Ela é contratada por um ano.<br><br>Se as suas informações não podem sair do seu próprio prédio, isso é **Enterprise**, e a conversa começa por onde ele precisa rodar."
    },
    {
      "question": "Precisamos assinar por um ano?",
      "answer": "Só na Dedicada e na Enterprise. A **Licença Lite** pode ser contratada mês a mês por $86 por pessoa, ou por um ano por $75: a mesma diferença de 15% que o seletor acima mostra.<br><br>A Dedicada e a Enterprise são contratadas por um ano porque as duas envolvem separar máquinas para a sua empresa especificamente, e essa capacidade fica reservada quer você a use ou não em uma dada semana."
    },
    {
      "question": "Por que usar mais não custa mais?",
      "answer": "Porque o raciocínio roda em hardware, e não em um serviço de terceiros com medidor. O custo de uma pergunta é a eletricidade para respondê-la.<br><br>A consequência prática é orçamentária. Seu gasto depende da capacidade que você mantém, decidida uma vez, e não de um número que se mexe conforme quantas perguntas a sua equipe fez no mês passado. Uma equipe que usa muito o Runink não descobre um custo que cresce junto com esse sucesso."
    }
  ]
}
{{< /faq >}}


---



<!-- Seção de FAQ gerada para E-A-T & GEO -->
<section class="faq-section mt-16 p-8 bg-sunk rounded-3xl border border-stone-800/80 shadow-2xl relative z-10">
  <div class="flex items-center gap-4 mb-8">
    <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-signal-fill to-signal-fill-hover flex items-center justify-center shadow-lg">
      <span class="material-symbols-outlined text-white">help_center</span>
    </div>
    <h2 class="text-3xl font-black text-white uppercase italic tracking-tight m-0">Perguntas Frequentes</h2>
  </div>
  <div class="space-y-6">
    <div class="faq-item p-6 bg-stone-900 rounded-xl border border-stone-800/50 hover:border-signal/30 transition-colors">
      <h3 class="text-xl font-bold text-stone-200 mb-4">O que devemos orçar além da licença em si?</h3>
      <p class="text-stone-400 leading-relaxed">A licença é uma linha do custo. Antes de assinar, coloque números em mais quatro. Primeiro, conectar o Runink aos sistemas que você já usa: o sistema financeiro, o de transporte ou de armazém, e o lugar onde ficam os seus documentos. Segundo, mover o histórico que você quer que ele leia. Terceiro, as horas que a sua própria equipe gasta aprendendo a usá-lo e mudando a forma de trabalhar, que costuma ser a linha esquecida. Quarto, as máquinas. Nas licenças Lite e Dedicada elas são nossas; na Enterprise são suas, e vale colocar preço no hardware e nas pessoas que o mantêm funcionando. O que você não deveria precisar orçar é uma conta que se mexe conforme o quanto a sua equipe usa o software. Esse é o sentido de cobrar por assento.</p>
    </div>
    <div class="faq-item p-6 bg-stone-900 rounded-xl border border-stone-800/50 hover:border-signal/30 transition-colors">
      <h3 class="text-xl font-bold text-stone-200 mb-4">Como funciona o preço se tivermos que hospedar por conta própria?</h3>
      <p class="text-stone-400 leading-relaxed">Isso é a licença Enterprise, e o preço é definido com você em vez de sair de uma tabela. Ela cobre implantações nas suas próprias instalações, incluindo sedes mantidas totalmente fora da rede, e máquinas colocadas perto de onde o trabalho acontece. Os termos que as pessoas costumam querer por escrito são os níveis de serviço, quem pode ver o quê, e o registro guardado de quem fez o quê. Traga a restrição que motiva tudo isso — o regulador, a cláusula do contrato ou a revisão de segurança que vive travando — e a conversa começa por aí, e não por uma lista de funcionalidades.</p>
    </div>
    <div class="faq-item p-6 bg-stone-900 rounded-xl border border-stone-800/50 hover:border-signal/30 transition-colors">
      <h3 class="text-xl font-bold text-stone-200 mb-4">Para onde vão os nossos dados?</h3>
      <p class="text-stone-400 leading-relaxed">Para uma máquina que você controla, e é lá que eles ficam. Os documentos, os registros e o raciocínio sobre eles rodam em hardware dentro do seu perímetro, e nada é enviado a um provedor de modelos externo. Isso importa tanto no comercial quanto no técnico. A pergunta que trava esse tipo de compra costuma ser alguma versão de "para onde vão as nossas informações", e aqui a resposta é curta o bastante para passar por um questionário de compras. Na Lite e na Dedicada a máquina é operada por nós; na Enterprise ela é sua. Em nenhum dos dois casos há um terceiro no caminho guardando os seus dados.</p>
    </div>
  </div>
</section>
