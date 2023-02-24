function ABCheck(str) {
    // 대소문자를 구분하지 않습니다.
    // 공백도 한 글자로 취급
    // 'a' 와 'b'는 중복해서 등장할 수 있음
  
    // 1. str 소문자로 변경
    // 2. 문자열 안에 'a' 또는 'b'가 없는 경우 false 리턴
    // 3. 
    str = str.toLowerCase();
    
    for(let i = 4; i < str.length; i++) {
      if((str[i] === 'a' && str[i - 4] === 'b')|| (str[i] === 'b' && str[i - 4] === 'a')) {
        return true;
      }
    }
    return false;
  }
  