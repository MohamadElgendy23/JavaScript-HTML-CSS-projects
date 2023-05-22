import { Stack } from './stack.js';
//postfix calculator class, contains the methods for said calculator
export class PostfixCalculator {
    static instantiate(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    static clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = null;
    }
    //postfix computation algorithm for PEMDAS
    static postfixCompute(postfixTree) {
        const stack = new Stack();
        const postfixExpression = postfixTree;
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
        return stack.peek();
    }
}
