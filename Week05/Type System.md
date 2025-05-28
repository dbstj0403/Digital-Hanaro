### 👻 타입 시스템

> **any**

- 모든 자료형을 허용함 → 자바스크립트에서 타입을 명시하지 않은 것과 동일한 효과를 낸다.
- any 타입을 변수에 할당하는 것은 지양하는 것이 좋다.
- **`any 값이 필요한 경우`**
  - 개발 단계에서 임시로 값을 지정해야 할 때
  - 어떤 값을 받아올지 또는 넘겨줄지 정할 수 없을 때
  - 값을 예측할 수 없을 때 암묵적 사용
    - API 요청 및 응답 처리, 콜백 함수

> **unknown**

- 모든 타입의 값이 할당될 수 있다.
- 무엇이 할당될 지 모르는 상태의 타입
- **any를 제외한 다른 타입으로 선언된 변수에는 unknown 값을 할당할 수 없다.** → any 보단 안정적임!

### 😈 타이핑

- 타입스크립트에서는 어떤 값에 어떤 타입을 부여할지 알고 있어야 한다.
- 타이핑이란, 타입을 부여하는 행위를 의미한다.
  - 변수, 함수의 매개변수, 반환값에 타입 부여

```jsx
const str: string = "hello";
const num: number = 1;
```

### 😴 타입 추론

- 타입스크립트는 변수와 반환값의 타입을 스스로 추론할 수 있다.
  ```jsx
  function sum(x: number, y: number): number {
    return x + y;
  }

  const result1: number = sum(1, 2);
  const result2 = sum(1, 2);
  // result2에 타입을 부여하지 않았지만
  // 타입스크립트가 알아서 result2의 타입을 추론
  ```
- 매개변수에는 타입을 부여해야 한다! 타입을 부여하지 않은 경우 에러 메시지를 표시한다.
- 타입스크립트의 추론이 개발자의 의도와 다를 수 있으므로 원칙이 필요하다.
  - 타입을 표기할 때 ‘hello’, 123, false 같은 값을 입력할 수 있다. → **`리터럴 타입`**
- let을 사용한 경우에는 다른 값을 대입할 수 있기 때문에 타입을 넓게 추론한다. → **`Type widening`**
  ```jsx
  let status = "success";

  // 이렇게 선언할 경우 리터럴 타입이지만 let으로 선언되었으므로 일반적인 타입 string으로 추론한다.

  const status = "success";

  // 이 경우 status: success라는 리터럴 타입으로 유지된다. const는 값이 변하지 않기 때문!
  ```

### 🦥 Type Alias

- 복잡하고 자주 사용되는 타입에 별명을 붙일 수 있다.
  ```jsx
  type [type name] = type declation;
  ```
  ```tsx
  type UserId = string;

  let id: UserId = "abc123";

  type User = {
    id: number;
    name: string;
    isAdmin: boolean;
  };

  const u1: User = {
    id: 1,
    name: "코난",
    isAdmin: false,
  };
  ```
  ```tsx
  type PersonInfo = {
    id: number;
    name: string;
    age: number;
  };

  const something = ({ id, name, age, address }: PersonInfo) => {};
  ```

### ☘️ 유니언과 리터럴

> **값 자체가 타입인 리터럴**

- 자바스크립트에서는 let으로 선언된 변수에 어떤 값이든 자유롭게 대입할 수 있다.
- **`리터럴 타입`**
  - **원시 타입에 할당 가능한 값 자체가 타입이 된다!**
  - 변수에 뭐가 들어올지 엄격하게 관리할 수 있다.
  ```tsx
  let str: string = "hello";
  str = "world"; // ok
  str = 123; // type error
  ```
- **`as const`**
  - 타입이 고정되어 추론된다.
  - **`readonly` : 해당 값은 변경 불가**
  ```tsx
  const abj = { name: "conan" } as const;
  const arr = readonly[(1, 2)];
  ```

