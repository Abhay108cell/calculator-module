// calculator.js

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function power(a, b) {
  return Math.pow(a, b);
}

function squareRoot(a) {
  return Math.sqrt(a);
}

function factorial(a) {
  if (a < 0) {
    return "Error: Cannot calculate factorial of a negative number";
  } else if (a == 0) {
    return 1;
  } else {
    return a * factorial(a - 1);
  }
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
  squareRoot,
  factorial,
};
