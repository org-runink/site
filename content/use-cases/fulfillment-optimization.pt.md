---
title: "Cobertura de Estoque e Planejamento de Fornecedores"
description: "A maior parte dos avisos de falta chega depois que o estoque de segurança já acabou, o que deixa você pagando frete aéreo. A ideia é enxergar isso enquanto ainda dá para comprar no ritmo normal."
layout: "use_case"
product: "Runink FACE"
scenario: "inventory fulfillment"
badge: "Otimização de Logística"
badgeColor: "#0ea5e9"
date: "2024-05-20T00:00:00Z"
author: "Runink"
---

{{< section-container class="py-8" >}}
<div class="max-w-5xl mx-auto px-4">

<p class="text-[10px] font-black uppercase tracking-[0.25em] text-stone-500 mt-4 mb-3">Runink FACE &middot; Cobertura de estoque</p>
<p class="text-sm text-stone-500 font-medium mb-10 max-w-3xl">
este é um cenário do <strong class="text-stone-300">Runink FACE</strong>, o lado de abastecimento dele. O que vem a seguir é o que o produto foi feito para fazer e como ele rodaria contra os seus próprios registros. É uma ilustração do mecanismo, não o relato de uma implantação. <a href="/blog/whitepapers/runink-face/" class="underline decoration-stone-700 hover:text-stone-300">O que é o FACE</a>.
</p>

