let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const testCase = Number(input[0]);
let answer = '';

for(let i = 1; i <= testCase; i++) {
  let arr = input[i].split(' ');
  let num = Number(arr[0]);
  let strArr = arr[1].split('');

  for(let j = 0; j < strArr.length; j++){
    for(let k = 0; k < num; k++) {
      answer += strArr[j];
    }
  }
  answer += '\n';
}

console.log(answer);