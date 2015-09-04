/*
The Fortune Teller part 2

Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune that:
- takes 4 arguments: number of children, partner's name, geographic location, job title.
- outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
- Call that function 3 times with 3 different values for the arguments.
*/

// write your solution here...
//

function tellFortune(numChildren, pName, geo, title) {
    return console.log("You will be a " + title + " in " + geo + ", and married to " + pName + " with " + numChildren + " kids.");

}

var numChildren = 12;
var pName = "Michelle";
var geo = "Miami";
var title = "Hacker";

tellFortune(numChildren, pName, geo, title);
