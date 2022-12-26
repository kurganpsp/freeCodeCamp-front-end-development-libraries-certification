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

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/bootstrap/style-text-inputs-as-form-controls)

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
            <input class="form-control" type="text" placeholder="cat photo URL" required>
            <button type="submit" class="btn btn-primary">
            <i class="fa fa-paper-plane"></i>     Submit
            </button>
        </form>
    </div>
    ```

18. Alinea elementos de formulario de manera responsiva con Bootstrap

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/bootstrap/line-up-form-elements-responsively-with-bootstrap)

    **Ejercicio**
    Ahora coloquemos tus `input` de formulario y tu `button` de envío en la misma línea. Vamos a hacer esto de la misma forma que antes: Usando un elemento `div` con la clase `row`, y otros elementos `div` dentro de este usando la clase `col-xs-*`.

    Coloca juntos tu campo de texto `input` y tu `button` de envío dentro de un `div` con la clase row. Anida tu campo de texto input dentro de un `div` con la clase `col-xs-7`. Anida tu `button` de envío del formulario dentro de un `div` con la clase `col-xs-5`.

    Este es el ultima desafio que vamos a hacer para nuestro 'Cat Photo App' por ahora. ¡Esperamos que hayas disfrutado aprendiendo Font Awesome, Bootstrap y diseño responsivo!

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
            <div class="row">
                <div class="col-xs-7">
                    <input type="text" class="form-control" placeholder="cat photo URL" required>
                </div>
                <div class="col-xs-5">  
                    <button type="submit" class="btn btn-primary"><i class="fa fa-paper-plane"></i> Submit
                    </button>
                </div>
            </div>  
        </form>
    </div>
    ```

19. Crea un encabezado de Bootstrap

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/bootstrap/create-a-bootstrap-headline)

    **Ejercicio**

    Construiremos una zona de juegos de *jQuery*, que pronto utilizaremos en nuestros desafíos de *jQuery*.

    Para empezar, crea un elemento `h3`, con el texto *jQuery* Playground.

    Colorea tu elemento `h3` con la clase `text-primary` y céntralo con la clase `text-center` de Bootstrap.

    ```html
    <h3 class="text-primary text-center">jQuery Playground</h3>
    ```
    
20. Aloja nuestra página dentro de un container-fluid div de Bootstrap

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/bootstrap/house-our-page-within-a-bootstrap-container-fluid-div)

    **Ejercicio**
    Ahora vamos a asegurarnos que todo el contenido de tu página es mobile-responsive.

    Anidemos tu elemento `h3` dentro de un elemento `div` con la clase `container-fluid`.
    
    ```html
    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
    </div>
    ```

21. Crea una fila Bootstrap

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/bootstrap/create-a-bootstrap-row)

    **Ejercicio**
    Ahora crearemos una fila Bootstrap para nuestros elementos en línea.

    Crea un elemento `div` debajo de la etiqueta `h3`, con la clase `row`.

    ```html
    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
        </div>
    </div>
    ```

22. Divide tu fila de Bootstrap

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/bootstrap/split-your-bootstrap-row)

    **Ejercicio**
    Ahora que tenemos una fila de *Bootstrap*, vamos a dividirla en dos columnas para hospedar nuestros elementos.

    Crea dos elementos `div` dentro de tu fila, ambos con la clase `col-xs-6`.
    ```html
    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
            <div class="col-xs-6">
            </div>
            <div class="col-xs-6">
            </div>
        </div>
    </div>
    ```

23. Crea Bootstrap wells

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/bootstrap/create-bootstrap-wells)

    **Ejercicio**

    Bootstrap tiene una clase llamada `well` que puede crear una sensación visual de profundidad en tus columnas.

    Anida un elemento `div` con la clase `well` dentro de cada uno de tus elementos `col-xs-6` `div`.

    ```html
    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
            <div class="col-xs-6">
                <div class="well">
                </div>
            </div>
            <div class="col-xs-6">
                <div class="well">
                </div>
            </div>
        </div>
    </div>
    ```

24. Agrega elementos dentro de tus recursos de Bootstrap

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/bootstrap/add-elements-within-your-bootstrap-wells)

    **Ejercicio**
    Ahora estamos a varios elementos `div` de profundidad en cada columna de nuestra fila. Esto es lo más profundo que necesitaremos ir. Ahora podemos agregar nuestros elementos `button`.

    Anida tres elementos `button` dentro de cada uno de los elementos `div` que posean una clase `well`.

    ```html
    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
            <div class="col-xs-6">
                <div class="well">
                    <button>
                    </button>
                    <button>
                    </button>
                    <button>
                    </button>                        
                </div>
            </div>
            <div class="col-xs-6">
                <div class="well">
                    <button>
                    </button>
                    <button>
                    </button>
                    <button>
                    </button>
                </div>
            </div>
        </div>
    </div>
    ```

25. Aplica el estilo predeterminado de botón de estilo de Bootstrap

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/bootstrap/apply-the-default-bootstrap-button-style)

    **Ejercicio**

    *Bootstrap* tiene otra clase de botón llamada `btn-default`.

    Aplica las clases `btn` y `btn-default` a cada uno de tus elementos button.

    ```html
    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
            <div class="col-xs-6">
                <div class="well">
                    <button class="btn btn-default"></button>
                    <button class="btn btn-default"></button>
                    <button class="btn btn-default"></button>
                </div>
            </div>
            <div class="col-xs-6">
                <div class="well">
                    <button class="btn btn-default"></button>
                    <button class="btn btn-default"></button>
                    <button class="btn btn-default"></button>
                </div>
            </div>
        </div>
    </div>
    ```
26. Crear una clase para seleccionar con selectores jQuery

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/bootstrap/create-a-class-to-target-with-jquery-selectors)

    **Ejercicio**
    No es necesario que todas las clases tengan su correspondiente CSS. A veces creamos clases sólo con el propósito de seleccionar aquellos elementos más fácilmente utilizando jQuery.

    Dale a cada uno de tus elementos `button` la clase `target`.

    ```html
    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
            <div class="col-xs-6">
                <div class="well">
                    <button class="btn btn-default target"></button>
                    <button class="btn btn-default target"></button>
                    <button class="btn btn-default target"></button>
                </div>
            </div>
            <div class="col-xs-6">
                <div class="well">
                    <button class="btn btn-default target"></button>
                    <button class="btn btn-default target"></button>
                    <button class="btn btn-default target"></button>
                </div>
            </div>
        </div>
    </div>
    ```

27. Añade atributos de "id" a elementos de Bootstrap

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/bootstrap/add-id-attributes-to-bootstrap-elements)

    **Ejercicio**
    Recuerda que además de los atributos de clase, puedes darle a cada uno de tus elementos un atributo `id`.

    Cada "`id`" debe ser único en un elemento específico y utilizarse una sola vez por página.

    Vamos a dar un "`id`" único a cada uno de nuestros elementos `div` con la clase `well`.

    Recuerda que puedes dar un "`id`" a un elemento de esta manera:

    ```html
    <div class="well" id="center-well">
    ```
    Agrega el "id" `left-well` al elemento de la izquierda con la clase "well". Agrega el "id" `right-well` al elemento de la derecha con la clase "well".

    ```html
    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
            <div class="col-xs-6">
                <div class="well" id="left-well">
                    <button class="btn btn-default target"></button>
                    <button class="btn btn-default target"></button>
                    <button class="btn btn-default target"></button>
                </div>
            </div>
            <div class="col-xs-6">
                <div class="well" id="right-well">
                    <button class="btn btn-default target"></button>
                    <button class="btn btn-default target"></button>
                    <button class="btn btn-default target"></button>
                </div>
            </div>
        </div>
    </div>
    ```

28. Etiqueta wells de Bootstrap

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/bootstrap/label-bootstrap-wells)

    **Ejercicio**
    Para mayor claridad, vamos a etiquetar nuestros dos wells con sus ids.

    Sobre tu "left-well", dentro de su elemento `div` `col-xs-6`, agrega un elemento `h4` con el texto `#left-well`.

    Sobre tu "right-well", dentro de su elemento div col-xs-6 agrega un elemento `h4` con el texto `#right-well`.

    ```html
    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
            <div class="col-xs-6">
                <h4>#left-well</h4>
                <div class="well" id="left-well">
                    <button class="btn btn-default target"></button>
                    <button class="btn btn-default target"></button>
                    <button class="btn btn-default target"></button>
                </div>
            </div>
            <div class="col-xs-6">
                <h4>#right-well</h4>
                <div class="well" id="right-well">
                    <button class="btn btn-default target"></button>
                    <button class="btn btn-default target"></button>
                    <button class="btn btn-default target"></button>
                </div>
            </div>
        </div>
    </div>
    ```


29. Dale un id único a cada elemento

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/bootstrap/give-each-element-a-unique-id)

    **Ejercicio**

    También vamos a querer poder usar *jQuery* para seleccionar cada botón por su id único.

    Dale a cada uno de tus botones un id único, empezando con `target1` y finalizando con `target6`.

    Asegúrate de que `target1` a `target3` se encuentren en #left-well y target4 a target6 se encuentren en #right-well.

    ```html
    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
            <div class="col-xs-6">
                <h4>#left-well</h4>
                <div class="well" id="left-well">
                    <button class="btn btn-default target" id ="target1"></button>
                    <button class="btn btn-default target" id ="target2"></button>
                    <button class="btn btn-default target" id ="target3"></button>
                </div>
            </div>
            <div class="col-xs-6">
                <h4>#right-well</h4>
                <div class="well" id="right-well">
                    <button class="btn btn-default target" id ="target4"></button>
                    <button class="btn btn-default target" id ="target5"></button>
                    <button class="btn btn-default target" id ="target6"></button>
                </div>
            </div>
        </div>
    </div>
    ```


30. Etiqueta botones de Bootstrap

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/bootstrap/give-each-element-a-unique-id)

    **Ejercicio**
    Así como etiquetamos nuestros "wells", también queremos etiquetar nuestros botones.

    Dale a cada uno de tus elementos `button`, texto que corresponde a su id.

    ```html
    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
            <div class="col-xs-6">
            <h4>#left-well</h4>
            <div class="well" id="left-well">
                <button class="btn btn-default target" id="target1">#target1</button>
                <button class="btn btn-default target" id="target2">#target2</button>
                <button class="btn btn-default target" id="target3">#target3</button>
            </div>
            </div>
            <div class="col-xs-6">
            <h4>#right-well</h4>
            <div class="well" id="right-well">
                <button class="btn btn-default target" id="target4">#target4</button>
                <button class="btn btn-default target" id="target5">#target5</button>
                <button class="btn btn-default target" id="target6">#target6</button>
            </div>
            </div>
        </div>
    </div>
    ```

31. Usa comentarios para aclarar el código

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/bootstrap/use-comments-to-clarify-code)

    **Ejercicio**

    Vamos a asegurarnos de que todos sepan que no deben modificar nada de este código directamente.

    Recuerda que puedes empezar un comentario con `<!--` y terminarlo con `-->`

    Agrega un comentario en la parte superior de tu HTML que diga `Code below this line should not be changed`

    ```html
    <!--Code below this line should not be changed-->
    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
            <div class="col-xs-6">
                <h4>#left-well</h4>
                <div class="well" id="left-well">
                    <button class="btn btn-default target" id="target1">#target1</button>
                    <button class="btn btn-default target" id="target2">#target2</button>
                    <button class="btn btn-default target" id="target3">#target3</button>
                </div>
            </div>
            <div class="col-xs-6">
                <h4>#right-well</h4>
                <div class="well" id="right-well">
                    <button class="btn btn-default target" id="target4">#target4</button>
                    <button class="btn btn-default target" id="target5">#target5</button>
                    <button class="btn btn-default target" id="target6">#target6</button>
                </div>
            </div>
        </div>
    </div>
    ```



# jQuery

En este curso, aprenderás a usar jQuery para seleccionar, eliminar, copiar y modificar diferentes elementos de la página.

1. Aprende como funciona la etiqueta script y la función "document ready"

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/jquery/learn-how-script-tags-and-document-ready-work)

    **Ejercicio**
    Primero, agrega un elemento `script` en la parte superior de tu página. Asegúrate de cerrarlo en la siguiente línea.

    Tu navegador ejecutará cualquier JavaScript dentro de un elemento `script`, incluyendo jQuery.

    Dentro de tu elemento `script`, agrega este código: `$(document).ready(function() {` a tu `script`. Luego ciérralo en la siguiente línea (todavía dentro de tu elemento `script`) con: `});`

    Aprenderemos más sobre `functions` más tarde. Lo importante a saber es que el código que pongas dentro de esta `function` (función) se ejecutará tan pronto como tu navegador haya cargado tu página.

    Esto es importante porque sin tu `document ready function`, tu código podría ejecutarse antes de que se procese tu HTML, lo que causaría errores.

    ```html
    <!--Code below this line should not be changed-->
    <script>
        $(document).ready(function() {
        });
    </script>
    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
            <div class="col-xs-6">
                <h4>#left-well</h4>
                <div class="well" id="left-well">
                    <button class="btn btn-default target" id="target1">#target1</button>
                    <button class="btn btn-default target" id="target2">#target2</button>
                    <button class="btn btn-default target" id="target3">#target3</button>
                </div>
            </div>
            <div class="col-xs-6">
                <h4>#right-well</h4>
                <div class="well" id="right-well">
                    <button class="btn btn-default target" id="target4">#target4</button>
                    <button class="btn btn-default target" id="target5">#target5</button>
                    <button class="btn btn-default target" id="target6">#target6</button>
                </div>
            </div>
        </div>
    </div>
    ```

2. Apunta a elementos HTML con selectores usando jQuery

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/jquery/target-html-elements-with-selectors-using-jquery)

    **Ejercicio**

    Ahora tenemos una función `document ready`.

    Ahora vamos a escribir nuestra primera declaración de *jQuery*. Todas las funciones de *jQuery* comienzan con un `$`, usualmente conocido como un operador de signo de dólares.

    jQuery a menudo selecciona un elemento HTML con un selector, y luego le hace algo a ese elemento.

    Por ejemplo, hagamos que todos tus elementos `button` reboten. Simplemente agrega este código dentro de tu función document ready:

    ```js
    $("button").addClass("animated bounce");
    ```
    Ten en cuenta que ya hemos incluido tanto la librería *jQuery* como la librería *Animate.css* en segundo plano para que puedas usarlos en el editor. Así que estás usando *jQuery* para aplicar la clase *Animate.css* `bounce` a tus elementos `button`.

    ```js
    <script>
        $(document).ready(function() {
        $("button").addClass("animated bounce");
    });
    </script>

    <!-- Cambia solo el código encima de esta línea -->

    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
            <div class="col-xs-6">
            <h4>#left-well</h4>
                <div class="well" id="left-well">
                    <button class="btn btn-default target" id="target1">#target1</button>
                    <button class="btn btn-default target" id="target2">#target2</button>
                    <button class="btn btn-default target" id="target3">#target3</button>
                </div>
            </div>
            <div class="col-xs-6">
                <h4>#right-well</h4>
                <div class="well" id="right-well">
                    <button class="btn btn-default target" id="target4">#target4</button>
                    <button class="btn btn-default target" id="target5">#target5</button>
                    <button class="btn btn-default target" id="target6">#target6</button>
                </div>
            </div>
        </div>
    </div>
    ```


3. Apunta a elementos por clase usando jQuery

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/jquery/target-elements-by-class-using-jquery)

    **Ejercicio**
    Primero, apuntemos tus elementos `div` con la clase `well` usando el selector `$(".well")`.

    Ten en cuenta que, al igual que con las declaraciones CSS, escribes un `.` antes del nombre de la clase.

    Luego usa la función `.addClass()` de jQuery para agregar las clases `animated` y `shake`.

    Por ejemplo, puedes hacer que todos los elementos con la clase `text-primary` se agiten agregando lo siguiente a tu función `document ready function`:
    ```js
    $(".text-primary").addClass("animated shake");
    ```
    ```js
    <script>
        $(document).ready(function() {
            $("button").addClass("animated bounce");
            $(".well").addClass("animated shake");
        });
    </script>

    <!-- Cambia solo el código encima de esta línea -->

    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
            <div class="col-xs-6">
            <h4>#left-well</h4>
            <div class="well" id="left-well">
                <button class="btn btn-default target" id="target1">#target1</button>
                <button class="btn btn-default target" id="target2">#target2</button>
                <button class="btn btn-default target" id="target3">#target3</button>
            </div>
            </div>
            <div class="col-xs-6">
            <h4>#right-well</h4>
            <div class="well" id="right-well">
                <button class="btn btn-default target" id="target4">#target4</button>
                <button class="btn btn-default target" id="target5">#target5</button>
                <button class="btn btn-default target" id="target6">#target6</button>
            </div>
            </div>
        </div>
    </div>
    ```

