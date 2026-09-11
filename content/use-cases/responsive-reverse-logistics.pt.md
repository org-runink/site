---
title: "Devoluções e o Que Fazer Com Elas"
description: "Um item devolvido vale mais no dia em que volta. A decisão de para onde ele vai — prateleira, recondicionamento, reciclagem ou descarte — é redigida na leitura de entrada, a partir de uma política escrita que dá à mesma classificação de estado a mesma resposta todas as vezes."
layout: "use_case"
product: "Runink FACE"
scenario: "reverse logistics"
standing: "hypothetical"
badge: "Economia Circular"
badgeColor: "#14b8a6"
date: "2024-05-20T00:00:00Z"
author: "Runink"
---

{{< section-container class="py-8" >}}
<div class="max-w-5xl mx-auto px-4">

<p class="text-[10px] font-black uppercase tracking-[0.25em] text-stone-500 mt-4 mb-3">Runink FACE &middot; Logística reversa</p>
<p class="text-sm text-stone-500 font-medium mb-10 max-w-3xl">
<span class="rk-mark" data-standing="hypothetical">Hipotético</span> &mdash; este é um cenário do <strong class="text-stone-300">Runink FACE</strong>, o lado de devoluções e economia circular dele. O que vem a seguir é o que o produto foi feito para fazer e como ele rodaria contra os seus próprios registros. É uma ilustração do mecanismo, não o relato de uma implantação. <a href="/blog/whitepapers/runink-face/" class="underline decoration-stone-700 hover:text-stone-300">O que é o FACE</a>.
</p>

