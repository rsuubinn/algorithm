let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const testCase = Number(input[0]);
let answer = 0;

for (let i = 1; i <= testCase; i++) {
  let word = input[i];
  let letter = [];
  let isGroupWord = true;

  for (let j = 0; j < word.length; j++) {
    if(letter.indexOf(word[j]) === -1) letter.push(word[j]);
    else {
      if(letter.indexOf(word[j]) !== letter.length - 1) {
        isGroupWord = false;
        break;
      }
    }
  }
  if(isGroupWord) answer = answer + 1;
}
console.log(answer);

