let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const a = input[0];
const b = input[1];

function getGCD (num1, num2) {
    let gcd = 1;
    for(let i = 2; i <= Math.min(num1, num2); i++) {
        if(num1 % i === 0 && num2 % i === 0) {
            gcd = i;
        }
    }
    return gcd;
}

function getLCM (num1, num2) {
    let lcm = 1;
    while(true) {
        if(lcm % num1 === 0 && lcm % num2 === 0) {
            break;
        }
        lcm++;
    }
    return lcm;
}

console.log(getGCD(a, b));
console.log(getLCM(a, b));