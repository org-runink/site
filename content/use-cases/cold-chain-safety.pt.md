---
title: "Cadeia de Frio e Segurança no Pátio"
description: "Um contêiner esquenta durante a noite e a leitura fica nos seus dados de sensores até alguém abrir a porta. O lado das câmeras do pátio está construído; o caminho do sensor até o software não está, e esta página diz isso."
layout: "use_case"
product: "Runink FACE"
scenario: "reactive logistics"
standing: "hypothetical"
badge: "Sentinela IoT"
badgeColor: "#3b82f6"
date: "2024-05-20T00:00:00Z"
author: "Runink"
---

{{< section-container class="py-8" >}}
<div class="max-w-5xl mx-auto px-4">

<p class="text-[10px] font-black uppercase tracking-[0.25em] text-stone-500 mt-4 mb-3">Runink FACE &middot; Logística reativa</p>
<p class="text-sm text-stone-500 font-medium mb-10 max-w-3xl">
<span class="rk-mark" data-standing="hypothetical">Hipotético</span> &mdash; este é um cenário do <strong class="text-stone-300">Runink FACE</strong>, o lado de pátio dele. Metade do que vem a seguir está construída e metade não está, e a página diz qual é qual em vez de descrever tudo no presente. É uma ilustração do mecanismo, não o relato de uma implantação. <a href="/blog/whitepapers/runink-face/" class="underline decoration-stone-700 hover:text-stone-300">O que é o FACE</a>.
</p>

