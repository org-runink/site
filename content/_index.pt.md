---
# Front matter only — see the notes in content/_index.md. The same rules apply
# here: no figures of any kind, no aliases, and nothing below the front matter.
#
# The industry names stay in English because the industry pages themselves are
# English and hugo.toml already lists them in English in the Portuguese menu.
# The link goes to the same /industries/... page in every language.
title: "Runink"
description: "Você descobre quando já é tarde para contestar. Um contêiner fica parado porque um documento está errado e a diária começa nesse mesmo dia. O Runink FACE lê os registros que os seus sistemas já guardam, compara cada um com a regra que o rege e coloca uma ação redigida diante de quem decide."
date: "2024-05-20T00:00:00Z"
author: "Runink"
hero:
  eyebrow: "Logística · Seguros · Bancos · Telecom · Marketing"
  line1: "Você descobre quando"
  line2: "já é tarde para contestar."
  deck: "Um refrigerado esquenta durante a noite. Um limite de revisão é elevado para esvaziar uma fila e nunca volta. Uma mudança de tarifa está certa para a promoção e errada para um plano antigo. Todos estavam escritos em algum lugar antes de custar qualquer coisa."
  stance_label: "Onde ficamos"
  stance:
    - "Uma ação que o software toma por conta própria não deixa ninguém a quem perguntar depois."
    - "Então este redige, e espera."
    - "A aprovação é o registro: um nome, uma hora e o motivo do envio, guardados juntos."
  product_line: "O **Runink FACE** é o produto por trás disso: ele lê os registros que os seus sistemas já guardam, compara cada um com a regra que o rege e coloca uma ação redigida diante de quem carrega a decisão."
  cta_primary: "Encontre o seu setor"
  cta_secondary: "Agende uma conversa"


# Ver content/_index.md.
opex_heading: "Onde isso aparece nos seus números de operação"
opex_intro: "Nenhum número aqui é nosso para dar. Cada uma destas é uma linha que você já carrega, com o que a movimenta e onde achar o seu próprio número. Uma página que diz quanto você vai economizar está chutando sobre uma operação que nunca viu."
opex_col_line: "A linha"
opex_col_driver: "O que a movimenta"
opex_col_where: "Onde está a sua"
opex:
  - line: "Demurrage e detenção"
    driver: "Um contêiner parado por um documento que ninguém juntou a ele, enquanto o free time acaba."
    where: "As linhas de acessórios na fatura da transportadora, contra o relógio de free time da declaração."
  - line: "Perda de produto e cargas recusadas"
    driver: "Uma excursão de temperatura que ninguém viu até abrirem a porta, e aí quem decide o valor é o destinatário."
    where: "A conta de perdas, e os créditos emitidos por entregas recusadas."
  - line: "Custo de devoluções, e o que o atraso custa"
    driver: "Uma decisão de classificação que espera. O item vale mais no dia em que volta e menos a cada dia depois."
    where: "Custo por devolução, contra a diferença entre o que você recuperou e o que havia no primeiro dia."
  - line: "Frete expresso e ruptura"
    driver: "Um plano que chegou depois, então o conserto teve de ser comprado em cima da hora."
    where: "Frete expresso como parcela da rota, e os créditos por serviço não cumprido."
  - line: "Vazamento de sinistros, e as horas para montar um"
    driver: "Um prazo de abertura vencido enquanto a prova estava em quatro sistemas, e um processo que leva uma manhã."
    where: "Sinistros abertos contra sinistros disponíveis, e horas de regulador ou de jurídico por processo."
opex_note: "Traga uma destas e um mês dos registros por trás dela. Isso basta para saber se os prejuízos que você carrega têm o formato do que isto resolve, e é a única forma honesta de qualquer um de nós descobrir."

figure:
  today_label: "Como se lê hoje"
  today_note: "O volume venceu a inspeção, então lê-se uma amostra e supõe-se que o resto se pareça com ela. Os registros que divergem já estão no campo."
  read_label: "Como a Runink lê"
  read_note: "Cada registro é comparado com a regra que o governa, de madrugada, nas suas próprias máquinas. O que diverge sai com nome."
  beats:
    - title: "Os registros já existem"
      body: "Pedidos, sinistros, ordens de pagamento, detalhe de chamadas, contratos e leituras de sensores — nos sistemas que você já opera."
    - title: "Todos eles são lidos"
      body: "Não é uma varredura mensal sobre uma amostra. A comparação corre registro a registro, então a exceção chega como um caso com nome e não como uma taxa estimada."
    - title: "Uma pessoa decide o que acontece"
      body: "Cada achado chega com a regra que foi quebrada, os registros que o sustentam e uma ação já redigida, para alguém aprovar, corrigir ou recusar."
  caption: "Quanto tempo passa, na sua operação, entre algo ser registrado e alguém agir sobre isso é um número que vale ter. Pouquíssimas operações chegaram a contá-lo. Esse intervalo costuma ser onde o custo está, e é uma boa primeira coisa para medir junto."

