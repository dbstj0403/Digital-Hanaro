// 각 집합의 교집합, 차집합, 합집합을 구하는 함수를 작성하시오.

const A = [1, 2, 3, 4, 5, 3];
const B = [1, 22, 3, 44, 5];
const C = [11, 222, 3, 4, 555];

// 교집합 함수
const intersect = (a, b) => {
  const set1 = new Set(a);
  const set2 = new Set(b);
  const result = [...set1].filter((x) => (x = set2.has(x)));

  return result;
};

console.log(intersect(A, B));
console.log(intersect(A, C));

const diff = (a, b) => {
  const set1 = new Set(a);
  const set2 = new Set(b);
  const result = [...set1].filter((x) => (x = !set2.has(x)));

  return result;
};

console.log(diff(A, B));
console.log(diff(B, A));
console.log(diff(A, C));
console.log(diff(B, C));

const union = (a, b) => {
  const result = new Set([...a, ...b]);

  return [...result];
};

console.log(union(A, B));
console.log(union(A, C));
