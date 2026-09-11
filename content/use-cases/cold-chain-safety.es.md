---
title: "Cadena de Frío y Seguridad en el Patio"
description: "Un contenedor se calienta durante la noche y la lectura se queda en sus datos de sensores hasta que alguien abre la puerta. El lado de las cámaras del patio está construido; el camino del sensor hasta el software no lo está, y esta página lo dice."
layout: "use_case"
product: "Runink FACE"
scenario: "reactive logistics"
standing: "hypothetical"
badge: "Centinela IoT"
badgeColor: "#3b82f6"
date: "2024-05-20T00:00:00Z"
author: "Runink"
---

{{< section-container class="py-8" >}}
<div class="max-w-5xl mx-auto px-4">

<p class="text-[10px] font-black uppercase tracking-[0.25em] text-stone-500 mt-4 mb-3">Runink FACE &middot; Logística reactiva</p>
<p class="text-sm text-stone-500 font-medium mb-10 max-w-3xl">
<span class="rk-mark" data-standing="hypothetical">Hipotético</span> &mdash; este es un escenario de <strong class="text-stone-300">Runink FACE</strong>, su lado del patio. La mitad de lo que sigue está construida y la otra mitad no, y la página dice cuál es cuál en vez de describirlo todo en presente. Es una ilustración del mecanismo, no el relato de una implantación. <a href="/blog/whitepapers/runink-face/" class="underline decoration-stone-700 hover:text-stone-300">Qué es FACE</a>.
</p>

