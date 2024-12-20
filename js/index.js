/*var corazon1 = document.getElementById("foto1");
corazon1.onclick = function () {
    var contador1 = document.getElementById("span1");
    contador1.innerHTML = parseInt(contador1.innerHTML) + 1
}
var corazon2 = document.getElementById("foto2")
corazon2.onclick = function () {
    var contador2 = document.getElementById("span2");
    contador2.innerHTML = parseInt(contador2.innerHTML) + 1
}
    */

var corazones = document.getElementsByClassName("fa-solid fa-heart")
for (let index = 0; index < corazones.length; index++) {
    var element = corazones[index]
    element.onclick = function (c) {
        var cont = c.target.nextElementSibling
        cont.innerHTML = parseInt(cont.innerHTML) + 1
    }
}

/*
Explicación paso a paso:

var corazones = document.getElementsByClassName("fa-solid fa-heart");

Aquí se obtiene una colección de todos los elementos del DOM que tienen la clase "fa-solid fa-heart". Estos son los íconos de corazón, que están dentro de las etiquetas <i> en el HTML.
document.getElementsByClassName devuelve una "colección en vivo" (live collection) de elementos que tienen esa clase específica, es decir, todos los corazones que están en la página.


for (let index = 0; index < corazones.length; index++) {

Se utiliza un bucle for para recorrer todos los elementos que se han seleccionado con getElementsByClassName. El bucle se ejecutará tantas veces como la longitud de la colección corazones.
index es el índice de cada elemento en la colección. Comienza en 0 y va hasta corazones.length - 1.


var element = corazones[index];

Se obtiene el elemento en la posición index de la colección corazones y se almacena en la variable element. Esto nos da acceso al ícono de corazón en cada iteración.


element.onclick = function (c) {

Aquí se asigna una función a cada uno de los elementos de corazón. La función se ejecuta cada vez que el usuario hace clic en el ícono de corazón (onclick).
c es el evento de clic que se pasa automáticamente al manejar el evento onclick. Este objeto contiene información sobre el clic, como el elemento sobre el que se hizo clic (accedido a través de c.target).


var cont = c.target.nextElementSibling;

c.target hace referencia al elemento sobre el que se hizo clic (es decir, el ícono de corazón).
nextElementSibling selecciona el siguiente elemento hermano del corazón, que en tu código HTML es el <span> que contiene el contador.
Este código busca el span que está justo después del ícono de corazón y lo almacena en la variable cont.


cont.innerHTML++;

Aquí se incrementa el valor dentro del span (el contador de "likes"). innerHTML es una propiedad que obtiene o establece el contenido HTML dentro del elemento (en este caso, el número de "likes").
++ es un operador que incrementa el valor numérico del contador en 1.
*/