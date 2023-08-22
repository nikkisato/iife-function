// function declaration
function greet1() {
	console.log('greet1', this);
	//greet1 gets the window object
}
greet1();

/* Hoisting */
/* if it's a function declaration hoisting can be made anywhere within the file */
/*---------------------------------------------------------------- */

// function expression
//Named Function Expression:
// can also have a anonymous function expression
//const functionGreet = function() {}

const functionGreet = function greet2() {
	console.log('greet2', this);
	// app.js:16 Uncaught ReferenceError: greet2 is not defined
};
greet2();

/* Hoisting */
/* if it's a function express hoisting has to be after the function expression */


