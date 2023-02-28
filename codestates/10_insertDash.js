function insertDash(str) {
  // TODO: 여기에 코드를 작성합니다.

  let answer = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 0 || str[i] % 2 === 0) {
      // 짝수 또는 0인 경우
      answer.push(str[i]);
    } else {
      // 홀수인 경우
      if (str[i + 1] === 0 || str[i + 1] % 2 === 0) {
        answer.push(str[i]);
      } else {
        answer.push(str[i]);
        answer.push("-");
      }
    }
  }
  if (answer.includes("-")) {
    return answer.join("").slice(0, -1);
  } else return answer.join("");
}
