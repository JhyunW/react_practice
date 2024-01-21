## 메모
    1. 부트스트랩 적용법
        1-1. app.js에
        import 'bootstrap/dist/css/bootstrap.min.css';
        1-2. index.html의 헤더안에
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossorigin="anonymous"
        />      
        1-2. 간격설정은 한줄 12를 기준<Col md={4}> 식으로 설정

    2. 다른 파일에 컴포넌트를 나눠서 가져올떈 export, import필수
      2-1. export default 변수 / import 작명 from '파일주소'
      2-2. 여러개를 내보낼땐 export {변수1, 변수2}, import {변수1, 변수2} from '주소'


    3. react-router-dom Route는 해당 페이지에 보여주는 화면을 나타냄
      3-1. npm install react-router-dom @6  6버전으로설지 후 npm start
      3-2. index.js 파일에서 <App>위에 <BrowserRouter> 입력
      3-3. import { BrowserRouter } from 'react-router-dom';

    4. useNavigator
      4-1. 라우터의 원리인데 추가로
      ![Alt text](image.png)
      이렇게 사용 가능
      ![Alt text](image-1.png)
      아웃렛 쪽에 멤버가 나타남

## sub2 발표
mm에서 올라온 내용 확인하기