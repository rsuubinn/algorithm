/*
    1. 검색할 키워드 길이만큼 주어진 문장 앞 부분 같은지 확인(for문, count 변수)
    1-1. 같으면(count 크기와 키워드 길이가 같을 때) splice를 이용하여 같은 부분 잘라내기, answer++
    1-2. 같지 않으면 shift()를 이용하며 sentence 맨 앞 한글자 버리기
    2. answer 출력
*/

let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let sentence = input[0].split('');
const keyword = input[1];
let answer = 0;

while (sentence.length) {
    let count = 0;
    for (let i = 0; i < keyword.length; i++) {
        if (sentence[i] === keyword[i]) count += 1;
    }
    if (count === keyword.length) { 
        answer += 1;
        sentence.splice(0, keyword.length);

    } else {
        sentence.shift();
    }
}
console.log(answer);