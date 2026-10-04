---
title: "Privacidade dos Dados do Cliente e Registros de Auditoria"
description: "Operar um sistema escreve dados pessoais nos próprios logs sem ninguém notar. Como o FACE os mantém fora, guarda registro do próprio trabalho e entrega a evidência à pessoa responsável."
layout: "use_case"
badge: "Gestão de Risco"
badgeColor: "#ea580c"
product: "Runink FACE"

date: "2024-05-20T00:00:00Z"
author: "Runink"
---

{{< section-container class="py-8" >}}
<div class="max-w-5xl mx-auto px-4">

<p class="text-xs font-black uppercase tracking-[0.25em] text-stone-500 mb-2">Runink FACE &middot; Conformidade e registros de auditoria</p>
<p class="text-base text-stone-500 font-medium mb-10">Este é um cenário do <strong class="text-stone-300">Runink FACE</strong>. As conferências descritas aqui leem os registros que o FACE guarda dos seus embarques e dos seus relatórios, e fazem parte do próprio FACE.</p>

<h2 id="em-resumo" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6 mt-8">Em Resumo</h2>
<ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6 mb-12">
<li><strong class="text-stone-200">Os dados pessoais não chegam aos logs.</strong> Endereços de e-mail, telefones, números de cartão, números de identificação nacional e endereços IP são retirados do que vai para os logs e para os diagnósticos antes de ser escrito, então o rastro que um sistema deixa ao rodar não se torna uma segunda cópia dos dados.</li>
<li><strong class="text-stone-200">Está embutido na plataforma, não é um relatório que você roda.</strong> A remoção acontece no caminho de escrita por baixo de cada serviço, em todo lugar em que um serviço escreve uma linha.</li>
<li><strong class="text-stone-200">Cada conferência guarda a própria conta.</strong> O que foi lido, contra que regra, o que foi achado e quem olhou ficam no registro, e uma conferência que não pôde rodar fica escrita exatamente assim.</li>
</ul>

    <div class="text-center mb-16">
        <h2 id="um-rastro-que-ninguem-tem-tempo-de-conferir" class="text-5xl md:text-6xl font-black !text-white text-white drop-shadow-md italic tracking-tighter uppercase mb-6">Um Rastro Que Ninguém Tem Tempo De Conferir.</h2>
        <p class="text-xl text-stone-400 font-bold leading-relaxed">
            Os dados pessoais viajam com cada registro, e cada sistema que toca um registro deixa um rastro para trás. Responder por esse rastro obriga a juntar sistemas à mão.
        </p>
    </div>

    <div class="flex flex-col gap-12 mb-20">
        <div>
            <h2 id="onde-isso-da-errado" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Onde Isso Dá Errado</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                O nome e o endereço do cliente são necessários para entregar a encomenda. Não são necessários no painel de uma transportadora, num relatório enviado a um parceiro, nem na cópia do arquivo que alguém baixou para uma reunião. Mas o campo viaja junto com o registro, e segue viajando.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Ninguém planeja isso. Acontece porque o caminho mais curto para responder a uma pergunta é exportar o que você tem, e o que você tem ainda traz os dados pessoais dentro.
            </p>
            <p class="text-lg text-stone-400 font-medium font-semibold text-signal tracking-wide font-bold text-sm">
                Você não consegue proteger o que não vê saindo.
            </p>
        </div>
        <div>
            <h2 id="para-quem-e-isto" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Para Quem É Isto</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Três mesas, e a mesma pergunta por baixo: você consegue mostrar a sua conta?
            </p>
            <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">O encarregado de proteção de dados, e conformidade e riscos.</strong> O que chega hoje é o nome e o endereço de um cliente, que foram necessários uma vez para entregar uma encomenda e viajam com o registro desde então &mdash; para uma exportação, um relatório de parceiro, um arquivo de log que ninguém lê até algo dar errado. O que muda é onde o rastro para. Os dados pessoais são retirados dos logs e dos diagnósticos antes de serem escritos, no caminho por baixo de cada serviço e não num relatório que alguém lembra de rodar.</li>
                <li><strong class="text-stone-200">TI e segurança da informação.</strong> O que chega hoje é uma pergunta que só se responde contando: quais dos seus serviços escrevem logs de aplicação, e quais deles passam o que escrevem por alguma remoção antes de guardar ou enviar. O que muda é que a resposta é uma propriedade de como o software foi construído, descrita em frases comuns que você pode confrontar numa revisão de código &mdash; então a conversa de segurança vira uma descrição, e não uma negociação.</li>
                <li><strong class="text-stone-200">Auditoria interna, e quem responde pelo relatório.</strong> O que chega hoje é um pedido para explicar por que um número é o que é, meses depois de quem o montou ter saído. O que muda é que o registro guarda a própria conta, e que uma conferência que não pôde rodar fica escrita como entrada própria em vez de passar caladamente por um resultado limpo.</li>
            </ul>
        </div>
        <div>
            <h2 id="o-que-acontece-no-lugar" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">O Que Acontece No Lugar</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Todo serviço escreve os seus logs e diagnósticos por meio de uma etapa de remoção compartilhada, que tira do texto os endereços de e-mail, os telefones, os números de cartão, os números de identificação nacional e os endereços IP e de hardware antes de o texto cair em algum lugar, junto com campos nomeados — senhas, tokens, segredos, chaves de licença, URLs de webhook — onde quer que apareçam num conteúdo estruturado. O ponto é que operar um sistema não cria em silêncio uma segunda cópia dos dados pessoais que estão dentro dele: o lugar onde vazamentos são descobertos tarde, e o lugar onde ninguém pensa em olhar.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Cada conferência guarda registro do próprio trabalho. Quando um auditor pergunta por que um achado é aquele, ou quando um órgão regulador pergunta quem viu o endereço de um cliente, a resposta vem do registro, e não da memória de quem montou a planilha.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                O registro também mantém separadas as duas respostas que as pessoas costumam misturar. &ldquo;Conferimos isso e não achamos nada&rdquo; e &ldquo;não conseguimos ler isso, então nunca foi conferido&rdquo; ficam anotadas como coisas diferentes. A segunda é o achado que uma auditoria de fato procura, e é a que um visto verde normalmente engole.
            </p>
        </div>
        <div class="bg-sheet p-8 rounded-lg border border-stone-800/80 shadow-2xl">
             <h3 id="como-voce-vai-saber-que-funcionou" class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-signal-fill to-signal-fill-hover mb-4 tracking-tighter uppercase italic drop-shadow-lg">Como Você Vai Saber Que Funcionou</h3>
             <p class="text-lg text-stone-400 font-medium mb-6">
                Todo número abaixo é seu, não nosso. Anote onde você está hoje, porque a linha de base se perde para sempre no momento em que as coisas melhoram.
             </p>
             <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">Onde os dados pessoais de fato estão.</strong> Pegue uma amostra dos relatórios e das telas que os seus parceiros e transportadoras veem. Conte quantos trazem um nome, um telefone ou um endereço. A maior parte das equipes nunca contou isso.</li>
                <li><strong class="text-stone-200">Quanto dos seus próprios logs passa por alguma remoção.</strong> Conte os serviços que escrevem logs de aplicação, e depois conte aqueles cuja saída passa por alguma etapa de remoção antes de ser guardada ou enviada a um provedor de logs. Essa é a linha de base de que a metade de privacidade desta página fala, e é a que a maior parte das equipes consegue levantar numa tarde e preferiria não levantar.</li>
             </ul>
             <p class="text-sm text-stone-500 font-bold uppercase tracking-widest text-xs mt-6 text-center">Traga uma amostra das telas que os parceiros veem e a lista dos serviços que escrevem logs.</p>
        </div>
    </div>

    <div class="border-l-2 border-stone-700 pl-5 mb-16">
        <p class="text-base text-stone-500 font-medium mb-4">
            As exposições acima são desenhadas para mostrar a forma do trabalho. Não são o relato de um trabalho com cliente, e nada nesta página é resultado medido.
        </p>
        <p class="text-base text-stone-500 font-medium">
            O software acha o registro, mostra a regra contra a qual ele foi lido e entrega os dois à pessoa responsável. Se você cumpre uma obrigação é um julgamento que fica com o seu responsável por conformidade, o seu encarregado de proteção de dados e o seu auditor.
        </p>
    </div>
