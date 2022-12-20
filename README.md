# Certificación Librerías de desarrollo de la interfaz

## Librerías de desarrollo de interfaz de usuario

En la certificación de bibliotecas de desarrollo front-end, aprenderá cómo diseñar su sitio rápidamente con Bootstrap. También aprenderá cómo agregar lógica a sus estilos CSS y extenderlos con Sass.

Después, construirás un carrito de compras y otras aplicaciones para aprender a crear poderosas aplicaciones de página única (SPAs) con React y Redux.

# Contenido

01. [Bootstrap](#Bootstrap)
02. [jQuery](#jQuery)
03. [SASS](#SASS)
04. [React js](#React-js)
05. [Redux](#Redux)
06. [React y Redux](#React-y-Redux)
07. [Proyectos de librerías de desarrollo de la interfaz](#Proyectos-de-librerías-de-desarrollo-de-la-interfaz)
    - Construye una máquina de frases aleatorias
    - Crea un previsualizador de Markdown
    - Crea una batería electrónica
    - Crea una calculadora con JavaScript
    - Construye un reloj 25 + 5

# Bootstrap
En este curso, aprenderás cómo crear sitios web responsivos con Bootstrap, y utilizarás sus clases incluidas para estilizar botones, imágenes, formularios, navegación y otros elementos.

1. Utiliza diseño responsivo con contenedores fluidos de Bootstrap

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/bootstrap/use-responsive-design-with-bootstrap-fluid-containers)
    
    
    **Ejercicio**
    Ten en cuenta que para cerrar la etiqueta `link` puedes utilizar `>` o `/>`.

    Para comenzar, debemos anidar todo nuestro HTML (menos la etiqueta `link` y el elemento `style`) en un elemento `div` con la clase `container-fluid`.

    **Solucion**
    ```html
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
    <style>
        .red-text {
            color: red;
        }

        h2 {
            font-family: Lobster, Monospace;
        }

        p {
            font-size: 16px;
            font-family: Monospace;
        }

        .thick-green-border {
            border-color: green;
            border-width: 10px;
            border-style: solid;
            border-radius: 50%;
        }

        .smaller-image {
            width: 100px;
        }
    </style>
    <!-- Todos los elementos HTML después de la etiqueta de cierre de style deben estar anidados dentro de .container-fluid -->
    <div class="container-fluid">
        <h2 class="red-text">CatPhotoApp</h2>

        <p>Click here for <a href="#">cat photos</a>.</p>

        <a href="#"><img class="smaller-image thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

        <p>Things cats love:</p>
        <ul>
            <li>cat nip</li>
            <li>laser pointers</li>
            <li>lasagna</li>
        </ul>
        <p>Top 3 things cats hate:</p>
        <ol>
            <li>flea treatment</li>
            <li>thunder</li>
            <li>other cats</li>
        </ol>
        <form action="https://freecatphotoapp.com/submit-cat-photo">
            <label><input type="radio" name="indoor-outdoor"> Indoor</label>
            <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
            <label><input type="checkbox" name="personality"> Loving</label>
            <label><input type="checkbox" name="personality"> Lazy</label>
            <label><input type="checkbox" name="personality"> Crazy</label>
            <input type="text" placeholder="cat photo URL" required>
            <button type="submit">Submit</button>
        </form>
    </div>    
    ```

2. Haz que las imágenes se adapten a dispositivos móviles

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/bootstrap/make-images-mobile-responsive)

    **Ejercicio**
    Primero, agrega una nueva imagen debajo de la existente. Establece su atributo `src` a `https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg`.

    Sería genial si esta imagen pudiera tener exactamente el ancho de la pantalla de nuestro teléfono.
    
    Afortunadamente, con Bootstrap, todo lo que necesitamos hacer es agregar la clase `img-responsive` a nuestra imagen. Hazlo, y la imagen debería caber perfectamente en el ancho de tu página.

    **Solucion**
    ```html
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
    <style>
        .red-text {
            color: red;
        }

        h2 {
            font-family: Lobster, Monospace;
        }

        p {
            font-size: 16px;
            font-family: Monospace;
        }

        .thick-green-border {
            border-color: green;
            border-width: 10px;
            border-style: solid;
            border-radius: 50%;
        }

        .smaller-image {
            width: 100px;
        }
    </style>

    <div class="container-fluid">
        <h2 class="red-text">CatPhotoApp</h2>

        <p>Click here for <a href="#">cat photos</a>.</p>

        <a href="#"><img class="smaller-image img-responsive thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

        <a href="#"><img class="img-responsive thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg"></a>

        <p>Things cats love:</p>
        <ul>
            <li>cat nip</li>
            <li>laser pointers</li>
            <li>lasagna</li>
        </ul>
        <p>Top 3 things cats hate:</p>
        <ol>
            <li>flea treatment</li>
            <li>thunder</li>
            <li>other cats</li>
        </ol>
        <form action="https://freecatphotoapp.com/submit-cat-photo">
            <label><input type="radio" name="indoor-outdoor"> Indoor</label>
            <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
            <label><input type="checkbox" name="personality"> Loving</label>
            <label><input type="checkbox" name="personality"> Lazy</label>
            <label><input type="checkbox" name="personality"> Crazy</label>
            <input type="text" placeholder="cat photo URL" required>
            <button type="submit">Submit</button>
        </form>
    </div>
    ```

3. Centrar texto con Bootstrap

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/bootstrap/center-text-with-bootstrap)    
    
    **Ejercicio**
    Ahora que estamos usando Bootstrap, podemos centrar nuestro encabezado para que luzca mejor. Lo único que necesitamos hacer es agregar la clase `text-center` a nuestro elemento `h2`.

    Recuerda que puedes agregar varias clases al mismo elemento separando cada una de ellas con un espacio, de la siguiente manera:

    ```html
    <h2 class="red-text text-center">your text</h2>
    ```
    
    ```html
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
    <style>
        .red-text {
            color: red;
        }

        h2 {
            font-family: Lobster, Monospace;
        }

        p {
            font-size: 16px;
            font-family: Monospace;
        }

        .thick-green-border {
            border-color: green;
            border-width: 10px;
            border-style: solid;
            border-radius: 50%;
        }

        .smaller-image {
            width: 100px;
        }
    </style>

    <div class="container-fluid">
        <h2 class="red-text text-center">CatPhotoApp</h2>

        <p>Click here for <a href="#">cat photos</a>.</p>

        <a href="#"><img class="smaller-image thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

        <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg" class="img-responsive" alt="Three kittens running towards the camera.">
        <p>Things cats love:</p>
        <ul>
            <li>cat nip</li>
            <li>laser pointers</li>
            <li>lasagna</li>
        </ul>
        <p>Top 3 things cats hate:</p>
        <ol>
            <li>flea treatment</li>
            <li>thunder</li>
            <li>other cats</li>
        </ol>
        <form action="https://freecatphotoapp.com/submit-cat-photo">
            <label><input type="radio" name="indoor-outdoor"> Indoor</label>
            <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
            <label><input type="checkbox" name="personality"> Loving</label>
            <label><input type="checkbox" name="personality"> Lazy</label>
            <label><input type="checkbox" name="personality"> Crazy</label>
            <input type="text" placeholder="cat photo URL" required>
            <button type="submit">Submit</button>
        </form>
    </div>
    ```

4. Crea un botón de Bootstrap

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/bootstrap/create-a-bootstrap-button)    
    
    **Ejercicio**
    
    Crea un nuevo elemento `button` debajo de la foto grande de tu gatito. Dale las clases `btn` y `btn-default`, así como el texto de `Like`.

    **Solucion**

    ```html
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
    <style>
        .red-text {
            color: red;
        }

        h2 {
            font-family: Lobster, Monospace;
        }

        p {
            font-size: 16px;
            font-family: Monospace;
        }

        .thick-green-border {
            border-color: green;
            border-width: 10px;
            border-style: solid;
            border-radius: 50%;
        }

        .smaller-image {
            width: 100px;
        }
    </style>

    <div class="container-fluid">
        <h2 class="red-text text-center">CatPhotoApp</h2>

        <p>Click here for <a href="#">cat photos</a>.</p>

        <a href="#"><img class="smaller-image thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

        <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg" class="img-responsive" alt="Three kittens running towards the camera.">
        <button class="btn btn-default">Like</button>

        <p>Things cats love:</p>
        <ul>
            <li>cat nip</li>
            <li>laser pointers</li>
            <li>lasagna</li>
        </ul>
        <p>Top 3 things cats hate:</p>
        <ol>
            <li>flea treatment</li>
            <li>thunder</li>
            <li>other cats</li>
        </ol>
        <form action="https://freecatphotoapp.com/submit-cat-photo">
            <label><input type="radio" name="indoor-outdoor"> Indoor</label>
            <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
            <label><input type="checkbox" name="personality"> Loving</label>
            <label><input type="checkbox" name="personality"> Lazy</label>
            <label><input type="checkbox" name="personality"> Crazy</label>
            <input type="text" placeholder="cat photo URL" required>
            <button type="submit">Submit</button>
        </form>
    </div>
    ```

5. Crea un botón Bootstrap como elemento de bloque

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/bootstrap/create-a-block-element-bootstrap-button)    
    
    **Ejercicio**
    Agrega la clase de *Bootstrap* `btn-block` a tu botón de Bootstrap.
    
    ```html
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
    <style>
        .red-text {
            color: red;
        }

        h2 {
            font-family: Lobster, Monospace;
        }

        p {
            font-size: 16px;
            font-family: Monospace;
        }

        .thick-green-border {
            border-color: green;
            border-width: 10px;
            border-style: solid;
            border-radius: 50%;
        }

        .smaller-image {
            width: 100px;
        }
    </style>

    <div class="container-fluid">
        <h2 class="red-text text-center">CatPhotoApp</h2>

        <p>Click here for <a href="#">cat photos</a>.</p>

        <a href="#"><img class="smaller-image thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

        <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg" class="img-responsive" alt="Three kittens running towards the camera.">
        <button class="btn btn-block btn-default">Like</button>
        <p>Things cats love:</p>
        <ul>
            <li>cat nip</li>
            <li>laser pointers</li>
            <li>lasagna</li>
        </ul>
        <p>Top 3 things cats hate:</p>
        <ol>
            <li>flea treatment</li>
            <li>thunder</li>
            <li>other cats</li>
        </ol>
        <form action="https://freecatphotoapp.com/submit-cat-photo">
            <label><input type="radio" name="indoor-outdoor"> Indoor</label>
            <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
            <label><input type="checkbox" name="personality"> Loving</label>
            <label><input type="checkbox" name="personality"> Lazy</label>
            <label><input type="checkbox" name="personality"> Crazy</label>
            <input type="text" placeholder="cat photo URL" required>
            <button type="submit">Submit</button>
        </form>
    </div>
    ```

6. Prueba el arcoíris de colores del botón de Bootstrap

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/bootstrap/taste-the-bootstrap-button-color-rainbow)    
    
    **Ejercicio**
    La clase `btn-primary` es el color principal que usarás en tu aplicación. Es útil para resaltar acciones que deseas que tu usuario realice.

    Reemplaza la clase `btn-default` de Bootstrap por `btn-primary` en tu botón.

    Ten en cuenta que este botón aún necesitará las clases `btn` y `btn-block`.

    ```html
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
    <style>
        .red-text {
            color: red;
        }

        h2 {
            font-family: Lobster, Monospace;
        }

        p {
            font-size: 16px;
            font-family: Monospace;
        }

        .thick-green-border {
            border-color: green;
            border-width: 10px;
            border-style: solid;
            border-radius: 50%;
        }

        .smaller-image {
            width: 100px;
        }
    </style>

    <div class="container-fluid">
        <h2 class="red-text text-center">CatPhotoApp</h2>

        <p>Click here for <a href="#">cat photos</a>.</p>

        <a href="#"><img class="smaller-image thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

        <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg" class="img-responsive" alt="Three kittens running towards the camera.">
        <button class="btn btn-primary btn-block">Like</button>
        <p>Things cats love:</p>
        <ul>
            <li>cat nip</li>
            <li>laser pointers</li>
            <li>lasagna</li>
        </ul>
        <p>Top 3 things cats hate:</p>
        <ol>
            <li>flea treatment</li>
            <li>thunder</li>
            <li>other cats</li>
        </ol>
        <form action="https://freecatphotoapp.com/submit-cat-photo">
            <label><input type="radio" name="indoor-outdoor"> Indoor</label>
            <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
            <label><input type="checkbox" name="personality"> Loving</label>
            <label><input type="checkbox" name="personality"> Lazy</label>
            <label><input type="checkbox" name="personality"> Crazy</label>
            <input type="text" placeholder="cat photo URL" required>
            <button type="submit">Submit</button>
        </form>
    </div>
    ```

7. Llama a acciones opcionales con btn-info

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/bootstrap/call-out-optional-actions-with-btn-info)    
    
    **Ejercicio**
    *Bootstrap* viene con varios colores predefinidos para los botones. La clase `btn-info` se utiliza para llamar la atención sobre las acciones opcionales que el usuario puede realizar.

    Crea un nuevo botón de *Bootstrap* a nivel de bloque debajo de tu botón de `Like` con el texto `Info`, y agrégale la clase de Boostrap `btn-info`.

    Ten en cuenta que estos botones todavía necesitan las clases btn y btn-block.

    ```html
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
    <style>
        .red-text {
            color: red;
        }

        h2 {
            font-family: Lobster, Monospace;
        }

        p {
            font-size: 16px;
            font-family: Monospace;
        }

        .thick-green-border {
            border-color: green;
            border-width: 10px;
            border-style: solid;
            border-radius: 50%;
        }

        .smaller-image {
            width: 100px;
        }
    </style>

    <div class="container-fluid">
        <h2 class="red-text text-center">CatPhotoApp</h2>

        <p>Click here for <a href="#">cat photos</a>.</p>

        <a href="#"><img class="smaller-image thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

        <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg" class="img-responsive" alt="Three kittens running towards the camera.">
        <button class="btn btn-block btn-primary">Like</button>
        <button class="btn btn-block btn-info">Info</button>
        <p>Things cats love:</p>
        <ul>
            <li>cat nip</li>
            <li>laser pointers</li>
            <li>lasagna</li>
        </ul>
        <p>Top 3 things cats hate:</p>
        <ol>
            <li>flea treatment</li>
            <li>thunder</li>
            <li>other cats</li>
        </ol>
        <form action="https://freecatphotoapp.com/submit-cat-photo">
            <label><input type="radio" name="indoor-outdoor"> Indoor</label>
            <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
            <label><input type="checkbox" name="personality"> Loving</label>
            <label><input type="checkbox" name="personality"> Lazy</label>
            <label><input type="checkbox" name="personality"> Crazy</label>
            <input type="text" placeholder="cat photo URL" required>
            <button type="submit">Submit</button>
        </form>
    </div>
    ```

