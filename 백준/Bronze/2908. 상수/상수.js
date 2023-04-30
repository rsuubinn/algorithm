let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

let a = (input[0].split('')).reverse().join('');

let b = (input[1].split('')).reverse().join('');


console.log(Math.max(Number(a), Number(b)));