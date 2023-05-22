import { Stack } from './stack.js';

//this class contains parser logic for the postfix calculator. it is mainly used for infix => postfix
export class Parser {
    //infix to postfix logic => converts the regular (infix) expression (tokens variable) from the Lexer to the appropriate postfix expression
    static infixToPostfix(tokens) {
        const stack = new Stack();
        this.postfixExpression = [];
        const tokenizedArray = [...tokens];
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
}