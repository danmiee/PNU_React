# React
[K-digital] PNU 22-1기

## 【 깃허브 페이지 생성방법 】
### 1. [깃허브] 새 리포지토리 생성
### 2. [터미널] 리포지토리와 프로젝트 연결
#### 1) 연결 전 상태 확인
```
git remote -v
```
#### 2) 새 리포지토리 연결
```
git remote add origin 새 리포지토리 주소
```
#### 3) 연결 후 상태 확인
```
git remote -v
```
### 3. [터미널] 프로젝트 push
```
git push -u origin master
```
### 4. [깃허브] push확인 및 서비스 사이트 주소 생성
#### 리포지토리 > Settings > Pages
#### Branch master 선택 후 Save
### 5. 로컬컴퓨터 React 프로젝트에 gh-pages 설치
```
npm install gh-pages --save-dev
```
### 6. [package.json] 홈페이지 주소 설정
#### "scripts" 내부에 추가
```
"predeploy": "npm run build",
"deploy": "gh-pages -d build",
```
#### "scripts" 아래에 추가
```
"homepage": "서비스 사이트 주소",
```
* 서비스 사이트 주소 : 4번에서 생성한 'io/리포지토리명/'으로 끝나는 주소
### 7. [터미널] gh-pages 배포
```
npm run deploy
```
### 8. [깃허브] 리포지토리 브랜치 재설정
  #### 리포지토리 > Settings > Pages
  #### Branch gh-pages 선택 후 Save

<hr />

## 221025 ( react-router-dom )
### [연결오류 다수 발생 사유]
#### 1. Routes 안에 모든 컴포넌트가 들어가있어서 첫화면 로딩 시 백지
  ##### [index.js] < BrowserRouter > 속성 추가
```
basename = {process.env.PUBLIC_URL}
```
#### 2. 프로젝트가 다른 리포지토리에 이미 연동되어있음
  ##### 기존 연결주소 삭제
```
git remote remove origin
```
#### 3. 오타
##### 터미널 및 6번에서 기재하는 사이트 주소 기재 시 타이핑 주의 필요
