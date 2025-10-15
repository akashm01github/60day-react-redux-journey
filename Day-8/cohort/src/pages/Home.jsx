import React from 'react'
import { useEffect } from 'react'

const Home = () => {
   useEffect(()=>{
    console.log('Home.jsx');

    return ()=>{
      console.log('Home.jsx UnMount');
    }
  })


  
  return (
    <div className='px-10'>Home</div>
  )
}

export default Home