4. Apunta a elementos por id usando jQuery

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/jquery/target-elements-by-id-using-jquery)

    **Ejercicio**
    Primero apunta a tu elemento `button` con el id `target3` usando el selector `$("#target3")`.

    Ten en cuenta que, al igual que con las declaraciones CSS, escribes un `#` antes del nombre del id.

    Luego usa la función `.addClass()` de jQuery para agregar las clases `animated` y `fadeOut`.

    Así es como harás que el elemento `button` con el id `target6` se desvanezca:
    ```js
    <script>
        $(document).ready(function() {
            $("button").addClass("animated bounce");
            $(".well").addClass("animated shake");
            $("#target3").addClass("animated fadeOut");
        });
    </script>

    <!-- Cambia solo el código encima de esta línea -->

    <div class="container-fluid">
    <h3 class="text-primary text-center">jQuery Playground</h3>
    <div class="row">
        <div class="col-xs-6">
        <h4>#left-well</h4>
        <div class="well" id="left-well">
            <button class="btn btn-default target" id="target1">#target1</button>
            <button class="btn btn-default target" id="target2">#target2</button>
            <button class="btn btn-default target" id="target3">#target3</button>
        </div>
        </div>
        <div class="col-xs-6">
        <h4>#right-well</h4>
        <div class="well" id="right-well">
            <button class="btn btn-default target" id="target4">#target4</button>
            <button class="btn btn-default target" id="target5">#target5</button>
            <button class="btn btn-default target" id="target6">#target6</button>
        </div>
        </div>
    </div>
    </div>
    ```

5. Elimina tus funciones jQuery

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/jquery/delete-your-jquery-functions)

    **Ejercicio**
    Elimina las tres funciones de jQuery que están dentro de tu `document ready function`, pero deja intacta tu función `document ready function` en sí.    
    ```js
    <script>
        $(document).ready(function() {            

        });
    </script>

    <!-- Cambia solo el código encima de esta línea -->

    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
            <div class="col-xs-6">
            <h4>#left-well</h4>
            <div class="well" id="left-well">
                <button class="btn btn-default target" id="target1">#target1</button>
                <button class="btn btn-default target" id="target2">#target2</button>
                <button class="btn btn-default target" id="target3">#target3</button>
            </div>
            </div>
            <div class="col-xs-6">
            <h4>#right-well</h4>
            <div class="well" id="right-well">
                <button class="btn btn-default target" id="target4">#target4</button>
                <button class="btn btn-default target" id="target5">#target5</button>
                <button class="btn btn-default target" id="target6">#target6</button>
            </div>
            </div>
        </div>
    </div>
    ```

6. Apunta al mismo elemento con múltiples selectores jQuery

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/jquery/target-the-same-element-with-multiple-jquery-selectors)

    **Ejercicio**
    Aunque es posible agregar múltiples clases en una sola llamada .`addClass()`, vamos a agregarlos al mismo elemento de tres maneras diferentes.

    Usando `.addClass()`, agrega solo una clase a la vez al mismo elemento, de tres maneras diferentes:

    Agrega la clase `animated` a todos los elementos con el tipo `button`.

    Agrega la clase `shake` a todos los botones con la clase `.btn`.

    Agrega la clase `btn-primary` al botón con id `#target1`.

    **Nota**: Solo debes apuntar a un elemento y agregar solo una clase a la vez. En total, tus tres selectores individuales terminarán agregando las tres clases `shake`, `animated`, y `btn-primary` a `#target1`.

    ```js
    <script>
        $(document).ready(function() {
            $("button").addClass("animated");
            $(".btn").addClass("shake");
            $("#target1").addClass("animated");
            $("#target1").addClass("shake");
            $("#target1").addClass("btn-primary");
        });
    </script>

    <!-- Cambia solo el código encima de esta línea -->

    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
            <div class="col-xs-6">
            <h4>#left-well</h4>
            <div class="well" id="left-well">
                <button class="btn btn-default target" id="target1">#target1</button>
                <button class="btn btn-default target" id="target2">#target2</button>
                <button class="btn btn-default target" id="target3">#target3</button>
            </div>
            </div>
            <div class="col-xs-6">
            <h4>#right-well</h4>
            <div class="well" id="right-well">
                <button class="btn btn-default target" id="target4">#target4</button>
                <button class="btn btn-default target" id="target5">#target5</button>
                <button class="btn btn-default target" id="target6">#target6</button>
            </div>
            </div>
        </div>
    </div>    
    ```

7. Elimina clases de un elemento con jQuery

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/jquery/remove-classes-from-an-element-with-jquery)

    **Ejercicio**
    Eliminemos la clase `btn-default` de todos nuestros elementos `button`.
    ```js
    <script>
        $(document).ready(function() {
            $("button").addClass("animated bounce");
            $(".well").addClass("animated shake");
            $("#target3").addClass("animated fadeOut");
            $("button").removeClass("btn-default");
        });
    </script>

    <!-- Cambia solo el código encima de esta línea -->

    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
            <div class="col-xs-6">
            <h4>#left-well</h4>
            <div class="well" id="left-well">
                <button class="btn btn-default target" id="target1">#target1</button>
                <button class="btn btn-default target" id="target2">#target2</button>
                <button class="btn btn-default target" id="target3">#target3</button>
            </div>
            </div>
            <div class="col-xs-6">
            <h4>#right-well</h4>
            <div class="well" id="right-well">
                <button class="btn btn-default target" id="target4">#target4</button>
                <button class="btn btn-default target" id="target5">#target5</button>
                <button class="btn btn-default target" id="target6">#target6</button>
            </div>
            </div>
        </div>
    </div>
    ```

8. Cambia el CSS de un elemento usando jQuery

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/jquery/change-the-css-of-an-element-using-jquery)

    **Ejercicio**
    Elimina tus selectores de jQuery, dejando `document ready function` vacío.

    Selecciona `target1` y cambia su color a rojo
    ```js
    <script>
        $(document).ready(function() {    
            $("#target1").css("color", "red");
        });
    </script>

    <!-- Cambia solo el código encima de esta línea -->

    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
            <div class="col-xs-6">
            <h4>#left-well</h4>
            <div class="well" id="left-well">
                <button class="btn btn-default target" id="target1">#target1</button>
                <button class="btn btn-default target" id="target2">#target2</button>
                <button class="btn btn-default target" id="target3">#target3</button>
            </div>
            </div>
            <div class="col-xs-6">
            <h4>#right-well</h4>
            <div class="well" id="right-well">
                <button class="btn btn-default target" id="target4">#target4</button>
                <button class="btn btn-default target" id="target5">#target5</button>
                <button class="btn btn-default target" id="target6">#target6</button>
            </div>
            </div>
        </div>
    </div>
    ```

9.  Deshabilita un elemento usando jQuery

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/jquery/disable-an-element-using-jquery)

    **Ejercicio**
    Deshabilita solo el botón `target1`.

    ```js
    <script>
        $(document).ready(function() {
            $("#target1").css("color", "red");
            $("#target1").prop("disabled", true);

        });
    </script>

    <!-- Cambia solo el código encima de esta línea -->

    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
            <div class="col-xs-6">
                <h4>#left-well</h4>
                <div class="well" id="left-well">
                    <button class="btn btn-default target" id="target1">#target1</button>
                    <button class="btn btn-default target" id="target2">#target2</button>
                    <button class="btn btn-default target" id="target3">#target3</button>
                </div>
            </div>
            <div class="col-xs-6">
                <h4>#right-well</h4>
                <div class="well" id="right-well">
                    <button class="btn btn-default target" id="target4">#target4</button>
                    <button class="btn btn-default target" id="target5">#target5</button>
                    <button class="btn btn-default target" id="target6">#target6</button>
                </div>
            </div>
        </div>
    </div>
    ```

10. Cambia el texto dentro de un elemento usando jQuery

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/jquery/change-text-inside-an-element-using-jquery)

    **Ejercicio**
    Cambia el botón con id `target4` enfatizando su texto.

    Ten en cuenta que mientras la etiqueta <i> tradicionalmente se usaba para enfatizar texto, fue adaptada para ser usada como etiqueta para iconos. La etiqueta <em> ahora es ampliamente aceptada como la etiqueta de énfasis. Cualquiera de las dos servirá para este desafío.
    ```js
    <script>
        $(document).ready(function() {
            $("#target1").css("color", "red");
            $("#target4").html("<em>#target4</em>");
        });
    </script>

    <!-- Cambia solo el código encima de esta línea -->

    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
            <div class="col-xs-6">
                <h4>#left-well</h4>
                <div class="well" id="left-well">
                    <button class="btn btn-default target" id="target1">#target1</button>
                    <button class="btn btn-default target" id="target2">#target2</button>
                    <button class="btn btn-default target" id="target3">#target3</button>
                </div>
            </div>
            <div class="col-xs-6">
                <h4>#right-well</h4>
                <div class="well" id="right-well">
                    <button class="btn btn-default target" id="target4">#target4</button>
                    <button class="btn btn-default target" id="target5">#target5</button>
                    <button class="btn btn-default target" id="target6">#target6</button>
                </div>
            </div>
        </div>
    </div>
    ```

11. Remueve un elemento usando jQuery

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/jquery/remove-an-element-using-jquery)

    **Ejercicio**
    Remueve el elemento `#target4` de la página utilizando la función `.remove()`.
    ```js
    <script>
        $(document).ready(function() {
            $("#target1").css("color", "red");
            $("#target1").prop("disabled", true);
            $("#target4").remove();
        });
    </script>

    <!-- Cambia solo el código encima de esta línea -->

    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
            <div class="col-xs-6">
                <h4>#left-well</h4>
                <div class="well" id="left-well">
                    <button class="btn btn-default target" id="target1">#target1</button>
                    <button class="btn btn-default target" id="target2">#target2</button>
                    <button class="btn btn-default target" id="target3">#target3</button>
                </div>
            </div>
            <div class="col-xs-6">
                <h4>#right-well</h4>
                <div class="well" id="right-well">
                    <button class="btn btn-default target" id="target4">#target4</button>
                    <button class="btn btn-default target" id="target5">#target5</button>
                    <button class="btn btn-default target" id="target6">#target6</button>
                </div>
            </div>
        </div>
    </div>
    ```

12. Usa appendTo para mover elementos con jQuery

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/jquery/use-appendto-to-move-elements-with-jquery)

    **Ejercicio**
    Mueve tu elemento `target2` desde tu `left-well` a tu `right-well`.
    ```js
    <script>
        $(document).ready(function() {
            $("#target1").css("color", "red");
            $("#target1").prop("disabled", true);
            $("#target4").remove();
            $("#target2").appendTo("#right-well");
        });
    </script>

    <!-- Cambia solo el código encima de esta línea -->

    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
            <div class="col-xs-6">
                <h4>#left-well</h4>
                <div class="well" id="left-well">
                    <button class="btn btn-default target" id="target1">#target1</button>
                    <button class="btn btn-default target" id="target2">#target2</button>
                    <button class="btn btn-default target" id="target3">#target3</button>
                </div>
            </div>
            <div class="col-xs-6">
                <h4>#right-well</h4>
                <div class="well" id="right-well">
                    <button class="btn btn-default target" id="target4">#target4</button>
                    <button class="btn btn-default target" id="target5">#target5</button>
                    <button class="btn btn-default target" id="target6">#target6</button>
                </div>
            </div>
        </div>
    </div>
    ```
    
13. Clona un elemento usando jQuery

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/jquery/clone-an-element-using-jquery)

    **Ejercicio**
    Clona tu elemento `target5` y agrégalo a tu `left-well`.
    ```js
    <script>
        $(document).ready(function() {
            $("#target1").css("color", "red");
            $("#target1").prop("disabled", true);
            $("#target4").remove();
            $("#target2").appendTo("#right-well");
            $("#target5").clone().appendTo("#left-well");
        });
    </script>

    <!-- Cambia solo el código encima de esta línea -->

    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
            <div class="col-xs-6">
                <h4>#left-well</h4>
                <div class="well" id="left-well">
                    <button class="btn btn-default target" id="target1">#target1</button>
                    <button class="btn btn-default target" id="target2">#target2</button>
                    <button class="btn btn-default target" id="target3">#target3</button>
                </div>
            </div>
            <div class="col-xs-6">
                <h4>#right-well</h4>
                <div class="well" id="right-well">
                    <button class="btn btn-default target" id="target4">#target4</button>
                    <button class="btn btn-default target" id="target5">#target5</button>
                    <button class="btn btn-default target" id="target6">#target6</button>
                </div>
            </div>
        </div>
    </div>    
    ```

14. Apunta al padre de un elemento usando jQuery

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/jquery/target-the-parent-of-an-element-using-jquery)

    **Ejercicio**
    Dale al padre del elemento #target1 un color de fondo rojo.    
    ```js
    <script>
        $(document).ready(function() {
            $("#target1").css("color", "red");
            $("#target1").prop("disabled", true);
            $("#target4").remove();
            $("#target2").appendTo("#right-well");
            $("#target5").clone().appendTo("#left-well");
            $("#target1").parent().css("background-color", "red")
        });
    </script>

    <!-- Cambia solo el código encima de esta línea -->

    <body>
        <div class="container-fluid">
            <h3 class="text-primary text-center">jQuery Playground</h3>
            <div class="row">
                <div class="col-xs-6">
                    <h4>#left-well</h4>
                    <div class="well" id="left-well">
                    <button class="btn btn-default target" id="target1">#target1</button>
                    <button class="btn btn-default target" id="target2">#target2</button>
                    <button class="btn btn-default target" id="target3">#target3</button>
                    </div>
                </div>
                <div class="col-xs-6">
                    <h4>#right-well</h4>
                    <div class="well" id="right-well">
                    <button class="btn btn-default target" id="target4">#target4</button>
                    <button class="btn btn-default target" id="target5">#target5</button>
                    <button class="btn btn-default target" id="target6">#target6</button>
                    </div>
                </div>
            </div>
        </div>
    </body>
    ```
    
15. Apunta al hijo de un elemento usando jQuery

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/jquery/target-the-children-of-an-element-using-jquery)

    **Ejercicio**
    Dale a todos los hijos de tu elemento `right-well` el color naranja.

    ```js
    <script>
        $(document).ready(function() {
            $("#target1").css("color", "red");
            $("#target1").prop("disabled", true);
            $("#target4").remove();
            $("#target2").appendTo("#right-well");
            $("#target5").clone().appendTo("#left-well");
            $("#target1").parent().css("background-color", "red");
            $("#right-well").children().css("color", "orange")
        });
    </script>

    <!-- Cambia solo el código encima de esta línea -->

    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
            <div class="col-xs-6">
                <h4>#left-well</h4>
                <div class="well" id="left-well">
                    <button class="btn btn-default target" id="target1">#target1</button>
                    <button class="btn btn-default target" id="target2">#target2</button>
                    <button class="btn btn-default target" id="target3">#target3</button>
                </div>
            </div>
            <div class="col-xs-6">
                <h4>#right-well</h4>
                <div class="well" id="right-well">
                    <button class="btn btn-default target" id="target4">#target4</button>
                    <button class="btn btn-default target" id="target5">#target5</button>
                    <button class="btn btn-default target" id="target6">#target6</button>
                </div>
            </div>
        </div>
    </div>
    ```

16. Apunta a un hijo específico de un elemento usando jQuery

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/jquery/target-a-specific-child-of-an-element-using-jquery)

    **Ejercicio**
    Haz que el segundo niño en cada uno de sus elementos de "well" rebote. Debes seleccionar los hijos de los elementos con la clase `target`.
    ```js
    <script>
        $(document).ready(function() {
            $("#target1").css("color", "red");
            $("#target1").prop("disabled", true);
            $("#target4").remove();
            $("#target2").appendTo("#right-well");
            $("#target5").clone().appendTo("#left-well");
            $("#target1").parent().css("background-color", "red");
            $("#right-well").children().css("color", "orange");
            $(".target:nth-child(2)").addClass("animated bounce");
        });
    </script>

    <!-- Cambia solo el código encima de esta línea -->

    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
            <div class="col-xs-6">
                <h4>#left-well</h4>
                <div class="well" id="left-well">
                    <button class="btn btn-default target" id="target1">#target1</button>
                    <button class="btn btn-default target" id="target2">#target2</button>
                    <button class="btn btn-default target" id="target3">#target3</button>
                </div>
            </div>
            <div class="col-xs-6">
                <h4>#right-well</h4>
                <div class="well" id="right-well">
                    <button class="btn btn-default target" id="target4">#target4</button>
                    <button class="btn btn-default target" id="target5">#target5</button>
                    <button class="btn btn-default target" id="target6">#target6</button>
                </div>
            </div>
        </div>
    </div>
    ```

