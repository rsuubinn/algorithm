let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

const n = input[0]; // 정수의 갯수 n
const arr = input[1].split(' '); // 정수 배열

const newArr = [];

for(let i = 0; i < arr.length; i++) {
  newArr.push(Number(arr[i]));
}

console.log(`${Math.min(...newArr)} ${Math.max(...newArr)}`);