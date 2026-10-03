---
title: "Confianza y cumplimiento"
layout: "company"
description: "Cómo Runink deja cada decisión en manos de una persona, dónde se ejecutan los modelos, cómo se mantienen separados los datos, cómo se firman las versiones, cómo se alinean nuestros controles con SOC 2, ISO/IEC 27001, ISO 31000, ISO/IEC 42001 y PCI DSS v4.0, y cómo informar de un problema de seguridad."
eyebrow: "Confianza y cumplimiento"
hero_line: "Decide una persona. El registro dice quién."
hero_deck: "Qué puede hacer nuestro software por su cuenta, dónde se ejecuta y qué deja por escrito. Cada sección termina con enlaces a la documentación pública que lo demuestra, para que pueda comprobar cada línea en lugar de fiarse de nuestra palabra."
next:
  label: "Un paso siguiente"
  title: "Pídanos que le enseñemos cualquier línea de esta página."
  body: "Media hora con quien lleve la seguridad o el cumplimiento en su empresa. Elija una sección: abrimos el software en funcionamiento y el registro que lleva, no una diapositiva que hable de ello."
  cta: "Reserve una consulta"
  about: "Confianza y cumplimiento"
# TRANSLATION OF content/trust.md. Rule 12: this is a page, not a copy — when
# the English page changes, this one changes in the same commit or it comes down.
#
# The rules this page is held to are written out in full in the front matter of
# content/trust.md. Read them there before changing a word here. In short: every
# claim links to public evidence; no certification claim (the one required
# sentence, "Runink no está certificada en ninguna de estas normas; alinearse no
# es certificarse", is the only place the word may appear, and "conforme" /
# "cumple con" are not used to describe Runink); the two exceptions to "a person
# decides" stay named; nothing unreleased; no internals; no figures; no prices.
#
# Product names (FACE, CORE, PULSE, LUNA, Runink River) and standard names stay
# as they are written in English.
---

{{< section-container class="pt-4 pb-12" >}}
  <div class="max-w-4xl">
    <p class="text-xs font-black uppercase tracking-[0.2em] text-signal mb-4">En esta página</p>
    <ol class="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2 text-lg text-ink-2 list-decimal pl-6">
      <li><a class="text-ink hover:text-signal underline decoration-rule" href="#a-person-decides">Decide una persona</a></li>
      <li><a class="text-ink hover:text-signal underline decoration-rule" href="#guardrails">Salvaguardas en cada agente</a></li>
      <li><a class="text-ink hover:text-signal underline decoration-rule" href="#where-models-run">Dónde se ejecutan los modelos</a></li>
      <li><a class="text-ink hover:text-signal underline decoration-rule" href="#data-kept-apart">Sus datos, por separado</a></li>
      <li><a class="text-ink hover:text-signal underline decoration-rule" href="#not-known">Desconocido no es cero</a></li>
      <li><a class="text-ink hover:text-signal underline decoration-rule" href="#signed-releases">Versiones firmadas</a></li>
      <li><a class="text-ink hover:text-signal underline decoration-rule" href="#standards">Las normas con las que nos alineamos</a></li>
      <li><a class="text-ink hover:text-signal underline decoration-rule" href="#report-a-problem">Informar de un problema de seguridad</a></li>
    </ol>
  </div>
{{< /section-container >}}

