---
# WHERE THE URGENCY SENTENCES COME FROM. This page used to say the phone path
# "does not watch for an urgent word and it does not notify anyone", and that the
# escalation existed only on the text side. Both were wrong, and the page had the
# shape right and the attribution backwards.
#
#   face/grpc/cmd/fetch_server.go:4936  the six keywords, on the VOICE utterance
#   face/grpc/cmd/fetch_server.go:4941  a match changes the tone instruction
#   face/grpc/cmd/fetch_server.go:4947  and sends the caller's own words to
#                                       escalationTarget(), when one is configured
#   face/grpc/cmd/whatsapp.go:117       the same six keywords on inbound text
#   face/grpc/cmd/whatsapp.go:86,106    and there, the two paths that page nobody
#                                       are logged as paging nobody
#
# The six words are named on the page rather than described as "a short list",
# because they are the whole of the mechanism and a reader can hold them.
title: "Hablar con los Conductores sin Pantalla"
description: "Quien sabe que una carga va tarde es justo el que no puede escribir. Preguntar y responder en voz alta deja el dato en el registro mientras el camión sigue rodando, y el cambio lo sigue haciendo la mesa de despacho."
layout: "use_case"
product: "Runink FACE"
scenario: "reactive logistics"
badge: "Despacho por Voz con IA"
badgeColor: "#f59e0b"
date: "2024-05-20T00:00:00Z"
author: "Runink"
---

{{< section-container class="py-8" >}}
<div class="max-w-5xl mx-auto px-4">

<p class="text-[10px] font-black uppercase tracking-[0.25em] text-stone-500 mt-4 mb-3">Runink FACE &middot; Logística reactiva, cara al conductor</p>
<p class="text-sm text-stone-500 font-medium mb-10 max-w-3xl">
este es un escenario de <strong class="text-stone-300">Runink FACE</strong>, su extremo de cara al conductor. Lo que sigue es lo que el producto está hecho para hacer y cómo correría contra los registros de su propia flota. Es una ilustración del mecanismo, no el relato de una implantación. <a href="/blog/whitepapers/runink-face/" class="underline decoration-stone-700 hover:text-stone-300">Qué es FACE</a>.
</p>

