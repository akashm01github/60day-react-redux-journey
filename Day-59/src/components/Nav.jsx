import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='px-2 py-10 bg-[#BFA28C] flex justify-between items-center '>
      <h2 className='text-4xl font-bold'>Flipcart</h2>
      <div className=' relative'>
        <p className='absolute -top-2 right-0 text-sm bg-red-500 text-white px-1 py-1 rounded-full'>
          0
        </p>
        <Link to='/cart'>
          <i className="ri-shopping-basket-line text-5xl"></i>
        </Link>
      </div>
    </div>
  )
}

export default Nav