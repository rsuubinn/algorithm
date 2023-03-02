function superIncreasing(arr) {
  // TODO: 여기에 코드를 작성합니다.
  // 1. arr.length 까지 for문
  // 2. sum = arr[0];
  // 3. 만약 sum > arr[i] 이면 return false;

  let sum = arr[0];
  for(let i = 1; i < arr.length; i++) {
    if(sum >= arr[i]) return false;
    sum = sum + arr[i];
  }
  return true;
}
