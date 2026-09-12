---
title: "Quando a Demanda Vira Antes do Plano"
description: "Um item começa a se mover semanas antes do ponto de pedido. Quando o plano se atualiza, a cobertura já foi, e a diferença é paga em frete aéreo. Isto é sobre ler a virada enquanto ainda é um problema de previsão."
layout: "use_case"
product: "Runink FACE"
badge: "Sinal de Demanda"
date: "2024-05-20T00:00:00Z"
author: "Runink"
---

{{< section-container class="py-8" >}}
<div class="max-w-5xl mx-auto px-4">

<h2 id="em-resumo" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6 mt-8">Em Resumo</h2>
<ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6 mb-8">
<li><strong class="text-stone-200">A estação e a tendência são separadas.</strong> O seu próprio histórico é decomposto na tendência de fundo, na forma estacional que se repete e no que sobra. É no que sobra que uma virada aparece primeiro.</li>
<li><strong class="text-stone-200">A previsão diz qual método a produziu, e por que aquele.</strong> Modelos que competem entre si são testados contra períodos que o seu histórico já contém, e o que previu melhor esses períodos é o que é usado. A resposta leva o nome do método que ganhou.</li>
<li><strong class="text-stone-200">Uma série que ele não consegue ajustar é recusada, não ajustada de qualquer jeito.</strong> Períodos de menos, ou nenhum modelo que se sustente, e a resposta diz isso. Ela não volta como uma linha de aparência confiante sem nada por baixo.</li>
</ul>

<p class="mb-12">
    <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-stone-600 text-stone-400 text-[10px] font-black uppercase tracking-[0.25em]">
        <span class="inline-block w-2 h-2 rounded-full border border-stone-400"></span>Hipotético
    </span>
    <span class="block mt-3 text-sm text-stone-500 font-medium">
        Esta página descreve um mecanismo e o formato de uma semana de trabalho, não um acontecimento que aconteceu. É uma ilustração, e nenhuma parte dela foi executada contra os dados de um cliente. Nada aqui é medido, e não há números sobre o que ela devolve.
    </span>
