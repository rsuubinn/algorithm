let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

let max = 0;
let index = 0;

for(let i = 0; i < input.length; i++) {
  if(Number(input[i]) > max) {
    max = Number(input[i]);
    index = i;
  }
}

console.log(max);
console.log(index + 1);