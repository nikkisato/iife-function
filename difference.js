// Have a look at this code - you should see the differences between
// function expressions and declarations as properties of an object.

/*const chris = {
    name: "Chris",
    // function declaration
    getName() { 
      console.log('hi my name is', this.name)
    },
     // function expression
    getName2: () => {
      console.log('hi my name is', this.name)
    }
  }
  
  console.log(chris.getName())
  console.log(chris.getName2()) */

/* Answer */
// The Difference between the getName2, doesn't have access to this it would show up undefined,
// the getName does have access to the window object and gives us Chris from this.name