17. Apunta a elementos pares utilizando jQuery

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/jquery/target-even-elements-using-jquery)

    **Ejercicio**
    Intenta seleccionar todos los elementos pares `target` y darle las clases de `animated` y `shake`. Recuerda que *even* se refiere a la posición de los elementos con un sistema de indexado desde cero en mente.
    ```js
    <script>
        $(document).ready(function() {
            $("#target1").css("color", "red");
            $("#target1").prop("disabled", true);
            $("#target4").remove();
            $("#target2").appendTo("#right-well");
            $("#target5").clone().appendTo("#left-well");
            $("#target1").parent().css("background-color", "red");
            $("#right-well").children().css("color", "orange");
            $("#left-well").children().css("color", "green");
            $(".target:nth-child(2)").addClass("animated bounce");
            $(".target:even").addClass("animated shake");

        });
    </script>

    <!-- Cambia solo el código encima de esta línea -->

    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
            <div class="col-xs-6">
                <h4>#left-well</h4>
                <div class="well" id="left-well">
                    <button class="btn btn-default target" id="target1">#target1</button>
                    <button class="btn btn-default target" id="target2">#target2</button>
                    <button class="btn btn-default target" id="target3">#target3</button>
                </div>
            </div>
            <div class="col-xs-6">
                <h4>#right-well</h4>
                <div class="well" id="right-well">
                    <button class="btn btn-default target" id="target4">#target4</button>
                    <button class="btn btn-default target" id="target5">#target5</button>
                    <button class="btn btn-default target" id="target6">#target6</button>
                </div>
            </div>
        </div>
    </div>
    ```

18. Usa jQuery para modificar la página completa

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/jquery/use-jquery-to-modify-the-entire-page)

    **Ejercicio**
    Agrega las clases `animated` y `hinge` a tu elemento `body`.
    ```js
    <script>
        $(document).ready(function() {
            $("#target1").css("color", "red");
            $("#target1").prop("disabled", true);
            $("#target4").remove();
            $("#target2").appendTo("#right-well");
            $("#target5").clone().appendTo("#left-well");
            $("#target1").parent().css("background-color", "red");
            $("#right-well").children().css("color", "orange");
            $("#left-well").children().css("color", "green");
            $(".target:nth-child(2)").addClass("animated bounce");
            $(".target:even").addClass("animated shake");
            $("body").addClass("animated hinge");
        });
    </script>

    <!-- Cambia solo el código encima de esta línea -->

    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
            <div class="col-xs-6">
                <h4>#left-well</h4>
                <div class="well" id="left-well">
                    <button class="btn btn-default target" id="target1">#target1</button>
                    <button class="btn btn-default target" id="target2">#target2</button>
                    <button class="btn btn-default target" id="target3">#target3</button>
                </div>
            </div>
            <div class="col-xs-6">
                <h4>#right-well</h4>
                <div class="well" id="right-well">
                    <button class="btn btn-default target" id="target4">#target4</button>
                    <button class="btn btn-default target" id="target5">#target5</button>
                    <button class="btn btn-default target" id="target6">#target6</button>
                </div>
            </div>
        </div>
    </div>
    ```




# SASS

En este curso de Sass, aprenderás cómo almacenar datos en variables, anidar CSS, crear estilos reutilizables con mixins, añadir lógica y bucles a tus estilos, y más.

1. Almacena datos con variables Sass

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/sass/store-data-with-sass-variables)

    **Ejercicio**
    Crea una variable `$text-color` y asígnala como `red`. Luego, cambia el valor de la propiedad `color` para el `.blog-post` y `h2` a la variable `$text-color`.
    ```js
    <style type='text/scss'>
        $text-color: red;
        .header{
            text-align: center;
        }
        .blog-post, h2 {
            color: $text-color;
        }
    </style>

    <h1 class="header">Learn Sass</h1>
    <div class="blog-post">
        <h2>Some random title</h2>
        <p>This is a paragraph with some random text in it</p>
     </div>
     <div class="blog-post">
        <h2>Header #2</h2>
        <p>Here is some more random text.</p>
     </div>
     <div class="blog-post">
        <h2>Here is another header</h2>
        <p>Even more random text within a paragraph</p>
    </div>
    ```

2. Anida CSS con Sass

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/sass/nest-css-with-sass)

    **Ejercicio**
    Utiliza la técnica de anidación mostrada anteriormente para reorganizar las reglas CSS para ambos hijos del elemento `.blog-post`. Para fines de prueba, el `h1` debe ir antes del elemento `p`.
    ```js
    <style type='text/scss'>
        .blog-post {
            h1 {
            text-align: center;
            color: blue;
            }
            p {
            font-size: 20px;
            }
        }  
    </style>

    <div class="blog-post">
        <h1>Blog Title</h1>
        <p>This is a paragraph</p>
    </div>
    ```

3. Crea CSS reutilizable con Mixins

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/sass/create-reusable-css-with-mixins)

    **Ejercicio**
    Escribe un mixin para `border-radius` y dale un parámetro `$radius`. Debe utilizar todos los prefijos de proveedor del ejemplo. Luego usa el mixin `border-radius` para dar al elemento `#awesome` un border radius de `15px`.

    ```js
    <style type='text/scss'>
        @mixin border-radius($radius){
            -webkit-border-radius: $radius;
            -moz-border-radius: $radius;
            -ms-border-radius: $radius;
            border-radius: $radius;
        }

        #awesome {
            width: 150px;
            height: 150px;
            background-color: green;
            @include border-radius(15px);
        }
    </style>

    <div id="awesome"></div>
    ```

4. Usa @if y @else para agregar lógica a tus estilos

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/sass/use-if-and-else-to-add-logic-to-your-styles)

    **Ejercicio**
    Crea un mixin llamado `border-stroke` que toma un parámetro `$val`. El mixin debe comprobar las siguientes condiciones utilizando `@if`, `@else if`, y `@else`:

    ```
    light - 1px solid black
    medium - 3px solid black
    heavy - 6px solid black
    ```

    Si `$val` no es `light`, `medium`, o `heavy`, el borde debe establecerse en `none`.

    ```js
    <style type='text/scss'>
        @mixin border-stroke($val){
            @if $val == light{                
                        border: 1px solid black;
            }
            @else if $val == medium {
                        border: 3px solid black;
            }
            @else if $val == heavy {
                        border: 6px solid black;
            }
            @else {
                        border: none;
            }            
        }
        #box {
            width: 150px;
            height: 150px;
            background-color: red;
            @include border-stroke(medium);
        }
    </style>

    <div id="box"></div>
    ```

5. Usa @for para crear un bucle Sass

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/sass/use-for-to-create-a-sass-loop)

    **Ejercicio**
    Escribe una directiva `@for` que tome una variable `$j` que vaya de 1 a 6.

    Debes crear 5 clases llamadas `.text-1` a `.text-5` donde cada una tiene un `font-size` establecido en `15px` multiplicado por el índice.
    ```js
    <style type='text/scss'>
        @for $i from 1 through 5 {
            .text-#{$i} { font-size: 15px * $i; }
        }
    </style>

    <p class="text-1">Hello</p>
    <p class="text-2">Hello</p>
    <p class="text-3">Hello</p>
    <p class="text-4">Hello</p>
    <p class="text-5">Hello</p>
    ```

6. Usa @each para asignar elementos en una lista

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/sass/use-each-to-map-over-items-in-a-list)

    **Ejercicio**
    Escribe una directiva `@each` que recorra una lista: `blue`, `black`, `red` y asigna cada variable a una clase `.color-bg`, donde la parte `color` cambia para cada elemento. Cada clase debe establecer el `background-color` al respectivo color.

    ```js
    <style type='text/scss'>

        @each $color in blue, black, red {
            .#{$color}-bg {background-color: $color;}
        }

        div {
            height: 200px;
            width: 200px;
        }
    </style>

    <div class="blue-bg"></div>
    <div class="black-bg"></div>
    <div class="red-bg"></div>
    ```

7. Aplica un estilo hasta que se cumpla una condición con @while

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/sass/apply-a-style-until-a-condition-is-met-with-while)

    **Ejercicio**
    Usa `@while` para crear una serie de clases con diferentes `font-sizes`.

    Debe haber 5 clases diferentes desde `text-1` hasta `text-5`. Luego ajusta `font-size` a `15px` multiplicado por el número de índice actual. ¡Asegúrate de evitar un bucle infinito!

    ```js
    <style type='text/scss'>
        $x: 1;
        @while $x < 6 {
            .text-#{$x} { font-size: 15px * $x;}
            $x: $x + 1;
        }
    </style>

    <p class="text-1">Hello</p>
    <p class="text-2">Hello</p>
    <p class="text-3">Hello</p>
    <p class="text-4">Hello</p>
    <p class="text-5">Hello</p>
    ```

8. Divide tus estilos en trozos más pequeños con parciales

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/sass/split-your-styles-into-smaller-chunks-with-partials)

    **Ejercicio**
    Escribe una instrucción `@import` para importar un nombre parcial `_variables.scss` en el archivo main.scss.

    ```js
    @import 'variables'
    ```

9. Hereda un conjunto de estilos CSS a otro elemento

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/sass/extend-one-set-of-css-styles-to-another-element)

    **Ejercicio**
    Crea una clase `.info-important` que hereda `.info` y también tiene un `background-color` establecido en magenta.

    ```js
    <style type='text/scss'>
        h3{
            text-align: center;
        }
        .info{
            width: 200px;
            border: 1px solid black;
            margin: 0 auto;
        }
        .info-important{
            @extend .info;
            background-color: magenta;
        }
    </style>
    <h3>Posts</h3>
    <div class="info-important">
        <p>This is an important post. It should extend the class ".info" and have its own CSS styles.</p>
    </div>

    <div class="info">
        <p>This is a simple post. It has basic styling and can be extended for other uses.</p>
    </div>
    ```

# React js

En este curso, aprenderás cómo crear diferentes componentes de *React*, administrar las propiedades de estado de los datos, usar diferentes métodos de ciclo de vida como `componentDidMount` y mucho más.

1. Crea un elemento JSX simple

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react/create-a-simple-jsx-element)

    **Ejercicio**
    El código actual utiliza JSX para asignar un elemento div a la constante JSX. Reemplaza el div por un elemento h1 y añade el texto Hello JSX! dentro de él.
    ```js
    const JSX = <h1>Hello JSX!</h1>;
    ```
    
2. Crea un elemento JSX complejo

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react/create-a-complex-jsx-element)

    **Ejercicio**    
    Define una nueva constante `JSX` que renderice un `div` que contenga los siguientes elementos en orden:

    Un `h1`, un `p` y una lista desordenada que contiene tres elementos `li`. Puedes incluir cualquier texto que desees dentro de cada elemento.

    **Nota:** Al renderizar varios elementos de esta forma, puedes envolverlos todos entre paréntesis, pero no es estrictamente necesario. Observa también que este desafío usa una etiqueta div para envolver a todos los elementos hijos dentro de un solo elemento principal. Si eliminas el div, JSX ya no se podrá transpilar. Ten esto en cuenta, ya que también será así cuando devuelvas elementos JSX en los componentes de React.
    ```js
    const JSX = <div>
                    <h1>CANASTA</h1>
                    <p>con latas</p>
                    <ul>
                        <li>Banana</li>
                        <li>Fresa</li>
                        <li>Mango</li>
                    </ul>
                </div>  
    ;
    ```

3. Agrega comentarios en JSX

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react/add-comments-in-jsx)

    **Ejercicio**
    El editor de código tiene un elemento JSX similar al que creaste en el último desafío. Agrega un comentario en algún lugar dentro del elemento `div`, sin modificar los elementos `h1` o `p`.    
    ```js
    const JSX = (
        <div>
            {/* Comentario */}
            <h1>This is a block of JSX</h1>
            <p>Here's a subtitle</p>
        </div>
    );
    ```

4. Renderiza elementos HTML al DOM

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react/render-html-elements-to-the-dom)
    
    **Ejercicio**
    El editor de código tiene un componente JSX simple. Usa el método `ReactDOM.render()` para renderizar este componente a la página. Puedes pasar elementos JSX definidos directamente como el primer argumento y utilizar `document.getElementById()` para seleccionar el nodo DOM al que renderizar. Hay un `div` con `id='challenge-node'` disponible para que lo uses. Asegúrate de no cambiar la constante `JSX`.

    ```js
    const JSX = (
        <div>
            <h1>Hello World</h1>
            <p>Lets render this to the DOM</p>
        </div>
    );
    // Cambia el código debajo de esta línea
    ReactDOM.render(JSX, document.getElementById('challenge-node'))
    ```

5. Define una clase HTML en JSX

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react/define-an-html-class-in-jsx)

    **Ejercicio**
    Aplica una clase `myDiv` al `div` proporcionado en el código JSX.        
    ```js
    const JSX = (
        <div className = "myDiv">
            <h1>Add a class to this div</h1>
        </div>
    );
    ```
    
6. Aprende sobre las etiquetas JSX auto-cerradas

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react/learn-about-self-closing-jsx-tags)
    
    **Ejercicio**
    Corrige los errores en el editor de código para que sea JSX válido y se transpile exitosamente. Asegúrate de no cambiar nada del contenido: sólo tienes que cerrar las etiquetas donde se necesite.    
    ```js
    const JSX = (
        <div>
            <h2>Welcome to React!</h2> <br/>
            <p>Be sure to close all tags!</p>
            <hr/>
        </div>
    );
    ```

7. Crea un componente funcional sin estado

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react/create-a-stateless-functional-component)
    
    **Ejercicio**
    El editor de código tiene una función llamada `MyComponent`. Completa esta función para que retorne un único elemento `div` que contiene alguna cadena de texto.

    **Nota**: El texto se considera hijo del elemento `div`, por lo que no podrás utilizar una etiqueta de autocierre.

    ```js
    const MyComponent = function() {
        // Cambia el código debajo de esta línea
        return (
            <div className='customClass' >
            text
            </div>
        );
        // Cambia el código encima de esta línea
    }
    ```

8. Crea un componente de React

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react/create-a-react-component)
    
    **Ejercicio**
    `MyComponent` está definido en el editor de código usando la sintaxis de clase. Termina de escribir el método `render` para que devuelva un elemento `div` que contiene un `h1` con el texto `Hello React!`. 

    ```js
    class MyComponent extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            // Cambia el código debajo de esta línea
            return (
                <div>
                    <h1>Hello React!</h1>
                </div>
            );
            // Cambia el código encima de esta línea
        }
    };
    ```

9. Crear un componente con composición

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react/create-a-component-with-composition)
    
    **Ejercicio**
    En el editor de código, hay un componente funcional simple llamado `ChildComponent` y un componente de clase llamado `ParentComponent`. Compón los dos juntos renderizando el `ChildComponent` dentro del `ParentComponent`. Asegúrate de cerrar la etiqueta `ChildComponent` con una barra diagonal.

    **Nota**: `ChildComponent` se define con una función de flecha ES6 porque es una práctica muy común al usar React. Sin embargo, has de saber que se trata de una función simple. Si no estás familiarizado con la sintaxis de la función flecha, consulta la sección de JavaScript.    
    ```js
    const ChildComponent = () => {
        return (
            <div>
            <p>I am the child</p>
            </div>
        );
    };

    class ParentComponent extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return (
                <div>
                    <h1>I am the parent</h1>
                    { /* Cambia el código debajo de esta línea */ }

                    <ChildComponent />

                    { /* Cambia el código encima de esta línea */ }
                </div>
            );
        }
    };
    ```

10. Utiliza React para procesar componentes anidados

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react/use-react-to-render-nested-components)
        
    **Ejercicio**    
    Hay dos componentes funcionales definidos en el editor de código, llamados `TypesOfFruit` y `Fruits`. Toma el componente `TypesOfFruit` y organízalo, o anídalo, dentro del componente `Fruits`. Luego toma el componente `Fruits` y anídalo dentro del componente `TypesOfFood`. El resultado debe ser un componente hijo, anidado dentro de un componente padre, ¡que a su vez está anidado dentro de un componente padre!

    ```js
    const TypesOfFruit = () => {
        return (
            <div>
                <h2>Fruits:</h2>
                <ul>
                    <li>Apples</li>
                    <li>Blueberries</li>
                    <li>Strawberries</li>
                    <li>Bananas</li>
                </ul>
            </div>
        );
    };

    const Fruits = () => {
    return (
        <div>
        { /* Cambia el código debajo de esta línea */ }
        <TypesOfFruit />
        { /* Cambia el código encima de esta línea */ }
        </div>
    );
    };

    class TypesOfFood extends React.Component {
        constructor(props) {
            super(props);
        }

        render() {
            return (
            <div>
                <h1>Types of Food:</h1>
                { /* Cambia el código debajo de esta línea */ }
                <Fruits />
                { /* Cambia el código encima de esta línea */ }
            </div>
            );
        }
    };    
    ```

