import React, { useMemo, useRef, useState } from 'react'
import MemoCount from './MemoCount';

const App = () => {
  const [count, setCount] = useState(0);

  const [input, setInput] = useState(null);



  const expensiveTask = (num) => {
    console.log(`Inside Expersive Task`)
    for (let i = 0; i < 1000000000; i++) { }
    return num * 2
  }


  // ! USEMEMO
  const double = useMemo(() => expensiveTask(input), [input])



  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Incremet</button>
      <br />
      <hr />
      <br />
      <div>
    
        <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder='Enter the Number: ' />
        <h1>
          Double: {double}

          {/* REACT.MEMO */}
          <MemoCount/>
        </h1>
      </div>
    </div>
  )
}

export default App