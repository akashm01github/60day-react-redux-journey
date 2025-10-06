import React, { useState } from 'react'
import Create from './components/Create';
import Read from './components/Read';

const App = () => {
 
  const [users, setusers] = useState([
    {username: "Akash",age:25},
    {username: "Apu",age:40},
    {username: "John Wick",age:69},
    {username: "Dodo",age:25},
    {username: "Dodo",age:25},
    {username: "Dodo",age:25},
  ])


//  console.log(ussersData);

  return (
    <div className='flex border flex-col gap-5 justify-center items-center px-2 py-4'>
      <Create/>
      <Read users={users} setusers={setusers}/>
    </div>
  )
}

export default App