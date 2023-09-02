import React,{Component} from "react";
class SM extends React.Component{
    //creating and using States In Class Component, using constructor()
    constructor(){
        //in the constructor() method, first use super() method
        super();
        //creating states using this.state syntax, states are used to store values such as variable
        this.state={
            'country':'Portugal'
        }
    }

    //declaring onclick function using arrow function (functionname=()=>{})
    changeCountry=()=>{
        //changing the saved state of a value using the this.setState({}) method
        this.setState({country:'Nigeria'})
    }

    render(){
        return <div>
            <h2>This is Class Component (setState Method)</h2>
            <h1>The player name is {this.state.country}</h1>
            {/*onClick function using onclick={this.functionname} */}
            <button onClick={this.changeCountry}>Change Country</button>
        </div>
    }

}

export default SM