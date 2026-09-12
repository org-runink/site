---
title: "La Foto Que Nadie Tiene Tiempo de Montar"
description: "Los datos están en cuatro sistemas y en cuatro formatos, y juntarlos cuesta una mañana que nadie tiene. Así que la foto que permitiría actuar solo se monta a posteriori, para la reunión en la que se revisa."
layout: "use_case"
product: "Runink FACE"
badge: "Grafo de Dominios"
date: "2024-05-20T00:00:00Z"
author: "Runink"
---

{{< section-container class="py-8" >}}
<div class="max-w-5xl mx-auto px-4">

<h2 id="en-resumen" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6 mt-8">En Resumen</h2>
<ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6 mb-8">
<li><strong class="text-stone-200">Sus registros se ordenan por lo que son, no por de dónde vinieron.</strong> Dos tablas que hablan de envíos pertenecen las dos a logística, tanto si una llegó de su sistema de almacén como si la otra llegó como una hoja de cálculo que alguien manda por correo los viernes.</li>
<li><strong class="text-stone-200">El mapa se deriva, no se adivina.</strong> Los dominios y los enlaces entre ellos se calculan a partir de la estructura de sus propios ficheros mediante reglas fijas: ningún modelo, ninguna búsqueda web, nada sale del edificio en ese paso. Los mismos ficheros producen siempre el mismo mapa.</li>
<li><strong class="text-stone-200">Un dominio que no se ha podido evaluar queda marcado como no evaluado.</strong> No como aprobado. Las palabras son explícitas: esto no es un hallazgo de que el área esté bien. Y sin datos conectados, dice que todavía no hay nada que mapear, en vez de dibujar un diagrama vacío.</li>
</ul>

<p class="mb-12">
    <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-stone-600 text-stone-400 text-[10px] font-black uppercase tracking-[0.25em]">
        <span class="inline-block w-2 h-2 rounded-full border border-stone-400"></span>Hipotético
    </span>
    <span class="block mt-3 text-sm text-stone-500 font-medium">
        Esto describe el mecanismo y una semana plausible a su alrededor. No es el relato de algo que ocurrió: no se ha corrido contra los sistemas de un cliente, nada de esta página está medido, y no se ofrece ninguna cifra de lo que encuentra ni de cuánto tarda.
    </span>
