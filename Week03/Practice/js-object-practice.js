const arr = [100, 200, 300, 400, 500, 600, 700];

// for in 문을 사용하여 배열의 인덱스 출력
for (var i in arr) {
  console.log(i);
}

// for of 문을 사용하여 배열의 요소 출력
for (var i of arr) {
  console.log(i);
}

const obj = { name: "Kim", addr: "Yongsan", level: 1, role: 9, receive: false };

// for in 문을 사용하여 프로퍼티 이름 출력

for (var i in obj) {
  console.log(i);
}

// for in 문을 사용하여 프로퍼티 값 출력

for (var i in obj) {
  console.log(obj[i]);
}

// for of 문을 사용하여 프로퍼티 값 출력

for (var i of Object.values(obj)) {
  console.log(i);
}

// 배열 -> 객체

const data = [
  ["A", 10, 20],
  ["B", 30, 40],
  ["C", 50, 60, 70],
];

const makeObjectFromArray = (arr) => {
  const result = {};
  for (const [key, ...rest] of arr) {
    result[key] = rest;
  }
  return result;
};

console.log(makeObjectFromArray(data));

var temp = makeObjectFromArray(data);

function makeArrayFromObject(obj) {
  return Object.entries(obj).map(([key, values]) => [key, ...values]);
}

console.log(makeArrayFromObject(temp));
