let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, k] = input.shift().split(' ').map(Number);

let map = new Map();
let answer = 0;

for (let i = 1; i <= 6; i++) {
    map.set(i, [0, 0]);
}

for (let item of input) {
    const [s, y] = item.split(' ').map(Number);
    if (s === 0) {
        const [female, male] = map.get(y);
        map.set(y, [female + 1, male]);
    }
    if (s === 1) {
        const [female, male] = map.get(y);
        map.set(y, [female, male + 1]);
    }
}

let arr = Array.from(map.values());
arr = arr.flat();

for (let num of arr) {
    if (num > k) {
        answer = answer + Math.ceil(num / k);
    } else if (num !== 0) {
        answer++;
    }
}

console.log(answer);