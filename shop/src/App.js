import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
import 작명 from './1.jpg'
import { useState } from 'react';
import data from './data.js';



function App() {
  let [shoes] = useState(data)

  // 컴포넌트화시켜보기 + 데이터바인딩 + map
  

  return (
    
    <div className='App'>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">휠라</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">홈</Nav.Link>
            <Nav.Link href="#features">장바구니</Nav.Link>
          </Nav>
        </Container>
      </Navbar>



      {/* <Button variant="primary">Primary</Button>{' '} */}
      <div className='main-bg' style={{backgroundImage :'url('+작명+')'}}>
        {/* 이미지 넣을때 */}
      </div>


      <Container>
      <Row>
        <list />
        {/* <Col sm>
          <img  src='https://codingapple1.github.io/shop/shoes1.jpg' width={'80%'}/>
          <h4>{shoes[0]['title']}</h4>
          <p>{shoes[0].content}</p>
          <p>{shoes[0].price}</p>
        </Col>
        <Col sm><img  src='https://codingapple1.github.io/shop/shoes2.jpg' width={'80%'}/>
        <h4>{shoes[1].title}</h4>
          <p>{shoes[1].content}</p>
          <p>{shoes[1].price}</p>
          </Col>
        <Col sm><img  src='https://codingapple1.github.io/shop/shoes3.jpg' width={'80%'}/>
        <h4>{shoes[2].title}</h4>
          <p>{shoes[2].content}</p>
          <p>{shoes[2].price}</p>
          </Col> */}
      </Row>
      </Container>

      
    </div>
    
  );
  
}

export default App;
