---
title: "Precios"
description: "Paga por el número de personas que usan Runink. Cada persona incluye una asignación de capacidad de cómputo, así que usarlo más no sube la factura."
layout: "pricing"
date: "2024-05-20T00:00:00Z"
author: "Runink"
---

<div class="max-w-3xl mx-auto text-center mb-4">
  <p class="text-xl text-stone-300 font-medium leading-relaxed mb-6">
    Paga por el número de personas que usan Runink. Cada persona incluye en el precio una asignación de capacidad de cómputo.
  </p>
  <p class="text-lg text-stone-400 font-medium leading-relaxed">
    Esa es toda la lógica. La factura sigue a su plantilla, no a su uso, de modo que un equipo que le encuentre mucho uso a Runink no abre una partida de gasto que crece con él. Las tres licencias de abajo se diferencian en una sola pregunta: cuántas personas lo necesitan y en qué máquina se ejecuta.
  </p>
</div>

{{< pricing-toggle >}}
{
  "options": [
    { "label": "Pago Mensual", "value": "monthly" },
    { "label": "Pago Anual (15% Menos)", "value": "yearly" }
  ]
}
{{< /pricing-toggle >}}

{{< pricing-table-1 >}}
{
  "plans": [
    {
      "pill": "EN UNA MÁQUINA COMPARTIDA",
      "pill_color": "stone",
      "name": "LICENCIA LITE",
      "subtitle": "PARA EQUIPOS DE 1 A 9 PERSONAS",
      "price_color": "stone",
      "price_monthly": "86",
      "price_yearly": "75",
      "price_subtitle": "POR PERSONA, AL MES",
      "credits": "CÓMPUTO INCLUIDO<br>DE UN FONDO COMPARTIDO",
      "outcome_strategies": [
        {"label": "QUÉ DETERMINA LA FACTURA", "value": "Cuántas personas contrata. No cuánto lo usan."},
        {"label": "COMPROMISO MÍNIMO", "value": "Un mes."},
        {"label": "SI RECUPERAMOS DINERO PARA USTED", "value": "20% de lo recuperado. Nada si no se recupera nada."},
        {"label": "TARIFA DE PUESTA EN MARCHA", "value": "Del 1% al 3%, nunca más de $50."}
      ],
      "features": [
        "SE EJECUTA EN UNA MÁQUINA COMPARTIDA CON OTROS CLIENTES",
        "CAPACIDAD DE CÓMPUTO INCLUIDA CON CADA PERSONA",
        "EL CONJUNTO ESTÁNDAR DE ASISTENTES AUTOMÁTICOS",
        "EL PUNTO DE PARTIDA PARA UN PRIMER EQUIPO"
      ],
      "button": {
        "text": "EMPEZAR CON LITE",
        "url": "/#contact",
        "style": "outline"
      }
    },
    {
      "pill": "EN SU PROPIA MÁQUINA",
      "pill_color": "orange",
      "name": "LICENCIA DEDICADA",
      "subtitle": "PARA 10 PERSONAS O MÁS",
      "price_color": "orange",
      "price_monthly": "75",
      "price_yearly": "75",
      "price_subtitle": "POR PERSONA, AL MES",
      "credits": "CÓMPUTO INCLUIDO<br>DE SU PROPIO FONDO",
      "outcome_strategies": [
        {"label": "QUÉ DETERMINA LA FACTURA", "value": "Cuántas personas contrata. No cuánto lo usan."},
        {"label": "COMPROMISO MÍNIMO", "value": "Un año."},
        {"label": "SI RECUPERAMOS DINERO PARA USTED", "value": "20% de lo recuperado. Nada si no se recupera nada."},
        {"label": "TARIFA DE PUESTA EN MARCHA", "value": "Del 1% al 3%, nunca más de $50."}
      ],
      "features": [
        "SE EJECUTA EN MÁQUINAS RESERVADAS SOLO PARA SU EMPRESA",
        "1.000 UNIDADES POR PERSONA, MÁS 2.000 POR CADA 10",
        "SU PROPIA DIRECCIÓN WEB",
        "PRIORIDAD SOBRE LA CAPACIDAD QUE PAGA"
      ],
      "button": {
        "text": "HABLEMOS DE DEDICADA",
        "url": "/#contact",
        "style": "solid"
      }
    },
    {
      "pill": "EN SU PROPIO EDIFICIO",
      "pill_color": "stone",
      "name": "LICENCIA ENTERPRISE",
      "subtitle": "PARA ALOJARLO USTED MISMO",
      "price_monthly": "CUSTOM",
      "price_yearly": "CUSTOM",
      "price_subtitle": "PRECIO ACORDADO CON USTED",
      "credits": "CÓMPUTO INCLUIDO<br>DIMENSIONADO CON USTED",
      "outcome_strategies": [
        {"label": "QUÉ DETERMINA LA FACTURA", "value": "La capacidad que necesita y los niveles de servicio que fija."},
        {"label": "COMPROMISO MÍNIMO", "value": "Acordado con usted."},
        {"label": "SI RECUPERAMOS DINERO PARA USTED", "value": "Acordado con usted y escrito en el contrato."},
        {"label": "TARIFA DE PUESTA EN MARCHA", "value": "Acordada con usted y escrita en el contrato."}
      ],
      "features": [
        "SE EJECUTA EN SUS INSTALACIONES, INCLUSO SIN CONEXIÓN A LA RED",
        "CAPACIDAD DIMENSIONADA Y GESTIONADA CON USTED",
        "TODO LO DE LA LICENCIA DEDICADA",
        "UN REGISTRO COMPLETO DE QUIÉN HIZO QUÉ, Y CUÁNDO"
      ],
      "button": {
        "text": "HABLE CON NOSOTROS",
        "url": "/#contact",
        "style": "outline"
      }
    }
  ]
}
{{< /pricing-table-1 >}}