8. Advierte a tus usuarios de una acción peligrosa con btn-danger

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/bootstrap/warn-your-users-of-a-dangerous-action-with-btn-danger)    
    
    **Ejercicio**
    *Bootstrap* viene con varios colores predefinidos para botones. La clase `btn-danger` es el color del botón que usarás para notificar a los usuarios que el botón realiza una acción destructiva, como eliminar la foto de un gato.

    Crea un botón con el texto `Delete` y dale la clase `btn-danger`.

    Ten en cuenta que estos botones todavía necesitan las clases `btn` y `btn-block`.

    ```html
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
    <style>
        .red-text {
            color: red;
        }

        h2 {
            font-family: Lobster, Monospace;
        }

        p {
            font-size: 16px;
            font-family: Monospace;
        }

        .thick-green-border {
            border-color: green;
            border-width: 10px;
            border-style: solid;
            border-radius: 50%;
        }

        .smaller-image {
            width: 100px;
        }
    </style>

    <div class="container-fluid">
        <h2 class="red-text text-center">CatPhotoApp</h2>

        <p>Click here for <a href="#">cat photos</a>.</p>

        <a href="#"><img class="smaller-image thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

        <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg" class="img-responsive" alt="Three kittens running towards the camera.">
        <button class="btn btn-block btn-primary">Like</button>
        <button class="btn btn-block btn-info">Info</button>
        <button class="btn btn-block btn-danger">Delete</button>
        <p>Things cats love:</p>
        <ul>
            <li>cat nip</li>
            <li>laser pointers</li>
            <li>lasagna</li>
        </ul>
        <p>Top 3 things cats hate:</p>
        <ol>
            <li>flea treatment</li>
            <li>thunder</li>
            <li>other cats</li>
        </ol>
        <form action="https://freecatphotoapp.com/submit-cat-photo">
            <label><input type="radio" name="indoor-outdoor"> Indoor</label>
            <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
            <label><input type="checkbox" name="personality"> Loving</label>
            <label><input type="checkbox" name="personality"> Lazy</label>
            <label><input type="checkbox" name="personality"> Crazy</label>
            <input type="text" placeholder="cat photo URL" required>
            <button type="submit">Submit</button>
        </form>
    </div>
    ```