</p>

    <div class="text-center mb-16">
        <h2 id="cuatro-sistemas-una-manana-que-no-tiene" class="text-5xl md:text-6xl font-black !text-white text-white drop-shadow-md italic tracking-tighter uppercase mb-6">Cuatro Sistemas. Una Mañana Que No Tiene.</h2>
        <p class="text-xl text-stone-400 font-bold leading-relaxed">
            No falta nada. Todos los datos que necesita se registraron, correctamente, por alguien que hacía su trabajo. Es el juntarlos lo que nunca llega a tiempo.
        </p>
    </div>

    <div class="flex flex-col gap-12 mb-20">
        <div>
            <h2 id="donde-se-tuerce" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Dónde Se Tuerce</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Para responder a una pregunta corriente &mdash; por qué ese cliente recibió dos entregas incompletas en un mes &mdash; alguien abre el sistema de pedidos, luego el de almacén, luego el portal del transportista, y luego una hoja de cálculo que mantiene una sola persona. Cuatro accesos, cuatro maneras de nombrar el mismo centro, cuatro ideas de lo que es una semana.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Se puede hacer. Cuesta una mañana, y la hace el único analista que sabe qué columna de qué extracción significa qué. Así que se hace para la revisión mensual, y se hace cuando algo ya ha salido lo bastante mal para merecer una mañana.
            </p>
            <p class="text-lg text-stone-400 font-medium font-semibold text-signal tracking-wide font-bold text-sm">
                La foto siempre se monta pasado el punto en el que habría servido de algo.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                El segundo coste es que el juntarlo vive en la cabeza de alguien. La correspondencia entre un código de centro en un sistema y un nombre de base en otro no está escrita en ninguna parte: se recuerda. Cuando esa persona está de vacaciones, la pregunta no se puede responder en absoluto, y nadie lo dice del todo en voz alta.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                Esto es del director de cadena de suministro, y lo llevan día a día el responsable de operaciones y el único analista del que todo el mundo depende.
            </p>
        </div>
        <div>
            <h2 id="que-ocurre-en-su-lugar" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Qué Ocurre En Su Lugar</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Lo primero que pasa es lo aburrido: sus datos se leen y se ordenan según las partes del negocio que describen. Envíos, existencias, transportistas, proveedores y flete son un área. Facturas, reservas y liquidaciones son otra. Las lecturas de sensores son otra. Vehículos y conductores, otra más. Los registros se colocan por aquello de lo que hablan, de modo que el mismo tipo de dato cae en el mismo sitio venga de un ERP, de un sistema de almacén, de un sistema de transporte o de un fichero.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Donde las columnas son demasiado vagas para colocar una tabla, se coloca según cuál es la fuente. Una extracción de almacén, de patio, de transporte o de gestión de pedidos es logística. Un flujo de sensores o de etiquetas es telemetría. Un sistema de siniestros es finanzas. El sentido de esa regla es evitar lo que hace toda herramienta de catálogo, que es barrer la mitad incómoda de su parque a un cajón llamado &laquo;otros&raquo; y no volver a mencionarlo.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Luego los enlaces. Donde dos áreas comparten el terreno que pisan, se dibuja el enlace. Donde un área no comparte ningún nombre de columna con nada más, igualmente recibe una relación en vez de quedarse flotando al borde del diagrama con aire de irrelevante &mdash; un dominio que parece desconectado es un dominio sobre el que nadie hace preguntas, y ese silencio suele estar equivocado.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Todo eso se calcula con reglas fijas a partir de la forma de sus ficheros. No se pregunta a ningún modelo, no sale ninguna búsqueda, nada cruza la red en ese paso, y los mismos ficheros producen el mismo mapa siempre. Después se usa un modelo para añadir comentario, y lo que añade es claramente el comentario y no la estructura. La estructura es algo que usted puede volver a derivar y comprobar. Nuestros propios ficheros de configuración, que están en el mismo sitio que sus datos, quedan excluidos a propósito, porque una herramienta que le presenta su propio planificador como el dominio de operaciones de usted no está describiendo su negocio.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Sobre el mapa, cada área se revisa: en qué estado está, dónde están los hallazgos y, para cada hallazgo, su categoría, la gravedad, la regla con la que se relaciona y un remedio sugerido, junto con de qué sistema salió cada parte. Cuando un área no se puede evaluar, la respuesta es que no se evaluó y por qué &mdash; dicho con esas palabras, porque &laquo;no lo hemos mirado&raquo; y &laquo;lo hemos mirado y está bien&raquo; no son la misma frase, y se leen del mismo color en todos los cuadros de mando que se han construido jamás.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Y luego se le pueden preguntar cosas, con el vocabulario que ya usa, con el mapa y las reglas reconocidas detrás de la respuesta y acotado a las áreas que esté mirando. Le llega el razonamiento, no solo la respuesta. Un escenario trabajado en <a href="/es/use-cases/hypothesis-lab">el laboratorio de hipótesis</a> se puede pasar desde allí como acción propuesta, con sus variables y las reglas contra las que se argumentó viajando con él, en vez de llegar como una referencia suelta a una ejecución que hizo otro.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Un límite sobre todo esto, dicho aquí en vez de dejado para que usted lo descubra. Lo que el mapeo lee son los ficheros que están en el directorio de datos de la propia instancia, y en una instancia estándar ese directorio no se lee, así que lo que recibe es la negativa, no un mapa flojo. Las reglas de clasificación son reales y son deterministas; el camino que deja sus extracciones en vivo delante de ellas no está terminado. Preferimos que la página diga qué mitad es cuál antes que describir la cosa entera en presente y dejar que un piloto descubra la costura.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Donde un área de la foto se convierte en un artículo a punto de quedarse corto, la respuesta es el siguiente trabajo de la fila, en <a href="/es/use-cases/fulfillment-optimization">cobertura de stock y planificación con proveedores</a>, y la señal que hay debajo es la <a href="/use-cases/demand-forecasting">previsión de demanda</a>. La visibilidad es lo que hace que esas dos se puedan discutir desde el mismo conjunto de datos en vez de desde tres extracciones.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                Lo que llega a una persona es una lista corta y ordenada de acciones propuestas con los registros adjuntos, no un diagrama que admirar. Una persona con nombre aprueba, edita o rechaza cada una, y esa firma se guarda. Aprobar es lo que lo manda, y un elemento decidido sale de la cola en vez de volver a dar la vuelta la próxima vez que alguien abre el tablero. Donde un paso detrás de la aprobación todavía no tiene implementación, la respuesta nombra ese paso como no ejecutado en vez de dar la acción por completa, así que el tablero muestra qué se decidió y, por separado, qué se llevó a cabo de verdad. Todo corre en máquinas suyas.
            </p>
        </div>
        <div class="bg-sheet p-8 rounded-2xl border border-stone-800/80 shadow-2xl">
             <h3 id="como-sabra-que-ha-funcionado" class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-signal-fill to-signal-fill-hover mb-4 tracking-tighter uppercase italic drop-shadow-lg">Cómo Sabrá Que Ha Funcionado</h3>
             <p class="text-lg text-stone-400 font-medium mb-6">
                Todas las cifras de abajo son suyas, no nuestras. No traemos números a esto; los trae usted. Anote dónde está hoy, porque el punto de partida se pierde para siempre en cuanto las cosas mejoren.
             </p>
             <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">Cuánto se tarda en una pregunta corriente que cruza sistemas.</strong> Elija una real que le hicieran el mes pasado. Cronometre a la persona que la responde, con honestidad, incluyendo las esperas. Ese es el número del que trata todo lo demás de esta página.</li>
                <li><strong class="text-stone-200">Cuánta gente podría haberla respondido.</strong> No cuánta tiene acceso. Cuánta podría de verdad haber producido la respuesta. Si es una, escriba su nombre y guárdelo donde lo pueda encontrar un informe de consejo.</li>
                <li><strong class="text-stone-200">Cuántos sistemas de registro tiene, y cuántos llegan al informe mensual.</strong> Liste los sistemas que guardan datos operativos. Luego liste los que llegan a una revisión. La diferencia es la parte de su operación que hoy se gestiona por anécdota.</li>
                <li><strong class="text-stone-200">Cuánto del informe se monta a mano, y quién lo monta.</strong> Repase los informes del último trimestre y marque cada cifra como automática o tecleada a mano. Hágalo antes de que cambie nada, porque este es el que nadie se cree hasta que ve su propia respuesta.</li>
             </ul>
             <p class="text-sm text-stone-500 font-bold uppercase tracking-widest text-xs mt-6 text-center">Traiga un mes de extracciones de los sistemas que de verdad querría ver unidos, en el formato en el que salgan.</p>
        </div>
    </div>

    <div class="text-center">
        <a href="{{< contacturl >}}" class="inline-flex items-center justify-center px-10 py-5 text-xs font-black uppercase tracking-widest !text-on-fill text-on-fill drop-shadow-md transition-all duration-300 bg-gradient-to-r from-signal-fill to-signal-fill-hover rounded-xl border border-signal/30 hover:shadow-2xl hover:-translate-y-1">
            Reserve una consulta
        </a>
    </div>
</div>
{{< /section-container >}}
