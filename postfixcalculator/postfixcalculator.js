import { Stack } from './stack.js';
import { Lexer } from './lexer.js';

//postfix calculator class, contains the methods for said calculator
export class PostfixCalculator {
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

    chooseOperation(operation) {
        //if we have for example 2+3+3 => (2+3)+3 = 5+3 = 8
        /*  if (this.currentOperand !== '' && this.previousOperand !== '') {
             this.compute();
         } */
        this.operation = operation;
        this.previousOperand += (this.currentOperand + this.operation);
        this.currentOperand = '';

    }

    //infix to postfix logic
    infixToPostfix() {
        const stack = new Stack();
        this.postfixExpression = []; 
        this.infixExpression = this.previousOperand;
        //still more to the input
        if (this.currentOperand !== '') {
            this.infixExpression += this.currentOperand;
        }
        const tokenizedArray = Lexer.analyze(this.infixExpression);
        console.log(tokenizedArray)
        tokenizedArray.forEach(token => {
            //token is not a number
            if (isNaN(token)) {
                if (stack.isEmpty()) {
                    stack.push(token);
                }
                else {
                    //priority checking => * = 2, + = 1 => 2>1
                    if (this.infixToPostfixPrecedence(token) > this.infixToPostfixPrecedence(stack.peek())) {
                        stack.push(token);
                    }
                    else {
                        this.postfixExpression.push(token);
                    }
                }
            }
            //token is a number
            else {
                this.postfixExpression.push(token);
            }
        })
        //"pop" remaining operators
        if (!stack.isEmpty()) {
            Array.from(stack.printStack()).forEach(() => {
                this.postfixExpression.push(stack.pop());
            });
        }
        return this.postfixExpression;
    }

    //what operator has highest precedence -- helper method
    infixToPostfixPrecedence(op) {
        switch (op) {
            case '+':
            case '-':
                return 1;
            case '÷':
            case '*':
                return 2;
            default:
                return 'Invalid Operator';
        }

    }

    //postfix computation algorithm for PEMDAS
    postfixCompute() {
        const stack = new Stack();
        const postfixExpression = this.infixToPostfix();
        postfixExpression.forEach(e => {
            if (isNaN(e)) {
                const n1 = stack.pop();
                const n2 = stack.pop();
                if (e === '+') {
                    stack.push(+n1 + +n2);
                }
                else if (e === '-') {
                    stack.push(n2 - n1);
                }
                else if (e === '*') {
                    stack.push(n1 * n2);
                }
                else {
                    stack.push(1 / (n1 / n2));
                }
            }
            else {
                stack.push(e);
            }
        });
        this.currentOperand = stack.peek();
        this.previousOperand = '';
    }
    //update display of output
    updateDisplay() {
        this.currentOperandTextElement.innerHTML = this.currentOperand;
        this.previousOperandTextElement.innerHTML = this.previousOperand;
    }
}