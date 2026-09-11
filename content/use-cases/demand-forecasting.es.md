---
title: "Cuando la Demanda Gira Antes Que el Plan"
description: "Una referencia empieza a moverse semanas antes que el punto de pedido. Cuando el plan se pone al día la cobertura ya se ha ido, y la diferencia se paga en flete aéreo. Esto va de leer el giro mientras todavía es un problema de previsión."
layout: "use_case"
product: "Runink FACE"
badge: "Señal de Demanda"
date: "2024-05-20T00:00:00Z"
author: "Runink"
---

{{< section-container class="py-8" >}}
<div class="max-w-5xl mx-auto px-4">

<h2 id="en-resumen" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6 mt-8">En Resumen</h2>
<ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6 mb-8">
<li><strong class="text-stone-200">La estación y la tendencia se separan.</strong> Su propio histórico se descompone en la tendencia de fondo, la forma estacional que se repite y lo que queda. Lo que queda es donde un giro aparece primero.</li>
<li><strong class="text-stone-200">La previsión dice qué método la produjo, y por qué ese.</strong> Se prueban modelos que compiten entre sí contra periodos que su histórico ya contiene, y el que predijo mejor esos periodos es el que se usa. La respuesta lleva el nombre del método que ganó.</li>
<li><strong class="text-stone-200">Una serie que no puede ajustar se rechaza, no se ajusta de todas formas.</strong> Si hay demasiados pocos periodos, o si ningún modelo se sostiene, la respuesta lo dice. No vuelve como una línea de aspecto seguro sin nada debajo.</li>
</ul>

<p class="mb-12">
    <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-stone-600 text-stone-400 text-[10px] font-black uppercase tracking-[0.25em]">
        <span class="inline-block w-2 h-2 rounded-full border border-stone-400"></span>Hipotético
    </span>
    <span class="block mt-3 text-sm text-stone-500 font-medium">
        Esta página describe un mecanismo y la forma de una semana de trabajo, no un suceso que ocurrió. Es una ilustración, y ninguna parte de ella se ha ejecutado contra los datos de un cliente. Nada de lo que hay aquí está medido, y no hay cifras de lo que devuelve.
    </span>
