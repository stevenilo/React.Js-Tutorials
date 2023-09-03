// importing React DOM and useState from react in order to use it
import React, { useState } from 'react'

//declaring Home component
function Home() {

    //declaring or creating changestyling() function
    function changestyling() {
        //using setcolor method from useState hooks to change CSS color to blue from color 'red'
        setcolor('Blue')
        setbgcolor('green')
    }

    //using const keyword and useState to set color and bgcolor const [color, setcolor] = useState
    const [color, setcolor] = useState('red')
    const [bgcolor, setbgcolor] = useState('yellow')

    return <div>
        <h1>CSS manipulating using hooks</h1>

        {/*using set color from useState const keywords (hooks) to set CSS color to h1 tag ronaldo*/}
        <h1 style={{ color: color }}>Ronaldo</h1>
        <h1 style={{ backgroundColor: bgcolor }}>Football</h1>

        {/*creating button to enable onClick() function changestyling*/}
        <button onClick={changestyling}>Change Styling</button>
    </div>
}

//exporting Home functional component
export default Home;