### 🍒 함수

- 프로그램 코드들을 저장한 공간.
  - 처리 작업을 하나로 모아 이름을 지정하고 싶을 때
  - 처리 작업을 반복하여 사용하고 싶을 때
  ```jsx
  function [function name](argument1, argument2) {
  	return [return value];
  }
  ```

> **함수 정의하기**

1. 함수 선언문으로 정의
   1. **`function square(x) {return x * x;}`**
2. 함수 리터럴로 정의 (익명함수)
   1. **`var square = function(x) {return x * x;}`**
3. Function 생성자로 정의
   1. **`var square = new Function("x", "return x * x");`**
4. 화살표 함수 표현식으로 정의
   1. **`var square = x => x * x;`**

> **화살표 함수**

- 함수를 간략하게 정의하고 싶을 때 사용한다.

| 매개변수      | 표기        | 내용           |
| ------------- | ----------- | -------------- |
| 없을 때       | () ⇒ {}     | 괄호만 사용    |
| 1개일 때      | x ⇒ {}      | 괄호 생략 가능 |
| 2개 이상일 때 | (x, y) ⇒ {} | 함수와 동일    |

| 코드의 줄 수  | 표기                                                   | 내용        |
| ------------- | ------------------------------------------------------ | ----------- |
| 2줄 이상일 때 | x ⇒ {let r = x + x; return r;}                         | 함수와 동일 |
| 1줄일 때      | x ⇒ {x + x;}                                           |
| x ⇒ x + x;    | return 이 없어도 자동으로 결과 반환 / 중괄호 생략 가능 |

> **파라미터 초깃값 설정하기**

```jsx
function A(파라미터1, 파라미터2 = 초깃값2) {}
```

- 함수 호출시 파라미터2는 생략 가능하다.

<aside>
🤩 <strong>나머지 매개변수<strong>

</aside>

- 임의의 파라미터를 가지는 함수를 정의하고 싶을 때!

```jsx
function sample(...items) {
  console.log(...items);
}

sample(1, 2); // [1, 2]
sample(1, 2, 3); // [1, 2, 3]
sample(1, 2, 3, 4); // [1, 2, 3, 4]
```

<aside>
💡<strong>콜백 함수<strong>

</aside>

- 매개변수로 전달하는 함수
  <img width="370" alt="Image" src="https://github.com/user-attachments/assets/356837a1-8917-42e8-831a-315cc31168a1" />

<aside>
💭 <strong>재귀 함수<strong>

</aside>

- 함수가 자기 자신을 호출하는 행위를 수행하는 함수.

```jsx
fucntion fact(n) {
	if(n <= 1) return 1;
	return n * fact(n - 1);
}

console.log(fact(5)); // 120
```

> **지정 시간 후 작업 실행하기**

- 작업의 처리를 지연시키고 싶을 때.
  ```jsx
  setTimeout(() => {
    console.log("실행");
  }, 2000); // 2000 밀리초 이후 실행
  ```

> **시간 주기 작업하기**

- 주기적으로 작업을 처리하고 싶을 때.
  ```jsx
  setInterval(() => {
    console.log("실행");
  }, 1000); // 1000 밀리초마다 실행
  ```

### 🫧 비구조화 할당

- **`ES6`** 이 등장하기 이전 배열에 있는 요소 혹은 JSON 객체의 프로퍼티를 각각 변수에 담기 위해 다음과 같이 일일이 하나 하나 변수에 할당해주곤 하였다.

  ```jsx
  let users = ['홍길동', '김철수', '박민재'];

  let user1 = users[0];
  let user2 = users[1];
  let user3 = users[2];

  console.log(user1);
  console.log(user2);
  console.log(user3);

  let user = { name: '홍길동', age: '20 };

  let name = user.name;
  let age = user.age;

  console.log(name);
  console.log(age);
  ```

- 배열 요소가 많아지거나 프로퍼티 수가 많아지면 굉장히 노가다 및 가독성 저하, 유지보수 어려움 등의 문제점이 있어 ES6부터 **`비구조화 할당`** 이라는 새로운 자바스크립트 표현식이 추가되었다.

> **비구조화(구조분해) 할당**

