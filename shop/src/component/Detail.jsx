import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";


export default function Detail(props) {

  // 유저가 :id자리에 적은거 가져와줌
  let { id } = useParams();
  id = parseInt(id);
  let 찾은상품 = props.shoes.find(function (x) {
    return x.id === id;
  });
  let [ sale, setAlert] = useState(true)
  let [num, setNum] = useState('')

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
    </div>
  );
}
