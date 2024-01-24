import { useEffect, useState } from 'react'
import ProductList from './component/Product.jsx'
import Detail from './component/Detail.jsx'
import './App.css';
import { Button, Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import data from './data.js'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios'
import Cart from './component/Cart.jsx'




function App() {

  useEffect(() => {
    localStorage.setItem('watched', JSON.stringify( [] ))
  }, [])

  let [shoes, shoesPlus] = useState(data)
  let navigate = useNavigate(); // 페이지 이동 도와주는 훅
  // onClick={() => {navigate('/detail')}} 식으로 사용
  // onClick={() => {navigate(1 또는 -1)}} 앞으로 뒤로가기
  let [btnCount, btnClick] = useState(2)

  return (    
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">리액트 쇼필몰</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/cart">카트</Nav.Link>
            <Nav.Link href="#features">제품</Nav.Link>
            <Nav.Link href="/event/one">이벤트1</Nav.Link>
            <Nav.Link href="/event/two">이벤트2</Nav.Link>
            <Nav.Link href="/detail">상세페이지</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        <div className="mainBg"></div>
      <Routes>
        {/* Route하나당 한 페이지 */}
        < Route path="/" element={
          <ProductList shoes={shoes} shoesPlus={shoesPlus} btnCount={btnCount} btnClick={btnClick}></ProductList>
        } />

        {/* 주소/detail 페이지로 이동시에 위에 추가로 보이게 됨 */}
        < Route path="/detail/:id" element={<Detail shoes={shoes}></Detail>} />
        <Route path='/cart' element={ <Cart />}/>
        <Route path='*' element={<div>잘못된 요청</div>}/>

        <Route>
          <Route path="/event" element={ <Event></Event> }>
            <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>}></Route>
            <Route path="two" element={<div>생일기념 쿠폰받기</div>}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

function Event(){
  return(
    <>
    <h4>오늘의 이벤트</h4>
    <Outlet></Outlet>
    </>
  )
}

export default App;
