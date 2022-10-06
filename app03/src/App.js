import logo from './logo.svg';
import './App.css';

// 컴포넌트 = 함수 : parameter, return값 가짐
function App() {
  return (

    // return 안에 JSX 문법으로 1개의 태그 전달
    <div className="App">
      {/* babel에 의해 번역
      ∴ class : 클래스형 컴포넌트와 혼동 우려 */}

      {/* 자식요소로 태그 넣을 수 있음 */}
      {/* return 안에서 {} 사용하면 JS수식 사용가능 */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

    </div>
  );
}

export default App;
