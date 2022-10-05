// 컴포넌트 만들 때 이 형식 참고하기
/*
  컴포넌트(사용자정의 태그) : 기존 태그를 내마음대로 조합하는 것

  1. 컴포넌트는 반드시 대문자로 시작
    - camel 표기법 권장
  2. 컴포넌트 하나는 함수 하나
    - 함수 여러개 들어가는 경우는 결합임
  3. 정의된 함수에는 return이 있어야 함
    - JSX 문법형식으로 return
  4. return에는 기존 html태그가 "하나만" 존재
    - 자식태그는 넣을 수 있음
*/
import logo from './logo.svg';
import './App.css';
import MyTick from './components/MyTick';

// App : 사용자 정의 태그
function App() {
  console.log("APP Component");
  return (
      // JSX문법(html 태그와 다름)
        /*
          - JSX와 return의 차이점
          ㅇ 태그 속성의 class는 className으로 작성
          ㅇ id속성 사용 지양
          ㅇ 모든 태그는 닫아줘야함(닫는태그 없으면 ' /' 기재)
          ㅇ <img src={ *자바스크립트 표현식 작성 가능* }>
        */

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    <MyTick />  
    {/* // 작성만 하면 에러. 동일한 이름의 js(jsx)파일 생성해야함 */}
    </div>
  );
}

// default 외에 여러 형태로 export 가능
export default App;
