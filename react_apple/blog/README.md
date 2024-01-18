## 배운것
  1. 부모 -> 자식 스테이트 전송법
    - 사용하는 컴포넌트에 <자식컴포넌트 작명={state이름>} 식으로 지정
    - props파라미더 등록 후 props작명 사용

  2. input, select, textarea 태그 등 존재
    - input에서 type = "range", "text", "checkbox", "date" 등 입력란 정할수있음
    - onChange = {()=> { ??? }} => 유저가 타이핑마다 즉 매 변화마다 코드실행
    - onInput = {()=> { ??? }}도 같은 기능
    - onMouseOver : 마우스를 올렸을때 실행 onScroll도 있음

  3. state만드는법
    - css정의
    - 변환함수 정의
    - 사용

  4. 이벤트 버블링을 막는 코드
    - e.stopPropagation()