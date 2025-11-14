import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice';

const Todo = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.todos);
    // console.log(todos)
    return (
        <div>
            <h1>Task List</h1>
            {todos.map((todo) => {
                return <div key={todo.id} className='taskContainer'>
                    <li>{todo.text}</li>
                    <button onClick={()=>dispatch(removeTodo(todo.id))}>X</button>
                </div>
            })}
        </div>
    )
}

export default Todo