industries_heading: "Cinco setores, uma mesma forma de problema"
industries_intro: "Encontre a linha que se parece com a sua semana. Cada uma abre uma página escrita para aquele setor, com as medidas em que anotar os seus próprios números."
industries_open: "Abrir"
industries_cta: "Ver se encaixa"
industries_columns:
  name: "Setor"
  cost: "O que está custando em silêncio"
  owner: "De quem é isso na sua casa"
industries:
  - page: "logistics-supply-chain"
    name: "Logistics & Supply Chain"
    cost: "Uma declaração retida no porto por um documento que falta enquanto a diária corre. Uma reclamação de frete ainda dentro do prazo de abertura que ninguém teve a manhã para montar."
    owners:
      - "Diretor de operações"
      - "Diretor financeiro"
      - "Conformidade aduaneira"
    flow:
      - when: "Antes de embarcar"
        jobs:
          - name: "Demanda e fulfillment"
            line: "Uma linha começa a se mexer semanas antes do ponto de pedido, e o plano chega depois da ruptura."
      - when: "Em trânsito"
        jobs:
          - name: "Cadeia do frio"
            line: "Um contêiner esquenta durante a noite e ninguém abre a porta até de manhã."
          - name: "Logística reativa"
            line: "O plano que servia às seis da manhã não serve às dez, e ninguém roda de novo."
      - when: "Quando volta"
        jobs:
          - name: "Logística reversa"
            line: "Uma devolução vale mais no dia em que volta, e a decisão de classificar espera."
      - when: "Quando o dinheiro se mexe"
        jobs:
          - name: "Sinistros e disputas"
            line: "Um sinistro vence porque montar um leva uma manhã que ninguém teve naquela semana."
          - name: "Subscrição"
            line: "A apólice, o laudo, o histórico de reservas e o limite de alçada estão em quatro lugares."
    cases:
      - label: "Um contêiner retido no porto, da retenção ao desembaraço"
        steps:
          - step: "A retenção aparece"
            body: "Uma declaração volta como retida, em exame ou detida, e a contagem de dias retida está acima de zero. Essa combinação é o teste inteiro — é uma regra fixa, não um julgamento, e roda contra todas as declarações e não só contra as que alguém lembrou de conferir."
          - step: "O custo é contado pela sua própria diária"
            body: "Os dias que ficou retida, multiplicados pela diária de sobrestadia do seu próprio acordo. Essa é a aritmética inteira. É o número que já está correndo enquanto a declaração espera numa fila que ninguém lê por completo."
          - step: "O documento que falta é nomeado"
            body: "O motivo da retenção e os documentos pendentes saem do registro da declaração e ficam escritos no item, de modo que quem o pega não começa descobrindo o que está errado."
          - step: "Verifica-se quem responde"
            body: "Separadamente, as declarações são lidas em busca de um importador de registro em branco, preenchido com o consignatário, ou com um texto provisório que alguém digitou uma vez. Essas carregam imposto e tributo sem ninguém respondendo por eles, e são levantadas como item próprio com o valor em jogo anexado."
          - step: "Cada real é contado uma vez"
            body: "A sobrestadia de uma declaração retida e o imposto de uma sem responsável são dinheiros diferentes, e contá-los como um número só é a forma mais comum de inflar esse tipo de total. Ficam separados, de propósito, e há um teste que falha se algum dia se juntarem."
          - step: "Uma pessoa com nome decide"
            body: "O item espera. Aprovar é o que envia qualquer coisa, e quem aprovou, quando, e o que mudou fica registrado. Se parte do que foi redigido não pôde ser executada, o resultado nomeia essa parte em vez de relatar sucesso."
      - label: "Um refrigerado que esquentou, da porta ao sinistro aberto"
        steps:
          - step: "A imagem chega"
            body: "Uma foto tirada num coletor na porta, ou um quadro puxado de uma câmera do pátio. Antes de qualquer coisa lê-la, verifica-se que é uma imagem: o cabeçalho é decodificado sozinho, o formato tem de ser um de dois, e o tamanho é limitado em bytes e em pixels. Um PDF, um contêiner de vídeo ou bytes soltos são recusados nesse passo."
          - step: "Um modelo a lê, no seu hardware"
            body: "O quadro é reduzido a um tamanho que o modelo consegue receber e lido por um modelo de visão rodando em máquinas que você controla. O que volta é uma observação escrita, presa ao quadro exato de onde foi lida, de modo que a frase e a prova dela não se separam."
          - step: "O papel é lido ao lado"
            body: "O registro da carga, a entrega e a condição em que os documentos dizem que ela deveria estar. A observação é posta contra o que já estava escrito, e não contra um limite que alguém escolheu."
          - step: "O que difere sai com nome"
            body: "O palete, a caixa, a porta do contêiner — com nome, nas palavras que uma pessoa usaria. Não se discute uma nota de gravidade diante de uma transportadora. Uma parte com nome de uma carga com nome, sim."
          - step: "O aviso chega a quem responde por ele"
            body: "Um aviso pode ser transmitido para o que estiver inscrito no fluxo de eventos do pátio, e o registro o guarda como o que ele é: solicitado. O que vem depois é decisão de alguém, e o registro diz isso em vez de dar a entender que um movimento foi interrompido."
          - step: "Uma pessoa com nome decide"
            body: "O item espera, igual à declaração retida. Aprovar é o que envia qualquer coisa, e quem aprovou, quando, e o que mudou fica escrito."
  - page: "insurance"
    name: "Insurance"
    cost: "Um limite de segunda análise elevado para vencer uma fila, feito para ser temporário, nunca devolvido e nunca decidido. Movimentos de reserva conferidos por amostragem porque o fluxo é longo demais para ler."
    owners:
      - "Operações de sinistros"
      - "Conformidade e riscos"
      - "Auditoria interna"
    flow:
      - when: "quando a alçada é delegada"
        jobs:
          - name: "Subscrição delegada"
            line: "Você continua respondendo pelo que é decidido sob o acordo, e os relatórios que o agente devolve precisam ser lidos contra ele."
      - when: "com o sinistro em aberto"
        jobs:
          - name: "Segunda análise"
            line: "O sistema aplica um número enquanto a apólice continua trazendo outro, e qual dos dois vale se decide na primeira vez que alguém pergunta."
      - when: "no fechamento do período"
        jobs:
          - name: "Reservas e recuperação"
            line: "Os termos do tratado fixam o que dá para recuperar, e saber se uma perda foi apresentada sob os certos é uma leitura do tratado contra o processo."
    cases:
      - label: "Um limite de segunda análise, de elevado no sistema a decidido no registro"
        steps:
          - step: "A apólice é lida"
            body: "A cláusula que fixa o valor a partir do qual um sinistro precisa de segunda análise é extraída do documento da apólice. Volta escrita em linguagem simples, com o documento de onde saiu nomeado ao lado."
          - step: "A regra do sistema é lida"
            body: "Separadamente, o sistema de sinistros é lido pelo limite que ele de fato aplica a um caso hoje. É lido onde já está: a conexão com os seus dados de sinistro lê os registros e os deixa como estão."
          - step: "A diferença é nomeada como desvio"
            body: "Cada regra cai em um de quatro estados. Alinhada: a apólice diz e os sistemas fazem. Desvio: os sistemas fazem algo parecido. Sombra: há lógica rodando que nenhuma apólice descreve. Ausente: a apólice descreve um controle que nada executa. Um limite elevado no sistema e deixado de fora do documento volta como desvio. Leia isso como um reconhecimento: o achado nomeia o documento da apólice e a implementação de onde foi lido, e carrega uma confiança, de modo que quem cuida de conformidade confere uma afirmação específica contra duas fontes com nome."
          - step: "O achado chega a uma fila"
            body: "Ele carrega a observação, a regra que invocou, os registros que citou, uma severidade e uma ação proposta específica. Este depende do apetite a risco — se o limite elevado é o que você quer agora — então ele espera, com a ambiguidade nomeada e o texto já redigido."
          - step: "Uma pessoa com nome decide"
            body: "Alguém aprova, edita ou rejeita a ação redigida, e essa decisão fica registrada como um evento que carrega quem a tomou. Seja atualizando a apólice para o número novo ou voltando o sistema para o antigo, a observação, a regra, os registros e a aprovação ficam guardados conforme o trabalho é feito. Quando um auditor pergunta o que esse controle fez, responder é recuperar."
  - page: "banking-financial-services"
    name: "Banking & Financial Services"
    cost: "Uma diferença que cresce dentro da faixa que sempre se aprova, então nenhum mês escala e ninguém lê a sequência. Um contrato de fornecedor que ninguém reabriu desde a assinatura."
    owners:
      - "Conformidade e riscos"
      - "Auditoria interna"
      - "Finanças"
    flow:
      - when: "quando muda o destino de um pagamento"
        jobs:
          - name: "Verificação do destino"
            line: "Se a regra sobre o destino de um pagamento foi aplicada pelo sistema ou seguida por uma pessoa costuma aparecer depois do pagamento, e não antes."
      - when: "depois da assinatura"
        jobs:
          - name: "Obrigações do fornecedor"
            line: "O contrato traz obrigações de nível de serviço, subcontratação, tratamento de dados e notificação, e lê-lo contra a relação que você tem de fato é uma comparação que se faz quando algo já deu errado."
      - when: "quando a tarifa é cobrada"
        jobs:
          - name: "Tabela de tarifas"
            line: "Faixas, limites e condições de produto tornam a tarifa uma conciliação entre o que as condições dizem e o que foi cobrado."
    cases:
      - label: "Uma diferença de conciliação, de uma sequência de meses aprovados a uma decisão registrada"
        steps:
          - step: "O mês fecha como sempre"
            body: "O movimento fica dentro da faixa que já foi aprovada antes. É aprovado igual ao mês anterior, e sozinho se lê como aquele mês."
          - step: "A sequência é lida, não o mês"
            body: "A comparação roda sobre a série, e não sobre o último número. O que chama atenção é o formato de uma sequência de movimentos, cada um dentro da faixa quando visto sozinho."
          - step: "O item é levantado com a série"
            body: "O item diz que a sequência é incomum diante do histórico disponível, e cita a série de onde foi lida. Os meses, os valores e a faixa em que cabiam vão junto com ele, então quem abre começa com a prova na frente."
          - step: "Uma pessoa com nome decide"
            body: "O item espera numa fila, com a série que cita já anexada. Aprovar, corrigir ou rejeitar é decisão dela, e a causa é ela quem escreve: nomear uma exige alguém que saiba o que mudou na operação naquele mês."
          - step: "O registro responde ao próximo pedido"
            body: "Quem decidiu, quando, o que citou e o que mudou ficam juntos, cada entrada encadeada à anterior, de modo que uma alteração posterior no registro aparece. Quando o supervisor ou a auditoria interna pergunta, a resposta é lida em vez de ser remontada."
  - page: "telecom"
    name: "Telecom"
    cost: "Uma mudança de tarifação certa para a promoção e errada para um plano legado, pequena demais para mover um agregado. Uma varredura que devolve uma taxa de erro quando a operação precisa das contas pelo nome."
    owners:
      - "Garantia de receita"
      - "Liquidação de interconexão"
      - "Finanças e compras"
    flow:
      - when: "quando o consumo é tarifado"
        jobs:
          - name: "Garantia de receita"
            line: "A tarifação é onde as condições do plano encontram o consumo, e uma mudança feita para um produto cai sobre todas as contas que aquela configuração toca."
      - when: "no fechamento do período"
        jobs:
          - name: "Liquidação de interconexão"
            line: "O seu tráfego, o registro do mesmo tráfego na contraparte e o acordo que fixa as tarifas são três fontes, e a única diferença que importa aparece no fechamento do período como um item aberto com idade."
      - when: "enquanto os sites são construídos"
        jobs:
          - name: "Implantação de rede"
            line: "O gasto aprovado, as ordens de compra, o equipamento recebido e os sites que já cursam tráfego só ficam lado a lado quando alguém monta essa visão à mão, e dentro dela passa despercebido um site que recebeu o equipamento e nunca entrou em serviço."
    cases:
      - label: "Uma mudança de tarifação errada para um plano legado, da primeira chamada mal tarifada a uma retarifação aprovada"
        steps:
          - step: "Cada registro tarifado é lido"
            body: "A saída tarifada de cada conta é lida contra as condições do plano daquele assinante, registro a registro e não como uma varredura mensal sobre uma amostra. A população testada é a população, então a tarifa da promoção aplicada a um plano legado sai como contas com nome, e não como uma taxa de erro estimada."
          - step: "O achado carrega a sua prova"
            body: "Antes que qualquer coisa chegue a um modelo, o achado é conferido: completo o bastante para ser lido, com prova junto, com pelo menos uma peça dessa prova legível, sobre a conta que ele nomeia e não sobre algo ao lado, e datado perto o bastante para dizer algo do presente. Uma prova que só reescreve a afirmação encerra o assunto ali. Cada conferência que dispara escreve o próprio motivo numa frase que uma pessoa lê."
          - step: "A taxa é recalculada pelas contagens"
            body: "Um achado que afirma uma taxa é resolvido por aritmética sobre as contagens brutas, recalculada e não aceita como veio. Uma contagem dividida por nada volta como não é possível julgar."
          - step: "Uma segunda credencial forma o veredito"
            body: "O julgamento roda numa credencial diferente da do envio, e qual credencial uma mensagem carrega é decidido pela porta em que ela chegou, não por um campo que o remetente preenche. Um veredito de «não é possível julgar» é uma resposta por direito próprio: chega com o motivo escrito ao lado e vai para uma pessoa, igual a uma discordância."
          - step: "Garantia de receita aprova a retarifação"
            body: "O item espera com a conta nomeada, as condições do plano contra as quais foi lido e os registros de onde veio. Aprovar é o que envia qualquer coisa, e quem aprovou, quando, e o que mudou fica no registro. O remédio é uma correção de configuração e uma retarifação, feita enquanto uma retarifação ainda resolve."
  - page: "marketing"
    name: "Marketing"
    cost: "A ferramenta de auditoria sabe que o site está lento. A de conteúdo não sabe, e segue escrevendo para uma página em que ninguém fica. Cada campanha recomeça do zero."
    owners:
      - "O líder de marketing"
      - "Vendas"
      - "TI e segurança da informação"
    flow:
      - when: "antes da primeira linha"
        jobs:
          - name: "Decidir o que dizer"
            line: "O que escrever em seguida depende do que o site já está fazendo, e essas duas respostas moram em ferramentas diferentes."
      - when: "do briefing à publicação"
        jobs:
          - name: "Colocar no ar"
            line: "Briefing, rascunho, revisão, agendamento: cada etapa espera a anterior, então quem decide se você consegue responder ao anúncio de um concorrente é o seu próprio prazo."
      - when: "quando chega um lead"
        jobs:
          - name: "Fazer o follow-up"
            line: "Seu sistema de clientes sabe que um lead ficou em silêncio na terceira semana; o agendador não."
    cases:
      - label: "Uma página onde ninguém fica, da auditoria que a encontra a um rascunho aprovado"
        steps:
          - step: "A auditoria lê o seu site"
            body: "Você traz o seu site e os canais em que publica. Ler isso e dizer onde você está é a primeira coisa que o Runink PULSE faz. O que ele encontra volta em ordem de prioridade e é aplicado na mesma tela."
          - step: "Um diagnóstico alimenta cada canal"
            body: "Esse mesmo diagnóstico alimenta a análise de canais, o plano de conteúdo, o calendário e cada rascunho. O que sai carrega um argumento só, em vez de quatro versões dele."
          - step: "O briefing vira rascunho"
            body: "O briefing entra e um rascunho volta. Daí em diante ele espera numa fila onde você o vê, em vez de silenciar entre uma etapa e a seguinte."
          - step: "Cada peça tem um estado"
            body: "Rascunho, aguardando revisão, aprovada, rejeitada, publicada, arquivada. Esses são os estados que o PULSE mantém, então você vê o que está esperando por você e o que de fato saiu."
          - step: "Uma pessoa com nome aprova"
            body: "Cada rascunho — post, whitepaper, e-mail frio, roteiro de ligação — chega numa fila de revisão com um aprovar e um rejeitar. Aprovar é um passo que uma pessoa com nome dá, não uma formalidade que o sistema cumpre por ela."

