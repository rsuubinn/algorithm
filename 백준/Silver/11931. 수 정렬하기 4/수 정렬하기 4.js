const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt"
let [N, ...input] = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number)

console.log(input.sort((a, b) => b - a).join('\n'))