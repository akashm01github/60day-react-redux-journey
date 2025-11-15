import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todoSlice';

const AddTask = () => {

    const [data, setData] = useState("");

    const dispatch = useDispatch();

    const addTaskHandeler = (e) => {
        e.preventDefault();
        dispatch(addTodo(data));
    }



    return (
        <div>
            <form onSubmit={addTaskHandeler} className='flex flex-col gap-10'>
                <input value={data} onChange={(e)=> setData(e.target.value)} className='border rounded text-lg py-1.5 px-5 outline-0' type="text" placeholder='Enter Your Task...' />
                <button className='border rounded text-lg  py-1.5 active:scale-90 cursor-pointer'>Add Task</button>
            </form>
        </div>
    )
}

export default AddTask