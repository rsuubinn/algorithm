let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
input.sort((a, b) => a - b);

let sum = input.reduce((acc, cur) => acc + cur);
let middle = input[Math.floor(input.length / 2)];

console.log(sum / input.length);
console.log(middle);
