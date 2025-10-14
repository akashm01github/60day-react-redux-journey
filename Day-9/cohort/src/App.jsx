import React from 'react'
import { useForm } from 'react-hook-form';

const App = () => {

   const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()


  const submitHandeler = (data)=>{
        console.log(data)
        reset()
  }



  return (
    <div>
      <form onSubmit={handleSubmit(submitHandeler)}>
        <input {...register("userName")} type="text" placeholder='Enter Your Name' />
        <input {...register("age")} type="text" placeholder='Enter Your Age' />
        <input {...register("city")} type="text" placeholder='Enter Your City' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App