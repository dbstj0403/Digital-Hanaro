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
