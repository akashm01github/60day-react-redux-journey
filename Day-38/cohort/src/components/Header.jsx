import React from 'react'
import { Link, NavLink } from 'react-router-dom';

import cartIcon from '../../public/cartIcon.png'

const Header = () => {
    return (
        <nav className='flex justify-between items-center px-10 py-2 bg-[#D9CFC7] sticky top-0 z-50'>
            <h1 className='text-xl font-black'>Shopify</h1>
            <div className='flex items-center gap-10 text-lg'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/cart" className=" p-4 relative">
                    <img className='w-10 h-10' src={cartIcon} alt="" />
                    <div className='border rounded-full py-1 px-2 text-xs bg-black text-white absolute bottom-10 left-8'> 
                        10
                    </div>
                </NavLink>
            </div>
        </nav>
    )
}

export default Header