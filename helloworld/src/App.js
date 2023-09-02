import logo from './logo.svg';
import './App.css';
//import class CC which was exported app.js
import CC from './CC'
//import class FC which was exported app.js
import FC from './FC'
//import class Parent which was exported app.js
import Parent from './parentcomp';
import Child from './child';

function App() {
  return (
    <div className="App">

      <h1>Helloworld In React.Js</h1>
      {/*calling the class CC Component in the app.js component using <CC/>*/}
      <CC/>

      {/*calling the class FC Component in the app.js component using <FC/>*/}
      <FC/>

      {/*calling the class Parent Component in the app.js component using <Parent/>*/}
      <Parent/>

      <Child/>      

    </div>
  );
}

export default App;
