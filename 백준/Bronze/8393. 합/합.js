let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

let sum = 0;
for(let i = 1; i <= parseInt(input); i++){
    sum += i;
}

console.log(sum);