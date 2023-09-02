//importing react component from react
import React from 'react'
import Funcchild from './Funcchild'


function Funcparent(){
    //using return <div> to return the HTML Contents
    return <div>
        <h1>This is functional parent Component</h1>
        {/*adding value (country='Javascript') to Funcchild on the FuncParent.js and recieving it in Child.js*/}
        <Funcchild country='Nigeria'/>
    </div>
}

//export Funcparent (Functional) component to App.js
export default Funcparent