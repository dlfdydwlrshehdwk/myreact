/* eslint-disable */
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 점심 맛집';
  let [글제목,글제목변경] = useState(['남자코트 추천', '강남 우동맛집','리액트 독학']);
  let [따봉,따봉변경] = useState(0);

  function  함수(){
    따봉변경(따봉+1)
  }
  function 가나다정렬(){
    let copy = [...글제목]

    function ascending(a,b){return (a<b)?-1:(a==b)?0:1;}
    copy.sort(ascending);
    글제목변경(copy)

  }

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

      <button onClick={ 가나다정렬 }>가나다순 정렬</button>


      <div className="list">
        <h4>{ 글제목[0] } <span onClick={ 함수 }>좋아요👍</span> { 따봉 } </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
