const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNell = document.querySelector(".btn--new");
const diceEL = document.querySelector(".dice");

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};
//
btnRoll.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6) + 1;

  // Mostrado o dado
  diceEL.classList.remove("hidden");
  diceEL.src = `./img/dice-${dice}.png`;

  // Chegando numero do dado
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
});

//hold
btnHold.addEventListener("click", function () {
  //adicionando score
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  //vendo se o jogador tem 100 pontos
  if (scores[activePlayer] >= 100) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--winner");
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove("player--active");
  } else {
    //trocando para o proximo player
    switchPlayer();
  }
  //finalizando o  jogo
});
//new game
btnNell.addEventListener("click", function () {
  scores[0] = 0;
  scores[1] = 0;
  currentScore = 0;
  document.getElementById("current--0").textContent = currentScore;
  document.getElementById("current--1").textContent = currentScore;
  document.getElementById("score--0").textContent = 0;
  document.getElementById("score--1").textContent = 0;
  diceEL.classList.add("hidden");
});
