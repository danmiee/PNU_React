// 컴포넌트 만들 때 이 형식 참고하기
/*
  컴포넌트(사용자정의 태그) : 기존 태그를 내마음대로 조합하는 것

  1. 컴포넌트는 반드시 대문자로 시작
  2. 컴포넌트 하나는 함수 하나
    - 함수 여러개 들어가는 경우는 결합임
  3. 정의된 함수에는 return이 있어야 함
  4. return에는 기존 html태그가 "하나만" 존재
    - 자식태그는 넣을 수 있음
*/

import logo from './logo.svg';
import './App.css';

// App : 사용자 정의 태그
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
