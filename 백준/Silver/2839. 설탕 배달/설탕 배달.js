let input = require('fs').readFileSync('/dev/stdin').toString()

input = Number(input);
let count = 0;

while(true){
    if(input % 5 === 0){
        console.log((input / 5) + count);
        break;
    }

    if(0 > input) {
        console.log(-1);
        break;
    }

    count = count + 1;
    input = input - 3;
}