---
# Front matter only — see the notes in content/_index.md. The same rules apply
# here: no figures of any kind, no aliases, and nothing below the front matter.
#
# The industry names stay in English because the industry pages themselves are
# English and hugo.toml already lists them in English in the Spanish menu. The
# link goes to the same /industries/... page in every language.
title: "Runink"
description: "Usted se entera cuando ya es tarde para reclamar. Un contenedor espera porque un documento está mal y el cargo empieza ese mismo día. Runink FACE lee los registros que sus sistemas ya guardan, compara cada uno con la norma que lo rige y pone una acción redactada delante de quien decide."
date: "2024-05-20T00:00:00Z"
author: "Runink"
hero:
  eyebrow: "Operaciones, finanzas, cumplimiento"
  line1: "Usted se entera cuando"
  line2: "ya es tarde para reclamar."
  deck: "Un contenedor espera porque un documento está mal. El cargo empieza ese mismo día. Su versión de eso ya está escrita en algún sitio."
  stance_label: "Nuestra postura"
  stance:
    - "Una acción que el software toma por su cuenta no deja a nadie a quien preguntar después."
    - "Así que este redacta, y espera."
    - "La aprobación es el registro: un nombre, una hora y el motivo por el que se envió, juntos."
  cta_primary: "Encuentre su sector"
  cta_secondary: "Agende una consulta"

figure:
  today_label: "Cómo se lee hoy"
  today_note: "El volumen venció a la inspección, así que se lee una muestra y del resto se supone que se parece a ella. Los registros que difieren ya están en el campo."
  read_label: "Cómo lo lee Runink"
  read_note: "Cada registro se compara con la regla que lo gobierna, de noche, en sus propias máquinas. Lo que difiere sale con nombre."
  beats:
    - title: "Los registros ya existen"
      body: "Pedidos, siniestros, órdenes de pago, detalle de llamadas, contratos y lecturas de sensores, en los sistemas que ya opera."
    - title: "Se leen todos"
      body: "No es un barrido mensual sobre una muestra. La comparación corre registro a registro, así que una excepción llega como un caso con nombre y no como una tasa estimada."
    - title: "Una persona decide qué pasa"
      body: "Cada hallazgo llega con la regla que incumplió, los registros que lo sustentan y una acción redactada, para que alguien la apruebe, la corrija o la rechace."
  caption: "Cuánto tarda su operación desde que algo queda registrado hasta que alguien actúa sobre ello es un número que conviene tener. Muy pocas operaciones lo han contado. Ese intervalo suele ser donde está el coste, y es una buena primera cosa que medir juntos."

industries_heading: "Cinco sectores, una misma forma de problema"
industries_intro: "Encuentre la línea que se parece a su semana. Cada una abre una página escrita para ese sector, con las medidas sobre las que anotar sus propias cifras."
industries_cta: "Ver si encaja"
industries_columns:
  name: "Sector"
  cost: "Lo que le está costando en silencio"
  owner: "Quién lo tiene a su cargo"
industries:
  - page: "logistics-supply-chain"
    name: "Logistics & Supply Chain"
    cost: "Una entrada retenida en el puerto por un documento que falta mientras corre el cargo diario. Una reclamación de flete todavía dentro de su plazo de presentación que nadie tuvo la mañana para armar."
    owners:
      - "Director de operaciones"
      - "Director financiero"
      - "Cumplimiento aduanero"
  - page: "insurance"
    name: "Insurance"
    cost: "Un umbral de revisión elevado para vaciar una cola, pensado como provisional, nunca devuelto y nunca decidido. Movimientos de reserva revisados por muestreo porque el flujo es demasiado largo para leerlo."
    owners:
      - "Operaciones de siniestros"
      - "Cumplimiento y riesgos"
      - "Auditoría interna"
  - page: "banking-financial-services"
    name: "Banking & Financial Services"
    cost: "Una diferencia que crece dentro del rango que siempre se aprueba, así que ningún mes escala y nadie lee la secuencia. Un contrato de proveedor que nadie ha vuelto a abrir desde la firma."
    owners:
      - "Cumplimiento y riesgos"
      - "Auditoría interna"
      - "Finanzas"
  - page: "telecom"
    name: "Telecom"
    cost: "Un cambio de tarificación correcto para la promoción y equivocado para un plan heredado, demasiado pequeño para mover un agregado. Un barrido que devuelve una tasa de error cuando operaciones necesita las cuentas por nombre."
    owners:
      - "Aseguramiento de ingresos"
      - "Liquidación de interconexión"
      - "Finanzas y compras"
  - page: "marketing"
    name: "Marketing"
    cost: "La herramienta de auditoría sabe que el sitio es lento. La de contenido no, así que sigue escribiendo para una página en la que nadie se queda. Cada campaña vuelve a empezar en blanco."
    owners:
      - "Responsable de marketing"
      - "Ventas"
      - "TI y seguridad de la información"

