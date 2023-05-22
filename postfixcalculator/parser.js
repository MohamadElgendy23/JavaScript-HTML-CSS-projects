import { Lexer } from './lexer.js';
import { Stack } from './stack.js';
import { calculator } from './view.js';

//this class contains parser logic for the postfix calculator. it is mainly used for infix => postfix
export class Parser {
    //infix to postfix logic => converts the regular (infix) expression from the Lexer to the appropriate postfix expression
    static infixToPostfix() {
        const stack = new Stack();
        this.postfixExpression = []; //shouldn't have 'this' but its fine for now (format reasons)
        this.infixExpression = this.previousOperand;
        //still more to the input
        if (calculator.currentOperand !== '') {
            this.infixExpression += calculator.currentOperand;
        }
        const tokenizedArray = Lexer.analyze(this.infixExpression);
        for (const token of tokenizedArray) {
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
        }
        //"pop" remaining operators
        if (!stack.isEmpty()) {
            stack.getItems().forEach(() => {
                this.postfixExpression.push(stack.pop());
            });
        }
        return this.postfixExpression;
    }

    //what operator has highest precedence -- helper method
    static infixToPostfixPrecedence(op) {
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
    static postfixCompute() {
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
        calculator.currentOperand = stack.peek();
        calculator.previousOperand = '';
    }
}