import React, { useEffect, useState } from 'react'

const App = () => {

    const [counter, setCounter] = useState(0);

    const [data, setData] = useState(0);

    const callOnece = ()=>{
        console.log("Call Once Function Called..")
    }


    useEffect(()=>{
        callOnece();
    },[data])




  return (
    <div className='container'>
        <h1>Value is: {counter}</h1>
        <button onClick={()=>setCounter(counter+1)}>Counter</button>

        <hr />

         <h1>Data is: {data}</h1>
        <button onClick={()=>setData(data+1)}>Counter</button>
    </div>
  )
}

export default App