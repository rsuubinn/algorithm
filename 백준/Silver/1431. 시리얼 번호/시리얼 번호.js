/*
    1. A와 B의 길이가 다르면, 짧은 것이 먼저 온다.
    2. 만약 서로 길이가 같다면, A의 모든 자리수의 합과 B의 모든 자리수의 합을 비교해서 작은 합을 가지는 것이 먼저온다. (숫자인 것만 더한다)
    3. 만약 1,2번 둘 조건으로도 비교할 수 없으면, 사전순으로 비교한다. 숫자가 알파벳보다 사전순으로 작다.
*/

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt"
let input = require('fs').readFileSync(filePath).toString().trim().split('\n')

const testCase = Number(input.shift())

input.sort((a, b) => {
    if (a.length !== b.length) return a.length - b.length
    else {
        let sumA = sum(a);
        let sumB = sum(b);
        if (sumA !== sumB) return sumA - sumB
        return a.localeCompare(b)
    }
})

function sum (serial) { 
    return serial.split('').map(Number).reduce((acc, cur) => {
        if (!isNaN(cur)) return acc + cur
        else return acc
    }, 0)
}

console.log(input.join('\n'))