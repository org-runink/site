---
# Front matter only — see the notes in content/_index.md. The same rules apply
# here: no figures of any kind, no aliases, and nothing below the front matter.
#
# The industry names stay in English because the industry pages themselves are
# English and hugo.toml already lists them in English in the Spanish menu. The
# link goes to the same /industries/... page in every language.
title: "Runink"
description: "Usted se entera cuando ya es tarde para reclamar. Un contenedor espera porque un documento está mal y el cargo empieza ese mismo día. Runink FACE lee los registros que sus sistemas ya guardan, compara cada uno con la norma que lo rige y pone una acción redactada delante de quien decide."
# THE HOME PAGE IS DARK, AND IT IS THE ONLY MARKETING PAGE THAT IS.
#
# `ground: console` puts data-ground on <html>, which re-binds every --rk-*
# token to the dark end of the same ramp — one identity, two registers
# (DESIGN.md 8), not a second palette. The rest of the site keeps the sheet.
#
# It is a default, not a lock: a reader who has used the switch in the header
# has their choice stored, and rk-ground-script.html overwrites this attribute
# with it before first paint. The printed sheet is unaffected either way —
# tokens.css binds the console ground to white and black under @media print.
ground: "console"
date: "2024-05-20T00:00:00Z"
author: "Runink"
hero:
  eyebrow: "Logística · Seguros · Banca · Telecomunicaciones · Marketing"
  line1: "Usted se entera cuando"
  line2: "ya es tarde para reclamar."
  deck: "Un refrigerado se calienta de noche. Un umbral de revisión se sube para vaciar una cola y nunca se vuelve a bajar. Un cambio de tarifa es correcto para la promoción y erróneo para un plan antiguo. Todos estaban escritos en algún sitio antes de costar nada."
  fig_label: "Cada registro, leído contra su propia regla"
  stance_label: "Nuestra postura"
  stance:
    - "Una acción que el software toma por su cuenta no deja a nadie a quien preguntar después."
    - "Así que este redacta, y espera."
    - "La aprobación es el registro: un nombre, una hora y el motivo por el que se envió, juntos."
  product_line: "**Runink FACE** es el producto que hay detrás: lee los registros que sus sistemas ya guardan, compara cada uno con la norma que lo rige y pone una acción redactada delante de quien tiene la decisión a su cargo."
  cta_primary: "Encuentre su sector"
  cta_secondary: "Agende una consulta"


# Ver content/_index.md.
opex_heading: "Dónde aparece en sus números de operación"
opex_intro: "Ninguna cifra de aquí nos corresponde a nosotros. Cada una de estas es una línea que usted ya carga, con lo que la mueve y dónde encontrar su propio número. Una página que le dice cuánto va a ahorrar está adivinando sobre una operación que nunca ha visto."
opex_col_industry: "Sector"
opex_col_line: "La línea"
opex_col_driver: "Qué la mueve"
opex_col_where: "Dónde está la suya"
opex:
  - page: "logistics-supply-chain"
    industry: "Logística y Cadena de Suministro"
    line: "Demoras, detención y las reclamaciones que caducan"
    driver: "Un contenedor retenido que nadie ha unido al documento que espera, mientras corre el tiempo libre. Un plazo que se cierra mientras la prueba está en cuatro sistemas."
    where: "Las líneas accesorias de la factura del transportista, contra el reloj de tiempo libre de la entrada. Reclamaciones presentadas frente a reclamaciones posibles."
  - page: "insurance"
    industry: "Seguros"
    line: "Reservas y recobros aprobados sobre una muestra"
    driver: "Un umbral de revisión subido para vaciar una cola, con el condicionado aún llevando la cifra antigua y nadie decidiendo en un sentido ni en otro."
    where: "La proporción de expedientes que tuvieron segunda revisión, contra la cifra que dice su condicionado."
  - page: "banking-financial-services"
    industry: "Banca y Servicios Financieros"
    line: "Diferencias que caben en el rango que siempre aprueba"
    driver: "Un movimiento que entra dentro del rango todos los meses, así que nada escala y nadie lee la secuencia que forman los meses."
    where: "La antigüedad de las partidas abiertas, contra cuántos meses lleva cargada cada una."
  - page: "telecom"
    industry: "Telecomunicaciones"
    line: "Errores de tarificación que llegan como tasa, no como cuentas"
    driver: "Un cambio de tarificación correcto para la promoción y equivocado para un plan heredado, demasiado pequeño para mover un agregado y demasiado tarde para retarificar cuando lo mueve."
    where: "La tasa de error que aseguramiento de ingresos reporta hacia arriba, y el tamaño de muestra y el mes que hay detrás."
  - page: "marketing"
    industry: "Marketing"
    line: "Trabajo que vuelve a empezar en blanco"
    driver: "La herramienta de auditoría sabe que el sitio es lento; la que escribe no, así que sigue escribiendo para una página en la que nadie se queda. Este es Runink PULSE, no FACE."
    where: "Cuánto tarda un encargo en convertirse en algo publicado, y cuánto del trabajo del trimestre pasado reutilizó el siguiente."
