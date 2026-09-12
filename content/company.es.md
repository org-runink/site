---
title: "Sobre Runink"
layout: "company"
description: "Para qué sirve Runink: leer los registros que una empresa ya guarda y convertirlos en decisiones que su propia gente pueda defender."
eyebrow: "La empresa"
hero_line: "La respuesta suele estar ya en los registros"
hero_deck: "Una empresa ya anota lo que compró, lo que envió, lo que pagó y lo que salió mal. Runink lee esos registros y pone una respuesta delante de la persona que tiene que actuar."
next:
  label: "Un paso siguiente"
  title: "Las reglas de arriba son cosas que puede pedirnos que le enseñemos."
  body: "Traiga una ruta, una reclamación o un mes de facturas. Media hora, con quien sea dueño del problema en la sala, y recorremos ese ejemplo de principio a fin. Si las pérdidas que usted carga no tienen la forma que esto aborda, se lo diremos."
  cta: "Reserve una consulta"
  about: "La página de empresa"
date: "2024-05-20T00:00:00Z"
author: "Runink"
# TRANSLATION OF content/company.md. Rule 12: this is a page, not a copy — when
# the English page changes, this one changes in the same commit or it comes down.
#
# THE SOVEREIGNTY CARD ("Sus registros se quedan en sus máquinas") CARRIES A
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
    <p class="text-xs font-black uppercase tracking-[0.2em] text-signal mb-4">Para qué servimos</p>
    <p class="text-2xl md:text-3xl leading-snug text-ink">
      Casi todo lo que un equipo de operaciones, finanzas o cumplimiento necesita para decidir está en sistemas que ya paga, con una forma que nadie tiene tiempo de leer.
    </p>
    <p class="text-lg text-ink-2 mt-6 max-w-3xl">
      Nos conectamos a esos sistemas, guardamos la copia de trabajo en máquinas que controla el cliente y mostramos el razonamiento que hay detrás de cada respuesta, para que quien firma pueda comprobarlo.
    </p>
  </div>
{{< /section-container >}}

{{< section-container class="py-20 bg-stone-900" >}}
  <div class="max-w-6xl mx-auto">
    <h2 class="text-3xl font-bold text-center mb-4">Cómo lo construimos</h2>
    <p class="text-xl text-ink-2 text-center max-w-3xl mx-auto mb-12">
      Seis reglas que el software cumple. Cada una es algo que usted puede pedirnos que le enseñemos en un sistema en marcha, que es la única razón por la que merecen estar en una página.
    </p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {{< value-card
          title="Firma una persona, y su nombre queda"
          icon="users"
          description="El software redacta la acción y se detiene. Espera en una cola hasta que alguien la aprueba, la edita o la rechaza, y el registro guarda quién fue. En reclamaciones, aduanas y pagos el acto lleva responsabilidad, y la responsabilidad no se traspasa a un programa."
      >}}
      {{< value-card
          title="Enseña su razonamiento"
          icon="magnifying-glass"
          description="Cada borrador llega con la regla que aplicó y los registros que leyó. Usted puede discreparle sobre las pruebas y no sobre la confianza."
      >}}
      {{< value-card
          title="Dice cuándo no lo sabe"
          icon="light-bulb"
          description="No medido es una respuesta distinta de cero, y el software la guarda como tal, con el motivo. Una comprobación que no se pudo ejecutar informa de que no se pudo ejecutar, en vez de darse por buena."
      >}}
      {{< value-card
          title="Nombra el paso que se saltó"
          icon="clipboard-document-list"
          description="Cuando una parte de un trabajo no ocurre, el resultado dice qué parte y por qué. Un programa que informa de éxito por un trabajo que no hizo es el fallo contra el que más hemos diseñado."
      >}}
      {{< value-card
          title="Sus registros se quedan en sus máquinas"
          icon="scale"
          description="Los modelos corren en máquinas que usted controla, y hay un único extremo de inferencia: el que usted configura. El razonamiento sobre sus archivos ocurre donde están sus archivos. Así es como está construido, y no un interruptor que alguien tenga que poner, así que pídanos recorrer el límite con usted en vez de quedarse con la frase."
      >}}
      {{< value-card
          title="No nos atribuimos certificaciones"
          icon="hand-thumb-up"
          description="Nadie nos ha auditado contra SOC 2 ni contra ISO 27001. El software está construido contra esos marcos y le dirá qué comprobó; no le dirá que está certificado, porque no lo está."
      >}}
    </div>
  </div>
{{< /section-container >}}
