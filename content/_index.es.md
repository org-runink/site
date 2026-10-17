---
# Traducción de content/_index.md. Ver la cabecera de layouts/index.html.
# NINGÚN NÚMERO EN ESTA PÁGINA (CONTENT.md regla 1). SIN ALIASES.
title: "Runink"
seo_title: "Runink FACE | Dispute cada sobrecoste de flete"
seo_description: "Runink FACE revisa cada factura de flete contra sus tarifas y registros, redacta la disputa o la reclamación con la evidencia y la envía cuando usted aprueba."
image: "/images/og/home-og.jpg"
description: "Runink FACE: Fulfilment Autonomous Claims Engine. Revisa cada factura de flete contra sus tarifas y registros, redacta la disputa o la reclamación con la evidencia adjunta y la envía cuando una persona con nombre la aprueba. Corre en sus propios servidores o en su nube, sin servicio de IA externo."
ground: "console"
date: "2024-05-20T00:00:00Z"
author: "Runink"

hero:
  eyebrow: "Para responsables de operaciones de campo e ingresos"
  line1: "Dispute cada sobrecoste."
  line2: "No solo los grandes."
  sub: "Runink FACE revisa cada factura de flete contra sus tarifas y registros, redacta la disputa con la evidencia adjunta y la envía cuando usted aprueba."
  cta_primary: "Envíe un mes de facturas"
  cta_secondary: "Vea cómo funciona"
  note: "Runink FACE: Fulfilment Autonomous Claims Engine. Corre en sus servidores, en su nube o en la nuestra."
  shot:
    src: ""
    alt: ""
    caption: ""
  card:
    alt: "Una disputa de flete redactada en Runink FACE, con la norma incumplida, los tres registros que la respaldan, la causa probable y los botones Aprobar, Editar y Rechazar."
    title: "runink face · órdenes del día"
    status: "ESPERA SU DECISIÓN"
    kind: "Disputa redactada · factura del transportista"
    head: "El peso facturado es mayor que el peso del ticket de báscula."
    rule_label: "Norma:"
    rule: "facturar con el peso registrado en la recogida, a la tarifa del acuerdo."
    records_label: "Registros adjuntos"
    records:
      - { tag: "INV", name: "carrier_invoice_7731.pdf", state: "leído" }
      - { tag: "BOL", name: "bill_of_lading_MSKU4419.pdf", state: "leído" }
      - { tag: "RATE", name: "rate_agreement_2026.xlsx", state: "comparado" }
    cause_label: "Causa probable"
    cause: "El transportista volvió a pesar en el centro de distribución y facturó ese peso. Misma ruta, mismo patrón en facturas anteriores."
    acts: ["Aprobar", "Editar", "Rechazar"]
    stamp: "Aprobado por A. Morgan · 09:14 · disputa enviada con tres registros"
    caption: "Ejemplo dibujado de una disputa redactada. Los nombres y registros son ilustrativos."

problem:
  heading: "Disputar una factura lleva una mañana. Por eso casi todas se pagan."
  before_label: "Hoy"
  before:
    - "Alguien busca el comprobante, el peso y la tarifa de una sola factura."
    - "Solo los sobrecostes grandes justifican esa mañana."
    - "Las reclamaciones pequeñas vencen dentro del plazo."
    - "El mismo transportista repite el mismo error el mes siguiente."
  after_label: "Con Runink FACE"
  after:
    - "Cada factura se revisa contra sus tarifas y registros."
    - "Cada sobrecoste llega como una disputa redactada, con los registros adjuntos."
    - "Las reclamaciones se redactan mientras el plazo sigue abierto."
    - "La causa queda ordenada, para corregirla en su origen."

how:
  heading: "Cómo funciona"
  steps:
    - title: "Lee lo que ya guarda"
      body: "Facturas, pedidos, pruebas de entrega, expedientes de reclamación, registros portuarios y sensores, desde los sistemas que ya usa. Nada que sustituir."
    - title: "Redacta la acción"
      body: "Una disputa, una reclamación o una orden de cumplimiento, con la norma incumplida, los registros que la respaldan y la causa probable."
    - title: "Usted la aprueba"
      body: "Un clic la envía. Su nombre, la hora y cualquier cambio quedan en el registro, para que el motivo se sostenga después."
  more: { text: "Todo lo que hace FACE (en inglés)", url: "/products/face/" }