<h2 id="em-resumo" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6 mt-8">Em Resumo</h2>
<ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6 mb-12">
<li><strong class="text-stone-200">O aviso diz qual limite foi cruzado, em palavras.</strong> O ponto de pedido, o mínimo e o máximo são os que você já usa: o FACE não os inventa e não os deduz de um prazo de entrega que ele nunca viu. O que ele devolve é o limite que foi cruzado e o nível que cruzou, por escrito, para que o aviso possa ser discutido em vez de apenas recebido.</li>
<li><strong class="text-stone-200">A previsão diz o quanto confiar nela.</strong> Toda projeção nomeia o modelo &mdash; escolhido separando o trecho mais recente do seu próprio histórico e reajustando cada candidato sobre o que veio antes dele &mdash; e quantos períodos ele teve para aprender. Quando o histórico de um item não prevê a si mesmo, isso também é um dos achados.</li>
<li><strong class="text-stone-200">O aviso de estoque não vem com uma lista curta, e é melhor dizer isso do que sugerir o contrário.</strong> A única ordenação de fornecedores que existe no FACE ordena nomes pelas estrelas de avaliações públicas, tiradas de um arquivo de amostra semeado, e o que ela alimenta é um cartão de RFP de compras, não o aviso de estoque &mdash; e quando nenhum nome avaliado passa do corte, o campo que ela preenche é uma instrução literal para que você mesmo qualifique dois ou três. Numa instância comum, sem nada conectado, nada ordena alternativas para o item exposto: o que o aviso devolve é o limite, o nível que o cruzou e o motivo, e nenhuma lista de fornecedores. O FACE também não guarda tabela de frete, então não há diferença de preço para anexar, e uma inventada seria o número mais citável da página e o menos real.</li>
</ul>

    <div class="text-center mb-16">
        <h2 id="pare-de-descobrir-tarde-demais" class="text-5xl md:text-6xl font-black !text-white text-white drop-shadow-md italic tracking-tighter uppercase mb-6">Pare De Descobrir Tarde Demais.</h2>
        <p class="text-xl text-stone-400 font-bold leading-relaxed">
            Um aviso de falta que chega depois que o estoque de segurança acabou não é um aviso. É uma conta de frete aéreo com poucos dias de antecedência.
        </p>
    </div>

    <div class="flex flex-col gap-12 mb-20">
        <div>
            <h2 id="onde-isso-da-errado" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Onde Isso Dá Errado</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                A maior parte dos alertas de estoque dispara por nível. Quando a cobertura cai abaixo da linha, você é avisado. Só que o fornecedor ainda precisa de duas semanas, e essas duas semanas começaram quando você foi avisado, não quando o problema começou.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Aí a escolha é ruim. Pagar caro para trazer de avião, ou avisar o cliente. As duas foram decididas semanas antes, por uma tendência que esteve visível nos seus próprios dados de venda o tempo todo.
            </p>
            <p class="text-lg text-stone-400 font-medium font-semibold text-signal tracking-wide font-bold text-sm">
                O pedido já estava atrasado antes de alguém saber que estava.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                Há um segundo custo por baixo. Cada etapa da cadeia arredonda para uma caixa cheia e acrescenta uma margem de segurança. No fim, a fábrica produz para uma demanda que nunca existiu. Esse crescimento mora na sequência, espalhado por quatro sistemas, e nenhum deles sozinho mostra isso.
            </p>
        </div>
        <div>
            <h2 id="o-que-acontece-no-lugar" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">O Que Acontece No Lugar</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                O FACE lê o seu próprio histórico de vendas para tirar dele a época do ano e a tendência por baixo, e confere a projeção contra períodos que não foram mostrados a ele. É essa a metade que te diz que um item está virando mais cedo do que o plano pensa.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                O gatilho no estoque em si é de propósito sem graça, e vale dizer o que ele é em vez do que ele parece. O ponto de pedido, o piso e o teto vêm de você. O FACE compara o nível contra eles e devolve o limite que foi cruzado e o nível que cruzou, em palavras simples, e não uma cor num quadradinho. Ele não deduz o limite a partir do prazo de entrega de um fornecedor: não existe modelo de prazo aqui dentro, e um aviso marcado contra um número que o software chutou seria pior do que o alerta de nível que você já tem, porque pareceria mais esperto.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                O que chega é mais estreito do que uma decisão de compra, e a lacuna é a parte que vale nomear. O aviso devolve o limite que foi cruzado, o nível que o cruzou e o motivo, por escrito. Ele não devolve o fornecedor que costuma atender o item, e não devolve alternativas ordenadas &mdash; a única ordenação que existe no produto lê estrelas de avaliação de um arquivo de amostra semeado e as prende a um cartão de RFP de compras, não a isto. Numa instância com os seus próprios sistemas conectados não há aqui lista curta nenhuma até que esse caminho seja construído, e uma lista vazia é a resposta honesta em vez de um exemplo pronto com o seu nome em cima. Também não há comparação de preço a fazer: o FACE não tem tabela de frete, nem tabela de tarifas, nem consulta de tarifa histórica, então a diferença de custo entre dois fornecedores não é coisa que ele possa te dizer &mdash; e uma inventada seria o primeiro número citado de volta para você na reunião.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                A previsão que está por baixo disso é <a href="/use-cases/demand-forecasting/" class="underline decoration-stone-700 hover:text-stone-300">um cenário do FACE por conta própria</a> &mdash; como uma série é lida, qual modelo é escolhido e o que ele diz quando um item simplesmente não é previsível. Esta página é sobre a decisão de compra que sai disso.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                Uma pessoa com nome aprova, edita ou recusa, e esse aval fica no registro. Aprovar é o que manda adiante. E onde uma etapa da ação redigida ainda não tem nada atrás dela &mdash; a gravação no seu ERP é o exemplo honesto &mdash; a resposta nomeia essa etapa como não executada, em vez de dar a coisa inteira por concluída. Você é informado de qual parte da ação aconteceu, e é isso que separa um sistema em que se confia de um sistema que é preciso ir conferir. As margens de segurança passam então a ser discutidas pelos seus próprios números, e não por hierarquia.
            </p>
        </div>
        <div>
            <h2 id="quem-cuida-disso" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Quem Cuida Disso</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Três mesas, e o que cada uma tem na mão hoje.
            </p>
            <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">Responsável pelo planejamento.</strong> Hoje o alerta dispara sobre um nível, e o fornecedor continua precisando de quinze dias que começam quando avisaram você, e não quando o problema começou. O que muda é que a projeção por baixo da decisão é conferida contra períodos que não foram mostrados a ela, e o gatilho diz qual limite foi cruzado e por qual nível, por extenso.</li>
                <li><strong class="text-stone-200">Financeiro e compras.</strong> Hoje o custo de descobrir tarde sai como frete urgente, arquivado sob códigos que ninguém relê. O que muda é que o aviso chega como um limite, um nível e um motivo, e não como uma cor num quadrinho, então a conversa sobre o pedido é sobre um número que alguém consegue conferir.</li>
                <li><strong class="text-stone-200">Diretor de operações.</strong> Hoje cada etapa da cadeia arredonda para a caixa cheia e acrescenta uma margem de segurança, e esse crescimento vive espalhado por quatro sistemas em que nenhum o mostra inteiro. O que muda é que as margens de segurança passam a ser discutidas a partir dos seus próprios números e não por antiguidade.</li>
            </ul>
        </div>
        <div class="bg-sheet p-8 rounded-lg border border-stone-800/80 shadow-2xl">
             <h3 id="como-voce-saberia-que-funcionou" class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-signal-fill to-signal-fill-hover mb-4 tracking-tighter uppercase italic drop-shadow-lg">Como Você Saberia Que Funcionou</h3>
             <p class="text-lg text-stone-400 font-medium mb-6">
                Todo número abaixo é seu, não nosso. Anote onde você está hoje, porque a linha de base se perde para sempre no momento em que qualquer coisa muda.
             </p>
             <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">Quanto você gasta com frete de urgência.</strong> As suas contas a pagar, filtradas pelos códigos que a sua equipe usa para frete aéreo ou expresso. Pegue um ano inteiro, porque isso muda com a época do ano.</li>
                <li><strong class="text-stone-200">Erro de previsão, item por item.</strong> A previsão do seu sistema de planejamento contra o que de fato foi vendido. A ideia não é que o erro caia. É que o erro seja declarado, em vez de suposto.</li>
                <li><strong class="text-stone-200">Dias de cobertura por item.</strong> Quantos dias de estoque cada item carrega, e quanto disso é margem que hoje ninguém sabe explicar.</li>
                <li><strong class="text-stone-200">Pedidos entregues completos e no prazo.</strong> O seu sistema de transporte ou de armazém, medido contra a data e a quantidade prometidas na linha do pedido, mês a mês e por cliente. Algumas das suas falhas são inevitáveis. Olhe as que não são.</li>
             </ul>
             <p class="text-sm text-stone-500 font-bold uppercase tracking-widest text-xs mt-6 text-center">Traga um ano de uma família de produtos e os seus códigos de frete de urgência.</p>
        </div>
    </div>

