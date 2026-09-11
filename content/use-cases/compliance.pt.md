---
title: "Privacidade dos Dados do Cliente e Relatório de Emissões"
description: "Operar um sistema escreve dados pessoais nos próprios logs sem ninguém notar, e o relatório de emissões leva um trimestre para ficar pronto. Aqui está exatamente o que o software faz com cada um dos dois, inclusive as partes que ele não faz."
layout: "use_case"
badge: "Gestão de Risco"
badgeColor: "#ea580c"
product: "Runink FACE"

date: "2024-05-20T00:00:00Z"
author: "Runink"
---

{{< section-container class="py-8" >}}
<div class="max-w-5xl mx-auto px-4">

<p class="text-xs font-black uppercase tracking-[0.25em] text-stone-500 mb-2">Runink FACE &middot; Conformidade e relatório de emissões</p>
<p class="text-base text-stone-500 font-medium mb-10">Este é um cenário do <strong class="text-stone-300">Runink FACE</strong>, e não da plataforma que está por baixo dele. Vale dizer isso sem rodeios, porque conformidade soa como assunto de plataforma: as conferências descritas aqui leem os registros que o FACE guarda dos seus embarques e dos seus relatórios, e fazem parte do FACE em vez de serem um acréscimo à infraestrutura.</p>

