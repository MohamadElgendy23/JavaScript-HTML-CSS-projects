import { Parser } from './parser.js';

//postfix calculator class, contains the methods for said calculator
export class PostfixCalculator {
    static instantiate(previousOperandTextElement, currentOperandTextElement) {
        const previousOperandTextElement = previousOperandTextElement;
        const currentOperandTextElement = currentOperandTextElement;
        clear();
    }

    static clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = null;
    }

    static delete() {
        this.currentOperand = this.currentOperand.substring(0, this.currentOperand.length - 1);
    }

    static appendNumber(number) {
        //more than 1 '.'
        if (number === '.' && this.currentOperand.includes('.')) {
            return;
        }
        //logic for decimal numbers
        if (number === '.') {
            //add first
            this.currentOperand += number;
            //take out commas
            this.currentOperand.replaceAll(',', '');
        }
        // not a '.'
        else {
            this.currentOperand += number;
        }
    }

    static chooseOperation(operation) {
        this.operation = operation;
        this.previousOperand += (this.currentOperand + this.operation);
        this.currentOperand = '';

    }
    //update display of output
    static updateDisplay() {
        this.currentOperandTextElement.innerHTML = this.currentOperand;
        this.previousOperandTextElement.innerHTML = this.previousOperand;
    }
}