let inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

for (let input of inputs) {
   let sum = input.split(' ').map(Number).reduce((acc, cur) => acc + cur);
   if(sum === 3) console.log('A');
   else if(sum === 2) console.log('B');
   else if(sum === 1) console.log('C');
   else if(sum === 0) console.log('D');
   else if(sum === 4) console.log('E');
}