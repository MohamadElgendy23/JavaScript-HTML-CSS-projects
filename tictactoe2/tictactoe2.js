let p1 = 1;
startGame();

// start the game
function startGame() {
    document.getElementById("playagain").hidden = true;
    //set click for each button
    const buttons = document.getElementById("grid-container").children;
    for (button of buttons) {
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
    if (isDraw()) {
        alert("Draw!");
        document.getElementById("playagain").hidden = false;
        document.getElementById("playagain").innerHTML = "Play Again!";
    }
}
//play the game again
function playAgain() {
    p1 = 1;
    const buttons = document.getElementById("grid-container").children;
    for (const button of buttons) {
        button.innerHTML = "";
    }
    document.getElementById("playagain").hidden = true;
}
//is it a win?
function isWin(letter) {
    const buttons = document.getElementById("grid-container").children;

    return false;

}
//is it a draw?
function isDraw()
{
    const buttons = document.getElementById("grid-container").children;
    return Array.from(buttons).every((button) => button.innerHTML != "");
}