import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  //create a hook name with setmethod (setname) using useState
  const [name, setname] = useState('')
  //create a hook username with setmethod (setusername) using useState
  const [username, setusername] = useState('')
  //create a hook age with setmethod (setage) using useState
  const [age, setage] = useState()

  //declaring showinput() function
  function showinput() {
    //show alert with input value of name, username and age
    alert(name + '  ' + username + ' ' + age);
  }

  //creating printvalues() function
  function printvalues(event) {

    //using event.prevent to prevent reloading default
    event.preventDefault()


    // creating object called user
    var user = {
      //assing name keyword to name hook
      name: name,
      //assing username keyword to username hook
      username: username,
      //assiging age keyword to age hook
      age: age
    }

    //console.log to print user object to the console
    console.log(user)

  }




  return (
    <div className="App">
      <h1>React Form</h1>

      {/*creating onsubmit() event calling printvalues() function*/}
      <form onSubmit={printvalues}>
        {/*assigining hook name to value{name}. with an onchange{()=>{}} function update name hook with setname value in the input value*/}
        <input type="text" placeholder='name' value={name} onChange={(events) => { setname(events.target.value) }} />
        <br />

        {/*assigining hook username to value{username}. with an onchange{()=>{}} function update username hook with setusername value in the input value*/}
        <input type="text" placeholder='username' value={username} onChange={(events) => { setusername(events.target.value) }} />
        <br />

        {/*assigining hook age to value{age}. with an onchange{()=>{}} function update age hook with setname value from the input value*/}
        <input type="text" placeholder='age' value={age} onChange={(events) => { setage(events.target.value) }} />
        <br />
        <br />

        {/*creatung a button with onclick function to execute showinput() */}
        <button onClick={showinput}> CLICK to Show the input value</button><br />

        {/*creatung a button using input type submit*/}
        <input type="submit" value='CLICK to Show the input submit form to console' />

      </form>

    </div>
  );
}

export default App;
