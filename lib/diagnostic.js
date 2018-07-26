'use strict'

/* JS Basics Diagnostic

Please erase <your answers here> and replace with your answers where
appropriate.
*/

// Question 1

// Please list the JavaScript primitives and give one example of each.

/*

<your answers here>

*/

// Question 2

let c = 5
const d = 2
c = c + d

// After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d` and explain what they do.

/*

<your answers here>

*/

// Question 3

let x = 4
let y = 3
x = y
y = 10

/* After each line of code executes, what are the values of x and y?  Add a comment after each line with the values of x and y. Do the variables change?  Do their values?

<!-- your answers here -->

*/

// Question 4

let weather
weather = 'cloudy'
weather = 'sunny'
console.log(weather === 'sunny')

/* What do these expressions evaluate to?  Explain your answers.

<your answers here>

*/

// Question 5

// We'll learn about require later in the course
const ask = require('./ask.js')

let answer = 'not empty'

while (answer !== '') {
  answer = ask('Guess my secret? ')
  if (answer === 'SeCrEt') {
    console.log('You guessed it!')
    break
  }
}

/* Change the code from this question so that it tests for a number of your choice between 1 and 10 instead of the string `'SeCrEt'`.  If `answer` isn't >= 1 and <= 10, use `console.log` to display a message saying that the guess needs to be between 1 and 10.  Save your code in the file called `bin/diagnostic.js`. You can test the code with `node bin/diagnostic.js` in your Terminal. */

module.exports = {
  c,
  d,
  x
}
