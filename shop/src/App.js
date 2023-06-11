import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
import 작명 from './1.jpg'
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './routes/Detail.js';


function App() {
  let [shoes] = useState(data);
  // 페이지 이동을 도와주는 useNavigate()
  let navigate = useNavigate();

  return (
    
    <div className='App'>


      {/* 라우터 */}

      {/* 라우터 시작 */}
      <Routes>


        {/* <Route path='/' element={<div>쌩 /는 메인페이지임</div>}/> */}
        {/* 메인페이지 */}
        <Route 
        path='/' 
        element={
        <>
          {/* 네비게이션바 */}
          <Navnav navigate ={navigate}/>
          {/* <Button variant="primary">Primary</Button>{' '} */}
          {/* 메인이미지 */}
          <div className='main-bg' style={{backgroundImage :'url('+작명+')'}}>
          {/* 이미지 넣을때 */}
          </div>
          {/* 신발 리스트 */}
          <Shoes shoes={shoes}/>
        </>
      }/>

        {/* 디테일 페이지 */}
        <Route path='/detail' 
        element={
          <>
          <Navnav navigate ={navigate}/>
          <Detail shoes={shoes} />
          </>
        }/>

        <Route path='/detail/:id' 
        element={
          <>
          <Navnav navigate ={navigate}/>
          <Detail shoes={shoes} />
          </>
        }/>


        {/* 어바웃 페이지 */}
        <Route 
        path='/about' 
        element={ 
        <>
        <Navnav navigate ={navigate}/>
        <About /> 
        </>
        }>
          {/* 라우터안에 라우터 /xx/ 하는거 방법 (Nested routes) 
            태그안의 태그 라는뜻이라고함 /about/member
            장점 : 라우트 작성이 약간 간단해짐
                  nested route접속시엔 element 2개나 보임
          */}
          <Route path="member" element={ <div>멤버</div>}/>
          <Route path="location" element={ <div>위치정보</div>}/>
        </Route>


        {/* 라우터 안에 라우터 만드는방법 구식 방법  */}
        {/* <Route path='/about/member' element={ <About /> }/>
        <Route path='/about/location' element={ <About /> }/> */}

        {/* 이벤트페이지 */}
        <Route path="/event" 
        element={
          <>
          <Navnav navigate ={navigate} />
          <Event />
          </>
        }>
            <Route 
            path ="one" 
            element={ 
              <h4>첫 주문시 양배추즙 서비스</h4> 
            }/>
            <Route 
            path ="two" 
            element={ 
              <h4>생일기념 쿠폰받기</h4> 
            }/>
          
          </Route>


        {/* 잘못된페이지 (없는페이지) 만들기 404페이지 */}
        <Route path="*" element={<div>이 페이지는 없는 페이지 입니다.</div>}></Route>
      </Routes>


      {/* 라우터 
          <Routes>
            <Route path="/경로" element={ 보여야 할 코드 } /> / 은 홈 
          </Routes> 안에
      */}

      



      


      


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
          <Navbar href="#">
            <Link to={'/'}>HOME</Link>
            {/* -1 을 이용해서 뒤로가기 기능이가능 -2는 뒤로두번감0 */}
          </Navbar>

            <Nav className="me-auto">
            <Nav.Link onClick={()=>{
              props.navigate('/detail/0')
            }}>상세페이지</Nav.Link>
            
            <Nav.Link onClick={()=>{
              props.navigate('/about')
            }}>장바구니</Nav.Link>

          <Nav.Link onClick={()=>{
              props.navigate('/event')
            }}>이벤트</Nav.Link>
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

function About(){
  return(
    <div>
      <h4>회사정보망</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Event(){
  return(
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}


export default App;
