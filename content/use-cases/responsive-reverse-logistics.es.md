---
title: "Devoluciones y Qué Hacer Con Ellas"
description: "Un artículo devuelto vale lo máximo el día en que vuelve. La decisión sobre a dónde va — estantería, reacondicionamiento, reciclaje o desecho — se redacta en el escaneo, a partir de una política escrita que da al mismo grado la misma respuesta siempre."
layout: "use_case"
product: "Runink FACE"
scenario: "reverse logistics"
badge: "Economía Circular"
badgeColor: "#14b8a6"
date: "2024-05-20T00:00:00Z"
author: "Runink"
---

{{< section-container class="py-8" >}}
<div class="max-w-5xl mx-auto px-4">

<p class="text-[10px] font-black uppercase tracking-[0.25em] text-stone-500 mt-4 mb-3">Runink FACE &middot; Logística inversa</p>
<p class="text-sm text-stone-500 font-medium mb-10 max-w-3xl">
este es un escenario de <strong class="text-stone-300">Runink FACE</strong>, su lado de devoluciones y economía circular. Lo que sigue es lo que el producto está hecho para hacer y cómo correría contra sus propios registros. Es una ilustración del mecanismo, no el relato de una implantación. <a href="/blog/whitepapers/runink-face/" class="underline decoration-stone-700 hover:text-stone-300">Qué es FACE</a>.
</p>

