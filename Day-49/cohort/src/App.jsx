import React, { useRef } from 'react'

import './index.css'

const App = () => {

  const userRef = useRef();

  const passwordRef = useRef()



  const handelSubmit = (e) => {

    e.preventDefault()

    const user = userRef.current.value;

    const password = passwordRef.current.value

    console.log(user,password)

  }
  return (
    <div>
      <form onSubmit={(e) => handelSubmit(e)} className='container'>
        <input ref={userRef} id='user' type="text" placeholder='Enter the Name' />
        <input ref={passwordRef} id='password' type="text" placeholder='Enter the Password' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App



