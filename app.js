// declaro variables y las traigo desde el html
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let num3 = document.getElementById('num3');
let num4 = document.getElementById('num4');
let inputUser = document.querySelector('input');
let btn = document.getElementById('enviar');
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
        return; // Sale de la función si los valores son incorrectos
     }
    if (valorUsuario === sumarNumerosAleatorios()) {
        alert("Suma correcta");
        generarArrayAleatorio(4);
        actualizarNumeros();
        inputUser.value = "";
    } else {
        alert("Suma incorrecta, vuelve a intentarlo");
    }
}

