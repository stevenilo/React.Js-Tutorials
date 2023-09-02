//importing react js class component from the react dom
import React,{Component} from 'react'
//creating class name CC to extends to React.Component
class CC extends React.Component{
    //using render() method to return html content
    render(){
        return <h1>Hello World Using Class Component</h1>
        // to return more than one html tag you most use <div> class
    }

}

//exporting the class CC to app.js
export default CC;