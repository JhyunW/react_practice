import { Button, Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import data from './data.js'
import {useState} from'react';

export default function ProductList() {

    let [shoes] = useState(data)

  return (
    <>
    <Container>
        {shoes.map((product, index) => (
            <Col>
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%"/>
            <h4>{ product.title }</h4>
            <p>{ product.content }</p>
            <p>{ product.price }</p>
            </Col>
            {index % 3 === 0 && index !== 0 && </Container>
            <Container>}
        ))}
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
    </>
  );
}