9. Utiliza la cuadrilla (grid) Bootstrap para poner elemento de lado a lado

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/bootstrap/use-the-bootstrap-grid-to-put-elements-side-by-side)    
    
    **Ejercicio**
    En el *'Cat Photo App'* que estamos creando, vamos a usar `col-xs-*`, donde xs significa extra pequeño ("extra small" como una pantalla de teléfono), y `*` es el número de columnas que va a tomar el elemento en anchura.

    Pon los botones `Like`, `Info` y `Delete` lado a lado, anidando los tres dentro de un elemento `<div class="row">`, luego, cada uno de ellos dentro de un elemento `<div class="col-xs-4">`.

    La clase `row` es aplicada a un `div`, y los botones mismos pueden ser anidados dentro de él.

    ```html
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
    <style>
        .red-text {
            color: red;
        }

        h2 {
            font-family: Lobster, Monospace;
        }

        p {
            font-size: 16px;
            font-family: Monospace;
        }

        .thick-green-border {
            border-color: green;
            border-width: 10px;
            border-style: solid;
            border-radius: 50%;
        }

        .smaller-image {
            width: 100px;
        }
    </style>

    <div class="container-fluid">
        <h2 class="red-text text-center">CatPhotoApp</h2>

        <p>Click here for <a href="#">cat photos</a>.</p>

        <a href="#"><img class="smaller-image thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

        <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg" class="img-responsive" alt="Three kittens running towards the camera.">
        <div class="row">
            <div class="col-xs-4">
                <button class="btn btn-block btn-primary">Like</button>
            </div>    
            <div class="col-xs-4">
                <button class="btn btn-block btn-info">Info</button>
            </div>
            <div class="col-xs-4">
                <button class="btn btn-block btn-danger">Delete</button>
            </div>    
        </div>    
        <p>Things cats love:</p>
        <ul>
            <li>cat nip</li>
            <li>laser pointers</li>
            <li>lasagna</li>
        </ul>
        <p>Top 3 things cats hate:</p>
        <ol>
            <li>flea treatment</li>
            <li>thunder</li>
            <li>other cats</li>
        </ol>
        <form action="https://freecatphotoapp.com/submit-cat-photo">
            <label><input type="radio" name="indoor-outdoor"> Indoor</label>
            <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
            <label><input type="checkbox" name="personality"> Loving</label>
            <label><input type="checkbox" name="personality"> Lazy</label>
            <label><input type="checkbox" name="personality"> Crazy</label>
            <input type="text" placeholder="cat photo URL" required>
            <button type="submit">Submit</button>
        </form>
    </div>
    ```

