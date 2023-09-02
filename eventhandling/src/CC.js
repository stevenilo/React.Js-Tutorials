import React,{Component} from 'react'

class CC extends React.Component{

//function keyword cant be used in class component, so we use arrow function

    getalert=()=>{
        alert('The button is clicked')
    }

    inputalert=()=>{
        alert('The input is changed')
    }

    hoveralert=()=>{
        alert('The H1 text is hovered')
    }

render(){
    return <div>
        <h1>Event Handling in Class Component</h1>
        {/*using onclick() to call getalert() when ever the button is clicked */}
        <button onClick={this.getalert}>Click me</button>
        <br />
        {/*using onchange() to call inputalert() when ever the input is changed */}
        <input type="text" onChange={this.inputalert}/>
        <br />
        {/*using onMouseOver() to call hoveralert() when the button is hovered */}
        <h1 onMouseOver={this.hoveralert}>Hover here to get alert</h1>
    </div>
}

}

export default CC