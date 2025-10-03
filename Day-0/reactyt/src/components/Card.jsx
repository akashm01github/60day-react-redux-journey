import React from 'react'

const Card = ({users}) => {
    const {name,age,profession} = users;
  return (
    <div className='bg-[#432323] text-white px-10 py-5 rounded mt-4'>
        <h1 className='text-2xl'>Name: {name}</h1>
        <h1 className='text-xl'>Age: {age}</h1>
        <h1 className='text-xl'>Profession: {profession}</h1>
    </div>
  )
}

export default Card