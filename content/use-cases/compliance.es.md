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

<h2 id="en-resumen" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6 mt-8">En Resumen</h2>
<ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6 mb-12">
<li><strong class="text-stone-200">Los datos personales no llegan a los registros técnicos.</strong> Las direcciones de correo, los teléfonos, los números de tarjeta, los números de la seguridad social y las direcciones IP se quitan de los registros y de los diagnósticos antes de que se escriban, así que el rastro que deja un sistema al funcionar no se convierte en una segunda copia de los datos.</li>
<li><strong class="text-stone-200">Eso es una propiedad de la plataforma, no un informe que usted ejecuta &mdash; y no tiene pruebas.</strong> El borrado ocurre en el camino por el que escribe cada servicio, en cada sitio donde un servicio escribe una línea. También le diremos que esa función de borrado no lleva ninguna prueba propia, porque una lista de lo que una expresión regular debería atrapar no es la prueba de que lo atrape. Lea la lista como una descripción de la intención, no como un certificado.</li>
<li><strong class="text-stone-200">La cifra de emisiones es un factor de carretera publicado multiplicado por una distancia de ruta &mdash; y hoy la tarjeta es solo de demostración.</strong> No pesos, no medios de transporte, no un modelo. Un único factor del pozo a la rueda para un camión pesado diésel, aplicado a las distancias de ruta que hay en los datos de rutas, con el método escrito encima de la cifra. Hoy esos datos de rutas son un archivo de muestra sembrado, así que una instalación conectada no muestra ninguna tarjeta de emisiones. El mar y el aire no entran, y donde no hay datos de distancia la tarjeta no aparece en vez de aparecer con una estimación en su lugar.</li>
</ul>

    <div class="text-center mb-16">
        <h2 id="dos-informes-que-nadie-tiene-tiempo-de-hacer" class="text-5xl md:text-6xl font-black !text-white text-white drop-shadow-md italic tracking-tighter uppercase mb-6">Dos Informes Que Nadie Tiene Tiempo De Hacer.</h2>
        <p class="text-xl text-stone-400 font-bold leading-relaxed">
            La privacidad y las emisiones parecen problemas distintos. Son el mismo problema: registros repartidos por varios sistemas, de los que solo puede responder una persona que los una a mano.
        </p>
    </div>

    <div class="flex flex-col gap-12 mb-20">
        <div>
            <h2 id="donde-se-tuerce" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Dónde Se Tuerce</h2>
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
            <h2 id="para-quien-es-esto" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Para Quién Es Esto</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Dos informes, tres escritorios, y la misma pregunta debajo de ambos: ¿puede usted enseñar su trabajo?
            </p>
            <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">El delegado de protección de datos, y cumplimiento y riesgos.</strong> Lo que llega hoy es el nombre y la dirección de un cliente que hicieron falta una vez para entregar un paquete y llevan viajando con el registro desde entonces &mdash; a una exportación, a un informe para un socio, a un archivo de registro técnico que nadie lee hasta que algo ha salido mal. Lo que cambia es dónde se detiene el rastro. Los datos personales se quitan de los registros y los diagnósticos antes de que se escriban, en el camino por debajo de cada servicio y no en un informe que alguien se acuerde de ejecutar.</li>
                <li><strong class="text-stone-200">TI y seguridad de la información.</strong> Lo que llega hoy es una pregunta que solo se contesta contando: cuáles de sus servicios escriben registros de aplicación, y cuáles de esos pasan lo que escriben por algún borrado antes de guardarlo o enviarlo. Lo que cambia es que la respuesta es una propiedad de cómo está construido el software, descrita en frases corrientes que usted puede contrastar en una revisión de código, así que la conversación de seguridad es una descripción y no una negociación.</li>
                <li><strong class="text-stone-200">Auditoría interna, y quien responde por el informe.</strong> Lo que llega hoy es una petición de explicar por qué una cifra es la que es, meses después de que quien la montó se haya ido. Lo que cambia es que el método viaja con la cifra en la misma frase, y que una comprobación que no se pudo hacer queda escrita como entrada propia en vez de pasar en silencio por un resultado limpio.</li>
            </ul>
        </div>
        <div>
            <h2 id="que-ocurre-en-su-lugar" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Qué Ocurre En Su Lugar</h2>
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
        <div class="bg-sheet p-8 rounded-lg border border-stone-800/80 shadow-2xl">
             <h3 id="como-sabra-que-ha-funcionado" class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-signal-fill to-signal-fill-hover mb-4 tracking-tighter uppercase italic drop-shadow-lg">Cómo Sabrá Que Ha Funcionado</h3>
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
</div>
{{< /section-container >}}

