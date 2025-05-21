### 👻 Next.js

- **리액트를 기반으로 한 풀스택 프레임워크이며, 고속 번들링과 다양한 렌더링 방식, API 핸들링 등을 지원하는 현대적인 웹 개발 플랫폼**
- **`기술`**
  - 리액트
  - Turbopack
    - 러스트 기반 번들러 (웹팩보다 빠름)
    - 빠른 HMR 성능 제공 → Hot Module Replacement의 약자로 웹 개발에서 코드를 수정했을 때 페이지 전체를 새로고침하지 않고도 변경된 모듈만 실시간으로 갱신해 주는 것
    - SWC → 러스트로 작성된 빠른 컴파일러로, 바벨보다 빠르게 타입스크립트, jsx 등을 변환

### 😺 다양한 렌더링 방식

> **SSG**

- 빌드시 HTML을 미리 생성해 놓는다. (getStaticProps)
  - 서버에서는 정적 파일만 제공
  - 페이지는 CDN을 통해 빠르게 응답
- 페이지를 요청하면 미리 만든 HTML을 그대로 보여준다. → 빠르고, 서버 부담이 없다.
- **`작동 방식`**
  - 프로젝트 빌드 타임에 모든 페이지를 미리 생성한다.
  - 요청 시 즉시 전달 (서버에서 렌더링 안 함)
- 엄청 빠르고, 서버 부하가 없으며 SEO에 유리하다.
- 하지만 실시간 데이터 반영이 어려우며, 페이지 수가 많을 경우 빌드 시간이 오래 걸린다.

> **SSR**

- 요청시마다 서버에서 HTML을 생성해서 응답 (getServerSideProps)
- 매번 서버가 필요하고 느릴 수 있다.
- 클라이언트는 HTML을 받아 곧바로 보여줄 수 있다.
- **`작동 방식`**
  - 사용자가 페이지 요청
  - 서버가 데이터 조회 + 템플릿 렌더링 → HTML 생성
  - HTML 응답
  - 클라이언트에서 JS가 hydrate (동적 기능 붙이기)
- SEO에 좋음 (검색 엔진이 완성된 HTML을 받으므로)
- 첫 로딩이 빠르다.

> **ISR**

- 정적 페이지를 주기적으로 재생성한다. → 빠르고 최신성도 확보할 수 있다.
- SSG를 점진적으로 수행한다. (유효 기한, 갱신 기간 등 적용)
- SSG의 정적 생성을 페이지별로, 요청에 따라 점진적으로 수행한다.
  - 기존의 HTML은 사용하고, 일정 시간마다 백그라운드에서 재생성
- **`작동 방식`**
  - 첫 요청 시 정적 파일이 없다면 서버가 HTML을 생성
  - 이후 요청에서는 해당 HTML을 제공
  - 설정된 시간이 지나면 백그라운드에서 새로 생성
- SSG처럼 빠르고, SSR처럼 실시간 데이터 제공이 가능하다.
  - 완전히 실시간은 아님! ❌

> **CSR**

- Client에서 JS를 실행하여 화면 처리 (SEO에 불리)
- **`작동 방식`**
  - 브라우저가 빈 HTML과 JavaScript 파일을 받는다.
  - JS가 실행되면서 리액트 등으로 화면 구성
  - API 요청 등을 통해 데이터를 받아와서 UI 완성
- 페이지간 전환이 매우 빠르며, 사용자 인터랙션 중심 앱에 유리하다. (SPA)
- 첫 로딩이 느리다. (JS가 실행되기 전까지는 빈 화면)
- 크롤러가 내용이 없는 HTML만 받으므로 SEO 불리!
- React, Vue SPA

### 🦦 Server Component vs Client Component

**`Server Component`**

- Next.js의 모든 컴포넌트는 기본적으로 서버 컴포넌트이다.
- 서버 컴포넌트는 서버 사이드 상에서 작동하기 때문에 서버의 파일을 읽을 수 있고, 데이터베이스에서 자료를 직접 가져올 수 있다.
- 대신 리액트 훅이나 기존 자바스크립트를 이용한 유저 상호작용은 구현할 수 없다.
  - useState, useEffect 등의 동작 불가 🙅🏻‍♀️

**`Client Component`**

- 클라이언트 컴포넌트로 지정하기 위해서는 컴포넌트 최상단에 **`“use client”`** 를 추가해야 한다.
- 해당 컴포넌트는 클라이언트 사이드에서 렌더링 되므로, 우리가 알고 있는 모든 리액트 훅과 유저 상호작용이 가능하다.

### 💥 컴포넌트 계층 구조

