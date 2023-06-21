/*
    둘의 길이가 같음이 보장된다. 
    이름 궁합을 볼 때는 A의 첫 글자를 먼저 쓴다고 하자.

    1. 획수 객체 만들기
    2. A랑 B의 길이는 같으니까 for문 돌려서 해당하는 알파벳 숫자 뽑기
    3. 배열 하나 만들어서 배열 길이가 2가 될 떄 까지 반복
    3-1. 더한 값이 10 이상일 때 일의 자리만 저장할 수 있도록 처리 필요
    3-2. 더하면 shift() 이용하며 제거
*/

const [A, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const strokes = {
    'A': 3,
    'B': 2,
    'C': 1,
    'D': 2,
    'E': 3,
    'F': 3,
    'G': 2,
    'H': 3,
    'I': 3,
    'J': 2,
    'K': 2,
    'L': 1,
    'M': 2,
    'N': 2,
    'O': 1,
    'P': 2,
    'Q': 2,
    'R': 2,
    'S': 1,
    'T': 2,
    'U': 1,
    'V': 1,
    'W': 1,
    'X': 2,
    'Y': 2,
    'Z': 1
}
let arr = [];

for (let i = 0; i < A.length; i++) {
    arr.push(strokes[A[i]])
    arr.push(strokes[B[i]])
}

while (true) {
    if (arr.length === 2) break;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[0] + arr[1];
        if (temp >= 10) {
            arr.push(temp % 10);
        } else {
            arr.push(temp);
        }
        arr.shift(); 
        count += 1;
        if(count === arr.length - 1) arr.shift();
    }
}

console.log(arr.join(''));