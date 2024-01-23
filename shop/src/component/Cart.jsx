import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux"
import { changeName, plusAge } from "./../store/userSlice.jsx"

function Cart() {
// Redux.store를 가져와줌
let a = useSelector((state) => {return state.user})
console.log(a)
let inCart = useSelector((state) => {return state.inCart})
// store.js로 요청을 보내주는 함수
let dispatch = useDispatch()

  return (
    <div>

        {a.name}의 장바구니
        {a.age} 살
        <button onClick={() => {
                dispatch(plusAge(100))
            }}>버튼</button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {inCart.map((shoes, index) => (
            <tr key={index}>
              <td>1</td>
              <td>{shoes.name}</td>
              <td>{shoes.count}</td>
              <td>@mdo</td>
            </tr>
          ))}
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td><button onClick={() => {
                dispatch(changeName())
            }}>+</button></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
