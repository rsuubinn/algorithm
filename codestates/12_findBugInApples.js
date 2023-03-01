function findBugInApples(arr) {
  // TODO: 여기에 코드를 작성합니다.
  // 'B'의 위치 정보(행, 열)를 요소로 갖는 배열을 리턴
  // 항상 한 개의 문자열 'B'가 존재
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === "B") {
        answer.push(i);
        answer.push(j);
      }
    }
  }
  return answer;
}
