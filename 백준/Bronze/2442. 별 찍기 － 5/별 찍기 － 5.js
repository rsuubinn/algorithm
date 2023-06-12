let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let result = '';
for (let i = 1; i <= Number(input); i++) {
  result += ' '.repeat(Number(input) - i) + '*'.repeat(i * 2 - 1) + '\n'
}

console.log(result);