import{u as E,j as e,L as z,c as n,s as r,r as x,b as S,d as j}from"./index-DudSLzgd.js";import{g as T,E as A,S as h,Q as L}from"./Quiz-CKuzU5bj.js";import{R as M}from"./Recursos-DC92Ohkw.js";const P={bash:"terminal",python:"python",respuesta:"respuesta final"};function R(o,a){return o.slice(0,a+1).reduce((d,l)=>d+l.pensamiento.length+l.entrada.length+l.salida.length,0)}const v={fontFamily:"var(--pd-font-mono)",fontSize:13,whiteSpace:"pre-wrap",overflowX:"auto",background:n.surface,border:`1px solid ${n.border}`,borderRadius:x.md,padding:r.md,margin:0};function C({sesion:o=6}){const{data:a,meta:d,loading:l,error:y}=T(),[f,m,q]=E("agent-trace",{paso:0});if(l)return e.jsx(z,{what:"la traza"});if(y||!a||a.pasos.length===0)return e.jsx("div",{style:{color:n.status.err},children:"No se pudo cargar la traza."});const c=a.pasos.length,s=Math.min(Math.max(f.paso,0),c-1),t=a.pasos[s],u=t.estado==="error",g=t.herramienta==="respuesta";return e.jsxs(A,{titulo:"El loop por dentro",sesion:o,intro:"Un agente no es magia: es un modelo que piensa, ejecuta una herramienta, mira el resultado y vuelve a pensar. Recorré la traza paso a paso y mirá la mecánica, incluido el momento en que se equivoca.",onReset:q,children:[e.jsxs("div",{style:{background:n.surface,border:`1px solid ${n.border}`,borderRadius:x.md,padding:r.md,marginBottom:r.lg},children:[e.jsx("div",{style:{fontSize:12,color:n.textDim,fontFamily:"var(--pd-font-mono)",textTransform:"uppercase",letterSpacing:.5},children:"Lo que le pidieron"}),e.jsx("div",{style:{fontSize:"var(--pd-fs-sm)",color:n.textPrimary,marginTop:4},children:a.objetivo})]}),e.jsx("div",{style:{display:"flex",gap:4,flexWrap:"wrap",marginBottom:r.lg},children:a.pasos.map((p,i)=>e.jsx("button",{type:"button",title:p.pensamiento.slice(0,80),onClick:()=>m({paso:i}),style:{font:"inherit",fontFamily:"var(--pd-font-mono)",fontSize:12,width:30,height:30,borderRadius:x.sm,cursor:"pointer",border:`1px solid ${i===s?n.accent.blue:p.estado==="error"?n.status.err:n.border}`,background:i===s?n.accent.blue+"15":i<s?n.surfaceAlt:n.surface,color:i===s?n.accent.blue:p.estado==="error"?n.status.err:n.textMuted,fontWeight:i===s?700:400},children:i+1},i))}),e.jsxs("div",{style:{display:"flex",gap:r.sm,alignItems:"center",marginBottom:r.lg,flexWrap:"wrap"},children:[e.jsx("button",{type:"button",className:"tbtn",disabled:s===0,onClick:()=>m({paso:s-1}),children:"← Anterior"}),e.jsx("button",{type:"button",className:"tbtn",disabled:s===c-1,onClick:()=>m({paso:s+1}),children:"Siguiente →"}),e.jsxs("span",{style:{fontSize:13,color:n.textMuted},children:["Paso ",s+1," de ",c]})]}),e.jsxs("div",{style:{marginBottom:r.md},children:[e.jsx("div",{style:{fontSize:12,color:n.textDim,fontFamily:"var(--pd-font-mono)",textTransform:"uppercase",letterSpacing:.5,marginBottom:4},children:"Piensa"}),e.jsx("p",{style:{margin:0,fontSize:"var(--pd-fs-sm)",color:n.textPrimary,maxWidth:"70ch"},children:t.pensamiento})]}),!g&&e.jsxs("div",{style:{marginBottom:r.md},children:[e.jsxs("div",{style:{fontSize:12,color:n.textDim,fontFamily:"var(--pd-font-mono)",textTransform:"uppercase",letterSpacing:.5,marginBottom:4},children:["Ejecuta · ",P[t.herramienta]]}),e.jsx("pre",{style:v,children:t.entrada})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:u?n.status.err:n.textDim,fontFamily:"var(--pd-font-mono)",textTransform:"uppercase",letterSpacing:.5,marginBottom:4},children:g?"Responde":u?"Observa — no era lo que esperaba":"Observa"}),e.jsx("pre",{style:{...v,borderColor:u?n.status.err:n.border},children:t.salida})]}),u&&e.jsx("p",{style:{fontSize:"var(--pd-fs-sm)",color:n.status.err,marginTop:r.md,maxWidth:"70ch"},children:"Acá el agente se equivocó: dio por sentado cómo se escribía el nombre del área. Fijate en el paso siguiente qué hace con el error — no vuelve a adivinar, va a mirar los datos."}),e.jsx("div",{style:{marginTop:r.lg},children:e.jsxs(S,{children:[e.jsx(j,{label:"Paso",value:`${s+1} / ${c}`,hint:"Cada paso es una vuelta completa del loop"}),e.jsx(j,{label:"Contexto acumulado",value:R(a.pasos,s).toLocaleString("en-US"),unit:"caracteres",hint:"Todo lo anterior viaja en cada llamada. Por eso los agentes se vuelven lentos y caros en tareas largas."})]})}),e.jsxs(h,{titulo:"El loop, en una línea",children:["Objetivo → pensar qué falta → elegir una herramienta → ejecutarla → mirar el resultado → repetir hasta poder responder. Eso es todo. Lo único que agrega el agente sobre un chatbot es la capacidad de ",e.jsx("em",{children:"ejecutar"})," y de ",e.jsx("em",{children:"mirar lo que salió"}),", y esa diferencia es la que lo vuelve útil y la que lo vuelve riesgoso."]}),e.jsx(h,{titulo:"Qué mirar en esta traza",children:"Tres cosas. Primero, el agente no arranca escribiendo código: arranca mirando qué hay. Segundo, cuando el filtro devuelve cero no insiste ni inventa un resultado — va a buscar los valores reales y encuentra que el área lleva diéresis. Tercero, en la respuesta final aclara qué no verificó. Un agente que no puede ejecutar nunca se entera de que se equivocó; este se entera porque el resultado vuelve."}),e.jsx(h,{titulo:"Dónde esto se vuelve peligroso",children:"Todo lo que hace este agente es reversible: lee archivos y escribe un gráfico. El problema aparece cuando las herramientas dejan de ser de lectura — mandar un correo, cerrar una válvula, escribir en un sistema de control. El loop es el mismo, pero un paso equivocado ya no se corrige mirando la salida. De eso va la sesión 7."}),d.source&&e.jsxs("div",{style:{marginTop:r.md,fontFamily:"var(--pd-font-mono)",fontSize:"var(--pd-fs-cap)",color:n.textDim},children:["fuente: ",d.source]})]})}function b(o){const a={a:"a",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a.h2,{children:"Antes de la sesión"}),`
`,e.jsx(a.p,{children:e.jsx(a.em,{children:"Tiempo estimado: 25–35 minutos."})}),`
`,e.jsxs(a.ol,{children:[`
`,e.jsxs(a.li,{children:[e.jsx(a.strong,{children:"Tarea de la sesión 5:"}),` tu tarea de varios pasos, escrita en orden. Es el material del bloque
central de la sesión.`]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.strong,{children:"Ejercicio de esta página (15 min):"}),` recorré la traza completa, los diez pasos. Prestá atención
al tercero y al cuarto.`]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.strong,{children:"Micro-tarea (5 min):"}),` pedile a tu chatbot que te diga cuántas palabras tiene un texto que le
pegues, y contalas después. Vamos a hablar de por qué falla eso y qué cambia cuando puede ejecutar.`]}),`
`]}),`
`,e.jsx(M,{sesion:6}),`
`,e.jsx(a.h2,{children:"Qué es un agente, sin misterio"}),`
`,e.jsx(a.p,{children:`Un agente es un modelo de lenguaje metido en un loop, con permiso para usar herramientas. Piensa qué
le falta, ejecuta una acción, mira el resultado y vuelve a pensar. Repite hasta poder responder.`}),`
`,e.jsxs(a.p,{children:[`Eso es todo. No hay una tecnología nueva debajo: es el mismo modelo que predice el próximo token de la
sesión 2, con dos agregados que cambian todo. Puede `,e.jsx(a.strong,{children:"ejecutar"}),` (correr un comando, leer un archivo,
buscar en internet) y puede `,e.jsx(a.strong,{children:"mirar lo que salió"}),`. Un chatbot que se equivoca no se entera nunca. Un
agente que se equivoca recibe el error de vuelta y tiene la chance de corregirse.`]}),`
`,e.jsx(a.p,{children:`Ahí está la diferencia entre un asistente que responde y uno que trabaja. Y también, exactamente, el
motivo por el que hay que pensar bien qué herramientas se le dan.`}),`
`,e.jsx(a.h2,{children:"La traza, paso a paso"}),`
`,e.jsx(a.p,{children:`Abajo está una corrida sobre el mismo conjunto de datos de producción de la sesión 4. El paso más
interesante no es ninguno de los que salen bien: es el tercero, donde el agente filtra por el nombre
del área, escribe "AGUARAGUE" sin diéresis y le vuelven cero filas.`}),`
`,e.jsx(a.p,{children:`Mirá qué hace con eso. No insiste, no prueba otra grafía al azar y, sobre todo, no inventa un
resultado para seguir adelante. Va a buscar los valores que existen de verdad en la columna, encuentra
que el área lleva diéresis, corrige y continúa. Un chatbot sin herramientas hubiera seguido escribiendo
con total seguridad sobre una tabla vacía.`}),`
`,e.jsx(C,{sesion:6}),`
`,e.jsx(a.h2,{children:"Qué funciona hoy y qué no"}),`
`,e.jsxs(a.p,{children:["Funcionan bien las tareas ",e.jsx(a.strong,{children:"digitales, acotadas y verificables"}),`: buscar información en muchos
documentos, transformar datos de un formato a otro, escribir y corregir código, automatizar una
secuencia repetitiva de pasos que hoy hacés a mano. La característica común es que el resultado se
puede comprobar rápido.`]}),`
`,e.jsx(a.p,{children:`Funcionan mal las tareas largas y ambiguas. El agente acumula contexto en cada vuelta (el ejercicio
lo muestra con un contador) y a medida que crece, se vuelve más lento, más caro y más propenso a
perder el hilo del objetivo original. Una tarea de veinte pasos no es dos veces una de diez: es
bastante peor.`}),`
`,e.jsxs(a.p,{children:["Y hay una tercera categoría, la que importa en esta industria: tareas con ",e.jsx(a.strong,{children:`consecuencias físicas o
irreversibles`}),`. Ahí el problema no es que el agente sea malo, es que el loop deja de funcionar. Todo
lo que hace el agente del ejercicio es reversible: lee archivos y guarda un gráfico. Si se equivoca,
el error vuelve y se corrige. Cuando la herramienta manda un correo, cierra una válvula o escribe en
un sistema de control, el paso equivocado ya no se corrige mirando la salida. De eso va la sesión 7.`]}),`
`,e.jsx("div",{className:"callout",children:e.jsxs(a.p,{children:[e.jsx("strong",{children:"El protocolo de contexto de modelo"}),` (Model Context Protocol, MCP) aparece mucho en
estas conversaciones. Es simplemente una forma estandarizada de conectarle herramientas a un modelo,
para no reescribir la conexión por cada aplicación. Es plomería útil, no una capacidad nueva: no
cambia nada de lo que un agente puede o no puede hacer.`]})}),`
`,e.jsx(a.h2,{children:"Lo que aprende no vive en el modelo: vive en archivos"}),`
`,e.jsx(a.p,{children:`La sesión de un agente se apaga y el modelo no retiene nada de lo que pasó. Lo que queda, queda en
archivos: un archivo de instrucciones con las reglas del proyecto (en las herramientas actuales se
llama CLAUDE.md, AGENTS.md o parecido), habilidades empaquetadas que el agente carga cuando las
necesita (las llaman skills), y las conexiones a tus sistemas. Lo que le enseñás a un agente se
escribe, no se conversa: es la biblioteca de prompts de la sesión 3, versión agente. Y tiene una
consecuencia que vale plata: podés cambiar de modelo mañana y esos archivos siguen valiendo.`}),`
`,e.jsxs(a.p,{children:[`Lo otro que conviene saber es que el techo se mueve.
`,e.jsx(a.a,{href:"https://metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks/",children:"METR"}),` mide el largo
de tarea que un agente completa solo, y viene duplicándose cada siete meses: de tareas de segundos a
tareas de horas en pocos años. La medición tiene su letra chica (50% de éxito, tareas de software),
pero la dirección es clara: lo que hoy no delegás porque es largo, reevalualo en seis meses.`]}),`
`,e.jsx(a.h2,{children:"El caso arranca acá"}),`
`,e.jsxs(a.p,{children:["El viernes quedó elegido el caso de la sesión 8: un ",e.jsx(a.strong,{children:"screening de waterflooding"}),`, un ranking de
dónde conviene inyectar agua (o revisar la que ya se inyecta) construido con criterios explícitos
sobre datos de producción. En el último bloque de esta sesión armamos el plan entre todos: qué tiene
que responder para servirles, con qué datos, y quién hace qué hasta la sesión 8. El primer intento
se lo damos al agente en vivo.`]}),`
`,e.jsx(a.p,{children:`Los datos tienen su realidad: producción por pozo de Bolivia, pública, no hay. El análogo es la
cuenca Noroeste argentina, los mismos reservorios subandinos que opera Andina del otro lado de la
frontera, y ya está en el curso: es el conjunto de datos donde el agente del ejercicio encontró,
solo en Aguaragüe, 88 pozos petrolíferos y 22 inyectores de agua.`}),`
`,e.jsx(a.h2,{children:"En la sesión en vivo (2 h)"}),`
`,e.jsxs(a.table,{children:[e.jsx(a.thead,{children:e.jsxs(a.tr,{children:[e.jsx(a.th,{children:"Bloque"}),e.jsx(a.th,{children:"Tiempo"}),e.jsx(a.th,{children:"Qué hacemos"})]})}),e.jsxs(a.tbody,{children:[e.jsxs(a.tr,{children:[e.jsx(a.td,{children:"Apertura y entrada al sitio"}),e.jsx(a.td,{children:"5 min"}),e.jsx(a.td,{children:"El PIN de siempre y las ventanas del día"})]}),e.jsxs(a.tr,{children:[e.jsx(a.td,{children:"El loop del agente"}),e.jsx(a.td,{children:"20 min"}),e.jsx(a.td,{children:"La traza del ejercicio paso a paso, y después en vivo"})]}),e.jsxs(a.tr,{children:[e.jsx(a.td,{children:"Sus tareas"}),e.jsx(a.td,{children:"30 min"}),e.jsx(a.td,{children:"Las cadenas que trajeron: qué delegarían y qué no"})]}),e.jsxs(a.tr,{children:[e.jsx(a.td,{children:"Dónde se rompe, dónde mejora"}),e.jsx(a.td,{children:"20 min"}),e.jsx(a.td,{children:"Contexto, memoria en archivos, la frontera que sube"})]}),e.jsxs(a.tr,{children:[e.jsx(a.td,{children:"Puente a la sesión 7"}),e.jsx(a.td,{children:"10 min"}),e.jsx(a.td,{children:"Qué cambia cuando las herramientas escriben"})]}),e.jsxs(a.tr,{children:[e.jsx(a.td,{children:"El caso, en marcha"}),e.jsx(a.td,{children:"25 min"}),e.jsx(a.td,{children:"El screening de waterflooding, planificado entre todos"})]}),e.jsxs(a.tr,{children:[e.jsx(a.td,{children:"Cierre y tarea"}),e.jsx(a.td,{children:"10 min"}),e.jsx(a.td,{children:"La tarea de la sesión 7 y quién hace qué"})]})]})]}),`
`,e.jsx(L,{data:"quiz_s6",sesion:6}),`
`,e.jsx(a.h2,{children:"Para discutir"}),`
`,e.jsxs(a.ol,{children:[`
`,e.jsx(a.li,{children:`¿Qué tarea de tu área delegarías a un agente si pudiera usar tus mismas herramientas? ¿Qué te
frenaría, la capacidad o el permiso?`}),`
`,e.jsx(a.li,{children:`¿Qué diferencia hay entre confiar en la respuesta de un chatbot y confiar en las acciones de un
agente? ¿Quién responde si la acción sale mal?`}),`
`,e.jsx(a.li,{children:`En la traza, el agente se dio cuenta de su error porque el resultado volvió vacío. De los errores
que podría cometer en tu trabajo, ¿cuáles no avisarían nada al volver?`}),`
`]}),`
`,e.jsx(a.h2,{children:"Tarea para la sesión 7"}),`
`,e.jsx(a.p,{children:`Buscá un texto generado por inteligencia artificial que hayas usado en las últimas semanas (tuyo o de
un compañero) y releelo con una pregunta en la cabeza: ¿qué afirmación de acá no podría haber salido
de lo que le di? Marcá una. Traela a la sesión 7, sin decir todavía si estaba bien o mal.`})]})}function Q(o={}){const{wrapper:a}=o.components||{};return a?e.jsx(a,{...o,children:e.jsx(b,{...o})}):b(o)}export{Q as default};
