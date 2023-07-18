const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt"
let input = require('fs').readFileSync(filePath).toString().trim()

let arr = []

while (input.length > 0) {
    arr.push(input)
    input = input.slice(1)
}

console.log(arr.sort().join('\n'))