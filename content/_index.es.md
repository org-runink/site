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
  sub: "Runink FACE revisa cada factura de flete contra sus tarifas y registros, redacta la disputa y la envía cuando usted aprueba."
  cta_primary: "Envíe un mes de facturas"
  cta_secondary: "Vea cómo funciona"
  note: "Runink FACE: Fulfilment Autonomous Claims Engine. En sus servidores o los nuestros. Sin servicio de IA externo."
  shot:
    src: ""
    alt: ""
    caption: ""
  card:
    alt: "Una disputa de flete redactada en Runink FACE, con la norma incumplida, los tres registros que la respaldan, la causa probable y los botones Aprobar, Editar y Rechazar."
    title: "runink face · órdenes del día"
    status: "ESPERA SU DECISIÓN"
    kind: "Disputa redactada · factura del transportista"
    head: "El peso facturado supera el del ticket de báscula."
    rule_label: "Norma:"
    rule: "facturar el peso de recogida a la tarifa acordada."
    records_label: "Registros adjuntos"
    records:
      - { tag: "INV", name: "carrier_invoice_7731.pdf", state: "leído" }
      - { tag: "BOL", name: "bill_of_lading_MSKU4419.pdf", state: "leído" }
      - { tag: "RATE", name: "rate_agreement_2026.xlsx", state: "comparado" }
    cause_label: "Causa probable"
    cause: "Repesado en el centro. Misma ruta, mismo patrón antes."
    acts: ["Aprobar", "Editar", "Rechazar"]
    stamp: "Aprobado por A. Morgan · 09:14 · enviado con tres registros"
    caption: "Ejemplo dibujado. Nombres y registros ilustrativos."

how:
  heading: "Cómo funciona"
  steps:
    - title: "Lee lo que ya guarda"
      body: "Facturas, pedidos, reclamaciones, registros portuarios y sensores. Nada que sustituir."
    - title: "Redacta la acción"
      body: "Una disputa, reclamación u orden, con la norma, los registros y la causa probable."
    - title: "Usted la aprueba"
      body: "Un clic la envía. Su nombre y la hora quedan en el registro."
  more: { text: "Todo lo que hace FACE (en inglés)", url: "/products/face/" }

leaks:
  heading: "Seis lugares por donde se escapan los ingresos"
  items:
    - { verb: "Detéctelo", title: "Sobrecostes y facturas duplicadas", line: "Cada factura revisada contra sus tarifas.", owner: "Auditoría de fletes · Finanzas" }
    - { verb: "Reclámelo", title: "Daños, faltantes y retrasos", line: "Redactadas dentro del plazo, con la evidencia.", owner: "Reclamaciones" }
    - { verb: "Libérelo", title: "Demoras y detención", line: "El contenedor retenido y el documento que falta, a tiempo.", owner: "Operaciones · Cumplimiento aduanero" }
    - { verb: "Rehágalo", title: "Planes de cumplimiento obsoletos", line: "Nuevas órdenes cuando el plan de la mañana falla.", owner: "Operaciones de campo" }
    - { verb: "Pruébelo", title: "Pérdidas en la cadena de frío", line: "Foto de la puerta y documentos, reclamación redactada.", owner: "Operaciones de campo · Calidad" }
    - { verb: "Corríjalo", title: "La misma pérdida cada mes", line: "Causas ordenadas por la corrección que más importa.", owner: "CRO · Operaciones de ingresos" }
  more: { text: "Cómo presentar una reclamación a tiempo", url: "/es/use-cases/claims-recovery/" }

machines:
  heading: "Corre en sus máquinas"
  facts:
    - { title: "Sus servidores o su nube", body: "Dedicada y Enterprise corren en máquinas que usted controla." }
    - { title: "Sin servicio de IA externo", body: "El modelo corre donde corre FACE, con cualquier licencia." }
    - { title: "Cada decisión registrada", body: "Quién aprobó, cuándo y qué cambió." }
  more: { text: "Confianza y cumplimiento", url: "/es/trust/" }

compare:
  heading: "Software que usted opera, no un servicio que reclama por usted"
  col_topic: "Pregunta"
  col_them: "Servicio de recobro externo"
  col_us: "Runink FACE"
  rows:
    - { topic: "Qué lee", them: "Las facturas que entrega, a menudo con sus accesos.", us: "Todo registro que sus sistemas ya guardan." }
    - { topic: "Qué devuelve", them: "Un abono.", us: "Una acción redactada, su causa y sus registros." }
    - { topic: "Quién decide", them: "El servicio.", us: "Una persona con nombre de su equipo." }
    - { topic: "Adónde van los registros", them: "A los sistemas del proveedor.", us: "A las máquinas de su licencia." }
  note: "Precios, incluida la comisión de éxito sobre reclamaciones recuperadas: [precios](/es/pricing/)."

offer:
  heading: "Empiece con un mes de facturas"
  steps:
    - { title: "Envíe un mes", body: "Facturas o reclamaciones, y su hoja de tarifas." }
    - { title: "Lo leemos en FACE", body: "Cada línea, contra su tarifa y sus registros." }
    - { title: "Lo recorremos con usted", body: "Media hora: hallazgos, borradores y causas." }
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
