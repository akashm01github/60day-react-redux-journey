import React from 'react'

const Child = ({users}) => {
    const {name, age, profession} = users;
  return (
    <div className='border w-[300px] px-5 py-2 rounded'>
        <h1>Name: {name}</h1>
        <h2>Age: {age}</h2>
        <h2>Profession: {profession}</h2>
    </div>
  )
}

export default Child