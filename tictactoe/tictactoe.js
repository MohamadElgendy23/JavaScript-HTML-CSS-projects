//player starts with 'X'
let p = 'X';
document.getElementById("playagain").hidden = true;

function displayInput(square) {
    if (p == 'X') {
        square.innerHTML = 'X';
        if (isXWin(square)) {
            window.alert("X won!");
            document.getElementById("playagain").innerHTML = "Play Again!";
            document.getElementById("playagain").hidden = false;
        }
        else
        {
            p = 'O';
        }

        if (isDraw())
        {
            window.alert("Draw!");
            document.getElementById("playagain").innerHTML = "Play Again!";
            document.getElementById("playagain").hidden = false;
        }
    }
    else {
        square.innerHTML = 'O';
        if (isOWin(square)) {
            window.alert("O won!");
            document.getElementById("playagain").innerHTML = "Play Again!";
            document.getElementById("playagain").hidden = false;
        }
        else
        {
            p = 'X';
        }

        if (isDraw())
        {
            window.alert("Draw!");
            document.getElementById("playagain").innerHTML = "Play Again!";
            document.getElementById("playagain").hidden = false;
        }
    }
}
function isDraw()
{
    if (document.getElementById("button1").innerHTML.length != 0 && document.getElementById("button2").innerHTML.length != 0 && document.getElementById("button3").innerHTML.length != 0 && document.getElementById("button4").innerHTML.length != 0 && document.getElementById("button5").innerHTML.length != 0 && document.getElementById("button6").innerHTML.length != 0 && document.getElementById("button7").innerHTML.length != 0 && document.getElementById("button8").innerHTML.length != 0 && document.getElementById("button9").innerHTML.length != 0)
    {
        return true;
    }
    return false;
}
//for each square, check win logic for X
function isXWin(square) {
    if (square == "button1") {
        if (document.getElementById("button2").innerHTML == 'X' && document.getElementById("button3").innerHTML == 'X') {
            return true;
        }
        if (document.getElementById("button5").innerHTML == 'X' && document.getElementById("button9").innerHTML == 'X') {
            return true;
        }
        if (document.getElementById("button4").innerHTML == 'X' && document.getElementById("button7").innerHTML == 'X') {
            return true;
        }
        return false;
    }
    else if (square.id == "button2") {
        if (document.getElementById("button1").innerHTML == 'X' && document.getElementById("button3").innerHTML == 'X') {
            return true;
        }
        if (document.getElementById("button5").innerHTML == 'X' && document.getElementById("button8").innerHTML == 'X') {
            return true;
        }
        return false;
    }
    else if (square.id == "button3") {
        if (document.getElementById("button1").innerHTML == 'X' && document.getElementById("button2").innerHTML == 'X') {
            return true;
        }
        if (document.getElementById("button6").innerHTML == 'X' && document.getElementById("button9").innerHTML == 'X') {
            return true;
        }
        if (document.getElementById("button5").innerHTML == 'X' && document.getElementById("button7").innerHTML == 'X') {
            return true;
        }
        return false;
    }
    else if (square.id == "button4") {
        if (document.getElementById("button1").innerHTML == 'X' && document.getElementById("button7").innerHTML == 'X') {
            return true;
        }
        if (document.getElementById("button5").innerHTML == 'X' && document.getElementById("button6").innerHTML == 'X') {
            return true;
        }
        return false;
    }
    else if (square.id == "button5") {
        if (document.getElementById("button1").innerHTML == 'X' && document.getElementById("button9").innerHTML == 'X') {
            return true;
        }
        if (document.getElementById("button3").innerHTML == 'X' && document.getElementById("button7").innerHTML == 'X') {
            return true;
        }
        if (document.getElementById("button4").innerHTML == 'X' && document.getElementById("button6").innerHTML == 'X') {
            return true;
        }
        if (document.getElementById("button2").innerHTML == 'X' && document.getElementById("button8").innerHTML == 'X') {
            return true;
        }
        return false;
    }
    else if (square.id == "button6") {
        if (document.getElementById("button3").innerHTML == 'X' && document.getElementById("button9").innerHTML == 'X') {
            return true;
        }
        if (document.getElementById("button4").innerHTML == 'X' && document.getElementById("button5").innerHTML == 'X') {
            return true;
        }
        return false;
    }
    else if (square.id == "button7") {
        if (document.getElementById("button1").innerHTML == 'X' && document.getElementById("button4").innerHTML == 'X') {
            return true;
        }
        if (document.getElementById("button8").innerHTML == 'X' && document.getElementById("button9").innerHTML == 'X') {
            return true;
        }
        if (document.getElementById("button3").innerHTML == 'X' && document.getElementById("button5").innerHTML == 'X') {
            return true;
        }
        return false;
    }
    else if (square.id == "button8") {
        if (document.getElementById("button7").innerHTML == 'X' && document.getElementById("button9").innerHTML == 'X') {
            return true;
        }
        if (document.getElementById("button2").innerHTML == 'X' && document.getElementById("button5").innerHTML == 'X') {
            return true;
        }
        return false;
    }
    else {
        if (document.getElementById("button1").innerHTML == 'X' && document.getElementById("button5").innerHTML == 'X') {
            return true;
        }
        if (document.getElementById("button3").innerHTML == 'X' && document.getElementById("button6").innerHTML == 'X') {
            return true;
        }
        if (document.getElementById("button7").innerHTML == 'X' && document.getElementById("button8").innerHTML == 'X') {
            return true;
        }
        return false;
    }
}
//for each square, check win logic for O
function isOWin(square) {
    if (square == "button1") {
        if (document.getElementById("button2").innerHTML == 'O' && document.getElementById("button3").innerHTML == 'O') {
            return true;
        }
        if (document.getElementById("button5").innerHTML == 'O' && document.getElementById("button9").innerHTML == 'O') {
            return true;
        }
        if (document.getElementById("button4").innerHTML == 'O' && document.getElementById("button7").innerHTML == 'O') {
            return true;
        }
        return false;
    }
    else if (square == "button2") {
        if (document.getElementById("button1").innerHTML == 'O' && document.getElementById("button3").innerHTML == 'O') {
            return true;
        }
        if (document.getElementById("button5").innerHTML == 'O' && document.getElementById("button8").innerHTML == 'O') {
            return true;
        }
        return false;
    }
    else if (square == "button3") {
        if (document.getElementById("button1").innerHTML == 'O' && document.getElementById("button2").innerHTML == 'O') {
            return true;
        }
        if (document.getElementById("button6").innerHTML == 'O' && document.getElementById("button9").innerHTML == 'O') {
            return true;
        }
        if (document.getElementById("button5").innerHTML == 'O' && document.getElementById("button7").innerHTML == 'O') {
            return true;
        }
        return false;
    }
    else if (square == "button4") {
        if (document.getElementById("button1").innerHTML == 'O' && document.getElementById("button7").innerHTML == 'O') {
            return true;
        }
        if (document.getElementById("button5").innerHTML == 'O' && document.getElementById("button6").innerHTML == 'O') {
            return true;
        }
        return false;
    }
    else if (square == "button5") {
        if (document.getElementById("button1").innerHTML == 'O' && document.getElementById("button9").innerHTML == 'O') {
            return true;
        }
        if (document.getElementById("button3").innerHTML == 'O' && document.getElementById("button7").innerHTML == 'O') {
            return true;
        }
        if (document.getElementById("button4").innerHTML == 'O' && document.getElementById("button6").innerHTML == 'O') {
            return true;
        }
        if (document.getElementById("button2").innerHTML == 'O' && document.getElementById("button8").innerHTML == 'O') {
            return true;
        }
        return false;
    }
    else if (square == "button6") {
        if (document.getElementById("button3").innerHTML == 'O' && document.getElementById("button9").innerHTML == 'O') {
            return true;
        }
        if (document.getElementById("button4").innerHTML == 'O' && document.getElementById("button5").innerHTML == 'O') {
            return true;
        }
        return false;
    }
    else if (square == "button7") {
        if (document.getElementById("button1").innerHTML == 'O' && document.getElementById("button4").innerHTML == 'O') {
            return true;
        }
        if (document.getElementById("button8").innerHTML == 'O' && document.getElementById("button9").innerHTML == 'O') {
            return true;
        }
        if (document.getElementById("button3").innerHTML == 'O' && document.getElementById("button5").innerHTML == 'O') {
            return true;
        }
        return false;
    }
    else if (square == "button8") {
        if (document.getElementById("button7").innerHTML == 'O' && document.getElementById("button9").innerHTML == 'O') {
            return true;
        }
        if (document.getElementById("button2").innerHTML == 'O' && document.getElementById("button5").innerHTML == 'O') {
            return true;
        }
        return false;
    }
    else {
        if (document.getElementById("button1").innerHTML == 'O' && document.getElementById("button5").innerHTML == 'O') {
            return true;
        }
        if (document.getElementById("button3").innerHTML == 'O' && document.getElementById("button6").innerHTML == 'O') {
            return true;
        }
        if (document.getElementById("button7").innerHTML == 'O' && document.getElementById("button8").innerHTML == 'O') {
            return true;
        }
        return false;
    }
}
//each button/square selection
function getSelection(event) {

    displayInput(event.target);
}
function playAgain()
{
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