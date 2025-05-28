const total = { price: 45000, vat: 4500 };

const fmt = (strings, ...values) => {
  return strings.reduce((result, str, i) => {
    const val = values[i] !== undefined ? values[i].toLocaleString() : "";
    return result + str + val;
  }, "");
};

console.log(fmt`주문합계: ${total.price}원`); // 주문합계: 45,000원
console.log(fmt`세액합계: ${total.vat}원`); // 세액합계: 4,500원

// 문자열이 한글 자음으로 끝나는지 체크하는 함수를 작성하시오.

function isEndJaum(text) {
  text = text.trim();
  const lastChar = text.charAt(text.length - 1);
  const code = lastChar.charCodeAt(0);

  // 한글 완성형
  if (code >= 0xac00 && code <= 0xd7a3) {
    const jongseongIndex = (code - 0xac00) % 28;
    return jongseongIndex !== 0;
  }

  // 숫자 또는 영문자는 받침 없음으로 간주
  if (/[a-zA-Z0-9]/.test(lastChar)) {
    return false;
  }

  // 이모지, 기호 등 기타 문자 → 보수적으로 받침 있음으로 간주
  return true;
}

console.log(
  isEndJaum("강원도"),
  isEndJaum("바라당"),
  isEndJaum("ㅜㅜ"),
  isEndJaum("케잌"),
  isEndJaum("점수 A"),
  isEndJaum("24")
);

function formatPhoneNumber(number) {
  // 숫자만 추출
  const digits = number.replace(/\D/g, "");

  // 휴대폰 번호 (010, 011, 016, 017, 018, 019)
  if (/^01[016789]\d{7,8}$/.test(digits)) {
    return digits.replace(/(\d{3})(\d{3,4})(\d{4})/, "$1-$2-$3");
  }

  // 서울 지역번호 (02)
  if (/^02\d{7,8}$/.test(digits)) {
    return digits.replace(/(02)(\d{3,4})(\d{4})/, "$1-$2-$3");
  }

  // 일반 지역번호 (031, 051, ...)
  if (/^0\d{2}\d{7,8}$/.test(digits)) {
    return digits.replace(/(\d{3})(\d{3,4})(\d{4})/, "$1-$2-$3");
  }

  // fallback
  return number;
}

console.log(formatPhoneNumber("01012345678")); // 010-1234-5678
console.log(formatPhoneNumber("021234567")); // 02-123-4567
console.log(formatPhoneNumber("0311234567")); // 031-123-4567
console.log(formatPhoneNumber("010-1234-5678")); // 010-1234-5678
console.log(formatPhoneNumber("15991234")); // 15991234 (변형 안 함)
