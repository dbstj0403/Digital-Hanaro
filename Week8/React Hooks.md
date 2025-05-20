### ☁️ 가상 돔 조금 더 알아보기

- 리액트가 뛰어난 성능을 보여줄 수 있는 비결 중 하나는 바로 **가상 돔**
  - **`DOM`** 이란, 웹 사이트에 접속하면 보이는 각각의 요소들이 모여 하나의 문서를 구성하는데 이런 문서구조를 프로그래밍 언어가 이해할 수 있도록 표현한 것이 DOM!
    ![Image](https://github.com/user-attachments/assets/d2a153de-c1b3-41ca-8f95-f2d0af7a2b4e)
  - 돔은 요소들을 트리 형태로 표현하며, 각 요소에 해당하는 노드가 존재한다.
  - 돔 구조에 접근해 내용이나 스타일을 변경하는 것을 돔 조작이라고 부른다.
- 웹 페이지의 특정 요소를 변경하기 위해 요소를 찾고 브라우저가 화면을 다시 그리는데 가장 많은 비용이 든다. **즉, 리플로우 및 리페인트에 대한 비용이 발생!**
  - **`리플로우`** : 돔의 구조나 레이아웃이 변경되면 브라우저는 새로운 레이아웃을 계산하고 다시 화면을 그린다. 이를 리플로우라고 하며, 요소의 크기나 위치를 변경할 때 발생한다. (기하학적 정보 변경시 → 위치, 크기, 너비, 높이 등)
  - **`리페인트`** : 요소의 색상이나 테두리 등 외양이 변경되면, 브라우저는 해당 요소를 다시 그린다. 이를 리페인트라고 한다. (레이아웃에 영향이 없는 스타일 변경시 → 컬러, 투명도 등)
- 리액트는 렌더링이 발생될 상황에 놓이게 되면 새로운 화면에 들어갈 가상 돔을 생성하게 된다. 가상 돔은 실제 돔의 가벼운 복사본으로, 메모리 상에 존재하며 자바스크립트 객체 형태로 존재한다.
- 리액트는 항상 렌더링 이전의 화면 구조와 렌더링 이후의 화면 구조를 가진 두 개의 가상 돔 객체를 유지하고 있다. 이 두 가상 돔을 비교하여 변경된 부분만 실제 돔에 반영한다.
  ![Image](https://github.com/user-attachments/assets/41c1b5cf-c315-4ed3-bca9-c6573b6d9c99)
- 가상 돔 비교 과정에는 **`diffing 알고리즘`**이 사용된다.
  - 이전 가상돔 트리와 새로운 가상돔 트리를 비교하고 루트 노드에서 시작해서 이전과 새로운 노드를 비교한다.
  - 두 노드가 다른 유형이면 새 노드를 생성해 기존 노드를 대체한다.
  - 두 노드가 같은 유형이면 속성을 비교해 변경된 속성이 있는지 확인, 없으면 그대로 사용하고 있으면 속성을 업데이트한다.
  - 이렇게 해서 자식노드를 재귀적으로 비교한다. → 이를 **`재조정, Reconcilation`** 이라고 부른다!

### 🐧 JSX와 컴포넌트

<aside>

**🖤 JS vs JSX**

</aside>

| 구분        | JS                                             | JSX                                                                         |
| ----------- | ---------------------------------------------- | --------------------------------------------------------------------------- |
| 문법        | 순수 자바스크립트 코드                         | 자바스크립트 안에서 HTML/XML 형태 문법 사용                                 |
| 파싱 필요성 | 별도 변환 없이 브라우저나 런타임에서 바로 실행 | Babel 같은 트랜스파일러로 JS 코드로 변환(→ `React.createElement` 호출) 필요 |
| 확장자      | `.js` (또는 `.mjs`, `.cjs`)                    | `.jsx` (또는 `.js`에 JSX 포함가능)                                          |
| 용도        | 일반 로직, 함수, 클래스, 유틸리티 등           | React 컴포넌트의 **UI 구조**를 기술할 때                                    |

```jsx
**## js 사용할 때**
- 일반 로직 : 데이터 가공 함수, API 호출 모듈, 유틸리티 함수 등
- 비 UI : 화면 그리기와 상관없는 순수 비즈니스 로직, 설정 파일

**## JSX 사용할 때**
- 리액트 컴포넌트 : 화면에 렌더링할 요소들을 기술할 때
- UI 템플릿 : HTML 태그와 자바스크립트 표현식을 조합해 UI를 작성할 때
```

> **JSX 규칙**

- if 대신 논리 연산자 사용
  - **`{id && name}`**
- CSS class는 className으로, 그 외 스타일 값은 카멜 케이스로 입력한다.
  - **`{color: “red”, backgroundColore: “white”}`**
- <script/> 태그 삽입이 무력화
  - **`인젝션 공격에 안전하다!`**

> **리액트와 컴포넌트**

- **리액트는 컴포넌트 기반의 UI 라이브러리**
  - 페이지의 모든 요소를 컴포넌트 단위로 개발한다.
  - 완성된 컴포넌트를 조립하여 하나의 페이지를 구성한다.
- **컴포넌트**
  - 컴포넌트의 이름은 항상 대문자로 시작
  - 속성(props)를 받고, 상태를 가진다.
  - 가능한 독립적으로 실행되도록 작성하고, 데이터 영역과 UI를 분리해야 한다.
- **Props**
  - 부모가 자식 컴포넌트에 단일 객체 형태로 전달한 값
  - 읽기 전용으로, 자식이 직접 변경할 수 없다.
- **State**
  - 컴포넌트 내부에서 선언하고 변경할 수 있는 데이터
  - 변경되면 자동으로 리렌더링된다.
  - UI의 동적 변화를 관리한다.
- **Method**
  - 버튼 클릭 같은 이벤트에 대응하기 위한 함수 내부 로직 또는 props/state를 업데이트할 수 있다.

<aside>

**🛠 클래스형 컴포넌트 vs 함수형 컴포넌트**

</aside>

- **`클래스형 컴포넌트`**

  ```jsx
  import React, { Component } from "react";

  class Greeting extends Component {
    render() {
      const { name } = this.props;
      return <h1>Hello, {name}!</h1>;
    }
  }
  ```

  - React.Component를 상속받아 render() 메서드 안에서 JSX를 리턴한다.
  - 상태관리를 위한 this.state, 생명주기 메서드(componentDidMount 등)를 직접 사용할 수 있다.
  - **생명주기 메서드**
    - **`constructor`** → **`render`** → **`componentDidMount`** → (업데이트) → **`shouldComponentUpdate`** → **`render`** → **`componentDidUpdate`**
    - 언마운트 시 componentWillUnmount 등
      ![Image](https://github.com/user-attachments/assets/9d24eaf0-6716-42be-a381-54d9e72f22dd)

- **`함수형 컴포넌트`**

  ```jsx
  import React from "react";

  function Greeting({ name }) {
    return <h1>Hello, {name}!</h1>;
  }

  // 또는 화살표 함수
  const Greeting = ({ name }) => <h1>Hello, {name}!</h1>;
  ```

  - 순수 함수처럼 props를 받아 JSX를 리턴한다.
  - React 16.8 이후 **`Hooks`** 사용으로 상태관리, 생명주기 효과 등을 사용할 수 있게 되면서 함수형 컴포넌트는 클래스형 컴포넌트를 완전히 대체할 수 있게 되었다.
  - 문법이 단순하고 보일러플레이트가 적다.
    - **`보일러플레이트`** 란, 프로그래밍에서 반복적으로 작성해야 하는 그대로 복사해도 되는 표준화된 코드 조각들을 의미한다.
  - 내부 구현상 불필요한 오버헤드가 적어 약간 더 가볍다.
  - Hooks 사용 가능
    - useState, useEffect, useRef 등 다양한 훅으로 상태와 사이드 이펙트를 관리한다.
    - 커스텀 훅으로 로직 재사용 용이

> **Props, State, Variable**

- **`Props`**
  - 자식 컴포넌트는 변경할 수 없다.
  - 렌더링될 때 한번만 설정된다. 즉, 렌더링 이후 변경되지 않는다.
- **`State`**
  - useState로 state를 생성할 수 있다.
  - 부모의 상태가 변경되면 그 상태를 참조하는 모든 자식 컴포넌트들의 리렌더링이 일어난다. → 상태를 좁게 사용하여야 성능에 유리
- **`Variable`**
  - 변경된다고 해서 리렌더링에 영향이 없다.
  - 값은 바뀌지만 화면에는 아무런 영향을 주지 않는다.

### 🐬 React Hooks

- **`Hook?`**
  - 함수형 컴포넌트에서 클래스로 만든 리액트 컴포넌트의 기능을 이용하도록 도와주는 함수 → **리액트 함수형 컴포넌트에서 상태나 생명주기 기능을 사용할 수 있게 해주는 특별한 함수**
- **`Hook의 원칙`**
  - 컴포넌트 영역 안에서만 작동한다.
    - 컴포넌트/커스텀훅 내부에서만 호출해야 한다.
  - 기능을 여러 훅으로 나누면 좋다.
    - 가독성 및 기능 단위 분리 → 테스트/유지보수에 유리
  - 컴포넌트의 최상위 레이어에서만 호출해야 한다.
    - 조건문, 반복문 등 블록 내부에서는 호출 불가

> **상태관리 Hooks**

- **`useState`** : 상태를 사용할 수 있게 해줌
- **`useContext`** : 컴포넌트 트리 전체에 전역 데이터를 전달할 때 사용
- **`useReducer`** : 상태 로직이 복잡하거나 여러 상태를 다룰 때 사용

> **메모화 Hooks**

- **`useMemo`** : 계산 결과를 메모이제이션 해서 성능을 최적화
- **`useCallback`** : 함수 인스턴스를 재사용하고 싶을 때 사용

### ✨ useContext

- 리액트의 일반적인 데이터 흐름은 부모 → 자식을 통해 prop로 단방향으로 흐른다. 이 뎁스의 깊이가 매우 깊을 때 일일히 단계별로 전달하는 것은 효율적이지 못하므로, 전역 데이터를 사용할 수 있도록 하는 것이 useContext 훅이다.
- 리액트 공식 문서에서는 context를 너무 많이 사용하면 컴포넌트의 재사용성이 떨어지기 때문에 꼭 필요할 때만 사용하는 것이 좋다고 언급하고 있다.

**📌 사용 방법**

1. **`createContext import` (context 폴더 생성 후 ThemeContext.js 파일 생성)**

   ```jsx
   import { createContext } from "react";

   export const TemeContext = createContext(null); // 기본값 null
   ```

2. **`최상위 컴포넌트로 가서 context import, provider로 감싸주기`**

   ```jsx
   import { useState } from "react";
   import "./App.css";
   import Page from "./Compopnents/Page";
   import { ThemeContext } from "./context/ThemeContext";

   function App() {
     const [isDark, setIsDark] = useState(false);

     return (
       <ThemeContext.Provider value={{ isDark, setIsDark }}>
         <Page />
       </ThemeContext.Provider>
     );
   }
   export default App;
   ```

3. **`전역 데이터를 사용해야 하는 컴포넌트에서 useContext 훅 사용`**

   ```jsx
   import { useContext } from "react";
   import { ThemeContext } from "../context/ThemeContext";

   const Header = () => {
     // 📌
     const { isDark } = useContext(ThemeContext);
     return (
       <header
         className="header"
         style={{
           backgroundColor: isDark ? "black" : "lightgray",
           color: isDark ? "white" : "black",
         }}
       >
         <h1>Welcome 홍길동!</h1>
       </header>
     );
   };

   export default Header;
   ```

4. **`여러 가지 전역 데이터 공유하기`**

   ```jsx
   <UserContext.Provider value={"사용자"}>
     <ThemeContext.Provider value={{ isDark, setIsDark }}>
       <Page />
     </ThemeContext.Provider>
   </UserContext.Provider>
   ```

### ☘️ useReducer

- 리액트의 useReducer는 상태 관리와 상태 업데이트를 다루는 리액트 훅 중 하나이다. 이 훅은 주로 복잡한 상태 관리 로직을 다루거나 여러 컴포넌트 간에 상태를 공유할 때 사용한다.
- useState와 비슷한 역할을 하지만, 좀 더 구조화된 방식으로 상태를 관리하도록 돕는다.

**🫡 useReducer() 선언과 initialState**

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

- **`state`** : 상태 이름
- **`dispatch`** : 상태 변경시 필요한 정보를 전달하는 함수
- **`reducer`** : dispatch를 확인해서 state를 변경해 주는 함수
- **`initialState`** : state에 전달할 초기 값

**🧶 reducer()와 action에 대해서**

- reducer()는 2가지 인자를 받는다.
  - state : 위에서 선언한 state 값이 들어간다.
  - action : 업데이트를 위한 정보를 가지고 있는 ‘객체’ 즉, 위에서 선언한 dispatch라고 생각한다.
    ```jsx
    function reducer(state, action) {
      switch (action.type) {
        case "PLUS":
          return state + 1;
        case "MINUS":
          return state - 1;
        default:
          return state;
      }
    }
    ```

**🍄 action 객체 (dispatch)**

- action 객체 즉 dispatch는 주문서와 같은 역할을 한다.
- reducer에 적어두었던 type (주문 명령어)를 적는다.
  ```jsx
  // 1을 더하는 액션(주문 명령)
  {
    type: 'PLUS'
  }
  // 1을 빼는 액션(주문 명령)
  {
    type: 'MINUS'
  }
  // input 값을(빵 속 재료 등) 변경하는 액션(주문 명령)
  {
    type: 'CHANGE_INGREDIENT',
    ingredient : 'corn',
    price : 3000
  }
  // 새로운 객체(빵)를 생성하는 액션 (주문 명령)
  {
    type: 'CREATE_BREAD',
    bread: {
      name: 'corn_bread',
      price: 4500
    },
    ingredient: {
      name: 'corn',
      value: '300g'
    }
  }
  ```

**😁 dispatch**

- state를 변경할 수 있는 명령어와 정보들을 세팅하는 곳

  - 상태변경을 트리거

  ```jsx
  // 1번째 방법
  const onPlus = () => {
     dispatch({type : 'PLUS'})
  }

  <button onClick={onPlus}>Plus</button>

  /// 2번째 방법
  <button onClick={() => dispatch({ type: 'PLUS' })}>Plus</button>
  ```

**👾 예제 코드**

```jsx
import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "PLUS":
      return state + 1;
    case "MINUS":
      return state - 1;
    default:
      return state;
  }
}

function Baking() {
  // 3을 value 저장
  // 위에 선언했던 값을 변경하는 reducer 함수를 넣어주기!
  // reducer속 로직들을 실행시킬 명령어가 담겨있는 dispatch 선언
  const [value, dispatch] = useReducer(reducer, 3);

  const onPlus = () => {
    dispatch({ type: "PLUS" });
  };

  const onMinus = () => {
    dispatch({ type: "MINUS" });
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onPlus}>+1</button>
      <button onClick={onMinus}>-1</button>
    </div>
  );
}

export default Baking;
```

### 😺 useMemo, useCallback

- 리액트에서 성능 최적화를 위해 자주 사용되는 두 가지 Hook
  - **두 훅 모두 불필요한 렌더링을 방지하고, 성능을 개선해 준다.**
- **`useMemo`**
  - 특정 값의 계산 결과를 메모이제이션하여 디펜던시가 변경되지 않는 한 동일한 값을 반환한다.
- **`useCallback`**
  - 특정 함수를 메모이제이션하여, 디펜던시가 변경되지 않는 한 동일한 함수를 반환한다.
  - 리액트는 컴포넌트가 렌더링될 때마다 내부에서 선언된 함수가 새로 생성되기 때문에, useCallback을 사용한다.

> **useMemo의 작동 원리와 사용법**

```jsx
const memoizedValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);
```

- a와 b가 변경되지 않는 한 computeExpensiveValue는 다시 호출되지 않는다.
  - **렌더링 비용이 높은 컴포넌트에서 사용하면 유용하며, 복잡하거나 대규모 데이터를 처리하는 경우 사용하면 좋다.**

> **useCallback의 작동 원리와 사용법**

```jsx
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

- a와 b가 변경되지 않는 한 doSomething 함수는 새로 생성되지 않는다.
  - **useCallback은 특히 자식 컴포넌트가 React.memo로 최적화되어 있는 경우에 유용하다. 함수가 변경되지 않으면, 자식 컴포넌트가 불필요하게 렌더링되지 않기 때문이다.**

> **두 훅의 차이점**

- useMemo는 **값을 메모이제이션**하고, useCallback은 **함수를 메모이제이션**한다. 따라서 메모이제이션할 대상이 값인지 함수인지에 따라 훅을 적절하게 선택하는 것이 적합하다.
- 복잡한 계산 수행 컴포넌트 → **`useMemo`**
- 자식 컴포넌트에 함수를 props로 전달할 때 → **`useCallback`**
- **`React.memo`** 로 컴포넌트 렌더링 성능 향상

https://github.com/yeonjuan/dev-blog/blob/master/JavaScript/should-you-really-use-usememo.md

→ 복잡도 5000 이상일 때만 유의미한 후속 렌더링 효율 향상이 이루어진다 하니 참고… 어설프게 적용했다가는 더욱 중요한 초기 렌더링 속도를 놓칠 수 있다.
