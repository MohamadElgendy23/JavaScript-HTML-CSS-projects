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

const calculator = new PostfixCalculator(previousOperandTextElement, currentOperandTextElement); //basically "create" the calculator

//uses all 3 classes to compute the result of the postfix expression. "like a main method"
function compute(input) {
    const tokens = Lexer.analyze(input);
    const postfixTree = Parser.infixToPostfix(tokens);
    calculator.currentOperand = calculator.postfixCompute(postfixTree);
    calculator.previousOperand = '';
}
function deleteNumber() {
    calculator.currentOperand = calculator.currentOperand.substring(0, calculator.currentOperand.length - 1);
}

function appendNumber(number) {
    //more than 1 '.'
    if (number === '.' && calculator.currentOperand.includes('.')) {
        return;
    }
    //logic for decimal numbers
    if (number === '.') {
        //add first
        calculator.currentOperand += number;
        //take out commas
        calculator.currentOperand.replaceAll(',', '');
    }
    // not a '.'
    else {
        calculator.currentOperand += number;
    }
}

function chooseOperation(operation) {
    calculator.operation = operation;
    calculator.previousOperand += (calculator.currentOperand + calculator.operation);
    calculator.currentOperand = '';

}
//update display of output
function updateDisplay() {
    calculator.currentOperandTextElement.innerHTML = calculator.currentOperand;
    calculator.previousOperandTextElement.innerHTML = calculator.previousOperand;
}


//add event listeners for the buttons
numberButtons.forEach(button => button.addEventListener("click", () => {
    appendNumber(button.innerHTML);
    updateDisplay();
}));

allClearButton.addEventListener("click", () => {
    calculator.clear();
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

let infixExpression = ''; //user input
equalsButton.addEventListener("click", () => {
    //get input
    infixExpression = calculator.previousOperand;
    //still more to the input
    if (calculator.currentOperand !== '') {
        infixExpression += calculator.currentOperand;
    }
    compute(infixExpression);
    updateDisplay();
});