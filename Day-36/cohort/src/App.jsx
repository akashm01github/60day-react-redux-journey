import React, { useMemo, useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);

  const [inputValue, setInputValue] = useState(2)

  const expensiveTask = (num)=>{
    console.log('Inside Expensive Task');
    for (let i = 0; i < 1000000000; i++) {}
    return num*2;
  }

  // const doubleValue = expensiveTask(inputValue);

  const doubleValue = useMemo(()=> expensiveTask(inputValue), [inputValue])

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>


      <div className='input_field'>
        <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)} type="number" placeholder='Enter the Number'/>
        <h1>Double: {doubleValue}</h1>
      </div>
    </div>
  )
}

export default App