{{< section-container class="py-16 bg-stone-900" id="a-person-decides" >}}
  <div class="max-w-4xl">
    <p class="text-xs font-black uppercase tracking-[0.2em] text-signal mb-4">1 · Decide una persona</p>
    <h2 class="text-3xl md:text-4xl font-bold text-ink mb-6">Los agentes redactan. Decide una persona con nombre.</h2>
    <div class="text-lg text-ink-2 leading-relaxed space-y-5">
      <p>Los agentes de Runink leen registros y redactan borradores: un expediente de siniestro, una corrección de código, una publicación, una respuesta. El borrador espera. Una persona con nombre lo aprueba, lo edita o lo rechaza, y el registro guarda quién fue y cuándo.</p>
      <p>En Runink CORE, esas decisiones se anotan en una cadena de auditoría. Cada entrada está enlazada con la anterior, así que una entrada modificada, eliminada o cambiada de orden se nota. Cualquier persona que haya iniciado sesión en la consola de CORE puede pulsar <em>Verify now</em> para que se compruebe toda la cadena. Leer las entradas en sí queda reservado a los administradores que usted designe.</p>
      <p>Hay dos cosas que actúan por su cuenta, y preferimos que lo lea aquí antes que descubrirlo después:</p>
      <ul class="list-disc pl-6 space-y-3">
        <li><strong class="text-ink">FACE cuida de su propio funcionamiento.</strong> Cuando una parte de FACE deja de responder, puede reiniciarla, aislar una dependencia que falla una y otra vez, revertir el cambio más reciente o añadir capacidad. Solo elige de esa lista fija. Nunca borra datos, nunca apaga una máquina y nunca desactiva un control de seguridad. Si tiene dudas, avisa a una persona en lugar de actuar. Un operador puede desactivar la parte automática.</li>
        <li><strong class="text-ink">El clasificador de incidencias de CORE etiqueta las incidencias nuevas.</strong> Solo elige entre las etiquetas que el repositorio permite, y solo cuando una comprobación independiente está de acuerdo. Una persona puede cambiarlas en cualquier momento, y decide quién se encarga de la incidencia.</li>
      </ul>
      <p>Todo lo demás espera a una persona.</p>
    </div>
    <div class="mt-10 border-t border-rule pt-6">
      <p class="text-xs font-black uppercase tracking-[0.2em] text-ink-2 mb-3">Lea las pruebas (en inglés)</p>
      <ul class="space-y-2 text-base">
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/face/docs/analysis/agents-and-oversight/">FACE: los agentes y su supervisión</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/core/docs/models/">CORE: qué puede hacer cada agente y qué decide una persona</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/core/docs/devex/cluster-gitops/">CORE: la cadena de auditoría y cómo se comprueba</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/face/docs/operations/configuration/">FACE: el ajuste que desactiva la autorreparación automática</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/core/docs/models/issue-triager/">CORE: la ficha de modelo del clasificador de incidencias</a></li>
      </ul>
    </div>
  </div>
{{< /section-container >}}

{{< section-container class="py-16" id="guardrails" >}}
  <div class="max-w-4xl">
    <p class="text-xs font-black uppercase tracking-[0.2em] text-signal mb-4">2 · Salvaguardas</p>
    <h2 class="text-3xl md:text-4xl font-bold text-ink mb-6">Cada agente trabaja dentro de reglas escritas.</h2>
    <div class="text-lg text-ink-2 leading-relaxed space-y-5">
      <p>Cada agente que llama a un modelo tiene delante un juez de políticas. El juez revisa una petición frente a reglas escritas antes de que el modelo la vea, y revisa lo que escribe el agente antes de que se envíe o se publique. Una petición que incumple una regla se rechaza, y el rechazo queda registrado.</p>
      <p>Las reglas de seguridad siguen el OWASP Top 10 for LLM Applications, la lista publicada de las formas más habituales de atacar una aplicación de IA. Cubren los intentos de saltarse las instrucciones del agente (la inyección de prompt), los intentos de sacar secretos u otra información sensible y las peticiones de llegar a sitios donde el agente no tiene nada que hacer.</p>
      <p>Los registros, las páginas web y los documentos que lee un agente se tratan como datos, nunca como instrucciones. Una línea de un registro de carga que dice «ignora tus reglas» se lee como parte de ese registro. Cuando un agente propone una acción, una segunda comprobación lee las pruebas que reunió la ejecución. Si no está de acuerdo, la acción se retiene. Si no puede decidir, lo dice en lugar de dejarla pasar.</p>
    </div>
    <div class="mt-10 border-t border-rule pt-6">
      <p class="text-xs font-black uppercase tracking-[0.2em] text-ink-2 mb-3">Lea las pruebas (en inglés)</p>
      <ul class="space-y-2 text-base">
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/face/docs/security/ai-safety/">FACE: seguridad de la IA, salvaguardas y datos no fiables</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/pulse/docs/models/">PULSE: salvaguardas antes del modelo, agente por agente</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/pulse/docs/concepts/judging-ladder/">PULSE: la segunda comprobación de las propuestas</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/core/docs/models/">CORE: las salvaguardas de cada agente, en su ficha de modelo</a></li>
      </ul>
    </div>
  </div>
{{< /section-container >}}

