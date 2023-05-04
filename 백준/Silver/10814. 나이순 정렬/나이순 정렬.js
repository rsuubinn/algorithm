let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

input.shift();

input.sort((a, b) => parseInt(a) - parseInt(b));

input.map(x => console.log(`${x}`));