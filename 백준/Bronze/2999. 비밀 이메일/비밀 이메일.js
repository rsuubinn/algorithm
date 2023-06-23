/*
    정인이가 보내는 메시지는 총 N글자이다.
    정인이는 R<=C이고, R*C=N인 R과 C를 고른다. 만약, 그러한 경우가 여러 개일 경우, R이 큰 값을 선택한다.
    행이 R개고, 열이 C개인 행렬을 만든다.
    이제 메시지를 행렬에 옮긴다.

    1. input 길이를 이용해서 R, C 구한다.
    1-1 에라토스테네스의 체를 이용하여 input.length의 제곱근 값을 시작으로 R을 찾는다.
    2. R이 1일 경우 input을 그냥 출력하면 된다.
    3. R이 1이 아닐 경우 input 값을 2차원 배열로 저장
    ex)
    R:2, C:3
    k o  [0][0]  [1][0]
    a s  [0][1]  [1][1]
    k i  [0][2]  [1][2]
    4. 문제 출력 형식대로 answer 배열에 값을 저장한 후 answer 배열 출력

*/

const input = require('fs').readFileSync('input.txt').toString().trim();

let R = 0;
let C = 0;


/*
내가 처음 생각했던 풀이과정
if ((input.length / 2) * (input.length / 2) === input.length) {
    R = input.length;
    C = input.length;
} else {
    let arr = [];
    for (let i = 1; i < input.length / 2; i++) {
        if (input.length % i === 0) arr.push(i);
    }
    R = Math.max(...arr);
    C = input.length / R;
}
*/

// 다른 풀이 참고한 부분
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
