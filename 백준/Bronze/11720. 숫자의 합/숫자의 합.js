let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const numArr = input[1].split('').map(Number);

const sum = numArr.reduce((acc, num) => acc + num);

console.log(sum);