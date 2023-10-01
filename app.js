// declaro variables y las traigo desde el html
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let num3 = document.getElementById('num3');
let num4 = document.getElementById('num4');
let inputUser = document.querySelector('input');
let btn = document.getElementById('enviar');
let contadorElement = document.getElementById('contador');
let btnClose = document.getElementById('close');
const body = document.body;

// inicializo arrayAleatorio y el total
let arrayAleatorio;
let total;
// funcion que genera los valoren del array
function generarArrayAleatorio(cantidad) {
    arrayAleatorio = [];
    for (let i = 0; i < cantidad; i++) {
        let numeroAleatorio = Math.floor(Math.random() * 101) + 100;
        arrayAleatorio.push(numeroAleatorio);
    }
}
// funcion que toma los nuevos valores y los manda al html
function actualizarNumeros() {
    num1.textContent = arrayAleatorio[0];
    num2.textContent = arrayAleatorio[1];
    num3.textContent = arrayAleatorio[2];
    num4.textContent = arrayAleatorio[3];
}
// funcion que toma el array aleatorio y los recorre sumando cada valor
function sumarNumerosAleatorios() {
    total = 0;
    for (let i = 0; i < arrayAleatorio.length; i++) {
        total += arrayAleatorio[i];
    }
    return total;
}

let contador = 0;
//llamo a las funciones para que generen el primer valor y lo muestren
generarArrayAleatorio(4);
actualizarNumeros();



// le digo al btn cuando escuche el click llame a la funcion verificar
btn.addEventListener('click', verificar);
// funcion que compara el valor que ingreso el usuario con el valor la funcion suma
function verificar() {
    let valorUsuario = parseInt(inputUser.value);
    if (inputUser.value.trim().length === 0 || inputUser.value.trim().length < 2) {
        alert("Valores incorrectos");
        cambiarColor("red");
        return; // Sale de la función si los valores son incorrectos
        
    }
    if (valorUsuario === sumarNumerosAleatorios()) {
        alert("Suma correcta");
        generarArrayAleatorio(4);
        actualizarNumeros();
        actualizarContador();
        cambiarColor("green");
        inputUser.value = "";
    } else {
        alert("Suma incorrecta, vuelve a intentarlo");
        cambiarColor("red")
    }
}
function cambiarColor(color) {
    body.style.background = color;
    // Revertir el color después de 3 segundos
    setTimeout(function () {
        body.style.background = "";
    }, 600);
}
function actualizarContador() {
    contador++;
    contadorElement.textContent = contador.toString();
}
btnClose.addEventListener('click', cerrar);
function cerrar() {
    alert(`Terminaste el juego \ncon un total de: ${contador} puntos`);
    document.body.classList.add('desenfocado');

    // Quitar la clase después de un tiempo para revertir el desenfoque
    setTimeout(function () {
        document.body.classList.remove('desenfocado');
    }, 300);
}

// Agregar un listener para el evento click
btnClose.addEventListener('click', function () {
    // Agregar la clase de escala al hacer clic
    btnClose.classList.add('escalar');

    // Quitar la clase después de un tiempo para permitir que la animación se repita
    setTimeout(function () {
        btnClose.classList.remove('escalar');
    }, 300);
});
