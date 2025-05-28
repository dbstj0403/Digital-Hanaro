### 📌 CRA 프로젝트 생성

- **`cd ~Development`**
- **`mkdir cra-js`**
- **`cd cra-js`**
- **`npx create-react-app@latest my-app`**
- **`code .`**
- **`npm start`**

### 💥 CRA 프로젝트 폴더 구조

```
.
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── components
    │   └── MyButton.jsx
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── reportWebVitals.js
    └── setupTests.js
```

### 👾 Vite, yarn 프로젝트 폴더 구조

```
.
├── README.md
├── eslint.config.js
├── index.html
├── package.json
├── public
│   └── vite.svg
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── assets
│   │   └── react.svg
│   ├── index.css
│   └── main.jsx
├── vite.config.js
└── yarn.lock
```

### 🦦 두 프로젝트의 폴더 구조 비교

- **CRA의 `index.js` 와 Vite의 `main.jsx`**
  - CRA는 **`ReactDom.render()`**를 사용해 최상위 컴포넌트인 <App /> 컴포넌트를 실제 Dom에 붙인다. Vite의 경우 ESM 모듈을 활용해 **`ReactDom.createRoot()`**로 렌더 방식이 최신화되어있다. 또한 기본 템플릿이 .jsx로 설정되어 있다는 차이가 있다.
    ```jsx
    // index.js file of CRA Project

    import React from "react";
    import ReactDOM from "react-dom/client";
    import "./index.css";
    import App from "./App";
    import reportWebVitals from "./reportWebVitals";

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );

    // If you want to start measuring performance in your app, pass a function
    // to log results (for example: reportWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals();
    ```
    ```jsx
    // main.jsx file of Vite Project

    import { StrictMode } from "react";
    import { createRoot } from "react-dom/client";
    import "./index.css";
    import App from "./App.jsx";

    createRoot(document.getElementById("root")).render(
      <StrictMode>
        <App />
      </StrictMode>
    );
    ```
- **테스트 파일 기본 제공 차이**
  - CRA의 경우 App.test.js, setupTests.js 등이 기본 제공되어 Jest 기반 단위테스트를 바로 실행할 수 있으나, Vite는 vitest나 jest를 별도로 설치하고 설정해야 한다.
    ```jsx
    // App.test.js file of CRA Project

    import { render, screen } from "@testing-library/react";
    import App from "./App";

    test("renders learn react link", () => {
      render(<App />);
      const linkElement = screen.getByText(/learn react/i);
      expect(linkElement).toBeInTheDocument();
    });
    ```
- **정적 자원 import**
  - CRA는 import logo from “./logo.svg”; 로 작성하고 Webpack이 URL을 자동 해석하여 번들링한다. Vite는 import logo from “/src/assets/react.svg”; 로 작성하고 ESM으로 브라우저가 바로 해석, 빌드시에 Rollup 처리한다.
  - CRA
    - import → 가짜 URL → 번들링
  - Vite
    - 브라우저 네이티브 ESM → 개발 서버 정적 서빙 → 빌드시 Rollup 자산 번들링
- **진입점 `index.html` 파일 위치**
  - CRA는 public 폴더 아래에, Vite는 프로젝트 루트 위치에 존재한다.
- **스크립트 차이**
  - CRA
    - npm start, yarn start
    - npm run build, yarn build
    - 프로덕션 프리뷰 추가 패키지 필요
  - Vite
    - npm run dev, yarn dev
    - npm run build, yarn build
    - npm run preview, yarn preview
  ```jsx
  // CRA

  "scripts": {
      "start": "react-scripts start",
      "build": "react-scripts build",
      "test": "react-scripts test",
      "eject": "react-scripts eject"
    },

  //Vite

   "scripts": {
      "dev": "vite",
      "build": "vite build",
      "lint": "eslint .",
      "preview": "vite preview"
    },
  ```
- **config 파일**
  - CRA의 경우 내부 설정이 추상화되어 숨겨져 있지만, Vite는 **`vite.config.js`** 파일을 통해 직접 편집이 가능하다.
  ```jsx
  import { defineConfig } from "vite";
  import react from "@vitejs/plugin-react";

  // https://vite.dev/config/
  export default defineConfig({
    plugins: [react()],
  });
  ```
- **eslint 설정 파일 존재 여부**
  - CRA는 별도로 린트 설정 파일을 생성해 주어야 하고, Vite는 기본적으로 템플릿 안에 **`eslint.config.js`** 에서 린트 설정이 가능하다.
  ```jsx
  import js from "@eslint/js";
  import globals from "globals";
  import reactHooks from "eslint-plugin-react-hooks";
  import reactRefresh from "eslint-plugin-react-refresh";

  export default [
    { ignores: ["dist"] },
    {
      files: ["**/*.{js,jsx}"],
      languageOptions: {
        ecmaVersion: 2020,
        globals: globals.browser,
        parserOptions: {
          ecmaVersion: "latest",
          ecmaFeatures: { jsx: true },
          sourceType: "module",
        },
      },
      plugins: {
        "react-hooks": reactHooks,
        "react-refresh": reactRefresh,
      },
      rules: {
        ...js.configs.recommended.rules,
        ...reactHooks.configs.recommended.rules,
        "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
        "react-refresh/only-export-components": [
          "warn",
          { allowConstantExport: true },
        ],
      },
    },
  ];
  ```

### 👻 실행 결과

- **`CRA`**
    <img width="425" alt="Image" src="https://github.com/user-attachments/assets/5c4138ed-f8c7-4769-a78d-8947859c39de" />
    
    <img width="397" alt="Image" src="https://github.com/user-attachments/assets/bf297d05-89c2-48d7-b95f-df831d7c1f50" />

- **`Vite`**
    <img width="661" alt="Image" src="https://github.com/user-attachments/assets/f5a7e61a-4162-4ca4-b8a3-7627ace146c6" />
    
    <img width="647" alt="Image" src="https://github.com/user-attachments/assets/1cccfcf6-a3d2-49f5-81b0-8b6dbb30cba7" />

### 😮 결론

- **CRA를 선택할 때**
  - 테스트, 웹 바이탈 측정, 손쉬운 PWA 지원 기능과 함께 많은 기본 설정이 바로 제공되길 원할 때 사용
- **Vite를 선택할 때**
  - 빠르고 가벼운 개발 경험을 원할 때
  - 코드 변경과 반영이 빠르게 이루어지는 과정을 원할 때
  - 자유로운 설정 및 확장을 직접 커스텀하고 싶을 때
  - 번들 크기 최적화 및 빌드 속도 향상을 목적으로 할 때
