//import react js functional component with using React, {component}
import React from "react";
//importing functional component name Child
import Child from './child'

//declaring Parent() component
function Parent(){
    //returning more than one html tag using <div></div>
    return <div>

        <h1>This is parant component (Parents.js)</h1>

        {/*calling the class Child in the app.js component using <Child/>*/}
        <Child/>

    </div>
}

//exporting the class Parent to app.js
export default Parent;