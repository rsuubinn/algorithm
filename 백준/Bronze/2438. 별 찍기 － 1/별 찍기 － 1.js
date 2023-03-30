let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString();

let result = '';

for(let i = 1; i <= Number(input); i++) {
    for(let j = 1; j <= i; j++){
        result += '*';
    }
    result += '\n';
}
console.log(result);