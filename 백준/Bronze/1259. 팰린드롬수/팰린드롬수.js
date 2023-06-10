let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let answer = [];

for(let number of input) {
    if(number === '0') break;

    let front = 0;
    let back = number.length - 1;

    while(front < back) {
        if(number[front] !== number[back]) {
            answer.push('no');
            break;
        }
        front += 1;
        back -= 1;
    }
    if (front >= back) answer.push('yes');
}

console.log(answer.join('\n'))

