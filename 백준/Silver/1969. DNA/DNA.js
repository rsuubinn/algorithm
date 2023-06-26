/*
 DNA는 서로 다른 4가지의 뉴클레오티드로 이루어져 있다(Adenine, Thymine, Guanine, Cytosine). 
 Hamming Distance란 길이가 같은 두 DNA가 있을 때, 각 위치의 뉴클오티드 문자가 다른 것의 개수이다.
 사전순으로 가장 앞서는 것을 출력한다.
*/

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);

let dna = '';
let hd = 0;

for (let i = 0; i < M; i++) {
    let map = new Map([['A', 0], ['T', 0], ['G', 0], ['C', 0]]);
    for (let j = 0; j < N; j++) {
        map.set(input[j][i], map.get(input[j][i]) + 1);
    }
    let max = 0;
    let char = '';
    map.forEach((value, key) => {
        if (value > max) {
            max = value;
            char = key;
        } else if (value === max && char !== '') {
            char = char.charCodeAt() < key.charCodeAt() ? char : key;
        }
    });
    dna += char;
    hd += N - max;
}

console.log(dna);
console.log(hd);