import React from 'react'
import { useForm } from 'react-hook-form';
import { nanoid } from 'nanoid'
import { Link, useNavigate } from 'react-router-dom';
import { asyncregisteruser } from '../store/actions/userActions';
import { useDispatch } from 'react-redux';

const Register = () => {

  const dispatch  = useDispatch();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()


  const RegisterHandeler = (user) => {
    user.id = nanoid();
    user.isAdmin = false;
    dispatch(asyncregisteruser(user));

    navigate('/login');


  }


  return (
    <form onSubmit={handleSubmit(RegisterHandeler)} className='flex flex-col w-1/2 items-start'>
      <input {...register("username")} type="text" placeholder='Enter the UserName' className='outline-0 border-b p-2 text-2xl mb-3' />

      <input {...register("email")} type="text" placeholder='Enter the Email' className='outline-0 border-b p-2 text-2xl mb-3' />

      <input {...register("password")} type="text" placeholder='Enter the Password' className='outline-0 border-b p-2 text-2xl mb-3' />
      <button className='mt-4 px-4 text-black font-semibold py-2 bg-orange-400 rounded'>Register</button>

      <p className='mt-5'>
        Already have an Account? <Link to='/login' className='text-blue-400'>Login</Link>
      </p>
    </form>
  )
}


export default Register;

