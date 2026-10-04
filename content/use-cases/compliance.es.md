---
title: "Datos Personales de Clientes y Registros de Auditoría"
description: "Operar un sistema escribe datos personales en sus propios registros técnicos sin que nadie lo note. Cómo FACE los deja fuera, guarda constancia de su propio trabajo y entrega la evidencia a la persona responsable."
layout: "use_case"
badge: "Gestión de Riesgos"
badgeColor: "#ea580c"
product: "Runink FACE"
date: "2024-05-20T00:00:00Z"
author: "Runink"
---

{{< section-container class="py-8" >}}
<div class="max-w-5xl mx-auto px-4">

<p class="text-xs font-black uppercase tracking-[0.25em] text-stone-500 mb-2">Runink FACE &middot; Cumplimiento y registros de auditoría</p>
<p class="text-base text-stone-500 font-medium mb-10">Este es un escenario de <strong class="text-stone-300">Runink FACE</strong>. Las comprobaciones que se describen aquí leen los registros que FACE guarda de sus envíos y de sus informes, y son parte del propio FACE.</p>

<h2 id="en-resumen" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6 mt-8">En Resumen</h2>
<ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6 mb-12">
<li><strong class="text-stone-200">Los datos personales no llegan a los registros técnicos.</strong> Las direcciones de correo, los teléfonos, los números de tarjeta, los números de la seguridad social y las direcciones IP se quitan de los registros y de los diagnósticos antes de que se escriban, así que el rastro que deja un sistema al funcionar no se convierte en una segunda copia de los datos.</li>
<li><strong class="text-stone-200">Está integrado en la plataforma, no es un informe que usted ejecuta.</strong> El borrado ocurre en el camino por el que escribe cada servicio, en cada sitio donde un servicio escribe una línea.</li>
<li><strong class="text-stone-200">Cada comprobación guarda su propio trabajo.</strong> Qué se leyó, contra qué regla, qué se encontró y quién lo miró queda en el registro, y una comprobación que no se pudo hacer queda escrita exactamente así.</li>
</ul>

    <div class="text-center mb-16">
        <h2 id="un-rastro-que-nadie-tiene-tiempo-de-revisar" class="text-5xl md:text-6xl font-black !text-white text-white drop-shadow-md italic tracking-tighter uppercase mb-6">Un Rastro Que Nadie Tiene Tiempo De Revisar.</h2>
        <p class="text-xl text-stone-400 font-bold leading-relaxed">
            Los datos personales viajan con cada registro, y cada sistema que toca un registro deja un rastro detrás. Responder por ese rastro obliga a unir sistemas a mano.
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
        </div>
        <div>
            <h2 id="para-quien-es-esto" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Para Quién Es Esto</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Tres escritorios, y la misma pregunta debajo: ¿puede usted enseñar su trabajo?
            </p>
            <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">El delegado de protección de datos, y cumplimiento y riesgos.</strong> Lo que llega hoy es el nombre y la dirección de un cliente que hicieron falta una vez para entregar un paquete y llevan viajando con el registro desde entonces &mdash; a una exportación, a un informe para un socio, a un archivo de registro técnico que nadie lee hasta que algo ha salido mal. Lo que cambia es dónde se detiene el rastro. Los datos personales se quitan de los registros y los diagnósticos antes de que se escriban, en el camino por debajo de cada servicio y no en un informe que alguien se acuerde de ejecutar.</li>
                <li><strong class="text-stone-200">TI y seguridad de la información.</strong> Lo que llega hoy es una pregunta que solo se contesta contando: cuáles de sus servicios escriben registros de aplicación, y cuáles de esos pasan lo que escriben por algún borrado antes de guardarlo o enviarlo. Lo que cambia es que la respuesta es una propiedad de cómo está construido el software, descrita en frases corrientes que usted puede contrastar en una revisión de código, así que la conversación de seguridad es una descripción y no una negociación.</li>
                <li><strong class="text-stone-200">Auditoría interna, y quien responde por el informe.</strong> Lo que llega hoy es una petición de explicar por qué una cifra es la que es, meses después de que quien la montó se haya ido. Lo que cambia es que el registro guarda su propio trabajo, y que una comprobación que no se pudo hacer queda escrita como entrada propia en vez de pasar en silencio por un resultado limpio.</li>
            </ul>
        </div>
        <div>
            <h2 id="que-ocurre-en-su-lugar" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Qué Ocurre En Su Lugar</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Cada servicio escribe sus registros y sus diagnósticos a través de un paso de borrado compartido que quita del texto las direcciones de correo, los teléfonos, los números de tarjeta, los números de la seguridad social y las direcciones IP y de hardware antes de que el texto aterrice, junto con campos con nombre —contraseñas, tókenes, secretos, claves de licencia, direcciones de webhook— donde quiera que aparezcan en un contenido estructurado. La idea es que operar un sistema no cree en silencio una segunda copia de los datos personales que hay dentro: el sitio donde las filtraciones se descubren tarde, y el sitio donde a nadie se le ocurre mirar.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Cada comprobación deja constancia de su propio trabajo. Cuando un auditor pregunta por qué un hallazgo es el que es, o cuando un regulador pregunta quién vio la dirección de un cliente, la respuesta sale del registro y no de la memoria de quien hizo la hoja de cálculo.
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
                <li><strong class="text-stone-200">Dónde están de verdad los datos personales.</strong> Tome una muestra de los informes y las pantallas que ven sus socios y sus transportistas. Cuente cuántos llevan un nombre, un teléfono o una dirección. Casi ningún equipo ha contado esto nunca.</li>
                <li><strong class="text-stone-200">Qué parte de sus propios registros técnicos pasa por algún borrado.</strong> Cuente los servicios que escriben registros de aplicación, y luego cuente aquellos cuya salida pasa por algún paso de borrado antes de guardarse o de salir hacia un proveedor de registros. Ese es el punto de partida del que habla la mitad de privacidad de esta página, y es el que casi todos los equipos pueden responder en una tarde y preferirían no responder.</li>
             </ul>
             <p class="text-sm text-stone-500 font-bold uppercase tracking-widest text-xs mt-6 text-center">Traiga una muestra de las pantallas que ven sus socios y la lista de servicios que escriben registros.</p>
        </div>
    </div>

    <div class="border-l-2 border-stone-700 pl-5 mb-16">
        <p class="text-base text-stone-500 font-medium mb-4">
            Las exposiciones de arriba están dibujadas para mostrar la forma del trabajo. No son el relato de un trabajo con un cliente, y nada de esta página es un resultado medido.
        </p>
        <p class="text-base text-stone-500 font-medium">
            El software encuentra el registro, muestra la regla contra la que se leyó y entrega las dos cosas a la persona que responde. Si usted cumple una obligación es un juicio que se queda con su responsable de cumplimiento, su delegado de protección de datos y su auditor.
        </p>
    </div>
