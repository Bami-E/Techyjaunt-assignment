// Create a JavaScript object called bunny with the following properties: name, age, and isHappy.
// Set the values of the properties to your own bunny's name, age, and happiness level.

//Convert the bunny object to JSON and store it in a variable called bunnyJSON.

let bunny = {
    name : "Wren",
    age : 2,
    isHappy: false
}

let bunnyJSON = JSON.stringify(bunny)
console.log(bunnyJSON)

// Using a ternary operator , write a function that takes in a number and returns a string that says whether the number is even or odd.

let num = 48;
num % 2 === 0 ? console.log("Even") : console.log("Odd")