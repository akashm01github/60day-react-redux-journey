import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todoSlice';

const Tasks = () => {
    const todos = useSelector((state)=>state.todos.todos);

    const dispatch  = useDispatch();

    const renderData = todos.map((task)=>{
        return (
            <div key={task.id} className='flex items-center gap-4'>
                <li>{task.text}</li>
                <button onClick={()=>dispatch(removeTodo(task.id))} className='bg-red-500 text-white px-2  rounded-full'>X</button>
            </div>
        )
    })
  return (
    <div className='px-20 flex flex-col justify-center  py-2 gap-3'>
        <h1 className='text-3xl'>Pending Task</h1>
        {renderData}
    </div>
  )
}

export default Tasks