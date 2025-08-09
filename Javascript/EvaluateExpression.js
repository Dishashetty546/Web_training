//input will be expression - string, values - array of strings, numbers - array of integer
//expression - sqrt(a-b)+c
//values - ['a','b','c]
//numbers - [9. 4. 3]

function EvaluateExpression(expression, values, numbers){
    //replace all the variables by numbers
    // sqrt(a+b)-c, values - ['9','4','3']
    //will get - sqrt(9-4)+3
    let i=0;
    while (i < values.length) {
        let regex = new RegExp("\\b" + values[i] + "\\b", "g");
        expression = expression.replace(regex, numbers[i]);
        i++;
    }
    // return expression
    //check if there is square in the express, sqrt( )
    //replace the sqrt with Math.sqrt
    let SM;
    SM= expression.replace('/sqrt/g','Math.sqrt');
let parts = SM.split(/([+\-*/])/).map(p => p.trim()).filter(p => p);

    // Initialize result
    let result = eval(parts[0]); // first number or Math.sqrt

    // Use switch to process remaining parts
    let j = 1;
    while (j < parts.length) {
        let op = parts[j];
        let next = eval(parts[j + 1]);
        switch (op) {
            case '+':
                result += next;
                break;
            case '-':
                result -= nextVal;
                break;
            case '*':
                result *= nextVal;
                break;
            case '/':
                result /= nextVal;
                break;
        }
        j += 2;
    }

    return Math.round(result * 100) / 100;
    
    }
    console.log(EvaluateExpression("sqrt(a-b)+c", ["a", "b", "c"], [9, 4, 3]));

