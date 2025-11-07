import React from 'react'
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <nav className=' py-8 px-5 flex justify-center items-center'>
                <div className='flex justify-center items-center gap-10 px-10 py-2 rounded-3xl order border-gray-800 bg-[#0B0B0B] w-fit text-white border'>
                    <NavLink to='/user-details' className='text-lg font-medium  text-center text-white'>UserDetails</NavLink>
                    <NavLink to='/register' className='ttext-lg font-medium   text-center text-white'>Register</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Nav