<h2 class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6 mt-8">En Resumen</h2>
<ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6 mb-12">
<li><strong class="text-stone-200">Hoy no hay ninguna entrada de sensores en vivo hacia FACE, y no vamos a insinuar que la haya.</strong> Los conectores para sistemas de sensores, de etiquetas, de almacén, de patio y de transporte son piezas provisionales que fallan a propósito, para que el razonamiento que va detrás de ellas se pueda ejercitar contra un archivo de datos sembrados mientras se construye el camino de verdad. Una excursión de temperatura en sus propios equipos no es algo que esto lea todavía.</li>
<li><strong class="text-stone-200">La cámara del patio es la parte que sí está construida.</strong> Un fotograma que llega de una cámara de patio o de infrarrojos se comprueba que sea una imagen de verdad antes de que nada lo lea, se reduce a un tamaño que un modelo pueda tragar, y lo lee un modelo de visión que corre en hardware que usted controla. Lo que vuelve es una observación escrita, atada al fotograma del que se leyó.</li>
<li><strong class="text-stone-200">Un aviso es una petición, no un bloqueo.</strong> FACE puede emitir un aviso &mdash; orienta esa cámara, detén esos movimientos de grúa &mdash; a lo que sea que esté suscrito al flujo de eventos del patio. No contacta con ningún actuador, no hay ningún controlador de grúa al otro lado, y el código lo dice con esas mismas palabras para que una emisión no pueda leerse nunca como que un movimiento se ha detenido. Si alguien le ha ofrecido un enclavamiento para mercancías peligrosas, esto no lo es.</li>
</ul>

    <div class="text-center mb-16">
        <h1 class="text-5xl md:text-6xl font-black !text-white text-white drop-shadow-md italic tracking-tighter uppercase mb-6">La Lectura Tiene Que Llegar Primero.</h1>
        <p class="text-xl text-stone-400 font-bold leading-relaxed">
            La lectura que condena una carga queda registrada horas antes de que alguien la mire. Todo el problema es el hueco entre esas dos cosas &mdash; y cerrarlo empieza por un camino del sensor hasta el software, que es justo la pieza que no hemos construido.
        </p>
    </div>

    <div class="flex flex-col gap-12 mb-20">
        <div>
            <h2 class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Dónde Se Tuerce</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Un equipo de frío empieza a fallar un martes por la noche. El sensor lo registra. A esa hora no hay nadie mirando, y los datos no se miran hasta que se abre el contenedor al otro extremo.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                A esas alturas la pregunta ya ha cambiado. Ya no es &laquo;¿podemos salvar esta carga?&raquo;, es &laquo;¿quién la paga?&raquo;. Esa pregunta es mucho más cara, y es la única que queda.
            </p>
            <p class="text-lg text-stone-400 font-medium font-semibold text-signal tracking-wide font-bold text-sm">
                La lectura estuvo ahí todo el tiempo. Nadie la estaba leyendo.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                El patio tiene un problema de la misma forma. Las reglas sobre qué mercancías pueden estar cerca de cuáles se conocen, están escritas, y las comprueba una persona que además está haciendo otras cuatro cosas.
            </p>
        </div>
        <div>
            <h2 class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Qué Ocurre En Su Lugar</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Empecemos por la parte que no está terminada, porque es la parte de la que depende todo lo demás. La lectura tiene que llegar a FACE antes de que nada de esto importe, y hoy no llega. El conector para un sistema de sensores, de etiquetas, de almacén o de patio es una pieza provisional que falla a propósito, para que el razonamiento construido encima corra en su lugar contra un archivo de datos sembrados. En una instalación normal, sin nada conectado, la cola está vacía. Antes se llenaba con esos ejemplos sembrados, presentados como si fueran sus operaciones, y eso se quitó en vez de disimularlo.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Lo que sí está construido es el lado de las cámaras del patio. Un fotograma se valida como imagen de verdad antes de que un modelo lo vea, se reduce a algo que un modelo pueda tragar, y lo lee un modelo de visión en su propio hardware — así que la lectura del patio ocurre donde ya están las grabaciones, y las grabaciones no salen hacia la API de nadie para que las describa. La observación vuelve pegada al fotograma del que salió, y eso es lo que la hace discutible en vez de darla por cierta.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Encima de eso, se puede emitir un aviso a todo lo que esté mirando el flujo de eventos del patio. Conviene ser exactos con esto, porque la categoría lo vende como imposición: la emisión pide, no actúa. No se contacta con ningún actuador, en el proceso no hay ningún controlador de grúa con el que contactarlo, y el código se niega a informar de un aviso como si un movimiento hubiera ocurrido. Esa negativa es la función. Un enclavamiento que no puede disparar es peor que no tener enclavamiento, porque responde &laquo;¿esto está cubierto?&raquo; con un sí lleno de confianza.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                Donde hay algo sobre lo que actuar, espera como un movimiento redactado, y una persona con nombre lo aprueba, lo edita o lo rechaza, y el visto bueno queda anotado. Aprobar es lo que lo envía. Y donde un paso de ese movimiento no tiene nada detrás — una escritura en un sistema de patio o de transporte, por ejemplo — la respuesta nombra el paso que no ocurrió en vez de informar de un éxito, así que &laquo;aprobado&raquo; y &laquo;hecho&raquo; siguen siendo dos palabras distintas.
            </p>
        </div>
        <div class="bg-sheet p-8 rounded-2xl border border-stone-800/80 shadow-2xl">
             <h3 class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-signal-fill to-signal-fill-hover mb-4 tracking-tighter uppercase italic drop-shadow-lg">Cómo Sabría Que Ha Funcionado</h3>
             <p class="text-lg text-stone-400 font-medium mb-6">
                Todas las cifras de abajo son suyas, no nuestras. Anote dónde está hoy, porque el punto de partida se pierde para siempre en cuanto algo cambia.
             </p>
             <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">Lo que da de baja en existencias refrigeradas y congeladas.</strong> La cuenta de bajas de su contabilidad y el registro de rechazos de calidad del mismo periodo, con los casos de temperatura separados de todas las demás causas.</li>
                <li><strong class="text-stone-200">Horas desde la primera lectura mala hasta que alguien actúa.</strong> Tome una muestra de los episodios de temperatura del último trimestre. Apunte cuándo se registró cada uno, y cuándo hizo algo una persona por primera vez.</li>
                <li><strong class="text-stone-200">Cuántos desvíos se detectaron cuando la carga todavía se podía salvar.</strong> Cuéntelos como parte del total de desvíos. Esta es la cifra sobre la que se apoya todo lo demás.</li>
                <li><strong class="text-stone-200">Hallazgos de seguridad en el patio.</strong> Sus propios registros de inspección y de incidentes, contados por trimestre, separando las reglas sobre mantener mercancías apartadas de todo lo demás.</li>
                <li><strong class="text-stone-200">Lo que sus cámaras ya graban y nadie lee.</strong> Cuente las cámaras del patio, y luego cuente cuántas horas de lo que graban las mira alguna vez una persona. Ese es el hueco en el que trabaja el lado de visión de esto, y suele ser el número más grande de la lista.</li>
             </ul>
             <p class="text-sm text-stone-500 font-bold uppercase tracking-widest text-xs mt-6 text-center">Traiga su cuenta de bajas y un día de grabación de las cámaras del patio.</p>
        </div>
    </div>

    <div class="text-center">
        <a href="/es/#contact" class="inline-flex items-center justify-center px-10 py-5 text-xs font-black uppercase tracking-widest !text-on-fill text-on-fill drop-shadow-md transition-all duration-300 bg-gradient-to-r from-signal-fill to-signal-fill-hover rounded-xl border border-signal/30 hover:shadow-2xl hover:-translate-y-1">
            Reserve una consulta
        </a>
    </div>
</div>
{{< /section-container >}}
