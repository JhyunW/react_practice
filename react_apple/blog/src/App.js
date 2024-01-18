import "./App.css";
import { useState } from "react"; // 잠깐 저장하는 공간

function App() {
  let date = new Date();
  let [글제목, 글제목변경] = useState(["리액트기초", "한번해보는", "결과물"]);
  // 사용시 오른쪽을 호출(왼쪽+상호작용) 시 왼쪽이 바뀜
  let 리스트길이 = [];
  글제목.map(function (글, i) {
    리스트길이.push(0);
  });
  let [따봉, 따봉변경] = useState(리스트길이);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState("");
  let [현재시간, 변경시간] = useState([date, date, date]);
  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button
        onClick={() => {
          let arraySort = [...글제목];
          arraySort.sort(); // 정렬하기
          글제목변경(arraySort);
        }}
      >
        {" "}
        가나다 순 정렬하기
      </button>

      <button
        onClick={() => {
          // 보통 array를 변경할때 원본은 그대로 두는게 좋음
          // ...을 넣어서 리스트 불러와야함.
          let copy = [...글제목]; // 카피본 만들기
          copy[0] = "여자코트 추천"; // 카피본 수정
          글제목변경(copy); // 이건 전의 데이터와 현재의 데이터가 같은걸 가르키나 확인하는 역할
        }}
      >
        글수정
      </button>

      {
        // 리스트.map(function(오브젝트, 0부터+1){return()} 식 리스트만큼 반복
        글제목.map(function (제목, i) {
          return (
            <div className="list" key={i}>
              <h4
                onClick={() => {
                  setModal(true);
                  setTitle(i);
                }}
              >
                {글제목[i]}{" "}
              </h4>
              <p>
                2월 17일 발행{" "}
                <span
                  onClick={(e) => {
                    e.stopPropagation(); // 이벤트 버블링을 막는 코드
                    // 복사체를 만들어 그 복사체를 수정해주고 그 수정한걸 바꿀함수에 넣기
                    let ddabong = [...따봉];
                    ddabong[i] = ddabong[i] + 1;
                    따봉변경(ddabong);
                  }}
                >
                  ❤
                </span>{" "}
                {따봉[i]}{" "}
              </p>
              {/* 현재시간 나타내는법 */}
              <p>{현재시간[i].toLocaleString()}</p>
              <button
                onClick={() => {
                  let deleteList = [...글제목];
                  deleteList.splice(i, 1); // i인덱스부터 1개 제거
                  글제목변경(deleteList);
                }}
              >
                삭제하기
              </button>
            </div>
          );
        })
      }
      {/* e는 이벤트 객체로 이벤트로 발생한 변수 */}
      {/* e.target.value 로 입력한 값 가져오기 가능 */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // trim()은 양옆 공백 지우기
          if (입력값.trim() === "") {
            // 입력값이 비어있으면 작업수행x
            return;
          }
          let newList = [입력값, ...글제목]; // newList.unshift(입력값)
          글제목변경(newList);
          입력값변경(""); // 입한 필드 초기화
          // 따봉 추가
          let newDdabong = [0, ...따봉];
          따봉변경(newDdabong);
          let 시간추가 = [date, ...현재시간];
          변경시간(시간추가);
        }}
      >
        <input
          value={입력값}
          onChange={(e) => {
            입력값변경(e.target.value);
          }}
        ></input>
        <button type="submit">글 작성</button>
      </form>

      {
        // 조건식 ? 참일때 실행할 코드 : 거짓일 때 실행할 코드
        modal === true ? (
          <Modal
            color={"skyblue"}
            글제목={글제목}
            글제목변경={글제목변경}
            title={title}
          />
        ) : null
      }
    </div>
  );
}

// const Modal = () => {} 식으로 모달을 만들수도 있음
function Modal(props) {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      {/* 누르면 첫 글 제목이 여자코트 추천으로 */}
      <button>글수정</button>
    </div>
  );
}

export default App;
