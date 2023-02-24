function decryptCaesarCipher(str, secret) {
    // TODO: 여기에 코드를 작성합니다.
    // 암호화된 문자열과 암호화 키를 입력받아 복호화된 문자열을 리턴
    // 빈 문자열을 입력받은 경우, 빈 문자열을 리턴
    // 1. 알파벳 문자열 만들기
    // 2. str.length 만큼 for문
    // 3. str[i]를 알파벳 index 찾기 - secret (만약 str[i]가 공백이면 공백으로)
    // 4. index < 0 ? index = index + 알파벳.lenght;
    // 5. answer = answer + str[i];
    // 6. answer return 하기
  
    if(str.length === 0) return '';
  
    let answer = '';
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for(let i = 0; i < str.length; i++) {
      if(str[i] === ' ') answer = answer + ' '; // 공백일 경우
      else {
        let index = alphabet.indexOf(str[i]) - secret;
        if(index < 0) index = index + alphabet.length;
        answer = answer + alphabet[index];
      }
    }
    return answer;
    
  }
  