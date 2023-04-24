
//We can create new types
//check static, before runtime
type Operation = 'multiply' | 'add' | 'divide';
type Result = number | string;
const calculator = (a: number, b: number, op: Operation /*or we can add here 'multiply' | 'add' | 'divide' */ ): Result => {
    if (op === 'multiply') return a * b;
    if (op === 'add')  return a + b;
    if (op === 'divide') {
        if (b === 0) throw new Error('cant divide by 0, sorry');
        return a / b;
    } 

    //check in runtime
    throw new Error('Operation is not valid');
}

// For test it
 try {
    console.log(calculator(2, 3, 'add'));
    console.log(calculator(2, 3, 'multiply'));
    console.log(calculator(2, 0, 'divide'));
} catch (error) {
    console.log('Somethinq was wrong: ', error);
}

/* Sintaxis:
    const nameFunc = (paramName: typeOfParam ): type of the function result 
 */