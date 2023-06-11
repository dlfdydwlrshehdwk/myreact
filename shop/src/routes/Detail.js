import {Button, Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
import { Routes, Route, Link, useParams } from 'react-router-dom'
import "../css/detail.css"
import { useEffect, useState } from 'react';

function Detail(props){

  useEffect(()=>{
    // mount,update시 여기 코드 실행됨
    // useEffect 쓰는 이유 
    // useEffect 안에 있는 코드는 html 렌더링 후에 동작함
    // html을 먼저보여주고 자스를 실행해서 빠른느낌을 줌 
    console.log('ㅎㅇ')
    for(let i = 0 ; 0 <100; i++){
      console.log('hi')
    }
  })
  
  let [count , setCount] = useState(0);

    let {id} = useParams();
    let 찾은상품 = props.shoes.find(function(x){
      return x.id == id
    })
    console.log(id)
    console.log('찾은상품',찾은상품)
    return(
      <>
      <section className='detail'>
      {count}
      <button onClick={()=>{setCount(count+1)}}>버튼</button>
      <img  src={'https://codingapple1.github.io/shop/shoes1.jpg'} width={'80%'}/>
      <h4 className='detail_tit'>{props.shoes[id].title}</h4>
      <p>{props.shoes[id].price}</p>
      <p>{props.shoes[id].content}</p>
      <div><button>주문하기</button></div>
      </section>
      </>
    )
}

export default Detail;