{{< section-container class="py-16 bg-stone-900" id="where-models-run" >}}
  <div class="max-w-4xl">
    <p class="text-xs font-black uppercase tracking-[0.2em] text-signal mb-4">3 · Dónde se ejecutan los modelos</p>
    <h2 class="text-3xl md:text-4xl font-bold text-ink mb-6">Modelos abiertos, con nombre, sin un proveedor de IA de por medio.</h2>
    <div class="text-lg text-ink-2 leading-relaxed space-y-5">
      <p>FACE, CORE y PULSE ejecutan sus modelos donde se ejecuta el producto. Si lo instala en un Runink Server en sus instalaciones o en su propia cuenta en la nube, los modelos también se ejecutan en su infraestructura. Si elige las máquinas compartidas de Runink, se ejecutan en las nuestras. En ambos casos no se llama a ningún servicio de IA de terceros: sus registros, los prompts construidos a partir de ellos y las respuestas no van a ningún proveedor de modelos.</p>
      <p>LUNA, nuestra aplicación de compañía personal, ejecuta sus modelos en servidores que opera Runink. Tampoco llama a ningún servicio de IA de terceros.</p>
      <p>Los modelos son abiertos, y los nombramos con su autor y su licencia:</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      <div class="border border-rule rounded-lg p-6">
        <p class="font-mono text-sm text-ink mb-2">Qwen3.6-35B-A3B</p>
        <p class="text-ink-2 text-base">El modelo general, que usan la mayoría de los agentes. Creado por Qwen, con licencia Apache-2.0.</p>
      </div>
      <div class="border border-rule rounded-lg p-6">
        <p class="font-mono text-sm text-ink mb-2">Qwen3-Coder-30B-A3B</p>
        <p class="text-ink-2 text-base">El modelo de código, para revisar y redactar código. Creado por Qwen, con licencia Apache-2.0.</p>
      </div>
      <div class="border border-rule rounded-lg p-6">
        <p class="font-mono text-sm text-ink mb-2">Qwen3-VL-8B-Instruct</p>
        <p class="text-ink-2 text-base">El modelo de visión, para páginas escaneadas y fotografías. Creado por Qwen, con licencia Apache-2.0.</p>
      </div>
    </div>
    <div class="text-lg text-ink-2 leading-relaxed space-y-5 mt-8">
      <p>Cada agente tiene una ficha de modelo pública: qué hace, qué lee, qué sigue decidiendo una persona, en qué modelo se ejecuta, dónde se ejecuta y dónde se detiene.</p>
    </div>
    <div class="mt-10 border-t border-rule pt-6">
      <p class="text-xs font-black uppercase tracking-[0.2em] text-ink-2 mb-3">Lea las pruebas (en inglés)</p>
      <ul class="space-y-2 text-base">
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/core/docs/models/">Fichas de modelo de CORE</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/pulse/docs/models/">Fichas de modelo de PULSE</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/luna/docs/models/">Fichas de modelo de LUNA</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/face/docs/security/sovereign-inference/">FACE: inferencia soberana</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/pulse/docs/concepts/sovereign-inference/">PULSE: inferencia soberana</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/luna/docs/guide/privacy/">LUNA: privacidad y datos</a></li>
      </ul>
    </div>
  </div>
{{< /section-container >}}

{{< section-container class="py-16" id="data-kept-apart" >}}
  <div class="max-w-4xl">
    <p class="text-xs font-black uppercase tracking-[0.2em] text-signal mb-4">4 · Sus datos, por separado</p>
    <h2 class="text-3xl md:text-4xl font-bold text-ink mb-6">¿El registro de otra persona? «No encontrado».</h2>
    <div class="text-lg text-ink-2 leading-relaxed space-y-5">
      <p>Los datos de cada persona, y los de cada cliente, se mantienen separados en el servidor. A qué datos puede llegar una petición depende de la identidad comprobada al iniciar sesión, no de lo que diga la propia petición.</p>
      <p>Pida un registro que pertenece a otra persona y la respuesta es «no encontrado», la misma que para un registro que no existe. La respuesta ni siquiera confirma que el registro esté ahí.</p>
      <p>FACE va un paso más allá: cada cliente tiene su propia instancia de FACE, de modo que los datos de un cliente nunca comparten instancia con los de otro.</p>
    </div>
    <div class="mt-10 border-t border-rule pt-6">
      <p class="text-xs font-black uppercase tracking-[0.2em] text-ink-2 mb-3">Lea las pruebas (en inglés)</p>
      <ul class="space-y-2 text-base">
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/face/docs/security/identity-access/">FACE: identidad, acceso y alcance</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/luna/docs/guide/privacy/">LUNA: quién puede leer sus datos</a></li>
      </ul>
    </div>
  </div>
{{< /section-container >}}

