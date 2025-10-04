import React, { useContext } from 'react'
import { DataContext } from '../context/Usercontext'

const Home = () => {
  const data = useContext(DataContext);

  return (
    <div>
        <h1 className='text-3xl font-semibold'>Home</h1>
        <h2>Name: {data}</h2>
    </div>
  )
}

export default Home