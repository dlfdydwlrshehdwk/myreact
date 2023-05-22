import './App.css';

function App() {

  let post = '강남 점심 맛집'

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color : red, fontSize : '20px'}}>Blog</h4>
      </div>
      <div>{ post }</div>
    </div>
  );
}

export default App;
