---
# Front matter only — see the notes in content/_index.md. The same rules apply
# here: no figures of any kind, no aliases, and nothing below the front matter.
#
# The industry names stay in English because the industry pages themselves are
# English and hugo.toml already lists them in English in the Spanish menu. The
# link goes to the same /industries/... page in every language.
title: "Runink"
description: "Entradas aduaneras retenidas, siniestros resueltos sin la evidencia que ya estaba en el expediente, tráfico cursado y nunca tarificado. La respuesta suele estar ya en sus propios registros. Runink FACE los lee todos y pone una acción concreta delante de la persona que puede aprobarla."
date: "2024-05-20T00:00:00Z"
author: "Runink"
hero:
  eyebrow: "Para operaciones, finanzas y cumplimiento"
  line1: "La respuesta ya está en sus registros."
  line2: "Nunca hubo tiempo de leerlos todos."
  deck: "Una entrada aduanera retenida por un documento que falta mientras corre el cargo diario. Un siniestro resuelto sin la evidencia que ya estaba en el expediente. Tráfico cursado y nunca tarificado. En todos los casos quedó escrito en algún sitio primero, y después se leyó por muestreo, tarde, o no se leyó."
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
  note: "Debajo del nombre: agentes que leen los registros y redactan la acción, una pantalla de revisión para quien tiene la decisión a su cargo, y la plataforma que mantiene ambas cosas dentro de su propia red."

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
