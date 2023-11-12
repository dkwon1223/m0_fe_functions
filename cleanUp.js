// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
  // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function askForName() { 
  console.log("Hello, what is your name?"); 
}

askForName();
/* 
  I cleaned up the structure of the function in order to have the function,
  the code to be executed, and a closing curly brace. Following this is the
  function invocation. In addition, I added some semi-colons to necessary
  areas and lines of code that needed to be terminated.
*/

// EX 2:
function addThreeNums(first, second, third) {
  var sum = first + second + third
  return sum;
}

console.log(addThreeNums(1, 2, 3));
console.log(addThreeNums(4, 2, 7));

/*
  I cleaned up the structure of the function by tabbing out the code
  to be executed within the function as well as the return statement. 
  I found the function invocations to be fine as is, however I nested 
  these function invocations in console.log statements to make sure the 
  output was correct.
*/


// EX 3:
function makeFreshPesto(){
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    
}

makeFreshPesto();

/* 
  I cleaned up the function structure by putting the closing brace on a new line. 
  In addition, the function keyword was not fully declared(was "func") so I added
  the necessary "tion" characters in order to avoid a syntax error.
*/

//  EX 4:
function average(num1, num2) {
  var sum = num1 + num2;
  var avg = sum / 2;
  return avg
}

console.log(average(75, 25));

/* 
  I did some simple structure revisions on this function. The main issues
  involved placement of opening closing curly braces as well as the tabbing
  of lines of code within the function. In addition, I added a console.log
  with a function invocation with 2 Number values to ensure the code works.
*/