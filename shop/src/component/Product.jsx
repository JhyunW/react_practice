import { Button, Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import {useState} from'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios'





export default function ProductList({ shoes, shoesPlus, btnCount, btnClick }) {
    let navigate = useNavigate(); // 페이지 이동 도와주는 훅
    console.log(shoes)


  return (
    <>
    <Container>
      <Row>
        {shoes.map((product, index) => (
            <Col onClick={() => {navigate('/detail/' + index)}} key={index} md={4}>
            <img src={"https://codingapple1.github.io/shop/shoes"+ (index + 1) +".jpg"} width="80%"/>
            <h4>{ product.title }</h4>
            <p>{ product.content }</p>
            <p>{ product.price }</p>
            </Col>
        ))}
      </Row>
    </Container>
    { btnCount < 4 &&
      <button onClick={() => {
          axios.get(`https://codingapple1.github.io/shop/data${btnCount}.json`)
          .then((서버에서가져온데이터) => {
            shoesPlus([...shoes, ...서버에서가져온데이터.data])
        btnClick(btnCount + 1)})
          .catch(() => {console.log('실패')})
        }}>더보기버튼 state를 이용해서 불러오기</button>
      }
        </>
  );
}