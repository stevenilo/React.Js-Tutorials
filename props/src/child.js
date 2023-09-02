//importing react component from react
import React,{Component} from 'react'

//declaring class name Child
class Child extends React.Component{

    //using constructor(pros){super(pros)} to send/receive value from Parent.js to child.js
    constructor(props){
        super(props)
    }

    //using render() to return the HTML Contents
    render(){
        return <div>
            <h1>This is child component</h1>
            {/*receiving value from Parent.js using props {this.props.keyword}*/}
            <h1>The recieved language from class parent component is {this.props.language}</h1>
        </div>
    }

}

//export Parent (class) component to App.js
export default Child