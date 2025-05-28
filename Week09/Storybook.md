### 👾 Storybook

- **`스토리북이란?`**
  - 컴포넌트 단위 UI 개발을 위한 독립적인 작업 환경을 제공하는 도구
  - **`stories.tsx`** : 특정 컴포넌트를 문서화하고 시각적으로 테스트하기 위해 작성하는 파일
  - **`CDD?`**
    - 컴포넌트 구성 요소로부터 시작하여 화면으로 끝나는 바텀업 방식 UI 구축 프로세스

| 기능                         | 설명                                                          |
| ---------------------------- | ------------------------------------------------------------- |
| **컴포넌트 단위 개발 (CDD)** | 앱 전체가 아닌, 개별 컴포넌트만 따로 렌더링해서 개발 가능     |
| **상호작용 테스트**          | 버튼 클릭, 입력 이벤트 등의 동작을 UI 상에서 직접 테스트 가능 |
| **자동 문서화**              | 컴포넌트마다 props 설명, 예제 등을 자동으로 문서화            |
| **디자인 시스템 구축**       | 재사용 가능한 컴포넌트를 디자인 시스템처럼 관리 가능          |
| **플러그인 확장**            | controls, ally, viewport, actions, jest 등 다양한 애드온 제공 |

- **`개발 흐름`**
  - 프로젝트에 storybook 설치
  - \*.stories.tsx 파일 작성 (컴포넌트마다)
  - yarn storybook 혹은 npm run storybook으로 실행
  - 브라우저에서 UI 확인 및 테스트
  - 커스텀 문서화, 테스트 자동화 등 확장 가능
- **`설치`**
  - **npx storybook@latest init**
  - **yarn storybook**

> **\*.stories.tsx**

- **`Meta, StoryOb`**
  - **Component Story Format (CSF) 방식으로 컴포넌트의 스토리를 정의할 때 사용하는 타입**
- **`Meta`**
  - 해당 스토리 파일의 메타 정보
  - Storybook이 어떤 컴포넌트를 다루는지, 제목이 뭔지 등을 알 수 있도록 정의한다.
- **`StoryObj`**
  - 하나의 스토리(상태 시나리오)를 정의하는 객체
  - args를 통해 컴포넌트에 전달할 prop 값을 정의
  - 컴포넌트의 다양한 변형이나 상태를 시각적으로 테스트하기 위한 테스트 케이스

**📌 간단한 버튼과 폼으로 스토리북에 컴포넌트를 등록해 보자**