# The one block that names the product — the Spanish counterpart of the `product`
# key in content/_index.md, and it sits in the same place for the same reason:
# after the industries and before the reasons, because everything above it is in
# the buyer's vocabulary and a reader who has just found their own line is
# exactly where "so what is it called" arrives. Until this key existed, the
# Spanish page answered that only in the paper link near the bottom.
#
# "Runink FACE" is a product name and stays in English. The heading renders
# uppercase and letterspaced, so it stays short. One heading, one paragraph, one
# footnote, no call to action of its own — naming the product is not a licence to
# start describing it; the depth belongs in /blog/whitepapers/runink-face/.
product:
  heading: "El producto es Runink FACE"
  deck: "Runink FACE es el producto que está detrás de cada línea de arriba. Lee los registros que sus sistemas ya guardan, compara cada uno con la regla que lo gobierna y pone una acción redactada delante de la persona que tiene la decisión a su cargo. Lo que cambia de un sector a otro es qué registros importan y qué regla aplica; la lectura, la redacción y la aprobación no cambian."
  parts:
    - name: "Los agentes que leen"
      body: "Se ejecutan sobre todos los registros, no sobre una muestra, con la periodicidad que usted fije. Cada uno compara lo que dice un registro con la norma que lo rige, y lo que sale es un elemento con la norma invocada y los registros citados adjuntos."
    - name: "La pantalla donde espera"
      body: "Una sola cola, ordenada por prioridad, con lo que alguien tiene que decidir. Aprobar es lo que envía algo, y quién aprobó, cuándo y qué cambió queda en el registro."
    - name: "Dónde se sitúa"
      body: "Lee de los sistemas que usted ya opera — el sistema de pedidos, los registros del transportista, los expedientes de reclamación — y los deja como están. Lo que añade es un registro por cada decisión: qué se encontró, qué norma, qué registros y quién lo aprobó."
  # Traducido y a la espera. El enlace solo se muestra donde existe su destino
  # en este idioma, y /products/face/ todavía no tiene traducción: en /es/ la
  # línea entera desaparece en lugar de llevar al lector a una página en inglés.
  more:
    text: "Qué lee FACE y qué produce"
    url: "/products/face/"

# Un solo caso, de principio a fin. Ver el comentario de content/_index.md: cada
# cifra que aparece aquí es del lector, no nuestra, y nada en este bloque dice
# que el software presente, despache, clasifique ni calcule nada.
scenario_heading: "Una entrada, de retenida a resuelta"
scenario_intro: "Un contenedor queda retenido en el puerto. Esto es todo lo que el software hace al respecto, en orden y sin saltarse nada del medio."
scenario_note: "Cada cifra de esa secuencia es suya. La tarifa diaria es la de su propio acuerdo, el arancel es el de su entrada, y los días se cuentan desde sus propios registros. Nada se estima, y donde una cifra no puede deducirse de lo que usted aportó, el campo se deja vacío en lugar de rellenarse a ojo."
scenario:
  - step: "Aparece la retención"
    body: "Una entrada vuelve como retenida, en examen o detenida, y el número de días retenida es mayor que cero. Esa combinación es toda la prueba — es una regla fija, no un criterio, y se aplica a todas las entradas y no solo a las que alguien pensó en revisar."
  - step: "El coste se cuenta, no se estima"
    body: "Los días que lleva retenida, multiplicados por la tarifa diaria de demora de su propio acuerdo. Esa es toda la aritmética. Es la cifra que ya está corriendo mientras la entrada espera en una cola que nadie lee entera."
  - step: "Se nombra el documento que falta"
    body: "El motivo de la retención y los documentos pendientes salen del registro de la entrada y quedan escritos en el elemento, de modo que quien lo recoge no empieza por averiguar qué va mal."
  - step: "Se comprueba quién responde"
    body: "Por separado, las entradas se leen buscando un importador registrado en blanco, relleno con el consignatario, o con un marcador de posición que alguien tecleó una vez. Esas llevan arancel e impuestos sin nadie que responda por ellos, y se levantan como elemento propio con el importe en juego adjunto."
  - step: "Las dos cifras nunca se suman"
    body: "La demora de una entrada retenida y el arancel de una sin responsable son dinero distinto, y contarlos como una sola cifra es la forma más común de inflar este tipo de total. Se mantienen separados, deliberadamente, y hay una prueba que falla si alguna vez se juntan."
  - step: "Decide una persona con nombre"
    body: "El elemento espera. Aprobarlo es lo que envía algo, y queda escrito quién lo aprobó, cuándo y qué cambió. Si parte de lo redactado no pudo ejecutarse, el resultado nombra esa parte en lugar de informar de un éxito."
