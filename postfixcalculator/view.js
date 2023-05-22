import { PostfixCalculator } from "./postfixcalculator.js";
import { Parser } from "./parser.js";
import { Lexer } from "./lexer.js";

//contains view code => what user inputs and sees
const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const allClearButton = document.querySelector("[data-all-clear]");
const deleteButton = document.querySelector("[data-delete]");
const previousOperandTextElement = document.querySelector("[data-previous-operand]");
const currentOperandTextElement = document.querySelector("[data-current-operand]");

PostfixCalculator.instantiate(previousOperandTextElement, currentOperandTextElement); //basically "create" the calculator

//uses all 3 classes to compute the result of the postfix expression. "like a main method"
function compute(input) {
    const tokens = Lexer.analyze(input);
    const postfixTree = Parser.infixToPostfix(tokens);
    PostfixCalculator.currentOperand = PostfixCalculator.postfixCompute(postfixTree);
    PostfixCalculator.previousOperand = '';
}
function deleteNumber() {
    PostfixCalculator.currentOperand = PostfixCalculator.currentOperand.substring(0, PostfixCalculator.currentOperand.length - 1);
}

function appendNumber(number) {
    //more than 1 '.'
    if (number === '.' && PostfixCalculator.currentOperand.includes('.')) {
        return;
    }
    //logic for decimal numbers
    if (number === '.') {
        //add first
        PostfixCalculator.currentOperand += number;
        //take out commas
        PostfixCalculator.currentOperand.replaceAll(',', '');
    }
    // not a '.'
    else {
        PostfixCalculator.currentOperand += number;
    }
}

function chooseOperation(operation) {
    PostfixCalculator.operation = operation;
    PostfixCalculator.previousOperand += (PostfixCalculator.currentOperand + PostfixCalculator.operation);
    PostfixCalculator.currentOperand = '';

}
//update display of output
function updateDisplay() {
    PostfixCalculator.currentOperandTextElement.innerHTML = PostfixCalculator.currentOperand;
    PostfixCalculator.previousOperandTextElement.innerHTML = PostfixCalculator.previousOperand;
}


//add event listeners for the buttons
numberButtons.forEach(button => button.addEventListener("click", () => {
    appendNumber(button.innerHTML);
    updateDisplay();
}));

allClearButton.addEventListener("click", () => {
    PostfixCalculator.clear();
    updateDisplay();
});

deleteButton.addEventListener("click", () => {
    deleteNumber();
    updateDisplay();
});

operationButtons.forEach(button => button.addEventListener("click", () => {
    chooseOperation(button.innerHTML);
    updateDisplay();
}));

equalsButton.addEventListener("click", () => {
    //get input
    Parser.infixExpression = PostfixCalculator.previousOperand;
    //still more to the input
    if (PostfixCalculator.currentOperand !== '') {
        Parser.infixExpression += PostfixCalculator.currentOperand;
    }
    compute(Parser.infixExpression);
    updateDisplay();
});