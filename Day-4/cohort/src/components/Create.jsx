import React, { useContext, useState } from 'react';
import { nanoid } from 'nanoid'
import { DataContext } from '../context/UserContext';
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify';

const Create = () => {
    const { usersData, setusersData } = useContext(DataContext);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const submitHandeler = (data) => {
        console.log(data)

        data.id = nanoid();

        let x = [...usersData];

        x.push(data);

        setusersData(x);

        toast.success('Data Created')

        reset();
    }

    // console.log(errors.username.message)


    return (
        <div>
            {/* Creating Part */}
            <form onSubmit={handleSubmit(submitHandeler)} className='w-[300px] bg-[#FCF9EA] flex flex-col gap-4  border px-5 py-4 rounded'>
                <input {...register("username", {required:"User name Can't be Empty"})}  type="text" placeholder='Enter Your Name' className='px-4 py-2 outline-0 border rounded bg-[#BADFDB] text-black font-semibold' />
                {errors.username ? (<span className="text-red-500">{errors.username.message}</span>): null}
                <input {...register("age",{required: "Age Can not be Empty"})}  type="text" placeholder='Enter Your Age' className='px-4 py-2 outline-0 border rounded bg-[#BADFDB] text-black font-semibold' />
                {errors.age && (<span className="text-red-500">{errors.age.message}</span>)}
                <input {...register("proffesion",{required: "Profession Can not be Empty"})}  type="text" placeholder='Enter Your Proffesion' className='px-4 py-2 outline-0 border rounded bg-[#BADFDB] text-black font-semibold' />
                {errors.proffesion && (<span className="text-red-500">{errors.proffesion.message}</span>)}
                <button className='bg-[#FFA4A4] hover:bg-[#FA7070]  text-[#FCF9EA] px-4 py-2 rounded-xl font-semibold active:scale-90 transition-all cursor-pointer'>Submit</button>
            </form>
        </div>
    )
}

export default Create