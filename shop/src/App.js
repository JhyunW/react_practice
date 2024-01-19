import {useState} from'react';
import './App.css';
import { Button, Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import data from './data.js'



function App() {

  let [shoes] = useState(data)

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">리액트 쇼필몰</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">홈</Nav.Link>
            <Nav.Link href="#features">제품</Nav.Link>
            <Nav.Link href="#pricing">환불</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="mainBg"></div>

      <Container>
      <Row>
        <Col>
        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%"/>
        <h4>{ shoes[0].title }</h4>
        <p>{ shoes[0].content }</p>
        <p>{ shoes[0].price }</p>

        </Col>
        <Col>
        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%"/>
        <h4>{ shoes[1].title }</h4>
        <p>{ shoes[1].content }</p>
        <p>{ shoes[1].price }</p>

        </Col>
        <Col>
        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%"/>
        <h4>상품명</h4>
        <p>상품 설명</p>
        </Col>
      </Row>
    </Container>
    
    </div>
  );
}

export default App;
