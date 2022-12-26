/* Esta línea establece una variable llamada "projectName" con el valor "random-quote-machine". */
const projectName = 'maquina-de-citas-aleatorias'; 
let quotesData;

/*
  Code by Gabriel Nunes
  Modified by Todd Chaffee to use Camper gist for JSON Quote data.
*/

/* Arreglo de colores pastel */
var colors = [
  '#945344', // Café
  '#6C4F3C', // Marrón
  '#CA7A3F', // Naranja
  '#A7B977', // Verde lima
  '#7B9CB9', // Azul cielo
  '#8C6B99', // Púrpura
  '#F7C5B6', // Rosa pálido
  '#A6A6A6', // Gris claro
  '#FFD88F', // Amarillo limón
  '#5F9EA0', // Turquesa
  '#8BBF9F', // Verde claro
  '#F1AA8D'  // Salmón
];

/* Estas variables se usarán para mostrar la cita y el autor en una aplicación web o en una aplicación móvil. */
var currentQuote = '', currentAuthor = '';

//1. creamos una funcion getQuotes
function getQuotes() {
  //2. Esta funcion usa una llamada Ajax con una url para obtener el archivo json, que contiene las citas
  return $.ajax({
    headers: {
      //3. La funcion Ajax recibe una cabecera Accept con el valor 'application / json'
      Accept: 'application/json'
    },
    //4. El Ajax tambien recibe una URL para obtener el archivo json de las citas
    url: 'https://gist.githubusercontent.com/kurganpsp/b014c34993b2411c3b754893fbdc22bc/raw/dd38ceb4c3f1f4e964c2feab65eef08e78d0e542/quotes.json',
    //5. Si la llamada Ajax es exitosa, se ejecuta la funcion de éxito, que recibe el archivo json de la cita
    success: function (jsonQuotes) {
      //6. La función de éxito comprueba si el archivo json de la cita es una cadena y, de ser así, lo convierte en un objeto de JavaScript
      if (typeof jsonQuotes === 'string') {        
        //7. El objeto de JavaScript se guarda en una variable llamada QuotesData
        quotesData = JSON.parse(jsonQuotes);
        console.log('quotesData');
        console.log(quotesData);
      }
    }
  });
}

//definimos una función llamada getRandomQuote
function getRandomQuote() {
  //esta función nos devolverá una cita aleatoria de nuestro objeto "quotesData.quotes"
  return quotesData.quotes[
    // para retornar este objeto en particular se hace uso de la funcion math.random para generar un numero aleatorio entre 0 
    // y la longitud del arreglo quotesData que es quotesData.quotes.length 
    Math.floor(Math.random() * quotesData.quotes.length)
  ];
}

function getQuote() {
  let randomQuote = getRandomQuote();

  currentQuote = randomQuote.quote;
  currentAuthor = randomQuote.author;

  // #10: Puedo tuitear la frase actual haciendo clic en #tweet-quote del elemento a. Este elemento a debe incluir la ruta "twitter.com/intent/tweet" en su atributo href para tuitear la frase actual.  
  $('#tweet-quote').attr( //obtenemos el elemento con el id "tweet-quote"
    'href', //cambiamos el atributo "href" del elemento "tweet-quote" para que apunte a la nueva direccion
    'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + //creamos una variable de la direccion
      encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)   //añadimos la cita y el autor a la direccion
  );

  // 1. Usamos el método de jQuery 'attr()' para modificar el atributo 'href' del elemento con el id 'tumblr-quote'.
  $('#tumblr-quote').attr(
    'href',
    'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' +
      encodeURIComponent(currentAuthor) +
      '&content=' +
      encodeURIComponent(currentQuote) +
      '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'
  );
  
  // Primero, selecciona el elemento con la clase "quote-text" usando el selector de jQuery y almacénalo en una variable.
  $('.quote-text').animate({ opacity: 0 }, 500, function () { // Luego, use la función animate () de jQuery para animar el elemento seleccionado, reduciendo su opacidad a 0 en un lapso de 500 milisegundos.
    $(this).animate({ opacity: 1 }, 800); // Después de la animación, use una función de devolución de llamada para ejecutar otra animación, aumentando la opacidad del elemento seleccionado a 1 en un lapso de 800 milisegundos.
    $('#text').text(randomQuote.quote); // Finalmente, use el método text () de jQuery para establecer el texto del elemento con el ID "text" en una cita aleatoria.
  });

  // Seleccionamos el elemento con la clase .quote-author.
  $('.quote-author').animate({ opacity: 0 }, 500, function () { //  Usamos la función animate() para animar el elemento seleccionado. Establecemos una opacidad de 0 en 500 milisegundos.
    // Utilizamos una función de devolución de llamada para ejecutar algo una vez que la primera animación se haya completado.
    $(this).animate({ opacity: 1 }, 6666); // Dentro de la función de devolución de llamada, usamos la función animate() de nuevo para aumentar la opacidad del elemento a 1 en 6666 milisegundos.
    $('#author').html(randomQuote.author); // Finalmente, usamos la función html() para actualizar el contenido del elemento con el autor de la cita aleatoria.
  });

  // Creamos una variable llamada "color" que generará un número aleatorio entre 0 y el tamaño del arreglo de colores.
  var color = Math.floor(Math.random() * colors.length);
  // Utilizamos la función de animación de jQuery para cambiar el fondo y el color de texto a los valores obtenidos 
  // del arreglo de colores usando el número aleatorio generado en el paso anterior. 
  // Seleccionamos el elemento html body con el método de jQuery $().
  $('html body').animate( // Utilizamos la función animate() para realizar una animación.
    { // Agregamos un objeto con las propiedades que queremos animar como el color de fondo y el color del texto.
      backgroundColor: colors[color], // Agregamos el valor deseado para cada una de las propiedades como el valor de color de la lista de colores.
      color: colors[color]
    },
    6666  // Finalmente, agregamos el tiempo de la animación en milisegundos.
  );
  //  Seleccione el elemento con la clase "button" usando el selector jQuery.
  $('.button').animate( // Utilice la función animate () para animar el fondo del elemento seleccionado.
    {
      backgroundColor: colors[color] // Utilice el objeto colors para asignar el color deseado al elemento.
    },
    666 // Especifique el tiempo de animación en milisegundos.
  );
}

$(document).ready(function () {
  // Primero, en el documento listo, obtenemos citas usando la función getQuotes().
  getQuotes().then(() => {
    // Una vez que obtenemos las citas, llamamos a getQuote() para mostrar una cita al azar.
    getQuote();
  });
  //  #8: Cuando se hace clic en el botón #new-quote, mi máquina de frases debe buscar una nueva frase y mostrarla en el elemento #text.
  // Luego, agregamos un controlador de eventos al botón #new-quote para ejecutar la función getQuote() cuando se hace clic en el botón.
  $('#new-quote').on('click', getQuote);
});
