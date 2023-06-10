let input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

let answer = '';

for(let i = 0; i < input.length; i++) {
    let [x, y, z] = input[i].split(' ').map(Number).sort((a, b) => a - b);
    if(x === 0 && y === 0 && z === 0) break;
    if((x * x) + (y * y) === (z * z)) answer += 'right\n';
    else answer += 'wrong\n';
}

console.log(answer.trim());