why_heading: "O que muda na semana"
why_intro: "Três mudanças, e são as que movem as linhas acima."
why:
  - glyph: "finding"
    title: "Você recebe o achado, não os dados"
    body: "Um painel mostra um número e deixa o trabalho com você. Aqui chega uma ação proposta específica, priorizada, com a regra invocada e os registros citados anexados a ela."
  - glyph: "approve"
    title: "Quem decide é uma pessoa com nome"
    body: "Um achado chega como uma ação redigida, e espera. Aprovar é o que a envia. Quem aprovou, quando, e o que mudou fica no registro, para que o motivo possa ser dado depois sem remontar tudo de novo."
  - glyph: "held"
    title: "Seus registros ficam nas suas máquinas"
    body: "Os arquivos e o raciocínio sobre eles rodam em hardware que você controla. Nada é enviado a um provedor de modelos externo, o que costuma ser o caminho mais curto através de uma revisão de segurança."

paper:
  text: "Leia o paper do FACE"
  url: "/blog/whitepapers/runink-face/"
  note: "A versão longa: o que é lido, o que é produzido, quem aprova e onde roda."

# Tradução de proof_* em content/_index.md. Os valores `says:` NÃO são
# traduzidos: são cadeias literais do código-fonte, e uma citação traduzida
# deixa de ser uma citação. A linha seguinte diz o que elas significam.

