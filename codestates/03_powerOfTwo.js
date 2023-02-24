function powerOfTwo(num) {
  // TODO: 여기에 코드를 작성합니다.
  // 반복문(while)문을 사용
  // 2의 0승은 1
  // num을 2로 나누기 
  // 계속 나눈 num 값이 2 이면 true 아니면 false
  if(num === 1) {
    return true;
  }

  if (num % 2 !== 0) {
    return false;
  }

  while(num > 2) {
    num /= 2;
  }

  return num === 2;
}