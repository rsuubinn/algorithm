const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt"
const input = require('fs').readFileSync(filePath).toString().trim()

let arr = input.split(':')

while (arr.length < 8) {
    let emptyIdx = arr.indexOf('')
    arr.splice(emptyIdx, 0, '')
  }
  
  while (arr.length > 8) {
    let emptyIdx = arr.indexOf('')
    arr.splice(emptyIdx, 1)
  }
  
  let answer = arr.map(str => str.padStart(4, '0')).join(':')
  console.log(answer)