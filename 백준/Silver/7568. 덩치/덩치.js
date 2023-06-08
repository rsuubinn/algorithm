let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let ranks = [];

for (let i = 1; i <= Number(input[0]); i++) {
  let currentPerson = input[i].split(' ');
  let currentWeight = Number(currentPerson[0]);
  let currentHeight = Number(currentPerson[1]);
  let count = 0;

  for (let j = 1; j <= Number(input[0]); j++) {
    if (currentWeight < Number(input[j].split(' ')[0]) && currentHeight < Number(input[j].split(' ')[1])) {
      count++;
    }
  }

  ranks.push(count + 1);
}

const result = ranks.join(' ');
console.log(result);