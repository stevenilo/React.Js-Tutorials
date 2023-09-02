import logo from './logo.svg';
import './App.css';
import Second from './secondcss'
import CC from './CC.js'

function App() {
  return (
    <div className="App">
      <h1>CSS in React Js</h1>
      {/*using style={{key:'value'}} to perform inline css style*/}
      <h1 style={{color:'red',backgroundColor:'green'}}>Inline CSS Style in React</h1><br/>

      <Second/>
      <br/>
      <CC/>

    </div>
  );
}

export default App;