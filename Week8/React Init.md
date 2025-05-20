### 🐣 생태계

- **패키지 매니저**
  - **`npm`**
  - **`yarn`**
- **빌드 도구**
  - 자바스크립트 코드를 배포 가능한 형태로 만드는 도구
    - 번들링 : JS, CSS, 이미지 파일 등을 소수의 파일로 합치는 과정
    - 트랜스파일 : 최신 문법 → 구형 브라우저 호환
    - 압축 : 공백/주석 제거
  - **`웹팩` → 다양한 모듈시스템 지원, 느림**
  - **`ESBuild, Vite` → ESM만 지원, 웹팩에 비해 빠르고 편리함**
- **프론트엔드 프레임워크**
  - **`React`**
  - **`Vue.js`**
  - **`Svelte`**
- **패키지**
  - package.json으로 정의한 파일 혹은 디렉토리
  - **`package.json`** : 패키지의 메타 정보와 의존성이 담긴 핵심 파일
- **명령어 예시**
  - **`npm inatll / yarn install`**
  - **`npm init / yarn init`**

### 💥 React

> **App.jsx**

- 리액트 프로젝트에서 앱의 핵심 UI 구조와 로직을 정의하는 메인 컴포넌트 파일

  ```jsx
  import "./App.css";

  function App() {
    return (
      <>
        <div>
          <h1>윤서의 리액트 프로젝트</h1>
        </div>
      </>
    );
  }

  export default App;
  ```

  ![Image](https://github.com/user-attachments/assets/f84ffff3-e605-45b6-a804-f93852250115)

> **About React**

- 보다 빠르고 즉각적인 로딩
- SEO 최적화 및 개선된 라우팅 지원
- 사용자 기반 확장 용이성
- 꼭 필요한 경우에만 리렌더링이 일어남

> **Virtual-dom**

- **`Real-dom`** 은 브라우저가 HTML을 해석해서 만든 구조화된 트리
  - **`<div>`**, **`<p>`** 등의 요소 하나하나가 노드로 표현된다.
  - 변경이 생기면 브라우저가 전체 트리를 다시 렌더링해야 하므로, 속도가 느리다.
- **`Virtual-dom`** 은 실제 dom 대신 사용하는 메모리상의 가상 돔트리로 UI가 변경될 때 리액트는 이 가상 돔을 먼저 변경하고, 변경된 내용만 실제 돔에 최소한으로 반영한다.
  - 이로써 실제 돔을 직접 다루는 것보다 훨씬 빠르고 효율적이다.
    ![Image](https://github.com/user-attachments/assets/56fbf918-2c54-491e-bd2c-039c00eec47b)(attachment:9f1c8cb2-b0f7-4b59-98a9-627a9fb76c5a:스크린샷*2025-05-09*오전\_10.34.32.png)
- 상태변화를 감지하고 가상 돔을 이용해 UI 업데이트를 최소화하는 과정을 **`Reconsiliation Process`** 라고 한다.

> **SWC vs ESBuild vs Babel**

- **`SWC`**
  - Rust 기반 초고속 트랜스파일러
  - 매우 빠름
- **`ESBuild`**
  - Go로 작성된 빌드 툴
  - 속도가 매우 빠르고 번들링 기능도 탁월함
- **`Babel`**
  - 전통적인 자바스크립트 트랜스파일러
  - 기능은 많지만 가장 느림
- **`Vite`**
  - 개발 서버에서 코드를 실시간으로 변환하여 브라우저에 ESM 방식으로 전달 → 전체 프로젝트를 번들하지 않으므로 훨씬 빠름
  - 보통의 번들러는 개발 서버를 켤 때 프로젝트 전체를 한 덩어리로 묶고 브라우저에 내보내지만 Vite는 해당 화면에 필요한 모듈만을 실시간 변환해서 보냄

> **리액트 폴더구조**

- **`Vite + React + JavaScript`**
  ```jsx
  my-vite-app/
  ├── node_modules/
  ├── public/
  │   └── vite.svg
  ├── src/
  │   ├── assets/
  │   │   └── react.svg
  │   ├── App.css
  │   ├── App.jsx
  │   ├── index.css
  │   └── main.jsx
  ├── .gitignore
  ├── index.html
  ├── package.json
  ├── pnpm-lock.yaml  (혹은 yarn.lock / package-lock.json)
  ├── vite.config.js
  └── README.md
  ```
  - **`node_modues/`**
    - 프로젝트에 설치된 모든 패키지들 위치
  - **`public/`**
    - 정적 리소스를 담는 폴더로, 빌드시 그대로 복사된다.
  - **`src/`**
    - 애플리케이션의 실제 코드/스타일
    ```jsx
    src/
    ├── assets/       # 이미지, 폰트 등 컴포넌트에서 import 할 정적 파일
    │   └── react.svg
    ├── App.css       # App 컴포넌트 전용 스타일 시트
    ├── App.jsx       # 최상위 React 컴포넌트
    ├── index.css     # 전역(global) 스타일 시트
    └── main.jsx      # React 앱 진입점(entry point)
    ```
    - **`main.jsx`** : 브라우저 dom의 <div id=”root”>에 리액트 컴포넌트를 마운트하고, 전역 스타일을 여기서 불러온다.
    - **`App.jsx`** : 최상위 컴포넌트
    - **`index.html`** : <div id=”root”>가 리액트의 진입점. type=”module”로 main.jsx를 불러와 ESM 방식으로 실행한다.
