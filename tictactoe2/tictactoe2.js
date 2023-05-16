let p1 = 1;
startGame();

// start the game
function startGame() {
    document.getElementById("playagain").hidden = true;
    //set click for each button
    const buttons = document.querySelector(".grid-container").children;
    for (const button of buttons) {
        button.onclick = clickGameButton;
    }

}
//button click logic
function clickGameButton(event) {
    const button = event.target;
    if (p1 == 1 && !button.innerHTML) {
        button.innerHTML = 'X';
        p1 = 0;
    }
    if (p1 != 1 && !button.innerHTML) {
        button.innerHTML = 'O';
        p1 = 1;
    }
    if (isWin('X')) {
        alert("X Wins!");
        showPlayAgain();
    }
    if (isWin('O')) {
        alert("O Wins!");
        showPlayAgain();
    }
    if (isDraw()) {
        alert("Draw!");
        showPlayAgain();
    }
}
//play the game again
function playAgain() {
    p1 = 1;
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