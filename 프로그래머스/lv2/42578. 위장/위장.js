function solution(clothes) {
    const map = new Map();
    for(const [_, kind] of clothes){
        if(map.get(kind) === undefined) map.set(kind, 0)
        map.set(kind, map.get(kind) + 1);
    }
    return [...map.values()].reduce((acc, cur) => acc * (cur + 1), 1) - 1;
    
}