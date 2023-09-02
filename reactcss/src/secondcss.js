import React from 'react'
//importing & linking css stylesheet Second.css
import './Second.css'

//creating functional component or function
function Second(){

    return <div>
        {/*using className to style this h1 element seperately from second.css */}
        <h1 className='sh1'>This is Second Component (different css stylesheet)</h1>
    </div>

  }

  export default Second;