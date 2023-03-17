let fs = require('fs');
let data = fs.readFileSync('/dev/stdin').toString().split(' ');
let a = parseInt(data[0]);
let b = parseInt(data[1]);

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(parseInt(a / b));
console.log(a % b);