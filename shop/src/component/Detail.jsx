import {useParams} from "react-router-dom"

export default function Detail(props) {

  // 유저가 :id자리에 적은거 가져와줌
  let {id} = useParams()

  return(
    <div className="container">
  <div className="row">
    <div className="col-md-6">
      <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
    </div>
    <div className="col-md-6">
      <h4 className="pt-5">{props.shoes[id].title}</h4>
      <p>{props.shoes[id].content}</p>
      <p>{props.shoes[id].price}</p>
      <button className="btn btn-danger">주문하기</button> 
    </div>
  </div>
</div> 
  )
}