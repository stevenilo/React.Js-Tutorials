import logo from './logo.svg';
import './App.css';
import Parent from './parent';
import Funcparent from './Funcparent';
import Funcchild from './Funcchild';

function App() {
  return (
    <div className="App">
      <h1>THIS IS PROPS LECTURES</h1>
      <br/>
      <h1>This is Props in Class Component</h1>
      {/*adding value (movie='Avengers') to <Parent/> and recieving it in Parent.js*/}
      {/*calling the Parent Component in the app.js component <Parent/>*/}
      <Parent movie='Avengers'/>
      <br/>
      <h1>This is Props in Functional Component</h1>
      {/*calling the Funcparent Component in the app.js component <Parent/>*/}
      <Funcparent/>
    </div>
  );
}

export default App;