11. Compón componentes de React

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react/compose-react-components)
        
    **Ejercicio**    
    En el editor de código, el componente `TypesOfFood` ya está incluyendo (renderizando) un componente llamado `Vegetables`. Además, también está el componente `Fruits` del último desafío.

    Anida dos componentes dentro de `Fruits`: primero `NonCitrus` y luego `Citrus`. Ambos componentes se te proporcionan en segundo plano. A continuación, anida el componente de clase `Fruits` en el componente `TypesOfFood`, debajo del encabezado `h1` y encima de `Vegetables`. El resultado debe ser una serie de componentes anidados, que utiliza dos tipos de componentes diferentes.
    ```js
    class Fruits extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return (
            <div>
                <h2>Fruits:</h2>
                { /* Cambia el código debajo de esta línea */ }
                <NonCitrus  />
                <Citrus  />
                { /* Cambia el código encima de esta línea */ }
            </div>
            );
        }
    };

    class TypesOfFood extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return (
                <div>
                    <h1>Types of Food:</h1>
                    { /* Cambia el código debajo de esta línea */ }
                    <Fruits  />
                    { /* Cambia el código encima de esta línea */ }
                    <Vegetables />
                </div>
            );
        }
    };    
    ```

12. Renderiza un componente de clase al DOM
    
    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react/render-a-class-component-to-the-dom)
        
    **Ejercicio**    
    Los componentes `Fruits` y `Vegetables` se definen por ti tras bambalinas. Renderiza ambos componentes como hijos del componente `TypesOfFood`, y luego renderiza `TypesOfFood` al DOM. Hay un `div` con `id='challenge-node'` disponible para que lo uses.
    ```js
    class TypesOfFood extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return (
                <div>
                    <h1>Types of Food:</h1>
                    {/* Cambia el código debajo de esta línea */}
                    <Fruits  />
                    <Vegetables  />
                    {/* Cambia el código encima de esta línea */}
                </div>
            );
        }
    };

    // Cambia el código debajo de esta línea
    ReactDOM.render(<TypesOfFood  />, document.getElementById('challenge-node'));    
    ```

13. Escribe un componente React desde cero
    
    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react/write-a-react-component-from-scratch)

    **Ejercicio**    
    Define una clase `MyComponent` que herede de `React.Component`. Su método render debe devolver un `div` que contenga una etiqueta `h1` con el texto: `My First React Component!` en él. Utiliza este texto de manera exacta, las mayúsculas, minúsculas y puntuación son importantes. También asegúrate de llamar el constructor de tu componente.

    Renderiza este componente al DOM usando `ReactDOM.render()`. Hay un `div` con `id='challenge-node'` disponible para que lo uses.

    ```js
    class MyComponent extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
                return (
                    <div>
                        <h1>My First React Component!</h1>                    
                    </div>
                );
        }
    };

    ReactDOM.render(<MyComponent  />, document.getElementById('challenge-node'));
    ```

14. Pasa "props" a un componente funcional sin estado

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react/pass-props-to-a-stateless-functional-component)

    **Ejercicio**    
    Hay componentes `Calendar` y `CurrentDate` en el editor de código. Al prensentar `CurrentDate` desde el componente `Calendar`, pasa una propiedad de `date` asignada a la fecha actual desde el objeto `Date` de JavaScript. Luego, accede a este `prop` dentro del componente `CurrentDate`, mostrando su valor dentro de las etiquetas `p`. Tenga en cuenta que los valores `prop` se evalúen como JavaScript, deben estar encerrados dentro de corchetes, por ejemplo `date={Date()}`.
    
    ```js
    const CurrentDate = (props) => {
        return (
            <div>
                { /* Cambia el código debajo de esta línea */ }
                <p>The current date is: {props.date} </p>
                { /* Cambia el código encima de esta línea */ }
            </div>
        );
    };

    class Calendar extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return (
                <div>
                    <h3>What date is it?</h3>
                    { /* Cambia el código debajo de esta línea */ }
                    <CurrentDate date={Date()} />
                    { /* Cambia el código encima de esta línea */ }
                </div>
            );
        }
    };    
    ```
    
15. Pasa un arreglo como "props"

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react/pass-an-array-as-props)

    **Ejercicio**
    Están los componentes `List` y `ToDo` en el editor de código. Al renderizar cada `List` del componente `ToDo`, pasa una propiedad tasks asignada a un arreglo de tareas pendientes, por ejemplo `["walk dog", "workout"]`. Luego, accede a este arreglo de `tasks` en el componente `List`, mostrando su valor dentro del elemento `p`. Usa `join(", ")` para mostrar el arreglo `props.tasks` en el elemento `p` como una lista separada por comas. La lista de hoy debe tener al menos 2 tareas y la de mañana debe tener al menos 3 tareas.

    ```js
    const List = (props) => {
        { /* Cambia el código debajo de esta línea */ }
        return <p>{props.tasks.join(", ")}</p>;
        { /* Cambia el código encima de esta línea */ }
    };

    class ToDo extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return (
                <div>
                    <h1>To Do Lists</h1>
                    <h2>Today</h2>
                    { /* Cambia el código debajo de esta línea */ }
                    <List tasks={["Walk", "Cook", "Bake"]} />
                    <h2>Tomorrow</h2>
                    <List tasks={["Study", "Code", "Eat"]} />
                    { /* Cambia el código encima de esta línea */ }
                </div>
            );
        }
    };        
    ```
    **Explicacion**
    * El método `.join(", ")` se utiliza para tomar cada elemento de la matriz y unirlos en una cadena que se mostrará.

    * Estamos usando la modularidad de React en este ejemplo para mostrar las tareas pasadas por dos componentes diferentes a un componente común que representa el HTML final.


16. Usa props predeterminadas

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react/use-default-props)

    **Ejercicio**
    El editor de código muestra un componente `ShoppingCart`. Define props predeterminadas en este componente que especifican una prop `items` con un valor de `0`.

    ```js
    const ShoppingCart = (props) => {
        return (
            <div>
            <h1>Shopping Cart Component</h1>
            </div>
        )
    };
    // Cambia el código debajo de esta línea
    ShoppingCart.defaultProps = {
        items: 0
    };        
    ```

17. Reemplaza las "props" predeterminadas

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react/override-default-props)

    **Ejercicio**
    El componente `ShoppingCart` ahora renderiza un componente hijo `Items`. Este componente `Items` tiene una prop predeterminada `quantity` establecida al entero `0`. Reemplaza la prop predeterminada pasando un valor de 10 para `quantity`.

    **Nota**: Recuerda que la sintaxis para agregar una prop a un componente se parece a la sintaxis para agregar atributos en un elemento HTML. Sin embargo, dado que el valor de `quantity` es un entero, no irá entre comillas pero debe estar envuelto entre llaves. Por ejemplo, `{100}`. Esta sintaxis le dice a JSX que interprete el valor dentro de las llaves directamente como JavaScript.

    ```js
    const Items = (props) => {
        return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
    }

    Items.defaultProps = {
        quantity: 0
    }

    class ShoppingCart extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            { /* Cambia el código debajo de esta línea */ }
            return <Items quantity={10}/>
            { /* Cambia el código encima de esta línea */ }
        }
    };        
    ```

18. Usa PropTypes para definir las props que esperas

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react/use-proptypes-to-define-the-props-you-expect)
    
    **Ejercicio**
    Define `propTypes` para el componente `Items` de tal manera que `quantity` sea una prop obligatoria y verificar que sea de tipo `number`.

    ```js
    const Items = (props) => {
        return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
    };

    // Cambia el código debajo de esta línea
    Items.propTypes = { 
        quantity: PropTypes.number.isRequired 
    }
    // Cambia el código encima de esta línea

    Items.defaultProps = {
        quantity: 0
    };

    class ShoppingCart extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return <Items />
        }
    };        
    ```

19. Accede a propiedades "props" usando this.props

    Leccion original [FCC]()
    **Ejercicio**
    Renderiza una instancia del componente `Welcome` en el componente padre `App`. Aquí, dale a `Welcome` un prop de `name` y asígnale un valor de una cadena. Dentro del hijo, `Welcome`, accede el prop `name` dentro de las etiquetas `strong`.

    ```js
    class App extends React.Component {
        constructor(props) {
            super(props);

        }
        render() {
            return (
                <div>
                    { /* Cambia el código debajo de esta línea */ }
                    <Welcome name="Jessica"/>
                    { /* Cambia el código encima de esta línea */ }
                </div>
            );
        }
    };

    class Welcome extends React.Component {
        constructor(props) {
            super(props);

        }
        render() {
            return (
                <div>
                { /* Cambia el código debajo de esta línea */ }
                <p>Hello, <strong>{this.props.name}</strong>!</p>
                { /* Cambia el código encima de esta línea */ }
                </div>
            );
        }
    };        
    ```

20. Revisa el uso de "props" con componentes funcionales sin estado

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react/review-using-props-with-stateless-functional-components)
    
    **Ejercicio**
    El editor de código tiene un componente `CampSite` que renderiza un componente `Camper` como un componente hijo. Define el componente `Camper` y asigna los props predeterminados de `{ name: 'CamperBot' }`. Dentro del componente `Camper`, renderiza el código que quieras, pero asegúrate de tener un elemento `p` que incluya sólo el valor `name` que se pasa como un prop. Por último, define `propTypes` en el componente `Camper` para requerir que `name` sea proporcionado como un prop y verifique que sea de tipo `string`.

    ```js
    class CampSite extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return (
                <div>
                    <Camper/>
                </div>
            );
        }
    };
    // Cambia el código debajo de esta línea
    const Camper = props => <p>{props.name}</p>;

    Camper.defaultProps = {
        name: "CamperBot"
    };

    Camper.propTypes = {
        name: PropTypes.string.isRequired
    };        
    ```

21. Crea un componente de estado

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react/create-a-stateful-component)

    **Ejercicio**
    Hay un componente en el editor de código que está intentando renderizar una propiedad `firstName` desde su `state`. Sin embargo, no hay ningún `state` definido. Inicia el componente con `state` en el `constructor` y asigna tu nombre a la propiedad `firstName`.

    ```js
    class StatefulComponent extends React.Component {
        constructor(props) {
            super(props);
            // Cambia solo el código debajo de esta línea
            this.state = {
                firstName : "firstName"
            }
            // Cambia solo el código encima de esta línea
        }
        render() {
            return (
            <div>
                <h1>{this.state.firstName}</h1>
            </div>
            );
        }
    };        
    ```

22. Renderiza el estado en la interfaz de usuario

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react/render-state-in-the-user-interface)
    
    **Ejercicio**
    En el editor de código, `MyComponent` ya tiene estado. Define una etiqueta `h1` en el método de renderizado del componente que renderiza el valor del `name` desde el estado del componente.

    **Note**: El `h1` solo debe renderizar el valor de `state` y nada más. En JSX, cualquier código que escribas con llaves `{ }` será tratado como JavaScript. Así que para acceder al valor desde el `state` solo hay que encerrar la referencia entre llaves.

    ```js
    class MyComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                name: 'freeCodeCamp'
            }
        }
        render() {
            return (
            <div>
                { /* Cambia el código debajo de esta línea */ }
                <h1>
                {this.state.name}
                </h1>
                { /* Cambia el código encima de esta línea */ }
            </div>
            );
        }
    };        
    ```

23. Otra manera de renderizar el estado en la interfaz de usuario

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react/render-state-in-the-user-interface-another-way)

    **Ejercicio**
    En el método de renderización de `MyComponent`, define una `const` llamada `name` y asígnalo igual al valor del nombre en el `state` del componente. Debido a que puedes escribir JavaScript directamente en esta parte del código, no tienes que incluir esta referencia entre llaves.

    A continuación, en la sentencia return, renderiza este valor en una etiqueta `h1` usando la variable `name`. Recuerda, necesitas usar la sintaxis JSX (llaves para JavaScript) en la sentencia return.

    ```js        
    class MyComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                name: 'freeCodeCamp'
            }
        }
        render() {
            // Cambia el código debajo de esta línea
            const name = this.state.name;
            // Cambia el código encima de esta línea
            return (
                <div>
                    { /* Cambia el código debajo de esta línea */ }
                    <h1>{name}</h1>
                    { /* Cambia el código encima de esta línea */ }
                </div>
            );
        }
    };
    ```

24. Define el estado con this.setState

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react/set-state-with-this-setstate)
    
    **Ejercicio**
    Hay un elemento `button` en el editor de código que tiene un controlador `onClick()`. Este controlador es activado cuando el `button` recibe un evento clic en el navegador, y ejecuta el método `handleClick` definido en `MyComponent`. Dentro del método `handleClick`, actualiza el componente `state` usando `this.setState()`. Establece la propiedad `name` en el `state` para igualar la cadena `React Rocks!`.

    Haz clic en el botón y observa la actualización de estado renderizada. No te preocupes si no entiendes completamente cómo funciona el código del controlador de clics hasta ahora. Será cubierto en los siguientes desafíos.

    ```js
    class MyComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                name: 'Initial State'
            };
            this.handleClick = this.handleClick.bind(this);
        }
        handleClick() {
            // Cambia el código debajo de esta línea
            this.setState({
                name: 'React Rocks!'
            });
            // Cambia el código encima de esta línea
        }
        render() {
            return (
                <div>
                    <button onClick={this.handleClick}>Click Me</button>
                    <h1>{this.state.name}</h1>
                </div>
            );
        }
    };        
    ```

25. Vincula 'this' a un método de clase

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react/bind-this-to-a-class-method)
    
    **Ejercicio**
    El editor de código tiene un componente con un `state` que mantiene un seguimiento del texto. También tiene un método que le permite establecer el texto a `You clicked!`. Sin embargo, el método no funciona porque está utilizando la palabra clave `this` que no está definida. Arréglalo explícitamente ligando `this` al método `handleClick()` en el constructor del componente.

    A continuación, añade un click handler al elemento `button` en el método render. Debes activar el método `handleClick()` cuando el botón recibe un evento de clic. Recuerda que el método que pasas al `onClick` handler necesita llaves porque debe ser interpretado directamente como JavaScript.

    Una vez que completes los pasos anteriores debes poder hacer clic en el botón y ver `You clicked!`.

    ```js
    class MyComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                text: "Hello"
            };
            // Cambia el código debajo de esta línea
            this.handleClick = this.handleClick.bind(this)
            // Cambia el código encima de esta línea
        }
        handleClick() {
            this.setState({
                text: "You clicked!"
            });
        }
        render() {
            return (
                <div>
                    { /* Cambia el código debajo de esta línea */ }
                    <button onClick = {this.handleClick}>
                        Click Me
                    </button>
                    { /* Cambia el código encima de esta línea */ }
                    <h1>{this.state.text}</h1>
                </div>
            );
        }
    };        
    ```

26. Usa el estado para alternar un elemento

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react/use-state-to-toggle-an-element)

    **Ejercicio**
    `MyComponent` tiene una propiedad `visibility` que se inicializa con el valor `false`. El método de renderización devuelve un resultado si el valor de `visibility` es verdadero, y un resultado diferente si es falso.

    Actualmente, no hay forma de actualizar la propiedad `visibility` en el `state` del componente. El valor debe cambiar entre verdadero y falso. Hay un manejador para el evento clic en el botón que activa un método de clase llamado `toggleVisibility()`. Pasa una función a `setState` para definir este método, de tal forma que el `state` de `visibility` cambie al valor opuesto cuando se llame el método. Si `visibility` es `false`, el método lo cambia a `true` y viceversa.

    Finalmente, haz clic en el botón para ver la renderizado condicional del componente basado en su `state`.

    **Nota**: ¡No olvides enlazar la palabra clave `this` al método en el constructor!

    ```js
    class MyComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                visibility: false
            };
            // Cambia el código debajo de esta línea
            this.toggleVisibility = this.toggleVisibility.bind(this);
            // Cambia el código encima de esta línea
        }
        // Cambia el código debajo de esta línea
        toggleVisibility() {
            this.setState(state => {
                if (state.visibility === true) {
                    return { visibility: false };
                } else {
                    return { visibility: true };
                }
            });
        }
        // Cambia el código encima de esta línea
        render() {
            if (this.state.visibility) {
                return (
                    <div>
                    <button onClick={this.toggleVisibility}>Click Me</button>
                    <h1>Now you see me!</h1>
                    </div>
                );
            } else {
                return (
                    <div>
                    <button onClick={this.toggleVisibility}>Click Me</button>
                    </div>
                );
            }
        }
    }        
    ```