leaks:
  heading: "Seis lugares por donde se escapan los ingresos"
  items:
    - verb: "Detéctelo"
      title: "Sobrecostes del transportista y facturas duplicadas"
      line: "Cada factura revisada contra sus tarifas, no solo las grandes."
      owner: "Auditoría de fletes · Finanzas"
    - verb: "Reclámelo"
      title: "Reclamaciones por daños, faltantes y retrasos"
      line: "Redactadas dentro del plazo del transportista, con la evidencia adjunta."
      owner: "Reclamaciones"
    - verb: "Libérelo"
      title: "Demoras y detención"
      line: "El contenedor retenido y el documento que falta, nombrados mientras corre el cargo."
      owner: "Operaciones · Cumplimiento aduanero"
    - verb: "Rehágalo"
      title: "Planes de cumplimiento obsoletos"
      line: "Órdenes de cumplimiento redactadas con datos en vivo cuando el plan de la mañana deja de servir."
      owner: "Operaciones de campo"
    - verb: "Pruébelo"
      title: "Pérdidas en la cadena de frío"
      line: "La foto de la puerta leída junto a los documentos, y la reclamación redactada."
      owner: "Operaciones de campo · Calidad"
    - verb: "Corríjalo"
      title: "La misma pérdida cada mes"
      line: "Causas ordenadas según cuánto cambiaría corregir cada una."
      owner: "CRO · Operaciones de ingresos"
  more: { text: "Recorra una reclamación, del registro a la aprobación", url: "/es/use-cases/claims-recovery/" }

machines:
  heading: "Corre en sus máquinas"
  lead: "La mayoría de las herramientas de este mercado son un servicio alojado. FACE puede correr en sus propios servidores o en su nube, así que facturas, reclamaciones y documentos aduaneros se quedan donde están."
  facts:
    - title: "Sus servidores o su nube"
      body: "Con las licencias Dedicada y Enterprise, el trabajo corre en máquinas que usted controla. Lite corre en las máquinas compartidas de Runink."
    - title: "Sin servicio de IA externo"
      body: "El modelo de lenguaje corre donde corre FACE. Con cualquier licencia, nada se envía a un proveedor de modelos externo."
    - title: "Sus sistemas quedan como están"
      body: "FACE lee sus registros y los deja como están. Nada que migrar, ni un nuevo sistema de registro."
    - title: "Un registro de cada decisión"
      body: "Quién aprobó, cuándo y qué cambió queda con cada acción, listo para cuando lo pida un auditor."
  more: { text: "Confianza y cumplimiento", url: "/es/trust/" }

compare:
  heading: "Software que usted opera, no un servicio que reclama por usted"
  col_topic: "Pregunta"
  col_them: "Un servicio de recobro externo"
  col_us: "Runink FACE"
  rows:
    - topic: "Qué lee"
      them: "Las facturas que usted entrega, a menudo con sus accesos del transportista."
      us: "Los registros que sus sistemas ya guardan: pedidos, facturas, reclamaciones, documentos, fotos y datos en vivo."
    - topic: "Qué devuelve"
      them: "Un abono y una lista de lo reclamado."
      us: "Una disputa, reclamación u orden redactada, con la causa y los registros que la respaldan."
    - topic: "Quién decide"
      them: "El servicio reclama en su nombre."
      us: "Una persona con nombre de su equipo aprueba cada una."
    - topic: "Adónde van sus registros"
      them: "A los sistemas del proveedor."
      us: "A las máquinas que nombra su licencia. Ningún servicio de IA externo los ve."
  note: "Los precios, incluida la comisión de éxito sobre las reclamaciones recuperadas, están en la [página de precios](/es/pricing/)."

offer:
  heading: "Empiece con un mes de facturas"
  lead: "La forma más rápida de saber si encaja son sus propios registros. No ponemos ninguna cifra en esta página; su mes le mostrará la suya."
  steps:
    - title: "Usted envía un mes"
      body: "Facturas de flete o reclamaciones, y la hoja de tarifas con la que deberían coincidir."
    - title: "Lo leemos en FACE"
      body: "Cada factura contra su tarifa y sus registros. Nada va a un servicio de IA externo."
    - title: "Lo recorremos con usted"
      body: "Media hora con quien es dueño del problema: lo encontrado, las acciones redactadas y sus causas."
  cta: "Envíe un mes de facturas"

