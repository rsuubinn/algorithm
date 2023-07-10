/*
  1. 만약 종이가 모두 같은 수로 되어 있다면 이 종이를 그대로 사용한다.
  2. (1)이 아닌 경우에는 종이를 같은 크기의 종이 9개로 자르고, 각각의 잘린 종이에 대해서 (1)의 과정을 반복한다.

  재귀 -> 탈출 조건 / 반복 구간
  탈출 조건 - 더이상 쪼갤 종이가 없을 때
  반복 구간 - 쪼갠 부분의 숫자가 모두 동일한지 아닌지 확인
*/

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt"
let [n, ...paper] = require('fs').readFileSync(filePath).toString().trim().split('\n')

n = parseInt(n);
paper = paper.map(line => line.split(' ').map(Number));

let counts = { "-1": 0, "0": 0, "1": 0 };

function isSameColor(x, y, size) {
    const color = paper[y][x];
    for (let i = y; i < y + size; i++) {
        for (let j = x; j < x + size; j++) {
            if (paper[i][j] !== color) return false;
        }
    }
    return color;
}

function divideAndConquer(x, y, size) {
    const color = isSameColor(x, y, size);
    if (color !== false) {
        counts[color]++;
    } else {
        const newSize = size / 3;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                divideAndConquer(x + newSize * i, y + newSize * j, newSize); 
            }
        }
    }
}

divideAndConquer(0, 0, n);

console.log(`${counts["-1"]}\n${counts["0"]}\n${counts["1"]}`);