27. Escribe un contador simple

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react/write-a-simple-counter)
    
    **Ejercicio**
    El componente `Counter` mantiene un seguimiento de un valor `count` en el `state`. Hay dos botones que llaman a métodos `increment()` y `decrement()`. Escribe estos métodos para que el valor del contador sea incrementado o disminuyendo por 1 cuando se haga clic en el botón apropiado. También, crea un método `reset()` para que cuando se haga clic en el botón reset, el contador se establezca a `0`.

    **Nota**: Asegúrate de no modificar el `className` de los botones. Además, recuerda agregar en el constructor los enlaces necesarios para los métodos recién creados.
    
    ```js
    class Counter extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 0
            };
            // Cambia el código debajo de esta línea
            this.increment = this.increment.bind(this);
            this.decrement = this.decrement.bind(this);
            this.reset = this.reset.bind(this);
            // Cambia el código encima de esta línea
        }
        // Cambia el código debajo de esta línea
        reset() {
            this.setState({
                count: 0
            });
        }
        increment() {
            this.setState(state => ({
                count: state.count + 1
            }));
        }
        decrement() {
            this.setState(state => ({
                count: state.count - 1
            }));
        }    
        // Cambia el código encima de esta línea    
        render() {
            return (
                <div>
                    <button className='inc' onClick={this.increment}>Increment!</button>
                    <button className='dec' onClick={this.decrement}>Decrement!</button>
                    <button className='reset' onClick={this.reset}>Reset</button>
                    <h1>Current Count: {this.state.count}</h1>
                </div>
            );
        }
    };        
    ```

28. Crea una entrada controlada

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react/create-a-controlled-input)

    **Ejercicio**
    El editor de código tiene el esqueleto de un componente llamado `ControlledInput` para crear un elemento `input` controlado. El `state` del componente ya está inicializado con una propiedad `input` que contiene una cadena vacía. Este valor representa el texto que un usuario escribe en el campo `input`.

    Primero, crea un método llamado `handleChange()` que tiene un parámetro llamado `event`. Cuando el método es llamado, este recibe un objeto `event` que contiene una cadena de texto del elemento `input`. Puedes acceder a esta cadena con `event.target.value` dentro del método. Actualiza la propiedad `input` del `state` del componente con esta nueva cadena.

    En el método `render`, crea el elemento `input` encima de la etiqueta `h4`. Añade un atributo `value` que es igual a la propiedad `input` del `state` del componente. Luego añade un manejador de eventos `onChange()` establecido al método `handleChange()`.

    Cuando escribes en el cuadro de entrada, ese texto es procesado por el método `handleChange()`, establecido como la propiedad `input` en el `state` local, y renderizado como el valor en el cuadro `input` de la página. El `state` del componente es la única fuente de verdad con respecto a los datos de entrada.

    Por último, pero no menos importante, no olvides añadir los enlaces necesarios en el constructor.

    ```js
    class ControlledInput extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                input: ''
            };
            // Cambia el código debajo de esta línea
            this.handleChange = this.handleChange.bind(this);
            // Cambia el código encima de esta línea
        }
        // Cambia el código debajo de esta línea
        handleChange (event) {
            this.setState({
                input: event.target.value
            })
        }
        // Cambia el código encima de esta línea
        render() {
            return (
                <div>
                    { /* Cambia el código debajo de esta línea */}
                    <input value={this.state.input} onChange={this.handleChange} />
                    { /* Cambia el código encima de esta línea */}
                    <h4>Controlled Input:</h4>
                    <p>{this.state.input}</p>
                </div>
            );
        }
    };        
    ```

29. Crea un formulario controlado

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react/create-a-controlled-form)

    **Ejercicio**
    El componente `MyForm` está configurado con un `form` vacío, con un manejador de envío. El manejador de envío será llamado cuando se envíe el formulario.

    Hemos añadido un botón que envía el formulario. Puedes ver que tiene el `type` establecido en `submit` indicando que es el botón que controla el formulario. Añade el elemento `input` en el formulario `form` y establece sus atributos `value` y `onChange()` como el último desafío. A continuación, debes completar el método `handleSubmit` para que establezca la propiedad de estado del componente `submit` al valor de entrada actual en el `state` local.

    **Nota**: También debes llamar a `event.preventDefault()` en el controlador de envío, para evitar el comportamiento predeterminado de envío de formulario que actualizará la página web. Para la comodidad de los campistas, el comportamiento predeterminado se ha desactivado aquí para evitar que las actualizaciones restablezcan el código de desafío.

    Por último, crea una etiqueta `h1` después del `form` que renderiza el valor de `submit` del `state` del componente. A continuación, puedes escribir en el formulario y hacer clic en el botón (o pulsar intro), y deberías ver tu entrada renderizada en la página.

    ```js
    class MyForm extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                input: '',
                submit: ''
            };
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }
        handleChange(event) {
            this.setState({
                input: event.target.value
            });
        }
        handleSubmit(event) {
            // Cambia el código debajo de esta línea
            event.preventDefault()
            this.setState({
                submit: this.state.input
            });
            // Cambia el código encima de esta línea
        }
        render() {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                    {/* Cambia el código debajo de esta línea */}
                    <input
                        value={this.state.input}
                        onChange={this.handleChange} />
                    {/* Cambia el código encima de esta línea */}
                    <button type='submit'>Submit!</button>
                    </form>
                    {/* Cambia el código debajo de esta línea */}
                    <h1>{this.state.submit}</h1>
                    {/* Cambia el código encima de esta línea */}
                </div>
            );
        }
    }        
    ```

30. Pasa el estado como "props" a componentes hijos

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react/pass-state-as-props-to-child-components)
    
    **Ejercicio**
    El componente `MyApp` es de estado y renderiza un componente `Navbar` como un componente hijo. Pasa la propiedad `name` en su `state` al componente hijo, luego muestra el `name` en la etiqueta `h1` que es parte del método de renderizado de `Navbar`. `name` debe aparecer luego del texto `Hello, my name is:`.

    ```js
    class MyApp extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                name: 'CamperBot'
            }
        }
        render() {
            return (
                <div>
                    {/* Cambia el código debajo de esta línea */}
                    <Navbar name={this.state.name}/>
                    {/* Cambia el código encima de esta línea */}
                </div>
            );
        }
    };

    class Navbar extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return (
                <div>
                {/* Cambia el código debajo de esta línea */}
                <h1>Hello, my name is: {this.props.name}</h1>
                {/* Cambia el código encima de esta línea */}
                </div>
            );
        }
    };        
    ```

31. Pasa una función callback como "props"

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react/pass-a-callback-as-props)
    
    **Ejercicio**
    Hay tres componentes descritos en el editor de código. El componente `MyApp` es el padre que renderizará los componentes hijos `GetInput` y `RenderInput`. Añade el componente `GetInput` al método de renderizar en `MyApp`, luego pásale un "prop" llamado `input` asignado a `inputValue` desde el estado `state` de `MyApp`. También crea un "prop" llamado `handleChange` y pasa el controlador de entrada `handleChange` a este.

    A continuación, añade `RenderInput` al método de renderizar en `MyApp`, luego crea un "prop" llamado `input` y pasa el `inputValue` desde el estado `state` a este. Una vez que hayas terminado podrás escribir en el campo `input` en el componente `GetInput`, que luego llama al método manejador en su padre a través de "props". Esto actualiza la entrada en el `state` del padre, que se pasa como "props" a ambos hijos. Observa cómo fluyen los datos entre los componentes y cómo la única fuente de verdad sigue siendo el `state` del componente padre. Es cierto que este ejemplo es un poco inventado, pero debe servir para ilustrar cómo los datos y las funciones callback pueden ser pasados entre componentes React.

    ```js     
    class MyApp extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                inputValue: ''
            }
            this.handleChange = this.handleChange.bind(this);
        }
        handleChange(event) {
            this.setState({
                inputValue: event.target.value
            });
        }
        render() {
            return (
                <div>
                    { /* Cambia el código debajo de esta línea */ }
                    <GetInput
                        input={this.state.inputValue}
                        handleChange={this.handleChange}/>
                    <RenderInput
                        input={this.state.inputValue}/>
                    { /* Cambia el código encima de esta línea */ }
                </div>
            );
        }
    };

    class GetInput extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return (
                <div>
                    <h3>Get Input:</h3>
                    <input value={this.props.input}
                           onChange={this.props.handleChange}/>
                </div>
            );
        }
    };

    class RenderInput extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return (
                <div>
                    <h3>Input Render:</h3>
                    <p>{this.props.input}</p>
                </div>
            );
        }
    };   
    ```

32. Usa el método de ciclo de vida componentWillMount

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react/use-the-lifecycle-method-componentwillmount)

    **Ejercicio**
    El método `componentWillMount()` es invocado antes del método `render()` cuando un componente está siendo montado en el DOM. Imprime algo en la consola dentro de `componentWillMount()` - puede que quieras tener la consola del navegador abierta para ver el resultado.

    ```js
    class MyComponent extends React.Component {
        constructor(props) {
            super(props);
        }
        componentWillMount() {
            // Cambia el código debajo de esta línea
            console.log(`asdfadf`);
            // Cambia el código encima de esta línea
        }
        render() {
            return <div />
        }
    };        
    ```

33. Usa el método de ciclo de vida componentDidMount

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react/use-the-lifecycle-method-componentdidmount)
    
    **Ejercicio**
    Hay una llamada simulada al API en `componentDidMount()`. Esta llamada modifica el estado después de 2.5 segundos para simular una llamada a un servidor para obtener datos. Este ejemplo consulta el total de usuarios activos actual para un sitio. En el método render, se renderiza el valor de `activeUsers` en el `h1` después del texto `Active Users:`. Mira lo que sucede en la vista previa, y siéntete libre de cambiar el tiempo de espera para ver los diferentes efectos.

    ```js
    class MyComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                activeUsers: null
            };
        }
        componentDidMount() {
            setTimeout(() => {
                this.setState({
                    activeUsers: 1273
                });
            }, 2500);
        }
        render() {
            return (
                <div>
                    {/* Cambia el código debajo de esta línea */}
                    <h1>Active Users: { this.state.activeUsers } </h1>
                    {/* Cambia el código encima de esta línea */}
                </div>
            );
        }
    }        
    ```

34. Agrega detectores de eventos (Event Listeners)

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react/add-event-listeners)
    
    **Ejercicio**
    Agrega un detector de eventos en el método `componentDidMount()` para los eventos `keydown` y haz que estos eventos ejecuten la función callback `handleKeyPress()`. Puedes usar `document.addEventListener()` el cual toma el evento (en comillas) como primer argumento y la función callback como segundo argumento.

    Posteriormente, en `componentWillUnmount()`, remueve este mismo detector de eventos. Puedes pasar los mismos argumentos al `document.removeEventListener()`. Es buena práctica usar este método del ciclo de vida para hacer cualquier limpieza en un componente de React antes de que estos sean desmontados y destruidos. Removiendo los detectores de eventos es un ejemplo de una limpieza de este tipo.

    ```js
    class MyComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                message: ''
            };
            this.handleEnter = this.handleEnter.bind(this);
            this.handleKeyPress = this.handleKeyPress.bind(this);
        }
        // Cambia el código debajo de esta línea
        componentDidMount() {
            document.addEventListener("keydown", this.handleKeyPress);   
        }
        componentWillUnmount() {
            document.removeEventListener("keydown", this.handleKeyPress);
        }
        // Cambia el código encima de esta línea
        handleEnter() {
            this.setState((state) => ({
                message: state.message + 'You pressed the enter key! '
            }));
        }
        handleKeyPress(event) {
            if (event.keyCode === 13) {
                this.handleEnter();
            }
        }
        render() {
            return (
                <div>
                    <h1>{this.state.message}</h1>
                </div>
            );
        }
    };        
    ```

35. Optimiza re-renderizadores con shouldComponentUpdate

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react/optimize-re-renders-with-shouldcomponentupdate)

    **Ejercicio**
    El método shouldComponentUpdate() se añade en un componente llamado OnlyEvens. Actualmente, este método devuelve true, así que OnlyEvens re-renderiza cada vez que recibe nuevos props. Modifica el método para que OnlyEvens se actualice sólo si el value de sus nuevos "props" es par. Haz clic en el botón Add y observa el orden de los eventos en la consola de tu navegador mientras se activan los "hooks" del ciclo de vida.

    ```js
    class OnlyEvens extends React.Component {
        constructor(props) {
            super(props);
        }
        shouldComponentUpdate(nextProps, nextState) {
            console.log('Should I update?');
            // Cambia el código debajo de esta línea
            if (nextProps.value % 2 == 0) {
                return true;
            }
            return false;
            // Cambia el código encima de esta línea
        }
        componentDidUpdate() {
            console.log('Component re-rendered.');
        }
        render() {
            return <h1>{this.props.value}</h1>;
        }
    }

    class Controller extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                value: 0
            };
            this.addValue = this.addValue.bind(this);
        }
        addValue() {
            this.setState(state => ({
                value: state.value + 1
            }));
        }
        render() {
            return (
                <div>
                    <button onClick={this.addValue}>Add</button>
                    <OnlyEvens value={this.state.value} />
                </div>
            );
        }
    }        
    ```

36. Introducción a los estilos en línea

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react/introducing-inline-styles)

    **Ejercicio**
    Agrega un atributo `style` al `div` en el editor de código para darle al texto un color rojo y un tamaño de fuente de `72px`.

    Ten en cuenta que puedes establecer opcionalmente el tamaño de la fuente para que sea un número, omitiendo las unidades `px`, o escribirlo como `72px`.

    ```js
    class Colorful extends React.Component {
        render() {
            return (
                <div style={{color: "red", fontSize: 72}}>Big Red</div>
            );
        }
    };        
    ```

37. Agrega inline styles en React

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react/add-inline-styles-in-react)
    
    **Ejercicio**
    Si tienes una gran cantidad de estilos, puedes asignar un `object` de estilos a una constante para mantener tu código organizado. Declara tu constante "styles" como una variable global al principio del archivo. Inicializa la constante `styles` y asígnale un `object` con tres propiedades de estilo y sus valores. Dale al `div` un color `purple`, un tamaño de fuente de `40` y un borde `2px solid purple`. Luego asigna al atributo `style` la constante `styles`.

    ```js
    const styles = {
        color: 'purple',
        fontSize: 40,
        border: "2px solid purple",
    };
    // Cambia el código encima de esta línea
    class Colorful extends React.Component {
        render() {
            // Cambia el código debajo de esta línea
            return (
                <div style={styles}>Style Me!</div>
            );
            // Cambia el código encima de esta línea
        }
    };        
    ```

38. Usa JavaScript avanzado en el método render de React

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react/use-advanced-javascript-in-react-render-method)

    **Ejercicio**
    En el código proporcionado, el método `render` tiene un arreglo que contiene 20 frases para representar las respuestas encontradas en el clásico juego "Magic Eight Ball" de los años ochenta. El evento clic del botón está vinculado al método `ask`, por lo que cada vez que se haga clic en el botón se generará un número aleatorio y se almacenará como el `randomIndex` en el state. En la línea 52, elimina la cadena `change me!` y reasigna la constante `answer` para que tu código acceda aleatoriamente a un índice diferente del arreglo `possibleAnswers` cada vez que se actualiza el componente. Finalmente, inserta la constante `answer` dentro de las etiquetas `p`.

    ```js
    const inputStyle = {
        width: 235,
        margin: 5
    };

    class MagicEightBall extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                userInput: '',
                randomIndex: ''
            };
            this.ask = this.ask.bind(this);
            this.handleChange = this.handleChange.bind(this);
        }
        ask() {
            if (this.state.userInput) {
                this.setState({
                    randomIndex: Math.floor(Math.random() * 20),
                    userInput: ''
                });
            }
        }
        handleChange(event) {
            this.setState({
                userInput: event.target.value
            });
        }
        render() {
            const possibleAnswers = [
                'It is certain',
                'It is decidedly so',
                'Without a doubt',
                'Yes, definitely',
                'You may rely on it',
                'As I see it, yes',
                'Outlook good',
                'Yes',
                'Signs point to yes',
                'Reply hazy try again',
                'Ask again later',
                'Better not tell you now',
                'Cannot predict now',
                'Concentrate and ask again',
                "Don't count on it",
                'My reply is no',
                'My sources say no',
                'Most likely',
                'Outlook not so good',
                'Very doubtful'
            ];
            const answer = possibleAnswers[this.state.randomIndex]; // Cambia esta línea
            return (
                <div>
                    <input
                    type='text'
                    value={this.state.userInput}
                    onChange={this.handleChange}
                    style={inputStyle}
                    />
                    <br />
                    <button onClick={this.ask}>Ask the Magic Eight Ball!</button>
                    <br />
                    <h3>Answer:</h3>
                    <p>
                        {/* Cambia el código debajo de esta línea */}
                        <p>
                            {answer}          
                        </p>
                        {/* Cambia el código encima de esta línea */}
                    </p>
                </div>
            );
        }
    }        
    ```

