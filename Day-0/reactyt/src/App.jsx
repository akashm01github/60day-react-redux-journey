// import React from 'react'

// const App = () => {
//   const user  = "Akash";

//   const changeName = ()=>{
//     user = "Akash Mukherjee";
//   }

//   // changeName();

//   return (
//     <div>
//       <h1>username is: {user}</h1>
//       <button onClick={()=>{changeName()}}>Chnage User</button>
//     </div>
//   )
// }

// export default App


//! Use state Hook in React JS 

// import React, { useState } from 'react'

// const App = () => {
//   const [a, setA] = useState(10);

//   const changeName = () => {
//     setA(60)
//   }

//   return (
//     <div>
//       <h1>Value of a is {a}</h1>
//       <button onClick={()=>{changeName()}}>Cahange a</button>
//     </div>
//   )
// }

// export default App


//! Counter app Using React JS

import React, { useState } from 'react'

const App = () => {
  const [num, setnum] = useState(0);

  const chageNumber = () => {
    setnum(num + 1);
  }

  const decrementNumber = () => {
    if (num <= 0) {
      console.log("Not Possible");
    } else {
      setnum(num - 1);
    }

  }

  return (
    <div className='container'>
      <h1>Number is: {num}</h1>
      <button onClick={() => { chageNumber() }}>Increment</button>
      <button onClick={() => { decrementNumber() }}>Decrement</button>
    </div>
  )
}

export default App
