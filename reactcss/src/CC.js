//importing react for this component file
import React,{Component} from "react";

//Declaring class component called CC
class CC extends React.Component{

    //using constructor to create this.state object 
    constructor(){
        super();
            this.state={
                color:'red',
                bgcolor:'blue'
        }
    }

    //creating a changecolor() to change color using this.setState({color:'value})
    changecolor=()=>{
        this.setState({color:'black'})
    }

    //creating a changebgcolor() to change color using this.setState({bgcolor:'value})
    changebgcolor=()=>{
        this.setState({bgcolor:'yellow'})
    }

    render(){
        return <div>
            {/*adding inline style, style={{color:this.state.color}} using constructor() this.state object created*/}
            <h1 style={{color:this.state.color, backgroundColor:this.state.bgcolor}}>This is Dynamic CSS in React Js</h1>
            {/*declaring oncClick() using this.changecolor to call changecolor()*/}
            <button onClick={this.changecolor}>Change color</button>
            {/*declaring oncClick() using this.changebgcolor to call changebgcolor()*/}
            <button onClick={this.changebgcolor}>Change Background color</button>
        </div>
    }

}

export default CC;