<h2 id="en-resumen" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6 mt-8">En Resumen</h2>
<ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6 mb-12">
<li><strong class="text-stone-200">El conductor pregunta en voz alta y oye la respuesta.</strong> Dónde está la próxima parada, qué pidió el cliente, por qué puerta entrar. Ninguna pantalla que leer y ningún motivo para echarse a un lado. Cada respuesta de la conversación se sintetiza dentro del propio proceso de FACE, con una voz embebida en el binario, y el habla que entra va al servidor de modelos que usted ya corre &mdash; el único extremo de inferencia al que apunta FACE, con un modelo capaz de audio &mdash; y no a una API de voz que opere otro. Dos matices, dichos y no enterrados: ese extremo es uno que usted configura, no una negativa a llamar fuera escrita en el código, y el aviso de grabación y el saludo que abren la llamada se pronuncian con la voz del propio proveedor de telefonía, porque se leen de las instrucciones de arranque de la llamada antes de que el canal hacia sus máquinas esté abierto.</li>
<li><strong class="text-stone-200">Es una llamada de teléfono, así que va por la red telefónica.</strong> Conviene decirlo claro en vez de enterrarlo. El tramo entre la cabina y el edificio lo lleva un proveedor de telefonía, igual que cualquier otra llamada que hagan sus conductores. Lo que ese proveedor nunca recibe es el texto: la transcripción, y el razonamiento que produce la respuesta, ocurren en sus máquinas, y la respuesta hablada también se codifica ahí. Sí transporta ese audio, como no puede ser de otro modo, y su propia voz lee el aviso de grabación y el saludo antes de que el canal hacia sus máquinas se abra.</li>
<li><strong class="text-stone-200">Lo que la llamada produce es una transcripción, no una entrada en el tablero.</strong> Las dos partes de la conversación se escriben en el registro de la llamada, hablante por hablante, así que la hora perdida en la puerta queda registrada en el momento en que se dice. Lo que un turno de voz no puede hacer es escribir en su sistema de despacho o de transporte: no hay ninguna vía de acción desde la llamada hasta sus registros. Una palabra urgente en la llamada sí levanta algo. En el teléfono se vigilan las mismas seis palabras que del lado del texto — <em>urgent</em>, <em>asap</em>, <em>emergency</em>, <em>broken</em>, <em>failing</em>, <em>late</em> — y una coincidencia cambia cómo responde el agente y envía la frase del propio interlocutor al número de responsable que usted haya configurado. En el teléfono, sigue siendo alguien con nombre en la mesa, leyendo el registro, quien lo convierte en un cambio.</li>
</ul>

    <div class="text-center mb-16">
        <h2 id="las-manos-en-el-volante" class="text-5xl md:text-6xl font-black !text-white text-white drop-shadow-md italic tracking-tighter uppercase mb-6">Las Manos En El Volante.</h2>
        <p class="text-xl text-stone-400 font-bold leading-relaxed">
            Un conductor que tiene que leer una pantalla para responder a una pregunta o detiene el camión o la lee en marcha. Lo primero le cuesta la hora. Lo segundo le cuesta mucho más, un día.
        </p>
    </div>

    <div class="flex flex-col gap-12 mb-20">
        <div>
            <h2 id="donde-se-tuerce" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Dónde Se Tuerce</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Una carga va tarde. El conductor lo sabe una hora antes que nadie, y la oficina se entera la última. Para contarlo, el conductor tiene que pararse y escribir, o escribir en marcha. La mayoría de los días simplemente espera a la siguiente parada.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Al revés funciona igual. La mesa tiene un cambio y tiene que ir llamando para colocarlo, camión por camión, esperando que cada uno pueda coger el teléfono. La mitad de las llamadas van al buzón y se vuelven a hacer veinte minutos después.
            </p>
            <p class="text-lg text-stone-400 font-medium font-semibold text-signal tracking-wide font-bold text-sm">
                Quien se entera primero es el que no puede escribir.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                Así que el día se escribe al final del día, de memoria, si llega a escribirse. La rueda que necesitaba aire, la hora perdida en una puerta, la entrega que fue rechazada: después de ocho horas el detalle es flojo, y la hora de la puerta es justo la que nunca se factura.
            </p>
        </div>
        <div>
            <h2 id="que-ocurre-en-su-lugar" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Qué Ocurre En Su Lugar</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                El conductor habla y FACE responde. Dónde está mi próxima parada. Qué puerta. Se pregunta en voz alta y vuelve en voz alta, así que los ojos se quedan en la carretera y las manos donde estaban. La llamada en sí es una llamada de teléfono corriente y viaja sobre un proveedor de telefonía para llegar; el canal de audio que entra en el edificio está autenticado, y todo lo que ocurre después de que llega ocurre en sus máquinas. El habla la convierte en texto el servidor de modelos que usted corre &mdash; el mismo y único extremo de inferencia configurable por el que razona el resto de FACE, con un modelo capaz de audio, y no una API de voz con su propio contrato &mdash; y cada respuesta de la conversación la pronuncia un sintetizador que corre en el mismo proceso que el resto de FACE, con una voz embebida en el binario. Ninguna transcripción acaba en la cuenta de otro. Dos matices van en la misma frase y no en una nota al pie. El aviso de grabación y el saludo que abren la llamada se pronuncian con la voz del propio proveedor, porque se leen de las instrucciones de arranque de la llamada antes de que el canal hacia su edificio exista. Y el extremo de transcripción es uno que usted configura, así que a dónde apunta es algo que se comprueba en una revisión y no algo que garantice un test.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Lo que la llamada deja detrás es la conversación misma, escrita mientras ocurre: cada turno, quién lo dijo, contra la llamada a la que pertenece. La hora de la puerta queda en el registro en la puerta, y no reconstruida a las seis de la tarde. Se vigilan seis palabras en los dos canales — <em>urgent</em>, <em>asap</em>, <em>emergency</em>, <em>broken</em>, <em>failing</em>, <em>late</em>. En el teléfono, una coincidencia cambia cómo responde el agente y envía la frase del propio interlocutor al número de responsable que usted haya configurado. En un WhatsApp o un SMS entrante la misma coincidencia escala igual, y ahí un mensaje que coincidió pero no llegó a nadie queda escrito en el registro diciendo eso, en lugar de pasar por atendido. La llamada pone el hecho en el registro a los pocos minutos de ocurrir; alguien tiene que estar leyendo el registro.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Aquí está la raya, y importa más que la lista de funciones. Un turno de voz no escribe en sus sistemas. No crea el registro de retraso, no actualiza la entrega y no mueve la parada: no hay ninguna vía desde la llamada hasta su sistema de transporte, y un producto que le dijera lo contrario estaría describiendo una integración que no ha construido. Lo que la llamada hace es sacar el dato de la cabina y ponerlo en el registro mientras todavía es exacto. Una persona en la mesa lo lee y hace el cambio.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                Una negativa más, porque es del tipo que suele esconderse. En otras partes de FACE se puede adjuntar una nota de voz a un hilo, y ese adjunto no se transcribe. En vez de dejar que el modelo improvise alrededor, se le dice al modelo sin rodeos que ha llegado un adjunto de audio, que su contenido es desconocido y que no debe suponer qué se dijo; y se le indica que le diga a usted que el audio no se procesó. Un sistema que no puede oír algo y lo dice vale más que uno que rellena el hueco.
            </p>
        </div>
        <div>
            <h2 id="quien-se-encarga-de-esto" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Quién Se Encarga De Esto</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Tres mesas, y lo que cada una tiene hoy encima.
            </p>
            <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">La mesa de expediciones.</strong> Hoy un cambio significa llamar a un camión detrás de otro esperando que cada uno pueda descolgar, y la mitad de las llamadas van al buzón y se repiten veinte minutos después. Lo que cambia es que un conductor puede preguntar y recibir respuesta en voz alta, y la llamada se escribe sola. La mesa sigue haciendo el cambio; deja de ser el único camino por el que puede viajar un dato.</li>
                <li><strong class="text-stone-200">El jefe de delegación.</strong> Hoy la jornada se redacta al final, de memoria, si es que se redacta, y la hora perdida en una puerta es la que nunca se factura. Lo que cambia es que los dos lados de la conversación van al registro de llamadas según ocurren, así que la hora en la puerta queda registrada en la puerta.</li>
                <li><strong class="text-stone-200">TI y seguridad de la información.</strong> Hoy un producto de voz significa preguntar en qué cuenta ajena acaba la transcripción. Lo que cambia es que el habla la convierte en texto el servidor de modelos que usted ya ejecuta, y cada respuesta conversacional la pronuncia un sintetizador dentro del propio proceso de FACE, con una voz incrustada en el binario. El tramo telefónico lo lleva un operador, como en cualquier llamada, y el aviso de grabación y el saludo se leen con la voz de ese operador antes de que esté abierto el canal hacia sus máquinas.</li>
            </ul>
        </div>
        <div class="bg-sheet p-8 rounded-lg border border-stone-800/80 shadow-2xl">
             <h3 id="como-sabria-que-ha-funcionado" class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-signal-fill to-signal-fill-hover mb-4 tracking-tighter uppercase italic drop-shadow-lg">Cómo Sabría Que Ha Funcionado</h3>
             <p class="text-lg text-stone-400 font-medium mb-6">
                Todas las cifras de abajo son suyas, no nuestras. Anote dónde está hoy, porque el punto de partida se pierde para siempre en cuanto algo cambia.
             </p>
             <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">Tiempo que los camiones pasan parados sin entregar.</strong> Sus vehículos ya mandan dónde están y cuándo se apaga el motor. Tome una semana de eso, quite las paradas que cuadran con una entrega y mire lo que queda.</li>
                <li><strong class="text-stone-200">Minutos desde que pasa un problema hasta que la mesa lo sabe.</strong> Tome una muestra de un mes de rutas retrasadas y entregas rechazadas. Cuándo ocurrió, y cuándo llegó a la oficina el primer mensaje sobre ello.</li>
                <li><strong class="text-stone-200">Tiempo de espera en puertas y en centros, y cuánto de eso factura.</strong> De sus propios registros de trabajo y de sus facturas. En la mayoría de las flotas las horas son reales y solo algunas están escritas.</li>
                <li><strong class="text-stone-200">Cuánto del registro del día se escribe en carretera.</strong> Cuente las notas y avisos levantados durante el turno frente a los levantados después de acabarlo. Este es el que sostiene todo lo demás.</li>
             </ul>
             <p class="text-sm text-stone-500 font-bold uppercase tracking-widest text-xs mt-6 text-center">Traiga una base y una semana de datos de seguimiento de vehículos.</p>
        </div>
    </div>

