//start
let p1 = 1;
let win = false;

function displayInput(square) {
    if (p1 == 1)
    {
        document.getElementById(square).innerHTML = 'X';
        p1=0;
    }
    else
    {
        document.getElementById(square).innerHTML = 'O';
        p1=1;
    }
}
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