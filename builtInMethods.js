// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();


"Hello World".includes("Hello");
/*
    - The include() method is called on the string "Hello World"
    - A string argument is passed: includes() evaluates the string 
    argument and determines if it is contained within the original string
    - The return value is a boolean which outputs true if the argument 
    is found within the string and false if not. In this case, it is true.
*/


"Hello World".endsWith("Hello");
/*
    - The endsWith() method is called on the string "Hello World"
    - A string argument is passed: endsWith() evaluates the argument 
    and determines if it is the ending sequence of characters in the original string
    - The return value is a boolean which outputs true if the original string
    ends with the argument string and false if not. In this case, it is false.
*/

"Hello World".endsWith("rld");
/* 
    - Same as example above
    - Same as example above, however this time the string argument that
    is passed is different: "Hello" vs "rld"
    - Same as example above, however this time the return value is true 
    since the string "Hello World" does indeed end with "rld"
*/



// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));

// SECTION 2 DAVID KWON'S WORK:
// Declare 2 variables assigned to strings
var firstName = "David";
var occupation = "Excited Turing Student";
/* 
    Call a different built-in JavaScript method on each of your variables.
    Include comments above each method call explaining the impact and return 
    value of that method.
*/
/*
    The slice method takes a starting index and an ending index as parameters. 
    Numbers are passed in as arguments for index positions and the method returns
    a new string that is extracted from the starting to ending index. In my example,
    the string method extracts from index 0 to index 3 in my original "David" string
    and returns "Dav".
*/
console.log(firstName.slice(0, 3));
/*
    The split method takes a string argument in order to find a pattern to split up
    the original string. Following this, it orders the split up substrings and restructures
    them as an array which is the return value of this method. In this case, I split my string
    "Excited Turing Student" by the pattern " " which is simply space between each word. The return
    statement gives me an array with each word as ordered elements.
*/
console.log(occupation.split(" "));

// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

// SECTION 3: DAVID KWON'S WORK
// Declare 2 variables assigned to arrays
var studentAges = [19, 20, 22, 24, 27, 28, 30];
var studentNames = ["Harry", "Hermione", "Ron", "Malfoy", "Snape", "Dumbledore", "Hagrid"];
/* 
    Call a different built-in JavaScript method on each of your variables.
    Include comments above each method call explaining the impact and return 
    value of that method.
*/
/*
    The .reverse() method is called on studentAges which is an array of numbers.
    The method takes the order of the elements in the array and reverses them.
    In my example, the ages of the students is already conveniently sorted from youngest
    to oldest in the variable studentAges. When console.log()ing the output, we can see 
    that the return value is the reverse order of the array since it is descending.
*/
console.log(studentAges.reverse());
/*
    The .indexOf() method is called on studentNames which is an array of strings.
    The method takes the string argument passed by the user and searches the array
    for an element that matches. If a matching value is found, the method returns the
    index position of the matching element. If the value is not found, the method
    returns -1. In my example, the string value "Dumbledore" is present in my array
    so the method returns 5 which is the index position of Dumbledore in my studentNames
    array.
*/
console.log(studentNames.indexOf("Dumbledore"));