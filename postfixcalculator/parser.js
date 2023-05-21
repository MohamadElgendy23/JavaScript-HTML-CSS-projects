import { Lexer } from './lexer.js';
import { Stack } from './stack.js';

export class Parser {
    //infix to postfix logic => converts the regular (infix) expression from the Lexer to the appropriate postfix expression
    static infixToPostfix() {
        const stack = new Stack();
        this.postfixExpression = [];
        this.infixExpression = this.previousOperand;
        //still more to the input
        if (this.currentOperand !== '') {
            this.infixExpression += this.currentOperand;
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
}