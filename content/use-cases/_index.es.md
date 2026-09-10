---
title: "Para Qué Está Hecho Runink FACE"
# Spanish mirror of content/use-cases/_index.md — read that file first.
#
# This section is Runink FACE's scenarios and nothing else. Runink PULSE
# (market analysis) is a separate product with its own material, and CORE is the
# platform underneath both; neither of their capabilities may be listed here,
# because a reader who cannot tell which product does which job reads the whole
# set as one product's track record. The previous version of this file was
# titled "Para Qué Usa La Gente Runink" and named no product at all.
product: "Runink FACE"
# Do not state a count in the title or the description. This file said "Siete"
# in three places and was wrong the moment a page was added. The set keeps
# growing; the English file states no number either.
description: "Los trabajos operativos para los que está hecho Runink FACE. En todos ellos la evidencia ya está en sus sistemas y nadie tiene las horas para juntarla, y todos acaban con una persona aprobando una acción redactada, no leyendo otro panel."
# CARD LINKS STAY UNPREFIXED. layouts/shortcodes/card.html passes every relative
# link through relLangURL, so "/use-cases/compliance/" written here renders as
# "/es/use-cases/compliance/"; writing "/es/..." would render "/es/es/...".
# The consequence is that a card in this file can only point at a page that
# exists in Spanish. Every page in this section is now translated, so this index
# carries the same cards in the same four groups as the English one. If a new
# English page appears before its Spanish translation, leave its card out rather
# than link a page that is not there.
#
# Markdown links in the body are NOT rewritten by Hugo (there is no
# render-link hook), so they carry an explicit /es/ prefix by hand.
#
# KNOWN ISSUE — as in the English file: layout "section" has no match, so this
# page falls through to layouts/_default/list.html, which prints the title and
# the description and then an automatic card grid of the child pages, and never
# prints .Content. Until that is fixed, the attribution that actually reaches a
# reader is the title and description above.
layout: "section"
---

## El Problema Del Que Parte Runink FACE

Todos los trabajos de abajo tienen la misma forma. Los datos que necesita ya están registrados en algún punto de su negocio. Están en cuatro sistemas, en cuatro formatos, y juntarlos cuesta una mañana que nadie tiene.

Así que la reclamación caduca. El contenedor se abre caliente. El pedido sale por avión. No porque alguien decidiera mal, sino porque nadie tuvo tiempo de llegar al punto en el que se podía decidir.

<!-- CALIBRACIÓN — no devuelva la frase sobre la aprobación a su versión
     absoluta ("nada sale de su empresa antes de que alguien lo apruebe", ni
     ningún umbral del tipo "todo lo que pase de X espera a una persona"). No
     hay ninguna barrera global. face/grpc/cmd/compliance_server.go:149-155 lo
     dice con las palabras de FACE: REQUIRE_HITL "no lo lee ningún código de
     este repositorio salvo esta función, así que activarlo no exige nada …
     nada consulta esta variable para forzar el paso de una acción".

     Lo que es cierto, y todo lo que puede afirmarse:
     twinsService.ExecuteAction (face/grpc/cmd/agent_services.go:6350) exige un
     almacén configurado, carga una acción YA GUARDADA por su id, se bifurca
     según req.UserApproval y registra HITL_DECISION_PROCESSED con
     auditActorFrom(ctx) y la decisión. Es decir: una acción redactada espera
     en la cola, aprobarla es lo que la envía, y quién aprobó y qué decidió
     queda en el registro. -->

## Qué Hace Runink FACE Al Respecto

FACE está hecho para ejecutar sus comprobaciones contra sus propios registros durante la noche, de modo que la mañana empiece con una lista corta y ordenada de lo que ha pasado, con los registros adjuntos.

Cada punto está pensado como una **acción propuesta**, no como un aviso. La reclamación llega con el recibo, la lectura, la tarifa y el plazo, y con una carta redactada. La desviación de temperatura llega con el contenedor, el cliente y un cambio de ruta ya redactado.

Una acción propuesta espera en esa cola como un registro más. Aprobarla es el paso que la ejecuta, y la aprobación queda escrita con el nombre de quien la dio y lo que decidió. Una acción que nadie aprueba es una acción que no se ha enviado.

Fíjese en lo que eso es y en lo que no es. Es una cola cuyos elementos se mueven porque los movió una persona con nombre, y un registro de quién los movió; no una barrera en algún punto del sistema que inspeccione todo lo demás que hace su empresa. Cuando parte de una acción redactada no se puede llevar a cabo, lo que vuelve lo dice en lugar de darla por hecha.

Aprobar está pensado para terminar el trabajo, no para empezarlo. El mensaje, el plazo y la actualización de su sistema de registro se derivan de la aprobación. Más tarde, cuando alguien pregunte por qué se presentó una reclamación o por qué se retuvo una entrada, la respuesta sale del registro.

## Dos Cosas Que Conviene Saber De Entrada

**Sus datos se quedan en sus máquinas.** Los ficheros de pedidos, los papeles de aduana, las lecturas de los sensores y el razonamiento sobre todo ello se ejecutan en hardware que usted controla: FACE corre sobre la plataforma Runink CORE, y eso es lo que hace de ello una propiedad de cómo está construido y no un ajuste que alguien tenga que respetar. Nada va a un proveedor de modelos externo. Esa es la clase de respuesta que pide una revisión de seguridad antes de dejar que un proveedor guarde sus datos de pedido.

