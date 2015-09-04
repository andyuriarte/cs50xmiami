/*
The Age Calculator

Forgot how old someone is? Calculate it!

- Store the current year in a variable.
- Store their birth year in a variable.
- Calculate their 2 possible ages based on the stored values.
- Output them to the screen like so: "They are either NN or NN", substituting the values.
*/

// write your solution here...

var curYear = 2015;
var bYear = 1987;
var age1 = curYear - bYear;
var age2 = bYear - curYear;

console.log("They are either " + age1 + " or " + age2);
