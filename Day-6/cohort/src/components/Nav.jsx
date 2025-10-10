import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <nav className='flex justify-between items-center bg-[#D1D3D4] px-6 py-3'>
            <h4 className='text-xl font-black'>Logo</h4>
            <div className='flex justify-center items-center gap-10'>
                <NavLink className={(e)=>e.isActive ? 'text-[#EF7722] font-semibold' : 'text-black'} to='/'>Home</NavLink>
                <NavLink className={(e)=>e.isActive ? 'text-[#EF7722] font-semibold' : 'text-black'} to='/about'>About</NavLink>
                <NavLink className={(e)=>e.isActive ? 'text-[#EF7722] font-semibold' : 'text-black'} to='/product'>Product</NavLink>
                <NavLink className={(e)=>e.isActive ? 'text-[#EF7722] font-semibold' : 'text-black'} to='/contact'>Contact</NavLink>
            </div>
        </nav>
    </div>
  )
}

export default Nav