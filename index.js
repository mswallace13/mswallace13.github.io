// define variables for the operands and the result
let x = prompt("num 1");
let y = prompt("num 2");
var result = 0;

// define a function to add the operands
function addition(x, y) {
  return x + y;
}

// define a function to subtract the operands
function subtract(x, y) {
  return x - y;
}

// define a function to multiply the operands
function multiply(x, y) {
  return x * y;
}

// define a function to divide the operands
function divide(x, y) {
  return x / y;
}

// perform the addition and store the result
result = addition(x, y);
prompt(x + " + " + y + " = " + result);

// perform the subtraction and store the result
result = subtract(x, y);
prompt(x + " - " + y + " = " + result);

// perform the multiplication and store the result
result = multiply(x, y);
prompt(x + " * " + y + " = " + result);

// perform the division and store the result
result = divide(x, y);
prompt(x + " / " + y + " = " + result);
