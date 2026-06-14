const character = document.getElementById("character");
const milkshake = document.getElementById("milkshake");
const splash = document.getElementById("splash");

const timer = document.getElementById("timer");
const scoreText = document.getElementById("score");
const message = document.getElementById("message");
const gameArea = document.getElementById("gameArea");

const bgmusic = document.getElementById("bgmusic");

const startScreen = document.getElementById("startScreen");
const startBtn = document.getElementById("startBtn");

let score = 0;
let seconds = 30;
let gameOver = false;
let milkshakeReady = false;
let gameStarted = false;

let moveInterval;
let countdown;

/* START GAME */
startBtn.addEventListener("click", () => {

    startScreen.style.display = "none";
    gameStarted = true;

    message.textContent = "Go!";

    /* MUSIC */
    bgmusic.volume = 0.4;
    bgmusic.play().catch(()=>{});

    /* TIMER */
    countdown = setInterval(() => {

        if (gameOver) return;

        seconds--;
        timer.textContent = seconds;

        if (seconds <= 0) {

            gameOver = true;
            clearInterval(countdown);
            clearInterval(moveInterval);

            message.textContent = "Game Over! Score: " + score;
        }

    }, 1000);

    /* MOVE CHARACTER */
    moveInterval = setInterval(() => {

        if (gameOver) return;

        const x = Math.random() * (gameArea.clientWidth - 200);
        const y = Math.random() * (gameArea.clientHeight - 200);

        character.style.left = x + "px";
        character.style.top = y + "px";

    }, 1000);

});

/* MILKSHAKE CLICK */
milkshake.addEventListener("click", () => {

    if (!gameStarted || gameOver) return;

    milkshakeReady = true;
    message.textContent = "Now tap the character!";
});

/* CHARACTER CLICK */
character.addEventListener("click", () => {

    if (!gameStarted || gameOver) return;
    if (!milkshakeReady) return;

    milkshakeReady = false;

    score++;
    scoreText.textContent = "Score: " + score;

    character.src = "images/crying-character.png";

    splash.style.display = "block";
    splash.style.left = character.style.left;
    splash.style.top = character.style.top;

    setTimeout(() => {
        character.src = "images/character.png";
        splash.style.display = "none";
    }, 500);

});
