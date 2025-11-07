import React, { use, useContext, useState } from "react";
import { useForm } from 'react-hook-form';
import { UserDetailContext } from "../context/UserContext";

const ContactForm = ()=> {

    const [userDetails, setuserDetails] = useContext(UserDetailContext);
   const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()


    const handelClick  = (userdata)=>{
        const copyUser = [...userDetails];

        copyUser.push(userdata);

        setuserDetails(copyUser);

        console.log(userDetails)
    }
    
    
    localStorage.setItem('userDetails',JSON.stringify(userDetails))
  return (
    <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center px-4">
      <form onSubmit={handleSubmit(handelClick)} className="bg-[#111] p-8 rounded-2xl shadow-lg w-full max-w-md border border-gray-800 text-white">
        <h2 className="text-2xl font-semibold mb-6 text-center text-[#C9FF2F]">
          Contact Form
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            {...register('name')}
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full px-4 py-2 rounded-lg bg-transparent border border-gray-700 focus:border-[#C9FF2F] focus:outline-none"
          />
        </div>

         {/* Profile Iamge */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Profile Image
          </label>
          <input
           {...register('profileImage')}
            type="url"
            id="name"
            placeholder="Image URL"
            className="w-full px-4 py-2 rounded-lg bg-transparent border border-gray-700 focus:border-[#C9FF2F] focus:outline-none"
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            Phone Number
          </label>
          <input
           {...register('phone')}
            type="tel"
            id="phone"
            placeholder="Enter your phone number"
            className="w-full px-4 py-2 rounded-lg bg-transparent border border-gray-700 focus:border-[#C9FF2F] focus:outline-none"
          />
        </div>

        {/* Email */}
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
          {...register('email')}
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-lg bg-transparent border border-gray-700 focus:border-[#C9FF2F] focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#C9FF2F] text-black font-semibold py-2 rounded-lg hover:bg-lime-400 transition-all duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;