<div class="py-12"></div>

{{< enterprise-a2a >}}
{{< faq >}}
{
  "title": "Cómo Funciona La Factura",
  "description": "Qué se le cobra, en el orden en que suele preguntarlo un equipo financiero.",
  "questions": [
    {
      "question": "¿Qué estoy pagando en realidad?",
      "answer": "Puestos. Un **puesto** es una persona que usa Runink. Cuenta las personas que lo necesitan, multiplica por el precio de arriba, y eso es la licencia.<br><br>Cada puesto incluye además una asignación de capacidad de cómputo: el tiempo de máquina que Runink emplea para leer sus documentos, revisar sus registros y redactar el trabajo. Esa asignación va incluida en el precio del puesto. No se le cobra por pregunta, por documento ni por informe."
    },
    {
      "question": "¿Qué es una Unidad de Cómputo?",
      "answer": "Es el contador del tiempo de máquina, igual que el kilovatio-hora es el contador de la electricidad. Runink mide la capacidad en **Unidades de Cómputo** para que lo que se le ha asignado y lo que ha gastado se expresen en los mismos términos, y ambas cifras están en pantalla en la consola en lugar de llegar a fin de mes.<br><br>Cada puesto **Dedicado** lleva 1.000 unidades, y su organización recibe otras 2.000 unidades por cada 10 puestos que contrate. Esas unidades son comunes, así que una semana intensa de una persona sale del mismo fondo que una semana tranquila de otra."
    },
    {
      "question": "¿Qué pasa si superamos la asignación?",
      "answer": "La capacidad adicional se cobra a **$0,10 por cada 100 unidades**, o **$5,00 por hora de máquina**. En la práctica esa línea queda vacía en el trabajo corriente del día a día y aparece cuando se ejecuta algo muy grande de una sola vez: reprocesar un año de documentos en una tarde, por ejemplo.<br><br>Puede ver el total acumulado en la consola y fijar un presupuesto, de modo que la primera noticia de un mes intenso no sea la factura."
    },
    {
      "question": "¿Qué licencia nos conviene?",
      "answer": "Cuente primero a sus personas.<br><br>Menos de diez: la **Licencia Lite**. Se ejecuta en una máquina compartida con otros clientes y es la única que puede contratarse mes a mes, así que una evaluación no exige comprometerse un año.<br><br>Diez o más: la **Licencia Dedicada** cuesta menos por persona y se ejecuta en máquinas reservadas solo para su empresa, con su propia dirección web y prioridad sobre la capacidad que paga. Se contrata por un año.<br><br>Si su información no puede salir de su propio edificio, eso es **Enterprise**, y la conversación empieza por dónde tiene que ejecutarse."
    },
    {
      "question": "¿Hay que firmar por un año?",
      "answer": "Solo en Dedicada y Enterprise. La **Licencia Lite** puede contratarse mes a mes a $86 por persona, o por un año a $75: la misma diferencia del 15% que muestra el selector de arriba.<br><br>Dedicada y Enterprise se contratan por un año porque ambas implican apartar máquinas para su empresa en concreto, y esa capacidad queda reservada la use o no en una semana dada."
    },
    {
      "question": "¿Por qué usarlo más no cuesta más?",
      "answer": "Porque el razonamiento se ejecuta en hardware y no en un servicio ajeno con contador. El coste de una pregunta es la electricidad necesaria para responderla.<br><br>La consecuencia práctica es presupuestaria. Su gasto depende de la capacidad que mantiene, decidida una vez, y no de una cifra que se mueve según cuántas preguntas hizo su equipo el mes pasado. Un equipo que le encuentre mucho uso a Runink no descubre un coste que crece con ese éxito."
    }
  ]
}
{{< /faq >}}


