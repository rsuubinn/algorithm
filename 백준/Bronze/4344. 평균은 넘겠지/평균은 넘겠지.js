let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let testCase = Number(input[0]);

for(let i = 1; i <= testCase; i++){
  let num = Number(input[i].split(" ")[0]); // 총 학생 수
  let arr = input[i].split(" ").map(Number); 
  arr.shift(); // 총 학생 점수 배열
  let sum = arr.reduce((acc, cur) => acc + cur); // 총합
  let average = sum / num; // 평균
  let count = 0;
  arr.map(score => {
    if(score > average) count += 1;
  }) // 평균 넘는 학생 수 구하기
  console.log(`${(count / num * 100).toFixed(3)}%`) // 백분율
}