10. Adiós CSS Personalizado. Hola Bootstrap

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/bootstrap/ditch-custom-css-for-bootstrap)    
    
    **Ejercicio**
    Borra las declaraciones de CSS `.red-text`, `p` y `.smaller-image` de tu elemento `style` para que las únicas declaraciones en tu elemento `style` sean `h2` y `thick-green-border`.

    Luego, borra el elemento `p` que contiene un enlace muerto. Después, borra la clase `red-text` de tu elemento `h2` y reemplázalo con la clase de Bootstrap `text-primary`.

    Finalmente, remueve la clase `smaller-image` de tu primer elemento `img` y reemplázalo con la clase `img-responsive`.
    
    ```html
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
    <style>
        h2 {
            font-family: Lobster, Monospace;
        }

        .thick-green-border {
            border-color: green;
            border-width: 10px;
            border-style: solid;
            border-radius: 50%;
        }    
    </style>

    <div class="container-fluid">
        <h2 class="text-primary text-center">CatPhotoApp</h2>

        <a href="#"><img class="img-responsive thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

        <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg" class="img-responsive" alt="Three kittens running towards the camera.">
        <div class="row">
            <div class="col-xs-4">
            <button class="btn btn-block btn-primary">Like</button>
            </div>
            <div class="col-xs-4">
            <button class="btn btn-block btn-info">Info</button>
            </div>
            <div class="col-xs-4">
            <button class="btn btn-block btn-danger">Delete</button>
            </div>
        </div>
        <p>Things cats love:</p>
        <ul>
            <li>cat nip</li>
            <li>laser pointers</li>
            <li>lasagna</li>
        </ul>
        <p>Top 3 things cats hate:</p>
        <ol>
            <li>flea treatment</li>
            <li>thunder</li>
            <li>other cats</li>
        </ol>
        <form action="https://freecatphotoapp.com/submit-cat-photo">
            <label><input type="radio" name="indoor-outdoor"> Indoor</label>
            <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
            <label><input type="checkbox" name="personality"> Loving</label>
            <label><input type="checkbox" name="personality"> Lazy</label>
            <label><input type="checkbox" name="personality"> Crazy</label>
            <input type="text" placeholder="cat photo URL" required>
            <button type="submit">Submit</button>
        </form>
    </div>
    ```

