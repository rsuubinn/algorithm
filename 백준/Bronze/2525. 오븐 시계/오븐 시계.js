let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

let hour = parseInt(input[0].split(' ')[0]);
let minute = parseInt(input[0].split(' ')[1]);

let needTime = parseInt(input[1]);

let total = (hour) * 60 + minute + needTime;

if(total >= 1440) total = total - 1440;

hour = parseInt(total / 60);
minute = total % 60;

console.log(`${hour} ${minute}`);