---
title: "Para Que Serve O Runink FACE"
# Portuguese mirror of content/use-cases/_index.md — read that file first.
#
# This section is Runink FACE's scenarios and nothing else. Runink PULSE
# (market analysis) is a separate product with its own material, and CORE is the
# platform underneath both; neither of their capabilities may be listed here,
# because a reader who cannot tell which product does which job reads the whole
# set as one product's track record. The previous version of this file was
# titled "Para Que As Pessoas Usam O Runink" and named no product at all.
product: "Runink FACE"
# Do not state a count in the title or the description. This file said "Sete" in
# three places and was wrong the moment a page was added. The set keeps growing;
# the English file states no number either.
description: "As frentes operacionais para as quais o Runink FACE foi feito. Em todas elas a evidência já está nos seus sistemas e ninguém tem as horas para juntá-la, e todas terminam com uma pessoa aprovando uma ação já redigida, não lendo mais um painel."
# CARD LINKS STAY UNPREFIXED. layouts/shortcodes/card.html passes every relative
# link through relLangURL, so "/use-cases/compliance/" written here renders as
# "/pt/use-cases/compliance/"; writing "/pt/..." would render "/pt/pt/...".
# The consequence is that a card in this file can only point at a page that
# exists in Portuguese. Every page in this section is now translated, so this
# index carries the same cards in the same four groups as the English one. If a
# new English page appears before its Portuguese translation, leave its card out
# rather than link a page that is not there.
#
# Markdown links in the body are NOT rewritten by Hugo (there is no
# render-link hook), so they carry an explicit /pt/ prefix by hand.
#
# KNOWN ISSUE — as in the English file: layout "section" has no match, so this
# page falls through to layouts/_default/list.html, which prints the title and
# the description and then an automatic card grid of the child pages, and never
# prints .Content. Until that is fixed, the attribution that actually reaches a
# reader is the title and description above.
layout: "section"
---

## O Problema De Que O Runink FACE Parte

Todas as frentes abaixo têm o mesmo formato. Os dados de que você precisa já estão registrados em algum lugar do seu negócio. Estão em quatro sistemas, em quatro formatos, e juntá-los custa uma manhã que ninguém tem.

Então a contestação vence. O contêiner é aberto quente. O pedido sai de avião. Não porque alguém decidiu mal, mas porque ninguém teve tempo de chegar ao ponto em que dava para decidir.


## O Que O Runink FACE Faz A Respeito

O FACE foi feito para rodar as conferências de madrugada contra os seus próprios registros, de modo que a manhã comece com uma lista curta e ordenada do que aconteceu, com os registros anexados.

Cada item é pensado como uma **ação proposta**, não como um alerta. A contestação chega com o recibo, a leitura, a tarifa e o prazo, e com uma carta já redigida. O desvio de temperatura chega com o contêiner, o cliente e um redirecionamento já redigido.

Uma ação proposta espera nessa fila como um registro próprio. Aprovar é o passo que a executa, e a aprovação fica escrita com o nome de quem a deu e o que essa pessoa decidiu. Uma ação que ninguém aprova é uma ação que não foi enviada.

Repare no que isso é e no que não é. É uma fila cujos itens andam porque uma pessoa com nome os fez andar, e um registro de quem os fez andar — não uma trava em algum ponto do sistema inspecionando todo o resto do que a sua empresa faz. Quando parte de uma ação redigida não pode ser executada, o que volta diz isso em vez de dar a ação por feita.

Aprovar é para encerrar o trabalho, não para começá-lo. A mensagem, o prazo e a atualização do seu sistema de registro decorrem da aprovação. Mais tarde, quando alguém perguntar por que uma contestação foi registrada ou por que uma declaração ficou retida, a resposta sai do registro.

## Duas Coisas Que Vale Saber De Saída

**Seus dados ficam nas suas máquinas.** Os arquivos de pedido, os papéis de alfândega, as leituras dos sensores e o raciocínio sobre tudo isso rodam em hardware que você controla: o FACE roda sobre a plataforma Runink CORE, e é isso que faz disso uma propriedade de como ele foi construído, e não um ajuste que alguém precisa respeitar. Nada vai para um fornecedor de modelos de fora. É o tipo de resposta que uma revisão de segurança pede antes de deixar um fornecedor guardar os dados de pedido dela.

**A fila é onde você decide.** Cada item chega com o raciocínio dele e com os registros em que se apoia, então você pode ler por que foi proposto antes de aceitar. O que você aprova é o que é executado, e o item que você deixa quieto fica onde está. Que tipo de trabalho vale passar pela fila é pergunta que você responde na montagem, não um limite de valor que o software fiscalize por você.

## Em Que Pé Estão Estes Cenários

