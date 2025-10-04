import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <nav className='flex justify-between items-center bg-[#E5BEB5] px-4 py-5 '>
                <h2 className='text-2xl font-extrabold'>Logo</h2>
                <div className='flex justify-center items-center gap-4'>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/products'>Products</Link>
                    <Link to='/contact'>Contacts</Link>
                </div>
            </nav>
        </div>
    )
}

export default Nav