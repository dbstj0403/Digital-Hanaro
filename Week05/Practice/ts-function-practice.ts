const sayHi = (name?: string): string => {
  if (name != undefined) {
    return `안녕하세요 ${name}`;
  } else {
    return `입력된 이름이 없음`;
  }
};

console.log(sayHi("코난"));
console.log(sayHi());

const count = (num: string | number): number => {
  if (typeof num === "number") {
    const str = String(num);
    return str.length;
  }
  const len = num.length;
  return len;
};

console.log(count(123));
console.log(count("1234"));

const str2num = (arr: (string | number)[]): number[] => {
  const result: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (typeof item === "string") {
      result.push(parseInt(item));
    } else {
      result.push(item);
    }
  }

  return result;
};

console.log(str2num([1, 2, 3, "45"]));

let conan = { hobby: ["탐정놀이", "축구", "추리소설 읽기"] };
let ran = { hobby: ["태권도", "요리"] };
let kid = { hobby: "마술" };

type Hobby = {
  hobby: string | string[];
};
const lastHobby = (hb: Hobby): string => {
  if (typeof hb.hobby === "string") {
    return hb.hobby;
  } else {
    return hb.hobby[hb.hobby.length - 1];
  }
};

console.log(lastHobby(conan));
console.log(lastHobby(ran));
console.log(lastHobby(kid));
