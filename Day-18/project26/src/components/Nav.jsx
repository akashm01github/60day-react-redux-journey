import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Nav = () => {
  const navigate = useNavigate();

  const isLogedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate('/login')
  }



  return (
    <div className='flex justify-center items-center gap-10 py-6'>
      <nav className='border flex justify-center items-center gap-10 py-4 px-10 rounded-full'>
        {isLogedIn ? <><NavLink to='/'>Home</NavLink> <button onClick={handleLogout} className='text-red-500 font-semibold'>Logout</button> </> : <><NavLink to='/login'>Login</NavLink>
          <NavLink to='/register'>Register</NavLink></>}

      </nav>
    </div>
  )
}

export default Nav