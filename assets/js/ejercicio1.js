//Ejercicio 1

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formulario");  //Accedemos por id al formulario del documento html

    form.addEventListener("submit", function (event) {  //Posteriormente agregamos un evento de tipo listener para capturar los datos del formulario
        event.preventDefault();
        limpiarErrores();
        let textNombre = document.querySelector(".textNombre").value;    
        let textTelefono = document.querySelector(".textAsunto").value;
        let textMensaje = document.querySelector(".textMensaje").value;
        let resultado = validar(textNombre,textTelefono,textMensaje);
        if(resultado == true) {
            exito();
        };
    });
});

//Función externa de limpieza (en caso de que no se pase la validación)
function limpiarErrores() { 
    document.querySelector(".resultado").innerHTML= "";
    document.querySelector(".errorNombre").innerHTML = "";
    document.querySelector(".errorAsunto").innerHTML = "";
    document.querySelector(".errorMensaje").innerHTML = "";
    };

//Función que retorna el resultado de paso de la validación
function exito() {
    document.querySelector(".resultado").innerHTML = "Mensaje enviado con éxito";
};
        
//Función que valida los datos mediante el método test y retorna el resultado de la validación
function validar(nombre, asunto, mensaje) {
    let pasaValidacion = true;
    let validacion = /^[a-zA-Z\s]+$/; // Expresión regular para validar caracteres alfabéticos y espacios en blanco
    
    if(!validacion.test(nombre)) {
        document.querySelector(".errorNombre").innerHTML = "Ingrese un nombre válido."
        pasaValidacion = false;
    }
        
    if(!validacion.test(asunto)) {
        document.querySelector(".errorAsunto").innerHTML = "Ingrese un asunto válido."
        pasaValidacion = false;
    }
        
    if(!validacion.test(mensaje)) {
        document.querySelector(".errorMensaje").innerHTML = "Ingrese un mensaje válido."
        pasaValidacion = false;
    }
        
    return pasaValidacion; // Devolver el resultado de la validación
    };
  


