'use strict';

// Llamar a las constantes
const send = document.querySelector('.js-send');

const letsGo = document.querySelector('.js-letsGo');
const result = document.querySelector('.js-result');

// Llamar a las variables, porque el valor va cambiando
let scorePlayer = 0;
let scorePc = 0;
let timesPlayer = 0;

// Generar numero aleatorio
function getRandomNumber(max) {
    return Math.ceil(Math.random() *10);
}

// Asignar numero aleatorio el resultado
function getRandomMovement () {
    const randomNumber = getRandomNumber(9);
    if (randomNumber <= 3) {
        return 'piedra';
    } else if (randomNumber >= 7){
        return 'papel';
    } else {
        return 'tijera';
    }
}

// Funcionamiento del juego
function game () {
    const userSelection = document.querySelector('#options').value;
    const pcSelection = getRandomMovement();
    if(userSelection == ""){
        document.querySelector('.text').innerHTML = "Elija una opción";
    }else {
        if (userSelection === pcSelection){
            letsGo.textContent = "Empate"; 
        } else if (
            (userSelection === "piedra" && pcSelection === "tijera") ||
            (userSelection === "papel" && pcSelection === "piedra") ||
            (userSelection === "tijera" && pcSelection === "papel")
        ) {
            letsGo.textContent = "¡Has ganado!";
            scorePlayer++;
        } else {
            letsGo.textContent = "¡Has perdido!";
            scorePc++;
        }
        document.querySelector('.text').innerHTML = "";
        result.innerHTML = `Jugador: ${scorePlayer}<br>Computadora: ${scorePc}`;
    }
}

// Llamada para que funcione el juego
send.addEventListener("click", game);