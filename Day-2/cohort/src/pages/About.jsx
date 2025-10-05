import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext'

const About = () => {
  let myName = useContext(DataContext);
  return (
    <div>
        <h1 className='text-3xl'>
          My Name is : {myName}
        </h1>
    </div>
  )
}

export default About