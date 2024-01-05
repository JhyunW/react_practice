// 모든 경고 기능 끄기 /* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';  // 잠깐 저장하는 공간

function App() {

  
  let [post, setlogo] = 'BLOG'
  let[title, title_change] = useState(['남자 코트 추천', '맛집 추천', '프로젝트'])  // 잠깐 저장후 전달
  let [good, good_plus] = useState(0)  // 변화하는 변수 오른쪽에 두고 사용

  function plus() {
    good_plus(good+1)
  }

  function cloth_change() {
    if (title[0] === '남자 코트 추천') {
      let coat_copy = [...title]
      coat_copy[0] = '여자 코트 추천'
      title_change(coat_copy)
    }
    else {
      let coat_copy = [...title]
      coat_copy[0] = '남자 코트 추천'
      title_change(coat_copy)
    }
  }
  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그 프로젝트 {title_change}</h4>
      </div>
      <div className="list">
        <h4>{ title[0] } <span onClick={ plus }>🧡</span> { good } </h4><button onClick={cloth_change}>Change</button>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ title[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ title[2] }</h4>
        <p>2월 17일 발행</p>
      </div>

      <Modal></Modal>
      
      <h4 style={ {color : 'red', fontsize : '16px'} }> 블로그임 </h4>
    </div>
  );
}

function Modal() {
  return (
    <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

export default App;
