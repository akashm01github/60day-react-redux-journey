import { useContext, useState } from "react";
import { useForm } from "react-hook-form"
import { todoContext } from "../Wraper";

const Todo = () => {

    const [data, setData] = useContext(todoContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const submitHandeler = (usersData) => {
        const copyData = [...data];
        copyData.push(usersData);
        setData(copyData)

        reset()
    }

    console.log(data)



    return (
        <div>
            <form onSubmit={handleSubmit(submitHandeler)} className="flex flex-col justify-center items-center gap-5 py-20">
                <input {...register("username", { required: true })} type="text" placeholder='Enter the User Name' className="border outline-0 px-4 py-2 text-md rounded" />
                {errors.username && <span className="text-red-500 font-bold">Username is required</span>}

                <input {...register("email", { required: true })} type="text" placeholder='Enter the Email Id' className="border outline-0 px-4 py-2 text-md rounded" />
                {errors.email && <span className="text-red-500 font-bold">Email is required</span>}

                <input {...register("age", { required: true })} type="number" placeholder='Enter the Age' className="border outline-0 px-4 py-2 text-md rounded" />
                {errors.age && <span className="text-red-500 font-bold">Age is required</span>}
                <button className="bg-amber-400 px-10 py-2 rounded-2xl active:scale-90 transition-all cursor-pointer font-bold text-lg">Submit</button>
            </form>

            <hr />

            <div className="bg-amber-300 w-full py-20 flex flex-col justify-center items-center">
                <h1 className="text-2xl">Users Details</h1>
                {
                    data && data.length > 0 ? data.map((user,idx) => {
                        return <li key={idx}>{user.username}</li>
                    }) : ""
                }
            </div>
        </div>
    )
}

export default Todo