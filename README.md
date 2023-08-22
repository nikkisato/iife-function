## Lesson 17 & 18

# Topics:

- Function types & differences: expressions, declarations, anonymous functions, higher order functions, IIFEs, functions in objects
- Hoisting
- this context

## Challenge

[] Create a standard html + js application
[] Write the same function using function declaration and function expression syntax:
[] What are the main differences?
[] Be sure to log the this keyword in each function - what does it reference in each function
[] Explain how hoisting affects functions and how they are ordered in a file
[] Write your own Higher Order function (a function that takes another function as an argument). HINT: think about methods of like Array.map & filter - this is the same principle (higher order functions). This is also very similar to the principle of callbacks.
[] The higher order function should pass the function argument another argument
[] Implement your own higher order function two ways:
[] Pass an anonymous function as the argument
[] Pass a function declaration
[] Write an IIFE 3 ways (the IIFE can do anything):
[] anonymous function expression
[] anonymous function declaration
[] a function declaration
[] Create an object that has:
[] 2 properties like first and last name
[] has a function that can log those properties
[] Have a look at this code - you should see the differences between function expressions and declarations as properties of an object.
` const chris = {
name: "Chris",
getName() { // function declaration
console.log('hi my name is', this.name)
},
getName2: () => { // function expression
console.log('hi my name is', this.name)
}
}

console.log(chris.getName())
console.log(chris.getName2())
`