11. Usa un span para apuntar a elementos en línea

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/bootstrap/use-a-span-to-target-inline-elements)    
    
    **Ejercicio**
    Usando un elemento `span`, anida la palabra `love` dentro del elemento `p` que actualmente tiene el texto `Things cats love`. Luego dale a `span` la clase `text-danger` para cambiar el texto a rojo.

    Así es como harías esto para el elemento `p` que tiene el texto `Top 3 things cats hate`:

    ```html
    <p>Top 3 things cats <span class="text-danger">hate:</span></p>
    ```

    **Solucion**
    ```html
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
    <style>
        h2 {
            font-family: Lobster, Monospace;
        }

        .thick-green-border {
            border-color: green;
            border-width: 10px;
            border-style: solid;
            border-radius: 50%;
        }
    </style>

    <div class="container-fluid">
        <h2 class="text-primary text-center">CatPhotoApp</h2>

        <a href="#"><img class="img-responsive thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

        <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg" class="img-responsive" alt="Three kittens running towards the camera.">
        <div class="row">
            <div class="col-xs-4">
            <button class="btn btn-block btn-primary">Like</button>
            </div>
            <div class="col-xs-4">
            <button class="btn btn-block btn-info">Info</button>
            </div>
            <div class="col-xs-4">
            <button class="btn btn-block btn-danger">Delete</button>
            </div>
        </div>
        <p>Things cats <span class="text-danger">love:</span></p>
        <ul>
            <li>cat nip</li>
            <li>laser pointers</li>
            <li>lasagna</li>
        </ul>
        <p>Top 3 things cats hate:</p>
        <ol>
            <li>flea treatment</li>
            <li>thunder</li>
            <li>other cats</li>
        </ol>
        <form action="https://freecatphotoapp.com/submit-cat-photo">
            <label><input type="radio" name="indoor-outdoor"> Indoor</label>
            <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
            <label><input type="checkbox" name="personality"> Loving</label>
            <label><input type="checkbox" name="personality"> Lazy</label>
            <label><input type="checkbox" name="personality"> Crazy</label>
            <input type="text" placeholder="cat photo URL" required>
            <button type="submit">Submit</button>
        </form>
    </div>
    ```

