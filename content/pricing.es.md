---
title: "Precios"
# Search and share-card text (CONTENT.md rules 1 and 3 apply): the <title> is
# seo_title verbatim, at most 60 characters; seo_description is the meta and card
# description, at most 155. Visible copy on the page is unchanged by these two.
seo_title: "Precios de FACE by Runink: por persona, donde usted elija"
seo_description: "Lo que cuesta una licencia de FACE by Runink. Paga por persona y elige dónde se ejecuta: en máquinas compartidas de Runink, en su nube o en sus instalaciones."
image: "/images/face/cockpit.png"
description: "Los trabajos operativos para los que está hecho FACE by Runink, y lo que cuesta una licencia para ejecutarlos. Paga por el número de personas que lo usan, y elige dónde se ejecuta el trabajo: en las máquinas compartidas de Runink, en su propia cuenta en la nube o en sus propias instalaciones."
layout: "pricing"
date: "2024-05-20T00:00:00Z"
author: "Runink"
# WHY THE WORK COMES BEFORE THE PRICE ON THIS PAGE.
# See content/pricing.md for the reasoning in full. In short: the page used to
# open on the billing shape and go straight to three licences told apart by
# whose machine they run on, which does not answer the question a buyer arrives
# with. The scenarios band now sits between the intro and the licences.
#
# Every group label and every short name in that band is lifted WORD FOR WORD
# from the `groups` block in content/use-cases/_index.es.md, so this page
# names the scenarios the way that page names them, in this reader's language.
# The sentence printed under each link is not written here at all — the
# shortcode reads the target page's own title at render time.
---

{{< pricing-table-2 >}}
{
  "intro": [
    "Este es el precio de FACE by Runink: Fulfilment Autonomous Claims Engine. Paga por el número de personas que lo usan, y elige dónde se ejecuta el trabajo: en las máquinas compartidas de Runink, en su propia cuenta en la nube o en sus propias instalaciones.",
    "Esa es toda la lógica. Las tres licencias de abajo se distinguen por esa única pregunta, dónde se ejecuta el trabajo, y el precio se deriva de ella. Pero primero va el trabajo, porque es la parte sobre la que merece la pena discutir un precio."
  ],
  "eyebrow": "El trabajo",
  "heading": "Gemelos Digitales de Operaciones",
  "lead": [
    "Estos son los trabajos operativos para los que está hecho FACE by Runink. En cada uno, las pruebas ya están en sus sistemas y nadie tiene las horas para juntarlas. Y cada uno termina con una persona aprobando una acción redactada, no leyendo otro panel.",
    "Están agrupados por el momento de la operación en que aparece el problema. Cada uno abre la página que lo explica: qué lee, qué redacta y con qué medidas escribir sus propias cifras."
  ],
  "personas": {
    "eyebrow": "Exclusivo de Enterprise",
    "cards": [
      {
        "name": "Paralegales",
        "accent": "Digitales",
        "body": "Su mesa de reclamaciones y recuperación. Leen las facturas de transporte, las pruebas de entrega y sus acuerdos de nivel de servicio (SLA), reúnen las pruebas de cada reclamación por faltante, daño o retraso y la redactan dentro del plazo del transportista. Una persona de su equipo aprueba cada reclamación antes de presentarla.",
        "focus": "Foco: Reclamaciones y Recuperación"
      },
      {
        "name": "Compradores",
        "accent": "Estadísticos",
        "body": "Su mesa de planificación de la demanda. Prueban métodos de previsión con su propio historial de ventas, se quedan con el que mejor lo habría predicho y señalan dónde la cobertura de stock no alcanza el plazo de reposición. Los traslados y pedidos se proponen para que sus planificadores los aprueben.",
        "focus": "Foco: Inventario y Cumplimiento"
      },
      {
        "name": "Operadores de",
        "accent": "Ingresos",
        "body": "Su mesa de auditoría de fletes. Revisan cada línea de factura contra sus contratos negociados y confirmaciones de tarifa, señalan los cargos que el contrato no respalda y redactan cada descuento de pago con sus pruebas. Su equipo de finanzas decide qué se retiene.",
        "focus": "Foco: Finanzas y Reconciliación"
      }
    ]
  },
  "groups": [
    {
      "label": "Planificar lo que va a necesitar",
      "deck": "Antes de comprometerse. Qué va a pedir el próximo trimestre, qué cobertura tiene y cuánto costaría un cambio si lo hiciera.",
      "items": [
        { "page": "demand-forecasting", "name": "Previsión de demanda" },
        { "page": "fulfillment-optimization", "name": "Cobertura de stock y planificación con proveedores" },
        { "page": "hypothesis-lab", "name": "Poner a prueba un cambio antes de comprometerse" }
      ]
    },
    {
      "label": "Mover la carga",
      "deck": "Con el trabajo ya en marcha. La ruta, la imagen de toda la cadena y el conductor que lleva las manos en el volante.",
      "items": [
        { "page": "route-optimization", "name": "Planificación de rutas" },
        { "page": "supply-chain-visibility", "name": "Visibilidad de la cadena de suministro" },
        { "page": "voice-dispatch", "name": "Reparto por voz para conductores" }
      ]
    },
    {
      "label": "Cuando algo sale mal",
      "deck": "Después del hecho. Un contenedor que se ha calentado, una devolución parada en el muelle, una reclamación con el plazo corriendo.",
      "items": [
        { "page": "cold-chain-safety", "name": "Cadena de frío y seguridad en el patio" },
        { "page": "responsive-reverse-logistics", "name": "Devoluciones y logística inversa" },
        { "page": "claims-recovery", "name": "Reclamaciones de transporte y cargos de puerto" }
      ]
    },
    {
      "label": "Papel, normativa y prueba",
      "deck": "Cuando alguien le pide pruebas. El expediente del siniestro, la cláusula que manda, el informe.",
      "items": [
        { "page": "insurance-underwriting", "name": "Suscripción y expedientes de siniestro" },
        { "page": "paralegal-review", "name": "Revisión de contratos y obligaciones" },
        { "page": "compliance", "name": "Datos personales y registros de auditoría" }
      ]
    }
  ],
  "outro": "Las tres licencias de abajo se diferencian en una sola pregunta: cuántas personas lo necesitan y en qué máquina se ejecuta."
}
{{< /pricing-table-2 >}}