<h2 class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6 mt-8">Em Resumo</h2>
<ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6 mb-12">
<li><strong class="text-stone-200">Hoje não existe nenhuma entrada de sensores ao vivo no FACE, e não vamos insinuar que exista.</strong> Os conectores para sistemas de sensores, de etiquetas, de armazém, de pátio e de transporte são peças provisórias que falham de propósito, para que o raciocínio que vem atrás delas possa ser exercitado contra um arquivo de dados semeados enquanto o caminho de verdade é construído. Uma excursão de temperatura nos seus próprios equipamentos não é algo que isto leia ainda.</li>
<li><strong class="text-stone-200">A câmera do pátio é a parte que está construída.</strong> Um quadro que chega de uma câmera de pátio ou de infravermelho é conferido como imagem de verdade antes de qualquer coisa lê-lo, reduzido a um tamanho que um modelo consiga engolir, e lido por um modelo de visão rodando em hardware que você controla. O que volta é uma observação escrita, amarrada ao quadro de que ela saiu.</li>
<li><strong class="text-stone-200">Um aviso é um pedido, não uma trava.</strong> O FACE pode transmitir um aviso &mdash; gira aquela câmera, segura aqueles movimentos de guindaste &mdash; para o que estiver inscrito no fluxo de eventos do pátio. Ele não contata nenhum atuador, não há nenhum controlador de guindaste do outro lado, e o código diz isso com essas mesmas palavras para que uma transmissão nunca possa ser lida como um movimento que foi parado. Se alguém te ofereceu um intertravamento para cargas perigosas, isto não é um.</li>
</ul>

    <div class="text-center mb-16">
        <h1 class="text-5xl md:text-6xl font-black !text-white text-white drop-shadow-md italic tracking-tighter uppercase mb-6">A Leitura Tem Que Chegar Primeiro.</h1>
        <p class="text-xl text-stone-400 font-bold leading-relaxed">
            A leitura que condena uma carga é registrada horas antes de alguém olhar para ela. O problema todo é o vão entre as duas coisas &mdash; e fechar esse vão começa por um caminho do sensor até o software, que é justamente a peça que não construímos.
        </p>
    </div>

    <div class="flex flex-col gap-12 mb-20">
        <div>
            <h2 class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Onde Isso Dá Errado</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Uma unidade de refrigeração começa a falhar numa terça à noite. O sensor registra. Ninguém está olhando nesse horário, e os dados só são olhados quando o contêiner é aberto na outra ponta.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Nessa altura a pergunta já mudou. Não é mais &ldquo;dá para salvar esta carga&rdquo;, é &ldquo;quem paga por ela&rdquo;. Essa pergunta é muito mais cara, e é a única que sobrou.
            </p>
            <p class="text-lg text-stone-400 font-medium font-semibold text-signal tracking-wide font-bold text-sm">
                A leitura estava lá o tempo todo. Ninguém estava lendo.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                O pátio tem um problema do mesmo formato. As regras sobre quais mercadorias podem ficar perto de quais são conhecidas, estão escritas, e são conferidas por uma pessoa que também está fazendo outras quatro coisas.
            </p>
        </div>
        <div>
            <h2 class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">O Que Acontece No Lugar</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Vamos começar pela parte que não está pronta, porque é a parte de que todo o resto depende. A leitura tem que chegar ao FACE antes que nada disso importe, e hoje ela não chega. O conector para um sistema de sensores, de etiquetas, de armazém ou de pátio é uma peça provisória que falha de propósito, para que o raciocínio construído em cima rode, no lugar, contra um arquivo de dados semeados. Numa instância comum, sem nada conectado, a fila está vazia. Antes ela era preenchida com esses exemplos semeados, apresentados como se fossem as suas operações, e isso foi removido em vez de maquiado.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                O que está construído é o lado das câmeras do pátio. Um quadro é validado como imagem de verdade antes de um modelo vê-lo, reduzido a algo que um modelo consiga engolir, e lido por um modelo de visão no seu próprio hardware — então a leitura do pátio acontece onde as imagens já estão, e as imagens não saem para a API de ninguém para serem descritas. A observação volta grudada no quadro de que saiu, e é isso que a torna contestável em vez de afirmada.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Em cima disso, um aviso pode ser transmitido para tudo o que estiver acompanhando o fluxo de eventos do pátio. Vale ser exato quanto a isso, porque a categoria vende a coisa como imposição: a transmissão pede, ela não age. Nenhum atuador é contatado, não existe no processo nenhum controlador de guindaste para contatar um, e o código se recusa a relatar um aviso como se um movimento tivesse acontecido. Essa recusa é a função. Um intertravamento que não pode disparar é pior do que intertravamento nenhum, porque responde &ldquo;isso está resolvido?&rdquo; com um sim cheio de confiança.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                Onde há algo sobre o que agir, aquilo espera como um movimento redigido, e uma pessoa com nome aprova, edita ou recusa, e o aval fica anotado. Aprovar é o que envia. E onde um passo desse movimento não tem nada por trás — uma escrita num sistema de pátio ou de transporte, por exemplo — a resposta nomeia o passo que não aconteceu em vez de relatar sucesso, então &ldquo;aprovado&rdquo; e &ldquo;feito&rdquo; seguem sendo duas palavras diferentes.
            </p>
        </div>
        <div class="bg-sheet p-8 rounded-2xl border border-stone-800/80 shadow-2xl">
             <h3 class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-signal-fill to-signal-fill-hover mb-4 tracking-tighter uppercase italic drop-shadow-lg">Como Você Saberia Que Funcionou</h3>
             <p class="text-lg text-stone-400 font-medium mb-6">
                Todo número abaixo é seu, não nosso. Anote onde você está hoje, porque a linha de base se perde para sempre no momento em que algo muda.
             </p>
             <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">Quanto você baixa de estoque refrigerado e congelado.</strong> A conta de baixas da sua contabilidade e o registro de rejeições de qualidade do mesmo período, com os casos de temperatura separados de todas as outras causas.</li>
                <li><strong class="text-stone-200">Horas da primeira leitura ruim até alguém agir.</strong> Pegue uma amostra dos eventos de temperatura do último trimestre. Anote quando cada um foi registrado, e quando uma pessoa fez algo a respeito pela primeira vez.</li>
                <li><strong class="text-stone-200">Quantos desvios foram pegos enquanto a carga ainda podia ser salva.</strong> Conte como parcela de todos os desvios. Esse é o número em que todo o resto se apoia.</li>
                <li><strong class="text-stone-200">Achados de segurança no pátio.</strong> Os seus próprios registros de inspeção e de incidente, contados por trimestre, separando as regras de segregação de mercadorias de todo o resto.</li>
                <li><strong class="text-stone-200">O que as suas câmeras já gravam e ninguém lê.</strong> Conte as câmeras do pátio, e depois conte quantas horas do que elas gravam são alguma vez olhadas por uma pessoa. Esse é o vão em que o lado de visão disto trabalha, e normalmente é o maior número da lista.</li>
             </ul>
             <p class="text-sm text-stone-500 font-bold uppercase tracking-widest text-xs mt-6 text-center">Traga a sua conta de baixas e um dia de gravação das câmeras do pátio.</p>
        </div>
    </div>

    <div class="text-center">
        <a href="/pt/#contact" class="inline-flex items-center justify-center px-10 py-5 text-xs font-black uppercase tracking-widest !text-on-fill text-on-fill drop-shadow-md transition-all duration-300 bg-gradient-to-r from-signal-fill to-signal-fill-hover rounded-xl border border-signal/30 hover:shadow-2xl hover:-translate-y-1">
            Agende uma conversa
        </a>
    </div>
</div>
{{< /section-container >}}
