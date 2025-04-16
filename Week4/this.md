### 🦄 this

- **자신이 속한 객체 또는 생성할 인스턴스를 가리키는 자기 참조 변수**
- 자바스크립트 엔진에 의해 암묵적으로 생성된다.
- 함수 내부에서 지역 변수처럼 사용 가능
- **`this가 가리키는 값`** 은 함수 호출 방식에 의해 동적으로 결정된다.
  - 일반 함수 호출 → 전역 객체 (**`window`**)
  - 메소드 호출 → 메소드를 호출한 객체
  - 생성자 함수 호출 → 생성자 함수가 생성할 인스턴스

```jsx
var circle = {
	radius = 1;
	area: function(){
		return Math.PI * this.radius * this.radius;
	}
}

console.log(circle.area());
```

**🐝 예시**

<img width="321" alt="Image" src="https://github.com/user-attachments/assets/33dd7afa-0b05-4dc2-b0d3-61d0bbd211bc" />

**`1️⃣ obj.foo()`**

- 메서드로 호출되었기 때문에 this는 호출된 객체인 obj를 가리킨다.
- 따라서 value : 100 값을 참조!

**`2️⃣ bar()`**

- bar()는 obj와 관계 없이 독립적으로 호출되고 있으므로 해당 함수의 this는 전역 객체(window)를 가리킨다.
- 따라서 전역 변수인 value : 1 값을 참조!

**`3️⃣ const로 선언하면?`**

- var로 선언된 value 값을 const로 선언할 경우 더이상 전역 객체의 프로퍼티가 아니게 되기 때문에, bar()는 undefined 값을 참조하게 된다.
- **ES6 이후 let/const는 블록 스코프를 가지며, 전역에서 선언해도 window 객체에 등록되지 않는다.**
- var는 function scope이며, 암묵적으로 전역 객체에 등록된다.

**🙋🏻‍♀️ callback 함수가 일반 함수로 호출된 경우**

- 일반 함수(중첩 함수, 콜백 함수 포함)로 호출된 모든 this에는 전역 객체가 바인딩된다.

### 🏂 중첩 함수 또는 콜백함수의 this 바인딩 일치

- 중첩 함수 또는 콜백 함수는 외부 함수를 돕는 역할을 하므로 외부 함수의 일부를 대신하는 경우가 많다.
- 중첩함수의 this와 외부함수의 this가 일치하지 않는 경우, 헬퍼 함수로 기능하기 어렵다. → **메소드 this와 콜백 this 일치**

    <img width="670" alt="Image" src="https://github.com/user-attachments/assets/56c3258e-139e-4b43-9dfb-821ae8f2031c" />

  - **`that 사용`**
  - **`bind 키워드 사용`**
  - **`화살표 함수 사용`**

### 🧩 메소드 호출

- 메소드 내부의 this는 메소드를 호출한 객체에 바인딩된다.
  - **this에 바인딩될 객체는 호출 시점에 결정!**
  ```jsx
  const person = {
    name: "코난",
    getName() {
      // 메서드 내부의 this는 메서드를 호출한 객체에 바인딩됨
      return this.name;
    },
  };

  // person 객체의 getName 호출
  console.log("person:", person.getName()); // 코난

  const anotherPerson = {
    name: "장미",
  };

  // getName 메서드를 anotherPerson에 할당
  anotherPerson.getName = person.getName;

  // anotherPerson에서 getName 호출
  console.log("another person:", anotherPerson.getName()); // 장미

  // getName 메서드를 변수에 할당
  const getName = person.getName;

  // 일반 함수처럼 호출 -> this는 전역 객체(window 또는 undefined)
  console.log("guess who?", getName()); // 브라우저: "", Node.js: undefined
  ```

**🧭 프토로타입 메소드 내부의 this**

- 메소드를 호출한 객체에 바인딩한다.
  ```jsx
  function Person(name) {
    this.name = name;
  }

  Person.prototype.getName = function () {
    return this.name;
  };

  const me = new Person("코난");

  // getName 메서드를 호출한 객체는 me
  console.log(me.getName()); // ① 코난

  Person.prototype.name = "장미";

  // getName 메서드를 호출한 객체는 Person.prototype
  console.log(Person.prototype.getName()); // ② 장미
  ```
  ![Image](https://github.com/user-attachments/assets/7352a487-5be6-48ec-834b-3f7505ca5a18)

**🎁 생성자 함수 내부의 this**

- 생성자 함수가 생성할 인스턴스에 바인딩한다.
  ```jsx
  // 생성자 함수 정의
  function Circle(radius) {
    this.radius = radius; // 원의 반지름
    this.getArea = function () {
      return Math.PI * this.radius * this.radius; // 원의 넓이 계산
    };
  }

  // new 키워드를 사용하여 인스턴스 생성
  const c1 = new Circle(1);
  const c2 = new Circle(2);

  // 인스턴스 메서드 호출
  console.log(c1.getArea()); // 3.141592653589793
  console.log(c2.getArea()); // 12.566370614359172

  // new 없이 일반 함수처럼 호출
  const c3 = Circle(15);

  // 일반 함수 호출이므로 반환값은 undefined
  console.log(c3); // undefined

  // this.radius = 15가 window.radius = 15가 된 셈
  console.log("radius", radius); // 15
  ```
  - **`c3`** → new 없이 실행. **이 경우 this는 전역 객체를 가리킨다.** this.radius = 15이므로 전역 변수처럼 radius = 15가 생긴다. Cirecle() 함수는 return 값을 따로 명시하지 않았으므로 undefined를 반환한다.

### ❤️‍🩹 apply, call, bind

- Function.prototype의 메소드로, 모든 함수가 상속받아 사용할 수 있다.

> **apply(), call()**

- 함수를 호출하면서 첫 번째 인수로 전달한 특정 객체를 호출 함수의 this에 바인딩한다.

| 메서드    | 인자 전달 방식                    | 설명                 |
| --------- | --------------------------------- | -------------------- |
| `call()`  | `fn.call(thisArg, arg1, arg2...)` | 하나씩 나열해서 전달 |
| `apply()` | `fn.apply(thisArg, [args])`       | 배열로 묶어서 전달   |

```jsx
function introduce(language, hobby) {
  console.log(
    `안녕하세요, 저는 ${this.name}이고 ${language}를 사용하며 ${hobby}를 좋아해요.`
  );
}

const user = { name: "태훈" };

// call 사용
introduce.call(user, "JavaScript", "축구");

// apply 사용
introduce.apply(user, ["Python", "독서"]);
```

```jsx
안녕하세요, 저는 태훈이고 JavaScript를 사용하며 축구를 좋아해요.
안녕하세요, 저는 태훈이고 Python를 사용하며 독서를 좋아해요.
```

**✅ 사용처**

- 메서드를 다른 객체에 빌려쓰고 싶을 때 (함수 재사용)
- this 바인딩을 명확하게 지정하고 싶을 때
- 특히 `apply()`는 인자 리스트가 배열일 때 유용 (ex. `Math.max.apply(null, [1, 2, 3])`)

> **bind()**

- call() / apply() 는 바로 실행되고, bind() 는 나중에 실행할 함수를 반환하여 이후에 실행하고 싶을 때 명시적으로 실행해 줄 수 있다.
  ```jsx
  function sayHello() {
    console.log("안녕! 나는 " + this.name);
  }

  const person = { name: "지수" };

  sayHello.call(person); // → 바로 콘솔에 "안녕! 나는 지수" 출력됨

  const boundSay = sayHello.bind(person); // 아직 아무 일도 안 일어남!
  boundSay(); // 이제 실행 → "안녕! 나는 지수"
  ```
