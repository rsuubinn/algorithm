let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const testCase = Number(input[0]);

for(let i = 1; i <= testCase; i++) {
    let arr = input[i].split('');
    let stack = [];
    for(let j = 0; j < arr.length; j++) {
        if(arr[j] === '(') stack.push('(');
        else if(arr[j] === ')') {
            if(stack[stack.length - 1] === '(') stack.pop();
            else stack.push(')');
        }
    }
    if(stack.length === 0) console.log("YES");
    else console.log("NO");
}