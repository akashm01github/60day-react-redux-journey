import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <nav className='flex justify-between bg-amber-300 px-5 py-2'>
            <h4 className='text-2xl font-bold'>Logo</h4>
            <div className='flex justify-center items-center gap-5'>
                <Link to='/home'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/products'>Products</Link>
                <Link to='/contact'>Contacts</Link>
            </div>
        </nav>
    </div>
  )
}

export default Nav