**La cola es donde usted decide.** Cada elemento llega con su razonamiento y con los registros en los que se apoya, así que puede leer por qué se propuso antes de aceptarlo. Lo que usted aprueba es lo que se lleva a cabo, y lo que deja quieto se queda donde está. Qué clase de trabajo merece pasar por la cola es algo que usted responde al montarlo, no un umbral de importe que el software vigile en su nombre.

## En Qué Punto Están Estos Escenarios

Ninguno de los escenarios de abajo es un resultado de cliente. Están **trazados**: escritos a partir de lo que el software está hecho para hacer, en el vocabulario de quien tiene el problema a su cargo, y no ejecutados contra los datos de ningún cliente. Ninguno está medido, y cada página lo dice por su cuenta. Aquí no hay ningún caso de éxito ni ninguna cifra, porque las cifras serían nuestras y las que importan son las suyas.

## Planificar Lo Que Va A Necesitar

{{< card-grid cols="3" >}}

{{< card
    title="Previsión de demanda"
    icon="chart-bar"
    link="/use-cases/demand-forecasting/"
    description="Lo que va a necesitar el trimestre que viene está implícito en lo que vendió el año pasado. Leer eso en su propio historial es un trabajo para el que nadie tiene la mañana."
>}}

{{< card
    title="Cobertura de stock y planificación con proveedores"
    icon="cube-transparent"
    link="/use-cases/fulfillment-optimization/"
    description="Un aviso de rotura que llega cuando el stock de seguridad ya se ha ido es una factura de avión con pocos días de margen."
>}}

{{< card
    title="Poner a prueba un cambio antes de comprometerse"
    icon="light-bulb"
    link="/use-cases/hypothesis-lab/"
    description="Calcule lo que cuesta un cambio de ruta antes de gastar el dinero, contra sus propios números y no contra los de un proveedor."
>}}

{{< /card-grid >}}

## Mover La Carga

{{< card-grid cols="3" >}}

{{< card
    title="Planificación de rutas que sigue el ritmo del día"
    icon="globe-alt"
    link="/use-cases/route-optimization/"
    description="La ruta más barata el lunes no es la más barata el jueves. Volver a planificarla a mano es la razón de que se planifique una sola vez."
>}}

{{< card
    title="Ver la cadena entera, no solo su extremo"
    icon="eye"
    link="/use-cases/supply-chain-visibility/"
    description="Cada proveedor, transportista y almacén tiene una pieza de la foto. La foto en sí no está en ninguna parte."
>}}

{{< card
    title="Reparto por voz para conductores"
    icon="map"
    link="/use-cases/voice-dispatch/"
    description="Un conductor que tiene que parar para leer una pantalla, o para o no la lee. Ninguna de las dos cosas es lo que usted quería."
>}}

{{< /card-grid >}}

## Cuando Algo Sale Mal

{{< card-grid cols="3" >}}

{{< card
    title="Cadena de frío y seguridad en el patio"
    icon="shield-check"
    link="/use-cases/cold-chain-safety/"
    description="La lectura que condena una carga se registra horas antes de que alguien la mire. Todo el problema es el hueco entre las dos cosas."
>}}

{{< card
    title="Devoluciones y lo que todavía valen"
    icon="arrow-path"
    link="/use-cases/responsive-reverse-logistics/"
    description="Una devolución parada en una bahía es circulante que nadie ha contado. Lo que vale depende de lo rápido que se juzgue."
>}}

{{< card
    title="Reclamaciones de transporte y cargos de puerto"
    icon="currency-dollar"
    link="/use-cases/claims-recovery/"
    description="Las reclamaciones caducan porque montar una cuesta una mañana. El recibo, el peso, la tarifa y el plazo llegan ya reunidos."
>}}

{{< /card-grid >}}

## Papel, Normativa Y Prueba

{{< card-grid cols="3" >}}

{{< card
    title="Expedientes de suscripción y de siniestro"
    icon="clipboard-document-list"
    link="/use-cases/insurance-underwriting/"
    description="Un siniestro es una reserva contra una póliza, y el expediente que lo liquida llega en forma de documentos. La lectura se le redacta; la decisión se queda con quien suscribe."
>}}

{{< card
    title="Revisión de contratos y obligaciones"
    icon="magnifying-glass"
    link="/use-cases/paralegal-review/"
    description="La cláusula que importa está en un contrato que nadie ha vuelto a abrir. Se lee y se cita por usted, y una persona decide qué significa."
>}}

{{< card
    title="Datos personales de clientes e informes de emisiones"
    icon="scale"
    link="/use-cases/compliance/"
    description="Los datos personales llegan a pantallas que no deberían mostrarlos, y el informe de emisiones cuesta un trimestre. Los dos son trabajos de juntar registros."
>}}

{{< /card-grid >}}

## Vea Si Le Encaja

Traiga una ruta, un transportista o un mes de devoluciones. Una conversación corta suele bastar para saber si las pérdidas que usted carga tienen la forma de las que se describen aquí.

Runink PULSE, el producto de análisis de mercado, y la plataforma CORE sobre la que corre FACE se tratan en [sus propios informes](/es/blog/whitepapers/). No están en esta página, y ninguno de los trabajos de arriba es un resultado que pertenezca a ninguno de los dos.
