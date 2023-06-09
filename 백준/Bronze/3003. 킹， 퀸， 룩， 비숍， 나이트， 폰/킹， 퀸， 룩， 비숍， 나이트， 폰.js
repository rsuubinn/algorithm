let input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);

let a = 1 - input[0];
let b = 1 - input[1];
let c = 2 - input[2];
let d = 2 - input[3];
let e = 2 - input[4];
let f = 8 - input[5];

console.log(a, b, c, d, e, f);