Nenhum dos cenários abaixo é resultado de cliente. Eles são **traçados**: escritos a partir do que o software foi feito para fazer, no vocabulário de quem carrega o problema, e não rodados contra os dados de cliente nenhum. Nada aqui é medido, e cada página diz isso por conta própria. Não há estudo de caso nem número nesta página, porque os números seriam nossos e os que importam são os seus.

## Planejar O Que Você Vai Precisar

{{< card-grid cols="3" >}}

{{< card
    title="Previsão de demanda"
    icon="chart-bar"
    link="/use-cases/demand-forecasting/"
    description="O que você vai precisar no próximo trimestre está implícito no que você vendeu no ano passado. Ler isso no seu próprio histórico é um trabalho para o qual ninguém tem a manhã."
>}}

{{< card
    title="Cobertura de estoque e planejamento com fornecedores"
    icon="cube-transparent"
    link="/use-cases/fulfillment-optimization/"
    description="Um aviso de ruptura que chega depois que o estoque de segurança acabou é uma conta de avião com poucos dias de aviso."
>}}

{{< card
    title="Testar uma mudança antes de assumir o custo"
    icon="light-bulb"
    link="/use-cases/hypothesis-lab/"
    description="Calcule quanto custa um redirecionamento antes de gastar o dinheiro, contra os seus próprios números e não contra os de um fornecedor."
>}}

{{< /card-grid >}}

## Mover A Carga

{{< card-grid cols="3" >}}

{{< card
    title="Planejamento de rotas que acompanha o dia"
    icon="globe-alt"
    link="/use-cases/route-optimization/"
    description="A rota mais barata na segunda não é a mais barata na quinta. Replanejar à mão é o motivo de ela ser planejada uma única vez."
>}}

{{< card
    title="Ver a cadeia inteira, não só a sua ponta"
    icon="eye"
    link="/use-cases/supply-chain-visibility/"
    description="Cada fornecedor, transportadora e armazém tem um pedaço do retrato. O retrato em si não está em lugar nenhum."
>}}

{{< card
    title="Despacho por voz para motoristas"
    icon="map"
    link="/use-cases/voice-dispatch/"
    description="Um motorista que precisa encostar para ler uma tela ou para ou não lê. Nenhuma das duas coisas era o que você queria."
>}}

{{< /card-grid >}}

## Quando Algo Dá Errado

{{< card-grid cols="3" >}}

{{< card
    title="Cadeia de frio e segurança no pátio"
    icon="shield-check"
    link="/use-cases/cold-chain-safety/"
    description="A leitura que condena uma carga é registrada horas antes de alguém olhar para ela. O problema todo é o intervalo entre as duas coisas."
>}}

{{< card
    title="Devoluções e quanto ainda valem"
    icon="arrow-path"
    link="/use-cases/responsive-reverse-logistics/"
    description="Uma devolução parada numa baia é capital de giro que ninguém contou. Quanto ela vale depende da rapidez com que é julgada."
>}}

{{< card
    title="Contestações de frete e custos de porto"
    icon="currency-dollar"
    link="/use-cases/claims-recovery/"
    description="As contestações vencem porque montar uma custa uma manhã. O recibo, o peso, a tarifa e o prazo chegam já reunidos."
>}}

{{< /card-grid >}}

## Papel, Norma E Prova

{{< card-grid cols="3" >}}

{{< card
    title="Processos de subscrição e de sinistro"
    icon="clipboard-document-list"
    link="/use-cases/insurance-underwriting/"
    description="Um sinistro é uma reserva contra uma apólice, e o processo que o liquida chega na forma de documentos. A leitura é redigida para você; a decisão continua com quem subscreve."
>}}

{{< card
    title="Revisão de contratos e obrigações"
    icon="magnifying-glass"
    link="/use-cases/paralegal-review/"
    description="A cláusula que importa está num contrato que ninguém reabriu. Ela é lida e citada para você, e uma pessoa decide o que ela quer dizer."
>}}

{{< card
    title="Dados pessoais de clientes e relatório de emissões"
    icon="scale"
    link="/use-cases/compliance/"
    description="Dados pessoais chegam a telas que não deviam mostrá-los, e o relatório de emissões custa um trimestre. Os dois são trabalho de juntar registros."
>}}

{{< /card-grid >}}

## Veja Se Serve Para Você

Traga uma rota, uma transportadora ou um mês de devoluções. Uma conversa curta costuma bastar para saber se as perdas que você carrega têm o formato das que estão descritas aqui.

A Runink PULSE, o produto de análise de mercado, e a plataforma CORE sobre a qual o FACE roda são tratadas nos [papers delas](/pt/blog/whitepapers/). Elas não estão nesta página, e nenhuma das frentes acima é resultado que pertença a uma das duas.