faq:
  heading: "Preguntas"
  groups:
    - label: "Recobro"
      items:
        - q: "¿Qué es la fuga de ingresos en logística?"
          a: "Dinero que se le debía a un cargador, o que nunca debió pagar, y que no recuperó: sobrecostes del transportista, facturas pagadas dos veces, reclamaciones vencidas, demoras de un contenedor retenido y pedidos fuera de plazo."
        - q: "¿Cómo encuentro sobrecostes de flete sin revisar cada factura a mano?"
          a: "Compare cada factura con los registros que la respaldan: el comprobante, el peso y la tarifa vigente ese día. Runink FACE lo hace con cada factura y redacta la disputa para que su analista la apruebe."
        - q: "¿Cómo evito que venzan las reclamaciones de flete?"
          a: "Haga que cada reclamación sea barata de armar. FACE reúne la factura del flete, la prueba de entrega y sus condiciones de servicio, y redacta la reclamación dentro del plazo del transportista."
    - label: "Cómo funciona"
      items:
        - q: "¿Qué es un gemelo accionable?"
          a: "Una copia viva de un sitio, un activo o un pedido, actualizada con sus propios registros. FACE compara cada gemelo con sus normas y convierte lo que difiere en una acción redactada para que una persona la apruebe."
        - q: "¿Cómo encuentra FACE la causa raíz de una pérdida?"
          a: "Para cada reclamación enumera las causas, estima cuánto cambiaría el resultado corregir cada una y las ordena, con los registros de cada una."
        - q: "¿Tenemos que sustituir nuestro TMS, WMS o ERP?"
          a: "No. FACE lee de los sistemas que ya usa y deja sus registros como están."
    - label: "Compra"
      items:
        - q: "¿FACE es un servicio externo de recobro?"
          a: "No. Es software que opera su equipo, y una persona con nombre aprueba cada disputa, reclamación y orden. Los precios, incluida la comisión de éxito sobre las reclamaciones recuperadas, están en la [página de precios](/es/pricing/)."
        - q: "¿Nuestros datos salen de nuestros servidores?"
          a: "Con las licencias Dedicada y Enterprise, FACE corre en sus propios servidores o en su nube. Con cualquier licencia, nada se envía a un proveedor externo de modelos de IA."
        - q: "¿Quién lo usa en la empresa?"
          a: "Los gerentes de operaciones de campo para órdenes de cumplimiento y excepciones, los equipos de reclamaciones y auditoría de fletes para disputas y reclamaciones, y los responsables de ingresos para lo recuperado y por qué se perdió."

more:
  label: "Más de Runink"
  groups:
    - label: "Sectores (en inglés)"
      links:
        - { text: "Logistics & Supply Chain", url: "/industries/logistics-supply-chain/" }
        - { text: "Insurance", url: "/industries/insurance/" }
        - { text: "Banking & Financial Services", url: "/industries/banking-financial-services/" }
        - { text: "Telecom", url: "/industries/telecom/" }
        - { text: "Marketing", url: "/industries/marketing/" }
    - label: "Productos (en inglés)"
      links:
        - { text: "Runink FACE: Fulfilment Autonomous Claims Engine", url: "/products/face/" }
        - { text: "Runink PULSE: Prescriptive Unified Lead & Social Engine", url: "/products/pulse/" }
        - { text: "Runink TIDE: Trusted Intelligence for Developer & Data Experience", url: "/products/tide/" }
        - { text: "Runink River", url: "/river/" }
    - label: "Empresa"
      links:
        - { text: "Quién lo construye", url: "/es/company/" }
        - { text: "Precios", url: "/es/pricing/" }
        - { text: "Biblioteca", url: "/es/library/" }
        - { text: "Confianza y cumplimiento", url: "/es/trust/" }

contact:
  heading: "Envíe un mes de facturas."
  deck: "Facturas de flete o reclamaciones, y la hoja de tarifas con la que deberían coincidir. Si sus pérdidas no tienen la forma que FACE resuelve, se lo diremos."
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
  about_prefix: "Sobre: "
  message_label: "¿Qué problema intenta resolver?"
  message_placeholder: "Basta con un ejemplo: una entrada retenida, un siniestro, una conciliación que lleva una semana."
  submit: "Enviar mensaje"
  note: "Usamos lo que nos envía aquí para responderle y para nada más."
  done_title: "Mensaje recibido"
  done_body: "Gracias. Le responderemos en un día hábil."
---
