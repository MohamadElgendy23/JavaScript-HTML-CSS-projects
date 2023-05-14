//player starts with 'X'
let p = 'X';
document.getElementById("playagain").hidden = true;

function displayInput(square) {
    if (p == 'X') {
        document.getElementById(square).innerHTML = 'X';
        if (isXWin(square)) {
            window.alert("X won!");
            document.getElementById("playagain").innerHTML = "Play Again!";
            document.getElementById("playagain").hidden = false;
        }
        else
        {
            p = 'O';
        }
    }
    else {
        document.getElementById(square).innerHTML = 'O';
        if (isOWin(square)) {
            window.alert("O won!");
            document.getElementById("playagain").innerHTML = "Play Again!";
            document.getElementById("playagain").hidden = false;
        }
        else
        {
            p = 'X';
        }
    }
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
    else if (square == "button2") {
        if (document.getElementById("button1").innerHTML == 'X' && document.getElementById("button3").innerHTML == 'X') {
            return true;
        }
        if (document.getElementById("button5").innerHTML == 'X' && document.getElementById("button8").innerHTML == 'X') {
            return true;
        }
        return false;
    }
    else if (square == "button3") {
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
    else if (square == "button4") {
        if (document.getElementById("button1").innerHTML == 'X' && document.getElementById("button7").innerHTML == 'X') {
            return true;
        }
        if (document.getElementById("button5").innerHTML == 'X' && document.getElementById("button6").innerHTML == 'X') {
            return true;
        }
        return false;
    }
    else if (square == "button5") {
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
    else if (square == "button6") {
        if (document.getElementById("button3").innerHTML == 'X' && document.getElementById("button9").innerHTML == 'X') {
            return true;
        }
        if (document.getElementById("button4").innerHTML == 'X' && document.getElementById("button5").innerHTML == 'X') {
            return true;
        }
        return false;
    }
    else if (square == "button7") {
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
    else if (square == "button8") {
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
function getSelection1() {
    displayInput("button1");
}
function getSelection2() {
    displayInput("button2");
}
function getSelection3() {
    displayInput("button3");
}
function getSelection4() {
    displayInput("button4");
}
function getSelection5() {
    displayInput("button5");
}
function getSelection6() {
    displayInput("button6");
}
function getSelection7() {
    displayInput("button7");
}
function getSelection8() {
    displayInput("button8");
}
function getSelection9() {
    displayInput("button9");
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