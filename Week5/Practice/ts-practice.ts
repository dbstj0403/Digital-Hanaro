// 문자열을 입력하면 맨 앞의 0을 제거하고 문자열 타입으로 반환하는 함수
const removeZero = (str: string): string => {
  let i = 0;
  while (i < str.length && str[i] === "0") {
    i++;
  }
  return str.slice(i);
};

console.log(removeZero("00fasadfdf00"));

// 문자열을 입력하면 대시 기호를 전부 제거하고 문자열 타입으로 반환하는 함수
const removeDash = (str: string): string => {
  let i = 0;
  const len = str.length;
  for (i; i < len; i++) {
    let c = str.charAt(i);
    if (c === "-") {
      str = str.replace("-", "");
    }
  }

  return str;
};

console.log(removeDash("010-2222-3333"));

// 문자열을 입력하면 대시 기호를 전부 제거하고 숫자 타입으로 반환하는 함수
const removeDash2Number = (str: string): number => {
  let i = 0;
  const len = str.length;
  for (i; i < len; i++) {
    let c = str.charAt(i);
    if (c === "-") {
      str = str.replace("-", "");
    }
  }

  const num = Number(str);
  return num;
};

console.log(removeDash2Number("010-2222-3333"));

type MyType = {
  size: number;
  readonly position: number[]; // 읽기만 가능
  color?: string | undefined;
};
