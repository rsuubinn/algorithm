const [n ,k] = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);

let answer = [];
let arr = [];
let count = 1;

for (let i = 1; i <= n; i++) arr.push(i);

while (arr.length) {
    let shiftItem = arr.shift();

    if (count % k === 0) answer.push(shiftItem);
    else arr.push(shiftItem);

    count++;
}  

console.log(`<${answer.join(', ')}>`);