{{< section-container class="py-16 bg-stone-900" id="not-known" >}}
  <div class="max-w-4xl">
    <p class="text-xs font-black uppercase tracking-[0.2em] text-signal mb-4">5 · Desconocido no es cero</p>
    <h2 class="text-3xl md:text-4xl font-bold text-ink mb-6">Una cifra que falta se muestra como que falta.</h2>
    <div class="text-lg text-ink-2 leading-relaxed space-y-5">
      <p>Cuando nuestro software no ha podido leer una cifra, lo dice, con el motivo. No dibuja un cero y no adivina. Una comprobación que no pudo ejecutarse figura como «no comprobado», nunca como superada. Un campo que desconoce se queda vacío, no se rellena.</p>
      <p>Nos aplicamos la misma regla. Esta página no lleva estadísticas, y las fichas de modelo tampoco: ninguna muestra una puntuación de evaluación, porque no se ha publicado ninguna.</p>
    </div>
    <div class="mt-10 border-t border-rule pt-6">
      <p class="text-xs font-black uppercase tracking-[0.2em] text-ink-2 mb-3">Lea las pruebas (en inglés)</p>
      <ul class="space-y-2 text-base">
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/core/docs/dataex/models-inference/">CORE: el uso, mostrado como ausente y no como cero</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/face/docs/security/audit-lineage/">FACE: qué guarda el registro y qué deja vacío</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/luna/docs/guide/privacy/">LUNA: las marcas que verá cuando falta un valor</a></li>
      </ul>
    </div>
  </div>
{{< /section-container >}}

{{< section-container class="py-16" id="signed-releases" >}}
  <div class="max-w-4xl">
    <p class="text-xs font-black uppercase tracking-[0.2em] text-signal mb-4">6 · Versiones firmadas</p>
    <h2 class="text-3xl md:text-4xl font-bold text-ink mb-6">Una persona firma cada versión, lejos de la compilación.</h2>
    <div class="text-lg text-ink-2 leading-relaxed space-y-5">
      <p>Las versiones y los paquetes de Runink River se firman con una única clave de publicación. El responsable de versiones guarda la clave privada fuera de línea. Nunca está en la CI y nunca se guarda como secreto de un repositorio.</p>
      <p>Las máquinas de compilación solo producen archivos sin firmar y sus sumas de comprobación. El responsable los compara con una compilación propia y después firma. Antes de que se publique una versión, un paso automático comprueba la firma y las sumas de comprobación. La CI verifica; nunca firma.</p>
      <p>El <a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://github.com/org-runink/river/blob/main/KEYS">archivo KEYS</a> público es la referencia. Compruebe la clave por esta huella, nunca por su nombre:</p>
    </div>
    <p class="mt-6 font-mono text-base md:text-lg text-ink border border-rule rounded-lg px-5 py-4 select-all break-all">95C0 A7B9 7D54 7413 E426 60DD B06F E756 26F1 5BF3</p>
    <div class="mt-10 border-t border-rule pt-6">
      <p class="text-xs font-black uppercase tracking-[0.2em] text-ink-2 mb-3">Lea las pruebas (en inglés)</p>
      <ul class="space-y-2 text-base">
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/river/docs/security/release-signing/">River: la firma de versiones</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/river/docs/security/verify/">River: verifique una versión usted mismo</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://github.com/org-runink/river/blob/main/KEYS">El archivo KEYS</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="/.well-known/gpg-key.txt">La clave pública, servida desde runink.org</a></li>
      </ul>
    </div>
  </div>
{{< /section-container >}}

