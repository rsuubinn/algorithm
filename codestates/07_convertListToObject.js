function convertListToObject(arr) {
    // TODO: 여기에 코드를 작성합니다.
    // 2차원 배열(배열을 요소로 갖는 배열)을 입력받아 각 배열을 이용해 만든 객체를 리턴
    // 중복되는 키의 경우, 초기의 값을 사용
    // 빈 배열을 입력받은 경우, 빈 객체를 리턴
    // arr[i]의 길이가 0인 경우, 무시
  
    // 1. arr 배열 길이만큼 for문 돌리기
    // 2. arr[i][0] => key 가 answer(객체) 안에 있는지? 있으면 패스, 없으면 추가
  
    let answer = {};
  
    for(let i = 0; i < arr.length; i++) {
      if(!(arr[i][0] in answer) && arr[i].length !== 0) {
        answer[arr[i][0]] = arr[i][1];
      }
    }
    
    return answer;
  }
  