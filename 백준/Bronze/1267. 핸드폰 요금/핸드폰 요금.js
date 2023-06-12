let inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

inputs = inputs[1].trim().split(' ').map(Number);

let y = 0;
let m = 0;

for (let num of inputs) {
    y += (num % 30) === 0 ? ((num / 30) + 1) * 10 : Math.ceil(num / 30) * 10;
    m += (num % 60) === 0 ? ((num / 60) + 1) * 15 : Math.ceil(num / 60) * 15;
}

if (y === m) console.log(`Y M ${y}`);
else if (y < m) console.log(`Y ${y}`);
else console.log(`M ${m}`);