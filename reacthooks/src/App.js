import logo from './logo.svg';
import './App.css';
// importing useState from react in order to use it
import { useEffect, useState } from "react";
import Home from './home'

function App() {
  //using useState hooks to create variable using const[variable,setfunction] = useState('variable content')
  const [player, setPlayer] = useState('Ronald')
  const [numbers, setNumber] = useState([1, 3, 5, 7, 9])


  const [language, setLanguage] = useState('Java')

  //declaring changeplayer() function
  function changeplayer() {
    //changing player using setPlayer by the help of useState
    setPlayer('Messi')
    //changing number using setNumber by the help of useState
    setNumber([1, 2, 4, 6, 8])
  }

  //using useEffect() function that will be called automatically to change useState[language]
  //to [setLanguage] = javascript
  useEffect(() => {
    setLanguage('Javascript')
  })

  return (
    <div className="App">
      <h1>Hooks in React Js</h1>
      <h1>useState Hook in React Js</h1>
      <h1>The declared player is {player}</h1>
      <h1>The declared numbers are {numbers}</h1>

      <button onClick={changeplayer}>Click to change player & numbers</button>
      <br />
      <br />

      <h1>useEffect Hook in React Js</h1>
      <h1>The declared language is {language}</h1>
      <br />
      <br />

      {/*Calling Home component */}
      <Home />

    </div>
  );
}

export default App;