</p>

    <div class="text-center mb-16">
        <h2 id="o-sinal-virou-antes-do-plano" class="text-5xl md:text-6xl font-black !text-white text-white drop-shadow-md italic tracking-tighter uppercase mb-6">O Sinal Virou Antes Do Plano.</h2>
        <p class="text-xl text-stone-400 font-bold leading-relaxed">
            Um item começa a se mover muito antes de o ponto de pedido se mover. O vão entre essas duas datas é o problema todo, e normalmente já está decidido quando alguém é avisado.
        </p>
    </div>

    <div class="flex flex-col gap-12 mb-20">
        <div>
            <h2 id="onde-isso-da-errado" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Onde Isso Dá Errado</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                O plano de demanda é reconstruído por ciclos. Alguém exporta o histórico de vendas, aplica as premissas do ciclo anterior, discute as exceções numa reunião e carrega o resultado de volta. É um trabalho cuidadoso e é um trabalho honesto, e descreve um mês que já acabou.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Enquanto isso, um item vira. Não de forma dramática — um pico estacional chegando antes, uma promoção que se manteve depois que a promoção acabou, uma região que desceu um degrau sem ninguém notar e ficou lá. Nenhuma dessas coisas cruza um limite, porque o nível continua dentro da faixa. Elas só ficam visíveis quando se separa a estação da tendência, e ninguém tem a tarde livre para fazer isso item por item.
            </p>
            <p class="text-lg text-stone-400 font-medium font-semibold text-signal tracking-wide font-bold text-sm">
                A previsão já estava errada semanas antes de o estoque acabar.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Existe uma versão pior. Um planejador que já se queimou para de confiar no número e carrega estoque extra em tudo, o que é caro e invisível. Um planejador que ainda não se queimou confia por completo, e descobre de uma vez. Nenhum dos dois recebeu nada que dissesse quanto se podia confiar na previsão, então os dois estavam adivinhando sobre um palpite.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                Este é o problema do planejador de demanda e do responsável de S&amp;OP, e chega ao planejador de suprimentos como a emergência de outra pessoa.
            </p>
        </div>
        <div>
            <h2 id="o-que-acontece-no-lugar" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">O Que Acontece No Lugar</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Cada série é desmontada antes de ser projetada. A tendência por baixo, a forma estacional que se repete e o resíduo — o que a série fez que nenhuma das duas explica. Uma virada aparece primeiro no resíduo, e é por isso que o resíduo é relatado em vez de descartado.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                A série também é testada, para começar, para ver se é estável o suficiente para ser modelada: o teste é nomeado e a estatística é mostrada ao lado do limite contra o qual foi comparada. Se ela está derivando, é diferenciada antes de qualquer ajuste, e o fato de que foi preciso fazer isso é declarado. Não se pede que você aceite a projeção por fé; mostra-se a conta que levou a projetá-la daquele jeito.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Depois, mais de um método é testado. Uma decomposição estacional e um modelo autorregressivo clássico produzem cada um uma previsão, e os dois são pontuados voltando o relógio e pedindo a eles que prevejam períodos que o seu próprio histórico já contém. O que previu melhor esses períodos é o que você recebe, e ele chega etiquetado com qual foi e com o fato de ter sido escolhido assim. Quando nenhum se sustenta, um método de reserva simples é usado, e a resposta diz que é um método de reserva.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Uma série com histórico de menos é recusada. Ela volta dizendo que não há períodos suficientes para modelar, o que é uma resposta mais útil do que uma linha traçada por quatro pontos.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Isto é o sinal, não a resposta. O que comprar, quanta cobertura manter e qual fornecedor ainda consegue cumprir a data é o trabalho seguinte, e está descrito em <a href="/pt/use-cases/fulfillment-optimization/">cobertura de estoque e planejamento de fornecedores</a>. A previsão diz que o item virou e com quanta confiança; o abastecimento decide o que fazer a respeito. Mantê-los separados é de propósito, porque as duas coisas são discutidas por pessoas diferentes.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                O que chega a uma pessoa é uma coisa só: este item, a virada, o método por trás dela, os períodos sobre os quais foi testada, e uma mudança redigida no plano. Uma pessoa com nome aprova, edita ou recusa, e essa decisão fica anotada. Aprovar é o que envia — e onde um passo por trás disso ainda não tem nada implementado, sendo uma escrita no seu sistema de planejamento o exemplo honesto, a resposta nomeia esse passo como não executado em vez de relatar a mudança como feita. A decisão e a execução são anotadas como dois fatos diferentes, porque são. Roda em máquinas suas, e o histórico nunca sai delas.
            </p>
        </div>
        <div>
            <h2 id="quem-cuida-disso" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Quem Cuida Disso</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Três mesas, e o que cada uma tem na mão hoje.
            </p>
            <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">O planejador de demanda.</strong> Hoje ele exporta o histórico de vendas, aplica as premissas do ciclo anterior, discute as exceções e carrega o resultado de volta. É trabalho cuidadoso, e descreve um mês que já acabou. O que muda é que cada série é desmontada antes &mdash; a tendência, o desenho sazonal que se repete e o resíduo onde uma virada aparece &mdash; e a projeção chega com o nome do método que a produziu.</li>
                <li><strong class="text-stone-200">O responsável pelo S&amp;OP</strong>, a reunião em que o plano é fechado. Hoje essa reunião discute exceções sem nada em cima da mesa que diga até onde a previsão pode ser levada a sério. O que muda é que a conta é mostrada: a estatística do teste ao lado do limiar com que foi comparada, se a série precisou ser diferenciada, e sobre quantos períodos o método vencedor foi pontuado.</li>
                <li><strong class="text-stone-200">O planejador de suprimentos.</strong> Hoje isso chega até ele como a emergência de outra pessoa, semanas depois de a série virar. O que muda é que chega um item só a uma pessoa: este item, a virada, o método por trás, os períodos sobre os quais foi testado, e uma mudança de plano redigida.</li>
            </ul>
        </div>
        <div class="bg-sheet p-8 rounded-lg border border-stone-800/80 shadow-2xl">
             <h3 id="como-voce-vai-saber-que-funcionou" class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-signal-fill to-signal-fill-hover mb-4 tracking-tighter uppercase italic drop-shadow-lg">Como Você Vai Saber Que Funcionou</h3>
             <p class="text-lg text-stone-400 font-medium mb-6">
                Todo número abaixo é seu, não nosso. Não estamos oferecendo os nossos, porque não temos os seus. Anote onde você está hoje, porque a linha de base se perde para sempre no momento em que as coisas melhoram.
             </p>
             <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">Erro de previsão, por item, contra o que de fato vendeu.</strong> Tirado do seu sistema de planejamento. Pegue um ano inteiro, porque os itens estacionais e os itens estáveis erram de formas diferentes. A questão não é o erro cair. A questão é ele ser declarado por item em vez de ser diluído numa média única e reconfortante.</li>
                <li><strong class="text-stone-200">Quantos períodos passam entre um item virar e o plano mudar.</strong> Escolha um punhado de itens que deram errado no ano passado. Ache a semana em que a série de fato virou, e depois a semana em que o plano foi revisado. Esse vão é para o que isto serve.</li>
                <li><strong class="text-stone-200">Quantos itens são previstos à mão, e por quem.</strong> A maior parte das equipes tem um conjunto de itens que uma pessoa só carrega na cabeça. Conte. Esse é o seu risco de concentração, e normalmente é novidade para alguém.</li>
                <li><strong class="text-stone-200">Quais itens você não conseguiu prever de jeito nenhum.</strong> Itens novos, históricos curtos, itens substituídos no meio do ano. Escreva a lista antes de começar, porque um sistema que admite não conseguir prever esses só é uma melhoria se você já soubesse quais eram.</li>
             </ul>
             <p class="text-sm text-stone-500 font-bold uppercase tracking-widest text-xs mt-6 text-center">Traga um ano de histórico semanal de uma família de produtos, e o seu erro de previsão atual por item.</p>
        </div>
    </div>

