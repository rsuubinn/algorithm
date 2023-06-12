let inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);

let arr = [];

for (let num of inputs) {
    if (num % 2 === 1) arr.push(num);
}

if (arr.length === 0) console.log(-1);
else {
    console.log(arr.reduce((acc, cur) => acc + cur));
    console.log(Math.min(...arr));
}