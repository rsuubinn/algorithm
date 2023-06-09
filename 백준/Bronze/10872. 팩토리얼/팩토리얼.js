let input = require('fs').readFileSync('/dev/stdin').toString();

let answer = 1;

for(let i = Number(input); i > 0; i--) {
    answer *= i;
}

console.log(answer);