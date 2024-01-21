import { Button, Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import data from '../data.js'
import {useState} from'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';


export default function ProductList(props) {

    let [shoes] = useState(data)  // 되긴하는데 쓰면 안됨.
    let navigate = useNavigate(); // 페이지 이동 도와주는 훅

  return (
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
  );
}