<h2 id="em-resumo" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6 mt-8">Em Resumo</h2>
<ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6 mb-12">
<li><strong class="text-stone-200">Os dados pessoais não chegam aos logs.</strong> Endereços de e-mail, telefones, números de cartão, números de identificação nacional e endereços IP são retirados do que vai para os logs e para os diagnósticos antes de ser escrito, então o rastro que um sistema deixa ao rodar não se torna uma segunda cópia dos dados.</li>
<li><strong class="text-stone-200">Isso é uma propriedade da plataforma, não um relatório que você roda &mdash; e não tem teste nenhum.</strong> A remoção acontece no caminho de escrita por baixo de cada serviço, em todo lugar em que um serviço escreve uma linha. Também vamos te dizer que a própria função de remoção não tem teste algum, porque uma lista do que uma expressão regular deveria pegar não é prova de que ela pega. Leia a lista como descrição de intenção, não como certificação.</li>
<li><strong class="text-stone-200">O número de emissões é um fator rodoviário publicado vezes uma distância de rota &mdash; e hoje o cartão é só de demonstração.</strong> Não pesos, não modais, não um modelo. Um único fator do poço à roda, para um caminhão pesado a diesel, aplicado às distâncias de rota que estão nos dados de rota, com o método escrito em cima do número. Hoje esses dados de rota são um arquivo de amostra semeado, então uma instância conectada não mostra cartão de emissões nenhum. Mar e ar não entram, e onde não há dado de distância o cartão não aparece, em vez de aparecer com uma estimativa no lugar.</li>
</ul>

    <div class="text-center mb-16">
        <h2 id="dois-relatorios-que-ninguem-tem-tempo-de-montar" class="text-5xl md:text-6xl font-black !text-white text-white drop-shadow-md italic tracking-tighter uppercase mb-6">Dois Relatórios Que Ninguém Tem Tempo De Montar.</h2>
        <p class="text-xl text-stone-400 font-bold leading-relaxed">
            Privacidade e emissões parecem problemas diferentes. São o mesmo problema: registros espalhados por sistemas que só uma pessoa juntando tudo à mão consegue responder.
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
            <p class="text-lg text-stone-400 font-medium">
                O relatório de emissões tem o mesmo formato. Os números de que você precisa — quanto foi movido, por qual distância, por qual meio — estão todos nos seus próprios registros de embarque. Só que estão em vários sistemas, em vários formatos, e juntar tudo consome um trimestre do ano de alguém.
            </p>
        </div>
        <div>
            <h2 id="o-que-acontece-no-lugar" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">O Que Acontece No Lugar</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                No lado da privacidade, o mecanismo é mais estreito do que costuma ser vendido, e vale dizer com exatidão. Todo serviço escreve os seus logs e diagnósticos por meio de uma etapa de remoção compartilhada, que tira do texto os endereços de e-mail, os telefones, os números de cartão, os números de identificação nacional e os endereços IP e de hardware antes de o texto cair em algum lugar, junto com campos nomeados — senhas, tokens, segredos, chaves de licença, URLs de webhook — onde quer que apareçam num conteúdo estruturado. O ponto é que operar um sistema não cria em silêncio uma segunda cópia dos dados pessoais que estão dentro dele: o lugar onde vazamentos são descobertos tarde, e o lugar onde ninguém pensa em olhar. O que ele <em>não</em> faz é conferir os seus relatórios ou as suas telas de expedição, decidir que um nome não deveria estar numa delas, ou dizer quem viu. Não há aqui conferência de tela nem achado de exposição; se alguma página te disse o contrário, ela estava descrevendo algo que não existe.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                E há uma coisa que não vamos deixar uma lista de tópicos esconder. Essa remoção não tem teste próprio. A ordem interna é cuidadosa — números de cartão são procurados antes de telefones, para que o padrão de telefone não engula um cartão — e ela é chamada de todo serviço que escreve uma linha, mas ninguém escreveu um teste que prove que ela pega o que diz pegar. Uma regra sem conferência é um comentário. Preferimos que você ouça isso de nós a encontrar numa pasta de <em>due diligence</em>.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Nas emissões, é preciso ser exato sobre do que o número é feito, porque a categoria não é. É um único fator publicado de transporte rodoviário — do poço à roda, para um caminhão pesado a diesel — multiplicado por uma distância de rota tirada dos dados de rota em vez de modelada, e anualizado sobre um número declarado de dias úteis. O método viaja junto com o número, na mesma frase, para que um auditor leia a premissa no mesmo momento em que lê o número. O que não é: um modelo de peso e modal. Mar e ar não estão dentro, e uma rota cuja distância nunca foi medida não dá nada em vez de dar um chute. E é, hoje, um cartão só de demonstração: as distâncias de rota que ele multiplica são lidas de um arquivo de amostra semeado, atrás da mesma chave que acende o selo de dados de demonstração. Uma instância sem nada conectado não produz cartão de emissões, em vez de produzir um exemplo pronto com o seu nome em cima, e numa instância com os seus próprios sistemas conectados o cartão continua ausente até que esse caminho seja construído.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                Aqui havia também uma taxa de redução: uma parcela pela qual uma rota mudada supostamente cortava emissões, apresentada como bem estabelecida e sem fonte nenhuma. Foi apagada, e agora existe um teste cujo único trabalho é falhar se alguém recolocar uma taxa de redução. Uma distância e um fator não sustentam um contrafactual, e o jeito mais barato de manter isso verdadeiro foi tornar essa ausência exigível em vez de confiá-la à memória.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Os dois guardam registro do próprio trabalho. Quando um auditor pergunta por que um número é aquele, ou quando um órgão regulador pergunta quem viu o endereço de um cliente, a resposta vem do registro, e não da memória de quem montou a planilha.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                O registro também mantém separadas as duas respostas que as pessoas costumam misturar. &ldquo;Conferimos isso e não achamos nada&rdquo; e &ldquo;não conseguimos ler isso, então nunca foi conferido&rdquo; ficam anotadas como coisas diferentes. A segunda é o achado que uma auditoria de fato procura, e é a que um visto verde normalmente engole.
            </p>
        </div>
        <div class="bg-sheet p-8 rounded-2xl border border-stone-800/80 shadow-2xl">
             <h3 id="como-voce-vai-saber-que-funcionou" class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-signal-fill to-signal-fill-hover mb-4 tracking-tighter uppercase italic drop-shadow-lg">Como Você Vai Saber Que Funcionou</h3>
             <p class="text-lg text-stone-400 font-medium mb-6">
                Todo número abaixo é seu, não nosso. Anote onde você está hoje, porque a linha de base se perde para sempre no momento em que as coisas melhoram.
             </p>
             <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">Dias de trabalho no seu ciclo de relatórios.</strong> Pergunte a quem monta o relatório de emissões quantos dias levou no ano passado, e quantos desses dias foram gastos achando números em vez de conferi-los.</li>
                <li><strong class="text-stone-200">Quanto do relatório você consegue comprovar.</strong> Conte a parte dos seus números que chega a um registro de embarque que você pode apontar, contra a parte que se apoia numa estimativa que hoje ninguém sabe defender.</li>
                <li><strong class="text-stone-200">Onde os dados pessoais de fato estão.</strong> Pegue uma amostra dos relatórios e das telas que os seus parceiros e transportadoras veem. Conte quantos trazem um nome, um telefone ou um endereço. A maior parte das equipes nunca contou isso.</li>
                <li><strong class="text-stone-200">Quanto dos seus próprios logs passa por alguma remoção.</strong> Conte os serviços que escrevem logs de aplicação, e depois conte aqueles cuja saída passa por alguma etapa de remoção antes de ser guardada ou enviada a um provedor de logs. Essa é a linha de base de que a metade de privacidade desta página fala, e é a que a maior parte das equipes consegue levantar numa tarde e preferiria não levantar.</li>
             </ul>
             <p class="text-sm text-stone-500 font-bold uppercase tracking-widest text-xs mt-6 text-center">Traga o relatório do ano passado e uma amostra das telas que os parceiros veem.</p>
        </div>
    </div>

    <div class="border-l-2 border-stone-700 pl-5 mb-16">
        <p class="text-xs font-black uppercase tracking-[0.25em] text-stone-400 mb-2">Situação: hipotético &mdash; não medido; postura de conformidade declarada por nós</p>
        <p class="text-base text-stone-500 font-medium mb-4">
            As exposições e o ciclo de relatórios acima são desenhados para mostrar a forma do trabalho. Não são o relato de um trabalho com cliente, e nada nesta página é resultado medido.
        </p>
        <p class="text-base text-stone-500 font-medium">
            Duas coisas que esta página não afirma. O FACE é <strong class="text-stone-300">orientado a SOC&nbsp;2</strong>, o que é uma intenção de projeto que nós mesmos declaramos: não é auditoria concluída e não é certificação. E nada aqui deixa você em conformidade com coisa alguma. O software acha o registro, mostra a regra contra a qual ele foi lido, e entrega os dois à pessoa que responde por isso. Se você cumpre uma obrigação é um julgamento que fica com o seu responsável de conformidade, o seu encarregado de dados e o seu auditor, e estaríamos mentindo para você se sugeríssemos outra coisa.
        </p>
    </div>

    <div class="text-center">
        <a href="/pt/#contact" class="inline-flex items-center justify-center px-10 py-5 text-xs font-black uppercase tracking-widest !text-on-fill text-on-fill drop-shadow-md transition-all duration-300 bg-gradient-to-r from-signal-fill to-signal-fill-hover rounded-xl border border-signal/30 hover:shadow-2xl hover:-translate-y-1">
            Agende uma conversa
        </a>
    </div>
</div>
{{< /section-container >}}