39. Renderiza con una condición If-Else

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react/render-with-an-if-else-condition)

    **Ejercicio**

    `MyComponent` contiene un `boolean` en su estado que rastrea si deseas mostrar algún elemento en la interfaz de usuario o no. El `button` alterna el estado de este valor. Actualmente, renderiza la misma interfaz de usuario cada vez. Reescribir el método `render()` con una sentencia `if/else` de modo que si `display` es `true`, devuelvas el marcado actual. De lo contrario, devuelve el marcado sin el elemento `h1`.

    Note: Debes escribir un `if/else` para pasar las pruebas. El uso del operador ternario no pasará aquí.

    ```js
    class MyComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                display: true
            }
            this.toggleDisplay = this.toggleDisplay.bind(this);
        }
        toggleDisplay() {
            this.setState((state) => ({
                display: !state.display
            }));
        }
        render() {
            // Cambia el código debajo de esta línea
            if (this.state.display) {
                return (
                    <div>
                        <button onClick={this.toggleDisplay}>Toggle Display</button>
                        <h1>Displayed!</h1>
                    </div>
                );
            } else { 
                return (
                    <div>
                        <button onClick={this.toggleDisplay}>Toggle Display</button>
                    </div>
                );
            }       
        }
    };        
    ```

40. Usa && para una condicional más concisa

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react/use--for-a-more-concise-conditional)
    
    **Ejercicio**
    Resuelve el ejemplo anterior de nuevo, de este modo el `h1` solo renderiza si `display` es `true`, pero usa el operador lógico `&&` en lugar de una sentencia `if/else`.

    ```js
    class MyComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                display: true
            }
            this.toggleDisplay = this.toggleDisplay.bind(this);
        }
        toggleDisplay() {
            this.setState(state => ({
                display: !state.display
            }));
        }
        render() {
            // Cambia el código debajo de esta línea
            return (
                <div>
                    <button onClick={this.toggleDisplay}>Toggle Display</button>
                    {this.state.display && <h1>Displayed!</h1>}
                </div>
            );
        }
    };
    ```

41. Utiliza una expresión ternaria para el renderizado condicional

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react/use-a-ternary-expression-for-conditional-rendering)
    
    **Ejercicio**
    El editor de código tiene tres constantes definidas dentro del método `render()` del componente `CheckUserAge`. Estas se llaman `buttonOne`, `buttonTwo` y `buttonThree`. A cada una de estas se le asigna una expresión JSX simple que representa un elemento de botón. Primero, inicializa el estado de `CheckUserAge` con `input` y `userAge` ambos configurados a valores de una cadena vacía.

    Una vez que el componente está renderizando información a la página, los usuarios deberían tener una forma de interactuar con ella. Dentro de la declaración `return` del componente, configura una expresión ternaria que implementa la siguiente lógica: cuando la página carga por primera vez, renderiza el botón de envío, `buttonOne`, a la página. Luego, cuando un usuario ingrese su edad y haga clic en el botón, renderiza un botón diferente basado en la edad. Si un usuario introduce un número menor que `18`, renderiza `buttonThree`. Si un usuario introduce un número mayor o igual a `18`, renderiza `buttonTwo`.

    ```js
    const inputStyle = {
        width: 235,
        margin: 5
    };

    class CheckUserAge extends React.Component {
        constructor(props) {
            super(props);
            // Cambia el código debajo de esta línea

            // Cambia el código encima de esta línea
            this.submit = this.submit.bind(this);
            this.handleChange = this.handleChange.bind(this);
        }
        handleChange(e) {
            this.setState({
                input: e.target.value,
                userAge: ''
            });
        }
        submit() {
            this.setState(state => ({
                userAge: state.input
            }));
        }
        render() {
            const buttonOne = <button onClick={this.submit}>Submit</button>;
            const buttonTwo = <button>You May Enter</button>;
            const buttonThree = <button>You Shall Not Pass</button>;
            return (
                <div>
                    <h3>Enter Your Age to Continue</h3>
                    <input
                        style={inputStyle}
                        type='number'
                        value={this.state.input}
                        onChange={this.handleChange}
                    />
                    <br />
                    {/* Cambia el código debajo de esta línea */}
                    {
                        this.state.userAge === '' ? buttonOne
                            : this.state.userAge >= 18
                                ? buttonTwo
                                : buttonThree
                    }
                    {/* Cambia el código encima de esta línea */}
                </div>
            );
        }
    }        
    ```

42. Renderiza condicionalmente a partir de "props"

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react/render-conditionally-from-props)

    **Ejercicio**
    El editor de código tiene dos componentes que están parcialmente definidos para ti: un padre llamado `GameOfChance`, y un hijo llamado `Results`. Se utilizan para crear un juego sencillo en el que el usuario presiona un botón para ver si gana o pierde.

    Primero, necesitarás una expresión simple que devuelva al azar un valor diferente cada vez que se ejecute. Puedes usar `Math.random()`. Este método devuelve un valor entre `0` (inclusivo) y `1` (exclusivo) cada vez que se llama. Así que para las probabilidades de 50/50, usa `Math.random() >= .5` en tu expresión. Estadísticamente hablando, esta expresión devolverá `true` 50% de las veces, y `false` el otro 50%. En el método de renderizado, reemplaza `null` con la expresión anterior para completar la declaración de variables.

    Ahora tienes una expresión que puedes usar para tomar una decisión aleatoria en el código. A continuación, debes implementar esto. Renderiza el componente `Results` como hijo de `GameOfChance`, y pásalo a `expression` como un prop llamado `fiftyFifty`. En el componente `Results`, escribe una expresión ternaria para renderizar el elemento `h1` con el texto `You Win!` o `You Lose!` basado en el prop `fiftyFifty` que está siendo pasado desde `GameOfChance`. Finalmente, asegúrate de que el método `handleClick()` está contando correctamente cada turno para que el usuario sepa cuántas veces ha jugado. Esto también sirve para que el usuario sepa que el componente se ha actualizado en caso de que gane o pierda dos veces seguidas.

    ```js
    class Results extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            {/* Cambia el código debajo de esta línea */}
            return (
                <h1>
                {this.props.fiftyFifty ? "You Win!" : "You Lose!"}
                </h1>
            )
            {/* Cambia el código encima de esta línea */}
        }
    }

    class GameOfChance extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                counter: 1
            };
            this.handleClick = this.handleClick.bind(this);
        }
        handleClick() {
            this.setState({
                counter: this.state.counter + 1 // change code here
            });
        }
        render() {
            const expression = Math.random() >= 0.5 ? true : false; // Cambia esta línea
            return (
                <div>
                    <button onClick={this.handleClick}>Play Again</button>
                    {/* Cambia el código debajo de esta línea */}
                    <Results fiftyFifty={expression} />
                    {/* Cambia el código encima de esta línea */}
                    <p>{'Turn: ' + this.state.counter}</p>
                </div>
            );
        }
    }        
    ```

43. Cambia el CSS inline condicionalmente según el estado del componente

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react/change-inline-css-conditionally-based-on-component-state)
    
    **Ejercicio**
    El editor de código tiene un simple componente de entrada controlado, con un estilo de borde. Quieres aplicar un estilo rojo a este borde si el usuario escribe más de 15 caracteres de texto en la casilla de entrada. Agrega una condición para verificarlo y, si la condición es válida, establece el estilo del borde de la casilla de entrada como `3px solid red`. Puedes probarlo introduciendo texto en la casilla de entrada.
    
    ```js        
    class GateKeeper extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                input: ''
            };
            this.handleChange = this.handleChange.bind(this);
        }
        handleChange(event) {
            this.setState({ input: event.target.value })
        }
        render() {
            let inputStyle = {
                border: '1px solid black'
            };
            // Cambia el código debajo de esta línea
            if (this.state.input.length > 15) {
                inputStyle.border = '3px solid red';
            }
            // Cambia el código encima de esta línea
            return (
                <div>
                    <h3>Don't Type Too Much:</h3>
                    <input
                        type="text"
                        style={inputStyle}
                        value={this.state.input}
                        onChange={this.handleChange} 
                    />
                </div>
            );
        }
    };
    ```

44. Utiliza Array.map() para renderizar dinámicamente los elementos

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react/use-array-map-to-dynamically-render-elements)
    
    **Ejercicio**
    El editor de código tiene la mayoría del componente `MyToDoList` configurado. Parte de este código debería parecer familiar si completaste el desafío de formulario controlado. Vas a notar un `textarea` y un `button`, junto con un par de métodos que rastrean sus estados, pero aún no se muestra nada a la página.

    Dentro del `constructor`, crea un objeto `this.state` y define dos estados: `userInput` que debe inicializarse como una cadena vacía, y `toDoList` que debe inicializarse como un arreglo vacío. Luego, elimina el valor `null` del método `render()` a un costado de la variable `items`. En su lugar, utiliza la función `map()` para recorrer el arreglo `toDoList` almacenado en el estado interno del componente y renderizar un `li` por cada artículo. Intenta introducir la cadena `eat, code, sleep, repeat` dentro del `textarea`, haz clic en el botón y ve qué sucede.

    **Nota**: Puede que sepas que todos los elementos hijos hermanos creados por una operación map como ésta necesitan poseer un atributo `key` único. No te preocupes, este es el tema de nuestro próximo desafío.

    ```js
    const textAreaStyles = {
        width: 235,
        margin: 5
    };

    class MyToDoList extends React.Component {
        constructor(props) {
            super(props);
            // Cambia el código debajo de esta línea
            this.state = {
                userInput: '',
                toDoList: []
            }
            // Cambia el código encima de esta línea
            this.handleSubmit = this.handleSubmit.bind(this);
            this.handleChange = this.handleChange.bind(this);
        }
        handleSubmit() {
            const itemsArray = this.state.userInput.split(',');
            this.setState({
                toDoList: itemsArray
            });
        }
        handleChange(e) {
            this.setState({
                userInput: e.target.value
            });
        }
        render() {
            const items = this.state.toDoList.map(i => <li>{i}</li>); // Cambia esta línea
            return (
                <div>
                    <textarea
                        onChange={this.handleChange}
                        value={this.state.userInput}
                        style={textAreaStyles}
                        placeholder='Separate Items With Commas'
                    />
                    <br />
                    <button onClick={this.handleSubmit}>Create List</button>
                    <h1>My "To Do" List:</h1>
                    <ul>{items}</ul>
                </div>
            );
        }
    }        
    ```

45. Proporciona a los elementos hermanos un atributo de clave única

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react/give-sibling-elements-a-unique-key-attribute)
    
    **Ejercicio**
    El editor de código tiene un arreglo con algunos frameworks frontend y un componente funcional sin estado llamado `Frameworks()`. `Frameworks()` necesita mapear (asignar) el arreglo a una lista desordenada, como en el último desafío. Finaliza la escritura de la función callback `map` para devolver un elemento `li` por cada framework en el arreglo `frontEndFrameworks`. Esta vez, debes asegurarte de dar a cada elemento `li` un atributo `key`, establecido a un valor único. Los elementos `li` también deben contener texto de `frontEndFrameworks`.

    Normalmente, deseas hacer que la clave sea algo que identifique de manera única el elemento que se está procesando. Como último recurso se puede utilizar el índice del arreglo, pero normalmente se debe intentar usar una identificación única.

    ```js
    const frontEndFrameworks = [
        'React',
        'Angular',
        'Ember',
        'Knockout',
        'Backbone',
        'Vue'
    ];

    function Frameworks() {
        const renderFrameworks = frontEndFrameworks.map(
            (item) => <li key={item}>{item}</li>
        ); // Cambia esta línea
        return (
            <div>
            <h1>Popular Front End JavaScript Frameworks</h1>
            <ul>
                {renderFrameworks}
            </ul>
            </div>
        );
    };        
    ```

46. Usa Array.filter() para filtrar dinámicamente un arreglo

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react/use-array-filter-to-dynamically-filter-an-array)
    
    **Ejercicio**
    En el editor de código, el `state` de `MyComponent` es inicializado con un arreglo de usuarios. Algunos usuarios están conectados y otros no. Filtra el arreglo para que sólo veas a los usuarios que están en línea. Para hacer esto, primero usa `filter` para devolver un nuevo arreglo que contiene solo a los usuarios cuya propiedad `online` es `true`. Luego, en la variable `renderOnline`, asigna sobre el arreglo filtrado, y devuelve un elemento `li` para cada usuario que contiene el texto de su `username`. Asegúrate de incluir también una única `key`, como en los últimos desafíos.

    ```js        
    class MyComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                users: [
                    {
                        username: 'Jeff',
                        online: true
                    },
                    {
                        username: 'Alan',
                        online: false
                    },
                    {
                        username: 'Mary',
                        online: true
                    },
                    {
                        username: 'Jim',
                        online: false
                    },
                    {
                        username: 'Sara',
                        online: true
                    },
                    {
                        username: 'Laura',
                        online: true
                    }
                ]
            };
        }
        render() {
            const usersOnline = this.state.users.filter(user => user.online === true); // Cambia esta línea
            const renderOnline = usersOnline.map(user => <li key={user.username}>{user.username}</li>); // Cambia esta línea
            return (
                <div>
                    <h1>Current Online Users:</h1>
                    <ul>{renderOnline}</ul>
                </div>
            );
        }
    }
    ```

47. Renderiza React en el servidor con renderToString

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react/render-react-on-the-server-with-rendertostring)

    **Ejercicio**
    El método `renderToString()` se proporciona en `ReactDOMServer`, el cual está disponible aquí como un objeto global. El método toma un argumento que es un elemento React. Usa esto para renderizar `App` a una cadena.

    ```js
    class App extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return <div/>
        }
    };

    // Cambia el código debajo de esta línea
    ReactDOMServer.renderToString(<App />)
    ```

# Redux

En este curso, aprenderás los fundamentos de almacenamiento en Redux, así como de las acciones, reductores e intermediarios para administrar datos a lo largo de tu aplicación.

1. Crea un almacén Redux

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/redux/create-a-redux-store)

    **Ejercicio**
    El `store` (almacén) de Redux es un objeto que guarda y gestiona el `state` (estado) de la aplicación. Hay un método llamado `createStore()` en el objeto Redux, que se utiliza para crear el `store` Redux. Este método toma una función `reducer` como argumento obligatorio. La función `reducer` se trata en un desafío posterior, y ya está definida para ti en el editor de código. Simplemente toma `state` como argumento y devuelve `state`.

    Declara una variable `store` y asígnala al método `createStore()`, pasando el `reducer` como argumento.

    **Nota**: El código del editor utiliza la sintaxis de los argumentos por defecto de ES6 para inicializar este estado y mantener un valor de `5`. Si no está familiarizado con los argumentos predeterminados, puede consultar elES6 section in the Curriculum que cubre este tema.

    ```js
    const reducer = (state = 5) => {
        return state;
    }

    // Los métodos Redux están disponibles desde un objeto Redux
    // Por ejemplo: Redux.createStore()
    // Define el store aquí:
    let store = Redux.createStore(reducer)
    ```

2. Obtén el estado del almacén Redux

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/redux/get-state-from-the-redux-store)

    **Ejercicio**
    El código del desafío anterior se reescribe de forma más concisa en el editor de código. Utiliza `store.getState()` para recuperar el `state` del `store`, y asígnalo a una nueva variable `currentState`.

    ```js
    const store = Redux.createStore(
        (state = 5) => state
    );

    // Cambia el código debajo de esta línea
    let currentState = store.getState()
    ```

3.  Define una acción Redux

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/redux/define-a-redux-action)

    **Ejercicio**
    Escribir una acción Redux es tan sencillo como declarar un objeto con una propiedad de tipo. Declara un objeto `action` y dale una propiedad `type` establecida a la cadena `'LOGIN'`.

    ```js
    // Define una acción aquí:
    let action={
        type: 'LOGIN'
    }
    ```

4. Define un creador de acción

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/redux/define-an-action-creator)

    **Ejercicio**
    Define una función llamada `actionCreator()` que devuelve el objeto `action` cuando es llamado.

    ```js
    const action = {
        type: 'LOGIN'
    }
    // Define un creador de acción aquí:
    function actionCreator() {
        return action
    }
    ```

5. Envía un evento de acción

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/redux/dispatch-an-action-event)
    
    **Ejercicio**
    El almacén Redux en el editor de código tiene un estado inicializado que es un objeto que contiene una propiedad `login` actualmente establecida a `false`. También hay un creador de acción llamado `loginAction()` que devuelve una acción de tipo `LOGIN`. Envía la acción `LOGIN` al almacén Redux llamando al método `dispatch`, y pasa la acción creada por `loginAction()`.

    ```js
    const store = Redux.createStore(
        (state = {login: false}) => state
    );

    const loginAction = () => {
        return {
            type: 'LOGIN'
        }
    };

    // Despacha la acción aquí:
    store.dispatch(loginAction());
    ```