12. Crea un título personalizado

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/bootstrap/create-a-custom-heading)    
    
    **Ejercicio**
    Haremos un encabezado simple para nuestro 'Cat Photo App' colocando el título y la imagen del gato relajándose en la misma fila.

    Recuerda que *Bootstrap* utiliza un sistema de cuadrícula responsivo, el cual hace más fácil poner elementos en filas y especificar el ancho relativo de cada elemento. La mayoría de las clases de *Bootstrap* pueden ser aplicadas a un elemento `div`.

    Anida tu primera imagen y tu elemento `h2` dentro de un solo elemento `<div class="row">`. Anida tu elemento `h2` dentro de `<div class="col-xs-8">` y tu imagen en un `<div class="col-xs-4">` para que estén en la misma línea.

    ¿Observas cómo la imagen ahora tiene el tamaño adecuado para ajustarse al texto?

    ```html
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">

    <style>
        h2 {
            font-family: Lobster, Monospace;
        }

        .thick-green-border {
            border-color: green;
            border-width: 10px;
            border-style: solid;
            border-radius: 50%;
        }
    </style>

    <div class="container-fluid">
        <h2 class="text-primary text-center">CatPhotoApp</h2>

        <a href="#"><img class="img-responsive thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

        <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg" class="img-responsive" alt="Three kittens running towards the camera.">
        <div class="row">
            <div class="col-xs-4">
            <button class="btn btn-block btn-primary">Like</button>
            </div>
            <div class="col-xs-4">
            <button class="btn btn-block btn-info">Info</button>
            </div>
            <div class="col-xs-4">
            <button class="btn btn-block btn-danger">Delete</button>
            </div>
        </div>
        <p>Things cats <span class="text-danger">love:</span></p>
        <ul>
            <li>cat nip</li>
            <li>laser pointers</li>
            <li>lasagna</li>
        </ul>
        <p>Top 3 things cats hate:</p>
        <ol>
            <li>flea treatment</li>
            <li>thunder</li>
            <li>other cats</li>
        </ol>
        <form action="https://freecatphotoapp.com/submit-cat-photo">
            <label><input type="radio" name="indoor-outdoor"> Indoor</label>
            <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
            <label><input type="checkbox" name="personality"> Loving</label>
            <label><input type="checkbox" name="personality"> Lazy</label>
            <label><input type="checkbox" name="personality"> Crazy</label>
            <input type="text" placeholder="cat photo URL" required>
            <button type="submit">Submit</button>
        </form>
    </div>
    ```

13. Agrega iconos Font Awesome a nuestros botones

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/bootstrap/add-font-awesome-icons-to-our-buttons)

    Puedes incluir Font Awesome en cualquier aplicación agregando el siguiente código al principio de tu HTML:
    ```html
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    ```
    El elemento `i` fue originalmente usado para crear elementos itálicos, pero ahora es comúnmente usado para iconos. Puedes añadir las clases de Font Awesome al elemento `i` para convertirlo en un icono, por ejemplo:
    ```html
    <i class="fas fa-info-circle"></i>
    ```
    
    **Ejercicio**
    Usa *Font Awesome* para añadir un icono `thumbs-up` a tu botón de "Like", dándole un elemento `i` con las clases `fas` y `fa-thumbs-up`. Asegúrate de dejar el texto `Like` junto al icono.

    ```html
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
    <style>
        h2 {
            font-family: Lobster, Monospace;
        }
        .thick-green-border {
            border-color: green;
            border-width: 10px;
            border-style: solid;
            border-radius: 50%;
        }
    </style>

    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-8">
            <h2 class="text-primary text-center">CatPhotoApp</h2>
            </div>
            <div class="col-xs-4">
            <a href="#"><img class="img-responsive thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>
            </div>
        </div>
        <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg" class="img-responsive" alt="Three kittens running towards the camera.">
        <div class="row">
            <div class="col-xs-4">
            <button class="btn btn-block btn-primary">
                <i class="fas fa-thumbs-up"></i>
                Like
            </button>
            </div>
            <div class="col-xs-4">
            <button class="btn btn-block btn-info">Info</button>
            </div>
            <div class="col-xs-4">
            <button class="btn btn-block btn-danger">Delete</button>
            </div>
        </div>
        <p>Things cats <span class="text-danger">love:</span></p>
        <ul>
            <li>cat nip</li>
            <li>laser pointers</li>
            <li>lasagna</li>
        </ul>
        <p>Top 3 things cats hate:</p>
        <ol>
            <li>flea treatment</li>
            <li>thunder</li>
            <li>other cats</li>
        </ol>
        <form action="https://freecatphotoapp.com/submit-cat-photo">
            <label><input type="radio" name="indoor-outdoor"> Indoor</label>
            <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
            <label><input type="checkbox" name="personality"> Loving</label>
            <label><input type="checkbox" name="personality"> Lazy</label>
            <label><input type="checkbox" name="personality"> Crazy</label>
            <input type="text" placeholder="cat photo URL" required>
            <button type="submit">Submit</button>
        </form>
    </div>
    ```

