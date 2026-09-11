---
title: "Datos Personales de Clientes e Informe de Emisiones"
description: "Operar un sistema escribe datos personales en sus propios registros técnicos sin que nadie lo note, y el informe de emisiones cuesta un trimestre entero. Esto es exactamente lo que el software hace con cada cosa, incluidas las partes que no hace."
layout: "use_case"
badge: "Gestión de Riesgos"
badgeColor: "#ea580c"
product: "Runink FACE"
date: "2024-05-20T00:00:00Z"
author: "Runink"
---

{{< section-container class="py-8" >}}
<div class="max-w-5xl mx-auto px-4">

<p class="text-xs font-black uppercase tracking-[0.25em] text-stone-500 mb-2">Runink FACE &middot; Cumplimiento e informe de emisiones</p>
<p class="text-base text-stone-500 font-medium mb-10">Este es un escenario de <strong class="text-stone-300">Runink FACE</strong>, no de la plataforma que tiene debajo. Vale la pena decirlo sin rodeos, porque el cumplimiento suena a asunto de plataforma: las comprobaciones que se describen aquí leen los registros que FACE guarda de sus envíos y de sus informes, y son parte de FACE y no un añadido a la infraestructura.</p>

<h2 class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6 mt-8">En Resumen</h2>
<ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6 mb-12">
<li><strong class="text-stone-200">Los datos personales no llegan a los registros técnicos.</strong> Las direcciones de correo, los teléfonos, los números de tarjeta, los números de la seguridad social y las direcciones IP se quitan de los registros y de los diagnósticos antes de que se escriban, así que el rastro que deja un sistema al funcionar no se convierte en una segunda copia de los datos.</li>
<li><strong class="text-stone-200">Eso es una propiedad de la plataforma, no un informe que usted ejecuta &mdash; y no tiene pruebas.</strong> El borrado ocurre en el camino por el que escribe cada servicio, en cada sitio donde un servicio escribe una línea. También le diremos que esa función de borrado no lleva ninguna prueba propia, porque una lista de lo que una expresión regular debería atrapar no es la prueba de que lo atrape. Lea la lista como una descripción de la intención, no como un certificado.</li>
<li><strong class="text-stone-200">La cifra de emisiones es un factor de carretera publicado multiplicado por una distancia de ruta &mdash; y hoy la tarjeta es solo de demostración.</strong> No pesos, no medios de transporte, no un modelo. Un único factor del pozo a la rueda para un camión pesado diésel, aplicado a las distancias de ruta que hay en los datos de rutas, con el método escrito encima de la cifra. Hoy esos datos de rutas son un archivo de muestra sembrado, así que una instalación conectada no muestra ninguna tarjeta de emisiones. El mar y el aire no entran, y donde no hay datos de distancia la tarjeta no aparece en vez de aparecer con una estimación en su lugar.</li>
</ul>

    <div class="text-center mb-16">
        <h1 class="text-5xl md:text-6xl font-black !text-white text-white drop-shadow-md italic tracking-tighter uppercase mb-6">Dos Informes Que Nadie Tiene Tiempo De Hacer.</h1>
        <p class="text-xl text-stone-400 font-bold leading-relaxed">
            La privacidad y las emisiones parecen problemas distintos. Son el mismo problema: registros repartidos por varios sistemas, de los que solo puede responder una persona que los una a mano.
        </p>
    </div>

    <div class="flex flex-col gap-12 mb-20">
        <div>
            <h2 class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Dónde Se Tuerce</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                El nombre y la dirección de un cliente hacen falta para entregarle el paquete. No hacen falta en el panel de un transportista, ni en un informe que se manda a un socio, ni en la copia del archivo que alguien sacó para una reunión. Pero el dato viaja con el registro, y sigue viajando.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Nadie planea esto. Pasa porque la forma más corta de responder una pregunta es exportar lo que uno tiene, y lo que uno tiene lleva dentro los datos personales.
            </p>
            <p class="text-lg text-stone-400 font-medium font-semibold text-signal tracking-wide font-bold text-sm">
                No se puede proteger lo que no se ve salir.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                El informe de emisiones tiene la misma forma. Los números que necesita —cuánto se movió, hasta dónde y por qué medio— están todos en sus propios registros de envío. Solo que están en varios sistemas, en varios formatos, y juntarlos es un trimestre del año de alguien.
            </p>
        </div>
        <div>
            <h2 class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Qué Ocurre En Su Lugar</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Del lado de la privacidad, el mecanismo es más estrecho de lo que suele venderse, y conviene decirlo con exactitud. Cada servicio escribe sus registros y sus diagnósticos a través de un paso de borrado compartido que quita del texto las direcciones de correo, los teléfonos, los números de tarjeta, los números de la seguridad social y las direcciones IP y de hardware antes de que el texto aterrice, junto con campos con nombre —contraseñas, tókenes, secretos, claves de licencia, direcciones de webhook— donde quiera que aparezcan en un contenido estructurado. La idea es que operar un sistema no cree en silencio una segunda copia de los datos personales que hay dentro: el sitio donde las filtraciones se descubren tarde, y el sitio donde a nadie se le ocurre mirar. Lo que <em>no</em> hace es revisar sus informes ni sus pantallas de reparto, decidir que un nombre no debería estar en una, ni decirle quién lo vio. Aquí no hay revisión de pantallas ni hallazgo de exposición; si una página le dijo otra cosa, estaba describiendo algo que no existe.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Y hay una cosa que no vamos a dejar que una lista de viñetas esconda. Ese borrado no tiene pruebas propias. El orden interno está pensado —los números de tarjeta se buscan antes que los teléfonos, para que el patrón de teléfono no se trague una tarjeta— y se llama desde todos los servicios que escriben una línea, pero nadie ha escrito una prueba que demuestre que atrapa lo que dice atrapar. Una regla sin comprobación es un comentario. Preferimos que lo oiga de nosotros antes que encontrarlo en una carpeta de <em>due diligence</em>.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                En emisiones hay que ser exacto con de qué está hecha la cifra, porque la categoría no lo es. Es un único factor publicado de transporte por carretera —del pozo a la rueda, para un camión pesado diésel— multiplicado por una distancia de ruta tomada de los datos de rutas en vez de modelada, y anualizado sobre un número de días laborables que se declara. El método viaja con la cifra, en la misma frase, así que un auditor lee el supuesto en el mismo momento en que lee el número. Lo que no es: un modelo de pesos y medios de transporte. El mar y el aire no están dentro, y una ruta cuya distancia nunca se midió no da nada en vez de dar una suposición. También es, hoy, una tarjeta solo de demostración: las distancias de ruta que multiplica se leen de un archivo de muestra sembrado, detrás del mismo interruptor que enciende el distintivo de datos de demostración. Una instalación sin nada conectado no produce tarjeta de emisiones en vez de producir un ejemplo preparado con su nombre encima, y en una instalación con sus propios sistemas conectados la tarjeta sigue sin aparecer hasta que esa vía se construya.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                Aquí hubo también un porcentaje de reducción: la parte en la que se decía que una ruta cambiada recortaba emisiones, presentada como bien establecida y sin fuente ninguna. Se borró, y ahora hay una prueba cuyo único trabajo es fallar si alguien vuelve a meter un porcentaje de reducción. Una distancia y un factor no sostienen un escenario contrafactual, y la forma más barata de que eso siga siendo cierto fue hacer la ausencia exigible en vez de confiarla a la memoria.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Los dos dejan constancia de su propio trabajo. Cuando un auditor pregunta por qué una cifra es la que es, o cuando un regulador pregunta quién vio la dirección de un cliente, la respuesta sale del registro y no de la memoria de quien hizo la hoja de cálculo.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                El registro también mantiene separadas las dos respuestas que la gente suele juntar. &laquo;Esto se revisó y no había nada&raquo; y &laquo;esto no se pudo leer, así que nunca se revisó&raquo; quedan anotadas como cosas distintas. La segunda es el hallazgo que una auditoría busca de verdad, y es la que una marca verde se traga de normal.
            </p>
        </div>
        <div class="bg-sheet p-8 rounded-2xl border border-stone-800/80 shadow-2xl">
             <h3 class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-signal-fill to-signal-fill-hover mb-4 tracking-tighter uppercase italic drop-shadow-lg">Cómo Sabrá Que Ha Funcionado</h3>
             <p class="text-lg text-stone-400 font-medium mb-6">
                Todas las cifras de abajo son suyas, no nuestras. Anote dónde está hoy, porque el punto de partida se pierde para siempre en cuanto las cosas mejoran.
             </p>
             <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">Días de trabajo en su ciclo de informes.</strong> Pregunte a quienes hacen el informe de emisiones cuántos días les llevó el año pasado, y cuántos de esos días se fueron en buscar números en vez de en revisarlos.</li>
                <li><strong class="text-stone-200">Qué parte del informe puede respaldar.</strong> Cuente qué parte de sus cifras sale de un registro de envío que usted puede señalar, y qué parte se apoya en un cálculo aproximado que ya nadie sabe defender.</li>
                <li><strong class="text-stone-200">Dónde están de verdad los datos personales.</strong> Tome una muestra de los informes y las pantallas que ven sus socios y sus transportistas. Cuente cuántos llevan un nombre, un teléfono o una dirección. Casi ningún equipo ha contado esto nunca.</li>
                <li><strong class="text-stone-200">Qué parte de sus propios registros técnicos pasa por algún borrado.</strong> Cuente los servicios que escriben registros de aplicación, y luego cuente aquellos cuya salida pasa por algún paso de borrado antes de guardarse o de salir hacia un proveedor de registros. Ese es el punto de partida del que habla la mitad de privacidad de esta página, y es el que casi todos los equipos pueden responder en una tarde y preferirían no responder.</li>
             </ul>
             <p class="text-sm text-stone-500 font-bold uppercase tracking-widest text-xs mt-6 text-center">Traiga el informe del año pasado y una muestra de las pantallas que ven sus socios.</p>
        </div>
    </div>

    <div class="border-l-2 border-stone-700 pl-5 mb-16">
        <p class="text-xs font-black uppercase tracking-[0.25em] text-stone-400 mb-2">Situación: hipotético &mdash; no medido; postura de cumplimiento declarada por nosotros</p>
        <p class="text-base text-stone-500 font-medium mb-4">
            Las exposiciones y el ciclo de informes de arriba están dibujados para mostrar la forma del trabajo. No son el relato de un trabajo con un cliente, y nada de esta página es un resultado medido.
        </p>
        <p class="text-base text-stone-500 font-medium">
            Dos cosas que esta página no afirma. FACE está <strong class="text-stone-300">orientado a SOC&nbsp;2</strong>, que es una intención de diseño que declaramos nosotros mismos: no es una auditoría terminada y no es una certificación. Y nada de lo que hay aquí le hace cumplir con nada. El software encuentra el registro, muestra la regla contra la que se leyó y entrega las dos cosas a la persona que responde. Si usted cumple una obligación es un juicio que se queda con su responsable de cumplimiento, su delegado de protección de datos y su auditor, y le estaríamos mintiendo si le sugiriéramos otra cosa.
        </p>
    </div>

    <div class="text-center">
        <a href="/es/#contact" class="inline-flex items-center justify-center px-10 py-5 text-xs font-black uppercase tracking-widest !text-on-fill text-on-fill drop-shadow-md transition-all duration-300 bg-gradient-to-r from-signal-fill to-signal-fill-hover rounded-xl border border-signal/30 hover:shadow-2xl hover:-translate-y-1">
            Reserve una consulta
        </a>
    </div>
</div>
{{< /section-container >}}