6. Maneja una acción en el almacén

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/redux/handle-an-action-in-the-store)

    **Ejercicio**
    El editor de código tiene el ejemplo anterior, así como el inicio de una función `reducer` para ti. Rellena el cuerpo de la función reducer para que si recibe una acción de tipo `'LOGIN'` devuelva un objeto de estado con `login` establecido a `true`. De lo contrario, devuelve el `state` actual. Ten en cuenta que el `state` actual y la `action` enviada se pasan al reductor, por lo que puedes acceder al tipo de la acción directamente con `action.type`.

    ```js
    const defaultState = {
        login: false
    };

    const reducer = (state = defaultState, action) => {
        // Cambia el código debajo de esta línea
        if (action.type === "LOGIN") {
            return {
                login: true
            };
        } else {
            return state;
        }
        // Cambia el código encima de esta línea
    };

    const store = Redux.createStore(reducer);

    const loginAction = () => {
        return {
            type: 'LOGIN'
        }
    };
    ```

7. Usa una sentencia Switch para manejar múltiples acciones

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/redux/use-a-switch-statement-to-handle-multiple-actions)

    **Ejercicio**
    El editor de código tiene un almacén, acciones y creadores de acción configurados para ti. Rellena la función `reducer` para manejar múltiples acciones de autenticación. Usa una sentencia `switch` de JavaScript en el `reducer` para responder a diferentes eventos de acción. Este es un patrón estándar en la escritura de reductores Redux. La sentencia switch debe cambiar sobre `action.type` y devolver el estado de autenticación apropiado.

    Nota: En este punto, no te preocupes por la inmutabilidad del estado, ya que es pequeña y simple en este ejemplo. Para cada acción, puedes devolver un nuevo objeto, por ejemplo, `{authenticated: true}`. Además, no olvides escribir un caso `default` en tu sentencia switch que devuelva el `state` actual. Esto es importante porque una vez que tu aplicación tiene múltiples reductores, todos ellos se ejecutan cada vez que se realiza un envío de acción, incluso cuando la acción no está relacionada con ese reductor. En tal caso, querrás asegurarte de que devuelves el `state` actual.

    ```js
    const defaultState = {
        authenticated: false
    };

    const authReducer = (state = defaultState, action) => {
        // Cambia el código debajo de esta línea
        switch (action.type) {
            case "LOGIN":
            return {
                authenticated: true
            };

            case "LOGOUT":
            return {
                authenticated: false
            };

            default:
            return defaultState;
        }
        // Cambia el código encima de esta línea
    };

    const store = Redux.createStore(authReducer);

    const loginUser = () => {
        return {
            type: 'LOGIN'
        }
    };

    const logoutUser = () => {
        return {
            type: 'LOGOUT'
        }
    };
    ```

8. Usa const para los tipos de acción

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/redux/use-const-for-action-types)

    **Ejercicio**
    Declara `LOGIN` y `LOGOUT` como valores `const` y asígnalos a las cadenas `'LOGIN'` y `'LOGOUT'`, respectivamente. Luego, edita el `authReducer()` y los creadores de acción para que hagan referencia a estas constantes en lugar de valores de cadena.

    **Nota**: Generalmente es una convención escribir las constantes en mayúsculas, y esto es una práctica estándar en Redux también.

    ```js
    // change code below this line
    const LOGIN = 'LOGIN';
    const LOGOUT = 'LOGOUT';
    // change code above this line

    const defaultState = {
        authenticated: false
    };

    const authReducer = (state = defaultState, action) => {
        switch (action.type) {
            case LOGIN: 
            return {
                authenticated: true
            }
            case LOGOUT: 
            return {
                authenticated: false
            }
            default:
            return state;

        }
    };

    const store = Redux.createStore(authReducer);

    const loginUser = () => {
        return {
            type: LOGIN
        }
    };

    const logoutUser = () => {
        return {
            type: LOGOUT
        }
    };
    ```

9. Registra un escucha al almacén
    
    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/redux/register-a-store-listener)

    **Ejercicio**
    Escribe una función callback que incremente la variable global `count` cada vez que el almacén recibe una acción, y pasa esta función al método `store.subscribe()`. Verás que `store.dispatch()` es llamado tres veces seguidas, cada vez pasando directamente un objeto de acción. Observa la salida de la consola entre los envíos de acción para ver cómo se producen las actualizaciones.

    ```js
    const ADD = 'ADD';

    const reducer = (state = 0, action) => {
        switch(action.type) {
            case ADD:
            return state + 1;
            default:
            return state;
        }
    };

    const store = Redux.createStore(reducer);

    // Variable global count:
    let count = 0;

    // Cambia el código debajo de esta línea
    function callback() {
        count++;
        console.log("count has been incremented");
    }

    store.subscribe(callback);
    // Cambia el código encima de esta línea

    store.dispatch({type: ADD});
    console.log(count);
    store.dispatch({type: ADD});
    console.log(count);
    store.dispatch({type: ADD});
    console.log(count);
    ```

10. Combina múltiples reductores
    
    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/redux/combine-multiple-reducers)
    
    **Ejercicio**
    Están las funciones `counterReducer()` y `authReducer()` proporcionadas en el editor de código, junto con un almacén Redux. Termina de escribir la función `rootReducer()` utilizando el método `Redux.combineReducers()`. Asigna `counterReducer` a una clave llamada `count` y `authReducer` a una clave llamada `auth`.

    ```js
    const INCREMENT = 'INCREMENT';
    const DECREMENT = 'DECREMENT';

    const counterReducer = (state = 0, action) => {
        switch(action.type) {
            case INCREMENT:
            return state + 1;
            case DECREMENT:
            return state - 1;
            default:
            return state;
        }
    };

    const LOGIN = 'LOGIN';
    const LOGOUT = 'LOGOUT';

    const authReducer = (state = {authenticated: false}, action) => {
        switch(action.type) {
            case LOGIN:
            return {
                authenticated: true
            }
            case LOGOUT:
            return {
                authenticated: false
            }
            default:
            return state;
        }
    };

    // Define el reductor root aquí
    const rootReducer = Redux.combineReducers({
        count: counterReducer,
        auth: authReducer
    }); 

    const store = Redux.createStore(rootReducer);
    ```

11. Envía datos de acción al almacén
    
    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/redux/send-action-data-to-the-store)
    
    **Ejercicio**
    Hay un `notesReducer()` básico y un creador de acción `addNoteText()` definido en el editor de código. Termina el cuerpo de la función `addNoteText()` para que devuelva un objeto `action`. El objeto debe incluir una propiedad `type` con un valor de `ADD_NOTE`, y también una propiedad `text` establecida a los datos de `note` que se pasa al creador de acción. Cuando llames al creador de acción, pasarás información específica de la nota a la que puedes acceder para el objeto.

    A continuación, termina de escribir la sentencia `switch` en el `notesReducer()`. Necesitas añadir un caso que maneje las acciones `addNoteText()`. Este caso debe activarse siempre que haya una acción de tipo `ADD_NOTE` y debe devolver la propiedad `text` de la `action` entrante como el nuevo `state`.

    La acción es enviada en la parte inferior del código. Una vez que hayas terminado, ejecuta el código y observa la consola. Eso es todo lo que se necesita para enviar datos específicos de la acción al almacén y utilizarlos cuando se actualiza el `state` del almacén.
    
    ```js
    const ADD_NOTE = 'ADD_NOTE';

    const notesReducer = (state = 'Initial State', action) => {
        switch(action.type) {
            // Cambia el código debajo de esta línea
            case ADD_NOTE:
                return action.text;
            // Cambia el código encima de esta línea
            default:
            return state;
        }
    };

    const addNoteText = (note) => {
        // Cambia el código debajo de esta línea
        return {
            type: ADD_NOTE,
            text: note
        };
        // Cambia el código encima de esta línea
    };

    const store = Redux.createStore(notesReducer);

    console.log(store.getState());
    store.dispatch(addNoteText('Hello!'));
    console.log(store.getState());
    ```

12. Usa middleware para manejar acciones asíncronas
    
    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/redux/use-middleware-to-handle-asynchronous-actions)
    
    **Ejercicio**
    Escribe ambos envíos en el creador de acción `handleAsync()`. Envía `requestingData()` antes del `setTimeout()` (la llamada al API simulada). A continuación, después de recibir los datos (fingidos), envía la acción `receivedData()`, pasando estos datos. Ahora ya sabes cómo manejar las acciones asíncronas en Redux. Todo lo demás sigue comportándose como antes.

    ```js
    const REQUESTING_DATA = 'REQUESTING_DATA'
    const RECEIVED_DATA = 'RECEIVED_DATA'

    const requestingData = () => { return {type: REQUESTING_DATA} }
    const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }

    const handleAsync = () => {
        return function(dispatch) {
            // Despacha la acción request aquí
            dispatch(requestingData());
            setTimeout(function() {
                let data = {
                    users: ['Jeff', 'William', 'Alice']
                }
                // Despacha la acción received data aquí
                dispatch(receivedData(data));
            }, 2500);
        }
    };

    const defaultState = {
        fetching: false,
        users: []
    };

    const asyncDataReducer = (state = defaultState, action) => {
        switch(action.type) {
            case REQUESTING_DATA:
            return {
                fetching: true,
                users: []
            }
            case RECEIVED_DATA:
            return {
                fetching: false,
                users: action.users
            }
            default:
            return state;
        }
    };

    const store = Redux.createStore(
        asyncDataReducer,
        Redux.applyMiddleware(ReduxThunk.default)
    );
    ```

13. Escribe un contador con Redux
    
    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/redux/write-a-counter-with-redux)
    
    **Ejercicio**
    En esta lección, implementarás un simple contador con Redux desde cero. El editor de código proporciona lo básico, ¡pero tendrás que completar los detalles! Utiliza los nombres que se proporcionan y define los creadores de acciones `incAction` y `decAction`, el `counterReducer()`, los tipos de acción `INCREMENT` y `DECREMENT`, y finalmente el `store` de Redux. Una vez que hayas terminado deberías poder enviar acciones `INCREMENT` o `DECREMENT` para incrementar o disminuir el estado mantenido en el `store`. ¡Buena suerte construyendo tu primera aplicación Redux!

    ```js
    const INCREMENT = "INCREMENT"; // Define una constante para acciones de incremento
    const DECREMENT = "DECREMENT"; // Define una constante para acciones de decremento

    // Define el reductor counter que aumentará o disminuirá el estado en función de la acción que reciba
    const counterReducer = (state = 0, action) => {
        switch (action.type) {
            case INCREMENT:
            return state + 1;

            case DECREMENT:
            return state - 1;

            default:
            return state;
        }
    }; 
    
    // Define un creador de acción para incrementar
    const incAction = () => {
        return {
            type: INCREMENT
        };
    }; 

    // Define un creador de acción para decrementar
    const decAction = () => {
        return {
            type: DECREMENT
        };
    }; 

    // Define el store de Redux aquí, pasando tus reductores
    const store = Redux.createStore(counterReducer); 
    ```

14. Nunca mutes el estado
    
    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/redux/never-mutate-state)
    
    **Ejercicio**
    Hay un `store` y un `reducer` en el editor de código para gestionar los elementos de las tareas pendientes. Termina de escribir el caso `ADD_TO_DO` en el reductor para añadir una nueva tarea al estado. Hay algunas maneras de lograr esto con JavaScript estándar o ES6. Ve si puedes encontrar la forma de devolver un nuevo arreglo con el elemento de `action.todo` añadido al final.

    ```js
    const ADD_TO_DO = 'ADD_TO_DO';

    // Una lista de cadenas de texto representando tareas por hacer:
    const todos = [
        'Go to the store',
        'Clean the house',
        'Cook dinner',
        'Learn to code',
    ];

    const immutableReducer = (state = todos, action) => {
        switch(action.type) {
            case ADD_TO_DO:
            // No mutes el estado aquí o la prueba fallará
            return state.concat(action.todo);
            default:
            return state;
        }
    };

    const addToDo = (todo) => {
        return {
            type: ADD_TO_DO,
            todo
        }
    }

    const store = Redux.createStore(immutableReducer);
    ```

15. Usa el operador de propagación en arreglos
    
    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/redux/use-the-spread-operator-on-arrays)
    
    **Ejercicio**
    Utiliza el operador de propagación para devolver una nueva copia del estado cuando se añade una tarea.

    ```js
    const immutableReducer = (state = ['Do not mutate state!'], action) => {
        switch(action.type) {
            case 'ADD_TO_DO':
            // No mutes el estado aquí o la prueba fallará
            return [...state, action.todo];
            default:
            return state;
        }
    };

    const addToDo = (todo) => {
        return {
            type: 'ADD_TO_DO',
            todo
        }
    }

    const store = Redux.createStore(immutableReducer);
    ```

16. Elimina un elemento de un arreglo
    
    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/redux/remove-an-item-from-an-array)
    
    **Ejercicio**
    El reductor y el creador de acción fueron modificados para eliminar un elemento de un arreglo en función del índice del elemento. Termina de escribir el reductor para que devuelva un nuevo arreglo de estados con el elemento en el índice específico eliminado.

    ```js
    const immutableReducer = (state = [0,1,2,3,4,5], action) => {
        switch(action.type) {
            case 'REMOVE_ITEM':
            // No mutes el estado aquí o la prueba fallará
            // Usando el índice de la acción y el índice de Array.prototype.filter() para filtrar el elemento.
            return state.filter((_, index) => index !== action.index);
            default:
            return state;
        }
    };

    const removeItem = (index) => {
        return {
            type: 'REMOVE_ITEM',
            index
        }
    }

    const store = Redux.createStore(immutableReducer);
    ```

17. Copia un objeto con Object.assign
    
    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/redux/copy-an-object-with-object-assign)
    
    **Ejercicio**
    El estado y las acciones de Redux fueron modificados para manejar un `object` para el `state`. Edita el código para devolver un nuevo objeto `state` para las acciones de tipo `ONLINE`, que establece la propiedad `status` a la cadena `online`. Intenta utilizar `Object.assign()` para completar el desafío.

    ```js
    const defaultState = {
        user: 'CamperBot',
        status: 'offline',
        friends: '732,982',
        community: 'freeCodeCamp'
    };

    const immutableReducer = (state = defaultState, action) => {
        switch(action.type) {
            case 'ONLINE':
            // No mutes el estado aquí o la prueba fallará
            return Object.assign({}, state, { status: "online" });
            default:
            return state;
        }
    };

    const wakeUp = () => {
        return {
            type: 'ONLINE'
        }
    };

    const store = Redux.createStore(immutableReducer);
    ```


# React y Redux

Ahora que sabes cómo administrar el flujo de datos compartidos con Redux, es hora de combinar ese conocimiento con React. En los cursos de React y Redux, construirás un componente de React y aprenderás cómo administrar el estado localmente a un nivel de componentes, y a lo largo de toda la aplicación con Redux.

1. Introducción a React Redux

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react-and-redux/getting-started-with-react-redux)    

    **Ejercicio**
    Comienza con un componente `DisplayMessages`. Añade un constructor a este componente e inicialízalo con un estado que tenga dos propiedades: `input`, que se establece como una cadena vacía, y `messages`, que se establece como un arreglo vacío.

    ```js
    class DisplayMessages extends React.Component {
        // Cambia el código debajo de esta línea
        constructor(props){
            super(props);
            this.state={
                input:'',
                messages:[]
            }
        }
        // Cambia el código encima de esta línea
        render() {
            return <div />
        }
    };
    ```

2. Gestiona el estado localmente primero

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react-and-redux/manage-state-locally-first)    

    **Ejercicio**
    En primer lugar, en el método `render()`, haz que el componente renderice un elemento `input`, un elemento `button` y un elemento `ul`. Cuando el elemento `input` cambia, debe activar un método `handleChange()`. Además, el elemento `input` debe renderizar el valor de `input` que está en el estado del componente. El elemento `button` debe activar un método `submitMessage()` cuando se hace clic en él.

    En segundo lugar, escribe estos dos métodos. El método `handleChange()` debe actualizar el `input` con lo que el usuario está escribiendo. El método `submitMessage()` debe concatenar el mensaje actual (almacenado en `input`) al arreglo `messages` del estado local, y borrar el valor de `input`.

    Por último, utiliza el `ul` para asignar el arreglo de `messages` y renderizarlo en la pantalla como una lista de elementos `li`.

    ```js
    class DisplayMessages extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                input: '',
                messages: []
            }
        }
        // Agrega los métodos handleChange() y submitMessage() aquí
        handleChange(event){
            this.setState({
                input: event.target.value,
                messages: this.state.messages
            })
        }

        submitMessage(){
            this.setState({
                input: '',
                messages: [...this.state.messages, this.state.input]
            })
        }

        render() {
            return (
                <div>
                    <h2>Type in a new Message:</h2>
                    { /* Renderiza un input, button, y ul debajo de esta línea */ }
                    <input onChange={this.handleChange.bind(this)} value={this.state.input}/>
                    <button onClick={this.submitMessage.bind(this)}>Submit</button>
                    <ul>
                        {this.state.messages.map((x, i)=>{
                            return <li key={i}>{x}</li>
                        })}
                    </ul>
                    { /* Cambia el código encima de esta línea */ }
                </div>
            );
        }
    };
    ```

