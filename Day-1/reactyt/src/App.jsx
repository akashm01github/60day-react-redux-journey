import React from 'react'
import Child from './components/Child'

const App = () => {

  let users = [
    {
      "name": "Akash Mukherjee",
      "age": 24,
      "profession": "Web Developer"
    },
    {
      "name": "Jharnna Sen",
      "age": 22,
      "profession": "Graphic Designer"
    },
    {
      "name": "Rahul Sharma",
      "age": 28,
      "profession": "Software Engineer"
    },
    {
      "name": "Sneha Roy",
      "age": 25,
      "profession": "Content Writer"
    }
  ]



  return (
    <div className='flex flex-wrap gap-4'>
      {
        users.map((user, idx) => {
          return <Child key={idx} users={user} />
        })
      }
    </div>
  )
}

export default App