- **배열이나 JSON 객체의 프로퍼티를 해체하여 그 값을 개별 변수에 담을 수 있게 해주는 자바스크립트 표현식**

  ```jsx
  let [user1, user2, user3] = ["홍길동", "김철수", "박민재"];

  console.log(user1);
  console.log(user2);
  console.log(user3);

  let { name, age, gender } = { name: "홍길동", age: "20", gender: "남" };

  console.log(name);
  console.log(age);
  console.log(gender);
  ```

- **`배열에서의 구조분해 할당`**

  ```jsx
  const arr = [1, 2, 3];

  const [first, second] = arr;

  console.log(first);
  console.log(second);
  ```

- **`나머지 모아서 받기`**

  ```jsx
  const [firest, ...rest] = arr;

  console.log(first); // 1
  console.log(rest); // [2, 3]
  ```

<aside>
✅ <strong>어디서 자주 쓰는가?<strong>

</aside>

| 상황                     | 예시                               |
| ------------------------ | ---------------------------------- |
| **props 꺼내 쓸 때**     | const { title, content } = props;  |
| **API 데이터 구조 분해** | const { data, status } = response; |
| **이벤트 객체 꺼내기**   | const { target } = e;              |
| **배열 처리**            | [head, …tail] = arr;               |

### 🥝 배열

- **`여러 데이터 값을 저장하는 공간.`**
- 원소 → 배열에 저장된 하나 하나의 데이터
- 인덱스 → 원소를 구분하는 번호, 0부터 매긴다.

```jsx
const arr1 = [];
const arr2 = [0, 1, 2];
const arr3 = ['코난', false, 1];
const arr4 = [[1, 1, 1], [2, 2, 2]];
const arr5 = [{id: 1, name: '코난'}, {id: 2, name: '장미'};
```

> **배열 데이터 요소 수 확인하기
> : `array.length`**

<aside>
✅ <strong>fall in 반복문<strong>

</aside>

```jsx
const todos = ["장보기", "공부하기", "홈트"];
for (const i in todos) {
  console.log(todos[i]);
}
```

<aside>
🚨 <strong>for of 반복문<strong>

</aside>

```jsx
for( const todo of todos ) {
	console.log(todos); // 요소 자체가 나옴
]
```

<aside>
👌🏻 <strong>forEach<strong>

</aside>

```jsx
todos.forEach((todo) => {
  console.log(todo);
});
```

> **수정 메소드**

- **`push()`** : 배열 마지막에 하나 이상의 요소를 추가한 후 배열의 길이 반환
  ```jsx
  var a = ["a", "b", "c"];
  console.log(a.push("d")); // 4
  ```
- **`pop()`** : 배열의 마지막 요소를 잘라내어 반환
  ```jsx
  var a = ["a", "b", "c"];
  console.log(a.pop()); // c
  consol.log(a); // a, b
  ```
- **`shift()`** : 배열 첫 번째 요소를 제거한 후 모든 배열 요소들을 왼쪽으로 이동
  ```jsx
  var a = ["a", "b", "c"];
  console.log(a.shift()); // a
  console.log(a); // [b,c]
  ```
- **`unshift()`** : 배열 앞 부분에 요소를 한 개 이상 추가한 후 모든 요소들을 오른쪽으로 이동. 반환값은 배열의 길이
  ```jsx
  var a = ["a", "b", "c"];
  console.log(a.unshift("x")); // 4
  console.log(a); // [x, a, b, c]
  ```
- **`splice()`** : 특정 인덱스의 배열 요소를 갈아끼울 때 사용한다. 삭제된 요소는 배열로 만들어서 반환

  - 첫번째 인수 : 배열을 수정하기 시작할 위치를 가리키는 인덱스.
  - 두 번째 인수 : 배열에서 삭제할 요소의 개수.
  - 세 번째 이후의 인수 : 배열에 삽입할 요소의 값을 쉼표로 구분해서 넘긴다.

  ```jsx
  var a = [1, 2, 3, 4, 5];
  console.log(a.splice(1, 2, 'a', 'b', 'c'); // 2, 3
  console.log(a); // [1, a, b, c, 4, 5]
  ```

    <img width="266" alt="Image" src="https://github.com/user-attachments/assets/24c07caa-81f4-4c1d-b5ed-b1960a33473a" />