{{< faq >}}
{
  "title": "Preguntas De Un Jefe De Flota",
  "description": "Lo que se pregunta antes de hablar de un contrato.",
  "questions": [
    {
      "question": "¿Qué tiene que hacer el conductor?",
      "answer": "Hacer una llamada de teléfono corriente y preguntar en voz alta. Dónde está la próxima parada, qué puerta, qué pidió el cliente. La respuesta vuelve en voz alta, así que no hay pantalla que leer ni motivo para parar."
    },
    {
      "question": "¿Quién lleva el audio y quién ve el texto?",
      "answer": "El tramo entre la cabina y el edificio lo lleva un operador de telefonía, igual que cualquier otra llamada que hagan sus conductores, y transporta ese audio porque no puede ser de otro modo. El texto es otra cosa: la transcripción y el razonamiento que produce la respuesta ocurren en sus máquinas, en el servidor de modelos que ya ejecuta, y la respuesta hablada se codifica también allí."
    },
    {
      "question": "¿Qué pasa cuando un conductor dice algo urgente?",
      "answer": "Se vigilan seis palabras, en el teléfono y en los mensajes entrantes de WhatsApp o SMS por igual: <em>urgent</em>, <em>asap</em>, <em>emergency</em>, <em>broken</em>, <em>failing</em> y <em>late</em>. Una coincidencia cambia el tono con el que responde el agente y envía la frase del propio interlocutor al número de responsable que usted configuró. En el lado de texto, un mensaje que coincidió y no llegó a nadie se escribe en el registro diciéndolo, en vez de pasar por atendido."
    },
    {
      "question": "¿Qué deja la llamada?",
      "answer": "La conversación misma, escrita según ocurre: cada turno, quién lo dijo y la llamada a la que pertenece. La hora en la puerta queda registrada en la puerta y no reconstruida a las seis. Alguien con nombre en la mesa la lee y hace el cambio, que es lo que mantiene una frase dicha y una entrega modificada como dos hechos separados."
    },
    {
      "question": "¿Qué voz oye primero el conductor?",
      "answer": "La del operador de telefonía. El aviso de grabación y el saludo que abren la llamada se leen de las instrucciones de establecimiento, antes de que esté abierto el canal hacia su edificio. Toda respuesta conversacional posterior se pronuncia con una voz incrustada en el binario de FACE, en el mismo proceso que el resto."
    },
    {
      "question": "¿Qué deberíamos traer a una primera conversación?",
      "answer": "Una delegación y una semana de datos de seguimiento de vehículos. Con ellos van dos cifras suyas: los minutos entre que pasa un problema y la oficina se entera, muestreados sobre un mes de rutas con retraso, y cuánto del tiempo de espera en puertas factura hoy."
    }
  ]
}
{{< /faq >}}

    <div class="text-center">
        <a href="{{< contacturl >}}" class="inline-flex items-center justify-center px-10 py-5 text-xs font-black uppercase tracking-widest !text-on-fill text-on-fill drop-shadow-md transition-all duration-300 bg-gradient-to-r from-signal-fill to-signal-fill-hover rounded-xl border border-signal/30 hover:shadow-2xl hover:-translate-y-1">
            Reserve una consulta
        </a>
    </div>
</div>
{{< /section-container >}}
