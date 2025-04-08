### 😼 호이스팅

> **var의 경우**

```jsx
console.log(temp);
var temp = 2; // undefined
```

    <img width="319" alt="Image" src="https://github.com/user-attachments/assets/1c3df11f-bf16-42e6-974f-e354c4a96ec8" />

> **let의 경우**

```jsx
console.log(temp);
let temp = 2; // ReferenceError
```

    <img width="282" alt="Image" src="https://github.com/user-attachments/assets/262e3b9f-e2ce-415d-a9df-29d7e03d8ef1" />

> **const의 경우**

```jsx
console.log(temp);
const temp = 2; // ReferenceError
```

- const는 선언과 초기화가 한번에 되어야 한다.
  <img width="303" alt="Image" src="https://github.com/user-attachments/assets/126f68e0-5863-4d4f-9fb1-9d5905c88311" />

<aside>
🦈

**함수 호이스팅**

</aside>

- 함수 선언문이 코드에서 호출되는 위치보다 앞쪽으로 끌어올려진 것처럼 동작하는 것.

```jsx
console.log(add(2, 3));

function add(x, y) {
  var result = x + y;
  return result;
}
```

1. 생성 단계
   1. 변수와 함수 선언을 메모리에 할당한다.
   2. **`함수와 변수의 초기값 설정`** → 함수 선언문은 호이스팅되므로, 해당 함수의 선언부를 코드 상단으로 끌어올리고 메모리에 할당 → 코드가 실행되기 전 이미 함수가 메모리에 로드되어 있다는 의미이다.
2. 실행 단계
   1. add(2, 3)을 호출하게 되면 함수 실제로 실행
   2. **`호이스팅에 의한 함수 위치 이동`** → 이미 생성 단계에서 메모리에 로드되었기 때문에, add 함수는 코드에서 호출되기 전에 선언된 것처럼 동작한다.

**😵‍💫 리터럴로 선언하는 경우**

```jsx
console.log(add(2, 3));

var add = function(x, y) {
	var result = x + y;
	return result;
]
```

- **`var로 선언된 변수는 호이스팅되지만, 변수의 값인 함수는 호이스팅되지 않음 → add라는 변수가 먼저 선언되나 add가 함수로 할당되는 부분은 호이스팅되지 않으므로 오류가 발생한다!`**

### 🧏🏻‍♀️ Strict mode

- 자바스크립트에서 코드를 안전하고 예측 가능하게 만들기 위해 제공되는 엄격한 실행 모드
- ES5에서 처음 도입되었으며, 기존의 자바스크립트 언어의 일부 유연한 동작을 제한하여 더 나은 오류 방지 및 코드 품질을 유지한다.