products_heading: "Produtos da Runink de que você talvez já tenha ouvido falar"
products_intro: "Três produtos e um documento conjunto. Cada um é um texto longo que explica o mecanismo em vez de um folheto: o que o software lê, o que produz, quem aprova e onde roda."
products_cta: "Ler o documento"
products_pages_word: "páginas"
products_lang_note: "em inglês"
products:
  - paper: "runink-face"
    name: "Runink FACE"
    sub: "Fulfilment Autonomous Claims Engine"
    line: "O desta página. Declarações retidas, sinistros ainda dentro do prazo, cadeia de frio lida depois da baixa, demanda que cresceu subindo a cadeia."
  - paper: "runink-pulse"
    name: "Runink PULSE"
    sub: "Prescriptive Unified Lead & Social Engine"
    line: "Um produto separado, não um recurso do FACE. A auditoria, a pesquisa, a prospecção e o material que um time de marketing publica, em um aplicativo só que o time opera direto."
  - paper: "runink-core"
    name: "Runink CORE"
    sub: "A camada de operações debaixo dos dois"
    line: "Não se compra sozinho. É a resposta para onde os seus dados são processados e quem pode vê-los, que é a pergunta a que toda outra página daqui acaba chegando."
  - paper: "runink-core-atlas"
    name: "Runink CORE e Atlas"
    sub: "Um documento de arquitetura conjunto com a Logical Leap"
    line: "Supervisão contínua com uma segunda opinião sobre cada achado. Escrito com a outra empresa e não sobre ela, então os dois times de engenharia descrevem o mesmo formato."
