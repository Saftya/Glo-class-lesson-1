let num = 266219;

let arrayOfDigits = Array.from(String(num), Number);
console.log(arrayOfDigits);

let result = console.log(arrayOfDigits.reduce((a, b) => a*b));
let result1 = console.log(1296 ** 3);
let result2 = String(2176782336);
console.log(result2);

console.log(result2.substring(0, 2));