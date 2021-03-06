/*
The Age Calculator part 2

Forgot how old you are? Calculate it!

Write a function named calculateAge that:
- takes 2 arguments: birth year, current year.
- calculates the 2 possible ages based on those years.
- outputs the result to the screen like so: "You are either NN or NN"
- Call the function three times with different sets of values.
- Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
*/

// write your solution here...

function calculateAge(birthYear, currentYear){
    var age1 = currentYear - birthYear;
    var age2 = birthYear - currentYear;

    return console.log("You are either " + age1 + " or " + age2);
};

var birth = 1987;
var current = new Date().getFullYear();

for (var i = 0; i < 3; i++)
{
    birth += birth;
    current += current;
    calculateAge(birth, current);
}