<h2 class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6 mt-8">Em Resumo</h2>
<ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6 mb-12">
<li><strong class="text-stone-200">A decisão é redigida na leitura de entrada.</strong> O FACE trabalha com quatro coisas que a doca entrega a ele: o identificador da devolução, o código de barras, a classificação de estado que a pessoa na doca anotou, e o valor do item como ela o digita. Ele não busca nada por trás disso &mdash; nem o pedido, nem a garantia, nem uma tabela de preços &mdash; e responde no momento em que a caixa chega, não na tarde em que alguém consegue chegar até a gaiola.</li>
<li><strong class="text-stone-200">A política está escrita, então a mesma classificação sempre recebe a mesma resposta.</strong> Voltar à prateleira, recondicionar, reciclar, descartar: cada classificação de estado leva a uma dessas saídas e a um de quatro destinos escritos no código, do mesmo jeito todas as vezes, seja quem estiver na doca e seja qual for a fila. Uma classificação que ele não reconhece é recusada, em vez de arquivada sob o melhor palpite.</li>
<li><strong class="text-stone-200">Existe sim uma cifra de recuperação, e ela é aritmética sobre um número que você digita.</strong> A triagem devolve um rendimento de recuperação estimado e um custo de recondicionamento, e os dois são o valor que a doca informou multiplicado por uma fração fixa conforme a classificação: um item impecável rende 95% desse valor e nada de recondicionamento, um danificado rende 75% com um quarto como reparo. Nada é medido e nada é consultado. Preferimos que você conheça o multiplicador a que confie no sinal de dólar.</li>
<li><strong class="text-stone-200">A triagem não decide nada por conta própria.</strong> Ela responde à tela e para ali: não movimenta estoque, não emite nenhum crédito e não guarda nenhuma aprovação. A decisão continua sendo da pessoa na doca, e nada nesta etapa pode tomá-la por ela.</li>
</ul>

    <div class="text-center mb-16">
        <h1 class="text-5xl md:text-6xl font-black !text-white text-white drop-shadow-md italic tracking-tighter uppercase mb-6">Uma Devolução Vale Mais No Primeiro Dia.</h1>
        <p class="text-xl text-stone-400 font-bold leading-relaxed">
            A maior parte do que uma devolução perde, ela perde enquanto espera. Não no reparo, não no frete &mdash; nas semanas em que fica num canto da doca enquanto alguém descobre para onde ela deveria ir.
        </p>
    </div>

    <div class="flex flex-col gap-12 mb-20">
        <div>
            <h2 class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Onde Isso Dá Errado</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Uma caixa volta. Para decidir para onde ela deve ir, alguém precisa saber o que tinha dentro, se ainda está na garantia, em que estado está, quanto renderia agora e quanto um reparo custaria. Isso são quatro sistemas e uma olhada dentro da caixa.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Então a caixa espera. Espera numa gaiola na doca com o resto das devoluções da semana, e a gaiola é separada quando sobra uma tarde. Nesse meio-tempo o cliente espera o reembolso, e o item vai ficando mais velho e valendo menos, em silêncio.
            </p>
            <p class="text-lg text-stone-400 font-medium font-semibold text-signal tracking-wide font-bold text-sm">
                Cada semana que uma devolução espera, ela vale menos do que valia.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                E quando a tarde chega, a separação é feita no olho e por hábito. Mercadoria boa vai para a sucata porque a fila estava grande. Mercadoria quebrada volta para a prateleira e volta dali na hora. Ninguém pretendeu fazer nenhuma das duas coisas.
            </p>
        </div>
        <div>
            <h2 class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">O Que Acontece No Lugar</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                A leitura de entrada é o momento em que o trabalho é feito. A classificação de estado entra junto com a devolução, e uma destinação sai: direto para o centro de devoluções, para fora em recondicionamento, para reciclagem em circuito fechado, ou para descarte de resíduo perigoso onde a classificação exigir. A propriedade útil não é que uma máquina decidiu &mdash; é que a decisão é a mesma todas as vezes. A mesma classificação produz a mesma rota numa terça-feira tranquila e na segunda depois do Natal, que é exatamente quando separar no olho deixa de ser separar.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Uma classificação que ele não reconhece volta como recusa, e não como rota. Isso vale mais do que parece: a falha que isso substitui é uma caixa que recebeu uma destinação de aparência plausível porque algo tinha de ir no campo, e ninguém lá na frente conseguia distinguir aquela resposta de uma de verdade.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Dinheiro volta junto com a destinação, e vale saber exatamente que tipo de número é esse. Ao lado da rota, a triagem devolve um rendimento de recuperação estimado e um custo de recondicionamento, e a cabine imprime os dois como valores em dólar sob esses dois rótulos. Ambos são o valor que alguém digitou na doca multiplicado por uma fração fixa conforme a classificação &mdash; um item impecável a 95% desse valor e nada de recondicionamento, um danificado a 75% com um quarto como reparo, e as demais classificações no mesmo formato. Nenhuma tabela de preços é consultada e nenhuma revenda é observada. A cifra é a aritmética da política sobre o que você informou, e vale exatamente o que aquele dado valia &mdash; o que você pode julgar e nós não.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                O destino é do mesmo tipo, e aqui a palavra honesta é inacabado. É uma de quatro cadeias de texto escritas no código, e duas delas nomeiam locais específicos &mdash; um centro de devoluções e um centro de recondicionamento, ambos na Índia, sem nenhuma relação com qualquer contrato seu. Para qual instalação cada classificação deveria ir é a sua decisão e o seu contrato; o código ainda não lhe dá onde dizer isso. Essa é uma limitação do que está construído hoje, não um princípio de projeto, e é a primeira coisa que uma implantação teria de corrigir.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                A chamada de triagem, por si só, não envia nada. Ela devolve uma destinação e para: nenhum registro de estoque é escrito, nenhum crédito é emitido, nenhuma aprovação é guardada. Agir sobre uma ação redigida é outra parte do FACE, e lá a decisão fica registrada no nome de uma pessoa antes de qualquer coisa rodar; e onde uma etapa atrás disso ainda não tem implementação, sendo a gravação em um ERP o exemplo honesto, a resposta nomeia a etapa que não aconteceu, em vez de dar a movimentação por concluída.
            </p>
        </div>
        <div class="bg-sheet p-8 rounded-2xl border border-stone-800/80 shadow-2xl">
             <h3 class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-signal-fill to-signal-fill-hover mb-4 tracking-tighter uppercase italic drop-shadow-lg">Como Você Saberia Que Funcionou</h3>
             <p class="text-lg text-stone-400 font-medium mb-6">
                Todo número abaixo é seu, não nosso. Anote onde você está hoje, porque a linha de base se perde para sempre no momento em que qualquer coisa muda.
             </p>
             <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">Dias da chegada da caixa até a decisão ser tomada.</strong> Pegue um mês de devoluções. Anote quando cada uma foi registrada na entrada, e quando alguém disse para onde ela ia. O intervalo é tudo.</li>
                <li><strong class="text-stone-200">O que você recuperou, como parcela do que a mercadoria valia.</strong> Das suas notas de crédito e do seu livro de estoque: por quanto a mercadoria devolvida estava registrada, contra o que você recuperou vendendo, consertando ou sucateando.</li>
                <li><strong class="text-stone-200">Para onde as devoluções foram.</strong> Um trimestre delas, dividido entre prateleira, reparo e sucata. Depois pergunte quantas das sucateadas ainda estavam na garantia. A maioria das equipes nunca olhou.</li>
                <li><strong class="text-stone-200">Dias para reembolsar o cliente.</strong> Da abertura da devolução até o crédito cair na conta dele, a partir dos seus próprios registros de faturamento.</li>
             </ul>
             <p class="text-sm text-stone-500 font-bold uppercase tracking-widest text-xs mt-6 text-center">Traga um mês de devoluções e as suas notas de crédito.</p>
        </div>
    </div>

    <div class="text-center">
        <a href="/pt/#contact" class="inline-flex items-center justify-center px-10 py-5 text-xs font-black uppercase tracking-widest !text-on-fill text-on-fill drop-shadow-md transition-all duration-300 bg-gradient-to-r from-signal-fill to-signal-fill-hover rounded-xl border border-signal/30 hover:shadow-2xl hover:-translate-y-1">
            Agende uma conversa
        </a>
    </div>
</div>
{{< /section-container >}}
