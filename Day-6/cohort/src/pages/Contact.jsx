import React, { useContext } from 'react'
import { ContactContext } from '../context/UserConext'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';




const Contact = () => {
  const { usersData, setusersData } = useContext(ContactContext);


  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const navigate = useNavigate()
  const submitHandeler = (data) => {
    let copyData = [...usersData];

    copyData.push(data);

    setusersData(copyData);

    reset();

    navigate('/about')
  }


  return (
    <div className=' px-6 py-4 flex justify-center items-center'>
      <form onSubmit={handleSubmit(submitHandeler)} className='flex flex-col w-[400px] gap-4 px-5 border py-3 rounded-lg bg-[#B4DEBD]'>
        <input {...register("name")} type="text" placeholder='Enter Your Name' className='border px-3 text-lg py-2 bg-[#F5F1DC] text-black outline-0 rounded' />
        <input {...register("age")} type="text" placeholder='Enter Your Age' className='border px-3 text-lg py-2 bg-[#F5F1DC] text-black outline-0 rounded' />
        <input {...register("email")} type="text" placeholder='Enter Your Email' className='border px-3 text-lg py-2 bg-[#F5F1DC] text-black outline-0 rounded' />
        <input {...register("profile_url")} type="url" placeholder='Enter Profile URL' className='border px-3 text-lg py-2 bg-[#F5F1DC] text-black outline-0 rounded' />
        <button className='border px-5 py-2 rounded-lg text-lg text-[#EEEEEE] bg-[#541212] font-semibold active:scale-80 transition-all cursor-pointer'>Submit</button>
      </form>
    </div>
  )
}

export default Contact