- **`sort()`**
  - 배열 안의 요소를 정렬한다.
  - 인수로는 비교를 담당하는 함수의 참조를 전달.
    - 비교함수를 지정하지 않으면 요소를 문자열로 변환한 후 사전순으로 정렬한다.
    - undefined가 있다면 배열의 마지막에 배치
  ```jsx
  var a = [5, 2, 7, 1, 9, 8];
  console.log(
    a.sort(function (a, b) {
      return a - b;
    })
  );
  // 1, 2, 3, 5, 7, 8, 9 오름차순 정렬
  ```
  - **f(a, b) < 0 이면 a를 b보다 작은 인덱스로 정렬**
  - **f(a, b) > 0 이면 a를 b보다 큰 인덱스로 정렬**
  - **f(a, b) == 0 이면 a와 b의 순서를 바꾸지 않음.**

> **접근자 메소드**

- 배열을 가공한 새로운 배열을 반환하며 원래 배열은 수정하지 않는다.
- **`join()`**
  - 배열의 모든 값을 문자열로 바꾼 다음 인수로 전달받은 문자로 연결하여 반환
  - undefined나 null인 경우 빈 문자로 간주
  ```jsx
  var a = ["a", "b", "c"];
  console.log(a.join("-")); // a-b-c
  console.log(a.join()); // abc
  ```
- **`concat()`**
  - 인수로 받은 값을 그 배열의 요소로 추가해서 새로운 배열을 생성한다.
  - 인수가 배열이면 펼친 후에 배열에 추가 (배열은 한 번만 펼쳐서 추가한다.)
  ```jsx
  var a = [1, 2, 3];
  console.log(a.concat([4, 5])); // 1, 2, 3, 4, 5
  ```
- **`slice()`**
  - 배열의 일부 요소를 제거한 새로운 배열 반환
    - 첫 번째 인수 : 요소를 꺼낼 시작 위치. 생략시 0으로 간주한다.
    - 두 번째 인수 : 요소를 꺼낼 마지막 위치. 해당 요소의 바로 이전 요소까지 잘라낸다. 생략시 마지막 요소로 간주한다.
      <img width="341" alt="Image" src="https://github.com/user-attachments/assets/d2f7875a-a2c5-413d-8991-4cbb00067865" />
- **`toString()`**
  - 배열의 요소를 문자열로 변환하여 쉼표로 연결한 문자열로 반환한다.
  ```jsx
  console.log([a, b, c].toString()); // a, b, c
  ```
- **`find(callback func)`**, **`findIndex(text func)`**
  <img width="273" alt="Image" src="https://github.com/user-attachments/assets/dbbb9ad2-af2f-4d10-a1a0-6ae041a78a1e" />

> **반복 메소드**

- 배열의 모든 요소를 순회하며 특정 작업을 수행하거나 특정 조건을 만족하는 요소를 가져올 때 사용한다.
- **`forEach()`**

  - 인수로 받은 함수를 배열의 요소별로 한 번씩 실행한다.
  - 함수에는 인수 세 개 (value, index, array) 전달

  ```jsx
  var a = [1, 2, 3, 4, 5];
  var sum = 0;
  a.forEach(function(value) {
  	sum += value;
  });

  console.log(sum); // 15

  a.forEach(function(v, i, a) {
  	a[i] = v * v;
  };
  console.log(a); // 1, 4, 9, 16, 25
  ```

- **`map()`**
  - 인수로 받은 함수를 배열의 요소별로 한 번씩 실행한다.
  - 그 함수가 반환한 값으로 새로운 배열을 생성.
  ```jsx
  var a = [1, 2, 3, 4, 5];
  var b = a.map(function (x) {
    return 2 * x;
  }); // 2, 4, 6, 8, 10
  ```
- **`filter(callback func)`**
  - 조건을 만족하는 배열 요소들을 추출하여 새로운 배열이 필요할 때
  ```jsx
  const newArray = [10, 20, 30, 40, 50].filter((value) => value >= 30);
  console.log(newArray); // 30, 40, 50
  ```