</p>

    <div class="text-center mb-16">
        <h2 id="la-senal-giro-antes-que-el-plan" class="text-5xl md:text-6xl font-black !text-white text-white drop-shadow-md italic tracking-tighter uppercase mb-6">La Señal Giró Antes Que El Plan.</h2>
        <p class="text-xl text-stone-400 font-bold leading-relaxed">
            Una referencia empieza a moverse mucho antes de que se mueva el punto de pedido. El hueco entre esas dos fechas es todo el problema, y normalmente ya está decidido cuando alguien se entera.
        </p>
    </div>

    <div class="flex flex-col gap-12 mb-20">
        <div>
            <h2 id="donde-se-tuerce" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Dónde Se Tuerce</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                El plan de demanda se reconstruye por ciclos. Alguien exporta el histórico de ventas, le aplica los supuestos del ciclo anterior, discute las excepciones en una reunión y vuelve a cargar el resultado. Es un trabajo cuidadoso y es un trabajo honrado, y describe un mes que ya ha terminado.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Mientras tanto, una referencia gira. No de forma dramática — un pico estacional que llega antes, una promoción que se mantuvo después de que la promoción acabara, una región que bajó un escalón sin ruido y se quedó ahí. Ninguna de esas cosas cruza un umbral, porque el nivel sigue dentro de la banda. Solo se ven cuando se separa la estación de la tendencia, y nadie tiene la tarde libre para hacer eso referencia por referencia.
            </p>
            <p class="text-lg text-stone-400 font-medium font-semibold text-signal tracking-wide font-bold text-sm">
                La previsión ya estaba equivocada semanas antes de que se acabara el stock.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Hay una versión peor. Un planificador al que ya le ha explotado una vez deja de fiarse del número y lleva stock de sobra en todas partes, lo cual es caro e invisible. Un planificador al que todavía no le ha explotado se fía del todo, y se entera de golpe. A ninguno de los dos le dieron nada que dijera cuánto se podía fiar de la previsión, así que los dos estaban adivinando sobre una adivinanza.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                Este es el problema del planificador de demanda y del responsable de S&amp;OP, y llega al planificador de suministro como la emergencia de otra persona.
            </p>
        </div>
        <div>
            <h2 id="que-ocurre-en-su-lugar" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Qué Ocurre En Su Lugar</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Cada serie se desarma antes de proyectarla. La tendencia que hay debajo, la forma estacional que se repite y el residuo — lo que hizo la serie que ninguna de esas dos cosas explica. Un giro se ve primero en el residuo, y por eso el residuo se informa en vez de tirarse.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                La serie también se comprueba, para empezar, para ver si es lo bastante estable como para modelarla: la prueba se nombra y el estadístico se muestra al lado del umbral contra el que se comparó. Si va a la deriva, se diferencia antes de ajustar nada, y se dice que hubo que hacerlo. No se le pide que acepte la proyección por fe; se le muestra el cálculo que llevó a proyectarla así en primer lugar.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Después se prueba más de un método. Una descomposición estacional y un modelo autorregresivo clásico producen cada uno una previsión, y los dos se puntúan retrasando el reloj y pidiéndoles que predigan periodos que su propio histórico ya contiene. El que predijo mejor esos periodos es el que usted recibe, y llega etiquetado con cuál era y con el hecho de que se eligió así. Cuando ninguno se sostiene, se usa un método de reserva sencillo y la respuesta dice que es un método de reserva.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Una serie con demasiado poco histórico se rechaza. Vuelve diciendo que no hay periodos suficientes para modelarla, que es una respuesta más útil que una línea trazada por cuatro puntos.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Esto es la señal, no la respuesta. Qué pedir, cuánta cobertura mantener y qué proveedor puede todavía llegar a la fecha es el trabajo siguiente, y está descrito en <a href="/es/use-cases/fulfillment-optimization/">cobertura de stock y planificación con proveedores</a>. La previsión dice que la referencia ha girado y con cuánta confianza; el abastecimiento decide qué hacer al respecto. Mantenerlos separados es deliberado, porque las dos cosas las discute gente distinta.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                Lo que llega a una persona es un solo elemento: esta referencia, el giro, el método que hay detrás, los periodos sobre los que se probó y un cambio redactado para el plan. Una persona con nombre lo aprueba, lo edita o lo rechaza, y esa decisión queda anotada. Aprobar es lo que lo envía — y donde un paso que hay detrás no tiene nada implementado todavía, siendo una escritura en su sistema de planificación el ejemplo honrado, la respuesta nombra ese paso como no ejecutado en vez de informar del cambio como hecho. La decisión y la ejecución se anotan como dos hechos distintos, porque lo son. Corre en máquinas suyas, y el histórico no sale nunca de ellas.
            </p>
        </div>
        <div class="bg-sheet p-8 rounded-2xl border border-stone-800/80 shadow-2xl">
             <h3 id="como-sabra-que-ha-funcionado" class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-signal-fill to-signal-fill-hover mb-4 tracking-tighter uppercase italic drop-shadow-lg">Cómo Sabrá Que Ha Funcionado</h3>
             <p class="text-lg text-stone-400 font-medium mb-6">
                Todas las cifras de abajo son suyas, no nuestras. No le ofrecemos las nuestras, porque no tenemos las suyas. Anote dónde está hoy, porque el punto de partida se pierde para siempre en cuanto las cosas mejoran.
             </p>
             <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">Error de previsión, por referencia, contra lo que se vendió de verdad.</strong> Sacado de su sistema de planificación. Tome un año completo, porque las referencias estacionales y las estables fallan de maneras distintas. La idea no es que el error baje. La idea es que se diga por referencia en vez de promediarse en un único número reconfortante.</li>
                <li><strong class="text-stone-200">Cuántos periodos pasan entre que una referencia gira y que el plan cambia.</strong> Elija un puñado de referencias que salieron mal el año pasado. Busque la semana en que la serie giró de verdad, y luego la semana en que se revisó el plan. Ese hueco es para lo que sirve esto.</li>
                <li><strong class="text-stone-200">Cuántas referencias se prevén a mano, y quién las prevé.</strong> Casi todos los equipos tienen un conjunto de referencias que una sola persona lleva en la cabeza. Cuéntelas. Ese es su riesgo de concentración, y normalmente es una novedad para alguien.</li>
                <li><strong class="text-stone-200">Qué referencias no pudo prever en absoluto.</strong> Referencias nuevas, históricos cortos, referencias sustituidas a mitad de año. Escriba la lista antes de empezar, porque un sistema que admite que no puede prever estas solo es una mejora si usted sabía cuáles eran.</li>
             </ul>
             <p class="text-sm text-stone-500 font-bold uppercase tracking-widest text-xs mt-6 text-center">Traiga un año de histórico semanal de una familia de productos, y su error de previsión actual por referencia.</p>
        </div>
    </div>

    <div class="text-center">
        <a href="/es/#contact" class="inline-flex items-center justify-center px-10 py-5 text-xs font-black uppercase tracking-widest !text-on-fill text-on-fill drop-shadow-md transition-all duration-300 bg-gradient-to-r from-signal-fill to-signal-fill-hover rounded-xl border border-signal/30 hover:shadow-2xl hover:-translate-y-1">
            Reserve una consulta
        </a>
    </div>
</div>
{{< /section-container >}}
