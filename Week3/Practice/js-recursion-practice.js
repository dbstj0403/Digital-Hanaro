// 1 ~ n까지의 원소로 이루어진 배열을 만드는 함수를 "재귀함수"로 작성하라.
// TCO : 꼬리 호출 재귀
// array 메소드 말고, 비구조화 할당을 이용하라.

const makeArrayTCO = (n, arr = []) => {
  if (n === 0) {
    return arr;
  }
  return makeArrayTCO(n - 1, [n, ...arr]);
};

console.log(makeArrayTCO(10));
