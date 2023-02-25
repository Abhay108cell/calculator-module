// index.js

const readline = require("readline");
const calculator = require("./calculator.js");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the first number: ", (num1) => {
  rl.question("Enter the second number: ", (num2) => {
    console.log(`\n${num1} + ${num2} = ${calculator.add(num1, num2)}`);
    console.log(`\n${num1} - ${num2} = ${calculator.subtract(num1, num2)}`);
    console.log(`\n${num1} * ${num2} = ${calculator.multiply(num1, num2)}`);
    console.log(`\n${num1} / ${num2} = ${calculator.divide(num1, num2)}`);
    console.log(`\n${num1} ^ ${num2} = ${calculator.power(num1, num2)}`);
    console.log(`\nSquare root of ${num1} = ${calculator.squareRoot(num1)}`);
    console.log(`\nFactorial of ${num1} = ${calculator.factorial(num1)}`);
    rl.close();
  });
});
