import { Stack } from './stack.js';

//this class contains parser logic for the postfix calculator. it is mainly used for infix => postfix
export class Parser {
    //infix to postfix logic => converts the regular (infix) expression (tokens variable) from the Lexer to the appropriate postfix expression
    static infixToPostfix(tokens) {
        const stack = new Stack();
        const postfixExpression = [];
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
                    //stack: [*], token: +, *>+ => pop higher precedence * and push into expression, then push lower precedence + into stack
                    else {
                        postfixExpression.push(stack.pop());
                        stack.push(token);
                    }
                }
            }
            //token is a number
            else {
                postfixExpression.push(token);
            }
        }
        //"pop" remaining operators
        if (!stack.isEmpty()) {
            stack.getItems().forEach(() => {
                postfixExpression.push(stack.pop());
            });
        }
        return postfixExpression;
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