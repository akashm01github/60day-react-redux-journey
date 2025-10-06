import React, { useState } from 'react'
import Create from './components/Create';
import Read from './components/Read';

const App = () => {
 
  // const [users, setusers] = useState([
  //   {username: "Akash",age:25},
  //   {username: "Akash",age:25},
  //   {username: "Akash",age:25},
  // ])

  const [usersData, setusersData] = useState([]);


//  console.log(ussersData);

  return (
    <div className='flex border flex-col gap-5 justify-center items-center px-2 py-4'>
      <Create usersData={usersData} setusersData={setusersData}/>
      <Read usersData={usersData} setusersData={setusersData}/>
    </div>
  )
}

export default App