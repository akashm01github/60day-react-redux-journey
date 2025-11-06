import React, { lazy, Suspense, useState } from 'react'
// import Users from './Users'

const Users  = lazy(()=>import('./Users'))

const App = () => {
  const [load, setLoad] = useState(false);
  return (
    <div>
      <h1>Lazy Loading</h1>
      <button onClick={()=>setLoad(true)}>Load Users</button>
      {
        load ? <Suspense fallback={<h3>Loading..</h3>}> <Users/> </Suspense>: null
      }
    </div>
  )
}

export default App