<h2 id="en-resumen" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6 mt-8">En Resumen</h2>
<ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6 mb-12">
<li><strong class="text-stone-200">La decisión se redacta en el escaneo.</strong> FACE trabaja con cuatro cosas que le entrega el muelle: el identificador de la devolución, el código de barras, el grado de estado que anotó la persona del muelle, y el valor del artículo tal como ella lo teclea. No busca nada detrás de eso &mdash; ni el pedido, ni la garantía, ni una lista de precios &mdash; y responde en el momento en que la caja aterriza, no la tarde en que alguien llega al apartado.</li>
<li><strong class="text-stone-200">La política está escrita, así que el mismo grado recibe siempre la misma respuesta.</strong> Reponer, reacondicionar, reciclar, desechar: cada grado de estado lleva a uno de ellos y a uno de cuatro destinos escritos en el código, igual siempre, quienquiera que esté en el muelle y con la cola que haya. Un grado que no reconoce se rechaza, en vez de archivarse bajo su mejor conjetura.</li>
<li><strong class="text-stone-200">Sí hay una cifra de recuperación, y es aritmética sobre un número que usted teclea.</strong> El triaje devuelve un rendimiento de recuperación estimado y un coste de reacondicionamiento, y ambos son el valor que introdujo el muelle multiplicado por una fracción fija según el grado: el estado impecable rinde el 95% de ese valor y nada de reacondicionamiento, el dañado rinde el 75% y una cuarta parte como reparación. Nada se mide y nada se consulta. Preferimos que conozca el multiplicador antes que se fíe del signo de dólar.</li>
<li><strong class="text-stone-200">El triaje no decide nada por sí solo.</strong> Contesta a la pantalla y ahí se detiene: no mueve existencias, no emite ningún abono y no guarda ninguna aprobación. La decisión sigue siendo de la persona del muelle, y nada en este paso puede tomarla por ella.</li>
</ul>

    <div class="text-center mb-16">
        <h2 id="una-devolucion-vale-mas-el-primer-dia" class="text-5xl md:text-6xl font-black !text-white text-white drop-shadow-md italic tracking-tighter uppercase mb-6">Una Devolución Vale Más El Primer Día.</h2>
        <p class="text-xl text-stone-400 font-bold leading-relaxed">
            Casi todo lo que pierde una devolución, lo pierde mientras espera. No en la reparación, no en el transporte: en las semanas que pasa en una esquina del muelle mientras alguien averigua a dónde debería ir.
        </p>
    </div>

    <div class="flex flex-col gap-12 mb-20">
        <div>
            <h2 id="donde-se-tuerce" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Dónde Se Tuerce</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Vuelve una caja. Para decidir a dónde debería ir, alguien tiene que saber qué había dentro, si sigue en garantía, en qué estado está, qué sacaría ahora y qué costaría una reparación. Eso son cuatro sistemas y una mirada dentro de la caja.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Así que la caja espera. Espera en un apartado del muelle con el resto de las devoluciones de la semana, y el apartado se clasifica cuando hay una tarde libre. Mientras tanto el cliente espera el reembolso, y el artículo envejece en silencio y vale menos.
            </p>
            <p class="text-lg text-stone-400 font-medium font-semibold text-signal tracking-wide font-bold text-sm">
                Cada semana que una devolución espera, vale menos que antes.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                Y cuando llega la tarde, la clasificación se hace a ojo y por costumbre. Mercancía buena se va al desguace porque la cola era larga. Mercancía rota vuelve a la estantería y vuelve de allí otra vez enseguida. Nadie se propuso hacer ninguna de las dos cosas.
            </p>
        </div>
        <div>
            <h2 id="que-ocurre-en-su-lugar" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Qué Ocurre En Su Lugar</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                El escaneo es el momento en que el trabajo se hace. El grado de estado entra con la devolución, y sale un destino: directo al centro de devoluciones, fuera a reacondicionamiento, a reciclaje en circuito cerrado, o a eliminación de residuos peligrosos donde el grado lo exija. La propiedad útil no es que haya decidido una máquina: es que la decisión es la misma siempre. El mismo grado produce la misma ruta un martes tranquilo y el lunes después de Navidad, que es exactamente cuando clasificar a ojo deja de ser clasificar.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Un grado que no reconoce vuelve como un rechazo y no como una ruta. Eso vale más de lo que suena: el fallo que esto sustituye es una caja que recibió un destino de apariencia plausible porque había que poner algo en el campo, y nadie aguas abajo podía distinguir esa respuesta de una de verdad.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Con el destino vuelve dinero, y conviene saber exactamente qué clase de número es. Junto a la ruta, el triaje devuelve un rendimiento de recuperación estimado y un coste de reacondicionamiento, y la cabina imprime los dos como importes en dólares bajo esas dos etiquetas. Ambos son el valor que alguien tecleó en el muelle multiplicado por una fracción fija según el grado &mdash; un artículo impecable al 95% de ese valor y nada de reacondicionamiento, uno dañado al 75% con una cuarta parte como reparación, y los demás grados con la misma forma. No se consulta ninguna lista de precios ni se observa ninguna reventa. La cifra es la aritmética de la política sobre lo que usted introdujo, y vale exactamente lo que valía ese dato, que es algo que usted puede juzgar y nosotros no.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                El destino es la misma clase de cosa, y aquí la palabra honesta es «inacabado». Es una de cuatro cadenas de texto escritas en el código, y dos de ellas nombran instalaciones concretas &mdash; un centro de devoluciones y un centro de reacondicionamiento, ambos en India, sin ninguna relación con ningún contrato suyo. A qué instalación debería ir cada grado es su decisión y su contrato; el código todavía no le da dónde decirlo. Eso es una limitación de lo que hay hecho hoy, no un principio de diseño, y es lo primero que una implantación tendría que arreglar.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                La llamada de triaje, por sí misma, no envía nada. Devuelve un destino y se detiene: no se escribe ningún registro de existencias, no se emite ningún abono, no se guarda ninguna aprobación. Actuar sobre una acción redactada es otra parte de FACE, y allí la decisión queda registrada a nombre de una persona antes de que nada se ejecute; y donde un paso detrás de ella todavía no tiene implementación, siendo la escritura en un ERP el ejemplo honesto, la respuesta nombra el paso que no ocurrió en vez de dar el movimiento por completado.
            </p>
        </div>
        <div class="bg-sheet p-8 rounded-2xl border border-stone-800/80 shadow-2xl">
             <h3 id="como-sabria-que-ha-funcionado" class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-signal-fill to-signal-fill-hover mb-4 tracking-tighter uppercase italic drop-shadow-lg">Cómo Sabría Que Ha Funcionado</h3>
             <p class="text-lg text-stone-400 font-medium mb-6">
                Todas las cifras de abajo son suyas, no nuestras. Anote dónde está hoy, porque el punto de partida se pierde para siempre en cuanto algo cambia.
             </p>
             <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">Días desde que la caja aterriza hasta que se toma la decisión.</strong> Tome un mes de devoluciones. Anote cuándo se dio de alta cada una, y cuándo alguien dijo a dónde iba. La distancia es todo.</li>
                <li><strong class="text-stone-200">Lo que recuperó, como proporción de lo que valía la mercancía.</strong> De sus notas de crédito y su libro de inventario: a cuánto estaba valorada la mercancía devuelta, frente a lo que recuperó vendiéndola, reparándola o desguazándola.</li>
                <li><strong class="text-stone-200">A dónde fueron las devoluciones.</strong> Un trimestre de ellas, repartido entre estantería, reparación y desguace. Luego pregunte cuántas de las desguazadas seguían en garantía. Casi ningún equipo lo ha mirado nunca.</li>
                <li><strong class="text-stone-200">Días hasta reembolsar al cliente.</strong> Desde que se abre la devolución hasta que el abono llega a su cuenta, sacado de sus propios registros de facturación.</li>
             </ul>
             <p class="text-sm text-stone-500 font-bold uppercase tracking-widest text-xs mt-6 text-center">Traiga un mes de devoluciones y sus notas de crédito.</p>
        </div>
    </div>

    <div class="text-center">
        <a href="{{< contacturl >}}" class="inline-flex items-center justify-center px-10 py-5 text-xs font-black uppercase tracking-widest !text-on-fill text-on-fill drop-shadow-md transition-all duration-300 bg-gradient-to-r from-signal-fill to-signal-fill-hover rounded-xl border border-signal/30 hover:shadow-2xl hover:-translate-y-1">
            Reserve una consulta
        </a>
    </div>
</div>
{{< /section-container >}}
