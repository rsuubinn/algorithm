let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const scores = input[1].split(' ').map(Number);

const max = Math.max(...scores);

let sum = 0;

scores.map(score => {
  sum += (score / max) * 100;
});

console.log(sum / Number(input[0]));