//importing react component from react
import React,{Component} from 'react'
import Child from './child'

//declaring class name Parent
class Parent extends React.Component{

    //using constructor(pros){super(pros)} to send/receive value from Parent.js to child.js
    constructor(props){
        super(props)
    }

    //using render() to return the HTML Contents
    render(){
        return <div>
            <h1>This is parent component</h1>
             {/*receiving value from App.js using props {this.props.keyword}*/}
            <h1>The recieved movie from App.js Component is {this.props.movie}</h1>
            {/*adding value (language='Javascript') to child on the Parent.js and recieving it in Child.js*/}
            <Child language='Javascript'/>
        </div>
    }

}

//export Parent (class) component to App.js
export default Parent