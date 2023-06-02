import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
import 작명 from './1.jpg'
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, Link } from 'react-router-dom'


function App() {
  let [shoes] = useState(data)

  return (
    
    <div className='App'>

      {/* 라우터 */}
      <Routes>
        {/* <Route path='/' element={<div>쌩 /는 메인페이지임</div>}/> */}
        <Route path='/' element={
        <>
          <Navnav />
          {/* <Button variant="primary">Primary</Button>{' '} */}
          <div className='main-bg' style={{backgroundImage :'url('+작명+')'}}>
            {/* 이미지 넣을때 */}
          </div>
          
          <Shoes shoes={shoes}/>

        </>
      }/>
        <Route path='/detail' 
        element={
          <>
            <Navnav />
          </>
        }/>
        <Route path='/about' element={
        <>
          <Navnav />
        </>
        }/>
      </Routes>

      



      


      


        {/* 컴포넌트를 이용한 코딩 */}
        {/* <List shoes ={shoes[0].id} title={shoes[0].title} price={shoes[0].price}/>
        <List shoes ={shoes[1].id} title={shoes[1].title} price={shoes[1].price}/>
        <List shoes ={shoes[2].id} title={shoes[2].title} price={shoes[2].price}/> */}

        {/* 축약전 긴~ 하드코딩 */}
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

      
    </div>
    
  );
}

function Navnav(props){
  return(
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#"><Link to={'/'}>휠라</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Link to={'/detail'}>상세페이지</Link>
            <Nav.Link href="/about">어바웃</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

function Shoes(props){
  return(
    <>
      <Container>
            <Row>
              {/* map을 이용한 반복문처리 */}
              {
                props.shoes.map((x,i)=>{
                  console.log(x)
                  return(
                    <>
                    <List shoes ={props.shoes[i]} idx={i}/>
                    {/* <h2>{x.id}</h2>
                    <h2>{x.price}</h2>
                    <h2>{x.title}</h2> */}
                    </>
                  )
                })
              }
              </Row>
            </Container>
    </>
  )
}

function List(props) {
  return(
    <Col sm>
  <img  src={'https://codingapple1.github.io/shop/shoes'+(props.idx+1)+'.jpg'} width={'80%'}/>
  <h4>{props.shoes.title}</h4>
  <p>{props.shoes.price}</p>
  <p>{props.shoes.content}</p>
</Col>
  )
}



export default App;
