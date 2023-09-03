import React, { Component } from 'react'

//creating class component named CC
class CC extends React.Component {

    //creating a this.state using constructor() method
    constructor() {
        super();
        this.state = {
            //creating variable number = 0
            number: 0
        }
    }

    //componentwillmount() is called before the component is rendered
    componentWillMount() {
        //changing number value 0 to 1 using this.setstate by using componentwillmount() method
        this.setState({ number: 1 })
        alert('This is component Will Mount is executed changing number 0 to 1')
    }

    //componentDidmount() is called after the component is rendered
    componentDidMount() {
        alert('This is component Did Mount is executed after the Component Will Mount')
    }

    render() {
        return <div>
            <h1>This is Class Component</h1>
            {/*using number value by using {this.state.number} */}
            <h1>The declared number is {this.state.number}</h1>
        </div>
    }

}

//exporting CC class component
export default CC;