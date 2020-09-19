let numberReady1 = "";
let numberReady2 = "";
let randomNumber1 = 0;
let randomNumber2 = 0;
function genRandomNumber1() {
  let ranNum1 = Math.floor(Math.random() * 6) + 1;
  numberReady1 = "images/dice" + ranNum1 + ".png";
  randomNumber1 = ranNum1;
}
function genRandomNumber2() {
  let ranNum2 = Math.floor(Math.random() * 6) + 1;
  numberReady2 = "images/dice" + ranNum2 + ".png";
  randomNumber2 = ranNum2;
}

function rollDice() {
  document.querySelector(".img1").setAttribute("src", numberReady1);
  document.querySelector(".img2").setAttribute("src", numberReady2);
}

function displayResult() {
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Gana el jugador 1";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Gana el jugador 2";
  } else {
    document.querySelector("h1").textContent = "Es un Empate";
  }
}
