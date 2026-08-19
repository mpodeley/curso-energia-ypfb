import{u as M,j as e,L as R,c as s,F as T,t as N,r as E,s as r,D as w,S as x,b as $,d as C}from"./index-DudSLzgd.js";import{u as B,E as I,S as b,Q as U}from"./Quiz-CKuzU5bj.js";import{s as V,e as k,c as Q,a as Y,d as W,b as O}from"./decline-C4JacJWN.js";import{R as G}from"./Recursos-DC92Ohkw.js";const f=[{value:"gas",label:"Gas",unidad:"Mm³"},{value:"pet",label:"Petróleo",unidad:"m³"},{value:"agua",label:"Agua",unidad:"m³"}],H=360;function X(l,a,u){return l.serie.map(m=>{const p=m[a];return p>0?u?p/W(m.ym):p:null})}function Z({sesion:l=4}){const{data:a,meta:u,loading:m,error:p}=B(),[n,c,S]=M("decline-lab",{pozo:"",fluido:"gas",porDia:!1,log:!1,qi:0,Di:.01,b:.5,tocado:!1});if(m)return e.jsx(R,{what:"las series de producción"});if(p||!a||a.length===0)return e.jsx("div",{style:{color:s.status.err},children:"No se pudieron cargar los pozos."});const d=a.find(o=>o.id===n.pozo)??a[0],i=f.find(o=>o.value===n.fluido)??f[0],t=X(d,n.fluido,n.porDia),A=t.find(o=>o!==null)??1,g=n.tocado&&n.qi>0?n.qi:A,y=V(g,n.Di,n.b,t.length),h=k(t,y),q=Q(g,n.Di,n.b,H),F=n.porDia?q*30.4:q,L=d.serie.map((o,v)=>({t:v,ym:o.ym,observado:t[v],modelo:y[v]})),P=o=>c({pozo:o,tocado:!1,qi:0}),_=()=>{const o=O(t);c({qi:o.qi,Di:o.Di,b:o.b,tocado:!0})},z=Math.max(...t.filter(o=>o!==null),1),j=o=>({font:"inherit",fontSize:13,fontWeight:600,padding:`${r.xs}px ${r.md}px`,borderRadius:E.pill,border:`1px solid ${o?s.accent.blue:s.border}`,background:o?s.accent.blue+"15":s.surface,color:o?s.accent.blue:s.textMuted,cursor:"pointer"});return e.jsxs(I,{titulo:"Ajustá la curva de declinación",sesion:l,intro:"Movés tres perillas hasta que la curva se pegue a los puntos: eso es ajustar un modelo a datos. Empezá por los pozos de escuela, que tienen respuesta exacta, y después pasá a los reales de Salta — de los mismos reservorios del subandino que se producen en Bolivia.",onReset:S,children:[e.jsx(T,{label:"Pozo",children:e.jsx(N,{value:d.id,options:a.map(o=>({value:o.id,label:o.tipo==="escuela"?`Escuela · ${o.sigla} — ${o.formacion}`:`Real · ${o.sigla} — ${o.area} (${o.formacion})`})),onChange:P})}),d.tipo==="real"&&e.jsx("div",{style:{padding:r.md,marginBottom:r.lg,borderLeft:`3px solid ${s.accent.orange}`,background:s.surface,borderRadius:E.sm,fontSize:13,color:s.textSecondary,maxWidth:"72ch"},children:"Este es un pozo real, y su curva no es solo el reservorio. Ahí adentro también están la disponibilidad de compresión, las restricciones de planta, la contrapresión de línea y la carga de líquido en el pozo. Arps describe un reservorio que se despresuriza solo; lo que medís es eso más todo lo demás."}),e.jsxs("div",{style:{display:"flex",gap:r.sm,flexWrap:"wrap",marginBottom:r.lg},children:[f.map(o=>e.jsx("button",{type:"button",style:j(n.fluido===o.value),onClick:()=>c({fluido:o.value,tocado:!1,qi:0}),children:o.label},o.value)),e.jsx("span",{style:{width:r.lg}}),e.jsx("button",{type:"button",style:j(n.porDia),onClick:()=>c({porDia:!n.porDia,tocado:!1,qi:0}),children:n.porDia?`${i.unidad}/día`:`${i.unidad}/mes`}),e.jsx("button",{type:"button",style:j(n.log),onClick:()=>c({log:!n.log}),children:"Eje log"})]}),t.every(o=>o===null)?e.jsxs("p",{style:{color:s.textMuted,fontSize:"var(--pd-fs-sm)"},children:["Este pozo no reporta ",i.label.toLowerCase(),". Probá con otro fluido."]}):e.jsxs(e.Fragment,{children:[e.jsx(w,{data:L,log:n.log,unidad:n.porDia?`${i.unidad}/d`:`${i.unidad}/mes`}),e.jsxs("div",{style:{marginTop:r.lg},children:[e.jsx(x,{label:`Caudal inicial qi (${n.porDia?i.unidad+"/día":i.unidad+"/mes"})`,value:Math.round(g),min:0,max:Math.round(z*1.4),step:Math.max(1,Math.round(z/200)),onChange:o=>c({qi:o,tocado:!0}),format:o=>o.toLocaleString("en-US")}),e.jsx(x,{label:"Tasa de declinación Di",value:n.Di,min:0,max:.08,step:5e-4,onChange:o=>c({Di:o,tocado:!0}),format:o=>`${(o*100).toFixed(2)} %/mes · ${(Y(o)*100).toFixed(0)} %/año`}),e.jsx(x,{label:"Exponente b",value:n.b,min:0,max:1.2,step:.05,onChange:o=>c({b:o,tocado:!0}),format:o=>o<.03?"0.00 — exponencial":Math.abs(o-1)<.03?"1.00 — armónica":o.toFixed(2)})]}),e.jsxs($,{children:[e.jsx(C,{label:"Error del ajuste",value:Number.isFinite(h)?`${(h*100).toFixed(1)}%`:"—",accent:h<.06?s.status.ok:h<.12?s.status.warn:s.status.err,hint:"Cuánto se aparta el modelo de un mes típico. Abajo de 6% el ajuste es bueno."}),e.jsx(C,{label:"Acumulada a 30 años",value:(F/1e3).toFixed(0),unit:`miles de ${i.unidad}`,hint:"Lo que el modelo predice que va a producir el pozo. Depende muchísimo de b."})]}),e.jsxs("div",{style:{display:"flex",gap:r.md,alignItems:"center",flexWrap:"wrap",marginTop:r.lg},children:[e.jsx("button",{type:"button",className:"tbtn",onClick:_,children:"Buscar el mejor ajuste"}),e.jsx("span",{style:{fontSize:13,color:s.textMuted},children:"Probá vos primero. El botón hace la búsqueda por fuerza bruta."})]}),e.jsxs(b,{titulo:"¿Qué mirar en este pozo?",children:[d.nota,d.verdad&&e.jsxs("p",{style:{marginTop:r.sm},children:["Pasá el gráfico a ",e.jsxs("strong",{children:[i.unidad,"/día"]})," con el botón de arriba y después poné"," ",e.jsxs("strong",{children:["qi = ",d.verdad.qi.toLocaleString("en-US")," ",i.unidad,"/día, Di ="," ",(d.verdad.Di*100).toFixed(1)," %/mes, b = ",d.verdad.b.toFixed(2)]}),": con esos valores se generó la curva, y el modelo va a pasar por el medio de los puntos. Lo único que sobra es el ruido de medición. El orden importa — esos números son caudal diario, y en volumen mensual el calendario mete un serrucho que no está en el reservorio."]})]}),e.jsxs(b,{titulo:"Por qué febrero siempre parece un mal mes",children:["En metros cúbicos por mes vas a ver un serrucho: cada febrero cae y cada mes de 31 días sube. No es el reservorio, son los días del calendario. La declinación describe un caudal, así que el serrucho desaparece en cuanto pasás a ",i.unidad,"/día — y el error del ajuste baja sin que toques ninguna perilla. Es el error más común al mirar datos de producción crudos."]}),e.jsxs(b,{titulo:"Qué significa cada perilla",children:[e.jsx("strong",{children:"qi"})," es dónde arranca la curva: subirlo o bajarlo la mueve entera. ",e.jsx("strong",{children:"Di"})," es cuán rápido cae al principio. ",e.jsx("strong",{children:"b"})," es la forma de la cola: en 0 la caída es exponencial y el pozo se apaga rápido; en 1 es armónica y la cola se estira. Cambiar b casi no mueve los primeros meses, pero cambia enormemente la acumulada a 30 años — por eso una reserva estimada con pocos años de historia es un número frágil."]}),e.jsx(b,{titulo:"Por qué los pozos de escuela vienen primero",children:"Arps describe un reservorio que se despresuriza sin que nadie lo toque. Ningún pozo real cumple eso: lo que se mide en la boca es el reservorio más la compresión disponible ese mes, más las restricciones de planta, más la contrapresión de línea, más el líquido que se acumula en el pozo y lo ahoga. Por eso un ajuste que cierra no prueba que entendiste el reservorio, y uno que no cierra no prueba que el reservorio se portó mal. Los pozos de escuela existen para que aprendas a mover las perillas contra una curva que sí tiene respuesta; los reales, para que veas cuánto de lo que medís no es geología. Un ingeniero de reservorios trabaja con datos corregidos por horas de operación y presión de boca, no con el volumen mensual crudo que ves acá."})]}),u.source&&e.jsxs("div",{style:{marginTop:r.md,fontFamily:"var(--pd-font-mono)",fontSize:"var(--pd-fs-cap)",color:s.textDim},children:["fuente: ",u.source,u.source_date&&` · datos hasta ${u.source_date}`]})]})}function D(l){const a={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(a.h2,{children:"Antes de la sesión (opcional)"}),`
`,e.jsxs(a.p,{children:["Lo único que pide esta sesión es la tarea de ayer: tu prompt ",e.jsx(a.strong,{children:"antes y después"}),`. La planilla no
confidencial es un extra bienvenido, no un requisito: la clase trabaja con datos públicos de
producción, argentinos y bolivianos, justamente por la regla de confidencialidad. Si tenés un
rato antes, el laboratorio de declinación de esta página se puede jugar solo; arrancá por los
pozos de escuela.`]}),`
`,e.jsx(G,{sesion:4}),`
`,e.jsx(a.h2,{children:"El chatbot como copiloto de análisis"}),`
`,e.jsxs(a.p,{children:[`Hasta acá el modelo escribió texto. Ahora le vamos a dar una tabla y pedirle que la analice. La
diferencia importante es que ya no genera solo prosa: genera `,e.jsx(a.strong,{children:"código"}),`, lo corre y te devuelve el
resultado. Eso cambia dónde puede fallar y dónde tenés que mirar.`]}),`
`,e.jsx(a.p,{children:"Cuatro movimientos, en orden de dificultad:"}),`
`,e.jsxs(a.ol,{children:[`
`,e.jsx(a.li,{children:`De un archivo separado por comas a un análisis. Subís la planilla, pedís estadísticas y
gráficos. El copiloto escribe el código; vos juzgás el resultado.`}),`
`,e.jsx(a.li,{children:`De un archivo PDF a una tabla. Los datos públicos de producción en Bolivia viven en boletines
de Yacimientos Petrolíferos Fiscales Bolivianos y en informes de la Agencia Nacional de
Hidrocarburos, casi siempre en PDF. Extraemos una tabla y la verificamos contra el original,
número por número.`}),`
`,e.jsx(a.li,{children:`De una tabla a un modelo. Ajustar una curva de declinación: pocos parámetros, una fórmula de
1945 y la pregunta de siempre, que es cuánto le creés a la extrapolación.`}),`
`,e.jsx(a.li,{children:`Del modelo al lote. Un prompt con reglas escritas, diez pozos, y de vuelta un Excel con
pronósticos, supuestos anotados y una visualización para recorrerlos.`}),`
`]}),`
`,e.jsx(a.h2,{children:"Verificar código es distinto de verificar texto"}),`
`,e.jsx(a.p,{children:`Cuando el modelo escribe un párrafo, el error se lee. Cuando escribe código, el error se esconde
detrás de un número que parece razonable. Un filtro mal escrito no rompe nada: devuelve menos filas
y sigue.`}),`
`,e.jsx(a.p,{children:`La regla práctica es corta. Pedile siempre que te muestre el código, no solo el resultado. Pedile
que el código informe cuántas filas entran y cuántas quedan en cada filtro: el que cuenta es el
chatbot, no vos, y ese renglón hace visible al filtro que se comió filas de más. Y comprobá un caso
a mano, uno solo, eligiendo un valor que puedas rastrear en la planilla original. Si ese cierra, casi siempre cierra el resto; si no
cierra, no hay nada más que discutir.`}),`
`,e.jsx("div",{className:"callout",children:e.jsxs(a.p,{children:[e.jsx("strong",{children:"Antes de subir nada:"}),` producción real por pozo, reservas y precios de contrato no van
a un chatbot gratuito. Para practicar alcanza con datos públicos, con datos viejos que ya no sean
sensibles, o con una planilla inventada que tenga la misma estructura que la tuya.`]})}),`
`,e.jsx(a.h2,{children:"La curva de declinación, y lo que la curva no dice"}),`
`,e.jsx(a.p,{children:`En la sesión 1 movimos dos perillas contra un pozo generado, y la máquina encontró sola los valores
con los que se lo había generado. Acá se termina esa comodidad: aparecen la tercera perilla, el eje
logarítmico, la acumulada a 30 años y, sobre todo, seis pozos que nadie diseñó para que ajustaran.`}),`
`,e.jsx(a.p,{children:"El ejercicio tiene dos grupos de pozos, y el orden importa."}),`
`,e.jsxs(a.p,{children:["Los ",e.jsx(a.strong,{children:"pozos de escuela"}),` están generados a partir de parámetros conocidos. Sirven para aprender qué
hace cada perilla contra una curva que tiene respuesta exacta: si ponés los valores con los que se
generó, el modelo pasa por el medio de los puntos.`]}),`
`,e.jsxs(a.p,{children:["Los ",e.jsx(a.strong,{children:"pozos reales"}),` son de Aguaragüe, Ramos y Acambuco, en Salta, y producen de huamampampa,
tupambi, icla y santa rosa: los mismos reservorios del subandino que se producen del lado boliviano.
La serie es la producción mensual declarada al Estado argentino entre 2019 y 2026, sin retocar.`]}),`
`,e.jsxs(a.p,{children:[`Y acá está lo que hay que decir en voz alta, porque es donde este ejercicio se separa de un tutorial
cualquiera. `,e.jsx(a.strong,{children:"Arps describe un reservorio que se despresuriza solo, y ningún pozo real hace eso."}),` Lo
que se mide en la boca es el reservorio más la compresión disponible ese mes, más las restricciones
de planta, más la contrapresión de línea, más el líquido que se acumula y ahoga el pozo. Un ajuste
que cierra no prueba que entendiste la geología, y uno que no cierra no prueba que el reservorio se
haya portado mal. Un análisis serio se hace sobre caudales corregidos por horas de operación y
presión de boca, no sobre el volumen mensual crudo.`]}),`
`,e.jsx(a.p,{children:`Eso no invalida el método: lo ubica. La curva sirve para ordenar una conversación y para acotar un
número, no para cerrarla.`}),`
`,e.jsx(Z,{sesion:4}),`
`,e.jsx(a.h2,{children:"Del ajuste a mano al pronóstico en lote"}),`
`,e.jsx(a.p,{children:`El laboratorio ajusta de a un pozo, con tus dedos en las perillas. El trabajo real rara vez es
así: son diez, cuarenta o doscientos pozos, y el pronóstico se entrega en una planilla. Ese
salto es el último movimiento de la sesión.`}),`
`,e.jsxs(a.p,{children:[`La planilla del ejercicio es
`,e.jsx(a.a,{href:"descargas/produccion_noroeste_10pozos.csv",children:"produccion_noroeste_10pozos.csv"}),`: los seis pozos
del laboratorio más cuatro nuevos, 90 meses cada uno, 2019 a 2026, del mismo Capítulo IV. Trae
una columna que el laboratorio no tenía: `,e.jsx(a.code,{children:"dias_efectivos"}),`, los días del mes que el pozo produjo
de verdad. Con ella el ajuste se hace sobre `,e.jsx(a.strong,{children:"caudal efectivo"}),`, no sobre volumen calendario, y
el serrucho de los febreros desaparece solo.`]}),`
`,e.jsx(a.p,{children:`Entre los cuatro nuevos hay un pozo que murió, uno que produce cada vez más y uno que cambió de
régimen a mitad de la serie. Están porque tu campo también los tiene: un prompt de pronóstico se
mide en qué hace cuando el modelo no corresponde.`}),`
`,e.jsx(a.p,{children:"El prompt completo, para copiar:"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-text",children:`Actuá como ingeniero de reservorios. Te subo un CSV con la producción mensual
de 10 pozos de gas convencional de la cuenca Noroeste argentina (fuente:
Capítulo IV, Secretaría de Energía; datos públicos). Columnas: idpozo, pozo,
yacimiento, formacion, mes (AAAA-MM), gas_miles_m3 (producción del mes, en
miles de m³), petroleo_m3, agua_m3, dias_efectivos (días del mes que el pozo
produjo de verdad).

Tarea: ajustá curvas de declinación de Arps por pozo y pronosticá el gas.

Antes de analizar: describí el archivo (filas, columnas, rango de fechas,
meses por pozo, huecos) y mostrame esa tabla de control. Recién después
seguí con el análisis.

Reglas del análisis:
1. Trabajá sobre caudal efectivo: q = gas_miles_m3 / dias_efectivos, en
   miles de m³/día. Los meses con dias_efectivos < 10 quedan en la historia
   pero fuera de todos los ajustes.
2. Si el caudal salta más de 2 veces de forma sostenida, para arriba o para
   abajo, es un cambio de régimen: ajustá solo el tramo posterior al último
   salto y anotalo en las notas del pozo.
3. Ventana de ajuste: desde el pico de la mediana móvil de 3 meses en
   adelante. Si quedan menos de 24 meses útiles, reportá "sin ajuste" con el
   motivo. No fuerces ningún ajuste.
4. Ajustá tres variantes: exponencial (b = 0), hiperbólica (0 < b <= 1.2) y
   armónica (b = 1), minimizando el error sobre log(q).
5. Elegí por menor error, pero la hiperbólica tiene que mejorar a la
   exponencial en más de 2% para ganarse su parámetro extra. Si b queda en
   el tope, marcá el ajuste como dudoso.
6. Confiabilidad por R² sobre log(q): 0.6 o más, confiable; entre 0.25 y
   0.6, pronóstico de orden de magnitud, marcado "dudoso"; menos de 0.25,
   no ajustable. Si la producción sube, decilo: Arps no aplica.
7. Backtest por pozo: reajustá sin los últimos 12 meses, pronosticá esos 12
   e informá el error absoluto medio en volumen. Es la medida de cuánto
   creerle a cada pronóstico.
8. Pronóstico mensual desde 2026-07 hasta 2036-12 o hasta el límite
   económico de 2 miles de m³/día, lo que llegue primero. Volumen del mes =
   q × días del mes × factor de servicio (mediana de dias_efectivos / días
   del mes de los últimos 24 meses).

Entregables:
1. Un Excel: hoja "Resumen" con una fila por pozo (estado, modelo elegido,
   qi, Di anual, b, R², error de backtest, acumulada histórica, EUR
   restante, fin del pronóstico, notas); una hoja por pozo con historia y
   pronóstico mensual; hoja "Supuestos" con todas las reglas que aplicaste.
2. Un gráfico panel con los 10 pozos en escala semilogarítmica: puntos de
   historia, las tres curvas, la elegida resaltada y el pronóstico.
3. Un artifact interactivo: selector de pozo, escala lineal/log, historia,
   ajustes, pronóstico y la tabla resumen.

En todo el proceso: mostrá el código que corras y el conteo de filas antes
y después de cada filtro. Si no podés generar archivos descargables,
entregá el Resumen como tabla y cada pronóstico como CSV en un bloque de
código.
`})}),`
`,e.jsx(a.p,{children:`Cada regla numerada es una decisión de ingeniería de reservorios, no un truco de prompt: qué
meses valen, cuándo un salto parte la historia, cuánta historia pide un ajuste, cuándo decir que
no. Lo que en el laboratorio era una perilla acá es una regla escrita, auditable y repetible.`}),`
`,e.jsx(a.p,{children:`Cuando vuelva el resultado, las tres reglas del día siguen mandando. Pedí el conteo de filas.
Elegí un pozo que hayas ajustado a mano y compará qi y la declinación anual: son los mismos
datos, tienen que contar la misma historia. Y buscá la fila de YPF.St.SP.x-1: si el Excel le
inventa un EUR en lugar de decir "sin ajuste", el archivo entero pierde crédito.`}),`
`,e.jsx("div",{className:"callout",children:e.jsxs(a.p,{children:[e.jsx("strong",{children:"Si tu cuenta no genera archivos:"}),` no todos los chatbots gratuitos escriben un
Excel o una página interactiva. El prompt ya trae el plan B: las mismas tablas como CSV en
bloques de código, para pegar en tu planilla.`]})}),`
`,e.jsx(a.h3,{children:"El pronóstico oficial, con optimista y pesimista"}),`
`,e.jsxs(a.p,{children:[`En la sesión en vivo, el bloque de PDF extrae de la
`,e.jsx(a.a,{href:"https://www.ypfb.gob.bo/sites/default/files/2026-03/Presentacion.RPC%20Final%202025-versi%C3%B3n%2014-03-2026-OFICIAL-FINAL%20v8.pdf",children:"rendición de cuentas 2025 de YPFB"}),`
la producción fiscalizada de gas 2006–2025 y el pronóstico oficial 2026–2040 (página 8). Esa
misma página da para un ejercicio entero en una sola pasada: el prompt asume el PDF adjunto y
hace extracción y análisis juntos. La verificación no desaparece: la tabla extraída se muestra
antes del análisis, y ahí es donde mirás.`]}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-text",children:`Te subo la rendición pública de cuentas final 2025 de YPFB. En la página
8 hay un gráfico de barras con la producción fiscalizada de gas de
Bolivia 2006-2025 y el pronóstico oficial 2026-2040, en millones de
m³/día (MMmcd), promedios anuales, con cada valor rotulado.

1. Extraé las dos series completas del gráfico de la página 8 y
   mostralas como una tabla año-valor antes de seguir: la voy a
   verificar contra el original. No confundas la serie punteada de
   mercado interno con las barras de producción.
2. Identificá el año pico de la producción y ajustá una declinación
   exponencial al tramo que va del pico a 2025, sobre log(q). Informá
   la tasa anual.
3. Armá dos escenarios 2026-2040 arrancando del valor de 2025:
   - optimista: la tasa del punto 2, la declinación promedio de toda
     la ventana.
   - pesimista: la tasa de los últimos 3 años (2022 a 2025).
4. Graficá en semilog: historia, los dos escenarios y el pronóstico
   oficial extraído. ¿A cuál de los dos escenarios se parece el
   oficial?
5. Acumulá cada camino 2026-2040 y convertilo a TCF (1 TCF = 28.32
   Bcm). Compará con la reserva probada de gas que declara el mismo
   PDF: 3.7 TCF al 31/12/2025, página 10. ¿Qué escenario es
   consistente con qué reserva?
6. Mostrá el código y decime qué supuestos hiciste sin que te los pida.
`})}),`
`,e.jsxs(a.p,{children:[`Los números de control: el pico es 2014, con 59.3 millones de m³/día. La declinación promedio
del tramo 2014–2025 da 6.5% anual; la de los últimos 3 años, 12.7%. El pronóstico oficial
implica 11.5% anual: `,e.jsx(a.strong,{children:"va pegado al caso pesimista"}),`, no al promedio histórico. Las acumuladas
2026–2040 quedan en 3.2 TCF el optimista, 2.1 TCF el pesimista y 2.5 TCF el oficial, todas por
debajo de los 3.7 TCF de reserva probada del mismo documento: los tres caminos son consistentes
con la reserva, y ninguno la agota al 2040.`]}),`
`,e.jsx(a.p,{children:`Una advertencia que el gráfico no muestra: la serie nacional agrega campos, plantas y contratos,
y los envíos a la Argentina terminaron en 2024. La curva resume ese conjunto. Para explicar hay
que bajar al campo, que es lo que hiciste arriba con los 10 pozos.`}),`
`,e.jsx(a.h3,{children:"Para curiosos: cuando además hay presiones"}),`
`,e.jsxs(a.p,{children:[`Todo lo de arriba usa caudales solos, porque es lo que publica el Capítulo IV. Equinor liberó
los datos completos del campo Volve (Mar del Norte, 2008–2016) bajo una licencia abierta que
permite usarlos y compartirlos con crédito, y ahí está lo que acá falta:
`,e.jsx(a.a,{href:"https://www.equinor.com/energy/volve-data-sharing",children:`producción diaria con presión de fondo, presión de boca y horas en
línea`}),", pozo por pozo."]}),`
`,e.jsxs(a.p,{children:[`El dataset completo pide registro; para este ejercicio no hace falta. La planilla
`,e.jsx(a.a,{href:"descargas/volve_diario_2pozos.csv",children:"volve_diario_2pozos.csv"}),` trae el recorte listo: los dos
productores con mejor cobertura de presión, 15/9-F-14 (2008–2016) y 15/9-F-11 (2013–2016), día
por día. Datos del campo Volve de Equinor y los ex socios de la licencia (ExxonMobil Exploration
& Production Norway AS, Bayerngas Norge AS), compartidos acá bajo
`,e.jsx(a.a,{href:"https://cdn.equinor.com/files/h61q9gi9/global/de6532f6134b9a953f6c41bac47a0c055a3712d3.pdf",children:"sus términos"}),`:
usarlos y compartirlos con crédito está permitido; venderlos, no.`]}),`
`,e.jsx(a.p,{children:`Con ese archivo el pedido al chatbot ya no es aplicar Arps: es construir el diagnóstico que
Arps no puede dar. El prompt completo:`}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-text",children:`Te subo volve_diario_2pozos.csv: producción diaria real de dos pozos de
petróleo del campo Volve (Mar del Norte), una fila por pozo y día.
Columnas: fecha, pozo, horas_linea (horas en producción ese día),
p_fondo_bar (presión de fondo fluyente promedio), p_boca_bar (presión de
boca), oil_sm3, gas_sm3, agua_sm3 (volúmenes del día).

Antes de analizar: describí el archivo (filas y rango de fechas por pozo,
cobertura de presión de fondo) y esperá mi ok.

Reglas:
1. Día productivo: horas_linea > 0 y petróleo > 0. Normalizá los
   caudales a 24 horas en línea. Día de cierre: horas_linea = 0.
2. La presión de fondo de los días de cierre es tu proxy de presión de
   reservorio: descartá los ceros de sensor (< 50 bar), tomá la mediana
   mensual e interpolá los meses sin cierres. Graficala junto a la
   presión fluyente de los días productivos.
3. Armá series mensuales por pozo: caudal de petróleo, caudal de líquido,
   corte de agua, presión fluyente y proxy de reservorio.
4. Índice de productividad: PI = caudal de líquido / (pR − pwf), en los
   días que tienen las dos presiones. Seguilo en el tiempo.
5. Ajustá una curva de Arps al caudal de petróleo desde su pico, como
   referencia, e informá qi, Di, b y R².
6. El entregable central es un diagnóstico por pozo, en una tabla de
   cuatro filas: depresionamiento (¿pR cae?), pérdida de productividad
   (¿PI cae?), avance de agua (¿el corte sube?), manejo del drawdown
   (¿pR − pwf cae?). Cada fila con su evidencia numérica: valor al
   principio, valor al final.
7. Cerrá comparando: ¿qué acierta la Arps del punto 5 y qué no puede ver?
   ¿Qué habría pronosticado para 15/9-F-11 una Arps ajustada solo hasta
   fines de 2015, y qué pasó de verdad en 2016?

Mostrá el código y el conteo de filas después de cada filtro. Si no podés
generar archivos, las tablas van como CSV en bloques de código. Cerrá con
un gráfico de cuatro paneles por pozo: caudales y corte de agua,
presiones, PI, y el semilog con la Arps.
`})}),`
`,e.jsx(a.p,{children:`Lo que ese diagnóstico tiene que mostrar, para controlar al copiloto: la presión de reservorio
de los dos pozos no cae nunca (la inyección de agua la sostiene cerca de 300 bar), el índice de
productividad no se pierde, y el corte de agua sube de 8% a 94% en 15/9-F-14 y de 9% a 81% en
15/9-F-11. Mientras tanto una Arps ajusta el petróleo de 15/9-F-14 con R² de 0.96. La curva
describe la caída sin ver el mecanismo, y la meseta de 15/9-F-11 hasta 2015 no anuncia en nada
el barranco de 2016.`}),`
`,e.jsx(a.p,{children:`Sobre volumen mensual crudo este análisis es imposible. Con presiones diarias es una tarde de
trabajo con el copiloto, y es la diferencia entre extrapolar una curva y entender por qué
declina.`}),`
`,e.jsx(a.h2,{children:"En la sesión en vivo (2 h)"}),`
`,e.jsxs(a.table,{children:[e.jsx(a.thead,{children:e.jsxs(a.tr,{children:[e.jsx(a.th,{children:"Bloque"}),e.jsx(a.th,{children:"Tiempo"}),e.jsx(a.th,{children:"Qué hacemos"})]})}),e.jsxs(a.tbody,{children:[e.jsxs(a.tr,{children:[e.jsx(a.td,{children:"Apertura y entrada al sitio"}),e.jsx(a.td,{children:"5 min"}),e.jsx(a.td,{children:"El PIN de siempre y las ventanas del día"})]}),e.jsxs(a.tr,{children:[e.jsx(a.td,{children:"Repaso de la tarea"}),e.jsx(a.td,{children:"10 min"}),e.jsx(a.td,{children:"El antes y el después de sus prompts"})]}),e.jsxs(a.tr,{children:[e.jsx(a.td,{children:"La planilla y el copiloto"}),e.jsx(a.td,{children:"30 min"}),e.jsx(a.td,{children:"Subimos producción real del Capítulo IV, pedimos análisis y leemos el código juntos"})]}),e.jsxs(a.tr,{children:[e.jsx(a.td,{children:"De PDF a tabla"}),e.jsx(a.td,{children:"30 min"}),e.jsx(a.td,{children:"El pronóstico oficial de YPFB sacado de un PDF, verificado número por número entre todos"})]}),e.jsxs(a.tr,{children:[e.jsx(a.td,{children:"Declinación en vivo"}),e.jsx(a.td,{children:"25 min"}),e.jsx(a.td,{children:"Pozos reales de Salta: ajustamos entre todos y discutimos qué no dice la curva"})]}),e.jsxs(a.tr,{children:[e.jsx(a.td,{children:"Qué se puede afirmar"}),e.jsx(a.td,{children:"10 min"}),e.jsx(a.td,{children:"De los tres análisis: qué conclusión firmarías y cuál necesita más trabajo"})]}),e.jsxs(a.tr,{children:[e.jsx(a.td,{children:"Cierre y tarea"}),e.jsx(a.td,{children:"10 min"}),e.jsx(a.td,{children:"La tarea de la sesión 5"})]})]})]}),`
`,e.jsx(U,{data:"quiz_s4",sesion:4}),`
`,e.jsx(a.h2,{children:"Para discutir"}),`
`,e.jsxs(a.ol,{children:[`
`,e.jsx(a.li,{children:`¿Qué dato de tu área vive hoy atrapado en archivos PDF o en escaneos? ¿Cuánto valdría tenerlo en
una tabla, y quién lo usaría?`}),`
`,e.jsx(a.li,{children:`Cuando el chatbot escribe código de análisis: ¿revisás el código o el resultado? ¿Alcanza con uno
de los dos?`}),`
`,e.jsx(a.li,{children:`En el pozo que no ajusta con ningún parámetro: ¿qué información tenés vos que el modelo no puede
tener? Esa pregunta es el resumen del curso entero.`}),`
`]}),`
`,e.jsx(a.h2,{children:"Tarea para la sesión 5"}),`
`,e.jsx(a.p,{children:`Pensá en un conjunto de documentos de tu trabajo que consultás seguido y que no son confidenciales:
manuales, normas, procedimientos, instructivos. Anotá tres preguntas concretas que le harías a ese
conjunto si pudieras preguntarle en lugar de buscar. En la sesión 5 las vamos a usar.`})]})}function oe(l={}){const{wrapper:a}=l.components||{};return a?e.jsx(a,{...l,children:e.jsx(D,{...l})}):D(l)}export{oe as default};
