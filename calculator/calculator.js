class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = null;
    }

    delete() {
        this.currentOperand = this.currentOperand.substring(0, this.currentOperand.length - 1);
    }

    appendNumber(number) {
        //more than 1 '.'
        if (number === '.' && this.currentOperand.includes('.')) {
            return;
        }
        this.currentOperand += number;
    }

    chooseOperation(operation) {
        //if we have for example 2+3+3 => (2+3)+3 = 5+3 = 8
        if (this.currentOperand !== '' && this.previousOperand !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand += (this.currentOperand + this.operation);
        this.currentOperand = '';
    }

    compute() {
        if (this.previousOperand[this.previousOperand.length - 1] === '+') {
            const calcResult = +this.currentOperand + +this.previousOperand.substring(0, this.previousOperand.length - 1);
            this.currentOperand = calcResult.toString();
        }
        if (this.previousOperand[this.previousOperand.length - 1] === '-') {
            const calcResult = this.currentOperand - this.previousOperand.substring(0, this.previousOperand.length - 1);
            this.currentOperand = -calcResult.toString();
        }
        if (this.previousOperand[this.previousOperand.length - 1] === '*') {
            const calcResult = this.currentOperand * this.previousOperand.substring(0, this.previousOperand.length - 1);
            this.currentOperand = calcResult.toString();
        }
        if (this.previousOperand[this.previousOperand.length - 1] === '÷') {
            const calcResult = this.currentOperand / this.previousOperand.substring(0, this.previousOperand.length - 1);
            this.currentOperand = 1 / calcResult.toString();
        }
        this.previousOperand = '';
    }

    updateDisplay() {
        this.currentOperandTextElement.innerHTML = this.currentOperand;
        this.previousOperandTextElement.innerHTML = this.previousOperand;
    }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const allClearButton = document.querySelector("[data-all-clear]");
const deleteButton = document.querySelector("[data-delete]");
const previousOperandTextElement = document.querySelector("[data-previous-operand]");
const currentOperandTextElement = document.querySelector("[data-current-operand]");

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

//add event listeners for the buttons
numberButtons.forEach(button => button.addEventListener("click", () => {
    calculator.appendNumber(button.innerHTML);
    calculator.updateDisplay();
}));

allClearButton.addEventListener("click", button => {
    calculator.clear();
    calculator.updateDisplay();
});

deleteButton.addEventListener("click", button => {
    calculator.delete();
    calculator.updateDisplay();
});

operationButtons.forEach(button => button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerHTML);
    calculator.updateDisplay();
}));

equalsButton.addEventListener("click", button => {
    calculator.compute();
    calculator.updateDisplay();
});
