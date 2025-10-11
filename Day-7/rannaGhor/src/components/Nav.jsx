import React from 'react'
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <nav className='border py-3 px-6 rounded-lg text-xl  flex justify-center items-center gap-[10%]'>
                <NavLink className={(e) => e.isActive ? "text-yellow-300 font-semibold" : ""} to='/'>Home</NavLink>
                <NavLink className={(e) => e.isActive ? "text-yellow-300 font-semibold" : ""} to='/about'>About</NavLink>
                <NavLink className={(e) => e.isActive ? "text-yellow-300 font-semibold" : ""} to='/recipes'>Recipes</NavLink>
                <NavLink to="/create~recipe" className={({ isActive }) =>`border px-3 py-1 rounded ${isActive ? "text-yellow-400" : ""}`}>Create Recipe</NavLink>
            </nav>
        </div>
    )
}

export default Nav