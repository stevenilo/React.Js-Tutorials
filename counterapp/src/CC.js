import React,{Component} from 'react'
//importing the css style sheet from counter.css
import './counter.css'

//declaring a class component called CC (object)
class CC extends React.Component{

    //using constructor(super(){this.state={}}) to create this.state
    constructor(){
        super();
        this.state={
            //create property(variable) name number = 0
            number: 0
        }
    }

    //declaring add()
    add=()=>{
        //changing this.number value by add 1 using this.setState({})
        this.setState({number:this.state.number+1})
    }

    //declaring subtract()
    subtract=()=>{
        //changing this.number value by subtracting 1 using this.setState({})
        this.setState({number:this.state.number-1})
    }

    //using render() to return HTML content
    render(){
        return <div>
            {/*accessing external variable name number using this.number*/}
            <h1>{this.state.number}</h1>

            {/*creating button for add 1 onclick function add=()=>{}*/}
            <button onClick={this.add}>ADD 1</button>
            {/*creating button for subtract 1 onclick function subtract=()=>{}*/}
            <button onClick={this.subtract}>SUBTRACT 1</button>
        </div>
    }

}

//exporting the CC class component
export default CC