// user 객체를 받아서 id와 name을 출력하는 함수를 작성하시오.

const user = { id: 1, name: "Hong", addr: { city: "Seoul" } };

function f1(obj) {
  console.log(obj.name);
}

function f2(obj) {
  console.log(obj.id, obj.name);
}

const hong = { id: 1, name: "Hong" };
const lee = { id: 2, name: "Lee" };

f1(hong);
f2(lee);

// 다음 user 객체에서 passwd 프로퍼티를 제외한 데이터를 userInfo라는 변수에 할당하시오.

const user2 = { id: 1, name: "Hong", passwd: "xxx", addr: "Seoul" };

const { passwd, ...userInfo } = user2;
console.log(userInfo);

// 다음 arr에서 3개의 id를 id1, id2, id3로 할당하시오.

const arr = [[{ id: 1 }], [{ id: 2 }, { id: 3 }]];

const [[{ id: id1 }], [{ id: id2 }, { id: id3 }]] = arr;

console.log(id1, id2, id3);
