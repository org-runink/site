---
title: "Cobertura de Stock y Planificación con Proveedores"
description: "Casi todos los avisos de falta de stock llegan cuando la reserva de seguridad ya se ha ido, y eso lo deja pagando flete aéreo. La idea es verlo cuando todavía hay tiempo de pedir de forma normal."
layout: "use_case"
product: "Runink FACE"
scenario: "inventory fulfillment"
badge: "Optimización Logística"
badgeColor: "#0ea5e9"
date: "2024-05-20T00:00:00Z"
author: "Runink"
---

{{< section-container class="py-8" >}}
<div class="max-w-5xl mx-auto px-4">

<p class="text-[10px] font-black uppercase tracking-[0.25em] text-stone-500 mt-4 mb-3">Runink FACE &middot; Cobertura de stock</p>
<p class="text-sm text-stone-500 font-medium mb-10 max-w-3xl">
este es un escenario de <strong class="text-stone-300">Runink FACE</strong>, su lado de abastecimiento. Lo que sigue es lo que el producto está hecho para hacer y cómo correría contra sus propios registros. Es una ilustración del mecanismo, no el relato de una implantación. <a href="/blog/whitepapers/runink-face/" class="underline decoration-stone-700 hover:text-stone-300">Qué es FACE</a>.
</p>

