let [x, y, w, h] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);

let answer = [];

answer.push(x);
answer.push(y);
answer.push(w - x);
answer.push(h - y);

console.log(Math.min(...answer));