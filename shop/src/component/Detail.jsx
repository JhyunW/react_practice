import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';


function Detail(props) {

  // 유저가 :id자리에 적은거 가져와줌
  let { id } = useParams();
  id = parseInt(id);
  let 찾은상품 = props.shoes.find(function (x) {
    return x.id === id;
  });
  let [ sale, setAlert] = useState(true)
  let [num, setNum] = useState('')
  let [ tab, setTab] = useState(0)


  useEffect(() =>{
    // 2초가 지나면 div 제거
    const timer = setTimeout(() => {
      setAlert(false);
    }, 2000);

    return () => {
      clearTimeout(timer)
    }
  },[])

  useEffect(() => {
    if(isNaN(num) === true){
      alert('숫자만 입력하세요')
    }
  }, [num])

  return (
    <div id="container">
      {
        sale === true
        ?
      <div className="alert alert-warning">
        2초 이내 구매시 할인
      </div>
      : null
      }
      <div className="row">
        <div className="col-md-6">
          <img
            src={
              "https://codingapple1.github.io/shop/shoes" + (id + 1) + ".jpg"
            }
            width="100%"
            alt={찾은상품.title}
          />
        </div>
        <input onChange={(e) => { setNum(e.target.value)}}></input>
        <div className="col-md-6">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>

      <Nav justify variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link onClick={()=>{setTab(0)}} eventKey="link-1">Loooonger NavLink</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={()=>{setTab(1)}} eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={()=>{setTab(2)}} eventKey="link-3">Link3</Nav.Link>
      </Nav.Item>
      </Nav.Item>
    </Nav>
    <TabContent shoes={찾은상품} tab={tab}/>

    </div>
  );
}
// props를 {변수명} 으로 사용 가능
function TabContent({shoes, tab}) {

  let[fade, setFade] = useState()

  // props.tab에 변화 즉 이동할때마다 fade에 end생성
  useEffect(()=>{
    let a = setTimeout(() =>{setFade('end')}, 100)

    // 실행전에 비워주기
    return () => {
      clearTimeout(a)
      setFade('')
    }
  }, [tab])

    return (<div className={`start ${fade}`}>
      {[<div>{shoes.title}</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>)
}



export default Detail;