14. Agrega iconos Font Awesome a todos nuestros botones

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/bootstrap/add-font-awesome-icons-to-all-of-our-buttons)

    **Ejercicio**
    Utiliza *Font Awesome* para agregar un icono `info-circle` a su botón info y un icono `trash` al botón borrar.
    
    **Nota:**El elemento `span` es una alternativa aceptable al elemento `i` para las direcciones a continuación.

    ```html
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
    <style>
        h2 {
            font-family: Lobster, Monospace;
        }

        .thick-green-border {
            border-color: green;
            border-width: 10px;
            border-style: solid;
            border-radius: 50%;
        }
    </style>

    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-8">
            <h2 class="text-primary text-center">CatPhotoApp</h2>
            </div>
            <div class="col-xs-4">
            <a href="#"><img class="img-responsive thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>
            </div>
        </div>
        <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg" class="img-responsive" alt="Three kittens running towards the camera.">
        <div class="row">
            <div class="col-xs-4">
            <button class="btn btn-block btn-primary"><i class="fas fa-thumbs-up"></i> Like</button>
            </div>
            <div class="col-xs-4">
            <button class="btn btn-block btn-info">
                <i class="fas fa-info-circle"></i>
                Info
            </button>
            </div>
            <div class="col-xs-4">
            <button class="btn btn-block btn-danger">
                <i class="fas fa-trash"></i>
                Delete
            </button>
            </div>
        </div>
        <p>Things cats <span class="text-danger">love:</span></p>
        <ul>
            <li>cat nip</li>
            <li>laser pointers</li>
            <li>lasagna</li>
        </ul>
        <p>Top 3 things cats hate:</p>
        <ol>
            <li>flea treatment</li>
            <li>thunder</li>
            <li>other cats</li>
        </ol>
        <form action="https://freecatphotoapp.com/submit-cat-photo">
            <label><input type="radio" name="indoor-outdoor"> Indoor</label>
            <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
            <label><input type="checkbox" name="personality"> Loving</label>
            <label><input type="checkbox" name="personality"> Lazy</label>
            <label><input type="checkbox" name="personality"> Crazy</label>
            <input type="text" placeholder="cat photo URL" required>
            <button type="submit">Submit</button>
        </form>
    </div>
    ```




15. Botones de radio con estilo responsivo

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/bootstrap/responsively-style-radio-buttons)

    **Ejercicio**
    Anida tus dos botones de radio dentro de un elemento `<div class="row">`. Luego, anida cada uno de ellos dentro de un elemento `<div class="col-xs-6">`.

    **Nota**: Como recordatorio, los botones de radio son elementos `input` con el valor de tipo `radio`.

    ```html
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
    <style>
        h2 {
            font-family: Lobster, Monospace;
        }

        .thick-green-border {
            border-color: green;
            border-width: 10px;
            border-style: solid;
            border-radius: 50%;
        }
    </style>

    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-8">
            <h2 class="text-primary text-center">CatPhotoApp</h2>
            </div>
            <div class="col-xs-4">
            <a href="#"><img class="img-responsive thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>
            </div>
        </div>
        <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg" class="img-responsive" alt="Three kittens running towards the camera.">
        <div class="row">
            <div class="col-xs-4">
            <button class="btn btn-block btn-primary"><i class="fa fa-thumbs-up"></i> Like</button>
            </div>
            <div class="col-xs-4">
            <button class="btn btn-block btn-info"><i class="fa fa-info-circle"></i> Info</button>
            </div>
            <div class="col-xs-4">
            <button class="btn btn-block btn-danger"><i class="fa fa-trash"></i> Delete</button>
            </div>
        </div>
        <p>Things cats <span class="text-danger">love:</span></p>
        <ul>
            <li>cat nip</li>
            <li>laser pointers</li>
            <li>lasagna</li>
        </ul>
        <p>Top 3 things cats hate:</p>
        <ol>
            <li>flea treatment</li>
            <li>thunder</li>
            <li>other cats</li>
        </ol>
        <form action="https://freecatphotoapp.com/submit-cat-photo">
            <div class="row">
                <label>
                    <div class="col-xs-6">
                    <input type="radio" name="indoor-outdoor">
                    Indoor
                    </div>  
                </label>
                <label>
                    <div class="col-xs-6">
                    <input type="radio" name="indoor-outdoor">
                    Outdoor
                    </div>  
                </label>
            </div>
            <label><input type="checkbox" name="personality"> Loving</label>
            <label><input type="checkbox" name="personality"> Lazy</label>
            <label><input type="checkbox" name="personality"> Crazy</label>
            <input type="text" placeholder="cat photo URL" required>
            <button type="submit">Submit</button>
        </form>
    </div>
    ```