{{< faq >}}
{
  "title": "Perguntas De Um Planejador De Demanda",
  "description": "O que se pergunta antes de alguém falar em contrato.",
  "questions": [
    {
      "question": "Como ele escolhe um método de previsão?",
      "answer": "Por disputa, sobre o seu próprio histórico. Uma decomposição sazonal e um modelo autorregressivo clássico produzem cada um uma previsão, e os dois são pontuados voltando o relógio e pedindo que prevejam períodos que o seu histórico já contém. O que melhor previu aqueles períodos é o que você recebe, e ele chega etiquetado com qual foi. Quando nenhum se sustenta, usa-se um método de reserva simples e a resposta diz que é de reserva."
    },
    {
      "question": "O que acontece com um item que ele não consegue prever?",
      "answer": "Ele volta dizendo que não há períodos suficientes para modelá-lo. Essa é uma resposta mais útil do que uma reta traçada sobre quatro pontos, e entrega a você a lista de itens que são conduzidos por julgamento e não por previsão &mdash; e essa lista vale a pena escrever antes de qualquer outra coisa mudar."
    },
    {
      "question": "O nosso histórico de vendas sai do prédio?",
      "answer": "Roda em máquinas suas, e o histórico nunca sai delas. A decomposição, o teste de estabilidade, o ajuste dos modelos e a pontuação acontecem todos ali."
    },
    {
      "question": "Quem muda o plano?",
      "answer": "Uma pessoa nomeada. O achado chega como uma mudança redigida para alguém aprovar, editar ou recusar, e essa decisão fica no registro. Aprovar é o que envia, e onde uma etapa por trás ainda não tem nada implementado &mdash; uma escrita no seu sistema de planejamento é o exemplo honesto &mdash; a resposta nomeia aquela etapa como não executada. A decisão e a execução ficam registradas como dois fatos diferentes, porque são."
    },
    {
      "question": "Por que o resíduo é reportado em vez de descartado?",
      "answer": "Porque uma virada aparece primeiro no resíduo. Uma série é desmontada em três pedaços: a tendência por baixo dela, o desenho sazonal que se repete, e o resíduo, que é o que a série fez e nenhum dos outros dois explica. Um pico que chega adiantado, uma promoção que se sustentou depois de a promoção acabar, uma região que desceu um degrau em silêncio e ficou ali: nenhuma dessas coisas cruza um limiar, e todas estão nesse terceiro pedaço."
    },
    {
      "question": "O que devemos levar para uma primeira conversa?",
      "answer": "Um ano de histórico semanal de uma família de produtos, e o seu erro de previsão atual por item. Um ano inteiro e não uma temporada, porque os itens sazonais e os itens estáveis falham de jeitos diferentes e uma janela curta esconde um dos dois."
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
