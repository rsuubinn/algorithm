let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let hour = parseInt(input[0]);
let minute = parseInt(input[1]);

let time = hour * 60 + minute - 45;

if(time < 0) time = time + 1440;

hour = parseInt(time / 60);
minute = time % 60;

console.log(`${hour} ${minute}`);