function isIsogram(str) {
    // TODO: 여기에 코드를 작성합니다.
    // 문자열을 입력받아 아이소그램인지 여부를 리턴해야 합니다. 아이소그램(isogram)은 각 알파벳을 한번씩만 이용해서 만든 단어나 문구
    // 빈 문자열을 입력받은 경우, true를 리턴
    // 대소문자는 구별하지 않습니다.
    // 1. str.toLowerCase();
    // 2. str.length까지 for문
    // 3. 빈 객체에 str[i] 키 값이 없으면 추가, value = 1
    // 4. for문 한바퀴 돌기
    // 5. 만약 value 값이 2 이상인 키 값이 있다면 return false, 아니면 return true
  
    let answer = {};
    str = str.toLowerCase();
    for(let i = 0; i < str.length; i++) {
      if(answer[str[i]]) {
        return false;
      } 
        answer[str[i]] = true
    }
    return true;
  }
  