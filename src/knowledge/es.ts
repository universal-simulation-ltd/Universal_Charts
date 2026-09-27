import type { Article } from './types'

const articles: Article[] = [
  {
    id: 'choosing-a-chart',
    title: 'Cómo elegir el gráfico adecuado',
    summary: 'Cuál de los nueve tipos de gráfico se ajusta a sus datos, y por qué.',
    group: 'Lo básico',
    body: `Un buen gráfico responde a una sola pregunta de un vistazo. El tipo adecuado depende de lo que quiera que el lector note.

## Comparar cantidades

- **Bar** (barras) es la opción más segura para comparar cantidades entre categorías: ventas por región, votos por opción. Las personas juzgan con mucha precisión la longitud de las barras.
- **Horizontal bar** (barras horizontales) hace lo mismo y funciona mejor cuando los nombres de las categorías son largos o numerosos, porque las etiquetas tienen espacio para leerse.
- **Stacked bar** (barras apiladas) muestra cómo se compone cada total, por ejemplo las ventas por trimestre desglosadas por región. Los totales se comparan fácilmente; las partes situadas por encima de la primera, no tanto.

## Mostrar cambios a lo largo del tiempo

- **Line** (líneas) es la opción natural para cualquier cosa medida en secuencia, como meses o años. Varias líneas en un mismo gráfico permiten comparar tendencias.
- **Area** (áreas) es una línea con el espacio de debajo relleno. Destaca el volumen, pero las áreas que se solapan pueden taparse entre sí, así que limítese a unas pocas series.

## Mostrar las partes de un todo

- **Pie** (circular) y **Donut** (anillo) muestran cómo se reparte un total. Funcionan mejor con unas pocas porciones que sumen algo con sentido, como el 100 % de un presupuesto. Con muchas porciones parecidas, un gráfico de barras se lee mejor. Solo usan una serie de valores, y los valores negativos no pueden mostrarse como porciones.

## Otras formas

- **Scatter** (dispersión) sitúa un número frente a otro para mostrar si varían juntos, como la altura y el peso. Ambos ejes deben ser números.
- **Radar** compara varios elementos según el mismo conjunto de medidas, dispuestas en círculo. Es adecuado para pocos elementos y pocas medidas; con más, se vuelve difícil de leer.

## Algunos consejos generales

- Ponga al gráfico un título que diga lo que muestra.
- Use pocos colores, y muestre la leyenda solo cuando haya más de una serie.
- Las etiquetas de datos ayudan cuando importan los valores exactos; la cuadrícula ayuda cuando el lector va a estimar valores a simple vista.`,
  },
  {
    id: 'what-is-csv',
    title: 'Qué es realmente un CSV',
    summary: 'El sencillo formato de texto que hay detrás de casi todos los datos que se pueden representar.',
    group: 'Lo básico',
    body: `CSV son las siglas de comma-separated values, es decir, «valores separados por comas». Es una de las formas más antiguas y sencillas de guardar una tabla: texto sin formato, una fila por línea y una coma entre cada valor.

## Un ejemplo

Una pequeña tabla de ventas podría verse así en CSV:

Mes,Ventas

Ene,120

Feb,150

En un archivo real, cada fila ocupa su propia línea, sin líneas en blanco entre ellas. La primera línea es el **encabezado**: da nombre a cada columna. Cada línea posterior es una fila de datos, con sus valores en el mismo orden que el encabezado.

## Por qué está en todas partes

Como un CSV es solo texto, casi cualquier programa puede leerlo y escribirlo: hojas de cálculo, bases de datos, programas de contabilidad, herramientas de encuestas y muchos sitios web que ofrecen descargas. No tiene fuentes, colores, fórmulas ni varias hojas —solo los valores—, y eso es precisamente lo que lo hace tan fácil de pasar de un programa a otro.

## Algunas variantes que encontrará

- **Otros separadores.** Algunos programas usan punto y coma, tabulador o barra vertical en lugar de coma. El punto y coma es habitual en países donde la coma es el separador decimal, como España.
- **Comillas.** Un valor que contiene una coma, como un nombre escrito García, Ana, va entre comillas dobles para que la coma no se confunda con un separador.
- **Texto separado por tabuladores.** Cuando copia un bloque de celdas de una hoja de cálculo, normalmente llega al portapapeles como texto con un tabulador entre cada valor. Es lo bastante parecido a un CSV como para que Universal Charts también lo lea.

## Sacar un CSV de una hoja de cálculo

La mayoría de las hojas de cálculo pueden guardar o descargar una hoja como CSV, a menudo desde Guardar como o Descargar. Sin embargo, suele ser más rápido seleccionar las celdas que quiere, incluida la fila de encabezado, copiarlas y pegarlas directamente en Universal Charts.`,
  },
  {
    id: 'data-problems',
    title: 'Cuando sus datos no se ven bien',
    summary: 'Separadores, comas decimales, fechas y columnas que no se representan.',
    group: 'Cómo funciona',
    body: `Universal Charts lee la primera fila como los nombres de las columnas y deduce por sí mismo qué columnas contienen números. Cuando un gráfico se ve mal, la causa casi siempre es una de las siguientes.

## Una columna no aparece como valor

Una columna se considera numérica solo si **todas** sus celdas con contenido son números. Una sola entrada como n/d, pendiente o un guion convierte toda la columna en texto, y las columnas de texto solo pueden usarse como etiquetas. Borre o corrija la entrada que sobra y pulse **Update chart**. Las celdas vacías no son un problema.

Los símbolos de moneda (£, $ y €), los signos de porcentaje, los espacios y las comas se ignoran al leer los números, así que £1,200 y 45% se leen como 1200 y 45.

## Decimales escritos con coma

Como las comas dentro de los números se tratan como separadores de miles, una coma decimal se interpreta mal: 3,5 se convierte en 35. Si sus datos usan comas para los decimales, cámbielas por puntos antes de pegar y quite los puntos que se usen para separar los miles.

## Todo aparece en una sola columna

La aplicación detecta el separador por sí sola: reconoce comas, puntos y comas, tabuladores y barras verticales. Si aun así todo llega en una sola columna, compruebe que todas las filas usan el mismo separador y que la primera fila es realmente el encabezado.

## Un valor se parte en dos

En datos separados por comas, un valor que contenga una coma debe ir entre comillas dobles; si no, se leerá como dos valores y desplazará todo lo que viene después una columna.

## Fechas

Las fechas se leen como etiquetas, no como una línea de tiempo. Aparecen exactamente en el orden en que están en sus datos, así que ordene las filas por fecha antes de pegar y escriba todas las fechas de la misma forma. Los huecos no se rellenan: si falta un mes en sus datos, también falta en el gráfico.

## Columnas sin nombre

Si una celda del encabezado está vacía, la columna se llama Column 1, Column 2, etc., según su posición.

## El gráfico no cambia

Después de editar los datos, pulse **Update chart**. El gráfico solo se vuelve a dibujar a partir del texto cuando usted lo pide.`,
  },
  {
    id: 'how-it-works',
    title: 'Cómo funciona Universal Charts',
    summary: 'De los datos pegados a la imagen final, todo dentro de su navegador.',
    group: 'Cómo funciona',
    body: `Universal Charts convierte una tabla de números en un gráfico sin que sus datos se suban nunca. Todo ocurre dentro de su navegador, en su propio dispositivo.

## Crear un gráfico

1. Pegue sus datos en el cuadro Data, con los nombres de las columnas en la primera fila, y pulse **Update chart**. Si antes quiere probar, elija uno de los conjuntos de datos de ejemplo.
2. La aplicación propone un punto de partida: la primera columna con texto pasa a ser las categorías del eje X, y cada columna de números se convierte en una serie.
3. Elija un tipo de gráfico y cambie las columnas que se usan si lo necesita. Para un gráfico de dispersión, elija una columna de números para el eje X.
4. Añada un título, elija los colores y active o desactive la cuadrícula, la leyenda, las etiquetas de datos y las curvas suavizadas.

## Exportar

- **PNG** guarda una imagen del gráfico. Elija 1×, 2× o 3×: cuanto mayor sea el número, más nítida será la imagen y más ocupará el archivo. 2× sirve para la mayoría de documentos y presentaciones.
- **SVG** guarda el gráfico como dibujo vectorial, que se mantiene nítido a cualquier tamaño y puede editarse con programas de diseño.
- **Copy** pone un PNG del gráfico en el portapapeles, listo para pegarlo en un documento o un mensaje. Algunos navegadores no lo permiten; en ese caso, la aplicación se lo indica y puede descargar un PNG en su lugar.

Las exportaciones siempre tienen fondo blanco, incluso cuando la aplicación está en modo oscuro, para que un mismo gráfico se vea igual dondequiera que acabe.

## Conviene saber

- **Su trabajo no se guarda.** La aplicación no conserva ninguna copia de sus datos ni de su gráfico. Si recarga la página, vuelve a empezar con los datos de ejemplo. Conserve sus datos originales, o cree un enlace para compartir, si quizá quiera volver a un gráfico.
- **Funciona sin conexión.** Una vez cargada, la aplicación puede crear gráficos sin conexión a Internet, porque nada necesita un servidor.
- **¿Ha iniciado sesión con un Universal ID?** Si su organización ha definido un color de marca, este encabeza automáticamente la paleta de colores, algo oscurecido si hace falta para que destaque con claridad sobre el fondo blanco.`,
  },
  {
    id: 'privacy-and-sharing',
    title: 'Sus datos y los enlaces para compartir',
    summary: 'Qué se queda en su dispositivo y qué contiene un enlace para compartir.',
    group: 'Privacidad y seguridad',
    body: `Universal Charts no tiene un servidor propio al que enviar sus datos. Leer sus datos, dibujar el gráfico y generar la exportación son cosas que ocurren en su navegador, en su dispositivo.

## Qué se queda en su dispositivo

- Los datos que pega se leen en su navegador y nunca se suben.
- El gráfico se dibuja en su navegador.
- Los archivos PNG y SVG se crean en su navegador y se guardan directamente en su dispositivo.
- La aplicación no conserva sus datos cuando se va: no se guardan ni en el dispositivo ni en ningún otro sitio.

## Cómo funciona un enlace para compartir

**Share link** copia una dirección web que contiene el gráfico completo —su configuración **y todos sus datos**— comprimido dentro del propio enlace. La aplicación no guarda gráficos en ningún sitio: cuando alguien abre el enlace, su navegador reconstruye el gráfico solo a partir del enlace.

Esto tiene dos consecuencias que conviene entender:

- **El enlace son los datos.** Cualquiera que tenga el enlace puede ver todos los valores del gráfico, así que compártalo solo con personas que puedan ver esos datos. Además, los enlaces suelen quedarse guardados —en el historial del navegador, en chats y correos, y allí donde se reenvíen—, así que trate el enlace como trataría los propios datos.
- **Las tablas grandes generan enlaces largos.** El enlace crece con la cantidad de datos. Algunas aplicaciones y sitios web pueden cortar los enlaces muy largos, por lo que los enlaces para compartir son más adecuados para tablas pequeñas y medianas. Para una tabla grande, comparta mejor una imagen exportada.

## Universal ID

Iniciar sesión es opcional, y la aplicación funciona por completo sin hacerlo. Si ha iniciado sesión con un Universal ID, la aplicación lee el color de marca de su organización para poder usarlo en sus gráficos. Sus datos no forman parte de esa consulta, y la aplicación nunca escribe nada en su cuenta.`,
  },
]

export default articles