- 특수한 파일들에 정의된 컴포넌트들은 정해진 계층 구조에 따라 렌더링된다.
  ![Image](https://github.com/user-attachments/assets/2cf36aa4-1f8c-41a4-9503-2018a766d5d5)
- **layout.tsx**
  - 모든 하위 페이지를 감싸는 공통 레이아웃
  - 자식 컴포넌트가 변해도 다시 렌더링되지 않는다.
- **template.tsx**
  - layout.tsx와 유사하나, 경로 변경이 있을 때 다시 생성된다.
  - 폼 초기화, 애니메이션 등 새로 렌더링이 필요할 때 사용한다.
- **loading.tsx**
  - fetch 중 로딩 표시용 컴포넌트
- **not-found.tsx**
  - notFound() 호출될 때 표시
- **page.tsx**
  - 해당 경로에서 실제 렌더링될 컨텐츠, 페이지의 주 컨텐츠를 그리는 컴포넌트

### ☘️ Routing

- 페이지 구성 요소가 경로 구조와 함께 정의되어 있다.
- app 디렉토리 안의 중첩된 폴더 구조를 통해 라우트 구조가 정의된다.
  - **`app > dashboard > page.tsx → localhost:3000/dashboard`**
  - page.tsx, layout.tsx 와 같은 특수 파일만 라우팅 대상으로 하며, 폴더 내에 page.tsx 혹은 route가 있어야 해당 라우트가 사용자에게 공개된다.
- **`라우트 그룹`**
  - 폴더 이름을 괄호로 감싸는 방식으로 생성한다.
  - **해당 폴더는 URL 경로에 포함되지 않고, 폴더 구조상 정리 목적으로만 사용**
    - **`app > (group) > dashboard > page.tsx → localhost:3000/dashboard`**
  - 사이트 구조나 목적, 팀 단위에 따라 경로를 나누고 정리할 때
  - 같은 경로 세그먼트 레벨에서 서로 다른 중첩 레이아웃을 적용하고 싶을 때
  - 공통 세그먼트 내 일부 경로에만 레이아웃을 적용하고 싶을 때
- **`중첩 라우트`**
  - 여러 개의 URL 세그먼트로 구성된 경로
    ![Image](https://github.com/user-attachments/assets/b861bbf9-bb0c-4be9-89f6-8cc3150ced5c)

### 🦉 경로 이동 처리

- <Link> 컴포넌트 사용
- 클라이언트 컴포넌트에서 useRouter 훅 사용
- 서버 컴포넌트에서 redirect 함수 사용
- 브라우저의 기본 History API 사용

### ⭐️ 동적 세그먼트

- 폴더명이나 파일명에 [param] 을 사용하면 해당 자리에 오는 값을 동적으로 처리할 수 있다.
  ```tsx
  app/
   └─ product/
       └─ [id]/
           └─ page.tsx
  ```
- **`page.tsx`** 에서 파라미터 받기
  ```tsx
  // app/product/[id]/page.tsx
  type Props = {
    params: Promise<{ id: string }>;
  };

  export default function ProductPage({ params }: Props) {
    return (
      <div>
        <h1>상품 ID: {params.id}</h1>
      </div>
    );
  }
  ```
  - Next.js는 자동으로 params 객체를 컴포넌트에 prop으로 전달한다.
- 중첩 동적 파라미터
  ```tsx
  // app/blog/[year]/[slug]/page.tsx
  export default function BlogPost({
    params,
  }: {
    params: { year: string; slug: string };
  }) {
    return (
      <h1>
        {params.year} - {params.slug}
      </h1>
    );
  }
  ```
- 쿼리 스트링 받기
  ```tsx
  // search?q=apple
  export default function SearchPage({
    searchParams,
  }: {
    searchParams: { q: string };
  }) {
    return <p>검색어: {searchParams.q}</p>;
  }
  ```

### 💦 generateStaticParams 함수

- 동적 라우트 세그먼트와 함께 사용되어, 요청 시마다 경로를 생성하는 대신 빌드 시점에 **`정적으로 라우트를 생성하는 함수`** 이다.
- 빌드 시에 O는 static, 채워진 O는 SSG로 미리 서버측에서 렌더링된 파일을 의미한다. (f의 경우 동적 렌더링)
  ![Image](https://github.com/user-attachments/assets/bb02a471-301a-47c8-bc23-d66a11b73051)
  - [id]는 동적인 값인데, 어떻게 SSG 방식으로 렌더링했을까?
    - generateStaticParams 함수를 사용하여 미리 존재하는 id 값을 모두 가져와서 정적으로 렌더링하기!
- **`코드`**
  ```tsx
  // app/products/[id]/page.tsx

  interface ProductPageProps {
    params: Promise<{ id: string }>;
  }

  const ProductPage = async ({ params }: ProductPageProps) => {
    const { id } = await params;
    return <p>Product Page of {id}</p>;
  };

  export default ProductPage;

  export async function generateStaticParams() {
    return [{ id: "1" }, { id: "2" }, { id: "3" }];
  }
  ```
  - **주의할 점! → Next.js 15에서 params와 searchParams가 비동기 API로 변경되었기 때문에 비동기적으로 처리해야 한다.**
