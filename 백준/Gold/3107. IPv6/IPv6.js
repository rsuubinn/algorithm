/*
 IPv6의 주소는 32자리의 16진수를 4자리씩 끊어 나타낸다. (8그룹)
 각 그룹의 앞자리의 0의 전체 또는 일부를 생략 할 수 있다.
 만약 0으로만 이루어져 있는 그룹이 있을 경우 그 중 한 개 이상 연속된 그룹을 하나 골라 콜론 2개(::)로 바꿀 수 있다. (한 번만 사용)

 1. arr 길이는 8이 되어야 함 (구분은 :)
 1-1. arr 길이가 8보다 작다면 빈 문자열을 추가해줘야됨
 1-1. arr 길이가 8보다 크다면 빈 문자열을 삭제해줘야됨 (ex. ::1:2:3:4:5:6:7 => ['', '', '1', '2', '3', '4', '5', '6', '7'])
 2. arr의 요소 길이는 4가 되어야 함
 3. arr의 요소 길이가 4보다 작다면 앞에 0을 추가해줘야됨 (padStart 메서드 이용)
*/

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
