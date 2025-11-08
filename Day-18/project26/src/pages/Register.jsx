import React, { useEffect, useState } from 'react'

import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';


const Register = () => {

    const [usersData, setuserData] = useState([]);


    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()


    useEffect(() => {
        const savedUser = JSON.parse(localStorage.getItem("userDetails")) || [];
        setuserData(savedUser);
    }, [])


    const submitHandeler = (userData) => {

        const copyData = [...usersData];

        copyData.push(userData);

        setuserData(copyData);

        navigate('/login');

    }


    useEffect(() => {
        localStorage.setItem("userDetails", JSON.stringify(usersData));
    }, [usersData])






    return (
        <div className="flex items-center justify-center bg-gray-50 p-6">
            <div className="w-full max-w-md bg-white border rounded-2xl shadow-lg p-8">


                <header className="mb-6 text-center">
                    <h1 className="text-2xl font-semibold">Create an account</h1>
                    <p className="text-sm text-gray-500 mt-1">Enter your details to get started</p>
                </header>


                <form onSubmit={handleSubmit(submitHandeler)} className="space-y-5" aria-label="register form">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Full name
                        </label>
                        <input

                            {...register("name")}
                            type="text"
                            placeholder="John Doe"
                            className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"

                        />
                    </div>


                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email address
                        </label>
                        <input

                            {...register("email")}
                            type="email"
                            placeholder="you@example.com"
                            className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"

                        />
                    </div>


                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input

                            {...register("password")}
                            type="text"
                            placeholder="Enter a strong password"
                            className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                        />
                    </div>


                    <div>
                        <button

                            className="w-full py-2 rounded-lg bg-indigo-600 text-white font-medium active:scale-90 hover:bg-indigo-700 transition-colors"
                        >
                            Create account
                        </button>
                    </div>


                    <div className="text-center text-sm text-gray-500">
                        Already have an account? <a href="#" className="text-indigo-600 underline">Sign in</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register