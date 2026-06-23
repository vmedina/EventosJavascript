// Obtiene el elemento HTML que tiene el id "texto"
// y lo guarda en la constante texto.
const texto = document.getElementById("texto");

// Obtiene el elemento HTML que tiene el id "mensaje"
// y lo guarda en la constante mensaje.
const mensaje = document.getElementById("mensaje");

// Agrega un evento "keyup" al elemento texto.
// Este evento se ejecuta cuando el usuario SUELTA una tecla.
texto.addEventListener("keyup", function(event) {

    // Cambia el contenido de texto del elemento mensaje.
    // event.key contiene la tecla que se soltó.
    mensaje.textContent = "Última tecla soltada: " + event.key;
});


// Busca un elemento usando un selector CSS llamado "down".
// document.getElementById("down")
const input = document.querySelector("down");

// Obtiene el elemento con id "log".
const log = document.getElementById("log");


// Agrega el evento "keydown" al elemento down.
// Este evento se ejecuta cuando una tecla es PRESIONADA.
down.addEventListener("keydown", logKey);


// Función que se ejecuta cada vez que ocurre el evento keydown.
function logKey(e) {

    // Agrega al contenido del elemento log
    // el código de la tecla presionada.
    //
    // e.code devuelve valores como:
    // KeyA, KeyB, Enter, Space, ArrowUp, etc.
    //
    // += significa que se agrega al texto existente
    // en lugar de reemplazarlo.
    log.textContent += ` ${e.code}`;
};


// Agrega un evento "keypress" a toda la ventana del navegador.
// Se ejecuta cuando el usuario presiona una tecla que genera un carácter.
window.addEventListener("keypress", function(event) {

    // Busca el elemento con id "mensaje1".
    let mensaje = document.getElementById("mensaje1");

    // Muestra dentro del elemento un párrafo indicando
    // qué tecla fue presionada.
    //
    // event.key devuelve el carácter pulsado.
    mensaje1.innerHTML = "<p>Presionaste: " + event.key + "</p>";

});
