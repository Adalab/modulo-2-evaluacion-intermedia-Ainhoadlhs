'use strict';

// Llamar a las constantes
const send = document.querySelector('.js-send');

const letsGo = document.querySelector('.js-letsGo');
const result = document.querySelector('.js-result');

let scorePlayer = 0;
let scorePc = 0;


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

function game () {
    const userSelection = document.querySelector('#options').value;
    const pcSelection = getRandomMovement();
    if(userSelection == ""){
        document.querySelector('.text').innerHTML = "Elija una opción"
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
        result.innerHTML = `Jugador: ${scorePlayer}<br>Computadora: ${scorePc}`;
    }
}

send.addEventListener("click", game);