const [N, K] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);

let n = N; // 5
let k = K; // 2

let mul1 = 1;
let mul2 = 1;

for (let i = K; i > 0; i--) {
    mul1 = mul1 * n;
    mul2 = mul2 * k;
    n = n - 1;
    k = k - 1;
}

console.log(mul1 / mul2);