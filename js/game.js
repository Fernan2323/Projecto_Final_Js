let cartasDestapadas = 0;
let carta1 = null;
let carta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let tiempo = false;
let cronometro = 4;
let cronometroInicial = cronometro;
let pararTiempo = null;

let mostrarMovimientos = document.querySelector("#movimientos");
let mostrarAciertos = document.querySelector("#aciertos");
let mostrarTiempo = document.querySelector("#tiempoRestante");
let ventanaResultados = document.querySelector('main');

let numeros = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
numeros = numeros.sort(() => {
  return Math.random() - 0.5;
});

function contarTiempo() {
  pararTiempo = setInterval(() => {
    cronometro--;
    mostrarTiempo.innerHTML = `Tiempo: '${cronometro}`;
    if (cronometro == 0) {
      clearInterval(pararTiempo);
      bloquearCartas();
      crearElemento();
    }
  }, 1000);
}

function bloquearCartas() {
  for (let i = 0; i <= 15; i++) {
    let cartaBloqueada = document.getElementById(i);
    cartaBloqueada.innerHTML = `<img src="./img/${numeros[i]}.png" alt="pokemon">`;
    cartaBloqueada.disabled = true;
  }
}

//Falta hacer correciones en el css
/* function crearElemento() {
  let divElement = document.createElement('div');
  divElement.classList.add('divElement'); 
  divElement.innerHTML = `<h2>Fin del juego</h2>
                          <p>Aciertos: ${aciertos}</p>
                           <p>Demoraste: ${
                            cronometroInicial - cronometro  
                          } segundos</p>
                          <p>Movimientos: ${movimientos}`;
  
  
  ventanaResultados.appendChild(divElement);
} */


function destapar(id) {
  cartasDestapadas++;
  console.log(cartasDestapadas);

  if (tiempo == false) {
    contarTiempo();
    tiempo = true;
  }

  if (cartasDestapadas == 1) {
    carta1 = document.getElementById(id);
    primerResultado = numeros[id];
    carta1.innerHTML = `<img src="./img/${primerResultado}.png" alt="pokemon">`;

    carta1.disabled = true;
  } else if (cartasDestapadas == 2) {
    carta2 = document.getElementById(id);
    segundoResultado = numeros[id];
    carta2.innerHTML = `<img src="./img/${segundoResultado}.png" alt="pokemon">`;

    carta2.disabled = true;

    movimientos++;
    mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;

    if (primerResultado == segundoResultado) {
      cartasDestapadas = 0;

      aciertos++;
      mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;

      if (aciertos == 8) {
        clearInterval(pararTiempo);
        mostrarAciertos.innerHTML = `Aciertos: ${aciertos} Bien hecho!`;
        mostrarTiempo.innerHTML = `Enhorabuena! demoraste ${
          cronometroInicial - cronometro
        } segundos`;
        mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;
      }
      
    } else {
      setTimeout(() => {
        carta1.innerHTML = " ";
        carta2.innerHTML = " ";
        carta1.disabled = false;
        carta2.disabled = false;
        cartasDestapadas = 0;
      }, 800);
      
    }
  }
}

//========================================================================================

const playerStorage = localStorage.getItem("1234");

playerContainer = document.querySelector(".playerContainer");

if (playerStorage) {
  const playerH2 = document.createElement("h2");
  playerH2.innerText = `Player: ${playerStorage}`;
  playerH2.classList.add("h2Style", "estadisticas");
  playerContainer.appendChild(playerH2);
} else {
  playerContainer.textContent = "Jugador no encontrado";
}
