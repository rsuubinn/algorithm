/*
    정인이가 보내는 메시지는 총 N글자이다.
    정인이는 R<=C이고, R*C=N인 R과 C를 고른다. 만약, 그러한 경우가 여러 개일 경우, R이 큰 값을 선택한다.
    행이 R개고, 열이 C개인 행렬을 만든다.
    이제 메시지를 행렬에 옮긴다.

    1. input 길이를 이용해서 R, C 구한다.
    1-1. 1부터 input 

*/

const input = require('fs').readFileSync('/dev/stdin').toString().trim();

let R = 0;
let C = 0;

for (let i = Math.floor(Math.sqrt(input.length)); i >= 1; i--) {
    if (input.length % i === 0) {
        R = i;
        C = input.length / R;
        break;
    }
}

if (R === 1) console.log(input);
else {
    let arr1 = [];
    let arr2 = [];
    let count = R;
    for (let i = 0; i < input.length; i++) {
        arr2.push(input[i]);
        count -= 1;
        if (count === 0) {
            arr1.push(arr2);
            count = R;
            arr2 = [];
        }
    }
    
    let answer = [];
    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            answer.push(arr1[j][i]);
        }
    }
    console.log(answer.join(''));
}



// 1 6
// R:2, C:3

// k o  [0][0]  [1][0]
// a s  [0][1]  [1][1]
// k i  [0][2]  [1][2]