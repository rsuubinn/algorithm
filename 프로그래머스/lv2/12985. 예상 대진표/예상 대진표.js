function solution(n, a ,b, count = 0) {
    // n = 게임 참가자 수
    // a = 참가자 번호
    // b = 경쟁자 번호
    if(a === b) return count;
    return solution(n, Math.ceil(a / 2), Math.ceil(b / 2), count += 1)
}