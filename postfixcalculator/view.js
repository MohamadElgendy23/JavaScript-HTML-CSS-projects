import { PostfixCalculator } from "./postfixcalculator.js";

//contains view code
const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const allClearButton = document.querySelector("[data-all-clear]");
const deleteButton = document.querySelector("[data-delete]");
const previousOperandTextElement = document.querySelector("[data-previous-operand]");
const currentOperandTextElement = document.querySelector("[data-current-operand]");

PostfixCalculator.instantiate(previousOperandTextElement, currentOperandTextElement); //basically "create" the calculator

//uses all 3 classes to compute the result of the postfix expression
function compute() {
    const tokens = Lexer.analyze(input);
    const postfixTree = PostfixCalculator.infixToPostfix(tokens);
    PostfixCalculator.postfixCompute(postfixTree);
}

//add event listeners for the buttons
numberButtons.forEach(button => button.addEventListener("click", () => {
    PostfixCalculator.appendNumber(button.innerHTML);
    PostfixCalculator.updateDisplay();
}));

allClearButton.addEventListener("click", () => {
    PostfixCalculator.clear();
    PostfixCalculator.updateDisplay();
});

deleteButton.addEventListener("click", () => {
    PostfixCalculator.delete();
    PostfixCalculator.updateDisplay();
});

operationButtons.forEach(button => button.addEventListener("click", () => {
    PostfixCalculator.chooseOperation(button.innerHTML);
    PostfixCalculator.updateDisplay();
}));

equalsButton.addEventListener("click", () => {
    compute();
    PostfixCalculator.updateDisplay();
});
