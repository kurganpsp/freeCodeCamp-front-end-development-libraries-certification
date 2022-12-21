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
        
    ```
    
15. 
16. 
17. 
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
28. 
29. 
30. 
31. 
32. 
33. 
34. 
35. 
36. 
37. 
38. 
39. 
40. 
41. 
42. 
43. 
44. 
45. 
46. 
47. 

# Redux
# React y Redux
# Proyectos de librerías de desarrollo de la interfaz