products_more_text: "Como construímos, e com quem"
products_more_url: "/company"

contact:
  heading: "Traga uma rota, um sinistro, ou um mês de faturas."
  deck: "Uma conversa curta costuma bastar para dizer se as perdas que você carrega têm a forma do que isto resolve. Se não tiverem, nós dizemos."
  book_title: "Agende uma conversa"
  book_body: "Meia hora, com quem tem o problema na sala. Vamos percorrer um exemplo real seu de ponta a ponta."
  book_cta: "Escolha um horário"
  form_title: "Ou escreva para nós"
  form_deck: "Conte o que está custando, com suas palavras. Respondemos em um dia útil."
  name_label: "Nome completo"
  name_placeholder: "Ana Souza"
  email_label: "E-mail de trabalho"
  email_placeholder: "ana@empresa.com"
  company_label: "Empresa"
  company_placeholder: "Sua organização"
  source_label: "Como ficou sabendo da gente?"
  source_default: "Selecione uma opção"
  source_options:
    - { value: "Referral", text: "Alguém indicou" }
    - { value: "LinkedIn", text: "LinkedIn" }
    - { value: "Web Search", text: "Busca na web" }
    - { value: "Event", text: "Um evento" }
    - { value: "Other", text: "Outro" }
  about_prefix: "Sobre: "
  message_label: "Qual é o problema que você quer resolver?"
  message_placeholder: "Um exemplo basta: uma declaração retida, um sinistro, uma conciliação que leva uma semana."
  submit: "Enviar mensagem"
  note: "Usamos o que você envia aqui para responder e para mais nada."
  done_title: "Mensagem recebida"
  done_body: "Obrigado. Respondemos em um dia útil."
---
