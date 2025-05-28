// for 문을 이용하여 0.1 부터 1까지 정확한 숫자 출력하기

for (let i = 0.1; i < 1; i = i + 0.1) {
  console.log(i.toFixed(1));
}

// 1 ~ 10 사이의 정수에 대해 제곱근을 소숫점 3자리까지 출력하기

for (let i = 1; i <= 10; i = i + 1) {
  console.log(i, Math.sqrt(i).toFixed(3));
}

// 오늘 날짜의 요일을 출력하는 프로그램 작성하기

const today = new Date();
const day = today.getDay(); // 요일 번호 반환함수 일: 0 ~ 토: 6
const WEEK_NAMES = [
  "일요일",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
];

console.log(`오늘은 ${WEEK_NAMES[day]}입니다.`);

// 올바른 더하기 연산을 하는 addPoints 함수를 작성하기

function addPoints(a, b) {
  const aDemical = (a.toString().split(".")[1] || "").length;
  const bDemical = (b.toString().split(".")[1] || "").length;

  const maxDemical = Math.max(aDemical, bDemical);

  return (a + b).toFixed(maxDemical);
}

console.log(addPoints(0.14, 0.28));
