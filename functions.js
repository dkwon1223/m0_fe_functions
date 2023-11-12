// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Store the return value of the function call in a variable, and use console.log() to see the return value in the console.
// If a function takes parameters, call the function at least twice, passing different arguments each time.

// 1: Write a function named greeting that returns a string with a general greeting. 
function greeting() {
    return "Greetings, my friend."
}
greetFunctionCall = greeting();
console.log(greetFunctionCall);

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.
function customGreeting(name) {
    return `Greetings, ${name}`;
}
customGreetFunctionCall = customGreeting("Marvin");
//customGreetFunctionCall = customGreeting("David");
console.log(customGreetFunctionCall);

// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.
function greetPerson(firstName, middleName, lastName) {
    return `Your full name is: ${firstName} ${middleName} ${lastName}`;
}
//greetPersonFunctionCall = greetPerson("David", "Chan", "Kwon");
greetPersonFunctionCall = greetPerson("Harry", "Wizard", "Potter");
console.log(greetPersonFunctionCall);

// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.
function square(num) {
    return `The square of your number is: ${num ** 2}`;
}
//squareFunctionCall = square(5);
squareFunctionCall = square(7);
console.log(squareFunctionCall);

// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.
// checkStock(4, "Coffee");
// // => "Coffee is stocked"

// checkStock(3, "Tortillas");
// // => "Tortillas - running LOW"

// checkStock(0, "Cheese");
// // => "Cheese - OUT of stock!"

// checkStock(1, "Salsa");
// // => "Salsa - running LOW"

function checkStock(inventory, item) {
    if (inventory >= 4) {
        return `${item} is stocked`;
    } else if (inventory < 4 && inventory > 0) {
        return `${item} is running LOW`
    } else {
        return `${item} - OUT of stock!`;
    }
}

console.log(checkStock(4, "Chicken"));
console.log(checkStock(3, "Pesto"));
console.log(checkStock(2, "Pasta"));
console.log(checkStock(1, "Eggs"));
console.log(checkStock(0, "Spinach"));