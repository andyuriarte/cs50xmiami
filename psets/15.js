/*
What number's bigger?

Write a function named greaterNum that:
- takes 2 arguments, both numbers.
- returns whichever number is the greater (higher) number.

Call that function 2 times with different number pairs,
and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
*/

// write your solution here...
function greaterNum(arg1, arg2) {
    if (arg1 > arg2)
    {
        console.log("The greater number of " + arg1 + " and " + arg2 +  " is " + arg1);
    }
    else
    {
        console.log("The greater number of " + arg1 + " and " + arg2 +  " is " + arg2);
    }

}

greaterNum(10, 5);
greaterNum(5, 20);