opex_note: "Traiga una de estas y un mes de los registros que hay detrás. Con eso basta para saber si las pérdidas que usted carga tienen la forma de lo que esto resuelve, y es la única manera honesta de que cualquiera de los dos lo averigüe."

figure:
  console:
    title: "runink face · leyendo"
    live: "LEYENDO"
    states: ["LEÍDO", "COMPARADO", "LEÍDO", "EN COLA"]
    rule_name: "La regla que lo gobierna"
    rule_terms: ["CONDICIONADO", "UMBRAL", "LÍMITE DE AUTORIDAD"]
    gate_name: "Acción redactada · espera un nombre"
    acts: ["APROBAR", "EDITAR", "RECHAZAR"]
    alt: "Los registros que ya guardan sus sistemas se leen uno por uno contra la regla que los gobierna, y lo que difiere llega como una acción redactada que espera a que una persona con nombre la apruebe, la edite o la rechace."
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

constellation:
  label: "Sus sistemas, leídos juntos"
  intro: "Cada uno de ellos ya guarda una parte de la respuesta, y ninguno la guarda entera. Runink FACE los lee contra las reglas que los gobiernan, de modo que una diferencia llega como un elemento con los registros detrás en lugar de como cuatro pantallas que alguien tiene que cuadrar."
  eyebrow: "LAS LÍNEAS SON EL TRABAJO"
  nodes: ["TMS", "ERP", "SEGUIMIENTO", "SINIESTROS", "CONTABILIDAD", "TARIFICACIÓN", "CANALES"]
  spurs: ["PUERTA", "CÁMARA", "CORREO", "PORTAL"]
  hub: "LEÍDOS JUNTOS"
  legend:
    - "Los sistemas que ya hace funcionar"
    - "Registros que llegan desde fuera de ellos"
    - "Un lector, y la regla contra la que lee"
  alt: "Los sistemas que una empresa ya hace funcionar — su sistema de transporte, sus expedientes de siniestros, su contabilidad, su configuración de tarificación y los canales en los que publica — dibujados como puntos unidos por líneas a un lector en el centro, que los lee todos contra las reglas que los gobiernan."

industries_heading: "Cinco sectores, una misma forma de problema"
industries_intro: "Encuentre la línea que se parece a su semana. Cada una se abre sobre los escenarios que ese sector vive de verdad — la cadena de frío, una declaración aduanera, el límite de una máquina, un expediente de siniestro, una cláusula — y cada uno se recorre desde el registro que lo inicia hasta la persona que aprueba lo que se hace con él."
industries_open: "Abrir"
industries_cta: "Ver si encaja"
industries_columns:
  name: "Sector"
  cost: "Lo que le está costando en silencio"
  owner: "Quién lo tiene a su cargo"