3. Extrae la lógica de estado a Redux

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react-and-redux/extract-state-logic-to-redux)    

    **Ejercicio**
    En primer lugar, define un tipo de acción `ADD` y asígnalo a una const `ADD`. A continuación, define un creador de acciones `addMessage()` que crea la acción para añadir un mensaje. Tendrás que pasar un `message` a este creador de acciones e incluir el mensaje en la `action` devuelta.

    Luego crea un reductor llamado `messageReducer()` que maneja el estado de los mensajes. El estado inicial debe ser igual a un arreglo vacío. Este reductor debe añadir un mensaje al arreglo de mensajes mantenido en el estado, o devolver el estado actual. Finalmente, crea tu almacén Redux y pásale el reductor.

    ```js
    // Define ADD, addMessage(), messageReducer(), y store aquí:
    const ADD = "ADD";
    const addMessage = message => {
        return {
            type: ADD,
            message
        };
    };

    // Use ES6 default paramter to give the 'previousState' parameter an initial value.
    const messageReducer = (previousState = [], action) => {
        // Use switch statement to lay out the reducer logic in response to different action type
        switch (action.type) {
            case ADD:
            // Use ES6 spread operator to return a new array where the new message is added to previousState
            return [...previousState, action.message];
            break;

            default:
            // A default case to fall back on in case if the update to Redux store is not for this specific state.
            return previousState;
        }
    };

    const store = Redux.createStore(messageReducer);
    ```

4. Usa "Provider" para conectar Redux a React

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react-and-redux/use-provider-to-connect-redux-to-react)    

    **Ejercicio**
    El editor de código ahora muestra todo tu código Redux y React de los últimos desafíos. Incluye el almacén Redux, las acciones y el componente `DisplayMessages`. La única pieza nueva es el componente `AppWrapper` de la parte inferior. Usa este componente de nivel superior para renderizar el `Provider` de `ReactRedux`, y pasa el almacén Redux como prop. Luego, renderiza el componente `DisplayMessages` como hijo. Una vez que hayas terminado, deberías ver tu componente React renderizado en la página.

    **Nota**: React Redux está disponible como una variable global aquí, por lo que puedes acceder al "Provider" con notación de puntos. El código del editor aprovecha esto y lo establece en una constante `Provider` para que lo uses en el método de renderizado `AppWrapper`.

    ```js
    // Redux:
    const ADD = 'ADD';

    const addMessage = (message) => {
        return {
            type: ADD,
            message
        }
    };

    const messageReducer = (state = [], action) => {
        switch (action.type) {
            case ADD:
            return [
                ...state,
                action.message
            ];
            default:
            return state;
        }
    };

    const store = Redux.createStore(messageReducer);

    // React:

    class DisplayMessages extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                input: '',
                messages: []
            }
            this.handleChange = this.handleChange.bind(this);
            this.submitMessage = this.submitMessage.bind(this);
        }
        handleChange(event) {
            this.setState({
                input: event.target.value
            });
        }
        submitMessage() {  
            this.setState((state) => {
                const currentMessage = state.input;
                return {
                    input: '',
                    messages: state.messages.concat(currentMessage)
                };
            });
        }
        render() {
            return (
                <div>
                    <h2>Type in a new Message:</h2>
                    <input
                    value={this.state.input}
                    onChange={this.handleChange}/><br/>
                    <button onClick={this.submitMessage}>Submit</button>
                    <ul>
                    {this.state.messages.map( (message, idx) => {
                        return (
                            <li key={idx}>{message}</li>
                        )
                        })
                    }
                    </ul>
                </div>
            );
        }
    };

    const Provider = ReactRedux.Provider;

    class AppWrapper extends React.Component {
    // Renderiza el Provider debajo de esta línea
        render() {
            return (
                <Provider store={store}>
                    <DisplayMessages />
                </Provider>
            );
        }
    // Cambia el código encima de esta línea
    };
    ```

5. Asigna el estado a props

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react-and-redux/map-state-to-props)    

    **Ejercicio**
    Crea una función `mapStateToProps()`. Esta función debe tomar `state` como argumento, y luego devolver un objeto que asigna ese estado a nombres de propiedades específicas. Estas propiedades serán accesibles a tu componente a través de `props`. Dado que este ejemplo mantiene todo el estado de la aplicación en un solo arreglo, puedes pasar todo ese estado a tu componente. Crea una propiedad `messages` en el objeto que se devuelve, y establécela como `state`.

    ```js
    const state = [];

    // Cambia el código debajo de esta línea
    const mapStateToProps = (state) => { 
        return { 
            messages: state
        }
    }
    ```

6. Asigna el envío a props

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react-and-redux/map-dispatch-to-props)    

    **Ejercicio**
    El editor de código proporciona un creador de acción llamado `addMessage()`. Escribe la función `mapDispatchToProps()` que toma `dispatch` como argumento y devuelve un objeto. El objeto debe tener una propiedad `submitNewMessage` establecida en la función de envío, que toma un parámetro para el nuevo mensaje a añadir cuando envía `addMessage()`.

    ```js
    const addMessage = (message) => {
        return {
            type: 'ADD',
            message: message
        }
    };

    // Cambia el código debajo de esta línea
    const mapDispatchToProps = (dispatch) => {
        return {
            submitNewMessage: (message) => {
                dispatch(addMessage(message))
            }
        }
    }
    ```

7. Conecta Redux a React

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react-and-redux/connect-redux-to-react)    

    **Ejercicio**
    El editor de código tiene las funciones `mapStateToProps()` y `mapDispatchToProps()` y un nuevo componente React llamado `Presentational`. Conecta este componente a Redux con el método `connect` del objeto global `ReactRedux`, y llámalo inmediatamente en el componente `Presentational`. Asigna el resultado a una nueva `const` llamada `ConnectedComponent` que representa el componente conectado. Eso es todo, ¡ahora estás conectado a Redux! Intenta cambiar cualquiera de los argumentos de `connect` a `null` y observa los resultados de la prueba.

    ```js
    const addMessage = (message) => {
        return {
            type: 'ADD',
            message: message
        }
    };

    const mapStateToProps = (state) => {
        return {
            messages: state
        }
    };

    const mapDispatchToProps = (dispatch) => {
        return {
            submitNewMessage: (message) => {
                dispatch(addMessage(message));
            }
        }
    };

    class Presentational extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return <h3>This is a Presentational Component</h3>
        }
    };

    const connect = ReactRedux.connect;
    // Cambia el código debajo de esta línea
    const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps) (Presentational);
    ```

8. Conecta Redux a la aplicación de mensajes

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react-and-redux/connect-redux-to-the-messages-app)    

    **Ejercicio**
    El editor tiene todo el código que has escrito hasta ahora en esta sección. El único cambio es que el componente React se renombra a `Presentational`. Crea un nuevo componente en una constante llamada `Container` que usa `connect` para conectar el componente `Presentational` a Redux. Luego, en el `AppWrapper`, renderiza el componente `Provider` de React Redux. Pasa a `Provider` el `store` Redux como una prop y renderiza `Container` como un hijo. Una vez que todo esté configurado, verás que la aplicación de mensajes vuelve a aparecer en la página.

    ```js
    // Redux:
    const ADD = 'ADD';

    const addMessage = (message) => {
        return {
            type: ADD,
            message: message
        }
    };

    const messageReducer = (state = [], action) => {
        switch (action.type) {
            case ADD:
            return [
                ...state,
                action.message
            ];
            default:
            return state;
        }
    };

    const store = Redux.createStore(messageReducer);

    // React:
    class Presentational extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                input: '',
                messages: []
            }
            this.handleChange = this.handleChange.bind(this);
            this.submitMessage = this.submitMessage.bind(this);
        }
        handleChange(event) {
            this.setState({
                input: event.target.value
            });
        }
        submitMessage() {
            this.setState((state) => {
            const currentMessage = state.input;
            return {
                input: '',
                messages: state.messages.concat(currentMessage)
            };
            });
        }
        render() {
            return (
            <div>
                <h2>Type in a new Message:</h2>
                <input
                value={this.state.input}
                onChange={this.handleChange}/><br/>
                <button onClick={this.submitMessage}>Submit</button>
                <ul>
                {this.state.messages.map( (message, idx) => {
                    return (
                        <li key={idx}>{message}</li>
                    )
                    })
                }
                </ul>
            </div>
            );
        }
    };

    // React-Redux:
    const mapStateToProps = (state) => {
        return { messages: state }
    };

    const mapDispatchToProps = (dispatch) => {
        return {
            submitNewMessage: (newMessage) => {
                dispatch(addMessage(newMessage))
            }
        }
    };

    const Provider = ReactRedux.Provider;
    const connect = ReactRedux.connect;

    // Define el componente Container aquí:
    const Container = connect(mapStateToProps,mapDispatchToProps)(Presentational)

    class AppWrapper extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            // Completa la sentencia return:
            return (
                <Provider store={store}>
                    <Container />
                </Provider>
            );
        }
    };
    ```

9. Extrae el estado local en Redux

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react-and-redux/extract-local-state-into-redux)    

    **Ejercicio**
    En el componente `Presentational`, primero elimina la propiedad `messages` del local `state`. Estos mensajes serán gestionados por Redux. A continuación, modifica el método `submitMessage()` para que `submitNewMessage()` trabaje desde `this.props` y pase la entrada del mensaje actual desde el `state` local como un argumento. Ya que eliminaste `messages` desde el estado local, elimina también la propiedad `messages` de la llamada a `this.setState()`. Finalmente, modifica el método `render()` para que asigne los mensajes recibidos desde `props` en lugar de `state`.

    Una vez realizados estos cambios, la aplicación seguirá funcionando igual, salvo que Redux gestiona el estado. Este ejemplo también ilustra cómo un componente puede tener un `state` local: tu componente aún registra la entrada del usuario localmente en su propio `state`. Puedes ver cómo Redux proporciona un framework útil de gestión de estados sobre React. Alcanzaste el mismo resultado usando solo el estado local de React al principio, y esto es generalmente posible con aplicaciones simples. Sin embargo, cuanto más complejas y grandes se vuelve tus aplicaciones, más lo hará la gestión del estado, y esto es el problema que Redux resuelve.

    ```js
    // Redux:
    const ADD = 'ADD';

    const addMessage = (message) => {
        return {
            type: ADD,
            message: message
        }
    };

    const messageReducer = (state = [], action) => {
        switch (action.type) {
            case ADD:
            return [
                ...state,
                action.message
            ];
            default:
            return state;
        }
    };

    const store = Redux.createStore(messageReducer);

    // React:
    const Provider = ReactRedux.Provider;
    const connect = ReactRedux.connect;

    // Change code below this line
    class Presentational extends React.Component {
        constructor(props) {
            super(props);
            
            // Remove property 'messages' from Presentational's local state
            this.state = {
                input: ''
            }
            this.handleChange = this.handleChange.bind(this);
            this.submitMessage = this.submitMessage.bind(this);
        }
        handleChange(event) {
            this.setState({
                input: event.target.value
            });
        }
        submitMessage() {
        
            // Call 'submitNewMessage', which has been mapped to Presentational's props, with a new message;
            // meanwhile, remove the 'messages' property from the object returned by this.setState().
            this.props.submitNewMessage(this.state.input);
            this.setState({
                input: ''
            });
        }
        render() {
            return (
                <div>
                    <h2>Type in a new Message:</h2>
                    <input
                    value={this.state.input}
                    onChange={this.handleChange}/><br/>
                    <button onClick={this.submitMessage}>Submit</button>
                    <ul>
                    {/* The messages state is mapped to Presentational's props; therefore, when rendering,
                        you should access the messages state through props, instead of Presentational's
                        local state. */}
                    {this.props.messages.map( (message, idx) => {
                        return (
                            <li key={idx}>{message}</li>
                        )
                        })
                    }
                    </ul>
                </div>
            );
        }
    };
    // Change code above this line

    const mapStateToProps = (state) => {
        return {messages: state}
    };

    const mapDispatchToProps = (dispatch) => {
        return {
            submitNewMessage: (message) => {
                dispatch(addMessage(message))
            }
        }
    };

    const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

    class AppWrapper extends React.Component {
        render() {
            return (
                <Provider store={store}>
                    <Container/>
                </Provider>
            );
        }
    };
    ```

10. Avanzando desde aquí

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/react-and-redux/moving-forward-from-here)    

    **Ejercicio**
    Imprime el mensaje `'Now I know React and Redux!'` en la consola.

    ```js
    /*
        import React from 'react'
        import ReactDOM from 'react-dom'
        import { Provider, connect } from 'react-redux'
        import { createStore, combineReducers, applyMiddleware } from 'redux'
        import thunk from 'redux-thunk'

        import rootReducer from './redux/reducers'
        import App from './components/App'

        const store = createStore(
            rootReducer,
            applyMiddleware(thunk)
        );

        ReactDOM.render(
            <Provider store={store}>
                <App/>
            </Provider>,
            document.getElementById('root')
        );
    */

    // Cambia solo el código debajo de esta línea
    console.log('Now I know React and Redux!')
    ```

# Proyectos de librerías de desarrollo de la interfaz
Es hora de poner a prueba tus habilidades con las librerías de desarrollo de la interfaz. Usa Bootstrap, jQuery, Sass, React, y Redux para construir 5 proyectos que probarán todo lo que has aprendido hasta este punto.

Completa los 5 proyectos y obtendrás la certificación librerías de desarrollo de la interfaz.

1. Construye una máquina de frases aleatorias

    Leccion original [FCC](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-random-quote-machine)    

    **Ejercicio**

    **Objetivo**: Construye una aplicación que sea funcionalmente similar a esta: https://random-quote-machine.freecodecamp.rocks/.

    Completa las historias de usuario a continuación y obtén todas las pruebas para aprobar. Utiliza cualquier librería o API que necesites. Dale tu propio estilo.

    Puedes utilizar cualquier combinación de HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux y jQuery para completar este proyecto.

    **Historia de usuario #1**: Puedo ver un elemento contenedor con un archivo `id="quote-box"`.

    **Historia de usuario #2**: Dentro de `#quote-box`, puedo ver un elemento con su correspondiente `id="text"`.

    **Historia de usuario #3**: Dentro de `#quote-box`, puedo ver un elemento con su correspondiente `id="author"`.

    **Historia de usuario #4**: Dentro de `#quote-box`, puedo ver un elemento en el que se puede hacer clic con su correspondiente `id="new-quote"`.

    **Historia de usuario #5**: Dentro de `#quote-box`, puedo ver un elemento clickeable a con su correspondiente `id="tweet-quote"`.

    **Historia de usuario #6**: En la primer carga, mi máquina de frases muestra una frase aleatoria en el elemento con `id="text"`.

    **Historia de usuario #7:**En el primer cargado, mi máquina de frases muestra al autor de la frase aleatoria en el elemento con `id="author"`.

    **Historia de usuario #8:** Cuando se hace clic en el botón `#new-quote`, mi máquina de frases debe buscar una nueva frase y mostrarla en el elemento `#text`.

    **Historia de usuario #9**: Mi máquina de frases debe buscar al autor de la nueva frase cuando se hace clic en el botón `#new-quote` y mostrarlo en el elemento `#author`.

    **Historia de usuario #10**: Puedo tuitear la frase actual haciendo clic en `#tweet-quote` del elemento `a`. Este elemento `a` debe incluir la ruta `"twitter.com/intent/tweet"` en su atributo `href` para tuitear la frase actual.

    **Historia de usuario #11**: El elemento contenedor `#quote-box` debe estar centrado horizontalmente. Ejecuta las pruebas con el nivel de zoom del navegador al 100% y la página maximizada.

    Puedes construir tu proyecto utilizando esta plantilla CodePen y haciendo clic en Save para crear tu propio proyecto CodePen: https://codepen.io/pen?template=MJjpwO

    Una vez que hayas terminado, envía la URL de tu proyecto funcional con todas las pruebas pasadas.

    **Nota**: Twitter no permite que se carguen enlaces en un iframe. Intenta usar el atributo `target="_blank"` o `target="_top"` en el elemento `#tweet-quote` si tu tweet no se carga. `target="_top"` reemplazará la pestaña actual, así que asegúrate de que tu trabajo esté guardado.

2. Crea un previsualizador de Markdown
3. Crea una batería electrónica
4. Crea una calculadora con JavaScript
5. Construye un reloj 25 + 5