why_heading: "Por qué esto no es otro panel de control"
why_intro: "Tres cosas deciden si algo de lo anterior merece su tiempo."
why:
  - glyph: "finding"
    title: "Recibe el hallazgo, no los datos"
    body: "Un panel le muestra una cifra y le deja el trabajo a usted. Esto llega como una acción propuesta concreta, priorizada, con la regla que invocó y los registros que citó adjuntos."
  - glyph: "approve"
    title: "Decide una persona con nombre"
    body: "Un hallazgo llega como una acción redactada, y espera. Aprobarla es lo que la envía. Quién la aprobó, cuándo y qué cambió queda en el registro, para poder explicar el motivo más adelante sin volver a reconstruirlo."
  - glyph: "held"
    title: "Sus registros se quedan en sus máquinas"
    body: "Los archivos y el razonamiento sobre ellos corren en hardware que usted controla. Nada se envía a un proveedor de modelos externo, que suele ser el camino más corto a través de una revisión de seguridad."

paper:
  text: "Lea el informe FACE"
  url: "/blog/whitepapers/runink-face/"
  note: "La versión larga: qué lee, qué produce, quién lo aprueba y dónde se ejecuta."

# Traducción de proof_* en content/_index.md. Los valores `says:` NO se
# traducen: son cadenas literales del código fuente, y una cita traducida deja
# de ser una cita. La línea que las acompaña explica qué dicen.
proof_heading: "Qué hace cuando no lo sabe"
proof_intro: "Todo lo anterior es el software funcionando. La respuesta que decide si usted podría poner lo que produce delante de un transportista o de un agente de aduanas es otra: qué llega cuando un registro no se puede leer, o cuando no se alcanza un sistema. Cuatro de esas respuestas, en las palabras exactas que imprime."
proof:
  - when: "La comprobación no pudo ejecutarse"
    body: "Si no se pueden leer los registros que sustentan un control, eso no es un aprobado y tampoco es un suspenso. Es una tercera respuesta, y va al registro de auditoría con estas palabras, no solo a una pantalla. A las tres de la mañana nadie mira la pantalla."
    says: "This is NOT a finding that … is compliant."
    gloss: "«Esto NO es una conclusión de que … cumple.»"
  - when: "El paso no se llegó a dar"
    body: "Una acción aprobada que no consiguió llegar a uno de sus sistemas no vuelve como hecha, y tampoco vuelve como un error genérico. Nombra el paso que no se ejecutó, así usted arregla una conexión en lugar de buscar una avería."
    says: "email:no_google_connector"
    gloss: "«correo: no hay conector de Google»"
  - when: "El modelo afirmó de más"
    body: "Cada frase que escribe el modelo se lee antes de que nada llegue a un documento, y una afirmación de estar certificado se recorta entera. Una norma que solo vive en las instrucciones es una petición. Esta está en el código, y el intento se guarda, porque un modelo que insiste es algo que usted querrá saber."
    says: "[claim removed: this agent may not assert a compliance or certification status]"
    gloss: "«[afirmación retirada: este agente no puede declarar una situación de cumplimiento o certificación]»"
  - when: "Todavía no hay nada conectado"
    body: "El día en que se instala, antes de apuntar a ninguno de sus sistemas, lo primero que le enseña es nada. Una cola vacía es la respuesta honesta cuando todavía no hay nada que leer, y hay una prueba cuya única tarea es mantenerlo así."
    says: "TestStandardInstanceDerivesNoActionCards"
    gloss: "«una instancia estándar no deriva ninguna tarjeta de acción»"
proof_note: "Son líneas del código fuente, no una descripción de él. El código no es público, así que la oferta es la sencilla: díganos cuál quiere ver y abrimos el archivo con usted en la llamada."

contact:
  heading: "Traiga una ruta, un siniestro o un mes de facturas."
  deck: "Una conversación corta suele bastar para saber si las pérdidas que carga tienen la forma de lo que esto resuelve. Si no la tienen, se lo diremos."
  book_title: "Agende una consulta"
  book_body: "Media hora, con quien tenga el problema a su cargo en la sala. Recorreremos de principio a fin un ejemplo real suyo."
  book_cta: "Elija una hora"
  form_title: "O escríbanos"
  form_deck: "Cuéntenos qué le está costando, con sus palabras. Respondemos en un día hábil."
  name_label: "Nombre completo"
  name_placeholder: "Ana Pérez"
  email_label: "Correo de trabajo"
  email_placeholder: "ana@empresa.com"
  company_label: "Empresa"
  company_placeholder: "Su organización"
  source_label: "¿Cómo supo de nosotros?"
  source_default: "Seleccione una opción"
  source_options:
    - { value: "Referral", text: "Alguien nos recomendó" }
    - { value: "LinkedIn", text: "LinkedIn" }
    - { value: "Web Search", text: "Búsqueda web" }
    - { value: "Event", text: "Un evento" }
    - { value: "Other", text: "Otro" }
  message_label: "¿Qué problema intenta resolver?"
  message_placeholder: "Basta con un ejemplo: una entrada retenida, un siniestro, una conciliación que lleva una semana."
  submit: "Enviar mensaje"
  note: "Usamos lo que nos envía aquí para responderle y para nada más."
  done_title: "Mensaje recibido"
  done_body: "Gracias. Le responderemos en un día hábil."
---
