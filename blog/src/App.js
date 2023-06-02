/* eslint-disable */
import './App.css';
import { useState } from 'react';


function Modal(props){
  return(
    <div className='modal' style={{background : props.color}}>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={
        ()=>{
          let copy = [...props.글제목]
          copy[0] = '여자코트추천'
          props.글제목변경(copy)
        }
      }>글수정</button>
    </div>
  )
}
function App() {

  let post = '강남 점심 맛집';
  let [글제목,글제목변경] = useState(['남자코트 추천', '강남 우동맛집','리액트 독학']);
  let [따봉,따봉변경] = useState([0,0,0]);
  let [modal,setModal] = useState(false);
  let [title,setTitle] = useState(2)
  let [입력값,입력값변경] = useState('');

  // map()사용법 
  // 1. array 자료 개수만큼 함수안의 코드 실행해줌
  // 2. 함수의 파라미터는 array안에 있던 자료 
  // 3. return에 뭐 적으면 array로 담아줌
  // [1,2,3].map(function(a){
  //   // console.log(a)
  //   return '1233211'
  // })
  // function  함수(i){
  //   let copy = [...따봉];
  //   copy[i] = copy[i]+1;
  //   따봉변경(copy)
  // }
  // function 가나다정렬(){
  //   let copy = [...글제목]

  //   function ascending(a,b){return (a<b)?-1:(a==b)?0:1;}
  //   copy.sort(ascending);
  //   글제목변경(copy)
  // }
  

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color : 'red', fontSize : '20px'}}>Blog</h4>
      </div>
      <button  onClick={()=>{
        let copy = [...글제목];
        copy[0] = '여자코트 추천';
        글제목변경(copy);
      }}>글수정</button>

      <button onClick={ ()=>{
        let copy = [...글제목];
        copy.sort()
        글제목변경(copy)
      } 
      }>가나다순 정렬</button>


      {/* <div className="list">
        <h4>{ 글제목[0] } <span onClick={ 함수 }>좋아요👍</span> { 따봉 } </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{setModal(!modal)}}>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div> */}
        {/* <h4 onClick={()=>{setModal(modal == true? false : true)}}>{ 글제목[2] }</h4> */}


      {
        글제목.map(function(a,i){
          return(
          <div className="list" key={i} onClick={()=>{setTitle(i)}}>
            {/* 모달창열기 */}
          <h4 onClick={()=>{setModal(modal == true? false : true)}}>{ 글제목[i] }
          {/* 따봉숫자 늘려주기 */}
          <span onClick={(e)=>{
            // 이벤트버블링방지
            e.stopPropagation();
            let copy =[...따봉];
            copy[i] = copy[i] +1;
            따봉변경(copy)
          } }>좋아요👍</span>{ 따봉[i] }
          </h4>
          <p>2월 17일 발행</p>
          <button onClick={()=>{
            // 따봉과 글내역 데이터삭제 -> 선택한 내용삭제하기
            let copy = [...글제목]
            글제목변경(copy)
            copy.splice(i,1)
            let copy2 = [...따봉]
            따봉변경(copy2)
            copy2.splice(i,1)
          }}>삭제하기</button>  
          </div>
          )
        })
      }

      <input onChange={(e)=>{ 입력값변경(e.target.value); 
        }}></input>
        <button onClick={()=>{
          // 입력값이 없으면 새로운내용이 안생기게 하기
          입력값 != '' ? hh() : null;
          
          function hh(){
            let copy = [...글제목];
            copy.push(입력값);
            글제목변경(copy)
            let copy2 = [...따봉];
            copy2.push(0);
            따봉변경(copy2)
          }
        }}>추가하기</button>

      {/* <Modal /> */}
      {/* if문 
      { } 안에 if문을 적을 수 없으니 삼항연산자를 이용
      */}
      {
        modal == true? <Modal title={title} 글제목변경={글제목변경} color='yellow' 글제목={글제목} /> : null
      }
      {/* 모달변수가 트루면 모달창을 실행
      아니라면 null */}
      
    </div>
  );
}

export default App;
