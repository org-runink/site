---
title: "Precios"
description: "Los trabajos operativos para los que está hecho Runink FACE, y lo que cuesta una licencia para ejecutarlos. Paga por el número de personas que lo usan, y elige dónde se ejecuta el trabajo: en las máquinas compartidas de Runink, en su propia cuenta en la nube o en sus propias instalaciones."
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
    "Paga por el número de personas que usan Runink, y elige dónde se ejecuta el trabajo: en las máquinas compartidas de Runink, en su propia cuenta en la nube o en sus propias instalaciones.",
    "Esa es toda la lógica. Las tres licencias de abajo se distinguen por esa única pregunta, dónde se ejecuta el trabajo, y el precio se deriva de ella. Pero primero va el trabajo, porque es la parte sobre la que merece la pena discutir un precio."
  ],
  "eyebrow": "El trabajo",
  "heading": "Gemelos Digitales de Operaciones",
  "lead": [
    "Estos son los trabajos operativos para los que está hecho Runink FACE. En cada uno, las pruebas ya están en sus sistemas y nadie tiene las horas para juntarlas. Y cada uno termina con una persona aprobando una acción redactada, no leyendo otro panel.",
    "Están agrupados por el momento de la operación en que aparece el problema. Cada uno abre la página que lo explica: qué lee, qué redacta y con qué medidas escribir sus propias cifras."
  ],
  "personas": {
    "eyebrow": "Exclusivo de Enterprise",
    "cards": [
      {
        "name": "Paralegales",
        "accent": "Digitales",
        "body": "Su equipo legal y de cumplimiento automatizado. Ingieren de forma autónoma las facturas de transporte, cotejan los acuerdos de nivel de servicio (SLA) y presentan instantáneamente reclamaciones irrefutables para recuperar los márgenes perdidos de los transportistas sin intervención manual.",
        "focus": "Foco: Reclamaciones y Recuperación"
      },
      {
        "name": "Compradores",
        "accent": "Estadísticos",
        "body": "Su unidad de planificación de demanda autónoma. Analizan de manera inteligente las tendencias del mercado y la velocidad de ventas para predecir las necesidades exactas de stock, orquestando dinámicamente la asignación de inventario en toda su red de distribución.",
        "focus": "Foco: Inventario y Cumplimiento"
      },
      {
        "name": "Operadores de",
        "accent": "Ingresos",
        "body": "Sus auditores financieros forenses. Auditan meticulosamente cada línea de factura contra sus contratos de transporte negociados, marcando tarifas fantasmas automáticamente y ejecutando retenciones de pago para detener la pérdida de margen.",
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
        { "page": "compliance", "name": "Datos personales y emisiones" }
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
    { "label": "Pago Anual (Alrededor de 16% Menos)", "value": "yearly" }
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
      "price_monthly": "89",
      "price_yearly": "75",
      "price_subtitle": "POR PERSONA, AL MES",
      "credits": "18.000 UNIDADES DE CÓMPUTO<br>POR PERSONA Y MES",
      "outcome_strategies": [
        {"label": "QUÉ DETERMINA LA FACTURA", "value": "Cuántas personas contrata, más las unidades que use por encima de la asignación."},
        {"label": "COMPROMISO MÍNIMO", "value": "Un mes."},
        {"label": "SI RECUPERAMOS DINERO PARA USTED", "value": "20% de lo recuperado. Nada si no se recupera nada."},
        {"label": "TARIFA DE PUESTA EN MARCHA", "value": "Del 1% al 3%, nunca más de $50."}
      ],
      "features": [
        "SE EJECUTA EN LAS MÁQUINAS COMPARTIDAS DE RUNINK, POR TURNOS CON EL TRABAJO DE OTROS CLIENTES",
        "18.000 UNIDADES POR PERSONA Y MES, COMUNES A TODO EL EQUIPO",
        "MÁS UNIDADES SEGÚN USE, O COMPRADAS POR ADELANTADO: 10% MENOS POR UN MES, 20% MENOS POR UN AÑO",
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
      "price_monthly": "149",
      "price_yearly": "149",
      "price_subtitle": "POR PERSONA, AL MES, CON CONTRATO ANUAL",
      "credits": "UNIDADES DE CÓMPUTO ILIMITADAS<br>EN SU PROPIA NUBE",
      "outcome_strategies": [
        {"label": "QUÉ DETERMINA LA FACTURA", "value": "Cuántas personas contrata, más el 1% de lo que su nube cobra por los ejecutores."},
        {"label": "COMPROMISO MÍNIMO", "value": "Un año."},
        {"label": "SI RECUPERAMOS DINERO PARA USTED", "value": "20% de lo recuperado. Nada si no se recupera nada."},
        {"label": "TARIFA DE PUESTA EN MARCHA", "value": "Del 1% al 3%, nunca más de $50."}
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
      "answer": "Puestos. Un **puesto** es una persona que usa Runink FACE. Cuenta las personas que lo necesitan, multiplica por el precio de arriba, y eso es la licencia.\n\nLa licencia que elija decide dónde se ejecuta el trabajo. **Lite** se ejecuta en las máquinas compartidas de Runink e incluye Unidades de Cómputo con cada puesto. **Dedicada** se ejecuta en ejecutores de su propia cuenta en la nube, sin límite de unidades: su nube le factura ese cómputo directamente, y Runink añade el 1% de lo que cuestan esos ejecutores. **Enterprise** se ejecuta en sus instalaciones o en su propia nube, con precio acordado con usted.\n\nEstos puestos son de FACE. PULSE y CORE son productos distintos, cada uno con su propia suscripción. Aparte de la licencia, las únicas tarifas sobre un puesto de FACE son las de uso sobre las acciones automáticas de FACE, detalladas arriba."
    },
    {
      "question": "¿Qué es una Unidad de Cómputo?",
      "answer": "Es la forma en que Runink cuenta el trabajo en sus máquinas compartidas. Cada análisis que Runink ejecuta consume **Unidades de Cómputo** de su asignación, de modo que lo que se le ha asignado y lo que ha gastado se expresan en los mismos términos, y ambas cifras están en pantalla en la consola en lugar de llegar a fin de mes.\n\nCada puesto **Lite** lleva 18.000 unidades al mes, comunes a todo el equipo, así que una semana intensa de una persona sale del mismo fondo que una semana tranquila de otra.\n\nEn **Dedicada** y **Enterprise** el trabajo se ejecuta en su propia nube o en sus propios servidores, y las unidades son ilimitadas."
    },
    {
      "question": "¿Qué pasa si superamos la asignación?",
      "answer": "En la **Licencia Lite**, usted elige cómo pagar el resto. Las unidades por encima de la asignación se cobran según se usan a **$0,10 por cada 100 unidades**, o puede comprarlas por adelantado: **un 10% menos** por las de un mes, **un 20% menos** por las de un año. Dedicada y Enterprise no tienen asignación que superar.\n\nPuede ver el total acumulado en la consola y fijar un presupuesto, de modo que la primera noticia de un mes intenso no sea la factura."
    },
    {
      "question": "¿Qué licencia nos conviene?",
      "answer": "Decida dónde debe ejecutarse el trabajo.\n\nMenos de diez personas: la **Licencia Lite**. Se ejecuta en las máquinas compartidas de Runink, al precio más bajo, y es la única que puede contratarse mes a mes, así que una evaluación no exige comprometerse un año. Allí el trabajo espera su turno junto al de otros clientes.\n\nDiez o más: la **Licencia Dedicada** se ejecuta en ejecutores de su propio proyecto de Google Cloud, o de su cuenta de Databricks o Snowflake. Cuesta más por persona que Lite y trae Unidades de Cómputo ilimitadas; su nube le factura el cómputo. Se contrata por un año.\n\nSi el trabajo tiene que ejecutarse en sus propios servidores, incluidos sitios fuera de la red, eso es **Enterprise**, y la conversación empieza por dónde tiene que ejecutarse."
    },
    {
      "question": "¿Hay que firmar por un año?",
      "answer": "Solo en Dedicada y Enterprise. La **Licencia Lite** puede contratarse mes a mes a $89 por persona, o por un año a $75: la misma diferencia, de alrededor del 16%, que muestra el selector de arriba.\n\nDedicada y Enterprise se contratan por un año porque ambas preparan ejecutores para su empresa en concreto, en su propia nube o en sus propios servidores."
    },
    {
      "question": "¿Cuánto cuesta un uso más intenso?",
      "answer": "En **Lite**, un equipo puede usar hasta 900 unidades por persona y hora. El trabajo que pasa de ese ritmo espera su turno en la cola; nunca se rechaza, y el ritmo en sí no cuesta nada extra. Las unidades por encima de la asignación mensual se pagan según se usan o se compran por adelantado, como se explica arriba.\n\nEn **Dedicada**, las unidades son ilimitadas: un uso más intenso aparece en la factura de su propia nube como el cómputo que usó, más el 1% de eso por parte de Runink. En **Enterprise** se ejecuta donde usted ya ejecuta lo suyo.\n\nEn todos los casos, su gasto sigue decisiones que usted tomó —cuántos puestos y dónde se ejecuta el trabajo— y no un precio por pregunta."
    }

  ]
}
{{< /faq >}}


---