{{< faq >}}
{
  "title": "Lo Que Un Responsable De Cumplimiento Pregunta Primero",
  "description": "Qué hace de verdad la parte de privacidad, de qué está hecha la cifra de emisiones y qué no afirma esta página.",
  "questions": [
    {
      "question": "¿Qué impide que los datos personales lleguen a nuestros registros técnicos?",
      "answer": "Un único paso de borrado, situado en el camino de escritura por debajo de cada servicio y no en una herramienta que alguien ejecuta después. Todos los servicios escriben sus registros y diagnósticos a través de él, y quita del texto las direcciones de correo, los teléfonos, los números de tarjeta, los números de la seguridad social y las direcciones de red y de equipo antes de que la línea se guarde. También se van campos con nombre &mdash; contraseñas, tokens, secretos, claves de licencia, direcciones de webhook &mdash; allí donde aparezcan en una estructura de datos.<br><br>El orden interno es deliberado: los números de tarjeta se reconocen antes que los teléfonos, para que un patrón de teléfono no se trague una tarjeta. Lea esa lista como una descripción de lo que ese paso está construido para atrapar. Es una descripción del mecanismo, no un certificado, y preferimos que lo oiga en esos términos."
    },
    {
      "question": "¿Esto revisa nuestros paneles y exportaciones en busca de datos personales expuestos?",
      "answer": "El mecanismo es más estrecho de lo que se suele vender la categoría, y merece decirse exactamente qué es. Trabaja sobre lo que sus propios sistemas escriben acerca de sí mismos: registros técnicos, diagnósticos y las estructuras de datos que los acompañan, limpiados a la salida para que hacer funcionar un sistema no cree en silencio un segundo almacén de los datos personales que hay dentro. Ahí es donde las brechas se descubren tarde y donde nadie piensa en mirar.<br><br>Lo que usted compra aquí es que ese rastro esté limpio por construcción, en cada sitio donde un servicio escribe una línea. Decidir quién debería poder ver la dirección de un cliente en una pantalla que ve un socio es una cuestión de política sobre sus propios sistemas, y se queda con las personas que los llevan."
    },
    {
      "question": "¿De qué está hecha en realidad la cifra de emisiones?",
      "answer": "Un único factor de transporte por carretera publicado &mdash; del pozo a la rueda, para un camión pesado diésel &mdash; multiplicado por una distancia de ruta tomada de los datos de rutas en vez de modelada, y anualizada sobre un número declarado de días laborables. El método viaja con la cifra en la misma frase, así que un auditor lee el supuesto en el mismo momento en que lee el número.<br><br>Conviene ser claro con los bordes, porque la categoría no lo es. Es transporte por carretera: el mar y el aire quedan fuera. Una ruta cuya distancia nunca se midió no da nada en vez de dar una suposición. Y las distancias que hay hoy detrás de la tarjeta salen de un archivo de muestra, así que lo que usted mira es el método enseñado y no una lectura de sus propias rutas. Aquí hubo una vez además una tasa de reducción &mdash; la parte en que se decía que una ruta cambiada recortaba emisiones, sin fuente ninguna &mdash; y se borró, con una prueba cuyo único trabajo es fallar si alguien vuelve a poner una."
    },
    {
      "question": "¿Qué pasa cuando una comprobación no se pudo hacer?",
      "answer": "Queda escrita como entrada propia: el cumplimiento no fue evaluado, con esas palabras, deliberadamente apartada de una evaluación que sí corrió y no encontró nada. Una cantidad que nadie midió se guarda como no medida y con un motivo, en vez de redondearse a cero.<br><br>Juntar las dos en una sola marca verde es cómo &ldquo;lo comprobamos y no había nada&rdquo; y &ldquo;no pudimos leer esto, así que nunca se comprobó&rdquo; acaban pareciendo iguales en un informe. La segunda es el hallazgo que una auditoría busca de verdad, y es el que suele desaparecer."
    },
    {
      "question": "Un regulador pregunta quién vio la dirección de un cliente. ¿Quién responde?",
      "answer": "Responde usted, desde el registro y no desde la memoria. Las dos mitades de esta página guardan su propio trabajo &mdash; qué se leyó, contra qué regla se leyó, qué se encontró, quién lo miró y cuándo &mdash; así que contestar a una pregunta del supervisor es recuperación y no un proyecto de reconstrucción entre cuatro sistemas.<br><br>La persona responsable sigue siendo la suya. Lo que cambia es cuánto tarda en poder contestar, y si la respuesta se apoya en documentos o en el recuerdo que alguien tiene de un martes."
    },
    {
      "question": "¿Algo de esto nos hace conformes, o certifica algo?",
      "answer": "El cumplimiento es un juicio, y se queda con quien lo tiene. Lo que hace el software es encontrar el registro, enseñar la regla contra la que se leyó y entregar los dos a la persona responsable &mdash; su responsable de cumplimiento, su delegado de protección de datos, su auditor. Si la obligación se cumple lo deciden ellos, y le estaríamos mintiendo si sugiriéramos otra cosa.<br><br>La misma distinción vale para nosotros. La propia postura de FACE es orientada a SOC&nbsp;2, que es una intención de diseño que declaramos nosotros mismos: no es una auditoría terminada, y no es una afirmación de que Runink tenga una certificación bajo SOC&nbsp;2, ISO 27001, ISO 42001 ni ningún otro esquema. Allí donde esa diferencia le importe, pídanos el documento de postura en vez de quedarse con una palabra de una página web."
    }
  ]
}
{{< /faq >}}

{{< section-container class="py-12" >}}
<div class="max-w-5xl mx-auto px-4">
    <div class="text-center">
        <a href="{{< contacturl >}}" class="inline-flex items-center justify-center px-10 py-5 text-xs font-black uppercase tracking-widest !text-on-fill text-on-fill drop-shadow-md transition-all duration-300 bg-gradient-to-r from-signal-fill to-signal-fill-hover rounded-xl border border-signal/30 hover:shadow-2xl hover:-translate-y-1">
            Reserve una consulta
        </a>
    </div>
</div>
{{< /section-container >}}