{{< faq >}}
{
  "title": "Perguntas De Uma Equipe De Planejamento",
  "description": "O que se pergunta antes de alguém falar em contrato.",
  "questions": [
    {
      "question": "De onde vêm os limites?",
      "answer": "De você. O ponto de pedido, o piso e o teto são os que você já usa. O FACE compara o nível com eles e devolve o limite que foi cruzado e o nível que o cruzou. O limite continua sendo seu de propósito: um aviso calibrado contra um prazo de entrega que o software tivesse chutado pareceria mais esperto do que o alerta de nível que você já tem, e valeria menos."
    },
    {
      "question": "O que exatamente o gatilho devolve?",
      "answer": "O limite que foi cruzado, o nível que o cruzou e o motivo, escritos por extenso em vez de mostrados como uma cor num quadrinho. É isso, e está escrito assim para que o aviso possa ser discutido em vez de apenas recebido."
    },
    {
      "question": "Quanto dá para confiar na previsão que está por baixo?",
      "answer": "Toda projeção nomeia o modelo que a produziu e quantos períodos ele teve para aprender. O modelo foi escolhido separando o trecho mais recente do seu próprio histórico e reajustando cada candidato sobre o que vinha antes. Quando o histórico de um item não prevê a si mesmo, isso também é um dos achados."
    },
    {
      "question": "Quem assina o pedido que ele redige?",
      "answer": "Uma pessoa nomeada aprova, edita ou recusa, e essa assinatura fica no registro. Aprovar é o que envia adiante. Onde uma etapa da ação redigida ainda não tem nada por trás &mdash; uma escrita no seu ERP é o exemplo honesto &mdash; a resposta nomeia aquela etapa como não executada em vez de dar o conjunto por feito, então você fica sabendo qual parte da ação aconteceu."
    },
    {
      "question": "Onde está a previsão em si?",
      "answer": "No cenário dela. Como uma série é lida, qual modelo é escolhido e o que ele diz quando um item simplesmente não é previsível está descrito em [previsão de demanda](/pt/use-cases/demand-forecasting/). Esta página é a decisão de compra que vem depois disso, e as duas ficam separadas porque quem discute cada uma é gente diferente."
    },
    {
      "question": "O que devemos levar para uma primeira conversa?",
      "answer": "Um ano de uma família de produtos, e os códigos que a sua equipe usa para frete aéreo ou urgente. Um ano inteiro e não um trimestre, porque o custo de descobrir tarde é sazonal e um trimestre vai favorecer ou condenar você ao acaso."
    }
  ]
}
{{< /faq >}}

    <div class="text-center">
        <a href="{{< contacturl >}}" class="inline-flex items-center justify-center px-10 py-5 text-xs font-black uppercase tracking-widest !text-on-fill text-on-fill drop-shadow-md transition-all duration-300 bg-gradient-to-r from-signal-fill to-signal-fill-hover rounded-xl border border-signal/30 hover:shadow-2xl hover:-translate-y-1">
            Agende uma conversa
        </a>
    </div>
</div>
{{< /section-container >}}
