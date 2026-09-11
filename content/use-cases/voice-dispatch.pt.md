---
title: "Falar com os Motoristas sem Tela"
description: "Quem sabe que uma carga está atrasada é justamente quem não pode digitar. Perguntar e responder em voz alta coloca o fato no registro enquanto o caminhão segue andando, e a mudança continua sendo feita pela mesa de despacho."
layout: "use_case"
product: "Runink FACE"
scenario: "reactive logistics"
standing: "hypothetical"
badge: "Despacho por Voz com IA"
badgeColor: "#f59e0b"
date: "2024-05-20T00:00:00Z"
author: "Runink"
---

{{< section-container class="py-8" >}}
<div class="max-w-5xl mx-auto px-4">

<p class="text-[10px] font-black uppercase tracking-[0.25em] text-stone-500 mt-4 mb-3">Runink FACE &middot; Logística reativa, voltada ao motorista</p>
<p class="text-sm text-stone-500 font-medium mb-10 max-w-3xl">
<span class="rk-mark" data-standing="hypothetical">Hipotético</span> &mdash; este é um cenário do <strong class="text-stone-300">Runink FACE</strong>, o lado voltado ao motorista. O que vem a seguir é o que o produto foi feito para fazer e como ele rodaria contra os registros da sua própria frota. É uma ilustração do mecanismo, não o relato de uma implantação. <a href="/blog/whitepapers/runink-face/" class="underline decoration-stone-700 hover:text-stone-300">O que é o FACE</a>.
</p>