</div>
{{< /section-container >}}

{{< faq >}}
{
  "title": "O Que Um Responsável Por Conformidade Pergunta Primeiro",
  "description": "O que a parte de privacidade faz, o que o registro guarda e quem decide.",
  "questions": [
    {
      "question": "O que impede que dados pessoais cheguem aos nossos logs?",
      "answer": "Um único passo de remoção, colocado no caminho de escrita por baixo de cada serviço e não numa ferramenta que alguém roda depois. Todo serviço escreve os seus logs e diagnósticos através dele, e ele tira do texto endereços de e-mail, telefones, números de cartão, números de identificação nacional e endereços de rede e de equipamento antes de a linha ser gravada. Campos nomeados também saem &mdash; senhas, tokens, segredos, chaves de licença, URLs de webhook &mdash; onde quer que apareçam numa estrutura de dados.<br><br>A ordem interna é proposital: números de cartão são reconhecidos antes de telefones, para que um padrão de telefone não engula um cartão."
    },
    {
      "question": "O que acontece quando uma conferência não pôde rodar?",
      "answer": "Fica escrita como entrada própria: a conformidade não foi avaliada, com essas palavras, mantida de propósito separada de uma avaliação que rodou e não achou nada. Uma quantidade que ninguém mediu fica guardada como não medida e com um motivo, em vez de arredondada para zero.<br><br>Juntar as duas num único sinal verde é como &ldquo;conferimos isto e não havia nada&rdquo; e &ldquo;não conseguimos ler isto, então nunca foi conferido&rdquo; acabam parecendo iguais num relatório. A segunda é o achado que uma auditoria realmente procura, e é a que costuma sumir."
    },
    {
      "question": "Um regulador pergunta quem viu o endereço de um cliente. Quem responde?",
      "answer": "Você, a partir do registro e não da memória. Cada conferência desta página guarda a própria conta &mdash; o que foi lido, contra que regra foi lido, o que foi achado, quem olhou e quando &mdash; então responder a um pedido do supervisor é busca no arquivo, não um projeto de reconstrução em quatro sistemas.<br><br>A pessoa responsável continua sendo a sua. O que muda é quanto tempo ela leva para conseguir responder, e se a resposta se apoia em documentos ou na lembrança que alguém tem de uma terça-feira."
    },
    {
      "question": "Quem decide se cumprimos uma obrigação?",
      "answer": "A sua própria equipe. Conformidade é um julgamento, e ele fica com quem o carrega. O que o software faz é achar o registro, mostrar a regra contra a qual ele foi lido e entregar os dois à pessoa responsável &mdash; o seu responsável por conformidade, o seu encarregado de proteção de dados, o seu auditor. Se a obrigação é cumprida, quem decide são eles."
    }
  ]
}
{{< /faq >}}

{{< section-container class="py-12" >}}
<div class="max-w-5xl mx-auto px-4">
    <div class="text-center">
        <a href="{{< contacturl >}}" class="inline-flex items-center justify-center px-10 py-5 text-xs font-black uppercase tracking-widest !text-on-fill text-on-fill drop-shadow-md transition-all duration-300 bg-gradient-to-r from-signal-fill to-signal-fill-hover rounded-xl border border-signal/30 hover:shadow-2xl hover:-translate-y-1">
            Agende uma conversa
        </a>
    </div>
</div>
{{< /section-container >}}
