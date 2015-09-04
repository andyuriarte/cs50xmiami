/*
The Geometrizer

Create 2 functions that calculate properties of a circle, using the definitions here:
http://math2.org/math/geometry/circles.htm

Create a function called calcCircumfrence:
- Pass the radius to the function.
- Calculate the circumference based on the radius, and output "The circumference is NN".

Create a function called calcArea:
- Pass the radius to the function.
- Calculate the area based on the radius, and output "The area is NN".
*/

// write your solution here...



function calcCircumference (radius) {
    var pi = Math.PI;
    var circumference = radius * pi;

    return console.log("The circumference is " + circumference);
}

function calcArea(radius) {
    var pi = Math.PI;
    var area = pi * (radius*radius);

    return console.log("The area is " + area);
}

var radius = 5.0;

calcCircumference(radius);
calcArea(radius);
