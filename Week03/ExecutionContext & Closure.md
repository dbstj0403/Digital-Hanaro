### 🔎 스코프와 실행 컨텍스트

> **자바스크립트 프로그램 실행 과정**

- **`코드를 평가`** : execution context를 생성하고, 선언문만 실행하면서 변수나 함수 등 식별자를 lexical environment에 등록한다.
- **`코드를 순차적으로 실행하는 런타임`** : 필요한 정보를 lexical environment에서 가져오고, 실행 결과를 등록한다.

**📍 실행 컨텍스트 = 자바스크립트 실행 공간**

> **자바스크립트가 코드를 실행할 때 만들어내는 일종의 작업 공간.**

| 구성요소             | 역할               | 비유           |
| -------------------- | ------------------ | -------------- |
| Variable Environment | 변수 저장소        | 물건 넣는 창고 |
| Lexical Environment  | 함수/스코프 저장소 | 위치별 정리함  |
| This Binding         | this 값 저장       | 주인 정보      |

```jsx
1. 코드 실행시 -> 실행 컨텍스트 생성
2. 선언문(var, let, const, function etc) 먼저 등록 (Lexical Environment에 저장)
3. 실제 코드 실행 시작
4. 값 할당 (Variable Environment에 값 저장)
5. this도 상황에 따라 저장
```

<img width="319" alt="Image" src="https://github.com/user-attachments/assets/6b918d55-f630-462c-bea0-89a064631fe1" />

### 🚰 가비지 컬렉션

- 프로그램에서 객체를 생성하면 메모리 공간을 동적으로 확보한다.
- **사용하지 않는 객체의 메모리 영역은 가비지 컬렉터가 자동으로 해제**
  - 사용 X 객체 → 다른 객체의 프로퍼티와 변수가 참조하지 않는 객체.

### 💊 클로저

> **클로저는 “함수가 선언될 때의 렉시컬 환경을 기억해서, 외부 함수의 변수에 접근할 수 있는 내부 함수”**

- 원래 함수가 끝나면 그 안의 변수들은 사라지지만, 그 내부 함수가 그 변수를 계속 참조하면 메모리에 남아있다. 이를 클로저라고 부른다!

**🧸 Example**

```jsx
function outer() {
  let count = 0; // 외부 함수의 지역 변수

  function inner() {
    count++; // 외부 변수 사용
    console.log(count);
  }

  return inner; // 내부 함수 반환
}

const closureFunc = outer(); // outer 실행 -> inner 반환됨

closureFunc(); // 1
closureFunc(); // 2
closureFunc(); // 3
```

- `outer` 함수는 끝났는데도 `count`가 사라지지 않는다.
- 왜냐면 `inner` 함수가 `count`를 참조하고 있기 때문!
- 그래서 `closureFunc()` 호출할 때마다 `count`가 유지되는 것.
- 값 은닉, 상태 저장(함수 호출시 이전값 기억), 콜백, 이벤트 핸들러 등에 사용된다.
