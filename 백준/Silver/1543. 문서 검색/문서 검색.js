/*
    1. 검색할 키워드 길이만큼 주어진 문장 앞 부분 같은지 확인(for문)
    1-1. 같으면 count++, splice를 이용하여 같은 부분 잘라내기
    1-2. 같지 않으면 shift()를 이용하며 주어진 문장 앞 잘라내기
*/



let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let sentance = input[0].split('');
const keyword = input[1];
let answer = 0;

while (sentance.length) {
    let count = 0;
    for (let i = 0; i < keyword.length; i++) {
        if (sentance[i] === keyword[i]) count += 1;
    }
    if (count === keyword.length) { // 문자랑 키워드 같음
        answer += 1;
        sentance.splice(0, keyword.length);

    } else {
        sentance.shift();
    }
}
console.log(answer);

