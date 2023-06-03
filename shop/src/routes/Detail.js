import {Button, Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
import { Routes, Route, Link, useParams } from 'react-router-dom'

function Detail(props){

    let {id} = useParams();
    let 찾은상품 = props.shoes.find(function(x){
      return x.id == id
    })
    console.log(id)
    console.log('찾상',찾은상품)
    return(
      <>
      <img  src={'https://codingapple1.github.io/shop/shoes1.jpg'} width={'80%'}/>
      <h4>{props.shoes[id].title}</h4>
      <p>{props.shoes[id].price}</p>
      <p>{props.shoes[id].content}</p>
      <button>주문하기</button>
      </>
    )
}

export default Detail;