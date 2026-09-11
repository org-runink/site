---
title: "Seus Reguladores Passam o Dia Reunindo Papéis, Não Decidindo"
description: "As condições da apólice, o relatório do sinistro, o histórico de reservas e o limite de alçada para um sinistro daquele valor ficam em quatro lugares. Chegam ligados, com um próximo passo redigido e a leitura em que ele se apoia. Quem subscreve continua decidindo."
layout: "use_case"
badge: "Domínio de Finanças"
product: "Runink FACE"
date: "2024-05-20T00:00:00Z"
author: "Runink"
---

{{< section-container class="py-8" >}}
<div class="max-w-5xl mx-auto px-4">

<p class="text-xs font-black uppercase tracking-[0.25em] text-stone-500 mb-2">Runink FACE &middot; Seguros, dentro do domínio de Finanças</p>
<p class="text-base text-stone-500 font-medium mb-10">Este é um cenário do <strong class="text-stone-300">Runink FACE</strong>, o Fulfilment Autonomous Claims Engine. Seguros não é um produto separado nem um módulo separado: o FACE tipifica sinistros, reservas, prêmios, franquias, liquidações e registros de subscrição dentro do seu domínio de <strong class="text-stone-300">Finanças</strong>, pelo raciocínio de que um sinistro é uma reserva constituída contra uma apólice.</p>

