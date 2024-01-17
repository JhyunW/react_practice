import logo from './logo.svg';
import './App.css';
import { useState } from 'react';  // 잠깐 저장하는 공간

function App() {

  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학'])
  // 사용시 오른쪽을 호출(왼쪽+상호작용) 시 왼쪽이 바뀜
  let [따봉, 따봉변경] = useState(0)
  let [modal, setModal] = useState(false)

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button onClick={()=> {
        let arraySort = [...글제목]
        arraySort.sort()  // 정렬하기
        글제목변경(arraySort) 
      }}> 가나다 순 정렬하기</button>

      <button onClick={()=> {
        // 보통 array를 변경할때 원본은 그대로 두는게 좋음
        // ...을 넣어서 리스트 불러와야함.
        // 화살표를 바꿔주세요 라는 느낌
        let copy = [...글제목]
        copy[0] = "여자코트 추천"
        글제목변경(copy)  // 이건 전의 데이터와 현재의 데이터가 같은걸 가르키나 확인하는 역할
      }}>글수정</button>

      <div className="list">
        <h4>{ 글제목[0] } <span onClick={()=> {따봉변경(따봉+1) }}>❤</span> { 따봉 } </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] } </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{ modal === true ? setModal(false) : setModal(true) }}>{ 글제목[2] } </h4>
        <p>2월 17일 발행</p>
      </div>

      { // 리스트.map(function(오브젝트, 0부터+1){return()} 식 리스트만큼 반복
        글제목.map(function(제목, i){
          return (
            <div className="list" key={i}>
              <h4 onClick={()=>{ modal === true ? setModal(false) : setModal(true) }}>{ 글제목[i] } </h4>
              <p>2월 17일 발행 <span onClick={()=> {따봉변경(따봉+1) }}>❤</span> { 따봉 } </p>
            </div>
          )
        })
      }
      
      {
        // 조건식 ? 참일때 실행할 코드 : 거짓일 때 실행할 코드
        modal === true ? <Modal /> : null
      }      
    </div>
  );
}

// const Modal = () => {} 식으로 모달을 만들수도 있음
function Modal() {
  return(
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
