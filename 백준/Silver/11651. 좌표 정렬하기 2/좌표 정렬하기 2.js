let input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

const testCase = Number(input.shift());

input.sort((a, b) => {
    const [x1, y1] = a.split(' ').map(Number);
    const [x2, y2] = b.split(' ').map(Number);
    if (y1 === y2) {
        return x1 - x2;
    } else {
        return  y1 - y2;
    }
});

console.log(input.join('\n'));