<h2 class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6 mt-8">Em Resumo</h2>
<ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6 mb-12">
<li><strong class="text-stone-200">O processo é reunido. Ele não é julgado.</strong> As condições, os documentos do sinistro, as movimentações de reserva e o limite de alçada que vale naquele valor chegam num lugar só, ligados ao sinistro a que pertencem.</li>
<li><strong class="text-stone-200">Cada leitura diz de onde veio.</strong> O texto extraído de um documento volta com o arquivo de onde foi lido e com o método usado para ler, então um número do rascunho pode ser rastreado até uma página, em vez de ser aceito por confiança. O que não volta junto é uma pontuação de confiança por número &mdash; existe um número de confiança na resposta e ele é fixo, o que significa que não diz nada a você, e preferimos dizer isso a deixar que você o leia como sinal de qualidade.</li>
<li><strong class="text-stone-200">A decisão não é do software.</strong> Ele redige o próximo passo. Quem subscreve ou quem responde por sinistros aprova, reescreve ou descarta, e o nome dessa pessoa fica no registro ao lado do que ela decidiu.</li>
</ul>

    <div class="text-center mb-16">
        <h1 class="text-5xl md:text-6xl font-black !text-white text-white drop-shadow-md italic tracking-tighter uppercase mb-6">Reunir É O Trabalho. Julgar Deveria Ser.</h1>
        <p class="text-xl text-stone-400 font-bold leading-relaxed">
            A manhã de um regulador vai embora procurando as condições da apólice, o relatório do sinistro e a movimentação de reserva do trimestre passado. A parte que de fato exigia a formação dele leva dez minutos no final.
        </p>
    </div>

    <div class="flex flex-col gap-12 mb-20">
        <div>
            <h2 class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Onde Isso Dá Errado</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Entra um sinistro. As condições da apólice estão num sistema de documentos. O relatório do sinistro é um PDF que alguém mandou por e-mail na sexta. O histórico de reservas está no sistema de administração de apólices. O limite de alçada que vale para um sinistro desse tamanho está numa nota de procedimento, e qual é a versão vigente dessa nota não é óbvio. Juntar as quatro coisas é a maior parte do trabalho e nada do ofício.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Então os processos grandes recebem o tratamento completo e o resto é resolvido com uma leitura parcial do processo, por alguém experiente o bastante para acertar quase sempre. &ldquo;Quase sempre&rdquo; carrega muito peso nessa frase, e ninguém quer ser quem escreve quanto.
            </p>
            <p class="text-lg text-stone-400 font-bold text-sm uppercase tracking-widest text-stone-300 mb-6">
                O gargalo não é o julgamento. É a montagem.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                Onde a subscrição é delegada, o mesmo problema chega em papel. Os borderôs voltam todo mês. Lê-los contra o que o acordo de delegação de fato permite é um trabalho de regras contra registros, num volume que nenhuma equipe lê inteiro, e a responsabilidade não se move só porque a decisão se moveu.
            </p>
        </div>
        <div>
            <h2 class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">O Que Acontece No Lugar</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Registros de seguro são reconhecidos como registros de seguro. Uma extração de sinistros saída de um sistema de administração de apólices é tipificada pelo vocabulário dela &mdash; sinistro, reserva, regulador, prêmio, franquia, liquidação, pagamento &mdash; em vez de ser arquivada onde a coluna mais genérica dela por acaso apontava. Esta é uma falha real que tivemos de corrigir: um conjunto inteiro de dados de sinistros caiu uma vez em operações porque uma das colunas se chamava &ldquo;status&rdquo;.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Os documentos são lidos onde já estão: um PDF numa pasta SFTP, um arquivo do Word num drive compartilhado, a planilha cujas fórmulas implementam em silêncio uma regra de tarifação que ninguém escreveu em lugar nenhum &mdash; e as fórmulas são lidas, célula por célula, não só os valores que elas por acaso mostram. O que volta carrega o arquivo de onde foi lido e o método que leu, então um número num rascunho leva de volta a uma página.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                O que ele não carrega é uma confiança utilizável sobre a leitura, e isso é do tipo de coisa que preferimos que você ouça aqui em vez de descobrir. A extração devolve uma pontuação só para o lote, e essa pontuação é uma constante: é a mesma se todas as páginas saíram limpas ou se todas as páginas falharam. Então não é um sinal de qualidade, não deve ser mostrada como tal a quem analisa o sinistro, e uma digitalização embaçada continua sendo um documento que alguém precisa abrir. Trate a extração como tendo achado a página para você, não como tendo verificado o que está nela.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Depois a regra escrita é confrontada com o processo, e todo achado tem a mesma forma: isto é o que o documento diz, isto é o que o processo mostra, aqui é onde os dois se separam. As condições cobrem este caso? Os documentos que o procedimento exige estavam de fato no processo? Quem analisou ficou dentro da alçada que vale naquele valor? A comparação vale só o que valer a regra que você deu para comparar &mdash; ele está lendo as suas cláusulas, não uma biblioteca de direito de seguros &mdash; e onde encontra uma divergência cita a cláusula e o registro juntos, então a primeira pergunta na revisão é sobre o caso, e não sobre de onde saíram os números.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                O que ele não faz é subscrever. Não tarifa um risco. Não aceita nem recusa. Não constitui reserva, e não liquida nada. Ele reúne o processo, redige um único próximo passo proposto e mostra o que leu para chegar ali. Quem subscreve ou quem responde por sinistros é que decide. Se o que você procura é software que decida no lugar dessa pessoa, não é este &mdash; e você deveria fazer perguntas duras a qualquer coisa que diga que é.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                Aprovar o passo redigido é o que o envia. Recusar também fica registrado, que é a parte que quase todo sistema perde. E onde o passo tem um trecho sem nada implementado atrás &mdash; uma gravação num sistema de administração de apólices, digamos &mdash; a resposta nomeia esse trecho como não executado, em vez de dar a ação por concluída, então o processo nunca mostra como dado um passo que só havia sido aprovado. Meses depois, <em class="text-stone-300">quem decidiu isso, e com que base</em> se responde pelo processo, e não pela lembrança que alguém tem de uma terça-feira.
            </p>
        </div>
        <div class="bg-sheet p-8 rounded-2xl border border-stone-800/80 shadow-2xl">
             <h3 class="text-xl font-black text-stone-200 mb-4 tracking-tighter uppercase italic">Como Você Vai Saber Que Funcionou</h3>
             <p class="text-lg text-stone-400 font-medium mb-6">
                Todo número abaixo é seu, não nosso. Anote onde você está hoje, porque a linha de base se perde para sempre no momento em que as coisas melhoram.
             </p>
             <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">Quanto de um processo é reunir papel.</strong> Pegue uma amostra de sinistros encerrados no trimestre passado. Peça a quem analisou cada um para dividir o tempo dele entre procurar coisas e julgar coisas. Quase nenhuma equipe já perguntou isso, e a resposta costuma surpreender quem as dirige.</li>
                <li><strong class="text-stone-200">Quantos processos foram decididos com registro incompleto.</strong> Na mesma amostra, conte os casos em que as condições não foram de fato relidas, ou em que o limite de alçada foi presumido em vez de conferido. É um número desconfortável. É também o que importa.</li>
                <li><strong class="text-stone-200">A distância entre a regra escrita e a regra aplicada.</strong> Ponha os seus limites de alçada como estão documentados ao lado dos seus limites de alçada como estão configurados. Se um limite foi elevado durante um acúmulo de trabalho, descubra se alguém voltou a baixá-lo.</li>
                <li><strong class="text-stone-200">Dias entre a chegada de um borderô delegado e alguém lê-lo.</strong> Onde você delega a subscrição. Meça como um intervalo, não como um total, e conte os borderôs que ninguém chegou a abrir.</li>
             </ul>
             <p class="text-sm text-stone-500 font-bold uppercase tracking-widest text-xs mt-6 text-center">Traga um processo de sinistro encerrado e a sua tabela de alçadas delegadas.</p>
        </div>
    </div>

    <div class="border-l-2 border-stone-700 pl-5 mb-16">
        <p class="mb-2">
            <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-stone-600 text-stone-400 text-[10px] font-black uppercase tracking-[0.25em]">
                <span class="inline-block w-2 h-2 rounded-full border border-stone-400"></span>Ilustrativo
            </span>
            <span class="ml-2 text-xs font-black uppercase tracking-[0.25em] text-stone-500">não medido</span>
        </p>
        <p class="text-base text-stone-500 font-medium mb-4">
            O trabalho publicado da Runink é em logística e operações. O sinistro, a manhã do regulador e o borderô delegado acima são desenhados para mostrar a forma do arranjo &mdash; são ilustrações de como ele funciona, não relatos de coisas que aconteceram. Nesta página não há taxas de recuperação, nem valores de liquidação, nem tempos de ciclo, nem nomes de clientes, porque não medimos nada disso.
        </p>
        <p class="text-base text-stone-500 font-medium">
            Nada aqui é uma aprovação, uma autorização ou uma certificação de coisa alguma. O software lê registros e redige; ele não detém nenhuma alçada delegada, não é um agente regulado, e usá-lo não cumpre nenhuma obrigação em seu nome. Onde uma decisão precisa ser tomada por uma pessoa com alçada para tomá-la, é essa pessoa que a toma, e o registro diz quem ela era.
        </p>
    </div>

    <div class="text-center">
        <a href="/pt/#contact" class="inline-flex items-center justify-center px-10 py-5 text-xs font-black uppercase tracking-widest rounded-xl transition-all duration-300 hover:-translate-y-1" style="background-color: var(--rk-signal-fill); color: var(--rk-on-signal-fill);">
            Agende uma conversa
        </a>
    </div>
</div>
{{< /section-container >}}
