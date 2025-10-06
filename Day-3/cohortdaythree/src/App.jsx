import React from 'react'

const App = () => {
  let users = [
    {userNam:"Ankur", age: 25},
    {userNam:"Akash", age: 24},
    {userNam:"John", age: 69},
  ]
  return (
    <div>
      {
        users.map((user,idx)=>{
          return <ul key={idx} className='flex gap-5'>
            <li><b>Name</b>: {user.userNam}</li>
            <li><b>Age</b>: {user.age}</li>
          </ul>
        })
      }
    </div>
  )
}

export default App