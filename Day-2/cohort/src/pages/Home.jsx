import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext'

const Home = () => {
  const data = useContext(DataContext)
  return (
    <div>
      <h1 className='text-3xl'>
        userName: {data}
      </h1>
    </div>
  )
}

export default Home