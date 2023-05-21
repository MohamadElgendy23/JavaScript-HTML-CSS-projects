//this class is the lexer for the postfix calculator.  
//return value: Array
//ex: input => 11+2*2.15, output => [11, +, 2, *, 2.15]

export class Lexer {
    static analyze(expression) {
        let buildExpression = ''; //stores the numbers in the expression. reset when operator is seen.
        const analyzedArray = []; //the analyzed (tokenized) array
        Array.from(expression).forEach(exp => {
            //number and '.'
            if (!isNaN(exp) || exp === '.') {
                buildExpression += exp;
            }
            else {
                analyzedArray.push(buildExpression, exp);
                buildExpression = ''; //reset
            }
        })

        if (buildExpression.length !== 0) {
            Array.from(buildExpression).forEach(remainingExp => analyzedArray.push(remainingExp)); //push whats remaining
        }
        return analyzedArray;

    }
}