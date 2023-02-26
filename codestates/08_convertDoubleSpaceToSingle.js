function convertDoubleSpaceToSingle(str) {
  // TODO: 여기에 코드를 작성합니다.
  // 문자열을 입력받아 해당 문자열에 등장하는 두 칸의 공백을 모두 한 칸의 공백으로 바꾼 문자열을 리턴
  // replace 는 첫번째 발견한 문자만 치환

  return str.replace(/  /g, " ");
}
