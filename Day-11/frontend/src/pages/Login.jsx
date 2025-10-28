import React from 'react'
import { useForm } from 'react-hook-form';
import { nanoid } from 'nanoid'
import { Link, useNavigate } from 'react-router-dom';
import { asyncloginuser } from '../store/actions/userActions';
import { useDispatch } from 'react-redux';

const Login = () => {

  const dispatch  = useDispatch();

  const navigate = useNavigate();



  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()


  const LoginHandeler = (user) => {
    user.id = nanoid();
    console.log(user)
    dispatch(asyncloginuser(user));
    // navigate('/')
    
  }


  return (
    <form onSubmit={handleSubmit(LoginHandeler)} className='flex flex-col w-1/2 items-start'>
  

      <input {...register("email")} type="text" placeholder='Enter the Email' className='outline-0 border-b p-2 text-2xl mb-3' />

      <input {...register("password")} type="text" placeholder='Enter the Password' className='outline-0 border-b p-2 text-2xl mb-3' />
      <button className='mt-4 px-4 text-black font-semibold py-2 bg-orange-400 rounded'>Log In</button>

      <p className='mt-5'>
        Don't have an Account? <Link to='/register' className='text-blue-400'>Register</Link>
      </p>
    </form>
  )
}

export default Login