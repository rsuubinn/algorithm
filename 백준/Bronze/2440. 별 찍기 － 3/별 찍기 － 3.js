let input = require('fs').readFileSync('/dev/stdin').toString();

let answer = '';

for(let i = Number(input); i > 0; i--) {
    for(let j = 0; j < i; j++) {
        answer += '*';
    }
    if (i > 1) answer += '\n';
}

console.log(answer);