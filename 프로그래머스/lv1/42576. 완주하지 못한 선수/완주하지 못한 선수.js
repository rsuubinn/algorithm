function solution(participant, completion) {
    const map = new Map();
    
    for(const player of participant){
        if(map.get(player) === undefined) map.set(player, 0);
        map.set(player, map.get(player) + 1);
    }
    
    for(const player of completion){
        map.set(player, map.get(player)  - 1);
    }
    
    for(const [player, count] of map) {
        if(count === 1) return player;
    }
}