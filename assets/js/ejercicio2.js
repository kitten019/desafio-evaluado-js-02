//Ejercicio 2
document.addEventListener("DOMContentLoaded", function () {
    const caja = document.getElementById("caja");

    // Obtenemos todos los botones de la caja 
    const botones = document.querySelectorAll("#container button");

    //Se le agrega un event listener a cada botón mediante un forEach
    botones.forEach(function (btn) {
        btn.addEventListener("click", function () {
            const color = btn.style.backgroundColor; // Obtenemos el color de fondo del boton clickeado
            caja.style.backgroundColor = color; // Se le asigna el color de fondo de la caja al color del botón clickeado
        });
    });
});