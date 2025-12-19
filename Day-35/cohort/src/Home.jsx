import React from 'react'
import useFetchData from './useFetchData'

const Home = () => {

    const [data] = useFetchData();

    console.log(data)
  return (
    <div>
        <h1>This is Home Section</h1>
    </div>
  )
}

export default Home