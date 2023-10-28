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
let intro = document.getElementById('modalPortada');
let btnIntro = document.getElementById('btnIntro');
let containerJuego = document.getElementById('container-juego');
let input = document.getElementById('inputUser');
const miAudio = document.getElementById('baseMusica');
const volumenAudio = 0.1;

miAudio.volume = volumenAudio;

miAudio.addEventListener('termino', function(){
    miAudio.currentTime = 0;
    miAudio.play();
})

btnIntro.addEventListener('click', reproducir);
function reproducir(){
    if(miAudio.paused){
        miAudio.play();
    console.log("estoy sonando")
    }
}

input.style.display = 'none'
containerJuego.style.display = 'none';
intro.style.display = 'block';
btnIntro.style.display = 'block';

btnIntro.addEventListener('click', ocultarIntro);

function ocultarIntro(){
    intro.style.display = 'none'
    containerJuego.style.display = 'block';
    input.style.display = 'block'
    reproducir();
}


// inicializo arrayAleatorio y el total
let arrayAleatorio;
let total;
let incremento = 30;
// funcion que genera los valoren del array
function generarArrayAleatorio(cantidad) {
    arrayAleatorio = [];
    for (let i = 0; i < cantidad; i++) {
        let numeroAleatorio = Math.floor(Math.random() * 20) + incremento;
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
        sonidoAsierto()
        alert("Suma correcta");
        cambiarColor("green");
        incremento += 100;
        generarArrayAleatorio(4);
        actualizarNumeros();
        actualizarContador();
        inputUser.value = "";
        moverCajaAleatoriamente()

    } else {
        sonidoDesasierto()
        alert("Suma incorrecta, vuelve a intentarlo");
        cambiarColor("red")
    }
}
//funcion play sound
function sonidoAsierto(){
    var sonido = document.getElementById('correcto');
    sonido.play();
}

function sonidoDesasierto(){
    var desacierto = document.getElementById('incorrecto')
    desacierto.play();
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
//funcion cerrar
btnClose.addEventListener('click', cerrar);
function cerrar(){
    alert(`Terminaste el Juego \ncon un total de: ${contador} puntos`);
    document.body.classList.add('desenfocado');

    // Quitar la clase después de un tiempo para revertir el desenfoque
    setTimeout(function () {
        document.body.classList.remove('desenfocado');
    }, 300);
    console.log("estas cerrando");
    console.log("cerrando")

    setTimeout(function () {
        console.log("Cerrando...");
        location.reload();
    }, 1000);
}

function moverCajaAleatoriamente() {
    let caja = document.getElementById('caja');

    // Obtenemos dimensiones de la ventana
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    // Calculamos nuevas posiciones aleatorias
    let nuevaPosX = Math.random() * (windowWidth - caja.offsetWidth);
    let nuevaPosY = Math.random() * (windowHeight - caja.offsetHeight);

    // Aplicamos las nuevas posiciones
    caja.style.left = nuevaPosX + 'px';
    caja.style.top = nuevaPosY + 'px';
}

const caja1 = document.querySelector('.caja1');
const duracionAnimacion = 36000; // Duración en milisegundos (28 segundos)
const tiempoEspera = 10; 

// Ajusta la velocidad de la animación
caja1.style.animationDuration = duracionAnimacion + 'ms';
caja1.style.animationDelay = tiempoEspera + 'ms';