industries:
  - page: "logistics-supply-chain"
    name: "Logistics & Supply Chain"
    cost: "Una entrada retenida en el puerto por un documento que falta mientras corre el cargo diario. Una reclamación de flete todavía dentro de su plazo de presentación que nadie tuvo la mañana para armar."
    reads: "Cada entrada se compara con la regla que la gobierna — retenida, en examen o detenida, con los días que lleva retenida por encima de cero — así que una retención llega como una entrada con nombre y con el cargo contado con su propia tarifa."
    owners:
      - "Director de operaciones"
      - "Director financiero"
      - "Cumplimiento aduanero"
    flow:
      - when: "Antes de salir"
        jobs:
          - name: "Demanda y suministro"
            line: "Una línea empieza a moverse semanas antes que el punto de pedido, y el plan llega después de la rotura."
          - name: "Límites de las máquinas"
            line: "La cámara, la cinta y la carretilla anotan todo el día lo que hacen, y alguien lo lee cuando la carga ya es la prueba."
      - when: "En tránsito"
        jobs:
          - name: "Cadena de frío"
            line: "Un contenedor se calienta de noche y nadie abre la puerta hasta la mañana."
          - name: "Logística reactiva"
            line: "El plan que era bueno a las seis de la mañana ya no lo es a las diez, y nadie lo vuelve a correr."
          - name: "Declaración aduanera"
            line: "La caja está parada en la frontera y la declaración con la que se presentó es otra historia en otro sistema."
      - when: "Cuando vuelve"
        jobs:
          - name: "Logística inversa"
            line: "Una devolución vale lo máximo el día que vuelve, y la decisión de clasificarla espera."
      - when: "Cuando se mueve el dinero"
        jobs:
          - name: "Reclamaciones y disputas"
            line: "Una reclamación caduca porque montarla lleva una mañana que nadie tuvo esa semana."
          - name: "Suscripción"
            line: "El condicionado, el informe de siniestro, el histórico de reservas y el límite de autoridad están en cuatro sitios."
    cases:
      - label: "Retención aduanera · Un contenedor retenido en el puerto, de la retención al despacho"
        steps:
          - step: "Aparece la retención"
            body: "Una entrada vuelve como retenida, en examen o detenida, y el número de días retenida es mayor que cero. Esa combinación es toda la prueba — es una regla fija, no un criterio, y se aplica a todas las entradas y no solo a las que alguien pensó en revisar."
          - step: "El coste se cuenta con su propia tarifa"
            body: "Los días que lleva retenida, multiplicados por la tarifa diaria de demora de su propio acuerdo. Esa es toda la aritmética. Es la cifra que ya está corriendo mientras la entrada espera en una cola que nadie lee entera."
          - step: "Se nombra el documento que falta"
            body: "El motivo de la retención y los documentos pendientes salen del registro de la entrada y quedan escritos en el elemento, de modo que quien lo recoge no empieza por averiguar qué va mal."
          - step: "Se comprueba quién responde"
            body: "Por separado, las entradas se leen buscando un importador registrado en blanco, relleno con el consignatario, o con un marcador de posición que alguien tecleó una vez. Esas llevan arancel e impuestos sin nadie que responda por ellos, y se levantan como elemento propio con el importe en juego adjunto."
          - step: "Cada euro se cuenta una vez"
            body: "La demora de una entrada retenida y el arancel de una sin responsable son dinero distinto, y contarlos como una sola cifra es la forma más común de inflar este tipo de total. Se mantienen separados, deliberadamente, y hay una prueba que falla si alguna vez se juntan."
          - step: "Decide una persona con nombre"
            body: "El elemento espera. Aprobarlo es lo que envía algo, y queda escrito quién lo aprobó, cuándo y qué cambió. Si parte de lo redactado no pudo ejecutarse, el resultado nombra esa parte en lugar de informar de un éxito."
      - label: "Cadena de frío · Un refrigerado que se calentó, de la puerta a la reclamación presentada"
        steps:
          - step: "Llega la imagen"
            body: "Una foto hecha con un terminal en la puerta, o un fotograma sacado de una cámara del patio. Antes de que nada la lea, se comprueba que sea una imagen: se descodifica la cabecera por separado, el formato tiene que ser uno de dos, y el tamaño se limita en bytes y en píxeles. Un PDF, un contenedor de vídeo o bytes sueltos se rechazan en ese paso."
          - step: "Un modelo la lee, en su propio hardware"
            body: "El fotograma se reduce a un tamaño que el modelo pueda tomar y lo lee un modelo de visión que corre en máquinas que usted controla. Lo que vuelve es una observación escrita, atada al fotograma exacto del que se leyó, de modo que la frase y su prueba no se separan."
          - step: "El papeleo se lee al lado"
            body: "El registro del envío, la entrega y el estado en el que los documentos dicen que debería ir la carga. La observación se contrasta con lo que ya estaba escrito, no con un umbral que alguien eligió."
          - step: "Lo que difiere sale con nombre"
            body: "El palé, la caja, la puerta del contenedor — con nombre, en las palabras que usaría una persona. Con una puntuación de gravedad no se discute delante de un transportista. Con una parte concreta de un envío concreto, sí."
          - step: "El aviso llega a quien responde por ello"
            body: "Un aviso puede difundirse a lo que esté suscrito al flujo de eventos del patio, y el registro lo guarda como lo que es: solicitado. Lo que pase después lo decide alguien, y el registro lo dice así en lugar de dar a entender que se detuvo un movimiento."
          - step: "Decide una persona con nombre"
            body: "El elemento espera, igual que la entrada retenida. Aprobarlo es lo que envía algo, y quién aprobó, cuándo y qué cambió queda escrito."
      - label: "Declaración aduanera · Un manifiesto rechazado, de la presentación al papel que nombró"
        steps:
          - step: "Se lee la presentación, no el despacho"
            body: "Una entrada puede estar parada en la frontera con un manifiesto que la autoridad aceptó, y una presentación puede estar rechazada mientras la caja sigue moviéndose. Retenida es un estado de despacho y rechazada es un estado de presentación. Cada uno se lee donde está escrito, y ninguno se lee nunca como el otro."
          - step: "El código viaja tal como se escribió"
            body: "El código de excepción que llevaba el rechazo llega palabra por palabra, con el manifiesto al que pertenece, el puerto donde se presentó y quién lo presentó. Su agente de aduanas recibe la referencia que puede citar, y no la paráfrasis que alguien hizo de ella."
          - step: "Cada documento que falta sale en su propia línea"
            body: "Cada documento que la presentación señaló como pendiente sale como elemento propio, con el registro del que se leyó. Qué falta y de quién depende es lo primero que aparece, en lugar de ser lo que alguien deduce después."
          - step: "El silencio se escribe como silencio"
            body: "Cuando los registros no dicen qué contestó la presentación, eso se levanta como hallazgo propio. Leer el estado de despacho como estado de presentación afirmaría una presentación que nadie declaró, y no se hace: una entrada puede estar retenida con su manifiesto aceptado."
          - step: "La demora se cuenta una vez"
            body: "La demora que corre en esa entrada ya la cuenta el elemento de la entrada retenida de arriba, así que aquí viaja como importe en juego y no como un segundo cargo. Una demora contada dos veces es la forma más común de inflar un total, y hay una prueba que falla si las dos se juntan."
          - step: "Decide una persona con nombre"
            body: "Lo que sale es el documento que se enseña a un agente de aduanas o a una autoridad portuaria, y sale cuando alguien lo aprueba. Quién lo aprobó, cuándo y qué cambió se queda con él."
      - label: "Límites de las máquinas · Una máquina que se acerca al límite que su propio registro declara"
        steps:
          - step: "Un límite que nadie declaró no es un límite"
            body: "La cifra contra la que se compara una lectura se lee del propio registro de la máquina: una temperatura de alarma, un punto de disparo, un nivel de sustitución. Cuando el registro solo dice a qué valor funcionaba la máquina cuando estaba sana, la desviación se informa y no se proyecta nada contra ella, porque un valor sano de referencia no es un punto en el que algo falle."
          - step: "Las lecturas se comparan en orden"
            body: "La primera lectura de la ventana, la última, cuántas eran comparables y a qué distancia está la última del límite declarado. Cada cifra lleva la lectura de la que salió, así que su técnico comprueba la aritmética contra el registro en vez de fiarse de ella."
          - step: "La recta que las une es aritmética, no un pronóstico"
            body: "Cuando las lecturas lo permiten, una recta entre la primera y la última dice cuándo llegaría al límite declarado a ese ritmo. Eso describe dos lecturas, y cada documento de este tipo lo dice en su propia cara."
          - step: "Sin probabilidad, sin confianza, sin vida restante"
            body: "Ninguna de las tres está en el documento, y eso es estructural y no una cuestión de redacción: no hay campo donde ponerlas. Una puntuación de fallo ajustada a un puñado de lecturas se lee como una medición y no lo es. Vale más un número que un planificador puede recalcular que uno seguro que no puede."
          - step: "Una persona con nombre programa el trabajo"
            body: "El elemento llega a mantenimiento con la máquina, el canal, el límite declarado y las lecturas que hay detrás. Aprobar es lo que abre la orden, y quién aprobó, cuándo y qué cambió queda en el registro."
  - page: "insurance"
    name: "Insurance"
    cost: "Un umbral de revisión elevado para vaciar una cola, pensado como provisional, nunca devuelto y nunca decidido. Movimientos de reserva revisados por muestreo porque el flujo es demasiado largo para leerlo."
    reads: "La cifra que fija la segunda revisión se lee del propio condicionado y se compara con la que aplicó el flujo de trabajo, así que un expediente revisado con el umbral equivocado vuelve con nombre y no por muestreo."
    owners:
      - "Operaciones de siniestros"
      - "Cumplimiento y riesgos"
      - "Auditoría interna"
    flow:
      - when: "cuando se delega la autoridad"
        jobs:
          - name: "Suscripción delegada"
            line: "Usted sigue respondiendo por lo que se decide bajo el acuerdo, y los informes que el agente devuelve hay que leerlos contra él."
      - when: "cuando se notifica un siniestro"
        jobs:
          - name: "Peritación de la carga"
            line: "Lo que se perdió, en qué condiciones viajaba y lo que la cobertura declara que vale están en el expediente, en el registro del envío y en el condicionado, y alguien junta los tres a mano."
          - name: "Cláusulas y plazos"
            line: "Un párrafo resuelve la pregunta y una fecha decide si todavía merece la pena hacerla, y encontrar los dos lleva una tarde."
      - when: "mientras el expediente está abierto"
        jobs:
          - name: "Segunda revisión"
            line: "El flujo de trabajo aplica una cifra mientras el condicionado sigue llevando otra, y cuál de las dos manda se decide la primera vez que alguien lo pregunta."
      - when: "al cierre del período"
        jobs:
          - name: "Reservas y recobros"
            line: "Los términos del tratado fijan lo que se puede recobrar, y si una pérdida se presentó bajo los correctos es una lectura del tratado contra el expediente."
    cases:
      - label: "Deriva normativa · Un umbral de segunda revisión, de subido en el flujo de trabajo a decidido por escrito"
        steps:
          - step: "Se lee el condicionado"
            body: "La cláusula que fija el importe a partir del cual un siniestro necesita segunda revisión se extrae del documento de póliza. Vuelve enunciada en lenguaje llano, con el documento del que se leyó nombrado al lado."
          - step: "Se lee la regla del flujo de trabajo"
            body: "Por separado, se lee en el sistema de siniestros el umbral que hoy se aplica de verdad a un expediente. Se lee donde ya está: la conexión con sus datos de siniestros lee los registros y los deja como están."
          - step: "La diferencia se nombra como deriva"
            body: "Cada regla cae en uno de cuatro estados. Alineada: la póliza lo dice y los sistemas lo hacen. Deriva: los sistemas hacen algo parecido. En la sombra: hay lógica corriendo que ninguna póliza describe. Ausente: la póliza describe un control que nadie ejecuta. Un umbral subido en el flujo y dejado fuera del documento vuelve como deriva. Léalo como un reconocimiento: el hallazgo nombra el documento de póliza y la implementación de los que se leyó, y lleva una confianza adjunta, de modo que quien lleva cumplimiento comprueba una afirmación concreta contra dos fuentes con nombre."
          - step: "El hallazgo llega a una cola"
            body: "Lleva la observación, la regla que invocó, los registros que citó, una gravedad y una acción propuesta concreta. Este depende del apetito de riesgo — si el umbral subido es el que ahora quiere — así que espera, con la ambigüedad nombrada y el informe ya redactado."
          - step: "Decide una persona con nombre"
            body: "Alguien aprueba, edita o rechaza la acción redactada, y esa decisión queda registrada como un evento que lleva quién la tomó. Tanto si el condicionado se actualiza a la cifra nueva como si el flujo vuelve a la antigua, la observación, la regla, los registros y la aprobación quedan guardados según se hace el trabajo. Cuando un auditor pregunta qué hizo ese control, responder es recuperar."
      - label: "Suscripción de carga · Un expediente de siniestro montado para quien tiene que decidir"
        steps:
          - step: "El expediente se monta con los registros, no con el relato"
            body: "Lo que los registros dicen que faltó, lo que dicen que se dañó, en qué envío viajaba y lo que la cobertura declara que vale. Cada cifra se cita en el momento en que se lee, así que el suscriptor abre un documento en lugar de cuatro sistemas."
          - step: "La franquicia se declara y nunca se resta"
            body: "Restarla de la pérdida produce una cifra recuperable, y esa aritmética solo significa algo cuando alguien ha decidido que la póliza responde. Esa decisión es del suscriptor, así que la cifra se deja donde él pueda tomarla."
          - step: "Las condiciones que impone la cobertura se auditan aparte"
            body: "Una banda de temperatura, un estándar de embalaje, una ruta de seguridad — cada una leída contra los registros que la cumplieron o no. La auditoría nunca lee la pérdida y el expediente nunca lee la auditoría. Juntar las dos en un párrafo compone una defensa de cobertura, y componerla es acto del suscriptor y no del software."
          - step: "No haber podido mirar no es no haber encontrado nada"
            body: "Una condición de la que los registros no dicen nada vuelve como no evidenciada, nunca como cumplida. Una banda escrita en una unidad no se compara con una sonda que registra en otra, porque convertir inventa una precisión que los registros nunca tuvieron. Una reclamación rechazada sobre una condición supuesta la paga el asegurado, que nunca sabe por qué."
          - step: "Decide con nombre quien tiene la autoridad"
            body: "Aquí no se vincula, ni se liquida, ni se rechaza nada. La peritación y la auditoría se enlazan al mismo envío, llegan juntas y esperan a la persona que manda en el expediente."
      - label: "Revisión jurídica · La cláusula que lo gobierna, y el registro contra el que se contrastó"
        steps:
          - step: "La pregunta es la de siempre"
            body: "Si pueden subcontratar esto. Si el plazo de conservación que aplicamos es el que nos comprometimos a aplicar. En algún punto del acuerdo hay un párrafo que lo resuelve, y encontrarlo es todo el coste."
          - step: "El pasaje vuelve con el registro al lado"
            body: "La cláusula se lee del documento y se expresa en lenguaje llano, con el documento del que salió nombrado. La regla tal como se aplica se lee donde se aplica. Las dos llegan una junto a la otra, así que la conversación empieza en la diferencia y no en la búsqueda."
          - step: "La fecha la calcula una regla con nombre, y se niega a adivinar"
            body: "Un plazo de aviso o una ventana de presentación se calcula desde una fecha del registro mediante una regla que cita la norma de la que viene, y dice desde qué hecho contó: el día en que la mercancía llegó, o el día en que debió llegar. Cuando el registro no trae una fecha utilizable, no se produce ninguna: el elemento lo dice y lleva la advertencia en su lugar."
          - step: "Revisado y limpio y no se pudo revisar son entradas distintas"
            body: "Casi todas las herramientas muestran las dos como un visto. Aquí la segunda es un estado propio, con el motivo escrito en una frase: no volvió nada, lo que volvió no se pudo leer, lo que volvió estaba vacío. Es justo la entrada que una auditoría busca."
          - step: "Devuelve una nota, y el criterio sigue siendo suyo"
            body: "Lo que vuelve es un paso siguiente en lenguaje de negocio: redactar esta carta, abrir este ticket, llevárselo al responsable del marco. La lectura es del software. Decidir qué significa es de la persona, y su nombre queda en el registro que lo dice."
  - page: "banking-financial-services"
    name: "Banking & Financial Services"
    cost: "Una diferencia que crece dentro del rango que siempre se aprueba, así que ningún mes escala y nadie lee la secuencia. Un contrato de proveedor que nadie ha vuelto a abrir desde la firma."
    reads: "Cada diferencia se lee contra la secuencia que forman sus propios meses y no contra el rango en el que cabe, así que un movimiento que se aprueba todos los meses deja de desaparecer en el agregado."
    owners:
      - "Cumplimiento y riesgos"
      - "Auditoría interna"
      - "Finanzas"
    flow:
      - when: "cuando cambia el destino de un pago"
        jobs:
          - name: "Verificación del destino"
            line: "Si la norma sobre el destino de un pago la aplicó el sistema o la siguió una persona suele saberse después del pago y no antes."
      - when: "después de la firma"
        jobs:
          - name: "Obligaciones del proveedor"
            line: "El contrato trae obligaciones de nivel de servicio, subcontratación, tratamiento de datos y notificación, y leerlo contra la relación que usted tiene de verdad es una comparación que se hace cuando algo ya ha salido mal."
      - when: "cuando se cobra"
        jobs:
          - name: "Tarifas aplicadas"
            line: "Tramos, umbrales y condiciones de producto convierten la comisión en una conciliación entre lo que dicen las condiciones y lo que se cobró."
    cases:
      - label: "Partidas abiertas · Una diferencia de conciliación, de una racha de meses aprobados a una decisión registrada"
        steps:
          - step: "El mes se aprueba como siempre"
            body: "El movimiento entra dentro del rango que ya se ha aprobado antes. Se aprueba igual que el mes anterior, y por sí solo se lee como aquel mes."
          - step: "Se lee la secuencia, no el mes"
            body: "La comparación corre sobre la serie y no sobre la última cifra. Lo que destaca es la forma de una racha de movimientos, cada uno dentro del rango por separado."
          - step: "El caso se levanta con su serie"
            body: "El caso dice que la secuencia es inusual frente al histórico disponible, y cita la serie de la que se leyó. Los meses, los importes y el rango en el que cabían van con él, así que quien lo abre empieza con la prueba delante."
          - step: "Decide una persona con nombre"
            body: "El caso espera en una cola, con la serie que cita ya adjunta. Aprobarlo, corregirlo o rechazarlo es su decisión, y la causa la escribe ella: nombrarla exige a alguien que sepa qué cambió en la operación ese mes."
          - step: "El registro responde a la siguiente petición"
            body: "Quién decidió, cuándo, qué citó y qué cambió quedan juntos, y cada entrada va encadenada con la anterior, de modo que un cambio posterior en el registro se nota. Cuando pregunta el supervisor o la auditoría interna, la respuesta se lee en lugar de volver a montarse."
      - label: "Obligaciones de proveedores · Los niveles de servicio que el contrato ya tarifa, contra lo que se prestó"
        steps:
          - step: "Las obligaciones se leen del acuerdo"
            body: "Niveles de servicio, subcontratación, tratamiento de datos, notificación. Cada una vuelve expresada en lenguaje llano con la cláusula de la que se leyó, así que lo que usted firmó se puede leer sin abrir el expediente."
          - step: "Lo prestado se lee donde está registrado"
            body: "Los registros de lo que el proveedor prestó de verdad se leen donde ya están, y se contrastan con el nivel que fija el acuerdo. La comparación va elemento por elemento y no por muestra, así que un incumplimiento llega con nombre y no como porcentaje."
          - step: "Un incumplimiento que el contrato ya tarifa llega con ese precio"
            body: "Cuando el acuerdo fija una penalización por el incumplimiento, la cifra es la propia aritmética del acuerdo sobre los incumplimientos confirmados. Es dinero ya debido bajo un documento que ambas partes firmaron, y no una reclamación inventada encima de él."
          - step: "Decide con nombre qué se reclama"
            body: "Si la penalización se reclama, se perdona o se plantea en la próxima revisión es una decisión comercial, y sigue siéndolo. El elemento espera con la cláusula, los registros y la aritmética adjuntos, y la aprobación guarda quién decidió y por qué."
  - page: "telecom"
    name: "Telecom"
    cost: "Un cambio de tarificación correcto para la promoción y equivocado para un plan heredado, demasiado pequeño para mover un agregado. Un barrido que devuelve una tasa de error cuando operaciones necesita las cuentas por nombre."
    reads: "La salida tarificada de cada cuenta se lee contra las condiciones del propio plan de ese abonado, registro a registro y no como un barrido mensual sobre una muestra."
    owners:
      - "Aseguramiento de ingresos"
      - "Liquidación de interconexión"
      - "Finanzas y compras"
    flow:
      - when: "cuando se tarifica el consumo"
        jobs:
          - name: "Aseguramiento de ingresos"
            line: "La tarificación es donde las condiciones del plan se encuentran con el consumo, y un cambio hecho para un producto cae sobre todas las cuentas que toca esa configuración."
      - when: "al cierre del periodo"
        jobs:
          - name: "Liquidación de interconexión"
            line: "Su tráfico, el registro del mismo tráfico en la contraparte y el acuerdo que fija las tarifas son tres fuentes, y la única diferencia que importa aparece al cierre del periodo como una partida abierta con una antigüedad encima."
      - when: "mientras se construyen los sitios"
        jobs:
          - name: "Despliegue de red"
            line: "El gasto aprobado, las órdenes de compra, el equipo recibido y los sitios que ya cursan tráfico solo quedan uno al lado del otro cuando alguien arma esa vista a mano, y dentro de ella pasa inadvertido un sitio que recibió el equipo y nunca se puso en servicio."
    cases:
      - label: "Aseguramiento de ingresos · Un cambio de tarificación equivocado para un plan heredado, de la primera llamada mal tarificada a una retarificación aprobada"
        steps:
          - step: "La tarificación se lee contra el plan"
            body: "La salida tarificada de cada cuenta se lee contra las condiciones del propio plan de ese abonado, y la comparación es registro a registro y no un barrido mensual sobre una muestra. Lo que vuelve son las cuentas con nombre, que es lo que necesita una retarificación, y no una tasa de error, que es lo que necesita un informe."
          - step: "El hallazgo lleva su prueba"
            body: "Antes de que nada llegue a un modelo, el hallazgo se comprueba: completo para poder leerse, con prueba adjunta, con al menos una pieza de esa prueba legible, sobre la cuenta que nombra y no sobre algo contiguo, y con fecha lo bastante reciente para decir algo del presente. Una prueba que solo repite la afirmación termina ahí el asunto. Cada comprobación que salta escribe su propio motivo en una frase que una persona lee."
          - step: "La tarifa se recalcula"
            body: "Un hallazgo que afirma una tasa se resuelve con aritmética sobre los recuentos en bruto, recalculada y no aceptada tal como vino. Un recuento dividido entre nada vuelve como no se puede juzgar."
          - step: "Una segunda credencial forma el veredicto"
            body: "El juicio corre con una credencial distinta de la del envío, y qué credencial lleva un mensaje lo decide la puerta por la que entró, no un campo que rellena quien lo manda. El veredicto «no se puede juzgar» es una respuesta por derecho propio: llega con su motivo escrito al lado y pasa a una persona, igual que un desacuerdo."
          - step: "Aseguramiento de ingresos aprueba la retarificación"
            body: "El elemento espera con la cuenta nombrada, las condiciones del plan contra las que se leyó y los registros de los que salió. Aprobar es lo que envía algo, y quién aprobó, cuándo y qué cambió queda en el registro. El remedio es una corrección de configuración y una retarificación, hecha mientras una retarificación todavía lo arregla."
      - label: "Liquidación de interconexión · Dos registros del mismo tráfico que no coinciden"
        steps:
          - step: "Los dos lados se leen contra el acuerdo"
            body: "Su registro del tráfico, el registro que la contraparte tiene del mismo tráfico y el acuerdo que fija las tarifas. La lectura ocurre mientras ambos lados conservan el detalle, y no al cierre del ciclo, cuando uno de los dos ya no lo tiene."
          - step: "Una discrepancia nunca se promedia"
            body: "Dos lecturas del mismo tráfico que difieren vuelven como no se puede juzgar, con las dos cifras y el sitio del que salió cada una. Partir la diferencia produce una tercera cifra que ninguna de las partes observó, y en una liquidación esa cifra no la puede defender ninguno."
          - step: "No se puede juzgar es una respuesta, con su motivo al lado"
            body: "Sin prueba, una prueba que solo repite la afirmación, una prueba sobre otra cuenta, una prueba demasiado vieja para decir algo del presente: cada una termina ahí, escribe su propio motivo en una frase que una persona lee, y va a una persona."
          - step: "Una persona con nombre lo lleva a la contraparte"
            body: "El elemento lleva el período, los dos registros y la tarifa que fija el acuerdo. Aprobar es lo que lo envía, y lo que se citó y lo que se cambió quedan en el registro para que el ciclo siguiente empiece desde ahí."
  - page: "marketing"
    name: "Marketing"
    cost: "La herramienta de auditoría sabe que el sitio es lento. La de contenido no, así que sigue escribiendo para una página en la que nadie se queda. Cada campaña vuelve a empezar en blanco."
    reads: "Su sitio y los canales en los que publica se leen primero, así que el siguiente encargo parte de donde usted está de verdad y no de una página en blanco."
    owners:
      - "Responsable de marketing"
      - "Ventas"
      - "TI y seguridad de la información"
    flow:
      - when: "antes de escribir nada"
        jobs:
          - name: "Decidir qué decir"
            line: "Qué escribir a continuación depende de lo que el sitio ya está haciendo, y esas dos respuestas viven en herramientas distintas."
      - when: "entre el encargo y la publicación"
        jobs:
          - name: "Sacarlo a la calle"
            line: "Encargo, borrador, revisión, calendario: cada paso espera al anterior, así que si puede responder al anuncio de un competidor lo decide su propio plazo."
      - when: "cuando llega un lead"
        jobs:
          - name: "Hacer seguimiento"
            line: "Su sistema de clientes sabe que un lead dejó de responder en la tercera semana; el programador de publicaciones no."
    cases:
      - label: "Auditoría del sitio · Una página donde nadie se queda, de la auditoría que la encuentra a un borrador aprobado"
        steps:
          - step: "La auditoría lee su sitio"
            body: "Usted trae su sitio web y los canales en los que publica. Leerlos y decirle dónde está es lo primero que hace Runink PULSE. Lo que encuentra vuelve ordenado por prioridad y se aplica desde la misma pantalla."
          - step: "Un diagnóstico alimenta cada canal"
            body: "Ese mismo diagnóstico alimenta el análisis de canales, el plan de contenidos, el calendario y cada borrador. Lo que sale lleva un solo argumento en lugar de cuatro versiones de él."
          - step: "El encargo se convierte en borrador"
            body: "El encargo entra y vuelve un borrador. A partir de ahí espera en una cola donde usted puede verlo, en vez de quedarse en silencio entre un paso y el siguiente."
          - step: "Cada pieza tiene un estado"
            body: "Borrador, pendiente de revisión, aprobada, rechazada, publicada, archivada. Esos son los estados que PULSE mantiene, así que ve lo que está esperándole y lo que salió de verdad."
          - step: "Una persona con nombre aprueba"
            body: "Cada borrador —entrada, informe, correo en frío, guion de llamada— llega a una cola de revisión con un aprobar y un rechazar. Aprobar es un paso que da una persona con nombre, no un trámite que el sistema hace por ella."
      - label: "Seguimiento de leads · Un contacto que se apagó en la tercera semana"
        steps:
          - step: "Quien dice que se apagó es el registro del cliente"
            body: "El contacto, la etapa a la que llegó y el día en que se movió por última vez se leen del sistema de clientes en el que el equipo ya trabaja, y no de una segunda lista que alguien mantiene al lado."
          - step: "La empresa se investiga antes de escribir nada"
            body: "Runink PULSE lee primero lo que es público sobre esa empresa, así que lo que redacta parte de lo que encontró y no de una plantilla con un nombre metido dentro."
          - step: "El seguimiento vuelve escrito para esa empresa"
            body: "Un correo en frío, un guion de llamada y un mensaje directo por empresa, y los contactos se sincronizan de vuelta al sistema de clientes, de modo que ventas sigue trabajando donde ya trabaja."
          - step: "Lo envía una persona con nombre"
            body: "Cada borrador cae en una cola de revisión con aprobar y rechazar, y lleva un estado visible mientras espera. Aprobar es un paso que da alguien, y no un trámite que el sistema hace por él."

