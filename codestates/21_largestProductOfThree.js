const largestProductOfThree = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  // 정수를 요소로 갖는 배열을 입력받아 3개의 요소를 곱해 나올 수 있는 최대값을 리턴
  // 배열의 요소는 음수와 0을 포함하는 정수
  // 1. 오름차순으로 정렬
  let sorted = arr.sort((a, b) => a - b)
  let len = sorted.length;
  let candi1 = sorted[len - 1] * sorted[len - 2] * sorted[len - 3];
  let candi2 = sorted[0] * sorted[1] * sorted[len - 1];

  return Math.max(candi1, candi2);
};
