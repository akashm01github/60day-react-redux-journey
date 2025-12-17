import React, { lazy, Suspense, useState } from 'react'
// import User from './User';

const User = lazy(()=>import('./User'));





const App = () => {
  const [load, setload] = useState(false);

  return (
    <div>
      
      <h1>Lazy Loading in React JS</h1>
      {
        load ?<Suspense fallback={<h3>Loading...</h3>}><User/></Suspense> : null
      }
      <button onClick={()=>setload(true)}>Load User</button>
    </div>
  )
}

export default App