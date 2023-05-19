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
        //logic for decimal numbers
        if (number === '.') {
            //add first
            this.currentOperand += number;
            //take out commas
            Array.from(this.currentOperand).forEach(e => {
                if (e === ',') {
                    const indexE = Array.from(this.currentOperand).indexOf(e);
                    Array.from(this.currentOperand).splice(indexE, 1);
                }
            })
            const findIndex = this.currentOperand.indexOf(number);
            //if we have 5.0 => 5 or 13.0 => 13
            if (Array.from(this.currentOperand)[++findIndex] === '0') {
                alert('yes')
                this.currentOperand += Array.from(this.currentOperand).slice(0, findIndex - 1);
                alert(this.currentOperand)
            }
            //if we have 5.13 for example => Math.round(5.13) => 5
            else {
                const afterDecimal = Array.from(this.currentOperand).slice(findIndex + 1, this.currentOperand.length - 1);
                Number.parseInt(afterDecimal) > 49 ? this.currentOperand += (+Array.from(this.currentOperand).slice(0, findIndex - 1) + +1).toString() : this.currentOperand += Array.from(this.currentOperand).slice(0, findIndex - 1);
            }
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
                    //priority checking => * = 2, + = 1 => 2>1
                    if (this.infixToPostfixPrecedence(e) > this.infixToPostfixPrecedence(stack.peek())) {
                        stack.push(e);
                    }
                    else {
                        this.postfixExpression += e;
                    }
                }
            }
            //e is a number
            else {
                if (e.toString().includes('.')) {
                    e = Math.roumd(e);
                }

                this.postfixExpression += e;
            }
        })
        //"pop" remaining operators; e not really used instead of as an iterator
        if (!stack.isEmpty()) {
            Array.from(stack.printStack()).forEach(e => {
                //no commas
                if (e !== ',') {
                    this.postfixExpression += stack.pop();
                }
            });
        }
        return this.postfixExpression;
    }

    //what operator has highest precedence
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