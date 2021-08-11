// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration
function addOne(number) {
  return number + 1
}

// - Write a Function Expression
const addOne = function(number) {
  return number + 1
}

// - Write an Arrow Function without curly brackets(if possible)
const addOne = num => num + 1

// - Write an Arrow Function with curly brackets
const addOne = num => { 
  return num + 1
}
// - Execute the function
addOne(5)

// - Execute the function and store the return value in a variable.
let returnValue = addOne(5)
// - What is the typeof returnValue

/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration
function subtractOne(number) {
  return number -1
}

// - Write a Function Expression
let subtractOne = function(number) {
  return number - 1
}

// - Write an Arrow Function without curly brackets(if possible)
const subtractOne = num => num - 1

// - Write an Arrow Function with curly brackets
const subtractOne = number => {
  return number - 1
}
// - Execute the function
subtractOne(10)
// - Execute the function and store the return value in a variable.
let newValue = subtractOne(10)
// - What is the typeof returnValue  : "number"

/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration
function sum(num1, num2) {
  return num1 + num2
}
// - Write a Function Expression
let sum = function(num1, num2) {
  return num1 + num2
}
// - Write an Arrow Function without curly brackets(if possible)
const sum  = (num1, num2) => num1 + num2
// - Write an Arrow Function with curly brackets
const sum = (num1, num2) => {
  return num1 + num2
}
// - Execute the function
sum(5, 2)
// - Execute the function and store the return value in a variable

let total = sum(5, 2)
// - What is the typeof returnValue : "number"

/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration
function square(number) {
  return number * number
}
// - Write a Function Expression
let square = function(number) {
  return number * number
}

// - Write an Arrow Function without curly brackets(if possible)
const square = number => number * number
// - Write an Arrow Function with curly brackets
const square = number => {
  return number * number 
}
// - Execute the function
square(4)
// - Execute the function and store the return value in a variable
let valueSquare = square(4)
// - What is the typeof returnValue : "number"

/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration
function isGreater(x, y) {
 return  x > y ? true : false
}
// - Write a Function Expression
let isGreater = function(x,y) {
  return x > y ? true : false
}
// - Write an Arrow Function without curly brackets(if possible)
const isGreater = (x, y) => x > y ? true : false
// - Write an Arrow Function with curly brackets
const isGreater = (x, y) => {
  return x > y ? true : false
}
// - Execute the function
isGreater(5, 7)
// - Execute the function and store the return value in a variable
let isGreaterValue = isGreater(8, 10)
// - What is the typeof returnValue : "boolean"

/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration
function oddOrEven(number) {
  if(number % 2 !== 0) {
    return "Number is odd"
  } else if(number % 2 === 0) {
    return "Number is even"
  }
}
// - Write an anonymous Function Expression
let oddOrEven = function (number) {
  if(number % 2 !== 0) {
    return "Number is odd"
  } else if(number % 2 === 0) {
    return "Number is even"
  }
}

// - Write an named Function Expression
let oddOrEvenValue = function oddOrEven(number) {
  if(number % 2 !== 0) {
    return "Number is odd"
  } else if(number % 2 === 0) {
    return "Number is even"
  }
}
// - Write an Arrow Function without curly brackets (hint: use ternary operator)
const oddOrEven = number => number % 2 !== 0 ? "Number is odd" : "Number is even"
// - Write an Arrow Function with curly brackets
const oddOrEven = number => {
  return number % 2 !== 0 ? "Number is odd" : "Number is even"
}
// - Execute the function
oddOrEven(5)
// - Execute the function and store the return value in a variable
let oddOrEvenValue = oddOrEven(10)
// - What is the typeof returnValue : "string"

