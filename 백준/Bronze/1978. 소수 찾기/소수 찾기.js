
/*
소수는 1보다 큰 자연수 중 1과 자기 자신만을 약수로 가지는 수다.
첫 줄에 수의 개수 N이 주어진다. N은 100이하이다. 다음으로 N개의 수가 주어지는데 수는 1,000 이하의 자연수이다.
*/

let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let N = input[0];
let arr = input[1].split(' ');
let count = 0;

arr = arr.map(Number);

arr.map(x => {
  if(findNumber(x)) count += 1;
})

// 소수 찾는 함수
function findNumber(num) {
  if(num === 1) return false; // 1은 소수가 아님
  for(let i = 2; i < num; i++) {
    if(num % i === 0) return false;
  }
  return true;
}

console.log(count);