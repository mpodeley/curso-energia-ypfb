import{u as A,j as e,L as C,c as s,F as D,t as $,s as l,b as I,d as y,r as k}from"./index-DudSLzgd.js";import{h as P,E as T,S as E,Q as N}from"./Quiz-CKuzU5bj.js";import{R as M,L as R,P as U}from"./Recursos-DC92Ohkw.js";function F(r,a){let m=0,j=0,v=0,u=0;r.forEach((c,q)=>{const x=c.inventada===!0,d=a.has(q);x&&u++,x&&d&&m++,!x&&d&&j++,x&&!d&&v++});const p=m+j,h=p===0?0:m/p,i=u===0?0:m/u,t=h+i===0?0:2*h*i/(h+i);return{encontradas:m,falsasAlarmas:j,perdidas:v,totalInventadas:u,precision:h,recall:i,f1:t}}function Q(r){return r.totalInventadas===0?"No había nada que encontrar.":r.encontradas===r.totalInventadas&&r.falsasAlarmas===0?"Las encontraste todas y no marcaste ninguna afirmación sana. Eso es leer con criterio.":r.encontradas===0?"No marcaste ninguna de las invenciones. Fijate abajo qué las delataba: casi siempre es una cifra muy precisa sin fuente.":r.precision<.5?"Marcaste más afirmaciones sanas que invenciones. Desconfiar de todo cuesta tanto tiempo como no desconfiar de nada, y encima no deja lugar para la duda cuando hace falta.":r.encontradas===r.totalInventadas?"Encontraste todas las invenciones, pero te llevaste puestas algunas afirmaciones correctas.":"Encontraste algunas. Las que se te escaparon son las más peligrosas, porque son las que pasarían una revisión."}function W({sesion:r=7}){const{data:a,meta:m,loading:j,error:v}=P(),[u,p,h]=A("hallucination-hunt",{informe:"",marcados:{},corregidos:[]});if(j)return e.jsx(C,{what:"los informes"});if(v||!a||a.length===0)return e.jsx("div",{style:{color:s.status.err},children:"No se pudieron cargar los informes."});const i=a.find(n=>n.id===u.informe)??a[0],t=new Set(u.marcados[i.id]??[]),c=u.corregidos.includes(i.id),q=n=>{if(c)return;const o=new Set(t);o.has(n)?o.delete(n):o.add(n),p({marcados:{...u.marcados,[i.id]:[...o]}})},x=()=>p({corregidos:[...u.corregidos,i.id]}),d=F(i.segmentos,t),z=n=>{const o=i.segmentos[n],b=t.has(n);let f=s.border,g="transparent";return c?o.inventada&&b?(f=s.status.ok,g=s.status.ok+"12"):o.inventada&&!b?(f=s.status.err,g=s.status.err+"12"):!o.inventada&&b&&(f=s.status.warn,g=s.status.warn+"12"):b&&(f=s.accent.blue,g=s.accent.blue+"12"),{display:"block",width:"100%",textAlign:"left",font:"inherit",fontSize:"var(--pd-fs-sm)",color:s.textPrimary,lineHeight:1.6,padding:`${l.sm}px ${l.md}px`,marginBottom:l.sm,border:`1px solid ${f}`,borderLeftWidth:3,borderRadius:k.md,background:g,cursor:c?"default":"pointer"}},S=n=>{const o=i.segmentos[n];return c?o.inventada&&t.has(n)?"inventada — la encontraste":o.inventada?"inventada — se te pasó":t.has(n)?"era correcta — falsa alarma":"correcta":t.has(n)?"marcada":""},w=n=>{const o=i.segmentos[n];return c?o.inventada&&t.has(n)?s.status.ok:o.inventada?s.status.err:t.has(n)?s.status.warn:s.textDim:s.accent.blue};return e.jsxs(T,{titulo:"Cacería de alucinaciones",sesion:r,intro:"Tres textos generados por un modelo. Algunas afirmaciones son sólidas y otras están inventadas con total seguridad. Marcá las que no usarías sin verificar antes — y ojo, marcar todo no cuenta como acertar.",onReset:h,done:c,children:[e.jsx(D,{label:"Informe",children:e.jsx($,{value:i.id,options:a.map(n=>({value:n.id,label:n.label})),onChange:n=>p({informe:n})})}),e.jsx("p",{style:{fontSize:"var(--pd-fs-sm)",color:s.textSecondary,margin:`0 0 ${l.lg}px`,maxWidth:"70ch"},children:i.contexto}),i.segmentos.map((n,o)=>e.jsxs("div",{children:[e.jsx("button",{type:"button",style:z(o),onClick:()=>q(o),disabled:c,children:n.texto}),(c||t.has(o))&&e.jsx("div",{style:{fontFamily:"var(--pd-font-mono)",fontSize:11,textTransform:"uppercase",letterSpacing:.5,color:w(o),margin:`-4px 0 ${l.sm}px ${l.md}px`},children:S(o)}),c&&e.jsxs("div",{style:{margin:`0 0 ${l.lg}px ${l.md}px`,maxWidth:"70ch"},children:[e.jsx("p",{style:{fontSize:13,color:s.textSecondary,margin:0},children:n.porque}),n.comoVerificar&&e.jsxs("p",{style:{fontSize:13,color:s.textPrimary,margin:`${l.xs}px 0 0`},children:[e.jsx("strong",{children:"Cómo verificarlo:"})," ",n.comoVerificar]})]})]},o)),c?e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{margin:`${l.lg}px 0`},children:e.jsxs(I,{children:[e.jsx(y,{label:"Encontradas",value:`${d.encontradas} / ${d.totalInventadas}`,accent:d.encontradas===d.totalInventadas?s.status.ok:s.status.err}),e.jsx(y,{label:"Falsas alarmas",value:d.falsasAlarmas,accent:d.falsasAlarmas===0?s.status.ok:s.status.warn,hint:"Afirmaciones correctas que marcaste como sospechosas"}),e.jsx(y,{label:"Precisión",value:`${Math.round(d.precision*100)}%`,hint:"De todo lo que marcaste, cuánto estaba realmente mal"})]})}),e.jsx("p",{style:{fontSize:"var(--pd-fs-sm)",color:s.textPrimary,maxWidth:"70ch"},children:Q(d)}),i.note&&e.jsx(E,{titulo:"El patrón detrás de este informe",children:i.note})]}):e.jsxs("div",{style:{display:"flex",gap:l.md,alignItems:"center",flexWrap:"wrap",marginTop:l.lg},children:[e.jsx("button",{type:"button",className:"btn btn--primary",disabled:t.size===0,onClick:x,children:"Corregir"}),e.jsx("span",{style:{fontSize:13,color:s.textMuted},children:t.size===0?"Marcá al menos una afirmación.":`${t.size} marcada${t.size>1?"s":""} de ${i.segmentos.length}.`})]}),e.jsx(E,{titulo:"El protocolo, en cuatro preguntas",children:"Es lo que te llevás de esta sesión, más que el puntaje. Ante cualquier afirmación de un modelo, preguntate: ¿esto se puede derivar de lo que le di, o lo completó por su cuenta? ¿Qué fuente primaria lo confirmaría, y cuánto tardo en abrirla? ¿Qué pasa si es falso y nadie lo nota? Y la más útil: ¿por qué sonaba creíble? Las invenciones peligrosas no son las absurdas, son las que tienen la forma exacta de un dato verdadero."}),e.jsx(E,{titulo:"Por qué marcar todo tampoco sirve",children:"Si desconfiás de cada frase, la herramienta deja de ahorrarte tiempo y volvés a escribir todo a mano. El objetivo no es la desconfianza, es la puntería: saber qué clase de afirmación exige fuente. Las cifras que salen de datos que vos entregaste casi siempre están bien; las causas, las citas, la normativa y las estimaciones de beneficio casi nunca."}),m.source&&e.jsxs("div",{style:{marginTop:l.md,fontFamily:"var(--pd-font-mono)",fontSize:"var(--pd-fs-cap)",color:s.textDim},children:["fuente: ",m.source]})]})}function L(r){const a={a:"a",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(a.h2,{children:"Antes de la sesión"}),`
`,e.jsx(a.p,{children:e.jsx(a.em,{children:"Tiempo estimado: 30–40 minutos."})}),`
`,e.jsxs(a.ol,{children:[`
`,e.jsxs(a.li,{children:[e.jsx(a.strong,{children:"Tarea de la sesión 6:"}),` la afirmación que marcaste en un texto generado. Traela sin veredicto:
la vamos a evaluar entre todos.`]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.strong,{children:"Ejercicio de esta página (20 min):"}),` la cacería, los tres informes. Hacelos antes de leer el
resto de la página, porque el ejercicio pierde gracia si sabés qué buscar.`]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.strong,{children:"Lectura (10 min):"}),` la sección de las cuatro propiedades y la de política de uso, para llegar
con vocabulario y con opinión formada.`]}),`
`]}),`
`,e.jsx(M,{sesion:7}),`
`,e.jsx(a.h2,{children:"Todo el curso venía sembrando esto"}),`
`,e.jsx(a.p,{children:`Alucinaciones en la sesión 2, confidencialidad en la 3, verificación en la 4, agentes que actúan en la
6. Esta sesión los junta y los convierte en reglas que se puedan aplicar un martes a la mañana.`}),`
`,e.jsx(a.h2,{children:"Cazar antes de teorizar"}),`
`,e.jsx(a.p,{children:`La forma más rápida de entender cómo se equivoca un modelo es leer con atención algo que escribió. Los
tres informes del ejercicio tienen errores plantados, y todos son de los que aparecen de verdad: cifras
inventadas con demasiada precisión, causas que suenan razonables y no salen de ningún dato, citas
completas de artículos que no existen, y normativa recitada de memoria.`}),`
`,e.jsx(a.p,{children:`El puntaje mide dos cosas a propósito: cuántas invenciones encontraste y cuántas afirmaciones sanas
marcaste de más. Desconfiar de todo no es prudencia, es otra forma de no leer.`}),`
`,e.jsx(W,{sesion:7}),`
`,e.jsx(a.h2,{children:"Cuatro propiedades, y cómo falla cada una"}),`
`,e.jsx(a.p,{children:`En la sesión 1 anticipamos cuatro maneras de fallar. Acá tienen nombre, y el nombre no es una
etiqueta: es la propiedad del modelo de la que sale cada una. No son cuatro defectos, son cuatro
capacidades miradas desde el borde, donde se terminan. Por eso el arreglo cambia según cuál te
tocó, y por eso conviene diagnosticar antes de reescribir el prompt por cuarta vez.`}),`
`,e.jsxs(a.table,{children:[e.jsx(a.thead,{children:e.jsxs(a.tr,{children:[e.jsx(a.th,{children:"La propiedad"}),e.jsx(a.th,{children:"Cómo se ve la falla"}),e.jsx(a.th,{children:"El arreglo"})]})}),e.jsxs(a.tbody,{children:[e.jsxs(a.tr,{children:[e.jsxs(a.td,{children:[e.jsx(a.strong,{children:"Predice el próximo token"})," (sesión 2)"]}),e.jsx(a.td,{children:"Escribe algo que no existe con el mismo tono con el que escribe lo que sí. La forma del dato queda impecable."}),e.jsx(a.td,{children:"No lo uses de fuente. El dato lo traés vos, él lo redacta."})]}),e.jsxs(a.tr,{children:[e.jsxs(a.td,{children:[e.jsx(a.strong,{children:"Conocimiento"})," (sesión 5)"]}),e.jsx(a.td,{children:"Seguro y equivocado sobre un hecho puntual: lo reciente, lo local, lo interno, lo tuyo."}),e.jsx(a.td,{children:"Adjuntale el documento. Con el texto delante deja de recordar y pasa a leer."})]}),e.jsxs(a.tr,{children:[e.jsxs(a.td,{children:[e.jsx(a.strong,{children:"Memoria de trabajo"})," (sesiones 2 y 6)"]}),e.jsx(a.td,{children:"Se olvida de una instrucción de hace veinte mensajes, se contradice, pierde de vista el objetivo."}),e.jsx(a.td,{children:"Conversaciones cortas, una tarea por vez, y repetile lo que no puede perder."})]}),e.jsxs(a.tr,{children:[e.jsxs(a.td,{children:[e.jsx(a.strong,{children:"Control de la salida"})," (sesión 3)"]}),e.jsx(a.td,{children:"Hace algo parecido a lo que pediste y no lo que pediste: cambia el formato, se pasa de largo, vuelve al tono de siempre."}),e.jsx(a.td,{children:"Describí mejor el resultado, o mostrale un ejemplo."})]})]})]}),`
`,e.jsx(a.p,{children:`La tabla es el índice del curso leído al revés. Cada fila se trabajó donde correspondía, con su
ejercicio al lado. Lo que faltaba era verlas juntas y poder preguntarse, frente a un error
concreto, cuál de las cuatro se activó.`}),`
`,e.jsx(a.p,{children:`En el trabajo real casi nunca viene una sola. Una consulta larga sobre una norma que no le
adjuntaste falla por conocimiento, porque nunca leyó esa norma, y también por memoria, porque la
instrucción de citar textual quedó doce mensajes atrás. El resultado se lee como una única
respuesta mala. Ahí está el valor de separar las causas: si le atribuís al prompt lo que era falta
de documento, vas a reescribirlo cuatro veces y el modelo va a seguir inventando con prolijidad.`}),`
`,e.jsx(a.p,{children:`El diagnóstico te dice qué arreglo aplicar. No te dice cuánto conviene verificar antes de mandar el
texto, porque eso ya no depende del modelo: depende de dónde termina lo que escribiste. De eso se
ocupa la sección que sigue.`}),`
`,e.jsx(a.p,{children:`Esta forma de ordenar los errores por su causa sale de un curso corto y gratuito de Anthropic. Está
en inglés, es opcional, y no hace falta para seguir leyendo.`}),`
`,e.jsx(R,{items:U,titulo:"El marco original (opcional, en inglés)"}),`
`,e.jsx(a.h2,{children:"El protocolo de verificación"}),`
`,e.jsxs(a.p,{children:["La regla que deja la cacería es corta: ",e.jsx(a.strong,{children:`lo verificable es lo que se
deriva de lo que le diste; lo inventado es lo que tuvo que completar`}),`. Un resumen de tu planilla
suele estar bien. Una causa, una cita, un artículo de una norma o una estimación de beneficio casi
nunca lo están.`]}),`
`,e.jsx(a.p,{children:"De ahí sale un protocolo corto, que se ajusta al costo del error:"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsxs(a.li,{children:[e.jsx(a.strong,{children:"Borrador que vas a reescribir igual:"})," no se verifica, se reescribe. Un correo, un primer esquema."]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.strong,{children:"Texto que sale con tu nombre:"}),` se verifica contra la fuente todo dato puntual (cifras, fechas,
nombres). La prosa es tuya, los datos son de alguien.`]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.strong,{children:"Cifra que entra en un informe firmado, una decisión o un documento contractual:"}),` fuente primaria
a la vista, sin excepción. Si no podés abrir la fuente en dos minutos, el número no entra.`]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.strong,{children:"Cualquier cosa sobre normativa:"}),` con el texto de la norma adjunto, nunca de memoria. El costo del
error acá es legal, no reputacional.`]}),`
`]}),`
`,e.jsx(a.h2,{children:"Confidencialidad, en concreto"}),`
`,e.jsx(a.p,{children:`La regla del primer día, si no lo pondrías en un correo a un desconocido no va al chat, alcanza para
empezar y no alcanza para una empresa. La versión operativa es un mapa de tres niveles:`}),`
`,e.jsxs(a.p,{children:[e.jsx(a.strong,{children:"Nunca, en ninguna herramienta externa:"}),` producción real por pozo, reservas, precios y cláusulas de
contratos, datos de socios, información de personas, cualquier cosa bajo acuerdo de confidencialidad.`]}),`
`,e.jsxs(a.p,{children:[e.jsx(a.strong,{children:"Solo en herramientas contratadas por la empresa"}),`, con acuerdo de tratamiento de datos y sin
entrenamiento sobre lo que subís: documentos internos no críticos, procedimientos, correspondencia
ordinaria.`]}),`
`,e.jsxs(a.p,{children:[e.jsx(a.strong,{children:"En cualquier herramienta, incluso gratuita:"}),` información pública, datos históricos ya publicados,
textos sin datos propios, y datos inventados que imiten la estructura de los tuyos. Esta última
categoría es más útil de lo que parece: para probar un análisis o afinar un prompt, una planilla
sintética con las mismas columnas funciona igual de bien.`]}),`
`,e.jsx(a.h2,{children:"Infraestructura crítica"}),`
`,e.jsx(a.p,{children:`Acá hay que ser directo. "Conectemos un agente al sistema de control" es una frase que tiene que
encender todas las alarmas, y no porque el modelo sea tonto.`}),`
`,e.jsx(a.p,{children:`El motivo es el de la sesión 6. El loop del agente funciona porque el error vuelve y se corrige: leyó
mal, el resultado salió vacío, reintentó. Ese mecanismo supone que equivocarse es barato y reversible.
En un sistema que opera equipos, ninguna de las dos cosas es cierta. Un paso equivocado no vuelve como
mensaje de error: vuelve como una válvula en la posición que no era.`}),`
`,e.jsx(a.p,{children:`A eso se suma que un modelo de lenguaje no tiene garantías de comportamiento. No podés demostrar que
nunca va a hacer algo; podés observar que hasta ahora no lo hizo. Los sistemas de seguridad
industriales se diseñan al revés, sobre garantías demostrables y modos de falla conocidos. Son dos
culturas de ingeniería incompatibles, y la incompatibilidad no se arregla con un prompt mejor.`}),`
`,e.jsxs(a.p,{children:["La separación práctica es clara: los asistentes trabajan sobre ",e.jsx(a.strong,{children:"copias de datos"}),`, del lado de la
oficina, y producen recomendaciones que una persona ejecuta. Entre el modelo y cualquier cosa que se
mueva en el campo hay un humano con nombre y apellido. Eso no es desconfianza en la tecnología, es la
misma lógica por la que un cálculo de ingeniería lo firma alguien.`]}),`
`,e.jsx(a.h2,{children:"Esto ya pasó, con fuentes"}),`
`,e.jsx(a.p,{children:`Nada de esta página es hipotético. Cinco incidentes documentados, cada uno pegado a una regla de
las de arriba:`}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsxs(a.li,{children:[e.jsx(a.strong,{children:"Deloitte, octubre de 2025."}),` Un informe de AU$ 440,000 para el gobierno australiano salió con
citas académicas inventadas y una cita judicial falsa; la firma
`,e.jsx(a.a,{href:"https://www.theguardian.com/australia-news/2025/oct/06/deloitte-to-pay-money-back-to-albanese-government-after-using-ai-in-440000-report",children:"devolvió parte de los honorarios"}),`.
Lo destapó un investigador que abrió las citas.`]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.strong,{children:"Los abogados sancionados, 2023 a hoy."}),` Un
`,e.jsx(a.a,{href:"https://www.damiencharlotin.com/hallucinations/",children:"registro público"}),` junta los fallos judiciales
con citas inventadas por inteligencia artificial: ya pasa los 1,900 casos. La fila de normativa
del protocolo existe por esto.`]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.strong,{children:"Replit, julio de 2025."}),` Un agente de programación
`,e.jsx(a.a,{href:"https://incidentdatabase.ai/cite/1152/",children:"borró la base de datos de producción"}),` de una empresa en
pleno congelamiento de cambios, y después informó que la recuperación era imposible (no lo era).
El error que no vuelve como mensaje, en versión de manual.`]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.strong,{children:"Air Canada, febrero de 2024."}),` Su chatbot inventó una política de descuentos y
`,e.jsx(a.a,{href:"https://www.bbc.com/travel/article/20240222-air-canada-chatbot-misinformation-what-travellers-should-know",children:"un tribunal obligó a la aerolínea a cumplirla"}),`.
Lo que tu herramienta dice, lo dijo tu empresa.`]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.strong,{children:"Anthropic, noviembre de 2025."}),` El
`,e.jsx(a.a,{href:"https://www.anthropic.com/news/disrupting-AI-espionage",children:"primer caso reportado"}),` de espionaje
informático orquestado con agentes de IA, contra unas treinta organizaciones, varias de
infraestructura. La sección de arriba no es exceso de cautela.`]}),`
`]}),`
`,e.jsx(a.h2,{children:"La política de uso, en una página"}),`
`,e.jsx(a.p,{children:`Salimos de la sesión con un borrador editable que cubre cinco puntos: qué herramientas están
aprobadas y cuáles no; el mapa de datos de tres niveles de más arriba; el protocolo de verificación
según el destino del texto; qué hay que declarar cuando un documento se hizo con asistencia; y a quién
se le consulta cuando aparece un caso nuevo. Ese último punto es el que más se olvida y el que hace
que la política siga viva.`}),`
`,e.jsxs(a.p,{children:[`El borrador está acá:
`,e.jsx(a.a,{href:"descargas/politica-uso-ia-borrador.docx",children:"politica-uso-ia-borrador.docx"}),`. Se abre en Word o en
cualquier procesador, y los corchetes marcan lo que cada equipo completa. En la sesión lo llenamos
con lo que salga de los bloques: los datos clasificados entran al punto 2, el protocolo al punto 3.`]}),`
`,e.jsx(a.h2,{children:"En la sesión en vivo (2 h)"}),`
`,e.jsxs(a.table,{children:[e.jsx(a.thead,{children:e.jsxs(a.tr,{children:[e.jsx(a.th,{children:"Bloque"}),e.jsx(a.th,{children:"Tiempo"}),e.jsx(a.th,{children:"Qué hacemos"})]})}),e.jsxs(a.tbody,{children:[e.jsxs(a.tr,{children:[e.jsx(a.td,{children:"Apertura y entrada al sitio"}),e.jsx(a.td,{children:"5 min"}),e.jsx(a.td,{children:"El PIN de siempre y las ventanas del día"})]}),e.jsxs(a.tr,{children:[e.jsx(a.td,{children:"La cacería"}),e.jsx(a.td,{children:"20 min"}),e.jsx(a.td,{children:"Invenciones cazadas en vivo, cada una con su causa"})]}),e.jsxs(a.tr,{children:[e.jsx(a.td,{children:"El protocolo"}),e.jsx(a.td,{children:"25 min"}),e.jsx(a.td,{children:"Cuánto verificar según el costo del error"})]}),e.jsxs(a.tr,{children:[e.jsx(a.td,{children:"Datos de la empresa"}),e.jsx(a.td,{children:"20 min"}),e.jsx(a.td,{children:"Datos reales del equipo en los tres niveles"})]}),e.jsxs(a.tr,{children:[e.jsx(a.td,{children:"Agentes y operación"}),e.jsx(a.td,{children:"25 min"}),e.jsx(a.td,{children:"Donde el error no es reversible, el loop no sirve"})]}),e.jsxs(a.tr,{children:[e.jsx(a.td,{children:"La política"}),e.jsx(a.td,{children:"15 min"}),e.jsx(a.td,{children:"El borrador de una página, redactado en vivo"})]}),e.jsxs(a.tr,{children:[e.jsx(a.td,{children:"Cierre y tarea"}),e.jsx(a.td,{children:"10 min"}),e.jsx(a.td,{children:"La tarea de la sesión 8 y las cuatro, cerradas"})]})]})]}),`
`,e.jsx(N,{data:"quiz_s7",sesion:7}),`
`,e.jsx(a.h2,{children:"Para discutir"}),`
`,e.jsxs(a.ol,{children:[`
`,e.jsx(a.li,{children:`¿Qué error de inteligencia artificial sería más caro en tu área: uno visible y grosero, o uno sutil
que pasa las revisiones? ¿Cuál es más probable?`}),`
`,e.jsx(a.li,{children:`¿Quién debería poder decidir que una herramienta de este tipo toque datos o sistemas de operación?
¿Existe hoy ese rol?`}),`
`,e.jsx(a.li,{children:`De las afirmaciones que marcaste mal en el ejercicio: ¿qué te hizo dudar de una que era correcta?
Esa señal falsa también cuesta tiempo.`}),`
`]}),`
`,e.jsx(a.h2,{children:"Tarea para la sesión 8"}),`
`,e.jsx(a.p,{children:`Leé el resumen del caso que elegimos en la sesión 5 y anotá dos cosas: qué te gustaría que muestre la
demostración, y qué tendría que pasar para que tu equipo lo use de verdad después del curso. La
segunda pregunta es la difícil.`})]})}function V(r={}){const{wrapper:a}=r.components||{};return a?e.jsx(a,{...r,children:e.jsx(L,{...r})}):L(r)}export{V as default};
