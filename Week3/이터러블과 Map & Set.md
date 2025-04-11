### 🎃 이터레이터와 제너레이터

- **`이터러블`**
  - 이터러블 프로토콜을 준수한 객체. 즉, 반복 가능한 객체!
  - **for … of 문으로 하나씩 꺼낼 수 있는 객체를 말한다.**
  - 이터러블은 내부적으로 Symbol.iterator 메서드를 갖고 있고, 이 메서드는 이터레이터를 반환한다.

**❇️ 자바스크립트에서 기본적으로 이터러블한 것들**

| **자료형**   | **설명**                     |
| ------------ | ---------------------------- |
| `Array`      | ✅ 이터러블                  |
| `String`     | ✅ 문자 하나씩 반복 가능     |
| `Set`, `Map` | ✅ 각각 요소/키/값 반복 가능 |
| `arguments`  | ✅ 반복 가능                 |
| `NodeList`   | ✅ 반복 가능 (DOM에서)       |

**‼ 일반 객체는 이터러블이 아니다. for … of문으로 순회할 수 없으며, 배열 디스트럭처링 대상으로 사용할 수 없다.**

> **이터레이터**

- **`Symbol.iterator`** 메소드를 호출하면 이터레이터를 반환한다.

  ```jsx
  const array = [1, 2, 3];
  const iterator = array[Symbol.iterator]();

  console.log("next" in iterator); // true
  ```

- **`next`** 메서드를 호출하면 이터러블을 순회하며 이터레이터 결과 객체를 반환한다.

  ```jsx
  const array = [1, 2, 3];
  const it = array[Symbol.iterator]();

  console.log(it.next()); // {value: 1, done: false}
  console.log(it.next()); // {value: 2, done: false}
  console.log(it.next()); // {value: 3, done: false}
  console.log(it.next()); // {value: undefined, done: true}
  ```

> **for … of 문**

- 이터러블을 순회하면서 요소를 변수에 할당한다.
  - **`next()`** 메소드를 호출하여 순회하면서 이터레이터 결과 객체의 value를 for … of 문 변수에 할당
  - 결과 객체의 done이 false이면 순회, 계속 true이면 순회를 중단하는 매커니즘이다.
    ```jsx
    for (const item of [1, 2, 3]) {
      // item 변수에 차례대로 1, 2, 3 할당
      console.log(item); // 1 2 3
    }
    ```

> **제너레이터**

- **함수의 실행을 일시 정지하고 다시 재개할 수 있는 함수**

**🐚 기본 문법**

```jsx
function* myGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

// 화살표 함수로는 선언하지 못한다.
```

→ \* 가 핵심!

→ 함수 안에서 **`yield`** 를 사용해서 값을 순차적으로 반환한다.

→ 이 함수는 값을 바로 리턴하지 않고, 이터레이터를 반환한다.

**⛳️ 사용 예시**

```jsx
function* numbers() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numbers(); // 제너레이터 객체 반환

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }
```

→ **`next()`** 를 호출할 때마다 **`yield`** 지점까지 실행한다.

→ done: true가 되면 끝!

**✍🏻 제너레이터는 이터러블**

```jsx
for (const n of numbers()) {
  console.log(n); // 1, 2, 3
}
```

→ 제너레이터는 자동으로 **`Symbol.iterator`** 를 구현한다. 따라서 for … of 문 사용 가능!

### 🧚 Map

- **`map`**
  - **key-value 쌍으로 이루어진 컬렉션**
  - key를 사용해서 value를 get, set 할 수 있다.
  - key들은 중복될 수 없으며 하나의 key에는 하나의 value만 들어갈 수 있다.
    ```jsx
    const map = new Map();
    const map1 = new Map((["key1", "value1"], ["key2", "value2"]);
    ```
  - 요소 확인
    - 사이즈는 임의로 변할 수 없다.
    ```jsx
    const {size} = new Map((["key1", "value1"], ["key2", "value2"]);
    console.log(size); // 2
    ```
- **`Map 객체의 메소드`**

![Image](https://github.com/user-attachments/assets/2d32b7a9-ff95-4999-8d9e-b8c9aa555a98)

- **`요소 추가`**

  - **`set()`** : 새로운 요소가 추가된 Map 객체 반환

    ```jsx
    const memberList = new Map();
    memberList.set(20, "conan");
    memberList.set(50, "rose");

    // method chaining
    memberList.set(20, "conan").set(50, "rose").set(120, "ran");

    console.log(memberList.get(20)); // conan
    console.log(memberList.has(50) // true
    ```

    - 중복된 키를 갖는 요소가 존재할 수 없으므로 나중에 추가된 요소만 저장된다.
      ```jsx
      const memberList = new Map();
      memberList.set(20, "conan");
      memberList.set(20, "rose");
      console.log(memberList.get(20)); // rose
      ```
    - 키 타입에 제한이 없어 객체도 키로 만들 수 있다!

- **`요소 존재 여부 확인`**
  - **`has()`** : 요소의 존재 여부 반환
    ```jsx
    const map = new Map([1, "conan"], [2, "ran"]);
    console.log(map.has(1)); // true
    ```
- **`요소 삭제`**
  - **`delete()`**
    - 존재하지 않는 키로 삭제하는 경우 에러 없이 무시
    ```jsx
    map.delete(1);
    ```
- **`일괄 삭제`**
  - **`clear()`**
    ```jsx
    map.clear();
    ```
- **`요소 순회`**
  ![Image](https://github.com/user-attachments/assets/d8c4fc8b-4f17-4490-a404-30f2275f3a4d)

### 🐍 Set

- **`set`**
  - 중복되지 않은 유일한 값들의 집합
- **`배열과의 차이점`**
  | 구분 | 배열 | set |
  | -------------------------- | ---- | --- |
  | 동일 값 중복하여 포함 가능 | O | X |
  | 순서에 의미 있음 | O | X |
  | 인덱스로 요소 접근 | O | X |
- **`set 객체의 메소드`**
  ![Image](https://github.com/user-attachments/assets/b32a5d72-b49c-4f50-9a53-285d0ead5f82)
- **`set 객체 생성`**

  ```jsx
  const set = new Set();
  const set1 = new Set([1, 2, 3, 3]); // {1, 2, 3}

  const { size } = new Set([1, 2, 3, 3]);
  console.log(size); // 3
  ```

- **`요소 추가`**
  ```jsx
  const set = new Set();
  set.add(1).add(2).add(3);
  console.log(set); // {1, 2, 3}
  ```
- **`배열의 중복 요소 제거`**
  ```jsx
  const uniq = (array) => [...new Set(array)];
  console.log(uniq([2, 1, 2, 3, 4, 3, 4])); // [2, 1, 3, 4]
  ```
- **`요소 순회`**
  ![Image](https://github.com/user-attachments/assets/d5d5032f-fa5f-4837-8905-26f9029806e7)
