import React,{Component} from "react";
class CC extends React.Component{

    //creating and using States In Class Component, using constructor()
    constructor(){
        //in the constructor() method, first use super() method
        super();
        //creating states using this.state syntax, states are used to store values such as variable
        this.state={
            'player':'Ronaldo',
            'country':'Portugal'
        }

    }

    render(){
        return <div>
            <h1>This is Class Component</h1>
            {/*using states (which are variable stored using constructor, this.state) to call player name */}
            <h1>The player name is {this.state.player}</h1>
            {/*using states (which are variable stored using constructor, this.state) to call player country */}
            <h1>The player country is {this.state.country}</h1>
        </div>
    }

}

export default CC