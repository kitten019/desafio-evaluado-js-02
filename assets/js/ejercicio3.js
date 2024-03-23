//Ejercicio 3
document.addEventListener("DOMContentLoaded", function () {
    let btn1 = document.getElementById("btn-sumar");
    let btn2 = document.getElementById("btn-restar");

    //Función de suma
    btn1.addEventListener("click", function () {
        // Obtenemos los valores de los input
        let number1 = Number(document.querySelectorAll("input")[0].value);
        let number2 = Number(document.querySelectorAll("input")[1].value);
        const suma = number1 + number2; //En este caso, se suman los valores
        
        // Verificación de positivo, negativo o cero para la suma
        if (suma > 0) {
            document.querySelector(".resultado").innerHTML = suma; //Mostramos por pantalla el valor de la suma si es mayor a cero
        } else {
            document.querySelector(".resultado").innerHTML = "0";   //Si resulta un numero negativo se muestra 0 por pantalla
        }
    })

    //Función de resta
    btn2.addEventListener("click", function () {
        let number1 = Number(document.querySelectorAll("input")[0].value);
        let number2 = Number(document.querySelectorAll("input")[1].value);
        const resta = number1 - number2; //En este caso, se restan los valores
        
       // Verificación de positivo, negativo o cero para la resta 
        if (resta > 0) {
            document.querySelector(".resultado").innerHTML = resta; //Mostramos por pantalla el valor de la resta si es mayor a cero
        } else {
            document.querySelector(".resultado").innerHTML = "0"; //Si resulta un numero negativo se muestra 0 por pantalla
        }
    })
});
