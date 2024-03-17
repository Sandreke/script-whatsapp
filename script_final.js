async function enviarScript(scriptText) {
    const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
    main = document.querySelector("#main"),
        textarea = main.querySelector(`div[contenteditable="true"]`)

    if (!textarea) throw new Error("No hay una conversación abierta")

    for (const line of lines) {
        console.log(line)

        textarea.focus();
        document.execCommand('insertText', false, line);
        textarea.dispatchEvent(new Event('input', { bubbles: true }));

        await new Promise(resolve => setTimeout(resolve, 100));

        (main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();

        if (lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
    }

    return lines.length;
}

enviarScript(`*Hecho con ❤️ by Sandreke*

Tu casa suena como un tren a mediodía,
zumban las avispas, cantan las cacerolas,
la cascada enumera los hechos del rocío,
tu risa desarrolla su trino de palmera.
La luz azul del muro conversa con la piedra,
llega como un pastor silbando un telegrama
y entre las dos higueras de voz verde
Homero sube con zapatos sigilosos.
Sólo aquí la ciudad no tiene voz ni llanto,
ni sin fin, ni sonatas, ni labios, ni bocina
sino un discurso de cascada y de leones,
y tú que subes, cantas, corres, caminas, bajas,
plantas, coses, cocinas, clavas, escribes, vuelves,
o te has ido y se sabe que comenzó el invierno.

🌸

Me falta tiempo para celebrar tus cabellos.
Uno por uno debo contarlos y alabarlos:
otros amantes quieren vivir con ciertos ojos,
yo sólo quiero ser tu peluquero.
En Italia te bautizaron Medusa
por la encrespada y alta luz de tu cabellera.
Yo te llamo chascona mía y enmarañada:
mi corazón conoce las puertas de tu pelo.
Cuando tú te extravíes en tus propios cabellos,
no me olvides, acuérdate que te amo,
no me dejes perdido ir sin tu cabellera
por el mundo sombrío de todos los caminos
que sólo tiene sombra, transitorios dolores,
hasta que el sol sube a la torre de tu pelo.

💖

Amor, ahora nos vamos a la casa
donde la enredadera sube por las escalas:
antes que llegues tú llegó a tu dormitorio
el verano desnudo con pies de madreselva.
Nuestros besos errantes recorrieron el mundo:
Armenia, espesa gota de miel desenterrada,
Ceylán, paloma verde, y el Yang Tsé separando
con antigua paciencia los días de las noches.
Y ahora, bienamada, por el mar crepitante
volvemos como dos aves ciegas al muro,
al nido de la lejana primavera,
porque el amor no puede volar sin detenerse:
al muro o a las piedras del mar van nuestras vidas,
a nuestro territorio regresaron los besos.

🌺

Oh amor, oh rayo loco y amenaza purpúrea,
me visitas y subes por tu fresca escalera
el castillo que el tiempo coronó de neblinas,
las pálidas paredes del corazón cerrado.
Nadie sabrá que sólo fue la delicadeza
construyendo cristales duros como ciudades
y que la sangre abría túneles desdichados
sin que su monarquía derribara el invierno.
Por eso, amor, tu boca, tu piel, tu luz, tus penas,
fueron el patrimonio de la vida, los dones
sagrados de la lluvia, de la naturaleza
que recibe y levanta la gravidez del grano,
la tempestad secreta del vino en las bodegas,
la llamarada del cereal en el suelo.

😻

No te toque la noche ni el aire ni la aurora,
sólo la tierra, la virtud de los racimos,
las manzanas que crecen oyendo el agua pura,
el barro y las resinas de tu país fragante.
Desde Quinchamalí donde hicieron tus ojos
hasta tus pies creados para mí en la Frontera
eres la greda oscura que conozco:
en tus caderas toco de nuevo todo el trigo.
Tal vez tú no sabías, araucana,
que cuando antes de amarte me olvidé de tus besos
mi corazón quedó recordando tu boca
y fui como un herido por las calles
hasta que comprendí que había encontrado,
amor, mi territorio de besos y volcanes.

🌹

Tal vez herido voy sin ir sangriento
por uno de los rayos de tu vida
y a media selva me detiene el agua:
la lluvia que se cae con su cielo.
Entonces toco el corazón llovido:
allí sé que tus ojos penetraron
por la región extensa de mi duelo
y un susurro de sombra surge solo:
Quién es? Quién es? Pero no tuvo nombre
la hoja o el agua oscura que palpita
a media selva, sorda, en el camino,
y así, amor mío, supe que fui herido
y nadie hablaba allí sino la sombra,
la noche errante, el beso de la lluvia.

😍

Y esta palabra, este papel escrito
por las mil manos de una sola mano,
no queda en ti, no sirve para sueños,
cae a la tierra: allí se continúa.
No importa que la luz o la alabanza
se derramen y salgan de la copa
si fueron un tenaz temblor del vino,
si se tiñó tu boca de amaranto.
No quiere más la sílaba tardía,
lo que trae y retrae el arrecife
de mis recuerdos, la irritada espuma,
no quiere más sino escribir tu nombre.
Y aunque lo calle mi sombrío amor
más tarde lo dirá la primavera.

🌻

Es bueno, amor, sentirte cerca de mí en la noche,
invisible en tu sueño, seriamente nocturna,
mientras yo desenredo mis preocupaciones
como si fueran redes confundidas.
Ausente, por los sueños tu corazón navega,
pero tu cuerpo así abandonado respira
buscándome sin verme, completando mi sueño
como una planta que se duplica en la sombra.
Erguida, serás otra que vivirá mañana,
pero de las fronteras perdidas en la noche,
de este ser y no ser en que nos encontramos
algo queda acercándonos en la luz de la vida
como si el sello de la sombra señalara
con fuego sus secretas criaturas.

🥰

Acostúmbrate a ver detrás de mí la sombra
y que tus manos salgan del rencor, transparentes,
como si en la mañana del mar fueran creadas:
la sal te dio, amor mío, proporción cristalina.
La envidia sufre, muere, se agota con mi canto.
Uno a uno agonizan sus tristes capitanes.
Yo digo amor, y el mundo se puebla de palomas.
Cada sílaba mía trae la primavera.
Entonces tú, florida, corazón, bienamada,
sobre mis ojos como los follajes del cielo
eres, y yo te miro recostada en la tierra.
Veo el sol trasmigrar racimos a tu rostro,
mirando hacia la altura reconozco tus pasos.
Matilde, bienamada, diadema, bienvenida!

🌷

Ay de mí, ay de nosotros, bienamada,
sólo quisimos sólo amor, amarnos,
y entre tantos dolores se dispuso
sólo nosotros dos ser malheridos.
Quisimos el tú y yo para nosotros,
el tú del beso, el yo del pan secreto,
y así era todo, eternamente simple,
hasta que el odio entró por la ventana.
Odian los que no amaron nuestro amor,
ni ningún otro amor, desventurados
como las sillas de un salón perdido,
hasta que se enredaron en ceniza
y el rostro amenazante que tuvieron
se apagó en el crepúsculo apagado.

🌸

Mi fea, eres una castaña despeinada,
mi bella, eres hermosa como el viento,
mi fea, de tu boca se pueden hacer dos,
mi bella, son tus besos frescos como sandías.
Mi fea, dónde están escondidos tus senos?
Son mínimos como dos copas de trigo.
Me gustaría verte dos lunas en el pecho:
las gigantescas torres de tu soberanía.
Mi fea, el mar no tiene tus uñas en su tienda,
mi bella, flor a flor, estrella por estrella,
ola por ola, amor, he contado tu cuerpo:
mi fea, te amo por tu cintura de oro,
mi bella, te amo por una arruga en tu frente,
amor, te amo por clara y por oscura.

💖

Pensé morir, sentí de cerca el frío,
y de cuanto viví sólo a ti te dejaba:
tu boca eran mi día y mi noche terrestres
y tu piel la república fundada por mis besos.
En ese instante se terminaron los libros,
la amistad, los tesoros sin tregua acumulados,
la casa transparente que tú y yo construimos:
todo dejó de ser, menos tus ojos.
Porque el amor, mientras la vida nos acosa,
es simplemente una ola alta sobre las olas,
pero ay cuando la muerte viene a tocar a la puerta
hay sólo tu mirada para tanto vacío,
sólo tu claridad para no seguir siendo,
sólo tu amor para cerrar la sombra.

🌺

Espléndida razón, demonio claro
del racimo absoluto, del recto mediodía,
aquí estamos al fin, sin soledad y solos,
lejos del desvarío de la ciudad salvaje.
Cuando la línea pura rodea su paloma
y el fuego condecora la paz con su alimento
tú y yo erigimos este celeste resultado!
Razón y amor desnudos viven en esta casa.
Sueños furiosos, ríos de amarga certidumbre
decisiones más duras que el sueño de un martillo
cayeron en la doble copa de los amantes.
Hasta que en la balanza se elevaron, gemelos,
la razón y el amor como dos alas.
Así se construyó la transparencia.

😻

Por las montañas vas como viene la brisa
o la corriente brusca que baja de la nieve
o bien tu cabellera palpitante confirma
los altos ornamentos del sol en la espesura.
Toda la luz del Cáucaso cae sobre tu cuerpo
como en una pequeña vasija interminable
en que el agua se cambia de vestido y de canto
a cada movimiento transparente del río.
Por los montes el viejo camino de guerreros
y abajo enfurecida brilla como una espada
el agua entre murallas de manos minerales,
hasta que tú recibes de los bosques de pronto
el ramo o el relámpago de unas flores azules
y la insólita flecha de un aroma salvaje.

🌹

El mes de Marzo vuelve con su luz escondida
y se deslizan peces inmensos por el cielo,
vago vapor terrestre progresa sigiloso,
una por una caen al silencio las cosas.
Por suerte en esta crisis de atmósfera errabunda
reuniste las vidas del mar con las del fuego,
el movimiento gris de la nave de invierno,
la forma que el amor imprimió a la guitarra.
Oh amor, rosa mojada por sirenas y espumas,
fuego que baila y sube la invisible escalera
y despierta en el túnel del insomnio a la sangre
para que se consuman las olas en el cielo,
olvide el mar sus bienes y leones
y caiga el mundo adentro de las redes oscuras.

😍

La casa en la mañana con la verdad revuelta
de sábanas y plumas, el origen del día
sin dirección, errante como una pobre barca,
entre los horizontes del orden y del sueño.
Las cosas quieren arrastrar vestigios,
adherencias sin rumbo, herencias frías,
los papeles esconden vocales arrugadas
y en la botella el vino quiere seguir su ayer.
Ordenadora, pasas vibrando como abeja
tocando las regiones perdidas por la sombra,
conquistando la luz con tu blanca energía.
Y se construye entonces la claridad de nuevo:
obedecen las cosas al viento de la vida
y el orden establece su pan y su paloma.

🌻

Pobres poetas a quienes la vida y la muerte
persiguieron con la misma tenacidad sombría
y luego son cubiertos por impasible pompa
entregados al rito y al diente funerario.
Ellos -oscuros como piedrecitas- ahora
detrás de los caballos arrogantes, tendidos
van, gobernados al fin por los intrusos,
entre los edecanes, a dormir sin silencio.
Antes y ya seguros de que está muerto el muerto
hacen de las exequias un festín miserable
con pavos, puercos y otros oradores.
Acecharon su muerte y entonces la ofendieron:
sólo porque su boca está cerrada
y ya no puede contestar su canto.

🥰

Si alguna vez tu pecho se detiene,
si algo deja de andar ardiendo por tus venas,
si tu voz en tu boca se va sin ser palabra,
si tus manos se olvidan de volar y se duermen,
Matilde, amor, deja tus labios entreabiertos
porque ese último beso debe durar conmigo,
debe quedar inmóvil para siempre en tu boca
para que así también me acompañe en mi muerte.
Me moriré besando tu loca boca fría,
abrazando el racimo perdido de tu cuerpo,
y buscando la luz de tus ojos cerrados.
Y así cuando la tierra reciba nuestro abrazo
iremos confundidos en una sola muerte
a vivir para siempre la eternidad de un beso.

🌷

Mientras la magna espuma de Isla Negra,
la sal azul, el sol en las olas te mojan,
yo miro los trabajos de la avispa
empeñada en la miel de su universo.
Va y viene equilibrando su recto y rubio vuelo
como si deslizara de un alambre invisible
la elegancia del baile, la sed de su cintura,
y los asesinatos del aguijón maligno.
De petróleo y naranja es su arco iris,
busca como un avión entre la hierba,
con un rumor de espiga vuela, desaparece,
mientras que tú sales del mar, desnuda,
y regresas al mundo llena de sal y sol,
reverberante estatua y espada de la arena.

🌸

Recordarás aquella quebrada caprichosa
a donde los aromas palpitantes treparon,
de cuando en cuando un pájaro vestido
con agua y lentitud: traje de invierno.
Recordarás los dones de la tierra:
irascible fragancia, barro de oro,
hierbas del matorral, locas raíces,
sortílegas espinas como espadas.
Recordarás el ramo que trajiste,
ramo de sombra y agua con silencio,
ramo como una piedra con espuma.
Y aquella vez fue como nunca y siempre:
vamos allí donde no espera nada
y hallamos todo lo que está esperando.

💖

Amor mío, si muero y tú no mueres,
no demos al dolor más territorio:
amor mío, si mueres y no muero,
no hay extensión como la que vivimos.
Polvo en el trigo, arena en las arenas
el tiempo, el agua errante, el viento vago
nos llevó como grano navegante.
Pudimos no encontrarnos en el tiempo.
Esta pradera en que nos encontramos,
oh pequeño infinito! devolvemos.
Pero este amor, amor, no ha terminado,
y así como no tuvo nacimiento
no tiene muerte, es como un largo río,
sólo cambia de tierras y de labios.

🌺

Cuando yo muera quiero tus manos en mis ojos:
quiero la luz y el trigo de tus manos amadas
pasar una vez más sobre mí su frescura:
sentir la suavidad que cambió mi destino.
Quiero que vivas mientras yo, dormido, te espero,
quiero que tus oídos sigan oyendo el viento,
que huelas el aroma del mar que amamos juntos
y que sigas pisando la arena que pisamos.
Quiero que lo que amo siga vivo
y a ti te amé y canté sobre todas las cosas,
por eso sigue tú floreciendo, florida,
para que alcances todo lo que mi amor te ordena,
para que se pasee mi sombra por tu pelo,
para que así conozcan la razón de mi canto.

😻

Pero olvidé que tus manos satisfacían
las raíces, regando rosas enmarañadas,
hasta que florecieron tus huellas digitales
en la plenaria paz de la naturaleza.
El azadón y el agua como animales tuyos
te acompañan, mordiendo y lamiendo la tierra,
y es así cómo, trabajando, desprendes
fecundidad, fogosa frescura de claveles.
Amor y honor de abejas pido para tus manos
que en la tierra confunden su estirpe transparente,
y hasta en mi corazón abren su agricultura,
de tal modo que soy como piedra quemada
que de pronto, contigo, canta, porque recibe
el agua de los bosques por tu voz conducida.

🌹

Amor, amor, las nubes a la torre del cielo
subieron como triunfantes lavanderas,
y todo ardió en azul, todo fue estrella:
el mar, la nave, el día se desterraron juntos.
Ven a ver los cerezos del agua constelada
y la clave redonda del rápido universo,
ven a tocar el fuego del azul instantáneo,
ven antes de que sus pétalos se consuman.
No hay aquí sino luz, cantidades, racimos,
espacio abierto por las virtudes del viento
hasta entregar los últimos secretos de la espuma.
Y entre tantos azules celestes, sumergidos,
se pierden nuestros ojos adivinando apenas
los poderes del aire, las llaves submarinas.

😍

Oh Cruz del Sur, oh trébol de fósforo fragante,
con cuatro besos hoy penetró tu hermosura
y atravesó la sombra y mi sombrero:
la luna iba redonda por el frío.
Entonces con mi amor, con mi amada, oh diamantes
de escarcha azul, serenidad del cielo,
espejo, apareciste y se llenó la noche
con tus cuatro bodegas temblorosas de vino.
Oh palpitante plata de pez pulido y puro,
cruz verde, perejil de la sombra radiante,
luciérnaga a la unidad del cielo condenada,
descansa en mí, cerremos tus ojos y los míos.
Por un minuto duerme con la noche del hombre.
Enciende en mí tus cuatro números constelados.

🌻

Matilde, dónde estás? Noté, hacia abajo,
entre corbata y corazón, arriba,
cierta melancolía intercostal:
era que tú de pronto eras ausente.
Me hizo falta la luz de tu energía
y miré devorando la esperanza,
miré el vacío que es sin ti una casa,
no quedan sino trágicas ventanas.
De puro taciturno el techo escucha
caer antiguas lluvias deshojadas,
plumas, lo que la noche aprisionó:
y así te espero como casa sola
y volverás a verme y habitarme.
De otro modo me duelen las ventanas.

🥰

No tengo nunca más, no tengo siempre. En la arena
la victoria dejó sus pies perdidos.
Soy un pobre hombre dispuesto a amar a sus semejantes.
No sé quién eres. Te amo. No doy, no vendo espinas.
Alguien sabrá tal vez que no tejí coronas
sangrientas, que combatí la burla,
y que en verdad llené la pleamar de mi alma.
Yo pagué la vileza con palomas.
Yo no tengo jamás porque distinto
fui, soy, seré. Y en nombre
de mi cambiante amor proclamo la pureza.
La muerte es sólo piedra del olvido.
Te amo, beso en tu boca la alegría.
Traigamos leña. Haremos fuego en la montaña.

🌷

No estés lejos de mí un solo día, porque cómo,
porque, no sé decirlo, es largo el día,
y te estaré esperando como en las estaciones
cuando en alguna parte se durmieron los trenes.
No te vayas por una hora porque entonces
en esa hora se juntan las gotas del desvelo
y tal vez todo el humo que anda buscando casa
venga a matar aún mi corazón perdido.
Ay que no se quebrante tu silueta en la arena,
ay que no vuelen tus párpados en la ausencia:
no te vayas por un minuto, bienamada,
porque en ese minuto te habrás ido tan lejos
que yo cruzaré toda la tierra preguntando
si volverás o si me dejarás muriendo.

🌸

Mienten los que dijeron que yo perdí la luna,
los que profetizaron mi porvenir de arena,
aseveraron tantas cosas con lenguas frías:
quisieron prohibir la flor del universo.
«Ya no cantará más el ámbar insurgente
de la sirena, no tiene sino pueblo.»
Y masticaban sus incesantes papeles
patrocinando para mi guitarra el olvido.
Yo les lancé a los ojos las lanzas deslumbrantes
de nuestro amor clavando tu corazón y el mío,
yo reclamé el jazmín que dejaban tus huellas,
yo me perdí de noche sin luz bajo tus párpados
y cuando me envolvió la claridad
nací de nuevo, dueño de mi propia tiniebla.

💖

Amo el trozo de tierra que tú eres,
porque de las praderas planetarias
otra estrella no tengo. Tú repites
la multiplicación del universo.
Tus anchos ojos son la luz que tengo
de las constelaciones derrotadas,
tu piel palpita como los caminos
que recorre en la lluvia el meteoro.
De tanta luna fueron para mí tus caderas,
de todo el sol tu boca profunda y su delicia,
de tanta luz ardiente como miel en la sombra
tu corazón quemado por largos rayos rojos,
y así recorro el fuego de tu forma besándote,
pequeña y planetaria, paloma y geografía.

🌺

Con laureles del Sur y orégano de Lota
te corono, pequeña monarca de mis huesos,
y no puede faltarte esa corona
que elabora la tierra con bálsamo y follaje.
Eres, como el que te ama, de las provincias verdes:
de allá trajimos barro que nos corre en la sangre,
en la ciudad andamos, como tantos, perdidos,
temerosos de que cierren el mercado.
Bienamada, tu sombra tiene olor a ciruela,
tus ojos escondieron en el Sur sus raíces,
tu corazón es una paloma de alcancía,
tu cuerpo es liso como las piedras en el agua,
tus besos son racimos con rocío,
y yo a tu lado vivo con la tierra.

😻

Eres hija del mar y prima del orégano,
nadadora, tu cuerpo es de agua pura,
cocinera, tu sangre es tierra viva
y tus costumbres son floridas y terrestres.
Al agua van tus ojos y levantan las olas,
a la tierra tus manos y saltan las semillas,
en agua y tierra tienes propiedades profundas
que en ti se juntan como las leyes de la greda.
Náyade, corta tu cuerpo la turquesa
y luego resurrecto florece en la cocina
de tal modo que asumes cuanto existe
y al fin duermes rodeada por mis brazos que apartan
de la sormbra sombría, para que tú descanses,
legumbres, algas, hierbas: la espuma de tus sueños.

🌹

Cantas y a sol y a cielo con tu canto
tu voz desgrana el cereal del día,
hablan los pinos con su lengua verde:
trinan todas las aves del invierno.
El mar llena sus sótanos de pasos,
de campanas, cadenas y gemidos,
tintinean metales y utensilios,
suenan las ruedas de la caravana.
Pero sólo tu voz escucho y sube
tu voz con vuelo y precisión de flecha,
baja tu voz con gravedad de lluvia,
tu voz esparce altísimas espadas,
vuelve tu voz cargada de violetas
y luego me acompaña por el cielo.

😍

La gran lluvia del sur cae sobre Isla Negra
como una sola gota transparente y pesada,
el mar abre sus hojas frías y la recibe,
la tierra aprende el húmedo destino de una copa.
Alma mía, dame en tus besos el agua
salobre de estos mares, la miel del territorio,
la fragancia mojada por mil labios del cielo,
la paciencia sagrada del mar en el invierno.
Algo nos llama, todas las puertas se abren solas,
relata el agua un largo rumor a las ventanas,
crece el cielo hacia abajo tocando las raíces,
y así teje y desteje su red celeste el día
con tiempo, sal, susurros, crecimientos, caminos,
una mujer, un hombre, y el invierno en la tierra.

🌻

Cotapos dice que tu risa cae
como un halcón desde una brusca torre
y, es verdad, atraviesas el follaje del mundo
con un solo relámpago de tu estirpe celeste
que cae, y corta, y saltan las lenguas del rocío,
las aguas del diamante, la luz con sus abejas
y allí donde vivía con su barba el silencio
estallan las granadas del sol y las estrellas,
se viene abajo el cielo con la noche sombría,
arden a plena luna campanas y claveles,
y corren los caballos de los talabarteros:
porque tú siendo tan pequeñita como eres
dejas caer la risa desde tu meteoro
electrizando el nombre de la naturaleza.

🥰

Suave es la bella como si música y madera,
ágata, telas, trigo, duraznos transparentes,
hubieran erigido la fugitiva estatua.
Hacia la ola dirige su contraria frescura.
El mar moja bruñidos pies copiados
a la forma recién trabajada en la arena
y es ahora su fuego femenino de rosa
una sola burbuja que el sol y el mar combaten.
Ay, que nada te toque sino la sal del frío!
Que ni el amor destruya la primavera intacta.
Hermosa, reverbero de la indeleble espuma,
deja que tus caderas impongan en el agua
una medida nueva de cisne o de nenúfar
y navegue tu estatua por el cristal eterno.

🌷

Detrás de mí en la rama quiero verte.
Poco a poco te convertiste en fruto.
No te costó subir de las raíces
cantando con tu sílaba de savia.
Y aquí estarás primero en flor fragante,
en la estatua de un beso convertida,
hasta que sol y tierra, sangre y cielo,
te otorguen la delicia y la dulzura.
En la rama veré tu cabellera,
tu signo madurando en el follaje,
acercando las hojas a mi sed,
y llenará mi boca tu substancia,
el beso que subió desde la tierra
con tu sangre de fruta enamorada.

🌸

Aquí está el pan, el vino, la mesa, la morada:
el menester del hombre, la mujer y la vida:
a este sitio corría la paz vertiginosa,
por esta luz ardió la común quemadura.
Honor a tus dos manos que vuelan preparando
los blancos resultados del canto y la cocina,
salve! la integridad de tus pies corredores,
viva! la bailarina que baila con la escoba.
Aquellos bruscos ríos con aguas y amenazas,
aquel atormentado pabellón de la espuma,
aquellos incendiaron panales y arrecifes
son hoy este reposo de tu sangre en la mía,
este cauce estrellado y azul como la noche,
esta simplicidad sin fin de la ternura.

💖

Amor mío, al cerrar esta puerta nocturna
te pido, amor, un viaje por oscuro recinto:
cierra tus sueños, entra con tu cielo en mis ojos,
extiéndete en mi sangre como en un ancho río.
Adiós, adiós, cruel claridad que fue cayendo
en el saco de cada día del pasado,
adiós a cada rayo de reloj o naranja,
salud oh sombra, intermitente compañera!
En esta nave o agua o muerte o nueva vida,
una vez más unidos, dormidos, resurrectos,
somos el matrimonio de la noche en la sangre.
No sé quién vive o muere, quién reposa o despierta,
pero es tu corazón el que reparte
en mi pecho los dones de la aurora.

🌺

En medio de la tierra apartaré
las esmeraldas para divisarte
y tú estarás copiando las espigas
con una pluma de agua mensajera.
Qué mundo! Qué profundo perejil!
Qué nave navegando en la dulzura!
Y tú tal vez y yo tal vez topacio!
Ya no habrá división en las campanas.
Ya no habrá sino todo el aire libre,
las manzanas llevadas por el viento,
el suculento libro en la enramada,
y allí donde respiran los claveles
fundaremos un traje que resista
la eternidad de un beso victorioso.

😻

Corazón mío, reina del apio y de la artesa:
pequeña leoparda del hilo y la cebolla:
me gusta ver brillar tu imperio diminuto,
las armas de la cera, del vino, del aceite,
del ajo, de la tierra por tus manos abierta
de la sustancia azul encendida en tus manos,
de la transmigración del sueño a la ensalada,
del reptil enrollado en la manguera.
Tú con tu podadora levantando el perfume,
tú, con la dirección del jabón en la espuma,
tú, subiendo mis locas escalas y escaleras,
tú, manejando el síntoma de mi caligrafía
y encontrando en la arena del cuaderno
las letras extraviadas que buscaban tu boca.

🌹

Ya eres mía. Reposa con tu sueño en mi sueño.
Amor, dolor, trabajos, deben dormir ahora.
Gira la noche sobre sus invisibles ruedas
y junto a mí eres pura como el ámbar dormido.
Ninguna más, amor, dormirá con mis sueños.
Irás, iremos juntos por las aguas del tiempo.
Ninguna viajará por la sombra conmigo,
sólo tú, siempreviva, siempre sol, siempre luna.
Ya tus manos abrieron los puños delicados
y dejaron caer suaves signos sin rumbo,
tus ojos se cerraron como dos alas grises,
mientras yo sigo el agua que llevas y me lleva:
la noche, el mundo, el viento devanan su destino,
y ya no soy sin ti sino sólo tu sueño.

😍

Las tres aves del mar, tres rayos, tres tijeras
cruzaron por el cielo frío hacia Antofagasta,
por eso quedó el aire tembloroso,
todo tembló como bandera herida.
Soledad, dame el signo de tu incesante origen,
el apenas camino de los pájaros crueles,
y la palpitación que sin duda precede
a la miel, a la música, al mar, al nacimiento.
(Soledad sostenida por un constante rostro
como una grave flor sin cesar extendida
hasta abarcar la pura muchedumbre del cielo.)
Volaban alas frías del mar, del Archipiélago,
hacia la arena del Noroeste de Chile.
Y la noche cerró su celeste cerrojo.

🌻

Amor mío, el invierno regresa a sus cuarteles,
establece la tierra sus dones amarillos
y pasamos la mano sobre un país remoto,
sobre la cabellera de la geografía.
Irnos! Hoy! Adelante, ruedas, naves, campanas,
aviones acerados por el diurno infinito
hacia el olor nupcial del archipiélago,
por longitudinales harinas de usufructo!
Vamos, levántate, y endiadémate y sube
y baja y corre y trina con el aire y conmigo
vámonos a los trenes de Arabia o Tocopilla,
sin más que trasmigrar hacia el polen lejano,
a pueblos lancinantes de harapos y gardenias
gobernados por pobres monarcas sin zapatos.

🥰

Tal vez no ser es ser sin que tú seas,
sin que vayas cortando el mediodía
como una flor azul, sin que camines
más tarde por la niebla y los ladrillos,
sin esa luz que llevas en la mano
que tal vez otros no verán dorada,
que tal vez nadie supo que crecía
como el origen rojo de la rosa,
sin que seas, en fin, sin que vinieras
brusca, incitante, a conocer mi vida,
ráfaga de rosal, trigo del viento,
y desde entonces soy porque tú eres,
y desde entonces eres, soy y somos,
y por amor seré, serás, seremos.

🌷

No sólo por las tierras desiertas donde la piedra salina
es como la única rosa, la flor por el mar enterrada,
anduve, sino por la orilla de ríos que cortan la nieve.
Las amargas alturas de las cordilleras conocen mis pasos.
Enmarañada, silbante región de mi patria salvaje,
lianas cuyo beso mortal se encadena en la selva,
lamento mojado del ave que surge lanzando sus escalofríos,
oh región de perdidos dolores y llanto inclemente!
No sólo son míos la piel venenosa del cobre
o el salitre extendido como estatua yacente y nevada,
sino la viña, el cerezo premiado por la primavera,
son míos, y yo pertenezco como átomo negro
a las áridas tierras y a la luz del otoño en las uvas,
a esta patria metálica elevada por torres de nieve.

🌸

Desdichas del mes de Enero cuando el indiferente
mediodía establece su ecuación en el cielo,
un oro duro como el vino de una copa colmada
llena la tierra hasta sus límites azules.
Desdichas de este tiempo parecidas a uvas
pequeñas que agruparon verde amargo,
confusas, escondidas lágrimas de los días
hasta que la intemperie publicó sus racimos.
Sí, gérmenes, dolores, todo lo que palpita
aterrado, a la luz crepitante de Enero,
madurará, arderá como ardieron los frutos.
Divididos serán los pesares: el alma
dará un golpe de viento, y la morada
quedará limpia con el pan fresco en la mesa.

💖

A ti te hiere aquel que quiso hacerme daño,
y el golpe del veneno contra mí dirigido
como por una red pasa entre mis trabajos
y en ti deja una mancha de óxido y desvelo.
No quiero ver, amor, en la luna florida
de tu frente cruzar el odio que me acecha.
No quiero que en tu sueño deje el rencor ajeno
olvidada su inútil corona de cuchillos.
Donde voy van detrás de mí pasos amargos,
donde río una mueca de horror copia mi cara,
donde canto la envidia maldice, ríe y roe.
Y es ésa, amor, la sombra que la vida me ha dado:
es un traje vacío que me sigue cojeando
como un espantapájaros de sonrisa sangrienta.

🌺

Oh que todo el amor propague en mí su boca,
que no sufra un momento más sin primavera,
yo no vendí sino mis manos al dolor,
ahora, bienamada, déjame con tus besos.
Cubre la luz del mes abierto con tu aroma,
cierra las puertas con tu cabellera,
y en cuanto a mí no olvides que si despierto y lloro
es porque en sueños sólo soy un niño perdido
que busca entre las hojas de la noche tus manos,
el contacto del trigo que tú me comunicas,
un rapto centelleante de sombra y energía.
Oh, bienamada, y nada más que sombra
por donde me acompañes en tus sueños
y me digas la hora de la luz.

😻

Ésta es la casa, el mar y la bandera.
Errábamos por otros largos muros.
No hallábamos la puerta ni el sonido
desde la ausencia, como desde muertos.
Y al fin la casa abre su silencio,
entramos a pisar el abandono,
las ratas muertas, el adiós vacío,
el agua que lloró en las cañerías.
Lloró, lloró la casa noche y día,
gimió con las arañas, entreabierta,
se desgranó desde sus ojos negros,
y ahora de pronto la volvemos viva,
la poblamos y no nos reconoce:
tiene que florecer, y no se acuerda.

🌹

De las estrellas que admiré, mojadas
por ríos y rocíos diferentes,
yo no escogí sino la que yo amaba
y desde entonces duermo con la noche.
De la ola, una ola y otra ola,
verde mar, verde frío, rama verde,
yo no escogí sino una sola ola:
la ola indivisible de tu cuerpo.
Todas las gotas, todas las raíces,
todos los hilos de la luz vinieron,
me vinieron a ver tarde o temprano.
Yo quise para mí tu cabellera.
Y de todos los dones de mi patria
sólo escogí tu corazón salvaje.

😍

Fue luz el fuego y pan la luna rencorosa,
el jazmín duplicó su estrellado secreto,
y del terrible amor las suaves manos puras
dieron paz a mis ojos y sol a mis sentidos.
Oh amor, cómo de pronto, de las desgarraduras
hiciste el edificio de la dulce firmeza,
derrotaste las uñas malignas y celosas
y hoy frente al mundo somos como una sola vida.
Así fue, así es y así será hasta cuando,
salvaje y dulce amor, bienamada Matilde,
el tiempo nos señale la flor final del día.
Sin ti, sin mí, sin luz ya no seremos:
entonces más allá del la tierra y la sombra
el resplandor de nuestro amor seguirá vivo.

🌻

Del mar hacia las calles corre la vaga niebla
como el vapor de un buey enterrado en el frío,
y largas lenguas de agua se acumulan cubriendo
el mes que a nuestras vidas prometió ser celeste.
Adelantado otoño, panal silbante de hojas,
cuando sobre los pueblos palpita tu estandarte
cantan mujeres locas despidiendo a los ríos,
los caballos relinchan hacia la Patagonia.
Hay una enredadera vespertina en tu rostro
que crece silenciosa por el amor llevada
hasta las herraduras crepitantes del cielo.
Me inclino sobre el fuego de tu cuerpo nocturno
y no sólo tus senos amo sino el otoño
que esparce por la niebla su sangre ultramarina.

🥰

Quiénes se amaron como nosotros? Busquemos
las antiguas cenizas del corazón quemado
y allí que caigan uno por uno nuestros besos
hasta que resucite la flor deshabitada.
Amemos el amor que consumió su fruto
y descendió a la tierra con rostro y poderío:
tú y yo somos la luz que continúa,
su inquebrantable espiga delicada.
Al amor sepultado por tanto tiempo frío,
por nieve y primavera, por olvido y otoño,
acerquemos la luz de una nueva manzana,
de la frescura abierta por una nueva herida,
como el amor antiguo que camina en silencio
por una eternidad de bocas enterradas.

🌷

Tu risa pertenece a un árbol entreabierto
por un rayo, por un relámpago plateado
que desde el cielo cae quebrándose en la copa,
partiendo en dos el árbol con una sola espada.
Sólo en las tierras altas del follaje con nieve
nace una risa como la tuya, bienamante,
es la risa del aire desatado en la altura,
costumbres de araucaria, bienamada.
Cordillerana mía, chillaneja evidente,
corta con los cuchillos de tu risa la sombra,
la noche, la mañana, la miel del mediodía,
y que salten al cielo las aves del follaje
cuando como una luz derrochadora
rompe tu risa el árbol de la vida.

🌸

Ni el color de las dunas terribles en Iquique,
ni el estuario del Río Dulce de Guatemala,
cambiaron tu perfil conquistado en el trigo,
tu estilo de uva grande, tu boca de guitarra.
Oh corazón, oh mía desde todo el silencio,
desde las cumbres donde reinó la enredadera
hasta las desoladas planicies del platino,
en toda patria pura te repitió la tierra.
Pero ni huraña mano de montes minerales,
ni nieve tibetana, ni piedra de Polonia,
nada alteró tu forma de cereal viajero,
como si greda o trigo, guitarras o racimos
de Chillán defendieran en ti su territorio
imponiendo el mandato de la luna silvestre.

💖

Vienes de la pobreza de las casas del Sur,
de las regiones duras con frío y terremoto
que cuando hasta sus dioses rodaron a la muerte
nos dieron la lección de la vida en la greda.
Eres un caballito de greda negra, un beso
de barro oscuro, amor, amapola de greda,
paloma del crepúsculo que voló en los caminos,
alcancía con lágrimas de nuestra pobre infancia.
Muchacha, has conservado tu corazón de pobre,
tus pies de pobre acostumbrados a las piedras,
tu boca que no siempre tuvo pan o delicia.
Eres del pobre Sur, de donde viene mi alma:
en su cielo tu madre sigue lavando ropa
con mi madre. Por eso te escogí, compañera.

🌺

Amor, cuántos caminos hasta llegar a un beso,
qué soledad errante hasta tu compañía!
Siguen los trenes solos rodando con la lluvia.
En Taltal no amanece aún la primavera.
Pero tú y yo, amor mío, estamos juntos,
juntos desde la ropa a las raíces,
juntos de otoño, de agua, de caderas,
hasta ser sólo tú, sólo yo juntos.
Pensar que costó tantas piedras que lleva el río,
la desembocadura del agua de Boroa,
pensar que separados por trenes y naciones
tú y yo teníamos que simplemente amarnos,
con todos confundidos, con hombres y mujeres,
con la tierra que implanta y educa los claveles.

😻

De tanto amor mi vida se tiñó de violeta
y fui de rumbo en rumbo como las aves ciegas
hasta llegar a tu ventana, amiga mía:
tú sentiste un rumor de corazón quebrado
y allí de la tinieblas me levanté a tu pecho,
sin ser y sin saber fui a la torre del trigo,
surgí para vivir entre tus manos,
me levanté del mar a tu alegría.
Nadie puede contar lo que te debo, es lúcido
lo que te debo, amor, y es como una raíz
natal de Araucanía, lo que te debo, amada.
Es sin duda estrellado todo lo que te debo,
lo que te debo es como el pozo de una zona silvestre
en donde guardó el tiempo relámpagos errantes.

🌹

En los bosques, perdido, corté una rama oscura
y a los labios, sediento, levanté su susurro:
era tal vez la voz de la lluvia llorando,
una campana rota o un corazón cortado.
Algo que desde tan lejos me parecía
oculto gravemente, cubierto por la tierra,
un grito ensordecido por inmensos otoños,
por la entreabierta y húmeda tiniebla de las hojas.
Pero allí, despertando de los sueños del bosque,
la rama de avellano cantó bajo mi boca
y su errabundo olor trepó por mi criterio
como si me buscaran de pronto las raíces
que abandoné, la tierra perdida con mi infancia,
y me detuve herido por el aroma errante.

😍

Diego Rivera con la paciencia del oso
buscaba la esmeralda del bosque en la pintura
o el bermellón, la flor súbita de la sangre
recogía la luz del mundo en tu retrato.
Pintaba el imperioso traje de tu nariz,
la centella de tus pupilas desbocadas,
tus uñas que alimentan la envidia de la luna,
y en tu piel estival, tu boca de sandía.
Te puso dos cabezas de volcán encendidas
por fuego, por amor, por estirpe araucana,
y sobre los dos rostros dorados de la greda
te cubrió con el casco de un incendio bravío
y allí secretamente quedaron enredados
mis ojos en su torre total: tu cabellera.

🌻

Plena mujer, manzana carnal, luna caliente,
espeso aroma de algas, lodo y luz machacados,
qué oscura claridad se abre entre tus columnas?
Qué antigua noche el hombre toca con sus sentidos?
Ay, amar es un viaje con agua y con estrellas,
con aire ahogado y bruscas tempestades de harina:
amar es un combate de relámpagos
y dos cuerpos por una sola miel derrotados.
Beso a beso recorro tu pequeño infinito,
tus márgenes, tus ríos, tus pueblos diminutos,
y el fuego genital transformado en delicia
corre por los delgados caminos de la sangre
hasta precipitarse como un clavel nocturno,
hasta ser y no ser sino un rayo en la sombra.

🥰

Al golpe de la ola contra la piedra indócil
la claridad estalla y establece su rosa
y el círculo del mar se reduce a un racimo,
a una sola gota de sal azul que cae.
Oh radiante magnolia desatada en la espuma,
magnética viajera cuya muerte florece
y eternamente vuelve a ser y a no ser nada:
sal rota, deslumbrante movimiento marino.
Juntos tú y yo, amor mío, sellamos el silencio,
mientras destruye el mar sus constantes estatuas
y derrumba sus torres de arrebato y blancura,
porque en la trama de estos tejidos invisibles
del agua desbocada, de la incesante arena,
sostenemos la única y acosada ternura.

🌷

Hoy es hoy con el peso de todo el tiempo ido,
con las alas de todo lo que será mañana,
hoy es el Sur del mar, la vieja edad del agua
y la composición de un nuevo día.
A tu boca elevada a la luz o a la luna
se agregaron los pétalos de un día consumido,
y ayer viene trotando por su calle sombría
para que recordemos su rostro que se ha muerto.
Hoy, ayer y mañana se comen caminando,
consumimos un día como una vaca ardiente,
nuestro ganado espera con sus días contados,
pero en tu corazón el tiempo echó su harina,
mi amor construyó un horno con barro de Temuco:
tú eres el pan de cada día para mi alma.

🌸

La niña de madera no llegó caminando:
allí de pronto estuvo sentada en los ladrillos,
viejas flores del mar cubrían su cabeza,
su mirada tenía tristeza de raíces.
Allí quedó mirando nuestras vidas abiertas,
el ir y ser y andar y volver por la tierra,
el día destiñendo sus pétalos graduales.
Vigilaba sin vernos la niña de madera.
La niña coronada por las antiguas olas,
allí miraba con sus ojos derrotados:
sabía que vivimos en una red remota
de tiempo y agua y olas y sonidos y lluvia,
sin saber si existimos o si somos su sueño.
Ésta es la historia de la muchacha de madera.

💖

Desnuda eres tan simple como una de tus manos,
lisa, terrestre, mínima, redonda, transparente,
tienes líneas de luna, caminos de manzana,
desnuda eres delgada como el trigo desnudo.
Desnuda eres azul como la noche en Cuba,
tienes enredaderas y estrellas en el pelo,
desnuda eres enorme y amarilla
como el verano en una iglesia de oro.
Desnuda eres pequeña como una de tus uñas,
curva, sutil, rosada hasta que nace el día
y te metes en el subterráneo del mundo
como en un largo túnel de trajes y trabajos:
tu claridad se apaga, se viste, se deshoja
y otra vez vuelve a ser una mano desnuda.

🌺

Pienso, esta época en que tú me amaste
se irá por otra azul sustituida,
será otra piel sobre los mismos huesos,
otros ojos verán la primavera.
Nadie de los que ataron esta hora,
de los que conversaron con el humo,
gobiernos, traficantes, transeúntes,
continuarán moviéndose en sus hilos.
Se irán los crueles dioses con anteojos,
los peludos carnívoros con libro,
los pulgones y los pipipasseyros.
Y cuando esté recién lavado el mundo
nacerán otros ojos en el agua
y crecerá sin lágrimas el trigo.

😻

Un signo tuyo busco en todas las otras,
en el brusco, ondulante río de las mujeres,
trenzas, ojos apenas sumergidos,
pies claros que resbalan navegando en la espuma.
De pronto me parece que diviso tus uñas
oblongas, fugitivas, sobrinas de un cerezo,
y otra vez es tu pelo que pasa y me parece
ver arder en el agua tu retrato de hoguera.
Miré, pero ninguna llevaba tu latido,
tu luz, la greda oscura que trajiste del bosque,
ninguna tuvo tus diminutas orejas.
Tú eres total y breve, de todas eres una,
y así contigo voy recorriendo y amando
un ancho Mississippi de estuario femenino.

🌹

Radiantes días balanceados por el agua marina,
concentrados como el interior de una piedra amarilla
cuyo esplendor de miel no derribó el desorden:
preservó su pureza de rectángulo.
Crepita, sí, la hora como fuego o abejas
y es verde la tarea de sumergirse en hojas,
hasta que hacia la altura es el follaje
un mundo centelleante que se apaga y susurra.
Sed del fuego, abrasadora multitud del estío
que construye un Edén con unas cuantas hojas,
porque la tierra de rostro oscuro no quiere sufrimientos
sino frescura o fuego, agua o pan para todos,
y nada debería dividir a los hombres
sino el sol o la noche, la luna o las espigas.

😍

Cuántas veces, amor, te amé sin verte y tal vez sin recuerdo,
sin reconocer tu mirada, sin mirarte, centaura,
en regiones contrarias, en un mediodía quemante:
eras sólo el aroma de los cereales que amo.
Tal vez te vi, te supuse al pasar levantando una copa
en Angol, a la luz de la luna de Junio,
o eras tú la cintura de aquella guitarra
que toqué en las tinieblas y sonó como el mar desmedido.
Te amé sin que yo lo supiera, y busqué tu memoria.
En las casas vacías entré con linterna a robar tu retrato.
Pero yo ya sabía cómo era. De pronto
mientras ibas conmigo te toqué y se detuvo mi vida:
frente a mis ojos estabas, reinándome, y reinas.
Como hoguera en los bosques el fuego es tu reino.

🌻

Antes de amarte, amor, nada era mío:
vacilé por las calles y las cosas:
nada contaba ni tenía nombre:
el mundo era del aire que esperaba.
Yo conocí salones cenicientos,
túneles habitados por la luna,
hangares crueles que se despedían,
preguntas que insistían en la arena.
Todo estaba vacío, muerto y mudo,
caído, abandonado y decaído,
todo era inalienablemente ajeno,
todo era de los otros y de nadie,
hasta que tu belleza y tu pobreza
llenaron el otoño de regalos.

🥰

Recordarás tal vez aquel hombre afilado
que de la oscuridad salió como un cuchillo
y antes de que supiéramos, sabía:
vio el humo y decidió que venía del fuego.
La pálida mujer de cabellera negra
surgió como un pescado del abismo
y entre los dos alzaron en contra del amor
una máquina armada de dientes numerosos.
Hombre y mujer talaron montañas y jardines,
bajaron a los ríos, treparon por los muros,
subieron por los montes su atroz artillería.
El amor supo entonces que se llamaba amor.
Y cuando levanté mis ojos a tu nombre
tu corazón de pronto dispuso mi camino.

🌷

Desde hace mucho tiempo la tierra te conoce:
eres compacta como el pan o la madera,
eres cuerpo, racimo de segura substancia,
tienes peso de acacia, de legumbre dorada.
Sé que existes no sólo porque tus ojos vuelan
y dan luz a las cosas como ventana abierta,
sino porque de barro te hicieron y cocieron
en Chillán, en un horno de adobe estupefacto.
Los seres se derraman como aire o agua o frío
y vagos son, se borran al contacto del tiempo,
como si antes de muertos fueran desmenuzados.
Tú caerás conmigo como piedra en la tumba
y así por nuestro amor que no fue consumido
continuará viviendo con nosotros la tierra.

🌸

Aspero amor, violeta coronada de espinas,
matorral entre tantas pasiones erizado,
lanza de los dolores, corola de la cólera,
por qué caminos y cómo te dirigiste a mi alma?
Por qué precipitaste tu fuego doloroso,
de pronto, entre las hojas frías de mi camino?
Quién te enseñó los pasos que hasta mí te llevaron?
Qué flor, qué piedra, qué humo mostraron mi morada?
Lo cierto es que tembló la noche pavorosa,
el alba llenó todas las copas con su vino
y el sol estableció su presencia celeste,
mientras que el cruel amor me cercaba sin tregua
hasta que lacerándome con espadas y espinas
abrió en mi corazón un camino quemante.

💖

Dos amantes dichosos hacen un solo pan,
una sola gota de luna en la hierba,
dejan andando dos sombras que se reúnen,
dejan un solo sol vacío en una cama.
De todas las verdades escogieron el día:
no se ataron con hilos sino con un aroma,
y no despedazaron la paz ni las palabras.
La dicha es una torre transparente.
El aire, el vino van con los dos amantes,
la noche les regala sus pétalos dichosos,
tienen derecho a todos los claveles.
Dos amantes dichosos no tienen fin ni muerte,
nacen y mueren muchas veces mientras viven,
tienen la eternidad de la naturaleza.

🌺

"Vendrás conmigo" dije -sin que nadie supiera
dónde y cómo latía mi estado doloroso,
y para mí no había clavel ni barcarola,
nada sino una herida por el amor abierta.
Repetí: ven conmigo, como si me muriera,
y nadie vio en mi boca la luna que sangraba,
nadie vio aquella sangre que subía al silencio.
Oh amor ahora olvidemos la estrella con espinas!
Por eso cuando oí que tu voz repetía
"Vendrás conmigo" -fue como si desataras
dolor, amor, la furia del vino encarcelado
que desde su bodega sumergida subiera
y otra vez en mi boca sentí un sabor de llama,
de sangre y de claveles, de piedra y quemadura.

😻

Es hoy: todo el ayer se fue cayendo
entre dedos de luz y ojos de sueño,
mañana llegará con pasos verdes:
nadie detiene el río de la aurora.
Nadie detiene el río de tus manos,
los ojos de tu sueño, bienamada,
eres temblor del tiempo que transcurre
entre luz vertical y sol sombrío,
y el cielo cierra sobre ti sus alas
llevándote y trayéndote a mis brazos
con puntual, misteriosa cortesía:
Por eso canto al día y a la luna,
al mar, al tiempo, a todos los planetas,
a tu voz diurna y a tu piel nocturna.

🌹

Suave es la bella como si música y madera,
ágata, telas, trigo, duraznos transparentes,
hubieran erigido la fugitiva estatua.
Hacia la ola dirige su contraria frescura.
El mar moja bruñidos pies copiados
a la forma recién trabajada en la arena
y es ahora su fuego femenino de rosa
una sola burbuja que el sol y el mar combaten.
Ay, que nada te toque sino la sal del frío!
Que ni el amor destruya la primavera intacta.
Hermosa, reverbero de la indeleble espuma,
deja que tus caderas impongan en el agua
una medida nueva de cisne o de nenúfar
y navegue tu estatua por el cristal eterno.

😍

Sabrás que no te amo y que te amo
puesto que de dos modos es la vida,
la palabra es un ala del silencio,
el fuego tiene una mitad de frío.
Yo te amo para comenzar a amarte,
para recomenzar el infinito
y para no dejar de amarte nunca:
por eso no te amo todavía.
Te amo y no te amo como si tuviera
en mis manos las llaves de la dicha
y un incierto destino desdichado.
Mi amor tiene dos vidas para armarte.
Por eso te amo cuando no te amo
y por eso te amo cuando te amo.

🌻

No te amo como si fueras rosa de sal, topacio
o flecha de claveles que propagan el fuego:
te amo como se aman ciertas cosas oscuras,
secretamente, entre la sombra y el alma.
Te amo como la planta que no florece y lleva
dentro de sí, escondida, la luz de aquellas flores,
y gracias a tu amor vive oscuro en mi cuerpo
el apretado aroma que ascendió de la tierra.
Te amo sin saber cómo, ni cuándo, ni de dónde,
te amo directamente sin problemas ni orgullo:
así te amo porque no sé amar de otra manera,
sino así de este modo en que no soy ni eres,
tan cerca que tu mano sobre mi pecho es mía,
tan cerca que se cierran tus ojos con mi sueño.

🥰

Amor, de grano a grano, de planeta a planeta,
la red del viento con sus países sombríos,
la guerra con sus zapatos de sangre,
o bien el día y la noche de la espiga.
Por donde fuimos, islas o puentes o banderas,
violines del fugaz otoño acribillado,
repitió la alegría los labios de la copa,
el dolor nos detuvo con su lección de llanto.
En todas las repúblicas desarrollaba el viento
su pabellón impune, su glacial cabellera
y luego regresaba la flor a sus trabajos.
Pero en nosotros nunca se calcinó el otoño.
Y en nuestra patria inmóvil germinaba y crecía
el amor con los derechos del rocío.

🌷

Hay que volar en este tiempo, a dónde?
Sin alas, sin avión, volar sin duda:
ya los pasos pasaron sin remedio,
no elevaron los pies del pasajero.
Hay que volar a cada instante como
las águilas, las moscas y los días,
hay que vencer los ojos de Saturno
y establecer allí nuevas campanas.
Ya no bastan zapatos ni caminos,
ya no sirve la tierra a los errantes,
ya cruzaron la noche las raíces,
y tú aparecerás en otra estrella
determinadamente transitoria
convertida por fin en amapola.

🌸

Otros días vendrán, será entendido
el silencio de plantas y planetas
y cuántas cosas puras pasarán!
Tendrán olor a luna los violines!
El pan será tal vez como tú eres:
tendrá tu voz, tu condición de trigo,
y hablarán otras cosas con tu voz:
los caballos perdidos del Otoño.
Aunque no sea como está dispuesto
el amor llenará grandes barricas
como la antigua miel de los pastores,
y tú en el polvo de mi corazón
(en donde habrán inmensos almacenes)
irás y volverás entre sandías.

💖

La edad nos cubre como la llovizna,
interminable y árido es el tiempo,
una pluma de sal toca tu rostro,
una gotera carcomió mi traje:
el tiempo no distingue entre mis manos
o un vuelo de naranjas en las tuyas:
pica con nieve y azadón la vida:
la vida tuya que es la vida mía.
La vida mía que te di se llena
de años, como el volumen de un racimo.
Regresarán las uvas a la tierra.
Y aún allá abajo el tiempo sigue siendo,
esperando, lloviendo sobre el polvo,
ávido de borrar hasta la ausencia.

🌺

El camino mojado por el agua de Agosto
brilla como si fuera cortado en plena luna,
en plena claridad de la manzana,
en mitad de la fruta del otoño.
Neblina, espacio o cielo, la vaga red del día
crece con fríos sueños, sonidos y pescados,
el vapor de las islas combate la comarca,
palpita el mar sobre la luz de Chile.
Todo se reconcentra como el metal, se esconden
las hojas, el invierno enmascara su estirpe
y sólo ciegos somos, sin cesar, solamente.
Solamente sujetos al cauce sigiloso
del movimiento, adiós, del viaje, del camino:
adiós, caen las lágrimas de la naturaleza.

😻

Entre los espadones de fierro literario
paso yo como un marinero remoto
que no conoce las esquinas y que canta
porque sí, porque cómo si no fuera por eso.
De los atormentados archipiélagos traje
mi acordeón con borrascas, rachas de lluvia loca,
y una costumbre lenta de cosas naturales:
ellas determinaron mi corazón silvestre.
Así cuando los dientes de la literatura
trataron de morder mis honrados talones,
yo pasé, sin saber, cantando con el viento
hacia los almacenes lluviosos de mi infancia,
hacia los bosques fríos del Sur indefinible,
hacia donde mi vida se llenó con tu aroma.

🌹

Si no fuera porque tus ojos tienen color de luna,
de día con arcilla, con trabajo, con fuego,
y aprisionada tienes la agilidad del aire,
si no fuera porque eres una semana de ámbar,
si no fuera porque eres el momento amarillo
en que el otoño sube por las enredaderas
y eres aún el pan que la luna fragante
elabora paseando su harina por el cielo,
oh, bienamada, yo no te amaría!
En tu abrazo yo abrazo lo que existe,
la arena, el tiempo, el árbol de la lluvia,
y todo vive para que yo viva:
sin ir tan lejos puedo verlo todo:
veo en tu vida todo lo viviente.

😍

No te quiero sino porque te quiero
y de quererte a no quererte llego
y de esperarte cuando no te espero
pasa mi corazón del frío al fuego.
Te quiero sólo porque a ti te quiero,
te odio sin fin, y odiándote te ruego,
y la medida de mi amor viajero
es no verte y amarte como un ciego.
Tal vez consumirá la luz de Enero,
su rayo cruel, mi corazón entero,
robándome la llave del sosiego.
En esta historia sólo yo me muero
y moriré de amor porque te quiero,
porque te quiero, amor, a sangre y fuego.

🌻

De noche, amada, amarra tu corazón al mío
y que ellos en el sueño derroten las tinieblas
como un doble tambor combatiendo en el bosque
contra el espeso muro de las hojas mojadas.
Nocturna travesía, brasa negra del sueño
interceptando el hilo de las uvas terrestres
con la puntualidad de un tren descabellado
que sombra y piedras frías sin cesar arrastrara.
Por eso, amor, amárrame el movimiento puro,
a la tenacidad que en tu pecho golpea
con las alas de un cisne sumergido,
para que a las preguntas estrelladas del cielo
responda nuestro sueño con una sola llave,
con una sola puerta cerrada por la sombra.

🥰

Una vez más, amor, la red del día extingue
trabajos, ruedas, fuegos, estertores, adioses,
y a la noche entregamos el trigo vacilante
que el mediodía obtuvo de la luz y la tierra.
Sólo la luna en medio de su página pura
sostiene las columnas del estuario del cielo,
la habitación adopta la lentitud del oro
y van y van tus manos preparando la noche.
Oh amor, oh noche, oh cúpula cerrada por un río
de impenetrables aguas en la sombra del cielo
que destaca y sumerge sus uvas tempestuosas,
hasta que sólo somos un solo espacio oscuro,
una copa en que cae la ceniza celeste,
una gota en el pulso de un lento y largo río.

🌷

Era verde el silencio, mojada era la luz,
temblaba el mes de Junio como una mariposa
y en el austral dominio, desde el mar y las piedras,
Matilde, atravesaste el mediodía.
Ibas cargada de flores ferruginosas,
algas que el viento sur atormenta y olvida,
aún blancas, agrietadas por la sal devorante,
tus manos levantaban las espigas de arena.
Amo tus dones puros, tu piel de piedra intacta,
tus uñas ofrecidas en el sol de tus dedos,
tu boca derramada por toda la alegría,
pero, para mi casa vecina del abismo,
dame el atormentado sistema del silencio,
el pabellón del mar olvidado en la arena.

🌸

Matilde, nombre de planta o piedra o vino,
de lo que nace de la tierra y dura,
palabra en cuyo crecimiento amanece,
en cuyo estío estalla la luz de los limones.
En ese nombre corren navíos de madera
rodeados por enjambres de fuego azul marino,
y esas letras son el agua de un río
que desemboca en mi corazón calcinado.
Oh nombre descubierto bajo una enredadera
como la puerta de un túnel desconocido
que comunica con la fragancia del mundo!
Oh invádeme con tu boca abrasadora,
indágame, si quieres, con tus ojos nocturnos,
pero en tu nombre déjame navegar y dormir.

💖

De viajes y dolores yo regresé, amor mío,
a tu voz, a tu mano volando en la guitarra,
al fuego que interrumpe con besos el otoño,
a la circulación de la noche en el cielo.
Para todos los hombres pido pan y reinado,
pido tierra para el labrador sin ventura,
que nadie espere tregua de mi sangre o mi canto.
Pero a tu amor no puedo renunciar sin morirme.
Por eso toca el vals de la serena luna,
la barcarola en el agua de la guitarra
hasta que se doblegue mi cabeza soñando:
que todos los desvelos de mi vida tejieron
esta enramada en donde tu mano vive y vuela
custodiando la noche del viajero dormido.

🌺

Trajo el amor su cola de dolores,
su largo rayo estático de espinas
y cerramos los ojos porque nada,
porque ninguna herida nos separe.
No es culpa de tus ojos este llanto:
tus manos no clavaron esta espada:
no buscaron tus pies este camino:
llegó a tu corazón la miel sombría.
Cuando el amor como una inmensa ola
nos estrelló contra la piedra dura,
nos amasó con una sola harina,
cayó el dolor sobre otro dulce rostro
y así en la luz de la estación abierta
se consagró la primavera herida.

😻

Tu mano fue volando de mis ojos al día.
Entró la luz como un rosal abierto.
Arena y cielo palpitaban como una
culminante colmena cortada en las turquesas.
Tu mano tocó sílabas que tintineaban, copas,
alcuzas con aceites amarillos,
corolas, manantiales y, sobre todo, amor,
amor: tu mano pura preservó las cucharas.
La tarde fue. La noche deslizó sigilosa
sobre el sueño del hombre su cápsula celeste.
Un triste olor salvaje soltó la madreselva.
Y tu mano volvió de su vuelo volando
a cerrar su plumaje que yo creí perdido
sobre mis ojos devorados por la sombra.

🌹

Si muero sobrevíveme con tanta fuerza pura
que despiertes la furia del pálido y del frío,
de sur a sur levanta tus ojos indelebles,
de sol a sol que suene tu boca de guitarra.
No quiero que vacilen tu risa ni tus pasos,
no quiero que se muera mi herencia de alegría,
no llames a mi pecho, estoy ausente.
Vive en mi ausencia como en una casa.
Es una casa tan grande la ausencia
que pasarás en ella a través de los muros
y colgarás los cuadros en el aire.
Es una casa tan transparente la ausencia
que yo sin vida te veré vivir
y si sufres, mi amor, me moriré otra vez.

😍

La luz que de tus pies sube a tu cabellera,
la turgencia que envuelve tu forma delicada,
no es de nácar marino, nunca de plata fría:
eres de pan, de pan amado por el fuego.
La harina levantó su granero contigo
y creció incrementada por la edad venturosa,
cuando los cereales duplicaron tu pecho
mi amor era el carbón trabajando en la tierra.
Oh, pan tu frente, pan tus piernas, pan tu boca,
pan que devoro y nace con luz cada mañana,
bienamada, bandera de las panaderías,
una lección de sangre te dio el fuego,
de la harina aprendiste a ser sagrada,
y del pan el idioma y el aroma.

🌻

De pena en pena cruza sus islas el amor
y establece raíces que luego riega el llanto,
y nadie puede, nadie puede evadir los pasos
del corazón que corre callado y carnicero.
Así tú y yo buscamos un hueco, otro planeta
en donde no tocara la sal tu cabellera,
en donde no crecieran dolores por mi culpa,
en donde viva el pan sin agonía.
Un planeta enredado por distancia y follajes,
un páramo, una piedra cruel y deshabitada,
con nuestras propias manos hacer un nido duro,
queríamos, sin daño ni herida ni palabra,
y no fue así el amor, sino una ciudad loca
donde la gente palidece en los balcones.

🥰

Espinas, vidrios rotos, enfermedades, llanto
asedian día y noche la miel de los felices
y no sirve la torre, ni el viaje, ni los muros:
la desdicha atraviesa la paz de los dormidos,
el dolor sube y baja y acerca sus cucharas
y no hay hombre sin este movimiento,
no hay natalicio, no hay techo ni cercado:
hay que tomar en cuenta este atributo.
Y en el amor no valen tampoco ojos cerrados,
profundos lechos lejos del pestilente herido,
o del que paso a paso conquista su bandera.
Porque la vida pega como cólera o río
y abre un túnel sangriento por donde nos vigilan
los ojos de una inmensa familia de dolores.

🌷

Tienes del archipiélago las hebras del alerce,
la carne trabajada por los siglos del tiempo,
venas que conocieron el mar de las maderas,
sangre verde caída del cielo a la memoria.
Nadie recogerá mi corazón perdido
entre tantas raíces, en la amarga frescura
del sol multiplicado por la furia del agua,
allí vive la sombra que no viaja conmigo.
Por eso tú saliste del Sur como una isla
poblada y coronada por plumas y maderas
y yo sentí el aroma de los bosques errantes,
hallé la miel oscura que conocí en la selva,
y toqué en tus caderas los pétalos sombríos
que nacieron conmigo y construyeron mi alma.

🌸

`).then(e => console.log(`Código finalizado, ${e} mensajes enviados`)).catch(console.error)