import React, { useState } from 'react'
import { addTodo } from '../features/todo/todoSlice';
import { useDispatch } from 'react-redux';

const AddTodo = () => {

    const [input, setInput] = useState("");

    const dispatch = useDispatch();

    const todoHandeler = (e)=>{
        e.preventDefault();
        dispatch(addTodo(input));
    }


  return (
    <div>
        <form onSubmit={todoHandeler}>
            <input onChange={(e)=>setInput(e.target.value)} type="text" placeholder='Enter the Task' />
            <button>Add Task</button>
        </form>
    </div>
  )
}

export default AddTodo