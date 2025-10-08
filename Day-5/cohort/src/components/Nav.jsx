import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='w-full h-10'>
        <nav className='bg-[#3E3F5B] flex justify-between px-5 items-center py-2'>
            <h2 className='text-3xl font-bold text-[#F6F1DE]'>Logo</h2>
            <div className='flex justify-center items-center gap-5 text-[#F6F1DE] text-lg'>
                <NavLink className={(e)=> e.isActive ? 'text-red-400': 'text-[#F6F1DE]'} to='/'>Home</NavLink>

                <NavLink className={(e)=> e.isActive ? 'text-red-400': 'text-[#F6F1DE]'}  to='/product'>Product</NavLink>
                <NavLink className={(e)=> e.isActive ? 'text-red-400': 'text-[#F6F1DE]'}   to='/service'>Service</NavLink>
                <NavLink className={(e)=> e.isActive ? 'text-red-400': 'text-[#F6F1DE]'}  to='/about'>About</NavLink>
            </div>
        </nav>
    </div>
  )
}

export default Nav