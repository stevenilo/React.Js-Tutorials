import logo from './logo.svg';
import './App.css';
import CC from './CC'


function App() {
  //declaring getalert() function
  function getalert(){
    //displaying alert() content
    alert('The button is clicked')
  }
  //declaring inputalert() function
  function inputalert(){
    //displaying alert() content
    alert('The input is changed')
  }
  //declaring hoveralert() function
  function hoveralert(){
    //displaying alert() content
    alert('The H1 tag is hovered')
  }
  
  return (
    <div className="App">
      <h1>Event Handling In React</h1>

      {/*using onclick() to call getalert() when ever the button is clicked */}
      <button onClick={getalert}>Click me</button>
      <br/>
      {/*using onchange() to call inputalert() when ever the input is changed */}
      <input type="text" onChange={inputalert} />
      <br />
      {/*using onMouseOver() to call hoveralert() when the button is hovered */}
      <h1 onMouseOver={hoveralert}>Hover here to get alert</h1>
      <br/>

      <CC/>

    </div>
  );
}

export default App;
