// ex1) [2, 3]을 추출하기

const arr = [1, 2, 3, 4, 5];
console.log(arr.slice(1, 3)); // [2, 3]

// ex2) [3]부터 모두 추출

console.log(arr.slice(2));

// ex3) [2, 3, 4] 제거하기

arr.splice(1, 3);
console.log(arr);

// ex4) 복원하기

arr.splice(1, 0, 2, 3, 4);
console.log(arr);

// ex5) [3]부터 끝까지 제거하기

arr.splice(2, 3);
console.log(arr);

// ex6) 복원하기

arr.splice(2, 0, 3, 4, 5);
console.log(arr);

// ex7) [1, 2, 'X', 'Y', 'Z', 4, 5] 만들기

arr.splice(2, 1, "X", "Y", "Z");
console.log(arr);

// ex8) 7번 문제를 splice 없이 풀기

const arr2 = [1, 2, 3, 4, 5];

arr2.pop();
arr2.pop();
arr2.pop();
arr2.push("X", "Y", "Z", 4, 5);
console.log(arr2);
