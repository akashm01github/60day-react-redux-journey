import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { asynclogoutuser } from '../store/actions/userActions';

const Nav = () => {
    const user = useSelector((state) => state.userReducer.users);

    const dispatch  = useDispatch();

    const navigate  = useNavigate();

    // console.log(user)

    const LogoutHandeler = ()=>{
        dispatch(asynclogoutuser());
        navigate('/')
    }

    return (
        <nav className='flex mb-10 justify-center items-center gap-x-5 p-10'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/products'>Products</NavLink>
            {user ?
                <>
                    <NavLink to='/admin/create-product'>Create Product</NavLink>
                    <button onClick={()=>{LogoutHandeler()}} className='border px-2 py-1'>Log out</button>
                </> :
                <>
                    <NavLink to='/login'>Login</NavLink>
                </>
            }

        </nav>
    )
}

export default Nav