const multiplicator = (a: number, b: number, printText: string) => {
    console.log(printText, " result: ", a * b)
}
console.log(process.argv)
/* OUTPUT
[
    position 0: node ,
    poosition 1: archivo actual ,
    position 2: a,
    poosition 3: b,
    ...
] 

//Creating Commands
const a:number = Number(process.argv[2])
const b:number = Number(process.argv[3])
*/

const parseargumens = (args): Array<number> => {
    if (args.lengh === 4) throw new Error ('Wrong number of arguments');

    const firstNumber = Number(args[2]);
    const secondNumber = Number(args[3]);

    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
        return [
            firstNumber,
            secondNumber
        ]
    } else {
        throw new Error('Provided values were not numbers')
    }
}

const cleanArguments = parseargumens(process.argv);

//Creating Commands
const a:number = Number(cleanArguments[0])
const b:number = Number(cleanArguments[1])

multiplicator(a, b, `Multiplied ${a} and ${b} and he result is: `)