---


<section class="faq-section mt-16 p-8 bg-sunk rounded-3xl border border-stone-800/80 shadow-2xl relative z-10">
  <div class="flex items-center gap-4 mb-8">
    <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-signal-fill to-signal-fill-hover flex items-center justify-center shadow-lg">
      <span class="material-symbols-outlined text-white">help_center</span>
    </div>
    <h2 class="text-3xl font-black text-white uppercase italic tracking-tight m-0">Preguntas Frecuentes</h2>
  </div>
  <div class="space-y-6">
    <div class="faq-item p-6 bg-stone-900 rounded-xl border border-stone-800/50 hover:border-signal/30 transition-colors">
      <h3 class="text-xl font-bold text-stone-200 mb-4">¿Qué debemos presupuestar además de la licencia?</h3>
      <p class="text-stone-400 leading-relaxed">La licencia es una línea del coste. Antes de firmar, ponga cifras a cuatro más. Primero, conectar Runink a los sistemas que ya usa: el sistema financiero, el de transporte o almacén, y el lugar donde viven sus documentos. Segundo, mover el histórico que quiere que lea. Tercero, las horas que su propia gente dedica a aprenderlo y a cambiar la forma de trabajar, que suele ser la línea que se olvida. Cuarto, las máquinas. Con las licencias Lite y Dedicada son nuestras; con Enterprise son suyas, y conviene poner precio al hardware y a las personas que lo mantienen. Lo que no debería tener que presupuestar es una factura que se mueve según cuánto usa el software su equipo. Ese es el sentido de cobrar por puesto.</p>
    </div>
    <div class="faq-item p-6 bg-stone-900 rounded-xl border border-stone-800/50 hover:border-signal/30 transition-colors">
      <h3 class="text-xl font-bold text-stone-200 mb-4">¿Cómo se fija el precio si tenemos que alojarlo nosotros?</h3>
      <p class="text-stone-400 leading-relaxed">Eso es la licencia Enterprise, y el precio se acuerda con usted en lugar de salir de una lista. Cubre despliegues en sus propias instalaciones, incluidas sedes mantenidas por completo fuera de la red, y máquinas colocadas cerca de donde ocurre el trabajo. Lo que la gente suele querer por escrito son los niveles de servicio, quién puede ver qué, y el registro que se guarda de quién hizo qué. Traiga la restricción que lo motiva —el regulador, la cláusula del contrato o la revisión de seguridad que se atasca una y otra vez— y la conversación empieza por ahí en lugar de por una lista de funciones.</p>
    </div>
    <div class="faq-item p-6 bg-stone-900 rounded-xl border border-stone-800/50 hover:border-signal/30 transition-colors">
      <h3 class="text-xl font-bold text-stone-200 mb-4">¿A dónde van nuestros datos?</h3>
      <p class="text-stone-400 leading-relaxed">A una máquina que usted controla, y ahí se quedan. Los documentos, los registros y el razonamiento sobre ellos se ejecutan en hardware dentro de su perímetro, y nada se envía a un proveedor de modelos externo. Esto importa tanto en lo comercial como en lo técnico. La pregunta que atasca estas compras suele ser alguna versión de «a dónde va nuestra información», y aquí la respuesta es lo bastante corta como para superar un cuestionario de compras. Con Lite y Dedicada la máquina la operamos nosotros; con Enterprise es suya. En ninguno de los dos casos hay un tercero en el camino guardando sus datos.</p>
    </div>
  </div>
</section>
