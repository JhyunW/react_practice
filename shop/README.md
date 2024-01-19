## 메모
    1. 부트스트랩 적용법
        1-1. app.js에
        import 'bootstrap/dist/css/bootstrap.min.css';
        2-2. index.html의 헤더안에
        <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
  crossorigin="anonymous"
/>

    2. 다른 파일에 컴포넌트를 나눠서 가져올떈 export, import필수
      2-1. export default 변수 / import 작명 from '파일주소'
      2-2. 여러개를 내보낼땐 export {변수1, 변수2}, import {변수1, 변수2} from '주소'

## sub2 발표
mm에서 올라온 내용 확인하기