16. Casillas de verificación con estilo responsivo

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/bootstrap/responsively-style-checkboxes)

    **Ejercicio**
    Anida las tres casillas de verificación en un elemento `<div class="row">`. Luego, anida cada uno de ellos en un elemento `<div class="col-xs-4">`.

    ```html
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
    <style>
        h2 {
            font-family: Lobster, Monospace;
        }
        .thick-green-border {
            border-color: green;
            border-width: 10px;
            border-style: solid;
            border-radius: 50%;
        }
    </style>

    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-8">
            <h2 class="text-primary text-center">CatPhotoApp</h2>
            </div>
            <div class="col-xs-4">
            <a href="#"><img class="img-responsive thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>
            </div>
        </div>
        <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg" class="img-responsive" alt="Three kittens running towards the camera.">
        <div class="row">
            <div class="col-xs-4">
            <button class="btn btn-block btn-primary"><i class="fa fa-thumbs-up"></i> Like</button>
            </div>
            <div class="col-xs-4">
            <button class="btn btn-block btn-info"><i class="fa fa-info-circle"></i> Info</button>
            </div>
            <div class="col-xs-4">
            <button class="btn btn-block btn-danger"><i class="fa fa-trash"></i> Delete</button>
            </div>
        </div>
        <p>Things cats <span class="text-danger">love:</span></p>
        <ul>
            <li>cat nip</li>
            <li>laser pointers</li>
            <li>lasagna</li>
        </ul>
        <p>Top 3 things cats hate:</p>
        <ol>
            <li>flea treatment</li>
            <li>thunder</li>
            <li>other cats</li>
        </ol>
        <form action="https://freecatphotoapp.com/submit-cat-photo">
            <div class="row">
            <div class="col-xs-6">
                <label><input type="radio" name="indoor-outdoor"> Indoor</label>
            </div>
            <div class="col-xs-6">
                <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
            </div>
            </div>
            <div class="row">
            <div class="col-xs-4">
            <label><input type="checkbox" name="personality"> Loving</label>
            </div>
            <div class="col-xs-4">  
            <label><input type="checkbox" name="personality"> Lazy</label>
            </div>
            <div class="col-xs-4">  
            <label><input type="checkbox" name="personality"> Crazy</label>
            </div>
            </div>
            <input type="text" placeholder="cat photo URL" required>
            <button type="submit">Submit</button>
        </form>
    </div>
    ```

17. Estiliza entradas de texto como controles de formulario

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/bootstrap/responsively-style-checkboxes)

    **Ejercicio**
    Puedes agregar el icono `fa-paper-plane` de Font Awesome agregando `<i class="fa fa-paper-plane"></i>` dentro de tu elemento `button` de envío.

    Dale a tu campo de entrada de texto la clase `form-control`. Dale a tu botón de envío de formulario las clases `btn btn-primary`. También asígnale a este botón el icono de Font Awesome `fa-paper-plane`.

    Todos los elementos textuales `<input>`, `<textarea>`, y `<select>` con la clase `.form-control` tienen un ancho de 100%.

    ```html
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
    <style>
    h2 {
        font-family: Lobster, Monospace;
    }

    .thick-green-border {
        border-color: green;
        border-width: 10px;
        border-style: solid;
        border-radius: 50%;
    }

    </style>

    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-8">
            <h2 class="text-primary text-center">CatPhotoApp</h2>
            </div>
            <div class="col-xs-4">
            <a href="#"><img class="img-responsive thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>
            </div>
        </div>
        <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg" class="img-responsive" alt="Three kittens running towards the camera.">
        <div class="row">
            <div class="col-xs-4">
            <button class="btn btn-block btn-primary"><i class="fa fa-thumbs-up"></i> Like</button>
            </div>
            <div class="col-xs-4">
            <button class="btn btn-block btn-info"><i class="fa fa-info-circle"></i> Info</button>
            </div>
            <div class="col-xs-4">
            <button class="btn btn-block btn-danger"><i class="fa fa-trash"></i> Delete</button>
            </div>
        </div>
        <p>Things cats <span class="text-danger">love:</span></p>
        <ul>
            <li>cat nip</li>
            <li>laser pointers</li>
            <li>lasagna</li>
        </ul>
        <p>Top 3 things cats hate:</p>
        <ol>
            <li>flea treatment</li>
            <li>thunder</li>
            <li>other cats</li>
        </ol>
        <form action="https://freecatphotoapp.com/submit-cat-photo">
            <div class="row">
            <div class="col-xs-6">
                <label><input type="radio" name="indoor-outdoor"> Indoor</label>
            </div>
            <div class="col-xs-6">
                <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
            </div>
            </div>
            <div class="row">
            <div class="col-xs-4">
                <label><input type="checkbox" name="personality"> Loving</label>
            </div>
            <div class="col-xs-4">
                <label><input type="checkbox" name="personality"> Lazy</label>
            </div>
            <div class="col-xs-4">
                <label><input type="checkbox" name="personality"> Crazy</label>
            </div>
            </div>
            <input type="text" placeholder="cat photo URL" required>
            <button type="submit">Submit</button>
        </form>
    </div>
    ```

18. 

19. 
20. 
21. 
22. 
23. 
24. 
25. 
26. 
27. 
7. 
7. 
7. 
7. 
7. 
7. 
7. 

# jQuery
# SASS
# React js
# Redux
# React y Redux
# Proyectos de librerías de desarrollo de la interfaz