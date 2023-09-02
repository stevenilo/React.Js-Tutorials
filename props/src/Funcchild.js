import React from 'react'

//declaring functional component name Funcchild
//in functional componenet we write functionname(prosp)not using construct()
//add props, so as to receivd key value from Funcparent
function Funcchild(props){
    //using return <div> to return the HTML Contents
    return <div>
        <h1>This is functional child Component</h1>
        {/*receiving value from Funcparent.js using props {this.props.keyword}*/}
        <h1>The recieved country from functional parent component is {props.country}</h1>
    </div>
}

export default Funcchild