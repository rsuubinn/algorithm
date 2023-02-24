function firstCharacter(str) {
    // TODO: 여기에 코드를 작성합니다.
    // 단어는 공백 한 칸으로 구분
    // 빈 문자열을 입력받은 경우, 빈 문자열을 리턴
  
    if(str.length === 0) return ''; // 빈 문자열을 입력받은 경우, 빈 문자열을 리턴
    return str.split(" ").map((x) => x[0]).join('');
  }
  