{{< section-container class="py-16 bg-stone-900" id="standards" >}}
  <div class="max-w-4xl">
    <p class="text-xs font-black uppercase tracking-[0.2em] text-signal mb-4">7 · Las normas con las que nos alineamos</p>
    <h2 class="text-3xl md:text-4xl font-bold text-ink mb-6">Nuestros propios controles, relacionados con cinco normas.</h2>
    <div class="text-lg text-ink-2 leading-relaxed space-y-5">
      <p>Llevamos un índice escrito de nuestros propios controles de seguridad: cómo se cifran los datos en tránsito y en reposo, cómo el inicio de sesión deniega por defecto, cómo se mantienen separados los datos de cada cliente, cómo se gestionan los secretos, entre otros. Cada control señala el código que lo lleva a cabo, y cada uno está relacionado con los apartados de estas normas que aborda:</p>
    </div>
    <ul class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6 text-lg text-ink">
      <li class="border border-rule rounded-lg px-5 py-3">SOC 2</li>
      <li class="border border-rule rounded-lg px-5 py-3">ISO/IEC 27001</li>
      <li class="border border-rule rounded-lg px-5 py-3">ISO 31000</li>
      <li class="border border-rule rounded-lg px-5 py-3">ISO/IEC 42001</li>
      <li class="border border-rule rounded-lg px-5 py-3">PCI DSS v4.0</li>
    </ul>
    <div class="text-lg text-ink-2 leading-relaxed space-y-5 mt-8">
      <p class="border-l-4 border-signal pl-5 text-ink"><strong>Runink no está certificada en ninguna de estas normas; alinearse no es certificarse.</strong></p>
      <p>Un agente de evidencias lee el índice y comprueba que el código que señala cada control sigue ahí. Registra evidencias, nunca un veredicto. Cualquier declaración formal respecto de una de estas normas vendría de un auditor independiente, no de nosotros ni de nuestro software.</p>
    </div>
    <div class="mt-10 border-t border-rule pt-6">
      <p class="text-xs font-black uppercase tracking-[0.2em] text-ink-2 mb-3">Lea las pruebas (en inglés)</p>
      <ul class="space-y-2 text-base">
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/core/docs/models/compliance-evidence/">CORE: el agente de evidencias y las cinco normas</a></li>
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/face/docs/security/compliance/">FACE: postura de cumplimiento</a></li>
      </ul>
    </div>
  </div>
{{< /section-container >}}

{{< section-container class="py-16" id="report-a-problem" >}}
  <div class="max-w-4xl">
    <p class="text-xs font-black uppercase tracking-[0.2em] text-signal mb-4">8 · Informar de un problema de seguridad</p>
    <h2 class="text-3xl md:text-4xl font-bold text-ink mb-6">¿Ha encontrado algo? Díganoslo en privado.</h2>
    <div class="text-lg text-ink-2 leading-relaxed space-y-5">
      <p>Por favor, no abra una incidencia pública por un problema de seguridad. Escriba a:</p>
    </div>
    <p class="mt-6 font-mono text-lg md:text-xl text-ink border border-rule rounded-lg px-5 py-4 select-all">security@runink.org</p>
    <div class="text-lg text-ink-2 leading-relaxed space-y-5 mt-6">
      <p>Puede <a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="mailto:security@runink.org">abrirla en su programa de correo</a>, o copiar la dirección de arriba. Para cifrar su informe, use la clave de publicación de la sección 6 y compruebe antes su huella. Díganos qué está afectado y en qué versión, qué podría hacer un atacante y cómo reproducirlo si puede. Para Runink River, también puede usar el botón de informe privado de la pestaña Security del repositorio.</p>
    </div>
    <div class="mt-10 border-t border-rule pt-6">
      <p class="text-xs font-black uppercase tracking-[0.2em] text-ink-2 mb-3">Lea las pruebas (en inglés)</p>
      <ul class="space-y-2 text-base">
        <li><a class="text-signal underline decoration-signal/40 hover:decoration-signal" href="https://docs.runink.org/river/docs/security/reporting/">River: cómo informar y qué ocurre después</a></li>
      </ul>
    </div>
  </div>
{{< /section-container >}}
