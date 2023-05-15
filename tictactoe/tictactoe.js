//player starts with 'X'
let p = 'X';
document.getElementById("playagain").hidden = true;

//square = event.target
function displayInput(square) {
    if (p == 'X') {
        square.innerHTML = 'X';
        if (isWin(square, 'X')) {
            window.alert("X won!");
            document.getElementById("playagain").innerHTML = "Play Again!";
            document.getElementById("playagain").hidden = false;
        }
        else {
            p = 'O';
        }

        if (isDraw() && !isWin(square, 'X')) {
            window.alert("Draw!");
            document.getElementById("playagain").innerHTML = "Play Again!";
            document.getElementById("playagain").hidden = false;
        }
    }
    else {
        square.innerHTML = 'O';
        if (isWin(square, 'O')) {
            window.alert("O won!");
            document.getElementById("playagain").innerHTML = "Play Again!";
            document.getElementById("playagain").hidden = false;
        }
        else {
            p = 'X';
        }

        if (isDraw() && !isWin(square, 'O')) {
            window.alert("Draw!");
            document.getElementById("playagain").innerHTML = "Play Again!";
            document.getElementById("playagain").hidden = false;
        }
    }
}
function isDraw() {
    if (document.getElementById("button1").innerHTML.length != 0 && document.getElementById("button2").innerHTML.length != 0 && document.getElementById("button3").innerHTML.length != 0 && document.getElementById("button4").innerHTML.length != 0 && document.getElementById("button5").innerHTML.length != 0 && document.getElementById("button6").innerHTML.length != 0 && document.getElementById("button7").innerHTML.length != 0 && document.getElementById("button8").innerHTML.length != 0 && document.getElementById("button9").innerHTML.length != 0) {
        return true;
    }
    return false;
}
function isWin(square, letter)
{
    const parentSquare = square.parentElement;
    const indexSquare = Array.from(parentSquare.children).indexOf(square);

    if (indexSquare == 0) {
        if (document.getElementById("button2").innerHTML == letter && document.getElementById("button3").innerHTML == letter) {
            return true;
        }
        if (document.getElementById("button5").innerHTML == letter && document.getElementById("button9").innerHTML == letter) {
            return true;
        }
        if (document.getElementById("button4").innerHTML == letter && document.getElementById("button7").innerHTML == letter) {
            return true;
        }
        return false;
    }
    else if (indexSquare == 1) {
        if (document.getElementById("button1").innerHTML == letter && document.getElementById("button3").innerHTML == letter) {
            return true;
        }
        if (document.getElementById("button5").innerHTML == letter && document.getElementById("button8").innerHTML == letter) {
            return true;
        }
        return false;
    }
    else if (indexSquare == 2) {
        if (document.getElementById("button1").innerHTML == letter && document.getElementById("button2").innerHTML == letter) {
            return true;
        }
        if (document.getElementById("button6").innerHTML == letter && document.getElementById("button9").innerHTML == letter) {
            return true;
        }
        if (document.getElementById("button5").innerHTML == letter && document.getElementById("button7").innerHTML == letter) {
            return true;
        }
        return false;
    }
    else if (indexSquare == 3) {
        if (document.getElementById("button1").innerHTML == letter && document.getElementById("button7").innerHTML == letter) {
            return true;
        }
        if (document.getElementById("button5").innerHTML == letter && document.getElementById("button6").innerHTML == letter) {
            return true;
        }
        return false;
    }
    else if (indexSquare == 4) {
        if (document.getElementById("button1").innerHTML == letter && document.getElementById("button9").innerHTML == letter) {
            return true;
        }
        if (document.getElementById("button3").innerHTML == letter && document.getElementById("button7").innerHTML == letter) {
            return true;
        }
        if (document.getElementById("button4").innerHTML == letter && document.getElementById("button6").innerHTML == letter) {
            return true;
        }
        if (document.getElementById("button2").innerHTML == letter && document.getElementById("button8").innerHTML == letter) {
            return true;
        }
        return false;
    }
    else if (indexSquare == 5) {
        if (document.getElementById("button3").innerHTML == letter && document.getElementById("button9").innerHTML == letter) {
            return true;
        }
        if (document.getElementById("button4").innerHTML == letter && document.getElementById("button5").innerHTML == letter) {
            return true;
        }
        return false;
    }
    else if (indexSquare == 6) {
        if (document.getElementById("button1").innerHTML == letter && document.getElementById("button4").innerHTML == letter) {
            return true;
        }
        if (document.getElementById("button8").innerHTML == letter && document.getElementById("button9").innerHTML == letter) {
            return true;
        }
        if (document.getElementById("button3").innerHTML == letter && document.getElementById("button5").innerHTML == letter) {
            return true;
        }
        return false;
    }
    else if (indexSquare == 7) {
        if (document.getElementById("button7").innerHTML == letter && document.getElementById("button9").innerHTML == letter) {
            return true;
        }
        if (document.getElementById("button2").innerHTML == letter && document.getElementById("button5").innerHTML == letter) {
            return true;
        }
        return false;
    }
    else {
        if (document.getElementById("button1").innerHTML == letter && document.getElementById("button5").innerHTML == letter) {
            return true;
        }
        if (document.getElementById("button3").innerHTML == letter && document.getElementById("button6").innerHTML == letter) {
            return true;
        }
        if (document.getElementById("button7").innerHTML == letter && document.getElementById("button8").innerHTML == letter) {
            return true;
        }
        return false;
    }
}

//each button/square selection
function getInput(event) {
    displayInput(event.target);
}
function playAgain() {
    //couldnt figure out how to change children just with the parent
    document.getElementById("button1").innerHTML = "";
    document.getElementById("button2").innerHTML = "";
    document.getElementById("button3").innerHTML = "";
    document.getElementById("button4").innerHTML = "";
    document.getElementById("button5").innerHTML = "";
    document.getElementById("button6").innerHTML = "";
    document.getElementById("button7").innerHTML = "";
    document.getElementById("button8").innerHTML = "";
    document.getElementById("button9").innerHTML = "";
    document.getElementById("playagain").hidden = true;
}