<h2 class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6 mt-8">En Resumen</h2>
<ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6 mb-12">
<li><strong class="text-stone-200">El aviso dice qué límite se cruzó, con palabras.</strong> El punto de pedido, el mínimo y el máximo son los que usted ya usa: FACE no se los inventa y no los deduce de un plazo de entrega que nunca ha visto. Lo que devuelve es el límite que se cruzó y el nivel que lo cruzó, escritos, así que el aviso se puede discutir en vez de solo acusar recibo.</li>
<li><strong class="text-stone-200">La previsión le dice cuánto fiarse de ella.</strong> Cada proyección nombra el modelo &mdash;elegido apartando el tramo más reciente de su propio histórico y volviendo a ajustar cada candidato sobre lo anterior&mdash; y cuántos periodos tuvo para aprender. Cuando el histórico de un artículo no se predice a sí mismo, eso también es uno de los hallazgos.</li>
<li><strong class="text-stone-200">El aviso de stock no viene con una lista corta, y es mejor decirlo que insinuar lo contrario.</strong> La única ordenación de proveedores que existe en FACE ordena nombres por sus estrellas de reseñas públicas, sacadas de un archivo de muestra sembrado, y lo que alimenta es una tarjeta de RFP de compras, no el aviso de stock &mdash; y cuando ningún nombre valorado pasa el corte, el campo que rellena es una instrucción literal para que usted mismo califique dos o tres. En una instalación normal, sin nada conectado, nada ordena alternativas para el artículo expuesto: lo que el aviso devuelve es el límite, el nivel que lo cruzó y el motivo, y ninguna lista de proveedores. FACE tampoco guarda tarifario, así que no hay diferencia de precio que adjuntar, y una inventada sería el número más citable de la página y el menos real.</li>
</ul>

    <div class="text-center mb-16">
        <h1 class="text-5xl md:text-6xl font-black !text-white text-white drop-shadow-md italic tracking-tighter uppercase mb-6">Deje De Enterarse Demasiado Tarde.</h1>
        <p class="text-xl text-stone-400 font-bold leading-relaxed">
            Un aviso de falta de stock que llega cuando la reserva de seguridad ya se ha ido no es un aviso. Es una factura de flete aéreo con unos días de antelación.
        </p>
    </div>

    <div class="flex flex-col gap-12 mb-20">
        <div>
            <h2 class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Dónde Se Tuerce</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Casi todas las alertas de stock saltan por un nivel. Cuando la cobertura baja de la raya, se lo dicen. Pero el proveedor sigue necesitando quince días, y esos quince días empiezan cuando se lo dicen, no cuando empezó el problema.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Así que la elección es mala. Pagar de más por traerlo en avión, o decírselo al cliente. Las dos se decidieron semanas antes, por una tendencia que estuvo a la vista todo el tiempo en sus propios datos de venta.
            </p>
            <p class="text-lg text-stone-400 font-medium font-semibold text-signal tracking-wide font-bold text-sm">
                El pedido ya iba tarde antes de que nadie supiera que iba tarde.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                Debajo hay un segundo coste. Cada paso de la cadena redondea a caja entera y añade un margen por seguridad. Así que la fábrica acaba produciendo para una demanda que nunca existió. Ese crecimiento vive en la secuencia, repartido por cuatro sistemas, y ninguno de ellos lo muestra por su cuenta.
            </p>
        </div>
        <div>
            <h2 class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Qué Ocurre En Su Lugar</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                FACE lee su propio histórico de ventas para sacar la temporada y la tendencia que hay debajo, y contrasta la proyección con periodos que no se le mostraron. Esa es la mitad que le dice que un artículo está girando antes de lo que cree el plan.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                El aviso sobre el stock en sí es deliberadamente soso, y conviene decir lo que es en vez de lo que suena. El punto de pedido, el suelo y el techo vienen de usted. FACE compara el nivel con ellos y devuelve el límite que se cruzó y el nivel que lo cruzó en palabras llanas, y no un color en una baldosa. No saca el umbral de un plazo de entrega de proveedor: aquí dentro no hay modelo de plazos, y un aviso calculado contra un número que el software se ha figurado sería peor que la alerta de nivel que ya tiene, porque parecería más listo.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Lo que llega es más estrecho que una decisión de compra, y el hueco es la parte que merece nombrarse. El aviso devuelve el límite que se cruzó, el nivel que lo cruzó y el motivo, con palabras. No devuelve el proveedor que sirve el artículo de normal, y no devuelve alternativas ordenadas &mdash; la única ordenación que hay en el producto lee estrellas de reseñas de un archivo de muestra sembrado y las engancha a una tarjeta de RFP de compras, no a esto. En una instalación con sus propios sistemas conectados aquí no hay ninguna lista corta hasta que esa vía se construya, y una lista vacía es la respuesta honesta en vez de un ejemplo preparado con su nombre encima. Tampoco hay comparación de precios que hacer: FACE no tiene tarifario, ni tabla de tarifas, ni consulta de tarifas históricas, así que la diferencia de coste entre dos proveedores no es algo que pueda decirle &mdash; y una inventada sería el primer número que le citarían de vuelta en la reunión.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                La previsión que hay debajo de esto es <a href="/use-cases/demand-forecasting/" class="underline decoration-stone-700 hover:text-stone-300">un escenario de FACE por su cuenta</a> &mdash; cómo se lee una serie, qué modelo se elige y qué dice cuando un artículo simplemente no es predecible. Esta página trata de la decisión de pedido que sale de ahí.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                Una persona con nombre lo aprueba, lo edita o lo rechaza, y esa firma queda en el registro. Aprobar es lo que lo manda adelante. Y donde un paso de la acción redactada todavía no tiene nada detrás &mdash;la escritura en su ERP es el ejemplo honesto&mdash; la respuesta nombra ese paso como no ejecutado en vez de dar la cosa entera por hecha. Se le dice qué parte de la acción ocurrió, que es la diferencia entre un sistema del que puede fiarse y uno que tiene que ir a comprobar. Los márgenes de seguridad se pueden entonces discutir con sus propios números y no por rango.
            </p>
        </div>
        <div class="bg-sheet p-8 rounded-2xl border border-stone-800/80 shadow-2xl">
             <h3 class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-signal-fill to-signal-fill-hover mb-4 tracking-tighter uppercase italic drop-shadow-lg">Cómo Sabría Que Ha Funcionado</h3>
             <p class="text-lg text-stone-400 font-medium mb-6">
                Todas las cifras de abajo son suyas, no nuestras. Anote dónde está hoy, porque el punto de partida se pierde para siempre en cuanto algo cambia.
             </p>
             <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">Cuánto gasta en transporte urgente.</strong> Sus cuentas a pagar, filtradas por los códigos que usa su equipo para el flete aéreo o urgente. Tome un año entero, porque cambia con la temporada.</li>
                <li><strong class="text-stone-200">Error de previsión, artículo por artículo.</strong> La previsión de su sistema de planificación frente a lo que de verdad se vendió. La idea no es que el error baje. Es que el error se diga en vez de darlo por supuesto.</li>
                <li><strong class="text-stone-200">Días de cobertura por artículo.</strong> Cuántos días de stock lleva encima cada artículo, y cuánto de eso es margen que ya nadie sabe explicar.</li>
                <li><strong class="text-stone-200">Pedidos entregados enteros y a tiempo.</strong> Su sistema de transporte o de almacén. Compare lo que salió con la fecha y la cantidad que prometió la línea del pedido, mes a mes y por cliente. Algunos de sus fallos no se pueden evitar. Vigile los que sí.</li>
             </ul>
             <p class="text-sm text-stone-500 font-bold uppercase tracking-widest text-xs mt-6 text-center">Traiga un año de una familia de producto y sus códigos de flete urgente.</p>
        </div>
    </div>

    <div class="text-center">
        <a href="/es/#contact" class="inline-flex items-center justify-center px-10 py-5 text-xs font-black uppercase tracking-widest !text-on-fill text-on-fill drop-shadow-md transition-all duration-300 bg-gradient-to-r from-signal-fill to-signal-fill-hover rounded-xl border border-signal/30 hover:shadow-2xl hover:-translate-y-1">
            Reserve una consulta
        </a>
    </div>
</div>
{{< /section-container >}}