- **`요구사항`**
  - LikeBtn
    ![Image](https://github.com/user-attachments/assets/77c943ab-ac9b-400c-8056-846141c51941)
  - SignupForm
    ![Image](https://github.com/user-attachments/assets/d70fa872-3163-4871-aa7b-9d594e404827)
- **`코드`**
  ```tsx
  import { useState } from "react";

  type LikeBtnProps = {
    checkChanged: () => void;
  };

  const LikeBtn = ({ checkChanged }: LikeBtnProps) => {
    const [count, setCount] = useState<number>(0);
    const [isClicked, setIsClicked] = useState<boolean>(false);

    const handleClick = () => {
      checkChanged();

      if (isClicked) {
        setCount((prev) => prev - 1);
        setIsClicked((prev) => !prev);
      } else {
        setCount((prev) => prev + 1);
        setIsClicked((prev) => !prev);
      }
    };

    console.log(isClicked);
    return (
      <>
        <button
          onClick={handleClick}
          className={`w-20 h-10 rounded-md border-[2px] border-black cursor-pointer ${
            isClicked ? "bg-red-500" : "bg-pink-300"
          }`}
        >
          {count}
        </button>
      </>
    );
  };

  export default LikeBtn;
  ```
  ```tsx
  import type { Meta, StoryObj } from "@storybook/react";
  import { useState } from "react";
  import LikeBtn from "./LikeBtn";

  // Meta: 컴포넌트 전체에 대한 메타데이터를 정의하는 데 사용
  const meta: Meta<typeof LikeBtn> = {
    title: "Components/LikeBtn", // 스토리북에 title 이름으로 스토리를 등록하겠다 선언
    component: LikeBtn, // LikeBtn 컴포넌트를 스토리로 쓸 것임
    tags: ["autodocs"], // 자동으로 props 테이블을 생성하라고 지정
  };

  export default meta;

  // StoryObj: 개별 스토리를 정의할 때 타입을 안전하게 만들기 위한 타입
  type Story = StoryObj<typeof LikeBtn>;

  // 스토리북 상에서 상태 변화가 가능하도록 만드는 래퍼
  // App.tsx에 해당하는 코드를 작성했으나 스토리북에서 확인할 수 없으므로 래퍼를 여기에 선언하고 감싼 후, 상태 변경을 확인할 수 있도록 함
  const WithStateWrapper = () => {
    const [liked, setLiked] = useState(false);

    const handleChange = () => {
      setLiked((prev) => !prev);
      console.log(`👍 좋아요 상태가 ${!liked}로 변경되었습니다.`);
    };

    return <LikeBtn checkChanged={handleChange} />;
  };

  // 디폴트 스토리는 래퍼를 렌더링
  export const Default: Story = {
    render: () => <WithStateWrapper />,
  };
  ```
  ```tsx
  import { useState } from "react";

  type FormState = {
    email: string;
    password: string;
  };

  type ErrorMessageState = {
    email: string;
    password: string;
  };

  const SignupForm = () => {
    const [form, setForm] = useState<FormState>({ email: "", password: "" });

    const [errorMessage, setErrorMessage] = useState<ErrorMessageState>({
      email: "",
      password: "",
    });

    const onSubmit = () => {
      const newError = { email: "", password: "" };
      let hasError = false;

      if (!form.email.includes("@")) {
        newError.email = "이메일 형식을 확인해 주세요.";
        hasError = true;
      }

      if (form.password.length <= 6) {
        newError.password = "비밀번호는 6자 이상이어야 합니다.";
        hasError = true;
      }

      setErrorMessage(newError);

      if (!hasError) {
        alert("제출이 완료되었습니다.");
      }
    };

    return (
      <div className="flex flex-col gap-2">
        <p>Email</p>
        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="border-[1px] border-gray-400 rounded-md p-3"
        />
        <p className="text-xs text-red-600">{errorMessage.email}</p>
        <input
          placeholder="Password"
          value={form.password}
          type="password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="border-[1px] border-gray-400 rounded-md p-3"
        />
        <p className="text-xs text-red-600">{errorMessage.password}</p>
        <button
          className="bg-blue-300 h-12 rounded-md mt-3 font-semibold border-[2px] border-blue-800"
          onClick={onSubmit}
        >
          Submit
        </button>
      </div>
    );
  };

  export default SignupForm;
  ```
  ```tsx
  import type { Meta, StoryObj } from "@storybook/react";
  import SignupForm from "./SignupForm";

  const meta: Meta<typeof SignupForm> = {
    title: "Components/SignupForm",
    component: SignupForm,
    tags: ["autodocs"],
  };

  export default meta;

  type Story = StoryObj<typeof SignupForm>;

  export const Default: Story = {
    render: () => <SignupForm />,
  };
  ```

**🐣 Github-pages를 이용해 정적 배포하기**

1. Github의 정적 호스팅 서비스를 사용하기 위해서는 퍼블릭 레포를 파서 연결해 주어야 한다.
   1. 프라이빗 저장소 등록은 유료!
2. **`yarn add --dev gh-pages`**
3. **`"homepage": "https://dbstj0403.github.io/storybook-practice",`** 호스팅 주소를 package.json에 깃허브 사용자 이름 / 레포 이름을 넣어 등록해준다.
4. **`"deploy": "gh-pages -d storybook-static”`** 빌드 명령어 추가
5. **`yarn deploy`**

**😆✅ 배포 완료!**

![Image](https://github.com/user-attachments/assets/355ef8c4-8af6-4eec-ad91-71951655a98b)

### 🤔 공식 문서의 예제 뜯어보기

- **`Task.tsx`**
  ```tsx
  type TaskData = {
    id: string;
    title: string;
    state: "TASK_ARCHIVED" | "TASK_INBOX" | "TASK_PINNED";
  };

  type TaskProps = {
    /** Composition of the task */
    task: TaskData;
    /** Event to change the task to archived */
    onArchiveTask: (id: string) => void;
    /** Event to change the task to pinned */
    onPinTask: (id: string) => void;
  };

  export default function Task({
    task: { id, title, state },
    onArchiveTask,
    onPinTask,
  }: TaskProps) {
    return (
      <div className={`list-item ${state}`}>
        <label
          htmlFor={`archiveTask-${id}`}
          aria-label={`archiveTask-${id}`}
          className="checkbox"
        >
          <input
            type="checkbox"
            disabled={true}
            name="checked"
            id={`archiveTask-${id}`}
            checked={state === "TASK_ARCHIVED"}
          />
          <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
        </label>

        <label htmlFor={`title-${id}`} aria-label={title} className="title">
          <input
            type="text"
            value={title}
            readOnly={true}
            name="title"
            id={`title-${id}`}
            placeholder="Input title"
          />
        </label>
        {state !== "TASK_ARCHIVED" && (
          <button
            className="pin-button"
            onClick={() => onPinTask(id)}
            id={`pinTask-${id}`}
            aria-label={`pinTask-${id}`}
            key={`pinTask-${id}`}
          >
            <span className={`icon-star`} />
          </button>
        )}
      </div>
    );
  }
  ```
  - **`taskData 타입`**
    - 하나의 테스크를 표현하는 데이터 타입으로, 아이디/제목/상태로 이루어져있다.
    - 상태는 세 가지 값을 가질 수 있다.
  - **`Task 컴포넌트 역할`**
    - 테스크 고정, 테스크 보관, 테스크 표시
- **`Task.stories.tsx`**
  ```tsx
  import type { Meta, StoryObj } from "@storybook/react";

  import { fn } from "@storybook/test";

  import Task from "./Task";

  export const ActionsData = {
    onArchiveTask: fn(),
    onPinTask: fn(),
  };

  const meta = {
    component: Task,
    title: "Task",
    tags: ["autodocs"],
    //👇 Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
    args: {
      ...ActionsData,
    },
  } satisfies Meta<typeof Task>;

  export default meta;
  type Story = StoryObj<typeof meta>;

  export const Default: Story = {
    args: {
      task: {
        id: "1",
        title: "Test Task",
        state: "TASK_INBOX",
      },
    },
  };

  export const Pinned: Story = {
    args: {
      task: {
        ...Default.args.task,
        state: "TASK_PINNED",
      },
    },
  };

  export const Archived: Story = {
    args: {
      task: {
        ...Default.args.task,
        state: "TASK_ARCHIVED",
      },
    },
  };
  ```
  - **`ActionsData → mock 콜백`**
    - fn()은 mock 함수
    - 스토리북 내에서 버튼을 클릭해도 실제 API 호출 없이 동작만 추적한다.
  - **`meta`**
    - title: 스토리북 사이드에 보일 컴포넌트 이름
    - component: 어떤 컴포넌트를 스토리를 만들 것인지
    - args: 공통 props로 사용될 값들 (onPinTask, onArchiveTask)
    - excludeStories: “Data”로 끝나는 export는 스토리가 아님을 명시
  - **`개별 스토리 정의`**
    - args는 해당 스토리에서 넘겨줄 Props
    - 기본 상태인 inbox task 표기

      ```tsx
      export const Default: Story = {
        args: {
          task: {
            id: "1",
            title: "Test Task",
            state: "TASK_INBOX",
          },
        },
      };
      ```

      ![Image](https://github.com/user-attachments/assets/d31bb4e3-16ea-492b-92d6-fe27be8e8f85)

    - 기본 테스크 데이터를 복사하고 상태만 고정 상태로 바꾼 스토리
      ```tsx
      export const Pinned: Story = {
        args: {
          task: {
            ...Default.args.task,
            state: "TASK_PINNED",
          },
        },
      };
      ```
      ![Image](https://github.com/user-attachments/assets/0453ceeb-bbcc-4e1b-98b6-5c6205d5d399)
    - 보관 상태로 바꾼 스토리
      ```tsx
      export const Archived: Story = {
        args: {
          task: {
            ...Default.args.task,
            state: "TASK_ARCHIVED",
          },
        },
      };
      ```
      ![Image](https://github.com/user-attachments/assets/fcaeb12a-7c67-445a-9f6d-8fd7da44941e)
- **`onPinTask, onArchiveTask는 지금 정의만 있는데?`**
  - props로 받아오는 함수로, 현재 코드상에서는 정의만 해놓고 Mock 함수로 대체해 표기한다. 실제 코드에서는 부모 컴포넌트에서 받아오는 함수로 대체됨!
  - 컴포넌트 입장에서 외부에서 주어진 함수일 뿐이므로 어디서 어떻게 동작할지는 외부에서 정하는 것이기 때문에 재사용 가능하고 유연한 컴포넌트가 되는 것이다.