why_heading: "Qué cambia en la semana"
why_intro: "Tres cambios, y son los que mueven las líneas de arriba."
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

products_heading: "Productos de Runink de los que quizá haya oído hablar"
products_intro: "Cuatro productos, cada uno con su propia página, y un documento conjunto. Las páginas dicen qué es cada producto; los documentos detrás de ellas explican el mecanismo: qué mira el software, qué produce, quién lo aprueba y dónde se ejecuta."
products_cta: "Leer el documento"
products_page_cta: "Ver el producto"
products_pages_word: "páginas"
products_lang_note: "en inglés"
products:
  - page: "/products/face"
    paper: "runink-face"
    name: "Runink FACE"
    sub: "Fulfilment Autonomous Claims Engine"
    line: "El de esta página. Entradas retenidas, reclamaciones aún dentro de plazo, cadena de frío leída después del descargo, demanda que creció mientras subía por la cadena."
  - page: "/products/pulse"
    paper: "runink-pulse"
    name: "Runink PULSE"
    sub: "Prescriptive Unified Lead & Social Engine"
    line: "Un producto aparte, no una función de FACE. La auditoría, la investigación, la prospección y el material que publica un equipo de marketing, en una sola aplicación que el equipo maneja directamente."
  - page: "/products/core"
    paper: "runink-core"
    name: "Runink CORE"
    sub: "La capa de operaciones, en su propio hardware"
    line: "Un producto por derecho propio, que se vende por separado. Es la respuesta a dónde se procesan sus datos y quién puede verlos, que es la pregunta a la que acaba llegando cualquier otra página de aquí."
  - paper: "runink-core-atlas"
    name: "Runink CORE y Atlas"
    sub: "Un documento conjunto con Logical Leap"
    line: "Las pantallas de supervisión de Atlas, dentro de CORE y con sus propios datos, con una segunda opinión incorporada para los hallazgos que envía una plataforma externa. Escrito con Logical Leap y no sobre ella."
  - page: "/river"
    name: "Runink River"
    sub: "Raft-Integrated Validated Event Runtime"
    line: "Una estación de trabajo para desarrolladores sobre s6: KDE Plasma, una raíz ZFS cifrada, un cortafuegos que bloquea por defecto y un instalador gráfico, para trabajar con datos e IA en su propio hardware."
products_more_text: "Cómo lo construimos, y quién"
products_more_url: "/company"

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
  about_prefix: "Sobre: "
  message_label: "¿Qué problema intenta resolver?"
  message_placeholder: "Basta con un ejemplo: una entrada retenida, un siniestro, una conciliación que lleva una semana."
  submit: "Enviar mensaje"
  note: "Usamos lo que nos envía aquí para responderle y para nada más."
  done_title: "Mensaje recibido"
  done_body: "Gracias. Le responderemos en un día hábil."
---
