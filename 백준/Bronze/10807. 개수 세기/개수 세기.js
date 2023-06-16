let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = input[1].split(' ');
let char = input[2];
let answer = 0;

for (let item of arr) {
    if (item === char) answer++;
}

console.log(answer);

