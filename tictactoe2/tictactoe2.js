//starting info
let p = 1; //player
document.getElementById("playagain").hidden = true;

// start the game
function startGame() {
    setTheTimer();
    document.getElementById("startgame").hidden = true;
    const gameGrid = document.querySelector(".grid-container");
    //set click for each button
    const buttons = gameGrid.children;
    Array.from(buttons).map(button => button.onclick = clickGameButton);
}
//button click logic
function clickGameButton(event) {
    setTheTimer();
    const button = event.target;
    if (p == 1 && !button.innerHTML) {
        button.innerHTML = 'X';
        p = 0;
    }
    //computer (random button selection after click)
    if (p == 0 && !button.innerHTML) {
        const randIndex = Math.floor(Math.random() * 9); //0-8
        const buttons = document.querySelector(".grid-container").children;
        const randButton = Array.from(buttons)[randIndex];
        if (!randButton.innerHTML)
        {
            randButton.innerHTML = 'O';
            p = 1;
        }
        else 
        {
            alert("Uh oh! Button taken!");
            p = 1;
        }
    }
    if (isWin('X')) {
        alert("X Wins!");
        showPlayAgain();
        clearInterval(intervalID);
        document.querySelector(".timer").innerHTML = "NaN";
    }
    if (isWin('O')) {
        alert("O Wins!");
        showPlayAgain();
        clearInterval(intervalID);
        document.querySelector(".timer").innerHTML = "NaN";
    }
    if (isDraw()) {
        alert("Draw! No Winners!");
        showPlayAgain();
        clearInterval(intervalID);
        document.querySelector(".timer").innerHTML = "NaN";
    }
}
let intervalID = null;
//timer logic
function setTheTimer() {
    document.querySelector(".timer").innerHTML = 5;
    let secondsLeft = 5;
    if (intervalID !== null) {
        clearInterval(intervalID);
    }
    intervalID = setInterval(function () {
        if (!secondsLeft) {
            document.querySelector(".timer").innerHTML = "NaN";
            alert("Time's up! Game over!");
            showPlayAgain();
            clearInterval(intervalID);
        }
        else {
            secondsLeft--;
            document.querySelector(".timer").innerHTML = secondsLeft;
        }
    }, 1000);
}
//play the game again
function playAgain() {
    setTheTimer();
    p = 1;
    const buttons = document.querySelector(".grid-container").children;
    for (const button of buttons) {
        button.innerHTML = "";
    }
    document.getElementById("playagain").hidden = true;
}
//is it a win?
function isWin(letter) {
    const buttons = document.querySelector(".grid-container").children;

    const gameState = Array.from(buttons).map((button) => button.innerHTML);

    //all win combinations
    const winCombinations = [[letter, letter, letter, gameState[3], gameState[4], gameState[5], gameState[6], gameState[7], gameState[8]],
    [letter, gameState[1], gameState[2], gameState[3], letter, gameState[5], gameState[6], gameState[7], letter],
    [letter, gameState[1], gameState[2], letter, gameState[4], gameState[5], letter, gameState[7], gameState[8]],
    [gameState[0], letter, gameState[2], gameState[3], letter, gameState[5], gameState[6], letter, gameState[8]],
    [gameState[0], gameState[1], letter, gameState[3], gameState[4], letter, gameState[6], gameState[7], letter],
    [gameState[0], gameState[1], gameState[2], letter, letter, letter, gameState[6], gameState[7], gameState[8]],
    [gameState[0], gameState[1], gameState[2], gameState[3], gameState[4], gameState[5], letter, letter, letter],
    [gameState[0], gameState[1], letter, gameState[3], letter, gameState[5], letter, gameState[7], gameState[8]]];

    return winCombinations.some((winComb) => winComb.toString() === gameState.toString());

}
//is it a draw?
function isDraw() {
    const buttons = document.querySelector(".grid-container").children;
    return Array.from(buttons).every((button) => button.innerHTML != "");
}
//show play again button 
function showPlayAgain() {
    document.getElementById("playagain").hidden = false;
    document.getElementById("playagain").innerHTML = "Play Again!";
}