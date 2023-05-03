let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const testCase = Number(input[0]);

let arr = [];
let answer = '';

for(let i = 1; i <= testCase; i++) {
    arr.push(Number(input[i]));
}

arr.sort((a, b) => a - b);

for(let i = 0; i < arr.length; i++) {
    answer = answer + arr[i] + '\n';
}

console.log(answer.slice(0, answer.length - 1));