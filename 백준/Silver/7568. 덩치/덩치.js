let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let testCase = Number(input[0]);
let ranks = [];

for(let i = 1; i <= testCase; i++) {
    let currentPerson = input[i].split(' ');
    let weight = Number(currentPerson[0]);
    let height =  Number(currentPerson[1]);
    let count = 0;

    for(let j = 1; j <= testCase; j++) {
        if(weight < Number(input[j].split(' ')[0]) && height < Number(input[j].split(' ')[1])) {
            count++;
        }
    }
    ranks.push(count + 1);
}

const result = ranks.join(' ');
console.log(result);