</div>
{{< /section-container >}}

{{< faq >}}
{
  "title": "Lo Que Un Responsable De Cumplimiento Pregunta Primero",
  "description": "Qué hace la parte de privacidad, qué guarda el registro y quién decide.",
  "questions": [
    {
      "question": "¿Qué impide que los datos personales lleguen a nuestros registros técnicos?",
      "answer": "Un único paso de borrado, situado en el camino de escritura por debajo de cada servicio y no en una herramienta que alguien ejecuta después. Todos los servicios escriben sus registros y diagnósticos a través de él, y quita del texto las direcciones de correo, los teléfonos, los números de tarjeta, los números de la seguridad social y las direcciones de red y de equipo antes de que la línea se guarde. También se van campos con nombre &mdash; contraseñas, tokens, secretos, claves de licencia, direcciones de webhook &mdash; allí donde aparezcan en una estructura de datos.<br><br>El orden interno es deliberado: los números de tarjeta se reconocen antes que los teléfonos, para que un patrón de teléfono no se trague una tarjeta."
    },
    {
      "question": "¿Qué pasa cuando una comprobación no se pudo hacer?",
      "answer": "Queda escrita como entrada propia: el cumplimiento no fue evaluado, con esas palabras, deliberadamente apartada de una evaluación que sí corrió y no encontró nada. Una cantidad que nadie midió se guarda como no medida y con un motivo, en vez de redondearse a cero.<br><br>Juntar las dos en una sola marca verde es cómo &ldquo;lo comprobamos y no había nada&rdquo; y &ldquo;no pudimos leer esto, así que nunca se comprobó&rdquo; acaban pareciendo iguales en un informe. La segunda es el hallazgo que una auditoría busca de verdad, y es el que suele desaparecer."
    },
    {
      "question": "Un regulador pregunta quién vio la dirección de un cliente. ¿Quién responde?",
      "answer": "Responde usted, desde el registro y no desde la memoria. Cada comprobación de esta página guarda su propio trabajo &mdash; qué se leyó, contra qué regla se leyó, qué se encontró, quién lo miró y cuándo &mdash; así que contestar a una pregunta del supervisor es recuperación y no un proyecto de reconstrucción entre cuatro sistemas.<br><br>La persona responsable sigue siendo la suya. Lo que cambia es cuánto tarda en poder contestar, y si la respuesta se apoya en documentos o en el recuerdo que alguien tiene de un martes."
    },
    {
      "question": "¿Quién decide si cumplimos una obligación?",
      "answer": "Su propia gente. El cumplimiento es un juicio, y se queda con quien lo tiene. Lo que hace el software es encontrar el registro, enseñar la regla contra la que se leyó y entregar los dos a la persona responsable &mdash; su responsable de cumplimiento, su delegado de protección de datos, su auditor. Si la obligación se cumple lo deciden ellos."
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
