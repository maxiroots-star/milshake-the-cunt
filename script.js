
const character = document.getElementById("character");
const milkshake = document.getElementById("milkshake");
const splash = document.getElementById("splash");

const timer = document.getElementById("timer");
const scoreText = document.getElementById("score");
const message = document.getElementById("message");
const gameArea = document.getElementById("gameArea");

let score = 0;
let seconds = 30;
let gameOver = false;
let milkshakeReady = false;

/* TIMER */

const countdown = setInterval(() => {

    if (gameOver) return;

    seconds--;

    timer.textContent = seconds;

    if (seconds <= 0) {

        gameOver = true;

        clearInterval(countdown);

        message.textContent =
        "Game Over! Score: " + score;
    }

}, 1000);

/* MOVE CHARACTER */

setInterval(() => {

    if (gameOver) return;

    const x =
    Math.random() * (gameArea.clientWidth - 200);

    const y =
    Math.random() * (gameArea.clientHeight - 200);

    character.style.left = x + "px";
    character.style.top = y + "px";

}, 1000);

/* SELECT MILKSHAKE */

milkshake.addEventListener("click", () => {

    if (gameOver) return;

    milkshakeReady = true;

    message.textContent =
    "Now tap the character!";
});

/* HIT CHARACTER */

character.addEventListener("click", () => {

    if (gameOver) return;

    if (!milkshakeReady) return;

    milkshakeReady = false;

    score++;

    scoreText.textContent =
    "Score: " + score;

    message.textContent =
    "Nice one!";

    character.src =
    "images/crying-character.png";

    splash.style.display = "block";

    splash.style.left =
    character.style.left;

    splash.style.top =
    character.style.top;

    setTimeout(() => {

        splash.style.display = "none";

        character.src =
        "images/character.png";

    }, 500);

});