> **유니언**

- **값에 허용되는 타입을 두 개 이상의 가능한 타입으로 확장하는 것**

```tsx
type Person = {
  name: string;
  age: number;
  phone: number | string;
  addr?: string; // ? type은 undefined 허용
};

const h: Person = {
  name: "윤서",
  age: 24,
};

h.phone = "010-1234-5678"; // ok
h.addr; // string | undefined;
```

- 둘 이상의 타입으로 확장된 타입에서 일부 속성들의 조합이 어느 하나의 타입에 할당 가능하면 된다.

```tsx
type Member = {
  name: string;
  addr: string;
  discountRate: number;
};

type Guest = {
  name: string;
  age: number;
};

type Customer = Member | Guest;
```

```tsx
customer = {
  name: "홍길동",
  addr: "용산구",
};
// error! 객체 리터럴이 `Customer` 타입과 정확히 일치하지 않음. `Member` 타입에 해당되기 위해서는 `discountRate`도 필요함.
```

- 유니언으로 선언한 모든 타입에 존재하는 **“공통되는”** 속성에만 접근이 가능하다.
  ```tsx
  const member: Member = {
    name: "홍길동",
    addr: "용산구",
    discountRate: 0.1,
  };

  const guest: Guest = {
    name: "김길동",
    age: 28,
  };

  const who = Math.random() > 0.5 ? member : guest;

  who.name = "마길동"; // 접근 가능
  const price = who.discountRate; // error
  ```
  - **`discountRate`** 는 **`Member`** 에는 있지만 **`Guest`** 에는 없다.
  - 따라서 **`Member | Guest`** 라는 유니언 타입에서는 안전하게 **`discountRate`** 에 접근할 수 없음!

### 🌵 Type Narrowing과 Tpye Guard

- 유니언 타입에서 특정 타입에만 존재하는 속성에 접근하고 싶다면?
  - 타입 가드를 통해 타입 내로잉!
    - **`내로잉`** : 값이 더 구체적인 타입임을 코드에서 유추하는 것.
    - **`타입 가드`** : 내로잉을 하기 위한 논리적인 검사

**🐚 타입 가드**

- 타입스크립트가 코드 흐름 상에서 타입을 좁혀줄 수 있도록 돕는 조건이다. 즉, 런타임에서 특정 타입인지 확인해 주는 조건문 혹은 함수를 의미한다.

| 방식                  | 예시                               | 설명                                   |
| --------------------- | ---------------------------------- | -------------------------------------- |
| **`typeof`**          | **`typeof value === 'string'`**    | 문자열, 숫자, 불리언 등 기본 타입 식별 |
| **`in`** 연산자       | **`'discountRate' in who`**        | 속성 존재 여부로 객체 타입 식별        |
| **`instanceof`**      | **`value instanceof Date`**        | 클래스 인스턴스 판별                   |
| 사용자 정의 타입 가드 | **`isMember(who): who is Member`** | 함수로 직접 정의 가능                  |

**🍄 타입 내로잉**

- 타입스크립트가 타입 가드를 통해 가능한 타입을 줄여가는 과정을 말한다.
- **`type of`**
  ```tsx
  function printValue(value: string | number) {
    if (typeof value === "string") {
      // 여기서 value는 string으로 추론됨
      console.log(value.toUpperCase());
    } else {
      // 여기서 value는 number로 추론됨
      console.log(value.toFixed(2));
    }
  }
  ```
- **`in 연산자`**
  ```tsx
  type Member = { name: string; discountRate: number };
  type Guest = { name: string; age: number };
  type Customer = Member | Guest;

  function printDiscount(customer: Customer) {
    if ("discountRate" in customer) {
      // customer는 Member 타입으로 내로잉됨
      console.log(customer.discountRate);
    } else {
      // customer는 Guest 타입으로 내로잉됨
      console.log(customer.age);
    }
  }
  ```
