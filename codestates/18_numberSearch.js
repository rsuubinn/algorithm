function numberSearch(str) {
    // TODO: 여기에 코드를 작성합니다.
    // 문자열을 입력받아 문자열에서 숫자를 모두 찾아 더한 뒤
    // 해당 값을 (숫자와 공백을 제외한 나머지) 문자열의 길이로 나눈 값을 정수로 반올림하여 리턴
    // 빈 문자열을 입력받은 경우, 0을 리턴
  
    if(str.length === 0) return 0; // 빈 문자열을 입력받은 경우, 0을 리턴
  
    const digit = '0123456789';
    let sum = 0;
    let onlyStr = '';
    for(let i = 0; i < str.length; i++) {
      if(digit.includes(str[i])) sum = sum + Number(str[i]);
      else if (str[i] !== ' ') onlyStr = onlyStr + str[i];
    }
  
    return Math.round(sum / onlyStr.length);
  }
  