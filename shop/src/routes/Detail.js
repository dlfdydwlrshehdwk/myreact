import {Button, Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
import { Routes, Route, Link, useParams } from 'react-router-dom'
import "../css/detail.css"
import $ from 'jquery';
import { useEffect, useState } from 'react';












function Detail(props){

  let [count , setCount] = useState(0);
  let [alert,setAlert] = useState(true);
  let [num,setNum] = useState('');

  useEffect(()=>{
    if(isNaN(num) == true){
      console.log('숫자만')
    }
  },[num])


  useEffect(()=>{
    // mount,update시 여기 코드 실행됨
    // useEffect 쓰는 이유 
    // useEffect 안에 있는 코드는 html 렌더링 후에 동작함
    // html을 먼저보여주고 자스를 실행해서 빠른느낌을 줌 
    // console.log('ㅎㅇ')
    let a = setTimeout(()=> {setAlert(false) },4000)
    // useEffect 동작전에 실행되는 코드를 적으면 좋음
    // 기존코드를 제거하는 코드를 사용할때 주로 사용
    // return()=>{
    //   clearTimeout(a)
    // }
  }, [count]) 
  // useEffect 실행조건을 넣을 수 있는곳은 [] count가 변동될때마다 실행
  // [] 안에 아무것도없으면 컴포넌트 mount시 1회만 실행하고싶을때 사용
  
  // 빡통식 정리
  // useEffect(()=>{ }) // 1. 재렌더링마다 실행하고싶을때
  // useEffect(()=>{ },[]) // 2. mount시 1회 코드 실행하고 싶을때
  // 3. useEffect안의 코드 실행전에 코드실행
  // useEffect(()=>{ 
    // return() => { 코드 }
  // })
  // 4. unmount시 1회 코드 실행하고 싶으면 unmount 제거할때 
  // useEffect(()=>{    
  //   return()=>{ }  
  // },[])
  //5. 특정 state변경 시에만 실행하려면 
  // useEffect(()=>{ 코드 },[state])





    let {id} = useParams(); // useEffect(()=>{ },[state명])
    let 찾은상품 = props.shoes.find(function(x){
      return x.id == id
    })
    // console.log(id)
    // console.log('찾은상품',찾은상품)


    return(
      <>
      <section className='detail'>
        {
          alert == true ?
        <div className='alert'>
          2초이내 구매시 할인
        </div>
          : null
        }
        <input onChange={(e)=>{
          setNum(e.target.value)
          console.log(e.target.value)
          }}></input>

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