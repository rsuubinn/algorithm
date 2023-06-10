let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const testCase = Number(input.shift());

input.sort((a, b) => {
    const [x1, y1] = a.split(' ').map(Number);
    const [x2, y2] = b.split(' ').map(Number);
    if (x1 === x2) return y1 - y2;
    else return  x1 - x2;
});

console.log(input.join('\n'));