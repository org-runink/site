---
title: "Sobre a Runink"
layout: "company"
description: "Para que serve o Runink: ler os registros que uma empresa já guarda e transformá-los em decisões que a sua própria gente consiga defender."
eyebrow: "A empresa"
hero_line: "A resposta quase sempre já está nos registros"
hero_deck: "Uma empresa já anota o que comprou, o que enviou, o que pagou e o que deu errado. O Runink lê esses registros e coloca uma resposta diante da pessoa que precisa agir."
next:
  label: "Um próximo passo"
  title: "As regras acima são coisas que você pode nos pedir para mostrar."
  body: "Traga uma rota, um sinistro ou um mês de faturas. Meia hora, com quem é dono do problema na sala, e percorremos esse exemplo do início ao fim. Se as perdas que você carrega não têm o formato que isto trata, vamos dizer."
  cta: "Agende uma consulta"
  about: "A página da empresa"
date: "2024-05-20T00:00:00Z"
author: "Runink"
# TRANSLATION OF content/company.md. Rule 12: this is a page, not a copy — when
# the English page changes, this one changes in the same commit or it comes down.
#
# THE SOVEREIGNTY CARD ("Os seus registros ficam nas suas máquinas") CARRIES A
# CONSTRAINT. It must stay an architectural property — how the thing is built —
# and must not be hardened into a claim that a check refuses the code, because
# that is not supportable for FACE and /products/face/ says the opposite. The
# full reasoning is in the front matter of content/company.md; read it there
# before rewording this card in any language.
#
# NOTES GO IN FRONT MATTER, BEHIND A HASH. Go template comment syntax is a
# layouts construct: Hugo does not evaluate it inside a content file, so a note
# written that way in the body renders as visible copy. It shipped that way once.
# scripts/check-content-template-syntax.mjs now fails the build on it.
#
# The English source ends with a thematic break and an Organization JSON-LD
# block. Both are inert — markup.goldmark.renderer.unsafe = false strips the
# script, and layouts/partials/schema-org.html emits the canonical Organization
# on every page in every language — so neither is carried here.
---

{{< section-container class="pt-4 pb-20" >}}
  <div class="max-w-4xl">
    <p class="text-xs font-black uppercase tracking-[0.2em] text-signal mb-4">Para que servimos</p>
    <p class="text-2xl md:text-3xl leading-snug text-ink">
      Quase tudo o que uma equipe de operações, finanças ou conformidade precisa para decidir está em sistemas que ela já paga, num formato que ninguém tem tempo de ler.
    </p>
    <p class="text-lg text-ink-2 mt-6 max-w-3xl">
      Nós nos conectamos a esses sistemas, mantemos a cópia de trabalho em máquinas que o cliente controla e mostramos o raciocínio por trás de cada resposta, para que quem assina possa conferir.
    </p>
  </div>
{{< /section-container >}}

{{< section-container class="py-20 bg-stone-900" >}}
  <div class="max-w-6xl mx-auto">
    <h2 class="text-3xl font-bold text-center mb-4">Como construímos isso</h2>
    <p class="text-xl text-ink-2 text-center max-w-3xl mx-auto mb-12">
      Seis regras que o software segue. Cada uma é algo que você pode nos pedir para mostrar num sistema em funcionamento, que é a única razão pela qual elas merecem estar numa página.
    </p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {{< value-card
          title="Uma pessoa assina, e o nome dela fica"
          icon="users"
          description="O software redige a ação e para. Ela espera numa fila até alguém aprovar, editar ou recusar, e o registro guarda quem foi. Em sinistros, alfândega e pagamento o ato carrega responsabilidade, e responsabilidade não passa para um software."
      >}}
      {{< value-card
          title="Mostra o raciocínio"
          icon="magnifying-glass"
          description="Cada rascunho chega com a regra que aplicou e os registros que leu. Você pode discordar dele pelas provas, e não pela confiança."
      >}}
      {{< value-card
          title="Diz quando não sabe"
          icon="light-bulb"
          description="Não medido é uma resposta diferente de zero, e o software guarda assim, com o motivo. Uma verificação que não pôde rodar informa que não pôde rodar, em vez de passar."
      >}}
      {{< value-card
          title="Nomeia o passo que ficou de fora"
          icon="clipboard-document-list"
          description="Quando uma parte de um trabalho não acontece, o resultado diz qual parte e por quê. Um software que informa sucesso por um trabalho que não fez é a falha contra a qual mais projetamos."
      >}}
      {{< value-card
          title="Os seus registros ficam nas suas máquinas"
          icon="scale"
          description="Os modelos rodam em máquinas que você controla, e existe um único endpoint de inferência: o que você configura. O raciocínio sobre os seus arquivos acontece onde os seus arquivos estão. É assim que está construído, e não uma chave que alguém liga, então peça para percorrermos essa fronteira junto com você em vez de ficar com a frase."
      >}}
      {{< value-card
          title="Não reivindicamos certificações"
          icon="hand-thumb-up"
          description="Ninguém nos auditou contra SOC 2 nem contra ISO 27001. O software é construído com base nesses referenciais e vai dizer o que verificou; não vai dizer que é certificado, porque não é."
      >}}
    </div>
  </div>
{{< /section-container >}}
