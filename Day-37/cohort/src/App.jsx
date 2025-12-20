import React, { useCallback, useState } from 'react'
import ChildComponents from './components/ChildComponents'

const App = () => {
    const [count, setCount] = useState(0);

    // const handelClick =

    const handelClick = useCallback(function(){
        setCount(prev=>prev+1)
    },[])


    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handelClick} className='btn'>Increment</button>

            <hr />

            <div>
                <ChildComponents buttonName="Click Me" handelClick={handelClick}/>
            </div>
        </div>
    )
}

export default App



