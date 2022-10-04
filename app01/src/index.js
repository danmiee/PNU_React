import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// 생성한 컴포넌트 import로 등록
import App from './App';
import reportWebVitals from './reportWebVitals';

// 기본적인 가상돔 형성
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 지금부터 리액트 폼에 맞춰서 작성하기
  <React.StrictMode>
    {/* 컴포넌트(사용자정의 태그) 생성
      App.js에서 정의
      내가 만드는 컴포먼트는 반드시 대문자로 시작
    */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
