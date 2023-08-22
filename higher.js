// Write your own Higher Order function (a function that takes another function as an argument).
// HINT: think about methods of like Array.map & filter - this is the same principle (higher order functions).
// This is also very similar to the principle of callbacks.
// The higher order function should pass the function argument another argument
// Implement your own higher order function two ways:
// Pass an anonymous function as the argument
// Pass a function declaration

// Pass an anonymous function as the argument
const callback1 = function () {
	console.log('anonymous function');
};

function higherOrderFunction1(callback1) {
	callback1();
	console.log('higher order function', callback1);
}

// Pass a function declaration
function callback2() {
	console.log('function declaration');
}

function higherOrderFunction2(callback2) {
	callback2();
	console.log('higher order function', callback2);
}
