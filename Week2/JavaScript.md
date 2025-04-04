### 🐤 변수와 타입

- **`변수 선언과 중복 선언`**
    <img width="241" alt="Image" src="https://github.com/user-attachments/assets/ba368c5d-3612-4dbe-bb28-0479509133e2" />

- **var 문을 사용하여 같은 이름을 가진 변수를 여러 개 선언하더라도 문제가 발생하지 않는다.**
  - 같은 이름으로 선언된 변수는 모두 끌어올린 후에 단 하나의 영역에만 할당한다.
- **`변수의 명명 규칙`**
  - 식별자 → 변수, 함수, 라벨 이름 등 사용자가 정의하는 이름.
  - 사용할 수 있는 문자 → 알파벳, 숫자, 밑줄, 달러 기호
  - **첫글자로 숫자를 사용할 수 없다!**
  - 예약어 제외
  - 유니코드 문자

> \*\*✍🏻 표기법

- camelCase : newName
- PascalCase : UserProfile
- snake_case : my_variable
- kebab-case : my-variable
- SCREAMING_SNAKE_CASE : MAX_LIMIT\*\*

  >

- **`데이터 타입`**

  - 변수에 저장되는 데이터 종류

    ![Image](https://github.com/user-attachments/assets/d66e4e39-7cdc-4222-b3c3-4345d635c689)

  - **정적 타입 언어** → 변수의 타입과 일치하는 데이터만 저장할 수 있다. (C, JAVA)
  - **동적 타입 언어** → 숫자나 문자열 같은 다양한 타입의 데이터를 대입할 수 있다. (JavaScript, Python, Ruby)
  - **`undefined`**
    - 아직 값을 할당하지 않은 변수의 값
    - 없는 객체의 프로퍼티 읽으려고 시도했을 때의 값
    - 아무것도 반환하지 않는 함수가 반환하는 값
  - **`null`**
    - 아무것도 없음을 값으로 표현한 리터럴

<aside>

<strong>🍉 심볼<strong>

</aside>

- **자기 자신을 제외한 그 어떤 값과도 다른 유일무이한 값.**
- Symbol()을 호출하면 절대 중복되지 않는 값을 생성할 수 있다.

```jsx
const sym1 = Symbol();
const sym2 = Symbol();

console.log(sym1 === sym2); // false (항상 고유)
```

- **`심볼을 객체 키로 사용하기`**
  ```jsx
  const user = {};
  const id = Symbol("id"); // 설명(description) 추가 가능

  user[id] = 12345;

  console.log(user[id]); // 12345
  console.log(Object.keys(user)); // [] → 일반 키 목록에 안 나옴
  ```
  - 다른 코드에서 실수로 덮어쓰는 것 방지
  - 일반적인 키 확인용 함수로는 확인 불가. 😤
- **`Symbol.for()`**
    <img width="282" alt="Image" src="https://github.com/user-attachments/assets/7f8a5b29-4347-4805-9cd4-8e7a1d3ed78f" />

<aside>

🎂 <strong>템플릿 리터럴<strong>

</aside>

- 표현식의 값을 문자열에 추가하거나 여러 줄의 문자열을 표현할 수 있다.
  - 역따옴표 `로 묶은 문자열.
  ```jsx
  var a = `today is a gift.`;
  ```

<aside>

➡️ <strong>보간 표현식<strong>

</aside>

- 템플릿 리터럴 안에 **`${…}`** 추가
  - 자바스크립트 엔진은 … 부분을 표현식으로 간주하여 평가하므로, 문자열 안에 변수나 표현식의 결과값을 삽입할 수 있다.
  ```jsx
  var a = 2;
  var b = 3;
  console.log(`${a} + ${b}`);
  ```

<aside>

🖤 <strong>객체<strong>

</aside>

- 자바스크립트에서 원시 타입을 제외한 모든 값.
- 객체는 객체 리터럴과 생성자로 생성할 수 있다.
- 여러 개의 데이터를 하나로 모은 복합 데이터
    <img width="321" alt="Image" src="https://github.com/user-attachments/assets/ed80f875-7c61-4af1-a981-87d7a07a436d" />

- **`객체 리터럴로 객체 생성하기`**
  ```jsx
  var card = { suit: "heart", rank: "A" };
  ```
- **`프로퍼티 추가 및 삭제`**
    <img width="335" alt="Image" src="https://github.com/user-attachments/assets/c2c9e2b0-158b-4140-866c-e71d96cf13a3" />

### 🌸 함수

- **`함수`**
  - 특정 작업을 수행하는 코드 블록
  - 코드의 재사용성/가독성을 높일 수 있다.
- **`함수 선언문으로 정의하기`**
  ```jsx
  function square(x) {
    return x * x;
  }
  ```
- `argument`
  - 함수는 인수를 여러 개 받을 수 있다.
  - 인수가 여러 개인 경우 , 로 구분.
    - 인수가 없는 함수도 정의할 수 있다!

> **함수 선언문의 끌어올림**

- 자바스크립트 엔진은 변수 선언문과 마찬가지로 함수 선언문을 프로그램의 첫머리로 끌어올린다.
  ```jsx
  console.log(squar(5));
  function square(x) {
    return x * x;
  }
  ```

> **값으로서의 함수**

- 함수 선언문으로 함수를 선언하면 내부적으로는 함수 이름을 변수 이름으로 한 변수와 함수 객체가 만들어진다.
    <img width="303" alt="Image" src="https://github.com/user-attachments/assets/2deca894-5cec-44ff-abc3-89f850cec3bd" />


> **변수의 유효 범위**

- **`함수 안에서의 변수 선언과 변수 끌어올림`**
  - 함수 안에서 선언된 지역 변수의 유효 범위는 함수 전체이다.
      <img width="324" alt="Image" src="https://github.com/user-attachments/assets/17627ec1-181f-433f-8954-334e81990c1c" />

- **`함수 안에서의 변수 선언 생략`**
  - 변수를 선언하지 않은 상태에서 값을 대입하면 전역 변수로 선언된다.
      <img width="218" alt="Image" src="https://github.com/user-attachments/assets/02d40234-4f9f-4356-b0e3-818793476269" />

- **`메소드`**

  - 객체의 프로퍼티 값이 함수 객체인 경우
      <img width="330" alt="Image" src="https://github.com/user-attachments/assets/1aab593c-de87-48e5-9993-bce8fee7231a" />

- **`in 연산자`**
  - 객체에 특정 프로퍼티가 있는지 확인한다.
    ```jsx
    console.log("suit" in card); // true
    ```
- **`참조 타입`**
    <img width="181" alt="Image" src="https://github.com/user-attachments/assets/93968406-870f-432f-bc2c-1b8843456277" />

### 🐹 let, const, var

<aside>
✅ <strong>var<strong>

</aside>

| **Scope**         | 함수 스코프. 블록 {} 안에서 선언해도 함수 전체에서 접근 가능하다. |
| ----------------- | ----------------------------------------------------------------- |
| **재선언/재할당** | 둘 다 가능                                                        |
| **호이스팅**      | 변수 선언이 코드의 맨 위로 끌어올려진다. (초기값은 undefined)     |

```jsx
function example() {
  console.log(x); // undefined
  var x = 10;
  console.log(x); // 10
}
```

<aside>
⚙ <strong>let<strong>

</aside>

| **Scope**         | 블록 스코프. {} 안에서 선언되면 그 블록 내부에서만 사용 가능하다. |
| ----------------- | ----------------------------------------------------------------- |
| **재선언/재할당** | 재선언 불가, 재할당 가능                                          |
| **호이스팅**      | 호이스팅은 되지만 초기화 전에는 사용 불가. (Temporal Dead Zone)   |

```jsx
let x = 1;
x = 2; // OK
let x = 3; // ❌ Error: Already declared

{
  let y = 10;
}
console.log(y); // ❌ Error: y is not defined
```

<aside>
🛸<strong>const<strong>

</aside>

| **Scope**         | 블록 스코프. {} 안에서 선언되면 그 블록 내부에서만 사용 가능하다. |
| ----------------- | ----------------------------------------------------------------- |
| **재선언/재할당** | 재선언, 재할당 불가                                               |
| **호이스팅**      | 호이스팅은 되지만 사용 불가. (let과 동일)                         |

```jsx
const a = 5;
a = 10; // ❌ Error: Assignment to constant variable

const obj = { name: "Tom" };
obj.name = "Jerry"; // ✅ 객체 속성은 바꿀 수 있음
```

> **👋🏻 요즘은 var는 거의 안 쓰고, let과 const만 사용하는 것이 일반적이다! 기본적으로는 const, 나중에 값이 바뀌어야 할 때만 let 사용 권장.**

### 🌿 연산자

- **`Math 객체`**
  - 기본적인 산술 연산과 복잡한 수학적 연산을 지원한다.
    ```jsx
    Math.sin, Math.PI;
    ```
- **`문자열 연결`**
  - 피연산자가 모두 문자열이면 문자열로 연결
    ```jsx
    console.log("Hello " + "World!");
    ```
  - 피연산자 중 하나가 문자열 또는 문자열로 변환 가능한 객체라면 문자열로 바꾼 다음 연결된다.
- **`String 객체의 주요 메소드`**
    <img width="182" alt="Image" src="https://github.com/user-attachments/assets/a405d17b-575b-405c-971e-b88610941aa9" />

- **`문자열을 배열로 읽고 쓰기`**
  - 문자열을 읽을 때 [] 연산자 사용 가능.
  - 값을 대입해서 수정할 수는 없다! ❌
    ```jsx
    console.log(msg[3]);
    ```
- **`typeof`**
  ```jsx
  console.log(typeof 12);
  ```
- **`== vs ===`**
  - == → 값 비교
  - === → 값, 타입 모두 비교

> **조건 연산자**

- 주어진 조건의 참과 거짓에 따라 값을 선택하다.
  ```jsx
  var parity = a % 2 == 0 ? "짝수" : "홀수";
  ```

> **eval 함수**

- 문자열을 인수로 받아서 자바스크립트 코드로 해석한다.
- 코드를 평가한 후에 마지막 표현식 또는 문장의 값을 반환한다.

<img width="308" alt="Image" src="https://github.com/user-attachments/assets/9083cbe9-cf11-47fc-a907-43fab28d4d72" />

<aside>
🍅 <strong>논리 연산시 주의할 점!<strong>

</aside>

| 피연산자                                                  | 평가되는 값 |
| --------------------------------------------------------- | ----------- |
| 0, -0, 빈 문자열, NaN, null, undefined                    | false       |
| 0을 제외한 숫자, 빈 문자열이 아닌 문자열, 모든 객체, 심볼 | true        |

```jsx
var p = null;
console.log(p && p.name); // 이미 앞의 p가 false이므로 뒤는 보지 않고 false
p = { name: "canan", age: 30 };
console.log(p && p.name); // p가 true로 평가되므로 p.name 반환
```

### 🧟 명시적 타입 변환

> **숫자를 문자열로 변환하기**

- **`숫자 + 문자열` → 얘는 명시적 변환은 아님..! (암묵적)**
  ```jsx
  console.log(("0000" + 12).slice(-3)); // "012"
  ```
- **`String 함수 사용`**
  ```jsx
  console.log(String(26)); // "26"
  ```
- **`Number 객체의 메소드 사용`**
  ```jsx
  var n = 16;
  console.log(n.toString()); // "26"
  ```

> **문자열을 숫자로 변환하기**

- **`수식 안에서 묵시적 변환`**
  ```jsx
  var s = "2";
  console.log(s - 1); // 1
  ```
- **`Number 함수 활용`**
  ```jsx
  console.log(Number("3.123"));
  ```
- **`parseInt/parseFloat 함수 활용`**
  ```jsx
  console.log(parseInt("3.14")); // 3
  console.log(parseFloat("3.14")); // 3.14
  ```

### 🧶 제어문

> **조건문**

**🔹 if / else if / else**

- 조건에 따라 다른 코드를 실행할 때 사용

```jsx
javascript;
복사편집;
if (조건) {
  // 조건이 참일 때 실행
} else if (다른조건) {
  // 이전 조건이 거짓이고, 이 조건이 참이면 실행
} else {
  // 모든 조건이 거짓일 때 실행
}
```

**🔹 switch**

- 값에 따라 분기 처리 (여러 if보다 가독성 좋을 때 사용)

```jsx
switch (값) {
  case 값1:
    // 값이 값1일 때 실행
    break;
  case 값2:
    // 값이 값2일 때 실행
    break;
  default:
  // 어떤 case와도 일치하지 않을 때 실행
}
```

---

> **🔁 반복문**

**🔹 for**

- 반복 횟수가 명확할 때 사용

```jsx
for (초기값; 조건; 증감) {
  // 조건이 참일 동안 반복
}
```

**🔹 while**

- 조건이 참인 동안 반복 (횟수가 불명확할 때)

```jsx
while (조건) {
  // 조건이 참이면 반복
}
```

**🔹 do...while**

- 무조건 한 번 실행 후 조건 검사

```jsx
do {
  // 최소 1번 실행
} while (조건);
```

---

> **🔄 반복 제어**

**🔹 break**

- 반복문을 즉시 종료

**🔹 continue**

- 현재 반복만 건너뛰고 다음 반복으로 진행

```jsx
for (let i = 0; i < 5; i++) {
  if (i === 2) continue; // i=2 건너뜀
  if (i === 4) break; // i=4에서 반복 종료
  console.log(i);
}
// 출력: 0, 1, 3
```

---

> **🔍 반복 가능한 객체 순회**

**🔹 for...of**

- 배열 등 이터러블 객체의 값을 순회

```jsx
for (const item of 배열) {
  console.log(item);
}
```

**🔹 for...in**

- 객체의 키를 순회

```jsx
for (const key in 객체) {
  console.log(key, 객체[key]);
}
```

---

> **🎯 한눈에 보기**

| 제어문 종류  | 설명                  |
| ------------ | --------------------- |
| `if / else`  | 조건에 따라 분기 실행 |
| `switch`     | 여러 값 중 선택 실행  |
| `for`        | 횟수 기반 반복        |
| `while`      | 조건 기반 반복        |
| `do...while` | 최소 1번 실행 반복    |
| `break`      | 반복문 즉시 종료      |
| `continue`   | 현재 반복만 건너뛰기  |
| `for...of`   | 배열/이터러블 값 순회 |
| `for...in`   | 객체의 키(key) 순회   |
