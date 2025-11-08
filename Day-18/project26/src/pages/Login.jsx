  import React, { useEffect } from 'react'
  import { useForm } from 'react-hook-form';
  import { useNavigate } from 'react-router-dom';

  const Login = () => {
    const navigate = useNavigate();

    const savedUser = JSON.parse(localStorage.getItem("userDetails"));



    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm()

    


    const loginHandeler = (loginData) => {
  

      const matchUser = savedUser.find((user)=>user.email == loginData.email && user.password == loginData.password);

      if(matchUser){
        localStorage.setItem("isLoggedIn",true);
        navigate('/');
      }
      else{
        console.log("In-Correct User Name and Password ")
      }

    }

   

    return (
      <div className='flex justify-center items-center'>
        <div className="w-full max-w-md bg-white border rounded-2xl shadow-lg p-8">
          <header className="mb-6 text-center">
            <h1 className="text-2xl font-semibold">Log In Your Account</h1>
          </header>


          <form onSubmit={handleSubmit(loginHandeler)} className="space-y-5" aria-label="register form">



            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input
                {...register("email")}
                name="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                aria-required="true"
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
                aria-required="true"
              />
              <p className="mt-2 text-xs text-gray-400">Must be at least 8 characters.</p>
            </div>


            <div>
              <button
                className="w-full scale-90 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
              >
                Log In
              </button>
            </div>


            <div className="text-center text-sm text-gray-500">
              Already have an account? <a href="#" className="text-indigo-600 underline">Register</a>
            </div>
          </form>
        </div>
      </div>
    )
  }

  export default Login