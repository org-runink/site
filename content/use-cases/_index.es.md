---
title: "Para Qué Está Hecho Runink FACE"
product: "Runink FACE"
description: "Los trabajos operativos para los que está hecho Runink FACE. En todos ellos la evidencia ya está en sus sistemas y nadie tiene las horas para juntarla, y todos acaban con una persona aprobando una acción redactada, no leyendo otro panel."
layout: "section"

# The coverage index lives in front matter so layouts/use-cases/section.html can
# render it ABOVE the argument with real hierarchy. It used to be five card-grid
# shortcodes in the body: twelve cards of equal width and height under 3,000px of
# full-bleed prose, which cannot show that the groups mean anything.
#
# CONTENT.md rule 12: this is a page, not a copy. The group labels and the short
# names here are this language's own wording, and the line rendered under each
# name is read off that language's child page at render time.
#
# `name` is the short domain label a reader scans. Do not state a count anywhere
# — the number beside the heading is computed from len .Pages in the template.
coverage_heading: "Qué cubre"
coverage_meta: "trabajos"
coverage_intro: "Están agrupados por el momento de la operación en que aparece el problema: antes de comprometerse con un plan, con el trabajo ya en marcha, después de que algo haya salido mal, y cuando alguien le pide pruebas."
groups_other_label: "También aquí"
groups:
  - label: "Planificar lo que va a necesitar"
    deck: "Antes de comprometerse. Qué va a pedir el próximo trimestre, qué cobertura tiene y cuánto costaría un cambio si lo hiciera."
    items:
      - page: "demand-forecasting"
        name: "Previsión de demanda"
      - page: "fulfillment-optimization"
        name: "Cobertura de stock y planificación con proveedores"
      - page: "hypothesis-lab"
        name: "Poner a prueba un cambio antes de comprometerse"
  - label: "Mover la carga"
    deck: "Con el trabajo ya en marcha. La ruta, la imagen de toda la cadena y el conductor que lleva las manos en el volante."
    items:
      - page: "route-optimization"
        name: "Planificación de rutas"
      - page: "supply-chain-visibility"
        name: "Visibilidad de la cadena de suministro"
      - page: "voice-dispatch"
        name: "Reparto por voz para conductores"
  - label: "Cuando algo sale mal"
    deck: "Después del hecho. Un contenedor que se ha calentado, una devolución parada en el muelle, una reclamación con el plazo corriendo."
    items:
      - page: "cold-chain-safety"
        name: "Cadena de frío y seguridad en el patio"
      - page: "responsive-reverse-logistics"
        name: "Devoluciones y logística inversa"
      - page: "claims-recovery"
        name: "Reclamaciones de transporte y cargos de puerto"
  - label: "Papel, normativa y prueba"
    deck: "Cuando alguien le pide pruebas. El expediente del siniestro, la cláusula que manda, el informe."
    items:
      - page: "insurance-underwriting"
        name: "Suscripción y expedientes de siniestro"
      - page: "paralegal-review"
        name: "Revisión de contratos y obligaciones"
      - page: "compliance"
        name: "Datos personales y emisiones"

next:
  label: "Un paso más"
  title: "Traiga una ruta, un transportista o un mes de devoluciones."
  body: "Media hora, con quien lleva el problema en la sala, y recorremos ese ejemplo de principio a fin. Si las pérdidas que usted carga no tienen la forma de las descritas aquí, se lo diremos."
  cta: "Reservar una consulta"
  note: "El formulario se abre con los escenarios ya indicados, así que no empieza explicando de dónde viene."
  about: "Los escenarios"

---
## El Problema Del Que Parte Runink FACE

Todos los trabajos de arriba tienen la misma forma. Los datos que necesita ya están registrados en algún punto de su negocio. Están en cuatro sistemas, en cuatro formatos, y juntarlos cuesta una mañana que nadie tiene.

Así que la reclamación caduca. El contenedor se abre caliente. El pedido sale por avión. No porque alguien decidiera mal, sino porque nadie tuvo tiempo de llegar al punto en el que se podía decidir.

## Qué Hace Runink FACE Al Respecto

FACE está hecho para ejecutar sus comprobaciones contra sus propios registros durante la noche, de modo que la mañana empiece con una lista corta y ordenada de lo que ha pasado, con los registros adjuntos.

Cada punto está pensado como una **acción propuesta**, no como un aviso. La reclamación llega con el recibo, la lectura, la tarifa y el plazo, y con una carta redactada. La desviación de temperatura llega con el contenedor, el cliente y un cambio de ruta ya redactado.

Una acción propuesta espera en esa cola como un registro más. Aprobarla es el paso que la ejecuta, y la aprobación queda escrita con el nombre de quien la dio y lo que decidió. Una acción que nadie aprueba es una acción que no se ha enviado.

Fíjese en lo que eso es y en lo que no es. Es una cola cuyos elementos se mueven porque los movió una persona con nombre, y un registro de quién los movió; no una barrera en algún punto del sistema que inspeccione todo lo demás que hace su empresa. Cuando parte de una acción redactada no se puede llevar a cabo, lo que vuelve lo dice en lugar de darla por hecha.

Aprobar está pensado para terminar el trabajo, no para empezarlo. La respuesta nombra lo que salió y lo que no: un conector de correo sin configurar vuelve como un paso omitido, con su motivo, en cada respuesta. Más tarde, cuando alguien pregunte por qué se presentó una reclamación o por qué se retuvo una entrada, la respuesta sale del registro.

## Dos Cosas Que Conviene Saber De Entrada

**Sus datos se quedan en sus máquinas.** Los ficheros de pedidos, los papeles de aduana, las lecturas de los sensores y el razonamiento sobre todo ello se ejecutan en hardware que usted controla: FACE corre sobre la plataforma Runink CORE, y eso es lo que hace de ello una propiedad de cómo está construido y no un ajuste que alguien tenga que respetar. Nada va a un proveedor de modelos externo. Esa es la clase de respuesta que pide una revisión de seguridad antes de dejar que un proveedor guarde sus datos de pedido.

**La cola es donde usted decide.** Cada elemento llega con su razonamiento y con los registros en los que se apoya, así que puede leer por qué se propuso antes de aceptarlo. Lo que usted aprueba es lo que se lleva a cabo, y lo que deja quieto se queda donde está. Qué clase de trabajo merece pasar por la cola es algo que usted responde al montarlo, no un umbral de importe que el software vigile en su nombre.

## En Qué Punto Están Estos Escenarios

Ninguno de los escenarios de arriba es un resultado de cliente. Están escritos a partir de lo que el software está hecho para hacer, en el vocabulario de quien tiene el problema a su cargo, y no se han ejecutado contra los datos de ningún cliente. Aquí no hay ningún caso de éxito ni ninguna cifra, porque las cifras serían nuestras y las que importan son las suyas.

Runink PULSE, el producto de análisis de mercado, y la plataforma CORE sobre la que corre FACE se tratan en [sus propios informes](/es/blog/whitepapers/). No están en esta página, y ninguno de los trabajos de arriba es un resultado que pertenezca a ninguno de los dos.
