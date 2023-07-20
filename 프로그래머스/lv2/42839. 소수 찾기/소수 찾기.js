function solution(numbers) {
    return [...new Set(getPer(numbers))].filter(v => isPrimeNumber(v)).length;
}

const getPer = (str) => {
    const answer = [];
    const n = str.length;
    let ch = Array.from({ length: n }, () => 0);
    
    const dfs = (curStr) => {
        answer.push(+curStr);
        for (let i = 0; i < n; i++) {
            if (ch[i] === 0) {
                ch[i] = 1;
                dfs(curStr + str[i]);
                ch[i] = 0;
            }
        }
    }
    dfs('');
    answer.shift();
    return answer;
}

function isPrimeNumber(number) {
    if (number === 0 || number === 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}