{{< pricing-toggle >}}
{
  "options": [
    { "label": "Pago Mensual", "value": "monthly" },
    { "label": "Pago Anual (Alrededor de 14% Menos)", "value": "yearly" }
  ]
}
{{< /pricing-toggle >}}

{{< pricing-table-1 >}}
{
  "plans": [
    {
      "pill": "EN LAS MÁQUINAS COMPARTIDAS DE RUNINK",
      "pill_color": "stone",
      "name": "LICENCIA LITE",
      "subtitle": "PARA EQUIPOS DE 1 A 9 PERSONAS",
      "price_color": "stone",
      "price_monthly": "99",
      "price_yearly": "85",
      "price_subtitle": "POR PERSONA, AL MES",
      "credits": "18.000 UNIDADES DE CÓMPUTO<br>POR PERSONA Y MES",
      "outcome_strategies": [
        {"label": "QUÉ DETERMINA LA FACTURA", "value": "Cuántas personas contrata, más las unidades que use por encima de la asignación."},
        {"label": "COMPROMISO MÍNIMO", "value": "Un mes."},
        {"label": "SI RECUPERAMOS DINERO PARA USTED", "value": "20% de lo recuperado. Nada si no se recupera nada."},
        {"label": "TARIFA DE PUESTA EN MARCHA", "value": "Del 1% al 3% de un pedido aprobado y confirmado, nunca más de $150 por pedido."}
      ],
      "features": [
        "SE EJECUTA EN LAS MÁQUINAS COMPARTIDAS DE RUNINK, POR TURNOS CON EL TRABAJO DE OTROS CLIENTES",
        "18.000 UNIDADES POR PERSONA Y MES, COMUNES A TODO EL EQUIPO",
        "MÁS UNIDADES SEGÚN USE, O COMPRADAS POR ADELANTADO: 5% MENOS POR UN MES, 10% MENOS POR UN AÑO",
        "HASTA 900 UNIDADES POR PERSONA Y HORA; EL TRABAJO QUE PASA DE ESE RITMO ESPERA SU TURNO"
      ],
      "button": {
        "text": "EMPEZAR CON LITE",
        "url": "/#contact",
        "style": "outline"
      }
    },
    {
      "pill": "EN SU PROPIA CUENTA EN LA NUBE",
      "pill_color": "orange",
      "name": "LICENCIA DEDICADA",
      "subtitle": "PARA 10 PERSONAS O MÁS",
      "price_color": "orange",
      "price_monthly": "165",
      "price_yearly": "165",
      "price_subtitle": "POR PERSONA, AL MES, CON CONTRATO ANUAL",
      "credits": "UNIDADES DE CÓMPUTO ILIMITADAS<br>EN SU PROPIA NUBE",
      "outcome_strategies": [
        {"label": "QUÉ DETERMINA LA FACTURA", "value": "Cuántas personas contrata, más el 1,5% de lo que su nube cobra por los ejecutores."},
        {"label": "COMPROMISO MÍNIMO", "value": "Un año."},
        {"label": "SI RECUPERAMOS DINERO PARA USTED", "value": "20% de lo recuperado. Nada si no se recupera nada."},
        {"label": "TARIFA DE PUESTA EN MARCHA", "value": "Del 1% al 3% de un pedido aprobado y confirmado, nunca más de $150 por pedido."}
      ],
      "features": [
        "EJECUTORES EN SU PROPIO PROYECTO DE GOOGLE CLOUD, O EN SU CUENTA DE DATABRICKS O SNOWFLAKE",
        "UNIDADES DE CÓMPUTO ILIMITADAS",
        "SU NUBE LE FACTURA EL CÓMPUTO DIRECTAMENTE",
        "SU PROPIA DIRECCIÓN WEB"
      ],
      "button": {
        "text": "HABLEMOS DE DEDICADA",
        "url": "/#contact",
        "style": "solid"
      }
    },
    {
      "pill": "EN SUS INSTALACIONES O EN SU NUBE",
      "pill_color": "stone",
      "name": "LICENCIA ENTERPRISE",
      "subtitle": "PARA EJECUTARLO DONDE USTED ELIJA",
      "price_monthly": "CUSTOM",
      "price_yearly": "CUSTOM",
      "price_subtitle": "PRECIO ACORDADO CON USTED",
      "credits": "UNIDADES DE CÓMPUTO ILIMITADAS<br>DONDE LO EJECUTE",
      "outcome_strategies": [
        {"label": "QUÉ DETERMINA LA FACTURA", "value": "Dónde se ejecuta y los niveles de servicio que fija."},
        {"label": "COMPROMISO MÍNIMO", "value": "Acordado con usted."},
        {"label": "SI RECUPERAMOS DINERO PARA USTED", "value": "Acordado con usted y escrito en el contrato."},
        {"label": "TARIFA DE PUESTA EN MARCHA", "value": "Acordada con usted y escrita en el contrato."}
      ],
      "features": [
        "EJECUTORES EN SUS PROPIOS SERVIDORES, INCLUIDOS SITIOS FUERA DE LA RED",
        "O EN SU PROPIA CUENTA EN LA NUBE",
        "UNIDADES DE CÓMPUTO ILIMITADAS",
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

{{< pricing-estimator >}}
{
  "copy": {
    "eyebrow": "Estimación",
    "title": "Calcule lo que cuesta FACE by Runink",
    "intro": "Elija su situación, escriba sus propias cifras y obtenga un importe mensual y otro anual, con el cálculo a la vista junto a cada línea. Solo usa los precios publicados en esta página.",
    "notice": "Una estimación, no un presupuesto.",
    "examples": "Cada casilla parte de un valor neutro que usted cambia. Nada en ellas es una promesa ni una predicción de lo que pagará o recuperará.",
    "noscript": "El estimador necesita JavaScript. Sin él, las tarjetas de licencia de arriba tienen los mismos precios.",
    "scenarioLegend": "¿Cuál de estos casos es el suyo?",
    "scenarios": [
      {"id": "lead", "label": "Estoy evaluando", "help": "Solo puestos: lo que cuesta la licencia para mi equipo."},
      {"id": "prospect", "label": "Estoy calculando el ahorro", "help": "Añade la recuperación de reclamaciones y los pedidos, y los compara con las tarifas."},
      {"id": "customer", "label": "Soy cliente y reviso mi factura", "help": "Puestos, unidades usadas, reclamaciones y pedidos de este mes: las líneas de la factura."},
      {"id": "market", "label": "Compro a través de Google Cloud Marketplace", "help": "Los mismos precios de lista, y dónde se factura cada parte."}
    ],
    "seats": "Cuántas personas lo usarán",
    "seatRange": "De 1 a {liteMax} personas: Lite, en las máquinas compartidas de Runink. {dedMin} o más: Dedicada, en su propia cuenta en la nube.",
    "premises": "El trabajo debe ejecutarse en mis propias instalaciones (Enterprise)",
    "cycle": "Ciclo de facturación (solo Lite)",
    "cycle_yearly": "Anual",
    "cycle_monthly": "Mensual",
    "units": "Unidades que espera usar en un mes, entre todo el equipo",
    "unitsHint": "Las unidades incluidas con cada persona se agrupan en el equipo. Las unidades compradas por adelantado se toman como usadas por completo.",
    "unitsPay": "Cómo paga las unidades por encima de la asignación",
    "pay_payg": "Según el uso",
    "pay_month": "Compradas por adelantado para un mes",
    "pay_year": "Compradas por adelantado para un año",
    "runner": "Coste en la nube de los ejecutores en un mes (dólares estadounidenses)",
    "runnerHint": "Lo que su propia nube cobra por los ejecutores. Usted se lo paga a su nube; Runink añade un porcentaje de ese importe.",
    "claims": "Recuperación de reclamaciones en un mes (dólares estadounidenses)",
    "claimsHint": "Solo cuenta el dinero que ha vuelto de verdad. No se debe nada cuando no vuelve nada.",
    "orders": "Pedidos de abastecimiento aprobados y confirmados en un mes",
    "ordersHint": "Cuente solo los pedidos que usted aprobó y que están confirmados. No se debe tarifa por ningún otro.",
    "orderAvg": "Valor medio de un pedido (dólares estadounidenses)",
    "rate": "Tasa de puesta en marcha automática (porcentaje)",
    "rateHint": "Se acuerda con usted dentro del intervalo publicado. Parte del extremo superior del intervalo para que la estimación nunca quede baja.",
    "resultsTitle": "Su estimación",
    "tierLine": "Licencia para estas respuestas: {tier}.",
    "tier_lite": "Lite, en las máquinas compartidas de Runink",
    "tier_dedicated": "Dedicada, en su propia cuenta en la nube",
    "tier_enterprise": "Enterprise, en sus instalaciones",
    "summary": "Unos {monthly} al mes, {yearly} al año.",
    "enterpriseSummary": "Enterprise se presupuesta con usted. Díganos dónde debe ejecutarse y le daremos un presupuesto.",
    "enterpriseLabel": "Licencia Enterprise",
    "pricedWithYou": "Presupuestado con usted",
    "enterpriseFormula": "No hay precio de lista. Lo deciden el lugar donde se ejecuta y los niveles de servicio que usted fije. Las tarifas por acciones automáticas se acuerdan con usted y se escriben en el contrato.",
    "colItem": "Concepto",
    "colAmount": "Importe",
    "colFormula": "Cómo se calcula",
    "unlimited": "Ilimitadas",
    "notInTotal": "No entra en el total.",
    "line_seats": "Personas",
    "f_seats": "{seats} personas × {price} por persona al mes",
    "line_units_within": "Unidades adicionales",
    "f_units_within": "{used} unidades usadas, dentro de las {included} incluidas: nada adicional",
    "line_units_payg": "Unidades adicionales, según el uso",
    "f_units_payg": "{used} usadas − {included} incluidas = {extra} adicionales. {blocks} bloques de 100 × {rate}",
    "line_units_month": "Unidades adicionales, compradas un mes por adelantado",
    "f_units_month": "{used} usadas − {included} incluidas = {extra} adicionales. {blocks} bloques de 100 × {rate}, menos {off}",
    "line_units_year": "Unidades adicionales, compradas un año por adelantado",
    "f_units_year": "{used} usadas − {included} incluidas = {extra} adicionales. {blocks} bloques de 100 × {rate}, menos {off}",
    "line_units_unlimited": "Unidades",
    "f_units_unlimited": "Ilimitadas: el trabajo se ejecuta en su propia cuenta en la nube",
    "line_runner": "Tarifa de ejecutores",
    "f_runner": "{pct} de los {cost} que su nube cobra por los ejecutores",
    "line_runner_cloud": "Coste en la nube de los ejecutores",
    "f_runner_cloud": "{cost} al mes, pagados a su propia nube.",
    "line_claims": "Tarifa de recuperación de reclamaciones",
    "f_claims": "{pct} de {amount} de recuperación",
    "line_orders": "Tarifa de puesta en marcha automática",
    "f_orders": "{orders} pedidos × {each} cada uno. Un pedido: {pct} de {avg} = {raw}, nunca más de {cap}",
    "totalMonthly": "Total al mes",
    "f_totalMonthly": "Las líneas de arriba, sin las marcadas como fuera del total",
    "totalYearly": "Total al año",
    "f_totalYearly": "Total al mes × 12",
    "netTitle": "Sus propias cifras: la recuperación frente a las tarifas",
    "netRecovery": "Recuperación que escribió",
    "f_netRecovery": "El importe escrito arriba, por mes",
    "netFees": "Tarifas",
    "f_netFees": "El total al mes de arriba",
    "netMonthly": "Neto al mes",
    "f_netMonthly": "Recuperación − tarifas",
    "netYearly": "Neto al año",
    "f_netYearly": "Neto al mes × 12",
    "netNote": "Son las cifras que usted escribió. No son un resultado que Runink prometa.",
    "marketSeat": "A través de Google Cloud Marketplace, la tarifa de los puestos se factura mediante la ficha.",
    "marketRunner": "El cómputo de los ejecutores va en su propia factura de Google Cloud. No entra en el total de arriba.",
    "customerNote": "Use las cifras de su propia consola de este mes. La factura es la referencia; si una línea difiere, pregúntenos.",
    "currencyNote": "Los precios son precios de lista en dólares estadounidenses. Las facturas se emiten en la moneda de su región, convertida al tipo mensual del Banco Central Europeo.",
    "footer": "Las cifras anuales suponen que cada mes se parece al que usted describe. Los pedidos se cobran uno a uno en la factura, así que una mezcla de pedidos pequeños y grandes puede diferir de un promedio.",
    "pct": "{n}%"
  }
}
{{< /pricing-estimator >}}



{{< faq >}}
{
  "title": "Preguntas Antes De Firmar",
  "description": "Qué necesita el trabajo de usted y quién decide, y después qué se le cobra.",
  "questions": [
    {
      "question": "Arrastramos pérdidas en devoluciones, en reclamaciones, en cadena de frío. ¿Esto las toca?",
      "answer": "Cada una de ellas tiene su propia página arriba, igual que el resto de los trabajos que aparecen ahí. Pero leerlas y estar de acuerdo no es la forma de averiguarlo. Traiga una y un mes de los registros que hay detrás.\n\nCada una de esas páginas termina con las medidas que hay que sacar primero de sus propios sistemas: días desde que llega la caja hasta que se decide qué hacer con ella, reclamaciones presentadas frente a reclamaciones posibles, error de previsión por línea. Anote las suyas antes de que cambie nada, porque la referencia se pierde para siempre en cuanto algo cambia.\n\nSi las pérdidas que arrastra no tienen la forma de las que se describen ahí, se lo diremos."
    },
    {
      "question": "¿Qué necesita de nuestros sistemas para poder hacer algo de esto?",
      "answer": "Registros que ya tiene. Cada escenario dice lo que pide para empezar: un mes de devoluciones y sus notas de abono; una ruta o un transportista y un trimestre de facturas; un año de histórico semanal de una familia de productos; un expediente de siniestro cerrado y su cuadro de delegación de facultades; un contrato y una pregunta que su equipo respondió de memoria.\n\nExtractos en el formato en que los saquen sus sistemas bastan para empezar. Juntarlos es el trabajo."
    },
    {
      "question": "¿Quién firma una reclamación o una carta que él redacta?",
      "answer": "Una persona con nombre. El papeleo se reúne — la entrada, el puerto, el motivo de la retención, los documentos que faltan, los días retenido y el cargo por día — y la carta se redacta. Ahí se detiene.\n\nAlguien lee el caso y lo aprueba, lo corrige o lo descarta, y esa firma queda en el registro. **Nada sale hacia el transportista antes de eso.** En el resto ocurre lo mismo: lo que llega es una acción propuesta, y una acción que nadie aprueba es una acción que no se ha enviado."
    },
    {
      "question": "¿Qué hace cuando no puede saberlo?",
      "answer": "Lo dice, en lugar de responder igualmente.\n\nUn estado de devolución que no reconoce se rechaza en vez de archivarse bajo la mejor conjetura. Una serie de demanda que no puede ajustar vuelve diciendo que no se pudo ajustar, y no como una línea de aspecto seguro sin nada debajo. Cuando parte de una acción redactada no se puede llevar a cabo, la respuesta nombra el paso que no ocurrió en vez de dar el trabajo por hecho.\n\nEso importa más de lo que parece. El fallo que esto sustituye es una respuesta plausible que nadie aguas abajo podía distinguir de una de verdad."
    },
    {
      "question": "¿Qué pasa cuando la previsión falla?",
      "answer": "Puede ver por qué falló. Se prueban métodos que compiten entre sí contra periodos que su propio histórico ya contiene, y se usa el que mejor predijo esos periodos. La respuesta lleva el nombre del método que ganó.\n\nAsí, un fallo es algo que se puede mirar — qué método, contra qué histórico y qué cambió — y no algo que haya que aceptar. Su propio error de previsión por línea es la cifra que conviene anotar antes de que nada esté funcionando."
    },
    {
      "question": "Dentro de un año alguien pregunta por qué se presentó una reclamación. ¿Qué le enseñamos?",
      "answer": "El registro. Cada acción propuesta espera en una cola como un registro más, y aprobarla es el paso que la ejecuta.\n\nEsa aprobación queda escrita con el nombre de quien la dio y lo que decidió, juntos. Así, la respuesta a por qué se presentó una reclamación o por qué se retuvo una entrada sale del registro y no de quien todavía se acuerde."
    },
    {
      "question": "¿Dónde acaban nuestros datos?",
      "answer": "En las máquinas que nombra su licencia, y en ningún otro sitio: las máquinas compartidas de Runink en Lite, ejecutores en su propia cuenta en la nube en Dedicada, sus propios servidores en Enterprise. Los ficheros de pedidos, los papeles de aduana, las lecturas de los sensores y el razonamiento sobre todo ello se quedan allí. Nada va a un proveedor de modelos externo.\n\nEsa es la respuesta que pide una revisión de seguridad antes de dejar que un proveedor guarde sus datos de pedido. Y es también por qué las tres licencias de arriba se distinguen por dónde se ejecuta el trabajo: esa pregunta es la primera que tiene que resolver un comprador de un sector regulado."
    },
    {
      "question": "¿Qué estoy pagando en realidad?",
      "answer": "Puestos. Un **puesto** es una persona que usa FACE by Runink. Cuenta las personas que lo necesitan, multiplica por el precio de arriba, y eso es la licencia.\n\nLa licencia que elija decide dónde se ejecuta el trabajo. **Lite** se ejecuta en las máquinas compartidas de Runink e incluye Unidades de Cómputo con cada puesto. **Dedicada** se ejecuta en ejecutores de su propia cuenta en la nube, sin límite de unidades: su nube le factura ese cómputo directamente, y Runink añade el 1,5% de lo que cuestan esos ejecutores. **Enterprise** se ejecuta en sus instalaciones o en su propia nube, con precio acordado con usted.\n\nEstos puestos son de FACE. PULSE y Runink TIDE son productos distintos, cada uno con su propia suscripción. Aparte de la licencia, las únicas tarifas sobre un puesto de FACE son las de uso sobre las acciones automáticas de FACE, detalladas arriba."
    },
    {
      "question": "¿Qué es una Unidad de Cómputo?",
      "answer": "Es la forma en que Runink cuenta el trabajo en sus máquinas compartidas. Cada análisis que Runink ejecuta consume **Unidades de Cómputo** de su asignación, de modo que lo que se le ha asignado y lo que ha gastado se expresan en los mismos términos, y ambas cifras están en pantalla en la consola en lugar de llegar a fin de mes.\n\nCada puesto **Lite** lleva 18.000 unidades al mes, comunes a todo el equipo, así que una semana intensa de una persona sale del mismo fondo que una semana tranquila de otra.\n\nEn **Dedicada** y **Enterprise** el trabajo se ejecuta en su propia nube o en sus propios servidores, y las unidades son ilimitadas."
    },
    {
      "question": "¿Qué pasa si superamos la asignación?",
      "answer": "En la **Licencia Lite**, usted elige cómo pagar el resto. Las unidades por encima de la asignación se cobran según se usan a **$0,12 por cada 100 unidades**, o puede comprarlas por adelantado: **un 5% menos** por las de un mes, **un 10% menos** por las de un año. Dedicada y Enterprise no tienen asignación que superar.\n\nPuede ver el total acumulado en la consola y fijar un presupuesto, de modo que la primera noticia de un mes intenso no sea la factura."
    },
    {
      "question": "¿Qué licencia nos conviene?",
      "answer": "Decida dónde debe ejecutarse el trabajo.\n\nMenos de diez personas: la **Licencia Lite**. Se ejecuta en las máquinas compartidas de Runink, al precio más bajo, y es la única que puede contratarse mes a mes, así que una evaluación no exige comprometerse un año. Allí el trabajo espera su turno junto al de otros clientes.\n\nDiez o más: la **Licencia Dedicada** se ejecuta en ejecutores de su propio proyecto de Google Cloud, o de su cuenta de Databricks o Snowflake. Cuesta más por persona que Lite y trae Unidades de Cómputo ilimitadas; su nube le factura el cómputo. Se contrata por un año.\n\nSi el trabajo tiene que ejecutarse en sus propios servidores, incluidos sitios fuera de la red, eso es **Enterprise**, y la conversación empieza por dónde tiene que ejecutarse."
    },
    {
      "question": "¿Hay que firmar por un año?",
      "answer": "Solo en Dedicada y Enterprise. La **Licencia Lite** puede contratarse mes a mes a $99 por persona, o por un año a $85: la misma diferencia, de alrededor del 14%, que muestra el selector de arriba.\n\nDedicada y Enterprise se contratan por un año porque ambas preparan ejecutores para su empresa en concreto, en su propia nube o en sus propios servidores."
    },
    {
      "question": "¿Cuánto cuesta un uso más intenso?",
      "answer": "En **Lite**, un equipo puede usar hasta 900 unidades por persona y hora. El trabajo que pasa de ese ritmo espera su turno en la cola; nunca se rechaza, y el ritmo en sí no cuesta nada extra. Las unidades por encima de la asignación mensual se pagan según se usan o se compran por adelantado, como se explica arriba.\n\nEn **Dedicada**, las unidades son ilimitadas: un uso más intenso aparece en la factura de su propia nube como el cómputo que usó, más el 1,5% de eso por parte de Runink. En **Enterprise** se ejecuta donde usted ya ejecuta lo suyo.\n\nEn todos los casos, su gasto sigue decisiones que usted tomó —cuántos puestos y dónde se ejecuta el trabajo— y no un precio por pregunta."
    },
    {
      "question": "¿Cómo empieza un proyecto con FACE y cuánto cuestan los servicios?",
      "answer": "FACE empieza con una **auditoría de su panorama actual** y una **hoja de ruta** de implantación construida sobre ella. Empezamos por mirar, no por vender: la auditoría describe su entorno tal como es; la hoja de ruta dice qué viene después. Cuesta **$200 o 200 € la hora, en bloques de 50 horas**: un bloque para la auditoría y otro para la hoja de ruta.\n\nLos paquetes de acompañamiento Enterprise añaden, cada uno **bajo petición**: un piloto de pago (60 días de prueba de valor con sus propios datos, guiado por la hoja de ruta), la puesta en marcha y la consultoría, y el soporte y las actualizaciones (planes pasivos de actualizaciones y correcciones, planes activos con ingenieros asignados y tiempos de respuesta). Los prestan Runink y sus socios."
    }

  ]
}
{{< /faq >}}


---
