//Today is 293 Kelvin.
const kelvin = 293;
//convert to Celsius.
const celsius = kelvin - 273; 
//convert to fahrenheit.
let fahrenheit = celsius * (9/5) + 32;
//get a decimal number.
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);