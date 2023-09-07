import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  //declaring an array numbers (hook)
  const [numbers, setnumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
  //declaring an array number (hook)
  const [names, setnames] = useState(['reactjs', 'vuejs', 'nodejs', 'javascript'])
  //declaring an array of object players (hook)
  const [players, setplayers] = useState([{ name: 'sachin', country: 'India' }, { name: 'Ronaldo', country: 'Portugal' }, { name: 'Messi', country: 'Argentina' }])

  // using map(()=>{}) to loop through the value or content or array numbers, and store value as numberslist
  const numberslist = numbers.map((numbers) => {
    return <h1>{numbers}</h1>
  })

  // using map(()=>{}) to loop through the value or content or array names, and store value as nameslists
  const nameslist = names.map((names) => {
    return <h1>{names}</h1>
  })

  // using map(()=>{}) to loop through the value or content or array players, and store value as playerslist
  const playerslist = players.map((players) => {
    return <div>
      {/*displaying player name (players.name) and player country (players.country)*/}
      <h1>The name of the player is {players.name}</h1>
      <p>The name of the player is {players.country}</p>
    </div>
  })

  return (
    <div className="App">
      <h1>React Maping</h1>

      {/*printing numberslist*/}
      {numberslist}

      {/*printing nameslist*/}
      {nameslist}

      {/*printing playerslist*/}
      {playerslist}
    </div>
  );

}

export default App;
