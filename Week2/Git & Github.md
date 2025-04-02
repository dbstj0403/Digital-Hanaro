### 🪴 Git

- 프로젝트를 진행할 때 버전과 변경 이력을 관리해야 한다.
- **`분산형 소스코드 버전 관리 시스템`**
  - 개발자가 원하는 시점마다 깃발을 꽂고, 해당 시점들로 자유롭게 이동이 가능하다.
  - 이력 기록을 통해 누가 언제 어떤 파일을 수정했는지 알 수 있다.
  - 각 개발자가 작업을 수행하고, 통합하는 등 변경 이력을 합칠 수 있다.

> **Github과 Git은 다르다!**

- Git으로 관리하는 프로젝트를 올려 둘 수 있는 Git 호스팅 사이트.
- 호스팅 서비스 및 빌드, 배포 자동화, 공개/비공개 저장소 제공
  ![Image](https://github.com/user-attachments/assets/70314ab4-899f-497c-8e32-d8ee9c48bc7e)

> **Git의 작업 영역**

| **Working Directory** | 이력 관리 대상 파일들이 위치한 공간. 지정된 디렉토리에서 .git 폴더를 제외한 공간. |
| --------------------- | --------------------------------------------------------------------------------- |
| **Staging Area**      | 이력을 기록할, 다시 말해 커밋할 대상 파일들이 위치하는 영역.                      |
| **Repository**        | 이력이 기록된 파일들이 위치하는 영역.                                             |

> **로컬 저장소**

- ‘git init’ 명령어를 통해 초기화 후, 지역 저장소로 지정한다.
  - 해당 폴더에 **`.git`** 폴더가 ‘숨김파일’ 속성으로 생성

### 🎨 Git이 관리하는 파일 상태

![Image](https://github.com/user-attachments/assets/c92374e3-51da-4ec8-95ab-7c715ff800e2)

```jsx
- Git에서 관리하는 파일들은 각각 modified, staged, commited 3가지의 상태를 가진다.
- 각 상태는 working directory, staging area, repository 영역으로 구분된다.
```

- 원격 레포로부터 **`git clone`**을 받을 경우, 해당 영역은 **`working directory`**가 된다. 그리고 그 파일을 수정하면 **`modified`** 상태가 되며, 레포에 커밋하기 전에 **`git add`** 명령어로 **`staging area`** 영역에 올리면 파일은 **`staged`** 상태가 되었다고 할 수 있다.
- 이 상태에서는 **`commit`**을 할 수 있으며 **`commiteed`** 상태가 되면 레포에 커밋되었다고 한다.

> ☝🏻 **Untracked** : Git이 아직 추적하지 않는 파일. git add 한 적 없고, 커밋 이력에 포함되지 않음. 새로 만든 파일, 외부에서 복사해 온 파일 등이 이에 해당함.

✌🏻 **UnModified** : Git이 추적 중이며, 마지막 커밋 이후 변경사항이 없는 파일.

🙌🏻 **Modified** : 관리대상 파일이 수정되고 커밋이 되지 않은 상태.

🫶🏻 **Staged** : 수정된 파일이 staging area에 있는 상태.

>

### 👾 기본적인 Git 명령어

**`git status`**

![Image](https://github.com/user-attachments/assets/88df69d0-18d5-45d3-8da2-f74277e1af48)

→ 현재 repository의 상태를 보여준다.

**`Commit`**

```jsx
git add .
git commit -m "Feat: Add Login Function"
git push origin main
```

→ 생성된 각각의 버전, 버전 관리를 통해 생성된 파일 또는 행위

**`git log`**

![Image](https://github.com/user-attachments/assets/0c259299-893d-452a-80d7-c02937765293)

→ 지금까지 쌓인 커밋을 확인할 수 있다.

**`git checkout`**

→ 원하는 지점으로 파일을 돌린다. git log를 통해 원하는 커밋 지점 복사해 온 후 checkout 뒤에 넣어주기.

→ **`git checkout -`** 는 최신 커밋으로 파일을 되돌린다.

**`git remote add origin`**

→ 로컬 저장소에 원격 저장소 주소를 연결하는 명령어.

**`git push origin [branch]`**

→ 원격 저장소에 커밋들 올리기. 브랜치별로 업로드 가능하다.

**`.gitignore`**

→ Git으로 관리할 필요가 없는 파일들을 무시하도록 목록화하는 파일.

**`git commit —amend`**

→ 커밋 메시지를 수정하려면 -m 옵션 사용

→ 저자 정보를 수정하려면 —author 사용

→ 커밋 메시지를 수정하지 않고 커밋하려면 —no-edit 사용

**`git restore —staged`**

→ staging area에서 파일을 복원하는 데 사용한다. (스테이징된 파일을 언스테이징하여 다시 커밋되지 않도록 설정!)

→ 파일을 스테이징 영역에서만 복원하고, 작업 디렉토리 내용은 그대로 유지.

→ git restore [file name] 마지막 커밋 상태로 복원한다.

**`git rm —cache`**

→ 스테이징 영역에서 파일을 제거할 때 사용한다.

### ⭐️ Branch

> **브랜치란?**

- 특정 기준에서 줄기를 나누어 작업할 수 있는 기능
- main, origin/main : Git이 기본적으로 제공하는 브랜치
- 여러 개발자가 서로 다른 버전의 코드를 만들 때 서로 작업의 영향을 받지 않는다.

![Image](https://github.com/user-attachments/assets/e4fb1018-e2ab-4824-bc9d-9b16c4bed622)

```
git branch -> branch 전체 보기
git branch [branch name] : branch 생성
git checkout [branch name] : 전환
git switch [branch name] : 전환
git checkout -b [branch name] : 생성 + 이동
git switch -c [branch name] : 생성 + 이동
git branch -d [branch name] : 삭제
git fetch -p : 다른 폴더에서는 fetch -p 해야 브랜치 삭제 적용됨.
```

### 🐒 Git merge & rebase

- **`merge`**

  - 브랜치 합치기

    ![Image](https://github.com/user-attachments/assets/202db1ae-18b0-4c70-af71-ead4cc569c9d)

- **`불필요한 브랜치 삭제`**
  - `git branch -d [branch name]` : 병합이 완료된 브랜치 삭제
  - `git branch -D [branch name]` : 병합되지 않은 브랜치 삭제

| **Fast-Forward merge** | 시간의 흐름대로 커밋된 내역을 병합. 충돌 발생 없고 100% Auto-merge, merge 후 모든 커밋이 복제된다. |
| ---------------------- | -------------------------------------------------------------------------------------------------- |
| **3-Way merge**        | 두 개 이상의 브랜치로 파생된 커밋을 병합한다. 충돌 가능성이 있으며, 병합 메시지가 존재.            |
| Rebase                 | 공통조상 (base) 병합. 3-Way → Fast-Forward화                                                       |

> **Fast-Forward merge**

- 새로운 브랜치에만 커밋이 발생하고, 기준 브랜치에는 커밋이 없는 경우.
  ![Image](https://github.com/user-attachments/assets/2636ee7c-321c-44ee-99a5-995f22f998b1)
- 기준이 되는 브랜치에 신규 커밋이 없으면 자동으로 fast-forward merge가 발동된다.
  - `git merge --no-ff [branch name]`으로 강제 3-Way merge 가능.

> **3-Way merge**

- 브랜치에 각각 새로운 커밋이 1회 이상 발생한 경우
  - `git merge` 명령으로 두 브랜치의 코드를 합쳐서 새로운 커밋 생성
    ![Image](https://github.com/user-attachments/assets/6e3bdabe-a384-49ab-8d2a-467ba27ebc8c)

> **Rebase merge**

- rebase를 이용해서 신규 브랜치의 시작점을 main 브랜치 최근 커밋으로 이동 → 이후 fast-forward merge를 통해 깃 히스토리를 깔끔하게 유지할 수 있다.

  ![Image](https://github.com/user-attachments/assets/e989afab-4636-471f-8bf8-36b013bc61f5)

  - **`신규 브랜치에서 기준 브랜치 내용을 깔끔하게 합칠 때 사용하는 것이지 기준 브랜치에서 사용하는 것이 아님!`**

> **3-Way merge vs rebase merge**

![Image](https://github.com/user-attachments/assets/419b5995-e4cf-47cc-99ac-8db984527c06)

> **squash & merge**

- 브랜치에서 만들었던 커밋을 합쳐서 하나의 커밋으로 메인 브랜치에 생성해 준다.
- Git history를 깔끔하게 유지할 수 있다.
- **`git merge —squash [branch name]`**

  ![Image](https://github.com/user-attachments/assets/0c70920c-104d-4f66-9406-653e79a40ec5)

### 💦 Git reset, revert & tag

- **`restore`**
  - 파일 하나를 되돌리는 경우
  - **`git restore [file name]`** : 최근 커밋된 상태로 현재 파일의 내용을 되돌린다.
  - **`git restore —source [commit ID] [file name]`** : 특정 커밋 시점으로 복구한다.
  - **`git restore —staged [file name]`** : 스테이징을 되돌린다.
- **`revert`**
  - 커밋을 되돌리는 경우
  - 과거의 커밋을 삭제할 수는 없다.
  - **`git revert [commit ID]`** : 커밋을 취소한 커밋을 생성, 커밋 메시지를 작성해야 한다.
  - **`git revert HEAD`** : 방금 생성한 커밋 취소
    - merge commit도 취소 가능
- **`reset`**
  - **`git reset —hard [commit ID]`** : 해당 커밋이 생성된 시간으로 모든 걸 되돌린다.
    - 협업시 사용하면 위험할 수 있음!
  - **`git reset —soft [commit ID]`** : 해당 커밋이 생성된 시간으로 모든 걸 되돌리나 변동사항을 지우지 않고 staged 상태로 한다.
  - **`git reset —mixed [commit ID]`** : 해당 커밋이 생성된 시간으로 모든 걸 되돌리나 변동사항을 지우지 않고 unstaged 상태로 한다.
- **`tag`**
  - 배포 꼬리표, 특정 커밋 태깅
  - 예를 들어 `main` 브랜치에서 v1.0 버전을 릴리즈했다면
    ```bash
    git tag v1.0
    ```
    → `v1.0`이라는 태그가 현재 커밋에 달림

### ⛅️ Git Flow

- 여러 사람이 동시에 개발을 진행할 때 발생할 수 있는 혼란을 방지하고, 코드의 품질과 안정성을 유지하고자 한다.
  - 명확한 브랜치 구조
  - 효율적인 협업
  - 안정적인 릴리즈 관리
  - 버전 관리 및 롤백 용이

```
- main : 배포 가능한 상태를 항상 유지
- develop : 최신 개발 버전
- feature/ : 각 기능 개발 진행
- release/ : 배포 준비 완료된 상태 (develop에서 분기되어 완료 후 main, devleop에 병합)
- hotfix/ : 배포된 코드에서 긴급 버그 수정
```

![Image](https://github.com/user-attachments/assets/528527c9-851e-4d25-b5ef-a73e2dbece18)

### 🍷 Github Actions

- **CI/CD**
  - CI : 지속적 통합 (Continuous Integration). 저장소에 전달하는 것까지 프로덕션 환경으로 서비스를 배포할 수 있도로 준비하는 프로세스.
  - CD : 지속적 전달 (Continuous Delivery). 저장소로 전달된 프로덕션 서비스를 실제 사용자들에게 배포하는 프로세스
- **Github Actions**
  - Github에서 제공하는 CI/CD 도구
  - 레포 내에서 특정 이벤트에 반응하여 자동으로 특정 작업을 실행하도록 설정한다.
  - 이로써 빌드, 테스트, 배포 등을 자동화!

**`코어 개념`**

- **Workflow**
  - 정의된 작업들의 집합. YAML 형식으로 .github/workflow 폴더에 저장한다.
  - 워크플로우는 이벤트에 의해 트리거되며, 각 워크플로우는 하나 이상의 job으로 구성된다.
- **Job**
  - job은 하나 이상의 단계(step)으로 구성된다. 각각의 job은 독립적으로 실행되며, 실행되는 환경도 설정 가능하다.
- **Step**
  - 각 단계는 하나의 작업을 수행하는 명령어.
- **Action**
  - Github Action workflow에서 실행할 수 있는 개별 작업.
  - 코드 빌드, 테스트 실행, AWS 배포 등이 액션으로 구현될 수 있따.
- **Event**
  - workflow를 트리거하는 조건. (push, pull, PR, Issue etc.)
- **Runner**
  - Github Action Runner 애플리케이션이 설치된 머신으로, 워크플로우가 실행될 인스턴스.
