/*
The Temperature Converter

It's hot out! Let's make a converter based on the steps here:
http://www.mathsisfun.com/temperature-conversion.html

Create a function called celsiusToFahrenheit:
- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output "NN°C is NN°F".

Create a function called fahrenheitToCelsius:
- Now store a fahrenheit temperature into a variable.
- Convert it to celsius and output "NN°F is NN°C."
*/

// write your solution here...
function celsiusToFahrenheit(temp) {
    var celsius = temp;
    var fahrenheit = ((temp*9)/5) + 32;

    return console.log(temp + '°C' + ' is ' + fahrenheit + '°F');
}

celsiusToFahrenheit(32);

function fahrenheitToCelsius(temp) {
    var fahrenheit = temp;
    var celsius = ((fahrenheit -32) * 5) / 9;

    return console.log(temp + '°F' + ' is ' + celsius + '°C');
}

fahrenheitToCelsius(89.6);
