//stack implementation for postfix
class Stack {
    constructor() {
        this.items = [];
    }

    //push to top
    push(item) {
        this.items.push(item);
    }

    //pop top element
    pop() {
        if (this.items.length > 0) {
            return this.items.pop();
        }
        return 'Empty';
    }

    //return top element
    peek() {
        if (this.items.length > 0) {
            return this.items[this.items.length - 1];
        }
        return 'Empty';
    }

    //is this.items empty?
    isEmpty() {
        return this.items.length === 0;
    }

    //print stack items for the infixToPostfix method's last stack operations checking 
    printStack() {
        return this.items.toString();
    }
}
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
        this.postfixExpression = '';
        this.infixExpression = this.previousOperand;
        if (this.currentOperand !== '') {
            this.infixExpression += this.currentOperand;
        }
        Array.from(this.infixExpression).forEach(e => {
            if (isNaN(e)) {
                if (stack.isEmpty()) {
                    stack.push(e);
                }
                else {
                    //priority checking
                    if (e === '*' || e === '÷') {
                        if (stack.peek() === '+' || stack.peek() === '-') {
                            stack.push(e);
                        }
                    }
                    else {
                        if (e === '+' || e === '-') {
                            if (stack.peek() === '*' || stack.peek() === '÷') {
                                this.postfixExpression += stack.pop();
                                stack.push(e);
                            }
                            if (stack.isEmpty()) {
                                stack.push(e);
                            }

                        }
                    }
                }
            }
            else {
                this.postfixExpression += e;
            }
        })
        //"pop" remaining operators
        if (!stack.isEmpty()) {
            Array.from(stack.printStack()).forEach(e => {
                //no commas
                if (e !== ',') {
                    this.postfixExpression += e;
                }
            });
        }
        return this.postfixExpression;
    }

    //what operator has highest precedence
    infixToPostfixPrecedence(op) {
        if (op === '')
    }

    //postfix algorithm
    postfixCompute() {
        const stack = new Stack();
        let postfixExpression = this.infixToPostfix();
        Array.from(postfixExpression).forEach(e => {
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
                    stack.push(n1 / n2);
                }
            }
            else {
                stack.push(e);
            }
        });
        this.currentOperand = stack.peek();
        this.previousOperand = '';
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
    calculator.postfixCompute();
    calculator.updateDisplay();
});