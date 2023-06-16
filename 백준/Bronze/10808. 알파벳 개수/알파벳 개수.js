let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let map = new Map();

for (let i = 97; i <= 122; i++) {
    map.set(i, 0);
}

for (let i = 0; i < input.length; i++) {
    let ascii = input[i].charCodeAt();

    if (map.has(ascii)) map.set(ascii, map.get(ascii) + 1);
}

let answer = Array.from(map.values());

console.log(answer.join(" "));