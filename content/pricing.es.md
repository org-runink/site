---
title: "Precios"
description: "Los trabajos operativos para los que está hecho Runink FACE, y lo que cuesta una licencia para ejecutarlos. Paga por el número de personas que lo usan; cada persona incluye una asignación de capacidad de cómputo, así que usarlo más no sube la factura."
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
    "Paga por el número de personas que usan Runink. Cada persona incluye en el precio una asignación de capacidad de cómputo.",
    "Esa es toda la lógica. La factura sigue a su plantilla, no a su uso, de modo que un equipo que le encuentre mucho uso a Runink no abre una partida de gasto que crece con él. Pero primero va el trabajo, porque es la parte sobre la que merece la pena discutir un precio."
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
      "answer": "En máquinas que usted controla, y en ningún otro sitio. Los ficheros de pedidos, los papeles de aduana, las lecturas de los sensores y el razonamiento sobre todo ello se ejecutan en hardware que usted lleva. Nada va a un proveedor de modelos externo.\n\nEsa es la respuesta que pide una revisión de seguridad antes de dejar que un proveedor guarde sus datos de pedido. Y es también por qué las tres licencias de arriba se distinguen por en qué máquina se ejecutan: esa pregunta es la primera que tiene que resolver un comprador de un sector regulado."
    },
    {
      "question": "¿Qué estoy pagando en realidad?",
      "answer": "Puestos. Un **puesto** es una persona que usa Runink. Cuenta las personas que lo necesitan, multiplica por el precio de arriba, y eso es la licencia.\n\nCada puesto incluye además una asignación de capacidad de cómputo: el tiempo de máquina que Runink emplea para leer sus documentos, revisar sus registros y redactar el trabajo. Esa asignación va incluida en el precio del puesto. No se le cobra por pregunta, por documento ni por informe."
    },
    {
      "question": "¿Qué es una Unidad de Cómputo?",
      "answer": "Es el contador del tiempo de máquina, igual que el kilovatio-hora es el contador de la electricidad. Runink mide la capacidad en **Unidades de Cómputo** para que lo que se le ha asignado y lo que ha gastado se expresen en los mismos términos, y ambas cifras están en pantalla en la consola en lugar de llegar a fin de mes.\n\nCada puesto **Dedicado** lleva 1.000 unidades, y su organización recibe otras 2.000 unidades por cada 10 puestos que contrate. Esas unidades son comunes, así que una semana intensa de una persona sale del mismo fondo que una semana tranquila de otra."
    },
    {
      "question": "¿Qué pasa si superamos la asignación?",
      "answer": "La capacidad adicional se cobra a **$0,10 por cada 100 unidades**, o **$5,00 por hora de máquina**. En la práctica esa línea queda vacía en el trabajo corriente del día a día y aparece cuando se ejecuta algo muy grande de una sola vez: reprocesar un año de documentos en una tarde, por ejemplo.\n\nPuede ver el total acumulado en la consola y fijar un presupuesto, de modo que la primera noticia de un mes intenso no sea la factura."
    },
    {
      "question": "¿Qué licencia nos conviene?",
      "answer": "Cuente primero a sus personas.\n\nMenos de diez: la **Licencia Lite**. Se ejecuta en una máquina compartida con otros clientes y es la única que puede contratarse mes a mes, así que una evaluación no exige comprometerse un año.\n\nDiez o más: la **Licencia Dedicada** cuesta menos por persona y se ejecuta en máquinas reservadas solo para su empresa, con su propia dirección web y prioridad sobre la capacidad que paga. Se contrata por un año.\n\nSi su información no puede salir de su propio edificio, eso es **Enterprise**, y la conversación empieza por dónde tiene que ejecutarse."
    },
    {
      "question": "¿Hay que firmar por un año?",
      "answer": "Solo en Dedicada y Enterprise. La **Licencia Lite** puede contratarse mes a mes a $86 por persona, o por un año a $75: la misma diferencia del 15% que muestra el selector de arriba.\n\nDedicada y Enterprise se contratan por un año porque ambas implican apartar máquinas para su empresa en concreto, y esa capacidad queda reservada la use o no en una semana dada."
    },
    {
      "question": "¿Por qué usarlo más no cuesta más?",
      "answer": "Porque el razonamiento se ejecuta en hardware y no en un servicio ajeno con contador. El coste de una pregunta es la electricidad necesaria para responderla.\n\nLa consecuencia práctica es presupuestaria. Su gasto depende de la capacidad que mantiene, decidida una vez, y no de una cifra que se mueve según cuántas preguntas hizo su equipo el mes pasado. Un equipo que le encuentre mucho uso a Runink no descubre un coste que crece con ese éxito."
    }
  ]
}
{{< /faq >}}


---
