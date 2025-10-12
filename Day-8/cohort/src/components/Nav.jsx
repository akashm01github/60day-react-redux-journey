import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <nav className='bg-[#D1D3D4] px-10 py-3 flex justify-between items-center'>
          <h4 className='text-2xl font-bold text-[#44444E]'>Ranna Ghor</h4>

          <div className='flex gap-5 text-lg'>
            <NavLink className={(e)=>e.isActive ? "text-red-500 font-semibold" : ""} to='/'>Home</NavLink>
            <NavLink className={(e)=>e.isActive ? "text-red-500 font-semibold" : ""}  to='/about'>About</NavLink>
            <NavLink className={(e)=>e.isActive ? "text-red-500 font-semibold" : ""}  to='/recipe'>Recipes</NavLink>
            <NavLink className={(e)=>e.isActive ? "text-red-500 font-semibold" : ""} to='/create-recipe'>Create Recipes</NavLink>
          </div>
      </nav>
    </div>
  )
}

export default Nav