<h2 class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6 mt-8">Em Resumo</h2>
<ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6 mb-12">
<li><strong class="text-stone-200">O motorista pergunta em voz alta e ouve a resposta.</strong> Onde é a próxima parada, o que o cliente pediu, qual portão usar. Nenhuma tela para ler e nenhum motivo para encostar. Cada resposta da conversa é sintetizada dentro do próprio processo do FACE, a partir de uma voz embutida no binário, e a fala que entra vai para o servidor de modelos que você já roda &mdash; o único endpoint de inferência para o qual você aponta o FACE, carregando um modelo capaz de áudio &mdash; e não para uma API de voz operada por outra pessoa. Duas ressalvas, ditas e não escondidas: esse endpoint é um que você configura, não uma recusa de chamar para fora escrita no código, e o aviso de gravação e a saudação que abrem a ligação são falados pela voz do próprio provedor de telefonia, porque são lidos das instruções de abertura da ligação antes de o canal para as suas máquinas estar aberto.</li>
<li><strong class="text-stone-200">É uma ligação telefônica, então ela vai pela rede de telefonia.</strong> Vale dizer isso com clareza em vez de esconder. O trecho entre a cabine e o prédio é carregado por um provedor de telefonia, igual a qualquer outra ligação que os seus motoristas fazem. O que esse provedor nunca recebe é o texto: a transcrição, e o raciocínio que produz a resposta, acontecem nas suas máquinas, e a resposta falada é codificada lá também. Ele carrega esse áudio, como tem que carregar, e a voz dele mesmo lê o aviso de gravação e a saudação antes de o canal para as suas máquinas abrir.</li>
<li><strong class="text-stone-200">O que a ligação produz é uma transcrição, não um item no quadro.</strong> Os dois lados da conversa são escritos no log da ligação, falante por falante, então a hora perdida no portão fica registrada no momento em que é dita. O que um turno de voz não pode fazer é gravar no seu sistema de despacho ou de transporte &mdash; não existe caminho de ação da ligação para os seus registros. Uma palavra urgente na ligação também não levanta nada: o caminho do telefone escreve a linha e para ali. O escalonamento por palavra urgente existe no FACE, mas do lado do WhatsApp e do SMS, onde uma mensagem recebida que casa com uma lista curta de palavras-chave é encaminhada para um número de responsável configurado. No telefone, continua sendo alguém com nome na mesa, lendo o registro, que transforma isso em uma mudança.</li>
</ul>

    <div class="text-center mb-16">
        <h1 class="text-5xl md:text-6xl font-black !text-white text-white drop-shadow-md italic tracking-tighter uppercase mb-6">As Mãos No Volante.</h1>
        <p class="text-xl text-stone-400 font-bold leading-relaxed">
            Um motorista que precisa ler uma tela para responder a uma pergunta ou encosta o caminhão, ou lê em movimento. O primeiro caso te custa a hora. O segundo te custa muito mais, um dia.
        </p>
    </div>

    <div class="flex flex-col gap-12 mb-20">
        <div>
            <h2 class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Onde Isso Dá Errado</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Uma carga está atrasada. O motorista sabe uma hora antes de todo mundo, e o escritório descobre por último. Para avisar, o motorista tem que encostar e digitar, ou digitar em movimento. Na maioria dos dias, isso simplesmente espera a próxima parada.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                No sentido inverso funciona igual. A mesa tem uma mudança e precisa ligar para todos para encaixá-la, um caminhão por vez, esperando que cada um consiga atender. Metade das ligações cai na caixa postal e é refeita vinte minutos depois.
            </p>
            <p class="text-lg text-stone-400 font-medium font-semibold text-signal tracking-wide font-bold text-sm">
                Quem sabe primeiro é quem não pode digitar.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                Então o dia é escrito no fim do dia, de memória, quando é escrito. O pneu que precisava de ar, a hora perdida num portão, a entrega que foi recusada &mdash; depois de oito horas o detalhe fica ralo, e a hora no portão é justamente a que você nunca cobra.
            </p>
        </div>
        <div>
            <h2 class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">O Que Acontece No Lugar</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                O motorista fala e o FACE responde. Onde é a minha próxima parada. Qual portão. É perguntado em voz alta e volta em voz alta, então os olhos ficam na estrada e as mãos ficam onde estavam. A ligação em si é uma ligação telefônica comum e pega um provedor de telefonia para chegar; o canal de áudio que entra no prédio é autenticado, e tudo o que acontece depois que ele chega acontece nas suas máquinas. A fala é transformada em texto pelo servidor de modelos que você roda &mdash; o mesmo e único endpoint de inferência configurável pelo qual o resto do FACE raciocina, carregando um modelo capaz de áudio, e não uma API de voz com contrato próprio &mdash; e cada resposta da conversa é falada por um sintetizador que roda no mesmo processo que o resto do FACE, a partir de uma voz embutida no binário. Nenhuma transcrição acaba na conta de outra pessoa. Duas ressalvas cabem na mesma frase, não numa nota de pé. O aviso de gravação e a saudação que abrem a ligação são falados pela voz do próprio provedor, porque são lidos das instruções de abertura da ligação antes de o canal para o seu prédio existir. E o endpoint de transcrição é um que você configura, então para onde ele aponta é coisa que se confere numa revisão, não coisa que um teste garante.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                O que a ligação deixa atrás de si é a própria conversa, escrita conforme acontece: cada turno, quem disse, contra a ligação a que pertence. A hora no portão fica no registro no portão, e não reconstruída às seis da tarde. Nada na ligação avisa ninguém, e esse limite fica ao lado do benefício em vez de depois dele. O caminho do telefone escreve a linha e para ali: ele não vigia se há uma palavra urgente e não notifica ninguém. O escalonamento que de fato existe é do lado do texto: um WhatsApp ou um SMS recebido cuja redação casa com uma lista curta de palavras-chave é encaminhado para um número de responsável configurado, e todo caminho que termina sem que ninguém seja avisado fica registrado exatamente como isso e não como sucesso. A ligação põe o fato no registro poucos minutos depois de acontecer; alguém tem que estar lendo o registro.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Aqui está a linha, e ela importa mais do que a lista de funções. Um turno de voz não grava nos seus sistemas. Ele não cria o registro de atraso, não atualiza a entrega e não move a parada &mdash; não existe caminho da ligação para o seu sistema de transporte, e um produto que te dissesse o contrário estaria descrevendo uma integração que não construiu. O que a ligação faz é tirar o fato da cabine e colocá-lo no registro enquanto ele ainda está correto. Uma pessoa na mesa lê e faz a mudança.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                Mais uma recusa, porque é do tipo que normalmente fica escondido. Em outras partes do FACE você pode anexar um recado de voz a uma conversa, e esse anexo não é transcrito. Em vez de deixar o modelo improvisar em volta, é dito ao modelo sem rodeios que um anexo de áudio chegou, que o conteúdo dele é desconhecido e que ele não deve chutar o que foi dito &mdash; e ele é instruído a te avisar que o áudio não foi processado. Um sistema que não consegue ouvir algo e diz isso vale mais do que um que preenche o buraco.
            </p>
        </div>
        <div class="bg-sheet p-8 rounded-2xl border border-stone-800/80 shadow-2xl">
             <h3 class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-signal-fill to-signal-fill-hover mb-4 tracking-tighter uppercase italic drop-shadow-lg">Como Você Saberia Que Funcionou</h3>
             <p class="text-lg text-stone-400 font-medium mb-6">
                Todo número abaixo é seu, não nosso. Anote onde você está hoje, porque a linha de base se perde para sempre no momento em que qualquer coisa muda.
             </p>
             <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">Tempo que os caminhões passam parados sem entrega.</strong> Os seus veículos já mandam onde estão e quando o motor é desligado. Pegue uma semana disso, tire as paradas que casam com uma entrega, e olhe o que sobra.</li>
                <li><strong class="text-stone-200">Minutos entre o problema acontecer e a mesa saber.</strong> Pegue uma amostra de um mês de rotas atrasadas e entregas recusadas. Quando aconteceu, e quando a primeira mensagem sobre isso chegou ao escritório.</li>
                <li><strong class="text-stone-200">Tempo de espera em portões e em locais de entrega, e quanto disso você cobra.</strong> Dos seus próprios registros de serviço e das suas faturas. Na maioria das frotas as horas são reais e só algumas estão escritas.</li>
                <li><strong class="text-stone-200">Quanto do log do dia é escrito na estrada.</strong> Conte as notas e os alertas levantados durante o turno contra os levantados depois que ele terminou. É nesse que todo o resto se apoia.</li>
             </ul>
             <p class="text-sm text-stone-500 font-bold uppercase tracking-widest text-xs mt-6 text-center">Traga uma base e uma semana de dados de rastreamento de veículos.</p>
        </div>
    </div>

    <div class="text-center">
        <a href="/pt/#contact" class="inline-flex items-center justify-center px-10 py-5 text-xs font-black uppercase tracking-widest !text-on-fill text-on-fill drop-shadow-md transition-all duration-300 bg-gradient-to-r from-signal-fill to-signal-fill-hover rounded-xl border border-signal/30 hover:shadow-2xl hover:-translate-y-1">
            Agende uma conversa
        </a>
    </div>
</div>
{{< /section-container >}}
