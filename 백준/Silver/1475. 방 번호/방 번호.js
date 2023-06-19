let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let map = new Map();

for (let i = 0; i <= 9; i++) {
    map.set(i, 0);
}

for (let num of input) {
    map.set(Number(num), map.get(Number(num)) + 1);
}

if (map.get(6) > map.get(9)) map.set(6, Math.ceil((map.get(6) + map.get(9)) / 2));
else if (map.get(6) < map.get(9)) map.set(9, Math.ceil((map.get(6) + map.get(9)) / 2));

let arr = Array.from(map.values());

console.log(Math.max(...arr));

