// Use default parameter where ever you can

/*
1. 🎖Write a function named calculateDogAge that:
  * [ ] Takes 1 argument: your puppy's age.
  * [ ] Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
  * [ ] Return the result dog age in dog year.
  * [ ] Add an additional argument to the function that takes the conversion rate of human to dog years.
*/

function calculateDogAge(age) {
  // Your code goes here
  return age * 7
}

/*
2. 🎖Write a function named calculateMoviesToWatch that:
  * [ ] takes 2 arguments: age, number of movies you watch every week. (take 4 weeks per month)
  * [ ] calculates the number of movies for rest of the life (based on a constant max age).
  * [ ] Return the total number of movie you will watch.
*/

function calculateMoviesToWatch(age, NumOfMoviesEachWeek) {
  // Your code goes here
  const MAX_LIFE = 80;
  let remainingYears = MAX_LIFE - age
  const TOTAL_WEEKS_YEARLY = 52;
  return remainingYears * 52 * NumOfMoviesEachWeek
}

/*
3. 🎖Create a function called celsiusToFahrenheit:
  * [ ] Accepts celsius temperature as argument.
  * [ ] Convert it to fahrenheit and return "NN°F is NN°C"
*/

function celsiusToFahrenheit(temp) {
  // Your code goes here
  return ( temp * 9/5) + 32
}

/*
4. 🎖Create a function called fahrenheitToCelsius:
  * [ ] Accepts fahrenheit temperature as argument.
  * [ ] Convert it to celsius and return "NN°F is NN°C"
*/

function celsiusToFahrenheit(temp) {
  // Your code goes here
  return ((temp - 32) * 5 /9)
}

/*
5. 🎖 Write a function pow(n, x) that returns x in power n.

  * [ ] The function accepts two parameter x and n.
  * [ ] Return x times n
  * [ ] If the value of n is below 0 return "The number below 1 is not allowed"
*/

function pow(index, base) {
  // Your code goes here
  if(index < 0) {
    return "The number below 1 is not allowed"
  }
  let i = 1; 
  let sum = 1;
  while(index > 0) {
    sum *= base;
    index--
  }
  return sum
}

// Test
pow(3, 2); // 9
pow(3, 3); // 27
pow(1, 100); // 1
pow(-31, 2); // "The number below 1 is not allowed"

/*
6. 🎖Write a program that accepts two parameter a number n and a string with possible values of `sum` or `product`
and return sum or product of 1,…,n. If user enters any other value than `sum` or `product` alert `Not a valid Input`.
*/

function sumOrProductOfN(num1, operation) {
  // Your code goes here
  const NUMBER_TWO = 6;
  
  if(operation !== "sum" || operation !== "product") {
    return "Not a valid Input"
  } else if(operation === "sum") {
    return NUMBER_TWO + sum
  }
   else if(operation === "product") {
    return NUMBER_TWO * sum
  } 
}

sumOrProductOfN(4, 'sum'); // 10
sumOrProductOfN(4, 'product'); // 24
sumOrProductOfN(4, 'hello'); // alert "Not a valid Input"

/*
6. 🎖Write a program that accepts a number n using argument and return the sum of the numbers 1 to n
*/

function sumOfN(num) {
  // Your code goes here
  let sum = 0; 
  let i = 1;
  while(i <= num) {
    sum += i
    i++
  }
  return sum
}

/*
7. 🎖Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71
*/

// Your code goes here

/*
8. 🎖Write a function `min` that takes two arguments and returns their minimum.
*/

function sumOfNModified(num) {
  // Your code goes here
  let sum = 0; 
  let i = 1;
  while(i <= num) {
    if(i % 7 === 0 || i % 5 === 0) {
      sum += i
    }
    i++
  }
  return sum
}

function min(a, b) {
  // Your code goes here
  if(a < b) {
    return a
  } else if(b < a) {
    return b
  } else if (a === b) {
    return "The values are equal"
  }
}

min(0, 10);
min(0, -10);

/*
9. 🎖Write a JavaScript function which accepts an argument and returns the type of the value.
*/

function typeCheck(value) {
  // Your code goes here
  if(typeof value === 'number') {
    return "number"
  } else if(value === 'string') {
    return "string"
  } else if(value === 'boolean') {
    return "boolean"
  } else if(value === 'null') {
    return "null"
  } else if(value === 'undefined') {
    return "undefined"
  } else if(value === 'object') {
    return "function"
  } 
}
